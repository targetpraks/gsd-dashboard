#!/usr/bin/env python3
"""
GSD Dashboard — dummy data generator.
Reads cerebro-v2.json (the canonical measurement contract) and emits
js/data.js with metric definitions, brand/product taxonomy, and 6 months
of deterministic simulated readings per brand (non-funnel) and per product
(funnel metrics). Statuses computed per the contract's RAG standard.
"""
import json, random, os, datetime

SRC = "/Users/rmmacbook/Developer/gsd-dashboard/cerebro-v2.json"
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
        # key-person dependency: target 0 is the ideal; generate realistic 0-4 for demo
        if unit == "functions" and base == 0:
            val = random.uniform(0, 4)
        else:
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
        elif unit == "functions":
            val = random.uniform(0, 5)
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
        elif unit == "kg":
            val = random.uniform(20, 400)
        elif unit == "subscriptions":
            val = random.uniform(5, 200)
        elif unit == "ZAR_per_gram":
            val = random.uniform(0.5, 5)
        elif unit == "locations":
            val = random.uniform(2, 40)
        elif unit == "units":
            val = random.uniform(200, 5000)
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

# ---- Build metric map ---- (impact metrics removed from scope per Ricardo)
IMPACT_IDS = {"impact.people_helped", "impact.purpose_score", "impact.jobs_sustained"}
metrics = {m["id"]: m for m in C["metrics"] if m["id"] not in IMPACT_IDS}
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
metrics["fin.cost_dept"] = {
    "id": "fin.cost_dept",
    "name": "Department Cost",
    "department": "fin",
    "layer": 3,
    "definition": "What the department actually spends — controllable, real for every BU.",
    "formula": "sum(dept_opex)",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "lower_is_better",
    "target": {"mode": "per_brand", "values": {b["id"]: 0 for b in C["taxonomy"]["brands"]}},
    "thresholds": {"green": None, "amber": None, "red": None},
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": None,
    "impact_metric": False,
    "active": True,
    "note": "Departmental costing — cost per department."
}
metrics["fin.cost_to_serve_dept"] = {
    "id": "fin.cost_to_serve_dept",
    "name": "Cost-to-Serve",
    "department": "fin",
    "layer": 3,
    "definition": "Department cost divided by group revenue — the universal efficiency ratio.",
    "formula": "dept_cost / group_revenue",
    "type": "lagging",
    "unit": "percent",
    "direction": "lower_is_better",
    "target": {"mode": "per_brand", "values": {b["id"]: 0 for b in C["taxonomy"]["brands"]}},
    "thresholds": {"green": None, "amber": None, "red": None},
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": None,
    "impact_metric": False,
    "active": True,
    "note": "Departmental costing — efficiency per department."
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
# ---- INFX Solutions project metrics (Ricardo's spec) ----
def _infx(id, name, definition, formula, unit, direction, target=0, note=""):
    return {
        "id": id, "name": name, "department": "ops", "layer": 3,
        "definition": definition, "formula": formula, "type": "lagging",
        "unit": unit, "direction": direction,
        "target": {"mode": "per_brand", "values": {b["id"]: target for b in C["taxonomy"]["brands"]}},
        "thresholds": {"green": None, "amber": None, "red": None},
        "cadence": "monthly", "source": "zoho_projects", "owner": "TBC",
        "framework_pillar": None, "impact_metric": False, "active": True, "note": note,
    }
for _id, _spec in {
    "infx.projects_completed": ("Projects Completed", "Projects actually completed and handed over.", "count(projects done)", "projects", "higher_is_better", "Delivery output."),
    "infx.projects_active": ("Active Projects", "Projects currently in progress.", "count(projects in progress)", "projects", "higher_is_better", "Current workload."),
    "infx.time_spent_active": ("Time Spent — Active Projects", "Hours logged against active projects.", "sum(hours logged)", "hours", "higher_is_better", "Effort on active work."),
    "infx.estimated_cost_active": ("Estimated Cost — Active Projects", "Current estimated cost of active projects.", "sum(estimated cost)", "ZAR", "higher_is_better", "Cost exposure."),
    "infx.deal_value_active": ("Deal Value — Active Projects", "Sold value of active projects.", "sum(deal value)", "ZAR", "higher_is_better", "Revenue locked in."),
    "infx.avg_labor_rate": ("Average Labor Rate", "Revenue per billed hour — the effective labor rate.", "billed_revenue / billed_hours", "ZAR_per_hour", "higher_is_better", "Rate quality."),
}.items():
    metrics[_id] = _infx(_id, *_spec)

# ---- Shared App metrics (FluxFlow + Divorced Dads — both applications) ----
def _app(id, name, definition, formula, unit, direction, target=0, note=""):
    return {
        "id": id, "name": name, "department": "sal", "layer": 3,
        "definition": definition, "formula": formula, "type": "lagging",
        "unit": unit, "direction": direction,
        "target": {"mode": "per_brand", "values": {b["id"]: target for b in C["taxonomy"]["brands"]}},
        "thresholds": {"green": None, "amber": None, "red": None},
        "cadence": "monthly", "source": "app_telemetry", "owner": "TBC",
        "framework_pillar": None, "impact_metric": False, "active": True, "note": note,
    }
for _id, _spec in {
    "app.clients_onboarded": ("New Clients Onboarded", "New clients brought onto the application.", "count(new client signups)", "clients", "higher_is_better", "Acquisition."),
    "app.total_clients": ("Total Clients", "Total active clients on the application.", "count(active clients)", "clients", "higher_is_better", "Installed base."),
    "app.client_growth": ("Client Growth", "Net growth in clients this period.", "new_clients - churned_clients", "clients", "higher_is_better", "Growth rate."),
    "app.data_handled": ("Data Handled", "Volume of data the application is processing.", "sum(data processed)", "records", "higher_is_better", "Platform load."),
}.items():
    metrics[_id] = _app(_id, *_spec)

# ---- Shared Franchise metrics (Papa Pasta + ACDC Express — franchise systems) ----
# Split: FRANCHISOR stats (relationship with franchisees) vs BRAND stats (client-facing)
def _franch(id, name, definition, formula, unit, direction, target=0, note=""):
    return {
        "id": id, "name": name, "department": "ops", "layer": 3,
        "definition": definition, "formula": formula, "type": "lagging",
        "unit": unit, "direction": direction,
        "target": {"mode": "per_brand", "values": {b["id"]: target for b in C["taxonomy"]["brands"]}},
        "thresholds": {"green": None, "amber": None, "red": None},
        "cadence": "monthly", "source": "franchise_ops", "owner": "TBC",
        "framework_pillar": None, "impact_metric": False, "active": True, "note": note,
    }
for _id, _spec in {
    # Franchisor stats
    "franch.locations": ("Franchise Locations", "Total operating franchise locations.", "count(locations)", "locations", "higher_is_better", "Franchisor — network size."),
    "franch.consultants_per_location": ("Service Consultants per Location", "Franchise service consultants divided by locations.", "consultants / locations", "ratio", "higher_is_better", "Franchisor — support coverage."),
    "franch.nps": ("Franchisor NPS", "Net Promoter Score of the franchisor — how franchisees rate the franchisor.", "promoters_pct - detractors_pct", "nps", "higher_is_better", "Franchisor — franchisee sentiment."),
    "franch.sop_compliance": ("Franchisor SOP Compliance", "Average SOP compliance across the network.", "avg(sop_audit_score)", "percent", "higher_is_better", "Franchisor — network discipline."),
    # Brand (client-facing) stats
    "franch.group_turnover": ("Group Turnover", "Total group turnover across all locations.", "sum(location_revenue)", "ZAR", "higher_is_better", "Brand — group revenue."),
    "franch.products_sold_qty": ("Products Sold — Quantity", "Total quantity of product sold across the network.", "sum(units_sold)", "units", "higher_is_better", "Brand — sales volume."),
    "franch.products_sold_turnover": ("Products Sold — Turnover", "Turnover from product sold across the network.", "sum(product_revenue)", "ZAR", "higher_is_better", "Brand — sales value."),
    "franch.brand_nps": ("Brand NPS", "Net Promoter Score of the brand — how customers rate the brand.", "promoters_pct - detractors_pct", "nps", "higher_is_better", "Brand — customer sentiment."),
    "franch.brand_csat": ("Brand CSAT", "Customer satisfaction with the brand, 1-10.", "avg(csat_score)", "score_10", "higher_is_better", "Brand — customer happiness."),
}.items():
    metrics[_id] = _franch(_id, *_spec)

# ---- The Local Farmer production metrics (Ricardo's spec) ----
def _tlf(id, name, definition, formula, unit, direction, target=0, note=""):
    return {
        "id": id, "name": name, "department": "ops", "layer": 3,
        "definition": definition, "formula": formula, "type": "lagging",
        "unit": unit, "direction": direction,
        "target": {"mode": "per_brand", "values": {b["id"]: target for b in C["taxonomy"]["brands"]}},
        "thresholds": {"green": None, "amber": None, "red": None},
        "cadence": "monthly", "source": "tlf_app", "owner": "TBC",
        "framework_pillar": None, "impact_metric": False, "active": True, "note": note,
    }
for _id, _spec in {
    "tlf.avg_rand_invoice": ("Average Rand per Invoice", "Average invoice value from TLF sales.", "revenue / invoices", "ZAR", "higher_is_better", "TLF sales economics."),
    "tlf.avg_rand_per_gram_mushroom": ("Avg Rand per Gram — Mushroom", "Average price per gram of mushrooms sold.", "mushroom_revenue / mushroom_grams", "ZAR_per_gram", "higher_is_better", "Mushroom unit economics."),
    "tlf.avg_rand_per_gram_microgreen": ("Avg Rand per Gram — Microgreens", "Average price per gram of microgreens sold.", "microgreen_revenue / microgreen_grams", "ZAR_per_gram", "higher_is_better", "Microgreen unit economics."),
    "tlf.yield_pct_mushroom": ("Yield % — Mushroom", "Actual yield vs expected yield for mushrooms.", "actual_yield / expected_yield", "percent", "higher_is_better", "Mushroom growing efficiency."),
    "tlf.yield_pct_microgreen": ("Yield % — Microgreens", "Actual yield vs expected yield for microgreens.", "actual_yield / expected_yield", "percent", "higher_is_better", "Microgreen growing efficiency."),
    "tlf.facility_utilization_mushroom": ("Facility Production % — Mushroom", "Racks/trays in use vs total available for mushrooms.", "trays_used / trays_available", "percent", "higher_is_better", "Mushroom facility utilization."),
    "tlf.facility_utilization_microgreen": ("Facility Production % — Microgreens", "Racks/trays in use vs total available for microgreens.", "trays_used / trays_available", "percent", "higher_is_better", "Microgreen facility utilization."),
    "tlf.subscriptions_loaded": ("Subscriptions Loaded", "Active subscription customers loaded.", "count(active_subscriptions)", "subscriptions", "higher_is_better", "TLF subscription base."),
    "tlf.subscription_retention": ("Subscription Retention", "Share of subscription customers retained.", "retained / total_subscribers", "percent", "higher_is_better", "Subscription stickiness."),
    "tlf.rand_per_subscription": ("Rand per Subscription", "Revenue earned per active subscription.", "subscription_revenue / count(active_subscriptions)", "ZAR", "higher_is_better", "Subscription value per subscriber."),
    "tlf.total_yield_mushroom": ("Total Yield — Mushroom", "Total kilograms of mushrooms grown.", "sum(mushroom_kg)", "kg", "higher_is_better", "Mushroom production volume."),
    "tlf.total_yield_microgreen": ("Total Yield — Microgreens", "Total kilograms of microgreens grown.", "sum(microgreen_kg)", "kg", "higher_is_better", "Microgreen production volume."),
}.items():
    metrics[_id] = _tlf(_id, *_spec)

# ---- New operational metrics (Ricardo's spec) ----
def _m(id, name, dept, definition, formula, unit, direction, target=0, note=""):
    return {
        "id": id, "name": name, "department": dept, "layer": 3,
        "definition": definition, "formula": formula, "type": "lagging",
        "unit": unit, "direction": direction,
        "target": {"mode": "per_brand", "values": {b["id"]: target for b in C["taxonomy"]["brands"]}},
        "thresholds": {"green": None, "amber": None, "red": None},
        "cadence": "monthly", "source": "manual_capture", "owner": "TBC",
        "framework_pillar": None, "impact_metric": False, "active": True, "note": note,
    }

for _id, _spec in {
    "hr.interviews_done": ("Interviews Done", "hr", "Interviews conducted for open roles.", "count(interviews)", "interviews", "higher_is_better", "Recruitment pipeline."),
    "hr.people_recruited": ("People Recruited", "hr", "New hires brought on board.", "count(hires)", "people", "higher_is_better", "Recruitment output."),
    "hr.training_hours_completed": ("Training Hours Completed", "hr", "Training hours actually completed.", "sum(training_hours_completed)", "hours", "higher_is_better", "Specialized training department."),
    "hr.curriculum_completion_pct": ("Curriculum Completion", "hr", "Percentage of the training curriculum completed.", "curriculum_done / curriculum_total", "percent", "higher_is_better", "Training curriculum progress."),
    "adm.projects_overdue": ("Projects Overdue", "impact", "Projects past their due date.", "count(projects where overdue)", "projects", "lower_is_better", "ADM project control."),
    "adm.projects_overdue_rate": ("Projects Overdue Rate", "impact", "Share of projects running late.", "overdue / total_projects", "percent", "lower_is_better", "How often projects run late."),
    "adm.projects_completed": ("Projects Completed", "impact", "Projects finished in the period.", "count(projects done)", "projects", "higher_is_better", "ADM delivery."),
    "adm.inbox_unread": ("Inbox Unread", "impact", "Unread messages across the team's Zoho inbox.", "count(unread)", "messages", "lower_is_better", "Zoho inbox hygiene."),
    "adm.inbox_response_time": ("Inbox Response Time", "impact", "How fast the team reads and responds to inbox messages.", "avg(response_time)", "hours", "lower_is_better", "Zoho inbox responsiveness."),
    "adm.zeestore_turnover": ("ZeeStore Turnover", "impact", "ZeeStore sales turnover.", "sum(zeestore_revenue)", "ZAR", "higher_is_better", "ZeeStore responsibility."),
    "mkt.total_posts": ("Total Posts Created", "mkt", "All posts published across channels.", "count(posts)", "posts", "higher_is_better", "Content output."),
    "mkt.video_posts": ("Video Posts Created", "mkt", "Video posts published.", "count(video_posts)", "posts", "higher_is_better", "Video content output."),
    "mkt.email_campaigns": ("Email Campaigns Sent", "mkt", "Email campaigns sent out.", "count(campaigns)", "campaigns", "higher_is_better", "Email marketing volume."),
    "mkt.email_open_rate": ("Email Open Rate", "mkt", "Share of emails opened.", "opened / sent", "percent", "higher_is_better", "Email marketing effectiveness."),
    "sal.calls_logged": ("Calls Logged", "sal", "Sales calls logged in the period.", "count(calls)", "calls", "higher_is_better", "Sales activity."),
    "sal.avg_call_time": ("Average Call Time", "sal", "Average duration of logged calls.", "total_call_minutes / count(calls)", "minutes", "higher_is_better", "Sales call quality."),
    "ops.site_visits": ("Site Visits", "ops", "Franchise site visits completed.", "count(site_visits)", "visits", "higher_is_better", "Franchise support visits."),
    "ops.avg_site_visits_per_location": ("Avg Site Visits per Location", "ops", "Average visits per location — catches over-visiting one site.", "site_visits / locations", "visits_per_location", "band", "Visit balance."),
    "ops.brc_completed": ("BRC Completed", "ops", "Business Requirement Checklists completed.", "count(brc_done)", "checklists", "higher_is_better", "BRC compliance."),
    "ops.brc_score": ("BRC Score", "ops", "Average score on the Business Requirement Checklist.", "avg(brc_score)", "percent", "higher_is_better", "BRC quality."),
    "ops.ticket_resolution_rate": ("Ticket Resolution Rate", "ops", "Franchise tickets resolved on time.", "resolved / total_tickets", "percent", "higher_is_better", "Franchise ticket support."),
    "ops.ticket_response_time": ("Ticket Response Time", "ops", "How fast franchise tickets get a response.", "avg(response_time)", "hours", "lower_is_better", "Franchise ticket responsiveness."),
    "ops.success_tracker": ("Success Tracker", "ops", "Success tracker score for franchise support.", "avg(success_score)", "score_10", "higher_is_better", "Franchise success tracking."),
    "ops.letters_of_concern": ("Letters of Concern", "ops", "Letters of concern sent to franchisees.", "count(letters)", "letters", "lower_is_better", "Franchise discipline."),
}.items():
    metrics[_id] = _m(_id, *_spec)

# Department NPS — internal + external, keyed by dept
metrics["nps.internal_dept"] = {
    "id": "nps.internal_dept", "name": "Internal NPS", "department": "mkt", "layer": 2,
    "definition": "Internal Net Promoter Score for this department — would the team recommend working here?",
    "formula": "promoters_pct - detractors_pct", "type": "lagging", "unit": "nps",
    "direction": "higher_is_better",
    "target": {"mode": "fixed", "value": 50},
    "thresholds": {"green": 50, "amber": 30, "red": 0},
    "cadence": "monthly", "source": "survey", "owner": "TBC",
    "framework_pillar": None, "impact_metric": False, "active": True,
    "note": "Department NPS — internal."
}
metrics["nps.external_dept"] = {
    "id": "nps.external_dept", "name": "External NPS", "department": "mkt", "layer": 2,
    "definition": "External Net Promoter Score for this department — would customers recommend working with us?",
    "formula": "promoters_pct - detractors_pct", "type": "lagging", "unit": "nps",
    "direction": "higher_is_better",
    "target": {"mode": "fixed", "value": 50},
    "thresholds": {"green": 50, "amber": 30, "red": 0},
    "cadence": "monthly", "source": "survey", "owner": "TBC",
    "framework_pillar": None, "impact_metric": False, "active": True,
    "note": "Department NPS — external."
}
brands = {b["id"]: b for b in C["taxonomy"]["brands"]}
products = C["taxonomy"]["products"]["items"]

# ---- Business Unit structure (Ricardo's codes) ----
BU_STRUCTURE = [
    {"id": "fin", "code": "BU 1", "name": "FIN", "full": "BU 1 FIN", "north_star": "fin.runway"},
    {"id": "hr", "code": "BU 2", "name": "HRM", "full": "BU 2 HRM", "north_star": "hr.rev_per_fte"},
    {"id": "adm", "code": "BU 3", "name": "ADM", "full": "BU 3 ADM", "north_star": "adm.projects_completed"},
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
    if mid in IMPACT_IDS:
        continue  # removed from scope per Ricardo — no people-helped / purpose / jobs metrics
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

# ---- New operational metric readings (Ricardo's spec) ----
# These metrics are per brand (except dept NPS which is per brand × dept)
NEW_METRIC_IDS = [
    "hr.interviews_done", "hr.people_recruited", "hr.training_hours_completed", "hr.curriculum_completion_pct",
    "adm.projects_overdue", "adm.projects_overdue_rate", "adm.projects_completed",
    "adm.inbox_unread", "adm.inbox_response_time", "adm.zeestore_turnover",
    "mkt.total_posts", "mkt.video_posts", "mkt.email_campaigns", "mkt.email_open_rate",
    "sal.calls_logged", "sal.avg_call_time",
    "ops.site_visits", "ops.avg_site_visits_per_location", "ops.brc_completed", "ops.brc_score",
    "ops.ticket_resolution_rate", "ops.ticket_response_time", "ops.success_tracker", "ops.letters_of_concern",
    "tlf.avg_rand_invoice", "tlf.avg_rand_per_gram_mushroom", "tlf.avg_rand_per_gram_microgreen",
    "tlf.yield_pct_mushroom", "tlf.yield_pct_microgreen",
    "tlf.facility_utilization_mushroom", "tlf.facility_utilization_microgreen",
    "tlf.subscriptions_loaded", "tlf.subscription_retention", "tlf.rand_per_subscription",
    "tlf.total_yield_mushroom", "tlf.total_yield_microgreen",
    "infx.projects_completed", "infx.projects_active", "infx.time_spent_active",
    "infx.estimated_cost_active", "infx.deal_value_active", "infx.avg_labor_rate",
    "app.clients_onboarded", "app.total_clients", "app.client_growth", "app.data_handled",
    "franch.locations", "franch.consultants_per_location", "franch.nps", "franch.sop_compliance",
    "franch.group_turnover", "franch.products_sold_qty", "franch.products_sold_turnover", "franch.brand_nps", "franch.brand_csat",
]
for mid in NEW_METRIC_IDS:
    m = metrics[mid]
    for bid in brands:
        series = []
        for i, period in enumerate(MONTHS):
            unit = m["unit"]
            if unit == "percent":
                val = random.uniform(40, 98)
            elif unit == "ZAR":
                val = random.uniform(50000, 900000)
            elif unit == "hours":
                val = random.uniform(2, 60)
            elif unit == "minutes":
                val = random.uniform(5, 45)
            elif unit == "score_10":
                val = random.uniform(4, 9.5)
            elif unit == "visits_per_location":
                val = random.uniform(0.5, 4)
            elif unit == "nps":
                val = random.uniform(-10, 70)
            else:
                val = random.uniform(1, 200)
            if unit in ("percent", "score_10", "visits_per_location", "nps", "ZAR_per_gram"):
                val = round(val, 1)
            else:
                val = int(round(val))
            series.append({"period": period, "value": val})
        for i, period in enumerate(MONTHS):
            vs = None
            if i > 0:
                vs = round(series[i]["value"] - series[i-1]["value"], 1)
            readings.append({
                "metric_id": mid, "brand_id": bid, "period": period,
                "value": series[i]["value"], "target": 0,
                "status": "green" if series[i]["value"] >= 0 else "red",
                "vs_prior": vs
            })

# ---- Department NPS (internal + external) per brand × dept ----
for nps_id in ["nps.internal_dept", "nps.external_dept"]:
    for bid in brands:
        for did in depts:
            series = []
            for i, period in enumerate(MONTHS):
                val = random.uniform(-10, 70)
                series.append({"period": period, "value": round(val, 1)})
            for i, period in enumerate(MONTHS):
                vs = None
                if i > 0:
                    vs = round(series[i]["value"] - series[i-1]["value"], 1)
                readings.append({
                    "metric_id": nps_id, "brand_id": bid, "dept_id": did, "period": period,
                    "value": series[i]["value"], "target": 50,
                    "status": "green" if series[i]["value"] >= 50 else ("amber" if series[i]["value"] >= 30 else "red"),
                    "vs_prior": vs
                })

# ---- Department-level Cost, Cost-to-Serve, EBITDA (departmental costing) ----
# Every department gets the SAME three financial metrics: Cost, Cost-to-Serve, EBITDA
for bid in brands:
    for did in depts:
        # Department Cost (positive spend)
        cost_series = []
        for i, period in enumerate(MONTHS):
            val = random.uniform(50000, 400000)
            val = int(round(val / 1000) * 1000)
            cost_series.append({"period": period, "value": val})
        # Cost-to-Serve (percent of group revenue)
        cts_series = []
        for i, period in enumerate(MONTHS):
            val = random.uniform(1, 12)
            cts_series.append({"period": period, "value": round(val, 1)})
        # Department EBITDA (can be negative)
        ebitda_series = []
        for i, period in enumerate(MONTHS):
            val = random.uniform(-150000, 500000)
            val = int(round(val / 1000) * 1000)
            ebitda_series.append({"period": period, "value": val})
        for i, period in enumerate(MONTHS):
            vs = None
            if i > 0:
                vs = round(cost_series[i]["value"] - cost_series[i-1]["value"], 1)
            readings.append({
                "metric_id": "fin.cost_dept", "brand_id": bid, "dept_id": did, "period": period,
                "value": cost_series[i]["value"], "target": 0,
                "status": "green" if cost_series[i]["value"] >= 0 else "red",
                "vs_prior": vs
            })
            vs = None
            if i > 0:
                vs = round(cts_series[i]["value"] - cts_series[i-1]["value"], 1)
            readings.append({
                "metric_id": "fin.cost_to_serve_dept", "brand_id": bid, "dept_id": did, "period": period,
                "value": cts_series[i]["value"], "target": 0,
                "status": "green" if cts_series[i]["value"] >= 0 else "red",
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
    "fin.cost_dept": "What this department spends.",
    "fin.cost_to_serve_dept": "Department cost vs group revenue.",
    "hr.interviews_done": "Interviews conducted.",
    "hr.people_recruited": "New hires brought on.",
    "hr.training_hours_completed": "Training hours actually done.",
    "hr.curriculum_completion_pct": "Share of training curriculum done.",
    "adm.projects_overdue": "Projects running late.",
    "adm.projects_overdue_rate": "How often projects run late.",
    "adm.projects_completed": "Projects finished.",
    "adm.inbox_unread": "Unread inbox messages.",
    "adm.inbox_response_time": "Hours to respond to inbox.",
    "adm.zeestore_turnover": "ZeeStore sales.",
    "mkt.total_posts": "Posts published.",
    "mkt.video_posts": "Video posts published.",
    "mkt.email_campaigns": "Email campaigns sent.",
    "mkt.email_open_rate": "Share of emails opened.",
    "sal.calls_logged": "Sales calls logged.",
    "sal.avg_call_time": "Average call length.",
    "ops.site_visits": "Franchise site visits.",
    "ops.avg_site_visits_per_location": "Visits per location.",
    "ops.brc_completed": "BRC checklists done.",
    "ops.brc_score": "BRC average score.",
    "ops.ticket_resolution_rate": "Franchise tickets resolved.",
    "ops.ticket_response_time": "Hours to respond to tickets.",
    "ops.success_tracker": "Franchise success score.",
    "ops.letters_of_concern": "Letters sent to franchisees.",
    "nps.internal_dept": "Would the team recommend working here?",
    "nps.external_dept": "Would customers recommend working with us?",
    "tlf.avg_rand_invoice": "Average invoice value.",
    "tlf.avg_rand_per_gram_mushroom": "Price per gram of mushrooms.",
    "tlf.avg_rand_per_gram_microgreen": "Price per gram of microgreens.",
    "tlf.yield_pct_mushroom": "Mushrooms grown vs expected.",
    "tlf.yield_pct_microgreen": "Microgreens grown vs expected.",
    "tlf.facility_utilization_mushroom": "Racks in use vs available.",
    "tlf.facility_utilization_microgreen": "Trays in use vs available.",
    "tlf.subscriptions_loaded": "Active subscriptions.",
    "tlf.subscription_retention": "Subscriptions kept.",
    "tlf.rand_per_subscription": "Revenue per active subscription.",
    "tlf.total_yield_mushroom": "Kg of mushrooms grown.",
    "tlf.total_yield_microgreen": "Kg of microgreens grown.",
    "infx.projects_completed": "Projects handed over.",
    "infx.projects_active": "Projects in progress.",
    "infx.time_spent_active": "Hours on active projects.",
    "infx.estimated_cost_active": "Estimated cost of active work.",
    "infx.deal_value_active": "Sold value of active work.",
    "infx.avg_labor_rate": "Revenue per billed hour.",
    "app.clients_onboarded": "New clients signed up.",
    "app.total_clients": "Active clients on the app.",
    "app.client_growth": "Net client growth.",
    "app.data_handled": "Data the app is processing.",
    "franch.locations": "Operating franchise locations.",
    "franch.consultants_per_location": "Consultants per location.",
    "franch.nps": "Franchisees rating the franchisor.",
    "franch.sop_compliance": "Network SOP discipline.",
    "franch.group_turnover": "Total group revenue.",
    "franch.products_sold_qty": "Units sold across the network.",
    "franch.products_sold_turnover": "Revenue from product sold.",
    "franch.brand_nps": "Customers rating the brand.",
    "franch.brand_csat": "Customer happiness with the brand.",
    "ops.key_person_dependency": "Critical functions that fall back to the owner.",
    "fin.cash_on_cash": "Cash profit vs cash invested.",
    "acq.deals_sourced": "Acquisition opportunities found.",
    "acq.deals_in_diligence": "Deals being evaluated.",
    "acq.deals_closed": "Acquisitions completed.",
    "acq.seller_financing_pct": "Share of deal financed by the seller.",
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
