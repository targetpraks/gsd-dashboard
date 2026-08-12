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
        elif unit == "nps":
            val = random.uniform(-20, 70)
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
# EBITDA metrics (departmental costing) — not in the contract yet
metrics["fin.ebitda"] = {
    "id": "fin.ebitda",
    "name": "EBITDA (basic)",
    "department": "fin",
    "layer": 2,
    "definition": "Earnings before interest, taxes, depreciation and amortisation. Revenue minus COGS minus operating expenditure.",
    "formula": "revenue - cogs - opex",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "higher_is_better",
    "target": {"mode": "per_brand", "values": {b["id"]: 0 for b in C["taxonomy"]["brands"]}},
    "thresholds": {"green": None, "amber": None, "red": None},
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": None,
    "impact_metric": False,
    "active": True,
    "note": "Basic EBITDA for departmental costing."
}
metrics["fin.ebitda_dept"] = {
    "id": "fin.ebitda_dept",
    "name": "EBITDA (department)",
    "department": "fin",
    "layer": 3,
    "definition": "Department-level EBITDA contribution for departmental costing.",
    "formula": "dept_revenue - dept_cogs - dept_opex",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "higher_is_better",
    "target": {"mode": "per_brand", "values": {b["id"]: 0 for b in C["taxonomy"]["brands"]}},
    "thresholds": {"green": None, "amber": None, "red": None},
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": None,
    "impact_metric": False,
    "active": True,
    "note": "Departmental costing — EBITDA per department."
}
metrics["fin.revenue_dept"] = {
    "id": "fin.revenue_dept",
    "name": "Department Revenue",
    "department": "fin",
    "layer": 3,
    "definition": "Revenue attributed to this department.",
    "formula": "sum(dept_revenue)",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "higher_is_better",
    "target": {"mode": "per_brand", "values": {b["id"]: 0 for b in C["taxonomy"]["brands"]}},
    "thresholds": {"green": None, "amber": None, "red": None},
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": None,
    "impact_metric": False,
    "active": True,
    "note": "Departmental costing — revenue per department."
}
metrics["fin.gross_margin_dept"] = {
    "id": "fin.gross_margin_dept",
    "name": "Department Gross Margin",
    "department": "fin",
    "layer": 3,
    "definition": "Gross margin percentage for this department.",
    "formula": "(dept_revenue - dept_cogs) / dept_revenue",
    "type": "lagging",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {"mode": "per_brand", "values": {b["id"]: 0 for b in C["taxonomy"]["brands"]}},
    "thresholds": {"green": None, "amber": None, "red": None},
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": None,
    "impact_metric": False,
    "active": True,
    "note": "Departmental costing — gross margin per department."
}
metrics["mkt.nps"] = {
    "id": "mkt.nps",
    "name": "Net Promoter Score",
    "department": "mkt",
    "layer": 1,
    "block": "Growth",
    "definition": "Promoters minus detractors. Would customers recommend us?",
    "formula": "promoters_pct - detractors_pct",
    "type": "lagging",
    "unit": "nps",
    "direction": "higher_is_better",
    "target": {"mode": "fixed", "value": 50},
    "thresholds": {"green": 50, "amber": 30, "red": 0},
    "cadence": "monthly",
    "source": "survey",
    "owner": "TBC",
    "framework_pillar": None,
    "impact_metric": False,
    "active": True,
    "note": "Main reporting feature — customer advocacy."
}
brands = {b["id"]: b for b in C["taxonomy"]["brands"]}
products = C["taxonomy"]["products"]["items"]

# ---- Business Unit structure (Ricardo's codes) ----
BU_STRUCTURE = [
    {"id": "fin", "code": "BU 1", "name": "FIN", "full": "BU 1 FIN", "north_star": "fin.runway"},
    {"id": "hr", "code": "BU 2", "name": "HRM", "full": "BU 2 HRM", "north_star": "hr.rev_per_fte"},
    {"id": "adm", "code": "BU 3", "name": "ADM", "full": "BU 3 ADM", "north_star": "impact.purpose_score"},
    {"id": "it", "code": "BU 4", "name": "ITC", "full": "BU 4 ITC", "north_star": "it.system_uptime"},
    {"id": "mkt", "code": "BU 5", "name": "MKT", "full": "BU 5 MKT", "north_star": "mkt.cost_per_lead"},
    {"id": "sal", "code": "BU 6", "name": "SAL", "full": "BU 6 SAL", "north_star": "sal.pipeline_coverage"},
    {"id": "ops1", "code": "BU 7", "name": "ZOR BO 1", "full": "BU 7 ZOR BO 1 (ACDC Express + Future Client)", "north_star": "ops.quality_score", "brands": ["acdc"]},
    {"id": "ops2", "code": "BU 8", "name": "ZOR BO 2", "full": "BU 8 ZOR BO 2 (The Local Farmer + Papa Pasta)", "north_star": "ops.quality_score", "brands": ["tlf", "papapasta"]},
]
depts = {d["id"]: d for d in BU_STRUCTURE}

