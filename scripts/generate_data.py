#!/usr/bin/env python3
"""
GSD Dashboard — dummy data generator.
Reads cerebro-v2.json (the canonical measurement contract) and emits
js/data.js with metric definitions, brand/product taxonomy, and 6 months
of deterministic simulated readings per brand (non-funnel) and per product
(funnel metrics). Statuses computed per the contract's RAG standard.
"""
import json, random, os, datetime

SRC = "/Users/rmmacbook/.hermes/profiles/work/cache/documents/doc_590ea9bd74db_cerebro-v2.json"
OUT = "/Users/rmmacbook/Developer/gsd-dashboard/js/data.js"

with open(SRC) as f:
    C = json.load(f)

random.seed(20260812)  # deterministic dummy data

MONTHS = ["2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08"]
CURRENT = MONTHS[-1]

def status_for(value, target, thresholds, direction):
    """Compute RAG status per contract: green >=100% target, amber 90-99%, red <90%."""
    if target is None or not isinstance(target, (int, float)):
        return "no_data"
    if direction == "lower_is_better":
        # invert: lower is better, so value <= target is green
        if value <= target:
            return "green"
        if value <= target * 1.1:
            return "amber"
        return "red"
    # higher_is_better
    if value >= target:
        return "green"
    if value >= target * 0.9:
        return "amber"
    return "red"

def gen_value(metric, brand_id, month_idx):
    """Generate a plausible dummy value for a metric."""
    unit = metric.get("unit", "")
    direction = metric.get("direction", "higher_is_better")
    target = metric.get("target", {})
    mode = target.get("mode", "fixed")
    tval = None
    if mode == "fixed":
        tval = target.get("value")
    elif mode == "per_brand":
        tval = target.get("values", {}).get(brand_id)
    elif mode == "expression":
        tval = 3.0 if "3" in str(target.get("value", "")) else 1.0
    elif mode == "trend":
        tval = None
    elif mode == "brand_specific":
        tval = None
    elif mode == "product_specific":
        tval = None
    elif mode == "vs_plan":
        tval = None
    elif mode == "recalculate":
        tval = None

    # base value around target with drift over months
    if tval is not None:
        base = float(tval)
        # drift: earlier months slightly worse, improving toward current
        drift = (month_idx - (len(MONTHS) - 1)) * 0.06
        noise = random.uniform(-0.12, 0.12)
        val = base * (1 + drift + noise)
    else:
        # no target: generate a plausible absolute number by unit
        if unit == "percent":
            val = random.uniform(55, 95)
        elif unit == "ZAR":
            val = random.uniform(80000, 900000)
        elif unit == "months":
            val = random.uniform(4, 16)
        elif unit == "ratio":
            val = random.uniform(1.2, 4.5)
        elif unit == "score_10":
            val = random.uniform(5.5, 9.2)
        elif unit == "score_5":
            val = random.uniform(1, 5)
        elif unit == "people":
            val = random.uniform(20, 500)
        elif unit == "leads":
            val = random.uniform(10, 120)
        elif unit == "opportunities":
            val = random.uniform(4, 40)
        elif unit == "deals":
            val = random.uniform(1, 12)
        elif unit == "franchise_locations":
            val = random.uniform(0, 6)
        elif unit == "tickets":
            val = random.uniform(2, 25)
        elif unit == "hours":
            val = random.uniform(1, 10)
        elif unit == "hours_per_person_month":
            val = random.uniform(1, 6)
        elif unit == "days":
            val = random.uniform(20, 60)
        elif unit == "count_per_week":
            val = random.uniform(2, 12)
        elif unit == "tasks_per_quarter":
            val = random.uniform(1, 7)
        elif unit == "pieces_per_month":
            val = random.uniform(1, 6)
        elif unit == "audience":
            val = random.uniform(500, 20000)
        elif unit == "ZAR_per_hour":
            val = random.uniform(150, 600)
        elif unit == "units_or_kg":
            val = random.uniform(80, 400)
        else:
            val = random.uniform(1, 100)

    # round sensibly
    if unit in ("percent", "ratio", "score_10", "score_5", "months", "days", "hours", "hours_per_person_month", "ZAR_per_hour"):
        val = round(val, 1)
    elif unit in ("ZAR",):
        val = int(round(val / 1000) * 1000)
    else:
        val = int(round(val))
    return val

