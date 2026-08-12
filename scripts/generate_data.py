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

# ---- Department-level EBITDA (departmental costing) ----
for bid in brands:
    for did in depts:
        series = []
        for i, period in enumerate(MONTHS):
            val = random.uniform(-150000, 500000)
            val = int(round(val / 1000) * 1000)
            series.append({"period": period, "value": val})
        for i, period in enumerate(MONTHS):
            vs = None
            if i > 0:
                vs = round(series[i]["value"] - series[i-1]["value"], 1)
            readings.append({
                "metric_id": "fin.ebitda_dept", "brand_id": bid, "dept_id": did, "period": period,
                "value": series[i]["value"], "target": 0,
                "status": "green" if series[i]["value"] >= 0 else "red",
                "vs_prior": vs
            })

# ---- Plain-language formula explanations (shown on the dashboard) ----
FORMULA_EXPLANATIONS = {
    "fin.revenue": "Sum of all revenue booked in the month, per brand.",
    "fin.gross_margin": "Revenue minus cost of goods sold, divided by revenue. How much of each Rand survives after direct product costs.",
    "fin.net_burn": "Cash out minus cash in for the month. Negative burn means the business is self-funding.",
    "fin.runway": "Cash balance divided by monthly net burn. How many months the business can run before cash runs out.",
    "fin.dso": "Accounts receivable divided by revenue, times days in the period. How long customers take to pay.",
    "fin.opex_ratio": "Operating expenditure divided by revenue. How much of each Rand goes to running the business.",
    "fin.recurring_ratio": "Recurring revenue divided by total revenue. How predictable the revenue base is.",
    "fin.ltv_cac": "Lifetime value divided by customer acquisition cost. How many Rands each acquisition Rand returns.",
    "fin.payback": "CAC divided by monthly gross margin per customer. Months to earn back the cost of acquiring a customer.",
    "fin.revenue_vs_plan": "Month-to-date actual revenue divided by month-to-date budget. Ahead of or behind plan?",
    "hr.headcount": "Count of active employees in FTE.",
    "hr.rev_per_fte": "Trailing twelve-month revenue divided by FTE headcount. Revenue productivity per person.",
    "hr.attrition": "Voluntary leavers over twelve months divided by average headcount. How many people choose to leave.",
    "hr.new_hire_90d": "New hires still employed and meeting expectations at 90 days, divided by total hires.",
    "hr.team_satisfaction": "Average employee satisfaction survey score, 1-10.",
    "hr.training_hours": "Training hours divided by headcount. Hours of development per person per month.",
    "hr.playbook_coverage": "Roles with a current documented playbook divided by total roles.",
    "it.system_uptime": "Uptime minutes divided by total minutes in the period. Availability of production systems.",
    "it.mttr_p1": "Average hours to resolve priority-one incidents.",
    "it.open_tickets": "Count of support tickets still open.",
    "it.automation_coverage": "Automated processes divided by total repeatable processes.",
    "it.ai_adoption": "Team members actively using AI tools divided by headcount.",
    "it.mfa_coverage": "Accounts with MFA enforced divided by total accounts.",
    "it.tech_debt": "Manual 1-10 assessment of codebase health, where 10 is clean.",
    "mkt.marketing_spend": "Sum of all marketing spend in the period, per product.",
    "mkt.cost_per_lead": "Marketing spend divided by leads generated. What each lead costs.",
    "mkt.marketing_roi": "Funnel output value divided by marketing spend. Rands returned per Rand spent.",
    "mkt.brand_reach": "Total audience size across all owned channels.",
    "mkt.help_first_content": "Count of free value pieces published with no gate and no catch.",
    "mkt.community_size": "Total followers, members and engaged community across channels.",
    "sal.pipeline": "Total value of open deals.",
    "sal.pipeline_coverage": "Weighted open pipeline divided by next-period target. How much of the target is already in the pipeline.",
    "sal.deals_won": "Count of deals closed-won in the period.",
    "sal.win_rate": "Deals won divided by deals closed. How often we win what we close.",
    "sal.avg_deal_size": "Won value divided by won count. Average value of a closed deal.",
    "sal.nrr": "Opening revenue plus expansion minus churn and contraction, divided by opening revenue. Net revenue retention.",
    "sal.churn": "Customers lost divided by total customers.",
    "ops.output_units": "Sum of units or kilograms produced.",
    "ops.quality_score": "Average product or service quality rating, 1-10.",
    "ops.delivery_on_time": "Deliveries on time divided by total deliveries.",
    "ops.csat": "Average customer satisfaction rating, 1-10.",
    "ops.unit_margin": "Gross margin generated per operating unit or franchise site.",
    "ops.sop_compliance": "Score achieved on the standard operating audit.",
    "founder.buyback_rate": "Annual pre-tax income divided by annual hours worked, then divided by 4. The Rand-per-hour threshold below which a task should be delegated.",
    "founder.production_pct": "High-value hours divided by total hours worked. Share of time in the Production quadrant.",
    "founder.delegation_ratio": "Tasks delegated divided by tasks owned.",
    "founder.escalations": "Count of decisions in the week that could not be closed without Ricardo.",
    "founder.eliminated_tasks": "Count of low-value tasks removed from workflows entirely.",
    "founder.ladder_position": "Highest filled rung of the Replacement Ladder, scored 0-5.",
    "impact.people_helped": "Sum of people positively impacted — customers, franchisees, employees, community.",
    "impact.purpose_score": "Manual 1-10 assessment of mission clarity — can the team state the Dream unprompted?",
    "impact.jobs_sustained": "FTE headcount plus franchise-level employment supported by the group.",
    "funnel.leads": "Count of new leads generated in the month, per product.",
    "funnel.conv_lead_to_opp": "Qualified opportunities divided by leads. The SDR team's conversion rate.",
    "funnel.opportunities": "Count of leads qualified into opportunities.",
    "funnel.cost_per_opportunity": "Marketing spend divided by qualified opportunities produced.",
    "funnel.conv_opp_to_close": "Closed business divided by opportunities. The Dealmaker team's conversion rate.",
    "funnel.output_zar": "Sum of closed business value. Professional services only.",
    "funnel.output_locations": "Count of franchise locations sold. FND only — never expressed in Rand at funnel level.",
    "fin.ebitda": "Revenue minus COGS minus operating expenditure. Basic EBITDA.",
    "fin.ebitda_dept": "Department-level EBITDA contribution for departmental costing.",
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