# Map metric department → BU id
BU_MAP = {
    "fin": "fin",
    "hr": "hr",
    "impact": "adm",
    "it": "it",
    "mkt": "mkt",
    "sal": "sal",
    "ops": "ops1",  # default; UI picks ops2 for TLF/Papa Pasta
}

# ---- Generate readings ----
readings = []  # {metric_id, brand_id|product_id, period, value, target, status, vs_prior}

for m in C["metrics"]:
    mid = m["id"]
    is_funnel = mid.startswith("funnel.")
    if is_funnel:
        # per product, split by origin (INBOUND / OUTBOUND) per the Funnel Tracker
        for p in products:
            pid = p["id"]
            line = p["line"]
            # funnel.output_zar only for professional_services; output_locations only for fnd
            if mid == "funnel.output_zar" and line != "professional_services":
                continue
            if mid == "funnel.output_locations" and line != "fnd":
                continue
            for origin in ["inbound", "outbound"]:
                series = []
                for i, period in enumerate(MONTHS):
                    val = gen_value(m, pid, i)
                    # outbound is typically smaller than inbound for most products
                    if origin == "outbound":
                        val = int(val * random.uniform(0.2, 0.6))
                    tgt = target_for(m, pid)
                    st = status_for(val, tgt, m.get("thresholds"), m.get("direction", "higher_is_better"))
                    series.append({"period": period, "value": val, "target": tgt, "status": st})
                for i, period in enumerate(MONTHS):
                    vs = None
                    if i > 0:
                        vs = round(series[i]["value"] - series[i-1]["value"], 1)
                    readings.append({
                        "metric_id": mid, "product_id": pid, "origin": origin, "period": period,
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

# ---- EBITDA readings (brand-level) ----
for bid in brands:
    series = []
    for i, period in enumerate(MONTHS):
        val = random.uniform(-200000, 800000)
        val = int(round(val / 1000) * 1000)
        series.append({"period": period, "value": val})
    for i, period in enumerate(MONTHS):
        vs = None
        if i > 0:
            vs = round(series[i]["value"] - series[i-1]["value"], 1)
        readings.append({
            "metric_id": "fin.ebitda", "brand_id": bid, "period": period,
            "value": series[i]["value"], "target": 0,
            "status": "green" if series[i]["value"] >= 0 else "red",
            "vs_prior": vs
        })

# ---- NPS readings (brand-level) ----
for bid in brands:
    series = []
    for i, period in enumerate(MONTHS):
        val = random.uniform(-20, 70)
        series.append({"period": period, "value": round(val, 1)})
    for i, period in enumerate(MONTHS):
        vs = None
        if i > 0:
            vs = round(series[i]["value"] - series[i-1]["value"], 1)
        readings.append({
            "metric_id": "mkt.nps", "brand_id": bid, "period": period,
            "value": series[i]["value"], "target": 50,
            "status": "green" if series[i]["value"] >= 50 else ("amber" if series[i]["value"] >= 30 else "red"),
            "vs_prior": vs
        })

# ---- Department-level Revenue, Gross Margin, EBITDA (departmental costing) ----
# Every department gets the SAME three financial metrics: Revenue, Gross Margin, EBITDA
for bid in brands:
    for did in depts:
        # Department Revenue (positive)
        rev_series = []
        for i, period in enumerate(MONTHS):
            val = random.uniform(100000, 900000)
            val = int(round(val / 1000) * 1000)
            rev_series.append({"period": period, "value": val})
        # Department Gross Margin (percent)
        gm_series = []
        for i, period in enumerate(MONTHS):
            val = random.uniform(25, 75)
            gm_series.append({"period": period, "value": round(val, 1)})
        # Department EBITDA (can be negative)
        ebitda_series = []
        for i, period in enumerate(MONTHS):
            val = random.uniform(-150000, 500000)
            val = int(round(val / 1000) * 1000)
            ebitda_series.append({"period": period, "value": val})
        for i, period in enumerate(MONTHS):
            vs = None
            if i > 0:
                vs = round(rev_series[i]["value"] - rev_series[i-1]["value"], 1)
            readings.append({
                "metric_id": "fin.revenue_dept", "brand_id": bid, "dept_id": did, "period": period,
                "value": rev_series[i]["value"], "target": 0,
                "status": "green" if rev_series[i]["value"] >= 0 else "red",
                "vs_prior": vs
            })
            vs = None
            if i > 0:
                vs = round(gm_series[i]["value"] - gm_series[i-1]["value"], 1)
            readings.append({
                "metric_id": "fin.gross_margin_dept", "brand_id": bid, "dept_id": did, "period": period,
                "value": gm_series[i]["value"], "target": 0,
                "status": "green" if gm_series[i]["value"] >= 0 else "red",
                "vs_prior": vs
            })
            vs = None
            if i > 0:
                vs = round(ebitda_series[i]["value"] - ebitda_series[i-1]["value"], 1)
            readings.append({
                "metric_id": "fin.ebitda_dept", "brand_id": bid, "dept_id": did, "period": period,
                "value": ebitda_series[i]["value"], "target": 0,
                "status": "green" if ebitda_series[i]["value"] >= 0 else "red",
                "vs_prior": vs
            })

# ---- Plain-language formula explanations (shown on the dashboard) ----
FORMULA_EXPLANATIONS = {
    "fin.revenue": "Money earned this month.",
    "fin.gross_margin": "Profit after product costs.",
    "fin.net_burn": "Cash used this month.",
    "fin.runway": "Months of cash left.",
    "fin.dso": "Days customers take to pay.",
    "fin.opex_ratio": "Running costs vs income.",
    "fin.recurring_ratio": "Share of income that repeats.",
    "fin.ltv_cac": "Value of a customer vs cost to get them.",
    "fin.payback": "Months to earn back a customer's cost.",
    "fin.revenue_vs_plan": "Are we ahead of plan?",
    "hr.headcount": "Number of staff.",
    "hr.rev_per_fte": "Income per person.",
    "hr.attrition": "People leaving.",
    "hr.new_hire_90d": "New hires that work out.",
    "hr.team_satisfaction": "How happy the team is.",
    "hr.training_hours": "Learning hours per person.",
    "hr.playbook_coverage": "Roles with a written playbook.",
    "it.system_uptime": "Time systems are up.",
    "it.mttr_p1": "Hours to fix big outages.",
    "it.open_tickets": "Open support requests.",
    "it.automation_coverage": "Tasks done by machines.",
    "it.ai_adoption": "Team using AI tools.",
    "it.mfa_coverage": "Accounts with extra security.",
    "it.tech_debt": "How clean the code is.",
    "mkt.marketing_spend": "Money spent on marketing.",
    "mkt.cost_per_lead": "Cost of each lead.",
    "mkt.marketing_roi": "Return on marketing spend.",
    "mkt.brand_reach": "People who see us.",
    "mkt.help_first_content": "Free value pieces published.",
    "mkt.community_size": "Community members.",
    "mkt.nps": "Would customers recommend us?",
    "sal.pipeline": "Value of open deals.",
    "sal.pipeline_coverage": "Deals in the pipeline vs target.",
    "sal.deals_won": "Deals closed this month.",
    "sal.win_rate": "How often we win.",
    "sal.avg_deal_size": "Average deal value.",
    "sal.nrr": "Income kept from existing customers.",
    "sal.churn": "Customers lost.",
    "ops.output_units": "Units produced.",
    "ops.quality_score": "Quality rating.",
    "ops.delivery_on_time": "Deliveries on time.",
    "ops.csat": "Customer happiness.",
    "ops.unit_margin": "Profit per unit or site.",
    "ops.sop_compliance": "Following the playbook.",
    "founder.buyback_rate": "Hourly rate for delegation decisions.",
    "founder.production_pct": "Time on high-value work.",
    "founder.delegation_ratio": "Tasks handed off.",
    "founder.escalations": "Decisions needing the boss.",
    "founder.eliminated_tasks": "Tasks removed for good.",
    "founder.ladder_position": "How replaceable the role is.",
    "impact.people_helped": "People positively impacted.",
    "impact.purpose_score": "How clear the mission is.",
    "impact.jobs_sustained": "Jobs supported.",
    "funnel.leads": "New leads this month.",
    "funnel.conv_lead_to_opp": "Leads that qualify.",
    "funnel.opportunities": "Qualified opportunities.",
    "funnel.cost_per_opportunity": "Cost per qualified lead.",
    "funnel.conv_opp_to_close": "Opportunities that close.",
    "funnel.output_zar": "Closed business value.",
    "funnel.output_locations": "Franchise locations sold.",
    "fin.ebitda": "Profit before interest, tax, depreciation.",
    "fin.ebitda_dept": "Profit per department.",
    "fin.revenue_dept": "Money earned by this department.",
    "fin.gross_margin_dept": "Department profit after product costs.",
}

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
out.append("const GSD_FORMULA_EXPLANATIONS = " + json.dumps(FORMULA_EXPLANATIONS, indent=2) + ";")
out.append("const GSD_SIMULATED = true;")

os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, "w") as f:
    f.write("\n".join(out))

print(f"Wrote {OUT}")
print(f"  metrics: {len(metrics)}")
print(f"  brands: {len(brands)}")
print(f"  products: {len(products)}")
print(f"  readings: {len(readings)}")