def target_for(metric, brand_id):
    target = metric.get("target", {})
    mode = target.get("mode", "fixed")
    if mode == "fixed":
        return target.get("value")
    if mode == "per_brand":
        return target.get("values", {}).get(brand_id)
    if mode == "expression":
        return target.get("value")
    return None

# ---- Build metric map ----
metrics = {m["id"]: m for m in C["metrics"]}
brands = {b["id"]: b for b in C["taxonomy"]["brands"]}
products = C["taxonomy"]["products"]["items"]
depts = {d["id"]: d for d in C["taxonomy"]["departments"]}

# ---- Generate readings ----
readings = []  # {metric_id, brand_id|product_id, period, value, target, status, vs_prior}

for m in C["metrics"]:
    mid = m["id"]
    is_funnel = mid.startswith("funnel.")
    if is_funnel:
        # per product
        for p in products:
            pid = p["id"]
            line = p["line"]
            # funnel.output_zar only for professional_services; output_locations only for fnd
            if mid == "funnel.output_zar" and line != "professional_services":
                continue
            if mid == "funnel.output_locations" and line != "fnd":
                continue
            series = []
            for i, period in enumerate(MONTHS):
                val = gen_value(m, pid, i)
                tgt = target_for(m, pid)
                st = status_for(val, tgt, m.get("thresholds"), m.get("direction", "higher_is_better"))
                series.append({"period": period, "value": val, "target": tgt, "status": st})
            for i, period in enumerate(MONTHS):
                vs = None
                if i > 0:
                    vs = round(series[i]["value"] - series[i-1]["value"], 1)
                readings.append({
                    "metric_id": mid, "product_id": pid, "period": period,
                    "value": series[i]["value"], "target": series[i]["target"],
                    "status": series[i]["status"], "vs_prior": vs
                })
    else:
        # per brand (all brands, but respect focus where sensible — generate for all)
        for bid in brands:
            series = []
            for i, period in enumerate(MONTHS):
                val = gen_value(m, bid, i)
                tgt = target_for(m, bid)
                st = status_for(val, tgt, m.get("thresholds"), m.get("direction", "higher_is_better"))
                series.append({"period": period, "value": val, "target": tgt, "status": st})
            for i, period in enumerate(MONTHS):
                vs = None
                if i > 0:
                    vs = round(series[i]["value"] - series[i-1]["value"], 1)
                readings.append({
                    "metric_id": mid, "brand_id": bid, "period": period,
                    "value": series[i]["value"], "target": series[i]["target"],
                    "status": series[i]["status"], "vs_prior": vs
                })

# ---- Emit data.js ----
def js_str(s):
    return json.dumps(str(s))

out = []
out.append("// GSD Dashboard — generated data (DO NOT EDIT).")
out.append("// Source: cerebro-v2.json measurement contract.")
out.append("// Dummy/simulated data for development. To be wired to Zoho via FluxFlow.")
out.append("const CEREBRO = " + json.dumps(C, indent=2) + ";")
out.append("const GSD_METRICS = " + json.dumps(metrics, indent=2) + ";")
out.append("const GSD_BRANDS = " + json.dumps(brands, indent=2) + ";")
out.append("const GSD_PRODUCTS = " + json.dumps(products, indent=2) + ";")
out.append("const GSD_DEPTS = " + json.dumps(depts, indent=2) + ";")
out.append("const GSD_MONTHS = " + json.dumps(MONTHS) + ";")
out.append("const GSD_CURRENT = " + js_str(CURRENT) + ";")
out.append("const GSD_READINGS = " + json.dumps(readings) + ";")
out.append("const GSD_SIMULATED = true;")

os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, "w") as f:
    f.write("\n".join(out))

print(f"Wrote {OUT}")
print(f"  metrics: {len(metrics)}")
print(f"  brands: {len(brands)}")
print(f"  products: {len(products)}")
print(f"  readings: {len(readings)}")
