// GSD Dashboard — generated data (DO NOT EDIT).
// Source: cerebro-v2.json measurement contract.
// Dummy/simulated data for development. To be wired to Zoho via FluxFlow.
const CEREBRO = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://infinitybrands.co.za/schemas/cerebro.json",
  "title": "CEREBRO \u2014 Infinity Group Measurement System",
  "version": "2.0.0",
  "description": "Single canonical measurement contract for the Infinity Group. Merges the Cerebro layered spec (v1.0), the Hermes business-measurement-system schema (v1.0.0), and the existing Sales & Marketing Funnel Tracker model. This file supersedes both predecessors. Any AI, agent or system reading, writing or reporting on portfolio metrics reads this and nothing else.",
  "supersedes": [
    {
      "source": "cerebro.json",
      "version": "1.0.0",
      "kept": "layer architecture, named owners, structured RAG thresholds, leading/lagging typing, operating cadence, 1-3-1 escalation, band targets, DDA governance note"
    },
    {
      "source": "business-measurement-system.schema.json (Hermes)",
      "version": "1.0.0",
      "kept": "brand focus_metrics matrix, framework_pillar tagging, severity-based alerting, data_sources map, implementation phase tracking, metric-library-not-duplicated approach"
    }
  ],
  "system": {
    "owner": "Ricardo Da Costa Maio",
    "status": "draft-for-ratification",
    "created": "2026-08-12",
    "timezone": "Africa/Johannesburg",
    "currency": "ZAR",
    "rag_standard": {
      "green": ">= 100% of target",
      "amber": "90-99% of target",
      "red": "< 90% of target"
    },
    "structural_rules": [
      "Every metric has exactly one named human owner. Never a department.",
      "Metrics are defined ONCE in the library and referenced by brands. No duplication per brand.",
      "Layer 1 is capped at 12. A thirteenth requires a deletion.",
      "Targets are structured objects, never strings. Agents must be able to evaluate them without parsing English.",
      "Impact metrics never excuse financial reds; financial greens never excuse impact reds.",
      "Two consecutive reds trigger a playbook review, not a performance conversation."
    ]
  },
  "framework": {
    "name": "Martell x Squibb",
    "pillars": [
      {
        "id": "martell",
        "name": "Dan Martell \u2014 Buy Back Your Time",
        "principle": "Time is the only non-renewable resource. Move hours into high-value work and systemise the rest.",
        "levers": [
          "eliminate",
          "automate",
          "delegate",
          "consolidate"
        ],
        "key_metrics": [
          "founder.buyback_rate",
          "founder.production_pct",
          "founder.escalations"
        ]
      },
      {
        "id": "squibb",
        "name": "Simon Squibb \u2014 Help First / Give Without Take",
        "principle": "Help people first, money follows. Commercial success is a byproduct of value genuinely delivered.",
        "pillars": [
          "purpose",
          "impact",
          "community"
        ],
        "key_metrics": [
          "impact.people_helped",
          "mkt.help_first_content",
          "impact.purpose_score"
        ]
      }
    ]
  },
  "taxonomy": {
    "brands": [
      {
        "id": "infinity",
        "name": "Infinity Brands",
        "role": "HQ / Holding",
        "status": "active",
        "priority": 2,
        "focus_metrics": [
          "founder.buyback_rate",
          "founder.delegation_ratio",
          "founder.escalations",
          "fin.net_burn",
          "hr.rev_per_fte",
          "impact.jobs_sustained"
        ]
      },
      {
        "id": "tlf",
        "name": "The Local Farmer",
        "role": "Farm / Supply + FND",
        "status": "active",
        "priority": 2,
        "focus_metrics": [
          "ops.output_units",
          "fin.gross_margin",
          "ops.quality_score",
          "ops.delivery_on_time",
          "impact.people_helped"
        ]
      },
      {
        "id": "infx",
        "name": "INFX Solutions",
        "role": "Zoho Implementation / Digitisation",
        "status": "active",
        "priority": 1,
        "focus_metrics": [
          "fin.revenue",
          "sal.nrr",
          "ops.delivery_on_time",
          "ops.csat",
          "fin.recurring_ratio"
        ]
      },
      {
        "id": "fluxflow",
        "name": "FluxFlow",
        "role": "ETL + Agentic AI Product",
        "status": "active_development",
        "priority": 1,
        "focus_metrics": [
          "fin.runway",
          "sal.pipeline",
          "it.automation_coverage",
          "it.ai_adoption",
          "sal.churn"
        ]
      },
      {
        "id": "divorced",
        "name": "Divorced Dads",
        "role": "Family Law Tech App",
        "status": "active_development",
        "priority": 2,
        "focus_metrics": [
          "fin.runway",
          "impact.purpose_score",
          "mkt.community_size",
          "impact.people_helped"
        ]
      },
      {
        "id": "papapasta",
        "name": "Papa Pasta",
        "role": "FND \u2014 Food Franchise",
        "status": "proposed",
        "priority": 1,
        "focus_metrics": [
          "ops.unit_margin",
          "ops.quality_score",
          "fin.gross_margin",
          "impact.people_helped"
        ],
        "note": "In the Funnel Tracker as an FND product but absent from both predecessor schemas. See reconciliation_gaps."
      },
      {
        "id": "acdc",
        "name": "ACDC Express",
        "role": "FND \u2014 Franchisor",
        "status": "proposed",
        "priority": 2,
        "focus_metrics": [
          "ops.unit_margin",
          "ops.sop_compliance",
          "impact.jobs_sustained"
        ],
        "note": "In the Funnel Tracker as an FND product but absent from both predecessor schemas."
      }
    ],
    "products": {
      "note": "The Funnel Tracker measures nine PRODUCTS. The measurement system measures BRANDS. These are different granularities and do not map one-to-one. Every product must resolve to a brand for roll-up.",
      "items": [
        {
          "id": "inf_consultancy",
          "name": "INF Consultancy",
          "line": "professional_services",
          "brand": "infinity",
          "output_unit": "ZAR"
        },
        {
          "id": "sla_finance",
          "name": "SLA \u2014 Finance",
          "line": "professional_services",
          "brand": "infinity",
          "output_unit": "ZAR"
        },
        {
          "id": "sla_hr",
          "name": "SLA \u2014 HR",
          "line": "professional_services",
          "brand": "infinity",
          "output_unit": "ZAR"
        },
        {
          "id": "sla_zeestore",
          "name": "SLA \u2014 ZeeStore",
          "line": "professional_services",
          "brand": "infinity",
          "output_unit": "ZAR"
        },
        {
          "id": "infx_solutions",
          "name": "INFX Solutions",
          "line": "professional_services",
          "brand": "infx",
          "output_unit": "ZAR"
        },
        {
          "id": "fluxflow",
          "name": "FluxFlow",
          "line": "professional_services",
          "brand": "fluxflow",
          "output_unit": "ZAR"
        },
        {
          "id": "acdc_express",
          "name": "ACDC Express",
          "line": "fnd",
          "brand": "acdc",
          "output_unit": "franchise_locations"
        },
        {
          "id": "tlf",
          "name": "The Local Farmer",
          "line": "fnd",
          "brand": "tlf",
          "output_unit": "franchise_locations"
        },
        {
          "id": "papa_pasta",
          "name": "Papa Pasta",
          "line": "fnd",
          "brand": "papapasta",
          "output_unit": "franchise_locations"
        }
      ],
      "unmapped_brands": [
        "divorced"
      ],
      "unmapped_note": "Divorced Dads has no funnel tracker product. It needs either a tenth funnel tab or an explicit exemption on record."
    },
    "departments": [
      {
        "id": "fin",
        "name": "Finance",
        "north_star": "fin.runway"
      },
      {
        "id": "hr",
        "name": "HR",
        "north_star": "hr.rev_per_fte"
      },
      {
        "id": "it",
        "name": "IT",
        "north_star": "it.system_uptime"
      },
      {
        "id": "mkt",
        "name": "Marketing",
        "north_star": "mkt.cost_per_lead"
      },
      {
        "id": "sal",
        "name": "Sales",
        "north_star": "sal.pipeline_coverage"
      },
      {
        "id": "ops",
        "name": "Brand Operations",
        "north_star": "ops.quality_score"
      },
      {
        "id": "founder",
        "name": "Founder Freedom",
        "north_star": "founder.escalations"
      },
      {
        "id": "impact",
        "name": "Purpose & Impact",
        "north_star": "impact.people_helped"
      }
    ],
    "teams": [
      {
        "id": "marketing",
        "name": "Marketing",
        "owns_funnel_stage": 1
      },
      {
        "id": "sdr",
        "name": "SDR",
        "owns_funnel_stage": 2
      },
      {
        "id": "dealmaker",
        "name": "Dealmaker",
        "owns_funnel_stage": 3
      }
    ]
  },
  "funnel_model": {
    "description": "The Sales & Marketing Funnel Tracker model, wired into the measurement system as the sales engine. Previously absent from both predecessor schemas.",
    "equation": "Leads \u00d7 Conversion % = Output",
    "grain": "per product, per month",
    "horizon_months": 24,
    "source_workbook": "Sales & Marketing Funnel Tracker (Zoho Sheet, 15 tabs)",
    "stages": [
      {
        "stage": 1,
        "team": "marketing",
        "input": "mkt.marketing_spend",
        "output": "funnel.leads",
        "conversion_out": "funnel.conv_lead_to_opp",
        "accountable_for": "volume and cost of leads"
      },
      {
        "stage": 2,
        "team": "sdr",
        "input": "funnel.leads",
        "output": "funnel.opportunities",
        "conversion_out": "funnel.conv_opp_to_close",
        "accountable_for": "qualification quality"
      },
      {
        "stage": 3,
        "team": "dealmaker",
        "input": "funnel.opportunities",
        "output": "funnel.output",
        "conversion_out": null,
        "accountable_for": "close rate and deal value"
      }
    ],
    "output_units": {
      "professional_services": {
        "unit": "ZAR",
        "metric": "funnel.output_zar"
      },
      "fnd": {
        "unit": "franchise_locations",
        "metric": "funnel.output_locations",
        "note": "FND products are NEVER measured in Rand at funnel level. Locations sold is the output. Rand follows later via ops.unit_margin."
      }
    },
    "scope_decisions_carried_forward": {
      "source_level_attribution": {
        "included": false,
        "reason": "Explicitly descoped at funnel tracker design stage"
      },
      "cycle_time_tracking": {
        "included": false,
        "reason": "Explicitly descoped at funnel tracker design stage. NOTE: cerebro v1.0 re-introduced sal.cycle_length in breach of this decision; removed in v2.0 pending an explicit reversal."
      },
      "zoho_crm_integration": {
        "included": false,
        "reason": "Deferred, not yet scoped"
      }
    }
  },
  "metrics": [
    {
      "id": "fin.revenue",
      "name": "Revenue (month)",
      "department": "fin",
      "layer": 2,
      "definition": "Monthly revenue booked, per brand.",
      "formula": "sum(revenue)",
      "type": "lagging",
      "unit": "ZAR",
      "direction": "higher_is_better",
      "target": {
        "mode": "brand_specific"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "zoho_books",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "fin.gross_margin",
      "name": "Gross Margin",
      "department": "fin",
      "layer": 2,
      "definition": "(Revenue \u2212 COGS) / Revenue.",
      "formula": "(revenue - cogs) / revenue",
      "type": "lagging",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "per_brand",
        "values": {
          "infx": 60,
          "fluxflow": 70,
          "divorced": 70,
          "infinity": 55,
          "tlf": 30,
          "papapasta": 65,
          "acdc": 25
        }
      },
      "thresholds": {
        "green": "target",
        "amber": "target * 0.9",
        "red": "below"
      },
      "cadence": "monthly",
      "source": "zoho_books",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true,
      "correction_note": "Hermes v1 applied a flat >=60% group-wide. A farm and a franchisor cannot carry software margins; a single target would show permanent red on TLF and ACDC and permanent green on nothing useful."
    },
    {
      "id": "fin.net_burn",
      "name": "Net Burn",
      "department": "fin",
      "layer": 2,
      "definition": "Monthly net cash outflow.",
      "formula": "cash_out - cash_in",
      "type": "lagging",
      "unit": "ZAR",
      "direction": "lower_is_better",
      "target": {
        "mode": "expression",
        "value": "< fin.revenue"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "zoho_books",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "fin.runway",
      "name": "Runway",
      "department": "fin",
      "layer": 1,
      "block": "Survival",
      "definition": "Cash balance divided by monthly net burn.",
      "formula": "cash_balance / net_burn",
      "type": "lagging",
      "unit": "months",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 12
      },
      "thresholds": {
        "green": 12,
        "amber": 6,
        "red": 0
      },
      "cadence": "monthly",
      "source": "zoho_books",
      "owner": "TBC",
      "framework_pillar": "martell",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "fin.dso",
      "name": "Debtor Days",
      "department": "fin",
      "layer": 3,
      "definition": "Average days to collect receivables.",
      "formula": "(accounts_receivable / revenue) * days_in_period",
      "type": "leading",
      "unit": "days",
      "direction": "lower_is_better",
      "target": {
        "mode": "fixed",
        "value": 30
      },
      "thresholds": {
        "green": 30,
        "amber": 45,
        "red": 999
      },
      "cadence": "weekly",
      "source": "zoho_books",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "fin.opex_ratio",
      "name": "Opex as % of Revenue",
      "department": "fin",
      "layer": 3,
      "definition": "Operating expenditure as a share of revenue.",
      "formula": "opex / revenue",
      "type": "lagging",
      "unit": "percent",
      "direction": "lower_is_better",
      "target": {
        "mode": "brand_specific"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "zoho_books",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "fin.recurring_ratio",
      "name": "Recurring Revenue Ratio",
      "department": "fin",
      "layer": 1,
      "block": "Growth",
      "definition": "Recurring revenue as a share of total revenue.",
      "formula": "recurring_revenue / total_revenue",
      "type": "lagging",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 40
      },
      "thresholds": {
        "green": 40,
        "amber": 30,
        "red": 0
      },
      "cadence": "monthly",
      "source": "zoho_books",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "fin.ltv_cac",
      "name": "LTV:CAC Ratio",
      "department": "fin",
      "layer": 2,
      "definition": "Lifetime value divided by customer acquisition cost.",
      "formula": "ltv / cac",
      "type": "lagging",
      "unit": "ratio",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 3.0
      },
      "thresholds": {
        "green": 3.0,
        "amber": 1.5,
        "red": 0
      },
      "cadence": "monthly",
      "source": "zoho_crm",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "fin.payback",
      "name": "CAC Payback Period",
      "department": "fin",
      "layer": 3,
      "definition": "CAC divided by monthly gross margin per customer.",
      "formula": "cac / monthly_gross_margin_per_customer",
      "type": "lagging",
      "unit": "months",
      "direction": "lower_is_better",
      "target": {
        "mode": "fixed",
        "value": 12
      },
      "thresholds": {
        "green": 12,
        "amber": 18,
        "red": 999
      },
      "cadence": "monthly",
      "source": "zoho_crm",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "fin.revenue_vs_plan",
      "name": "Revenue vs Plan",
      "department": "fin",
      "layer": 1,
      "block": "Growth",
      "definition": "Month-to-date actual revenue divided by month-to-date budget, all brands.",
      "formula": "sum(revenue_mtd) / sum(budget_mtd)",
      "type": "lagging",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 100
      },
      "thresholds": {
        "green": 100,
        "amber": 90,
        "red": 0
      },
      "cadence": "weekly",
      "source": "zoho_books",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "hr.headcount",
      "name": "Headcount",
      "department": "hr",
      "layer": 3,
      "definition": "Staff per brand, FTE.",
      "formula": "count(active_employees)",
      "type": "lagging",
      "unit": "people",
      "direction": "band",
      "target": {
        "mode": "vs_plan"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "zoho_people",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "hr.rev_per_fte",
      "name": "Revenue per FTE",
      "department": "hr",
      "layer": 1,
      "block": "Foundation",
      "definition": "Trailing twelve-month revenue divided by FTE headcount.",
      "formula": "revenue_ttm / fte_headcount",
      "type": "lagging",
      "unit": "ZAR",
      "direction": "higher_is_better",
      "target": {
        "mode": "trend",
        "value": "improve_yoy"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "zoho_books",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "hr.attrition",
      "name": "Voluntary Attrition (12m)",
      "department": "hr",
      "layer": 3,
      "definition": "Voluntary leavers as a share of average headcount over twelve months.",
      "formula": "voluntary_leavers_12m / avg_headcount_12m",
      "type": "lagging",
      "unit": "percent",
      "direction": "lower_is_better",
      "target": {
        "mode": "fixed",
        "value": 12
      },
      "thresholds": {
        "green": 12,
        "amber": 18,
        "red": 100
      },
      "cadence": "monthly",
      "source": "zoho_people",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "hr.new_hire_90d",
      "name": "90-Day New Hire Success",
      "department": "hr",
      "layer": 3,
      "definition": "New hires still employed and meeting expectations at ninety days.",
      "formula": "count(successful_90d) / count(hires)",
      "type": "leading",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 85
      },
      "thresholds": {
        "green": 85,
        "amber": 70,
        "red": 0
      },
      "cadence": "monthly",
      "source": "zoho_people",
      "owner": "TBC",
      "framework_pillar": "martell",
      "impact_metric": false,
      "active": true,
      "note": "Below 85% the cause is almost always hiring on interviews rather than paid trial work."
    },
    {
      "id": "hr.team_satisfaction",
      "name": "Team Satisfaction",
      "department": "hr",
      "layer": 2,
      "definition": "Employee satisfaction survey score, 1-10.",
      "formula": "avg(survey_score)",
      "type": "leading",
      "unit": "score_10",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 7.5
      },
      "thresholds": {
        "green": 7.5,
        "amber": 6.0,
        "red": 0
      },
      "cadence": "quarterly",
      "source": "survey",
      "owner": "TBC",
      "framework_pillar": "squibb",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "hr.training_hours",
      "name": "Training Hours",
      "department": "hr",
      "layer": 3,
      "definition": "Training hours per person per month.",
      "formula": "training_hours / headcount",
      "type": "leading",
      "unit": "hours_per_person_month",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 4
      },
      "thresholds": {
        "green": 4,
        "amber": 2,
        "red": 0
      },
      "cadence": "monthly",
      "source": "zoho_people",
      "owner": "TBC",
      "framework_pillar": "squibb",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "hr.playbook_coverage",
      "name": "Playbook Coverage",
      "department": "hr",
      "layer": 1,
      "block": "Foundation",
      "definition": "Roles with a current documented playbook divided by total roles.",
      "formula": "count(roles_with_current_playbook) / count(roles)",
      "type": "leading",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 80
      },
      "thresholds": {
        "green": 80,
        "amber": 60,
        "red": 0
      },
      "cadence": "monthly",
      "source": "coda",
      "owner": "TBC",
      "framework_pillar": "martell",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "it.system_uptime",
      "name": "System Uptime",
      "department": "it",
      "layer": 2,
      "definition": "Availability of production systems.",
      "formula": "uptime_minutes / total_minutes",
      "type": "lagging",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 99
      },
      "thresholds": {
        "green": 99,
        "amber": 97,
        "red": 0
      },
      "cadence": "monthly",
      "source": "infra_monitoring",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "it.mttr_p1",
      "name": "Mean Time to Resolve (P1)",
      "department": "it",
      "layer": 3,
      "definition": "Average hours to resolve priority-one incidents.",
      "formula": "avg(resolved_at - raised_at) where priority = P1",
      "type": "leading",
      "unit": "hours",
      "direction": "lower_is_better",
      "target": {
        "mode": "fixed",
        "value": 4
      },
      "thresholds": {
        "green": 4,
        "amber": 8,
        "red": 999
      },
      "cadence": "weekly",
      "source": "zoho_desk",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "it.open_tickets",
      "name": "Open Tickets",
      "department": "it",
      "layer": 3,
      "definition": "Support ticket backlog size.",
      "formula": "count(tickets where status = open)",
      "type": "leading",
      "unit": "tickets",
      "direction": "lower_is_better",
      "target": {
        "mode": "fixed",
        "value": 10
      },
      "thresholds": {
        "green": 10,
        "amber": 20,
        "red": 9999
      },
      "cadence": "weekly",
      "source": "zoho_desk",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "it.automation_coverage",
      "name": "Automation Coverage",
      "department": "it",
      "layer": 2,
      "definition": "Automated processes divided by total repeatable processes.",
      "formula": "count(automated) / count(repeatable)",
      "type": "leading",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 50
      },
      "thresholds": {
        "green": 50,
        "amber": 35,
        "red": 0
      },
      "cadence": "monthly",
      "source": "manual_capture",
      "owner": "TBC",
      "framework_pillar": "martell",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "it.ai_adoption",
      "name": "AI Adoption",
      "department": "it",
      "layer": 2,
      "definition": "Share of team actively using AI tools in their workflow.",
      "formula": "count(active_ai_users) / headcount",
      "type": "leading",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 40
      },
      "thresholds": {
        "green": 40,
        "amber": 25,
        "red": 0
      },
      "cadence": "monthly",
      "source": "manual_capture",
      "owner": "TBC",
      "framework_pillar": "martell",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "it.mfa_coverage",
      "name": "MFA Coverage",
      "department": "it",
      "layer": 3,
      "definition": "Accounts with multi-factor authentication enforced.",
      "formula": "count(accounts_with_mfa) / count(accounts)",
      "type": "leading",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 100
      },
      "thresholds": {
        "green": 100,
        "amber": 95,
        "red": 0
      },
      "cadence": "monthly",
      "source": "directory",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "it.tech_debt",
      "name": "Codebase Health Score",
      "department": "it",
      "layer": 3,
      "definition": "Codebase health rated 1-10 where 10 is clean.",
      "formula": "manual_assessment",
      "type": "leading",
      "unit": "score_10",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 7
      },
      "thresholds": {
        "green": 7,
        "amber": 5,
        "red": 0
      },
      "cadence": "quarterly",
      "source": "manual_capture",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true,
      "correction_note": "Hermes v1 defined 10 = clean but set target '< 5', which targets a broken codebase. Renamed and inverted so direction and target agree."
    },
    {
      "id": "mkt.marketing_spend",
      "name": "Marketing Spend",
      "department": "mkt",
      "layer": 2,
      "definition": "Total marketing spend in the period, per product.",
      "formula": "sum(marketing_spend)",
      "type": "leading",
      "unit": "ZAR",
      "direction": "band",
      "target": {
        "mode": "vs_plan"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "zoho_books",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true,
      "funnel_stage": 1
    },
    {
      "id": "mkt.cost_per_lead",
      "name": "Cost per Lead",
      "department": "mkt",
      "layer": 1,
      "block": "Growth",
      "definition": "Marketing spend divided by leads generated.",
      "formula": "mkt.marketing_spend / funnel.leads",
      "type": "lagging",
      "unit": "ZAR",
      "direction": "lower_is_better",
      "target": {
        "mode": "trend",
        "value": "decrease_qoq"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "calc",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true,
      "funnel_stage": 1
    },
    {
      "id": "mkt.marketing_roi",
      "name": "Marketing ROI",
      "department": "mkt",
      "layer": 2,
      "definition": "Output value attributable to marketing divided by marketing spend.",
      "formula": "funnel.output_zar / mkt.marketing_spend",
      "type": "lagging",
      "unit": "ratio",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 3.0
      },
      "thresholds": {
        "green": 3.0,
        "amber": 2.0,
        "red": 0
      },
      "cadence": "monthly",
      "source": "calc",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "mkt.brand_reach",
      "name": "Brand Reach",
      "department": "mkt",
      "layer": 3,
      "definition": "Total audience size across owned channels.",
      "formula": "sum(audience_all_channels)",
      "type": "leading",
      "unit": "audience",
      "direction": "higher_is_better",
      "target": {
        "mode": "trend",
        "value": "growing"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "social_analytics",
      "owner": "TBC",
      "framework_pillar": "squibb",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "mkt.help_first_content",
      "name": "Help-First Content",
      "department": "mkt",
      "layer": 2,
      "definition": "Free value pieces published with no gate and no catch.",
      "formula": "count(free_assets_published)",
      "type": "leading",
      "unit": "pieces_per_month",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 4
      },
      "thresholds": {
        "green": 4,
        "amber": 2,
        "red": 0
      },
      "cadence": "monthly",
      "source": "manual_capture",
      "owner": "TBC",
      "framework_pillar": "squibb",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "mkt.community_size",
      "name": "Community Size",
      "department": "mkt",
      "layer": 2,
      "definition": "Followers, members and engaged community across channels.",
      "formula": "sum(community_members)",
      "type": "leading",
      "unit": "people",
      "direction": "higher_is_better",
      "target": {
        "mode": "trend",
        "value": "growing"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "social_analytics",
      "owner": "TBC",
      "framework_pillar": "squibb",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "sal.pipeline",
      "name": "Pipeline Value",
      "department": "sal",
      "layer": 2,
      "definition": "Total value of open deals.",
      "formula": "sum(open_deal_value)",
      "type": "leading",
      "unit": "ZAR",
      "direction": "higher_is_better",
      "target": {
        "mode": "expression",
        "value": ">= 3 * monthly_target"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "weekly",
      "source": "zoho_crm",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "sal.pipeline_coverage",
      "name": "Pipeline Coverage",
      "department": "sal",
      "layer": 1,
      "block": "Growth",
      "definition": "Weighted open pipeline divided by next-period target.",
      "formula": "sum(pipeline_value * probability) / period_target",
      "type": "leading",
      "unit": "ratio",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 3.0
      },
      "thresholds": {
        "green": 3.0,
        "amber": 2.5,
        "red": 0
      },
      "cadence": "weekly",
      "source": "zoho_crm",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "sal.deals_won",
      "name": "Deals Won",
      "department": "sal",
      "layer": 2,
      "definition": "Closed-won deals in the period.",
      "formula": "count(deals where status = won)",
      "type": "lagging",
      "unit": "deals",
      "direction": "higher_is_better",
      "target": {
        "mode": "brand_specific"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "zoho_crm",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "sal.win_rate",
      "name": "Win Rate",
      "department": "sal",
      "layer": 3,
      "definition": "Deals won divided by deals closed.",
      "formula": "count(won) / count(closed)",
      "type": "lagging",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 25
      },
      "thresholds": {
        "green": 25,
        "amber": 18,
        "red": 0
      },
      "cadence": "monthly",
      "source": "zoho_crm",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "sal.avg_deal_size",
      "name": "Average Deal Size",
      "department": "sal",
      "layer": 3,
      "definition": "Won value divided by won count.",
      "formula": "sum(won_value) / count(won)",
      "type": "lagging",
      "unit": "ZAR",
      "direction": "higher_is_better",
      "target": {
        "mode": "trend",
        "value": "improve_qoq"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "zoho_crm",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "sal.nrr",
      "name": "Net Revenue Retention",
      "department": "sal",
      "layer": 2,
      "definition": "Revenue retained plus expanded from existing customers, over opening revenue.",
      "formula": "(opening + expansion - churn - contraction) / opening",
      "type": "lagging",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 100
      },
      "thresholds": {
        "green": 100,
        "amber": 90,
        "red": 0
      },
      "cadence": "monthly",
      "source": "zoho_crm",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "sal.churn",
      "name": "Churn",
      "department": "sal",
      "layer": 2,
      "definition": "Customers lost divided by total customers.",
      "formula": "count(lost) / count(total)",
      "type": "lagging",
      "unit": "percent",
      "direction": "lower_is_better",
      "target": {
        "mode": "fixed",
        "value": 3
      },
      "thresholds": {
        "green": 3,
        "amber": 5,
        "red": 100
      },
      "cadence": "monthly",
      "source": "zoho_crm",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "ops.output_units",
      "name": "Production Output",
      "department": "ops",
      "layer": 2,
      "definition": "Units or kilograms produced. TLF: mushrooms, microgreens.",
      "formula": "sum(units_produced)",
      "type": "lagging",
      "unit": "units_or_kg",
      "direction": "higher_is_better",
      "target": {
        "mode": "brand_specific"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "weekly",
      "source": "tlf_app",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "ops.quality_score",
      "name": "Quality Score",
      "department": "ops",
      "layer": 2,
      "definition": "Product or service quality rating, 1-10.",
      "formula": "avg(quality_rating)",
      "type": "leading",
      "unit": "score_10",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 8
      },
      "thresholds": {
        "green": 8,
        "amber": 6.5,
        "red": 0
      },
      "cadence": "weekly",
      "source": "manual_capture",
      "owner": "TBC",
      "framework_pillar": "squibb",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "ops.delivery_on_time",
      "name": "On-Time Delivery",
      "department": "ops",
      "layer": 2,
      "definition": "Deliveries on time divided by total deliveries.",
      "formula": "count(on_time) / count(total)",
      "type": "lagging",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 95
      },
      "thresholds": {
        "green": 95,
        "amber": 88,
        "red": 0
      },
      "cadence": "weekly",
      "source": "zoho_inventory",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "ops.csat",
      "name": "Customer Satisfaction",
      "department": "ops",
      "layer": 2,
      "definition": "Customer satisfaction rating, 1-10.",
      "formula": "avg(csat_score)",
      "type": "lagging",
      "unit": "score_10",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 8.5
      },
      "thresholds": {
        "green": 8.5,
        "amber": 7.0,
        "red": 0
      },
      "cadence": "monthly",
      "source": "survey",
      "owner": "TBC",
      "framework_pillar": "squibb",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "ops.unit_margin",
      "name": "Margin per Unit / Site",
      "department": "ops",
      "layer": 2,
      "definition": "Gross margin generated per operating unit or franchise site.",
      "formula": "unit_gross_margin",
      "type": "lagging",
      "unit": "ZAR",
      "direction": "higher_is_better",
      "target": {
        "mode": "vs_plan"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "zoho_books",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true,
      "note": "This is where FND revenue is actually measured. The funnel measures locations sold; this measures what each location earns."
    },
    {
      "id": "ops.sop_compliance",
      "name": "SOP / Audit Compliance",
      "department": "ops",
      "layer": 3,
      "definition": "Score achieved on the standard operating audit.",
      "formula": "audit_score",
      "type": "leading",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 90
      },
      "thresholds": {
        "green": 90,
        "amber": 80,
        "red": 0
      },
      "cadence": "monthly",
      "source": "coda",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true
    },
    {
      "id": "founder.buyback_rate",
      "name": "Buyback Rate",
      "department": "founder",
      "layer": 1,
      "block": "Founder Freedom",
      "definition": "Ricardo's effective hourly rate divided by four. The Rand threshold below which a task should be delegated rather than done.",
      "formula": "(annual_pretax_income / annual_hours_worked) / 4",
      "type": "lagging",
      "unit": "ZAR_per_hour",
      "direction": "higher_is_better",
      "target": {
        "mode": "recalculate",
        "value": "quarterly"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "quarterly",
      "source": "calc",
      "owner": "Ricardo Da Costa Maio",
      "framework_pillar": "martell",
      "impact_metric": false,
      "active": true,
      "correction_note": "Hermes v1 defined buyback_rate as 'HVA time / total work time' with a 50% target. That is Martell's Production-quadrant measure, not the Buyback Rate. The Buyback Rate is a currency-per-hour delegation threshold. Both are useful; they are now separate metrics and correctly named."
    },
    {
      "id": "founder.production_pct",
      "name": "High-Value Activity Time",
      "department": "founder",
      "layer": 1,
      "block": "Founder Freedom",
      "definition": "Share of working hours spent in the Production quadrant of the DRIP matrix.",
      "formula": "hours_high_value / total_hours_worked",
      "type": "leading",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 50
      },
      "thresholds": {
        "green": 50,
        "amber": 40,
        "red": 0
      },
      "cadence": "weekly",
      "source": "manual_capture",
      "owner": "Ricardo Da Costa Maio",
      "framework_pillar": "martell",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "founder.delegation_ratio",
      "name": "Delegation Ratio",
      "department": "founder",
      "layer": 2,
      "definition": "Tasks delegated divided by tasks owned.",
      "formula": "count(delegated) / count(owned)",
      "type": "leading",
      "unit": "ratio",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 0.5
      },
      "thresholds": {
        "green": 0.5,
        "amber": 0.35,
        "red": 0
      },
      "cadence": "weekly",
      "source": "manual_capture",
      "owner": "Ricardo Da Costa Maio",
      "framework_pillar": "martell",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "founder.escalations",
      "name": "Decisions Escalated to CEO",
      "department": "founder",
      "layer": 1,
      "block": "Founder Freedom",
      "definition": "Count of decisions in the week that could not be closed without Ricardo.",
      "formula": "count(decisions where required_ceo = true)",
      "type": "leading",
      "unit": "count_per_week",
      "direction": "lower_is_better",
      "target": {
        "mode": "fixed",
        "value": 5
      },
      "thresholds": {
        "green": 5,
        "amber": 10,
        "red": 999
      },
      "cadence": "weekly",
      "source": "coda",
      "owner": "TBC",
      "framework_pillar": "martell",
      "impact_metric": false,
      "active": true,
      "note": "The most diagnostic number in the system. Rising means the business is becoming a job rather than an asset."
    },
    {
      "id": "founder.eliminated_tasks",
      "name": "Eliminated Tasks",
      "department": "founder",
      "layer": 3,
      "definition": "Low-value tasks removed from workflows entirely.",
      "formula": "count(tasks_eliminated)",
      "type": "leading",
      "unit": "tasks_per_quarter",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 5
      },
      "thresholds": {
        "green": 5,
        "amber": 3,
        "red": 0
      },
      "cadence": "quarterly",
      "source": "manual_capture",
      "owner": "TBC",
      "framework_pillar": "martell",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "founder.ladder_position",
      "name": "Replacement Ladder Position",
      "department": "founder",
      "layer": 2,
      "definition": "Highest filled rung of the Replacement Ladder, per brand, scored 0-5.",
      "formula": "max(rung where filled = true)",
      "type": "leading",
      "unit": "score_5",
      "direction": "higher_is_better",
      "target": {
        "mode": "trend",
        "value": "advance_one_rung_per_year"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "quarterly",
      "source": "coda",
      "owner": "TBC",
      "framework_pillar": "martell",
      "impact_metric": false,
      "active": true
    },
    {
      "id": "impact.people_helped",
      "name": "People Helped",
      "department": "impact",
      "layer": 1,
      "block": "Foundation",
      "definition": "Cumulative people positively impacted \u2014 customers, franchisees, employees, community.",
      "formula": "sum(people_impacted)",
      "type": "lagging",
      "unit": "people",
      "direction": "higher_is_better",
      "target": {
        "mode": "trend",
        "value": "growing"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "manual_capture",
      "owner": "Ricardo Da Costa Maio",
      "framework_pillar": "squibb",
      "impact_metric": true,
      "active": true
    },
    {
      "id": "impact.purpose_score",
      "name": "Purpose Score",
      "department": "impact",
      "layer": 2,
      "definition": "Clarity and strength of brand mission, 1-10. Scored by whether the team can state the Dream unprompted.",
      "formula": "manual_assessment",
      "type": "leading",
      "unit": "score_10",
      "direction": "higher_is_better",
      "target": {
        "mode": "fixed",
        "value": 8
      },
      "thresholds": {
        "green": 8,
        "amber": 6,
        "red": 0
      },
      "cadence": "quarterly",
      "source": "manual_capture",
      "owner": "TBC",
      "framework_pillar": "squibb",
      "impact_metric": true,
      "active": true
    },
    {
      "id": "impact.jobs_sustained",
      "name": "Jobs Sustained",
      "department": "impact",
      "layer": 2,
      "definition": "Total FTE plus franchise-level employment supported by the group.",
      "formula": "fte_headcount + franchise_employment",
      "type": "lagging",
      "unit": "people",
      "direction": "higher_is_better",
      "target": {
        "mode": "trend",
        "value": "growing"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "quarterly",
      "source": "zoho_people",
      "owner": "TBC",
      "framework_pillar": "squibb",
      "impact_metric": true,
      "active": true
    },
    {
      "id": "funnel.leads",
      "name": "Leads Generated",
      "department": "mkt",
      "layer": 2,
      "grain": "product",
      "definition": "New leads generated in the month, per product. Stage 1 output.",
      "formula": "count(leads)",
      "type": "leading",
      "unit": "leads",
      "direction": "higher_is_better",
      "target": {
        "mode": "product_specific"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "funnel_tracker",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true,
      "funnel_stage": 1,
      "team": "marketing"
    },
    {
      "id": "funnel.conv_lead_to_opp",
      "name": "Conversion \u2014 Lead to Opportunity",
      "department": "sal",
      "layer": 2,
      "grain": "product",
      "definition": "Leads converted to qualified opportunities. This is the SDR team's number.",
      "formula": "funnel.opportunities / funnel.leads",
      "type": "leading",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "product_specific"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "funnel_tracker",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true,
      "funnel_stage": 2,
      "team": "sdr"
    },
    {
      "id": "funnel.opportunities",
      "name": "Qualified Opportunities",
      "department": "sal",
      "layer": 2,
      "grain": "product",
      "definition": "Leads qualified into opportunities. Stage 2 output.",
      "formula": "count(opportunities)",
      "type": "leading",
      "unit": "opportunities",
      "direction": "higher_is_better",
      "target": {
        "mode": "product_specific"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "funnel_tracker",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true,
      "funnel_stage": 2,
      "team": "sdr"
    },
    {
      "id": "funnel.cost_per_opportunity",
      "name": "Cost per Opportunity",
      "department": "mkt",
      "layer": 3,
      "grain": "product",
      "definition": "Marketing spend divided by qualified opportunities produced.",
      "formula": "mkt.marketing_spend / funnel.opportunities",
      "type": "lagging",
      "unit": "ZAR",
      "direction": "lower_is_better",
      "target": {
        "mode": "trend",
        "value": "decrease_qoq"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "calc",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true,
      "funnel_stage": 2
    },
    {
      "id": "funnel.conv_opp_to_close",
      "name": "Conversion \u2014 Opportunity to Close",
      "department": "sal",
      "layer": 2,
      "grain": "product",
      "definition": "Opportunities converted to closed business. This is the Dealmaker team's number.",
      "formula": "funnel.closed_count / funnel.opportunities",
      "type": "lagging",
      "unit": "percent",
      "direction": "higher_is_better",
      "target": {
        "mode": "product_specific"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "funnel_tracker",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true,
      "funnel_stage": 3,
      "team": "dealmaker"
    },
    {
      "id": "funnel.output_zar",
      "name": "Funnel Output \u2014 Value",
      "department": "sal",
      "layer": 1,
      "block": "Growth",
      "grain": "product",
      "definition": "Closed business value. Applies to professional services product lines only.",
      "formula": "sum(closed_value)",
      "type": "lagging",
      "unit": "ZAR",
      "direction": "higher_is_better",
      "target": {
        "mode": "product_specific"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "funnel_tracker",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true,
      "funnel_stage": 3,
      "applies_to_lines": [
        "professional_services"
      ]
    },
    {
      "id": "funnel.output_locations",
      "name": "Funnel Output \u2014 Locations Sold",
      "department": "sal",
      "layer": 1,
      "block": "Growth",
      "grain": "product",
      "definition": "Franchise locations sold. Applies to FND product lines only. Never expressed in Rand at funnel level.",
      "formula": "count(locations_sold)",
      "type": "lagging",
      "unit": "franchise_locations",
      "direction": "higher_is_better",
      "target": {
        "mode": "product_specific"
      },
      "thresholds": {
        "green": null,
        "amber": null,
        "red": null
      },
      "cadence": "monthly",
      "source": "funnel_tracker",
      "owner": "TBC",
      "framework_pillar": null,
      "impact_metric": false,
      "active": true,
      "funnel_stage": 3,
      "applies_to_lines": [
        "fnd"
      ]
    }
  ],
  "ceo_twelve": {
    "description": "Layer 1. Ricardo's only screen. Twenty minutes, Monday morning. References into the metric library \u2014 no separate definitions.",
    "blocks": {
      "Survival": [
        "fin.runway",
        "fin.net_burn",
        "fin.gross_margin"
      ],
      "Growth": [
        "fin.revenue_vs_plan",
        "sal.pipeline_coverage",
        "funnel.output_zar"
      ],
      "Founder Freedom": [
        "founder.buyback_rate",
        "founder.production_pct",
        "founder.escalations"
      ],
      "Foundation": [
        "hr.playbook_coverage",
        "hr.rev_per_fte",
        "impact.people_helped"
      ]
    },
    "note": "funnel.output_locations surfaces alongside funnel.output_zar for FND brands; it does not consume a separate slot."
  },
  "data_sources": {
    "zoho_books": "Finance \u2014 revenue, margin, burn, runway, spend",
    "zoho_crm": "Sales \u2014 pipeline, deals, CAC, LTV, NRR, churn",
    "zoho_people": "HR \u2014 headcount, training, attrition",
    "zoho_desk": "IT \u2014 tickets, MTTR",
    "zoho_inventory": "Ops \u2014 delivery, output",
    "funnel_tracker": "Funnel \u2014 leads, conversions, opportunities, output. Zoho Sheet workbook, 15 tabs, manual until CRM integration lands.",
    "tlf_app": "TLF production data",
    "social_analytics": "Reach, community",
    "survey": "Satisfaction and CSAT scores",
    "manual_capture": "Buyback, delegation, automation, AI adoption, purpose, people helped",
    "infra_monitoring": "Uptime",
    "directory": "Identity and MFA",
    "coda": "Playbooks, escalations, audits, ladder scoring",
    "calc": "Derived metrics \u2014 no primary source"
  },
  "alerting": {
    "cadence": "weekly",
    "channels": [
      "discord",
      "telegram"
    ],
    "principle": "Alert on red flips only. Never send green confirmations \u2014 they train people to ignore the channel.",
    "rules": [
      {
        "metric": "fin.runway",
        "condition": "< 6",
        "severity": "critical"
      },
      {
        "metric": "fin.runway",
        "condition": "< 12",
        "severity": "warning"
      },
      {
        "metric": "fin.ltv_cac",
        "condition": "< 1.5",
        "severity": "critical"
      },
      {
        "metric": "sal.churn",
        "condition": "> 5",
        "severity": "critical"
      },
      {
        "metric": "sal.nrr",
        "condition": "< 90",
        "severity": "critical"
      },
      {
        "metric": "sal.pipeline_coverage",
        "condition": "< 2.0",
        "severity": "critical"
      },
      {
        "metric": "founder.production_pct",
        "condition": "< 50",
        "severity": "warning"
      },
      {
        "metric": "founder.escalations",
        "condition": "> 10",
        "severity": "warning"
      },
      {
        "metric": "fin.gross_margin",
        "condition": "< target * 0.9",
        "severity": "warning"
      },
      {
        "metric": "funnel.conv_lead_to_opp",
        "condition": "< target * 0.75",
        "severity": "warning",
        "note": "Isolates the SDR stage \u2014 tells you the bottleneck is qualification, not lead volume"
      },
      {
        "metric": "funnel.conv_opp_to_close",
        "condition": "< target * 0.75",
        "severity": "warning",
        "note": "Isolates the Dealmaker stage"
      },
      {
        "metric": "hr.new_hire_90d",
        "condition": "< 70",
        "severity": "warning"
      }
    ]
  },
  "cadence": [
    {
      "id": "daily_pulse",
      "when": "07:00 daily",
      "duration_min": 3,
      "attendees": [
        "automated"
      ],
      "output": "Cash, prior-day sales per brand, red flips",
      "channel": "discord"
    },
    {
      "id": "weekly_ceo_review",
      "when": "Monday 07:00",
      "duration_min": 20,
      "attendees": [
        "Ricardo"
      ],
      "output": "CEO Twelve reviewed, week allocated"
    },
    {
      "id": "weekly_scorecard",
      "when": "Monday 08:00",
      "duration_min": 60,
      "attendees": [
        "brand leads",
        "Ricardo"
      ],
      "output": "Brand boards plus funnel by stage. 1-3-1 on every red."
    },
    {
      "id": "monthly_business_review",
      "when": "First Tuesday",
      "duration_min": 120,
      "attendees": [
        "brand lead",
        "dept heads"
      ],
      "output": "Full P&L, department boards, playbook audit, impact metrics"
    },
    {
      "id": "quarterly_reset",
      "when": "Quarter +1 week",
      "duration_min": 240,
      "attendees": [
        "Ricardo",
        "brand leads"
      ],
      "output": "Capital reallocation, DRIP audit, ladder rescore, funnel target reset"
    },
    {
      "id": "annual_preload",
      "when": "November",
      "duration_min": 960,
      "attendees": [
        "Ricardo"
      ],
      "output": "Preloaded year, purpose review per brand, targets set"
    }
  ],
  "escalation": {
    "rule_1_3_1": {
      "description": "Any red metric brought to a review arrives as one problem statement, three viable options, one recommendation from the owner.",
      "applies_to": "everyone, including Ricardo"
    },
    "ladder": [
      {
        "weeks_red": 1,
        "action": "Owner logs cause in Coda. No meeting time spent."
      },
      {
        "weeks_red": 2,
        "action": "1-3-1 at the weekly. Action assigned with owner and date."
      },
      {
        "weeks_red": 3,
        "action": "Playbook review. Person, process or target problem? Assume process first."
      },
      {
        "weeks_red": 4,
        "action": "Escalate to Quarterly Reset as a capital or structural question."
      }
    ]
  },
  "reconciliation_gaps": [
    {
      "id": "G1",
      "severity": "high",
      "title": "Funnel is three stages; both schemas modelled one",
      "detail": "Hermes had a single lead_conversion (Leads \u2192 Customers, target 8%). Cerebro v1 had win_rate only. The Funnel Tracker splits conversion across Marketing \u2192 SDR \u2192 Dealmaker. Collapsing to one number makes it impossible to tell which team is the bottleneck, which is the entire purpose of the tracker.",
      "resolution": "Added funnel.conv_lead_to_opp (SDR) and funnel.conv_opp_to_close (Dealmaker) as separate metrics with team attribution. Single-stage lead_conversion removed."
    },
    {
      "id": "G2",
      "severity": "high",
      "title": "FND output unit mismatch",
      "detail": "The Funnel Tracker measures FND products in franchise locations sold, never Rand. Both schemas expressed all sales output in ZAR (deals_won, revenue), which would silently convert locations into money at funnel level and corrupt comparisons.",
      "resolution": "Split into funnel.output_zar (professional services) and funnel.output_locations (FND), each with applies_to_lines guards. FND Rand is captured downstream at ops.unit_margin."
    },
    {
      "id": "G3",
      "severity": "high",
      "title": "Brand list does not cover the product list",
      "detail": "The Funnel Tracker runs nine products. Hermes and Cerebro both listed five brands. Papa Pasta, ACDC Express, INF Consultancy and the three SLA products had no home. Divorced Dads has no funnel product.",
      "resolution": "Added a products taxonomy with explicit product \u2192 brand mapping. Papa Pasta and ACDC Express added as proposed brands. Divorced Dads flagged as unmapped, needing a funnel tab or a recorded exemption."
    },
    {
      "id": "G4",
      "severity": "medium",
      "title": "Marketing cost measured only as blended CAC",
      "detail": "The Funnel Tracker carries cost-per metrics at each stage. Hermes had CAC only, at month and brand grain, sitting under Finance.",
      "resolution": "Added mkt.cost_per_lead, funnel.cost_per_opportunity and mkt.marketing_roi at product grain under Marketing."
    },
    {
      "id": "G5",
      "severity": "medium",
      "title": "Cycle time re-introduced against a prior scoping decision",
      "detail": "sal.cycle_length appeared in cerebro v1.0 despite cycle time being explicitly descoped when the Funnel Tracker was designed.",
      "resolution": "Removed. Recorded in funnel_model.scope_decisions_carried_forward so it does not creep back in silently."
    },
    {
      "id": "G6",
      "severity": "medium",
      "title": "Buyback Rate was defined as something else",
      "detail": "Hermes defined buyback_rate as HVA time over total work time with a 50% target. That is Martell's Production-quadrant measure. The Buyback Rate is a currency-per-hour delegation threshold: (income \u00f7 hours) \u00f7 4.",
      "resolution": "Split into founder.buyback_rate (ZAR/hour) and founder.production_pct (percent, target 50). Both retained, correctly named."
    },
    {
      "id": "G7",
      "severity": "medium",
      "title": "Flat 60% gross margin target across the portfolio",
      "detail": "A farm, a franchisor and a SaaS product cannot share a margin target. TLF and ACDC would show permanent red regardless of performance.",
      "resolution": "fin.gross_margin now carries per-brand targets."
    },
    {
      "id": "G8",
      "severity": "low",
      "title": "Tech debt target contradicted its own scale",
      "detail": "Defined as 1-10 where 10 = clean, then targeted '< 5' \u2014 i.e. targeting a broken codebase.",
      "resolution": "Renamed to Codebase Health Score, direction set higher_is_better, target 7."
    },
    {
      "id": "G9",
      "severity": "high",
      "title": "No metric had an owner",
      "detail": "Hermes had no owner field at all. Cerebro had the field but every value was TBC.",
      "resolution": "Field retained and required. Still TBC \u2014 this is the Phase 1 blocker and cannot be solved by a schema."
    }
  ],
  "implementation_phases": [
    {
      "phase": 1,
      "name": "Dashboard artifact",
      "status": "done"
    },
    {
      "phase": 2,
      "name": "Name an owner for each of the CEO Twelve",
      "status": "pending",
      "blocker": true
    },
    {
      "phase": 3,
      "name": "Resolve product-to-brand mapping (Papa Pasta, ACDC, Divorced Dads)",
      "status": "pending",
      "blocker": true
    },
    {
      "phase": 4,
      "name": "Wire Zoho data via Zoho MCP + Google Workspace OAuth",
      "status": "pending"
    },
    {
      "phase": 5,
      "name": "Funnel Tracker feeds funnel.* metrics (manual, then CRM)",
      "status": "pending"
    },
    {
      "phase": 6,
      "name": "FluxFlow pipeline ingests all sources",
      "status": "pending"
    },
    {
      "phase": 7,
      "name": "Weekly automated briefing cron (Warren W)",
      "status": "pending"
    }
  ],
  "open_decisions": [
    {
      "id": 1,
      "question": "Papa Pasta and ACDC Express are Funnel Tracker products with no brand board. Promote to full brands, or report inside Infinity Brands?",
      "blocks_phase": 3
    },
    {
      "id": 2,
      "question": "Divorced Dads has no funnel product. Add a tenth funnel tab, or record an explicit exemption?",
      "blocks_phase": 3
    },
    {
      "id": 3,
      "question": "INF Consultancy and the three SLA products currently roll into Infinity Brands. Correct, or do they need their own board?",
      "blocks_phase": 3
    },
    {
      "id": 4,
      "question": "Per-brand gross margin targets are estimates. Confirm or replace with plan figures.",
      "blocks_phase": 4
    },
    {
      "id": 5,
      "question": "Named owners for all twelve Layer 1 metrics. The system does not function with 'Finance' as an owner.",
      "blocks_phase": 2
    },
    {
      "id": 6,
      "question": "Reinstate cycle time tracking, or keep it descoped as originally decided?",
      "blocks_phase": 5
    }
  ],
  "enums": {
    "layer": [
      1,
      2,
      3
    ],
    "block": [
      "Survival",
      "Growth",
      "Founder Freedom",
      "Foundation"
    ],
    "type": [
      "leading",
      "lagging"
    ],
    "direction": [
      "higher_is_better",
      "lower_is_better",
      "band"
    ],
    "cadence": [
      "daily",
      "weekly",
      "monthly",
      "quarterly",
      "annual"
    ],
    "status": [
      "green",
      "amber",
      "red",
      "no_data"
    ],
    "target_mode": [
      "fixed",
      "per_brand",
      "brand_specific",
      "product_specific",
      "trend",
      "expression",
      "vs_plan",
      "recalculate"
    ],
    "framework_pillar": [
      "martell",
      "squibb",
      null
    ],
    "product_line": [
      "professional_services",
      "fnd"
    ],
    "team": [
      "marketing",
      "sdr",
      "dealmaker"
    ],
    "severity": [
      "critical",
      "warning"
    ]
  },
  "reading_schema": {
    "description": "Definitions are static; readings are time-series. Store separately. Funnel readings carry a product_id; all others carry a brand_id.",
    "example_brand": {
      "metric_id": "fin.runway",
      "brand_id": "fluxflow",
      "period": "2026-08",
      "value": 9.2,
      "target": 12,
      "status": "amber",
      "vs_prior": -1.1,
      "captured_at": "2026-09-01T02:00:00+02:00",
      "captured_by": "hermes.cron.books",
      "note": null
    },
    "example_funnel": {
      "metric_id": "funnel.conv_lead_to_opp",
      "product_id": "papa_pasta",
      "team": "sdr",
      "period": "2026-08",
      "value": 0.18,
      "target": 0.25,
      "status": "red",
      "vs_prior": -0.04,
      "captured_at": "2026-09-01T02:00:00+02:00",
      "captured_by": "manual.funnel_tracker",
      "note": null
    }
  },
  "counts": {
    "metrics_total": 59,
    "by_department": {
      "fin": 10,
      "founder": 6,
      "hr": 7,
      "impact": 3,
      "it": 7,
      "mkt": 8,
      "ops": 6,
      "sal": 12
    },
    "funnel_metrics_nested_in": "mkt and sal \u2014 funnel.* metrics carry funnel_stage and team fields",
    "layer_1_slots": 12,
    "reduction_from_cerebro_v1": "101 \u2192 59, achieved by defining metrics once in a library and referencing them per brand rather than duplicating"
  }
};
const GSD_METRICS = {
  "fin.revenue": {
    "id": "fin.revenue",
    "name": "Revenue (month)",
    "department": "fin",
    "layer": 2,
    "definition": "Monthly revenue booked, per brand.",
    "formula": "sum(revenue)",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "higher_is_better",
    "target": {
      "mode": "brand_specific"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "fin.gross_margin": {
    "id": "fin.gross_margin",
    "name": "Gross Margin",
    "department": "fin",
    "layer": 2,
    "definition": "(Revenue \u2212 COGS) / Revenue.",
    "formula": "(revenue - cogs) / revenue",
    "type": "lagging",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "per_brand",
      "values": {
        "infx": 60,
        "fluxflow": 70,
        "divorced": 70,
        "infinity": 55,
        "tlf": 30,
        "papapasta": 65,
        "acdc": 25
      }
    },
    "thresholds": {
      "green": "target",
      "amber": "target * 0.9",
      "red": "below"
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "correction_note": "Hermes v1 applied a flat >=60% group-wide. A farm and a franchisor cannot carry software margins; a single target would show permanent red on TLF and ACDC and permanent green on nothing useful."
  },
  "fin.net_burn": {
    "id": "fin.net_burn",
    "name": "Net Burn",
    "department": "fin",
    "layer": 2,
    "definition": "Monthly net cash outflow.",
    "formula": "cash_out - cash_in",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "lower_is_better",
    "target": {
      "mode": "expression",
      "value": "< fin.revenue"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "fin.runway": {
    "id": "fin.runway",
    "name": "Runway",
    "department": "fin",
    "layer": 1,
    "block": "Survival",
    "definition": "Cash balance divided by monthly net burn.",
    "formula": "cash_balance / net_burn",
    "type": "lagging",
    "unit": "months",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 12
    },
    "thresholds": {
      "green": 12,
      "amber": 6,
      "red": 0
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": "martell",
    "impact_metric": false,
    "active": true
  },
  "fin.dso": {
    "id": "fin.dso",
    "name": "Debtor Days",
    "department": "fin",
    "layer": 3,
    "definition": "Average days to collect receivables.",
    "formula": "(accounts_receivable / revenue) * days_in_period",
    "type": "leading",
    "unit": "days",
    "direction": "lower_is_better",
    "target": {
      "mode": "fixed",
      "value": 30
    },
    "thresholds": {
      "green": 30,
      "amber": 45,
      "red": 999
    },
    "cadence": "weekly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "fin.opex_ratio": {
    "id": "fin.opex_ratio",
    "name": "Opex as % of Revenue",
    "department": "fin",
    "layer": 3,
    "definition": "Operating expenditure as a share of revenue.",
    "formula": "opex / revenue",
    "type": "lagging",
    "unit": "percent",
    "direction": "lower_is_better",
    "target": {
      "mode": "brand_specific"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "fin.recurring_ratio": {
    "id": "fin.recurring_ratio",
    "name": "Recurring Revenue Ratio",
    "department": "fin",
    "layer": 1,
    "block": "Growth",
    "definition": "Recurring revenue as a share of total revenue.",
    "formula": "recurring_revenue / total_revenue",
    "type": "lagging",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 40
    },
    "thresholds": {
      "green": 40,
      "amber": 30,
      "red": 0
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "fin.ltv_cac": {
    "id": "fin.ltv_cac",
    "name": "LTV:CAC Ratio",
    "department": "fin",
    "layer": 2,
    "definition": "Lifetime value divided by customer acquisition cost.",
    "formula": "ltv / cac",
    "type": "lagging",
    "unit": "ratio",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 3.0
    },
    "thresholds": {
      "green": 3.0,
      "amber": 1.5,
      "red": 0
    },
    "cadence": "monthly",
    "source": "zoho_crm",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "fin.payback": {
    "id": "fin.payback",
    "name": "CAC Payback Period",
    "department": "fin",
    "layer": 3,
    "definition": "CAC divided by monthly gross margin per customer.",
    "formula": "cac / monthly_gross_margin_per_customer",
    "type": "lagging",
    "unit": "months",
    "direction": "lower_is_better",
    "target": {
      "mode": "fixed",
      "value": 12
    },
    "thresholds": {
      "green": 12,
      "amber": 18,
      "red": 999
    },
    "cadence": "monthly",
    "source": "zoho_crm",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "fin.revenue_vs_plan": {
    "id": "fin.revenue_vs_plan",
    "name": "Revenue vs Plan",
    "department": "fin",
    "layer": 1,
    "block": "Growth",
    "definition": "Month-to-date actual revenue divided by month-to-date budget, all brands.",
    "formula": "sum(revenue_mtd) / sum(budget_mtd)",
    "type": "lagging",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 100
    },
    "thresholds": {
      "green": 100,
      "amber": 90,
      "red": 0
    },
    "cadence": "weekly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "hr.headcount": {
    "id": "hr.headcount",
    "name": "Headcount",
    "department": "hr",
    "layer": 3,
    "definition": "Staff per brand, FTE.",
    "formula": "count(active_employees)",
    "type": "lagging",
    "unit": "people",
    "direction": "band",
    "target": {
      "mode": "vs_plan"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_people",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "hr.rev_per_fte": {
    "id": "hr.rev_per_fte",
    "name": "Revenue per FTE",
    "department": "hr",
    "layer": 1,
    "block": "Foundation",
    "definition": "Trailing twelve-month revenue divided by FTE headcount.",
    "formula": "revenue_ttm / fte_headcount",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "higher_is_better",
    "target": {
      "mode": "trend",
      "value": "improve_yoy"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "hr.attrition": {
    "id": "hr.attrition",
    "name": "Voluntary Attrition (12m)",
    "department": "hr",
    "layer": 3,
    "definition": "Voluntary leavers as a share of average headcount over twelve months.",
    "formula": "voluntary_leavers_12m / avg_headcount_12m",
    "type": "lagging",
    "unit": "percent",
    "direction": "lower_is_better",
    "target": {
      "mode": "fixed",
      "value": 12
    },
    "thresholds": {
      "green": 12,
      "amber": 18,
      "red": 100
    },
    "cadence": "monthly",
    "source": "zoho_people",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "hr.new_hire_90d": {
    "id": "hr.new_hire_90d",
    "name": "90-Day New Hire Success",
    "department": "hr",
    "layer": 3,
    "definition": "New hires still employed and meeting expectations at ninety days.",
    "formula": "count(successful_90d) / count(hires)",
    "type": "leading",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 85
    },
    "thresholds": {
      "green": 85,
      "amber": 70,
      "red": 0
    },
    "cadence": "monthly",
    "source": "zoho_people",
    "owner": "TBC",
    "framework_pillar": "martell",
    "impact_metric": false,
    "active": true,
    "note": "Below 85% the cause is almost always hiring on interviews rather than paid trial work."
  },
  "hr.team_satisfaction": {
    "id": "hr.team_satisfaction",
    "name": "Team Satisfaction",
    "department": "hr",
    "layer": 2,
    "definition": "Employee satisfaction survey score, 1-10.",
    "formula": "avg(survey_score)",
    "type": "leading",
    "unit": "score_10",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 7.5
    },
    "thresholds": {
      "green": 7.5,
      "amber": 6.0,
      "red": 0
    },
    "cadence": "quarterly",
    "source": "survey",
    "owner": "TBC",
    "framework_pillar": "squibb",
    "impact_metric": false,
    "active": true
  },
  "hr.training_hours": {
    "id": "hr.training_hours",
    "name": "Training Hours",
    "department": "hr",
    "layer": 3,
    "definition": "Training hours per person per month.",
    "formula": "training_hours / headcount",
    "type": "leading",
    "unit": "hours_per_person_month",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 4
    },
    "thresholds": {
      "green": 4,
      "amber": 2,
      "red": 0
    },
    "cadence": "monthly",
    "source": "zoho_people",
    "owner": "TBC",
    "framework_pillar": "squibb",
    "impact_metric": false,
    "active": true
  },
  "hr.playbook_coverage": {
    "id": "hr.playbook_coverage",
    "name": "Playbook Coverage",
    "department": "hr",
    "layer": 1,
    "block": "Foundation",
    "definition": "Roles with a current documented playbook divided by total roles.",
    "formula": "count(roles_with_current_playbook) / count(roles)",
    "type": "leading",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 80
    },
    "thresholds": {
      "green": 80,
      "amber": 60,
      "red": 0
    },
    "cadence": "monthly",
    "source": "coda",
    "owner": "TBC",
    "framework_pillar": "martell",
    "impact_metric": false,
    "active": true
  },
  "it.system_uptime": {
    "id": "it.system_uptime",
    "name": "System Uptime",
    "department": "it",
    "layer": 2,
    "definition": "Availability of production systems.",
    "formula": "uptime_minutes / total_minutes",
    "type": "lagging",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 99
    },
    "thresholds": {
      "green": 99,
      "amber": 97,
      "red": 0
    },
    "cadence": "monthly",
    "source": "infra_monitoring",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "it.mttr_p1": {
    "id": "it.mttr_p1",
    "name": "Mean Time to Resolve (P1)",
    "department": "it",
    "layer": 3,
    "definition": "Average hours to resolve priority-one incidents.",
    "formula": "avg(resolved_at - raised_at) where priority = P1",
    "type": "leading",
    "unit": "hours",
    "direction": "lower_is_better",
    "target": {
      "mode": "fixed",
      "value": 4
    },
    "thresholds": {
      "green": 4,
      "amber": 8,
      "red": 999
    },
    "cadence": "weekly",
    "source": "zoho_desk",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "it.open_tickets": {
    "id": "it.open_tickets",
    "name": "Open Tickets",
    "department": "it",
    "layer": 3,
    "definition": "Support ticket backlog size.",
    "formula": "count(tickets where status = open)",
    "type": "leading",
    "unit": "tickets",
    "direction": "lower_is_better",
    "target": {
      "mode": "fixed",
      "value": 10
    },
    "thresholds": {
      "green": 10,
      "amber": 20,
      "red": 9999
    },
    "cadence": "weekly",
    "source": "zoho_desk",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "it.automation_coverage": {
    "id": "it.automation_coverage",
    "name": "Automation Coverage",
    "department": "it",
    "layer": 2,
    "definition": "Automated processes divided by total repeatable processes.",
    "formula": "count(automated) / count(repeatable)",
    "type": "leading",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 50
    },
    "thresholds": {
      "green": 50,
      "amber": 35,
      "red": 0
    },
    "cadence": "monthly",
    "source": "manual_capture",
    "owner": "TBC",
    "framework_pillar": "martell",
    "impact_metric": false,
    "active": true
  },
  "it.ai_adoption": {
    "id": "it.ai_adoption",
    "name": "AI Adoption",
    "department": "it",
    "layer": 2,
    "definition": "Share of team actively using AI tools in their workflow.",
    "formula": "count(active_ai_users) / headcount",
    "type": "leading",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 40
    },
    "thresholds": {
      "green": 40,
      "amber": 25,
      "red": 0
    },
    "cadence": "monthly",
    "source": "manual_capture",
    "owner": "TBC",
    "framework_pillar": "martell",
    "impact_metric": false,
    "active": true
  },
  "it.mfa_coverage": {
    "id": "it.mfa_coverage",
    "name": "MFA Coverage",
    "department": "it",
    "layer": 3,
    "definition": "Accounts with multi-factor authentication enforced.",
    "formula": "count(accounts_with_mfa) / count(accounts)",
    "type": "leading",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 100
    },
    "thresholds": {
      "green": 100,
      "amber": 95,
      "red": 0
    },
    "cadence": "monthly",
    "source": "directory",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "it.tech_debt": {
    "id": "it.tech_debt",
    "name": "Codebase Health Score",
    "department": "it",
    "layer": 3,
    "definition": "Codebase health rated 1-10 where 10 is clean.",
    "formula": "manual_assessment",
    "type": "leading",
    "unit": "score_10",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 7
    },
    "thresholds": {
      "green": 7,
      "amber": 5,
      "red": 0
    },
    "cadence": "quarterly",
    "source": "manual_capture",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "correction_note": "Hermes v1 defined 10 = clean but set target '< 5', which targets a broken codebase. Renamed and inverted so direction and target agree."
  },
  "mkt.marketing_spend": {
    "id": "mkt.marketing_spend",
    "name": "Marketing Spend",
    "department": "mkt",
    "layer": 2,
    "definition": "Total marketing spend in the period, per product.",
    "formula": "sum(marketing_spend)",
    "type": "leading",
    "unit": "ZAR",
    "direction": "band",
    "target": {
      "mode": "vs_plan"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "funnel_stage": 1
  },
  "mkt.cost_per_lead": {
    "id": "mkt.cost_per_lead",
    "name": "Cost per Lead",
    "department": "mkt",
    "layer": 1,
    "block": "Growth",
    "definition": "Marketing spend divided by leads generated.",
    "formula": "mkt.marketing_spend / funnel.leads",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "lower_is_better",
    "target": {
      "mode": "trend",
      "value": "decrease_qoq"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "calc",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "funnel_stage": 1
  },
  "mkt.marketing_roi": {
    "id": "mkt.marketing_roi",
    "name": "Marketing ROI",
    "department": "mkt",
    "layer": 2,
    "definition": "Output value attributable to marketing divided by marketing spend.",
    "formula": "funnel.output_zar / mkt.marketing_spend",
    "type": "lagging",
    "unit": "ratio",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 3.0
    },
    "thresholds": {
      "green": 3.0,
      "amber": 2.0,
      "red": 0
    },
    "cadence": "monthly",
    "source": "calc",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "mkt.brand_reach": {
    "id": "mkt.brand_reach",
    "name": "Brand Reach",
    "department": "mkt",
    "layer": 3,
    "definition": "Total audience size across owned channels.",
    "formula": "sum(audience_all_channels)",
    "type": "leading",
    "unit": "audience",
    "direction": "higher_is_better",
    "target": {
      "mode": "trend",
      "value": "growing"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "social_analytics",
    "owner": "TBC",
    "framework_pillar": "squibb",
    "impact_metric": false,
    "active": true
  },
  "mkt.help_first_content": {
    "id": "mkt.help_first_content",
    "name": "Help-First Content",
    "department": "mkt",
    "layer": 2,
    "definition": "Free value pieces published with no gate and no catch.",
    "formula": "count(free_assets_published)",
    "type": "leading",
    "unit": "pieces_per_month",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 4
    },
    "thresholds": {
      "green": 4,
      "amber": 2,
      "red": 0
    },
    "cadence": "monthly",
    "source": "manual_capture",
    "owner": "TBC",
    "framework_pillar": "squibb",
    "impact_metric": false,
    "active": true
  },
  "mkt.community_size": {
    "id": "mkt.community_size",
    "name": "Community Size",
    "department": "mkt",
    "layer": 2,
    "definition": "Followers, members and engaged community across channels.",
    "formula": "sum(community_members)",
    "type": "leading",
    "unit": "people",
    "direction": "higher_is_better",
    "target": {
      "mode": "trend",
      "value": "growing"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "social_analytics",
    "owner": "TBC",
    "framework_pillar": "squibb",
    "impact_metric": false,
    "active": true
  },
  "sal.pipeline": {
    "id": "sal.pipeline",
    "name": "Pipeline Value",
    "department": "sal",
    "layer": 2,
    "definition": "Total value of open deals.",
    "formula": "sum(open_deal_value)",
    "type": "leading",
    "unit": "ZAR",
    "direction": "higher_is_better",
    "target": {
      "mode": "expression",
      "value": ">= 3 * monthly_target"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "weekly",
    "source": "zoho_crm",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "sal.pipeline_coverage": {
    "id": "sal.pipeline_coverage",
    "name": "Pipeline Coverage",
    "department": "sal",
    "layer": 1,
    "block": "Growth",
    "definition": "Weighted open pipeline divided by next-period target.",
    "formula": "sum(pipeline_value * probability) / period_target",
    "type": "leading",
    "unit": "ratio",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 3.0
    },
    "thresholds": {
      "green": 3.0,
      "amber": 2.5,
      "red": 0
    },
    "cadence": "weekly",
    "source": "zoho_crm",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "sal.deals_won": {
    "id": "sal.deals_won",
    "name": "Deals Won",
    "department": "sal",
    "layer": 2,
    "definition": "Closed-won deals in the period.",
    "formula": "count(deals where status = won)",
    "type": "lagging",
    "unit": "deals",
    "direction": "higher_is_better",
    "target": {
      "mode": "brand_specific"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_crm",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "sal.win_rate": {
    "id": "sal.win_rate",
    "name": "Win Rate",
    "department": "sal",
    "layer": 3,
    "definition": "Deals won divided by deals closed.",
    "formula": "count(won) / count(closed)",
    "type": "lagging",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 25
    },
    "thresholds": {
      "green": 25,
      "amber": 18,
      "red": 0
    },
    "cadence": "monthly",
    "source": "zoho_crm",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "sal.avg_deal_size": {
    "id": "sal.avg_deal_size",
    "name": "Average Deal Size",
    "department": "sal",
    "layer": 3,
    "definition": "Won value divided by won count.",
    "formula": "sum(won_value) / count(won)",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "higher_is_better",
    "target": {
      "mode": "trend",
      "value": "improve_qoq"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_crm",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "sal.nrr": {
    "id": "sal.nrr",
    "name": "Net Revenue Retention",
    "department": "sal",
    "layer": 2,
    "definition": "Revenue retained plus expanded from existing customers, over opening revenue.",
    "formula": "(opening + expansion - churn - contraction) / opening",
    "type": "lagging",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 100
    },
    "thresholds": {
      "green": 100,
      "amber": 90,
      "red": 0
    },
    "cadence": "monthly",
    "source": "zoho_crm",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "sal.churn": {
    "id": "sal.churn",
    "name": "Churn",
    "department": "sal",
    "layer": 2,
    "definition": "Customers lost divided by total customers.",
    "formula": "count(lost) / count(total)",
    "type": "lagging",
    "unit": "percent",
    "direction": "lower_is_better",
    "target": {
      "mode": "fixed",
      "value": 3
    },
    "thresholds": {
      "green": 3,
      "amber": 5,
      "red": 100
    },
    "cadence": "monthly",
    "source": "zoho_crm",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "ops.output_units": {
    "id": "ops.output_units",
    "name": "Production Output",
    "department": "ops",
    "layer": 2,
    "definition": "Units or kilograms produced. TLF: mushrooms, microgreens.",
    "formula": "sum(units_produced)",
    "type": "lagging",
    "unit": "units_or_kg",
    "direction": "higher_is_better",
    "target": {
      "mode": "brand_specific"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "weekly",
    "source": "tlf_app",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "ops.quality_score": {
    "id": "ops.quality_score",
    "name": "Quality Score",
    "department": "ops",
    "layer": 2,
    "definition": "Product or service quality rating, 1-10.",
    "formula": "avg(quality_rating)",
    "type": "leading",
    "unit": "score_10",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 8
    },
    "thresholds": {
      "green": 8,
      "amber": 6.5,
      "red": 0
    },
    "cadence": "weekly",
    "source": "manual_capture",
    "owner": "TBC",
    "framework_pillar": "squibb",
    "impact_metric": false,
    "active": true
  },
  "ops.delivery_on_time": {
    "id": "ops.delivery_on_time",
    "name": "On-Time Delivery",
    "department": "ops",
    "layer": 2,
    "definition": "Deliveries on time divided by total deliveries.",
    "formula": "count(on_time) / count(total)",
    "type": "lagging",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 95
    },
    "thresholds": {
      "green": 95,
      "amber": 88,
      "red": 0
    },
    "cadence": "weekly",
    "source": "zoho_inventory",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "ops.csat": {
    "id": "ops.csat",
    "name": "Customer Satisfaction",
    "department": "ops",
    "layer": 2,
    "definition": "Customer satisfaction rating, 1-10.",
    "formula": "avg(csat_score)",
    "type": "lagging",
    "unit": "score_10",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 8.5
    },
    "thresholds": {
      "green": 8.5,
      "amber": 7.0,
      "red": 0
    },
    "cadence": "monthly",
    "source": "survey",
    "owner": "TBC",
    "framework_pillar": "squibb",
    "impact_metric": false,
    "active": true
  },
  "ops.unit_margin": {
    "id": "ops.unit_margin",
    "name": "Margin per Unit / Site",
    "department": "ops",
    "layer": 2,
    "definition": "Gross margin generated per operating unit or franchise site.",
    "formula": "unit_gross_margin",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "higher_is_better",
    "target": {
      "mode": "vs_plan"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "note": "This is where FND revenue is actually measured. The funnel measures locations sold; this measures what each location earns."
  },
  "ops.sop_compliance": {
    "id": "ops.sop_compliance",
    "name": "SOP / Audit Compliance",
    "department": "ops",
    "layer": 3,
    "definition": "Score achieved on the standard operating audit.",
    "formula": "audit_score",
    "type": "leading",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 90
    },
    "thresholds": {
      "green": 90,
      "amber": 80,
      "red": 0
    },
    "cadence": "monthly",
    "source": "coda",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true
  },
  "founder.buyback_rate": {
    "id": "founder.buyback_rate",
    "name": "Buyback Rate",
    "department": "founder",
    "layer": 1,
    "block": "Founder Freedom",
    "definition": "Ricardo's effective hourly rate divided by four. The Rand threshold below which a task should be delegated rather than done.",
    "formula": "(annual_pretax_income / annual_hours_worked) / 4",
    "type": "lagging",
    "unit": "ZAR_per_hour",
    "direction": "higher_is_better",
    "target": {
      "mode": "recalculate",
      "value": "quarterly"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "quarterly",
    "source": "calc",
    "owner": "Ricardo Da Costa Maio",
    "framework_pillar": "martell",
    "impact_metric": false,
    "active": true,
    "correction_note": "Hermes v1 defined buyback_rate as 'HVA time / total work time' with a 50% target. That is Martell's Production-quadrant measure, not the Buyback Rate. The Buyback Rate is a currency-per-hour delegation threshold. Both are useful; they are now separate metrics and correctly named."
  },
  "founder.production_pct": {
    "id": "founder.production_pct",
    "name": "High-Value Activity Time",
    "department": "founder",
    "layer": 1,
    "block": "Founder Freedom",
    "definition": "Share of working hours spent in the Production quadrant of the DRIP matrix.",
    "formula": "hours_high_value / total_hours_worked",
    "type": "leading",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 50
    },
    "thresholds": {
      "green": 50,
      "amber": 40,
      "red": 0
    },
    "cadence": "weekly",
    "source": "manual_capture",
    "owner": "Ricardo Da Costa Maio",
    "framework_pillar": "martell",
    "impact_metric": false,
    "active": true
  },
  "founder.delegation_ratio": {
    "id": "founder.delegation_ratio",
    "name": "Delegation Ratio",
    "department": "founder",
    "layer": 2,
    "definition": "Tasks delegated divided by tasks owned.",
    "formula": "count(delegated) / count(owned)",
    "type": "leading",
    "unit": "ratio",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 0.5
    },
    "thresholds": {
      "green": 0.5,
      "amber": 0.35,
      "red": 0
    },
    "cadence": "weekly",
    "source": "manual_capture",
    "owner": "Ricardo Da Costa Maio",
    "framework_pillar": "martell",
    "impact_metric": false,
    "active": true
  },
  "founder.escalations": {
    "id": "founder.escalations",
    "name": "Decisions Escalated to CEO",
    "department": "founder",
    "layer": 1,
    "block": "Founder Freedom",
    "definition": "Count of decisions in the week that could not be closed without Ricardo.",
    "formula": "count(decisions where required_ceo = true)",
    "type": "leading",
    "unit": "count_per_week",
    "direction": "lower_is_better",
    "target": {
      "mode": "fixed",
      "value": 5
    },
    "thresholds": {
      "green": 5,
      "amber": 10,
      "red": 999
    },
    "cadence": "weekly",
    "source": "coda",
    "owner": "TBC",
    "framework_pillar": "martell",
    "impact_metric": false,
    "active": true,
    "note": "The most diagnostic number in the system. Rising means the business is becoming a job rather than an asset."
  },
  "founder.eliminated_tasks": {
    "id": "founder.eliminated_tasks",
    "name": "Eliminated Tasks",
    "department": "founder",
    "layer": 3,
    "definition": "Low-value tasks removed from workflows entirely.",
    "formula": "count(tasks_eliminated)",
    "type": "leading",
    "unit": "tasks_per_quarter",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 5
    },
    "thresholds": {
      "green": 5,
      "amber": 3,
      "red": 0
    },
    "cadence": "quarterly",
    "source": "manual_capture",
    "owner": "TBC",
    "framework_pillar": "martell",
    "impact_metric": false,
    "active": true
  },
  "founder.ladder_position": {
    "id": "founder.ladder_position",
    "name": "Replacement Ladder Position",
    "department": "founder",
    "layer": 2,
    "definition": "Highest filled rung of the Replacement Ladder, per brand, scored 0-5.",
    "formula": "max(rung where filled = true)",
    "type": "leading",
    "unit": "score_5",
    "direction": "higher_is_better",
    "target": {
      "mode": "trend",
      "value": "advance_one_rung_per_year"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "quarterly",
    "source": "coda",
    "owner": "TBC",
    "framework_pillar": "martell",
    "impact_metric": false,
    "active": true
  },
  "impact.people_helped": {
    "id": "impact.people_helped",
    "name": "People Helped",
    "department": "impact",
    "layer": 1,
    "block": "Foundation",
    "definition": "Cumulative people positively impacted \u2014 customers, franchisees, employees, community.",
    "formula": "sum(people_impacted)",
    "type": "lagging",
    "unit": "people",
    "direction": "higher_is_better",
    "target": {
      "mode": "trend",
      "value": "growing"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "manual_capture",
    "owner": "Ricardo Da Costa Maio",
    "framework_pillar": "squibb",
    "impact_metric": true,
    "active": true
  },
  "impact.purpose_score": {
    "id": "impact.purpose_score",
    "name": "Purpose Score",
    "department": "impact",
    "layer": 2,
    "definition": "Clarity and strength of brand mission, 1-10. Scored by whether the team can state the Dream unprompted.",
    "formula": "manual_assessment",
    "type": "leading",
    "unit": "score_10",
    "direction": "higher_is_better",
    "target": {
      "mode": "fixed",
      "value": 8
    },
    "thresholds": {
      "green": 8,
      "amber": 6,
      "red": 0
    },
    "cadence": "quarterly",
    "source": "manual_capture",
    "owner": "TBC",
    "framework_pillar": "squibb",
    "impact_metric": true,
    "active": true
  },
  "impact.jobs_sustained": {
    "id": "impact.jobs_sustained",
    "name": "Jobs Sustained",
    "department": "impact",
    "layer": 2,
    "definition": "Total FTE plus franchise-level employment supported by the group.",
    "formula": "fte_headcount + franchise_employment",
    "type": "lagging",
    "unit": "people",
    "direction": "higher_is_better",
    "target": {
      "mode": "trend",
      "value": "growing"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "quarterly",
    "source": "zoho_people",
    "owner": "TBC",
    "framework_pillar": "squibb",
    "impact_metric": true,
    "active": true
  },
  "funnel.leads": {
    "id": "funnel.leads",
    "name": "Leads Generated",
    "department": "mkt",
    "layer": 2,
    "grain": "product",
    "definition": "New leads generated in the month, per product. Stage 1 output.",
    "formula": "count(leads)",
    "type": "leading",
    "unit": "leads",
    "direction": "higher_is_better",
    "target": {
      "mode": "product_specific"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "funnel_tracker",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "funnel_stage": 1,
    "team": "marketing"
  },
  "funnel.conv_lead_to_opp": {
    "id": "funnel.conv_lead_to_opp",
    "name": "Conversion \u2014 Lead to Opportunity",
    "department": "sal",
    "layer": 2,
    "grain": "product",
    "definition": "Leads converted to qualified opportunities. This is the SDR team's number.",
    "formula": "funnel.opportunities / funnel.leads",
    "type": "leading",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "product_specific"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "funnel_tracker",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "funnel_stage": 2,
    "team": "sdr"
  },
  "funnel.opportunities": {
    "id": "funnel.opportunities",
    "name": "Qualified Opportunities",
    "department": "sal",
    "layer": 2,
    "grain": "product",
    "definition": "Leads qualified into opportunities. Stage 2 output.",
    "formula": "count(opportunities)",
    "type": "leading",
    "unit": "opportunities",
    "direction": "higher_is_better",
    "target": {
      "mode": "product_specific"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "funnel_tracker",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "funnel_stage": 2,
    "team": "sdr"
  },
  "funnel.cost_per_opportunity": {
    "id": "funnel.cost_per_opportunity",
    "name": "Cost per Opportunity",
    "department": "mkt",
    "layer": 3,
    "grain": "product",
    "definition": "Marketing spend divided by qualified opportunities produced.",
    "formula": "mkt.marketing_spend / funnel.opportunities",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "lower_is_better",
    "target": {
      "mode": "trend",
      "value": "decrease_qoq"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "calc",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "funnel_stage": 2
  },
  "funnel.conv_opp_to_close": {
    "id": "funnel.conv_opp_to_close",
    "name": "Conversion \u2014 Opportunity to Close",
    "department": "sal",
    "layer": 2,
    "grain": "product",
    "definition": "Opportunities converted to closed business. This is the Dealmaker team's number.",
    "formula": "funnel.closed_count / funnel.opportunities",
    "type": "lagging",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "product_specific"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "funnel_tracker",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "funnel_stage": 3,
    "team": "dealmaker"
  },
  "funnel.output_zar": {
    "id": "funnel.output_zar",
    "name": "Funnel Output \u2014 Value",
    "department": "sal",
    "layer": 1,
    "block": "Growth",
    "grain": "product",
    "definition": "Closed business value. Applies to professional services product lines only.",
    "formula": "sum(closed_value)",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "higher_is_better",
    "target": {
      "mode": "product_specific"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "funnel_tracker",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "funnel_stage": 3,
    "applies_to_lines": [
      "professional_services"
    ]
  },
  "funnel.output_locations": {
    "id": "funnel.output_locations",
    "name": "Funnel Output \u2014 Locations Sold",
    "department": "sal",
    "layer": 1,
    "block": "Growth",
    "grain": "product",
    "definition": "Franchise locations sold. Applies to FND product lines only. Never expressed in Rand at funnel level.",
    "formula": "count(locations_sold)",
    "type": "lagging",
    "unit": "franchise_locations",
    "direction": "higher_is_better",
    "target": {
      "mode": "product_specific"
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "funnel_tracker",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "funnel_stage": 3,
    "applies_to_lines": [
      "fnd"
    ]
  },
  "fin.ebitda": {
    "id": "fin.ebitda",
    "name": "EBITDA (basic)",
    "department": "fin",
    "layer": 2,
    "definition": "Earnings before interest, taxes, depreciation and amortisation. Revenue minus COGS minus operating expenditure.",
    "formula": "revenue - cogs - opex",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "higher_is_better",
    "target": {
      "mode": "per_brand",
      "values": {
        "infinity": 0,
        "tlf": 0,
        "infx": 0,
        "fluxflow": 0,
        "divorced": 0,
        "papapasta": 0,
        "acdc": 0
      }
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "note": "Basic EBITDA for departmental costing."
  },
  "fin.ebitda_dept": {
    "id": "fin.ebitda_dept",
    "name": "EBITDA (department)",
    "department": "fin",
    "layer": 3,
    "definition": "Department-level EBITDA contribution for departmental costing.",
    "formula": "dept_revenue - dept_cogs - dept_opex",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "higher_is_better",
    "target": {
      "mode": "per_brand",
      "values": {
        "infinity": 0,
        "tlf": 0,
        "infx": 0,
        "fluxflow": 0,
        "divorced": 0,
        "papapasta": 0,
        "acdc": 0
      }
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "note": "Departmental costing \u2014 EBITDA per department."
  },
  "fin.revenue_dept": {
    "id": "fin.revenue_dept",
    "name": "Department Revenue",
    "department": "fin",
    "layer": 3,
    "definition": "Revenue attributed to this department.",
    "formula": "sum(dept_revenue)",
    "type": "lagging",
    "unit": "ZAR",
    "direction": "higher_is_better",
    "target": {
      "mode": "per_brand",
      "values": {
        "infinity": 0,
        "tlf": 0,
        "infx": 0,
        "fluxflow": 0,
        "divorced": 0,
        "papapasta": 0,
        "acdc": 0
      }
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "note": "Departmental costing \u2014 revenue per department."
  },
  "fin.gross_margin_dept": {
    "id": "fin.gross_margin_dept",
    "name": "Department Gross Margin",
    "department": "fin",
    "layer": 3,
    "definition": "Gross margin percentage for this department.",
    "formula": "(dept_revenue - dept_cogs) / dept_revenue",
    "type": "lagging",
    "unit": "percent",
    "direction": "higher_is_better",
    "target": {
      "mode": "per_brand",
      "values": {
        "infinity": 0,
        "tlf": 0,
        "infx": 0,
        "fluxflow": 0,
        "divorced": 0,
        "papapasta": 0,
        "acdc": 0
      }
    },
    "thresholds": {
      "green": null,
      "amber": null,
      "red": null
    },
    "cadence": "monthly",
    "source": "zoho_books",
    "owner": "TBC",
    "framework_pillar": null,
    "impact_metric": false,
    "active": true,
    "note": "Departmental costing \u2014 gross margin per department."
  }
};
const GSD_BRANDS = {
  "infinity": {
    "id": "infinity",
    "name": "Infinity Brands",
    "role": "HQ / Holding",
    "status": "active",
    "priority": 2,
    "focus_metrics": [
      "founder.buyback_rate",
      "founder.delegation_ratio",
      "founder.escalations",
      "fin.net_burn",
      "hr.rev_per_fte",
      "impact.jobs_sustained"
    ]
  },
  "tlf": {
    "id": "tlf",
    "name": "The Local Farmer",
    "role": "Farm / Supply + FND",
    "status": "active",
    "priority": 2,
    "focus_metrics": [
      "ops.output_units",
      "fin.gross_margin",
      "ops.quality_score",
      "ops.delivery_on_time",
      "impact.people_helped"
    ]
  },
  "infx": {
    "id": "infx",
    "name": "INFX Solutions",
    "role": "Zoho Implementation / Digitisation",
    "status": "active",
    "priority": 1,
    "focus_metrics": [
      "fin.revenue",
      "sal.nrr",
      "ops.delivery_on_time",
      "ops.csat",
      "fin.recurring_ratio"
    ]
  },
  "fluxflow": {
    "id": "fluxflow",
    "name": "FluxFlow",
    "role": "ETL + Agentic AI Product",
    "status": "active_development",
    "priority": 1,
    "focus_metrics": [
      "fin.runway",
      "sal.pipeline",
      "it.automation_coverage",
      "it.ai_adoption",
      "sal.churn"
    ]
  },
  "divorced": {
    "id": "divorced",
    "name": "Divorced Dads",
    "role": "Family Law Tech App",
    "status": "active_development",
    "priority": 2,
    "focus_metrics": [
      "fin.runway",
      "impact.purpose_score",
      "mkt.community_size",
      "impact.people_helped"
    ]
  },
  "papapasta": {
    "id": "papapasta",
    "name": "Papa Pasta",
    "role": "FND \u2014 Food Franchise",
    "status": "proposed",
    "priority": 1,
    "focus_metrics": [
      "ops.unit_margin",
      "ops.quality_score",
      "fin.gross_margin",
      "impact.people_helped"
    ],
    "note": "In the Funnel Tracker as an FND product but absent from both predecessor schemas. See reconciliation_gaps."
  },
  "acdc": {
    "id": "acdc",
    "name": "ACDC Express",
    "role": "FND \u2014 Franchisor",
    "status": "proposed",
    "priority": 2,
    "focus_metrics": [
      "ops.unit_margin",
      "ops.sop_compliance",
      "impact.jobs_sustained"
    ],
    "note": "In the Funnel Tracker as an FND product but absent from both predecessor schemas."
  }
};
const GSD_PRODUCTS = [
  {
    "id": "inf_consultancy",
    "name": "INF Consultancy",
    "line": "professional_services",
    "brand": "infinity",
    "output_unit": "ZAR"
  },
  {
    "id": "sla_finance",
    "name": "SLA \u2014 Finance",
    "line": "professional_services",
    "brand": "infinity",
    "output_unit": "ZAR"
  },
  {
    "id": "sla_hr",
    "name": "SLA \u2014 HR",
    "line": "professional_services",
    "brand": "infinity",
    "output_unit": "ZAR"
  },
  {
    "id": "sla_zeestore",
    "name": "SLA \u2014 ZeeStore",
    "line": "professional_services",
    "brand": "infinity",
    "output_unit": "ZAR"
  },
  {
    "id": "infx_solutions",
    "name": "INFX Solutions",
    "line": "professional_services",
    "brand": "infx",
    "output_unit": "ZAR"
  },
  {
    "id": "fluxflow",
    "name": "FluxFlow",
    "line": "professional_services",
    "brand": "fluxflow",
    "output_unit": "ZAR"
  },
  {
    "id": "acdc_express",
    "name": "ACDC Express",
    "line": "fnd",
    "brand": "acdc",
    "output_unit": "franchise_locations"
  },
  {
    "id": "tlf",
    "name": "The Local Farmer",
    "line": "fnd",
    "brand": "tlf",
    "output_unit": "franchise_locations"
  },
  {
    "id": "papa_pasta",
    "name": "Papa Pasta",
    "line": "fnd",
    "brand": "papapasta",
    "output_unit": "franchise_locations"
  }
];
const GSD_DEPTS = {
  "fin": {
    "id": "fin",
    "code": "BU 1",
    "name": "FIN",
    "full": "BU 1 FIN",
    "north_star": "fin.runway"
  },
  "hr": {
    "id": "hr",
    "code": "BU 2",
    "name": "HRM",
    "full": "BU 2 HRM",
    "north_star": "hr.rev_per_fte"
  },
  "adm": {
    "id": "adm",
    "code": "BU 3",
    "name": "ADM",
    "full": "BU 3 ADM",
    "north_star": "impact.purpose_score"
  },
  "it": {
    "id": "it",
    "code": "BU 4",
    "name": "ITC",
    "full": "BU 4 ITC",
    "north_star": "it.system_uptime"
  },
  "mkt": {
    "id": "mkt",
    "code": "BU 5",
    "name": "MKT",
    "full": "BU 5 MKT",
    "north_star": "mkt.cost_per_lead"
  },
  "sal": {
    "id": "sal",
    "code": "BU 6",
    "name": "SAL",
    "full": "BU 6 SAL",
    "north_star": "sal.pipeline_coverage"
  },
  "ops1": {
    "id": "ops1",
    "code": "BU 7",
    "name": "ZOR BO 1",
    "full": "BU 7 ZOR BO 1 (ACDC Express + Future Client)",
    "north_star": "ops.quality_score",
    "brands": [
      "acdc"
    ]
  },
  "ops2": {
    "id": "ops2",
    "code": "BU 8",
    "name": "ZOR BO 2",
    "full": "BU 8 ZOR BO 2 (The Local Farmer + Papa Pasta)",
    "north_star": "ops.quality_score",
    "brands": [
      "tlf",
      "papapasta"
    ]
  }
};
const GSD_MONTHS = ["2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08"];
const GSD_CURRENT = "2026-08";
const GSD_READINGS = [{"metric_id": "fin.revenue", "brand_id": "infinity", "period": "2026-03", "value": 124000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.revenue", "brand_id": "infinity", "period": "2026-04", "value": 331000, "target": null, "status": "no_data", "vs_prior": 207000}, {"metric_id": "fin.revenue", "brand_id": "infinity", "period": "2026-05", "value": 701000, "target": null, "status": "no_data", "vs_prior": 370000}, {"metric_id": "fin.revenue", "brand_id": "infinity", "period": "2026-06", "value": 782000, "target": null, "status": "no_data", "vs_prior": 81000}, {"metric_id": "fin.revenue", "brand_id": "infinity", "period": "2026-07", "value": 582000, "target": null, "status": "no_data", "vs_prior": -200000}, {"metric_id": "fin.revenue", "brand_id": "infinity", "period": "2026-08", "value": 423000, "target": null, "status": "no_data", "vs_prior": -159000}, {"metric_id": "fin.revenue", "brand_id": "tlf", "period": "2026-03", "value": 764000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.revenue", "brand_id": "tlf", "period": "2026-04", "value": 558000, "target": null, "status": "no_data", "vs_prior": -206000}, {"metric_id": "fin.revenue", "brand_id": "tlf", "period": "2026-05", "value": 277000, "target": null, "status": "no_data", "vs_prior": -281000}, {"metric_id": "fin.revenue", "brand_id": "tlf", "period": "2026-06", "value": 475000, "target": null, "status": "no_data", "vs_prior": 198000}, {"metric_id": "fin.revenue", "brand_id": "tlf", "period": "2026-07", "value": 649000, "target": null, "status": "no_data", "vs_prior": 174000}, {"metric_id": "fin.revenue", "brand_id": "tlf", "period": "2026-08", "value": 461000, "target": null, "status": "no_data", "vs_prior": -188000}, {"metric_id": "fin.revenue", "brand_id": "infx", "period": "2026-03", "value": 373000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.revenue", "brand_id": "infx", "period": "2026-04", "value": 226000, "target": null, "status": "no_data", "vs_prior": -147000}, {"metric_id": "fin.revenue", "brand_id": "infx", "period": "2026-05", "value": 246000, "target": null, "status": "no_data", "vs_prior": 20000}, {"metric_id": "fin.revenue", "brand_id": "infx", "period": "2026-06", "value": 323000, "target": null, "status": "no_data", "vs_prior": 77000}, {"metric_id": "fin.revenue", "brand_id": "infx", "period": "2026-07", "value": 661000, "target": null, "status": "no_data", "vs_prior": 338000}, {"metric_id": "fin.revenue", "brand_id": "infx", "period": "2026-08", "value": 725000, "target": null, "status": "no_data", "vs_prior": 64000}, {"metric_id": "fin.revenue", "brand_id": "fluxflow", "period": "2026-03", "value": 656000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.revenue", "brand_id": "fluxflow", "period": "2026-04", "value": 227000, "target": null, "status": "no_data", "vs_prior": -429000}, {"metric_id": "fin.revenue", "brand_id": "fluxflow", "period": "2026-05", "value": 571000, "target": null, "status": "no_data", "vs_prior": 344000}, {"metric_id": "fin.revenue", "brand_id": "fluxflow", "period": "2026-06", "value": 674000, "target": null, "status": "no_data", "vs_prior": 103000}, {"metric_id": "fin.revenue", "brand_id": "fluxflow", "period": "2026-07", "value": 132000, "target": null, "status": "no_data", "vs_prior": -542000}, {"metric_id": "fin.revenue", "brand_id": "fluxflow", "period": "2026-08", "value": 586000, "target": null, "status": "no_data", "vs_prior": 454000}, {"metric_id": "fin.revenue", "brand_id": "divorced", "period": "2026-03", "value": 359000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.revenue", "brand_id": "divorced", "period": "2026-04", "value": 459000, "target": null, "status": "no_data", "vs_prior": 100000}, {"metric_id": "fin.revenue", "brand_id": "divorced", "period": "2026-05", "value": 567000, "target": null, "status": "no_data", "vs_prior": 108000}, {"metric_id": "fin.revenue", "brand_id": "divorced", "period": "2026-06", "value": 599000, "target": null, "status": "no_data", "vs_prior": 32000}, {"metric_id": "fin.revenue", "brand_id": "divorced", "period": "2026-07", "value": 352000, "target": null, "status": "no_data", "vs_prior": -247000}, {"metric_id": "fin.revenue", "brand_id": "divorced", "period": "2026-08", "value": 312000, "target": null, "status": "no_data", "vs_prior": -40000}, {"metric_id": "fin.revenue", "brand_id": "papapasta", "period": "2026-03", "value": 172000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.revenue", "brand_id": "papapasta", "period": "2026-04", "value": 92000, "target": null, "status": "no_data", "vs_prior": -80000}, {"metric_id": "fin.revenue", "brand_id": "papapasta", "period": "2026-05", "value": 630000, "target": null, "status": "no_data", "vs_prior": 538000}, {"metric_id": "fin.revenue", "brand_id": "papapasta", "period": "2026-06", "value": 555000, "target": null, "status": "no_data", "vs_prior": -75000}, {"metric_id": "fin.revenue", "brand_id": "papapasta", "period": "2026-07", "value": 853000, "target": null, "status": "no_data", "vs_prior": 298000}, {"metric_id": "fin.revenue", "brand_id": "papapasta", "period": "2026-08", "value": 891000, "target": null, "status": "no_data", "vs_prior": 38000}, {"metric_id": "fin.revenue", "brand_id": "acdc", "period": "2026-03", "value": 231000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.revenue", "brand_id": "acdc", "period": "2026-04", "value": 803000, "target": null, "status": "no_data", "vs_prior": 572000}, {"metric_id": "fin.revenue", "brand_id": "acdc", "period": "2026-05", "value": 458000, "target": null, "status": "no_data", "vs_prior": -345000}, {"metric_id": "fin.revenue", "brand_id": "acdc", "period": "2026-06", "value": 140000, "target": null, "status": "no_data", "vs_prior": -318000}, {"metric_id": "fin.revenue", "brand_id": "acdc", "period": "2026-07", "value": 451000, "target": null, "status": "no_data", "vs_prior": 311000}, {"metric_id": "fin.revenue", "brand_id": "acdc", "period": "2026-08", "value": 347000, "target": null, "status": "no_data", "vs_prior": -104000}, {"metric_id": "fin.gross_margin", "brand_id": "infinity", "period": "2026-03", "value": 34.4, "target": 55, "status": "red", "vs_prior": null}, {"metric_id": "fin.gross_margin", "brand_id": "infinity", "period": "2026-04", "value": 46.2, "target": 55, "status": "red", "vs_prior": 11.8}, {"metric_id": "fin.gross_margin", "brand_id": "infinity", "period": "2026-05", "value": 50.3, "target": 55, "status": "amber", "vs_prior": 4.1}, {"metric_id": "fin.gross_margin", "brand_id": "infinity", "period": "2026-06", "value": 46.7, "target": 55, "status": "red", "vs_prior": -3.6}, {"metric_id": "fin.gross_margin", "brand_id": "infinity", "period": "2026-07", "value": 46.2, "target": 55, "status": "red", "vs_prior": -0.5}, {"metric_id": "fin.gross_margin", "brand_id": "infinity", "period": "2026-08", "value": 51.9, "target": 55, "status": "amber", "vs_prior": 5.7}, {"metric_id": "fin.gross_margin", "brand_id": "tlf", "period": "2026-03", "value": 21.2, "target": 30, "status": "red", "vs_prior": null}, {"metric_id": "fin.gross_margin", "brand_id": "tlf", "period": "2026-04", "value": 19.9, "target": 30, "status": "red", "vs_prior": -1.3}, {"metric_id": "fin.gross_margin", "brand_id": "tlf", "period": "2026-05", "value": 23.7, "target": 30, "status": "red", "vs_prior": 3.8}, {"metric_id": "fin.gross_margin", "brand_id": "tlf", "period": "2026-06", "value": 24.2, "target": 30, "status": "red", "vs_prior": 0.5}, {"metric_id": "fin.gross_margin", "brand_id": "tlf", "period": "2026-07", "value": 27.2, "target": 30, "status": "amber", "vs_prior": 3.0}, {"metric_id": "fin.gross_margin", "brand_id": "tlf", "period": "2026-08", "value": 29.4, "target": 30, "status": "amber", "vs_prior": 2.2}, {"metric_id": "fin.gross_margin", "brand_id": "infx", "period": "2026-03", "value": 43.9, "target": 60, "status": "red", "vs_prior": null}, {"metric_id": "fin.gross_margin", "brand_id": "infx", "period": "2026-04", "value": 52.3, "target": 60, "status": "red", "vs_prior": 8.4}, {"metric_id": "fin.gross_margin", "brand_id": "infx", "period": "2026-05", "value": 44.5, "target": 60, "status": "red", "vs_prior": -7.8}, {"metric_id": "fin.gross_margin", "brand_id": "infx", "period": "2026-06", "value": 52.0, "target": 60, "status": "red", "vs_prior": 7.5}, {"metric_id": "fin.gross_margin", "brand_id": "infx", "period": "2026-07", "value": 54.5, "target": 60, "status": "amber", "vs_prior": 2.5}, {"metric_id": "fin.gross_margin", "brand_id": "infx", "period": "2026-08", "value": 59.9, "target": 60, "status": "amber", "vs_prior": 5.4}, {"metric_id": "fin.gross_margin", "brand_id": "fluxflow", "period": "2026-03", "value": 42.3, "target": 70, "status": "red", "vs_prior": null}, {"metric_id": "fin.gross_margin", "brand_id": "fluxflow", "period": "2026-04", "value": 55.0, "target": 70, "status": "red", "vs_prior": 12.7}, {"metric_id": "fin.gross_margin", "brand_id": "fluxflow", "period": "2026-05", "value": 54.9, "target": 70, "status": "red", "vs_prior": -0.1}, {"metric_id": "fin.gross_margin", "brand_id": "fluxflow", "period": "2026-06", "value": 56.2, "target": 70, "status": "red", "vs_prior": 1.3}, {"metric_id": "fin.gross_margin", "brand_id": "fluxflow", "period": "2026-07", "value": 65.3, "target": 70, "status": "amber", "vs_prior": 9.1}, {"metric_id": "fin.gross_margin", "brand_id": "fluxflow", "period": "2026-08", "value": 74.8, "target": 70, "status": "green", "vs_prior": 9.5}, {"metric_id": "fin.gross_margin", "brand_id": "divorced", "period": "2026-03", "value": 50.9, "target": 70, "status": "red", "vs_prior": null}, {"metric_id": "fin.gross_margin", "brand_id": "divorced", "period": "2026-04", "value": 60.3, "target": 70, "status": "red", "vs_prior": 9.4}, {"metric_id": "fin.gross_margin", "brand_id": "divorced", "period": "2026-05", "value": 51.9, "target": 70, "status": "red", "vs_prior": -8.4}, {"metric_id": "fin.gross_margin", "brand_id": "divorced", "period": "2026-06", "value": 58.3, "target": 70, "status": "red", "vs_prior": 6.4}, {"metric_id": "fin.gross_margin", "brand_id": "divorced", "period": "2026-07", "value": 65.2, "target": 70, "status": "amber", "vs_prior": 6.9}, {"metric_id": "fin.gross_margin", "brand_id": "divorced", "period": "2026-08", "value": 75.3, "target": 70, "status": "green", "vs_prior": 10.1}, {"metric_id": "fin.gross_margin", "brand_id": "papapasta", "period": "2026-03", "value": 49.6, "target": 65, "status": "red", "vs_prior": null}, {"metric_id": "fin.gross_margin", "brand_id": "papapasta", "period": "2026-04", "value": 56.0, "target": 65, "status": "red", "vs_prior": 6.4}, {"metric_id": "fin.gross_margin", "brand_id": "papapasta", "period": "2026-05", "value": 49.6, "target": 65, "status": "red", "vs_prior": -6.4}, {"metric_id": "fin.gross_margin", "brand_id": "papapasta", "period": "2026-06", "value": 62.6, "target": 65, "status": "amber", "vs_prior": 13.0}, {"metric_id": "fin.gross_margin", "brand_id": "papapasta", "period": "2026-07", "value": 56.8, "target": 65, "status": "red", "vs_prior": -5.8}, {"metric_id": "fin.gross_margin", "brand_id": "papapasta", "period": "2026-08", "value": 69.7, "target": 65, "status": "green", "vs_prior": 12.9}, {"metric_id": "fin.gross_margin", "brand_id": "acdc", "period": "2026-03", "value": 18.2, "target": 25, "status": "red", "vs_prior": null}, {"metric_id": "fin.gross_margin", "brand_id": "acdc", "period": "2026-04", "value": 16.6, "target": 25, "status": "red", "vs_prior": -1.6}, {"metric_id": "fin.gross_margin", "brand_id": "acdc", "period": "2026-05", "value": 19.9, "target": 25, "status": "red", "vs_prior": 3.3}, {"metric_id": "fin.gross_margin", "brand_id": "acdc", "period": "2026-06", "value": 22.0, "target": 25, "status": "red", "vs_prior": 2.1}, {"metric_id": "fin.gross_margin", "brand_id": "acdc", "period": "2026-07", "value": 24.0, "target": 25, "status": "amber", "vs_prior": 2.0}, {"metric_id": "fin.gross_margin", "brand_id": "acdc", "period": "2026-08", "value": 26.2, "target": 25, "status": "green", "vs_prior": 2.2}, {"metric_id": "fin.net_burn", "brand_id": "infinity", "period": "2026-03", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": null}, {"metric_id": "fin.net_burn", "brand_id": "infinity", "period": "2026-04", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "infinity", "period": "2026-05", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "infinity", "period": "2026-06", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "infinity", "period": "2026-07", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "infinity", "period": "2026-08", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "tlf", "period": "2026-03", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": null}, {"metric_id": "fin.net_burn", "brand_id": "tlf", "period": "2026-04", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "tlf", "period": "2026-05", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "tlf", "period": "2026-06", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "tlf", "period": "2026-07", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "tlf", "period": "2026-08", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "infx", "period": "2026-03", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": null}, {"metric_id": "fin.net_burn", "brand_id": "infx", "period": "2026-04", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "infx", "period": "2026-05", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "infx", "period": "2026-06", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "infx", "period": "2026-07", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "infx", "period": "2026-08", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "fluxflow", "period": "2026-03", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": null}, {"metric_id": "fin.net_burn", "brand_id": "fluxflow", "period": "2026-04", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "fluxflow", "period": "2026-05", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "fluxflow", "period": "2026-06", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "fluxflow", "period": "2026-07", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "fluxflow", "period": "2026-08", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "divorced", "period": "2026-03", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": null}, {"metric_id": "fin.net_burn", "brand_id": "divorced", "period": "2026-04", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "divorced", "period": "2026-05", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "divorced", "period": "2026-06", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "divorced", "period": "2026-07", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "divorced", "period": "2026-08", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "papapasta", "period": "2026-03", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": null}, {"metric_id": "fin.net_burn", "brand_id": "papapasta", "period": "2026-04", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "papapasta", "period": "2026-05", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "papapasta", "period": "2026-06", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "papapasta", "period": "2026-07", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "papapasta", "period": "2026-08", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "acdc", "period": "2026-03", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": null}, {"metric_id": "fin.net_burn", "brand_id": "acdc", "period": "2026-04", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "acdc", "period": "2026-05", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "acdc", "period": "2026-06", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "acdc", "period": "2026-07", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.net_burn", "brand_id": "acdc", "period": "2026-08", "value": 0, "target": "< fin.revenue", "status": "no_data", "vs_prior": 0}, {"metric_id": "fin.runway", "brand_id": "infinity", "period": "2026-03", "value": 8.6, "target": 12, "status": "red", "vs_prior": null}, {"metric_id": "fin.runway", "brand_id": "infinity", "period": "2026-04", "value": 9.7, "target": 12, "status": "red", "vs_prior": 1.1}, {"metric_id": "fin.runway", "brand_id": "infinity", "period": "2026-05", "value": 10.6, "target": 12, "status": "red", "vs_prior": 0.9}, {"metric_id": "fin.runway", "brand_id": "infinity", "period": "2026-06", "value": 10.8, "target": 12, "status": "amber", "vs_prior": 0.2}, {"metric_id": "fin.runway", "brand_id": "infinity", "period": "2026-07", "value": 11.7, "target": 12, "status": "amber", "vs_prior": 0.9}, {"metric_id": "fin.runway", "brand_id": "infinity", "period": "2026-08", "value": 10.6, "target": 12, "status": "red", "vs_prior": -1.1}, {"metric_id": "fin.runway", "brand_id": "tlf", "period": "2026-03", "value": 9.5, "target": 12, "status": "red", "vs_prior": null}, {"metric_id": "fin.runway", "brand_id": "tlf", "period": "2026-04", "value": 8.0, "target": 12, "status": "red", "vs_prior": -1.5}, {"metric_id": "fin.runway", "brand_id": "tlf", "period": "2026-05", "value": 11.2, "target": 12, "status": "amber", "vs_prior": 3.2}, {"metric_id": "fin.runway", "brand_id": "tlf", "period": "2026-06", "value": 10.0, "target": 12, "status": "red", "vs_prior": -1.2}, {"metric_id": "fin.runway", "brand_id": "tlf", "period": "2026-07", "value": 10.8, "target": 12, "status": "amber", "vs_prior": 0.8}, {"metric_id": "fin.runway", "brand_id": "tlf", "period": "2026-08", "value": 12.2, "target": 12, "status": "green", "vs_prior": 1.4}, {"metric_id": "fin.runway", "brand_id": "infx", "period": "2026-03", "value": 9.6, "target": 12, "status": "red", "vs_prior": null}, {"metric_id": "fin.runway", "brand_id": "infx", "period": "2026-04", "value": 8.1, "target": 12, "status": "red", "vs_prior": -1.5}, {"metric_id": "fin.runway", "brand_id": "infx", "period": "2026-05", "value": 10.6, "target": 12, "status": "red", "vs_prior": 2.5}, {"metric_id": "fin.runway", "brand_id": "infx", "period": "2026-06", "value": 10.0, "target": 12, "status": "red", "vs_prior": -0.6}, {"metric_id": "fin.runway", "brand_id": "infx", "period": "2026-07", "value": 11.9, "target": 12, "status": "amber", "vs_prior": 1.9}, {"metric_id": "fin.runway", "brand_id": "infx", "period": "2026-08", "value": 11.9, "target": 12, "status": "amber", "vs_prior": 0.0}, {"metric_id": "fin.runway", "brand_id": "fluxflow", "period": "2026-03", "value": 7.8, "target": 12, "status": "red", "vs_prior": null}, {"metric_id": "fin.runway", "brand_id": "fluxflow", "period": "2026-04", "value": 8.8, "target": 12, "status": "red", "vs_prior": 1.0}, {"metric_id": "fin.runway", "brand_id": "fluxflow", "period": "2026-05", "value": 10.4, "target": 12, "status": "red", "vs_prior": 1.6}, {"metric_id": "fin.runway", "brand_id": "fluxflow", "period": "2026-06", "value": 11.9, "target": 12, "status": "amber", "vs_prior": 1.5}, {"metric_id": "fin.runway", "brand_id": "fluxflow", "period": "2026-07", "value": 11.8, "target": 12, "status": "amber", "vs_prior": -0.1}, {"metric_id": "fin.runway", "brand_id": "fluxflow", "period": "2026-08", "value": 11.2, "target": 12, "status": "amber", "vs_prior": -0.6}, {"metric_id": "fin.runway", "brand_id": "divorced", "period": "2026-03", "value": 7.4, "target": 12, "status": "red", "vs_prior": null}, {"metric_id": "fin.runway", "brand_id": "divorced", "period": "2026-04", "value": 9.4, "target": 12, "status": "red", "vs_prior": 2.0}, {"metric_id": "fin.runway", "brand_id": "divorced", "period": "2026-05", "value": 10.4, "target": 12, "status": "red", "vs_prior": 1.0}, {"metric_id": "fin.runway", "brand_id": "divorced", "period": "2026-06", "value": 10.4, "target": 12, "status": "red", "vs_prior": 0.0}, {"metric_id": "fin.runway", "brand_id": "divorced", "period": "2026-07", "value": 10.9, "target": 12, "status": "amber", "vs_prior": 0.5}, {"metric_id": "fin.runway", "brand_id": "divorced", "period": "2026-08", "value": 13.2, "target": 12, "status": "green", "vs_prior": 2.3}, {"metric_id": "fin.runway", "brand_id": "papapasta", "period": "2026-03", "value": 7.7, "target": 12, "status": "red", "vs_prior": null}, {"metric_id": "fin.runway", "brand_id": "papapasta", "period": "2026-04", "value": 10.0, "target": 12, "status": "red", "vs_prior": 2.3}, {"metric_id": "fin.runway", "brand_id": "papapasta", "period": "2026-05", "value": 10.4, "target": 12, "status": "red", "vs_prior": 0.4}, {"metric_id": "fin.runway", "brand_id": "papapasta", "period": "2026-06", "value": 10.6, "target": 12, "status": "red", "vs_prior": 0.2}, {"metric_id": "fin.runway", "brand_id": "papapasta", "period": "2026-07", "value": 10.3, "target": 12, "status": "red", "vs_prior": -0.3}, {"metric_id": "fin.runway", "brand_id": "papapasta", "period": "2026-08", "value": 11.6, "target": 12, "status": "amber", "vs_prior": 1.3}, {"metric_id": "fin.runway", "brand_id": "acdc", "period": "2026-03", "value": 8.4, "target": 12, "status": "red", "vs_prior": null}, {"metric_id": "fin.runway", "brand_id": "acdc", "period": "2026-04", "value": 9.7, "target": 12, "status": "red", "vs_prior": 1.3}, {"metric_id": "fin.runway", "brand_id": "acdc", "period": "2026-05", "value": 10.4, "target": 12, "status": "red", "vs_prior": 0.7}, {"metric_id": "fin.runway", "brand_id": "acdc", "period": "2026-06", "value": 10.0, "target": 12, "status": "red", "vs_prior": -0.4}, {"metric_id": "fin.runway", "brand_id": "acdc", "period": "2026-07", "value": 11.5, "target": 12, "status": "amber", "vs_prior": 1.5}, {"metric_id": "fin.runway", "brand_id": "acdc", "period": "2026-08", "value": 12.9, "target": 12, "status": "green", "vs_prior": 1.4}, {"metric_id": "fin.dso", "brand_id": "infinity", "period": "2026-03", "value": 18.1, "target": 30, "status": "green", "vs_prior": null}, {"metric_id": "fin.dso", "brand_id": "infinity", "period": "2026-04", "value": 25.2, "target": 30, "status": "green", "vs_prior": 7.1}, {"metric_id": "fin.dso", "brand_id": "infinity", "period": "2026-05", "value": 27.0, "target": 30, "status": "green", "vs_prior": 1.8}, {"metric_id": "fin.dso", "brand_id": "infinity", "period": "2026-06", "value": 28.6, "target": 30, "status": "green", "vs_prior": 1.6}, {"metric_id": "fin.dso", "brand_id": "infinity", "period": "2026-07", "value": 29.6, "target": 30, "status": "green", "vs_prior": 1.0}, {"metric_id": "fin.dso", "brand_id": "infinity", "period": "2026-08", "value": 26.9, "target": 30, "status": "green", "vs_prior": -2.7}, {"metric_id": "fin.dso", "brand_id": "tlf", "period": "2026-03", "value": 17.7, "target": 30, "status": "green", "vs_prior": null}, {"metric_id": "fin.dso", "brand_id": "tlf", "period": "2026-04", "value": 19.5, "target": 30, "status": "green", "vs_prior": 1.8}, {"metric_id": "fin.dso", "brand_id": "tlf", "period": "2026-05", "value": 21.4, "target": 30, "status": "green", "vs_prior": 1.9}, {"metric_id": "fin.dso", "brand_id": "tlf", "period": "2026-06", "value": 23.8, "target": 30, "status": "green", "vs_prior": 2.4}, {"metric_id": "fin.dso", "brand_id": "tlf", "period": "2026-07", "value": 31.5, "target": 30, "status": "amber", "vs_prior": 7.7}, {"metric_id": "fin.dso", "brand_id": "tlf", "period": "2026-08", "value": 32.7, "target": 30, "status": "amber", "vs_prior": 1.2}, {"metric_id": "fin.dso", "brand_id": "infx", "period": "2026-03", "value": 17.6, "target": 30, "status": "green", "vs_prior": null}, {"metric_id": "fin.dso", "brand_id": "infx", "period": "2026-04", "value": 24.7, "target": 30, "status": "green", "vs_prior": 7.1}, {"metric_id": "fin.dso", "brand_id": "infx", "period": "2026-05", "value": 22.9, "target": 30, "status": "green", "vs_prior": -1.8}, {"metric_id": "fin.dso", "brand_id": "infx", "period": "2026-06", "value": 26.3, "target": 30, "status": "green", "vs_prior": 3.4}, {"metric_id": "fin.dso", "brand_id": "infx", "period": "2026-07", "value": 27.9, "target": 30, "status": "green", "vs_prior": 1.6}, {"metric_id": "fin.dso", "brand_id": "infx", "period": "2026-08", "value": 33.1, "target": 30, "status": "red", "vs_prior": 5.2}, {"metric_id": "fin.dso", "brand_id": "fluxflow", "period": "2026-03", "value": 24.6, "target": 30, "status": "green", "vs_prior": null}, {"metric_id": "fin.dso", "brand_id": "fluxflow", "period": "2026-04", "value": 26.1, "target": 30, "status": "green", "vs_prior": 1.5}, {"metric_id": "fin.dso", "brand_id": "fluxflow", "period": "2026-05", "value": 26.4, "target": 30, "status": "green", "vs_prior": 0.3}, {"metric_id": "fin.dso", "brand_id": "fluxflow", "period": "2026-06", "value": 28.6, "target": 30, "status": "green", "vs_prior": 2.2}, {"metric_id": "fin.dso", "brand_id": "fluxflow", "period": "2026-07", "value": 28.9, "target": 30, "status": "green", "vs_prior": 0.3}, {"metric_id": "fin.dso", "brand_id": "fluxflow", "period": "2026-08", "value": 27.3, "target": 30, "status": "green", "vs_prior": -1.6}, {"metric_id": "fin.dso", "brand_id": "divorced", "period": "2026-03", "value": 21.7, "target": 30, "status": "green", "vs_prior": null}, {"metric_id": "fin.dso", "brand_id": "divorced", "period": "2026-04", "value": 19.2, "target": 30, "status": "green", "vs_prior": -2.5}, {"metric_id": "fin.dso", "brand_id": "divorced", "period": "2026-05", "value": 25.9, "target": 30, "status": "green", "vs_prior": 6.7}, {"metric_id": "fin.dso", "brand_id": "divorced", "period": "2026-06", "value": 26.4, "target": 30, "status": "green", "vs_prior": 0.5}, {"metric_id": "fin.dso", "brand_id": "divorced", "period": "2026-07", "value": 29.4, "target": 30, "status": "green", "vs_prior": 3.0}, {"metric_id": "fin.dso", "brand_id": "divorced", "period": "2026-08", "value": 30.2, "target": 30, "status": "amber", "vs_prior": 0.8}, {"metric_id": "fin.dso", "brand_id": "papapasta", "period": "2026-03", "value": 24.3, "target": 30, "status": "green", "vs_prior": null}, {"metric_id": "fin.dso", "brand_id": "papapasta", "period": "2026-04", "value": 23.7, "target": 30, "status": "green", "vs_prior": -0.6}, {"metric_id": "fin.dso", "brand_id": "papapasta", "period": "2026-05", "value": 23.6, "target": 30, "status": "green", "vs_prior": -0.1}, {"metric_id": "fin.dso", "brand_id": "papapasta", "period": "2026-06", "value": 24.3, "target": 30, "status": "green", "vs_prior": 0.7}, {"metric_id": "fin.dso", "brand_id": "papapasta", "period": "2026-07", "value": 28.3, "target": 30, "status": "green", "vs_prior": 4.0}, {"metric_id": "fin.dso", "brand_id": "papapasta", "period": "2026-08", "value": 30.7, "target": 30, "status": "amber", "vs_prior": 2.4}, {"metric_id": "fin.dso", "brand_id": "acdc", "period": "2026-03", "value": 21.1, "target": 30, "status": "green", "vs_prior": null}, {"metric_id": "fin.dso", "brand_id": "acdc", "period": "2026-04", "value": 21.3, "target": 30, "status": "green", "vs_prior": 0.2}, {"metric_id": "fin.dso", "brand_id": "acdc", "period": "2026-05", "value": 25.1, "target": 30, "status": "green", "vs_prior": 3.8}, {"metric_id": "fin.dso", "brand_id": "acdc", "period": "2026-06", "value": 27.3, "target": 30, "status": "green", "vs_prior": 2.2}, {"metric_id": "fin.dso", "brand_id": "acdc", "period": "2026-07", "value": 28.4, "target": 30, "status": "green", "vs_prior": 1.1}, {"metric_id": "fin.dso", "brand_id": "acdc", "period": "2026-08", "value": 33.3, "target": 30, "status": "red", "vs_prior": 4.9}, {"metric_id": "fin.opex_ratio", "brand_id": "infinity", "period": "2026-03", "value": 75.9, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.opex_ratio", "brand_id": "infinity", "period": "2026-04", "value": 87.3, "target": null, "status": "no_data", "vs_prior": 11.4}, {"metric_id": "fin.opex_ratio", "brand_id": "infinity", "period": "2026-05", "value": 70.3, "target": null, "status": "no_data", "vs_prior": -17.0}, {"metric_id": "fin.opex_ratio", "brand_id": "infinity", "period": "2026-06", "value": 82.9, "target": null, "status": "no_data", "vs_prior": 12.6}, {"metric_id": "fin.opex_ratio", "brand_id": "infinity", "period": "2026-07", "value": 84.5, "target": null, "status": "no_data", "vs_prior": 1.6}, {"metric_id": "fin.opex_ratio", "brand_id": "infinity", "period": "2026-08", "value": 87.0, "target": null, "status": "no_data", "vs_prior": 2.5}, {"metric_id": "fin.opex_ratio", "brand_id": "tlf", "period": "2026-03", "value": 83.7, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.opex_ratio", "brand_id": "tlf", "period": "2026-04", "value": 74.6, "target": null, "status": "no_data", "vs_prior": -9.1}, {"metric_id": "fin.opex_ratio", "brand_id": "tlf", "period": "2026-05", "value": 92.1, "target": null, "status": "no_data", "vs_prior": 17.5}, {"metric_id": "fin.opex_ratio", "brand_id": "tlf", "period": "2026-06", "value": 55.8, "target": null, "status": "no_data", "vs_prior": -36.3}, {"metric_id": "fin.opex_ratio", "brand_id": "tlf", "period": "2026-07", "value": 92.4, "target": null, "status": "no_data", "vs_prior": 36.6}, {"metric_id": "fin.opex_ratio", "brand_id": "tlf", "period": "2026-08", "value": 55.8, "target": null, "status": "no_data", "vs_prior": -36.6}, {"metric_id": "fin.opex_ratio", "brand_id": "infx", "period": "2026-03", "value": 69.6, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.opex_ratio", "brand_id": "infx", "period": "2026-04", "value": 84.4, "target": null, "status": "no_data", "vs_prior": 14.8}, {"metric_id": "fin.opex_ratio", "brand_id": "infx", "period": "2026-05", "value": 69.5, "target": null, "status": "no_data", "vs_prior": -14.9}, {"metric_id": "fin.opex_ratio", "brand_id": "infx", "period": "2026-06", "value": 75.8, "target": null, "status": "no_data", "vs_prior": 6.3}, {"metric_id": "fin.opex_ratio", "brand_id": "infx", "period": "2026-07", "value": 74.3, "target": null, "status": "no_data", "vs_prior": -1.5}, {"metric_id": "fin.opex_ratio", "brand_id": "infx", "period": "2026-08", "value": 71.9, "target": null, "status": "no_data", "vs_prior": -2.4}, {"metric_id": "fin.opex_ratio", "brand_id": "fluxflow", "period": "2026-03", "value": 79.5, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.opex_ratio", "brand_id": "fluxflow", "period": "2026-04", "value": 91.5, "target": null, "status": "no_data", "vs_prior": 12.0}, {"metric_id": "fin.opex_ratio", "brand_id": "fluxflow", "period": "2026-05", "value": 94.3, "target": null, "status": "no_data", "vs_prior": 2.8}, {"metric_id": "fin.opex_ratio", "brand_id": "fluxflow", "period": "2026-06", "value": 85.6, "target": null, "status": "no_data", "vs_prior": -8.7}, {"metric_id": "fin.opex_ratio", "brand_id": "fluxflow", "period": "2026-07", "value": 69.1, "target": null, "status": "no_data", "vs_prior": -16.5}, {"metric_id": "fin.opex_ratio", "brand_id": "fluxflow", "period": "2026-08", "value": 58.4, "target": null, "status": "no_data", "vs_prior": -10.7}, {"metric_id": "fin.opex_ratio", "brand_id": "divorced", "period": "2026-03", "value": 56.0, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.opex_ratio", "brand_id": "divorced", "period": "2026-04", "value": 61.0, "target": null, "status": "no_data", "vs_prior": 5.0}, {"metric_id": "fin.opex_ratio", "brand_id": "divorced", "period": "2026-05", "value": 70.7, "target": null, "status": "no_data", "vs_prior": 9.7}, {"metric_id": "fin.opex_ratio", "brand_id": "divorced", "period": "2026-06", "value": 72.7, "target": null, "status": "no_data", "vs_prior": 2.0}, {"metric_id": "fin.opex_ratio", "brand_id": "divorced", "period": "2026-07", "value": 66.9, "target": null, "status": "no_data", "vs_prior": -5.8}, {"metric_id": "fin.opex_ratio", "brand_id": "divorced", "period": "2026-08", "value": 62.0, "target": null, "status": "no_data", "vs_prior": -4.9}, {"metric_id": "fin.opex_ratio", "brand_id": "papapasta", "period": "2026-03", "value": 69.9, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.opex_ratio", "brand_id": "papapasta", "period": "2026-04", "value": 80.5, "target": null, "status": "no_data", "vs_prior": 10.6}, {"metric_id": "fin.opex_ratio", "brand_id": "papapasta", "period": "2026-05", "value": 92.3, "target": null, "status": "no_data", "vs_prior": 11.8}, {"metric_id": "fin.opex_ratio", "brand_id": "papapasta", "period": "2026-06", "value": 75.4, "target": null, "status": "no_data", "vs_prior": -16.9}, {"metric_id": "fin.opex_ratio", "brand_id": "papapasta", "period": "2026-07", "value": 76.7, "target": null, "status": "no_data", "vs_prior": 1.3}, {"metric_id": "fin.opex_ratio", "brand_id": "papapasta", "period": "2026-08", "value": 58.7, "target": null, "status": "no_data", "vs_prior": -18.0}, {"metric_id": "fin.opex_ratio", "brand_id": "acdc", "period": "2026-03", "value": 65.7, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "fin.opex_ratio", "brand_id": "acdc", "period": "2026-04", "value": 75.9, "target": null, "status": "no_data", "vs_prior": 10.2}, {"metric_id": "fin.opex_ratio", "brand_id": "acdc", "period": "2026-05", "value": 94.6, "target": null, "status": "no_data", "vs_prior": 18.7}, {"metric_id": "fin.opex_ratio", "brand_id": "acdc", "period": "2026-06", "value": 66.8, "target": null, "status": "no_data", "vs_prior": -27.8}, {"metric_id": "fin.opex_ratio", "brand_id": "acdc", "period": "2026-07", "value": 66.5, "target": null, "status": "no_data", "vs_prior": -0.3}, {"metric_id": "fin.opex_ratio", "brand_id": "acdc", "period": "2026-08", "value": 64.6, "target": null, "status": "no_data", "vs_prior": -1.9}, {"metric_id": "fin.recurring_ratio", "brand_id": "infinity", "period": "2026-03", "value": 27.6, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "fin.recurring_ratio", "brand_id": "infinity", "period": "2026-04", "value": 29.1, "target": 40, "status": "red", "vs_prior": 1.5}, {"metric_id": "fin.recurring_ratio", "brand_id": "infinity", "period": "2026-05", "value": 29.1, "target": 40, "status": "red", "vs_prior": 0.0}, {"metric_id": "fin.recurring_ratio", "brand_id": "infinity", "period": "2026-06", "value": 39.3, "target": 40, "status": "amber", "vs_prior": 10.2}, {"metric_id": "fin.recurring_ratio", "brand_id": "infinity", "period": "2026-07", "value": 40.2, "target": 40, "status": "green", "vs_prior": 0.9}, {"metric_id": "fin.recurring_ratio", "brand_id": "infinity", "period": "2026-08", "value": 36.4, "target": 40, "status": "amber", "vs_prior": -3.8}, {"metric_id": "fin.recurring_ratio", "brand_id": "tlf", "period": "2026-03", "value": 27.4, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "fin.recurring_ratio", "brand_id": "tlf", "period": "2026-04", "value": 27.0, "target": 40, "status": "red", "vs_prior": -0.4}, {"metric_id": "fin.recurring_ratio", "brand_id": "tlf", "period": "2026-05", "value": 31.4, "target": 40, "status": "red", "vs_prior": 4.4}, {"metric_id": "fin.recurring_ratio", "brand_id": "tlf", "period": "2026-06", "value": 31.4, "target": 40, "status": "red", "vs_prior": 0.0}, {"metric_id": "fin.recurring_ratio", "brand_id": "tlf", "period": "2026-07", "value": 38.8, "target": 40, "status": "amber", "vs_prior": 7.4}, {"metric_id": "fin.recurring_ratio", "brand_id": "tlf", "period": "2026-08", "value": 41.3, "target": 40, "status": "green", "vs_prior": 2.5}, {"metric_id": "fin.recurring_ratio", "brand_id": "infx", "period": "2026-03", "value": 32.0, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "fin.recurring_ratio", "brand_id": "infx", "period": "2026-04", "value": 30.3, "target": 40, "status": "red", "vs_prior": -1.7}, {"metric_id": "fin.recurring_ratio", "brand_id": "infx", "period": "2026-05", "value": 33.0, "target": 40, "status": "red", "vs_prior": 2.7}, {"metric_id": "fin.recurring_ratio", "brand_id": "infx", "period": "2026-06", "value": 37.8, "target": 40, "status": "amber", "vs_prior": 4.8}, {"metric_id": "fin.recurring_ratio", "brand_id": "infx", "period": "2026-07", "value": 36.2, "target": 40, "status": "amber", "vs_prior": -1.6}, {"metric_id": "fin.recurring_ratio", "brand_id": "infx", "period": "2026-08", "value": 41.7, "target": 40, "status": "green", "vs_prior": 5.5}, {"metric_id": "fin.recurring_ratio", "brand_id": "fluxflow", "period": "2026-03", "value": 32.6, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "fin.recurring_ratio", "brand_id": "fluxflow", "period": "2026-04", "value": 26.8, "target": 40, "status": "red", "vs_prior": -5.8}, {"metric_id": "fin.recurring_ratio", "brand_id": "fluxflow", "period": "2026-05", "value": 29.0, "target": 40, "status": "red", "vs_prior": 2.2}, {"metric_id": "fin.recurring_ratio", "brand_id": "fluxflow", "period": "2026-06", "value": 35.6, "target": 40, "status": "red", "vs_prior": 6.6}, {"metric_id": "fin.recurring_ratio", "brand_id": "fluxflow", "period": "2026-07", "value": 39.1, "target": 40, "status": "amber", "vs_prior": 3.5}, {"metric_id": "fin.recurring_ratio", "brand_id": "fluxflow", "period": "2026-08", "value": 44.6, "target": 40, "status": "green", "vs_prior": 5.5}, {"metric_id": "fin.recurring_ratio", "brand_id": "divorced", "period": "2026-03", "value": 28.2, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "fin.recurring_ratio", "brand_id": "divorced", "period": "2026-04", "value": 29.4, "target": 40, "status": "red", "vs_prior": 1.2}, {"metric_id": "fin.recurring_ratio", "brand_id": "divorced", "period": "2026-05", "value": 35.5, "target": 40, "status": "red", "vs_prior": 6.1}, {"metric_id": "fin.recurring_ratio", "brand_id": "divorced", "period": "2026-06", "value": 36.3, "target": 40, "status": "amber", "vs_prior": 0.8}, {"metric_id": "fin.recurring_ratio", "brand_id": "divorced", "period": "2026-07", "value": 35.4, "target": 40, "status": "red", "vs_prior": -0.9}, {"metric_id": "fin.recurring_ratio", "brand_id": "divorced", "period": "2026-08", "value": 43.0, "target": 40, "status": "green", "vs_prior": 7.6}, {"metric_id": "fin.recurring_ratio", "brand_id": "papapasta", "period": "2026-03", "value": 24.2, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "fin.recurring_ratio", "brand_id": "papapasta", "period": "2026-04", "value": 26.0, "target": 40, "status": "red", "vs_prior": 1.8}, {"metric_id": "fin.recurring_ratio", "brand_id": "papapasta", "period": "2026-05", "value": 35.6, "target": 40, "status": "red", "vs_prior": 9.6}, {"metric_id": "fin.recurring_ratio", "brand_id": "papapasta", "period": "2026-06", "value": 34.7, "target": 40, "status": "red", "vs_prior": -0.9}, {"metric_id": "fin.recurring_ratio", "brand_id": "papapasta", "period": "2026-07", "value": 40.8, "target": 40, "status": "green", "vs_prior": 6.1}, {"metric_id": "fin.recurring_ratio", "brand_id": "papapasta", "period": "2026-08", "value": 38.8, "target": 40, "status": "amber", "vs_prior": -2.0}, {"metric_id": "fin.recurring_ratio", "brand_id": "acdc", "period": "2026-03", "value": 30.5, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "fin.recurring_ratio", "brand_id": "acdc", "period": "2026-04", "value": 26.5, "target": 40, "status": "red", "vs_prior": -4.0}, {"metric_id": "fin.recurring_ratio", "brand_id": "acdc", "period": "2026-05", "value": 30.6, "target": 40, "status": "red", "vs_prior": 4.1}, {"metric_id": "fin.recurring_ratio", "brand_id": "acdc", "period": "2026-06", "value": 32.7, "target": 40, "status": "red", "vs_prior": 2.1}, {"metric_id": "fin.recurring_ratio", "brand_id": "acdc", "period": "2026-07", "value": 33.1, "target": 40, "status": "red", "vs_prior": 0.4}, {"metric_id": "fin.recurring_ratio", "brand_id": "acdc", "period": "2026-08", "value": 37.6, "target": 40, "status": "amber", "vs_prior": 4.5}, {"metric_id": "fin.ltv_cac", "brand_id": "infinity", "period": "2026-03", "value": 1.8, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "fin.ltv_cac", "brand_id": "infinity", "period": "2026-04", "value": 2.0, "target": 3.0, "status": "red", "vs_prior": 0.2}, {"metric_id": "fin.ltv_cac", "brand_id": "infinity", "period": "2026-05", "value": 2.6, "target": 3.0, "status": "red", "vs_prior": 0.6}, {"metric_id": "fin.ltv_cac", "brand_id": "infinity", "period": "2026-06", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": 0.1}, {"metric_id": "fin.ltv_cac", "brand_id": "infinity", "period": "2026-07", "value": 3.1, "target": 3.0, "status": "green", "vs_prior": 0.4}, {"metric_id": "fin.ltv_cac", "brand_id": "infinity", "period": "2026-08", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": -0.4}, {"metric_id": "fin.ltv_cac", "brand_id": "tlf", "period": "2026-03", "value": 1.9, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "fin.ltv_cac", "brand_id": "tlf", "period": "2026-04", "value": 2.4, "target": 3.0, "status": "red", "vs_prior": 0.5}, {"metric_id": "fin.ltv_cac", "brand_id": "tlf", "period": "2026-05", "value": 2.5, "target": 3.0, "status": "red", "vs_prior": 0.1}, {"metric_id": "fin.ltv_cac", "brand_id": "tlf", "period": "2026-06", "value": 2.9, "target": 3.0, "status": "amber", "vs_prior": 0.4}, {"metric_id": "fin.ltv_cac", "brand_id": "tlf", "period": "2026-07", "value": 2.8, "target": 3.0, "status": "amber", "vs_prior": -0.1}, {"metric_id": "fin.ltv_cac", "brand_id": "tlf", "period": "2026-08", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": -0.1}, {"metric_id": "fin.ltv_cac", "brand_id": "infx", "period": "2026-03", "value": 2.0, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "fin.ltv_cac", "brand_id": "infx", "period": "2026-04", "value": 2.1, "target": 3.0, "status": "red", "vs_prior": 0.1}, {"metric_id": "fin.ltv_cac", "brand_id": "infx", "period": "2026-05", "value": 2.3, "target": 3.0, "status": "red", "vs_prior": 0.2}, {"metric_id": "fin.ltv_cac", "brand_id": "infx", "period": "2026-06", "value": 3.0, "target": 3.0, "status": "green", "vs_prior": 0.7}, {"metric_id": "fin.ltv_cac", "brand_id": "infx", "period": "2026-07", "value": 3.0, "target": 3.0, "status": "green", "vs_prior": 0.0}, {"metric_id": "fin.ltv_cac", "brand_id": "infx", "period": "2026-08", "value": 3.1, "target": 3.0, "status": "green", "vs_prior": 0.1}, {"metric_id": "fin.ltv_cac", "brand_id": "fluxflow", "period": "2026-03", "value": 1.8, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "fin.ltv_cac", "brand_id": "fluxflow", "period": "2026-04", "value": 2.2, "target": 3.0, "status": "red", "vs_prior": 0.4}, {"metric_id": "fin.ltv_cac", "brand_id": "fluxflow", "period": "2026-05", "value": 2.1, "target": 3.0, "status": "red", "vs_prior": -0.1}, {"metric_id": "fin.ltv_cac", "brand_id": "fluxflow", "period": "2026-06", "value": 3.0, "target": 3.0, "status": "green", "vs_prior": 0.9}, {"metric_id": "fin.ltv_cac", "brand_id": "fluxflow", "period": "2026-07", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": -0.3}, {"metric_id": "fin.ltv_cac", "brand_id": "fluxflow", "period": "2026-08", "value": 3.0, "target": 3.0, "status": "green", "vs_prior": 0.3}, {"metric_id": "fin.ltv_cac", "brand_id": "divorced", "period": "2026-03", "value": 1.9, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "fin.ltv_cac", "brand_id": "divorced", "period": "2026-04", "value": 2.1, "target": 3.0, "status": "red", "vs_prior": 0.2}, {"metric_id": "fin.ltv_cac", "brand_id": "divorced", "period": "2026-05", "value": 2.5, "target": 3.0, "status": "red", "vs_prior": 0.4}, {"metric_id": "fin.ltv_cac", "brand_id": "divorced", "period": "2026-06", "value": 2.9, "target": 3.0, "status": "amber", "vs_prior": 0.4}, {"metric_id": "fin.ltv_cac", "brand_id": "divorced", "period": "2026-07", "value": 2.9, "target": 3.0, "status": "amber", "vs_prior": 0.0}, {"metric_id": "fin.ltv_cac", "brand_id": "divorced", "period": "2026-08", "value": 2.9, "target": 3.0, "status": "amber", "vs_prior": 0.0}, {"metric_id": "fin.ltv_cac", "brand_id": "papapasta", "period": "2026-03", "value": 1.9, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "fin.ltv_cac", "brand_id": "papapasta", "period": "2026-04", "value": 2.1, "target": 3.0, "status": "red", "vs_prior": 0.2}, {"metric_id": "fin.ltv_cac", "brand_id": "papapasta", "period": "2026-05", "value": 2.8, "target": 3.0, "status": "amber", "vs_prior": 0.7}, {"metric_id": "fin.ltv_cac", "brand_id": "papapasta", "period": "2026-06", "value": 2.6, "target": 3.0, "status": "red", "vs_prior": -0.2}, {"metric_id": "fin.ltv_cac", "brand_id": "papapasta", "period": "2026-07", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": 0.1}, {"metric_id": "fin.ltv_cac", "brand_id": "papapasta", "period": "2026-08", "value": 3.3, "target": 3.0, "status": "green", "vs_prior": 0.6}, {"metric_id": "fin.ltv_cac", "brand_id": "acdc", "period": "2026-03", "value": 2.3, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "fin.ltv_cac", "brand_id": "acdc", "period": "2026-04", "value": 2.0, "target": 3.0, "status": "red", "vs_prior": -0.3}, {"metric_id": "fin.ltv_cac", "brand_id": "acdc", "period": "2026-05", "value": 2.4, "target": 3.0, "status": "red", "vs_prior": 0.4}, {"metric_id": "fin.ltv_cac", "brand_id": "acdc", "period": "2026-06", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": 0.3}, {"metric_id": "fin.ltv_cac", "brand_id": "acdc", "period": "2026-07", "value": 3.1, "target": 3.0, "status": "green", "vs_prior": 0.4}, {"metric_id": "fin.ltv_cac", "brand_id": "acdc", "period": "2026-08", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": -0.4}, {"metric_id": "fin.payback", "brand_id": "infinity", "period": "2026-03", "value": 8.4, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "fin.payback", "brand_id": "infinity", "period": "2026-04", "value": 10.3, "target": 12, "status": "green", "vs_prior": 1.9}, {"metric_id": "fin.payback", "brand_id": "infinity", "period": "2026-05", "value": 9.0, "target": 12, "status": "green", "vs_prior": -1.3}, {"metric_id": "fin.payback", "brand_id": "infinity", "period": "2026-06", "value": 9.9, "target": 12, "status": "green", "vs_prior": 0.9}, {"metric_id": "fin.payback", "brand_id": "infinity", "period": "2026-07", "value": 10.7, "target": 12, "status": "green", "vs_prior": 0.8}, {"metric_id": "fin.payback", "brand_id": "infinity", "period": "2026-08", "value": 10.9, "target": 12, "status": "green", "vs_prior": 0.2}, {"metric_id": "fin.payback", "brand_id": "tlf", "period": "2026-03", "value": 7.8, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "fin.payback", "brand_id": "tlf", "period": "2026-04", "value": 10.0, "target": 12, "status": "green", "vs_prior": 2.2}, {"metric_id": "fin.payback", "brand_id": "tlf", "period": "2026-05", "value": 11.1, "target": 12, "status": "green", "vs_prior": 1.1}, {"metric_id": "fin.payback", "brand_id": "tlf", "period": "2026-06", "value": 9.3, "target": 12, "status": "green", "vs_prior": -1.8}, {"metric_id": "fin.payback", "brand_id": "tlf", "period": "2026-07", "value": 10.2, "target": 12, "status": "green", "vs_prior": 0.9}, {"metric_id": "fin.payback", "brand_id": "tlf", "period": "2026-08", "value": 11.1, "target": 12, "status": "green", "vs_prior": 0.9}, {"metric_id": "fin.payback", "brand_id": "infx", "period": "2026-03", "value": 8.1, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "fin.payback", "brand_id": "infx", "period": "2026-04", "value": 8.6, "target": 12, "status": "green", "vs_prior": 0.5}, {"metric_id": "fin.payback", "brand_id": "infx", "period": "2026-05", "value": 9.1, "target": 12, "status": "green", "vs_prior": 0.5}, {"metric_id": "fin.payback", "brand_id": "infx", "period": "2026-06", "value": 10.0, "target": 12, "status": "green", "vs_prior": 0.9}, {"metric_id": "fin.payback", "brand_id": "infx", "period": "2026-07", "value": 10.4, "target": 12, "status": "green", "vs_prior": 0.4}, {"metric_id": "fin.payback", "brand_id": "infx", "period": "2026-08", "value": 12.1, "target": 12, "status": "amber", "vs_prior": 1.7}, {"metric_id": "fin.payback", "brand_id": "fluxflow", "period": "2026-03", "value": 8.2, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "fin.payback", "brand_id": "fluxflow", "period": "2026-04", "value": 9.5, "target": 12, "status": "green", "vs_prior": 1.3}, {"metric_id": "fin.payback", "brand_id": "fluxflow", "period": "2026-05", "value": 9.8, "target": 12, "status": "green", "vs_prior": 0.3}, {"metric_id": "fin.payback", "brand_id": "fluxflow", "period": "2026-06", "value": 9.9, "target": 12, "status": "green", "vs_prior": 0.1}, {"metric_id": "fin.payback", "brand_id": "fluxflow", "period": "2026-07", "value": 12.7, "target": 12, "status": "amber", "vs_prior": 2.8}, {"metric_id": "fin.payback", "brand_id": "fluxflow", "period": "2026-08", "value": 13.2, "target": 12, "status": "amber", "vs_prior": 0.5}, {"metric_id": "fin.payback", "brand_id": "divorced", "period": "2026-03", "value": 8.8, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "fin.payback", "brand_id": "divorced", "period": "2026-04", "value": 8.0, "target": 12, "status": "green", "vs_prior": -0.8}, {"metric_id": "fin.payback", "brand_id": "divorced", "period": "2026-05", "value": 10.4, "target": 12, "status": "green", "vs_prior": 2.4}, {"metric_id": "fin.payback", "brand_id": "divorced", "period": "2026-06", "value": 11.7, "target": 12, "status": "green", "vs_prior": 1.3}, {"metric_id": "fin.payback", "brand_id": "divorced", "period": "2026-07", "value": 10.9, "target": 12, "status": "green", "vs_prior": -0.8}, {"metric_id": "fin.payback", "brand_id": "divorced", "period": "2026-08", "value": 11.1, "target": 12, "status": "green", "vs_prior": 0.2}, {"metric_id": "fin.payback", "brand_id": "papapasta", "period": "2026-03", "value": 8.7, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "fin.payback", "brand_id": "papapasta", "period": "2026-04", "value": 10.3, "target": 12, "status": "green", "vs_prior": 1.6}, {"metric_id": "fin.payback", "brand_id": "papapasta", "period": "2026-05", "value": 11.3, "target": 12, "status": "green", "vs_prior": 1.0}, {"metric_id": "fin.payback", "brand_id": "papapasta", "period": "2026-06", "value": 9.8, "target": 12, "status": "green", "vs_prior": -1.5}, {"metric_id": "fin.payback", "brand_id": "papapasta", "period": "2026-07", "value": 11.5, "target": 12, "status": "green", "vs_prior": 1.7}, {"metric_id": "fin.payback", "brand_id": "papapasta", "period": "2026-08", "value": 13.4, "target": 12, "status": "red", "vs_prior": 1.9}, {"metric_id": "fin.payback", "brand_id": "acdc", "period": "2026-03", "value": 7.3, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "fin.payback", "brand_id": "acdc", "period": "2026-04", "value": 10.4, "target": 12, "status": "green", "vs_prior": 3.1}, {"metric_id": "fin.payback", "brand_id": "acdc", "period": "2026-05", "value": 10.6, "target": 12, "status": "green", "vs_prior": 0.2}, {"metric_id": "fin.payback", "brand_id": "acdc", "period": "2026-06", "value": 10.1, "target": 12, "status": "green", "vs_prior": -0.5}, {"metric_id": "fin.payback", "brand_id": "acdc", "period": "2026-07", "value": 11.1, "target": 12, "status": "green", "vs_prior": 1.0}, {"metric_id": "fin.payback", "brand_id": "acdc", "period": "2026-08", "value": 11.8, "target": 12, "status": "green", "vs_prior": 0.7}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "infinity", "period": "2026-03", "value": 77.6, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "infinity", "period": "2026-04", "value": 67.2, "target": 100, "status": "red", "vs_prior": -10.4}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "infinity", "period": "2026-05", "value": 72.3, "target": 100, "status": "red", "vs_prior": 5.1}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "infinity", "period": "2026-06", "value": 92.6, "target": 100, "status": "amber", "vs_prior": 20.3}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "infinity", "period": "2026-07", "value": 84.1, "target": 100, "status": "red", "vs_prior": -8.5}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "infinity", "period": "2026-08", "value": 93.9, "target": 100, "status": "amber", "vs_prior": 9.8}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "tlf", "period": "2026-03", "value": 73.4, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "tlf", "period": "2026-04", "value": 75.5, "target": 100, "status": "red", "vs_prior": 2.1}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "tlf", "period": "2026-05", "value": 83.6, "target": 100, "status": "red", "vs_prior": 8.1}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "tlf", "period": "2026-06", "value": 99.2, "target": 100, "status": "amber", "vs_prior": 15.6}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "tlf", "period": "2026-07", "value": 94.5, "target": 100, "status": "amber", "vs_prior": -4.7}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "tlf", "period": "2026-08", "value": 92.2, "target": 100, "status": "amber", "vs_prior": -2.3}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "infx", "period": "2026-03", "value": 74.2, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "infx", "period": "2026-04", "value": 65.0, "target": 100, "status": "red", "vs_prior": -9.2}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "infx", "period": "2026-05", "value": 89.7, "target": 100, "status": "red", "vs_prior": 24.7}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "infx", "period": "2026-06", "value": 80.3, "target": 100, "status": "red", "vs_prior": -9.4}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "infx", "period": "2026-07", "value": 104.0, "target": 100, "status": "green", "vs_prior": 23.7}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "infx", "period": "2026-08", "value": 96.4, "target": 100, "status": "amber", "vs_prior": -7.6}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "fluxflow", "period": "2026-03", "value": 64.6, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "fluxflow", "period": "2026-04", "value": 65.8, "target": 100, "status": "red", "vs_prior": 1.2}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "fluxflow", "period": "2026-05", "value": 89.5, "target": 100, "status": "red", "vs_prior": 23.7}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "fluxflow", "period": "2026-06", "value": 91.0, "target": 100, "status": "amber", "vs_prior": 1.5}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "fluxflow", "period": "2026-07", "value": 102.4, "target": 100, "status": "green", "vs_prior": 11.4}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "fluxflow", "period": "2026-08", "value": 88.3, "target": 100, "status": "red", "vs_prior": -14.1}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "divorced", "period": "2026-03", "value": 60.9, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "divorced", "period": "2026-04", "value": 83.7, "target": 100, "status": "red", "vs_prior": 22.8}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "divorced", "period": "2026-05", "value": 76.5, "target": 100, "status": "red", "vs_prior": -7.2}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "divorced", "period": "2026-06", "value": 76.3, "target": 100, "status": "red", "vs_prior": -0.2}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "divorced", "period": "2026-07", "value": 93.6, "target": 100, "status": "amber", "vs_prior": 17.3}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "divorced", "period": "2026-08", "value": 104.9, "target": 100, "status": "green", "vs_prior": 11.3}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "papapasta", "period": "2026-03", "value": 78.2, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "papapasta", "period": "2026-04", "value": 71.5, "target": 100, "status": "red", "vs_prior": -6.7}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "papapasta", "period": "2026-05", "value": 86.9, "target": 100, "status": "red", "vs_prior": 15.4}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "papapasta", "period": "2026-06", "value": 80.0, "target": 100, "status": "red", "vs_prior": -6.9}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "papapasta", "period": "2026-07", "value": 90.1, "target": 100, "status": "amber", "vs_prior": 10.1}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "papapasta", "period": "2026-08", "value": 104.8, "target": 100, "status": "green", "vs_prior": 14.7}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "acdc", "period": "2026-03", "value": 77.4, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "acdc", "period": "2026-04", "value": 75.8, "target": 100, "status": "red", "vs_prior": -1.6}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "acdc", "period": "2026-05", "value": 76.6, "target": 100, "status": "red", "vs_prior": 0.8}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "acdc", "period": "2026-06", "value": 84.6, "target": 100, "status": "red", "vs_prior": 8.0}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "acdc", "period": "2026-07", "value": 85.9, "target": 100, "status": "red", "vs_prior": 1.3}, {"metric_id": "fin.revenue_vs_plan", "brand_id": "acdc", "period": "2026-08", "value": 96.0, "target": 100, "status": "amber", "vs_prior": 10.1}, {"metric_id": "hr.headcount", "brand_id": "infinity", "period": "2026-03", "value": 121, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.headcount", "brand_id": "infinity", "period": "2026-04", "value": 105, "target": null, "status": "no_data", "vs_prior": -16}, {"metric_id": "hr.headcount", "brand_id": "infinity", "period": "2026-05", "value": 33, "target": null, "status": "no_data", "vs_prior": -72}, {"metric_id": "hr.headcount", "brand_id": "infinity", "period": "2026-06", "value": 198, "target": null, "status": "no_data", "vs_prior": 165}, {"metric_id": "hr.headcount", "brand_id": "infinity", "period": "2026-07", "value": 374, "target": null, "status": "no_data", "vs_prior": 176}, {"metric_id": "hr.headcount", "brand_id": "infinity", "period": "2026-08", "value": 87, "target": null, "status": "no_data", "vs_prior": -287}, {"metric_id": "hr.headcount", "brand_id": "tlf", "period": "2026-03", "value": 225, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.headcount", "brand_id": "tlf", "period": "2026-04", "value": 237, "target": null, "status": "no_data", "vs_prior": 12}, {"metric_id": "hr.headcount", "brand_id": "tlf", "period": "2026-05", "value": 370, "target": null, "status": "no_data", "vs_prior": 133}, {"metric_id": "hr.headcount", "brand_id": "tlf", "period": "2026-06", "value": 236, "target": null, "status": "no_data", "vs_prior": -134}, {"metric_id": "hr.headcount", "brand_id": "tlf", "period": "2026-07", "value": 109, "target": null, "status": "no_data", "vs_prior": -127}, {"metric_id": "hr.headcount", "brand_id": "tlf", "period": "2026-08", "value": 22, "target": null, "status": "no_data", "vs_prior": -87}, {"metric_id": "hr.headcount", "brand_id": "infx", "period": "2026-03", "value": 35, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.headcount", "brand_id": "infx", "period": "2026-04", "value": 45, "target": null, "status": "no_data", "vs_prior": 10}, {"metric_id": "hr.headcount", "brand_id": "infx", "period": "2026-05", "value": 105, "target": null, "status": "no_data", "vs_prior": 60}, {"metric_id": "hr.headcount", "brand_id": "infx", "period": "2026-06", "value": 406, "target": null, "status": "no_data", "vs_prior": 301}, {"metric_id": "hr.headcount", "brand_id": "infx", "period": "2026-07", "value": 397, "target": null, "status": "no_data", "vs_prior": -9}, {"metric_id": "hr.headcount", "brand_id": "infx", "period": "2026-08", "value": 438, "target": null, "status": "no_data", "vs_prior": 41}, {"metric_id": "hr.headcount", "brand_id": "fluxflow", "period": "2026-03", "value": 125, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.headcount", "brand_id": "fluxflow", "period": "2026-04", "value": 128, "target": null, "status": "no_data", "vs_prior": 3}, {"metric_id": "hr.headcount", "brand_id": "fluxflow", "period": "2026-05", "value": 92, "target": null, "status": "no_data", "vs_prior": -36}, {"metric_id": "hr.headcount", "brand_id": "fluxflow", "period": "2026-06", "value": 357, "target": null, "status": "no_data", "vs_prior": 265}, {"metric_id": "hr.headcount", "brand_id": "fluxflow", "period": "2026-07", "value": 347, "target": null, "status": "no_data", "vs_prior": -10}, {"metric_id": "hr.headcount", "brand_id": "fluxflow", "period": "2026-08", "value": 53, "target": null, "status": "no_data", "vs_prior": -294}, {"metric_id": "hr.headcount", "brand_id": "divorced", "period": "2026-03", "value": 97, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.headcount", "brand_id": "divorced", "period": "2026-04", "value": 418, "target": null, "status": "no_data", "vs_prior": 321}, {"metric_id": "hr.headcount", "brand_id": "divorced", "period": "2026-05", "value": 446, "target": null, "status": "no_data", "vs_prior": 28}, {"metric_id": "hr.headcount", "brand_id": "divorced", "period": "2026-06", "value": 73, "target": null, "status": "no_data", "vs_prior": -373}, {"metric_id": "hr.headcount", "brand_id": "divorced", "period": "2026-07", "value": 412, "target": null, "status": "no_data", "vs_prior": 339}, {"metric_id": "hr.headcount", "brand_id": "divorced", "period": "2026-08", "value": 65, "target": null, "status": "no_data", "vs_prior": -347}, {"metric_id": "hr.headcount", "brand_id": "papapasta", "period": "2026-03", "value": 460, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.headcount", "brand_id": "papapasta", "period": "2026-04", "value": 317, "target": null, "status": "no_data", "vs_prior": -143}, {"metric_id": "hr.headcount", "brand_id": "papapasta", "period": "2026-05", "value": 293, "target": null, "status": "no_data", "vs_prior": -24}, {"metric_id": "hr.headcount", "brand_id": "papapasta", "period": "2026-06", "value": 370, "target": null, "status": "no_data", "vs_prior": 77}, {"metric_id": "hr.headcount", "brand_id": "papapasta", "period": "2026-07", "value": 439, "target": null, "status": "no_data", "vs_prior": 69}, {"metric_id": "hr.headcount", "brand_id": "papapasta", "period": "2026-08", "value": 33, "target": null, "status": "no_data", "vs_prior": -406}, {"metric_id": "hr.headcount", "brand_id": "acdc", "period": "2026-03", "value": 382, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.headcount", "brand_id": "acdc", "period": "2026-04", "value": 418, "target": null, "status": "no_data", "vs_prior": 36}, {"metric_id": "hr.headcount", "brand_id": "acdc", "period": "2026-05", "value": 426, "target": null, "status": "no_data", "vs_prior": 8}, {"metric_id": "hr.headcount", "brand_id": "acdc", "period": "2026-06", "value": 319, "target": null, "status": "no_data", "vs_prior": -107}, {"metric_id": "hr.headcount", "brand_id": "acdc", "period": "2026-07", "value": 223, "target": null, "status": "no_data", "vs_prior": -96}, {"metric_id": "hr.headcount", "brand_id": "acdc", "period": "2026-08", "value": 481, "target": null, "status": "no_data", "vs_prior": 258}, {"metric_id": "hr.rev_per_fte", "brand_id": "infinity", "period": "2026-03", "value": 160000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.rev_per_fte", "brand_id": "infinity", "period": "2026-04", "value": 406000, "target": null, "status": "no_data", "vs_prior": 246000}, {"metric_id": "hr.rev_per_fte", "brand_id": "infinity", "period": "2026-05", "value": 831000, "target": null, "status": "no_data", "vs_prior": 425000}, {"metric_id": "hr.rev_per_fte", "brand_id": "infinity", "period": "2026-06", "value": 397000, "target": null, "status": "no_data", "vs_prior": -434000}, {"metric_id": "hr.rev_per_fte", "brand_id": "infinity", "period": "2026-07", "value": 841000, "target": null, "status": "no_data", "vs_prior": 444000}, {"metric_id": "hr.rev_per_fte", "brand_id": "infinity", "period": "2026-08", "value": 849000, "target": null, "status": "no_data", "vs_prior": 8000}, {"metric_id": "hr.rev_per_fte", "brand_id": "tlf", "period": "2026-03", "value": 546000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.rev_per_fte", "brand_id": "tlf", "period": "2026-04", "value": 794000, "target": null, "status": "no_data", "vs_prior": 248000}, {"metric_id": "hr.rev_per_fte", "brand_id": "tlf", "period": "2026-05", "value": 519000, "target": null, "status": "no_data", "vs_prior": -275000}, {"metric_id": "hr.rev_per_fte", "brand_id": "tlf", "period": "2026-06", "value": 797000, "target": null, "status": "no_data", "vs_prior": 278000}, {"metric_id": "hr.rev_per_fte", "brand_id": "tlf", "period": "2026-07", "value": 866000, "target": null, "status": "no_data", "vs_prior": 69000}, {"metric_id": "hr.rev_per_fte", "brand_id": "tlf", "period": "2026-08", "value": 601000, "target": null, "status": "no_data", "vs_prior": -265000}, {"metric_id": "hr.rev_per_fte", "brand_id": "infx", "period": "2026-03", "value": 458000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.rev_per_fte", "brand_id": "infx", "period": "2026-04", "value": 181000, "target": null, "status": "no_data", "vs_prior": -277000}, {"metric_id": "hr.rev_per_fte", "brand_id": "infx", "period": "2026-05", "value": 366000, "target": null, "status": "no_data", "vs_prior": 185000}, {"metric_id": "hr.rev_per_fte", "brand_id": "infx", "period": "2026-06", "value": 212000, "target": null, "status": "no_data", "vs_prior": -154000}, {"metric_id": "hr.rev_per_fte", "brand_id": "infx", "period": "2026-07", "value": 752000, "target": null, "status": "no_data", "vs_prior": 540000}, {"metric_id": "hr.rev_per_fte", "brand_id": "infx", "period": "2026-08", "value": 654000, "target": null, "status": "no_data", "vs_prior": -98000}, {"metric_id": "hr.rev_per_fte", "brand_id": "fluxflow", "period": "2026-03", "value": 218000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.rev_per_fte", "brand_id": "fluxflow", "period": "2026-04", "value": 653000, "target": null, "status": "no_data", "vs_prior": 435000}, {"metric_id": "hr.rev_per_fte", "brand_id": "fluxflow", "period": "2026-05", "value": 140000, "target": null, "status": "no_data", "vs_prior": -513000}, {"metric_id": "hr.rev_per_fte", "brand_id": "fluxflow", "period": "2026-06", "value": 240000, "target": null, "status": "no_data", "vs_prior": 100000}, {"metric_id": "hr.rev_per_fte", "brand_id": "fluxflow", "period": "2026-07", "value": 376000, "target": null, "status": "no_data", "vs_prior": 136000}, {"metric_id": "hr.rev_per_fte", "brand_id": "fluxflow", "period": "2026-08", "value": 790000, "target": null, "status": "no_data", "vs_prior": 414000}, {"metric_id": "hr.rev_per_fte", "brand_id": "divorced", "period": "2026-03", "value": 664000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.rev_per_fte", "brand_id": "divorced", "period": "2026-04", "value": 695000, "target": null, "status": "no_data", "vs_prior": 31000}, {"metric_id": "hr.rev_per_fte", "brand_id": "divorced", "period": "2026-05", "value": 373000, "target": null, "status": "no_data", "vs_prior": -322000}, {"metric_id": "hr.rev_per_fte", "brand_id": "divorced", "period": "2026-06", "value": 242000, "target": null, "status": "no_data", "vs_prior": -131000}, {"metric_id": "hr.rev_per_fte", "brand_id": "divorced", "period": "2026-07", "value": 582000, "target": null, "status": "no_data", "vs_prior": 340000}, {"metric_id": "hr.rev_per_fte", "brand_id": "divorced", "period": "2026-08", "value": 120000, "target": null, "status": "no_data", "vs_prior": -462000}, {"metric_id": "hr.rev_per_fte", "brand_id": "papapasta", "period": "2026-03", "value": 564000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.rev_per_fte", "brand_id": "papapasta", "period": "2026-04", "value": 389000, "target": null, "status": "no_data", "vs_prior": -175000}, {"metric_id": "hr.rev_per_fte", "brand_id": "papapasta", "period": "2026-05", "value": 388000, "target": null, "status": "no_data", "vs_prior": -1000}, {"metric_id": "hr.rev_per_fte", "brand_id": "papapasta", "period": "2026-06", "value": 309000, "target": null, "status": "no_data", "vs_prior": -79000}, {"metric_id": "hr.rev_per_fte", "brand_id": "papapasta", "period": "2026-07", "value": 133000, "target": null, "status": "no_data", "vs_prior": -176000}, {"metric_id": "hr.rev_per_fte", "brand_id": "papapasta", "period": "2026-08", "value": 708000, "target": null, "status": "no_data", "vs_prior": 575000}, {"metric_id": "hr.rev_per_fte", "brand_id": "acdc", "period": "2026-03", "value": 588000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "hr.rev_per_fte", "brand_id": "acdc", "period": "2026-04", "value": 707000, "target": null, "status": "no_data", "vs_prior": 119000}, {"metric_id": "hr.rev_per_fte", "brand_id": "acdc", "period": "2026-05", "value": 220000, "target": null, "status": "no_data", "vs_prior": -487000}, {"metric_id": "hr.rev_per_fte", "brand_id": "acdc", "period": "2026-06", "value": 263000, "target": null, "status": "no_data", "vs_prior": 43000}, {"metric_id": "hr.rev_per_fte", "brand_id": "acdc", "period": "2026-07", "value": 591000, "target": null, "status": "no_data", "vs_prior": 328000}, {"metric_id": "hr.rev_per_fte", "brand_id": "acdc", "period": "2026-08", "value": 237000, "target": null, "status": "no_data", "vs_prior": -354000}, {"metric_id": "hr.attrition", "brand_id": "infinity", "period": "2026-03", "value": 9.7, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "hr.attrition", "brand_id": "infinity", "period": "2026-04", "value": 9.7, "target": 12, "status": "green", "vs_prior": 0.0}, {"metric_id": "hr.attrition", "brand_id": "infinity", "period": "2026-05", "value": 9.2, "target": 12, "status": "green", "vs_prior": -0.5}, {"metric_id": "hr.attrition", "brand_id": "infinity", "period": "2026-06", "value": 11.7, "target": 12, "status": "green", "vs_prior": 2.5}, {"metric_id": "hr.attrition", "brand_id": "infinity", "period": "2026-07", "value": 12.0, "target": 12, "status": "green", "vs_prior": 0.3}, {"metric_id": "hr.attrition", "brand_id": "infinity", "period": "2026-08", "value": 11.8, "target": 12, "status": "green", "vs_prior": -0.2}, {"metric_id": "hr.attrition", "brand_id": "tlf", "period": "2026-03", "value": 9.4, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "hr.attrition", "brand_id": "tlf", "period": "2026-04", "value": 9.4, "target": 12, "status": "green", "vs_prior": 0.0}, {"metric_id": "hr.attrition", "brand_id": "tlf", "period": "2026-05", "value": 10.9, "target": 12, "status": "green", "vs_prior": 1.5}, {"metric_id": "hr.attrition", "brand_id": "tlf", "period": "2026-06", "value": 11.4, "target": 12, "status": "green", "vs_prior": 0.5}, {"metric_id": "hr.attrition", "brand_id": "tlf", "period": "2026-07", "value": 11.6, "target": 12, "status": "green", "vs_prior": 0.2}, {"metric_id": "hr.attrition", "brand_id": "tlf", "period": "2026-08", "value": 13.0, "target": 12, "status": "amber", "vs_prior": 1.4}, {"metric_id": "hr.attrition", "brand_id": "infx", "period": "2026-03", "value": 8.3, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "hr.attrition", "brand_id": "infx", "period": "2026-04", "value": 8.3, "target": 12, "status": "green", "vs_prior": 0.0}, {"metric_id": "hr.attrition", "brand_id": "infx", "period": "2026-05", "value": 8.6, "target": 12, "status": "green", "vs_prior": 0.3}, {"metric_id": "hr.attrition", "brand_id": "infx", "period": "2026-06", "value": 10.1, "target": 12, "status": "green", "vs_prior": 1.5}, {"metric_id": "hr.attrition", "brand_id": "infx", "period": "2026-07", "value": 10.9, "target": 12, "status": "green", "vs_prior": 0.8}, {"metric_id": "hr.attrition", "brand_id": "infx", "period": "2026-08", "value": 12.8, "target": 12, "status": "amber", "vs_prior": 1.9}, {"metric_id": "hr.attrition", "brand_id": "fluxflow", "period": "2026-03", "value": 9.1, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "hr.attrition", "brand_id": "fluxflow", "period": "2026-04", "value": 9.3, "target": 12, "status": "green", "vs_prior": 0.2}, {"metric_id": "hr.attrition", "brand_id": "fluxflow", "period": "2026-05", "value": 10.5, "target": 12, "status": "green", "vs_prior": 1.2}, {"metric_id": "hr.attrition", "brand_id": "fluxflow", "period": "2026-06", "value": 9.4, "target": 12, "status": "green", "vs_prior": -1.1}, {"metric_id": "hr.attrition", "brand_id": "fluxflow", "period": "2026-07", "value": 11.3, "target": 12, "status": "green", "vs_prior": 1.9}, {"metric_id": "hr.attrition", "brand_id": "fluxflow", "period": "2026-08", "value": 12.0, "target": 12, "status": "green", "vs_prior": 0.7}, {"metric_id": "hr.attrition", "brand_id": "divorced", "period": "2026-03", "value": 9.6, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "hr.attrition", "brand_id": "divorced", "period": "2026-04", "value": 9.8, "target": 12, "status": "green", "vs_prior": 0.2}, {"metric_id": "hr.attrition", "brand_id": "divorced", "period": "2026-05", "value": 8.7, "target": 12, "status": "green", "vs_prior": -1.1}, {"metric_id": "hr.attrition", "brand_id": "divorced", "period": "2026-06", "value": 10.5, "target": 12, "status": "green", "vs_prior": 1.8}, {"metric_id": "hr.attrition", "brand_id": "divorced", "period": "2026-07", "value": 10.1, "target": 12, "status": "green", "vs_prior": -0.4}, {"metric_id": "hr.attrition", "brand_id": "divorced", "period": "2026-08", "value": 13.3, "target": 12, "status": "red", "vs_prior": 3.2}, {"metric_id": "hr.attrition", "brand_id": "papapasta", "period": "2026-03", "value": 8.9, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "hr.attrition", "brand_id": "papapasta", "period": "2026-04", "value": 8.6, "target": 12, "status": "green", "vs_prior": -0.3}, {"metric_id": "hr.attrition", "brand_id": "papapasta", "period": "2026-05", "value": 10.3, "target": 12, "status": "green", "vs_prior": 1.7}, {"metric_id": "hr.attrition", "brand_id": "papapasta", "period": "2026-06", "value": 10.5, "target": 12, "status": "green", "vs_prior": 0.2}, {"metric_id": "hr.attrition", "brand_id": "papapasta", "period": "2026-07", "value": 11.6, "target": 12, "status": "green", "vs_prior": 1.1}, {"metric_id": "hr.attrition", "brand_id": "papapasta", "period": "2026-08", "value": 13.2, "target": 12, "status": "amber", "vs_prior": 1.6}, {"metric_id": "hr.attrition", "brand_id": "acdc", "period": "2026-03", "value": 9.3, "target": 12, "status": "green", "vs_prior": null}, {"metric_id": "hr.attrition", "brand_id": "acdc", "period": "2026-04", "value": 9.7, "target": 12, "status": "green", "vs_prior": 0.4}, {"metric_id": "hr.attrition", "brand_id": "acdc", "period": "2026-05", "value": 8.5, "target": 12, "status": "green", "vs_prior": -1.2}, {"metric_id": "hr.attrition", "brand_id": "acdc", "period": "2026-06", "value": 10.2, "target": 12, "status": "green", "vs_prior": 1.7}, {"metric_id": "hr.attrition", "brand_id": "acdc", "period": "2026-07", "value": 10.7, "target": 12, "status": "green", "vs_prior": 0.5}, {"metric_id": "hr.attrition", "brand_id": "acdc", "period": "2026-08", "value": 10.6, "target": 12, "status": "green", "vs_prior": -0.1}, {"metric_id": "hr.new_hire_90d", "brand_id": "infinity", "period": "2026-03", "value": 50.7, "target": 85, "status": "red", "vs_prior": null}, {"metric_id": "hr.new_hire_90d", "brand_id": "infinity", "period": "2026-04", "value": 68.7, "target": 85, "status": "red", "vs_prior": 18.0}, {"metric_id": "hr.new_hire_90d", "brand_id": "infinity", "period": "2026-05", "value": 75.8, "target": 85, "status": "red", "vs_prior": 7.1}, {"metric_id": "hr.new_hire_90d", "brand_id": "infinity", "period": "2026-06", "value": 80.3, "target": 85, "status": "amber", "vs_prior": 4.5}, {"metric_id": "hr.new_hire_90d", "brand_id": "infinity", "period": "2026-07", "value": 78.2, "target": 85, "status": "amber", "vs_prior": -2.1}, {"metric_id": "hr.new_hire_90d", "brand_id": "infinity", "period": "2026-08", "value": 89.2, "target": 85, "status": "green", "vs_prior": 11.0}, {"metric_id": "hr.new_hire_90d", "brand_id": "tlf", "period": "2026-03", "value": 60.7, "target": 85, "status": "red", "vs_prior": null}, {"metric_id": "hr.new_hire_90d", "brand_id": "tlf", "period": "2026-04", "value": 73.7, "target": 85, "status": "red", "vs_prior": 13.0}, {"metric_id": "hr.new_hire_90d", "brand_id": "tlf", "period": "2026-05", "value": 78.1, "target": 85, "status": "amber", "vs_prior": 4.4}, {"metric_id": "hr.new_hire_90d", "brand_id": "tlf", "period": "2026-06", "value": 74.6, "target": 85, "status": "red", "vs_prior": -3.5}, {"metric_id": "hr.new_hire_90d", "brand_id": "tlf", "period": "2026-07", "value": 71.7, "target": 85, "status": "red", "vs_prior": -2.9}, {"metric_id": "hr.new_hire_90d", "brand_id": "tlf", "period": "2026-08", "value": 80.2, "target": 85, "status": "amber", "vs_prior": 8.5}, {"metric_id": "hr.new_hire_90d", "brand_id": "infx", "period": "2026-03", "value": 52.1, "target": 85, "status": "red", "vs_prior": null}, {"metric_id": "hr.new_hire_90d", "brand_id": "infx", "period": "2026-04", "value": 65.7, "target": 85, "status": "red", "vs_prior": 13.6}, {"metric_id": "hr.new_hire_90d", "brand_id": "infx", "period": "2026-05", "value": 62.4, "target": 85, "status": "red", "vs_prior": -3.3}, {"metric_id": "hr.new_hire_90d", "brand_id": "infx", "period": "2026-06", "value": 74.7, "target": 85, "status": "red", "vs_prior": 12.3}, {"metric_id": "hr.new_hire_90d", "brand_id": "infx", "period": "2026-07", "value": 89.2, "target": 85, "status": "green", "vs_prior": 14.5}, {"metric_id": "hr.new_hire_90d", "brand_id": "infx", "period": "2026-08", "value": 80.4, "target": 85, "status": "amber", "vs_prior": -8.8}, {"metric_id": "hr.new_hire_90d", "brand_id": "fluxflow", "period": "2026-03", "value": 64.4, "target": 85, "status": "red", "vs_prior": null}, {"metric_id": "hr.new_hire_90d", "brand_id": "fluxflow", "period": "2026-04", "value": 70.1, "target": 85, "status": "red", "vs_prior": 5.7}, {"metric_id": "hr.new_hire_90d", "brand_id": "fluxflow", "period": "2026-05", "value": 71.5, "target": 85, "status": "red", "vs_prior": 1.4}, {"metric_id": "hr.new_hire_90d", "brand_id": "fluxflow", "period": "2026-06", "value": 84.2, "target": 85, "status": "amber", "vs_prior": 12.7}, {"metric_id": "hr.new_hire_90d", "brand_id": "fluxflow", "period": "2026-07", "value": 72.4, "target": 85, "status": "red", "vs_prior": -11.8}, {"metric_id": "hr.new_hire_90d", "brand_id": "fluxflow", "period": "2026-08", "value": 82.0, "target": 85, "status": "amber", "vs_prior": 9.6}, {"metric_id": "hr.new_hire_90d", "brand_id": "divorced", "period": "2026-03", "value": 51.2, "target": 85, "status": "red", "vs_prior": null}, {"metric_id": "hr.new_hire_90d", "brand_id": "divorced", "period": "2026-04", "value": 67.0, "target": 85, "status": "red", "vs_prior": 15.8}, {"metric_id": "hr.new_hire_90d", "brand_id": "divorced", "period": "2026-05", "value": 70.9, "target": 85, "status": "red", "vs_prior": 3.9}, {"metric_id": "hr.new_hire_90d", "brand_id": "divorced", "period": "2026-06", "value": 84.0, "target": 85, "status": "amber", "vs_prior": 13.1}, {"metric_id": "hr.new_hire_90d", "brand_id": "divorced", "period": "2026-07", "value": 80.3, "target": 85, "status": "amber", "vs_prior": -3.7}, {"metric_id": "hr.new_hire_90d", "brand_id": "divorced", "period": "2026-08", "value": 81.9, "target": 85, "status": "amber", "vs_prior": 1.6}, {"metric_id": "hr.new_hire_90d", "brand_id": "papapasta", "period": "2026-03", "value": 56.9, "target": 85, "status": "red", "vs_prior": null}, {"metric_id": "hr.new_hire_90d", "brand_id": "papapasta", "period": "2026-04", "value": 68.7, "target": 85, "status": "red", "vs_prior": 11.8}, {"metric_id": "hr.new_hire_90d", "brand_id": "papapasta", "period": "2026-05", "value": 79.5, "target": 85, "status": "amber", "vs_prior": 10.8}, {"metric_id": "hr.new_hire_90d", "brand_id": "papapasta", "period": "2026-06", "value": 67.2, "target": 85, "status": "red", "vs_prior": -12.3}, {"metric_id": "hr.new_hire_90d", "brand_id": "papapasta", "period": "2026-07", "value": 79.7, "target": 85, "status": "amber", "vs_prior": 12.5}, {"metric_id": "hr.new_hire_90d", "brand_id": "papapasta", "period": "2026-08", "value": 91.9, "target": 85, "status": "green", "vs_prior": 12.2}, {"metric_id": "hr.new_hire_90d", "brand_id": "acdc", "period": "2026-03", "value": 54.8, "target": 85, "status": "red", "vs_prior": null}, {"metric_id": "hr.new_hire_90d", "brand_id": "acdc", "period": "2026-04", "value": 70.3, "target": 85, "status": "red", "vs_prior": 15.5}, {"metric_id": "hr.new_hire_90d", "brand_id": "acdc", "period": "2026-05", "value": 74.9, "target": 85, "status": "red", "vs_prior": 4.6}, {"metric_id": "hr.new_hire_90d", "brand_id": "acdc", "period": "2026-06", "value": 67.4, "target": 85, "status": "red", "vs_prior": -7.5}, {"metric_id": "hr.new_hire_90d", "brand_id": "acdc", "period": "2026-07", "value": 89.5, "target": 85, "status": "green", "vs_prior": 22.1}, {"metric_id": "hr.new_hire_90d", "brand_id": "acdc", "period": "2026-08", "value": 92.3, "target": 85, "status": "green", "vs_prior": 2.8}, {"metric_id": "hr.team_satisfaction", "brand_id": "infinity", "period": "2026-03", "value": 5.9, "target": 7.5, "status": "red", "vs_prior": null}, {"metric_id": "hr.team_satisfaction", "brand_id": "infinity", "period": "2026-04", "value": 5.7, "target": 7.5, "status": "red", "vs_prior": -0.2}, {"metric_id": "hr.team_satisfaction", "brand_id": "infinity", "period": "2026-05", "value": 6.6, "target": 7.5, "status": "red", "vs_prior": 0.9}, {"metric_id": "hr.team_satisfaction", "brand_id": "infinity", "period": "2026-06", "value": 5.8, "target": 7.5, "status": "red", "vs_prior": -0.8}, {"metric_id": "hr.team_satisfaction", "brand_id": "infinity", "period": "2026-07", "value": 7.8, "target": 7.5, "status": "green", "vs_prior": 2.0}, {"metric_id": "hr.team_satisfaction", "brand_id": "infinity", "period": "2026-08", "value": 6.7, "target": 7.5, "status": "red", "vs_prior": -1.1}, {"metric_id": "hr.team_satisfaction", "brand_id": "tlf", "period": "2026-03", "value": 4.7, "target": 7.5, "status": "red", "vs_prior": null}, {"metric_id": "hr.team_satisfaction", "brand_id": "tlf", "period": "2026-04", "value": 5.7, "target": 7.5, "status": "red", "vs_prior": 1.0}, {"metric_id": "hr.team_satisfaction", "brand_id": "tlf", "period": "2026-05", "value": 5.4, "target": 7.5, "status": "red", "vs_prior": -0.3}, {"metric_id": "hr.team_satisfaction", "brand_id": "tlf", "period": "2026-06", "value": 6.7, "target": 7.5, "status": "red", "vs_prior": 1.3}, {"metric_id": "hr.team_satisfaction", "brand_id": "tlf", "period": "2026-07", "value": 7.2, "target": 7.5, "status": "amber", "vs_prior": 0.5}, {"metric_id": "hr.team_satisfaction", "brand_id": "tlf", "period": "2026-08", "value": 8.4, "target": 7.5, "status": "green", "vs_prior": 1.2}, {"metric_id": "hr.team_satisfaction", "brand_id": "infx", "period": "2026-03", "value": 4.8, "target": 7.5, "status": "red", "vs_prior": null}, {"metric_id": "hr.team_satisfaction", "brand_id": "infx", "period": "2026-04", "value": 5.5, "target": 7.5, "status": "red", "vs_prior": 0.7}, {"metric_id": "hr.team_satisfaction", "brand_id": "infx", "period": "2026-05", "value": 6.0, "target": 7.5, "status": "red", "vs_prior": 0.5}, {"metric_id": "hr.team_satisfaction", "brand_id": "infx", "period": "2026-06", "value": 6.0, "target": 7.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "hr.team_satisfaction", "brand_id": "infx", "period": "2026-07", "value": 7.8, "target": 7.5, "status": "green", "vs_prior": 1.8}, {"metric_id": "hr.team_satisfaction", "brand_id": "infx", "period": "2026-08", "value": 7.0, "target": 7.5, "status": "amber", "vs_prior": -0.8}, {"metric_id": "hr.team_satisfaction", "brand_id": "fluxflow", "period": "2026-03", "value": 5.9, "target": 7.5, "status": "red", "vs_prior": null}, {"metric_id": "hr.team_satisfaction", "brand_id": "fluxflow", "period": "2026-04", "value": 5.9, "target": 7.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "hr.team_satisfaction", "brand_id": "fluxflow", "period": "2026-05", "value": 6.4, "target": 7.5, "status": "red", "vs_prior": 0.5}, {"metric_id": "hr.team_satisfaction", "brand_id": "fluxflow", "period": "2026-06", "value": 6.6, "target": 7.5, "status": "red", "vs_prior": 0.2}, {"metric_id": "hr.team_satisfaction", "brand_id": "fluxflow", "period": "2026-07", "value": 6.5, "target": 7.5, "status": "red", "vs_prior": -0.1}, {"metric_id": "hr.team_satisfaction", "brand_id": "fluxflow", "period": "2026-08", "value": 7.3, "target": 7.5, "status": "amber", "vs_prior": 0.8}, {"metric_id": "hr.team_satisfaction", "brand_id": "divorced", "period": "2026-03", "value": 5.1, "target": 7.5, "status": "red", "vs_prior": null}, {"metric_id": "hr.team_satisfaction", "brand_id": "divorced", "period": "2026-04", "value": 5.5, "target": 7.5, "status": "red", "vs_prior": 0.4}, {"metric_id": "hr.team_satisfaction", "brand_id": "divorced", "period": "2026-05", "value": 5.3, "target": 7.5, "status": "red", "vs_prior": -0.2}, {"metric_id": "hr.team_satisfaction", "brand_id": "divorced", "period": "2026-06", "value": 6.7, "target": 7.5, "status": "red", "vs_prior": 1.4}, {"metric_id": "hr.team_satisfaction", "brand_id": "divorced", "period": "2026-07", "value": 6.3, "target": 7.5, "status": "red", "vs_prior": -0.4}, {"metric_id": "hr.team_satisfaction", "brand_id": "divorced", "period": "2026-08", "value": 6.9, "target": 7.5, "status": "amber", "vs_prior": 0.6}, {"metric_id": "hr.team_satisfaction", "brand_id": "papapasta", "period": "2026-03", "value": 5.1, "target": 7.5, "status": "red", "vs_prior": null}, {"metric_id": "hr.team_satisfaction", "brand_id": "papapasta", "period": "2026-04", "value": 5.8, "target": 7.5, "status": "red", "vs_prior": 0.7}, {"metric_id": "hr.team_satisfaction", "brand_id": "papapasta", "period": "2026-05", "value": 5.7, "target": 7.5, "status": "red", "vs_prior": -0.1}, {"metric_id": "hr.team_satisfaction", "brand_id": "papapasta", "period": "2026-06", "value": 6.1, "target": 7.5, "status": "red", "vs_prior": 0.4}, {"metric_id": "hr.team_satisfaction", "brand_id": "papapasta", "period": "2026-07", "value": 6.3, "target": 7.5, "status": "red", "vs_prior": 0.2}, {"metric_id": "hr.team_satisfaction", "brand_id": "papapasta", "period": "2026-08", "value": 7.8, "target": 7.5, "status": "green", "vs_prior": 1.5}, {"metric_id": "hr.team_satisfaction", "brand_id": "acdc", "period": "2026-03", "value": 4.8, "target": 7.5, "status": "red", "vs_prior": null}, {"metric_id": "hr.team_satisfaction", "brand_id": "acdc", "period": "2026-04", "value": 5.8, "target": 7.5, "status": "red", "vs_prior": 1.0}, {"metric_id": "hr.team_satisfaction", "brand_id": "acdc", "period": "2026-05", "value": 6.1, "target": 7.5, "status": "red", "vs_prior": 0.3}, {"metric_id": "hr.team_satisfaction", "brand_id": "acdc", "period": "2026-06", "value": 6.4, "target": 7.5, "status": "red", "vs_prior": 0.3}, {"metric_id": "hr.team_satisfaction", "brand_id": "acdc", "period": "2026-07", "value": 7.4, "target": 7.5, "status": "amber", "vs_prior": 1.0}, {"metric_id": "hr.team_satisfaction", "brand_id": "acdc", "period": "2026-08", "value": 7.5, "target": 7.5, "status": "green", "vs_prior": 0.1}, {"metric_id": "hr.training_hours", "brand_id": "infinity", "period": "2026-03", "value": 2.8, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "hr.training_hours", "brand_id": "infinity", "period": "2026-04", "value": 2.6, "target": 4, "status": "red", "vs_prior": -0.2}, {"metric_id": "hr.training_hours", "brand_id": "infinity", "period": "2026-05", "value": 3.6, "target": 4, "status": "amber", "vs_prior": 1.0}, {"metric_id": "hr.training_hours", "brand_id": "infinity", "period": "2026-06", "value": 3.7, "target": 4, "status": "amber", "vs_prior": 0.1}, {"metric_id": "hr.training_hours", "brand_id": "infinity", "period": "2026-07", "value": 3.5, "target": 4, "status": "red", "vs_prior": -0.2}, {"metric_id": "hr.training_hours", "brand_id": "infinity", "period": "2026-08", "value": 3.8, "target": 4, "status": "amber", "vs_prior": 0.3}, {"metric_id": "hr.training_hours", "brand_id": "tlf", "period": "2026-03", "value": 2.4, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "hr.training_hours", "brand_id": "tlf", "period": "2026-04", "value": 3.2, "target": 4, "status": "red", "vs_prior": 0.8}, {"metric_id": "hr.training_hours", "brand_id": "tlf", "period": "2026-05", "value": 3.5, "target": 4, "status": "red", "vs_prior": 0.3}, {"metric_id": "hr.training_hours", "brand_id": "tlf", "period": "2026-06", "value": 3.1, "target": 4, "status": "red", "vs_prior": -0.4}, {"metric_id": "hr.training_hours", "brand_id": "tlf", "period": "2026-07", "value": 3.9, "target": 4, "status": "amber", "vs_prior": 0.8}, {"metric_id": "hr.training_hours", "brand_id": "tlf", "period": "2026-08", "value": 4.4, "target": 4, "status": "green", "vs_prior": 0.5}, {"metric_id": "hr.training_hours", "brand_id": "infx", "period": "2026-03", "value": 3.0, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "hr.training_hours", "brand_id": "infx", "period": "2026-04", "value": 3.2, "target": 4, "status": "red", "vs_prior": 0.2}, {"metric_id": "hr.training_hours", "brand_id": "infx", "period": "2026-05", "value": 3.1, "target": 4, "status": "red", "vs_prior": -0.1}, {"metric_id": "hr.training_hours", "brand_id": "infx", "period": "2026-06", "value": 3.6, "target": 4, "status": "amber", "vs_prior": 0.5}, {"metric_id": "hr.training_hours", "brand_id": "infx", "period": "2026-07", "value": 3.7, "target": 4, "status": "amber", "vs_prior": 0.1}, {"metric_id": "hr.training_hours", "brand_id": "infx", "period": "2026-08", "value": 4.4, "target": 4, "status": "green", "vs_prior": 0.7}, {"metric_id": "hr.training_hours", "brand_id": "fluxflow", "period": "2026-03", "value": 2.5, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "hr.training_hours", "brand_id": "fluxflow", "period": "2026-04", "value": 2.9, "target": 4, "status": "red", "vs_prior": 0.4}, {"metric_id": "hr.training_hours", "brand_id": "fluxflow", "period": "2026-05", "value": 3.4, "target": 4, "status": "red", "vs_prior": 0.5}, {"metric_id": "hr.training_hours", "brand_id": "fluxflow", "period": "2026-06", "value": 3.8, "target": 4, "status": "amber", "vs_prior": 0.4}, {"metric_id": "hr.training_hours", "brand_id": "fluxflow", "period": "2026-07", "value": 3.3, "target": 4, "status": "red", "vs_prior": -0.5}, {"metric_id": "hr.training_hours", "brand_id": "fluxflow", "period": "2026-08", "value": 4.2, "target": 4, "status": "green", "vs_prior": 0.9}, {"metric_id": "hr.training_hours", "brand_id": "divorced", "period": "2026-03", "value": 2.8, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "hr.training_hours", "brand_id": "divorced", "period": "2026-04", "value": 2.8, "target": 4, "status": "red", "vs_prior": 0.0}, {"metric_id": "hr.training_hours", "brand_id": "divorced", "period": "2026-05", "value": 3.4, "target": 4, "status": "red", "vs_prior": 0.6}, {"metric_id": "hr.training_hours", "brand_id": "divorced", "period": "2026-06", "value": 3.1, "target": 4, "status": "red", "vs_prior": -0.3}, {"metric_id": "hr.training_hours", "brand_id": "divorced", "period": "2026-07", "value": 4.1, "target": 4, "status": "green", "vs_prior": 1.0}, {"metric_id": "hr.training_hours", "brand_id": "divorced", "period": "2026-08", "value": 4.0, "target": 4, "status": "green", "vs_prior": -0.1}, {"metric_id": "hr.training_hours", "brand_id": "papapasta", "period": "2026-03", "value": 2.4, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "hr.training_hours", "brand_id": "papapasta", "period": "2026-04", "value": 3.2, "target": 4, "status": "red", "vs_prior": 0.8}, {"metric_id": "hr.training_hours", "brand_id": "papapasta", "period": "2026-05", "value": 3.0, "target": 4, "status": "red", "vs_prior": -0.2}, {"metric_id": "hr.training_hours", "brand_id": "papapasta", "period": "2026-06", "value": 3.8, "target": 4, "status": "amber", "vs_prior": 0.8}, {"metric_id": "hr.training_hours", "brand_id": "papapasta", "period": "2026-07", "value": 3.7, "target": 4, "status": "amber", "vs_prior": -0.1}, {"metric_id": "hr.training_hours", "brand_id": "papapasta", "period": "2026-08", "value": 4.0, "target": 4, "status": "green", "vs_prior": 0.3}, {"metric_id": "hr.training_hours", "brand_id": "acdc", "period": "2026-03", "value": 2.7, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "hr.training_hours", "brand_id": "acdc", "period": "2026-04", "value": 3.4, "target": 4, "status": "red", "vs_prior": 0.7}, {"metric_id": "hr.training_hours", "brand_id": "acdc", "period": "2026-05", "value": 3.3, "target": 4, "status": "red", "vs_prior": -0.1}, {"metric_id": "hr.training_hours", "brand_id": "acdc", "period": "2026-06", "value": 3.3, "target": 4, "status": "red", "vs_prior": 0.0}, {"metric_id": "hr.training_hours", "brand_id": "acdc", "period": "2026-07", "value": 3.3, "target": 4, "status": "red", "vs_prior": 0.0}, {"metric_id": "hr.training_hours", "brand_id": "acdc", "period": "2026-08", "value": 4.5, "target": 4, "status": "green", "vs_prior": 1.2}, {"metric_id": "hr.playbook_coverage", "brand_id": "infinity", "period": "2026-03", "value": 47.7, "target": 80, "status": "red", "vs_prior": null}, {"metric_id": "hr.playbook_coverage", "brand_id": "infinity", "period": "2026-04", "value": 60.8, "target": 80, "status": "red", "vs_prior": 13.1}, {"metric_id": "hr.playbook_coverage", "brand_id": "infinity", "period": "2026-05", "value": 64.6, "target": 80, "status": "red", "vs_prior": 3.8}, {"metric_id": "hr.playbook_coverage", "brand_id": "infinity", "period": "2026-06", "value": 64.6, "target": 80, "status": "red", "vs_prior": 0.0}, {"metric_id": "hr.playbook_coverage", "brand_id": "infinity", "period": "2026-07", "value": 75.6, "target": 80, "status": "amber", "vs_prior": 11.0}, {"metric_id": "hr.playbook_coverage", "brand_id": "infinity", "period": "2026-08", "value": 80.3, "target": 80, "status": "green", "vs_prior": 4.7}, {"metric_id": "hr.playbook_coverage", "brand_id": "tlf", "period": "2026-03", "value": 53.5, "target": 80, "status": "red", "vs_prior": null}, {"metric_id": "hr.playbook_coverage", "brand_id": "tlf", "period": "2026-04", "value": 58.3, "target": 80, "status": "red", "vs_prior": 4.8}, {"metric_id": "hr.playbook_coverage", "brand_id": "tlf", "period": "2026-05", "value": 75.2, "target": 80, "status": "amber", "vs_prior": 16.9}, {"metric_id": "hr.playbook_coverage", "brand_id": "tlf", "period": "2026-06", "value": 79.5, "target": 80, "status": "amber", "vs_prior": 4.3}, {"metric_id": "hr.playbook_coverage", "brand_id": "tlf", "period": "2026-07", "value": 74.0, "target": 80, "status": "amber", "vs_prior": -5.5}, {"metric_id": "hr.playbook_coverage", "brand_id": "tlf", "period": "2026-08", "value": 80.1, "target": 80, "status": "green", "vs_prior": 6.1}, {"metric_id": "hr.playbook_coverage", "brand_id": "infx", "period": "2026-03", "value": 49.0, "target": 80, "status": "red", "vs_prior": null}, {"metric_id": "hr.playbook_coverage", "brand_id": "infx", "period": "2026-04", "value": 58.3, "target": 80, "status": "red", "vs_prior": 9.3}, {"metric_id": "hr.playbook_coverage", "brand_id": "infx", "period": "2026-05", "value": 64.6, "target": 80, "status": "red", "vs_prior": 6.3}, {"metric_id": "hr.playbook_coverage", "brand_id": "infx", "period": "2026-06", "value": 66.0, "target": 80, "status": "red", "vs_prior": 1.4}, {"metric_id": "hr.playbook_coverage", "brand_id": "infx", "period": "2026-07", "value": 79.4, "target": 80, "status": "amber", "vs_prior": 13.4}, {"metric_id": "hr.playbook_coverage", "brand_id": "infx", "period": "2026-08", "value": 71.1, "target": 80, "status": "red", "vs_prior": -8.3}, {"metric_id": "hr.playbook_coverage", "brand_id": "fluxflow", "period": "2026-03", "value": 52.7, "target": 80, "status": "red", "vs_prior": null}, {"metric_id": "hr.playbook_coverage", "brand_id": "fluxflow", "period": "2026-04", "value": 51.8, "target": 80, "status": "red", "vs_prior": -0.9}, {"metric_id": "hr.playbook_coverage", "brand_id": "fluxflow", "period": "2026-05", "value": 62.6, "target": 80, "status": "red", "vs_prior": 10.8}, {"metric_id": "hr.playbook_coverage", "brand_id": "fluxflow", "period": "2026-06", "value": 79.6, "target": 80, "status": "amber", "vs_prior": 17.0}, {"metric_id": "hr.playbook_coverage", "brand_id": "fluxflow", "period": "2026-07", "value": 68.4, "target": 80, "status": "red", "vs_prior": -11.2}, {"metric_id": "hr.playbook_coverage", "brand_id": "fluxflow", "period": "2026-08", "value": 77.0, "target": 80, "status": "amber", "vs_prior": 8.6}, {"metric_id": "hr.playbook_coverage", "brand_id": "divorced", "period": "2026-03", "value": 61.8, "target": 80, "status": "red", "vs_prior": null}, {"metric_id": "hr.playbook_coverage", "brand_id": "divorced", "period": "2026-04", "value": 53.2, "target": 80, "status": "red", "vs_prior": -8.6}, {"metric_id": "hr.playbook_coverage", "brand_id": "divorced", "period": "2026-05", "value": 66.4, "target": 80, "status": "red", "vs_prior": 13.2}, {"metric_id": "hr.playbook_coverage", "brand_id": "divorced", "period": "2026-06", "value": 62.5, "target": 80, "status": "red", "vs_prior": -3.9}, {"metric_id": "hr.playbook_coverage", "brand_id": "divorced", "period": "2026-07", "value": 73.0, "target": 80, "status": "amber", "vs_prior": 10.5}, {"metric_id": "hr.playbook_coverage", "brand_id": "divorced", "period": "2026-08", "value": 77.0, "target": 80, "status": "amber", "vs_prior": 4.0}, {"metric_id": "hr.playbook_coverage", "brand_id": "papapasta", "period": "2026-03", "value": 54.6, "target": 80, "status": "red", "vs_prior": null}, {"metric_id": "hr.playbook_coverage", "brand_id": "papapasta", "period": "2026-04", "value": 51.5, "target": 80, "status": "red", "vs_prior": -3.1}, {"metric_id": "hr.playbook_coverage", "brand_id": "papapasta", "period": "2026-05", "value": 69.6, "target": 80, "status": "red", "vs_prior": 18.1}, {"metric_id": "hr.playbook_coverage", "brand_id": "papapasta", "period": "2026-06", "value": 78.0, "target": 80, "status": "amber", "vs_prior": 8.4}, {"metric_id": "hr.playbook_coverage", "brand_id": "papapasta", "period": "2026-07", "value": 76.1, "target": 80, "status": "amber", "vs_prior": -1.9}, {"metric_id": "hr.playbook_coverage", "brand_id": "papapasta", "period": "2026-08", "value": 82.1, "target": 80, "status": "green", "vs_prior": 6.0}, {"metric_id": "hr.playbook_coverage", "brand_id": "acdc", "period": "2026-03", "value": 59.9, "target": 80, "status": "red", "vs_prior": null}, {"metric_id": "hr.playbook_coverage", "brand_id": "acdc", "period": "2026-04", "value": 63.0, "target": 80, "status": "red", "vs_prior": 3.1}, {"metric_id": "hr.playbook_coverage", "brand_id": "acdc", "period": "2026-05", "value": 69.3, "target": 80, "status": "red", "vs_prior": 6.3}, {"metric_id": "hr.playbook_coverage", "brand_id": "acdc", "period": "2026-06", "value": 78.0, "target": 80, "status": "amber", "vs_prior": 8.7}, {"metric_id": "hr.playbook_coverage", "brand_id": "acdc", "period": "2026-07", "value": 66.0, "target": 80, "status": "red", "vs_prior": -12.0}, {"metric_id": "hr.playbook_coverage", "brand_id": "acdc", "period": "2026-08", "value": 74.8, "target": 80, "status": "amber", "vs_prior": 8.8}, {"metric_id": "it.system_uptime", "brand_id": "infinity", "period": "2026-03", "value": 68.4, "target": 99, "status": "red", "vs_prior": null}, {"metric_id": "it.system_uptime", "brand_id": "infinity", "period": "2026-04", "value": 76.9, "target": 99, "status": "red", "vs_prior": 8.5}, {"metric_id": "it.system_uptime", "brand_id": "infinity", "period": "2026-05", "value": 84.8, "target": 99, "status": "red", "vs_prior": 7.9}, {"metric_id": "it.system_uptime", "brand_id": "infinity", "period": "2026-06", "value": 75.4, "target": 99, "status": "red", "vs_prior": -9.4}, {"metric_id": "it.system_uptime", "brand_id": "infinity", "period": "2026-07", "value": 102.7, "target": 99, "status": "green", "vs_prior": 27.3}, {"metric_id": "it.system_uptime", "brand_id": "infinity", "period": "2026-08", "value": 87.6, "target": 99, "status": "red", "vs_prior": -15.1}, {"metric_id": "it.system_uptime", "brand_id": "tlf", "period": "2026-03", "value": 78.5, "target": 99, "status": "red", "vs_prior": null}, {"metric_id": "it.system_uptime", "brand_id": "tlf", "period": "2026-04", "value": 82.8, "target": 99, "status": "red", "vs_prior": 4.3}, {"metric_id": "it.system_uptime", "brand_id": "tlf", "period": "2026-05", "value": 83.7, "target": 99, "status": "red", "vs_prior": 0.9}, {"metric_id": "it.system_uptime", "brand_id": "tlf", "period": "2026-06", "value": 97.0, "target": 99, "status": "amber", "vs_prior": 13.3}, {"metric_id": "it.system_uptime", "brand_id": "tlf", "period": "2026-07", "value": 87.5, "target": 99, "status": "red", "vs_prior": -9.5}, {"metric_id": "it.system_uptime", "brand_id": "tlf", "period": "2026-08", "value": 105.1, "target": 99, "status": "green", "vs_prior": 17.6}, {"metric_id": "it.system_uptime", "brand_id": "infx", "period": "2026-03", "value": 78.5, "target": 99, "status": "red", "vs_prior": null}, {"metric_id": "it.system_uptime", "brand_id": "infx", "period": "2026-04", "value": 75.8, "target": 99, "status": "red", "vs_prior": -2.7}, {"metric_id": "it.system_uptime", "brand_id": "infx", "period": "2026-05", "value": 91.7, "target": 99, "status": "amber", "vs_prior": 15.9}, {"metric_id": "it.system_uptime", "brand_id": "infx", "period": "2026-06", "value": 87.6, "target": 99, "status": "red", "vs_prior": -4.1}, {"metric_id": "it.system_uptime", "brand_id": "infx", "period": "2026-07", "value": 100.0, "target": 99, "status": "green", "vs_prior": 12.4}, {"metric_id": "it.system_uptime", "brand_id": "infx", "period": "2026-08", "value": 98.8, "target": 99, "status": "amber", "vs_prior": -1.2}, {"metric_id": "it.system_uptime", "brand_id": "fluxflow", "period": "2026-03", "value": 72.5, "target": 99, "status": "red", "vs_prior": null}, {"metric_id": "it.system_uptime", "brand_id": "fluxflow", "period": "2026-04", "value": 71.3, "target": 99, "status": "red", "vs_prior": -1.2}, {"metric_id": "it.system_uptime", "brand_id": "fluxflow", "period": "2026-05", "value": 84.0, "target": 99, "status": "red", "vs_prior": 12.7}, {"metric_id": "it.system_uptime", "brand_id": "fluxflow", "period": "2026-06", "value": 86.6, "target": 99, "status": "red", "vs_prior": 2.6}, {"metric_id": "it.system_uptime", "brand_id": "fluxflow", "period": "2026-07", "value": 101.5, "target": 99, "status": "green", "vs_prior": 14.9}, {"metric_id": "it.system_uptime", "brand_id": "fluxflow", "period": "2026-08", "value": 96.7, "target": 99, "status": "amber", "vs_prior": -4.8}, {"metric_id": "it.system_uptime", "brand_id": "divorced", "period": "2026-03", "value": 63.1, "target": 99, "status": "red", "vs_prior": null}, {"metric_id": "it.system_uptime", "brand_id": "divorced", "period": "2026-04", "value": 81.9, "target": 99, "status": "red", "vs_prior": 18.8}, {"metric_id": "it.system_uptime", "brand_id": "divorced", "period": "2026-05", "value": 77.3, "target": 99, "status": "red", "vs_prior": -4.6}, {"metric_id": "it.system_uptime", "brand_id": "divorced", "period": "2026-06", "value": 87.5, "target": 99, "status": "red", "vs_prior": 10.2}, {"metric_id": "it.system_uptime", "brand_id": "divorced", "period": "2026-07", "value": 100.0, "target": 99, "status": "green", "vs_prior": 12.5}, {"metric_id": "it.system_uptime", "brand_id": "divorced", "period": "2026-08", "value": 99.2, "target": 99, "status": "green", "vs_prior": -0.8}, {"metric_id": "it.system_uptime", "brand_id": "papapasta", "period": "2026-03", "value": 78.8, "target": 99, "status": "red", "vs_prior": null}, {"metric_id": "it.system_uptime", "brand_id": "papapasta", "period": "2026-04", "value": 68.6, "target": 99, "status": "red", "vs_prior": -10.2}, {"metric_id": "it.system_uptime", "brand_id": "papapasta", "period": "2026-05", "value": 85.5, "target": 99, "status": "red", "vs_prior": 16.9}, {"metric_id": "it.system_uptime", "brand_id": "papapasta", "period": "2026-06", "value": 76.2, "target": 99, "status": "red", "vs_prior": -9.3}, {"metric_id": "it.system_uptime", "brand_id": "papapasta", "period": "2026-07", "value": 102.6, "target": 99, "status": "green", "vs_prior": 26.4}, {"metric_id": "it.system_uptime", "brand_id": "papapasta", "period": "2026-08", "value": 104.2, "target": 99, "status": "green", "vs_prior": 1.6}, {"metric_id": "it.system_uptime", "brand_id": "acdc", "period": "2026-03", "value": 61.1, "target": 99, "status": "red", "vs_prior": null}, {"metric_id": "it.system_uptime", "brand_id": "acdc", "period": "2026-04", "value": 80.2, "target": 99, "status": "red", "vs_prior": 19.1}, {"metric_id": "it.system_uptime", "brand_id": "acdc", "period": "2026-05", "value": 81.7, "target": 99, "status": "red", "vs_prior": 1.5}, {"metric_id": "it.system_uptime", "brand_id": "acdc", "period": "2026-06", "value": 93.5, "target": 99, "status": "amber", "vs_prior": 11.8}, {"metric_id": "it.system_uptime", "brand_id": "acdc", "period": "2026-07", "value": 82.2, "target": 99, "status": "red", "vs_prior": -11.3}, {"metric_id": "it.system_uptime", "brand_id": "acdc", "period": "2026-08", "value": 96.8, "target": 99, "status": "amber", "vs_prior": 14.6}, {"metric_id": "it.mttr_p1", "brand_id": "infinity", "period": "2026-03", "value": 3.0, "target": 4, "status": "green", "vs_prior": null}, {"metric_id": "it.mttr_p1", "brand_id": "infinity", "period": "2026-04", "value": 2.9, "target": 4, "status": "green", "vs_prior": -0.1}, {"metric_id": "it.mttr_p1", "brand_id": "infinity", "period": "2026-05", "value": 2.9, "target": 4, "status": "green", "vs_prior": 0.0}, {"metric_id": "it.mttr_p1", "brand_id": "infinity", "period": "2026-06", "value": 3.4, "target": 4, "status": "green", "vs_prior": 0.5}, {"metric_id": "it.mttr_p1", "brand_id": "infinity", "period": "2026-07", "value": 3.6, "target": 4, "status": "green", "vs_prior": 0.2}, {"metric_id": "it.mttr_p1", "brand_id": "infinity", "period": "2026-08", "value": 3.8, "target": 4, "status": "green", "vs_prior": 0.2}, {"metric_id": "it.mttr_p1", "brand_id": "tlf", "period": "2026-03", "value": 2.7, "target": 4, "status": "green", "vs_prior": null}, {"metric_id": "it.mttr_p1", "brand_id": "tlf", "period": "2026-04", "value": 3.2, "target": 4, "status": "green", "vs_prior": 0.5}, {"metric_id": "it.mttr_p1", "brand_id": "tlf", "period": "2026-05", "value": 2.8, "target": 4, "status": "green", "vs_prior": -0.4}, {"metric_id": "it.mttr_p1", "brand_id": "tlf", "period": "2026-06", "value": 3.7, "target": 4, "status": "green", "vs_prior": 0.9}, {"metric_id": "it.mttr_p1", "brand_id": "tlf", "period": "2026-07", "value": 3.8, "target": 4, "status": "green", "vs_prior": 0.1}, {"metric_id": "it.mttr_p1", "brand_id": "tlf", "period": "2026-08", "value": 3.6, "target": 4, "status": "green", "vs_prior": -0.2}, {"metric_id": "it.mttr_p1", "brand_id": "infx", "period": "2026-03", "value": 3.1, "target": 4, "status": "green", "vs_prior": null}, {"metric_id": "it.mttr_p1", "brand_id": "infx", "period": "2026-04", "value": 3.2, "target": 4, "status": "green", "vs_prior": 0.1}, {"metric_id": "it.mttr_p1", "brand_id": "infx", "period": "2026-05", "value": 2.9, "target": 4, "status": "green", "vs_prior": -0.3}, {"metric_id": "it.mttr_p1", "brand_id": "infx", "period": "2026-06", "value": 3.2, "target": 4, "status": "green", "vs_prior": 0.3}, {"metric_id": "it.mttr_p1", "brand_id": "infx", "period": "2026-07", "value": 3.7, "target": 4, "status": "green", "vs_prior": 0.5}, {"metric_id": "it.mttr_p1", "brand_id": "infx", "period": "2026-08", "value": 4.4, "target": 4, "status": "amber", "vs_prior": 0.7}, {"metric_id": "it.mttr_p1", "brand_id": "fluxflow", "period": "2026-03", "value": 2.5, "target": 4, "status": "green", "vs_prior": null}, {"metric_id": "it.mttr_p1", "brand_id": "fluxflow", "period": "2026-04", "value": 3.4, "target": 4, "status": "green", "vs_prior": 0.9}, {"metric_id": "it.mttr_p1", "brand_id": "fluxflow", "period": "2026-05", "value": 3.1, "target": 4, "status": "green", "vs_prior": -0.3}, {"metric_id": "it.mttr_p1", "brand_id": "fluxflow", "period": "2026-06", "value": 3.1, "target": 4, "status": "green", "vs_prior": 0.0}, {"metric_id": "it.mttr_p1", "brand_id": "fluxflow", "period": "2026-07", "value": 3.7, "target": 4, "status": "green", "vs_prior": 0.6}, {"metric_id": "it.mttr_p1", "brand_id": "fluxflow", "period": "2026-08", "value": 4.2, "target": 4, "status": "amber", "vs_prior": 0.5}, {"metric_id": "it.mttr_p1", "brand_id": "divorced", "period": "2026-03", "value": 2.9, "target": 4, "status": "green", "vs_prior": null}, {"metric_id": "it.mttr_p1", "brand_id": "divorced", "period": "2026-04", "value": 3.2, "target": 4, "status": "green", "vs_prior": 0.3}, {"metric_id": "it.mttr_p1", "brand_id": "divorced", "period": "2026-05", "value": 3.0, "target": 4, "status": "green", "vs_prior": -0.2}, {"metric_id": "it.mttr_p1", "brand_id": "divorced", "period": "2026-06", "value": 3.6, "target": 4, "status": "green", "vs_prior": 0.6}, {"metric_id": "it.mttr_p1", "brand_id": "divorced", "period": "2026-07", "value": 3.6, "target": 4, "status": "green", "vs_prior": 0.0}, {"metric_id": "it.mttr_p1", "brand_id": "divorced", "period": "2026-08", "value": 4.1, "target": 4, "status": "amber", "vs_prior": 0.5}, {"metric_id": "it.mttr_p1", "brand_id": "papapasta", "period": "2026-03", "value": 2.4, "target": 4, "status": "green", "vs_prior": null}, {"metric_id": "it.mttr_p1", "brand_id": "papapasta", "period": "2026-04", "value": 3.5, "target": 4, "status": "green", "vs_prior": 1.1}, {"metric_id": "it.mttr_p1", "brand_id": "papapasta", "period": "2026-05", "value": 3.3, "target": 4, "status": "green", "vs_prior": -0.2}, {"metric_id": "it.mttr_p1", "brand_id": "papapasta", "period": "2026-06", "value": 3.6, "target": 4, "status": "green", "vs_prior": 0.3}, {"metric_id": "it.mttr_p1", "brand_id": "papapasta", "period": "2026-07", "value": 4.0, "target": 4, "status": "green", "vs_prior": 0.4}, {"metric_id": "it.mttr_p1", "brand_id": "papapasta", "period": "2026-08", "value": 4.0, "target": 4, "status": "green", "vs_prior": 0.0}, {"metric_id": "it.mttr_p1", "brand_id": "acdc", "period": "2026-03", "value": 2.3, "target": 4, "status": "green", "vs_prior": null}, {"metric_id": "it.mttr_p1", "brand_id": "acdc", "period": "2026-04", "value": 3.1, "target": 4, "status": "green", "vs_prior": 0.8}, {"metric_id": "it.mttr_p1", "brand_id": "acdc", "period": "2026-05", "value": 3.4, "target": 4, "status": "green", "vs_prior": 0.3}, {"metric_id": "it.mttr_p1", "brand_id": "acdc", "period": "2026-06", "value": 3.7, "target": 4, "status": "green", "vs_prior": 0.3}, {"metric_id": "it.mttr_p1", "brand_id": "acdc", "period": "2026-07", "value": 3.9, "target": 4, "status": "green", "vs_prior": 0.2}, {"metric_id": "it.mttr_p1", "brand_id": "acdc", "period": "2026-08", "value": 4.3, "target": 4, "status": "amber", "vs_prior": 0.4}, {"metric_id": "it.open_tickets", "brand_id": "infinity", "period": "2026-03", "value": 7, "target": 10, "status": "green", "vs_prior": null}, {"metric_id": "it.open_tickets", "brand_id": "infinity", "period": "2026-04", "value": 7, "target": 10, "status": "green", "vs_prior": 0}, {"metric_id": "it.open_tickets", "brand_id": "infinity", "period": "2026-05", "value": 7, "target": 10, "status": "green", "vs_prior": 0}, {"metric_id": "it.open_tickets", "brand_id": "infinity", "period": "2026-06", "value": 8, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "infinity", "period": "2026-07", "value": 8, "target": 10, "status": "green", "vs_prior": 0}, {"metric_id": "it.open_tickets", "brand_id": "infinity", "period": "2026-08", "value": 9, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "tlf", "period": "2026-03", "value": 6, "target": 10, "status": "green", "vs_prior": null}, {"metric_id": "it.open_tickets", "brand_id": "tlf", "period": "2026-04", "value": 8, "target": 10, "status": "green", "vs_prior": 2}, {"metric_id": "it.open_tickets", "brand_id": "tlf", "period": "2026-05", "value": 8, "target": 10, "status": "green", "vs_prior": 0}, {"metric_id": "it.open_tickets", "brand_id": "tlf", "period": "2026-06", "value": 9, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "tlf", "period": "2026-07", "value": 10, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "tlf", "period": "2026-08", "value": 9, "target": 10, "status": "green", "vs_prior": -1}, {"metric_id": "it.open_tickets", "brand_id": "infx", "period": "2026-03", "value": 8, "target": 10, "status": "green", "vs_prior": null}, {"metric_id": "it.open_tickets", "brand_id": "infx", "period": "2026-04", "value": 9, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "infx", "period": "2026-05", "value": 9, "target": 10, "status": "green", "vs_prior": 0}, {"metric_id": "it.open_tickets", "brand_id": "infx", "period": "2026-06", "value": 8, "target": 10, "status": "green", "vs_prior": -1}, {"metric_id": "it.open_tickets", "brand_id": "infx", "period": "2026-07", "value": 10, "target": 10, "status": "green", "vs_prior": 2}, {"metric_id": "it.open_tickets", "brand_id": "infx", "period": "2026-08", "value": 10, "target": 10, "status": "green", "vs_prior": 0}, {"metric_id": "it.open_tickets", "brand_id": "fluxflow", "period": "2026-03", "value": 7, "target": 10, "status": "green", "vs_prior": null}, {"metric_id": "it.open_tickets", "brand_id": "fluxflow", "period": "2026-04", "value": 9, "target": 10, "status": "green", "vs_prior": 2}, {"metric_id": "it.open_tickets", "brand_id": "fluxflow", "period": "2026-05", "value": 9, "target": 10, "status": "green", "vs_prior": 0}, {"metric_id": "it.open_tickets", "brand_id": "fluxflow", "period": "2026-06", "value": 10, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "fluxflow", "period": "2026-07", "value": 10, "target": 10, "status": "green", "vs_prior": 0}, {"metric_id": "it.open_tickets", "brand_id": "fluxflow", "period": "2026-08", "value": 11, "target": 10, "status": "amber", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "divorced", "period": "2026-03", "value": 7, "target": 10, "status": "green", "vs_prior": null}, {"metric_id": "it.open_tickets", "brand_id": "divorced", "period": "2026-04", "value": 8, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "divorced", "period": "2026-05", "value": 8, "target": 10, "status": "green", "vs_prior": 0}, {"metric_id": "it.open_tickets", "brand_id": "divorced", "period": "2026-06", "value": 10, "target": 10, "status": "green", "vs_prior": 2}, {"metric_id": "it.open_tickets", "brand_id": "divorced", "period": "2026-07", "value": 10, "target": 10, "status": "green", "vs_prior": 0}, {"metric_id": "it.open_tickets", "brand_id": "divorced", "period": "2026-08", "value": 9, "target": 10, "status": "green", "vs_prior": -1}, {"metric_id": "it.open_tickets", "brand_id": "papapasta", "period": "2026-03", "value": 8, "target": 10, "status": "green", "vs_prior": null}, {"metric_id": "it.open_tickets", "brand_id": "papapasta", "period": "2026-04", "value": 9, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "papapasta", "period": "2026-05", "value": 7, "target": 10, "status": "green", "vs_prior": -2}, {"metric_id": "it.open_tickets", "brand_id": "papapasta", "period": "2026-06", "value": 9, "target": 10, "status": "green", "vs_prior": 2}, {"metric_id": "it.open_tickets", "brand_id": "papapasta", "period": "2026-07", "value": 9, "target": 10, "status": "green", "vs_prior": 0}, {"metric_id": "it.open_tickets", "brand_id": "papapasta", "period": "2026-08", "value": 10, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "acdc", "period": "2026-03", "value": 6, "target": 10, "status": "green", "vs_prior": null}, {"metric_id": "it.open_tickets", "brand_id": "acdc", "period": "2026-04", "value": 7, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "acdc", "period": "2026-05", "value": 8, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "acdc", "period": "2026-06", "value": 9, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.open_tickets", "brand_id": "acdc", "period": "2026-07", "value": 9, "target": 10, "status": "green", "vs_prior": 0}, {"metric_id": "it.open_tickets", "brand_id": "acdc", "period": "2026-08", "value": 10, "target": 10, "status": "green", "vs_prior": 1}, {"metric_id": "it.automation_coverage", "brand_id": "infinity", "period": "2026-03", "value": 37.1, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "it.automation_coverage", "brand_id": "infinity", "period": "2026-04", "value": 35.6, "target": 50, "status": "red", "vs_prior": -1.5}, {"metric_id": "it.automation_coverage", "brand_id": "infinity", "period": "2026-05", "value": 46.6, "target": 50, "status": "amber", "vs_prior": 11.0}, {"metric_id": "it.automation_coverage", "brand_id": "infinity", "period": "2026-06", "value": 41.9, "target": 50, "status": "red", "vs_prior": -4.7}, {"metric_id": "it.automation_coverage", "brand_id": "infinity", "period": "2026-07", "value": 43.5, "target": 50, "status": "red", "vs_prior": 1.6}, {"metric_id": "it.automation_coverage", "brand_id": "infinity", "period": "2026-08", "value": 53.1, "target": 50, "status": "green", "vs_prior": 9.6}, {"metric_id": "it.automation_coverage", "brand_id": "tlf", "period": "2026-03", "value": 37.4, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "it.automation_coverage", "brand_id": "tlf", "period": "2026-04", "value": 41.1, "target": 50, "status": "red", "vs_prior": 3.7}, {"metric_id": "it.automation_coverage", "brand_id": "tlf", "period": "2026-05", "value": 41.7, "target": 50, "status": "red", "vs_prior": 0.6}, {"metric_id": "it.automation_coverage", "brand_id": "tlf", "period": "2026-06", "value": 46.5, "target": 50, "status": "amber", "vs_prior": 4.8}, {"metric_id": "it.automation_coverage", "brand_id": "tlf", "period": "2026-07", "value": 47.6, "target": 50, "status": "amber", "vs_prior": 1.1}, {"metric_id": "it.automation_coverage", "brand_id": "tlf", "period": "2026-08", "value": 52.6, "target": 50, "status": "green", "vs_prior": 5.0}, {"metric_id": "it.automation_coverage", "brand_id": "infx", "period": "2026-03", "value": 29.9, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "it.automation_coverage", "brand_id": "infx", "period": "2026-04", "value": 40.7, "target": 50, "status": "red", "vs_prior": 10.8}, {"metric_id": "it.automation_coverage", "brand_id": "infx", "period": "2026-05", "value": 42.0, "target": 50, "status": "red", "vs_prior": 1.3}, {"metric_id": "it.automation_coverage", "brand_id": "infx", "period": "2026-06", "value": 39.0, "target": 50, "status": "red", "vs_prior": -3.0}, {"metric_id": "it.automation_coverage", "brand_id": "infx", "period": "2026-07", "value": 45.6, "target": 50, "status": "amber", "vs_prior": 6.6}, {"metric_id": "it.automation_coverage", "brand_id": "infx", "period": "2026-08", "value": 49.9, "target": 50, "status": "amber", "vs_prior": 4.3}, {"metric_id": "it.automation_coverage", "brand_id": "fluxflow", "period": "2026-03", "value": 37.2, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "it.automation_coverage", "brand_id": "fluxflow", "period": "2026-04", "value": 35.3, "target": 50, "status": "red", "vs_prior": -1.9}, {"metric_id": "it.automation_coverage", "brand_id": "fluxflow", "period": "2026-05", "value": 39.3, "target": 50, "status": "red", "vs_prior": 4.0}, {"metric_id": "it.automation_coverage", "brand_id": "fluxflow", "period": "2026-06", "value": 45.8, "target": 50, "status": "amber", "vs_prior": 6.5}, {"metric_id": "it.automation_coverage", "brand_id": "fluxflow", "period": "2026-07", "value": 47.5, "target": 50, "status": "amber", "vs_prior": 1.7}, {"metric_id": "it.automation_coverage", "brand_id": "fluxflow", "period": "2026-08", "value": 55.1, "target": 50, "status": "green", "vs_prior": 7.6}, {"metric_id": "it.automation_coverage", "brand_id": "divorced", "period": "2026-03", "value": 36.8, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "it.automation_coverage", "brand_id": "divorced", "period": "2026-04", "value": 35.1, "target": 50, "status": "red", "vs_prior": -1.7}, {"metric_id": "it.automation_coverage", "brand_id": "divorced", "period": "2026-05", "value": 41.0, "target": 50, "status": "red", "vs_prior": 5.9}, {"metric_id": "it.automation_coverage", "brand_id": "divorced", "period": "2026-06", "value": 48.5, "target": 50, "status": "amber", "vs_prior": 7.5}, {"metric_id": "it.automation_coverage", "brand_id": "divorced", "period": "2026-07", "value": 48.0, "target": 50, "status": "amber", "vs_prior": -0.5}, {"metric_id": "it.automation_coverage", "brand_id": "divorced", "period": "2026-08", "value": 50.4, "target": 50, "status": "green", "vs_prior": 2.4}, {"metric_id": "it.automation_coverage", "brand_id": "papapasta", "period": "2026-03", "value": 35.8, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "it.automation_coverage", "brand_id": "papapasta", "period": "2026-04", "value": 38.6, "target": 50, "status": "red", "vs_prior": 2.8}, {"metric_id": "it.automation_coverage", "brand_id": "papapasta", "period": "2026-05", "value": 43.5, "target": 50, "status": "red", "vs_prior": 4.9}, {"metric_id": "it.automation_coverage", "brand_id": "papapasta", "period": "2026-06", "value": 48.4, "target": 50, "status": "amber", "vs_prior": 4.9}, {"metric_id": "it.automation_coverage", "brand_id": "papapasta", "period": "2026-07", "value": 46.7, "target": 50, "status": "amber", "vs_prior": -1.7}, {"metric_id": "it.automation_coverage", "brand_id": "papapasta", "period": "2026-08", "value": 51.0, "target": 50, "status": "green", "vs_prior": 4.3}, {"metric_id": "it.automation_coverage", "brand_id": "acdc", "period": "2026-03", "value": 34.7, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "it.automation_coverage", "brand_id": "acdc", "period": "2026-04", "value": 36.8, "target": 50, "status": "red", "vs_prior": 2.1}, {"metric_id": "it.automation_coverage", "brand_id": "acdc", "period": "2026-05", "value": 39.0, "target": 50, "status": "red", "vs_prior": 2.2}, {"metric_id": "it.automation_coverage", "brand_id": "acdc", "period": "2026-06", "value": 49.5, "target": 50, "status": "amber", "vs_prior": 10.5}, {"metric_id": "it.automation_coverage", "brand_id": "acdc", "period": "2026-07", "value": 49.3, "target": 50, "status": "amber", "vs_prior": -0.2}, {"metric_id": "it.automation_coverage", "brand_id": "acdc", "period": "2026-08", "value": 53.4, "target": 50, "status": "green", "vs_prior": 4.1}, {"metric_id": "it.ai_adoption", "brand_id": "infinity", "period": "2026-03", "value": 27.3, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "it.ai_adoption", "brand_id": "infinity", "period": "2026-04", "value": 28.8, "target": 40, "status": "red", "vs_prior": 1.5}, {"metric_id": "it.ai_adoption", "brand_id": "infinity", "period": "2026-05", "value": 35.0, "target": 40, "status": "red", "vs_prior": 6.2}, {"metric_id": "it.ai_adoption", "brand_id": "infinity", "period": "2026-06", "value": 37.0, "target": 40, "status": "amber", "vs_prior": 2.0}, {"metric_id": "it.ai_adoption", "brand_id": "infinity", "period": "2026-07", "value": 38.9, "target": 40, "status": "amber", "vs_prior": 1.9}, {"metric_id": "it.ai_adoption", "brand_id": "infinity", "period": "2026-08", "value": 39.6, "target": 40, "status": "amber", "vs_prior": 0.7}, {"metric_id": "it.ai_adoption", "brand_id": "tlf", "period": "2026-03", "value": 27.7, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "it.ai_adoption", "brand_id": "tlf", "period": "2026-04", "value": 30.6, "target": 40, "status": "red", "vs_prior": 2.9}, {"metric_id": "it.ai_adoption", "brand_id": "tlf", "period": "2026-05", "value": 33.3, "target": 40, "status": "red", "vs_prior": 2.7}, {"metric_id": "it.ai_adoption", "brand_id": "tlf", "period": "2026-06", "value": 39.1, "target": 40, "status": "amber", "vs_prior": 5.8}, {"metric_id": "it.ai_adoption", "brand_id": "tlf", "period": "2026-07", "value": 34.0, "target": 40, "status": "red", "vs_prior": -5.1}, {"metric_id": "it.ai_adoption", "brand_id": "tlf", "period": "2026-08", "value": 40.3, "target": 40, "status": "green", "vs_prior": 6.3}, {"metric_id": "it.ai_adoption", "brand_id": "infx", "period": "2026-03", "value": 26.7, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "it.ai_adoption", "brand_id": "infx", "period": "2026-04", "value": 32.8, "target": 40, "status": "red", "vs_prior": 6.1}, {"metric_id": "it.ai_adoption", "brand_id": "infx", "period": "2026-05", "value": 33.5, "target": 40, "status": "red", "vs_prior": 0.7}, {"metric_id": "it.ai_adoption", "brand_id": "infx", "period": "2026-06", "value": 37.6, "target": 40, "status": "amber", "vs_prior": 4.1}, {"metric_id": "it.ai_adoption", "brand_id": "infx", "period": "2026-07", "value": 41.1, "target": 40, "status": "green", "vs_prior": 3.5}, {"metric_id": "it.ai_adoption", "brand_id": "infx", "period": "2026-08", "value": 39.2, "target": 40, "status": "amber", "vs_prior": -1.9}, {"metric_id": "it.ai_adoption", "brand_id": "fluxflow", "period": "2026-03", "value": 26.8, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "it.ai_adoption", "brand_id": "fluxflow", "period": "2026-04", "value": 34.1, "target": 40, "status": "red", "vs_prior": 7.3}, {"metric_id": "it.ai_adoption", "brand_id": "fluxflow", "period": "2026-05", "value": 30.2, "target": 40, "status": "red", "vs_prior": -3.9}, {"metric_id": "it.ai_adoption", "brand_id": "fluxflow", "period": "2026-06", "value": 38.5, "target": 40, "status": "amber", "vs_prior": 8.3}, {"metric_id": "it.ai_adoption", "brand_id": "fluxflow", "period": "2026-07", "value": 37.4, "target": 40, "status": "amber", "vs_prior": -1.1}, {"metric_id": "it.ai_adoption", "brand_id": "fluxflow", "period": "2026-08", "value": 35.5, "target": 40, "status": "red", "vs_prior": -1.9}, {"metric_id": "it.ai_adoption", "brand_id": "divorced", "period": "2026-03", "value": 27.9, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "it.ai_adoption", "brand_id": "divorced", "period": "2026-04", "value": 29.7, "target": 40, "status": "red", "vs_prior": 1.8}, {"metric_id": "it.ai_adoption", "brand_id": "divorced", "period": "2026-05", "value": 33.6, "target": 40, "status": "red", "vs_prior": 3.9}, {"metric_id": "it.ai_adoption", "brand_id": "divorced", "period": "2026-06", "value": 31.8, "target": 40, "status": "red", "vs_prior": -1.8}, {"metric_id": "it.ai_adoption", "brand_id": "divorced", "period": "2026-07", "value": 39.8, "target": 40, "status": "amber", "vs_prior": 8.0}, {"metric_id": "it.ai_adoption", "brand_id": "divorced", "period": "2026-08", "value": 37.3, "target": 40, "status": "amber", "vs_prior": -2.5}, {"metric_id": "it.ai_adoption", "brand_id": "papapasta", "period": "2026-03", "value": 29.3, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "it.ai_adoption", "brand_id": "papapasta", "period": "2026-04", "value": 32.6, "target": 40, "status": "red", "vs_prior": 3.3}, {"metric_id": "it.ai_adoption", "brand_id": "papapasta", "period": "2026-05", "value": 34.8, "target": 40, "status": "red", "vs_prior": 2.2}, {"metric_id": "it.ai_adoption", "brand_id": "papapasta", "period": "2026-06", "value": 38.7, "target": 40, "status": "amber", "vs_prior": 3.9}, {"metric_id": "it.ai_adoption", "brand_id": "papapasta", "period": "2026-07", "value": 40.3, "target": 40, "status": "green", "vs_prior": 1.6}, {"metric_id": "it.ai_adoption", "brand_id": "papapasta", "period": "2026-08", "value": 38.8, "target": 40, "status": "amber", "vs_prior": -1.5}, {"metric_id": "it.ai_adoption", "brand_id": "acdc", "period": "2026-03", "value": 28.5, "target": 40, "status": "red", "vs_prior": null}, {"metric_id": "it.ai_adoption", "brand_id": "acdc", "period": "2026-04", "value": 27.1, "target": 40, "status": "red", "vs_prior": -1.4}, {"metric_id": "it.ai_adoption", "brand_id": "acdc", "period": "2026-05", "value": 37.3, "target": 40, "status": "amber", "vs_prior": 10.2}, {"metric_id": "it.ai_adoption", "brand_id": "acdc", "period": "2026-06", "value": 34.9, "target": 40, "status": "red", "vs_prior": -2.4}, {"metric_id": "it.ai_adoption", "brand_id": "acdc", "period": "2026-07", "value": 37.2, "target": 40, "status": "amber", "vs_prior": 2.3}, {"metric_id": "it.ai_adoption", "brand_id": "acdc", "period": "2026-08", "value": 41.4, "target": 40, "status": "green", "vs_prior": 4.2}, {"metric_id": "it.mfa_coverage", "brand_id": "infinity", "period": "2026-03", "value": 64.1, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "it.mfa_coverage", "brand_id": "infinity", "period": "2026-04", "value": 64.0, "target": 100, "status": "red", "vs_prior": -0.1}, {"metric_id": "it.mfa_coverage", "brand_id": "infinity", "period": "2026-05", "value": 74.7, "target": 100, "status": "red", "vs_prior": 10.7}, {"metric_id": "it.mfa_coverage", "brand_id": "infinity", "period": "2026-06", "value": 77.0, "target": 100, "status": "red", "vs_prior": 2.3}, {"metric_id": "it.mfa_coverage", "brand_id": "infinity", "period": "2026-07", "value": 98.7, "target": 100, "status": "amber", "vs_prior": 21.7}, {"metric_id": "it.mfa_coverage", "brand_id": "infinity", "period": "2026-08", "value": 95.5, "target": 100, "status": "amber", "vs_prior": -3.2}, {"metric_id": "it.mfa_coverage", "brand_id": "tlf", "period": "2026-03", "value": 62.2, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "it.mfa_coverage", "brand_id": "tlf", "period": "2026-04", "value": 83.8, "target": 100, "status": "red", "vs_prior": 21.6}, {"metric_id": "it.mfa_coverage", "brand_id": "tlf", "period": "2026-05", "value": 77.0, "target": 100, "status": "red", "vs_prior": -6.8}, {"metric_id": "it.mfa_coverage", "brand_id": "tlf", "period": "2026-06", "value": 97.3, "target": 100, "status": "amber", "vs_prior": 20.3}, {"metric_id": "it.mfa_coverage", "brand_id": "tlf", "period": "2026-07", "value": 94.9, "target": 100, "status": "amber", "vs_prior": -2.4}, {"metric_id": "it.mfa_coverage", "brand_id": "tlf", "period": "2026-08", "value": 90.1, "target": 100, "status": "amber", "vs_prior": -4.8}, {"metric_id": "it.mfa_coverage", "brand_id": "infx", "period": "2026-03", "value": 65.4, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "it.mfa_coverage", "brand_id": "infx", "period": "2026-04", "value": 76.1, "target": 100, "status": "red", "vs_prior": 10.7}, {"metric_id": "it.mfa_coverage", "brand_id": "infx", "period": "2026-05", "value": 77.8, "target": 100, "status": "red", "vs_prior": 1.7}, {"metric_id": "it.mfa_coverage", "brand_id": "infx", "period": "2026-06", "value": 96.2, "target": 100, "status": "amber", "vs_prior": 18.4}, {"metric_id": "it.mfa_coverage", "brand_id": "infx", "period": "2026-07", "value": 96.4, "target": 100, "status": "amber", "vs_prior": 0.2}, {"metric_id": "it.mfa_coverage", "brand_id": "infx", "period": "2026-08", "value": 104.5, "target": 100, "status": "green", "vs_prior": 8.1}, {"metric_id": "it.mfa_coverage", "brand_id": "fluxflow", "period": "2026-03", "value": 77.3, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "it.mfa_coverage", "brand_id": "fluxflow", "period": "2026-04", "value": 75.3, "target": 100, "status": "red", "vs_prior": -2.0}, {"metric_id": "it.mfa_coverage", "brand_id": "fluxflow", "period": "2026-05", "value": 86.8, "target": 100, "status": "red", "vs_prior": 11.5}, {"metric_id": "it.mfa_coverage", "brand_id": "fluxflow", "period": "2026-06", "value": 84.0, "target": 100, "status": "red", "vs_prior": -2.8}, {"metric_id": "it.mfa_coverage", "brand_id": "fluxflow", "period": "2026-07", "value": 100.4, "target": 100, "status": "green", "vs_prior": 16.4}, {"metric_id": "it.mfa_coverage", "brand_id": "fluxflow", "period": "2026-08", "value": 104.9, "target": 100, "status": "green", "vs_prior": 4.5}, {"metric_id": "it.mfa_coverage", "brand_id": "divorced", "period": "2026-03", "value": 67.5, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "it.mfa_coverage", "brand_id": "divorced", "period": "2026-04", "value": 78.9, "target": 100, "status": "red", "vs_prior": 11.4}, {"metric_id": "it.mfa_coverage", "brand_id": "divorced", "period": "2026-05", "value": 83.9, "target": 100, "status": "red", "vs_prior": 5.0}, {"metric_id": "it.mfa_coverage", "brand_id": "divorced", "period": "2026-06", "value": 86.5, "target": 100, "status": "red", "vs_prior": 2.6}, {"metric_id": "it.mfa_coverage", "brand_id": "divorced", "period": "2026-07", "value": 92.8, "target": 100, "status": "amber", "vs_prior": 6.3}, {"metric_id": "it.mfa_coverage", "brand_id": "divorced", "period": "2026-08", "value": 91.4, "target": 100, "status": "amber", "vs_prior": -1.4}, {"metric_id": "it.mfa_coverage", "brand_id": "papapasta", "period": "2026-03", "value": 65.6, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "it.mfa_coverage", "brand_id": "papapasta", "period": "2026-04", "value": 69.8, "target": 100, "status": "red", "vs_prior": 4.2}, {"metric_id": "it.mfa_coverage", "brand_id": "papapasta", "period": "2026-05", "value": 74.0, "target": 100, "status": "red", "vs_prior": 4.2}, {"metric_id": "it.mfa_coverage", "brand_id": "papapasta", "period": "2026-06", "value": 84.7, "target": 100, "status": "red", "vs_prior": 10.7}, {"metric_id": "it.mfa_coverage", "brand_id": "papapasta", "period": "2026-07", "value": 84.3, "target": 100, "status": "red", "vs_prior": -0.4}, {"metric_id": "it.mfa_coverage", "brand_id": "papapasta", "period": "2026-08", "value": 97.9, "target": 100, "status": "amber", "vs_prior": 13.6}, {"metric_id": "it.mfa_coverage", "brand_id": "acdc", "period": "2026-03", "value": 67.6, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "it.mfa_coverage", "brand_id": "acdc", "period": "2026-04", "value": 72.5, "target": 100, "status": "red", "vs_prior": 4.9}, {"metric_id": "it.mfa_coverage", "brand_id": "acdc", "period": "2026-05", "value": 92.9, "target": 100, "status": "amber", "vs_prior": 20.4}, {"metric_id": "it.mfa_coverage", "brand_id": "acdc", "period": "2026-06", "value": 94.0, "target": 100, "status": "amber", "vs_prior": 1.1}, {"metric_id": "it.mfa_coverage", "brand_id": "acdc", "period": "2026-07", "value": 91.0, "target": 100, "status": "amber", "vs_prior": -3.0}, {"metric_id": "it.mfa_coverage", "brand_id": "acdc", "period": "2026-08", "value": 108.2, "target": 100, "status": "green", "vs_prior": 17.2}, {"metric_id": "it.tech_debt", "brand_id": "infinity", "period": "2026-03", "value": 5.6, "target": 7, "status": "red", "vs_prior": null}, {"metric_id": "it.tech_debt", "brand_id": "infinity", "period": "2026-04", "value": 5.6, "target": 7, "status": "red", "vs_prior": 0.0}, {"metric_id": "it.tech_debt", "brand_id": "infinity", "period": "2026-05", "value": 6.5, "target": 7, "status": "amber", "vs_prior": 0.9}, {"metric_id": "it.tech_debt", "brand_id": "infinity", "period": "2026-06", "value": 6.7, "target": 7, "status": "amber", "vs_prior": 0.2}, {"metric_id": "it.tech_debt", "brand_id": "infinity", "period": "2026-07", "value": 6.4, "target": 7, "status": "amber", "vs_prior": -0.3}, {"metric_id": "it.tech_debt", "brand_id": "infinity", "period": "2026-08", "value": 6.9, "target": 7, "status": "amber", "vs_prior": 0.5}, {"metric_id": "it.tech_debt", "brand_id": "tlf", "period": "2026-03", "value": 4.3, "target": 7, "status": "red", "vs_prior": null}, {"metric_id": "it.tech_debt", "brand_id": "tlf", "period": "2026-04", "value": 5.5, "target": 7, "status": "red", "vs_prior": 1.2}, {"metric_id": "it.tech_debt", "brand_id": "tlf", "period": "2026-05", "value": 5.0, "target": 7, "status": "red", "vs_prior": -0.5}, {"metric_id": "it.tech_debt", "brand_id": "tlf", "period": "2026-06", "value": 5.7, "target": 7, "status": "red", "vs_prior": 0.7}, {"metric_id": "it.tech_debt", "brand_id": "tlf", "period": "2026-07", "value": 6.4, "target": 7, "status": "amber", "vs_prior": 0.7}, {"metric_id": "it.tech_debt", "brand_id": "tlf", "period": "2026-08", "value": 6.8, "target": 7, "status": "amber", "vs_prior": 0.4}, {"metric_id": "it.tech_debt", "brand_id": "infx", "period": "2026-03", "value": 4.9, "target": 7, "status": "red", "vs_prior": null}, {"metric_id": "it.tech_debt", "brand_id": "infx", "period": "2026-04", "value": 5.3, "target": 7, "status": "red", "vs_prior": 0.4}, {"metric_id": "it.tech_debt", "brand_id": "infx", "period": "2026-05", "value": 5.4, "target": 7, "status": "red", "vs_prior": 0.1}, {"metric_id": "it.tech_debt", "brand_id": "infx", "period": "2026-06", "value": 5.8, "target": 7, "status": "red", "vs_prior": 0.4}, {"metric_id": "it.tech_debt", "brand_id": "infx", "period": "2026-07", "value": 5.9, "target": 7, "status": "red", "vs_prior": 0.1}, {"metric_id": "it.tech_debt", "brand_id": "infx", "period": "2026-08", "value": 6.3, "target": 7, "status": "amber", "vs_prior": 0.4}, {"metric_id": "it.tech_debt", "brand_id": "fluxflow", "period": "2026-03", "value": 4.6, "target": 7, "status": "red", "vs_prior": null}, {"metric_id": "it.tech_debt", "brand_id": "fluxflow", "period": "2026-04", "value": 5.4, "target": 7, "status": "red", "vs_prior": 0.8}, {"metric_id": "it.tech_debt", "brand_id": "fluxflow", "period": "2026-05", "value": 6.2, "target": 7, "status": "red", "vs_prior": 0.8}, {"metric_id": "it.tech_debt", "brand_id": "fluxflow", "period": "2026-06", "value": 6.8, "target": 7, "status": "amber", "vs_prior": 0.6}, {"metric_id": "it.tech_debt", "brand_id": "fluxflow", "period": "2026-07", "value": 6.5, "target": 7, "status": "amber", "vs_prior": -0.3}, {"metric_id": "it.tech_debt", "brand_id": "fluxflow", "period": "2026-08", "value": 7.1, "target": 7, "status": "green", "vs_prior": 0.6}, {"metric_id": "it.tech_debt", "brand_id": "divorced", "period": "2026-03", "value": 4.6, "target": 7, "status": "red", "vs_prior": null}, {"metric_id": "it.tech_debt", "brand_id": "divorced", "period": "2026-04", "value": 5.7, "target": 7, "status": "red", "vs_prior": 1.1}, {"metric_id": "it.tech_debt", "brand_id": "divorced", "period": "2026-05", "value": 5.7, "target": 7, "status": "red", "vs_prior": 0.0}, {"metric_id": "it.tech_debt", "brand_id": "divorced", "period": "2026-06", "value": 6.1, "target": 7, "status": "red", "vs_prior": 0.4}, {"metric_id": "it.tech_debt", "brand_id": "divorced", "period": "2026-07", "value": 5.9, "target": 7, "status": "red", "vs_prior": -0.2}, {"metric_id": "it.tech_debt", "brand_id": "divorced", "period": "2026-08", "value": 7.7, "target": 7, "status": "green", "vs_prior": 1.8}, {"metric_id": "it.tech_debt", "brand_id": "papapasta", "period": "2026-03", "value": 4.1, "target": 7, "status": "red", "vs_prior": null}, {"metric_id": "it.tech_debt", "brand_id": "papapasta", "period": "2026-04", "value": 4.9, "target": 7, "status": "red", "vs_prior": 0.8}, {"metric_id": "it.tech_debt", "brand_id": "papapasta", "period": "2026-05", "value": 6.4, "target": 7, "status": "amber", "vs_prior": 1.5}, {"metric_id": "it.tech_debt", "brand_id": "papapasta", "period": "2026-06", "value": 6.4, "target": 7, "status": "amber", "vs_prior": 0.0}, {"metric_id": "it.tech_debt", "brand_id": "papapasta", "period": "2026-07", "value": 7.0, "target": 7, "status": "green", "vs_prior": 0.6}, {"metric_id": "it.tech_debt", "brand_id": "papapasta", "period": "2026-08", "value": 7.0, "target": 7, "status": "green", "vs_prior": 0.0}, {"metric_id": "it.tech_debt", "brand_id": "acdc", "period": "2026-03", "value": 5.0, "target": 7, "status": "red", "vs_prior": null}, {"metric_id": "it.tech_debt", "brand_id": "acdc", "period": "2026-04", "value": 4.8, "target": 7, "status": "red", "vs_prior": -0.2}, {"metric_id": "it.tech_debt", "brand_id": "acdc", "period": "2026-05", "value": 5.2, "target": 7, "status": "red", "vs_prior": 0.4}, {"metric_id": "it.tech_debt", "brand_id": "acdc", "period": "2026-06", "value": 5.8, "target": 7, "status": "red", "vs_prior": 0.6}, {"metric_id": "it.tech_debt", "brand_id": "acdc", "period": "2026-07", "value": 7.3, "target": 7, "status": "green", "vs_prior": 1.5}, {"metric_id": "it.tech_debt", "brand_id": "acdc", "period": "2026-08", "value": 6.6, "target": 7, "status": "amber", "vs_prior": -0.7}, {"metric_id": "mkt.marketing_spend", "brand_id": "infinity", "period": "2026-03", "value": 314000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.marketing_spend", "brand_id": "infinity", "period": "2026-04", "value": 623000, "target": null, "status": "no_data", "vs_prior": 309000}, {"metric_id": "mkt.marketing_spend", "brand_id": "infinity", "period": "2026-05", "value": 264000, "target": null, "status": "no_data", "vs_prior": -359000}, {"metric_id": "mkt.marketing_spend", "brand_id": "infinity", "period": "2026-06", "value": 784000, "target": null, "status": "no_data", "vs_prior": 520000}, {"metric_id": "mkt.marketing_spend", "brand_id": "infinity", "period": "2026-07", "value": 618000, "target": null, "status": "no_data", "vs_prior": -166000}, {"metric_id": "mkt.marketing_spend", "brand_id": "infinity", "period": "2026-08", "value": 751000, "target": null, "status": "no_data", "vs_prior": 133000}, {"metric_id": "mkt.marketing_spend", "brand_id": "tlf", "period": "2026-03", "value": 177000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.marketing_spend", "brand_id": "tlf", "period": "2026-04", "value": 360000, "target": null, "status": "no_data", "vs_prior": 183000}, {"metric_id": "mkt.marketing_spend", "brand_id": "tlf", "period": "2026-05", "value": 530000, "target": null, "status": "no_data", "vs_prior": 170000}, {"metric_id": "mkt.marketing_spend", "brand_id": "tlf", "period": "2026-06", "value": 405000, "target": null, "status": "no_data", "vs_prior": -125000}, {"metric_id": "mkt.marketing_spend", "brand_id": "tlf", "period": "2026-07", "value": 838000, "target": null, "status": "no_data", "vs_prior": 433000}, {"metric_id": "mkt.marketing_spend", "brand_id": "tlf", "period": "2026-08", "value": 350000, "target": null, "status": "no_data", "vs_prior": -488000}, {"metric_id": "mkt.marketing_spend", "brand_id": "infx", "period": "2026-03", "value": 804000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.marketing_spend", "brand_id": "infx", "period": "2026-04", "value": 116000, "target": null, "status": "no_data", "vs_prior": -688000}, {"metric_id": "mkt.marketing_spend", "brand_id": "infx", "period": "2026-05", "value": 471000, "target": null, "status": "no_data", "vs_prior": 355000}, {"metric_id": "mkt.marketing_spend", "brand_id": "infx", "period": "2026-06", "value": 819000, "target": null, "status": "no_data", "vs_prior": 348000}, {"metric_id": "mkt.marketing_spend", "brand_id": "infx", "period": "2026-07", "value": 395000, "target": null, "status": "no_data", "vs_prior": -424000}, {"metric_id": "mkt.marketing_spend", "brand_id": "infx", "period": "2026-08", "value": 726000, "target": null, "status": "no_data", "vs_prior": 331000}, {"metric_id": "mkt.marketing_spend", "brand_id": "fluxflow", "period": "2026-03", "value": 320000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.marketing_spend", "brand_id": "fluxflow", "period": "2026-04", "value": 554000, "target": null, "status": "no_data", "vs_prior": 234000}, {"metric_id": "mkt.marketing_spend", "brand_id": "fluxflow", "period": "2026-05", "value": 513000, "target": null, "status": "no_data", "vs_prior": -41000}, {"metric_id": "mkt.marketing_spend", "brand_id": "fluxflow", "period": "2026-06", "value": 499000, "target": null, "status": "no_data", "vs_prior": -14000}, {"metric_id": "mkt.marketing_spend", "brand_id": "fluxflow", "period": "2026-07", "value": 483000, "target": null, "status": "no_data", "vs_prior": -16000}, {"metric_id": "mkt.marketing_spend", "brand_id": "fluxflow", "period": "2026-08", "value": 652000, "target": null, "status": "no_data", "vs_prior": 169000}, {"metric_id": "mkt.marketing_spend", "brand_id": "divorced", "period": "2026-03", "value": 262000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.marketing_spend", "brand_id": "divorced", "period": "2026-04", "value": 142000, "target": null, "status": "no_data", "vs_prior": -120000}, {"metric_id": "mkt.marketing_spend", "brand_id": "divorced", "period": "2026-05", "value": 198000, "target": null, "status": "no_data", "vs_prior": 56000}, {"metric_id": "mkt.marketing_spend", "brand_id": "divorced", "period": "2026-06", "value": 449000, "target": null, "status": "no_data", "vs_prior": 251000}, {"metric_id": "mkt.marketing_spend", "brand_id": "divorced", "period": "2026-07", "value": 848000, "target": null, "status": "no_data", "vs_prior": 399000}, {"metric_id": "mkt.marketing_spend", "brand_id": "divorced", "period": "2026-08", "value": 659000, "target": null, "status": "no_data", "vs_prior": -189000}, {"metric_id": "mkt.marketing_spend", "brand_id": "papapasta", "period": "2026-03", "value": 813000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.marketing_spend", "brand_id": "papapasta", "period": "2026-04", "value": 723000, "target": null, "status": "no_data", "vs_prior": -90000}, {"metric_id": "mkt.marketing_spend", "brand_id": "papapasta", "period": "2026-05", "value": 718000, "target": null, "status": "no_data", "vs_prior": -5000}, {"metric_id": "mkt.marketing_spend", "brand_id": "papapasta", "period": "2026-06", "value": 84000, "target": null, "status": "no_data", "vs_prior": -634000}, {"metric_id": "mkt.marketing_spend", "brand_id": "papapasta", "period": "2026-07", "value": 417000, "target": null, "status": "no_data", "vs_prior": 333000}, {"metric_id": "mkt.marketing_spend", "brand_id": "papapasta", "period": "2026-08", "value": 792000, "target": null, "status": "no_data", "vs_prior": 375000}, {"metric_id": "mkt.marketing_spend", "brand_id": "acdc", "period": "2026-03", "value": 279000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.marketing_spend", "brand_id": "acdc", "period": "2026-04", "value": 639000, "target": null, "status": "no_data", "vs_prior": 360000}, {"metric_id": "mkt.marketing_spend", "brand_id": "acdc", "period": "2026-05", "value": 642000, "target": null, "status": "no_data", "vs_prior": 3000}, {"metric_id": "mkt.marketing_spend", "brand_id": "acdc", "period": "2026-06", "value": 391000, "target": null, "status": "no_data", "vs_prior": -251000}, {"metric_id": "mkt.marketing_spend", "brand_id": "acdc", "period": "2026-07", "value": 676000, "target": null, "status": "no_data", "vs_prior": 285000}, {"metric_id": "mkt.marketing_spend", "brand_id": "acdc", "period": "2026-08", "value": 746000, "target": null, "status": "no_data", "vs_prior": 70000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "infinity", "period": "2026-03", "value": 265000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.cost_per_lead", "brand_id": "infinity", "period": "2026-04", "value": 735000, "target": null, "status": "no_data", "vs_prior": 470000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "infinity", "period": "2026-05", "value": 895000, "target": null, "status": "no_data", "vs_prior": 160000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "infinity", "period": "2026-06", "value": 547000, "target": null, "status": "no_data", "vs_prior": -348000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "infinity", "period": "2026-07", "value": 669000, "target": null, "status": "no_data", "vs_prior": 122000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "infinity", "period": "2026-08", "value": 184000, "target": null, "status": "no_data", "vs_prior": -485000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "tlf", "period": "2026-03", "value": 183000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.cost_per_lead", "brand_id": "tlf", "period": "2026-04", "value": 520000, "target": null, "status": "no_data", "vs_prior": 337000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "tlf", "period": "2026-05", "value": 175000, "target": null, "status": "no_data", "vs_prior": -345000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "tlf", "period": "2026-06", "value": 722000, "target": null, "status": "no_data", "vs_prior": 547000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "tlf", "period": "2026-07", "value": 430000, "target": null, "status": "no_data", "vs_prior": -292000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "tlf", "period": "2026-08", "value": 389000, "target": null, "status": "no_data", "vs_prior": -41000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "infx", "period": "2026-03", "value": 792000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.cost_per_lead", "brand_id": "infx", "period": "2026-04", "value": 889000, "target": null, "status": "no_data", "vs_prior": 97000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "infx", "period": "2026-05", "value": 695000, "target": null, "status": "no_data", "vs_prior": -194000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "infx", "period": "2026-06", "value": 848000, "target": null, "status": "no_data", "vs_prior": 153000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "infx", "period": "2026-07", "value": 739000, "target": null, "status": "no_data", "vs_prior": -109000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "infx", "period": "2026-08", "value": 449000, "target": null, "status": "no_data", "vs_prior": -290000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "fluxflow", "period": "2026-03", "value": 118000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.cost_per_lead", "brand_id": "fluxflow", "period": "2026-04", "value": 221000, "target": null, "status": "no_data", "vs_prior": 103000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "fluxflow", "period": "2026-05", "value": 741000, "target": null, "status": "no_data", "vs_prior": 520000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "fluxflow", "period": "2026-06", "value": 562000, "target": null, "status": "no_data", "vs_prior": -179000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "fluxflow", "period": "2026-07", "value": 118000, "target": null, "status": "no_data", "vs_prior": -444000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "fluxflow", "period": "2026-08", "value": 90000, "target": null, "status": "no_data", "vs_prior": -28000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "divorced", "period": "2026-03", "value": 439000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.cost_per_lead", "brand_id": "divorced", "period": "2026-04", "value": 582000, "target": null, "status": "no_data", "vs_prior": 143000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "divorced", "period": "2026-05", "value": 895000, "target": null, "status": "no_data", "vs_prior": 313000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "divorced", "period": "2026-06", "value": 453000, "target": null, "status": "no_data", "vs_prior": -442000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "divorced", "period": "2026-07", "value": 126000, "target": null, "status": "no_data", "vs_prior": -327000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "divorced", "period": "2026-08", "value": 852000, "target": null, "status": "no_data", "vs_prior": 726000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "papapasta", "period": "2026-03", "value": 867000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.cost_per_lead", "brand_id": "papapasta", "period": "2026-04", "value": 507000, "target": null, "status": "no_data", "vs_prior": -360000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "papapasta", "period": "2026-05", "value": 282000, "target": null, "status": "no_data", "vs_prior": -225000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "papapasta", "period": "2026-06", "value": 258000, "target": null, "status": "no_data", "vs_prior": -24000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "papapasta", "period": "2026-07", "value": 476000, "target": null, "status": "no_data", "vs_prior": 218000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "papapasta", "period": "2026-08", "value": 433000, "target": null, "status": "no_data", "vs_prior": -43000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "acdc", "period": "2026-03", "value": 159000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.cost_per_lead", "brand_id": "acdc", "period": "2026-04", "value": 234000, "target": null, "status": "no_data", "vs_prior": 75000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "acdc", "period": "2026-05", "value": 629000, "target": null, "status": "no_data", "vs_prior": 395000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "acdc", "period": "2026-06", "value": 105000, "target": null, "status": "no_data", "vs_prior": -524000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "acdc", "period": "2026-07", "value": 219000, "target": null, "status": "no_data", "vs_prior": 114000}, {"metric_id": "mkt.cost_per_lead", "brand_id": "acdc", "period": "2026-08", "value": 898000, "target": null, "status": "no_data", "vs_prior": 679000}, {"metric_id": "mkt.marketing_roi", "brand_id": "infinity", "period": "2026-03", "value": 1.8, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "mkt.marketing_roi", "brand_id": "infinity", "period": "2026-04", "value": 2.5, "target": 3.0, "status": "red", "vs_prior": 0.7}, {"metric_id": "mkt.marketing_roi", "brand_id": "infinity", "period": "2026-05", "value": 2.6, "target": 3.0, "status": "red", "vs_prior": 0.1}, {"metric_id": "mkt.marketing_roi", "brand_id": "infinity", "period": "2026-06", "value": 2.9, "target": 3.0, "status": "amber", "vs_prior": 0.3}, {"metric_id": "mkt.marketing_roi", "brand_id": "infinity", "period": "2026-07", "value": 2.8, "target": 3.0, "status": "amber", "vs_prior": -0.1}, {"metric_id": "mkt.marketing_roi", "brand_id": "infinity", "period": "2026-08", "value": 3.1, "target": 3.0, "status": "green", "vs_prior": 0.3}, {"metric_id": "mkt.marketing_roi", "brand_id": "tlf", "period": "2026-03", "value": 2.2, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "mkt.marketing_roi", "brand_id": "tlf", "period": "2026-04", "value": 1.9, "target": 3.0, "status": "red", "vs_prior": -0.3}, {"metric_id": "mkt.marketing_roi", "brand_id": "tlf", "period": "2026-05", "value": 2.2, "target": 3.0, "status": "red", "vs_prior": 0.3}, {"metric_id": "mkt.marketing_roi", "brand_id": "tlf", "period": "2026-06", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": 0.5}, {"metric_id": "mkt.marketing_roi", "brand_id": "tlf", "period": "2026-07", "value": 3.1, "target": 3.0, "status": "green", "vs_prior": 0.4}, {"metric_id": "mkt.marketing_roi", "brand_id": "tlf", "period": "2026-08", "value": 3.0, "target": 3.0, "status": "green", "vs_prior": -0.1}, {"metric_id": "mkt.marketing_roi", "brand_id": "infx", "period": "2026-03", "value": 2.0, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "mkt.marketing_roi", "brand_id": "infx", "period": "2026-04", "value": 2.3, "target": 3.0, "status": "red", "vs_prior": 0.3}, {"metric_id": "mkt.marketing_roi", "brand_id": "infx", "period": "2026-05", "value": 2.3, "target": 3.0, "status": "red", "vs_prior": 0.0}, {"metric_id": "mkt.marketing_roi", "brand_id": "infx", "period": "2026-06", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": 0.4}, {"metric_id": "mkt.marketing_roi", "brand_id": "infx", "period": "2026-07", "value": 2.8, "target": 3.0, "status": "amber", "vs_prior": 0.1}, {"metric_id": "mkt.marketing_roi", "brand_id": "infx", "period": "2026-08", "value": 3.1, "target": 3.0, "status": "green", "vs_prior": 0.3}, {"metric_id": "mkt.marketing_roi", "brand_id": "fluxflow", "period": "2026-03", "value": 1.8, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "mkt.marketing_roi", "brand_id": "fluxflow", "period": "2026-04", "value": 2.2, "target": 3.0, "status": "red", "vs_prior": 0.4}, {"metric_id": "mkt.marketing_roi", "brand_id": "fluxflow", "period": "2026-05", "value": 2.8, "target": 3.0, "status": "amber", "vs_prior": 0.6}, {"metric_id": "mkt.marketing_roi", "brand_id": "fluxflow", "period": "2026-06", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": -0.1}, {"metric_id": "mkt.marketing_roi", "brand_id": "fluxflow", "period": "2026-07", "value": 3.0, "target": 3.0, "status": "green", "vs_prior": 0.3}, {"metric_id": "mkt.marketing_roi", "brand_id": "fluxflow", "period": "2026-08", "value": 3.1, "target": 3.0, "status": "green", "vs_prior": 0.1}, {"metric_id": "mkt.marketing_roi", "brand_id": "divorced", "period": "2026-03", "value": 2.2, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "mkt.marketing_roi", "brand_id": "divorced", "period": "2026-04", "value": 2.1, "target": 3.0, "status": "red", "vs_prior": -0.1}, {"metric_id": "mkt.marketing_roi", "brand_id": "divorced", "period": "2026-05", "value": 2.8, "target": 3.0, "status": "amber", "vs_prior": 0.7}, {"metric_id": "mkt.marketing_roi", "brand_id": "divorced", "period": "2026-06", "value": 2.8, "target": 3.0, "status": "amber", "vs_prior": 0.0}, {"metric_id": "mkt.marketing_roi", "brand_id": "divorced", "period": "2026-07", "value": 2.6, "target": 3.0, "status": "red", "vs_prior": -0.2}, {"metric_id": "mkt.marketing_roi", "brand_id": "divorced", "period": "2026-08", "value": 3.3, "target": 3.0, "status": "green", "vs_prior": 0.7}, {"metric_id": "mkt.marketing_roi", "brand_id": "papapasta", "period": "2026-03", "value": 2.3, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "mkt.marketing_roi", "brand_id": "papapasta", "period": "2026-04", "value": 2.0, "target": 3.0, "status": "red", "vs_prior": -0.3}, {"metric_id": "mkt.marketing_roi", "brand_id": "papapasta", "period": "2026-05", "value": 2.5, "target": 3.0, "status": "red", "vs_prior": 0.5}, {"metric_id": "mkt.marketing_roi", "brand_id": "papapasta", "period": "2026-06", "value": 3.0, "target": 3.0, "status": "green", "vs_prior": 0.5}, {"metric_id": "mkt.marketing_roi", "brand_id": "papapasta", "period": "2026-07", "value": 3.0, "target": 3.0, "status": "green", "vs_prior": 0.0}, {"metric_id": "mkt.marketing_roi", "brand_id": "papapasta", "period": "2026-08", "value": 3.3, "target": 3.0, "status": "green", "vs_prior": 0.3}, {"metric_id": "mkt.marketing_roi", "brand_id": "acdc", "period": "2026-03", "value": 1.8, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "mkt.marketing_roi", "brand_id": "acdc", "period": "2026-04", "value": 2.2, "target": 3.0, "status": "red", "vs_prior": 0.4}, {"metric_id": "mkt.marketing_roi", "brand_id": "acdc", "period": "2026-05", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": 0.5}, {"metric_id": "mkt.marketing_roi", "brand_id": "acdc", "period": "2026-06", "value": 2.9, "target": 3.0, "status": "amber", "vs_prior": 0.2}, {"metric_id": "mkt.marketing_roi", "brand_id": "acdc", "period": "2026-07", "value": 2.5, "target": 3.0, "status": "red", "vs_prior": -0.4}, {"metric_id": "mkt.marketing_roi", "brand_id": "acdc", "period": "2026-08", "value": 3.3, "target": 3.0, "status": "green", "vs_prior": 0.8}, {"metric_id": "mkt.brand_reach", "brand_id": "infinity", "period": "2026-03", "value": 16135, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.brand_reach", "brand_id": "infinity", "period": "2026-04", "value": 2857, "target": null, "status": "no_data", "vs_prior": -13278}, {"metric_id": "mkt.brand_reach", "brand_id": "infinity", "period": "2026-05", "value": 15088, "target": null, "status": "no_data", "vs_prior": 12231}, {"metric_id": "mkt.brand_reach", "brand_id": "infinity", "period": "2026-06", "value": 6933, "target": null, "status": "no_data", "vs_prior": -8155}, {"metric_id": "mkt.brand_reach", "brand_id": "infinity", "period": "2026-07", "value": 16875, "target": null, "status": "no_data", "vs_prior": 9942}, {"metric_id": "mkt.brand_reach", "brand_id": "infinity", "period": "2026-08", "value": 12687, "target": null, "status": "no_data", "vs_prior": -4188}, {"metric_id": "mkt.brand_reach", "brand_id": "tlf", "period": "2026-03", "value": 17922, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.brand_reach", "brand_id": "tlf", "period": "2026-04", "value": 16345, "target": null, "status": "no_data", "vs_prior": -1577}, {"metric_id": "mkt.brand_reach", "brand_id": "tlf", "period": "2026-05", "value": 18009, "target": null, "status": "no_data", "vs_prior": 1664}, {"metric_id": "mkt.brand_reach", "brand_id": "tlf", "period": "2026-06", "value": 5455, "target": null, "status": "no_data", "vs_prior": -12554}, {"metric_id": "mkt.brand_reach", "brand_id": "tlf", "period": "2026-07", "value": 1152, "target": null, "status": "no_data", "vs_prior": -4303}, {"metric_id": "mkt.brand_reach", "brand_id": "tlf", "period": "2026-08", "value": 17284, "target": null, "status": "no_data", "vs_prior": 16132}, {"metric_id": "mkt.brand_reach", "brand_id": "infx", "period": "2026-03", "value": 13902, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.brand_reach", "brand_id": "infx", "period": "2026-04", "value": 2352, "target": null, "status": "no_data", "vs_prior": -11550}, {"metric_id": "mkt.brand_reach", "brand_id": "infx", "period": "2026-05", "value": 13083, "target": null, "status": "no_data", "vs_prior": 10731}, {"metric_id": "mkt.brand_reach", "brand_id": "infx", "period": "2026-06", "value": 15867, "target": null, "status": "no_data", "vs_prior": 2784}, {"metric_id": "mkt.brand_reach", "brand_id": "infx", "period": "2026-07", "value": 3695, "target": null, "status": "no_data", "vs_prior": -12172}, {"metric_id": "mkt.brand_reach", "brand_id": "infx", "period": "2026-08", "value": 2971, "target": null, "status": "no_data", "vs_prior": -724}, {"metric_id": "mkt.brand_reach", "brand_id": "fluxflow", "period": "2026-03", "value": 3839, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.brand_reach", "brand_id": "fluxflow", "period": "2026-04", "value": 3163, "target": null, "status": "no_data", "vs_prior": -676}, {"metric_id": "mkt.brand_reach", "brand_id": "fluxflow", "period": "2026-05", "value": 17941, "target": null, "status": "no_data", "vs_prior": 14778}, {"metric_id": "mkt.brand_reach", "brand_id": "fluxflow", "period": "2026-06", "value": 7744, "target": null, "status": "no_data", "vs_prior": -10197}, {"metric_id": "mkt.brand_reach", "brand_id": "fluxflow", "period": "2026-07", "value": 15557, "target": null, "status": "no_data", "vs_prior": 7813}, {"metric_id": "mkt.brand_reach", "brand_id": "fluxflow", "period": "2026-08", "value": 1422, "target": null, "status": "no_data", "vs_prior": -14135}, {"metric_id": "mkt.brand_reach", "brand_id": "divorced", "period": "2026-03", "value": 3935, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.brand_reach", "brand_id": "divorced", "period": "2026-04", "value": 16392, "target": null, "status": "no_data", "vs_prior": 12457}, {"metric_id": "mkt.brand_reach", "brand_id": "divorced", "period": "2026-05", "value": 12212, "target": null, "status": "no_data", "vs_prior": -4180}, {"metric_id": "mkt.brand_reach", "brand_id": "divorced", "period": "2026-06", "value": 11746, "target": null, "status": "no_data", "vs_prior": -466}, {"metric_id": "mkt.brand_reach", "brand_id": "divorced", "period": "2026-07", "value": 1835, "target": null, "status": "no_data", "vs_prior": -9911}, {"metric_id": "mkt.brand_reach", "brand_id": "divorced", "period": "2026-08", "value": 7834, "target": null, "status": "no_data", "vs_prior": 5999}, {"metric_id": "mkt.brand_reach", "brand_id": "papapasta", "period": "2026-03", "value": 14736, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.brand_reach", "brand_id": "papapasta", "period": "2026-04", "value": 19573, "target": null, "status": "no_data", "vs_prior": 4837}, {"metric_id": "mkt.brand_reach", "brand_id": "papapasta", "period": "2026-05", "value": 8261, "target": null, "status": "no_data", "vs_prior": -11312}, {"metric_id": "mkt.brand_reach", "brand_id": "papapasta", "period": "2026-06", "value": 13144, "target": null, "status": "no_data", "vs_prior": 4883}, {"metric_id": "mkt.brand_reach", "brand_id": "papapasta", "period": "2026-07", "value": 9451, "target": null, "status": "no_data", "vs_prior": -3693}, {"metric_id": "mkt.brand_reach", "brand_id": "papapasta", "period": "2026-08", "value": 1648, "target": null, "status": "no_data", "vs_prior": -7803}, {"metric_id": "mkt.brand_reach", "brand_id": "acdc", "period": "2026-03", "value": 6035, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.brand_reach", "brand_id": "acdc", "period": "2026-04", "value": 6259, "target": null, "status": "no_data", "vs_prior": 224}, {"metric_id": "mkt.brand_reach", "brand_id": "acdc", "period": "2026-05", "value": 16944, "target": null, "status": "no_data", "vs_prior": 10685}, {"metric_id": "mkt.brand_reach", "brand_id": "acdc", "period": "2026-06", "value": 11284, "target": null, "status": "no_data", "vs_prior": -5660}, {"metric_id": "mkt.brand_reach", "brand_id": "acdc", "period": "2026-07", "value": 1048, "target": null, "status": "no_data", "vs_prior": -10236}, {"metric_id": "mkt.brand_reach", "brand_id": "acdc", "period": "2026-08", "value": 17153, "target": null, "status": "no_data", "vs_prior": 16105}, {"metric_id": "mkt.help_first_content", "brand_id": "infinity", "period": "2026-03", "value": 3, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "mkt.help_first_content", "brand_id": "infinity", "period": "2026-04", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "infinity", "period": "2026-05", "value": 4, "target": 4, "status": "green", "vs_prior": 1}, {"metric_id": "mkt.help_first_content", "brand_id": "infinity", "period": "2026-06", "value": 3, "target": 4, "status": "red", "vs_prior": -1}, {"metric_id": "mkt.help_first_content", "brand_id": "infinity", "period": "2026-07", "value": 4, "target": 4, "status": "green", "vs_prior": 1}, {"metric_id": "mkt.help_first_content", "brand_id": "infinity", "period": "2026-08", "value": 4, "target": 4, "status": "green", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "tlf", "period": "2026-03", "value": 2, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "mkt.help_first_content", "brand_id": "tlf", "period": "2026-04", "value": 3, "target": 4, "status": "red", "vs_prior": 1}, {"metric_id": "mkt.help_first_content", "brand_id": "tlf", "period": "2026-05", "value": 4, "target": 4, "status": "green", "vs_prior": 1}, {"metric_id": "mkt.help_first_content", "brand_id": "tlf", "period": "2026-06", "value": 4, "target": 4, "status": "green", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "tlf", "period": "2026-07", "value": 4, "target": 4, "status": "green", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "tlf", "period": "2026-08", "value": 4, "target": 4, "status": "green", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "infx", "period": "2026-03", "value": 3, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "mkt.help_first_content", "brand_id": "infx", "period": "2026-04", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "infx", "period": "2026-05", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "infx", "period": "2026-06", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "infx", "period": "2026-07", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "infx", "period": "2026-08", "value": 4, "target": 4, "status": "green", "vs_prior": 1}, {"metric_id": "mkt.help_first_content", "brand_id": "fluxflow", "period": "2026-03", "value": 3, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "mkt.help_first_content", "brand_id": "fluxflow", "period": "2026-04", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "fluxflow", "period": "2026-05", "value": 4, "target": 4, "status": "green", "vs_prior": 1}, {"metric_id": "mkt.help_first_content", "brand_id": "fluxflow", "period": "2026-06", "value": 3, "target": 4, "status": "red", "vs_prior": -1}, {"metric_id": "mkt.help_first_content", "brand_id": "fluxflow", "period": "2026-07", "value": 4, "target": 4, "status": "green", "vs_prior": 1}, {"metric_id": "mkt.help_first_content", "brand_id": "fluxflow", "period": "2026-08", "value": 4, "target": 4, "status": "green", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "divorced", "period": "2026-03", "value": 3, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "mkt.help_first_content", "brand_id": "divorced", "period": "2026-04", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "divorced", "period": "2026-05", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "divorced", "period": "2026-06", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "divorced", "period": "2026-07", "value": 4, "target": 4, "status": "green", "vs_prior": 1}, {"metric_id": "mkt.help_first_content", "brand_id": "divorced", "period": "2026-08", "value": 4, "target": 4, "status": "green", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "papapasta", "period": "2026-03", "value": 2, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "mkt.help_first_content", "brand_id": "papapasta", "period": "2026-04", "value": 3, "target": 4, "status": "red", "vs_prior": 1}, {"metric_id": "mkt.help_first_content", "brand_id": "papapasta", "period": "2026-05", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "papapasta", "period": "2026-06", "value": 4, "target": 4, "status": "green", "vs_prior": 1}, {"metric_id": "mkt.help_first_content", "brand_id": "papapasta", "period": "2026-07", "value": 4, "target": 4, "status": "green", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "papapasta", "period": "2026-08", "value": 4, "target": 4, "status": "green", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "acdc", "period": "2026-03", "value": 3, "target": 4, "status": "red", "vs_prior": null}, {"metric_id": "mkt.help_first_content", "brand_id": "acdc", "period": "2026-04", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "acdc", "period": "2026-05", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "acdc", "period": "2026-06", "value": 3, "target": 4, "status": "red", "vs_prior": 0}, {"metric_id": "mkt.help_first_content", "brand_id": "acdc", "period": "2026-07", "value": 4, "target": 4, "status": "green", "vs_prior": 1}, {"metric_id": "mkt.help_first_content", "brand_id": "acdc", "period": "2026-08", "value": 4, "target": 4, "status": "green", "vs_prior": 0}, {"metric_id": "mkt.community_size", "brand_id": "infinity", "period": "2026-03", "value": 310, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.community_size", "brand_id": "infinity", "period": "2026-04", "value": 28, "target": null, "status": "no_data", "vs_prior": -282}, {"metric_id": "mkt.community_size", "brand_id": "infinity", "period": "2026-05", "value": 72, "target": null, "status": "no_data", "vs_prior": 44}, {"metric_id": "mkt.community_size", "brand_id": "infinity", "period": "2026-06", "value": 108, "target": null, "status": "no_data", "vs_prior": 36}, {"metric_id": "mkt.community_size", "brand_id": "infinity", "period": "2026-07", "value": 281, "target": null, "status": "no_data", "vs_prior": 173}, {"metric_id": "mkt.community_size", "brand_id": "infinity", "period": "2026-08", "value": 175, "target": null, "status": "no_data", "vs_prior": -106}, {"metric_id": "mkt.community_size", "brand_id": "tlf", "period": "2026-03", "value": 207, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.community_size", "brand_id": "tlf", "period": "2026-04", "value": 85, "target": null, "status": "no_data", "vs_prior": -122}, {"metric_id": "mkt.community_size", "brand_id": "tlf", "period": "2026-05", "value": 491, "target": null, "status": "no_data", "vs_prior": 406}, {"metric_id": "mkt.community_size", "brand_id": "tlf", "period": "2026-06", "value": 95, "target": null, "status": "no_data", "vs_prior": -396}, {"metric_id": "mkt.community_size", "brand_id": "tlf", "period": "2026-07", "value": 415, "target": null, "status": "no_data", "vs_prior": 320}, {"metric_id": "mkt.community_size", "brand_id": "tlf", "period": "2026-08", "value": 369, "target": null, "status": "no_data", "vs_prior": -46}, {"metric_id": "mkt.community_size", "brand_id": "infx", "period": "2026-03", "value": 212, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.community_size", "brand_id": "infx", "period": "2026-04", "value": 155, "target": null, "status": "no_data", "vs_prior": -57}, {"metric_id": "mkt.community_size", "brand_id": "infx", "period": "2026-05", "value": 428, "target": null, "status": "no_data", "vs_prior": 273}, {"metric_id": "mkt.community_size", "brand_id": "infx", "period": "2026-06", "value": 164, "target": null, "status": "no_data", "vs_prior": -264}, {"metric_id": "mkt.community_size", "brand_id": "infx", "period": "2026-07", "value": 94, "target": null, "status": "no_data", "vs_prior": -70}, {"metric_id": "mkt.community_size", "brand_id": "infx", "period": "2026-08", "value": 433, "target": null, "status": "no_data", "vs_prior": 339}, {"metric_id": "mkt.community_size", "brand_id": "fluxflow", "period": "2026-03", "value": 208, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.community_size", "brand_id": "fluxflow", "period": "2026-04", "value": 28, "target": null, "status": "no_data", "vs_prior": -180}, {"metric_id": "mkt.community_size", "brand_id": "fluxflow", "period": "2026-05", "value": 172, "target": null, "status": "no_data", "vs_prior": 144}, {"metric_id": "mkt.community_size", "brand_id": "fluxflow", "period": "2026-06", "value": 191, "target": null, "status": "no_data", "vs_prior": 19}, {"metric_id": "mkt.community_size", "brand_id": "fluxflow", "period": "2026-07", "value": 436, "target": null, "status": "no_data", "vs_prior": 245}, {"metric_id": "mkt.community_size", "brand_id": "fluxflow", "period": "2026-08", "value": 149, "target": null, "status": "no_data", "vs_prior": -287}, {"metric_id": "mkt.community_size", "brand_id": "divorced", "period": "2026-03", "value": 188, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.community_size", "brand_id": "divorced", "period": "2026-04", "value": 40, "target": null, "status": "no_data", "vs_prior": -148}, {"metric_id": "mkt.community_size", "brand_id": "divorced", "period": "2026-05", "value": 321, "target": null, "status": "no_data", "vs_prior": 281}, {"metric_id": "mkt.community_size", "brand_id": "divorced", "period": "2026-06", "value": 75, "target": null, "status": "no_data", "vs_prior": -246}, {"metric_id": "mkt.community_size", "brand_id": "divorced", "period": "2026-07", "value": 52, "target": null, "status": "no_data", "vs_prior": -23}, {"metric_id": "mkt.community_size", "brand_id": "divorced", "period": "2026-08", "value": 47, "target": null, "status": "no_data", "vs_prior": -5}, {"metric_id": "mkt.community_size", "brand_id": "papapasta", "period": "2026-03", "value": 267, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.community_size", "brand_id": "papapasta", "period": "2026-04", "value": 62, "target": null, "status": "no_data", "vs_prior": -205}, {"metric_id": "mkt.community_size", "brand_id": "papapasta", "period": "2026-05", "value": 324, "target": null, "status": "no_data", "vs_prior": 262}, {"metric_id": "mkt.community_size", "brand_id": "papapasta", "period": "2026-06", "value": 386, "target": null, "status": "no_data", "vs_prior": 62}, {"metric_id": "mkt.community_size", "brand_id": "papapasta", "period": "2026-07", "value": 36, "target": null, "status": "no_data", "vs_prior": -350}, {"metric_id": "mkt.community_size", "brand_id": "papapasta", "period": "2026-08", "value": 108, "target": null, "status": "no_data", "vs_prior": 72}, {"metric_id": "mkt.community_size", "brand_id": "acdc", "period": "2026-03", "value": 388, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "mkt.community_size", "brand_id": "acdc", "period": "2026-04", "value": 97, "target": null, "status": "no_data", "vs_prior": -291}, {"metric_id": "mkt.community_size", "brand_id": "acdc", "period": "2026-05", "value": 354, "target": null, "status": "no_data", "vs_prior": 257}, {"metric_id": "mkt.community_size", "brand_id": "acdc", "period": "2026-06", "value": 102, "target": null, "status": "no_data", "vs_prior": -252}, {"metric_id": "mkt.community_size", "brand_id": "acdc", "period": "2026-07", "value": 199, "target": null, "status": "no_data", "vs_prior": 97}, {"metric_id": "mkt.community_size", "brand_id": "acdc", "period": "2026-08", "value": 377, "target": null, "status": "no_data", "vs_prior": 178}, {"metric_id": "sal.pipeline", "brand_id": "infinity", "period": "2026-03", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": null}, {"metric_id": "sal.pipeline", "brand_id": "infinity", "period": "2026-04", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "infinity", "period": "2026-05", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "infinity", "period": "2026-06", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "infinity", "period": "2026-07", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "infinity", "period": "2026-08", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "tlf", "period": "2026-03", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": null}, {"metric_id": "sal.pipeline", "brand_id": "tlf", "period": "2026-04", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "tlf", "period": "2026-05", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "tlf", "period": "2026-06", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "tlf", "period": "2026-07", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "tlf", "period": "2026-08", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "infx", "period": "2026-03", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": null}, {"metric_id": "sal.pipeline", "brand_id": "infx", "period": "2026-04", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "infx", "period": "2026-05", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "infx", "period": "2026-06", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "infx", "period": "2026-07", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "infx", "period": "2026-08", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "fluxflow", "period": "2026-03", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": null}, {"metric_id": "sal.pipeline", "brand_id": "fluxflow", "period": "2026-04", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "fluxflow", "period": "2026-05", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "fluxflow", "period": "2026-06", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "fluxflow", "period": "2026-07", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "fluxflow", "period": "2026-08", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "divorced", "period": "2026-03", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": null}, {"metric_id": "sal.pipeline", "brand_id": "divorced", "period": "2026-04", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "divorced", "period": "2026-05", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "divorced", "period": "2026-06", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "divorced", "period": "2026-07", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "divorced", "period": "2026-08", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "papapasta", "period": "2026-03", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": null}, {"metric_id": "sal.pipeline", "brand_id": "papapasta", "period": "2026-04", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "papapasta", "period": "2026-05", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "papapasta", "period": "2026-06", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "papapasta", "period": "2026-07", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "papapasta", "period": "2026-08", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "acdc", "period": "2026-03", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": null}, {"metric_id": "sal.pipeline", "brand_id": "acdc", "period": "2026-04", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "acdc", "period": "2026-05", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "acdc", "period": "2026-06", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "acdc", "period": "2026-07", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline", "brand_id": "acdc", "period": "2026-08", "value": 0, "target": ">= 3 * monthly_target", "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.pipeline_coverage", "brand_id": "infinity", "period": "2026-03", "value": 2.3, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "sal.pipeline_coverage", "brand_id": "infinity", "period": "2026-04", "value": 2.5, "target": 3.0, "status": "red", "vs_prior": 0.2}, {"metric_id": "sal.pipeline_coverage", "brand_id": "infinity", "period": "2026-05", "value": 2.5, "target": 3.0, "status": "red", "vs_prior": 0.0}, {"metric_id": "sal.pipeline_coverage", "brand_id": "infinity", "period": "2026-06", "value": 2.9, "target": 3.0, "status": "amber", "vs_prior": 0.4}, {"metric_id": "sal.pipeline_coverage", "brand_id": "infinity", "period": "2026-07", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": -0.2}, {"metric_id": "sal.pipeline_coverage", "brand_id": "infinity", "period": "2026-08", "value": 2.9, "target": 3.0, "status": "amber", "vs_prior": 0.2}, {"metric_id": "sal.pipeline_coverage", "brand_id": "tlf", "period": "2026-03", "value": 2.3, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "sal.pipeline_coverage", "brand_id": "tlf", "period": "2026-04", "value": 2.2, "target": 3.0, "status": "red", "vs_prior": -0.1}, {"metric_id": "sal.pipeline_coverage", "brand_id": "tlf", "period": "2026-05", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": 0.5}, {"metric_id": "sal.pipeline_coverage", "brand_id": "tlf", "period": "2026-06", "value": 2.3, "target": 3.0, "status": "red", "vs_prior": -0.4}, {"metric_id": "sal.pipeline_coverage", "brand_id": "tlf", "period": "2026-07", "value": 3.0, "target": 3.0, "status": "green", "vs_prior": 0.7}, {"metric_id": "sal.pipeline_coverage", "brand_id": "tlf", "period": "2026-08", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": -0.3}, {"metric_id": "sal.pipeline_coverage", "brand_id": "infx", "period": "2026-03", "value": 2.3, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "sal.pipeline_coverage", "brand_id": "infx", "period": "2026-04", "value": 2.4, "target": 3.0, "status": "red", "vs_prior": 0.1}, {"metric_id": "sal.pipeline_coverage", "brand_id": "infx", "period": "2026-05", "value": 2.4, "target": 3.0, "status": "red", "vs_prior": 0.0}, {"metric_id": "sal.pipeline_coverage", "brand_id": "infx", "period": "2026-06", "value": 2.4, "target": 3.0, "status": "red", "vs_prior": 0.0}, {"metric_id": "sal.pipeline_coverage", "brand_id": "infx", "period": "2026-07", "value": 2.8, "target": 3.0, "status": "amber", "vs_prior": 0.4}, {"metric_id": "sal.pipeline_coverage", "brand_id": "infx", "period": "2026-08", "value": 3.1, "target": 3.0, "status": "green", "vs_prior": 0.3}, {"metric_id": "sal.pipeline_coverage", "brand_id": "fluxflow", "period": "2026-03", "value": 1.9, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "sal.pipeline_coverage", "brand_id": "fluxflow", "period": "2026-04", "value": 2.3, "target": 3.0, "status": "red", "vs_prior": 0.4}, {"metric_id": "sal.pipeline_coverage", "brand_id": "fluxflow", "period": "2026-05", "value": 2.4, "target": 3.0, "status": "red", "vs_prior": 0.1}, {"metric_id": "sal.pipeline_coverage", "brand_id": "fluxflow", "period": "2026-06", "value": 2.4, "target": 3.0, "status": "red", "vs_prior": 0.0}, {"metric_id": "sal.pipeline_coverage", "brand_id": "fluxflow", "period": "2026-07", "value": 2.6, "target": 3.0, "status": "red", "vs_prior": 0.2}, {"metric_id": "sal.pipeline_coverage", "brand_id": "fluxflow", "period": "2026-08", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": 0.1}, {"metric_id": "sal.pipeline_coverage", "brand_id": "divorced", "period": "2026-03", "value": 1.8, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "sal.pipeline_coverage", "brand_id": "divorced", "period": "2026-04", "value": 2.0, "target": 3.0, "status": "red", "vs_prior": 0.2}, {"metric_id": "sal.pipeline_coverage", "brand_id": "divorced", "period": "2026-05", "value": 2.6, "target": 3.0, "status": "red", "vs_prior": 0.6}, {"metric_id": "sal.pipeline_coverage", "brand_id": "divorced", "period": "2026-06", "value": 2.4, "target": 3.0, "status": "red", "vs_prior": -0.2}, {"metric_id": "sal.pipeline_coverage", "brand_id": "divorced", "period": "2026-07", "value": 2.9, "target": 3.0, "status": "amber", "vs_prior": 0.5}, {"metric_id": "sal.pipeline_coverage", "brand_id": "divorced", "period": "2026-08", "value": 2.7, "target": 3.0, "status": "amber", "vs_prior": -0.2}, {"metric_id": "sal.pipeline_coverage", "brand_id": "papapasta", "period": "2026-03", "value": 2.2, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "sal.pipeline_coverage", "brand_id": "papapasta", "period": "2026-04", "value": 2.1, "target": 3.0, "status": "red", "vs_prior": -0.1}, {"metric_id": "sal.pipeline_coverage", "brand_id": "papapasta", "period": "2026-05", "value": 2.3, "target": 3.0, "status": "red", "vs_prior": 0.2}, {"metric_id": "sal.pipeline_coverage", "brand_id": "papapasta", "period": "2026-06", "value": 2.8, "target": 3.0, "status": "amber", "vs_prior": 0.5}, {"metric_id": "sal.pipeline_coverage", "brand_id": "papapasta", "period": "2026-07", "value": 2.9, "target": 3.0, "status": "amber", "vs_prior": 0.1}, {"metric_id": "sal.pipeline_coverage", "brand_id": "papapasta", "period": "2026-08", "value": 3.0, "target": 3.0, "status": "green", "vs_prior": 0.1}, {"metric_id": "sal.pipeline_coverage", "brand_id": "acdc", "period": "2026-03", "value": 2.2, "target": 3.0, "status": "red", "vs_prior": null}, {"metric_id": "sal.pipeline_coverage", "brand_id": "acdc", "period": "2026-04", "value": 1.9, "target": 3.0, "status": "red", "vs_prior": -0.3}, {"metric_id": "sal.pipeline_coverage", "brand_id": "acdc", "period": "2026-05", "value": 2.1, "target": 3.0, "status": "red", "vs_prior": 0.2}, {"metric_id": "sal.pipeline_coverage", "brand_id": "acdc", "period": "2026-06", "value": 2.5, "target": 3.0, "status": "red", "vs_prior": 0.4}, {"metric_id": "sal.pipeline_coverage", "brand_id": "acdc", "period": "2026-07", "value": 2.5, "target": 3.0, "status": "red", "vs_prior": 0.0}, {"metric_id": "sal.pipeline_coverage", "brand_id": "acdc", "period": "2026-08", "value": 2.8, "target": 3.0, "status": "amber", "vs_prior": 0.3}, {"metric_id": "sal.deals_won", "brand_id": "infinity", "period": "2026-03", "value": 3, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.deals_won", "brand_id": "infinity", "period": "2026-04", "value": 8, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "sal.deals_won", "brand_id": "infinity", "period": "2026-05", "value": 4, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "sal.deals_won", "brand_id": "infinity", "period": "2026-06", "value": 10, "target": null, "status": "no_data", "vs_prior": 6}, {"metric_id": "sal.deals_won", "brand_id": "infinity", "period": "2026-07", "value": 6, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "sal.deals_won", "brand_id": "infinity", "period": "2026-08", "value": 12, "target": null, "status": "no_data", "vs_prior": 6}, {"metric_id": "sal.deals_won", "brand_id": "tlf", "period": "2026-03", "value": 2, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.deals_won", "brand_id": "tlf", "period": "2026-04", "value": 8, "target": null, "status": "no_data", "vs_prior": 6}, {"metric_id": "sal.deals_won", "brand_id": "tlf", "period": "2026-05", "value": 6, "target": null, "status": "no_data", "vs_prior": -2}, {"metric_id": "sal.deals_won", "brand_id": "tlf", "period": "2026-06", "value": 11, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "sal.deals_won", "brand_id": "tlf", "period": "2026-07", "value": 7, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "sal.deals_won", "brand_id": "tlf", "period": "2026-08", "value": 5, "target": null, "status": "no_data", "vs_prior": -2}, {"metric_id": "sal.deals_won", "brand_id": "infx", "period": "2026-03", "value": 2, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.deals_won", "brand_id": "infx", "period": "2026-04", "value": 8, "target": null, "status": "no_data", "vs_prior": 6}, {"metric_id": "sal.deals_won", "brand_id": "infx", "period": "2026-05", "value": 8, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.deals_won", "brand_id": "infx", "period": "2026-06", "value": 8, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.deals_won", "brand_id": "infx", "period": "2026-07", "value": 11, "target": null, "status": "no_data", "vs_prior": 3}, {"metric_id": "sal.deals_won", "brand_id": "infx", "period": "2026-08", "value": 8, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "sal.deals_won", "brand_id": "fluxflow", "period": "2026-03", "value": 7, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.deals_won", "brand_id": "fluxflow", "period": "2026-04", "value": 3, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "sal.deals_won", "brand_id": "fluxflow", "period": "2026-05", "value": 3, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.deals_won", "brand_id": "fluxflow", "period": "2026-06", "value": 6, "target": null, "status": "no_data", "vs_prior": 3}, {"metric_id": "sal.deals_won", "brand_id": "fluxflow", "period": "2026-07", "value": 11, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "sal.deals_won", "brand_id": "fluxflow", "period": "2026-08", "value": 7, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "sal.deals_won", "brand_id": "divorced", "period": "2026-03", "value": 4, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.deals_won", "brand_id": "divorced", "period": "2026-04", "value": 8, "target": null, "status": "no_data", "vs_prior": 4}, {"metric_id": "sal.deals_won", "brand_id": "divorced", "period": "2026-05", "value": 7, "target": null, "status": "no_data", "vs_prior": -1}, {"metric_id": "sal.deals_won", "brand_id": "divorced", "period": "2026-06", "value": 3, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "sal.deals_won", "brand_id": "divorced", "period": "2026-07", "value": 5, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "sal.deals_won", "brand_id": "divorced", "period": "2026-08", "value": 7, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "sal.deals_won", "brand_id": "papapasta", "period": "2026-03", "value": 4, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.deals_won", "brand_id": "papapasta", "period": "2026-04", "value": 7, "target": null, "status": "no_data", "vs_prior": 3}, {"metric_id": "sal.deals_won", "brand_id": "papapasta", "period": "2026-05", "value": 11, "target": null, "status": "no_data", "vs_prior": 4}, {"metric_id": "sal.deals_won", "brand_id": "papapasta", "period": "2026-06", "value": 11, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "sal.deals_won", "brand_id": "papapasta", "period": "2026-07", "value": 3, "target": null, "status": "no_data", "vs_prior": -8}, {"metric_id": "sal.deals_won", "brand_id": "papapasta", "period": "2026-08", "value": 7, "target": null, "status": "no_data", "vs_prior": 4}, {"metric_id": "sal.deals_won", "brand_id": "acdc", "period": "2026-03", "value": 9, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.deals_won", "brand_id": "acdc", "period": "2026-04", "value": 4, "target": null, "status": "no_data", "vs_prior": -5}, {"metric_id": "sal.deals_won", "brand_id": "acdc", "period": "2026-05", "value": 5, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "sal.deals_won", "brand_id": "acdc", "period": "2026-06", "value": 6, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "sal.deals_won", "brand_id": "acdc", "period": "2026-07", "value": 9, "target": null, "status": "no_data", "vs_prior": 3}, {"metric_id": "sal.deals_won", "brand_id": "acdc", "period": "2026-08", "value": 11, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "sal.win_rate", "brand_id": "infinity", "period": "2026-03", "value": 17.7, "target": 25, "status": "red", "vs_prior": null}, {"metric_id": "sal.win_rate", "brand_id": "infinity", "period": "2026-04", "value": 21.6, "target": 25, "status": "red", "vs_prior": 3.9}, {"metric_id": "sal.win_rate", "brand_id": "infinity", "period": "2026-05", "value": 22.4, "target": 25, "status": "red", "vs_prior": 0.8}, {"metric_id": "sal.win_rate", "brand_id": "infinity", "period": "2026-06", "value": 20.0, "target": 25, "status": "red", "vs_prior": -2.4}, {"metric_id": "sal.win_rate", "brand_id": "infinity", "period": "2026-07", "value": 24.3, "target": 25, "status": "amber", "vs_prior": 4.3}, {"metric_id": "sal.win_rate", "brand_id": "infinity", "period": "2026-08", "value": 25.3, "target": 25, "status": "green", "vs_prior": 1.0}, {"metric_id": "sal.win_rate", "brand_id": "tlf", "period": "2026-03", "value": 15.7, "target": 25, "status": "red", "vs_prior": null}, {"metric_id": "sal.win_rate", "brand_id": "tlf", "period": "2026-04", "value": 19.3, "target": 25, "status": "red", "vs_prior": 3.6}, {"metric_id": "sal.win_rate", "brand_id": "tlf", "period": "2026-05", "value": 21.2, "target": 25, "status": "red", "vs_prior": 1.9}, {"metric_id": "sal.win_rate", "brand_id": "tlf", "period": "2026-06", "value": 20.9, "target": 25, "status": "red", "vs_prior": -0.3}, {"metric_id": "sal.win_rate", "brand_id": "tlf", "period": "2026-07", "value": 24.0, "target": 25, "status": "amber", "vs_prior": 3.1}, {"metric_id": "sal.win_rate", "brand_id": "tlf", "period": "2026-08", "value": 24.2, "target": 25, "status": "amber", "vs_prior": 0.2}, {"metric_id": "sal.win_rate", "brand_id": "infx", "period": "2026-03", "value": 15.2, "target": 25, "status": "red", "vs_prior": null}, {"metric_id": "sal.win_rate", "brand_id": "infx", "period": "2026-04", "value": 18.7, "target": 25, "status": "red", "vs_prior": 3.5}, {"metric_id": "sal.win_rate", "brand_id": "infx", "period": "2026-05", "value": 17.9, "target": 25, "status": "red", "vs_prior": -0.8}, {"metric_id": "sal.win_rate", "brand_id": "infx", "period": "2026-06", "value": 23.3, "target": 25, "status": "amber", "vs_prior": 5.4}, {"metric_id": "sal.win_rate", "brand_id": "infx", "period": "2026-07", "value": 21.9, "target": 25, "status": "red", "vs_prior": -1.4}, {"metric_id": "sal.win_rate", "brand_id": "infx", "period": "2026-08", "value": 25.9, "target": 25, "status": "green", "vs_prior": 4.0}, {"metric_id": "sal.win_rate", "brand_id": "fluxflow", "period": "2026-03", "value": 18.8, "target": 25, "status": "red", "vs_prior": null}, {"metric_id": "sal.win_rate", "brand_id": "fluxflow", "period": "2026-04", "value": 19.0, "target": 25, "status": "red", "vs_prior": 0.2}, {"metric_id": "sal.win_rate", "brand_id": "fluxflow", "period": "2026-05", "value": 19.4, "target": 25, "status": "red", "vs_prior": 0.4}, {"metric_id": "sal.win_rate", "brand_id": "fluxflow", "period": "2026-06", "value": 19.4, "target": 25, "status": "red", "vs_prior": 0.0}, {"metric_id": "sal.win_rate", "brand_id": "fluxflow", "period": "2026-07", "value": 20.8, "target": 25, "status": "red", "vs_prior": 1.4}, {"metric_id": "sal.win_rate", "brand_id": "fluxflow", "period": "2026-08", "value": 27.6, "target": 25, "status": "green", "vs_prior": 6.8}, {"metric_id": "sal.win_rate", "brand_id": "divorced", "period": "2026-03", "value": 15.6, "target": 25, "status": "red", "vs_prior": null}, {"metric_id": "sal.win_rate", "brand_id": "divorced", "period": "2026-04", "value": 21.7, "target": 25, "status": "red", "vs_prior": 6.1}, {"metric_id": "sal.win_rate", "brand_id": "divorced", "period": "2026-05", "value": 20.2, "target": 25, "status": "red", "vs_prior": -1.5}, {"metric_id": "sal.win_rate", "brand_id": "divorced", "period": "2026-06", "value": 24.0, "target": 25, "status": "amber", "vs_prior": 3.8}, {"metric_id": "sal.win_rate", "brand_id": "divorced", "period": "2026-07", "value": 24.3, "target": 25, "status": "amber", "vs_prior": 0.3}, {"metric_id": "sal.win_rate", "brand_id": "divorced", "period": "2026-08", "value": 25.4, "target": 25, "status": "green", "vs_prior": 1.1}, {"metric_id": "sal.win_rate", "brand_id": "papapasta", "period": "2026-03", "value": 17.6, "target": 25, "status": "red", "vs_prior": null}, {"metric_id": "sal.win_rate", "brand_id": "papapasta", "period": "2026-04", "value": 20.5, "target": 25, "status": "red", "vs_prior": 2.9}, {"metric_id": "sal.win_rate", "brand_id": "papapasta", "period": "2026-05", "value": 23.1, "target": 25, "status": "amber", "vs_prior": 2.6}, {"metric_id": "sal.win_rate", "brand_id": "papapasta", "period": "2026-06", "value": 20.3, "target": 25, "status": "red", "vs_prior": -2.8}, {"metric_id": "sal.win_rate", "brand_id": "papapasta", "period": "2026-07", "value": 22.0, "target": 25, "status": "red", "vs_prior": 1.7}, {"metric_id": "sal.win_rate", "brand_id": "papapasta", "period": "2026-08", "value": 23.0, "target": 25, "status": "amber", "vs_prior": 1.0}, {"metric_id": "sal.win_rate", "brand_id": "acdc", "period": "2026-03", "value": 16.3, "target": 25, "status": "red", "vs_prior": null}, {"metric_id": "sal.win_rate", "brand_id": "acdc", "period": "2026-04", "value": 17.6, "target": 25, "status": "red", "vs_prior": 1.3}, {"metric_id": "sal.win_rate", "brand_id": "acdc", "period": "2026-05", "value": 19.6, "target": 25, "status": "red", "vs_prior": 2.0}, {"metric_id": "sal.win_rate", "brand_id": "acdc", "period": "2026-06", "value": 23.7, "target": 25, "status": "amber", "vs_prior": 4.1}, {"metric_id": "sal.win_rate", "brand_id": "acdc", "period": "2026-07", "value": 21.5, "target": 25, "status": "red", "vs_prior": -2.2}, {"metric_id": "sal.win_rate", "brand_id": "acdc", "period": "2026-08", "value": 23.8, "target": 25, "status": "amber", "vs_prior": 2.3}, {"metric_id": "sal.avg_deal_size", "brand_id": "infinity", "period": "2026-03", "value": 618000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.avg_deal_size", "brand_id": "infinity", "period": "2026-04", "value": 123000, "target": null, "status": "no_data", "vs_prior": -495000}, {"metric_id": "sal.avg_deal_size", "brand_id": "infinity", "period": "2026-05", "value": 398000, "target": null, "status": "no_data", "vs_prior": 275000}, {"metric_id": "sal.avg_deal_size", "brand_id": "infinity", "period": "2026-06", "value": 783000, "target": null, "status": "no_data", "vs_prior": 385000}, {"metric_id": "sal.avg_deal_size", "brand_id": "infinity", "period": "2026-07", "value": 535000, "target": null, "status": "no_data", "vs_prior": -248000}, {"metric_id": "sal.avg_deal_size", "brand_id": "infinity", "period": "2026-08", "value": 696000, "target": null, "status": "no_data", "vs_prior": 161000}, {"metric_id": "sal.avg_deal_size", "brand_id": "tlf", "period": "2026-03", "value": 358000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.avg_deal_size", "brand_id": "tlf", "period": "2026-04", "value": 820000, "target": null, "status": "no_data", "vs_prior": 462000}, {"metric_id": "sal.avg_deal_size", "brand_id": "tlf", "period": "2026-05", "value": 684000, "target": null, "status": "no_data", "vs_prior": -136000}, {"metric_id": "sal.avg_deal_size", "brand_id": "tlf", "period": "2026-06", "value": 276000, "target": null, "status": "no_data", "vs_prior": -408000}, {"metric_id": "sal.avg_deal_size", "brand_id": "tlf", "period": "2026-07", "value": 227000, "target": null, "status": "no_data", "vs_prior": -49000}, {"metric_id": "sal.avg_deal_size", "brand_id": "tlf", "period": "2026-08", "value": 491000, "target": null, "status": "no_data", "vs_prior": 264000}, {"metric_id": "sal.avg_deal_size", "brand_id": "infx", "period": "2026-03", "value": 531000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.avg_deal_size", "brand_id": "infx", "period": "2026-04", "value": 401000, "target": null, "status": "no_data", "vs_prior": -130000}, {"metric_id": "sal.avg_deal_size", "brand_id": "infx", "period": "2026-05", "value": 241000, "target": null, "status": "no_data", "vs_prior": -160000}, {"metric_id": "sal.avg_deal_size", "brand_id": "infx", "period": "2026-06", "value": 340000, "target": null, "status": "no_data", "vs_prior": 99000}, {"metric_id": "sal.avg_deal_size", "brand_id": "infx", "period": "2026-07", "value": 765000, "target": null, "status": "no_data", "vs_prior": 425000}, {"metric_id": "sal.avg_deal_size", "brand_id": "infx", "period": "2026-08", "value": 880000, "target": null, "status": "no_data", "vs_prior": 115000}, {"metric_id": "sal.avg_deal_size", "brand_id": "fluxflow", "period": "2026-03", "value": 543000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.avg_deal_size", "brand_id": "fluxflow", "period": "2026-04", "value": 605000, "target": null, "status": "no_data", "vs_prior": 62000}, {"metric_id": "sal.avg_deal_size", "brand_id": "fluxflow", "period": "2026-05", "value": 790000, "target": null, "status": "no_data", "vs_prior": 185000}, {"metric_id": "sal.avg_deal_size", "brand_id": "fluxflow", "period": "2026-06", "value": 289000, "target": null, "status": "no_data", "vs_prior": -501000}, {"metric_id": "sal.avg_deal_size", "brand_id": "fluxflow", "period": "2026-07", "value": 265000, "target": null, "status": "no_data", "vs_prior": -24000}, {"metric_id": "sal.avg_deal_size", "brand_id": "fluxflow", "period": "2026-08", "value": 360000, "target": null, "status": "no_data", "vs_prior": 95000}, {"metric_id": "sal.avg_deal_size", "brand_id": "divorced", "period": "2026-03", "value": 576000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.avg_deal_size", "brand_id": "divorced", "period": "2026-04", "value": 122000, "target": null, "status": "no_data", "vs_prior": -454000}, {"metric_id": "sal.avg_deal_size", "brand_id": "divorced", "period": "2026-05", "value": 648000, "target": null, "status": "no_data", "vs_prior": 526000}, {"metric_id": "sal.avg_deal_size", "brand_id": "divorced", "period": "2026-06", "value": 192000, "target": null, "status": "no_data", "vs_prior": -456000}, {"metric_id": "sal.avg_deal_size", "brand_id": "divorced", "period": "2026-07", "value": 680000, "target": null, "status": "no_data", "vs_prior": 488000}, {"metric_id": "sal.avg_deal_size", "brand_id": "divorced", "period": "2026-08", "value": 583000, "target": null, "status": "no_data", "vs_prior": -97000}, {"metric_id": "sal.avg_deal_size", "brand_id": "papapasta", "period": "2026-03", "value": 224000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.avg_deal_size", "brand_id": "papapasta", "period": "2026-04", "value": 201000, "target": null, "status": "no_data", "vs_prior": -23000}, {"metric_id": "sal.avg_deal_size", "brand_id": "papapasta", "period": "2026-05", "value": 533000, "target": null, "status": "no_data", "vs_prior": 332000}, {"metric_id": "sal.avg_deal_size", "brand_id": "papapasta", "period": "2026-06", "value": 422000, "target": null, "status": "no_data", "vs_prior": -111000}, {"metric_id": "sal.avg_deal_size", "brand_id": "papapasta", "period": "2026-07", "value": 112000, "target": null, "status": "no_data", "vs_prior": -310000}, {"metric_id": "sal.avg_deal_size", "brand_id": "papapasta", "period": "2026-08", "value": 158000, "target": null, "status": "no_data", "vs_prior": 46000}, {"metric_id": "sal.avg_deal_size", "brand_id": "acdc", "period": "2026-03", "value": 782000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "sal.avg_deal_size", "brand_id": "acdc", "period": "2026-04", "value": 273000, "target": null, "status": "no_data", "vs_prior": -509000}, {"metric_id": "sal.avg_deal_size", "brand_id": "acdc", "period": "2026-05", "value": 669000, "target": null, "status": "no_data", "vs_prior": 396000}, {"metric_id": "sal.avg_deal_size", "brand_id": "acdc", "period": "2026-06", "value": 490000, "target": null, "status": "no_data", "vs_prior": -179000}, {"metric_id": "sal.avg_deal_size", "brand_id": "acdc", "period": "2026-07", "value": 304000, "target": null, "status": "no_data", "vs_prior": -186000}, {"metric_id": "sal.avg_deal_size", "brand_id": "acdc", "period": "2026-08", "value": 101000, "target": null, "status": "no_data", "vs_prior": -203000}, {"metric_id": "sal.nrr", "brand_id": "infinity", "period": "2026-03", "value": 58.9, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "sal.nrr", "brand_id": "infinity", "period": "2026-04", "value": 77.5, "target": 100, "status": "red", "vs_prior": 18.6}, {"metric_id": "sal.nrr", "brand_id": "infinity", "period": "2026-05", "value": 87.7, "target": 100, "status": "red", "vs_prior": 10.2}, {"metric_id": "sal.nrr", "brand_id": "infinity", "period": "2026-06", "value": 90.9, "target": 100, "status": "amber", "vs_prior": 3.2}, {"metric_id": "sal.nrr", "brand_id": "infinity", "period": "2026-07", "value": 85.5, "target": 100, "status": "red", "vs_prior": -5.4}, {"metric_id": "sal.nrr", "brand_id": "infinity", "period": "2026-08", "value": 95.4, "target": 100, "status": "amber", "vs_prior": 9.9}, {"metric_id": "sal.nrr", "brand_id": "tlf", "period": "2026-03", "value": 64.3, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "sal.nrr", "brand_id": "tlf", "period": "2026-04", "value": 79.0, "target": 100, "status": "red", "vs_prior": 14.7}, {"metric_id": "sal.nrr", "brand_id": "tlf", "period": "2026-05", "value": 81.2, "target": 100, "status": "red", "vs_prior": 2.2}, {"metric_id": "sal.nrr", "brand_id": "tlf", "period": "2026-06", "value": 89.6, "target": 100, "status": "red", "vs_prior": 8.4}, {"metric_id": "sal.nrr", "brand_id": "tlf", "period": "2026-07", "value": 82.1, "target": 100, "status": "red", "vs_prior": -7.5}, {"metric_id": "sal.nrr", "brand_id": "tlf", "period": "2026-08", "value": 108.4, "target": 100, "status": "green", "vs_prior": 26.3}, {"metric_id": "sal.nrr", "brand_id": "infx", "period": "2026-03", "value": 74.5, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "sal.nrr", "brand_id": "infx", "period": "2026-04", "value": 70.6, "target": 100, "status": "red", "vs_prior": -3.9}, {"metric_id": "sal.nrr", "brand_id": "infx", "period": "2026-05", "value": 83.2, "target": 100, "status": "red", "vs_prior": 12.6}, {"metric_id": "sal.nrr", "brand_id": "infx", "period": "2026-06", "value": 95.7, "target": 100, "status": "amber", "vs_prior": 12.5}, {"metric_id": "sal.nrr", "brand_id": "infx", "period": "2026-07", "value": 93.6, "target": 100, "status": "amber", "vs_prior": -2.1}, {"metric_id": "sal.nrr", "brand_id": "infx", "period": "2026-08", "value": 110.9, "target": 100, "status": "green", "vs_prior": 17.3}, {"metric_id": "sal.nrr", "brand_id": "fluxflow", "period": "2026-03", "value": 76.3, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "sal.nrr", "brand_id": "fluxflow", "period": "2026-04", "value": 69.5, "target": 100, "status": "red", "vs_prior": -6.8}, {"metric_id": "sal.nrr", "brand_id": "fluxflow", "period": "2026-05", "value": 93.4, "target": 100, "status": "amber", "vs_prior": 23.9}, {"metric_id": "sal.nrr", "brand_id": "fluxflow", "period": "2026-06", "value": 97.7, "target": 100, "status": "amber", "vs_prior": 4.3}, {"metric_id": "sal.nrr", "brand_id": "fluxflow", "period": "2026-07", "value": 94.0, "target": 100, "status": "amber", "vs_prior": -3.7}, {"metric_id": "sal.nrr", "brand_id": "fluxflow", "period": "2026-08", "value": 91.5, "target": 100, "status": "amber", "vs_prior": -2.5}, {"metric_id": "sal.nrr", "brand_id": "divorced", "period": "2026-03", "value": 64.6, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "sal.nrr", "brand_id": "divorced", "period": "2026-04", "value": 87.3, "target": 100, "status": "red", "vs_prior": 22.7}, {"metric_id": "sal.nrr", "brand_id": "divorced", "period": "2026-05", "value": 88.6, "target": 100, "status": "red", "vs_prior": 1.3}, {"metric_id": "sal.nrr", "brand_id": "divorced", "period": "2026-06", "value": 77.2, "target": 100, "status": "red", "vs_prior": -11.4}, {"metric_id": "sal.nrr", "brand_id": "divorced", "period": "2026-07", "value": 101.5, "target": 100, "status": "green", "vs_prior": 24.3}, {"metric_id": "sal.nrr", "brand_id": "divorced", "period": "2026-08", "value": 104.9, "target": 100, "status": "green", "vs_prior": 3.4}, {"metric_id": "sal.nrr", "brand_id": "papapasta", "period": "2026-03", "value": 81.4, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "sal.nrr", "brand_id": "papapasta", "period": "2026-04", "value": 70.7, "target": 100, "status": "red", "vs_prior": -10.7}, {"metric_id": "sal.nrr", "brand_id": "papapasta", "period": "2026-05", "value": 84.8, "target": 100, "status": "red", "vs_prior": 14.1}, {"metric_id": "sal.nrr", "brand_id": "papapasta", "period": "2026-06", "value": 87.0, "target": 100, "status": "red", "vs_prior": 2.2}, {"metric_id": "sal.nrr", "brand_id": "papapasta", "period": "2026-07", "value": 88.5, "target": 100, "status": "red", "vs_prior": 1.5}, {"metric_id": "sal.nrr", "brand_id": "papapasta", "period": "2026-08", "value": 96.7, "target": 100, "status": "amber", "vs_prior": 8.2}, {"metric_id": "sal.nrr", "brand_id": "acdc", "period": "2026-03", "value": 58.2, "target": 100, "status": "red", "vs_prior": null}, {"metric_id": "sal.nrr", "brand_id": "acdc", "period": "2026-04", "value": 73.7, "target": 100, "status": "red", "vs_prior": 15.5}, {"metric_id": "sal.nrr", "brand_id": "acdc", "period": "2026-05", "value": 77.6, "target": 100, "status": "red", "vs_prior": 3.9}, {"metric_id": "sal.nrr", "brand_id": "acdc", "period": "2026-06", "value": 79.1, "target": 100, "status": "red", "vs_prior": 1.5}, {"metric_id": "sal.nrr", "brand_id": "acdc", "period": "2026-07", "value": 105.8, "target": 100, "status": "green", "vs_prior": 26.7}, {"metric_id": "sal.nrr", "brand_id": "acdc", "period": "2026-08", "value": 99.9, "target": 100, "status": "amber", "vs_prior": -5.9}, {"metric_id": "sal.churn", "brand_id": "infinity", "period": "2026-03", "value": 2.4, "target": 3, "status": "green", "vs_prior": null}, {"metric_id": "sal.churn", "brand_id": "infinity", "period": "2026-04", "value": 2.6, "target": 3, "status": "green", "vs_prior": 0.2}, {"metric_id": "sal.churn", "brand_id": "infinity", "period": "2026-05", "value": 2.8, "target": 3, "status": "green", "vs_prior": 0.2}, {"metric_id": "sal.churn", "brand_id": "infinity", "period": "2026-06", "value": 2.5, "target": 3, "status": "green", "vs_prior": -0.3}, {"metric_id": "sal.churn", "brand_id": "infinity", "period": "2026-07", "value": 2.5, "target": 3, "status": "green", "vs_prior": 0.0}, {"metric_id": "sal.churn", "brand_id": "infinity", "period": "2026-08", "value": 3.3, "target": 3, "status": "amber", "vs_prior": 0.8}, {"metric_id": "sal.churn", "brand_id": "tlf", "period": "2026-03", "value": 1.9, "target": 3, "status": "green", "vs_prior": null}, {"metric_id": "sal.churn", "brand_id": "tlf", "period": "2026-04", "value": 2.0, "target": 3, "status": "green", "vs_prior": 0.1}, {"metric_id": "sal.churn", "brand_id": "tlf", "period": "2026-05", "value": 2.1, "target": 3, "status": "green", "vs_prior": 0.1}, {"metric_id": "sal.churn", "brand_id": "tlf", "period": "2026-06", "value": 2.7, "target": 3, "status": "green", "vs_prior": 0.6}, {"metric_id": "sal.churn", "brand_id": "tlf", "period": "2026-07", "value": 3.1, "target": 3, "status": "amber", "vs_prior": 0.4}, {"metric_id": "sal.churn", "brand_id": "tlf", "period": "2026-08", "value": 3.1, "target": 3, "status": "amber", "vs_prior": 0.0}, {"metric_id": "sal.churn", "brand_id": "infx", "period": "2026-03", "value": 2.2, "target": 3, "status": "green", "vs_prior": null}, {"metric_id": "sal.churn", "brand_id": "infx", "period": "2026-04", "value": 2.5, "target": 3, "status": "green", "vs_prior": 0.3}, {"metric_id": "sal.churn", "brand_id": "infx", "period": "2026-05", "value": 2.4, "target": 3, "status": "green", "vs_prior": -0.1}, {"metric_id": "sal.churn", "brand_id": "infx", "period": "2026-06", "value": 2.9, "target": 3, "status": "green", "vs_prior": 0.5}, {"metric_id": "sal.churn", "brand_id": "infx", "period": "2026-07", "value": 3.1, "target": 3, "status": "amber", "vs_prior": 0.2}, {"metric_id": "sal.churn", "brand_id": "infx", "period": "2026-08", "value": 2.7, "target": 3, "status": "green", "vs_prior": -0.4}, {"metric_id": "sal.churn", "brand_id": "fluxflow", "period": "2026-03", "value": 2.2, "target": 3, "status": "green", "vs_prior": null}, {"metric_id": "sal.churn", "brand_id": "fluxflow", "period": "2026-04", "value": 1.9, "target": 3, "status": "green", "vs_prior": -0.3}, {"metric_id": "sal.churn", "brand_id": "fluxflow", "period": "2026-05", "value": 2.8, "target": 3, "status": "green", "vs_prior": 0.9}, {"metric_id": "sal.churn", "brand_id": "fluxflow", "period": "2026-06", "value": 2.5, "target": 3, "status": "green", "vs_prior": -0.3}, {"metric_id": "sal.churn", "brand_id": "fluxflow", "period": "2026-07", "value": 2.7, "target": 3, "status": "green", "vs_prior": 0.2}, {"metric_id": "sal.churn", "brand_id": "fluxflow", "period": "2026-08", "value": 2.8, "target": 3, "status": "green", "vs_prior": 0.1}, {"metric_id": "sal.churn", "brand_id": "divorced", "period": "2026-03", "value": 1.9, "target": 3, "status": "green", "vs_prior": null}, {"metric_id": "sal.churn", "brand_id": "divorced", "period": "2026-04", "value": 2.3, "target": 3, "status": "green", "vs_prior": 0.4}, {"metric_id": "sal.churn", "brand_id": "divorced", "period": "2026-05", "value": 2.5, "target": 3, "status": "green", "vs_prior": 0.2}, {"metric_id": "sal.churn", "brand_id": "divorced", "period": "2026-06", "value": 2.4, "target": 3, "status": "green", "vs_prior": -0.1}, {"metric_id": "sal.churn", "brand_id": "divorced", "period": "2026-07", "value": 2.5, "target": 3, "status": "green", "vs_prior": 0.1}, {"metric_id": "sal.churn", "brand_id": "divorced", "period": "2026-08", "value": 2.8, "target": 3, "status": "green", "vs_prior": 0.3}, {"metric_id": "sal.churn", "brand_id": "papapasta", "period": "2026-03", "value": 1.9, "target": 3, "status": "green", "vs_prior": null}, {"metric_id": "sal.churn", "brand_id": "papapasta", "period": "2026-04", "value": 2.0, "target": 3, "status": "green", "vs_prior": 0.1}, {"metric_id": "sal.churn", "brand_id": "papapasta", "period": "2026-05", "value": 2.3, "target": 3, "status": "green", "vs_prior": 0.3}, {"metric_id": "sal.churn", "brand_id": "papapasta", "period": "2026-06", "value": 2.9, "target": 3, "status": "green", "vs_prior": 0.6}, {"metric_id": "sal.churn", "brand_id": "papapasta", "period": "2026-07", "value": 2.5, "target": 3, "status": "green", "vs_prior": -0.4}, {"metric_id": "sal.churn", "brand_id": "papapasta", "period": "2026-08", "value": 3.3, "target": 3, "status": "amber", "vs_prior": 0.8}, {"metric_id": "sal.churn", "brand_id": "acdc", "period": "2026-03", "value": 2.3, "target": 3, "status": "green", "vs_prior": null}, {"metric_id": "sal.churn", "brand_id": "acdc", "period": "2026-04", "value": 2.6, "target": 3, "status": "green", "vs_prior": 0.3}, {"metric_id": "sal.churn", "brand_id": "acdc", "period": "2026-05", "value": 2.5, "target": 3, "status": "green", "vs_prior": -0.1}, {"metric_id": "sal.churn", "brand_id": "acdc", "period": "2026-06", "value": 2.6, "target": 3, "status": "green", "vs_prior": 0.1}, {"metric_id": "sal.churn", "brand_id": "acdc", "period": "2026-07", "value": 3.1, "target": 3, "status": "amber", "vs_prior": 0.5}, {"metric_id": "sal.churn", "brand_id": "acdc", "period": "2026-08", "value": 3.4, "target": 3, "status": "red", "vs_prior": 0.3}, {"metric_id": "ops.output_units", "brand_id": "infinity", "period": "2026-03", "value": 163, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.output_units", "brand_id": "infinity", "period": "2026-04", "value": 352, "target": null, "status": "no_data", "vs_prior": 189}, {"metric_id": "ops.output_units", "brand_id": "infinity", "period": "2026-05", "value": 148, "target": null, "status": "no_data", "vs_prior": -204}, {"metric_id": "ops.output_units", "brand_id": "infinity", "period": "2026-06", "value": 235, "target": null, "status": "no_data", "vs_prior": 87}, {"metric_id": "ops.output_units", "brand_id": "infinity", "period": "2026-07", "value": 399, "target": null, "status": "no_data", "vs_prior": 164}, {"metric_id": "ops.output_units", "brand_id": "infinity", "period": "2026-08", "value": 146, "target": null, "status": "no_data", "vs_prior": -253}, {"metric_id": "ops.output_units", "brand_id": "tlf", "period": "2026-03", "value": 166, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.output_units", "brand_id": "tlf", "period": "2026-04", "value": 238, "target": null, "status": "no_data", "vs_prior": 72}, {"metric_id": "ops.output_units", "brand_id": "tlf", "period": "2026-05", "value": 208, "target": null, "status": "no_data", "vs_prior": -30}, {"metric_id": "ops.output_units", "brand_id": "tlf", "period": "2026-06", "value": 257, "target": null, "status": "no_data", "vs_prior": 49}, {"metric_id": "ops.output_units", "brand_id": "tlf", "period": "2026-07", "value": 345, "target": null, "status": "no_data", "vs_prior": 88}, {"metric_id": "ops.output_units", "brand_id": "tlf", "period": "2026-08", "value": 263, "target": null, "status": "no_data", "vs_prior": -82}, {"metric_id": "ops.output_units", "brand_id": "infx", "period": "2026-03", "value": 163, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.output_units", "brand_id": "infx", "period": "2026-04", "value": 185, "target": null, "status": "no_data", "vs_prior": 22}, {"metric_id": "ops.output_units", "brand_id": "infx", "period": "2026-05", "value": 196, "target": null, "status": "no_data", "vs_prior": 11}, {"metric_id": "ops.output_units", "brand_id": "infx", "period": "2026-06", "value": 213, "target": null, "status": "no_data", "vs_prior": 17}, {"metric_id": "ops.output_units", "brand_id": "infx", "period": "2026-07", "value": 242, "target": null, "status": "no_data", "vs_prior": 29}, {"metric_id": "ops.output_units", "brand_id": "infx", "period": "2026-08", "value": 393, "target": null, "status": "no_data", "vs_prior": 151}, {"metric_id": "ops.output_units", "brand_id": "fluxflow", "period": "2026-03", "value": 223, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.output_units", "brand_id": "fluxflow", "period": "2026-04", "value": 262, "target": null, "status": "no_data", "vs_prior": 39}, {"metric_id": "ops.output_units", "brand_id": "fluxflow", "period": "2026-05", "value": 133, "target": null, "status": "no_data", "vs_prior": -129}, {"metric_id": "ops.output_units", "brand_id": "fluxflow", "period": "2026-06", "value": 127, "target": null, "status": "no_data", "vs_prior": -6}, {"metric_id": "ops.output_units", "brand_id": "fluxflow", "period": "2026-07", "value": 211, "target": null, "status": "no_data", "vs_prior": 84}, {"metric_id": "ops.output_units", "brand_id": "fluxflow", "period": "2026-08", "value": 98, "target": null, "status": "no_data", "vs_prior": -113}, {"metric_id": "ops.output_units", "brand_id": "divorced", "period": "2026-03", "value": 141, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.output_units", "brand_id": "divorced", "period": "2026-04", "value": 249, "target": null, "status": "no_data", "vs_prior": 108}, {"metric_id": "ops.output_units", "brand_id": "divorced", "period": "2026-05", "value": 146, "target": null, "status": "no_data", "vs_prior": -103}, {"metric_id": "ops.output_units", "brand_id": "divorced", "period": "2026-06", "value": 166, "target": null, "status": "no_data", "vs_prior": 20}, {"metric_id": "ops.output_units", "brand_id": "divorced", "period": "2026-07", "value": 371, "target": null, "status": "no_data", "vs_prior": 205}, {"metric_id": "ops.output_units", "brand_id": "divorced", "period": "2026-08", "value": 197, "target": null, "status": "no_data", "vs_prior": -174}, {"metric_id": "ops.output_units", "brand_id": "papapasta", "period": "2026-03", "value": 260, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.output_units", "brand_id": "papapasta", "period": "2026-04", "value": 360, "target": null, "status": "no_data", "vs_prior": 100}, {"metric_id": "ops.output_units", "brand_id": "papapasta", "period": "2026-05", "value": 388, "target": null, "status": "no_data", "vs_prior": 28}, {"metric_id": "ops.output_units", "brand_id": "papapasta", "period": "2026-06", "value": 210, "target": null, "status": "no_data", "vs_prior": -178}, {"metric_id": "ops.output_units", "brand_id": "papapasta", "period": "2026-07", "value": 218, "target": null, "status": "no_data", "vs_prior": 8}, {"metric_id": "ops.output_units", "brand_id": "papapasta", "period": "2026-08", "value": 189, "target": null, "status": "no_data", "vs_prior": -29}, {"metric_id": "ops.output_units", "brand_id": "acdc", "period": "2026-03", "value": 366, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.output_units", "brand_id": "acdc", "period": "2026-04", "value": 236, "target": null, "status": "no_data", "vs_prior": -130}, {"metric_id": "ops.output_units", "brand_id": "acdc", "period": "2026-05", "value": 159, "target": null, "status": "no_data", "vs_prior": -77}, {"metric_id": "ops.output_units", "brand_id": "acdc", "period": "2026-06", "value": 205, "target": null, "status": "no_data", "vs_prior": 46}, {"metric_id": "ops.output_units", "brand_id": "acdc", "period": "2026-07", "value": 101, "target": null, "status": "no_data", "vs_prior": -104}, {"metric_id": "ops.output_units", "brand_id": "acdc", "period": "2026-08", "value": 282, "target": null, "status": "no_data", "vs_prior": 181}, {"metric_id": "ops.quality_score", "brand_id": "infinity", "period": "2026-03", "value": 4.9, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "ops.quality_score", "brand_id": "infinity", "period": "2026-04", "value": 5.7, "target": 8, "status": "red", "vs_prior": 0.8}, {"metric_id": "ops.quality_score", "brand_id": "infinity", "period": "2026-05", "value": 5.7, "target": 8, "status": "red", "vs_prior": 0.0}, {"metric_id": "ops.quality_score", "brand_id": "infinity", "period": "2026-06", "value": 6.3, "target": 8, "status": "red", "vs_prior": 0.6}, {"metric_id": "ops.quality_score", "brand_id": "infinity", "period": "2026-07", "value": 8.0, "target": 8, "status": "green", "vs_prior": 1.7}, {"metric_id": "ops.quality_score", "brand_id": "infinity", "period": "2026-08", "value": 7.8, "target": 8, "status": "amber", "vs_prior": -0.2}, {"metric_id": "ops.quality_score", "brand_id": "tlf", "period": "2026-03", "value": 5.8, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "ops.quality_score", "brand_id": "tlf", "period": "2026-04", "value": 6.7, "target": 8, "status": "red", "vs_prior": 0.9}, {"metric_id": "ops.quality_score", "brand_id": "tlf", "period": "2026-05", "value": 5.9, "target": 8, "status": "red", "vs_prior": -0.8}, {"metric_id": "ops.quality_score", "brand_id": "tlf", "period": "2026-06", "value": 6.1, "target": 8, "status": "red", "vs_prior": 0.2}, {"metric_id": "ops.quality_score", "brand_id": "tlf", "period": "2026-07", "value": 7.5, "target": 8, "status": "amber", "vs_prior": 1.4}, {"metric_id": "ops.quality_score", "brand_id": "tlf", "period": "2026-08", "value": 8.0, "target": 8, "status": "green", "vs_prior": 0.5}, {"metric_id": "ops.quality_score", "brand_id": "infx", "period": "2026-03", "value": 6.5, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "ops.quality_score", "brand_id": "infx", "period": "2026-04", "value": 6.9, "target": 8, "status": "red", "vs_prior": 0.4}, {"metric_id": "ops.quality_score", "brand_id": "infx", "period": "2026-05", "value": 6.1, "target": 8, "status": "red", "vs_prior": -0.8}, {"metric_id": "ops.quality_score", "brand_id": "infx", "period": "2026-06", "value": 7.2, "target": 8, "status": "amber", "vs_prior": 1.1}, {"metric_id": "ops.quality_score", "brand_id": "infx", "period": "2026-07", "value": 7.7, "target": 8, "status": "amber", "vs_prior": 0.5}, {"metric_id": "ops.quality_score", "brand_id": "infx", "period": "2026-08", "value": 7.2, "target": 8, "status": "amber", "vs_prior": -0.5}, {"metric_id": "ops.quality_score", "brand_id": "fluxflow", "period": "2026-03", "value": 5.5, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "ops.quality_score", "brand_id": "fluxflow", "period": "2026-04", "value": 6.3, "target": 8, "status": "red", "vs_prior": 0.8}, {"metric_id": "ops.quality_score", "brand_id": "fluxflow", "period": "2026-05", "value": 6.5, "target": 8, "status": "red", "vs_prior": 0.2}, {"metric_id": "ops.quality_score", "brand_id": "fluxflow", "period": "2026-06", "value": 7.4, "target": 8, "status": "amber", "vs_prior": 0.9}, {"metric_id": "ops.quality_score", "brand_id": "fluxflow", "period": "2026-07", "value": 8.3, "target": 8, "status": "green", "vs_prior": 0.9}, {"metric_id": "ops.quality_score", "brand_id": "fluxflow", "period": "2026-08", "value": 8.3, "target": 8, "status": "green", "vs_prior": 0.0}, {"metric_id": "ops.quality_score", "brand_id": "divorced", "period": "2026-03", "value": 6.3, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "ops.quality_score", "brand_id": "divorced", "period": "2026-04", "value": 6.1, "target": 8, "status": "red", "vs_prior": -0.2}, {"metric_id": "ops.quality_score", "brand_id": "divorced", "period": "2026-05", "value": 7.2, "target": 8, "status": "amber", "vs_prior": 1.1}, {"metric_id": "ops.quality_score", "brand_id": "divorced", "period": "2026-06", "value": 6.4, "target": 8, "status": "red", "vs_prior": -0.8}, {"metric_id": "ops.quality_score", "brand_id": "divorced", "period": "2026-07", "value": 8.2, "target": 8, "status": "green", "vs_prior": 1.8}, {"metric_id": "ops.quality_score", "brand_id": "divorced", "period": "2026-08", "value": 7.6, "target": 8, "status": "amber", "vs_prior": -0.6}, {"metric_id": "ops.quality_score", "brand_id": "papapasta", "period": "2026-03", "value": 5.5, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "ops.quality_score", "brand_id": "papapasta", "period": "2026-04", "value": 6.3, "target": 8, "status": "red", "vs_prior": 0.8}, {"metric_id": "ops.quality_score", "brand_id": "papapasta", "period": "2026-05", "value": 7.5, "target": 8, "status": "amber", "vs_prior": 1.2}, {"metric_id": "ops.quality_score", "brand_id": "papapasta", "period": "2026-06", "value": 7.4, "target": 8, "status": "amber", "vs_prior": -0.1}, {"metric_id": "ops.quality_score", "brand_id": "papapasta", "period": "2026-07", "value": 8.4, "target": 8, "status": "green", "vs_prior": 1.0}, {"metric_id": "ops.quality_score", "brand_id": "papapasta", "period": "2026-08", "value": 7.6, "target": 8, "status": "amber", "vs_prior": -0.8}, {"metric_id": "ops.quality_score", "brand_id": "acdc", "period": "2026-03", "value": 5.3, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "ops.quality_score", "brand_id": "acdc", "period": "2026-04", "value": 6.3, "target": 8, "status": "red", "vs_prior": 1.0}, {"metric_id": "ops.quality_score", "brand_id": "acdc", "period": "2026-05", "value": 6.5, "target": 8, "status": "red", "vs_prior": 0.2}, {"metric_id": "ops.quality_score", "brand_id": "acdc", "period": "2026-06", "value": 7.4, "target": 8, "status": "amber", "vs_prior": 0.9}, {"metric_id": "ops.quality_score", "brand_id": "acdc", "period": "2026-07", "value": 7.5, "target": 8, "status": "amber", "vs_prior": 0.1}, {"metric_id": "ops.quality_score", "brand_id": "acdc", "period": "2026-08", "value": 8.4, "target": 8, "status": "green", "vs_prior": 0.9}, {"metric_id": "ops.delivery_on_time", "brand_id": "infinity", "period": "2026-03", "value": 77.9, "target": 95, "status": "red", "vs_prior": null}, {"metric_id": "ops.delivery_on_time", "brand_id": "infinity", "period": "2026-04", "value": 70.0, "target": 95, "status": "red", "vs_prior": -7.9}, {"metric_id": "ops.delivery_on_time", "brand_id": "infinity", "period": "2026-05", "value": 78.3, "target": 95, "status": "red", "vs_prior": 8.3}, {"metric_id": "ops.delivery_on_time", "brand_id": "infinity", "period": "2026-06", "value": 77.7, "target": 95, "status": "red", "vs_prior": -0.6}, {"metric_id": "ops.delivery_on_time", "brand_id": "infinity", "period": "2026-07", "value": 82.9, "target": 95, "status": "red", "vs_prior": 5.2}, {"metric_id": "ops.delivery_on_time", "brand_id": "infinity", "period": "2026-08", "value": 98.5, "target": 95, "status": "green", "vs_prior": 15.6}, {"metric_id": "ops.delivery_on_time", "brand_id": "tlf", "period": "2026-03", "value": 64.2, "target": 95, "status": "red", "vs_prior": null}, {"metric_id": "ops.delivery_on_time", "brand_id": "tlf", "period": "2026-04", "value": 80.5, "target": 95, "status": "red", "vs_prior": 16.3}, {"metric_id": "ops.delivery_on_time", "brand_id": "tlf", "period": "2026-05", "value": 88.0, "target": 95, "status": "amber", "vs_prior": 7.5}, {"metric_id": "ops.delivery_on_time", "brand_id": "tlf", "period": "2026-06", "value": 94.8, "target": 95, "status": "amber", "vs_prior": 6.8}, {"metric_id": "ops.delivery_on_time", "brand_id": "tlf", "period": "2026-07", "value": 81.8, "target": 95, "status": "red", "vs_prior": -13.0}, {"metric_id": "ops.delivery_on_time", "brand_id": "tlf", "period": "2026-08", "value": 86.6, "target": 95, "status": "amber", "vs_prior": 4.8}, {"metric_id": "ops.delivery_on_time", "brand_id": "infx", "period": "2026-03", "value": 63.0, "target": 95, "status": "red", "vs_prior": null}, {"metric_id": "ops.delivery_on_time", "brand_id": "infx", "period": "2026-04", "value": 65.1, "target": 95, "status": "red", "vs_prior": 2.1}, {"metric_id": "ops.delivery_on_time", "brand_id": "infx", "period": "2026-05", "value": 82.1, "target": 95, "status": "red", "vs_prior": 17.0}, {"metric_id": "ops.delivery_on_time", "brand_id": "infx", "period": "2026-06", "value": 92.1, "target": 95, "status": "amber", "vs_prior": 10.0}, {"metric_id": "ops.delivery_on_time", "brand_id": "infx", "period": "2026-07", "value": 98.0, "target": 95, "status": "green", "vs_prior": 5.9}, {"metric_id": "ops.delivery_on_time", "brand_id": "infx", "period": "2026-08", "value": 88.4, "target": 95, "status": "amber", "vs_prior": -9.6}, {"metric_id": "ops.delivery_on_time", "brand_id": "fluxflow", "period": "2026-03", "value": 67.4, "target": 95, "status": "red", "vs_prior": null}, {"metric_id": "ops.delivery_on_time", "brand_id": "fluxflow", "period": "2026-04", "value": 71.8, "target": 95, "status": "red", "vs_prior": 4.4}, {"metric_id": "ops.delivery_on_time", "brand_id": "fluxflow", "period": "2026-05", "value": 78.6, "target": 95, "status": "red", "vs_prior": 6.8}, {"metric_id": "ops.delivery_on_time", "brand_id": "fluxflow", "period": "2026-06", "value": 78.3, "target": 95, "status": "red", "vs_prior": -0.3}, {"metric_id": "ops.delivery_on_time", "brand_id": "fluxflow", "period": "2026-07", "value": 90.7, "target": 95, "status": "amber", "vs_prior": 12.4}, {"metric_id": "ops.delivery_on_time", "brand_id": "fluxflow", "period": "2026-08", "value": 101.1, "target": 95, "status": "green", "vs_prior": 10.4}, {"metric_id": "ops.delivery_on_time", "brand_id": "divorced", "period": "2026-03", "value": 73.3, "target": 95, "status": "red", "vs_prior": null}, {"metric_id": "ops.delivery_on_time", "brand_id": "divorced", "period": "2026-04", "value": 65.8, "target": 95, "status": "red", "vs_prior": -7.5}, {"metric_id": "ops.delivery_on_time", "brand_id": "divorced", "period": "2026-05", "value": 88.3, "target": 95, "status": "amber", "vs_prior": 22.5}, {"metric_id": "ops.delivery_on_time", "brand_id": "divorced", "period": "2026-06", "value": 78.3, "target": 95, "status": "red", "vs_prior": -10.0}, {"metric_id": "ops.delivery_on_time", "brand_id": "divorced", "period": "2026-07", "value": 93.4, "target": 95, "status": "amber", "vs_prior": 15.1}, {"metric_id": "ops.delivery_on_time", "brand_id": "divorced", "period": "2026-08", "value": 100.2, "target": 95, "status": "green", "vs_prior": 6.8}, {"metric_id": "ops.delivery_on_time", "brand_id": "papapasta", "period": "2026-03", "value": 60.9, "target": 95, "status": "red", "vs_prior": null}, {"metric_id": "ops.delivery_on_time", "brand_id": "papapasta", "period": "2026-04", "value": 69.4, "target": 95, "status": "red", "vs_prior": 8.5}, {"metric_id": "ops.delivery_on_time", "brand_id": "papapasta", "period": "2026-05", "value": 84.0, "target": 95, "status": "red", "vs_prior": 14.6}, {"metric_id": "ops.delivery_on_time", "brand_id": "papapasta", "period": "2026-06", "value": 88.1, "target": 95, "status": "amber", "vs_prior": 4.1}, {"metric_id": "ops.delivery_on_time", "brand_id": "papapasta", "period": "2026-07", "value": 80.7, "target": 95, "status": "red", "vs_prior": -7.4}, {"metric_id": "ops.delivery_on_time", "brand_id": "papapasta", "period": "2026-08", "value": 90.8, "target": 95, "status": "amber", "vs_prior": 10.1}, {"metric_id": "ops.delivery_on_time", "brand_id": "acdc", "period": "2026-03", "value": 60.8, "target": 95, "status": "red", "vs_prior": null}, {"metric_id": "ops.delivery_on_time", "brand_id": "acdc", "period": "2026-04", "value": 71.4, "target": 95, "status": "red", "vs_prior": 10.6}, {"metric_id": "ops.delivery_on_time", "brand_id": "acdc", "period": "2026-05", "value": 85.7, "target": 95, "status": "amber", "vs_prior": 14.3}, {"metric_id": "ops.delivery_on_time", "brand_id": "acdc", "period": "2026-06", "value": 87.1, "target": 95, "status": "amber", "vs_prior": 1.4}, {"metric_id": "ops.delivery_on_time", "brand_id": "acdc", "period": "2026-07", "value": 79.5, "target": 95, "status": "red", "vs_prior": -7.6}, {"metric_id": "ops.delivery_on_time", "brand_id": "acdc", "period": "2026-08", "value": 98.2, "target": 95, "status": "green", "vs_prior": 18.7}, {"metric_id": "ops.csat", "brand_id": "infinity", "period": "2026-03", "value": 6.2, "target": 8.5, "status": "red", "vs_prior": null}, {"metric_id": "ops.csat", "brand_id": "infinity", "period": "2026-04", "value": 7.4, "target": 8.5, "status": "red", "vs_prior": 1.2}, {"metric_id": "ops.csat", "brand_id": "infinity", "period": "2026-05", "value": 6.0, "target": 8.5, "status": "red", "vs_prior": -1.4}, {"metric_id": "ops.csat", "brand_id": "infinity", "period": "2026-06", "value": 7.6, "target": 8.5, "status": "red", "vs_prior": 1.6}, {"metric_id": "ops.csat", "brand_id": "infinity", "period": "2026-07", "value": 8.6, "target": 8.5, "status": "green", "vs_prior": 1.0}, {"metric_id": "ops.csat", "brand_id": "infinity", "period": "2026-08", "value": 9.1, "target": 8.5, "status": "green", "vs_prior": 0.5}, {"metric_id": "ops.csat", "brand_id": "tlf", "period": "2026-03", "value": 6.7, "target": 8.5, "status": "red", "vs_prior": null}, {"metric_id": "ops.csat", "brand_id": "tlf", "period": "2026-04", "value": 6.9, "target": 8.5, "status": "red", "vs_prior": 0.2}, {"metric_id": "ops.csat", "brand_id": "tlf", "period": "2026-05", "value": 6.1, "target": 8.5, "status": "red", "vs_prior": -0.8}, {"metric_id": "ops.csat", "brand_id": "tlf", "period": "2026-06", "value": 8.2, "target": 8.5, "status": "amber", "vs_prior": 2.1}, {"metric_id": "ops.csat", "brand_id": "tlf", "period": "2026-07", "value": 8.0, "target": 8.5, "status": "amber", "vs_prior": -0.2}, {"metric_id": "ops.csat", "brand_id": "tlf", "period": "2026-08", "value": 9.4, "target": 8.5, "status": "green", "vs_prior": 1.4}, {"metric_id": "ops.csat", "brand_id": "infx", "period": "2026-03", "value": 6.6, "target": 8.5, "status": "red", "vs_prior": null}, {"metric_id": "ops.csat", "brand_id": "infx", "period": "2026-04", "value": 5.6, "target": 8.5, "status": "red", "vs_prior": -1.0}, {"metric_id": "ops.csat", "brand_id": "infx", "period": "2026-05", "value": 7.2, "target": 8.5, "status": "red", "vs_prior": 1.6}, {"metric_id": "ops.csat", "brand_id": "infx", "period": "2026-06", "value": 6.5, "target": 8.5, "status": "red", "vs_prior": -0.7}, {"metric_id": "ops.csat", "brand_id": "infx", "period": "2026-07", "value": 8.7, "target": 8.5, "status": "green", "vs_prior": 2.2}, {"metric_id": "ops.csat", "brand_id": "infx", "period": "2026-08", "value": 8.3, "target": 8.5, "status": "amber", "vs_prior": -0.4}, {"metric_id": "ops.csat", "brand_id": "fluxflow", "period": "2026-03", "value": 5.8, "target": 8.5, "status": "red", "vs_prior": null}, {"metric_id": "ops.csat", "brand_id": "fluxflow", "period": "2026-04", "value": 7.4, "target": 8.5, "status": "red", "vs_prior": 1.6}, {"metric_id": "ops.csat", "brand_id": "fluxflow", "period": "2026-05", "value": 7.5, "target": 8.5, "status": "red", "vs_prior": 0.1}, {"metric_id": "ops.csat", "brand_id": "fluxflow", "period": "2026-06", "value": 6.6, "target": 8.5, "status": "red", "vs_prior": -0.9}, {"metric_id": "ops.csat", "brand_id": "fluxflow", "period": "2026-07", "value": 7.7, "target": 8.5, "status": "amber", "vs_prior": 1.1}, {"metric_id": "ops.csat", "brand_id": "fluxflow", "period": "2026-08", "value": 8.2, "target": 8.5, "status": "amber", "vs_prior": 0.5}, {"metric_id": "ops.csat", "brand_id": "divorced", "period": "2026-03", "value": 6.1, "target": 8.5, "status": "red", "vs_prior": null}, {"metric_id": "ops.csat", "brand_id": "divorced", "period": "2026-04", "value": 7.4, "target": 8.5, "status": "red", "vs_prior": 1.3}, {"metric_id": "ops.csat", "brand_id": "divorced", "period": "2026-05", "value": 6.5, "target": 8.5, "status": "red", "vs_prior": -0.9}, {"metric_id": "ops.csat", "brand_id": "divorced", "period": "2026-06", "value": 8.4, "target": 8.5, "status": "amber", "vs_prior": 1.9}, {"metric_id": "ops.csat", "brand_id": "divorced", "period": "2026-07", "value": 7.9, "target": 8.5, "status": "amber", "vs_prior": -0.5}, {"metric_id": "ops.csat", "brand_id": "divorced", "period": "2026-08", "value": 9.3, "target": 8.5, "status": "green", "vs_prior": 1.4}, {"metric_id": "ops.csat", "brand_id": "papapasta", "period": "2026-03", "value": 6.1, "target": 8.5, "status": "red", "vs_prior": null}, {"metric_id": "ops.csat", "brand_id": "papapasta", "period": "2026-04", "value": 5.6, "target": 8.5, "status": "red", "vs_prior": -0.5}, {"metric_id": "ops.csat", "brand_id": "papapasta", "period": "2026-05", "value": 6.7, "target": 8.5, "status": "red", "vs_prior": 1.1}, {"metric_id": "ops.csat", "brand_id": "papapasta", "period": "2026-06", "value": 7.6, "target": 8.5, "status": "red", "vs_prior": 0.9}, {"metric_id": "ops.csat", "brand_id": "papapasta", "period": "2026-07", "value": 8.3, "target": 8.5, "status": "amber", "vs_prior": 0.7}, {"metric_id": "ops.csat", "brand_id": "papapasta", "period": "2026-08", "value": 8.1, "target": 8.5, "status": "amber", "vs_prior": -0.2}, {"metric_id": "ops.csat", "brand_id": "acdc", "period": "2026-03", "value": 6.5, "target": 8.5, "status": "red", "vs_prior": null}, {"metric_id": "ops.csat", "brand_id": "acdc", "period": "2026-04", "value": 6.9, "target": 8.5, "status": "red", "vs_prior": 0.4}, {"metric_id": "ops.csat", "brand_id": "acdc", "period": "2026-05", "value": 6.6, "target": 8.5, "status": "red", "vs_prior": -0.3}, {"metric_id": "ops.csat", "brand_id": "acdc", "period": "2026-06", "value": 8.3, "target": 8.5, "status": "amber", "vs_prior": 1.7}, {"metric_id": "ops.csat", "brand_id": "acdc", "period": "2026-07", "value": 7.4, "target": 8.5, "status": "red", "vs_prior": -0.9}, {"metric_id": "ops.csat", "brand_id": "acdc", "period": "2026-08", "value": 8.6, "target": 8.5, "status": "green", "vs_prior": 1.2}, {"metric_id": "ops.unit_margin", "brand_id": "infinity", "period": "2026-03", "value": 718000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.unit_margin", "brand_id": "infinity", "period": "2026-04", "value": 352000, "target": null, "status": "no_data", "vs_prior": -366000}, {"metric_id": "ops.unit_margin", "brand_id": "infinity", "period": "2026-05", "value": 726000, "target": null, "status": "no_data", "vs_prior": 374000}, {"metric_id": "ops.unit_margin", "brand_id": "infinity", "period": "2026-06", "value": 327000, "target": null, "status": "no_data", "vs_prior": -399000}, {"metric_id": "ops.unit_margin", "brand_id": "infinity", "period": "2026-07", "value": 430000, "target": null, "status": "no_data", "vs_prior": 103000}, {"metric_id": "ops.unit_margin", "brand_id": "infinity", "period": "2026-08", "value": 850000, "target": null, "status": "no_data", "vs_prior": 420000}, {"metric_id": "ops.unit_margin", "brand_id": "tlf", "period": "2026-03", "value": 362000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.unit_margin", "brand_id": "tlf", "period": "2026-04", "value": 558000, "target": null, "status": "no_data", "vs_prior": 196000}, {"metric_id": "ops.unit_margin", "brand_id": "tlf", "period": "2026-05", "value": 851000, "target": null, "status": "no_data", "vs_prior": 293000}, {"metric_id": "ops.unit_margin", "brand_id": "tlf", "period": "2026-06", "value": 241000, "target": null, "status": "no_data", "vs_prior": -610000}, {"metric_id": "ops.unit_margin", "brand_id": "tlf", "period": "2026-07", "value": 697000, "target": null, "status": "no_data", "vs_prior": 456000}, {"metric_id": "ops.unit_margin", "brand_id": "tlf", "period": "2026-08", "value": 373000, "target": null, "status": "no_data", "vs_prior": -324000}, {"metric_id": "ops.unit_margin", "brand_id": "infx", "period": "2026-03", "value": 272000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.unit_margin", "brand_id": "infx", "period": "2026-04", "value": 362000, "target": null, "status": "no_data", "vs_prior": 90000}, {"metric_id": "ops.unit_margin", "brand_id": "infx", "period": "2026-05", "value": 473000, "target": null, "status": "no_data", "vs_prior": 111000}, {"metric_id": "ops.unit_margin", "brand_id": "infx", "period": "2026-06", "value": 191000, "target": null, "status": "no_data", "vs_prior": -282000}, {"metric_id": "ops.unit_margin", "brand_id": "infx", "period": "2026-07", "value": 524000, "target": null, "status": "no_data", "vs_prior": 333000}, {"metric_id": "ops.unit_margin", "brand_id": "infx", "period": "2026-08", "value": 541000, "target": null, "status": "no_data", "vs_prior": 17000}, {"metric_id": "ops.unit_margin", "brand_id": "fluxflow", "period": "2026-03", "value": 693000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.unit_margin", "brand_id": "fluxflow", "period": "2026-04", "value": 806000, "target": null, "status": "no_data", "vs_prior": 113000}, {"metric_id": "ops.unit_margin", "brand_id": "fluxflow", "period": "2026-05", "value": 137000, "target": null, "status": "no_data", "vs_prior": -669000}, {"metric_id": "ops.unit_margin", "brand_id": "fluxflow", "period": "2026-06", "value": 421000, "target": null, "status": "no_data", "vs_prior": 284000}, {"metric_id": "ops.unit_margin", "brand_id": "fluxflow", "period": "2026-07", "value": 228000, "target": null, "status": "no_data", "vs_prior": -193000}, {"metric_id": "ops.unit_margin", "brand_id": "fluxflow", "period": "2026-08", "value": 533000, "target": null, "status": "no_data", "vs_prior": 305000}, {"metric_id": "ops.unit_margin", "brand_id": "divorced", "period": "2026-03", "value": 207000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.unit_margin", "brand_id": "divorced", "period": "2026-04", "value": 898000, "target": null, "status": "no_data", "vs_prior": 691000}, {"metric_id": "ops.unit_margin", "brand_id": "divorced", "period": "2026-05", "value": 340000, "target": null, "status": "no_data", "vs_prior": -558000}, {"metric_id": "ops.unit_margin", "brand_id": "divorced", "period": "2026-06", "value": 733000, "target": null, "status": "no_data", "vs_prior": 393000}, {"metric_id": "ops.unit_margin", "brand_id": "divorced", "period": "2026-07", "value": 373000, "target": null, "status": "no_data", "vs_prior": -360000}, {"metric_id": "ops.unit_margin", "brand_id": "divorced", "period": "2026-08", "value": 546000, "target": null, "status": "no_data", "vs_prior": 173000}, {"metric_id": "ops.unit_margin", "brand_id": "papapasta", "period": "2026-03", "value": 244000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.unit_margin", "brand_id": "papapasta", "period": "2026-04", "value": 669000, "target": null, "status": "no_data", "vs_prior": 425000}, {"metric_id": "ops.unit_margin", "brand_id": "papapasta", "period": "2026-05", "value": 217000, "target": null, "status": "no_data", "vs_prior": -452000}, {"metric_id": "ops.unit_margin", "brand_id": "papapasta", "period": "2026-06", "value": 770000, "target": null, "status": "no_data", "vs_prior": 553000}, {"metric_id": "ops.unit_margin", "brand_id": "papapasta", "period": "2026-07", "value": 288000, "target": null, "status": "no_data", "vs_prior": -482000}, {"metric_id": "ops.unit_margin", "brand_id": "papapasta", "period": "2026-08", "value": 667000, "target": null, "status": "no_data", "vs_prior": 379000}, {"metric_id": "ops.unit_margin", "brand_id": "acdc", "period": "2026-03", "value": 151000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "ops.unit_margin", "brand_id": "acdc", "period": "2026-04", "value": 526000, "target": null, "status": "no_data", "vs_prior": 375000}, {"metric_id": "ops.unit_margin", "brand_id": "acdc", "period": "2026-05", "value": 765000, "target": null, "status": "no_data", "vs_prior": 239000}, {"metric_id": "ops.unit_margin", "brand_id": "acdc", "period": "2026-06", "value": 233000, "target": null, "status": "no_data", "vs_prior": -532000}, {"metric_id": "ops.unit_margin", "brand_id": "acdc", "period": "2026-07", "value": 698000, "target": null, "status": "no_data", "vs_prior": 465000}, {"metric_id": "ops.unit_margin", "brand_id": "acdc", "period": "2026-08", "value": 462000, "target": null, "status": "no_data", "vs_prior": -236000}, {"metric_id": "ops.sop_compliance", "brand_id": "infinity", "period": "2026-03", "value": 58.0, "target": 90, "status": "red", "vs_prior": null}, {"metric_id": "ops.sop_compliance", "brand_id": "infinity", "period": "2026-04", "value": 63.9, "target": 90, "status": "red", "vs_prior": 5.9}, {"metric_id": "ops.sop_compliance", "brand_id": "infinity", "period": "2026-05", "value": 80.2, "target": 90, "status": "red", "vs_prior": 16.3}, {"metric_id": "ops.sop_compliance", "brand_id": "infinity", "period": "2026-06", "value": 73.6, "target": 90, "status": "red", "vs_prior": -6.6}, {"metric_id": "ops.sop_compliance", "brand_id": "infinity", "period": "2026-07", "value": 86.6, "target": 90, "status": "amber", "vs_prior": 13.0}, {"metric_id": "ops.sop_compliance", "brand_id": "infinity", "period": "2026-08", "value": 97.3, "target": 90, "status": "green", "vs_prior": 10.7}, {"metric_id": "ops.sop_compliance", "brand_id": "tlf", "period": "2026-03", "value": 66.9, "target": 90, "status": "red", "vs_prior": null}, {"metric_id": "ops.sop_compliance", "brand_id": "tlf", "period": "2026-04", "value": 65.6, "target": 90, "status": "red", "vs_prior": -1.3}, {"metric_id": "ops.sop_compliance", "brand_id": "tlf", "period": "2026-05", "value": 84.3, "target": 90, "status": "amber", "vs_prior": 18.7}, {"metric_id": "ops.sop_compliance", "brand_id": "tlf", "period": "2026-06", "value": 80.3, "target": 90, "status": "red", "vs_prior": -4.0}, {"metric_id": "ops.sop_compliance", "brand_id": "tlf", "period": "2026-07", "value": 85.8, "target": 90, "status": "amber", "vs_prior": 5.5}, {"metric_id": "ops.sop_compliance", "brand_id": "tlf", "period": "2026-08", "value": 82.6, "target": 90, "status": "amber", "vs_prior": -3.2}, {"metric_id": "ops.sop_compliance", "brand_id": "infx", "period": "2026-03", "value": 62.4, "target": 90, "status": "red", "vs_prior": null}, {"metric_id": "ops.sop_compliance", "brand_id": "infx", "period": "2026-04", "value": 62.5, "target": 90, "status": "red", "vs_prior": 0.1}, {"metric_id": "ops.sop_compliance", "brand_id": "infx", "period": "2026-05", "value": 79.3, "target": 90, "status": "red", "vs_prior": 16.8}, {"metric_id": "ops.sop_compliance", "brand_id": "infx", "period": "2026-06", "value": 73.6, "target": 90, "status": "red", "vs_prior": -5.7}, {"metric_id": "ops.sop_compliance", "brand_id": "infx", "period": "2026-07", "value": 84.8, "target": 90, "status": "amber", "vs_prior": 11.2}, {"metric_id": "ops.sop_compliance", "brand_id": "infx", "period": "2026-08", "value": 100.7, "target": 90, "status": "green", "vs_prior": 15.9}, {"metric_id": "ops.sop_compliance", "brand_id": "fluxflow", "period": "2026-03", "value": 65.3, "target": 90, "status": "red", "vs_prior": null}, {"metric_id": "ops.sop_compliance", "brand_id": "fluxflow", "period": "2026-04", "value": 58.8, "target": 90, "status": "red", "vs_prior": -6.5}, {"metric_id": "ops.sop_compliance", "brand_id": "fluxflow", "period": "2026-05", "value": 65.0, "target": 90, "status": "red", "vs_prior": 6.2}, {"metric_id": "ops.sop_compliance", "brand_id": "fluxflow", "period": "2026-06", "value": 73.3, "target": 90, "status": "red", "vs_prior": 8.3}, {"metric_id": "ops.sop_compliance", "brand_id": "fluxflow", "period": "2026-07", "value": 94.5, "target": 90, "status": "green", "vs_prior": 21.2}, {"metric_id": "ops.sop_compliance", "brand_id": "fluxflow", "period": "2026-08", "value": 89.4, "target": 90, "status": "amber", "vs_prior": -5.1}, {"metric_id": "ops.sop_compliance", "brand_id": "divorced", "period": "2026-03", "value": 60.6, "target": 90, "status": "red", "vs_prior": null}, {"metric_id": "ops.sop_compliance", "brand_id": "divorced", "period": "2026-04", "value": 73.6, "target": 90, "status": "red", "vs_prior": 13.0}, {"metric_id": "ops.sop_compliance", "brand_id": "divorced", "period": "2026-05", "value": 69.7, "target": 90, "status": "red", "vs_prior": -3.9}, {"metric_id": "ops.sop_compliance", "brand_id": "divorced", "period": "2026-06", "value": 87.8, "target": 90, "status": "amber", "vs_prior": 18.1}, {"metric_id": "ops.sop_compliance", "brand_id": "divorced", "period": "2026-07", "value": 78.4, "target": 90, "status": "red", "vs_prior": -9.4}, {"metric_id": "ops.sop_compliance", "brand_id": "divorced", "period": "2026-08", "value": 97.7, "target": 90, "status": "green", "vs_prior": 19.3}, {"metric_id": "ops.sop_compliance", "brand_id": "papapasta", "period": "2026-03", "value": 56.6, "target": 90, "status": "red", "vs_prior": null}, {"metric_id": "ops.sop_compliance", "brand_id": "papapasta", "period": "2026-04", "value": 59.8, "target": 90, "status": "red", "vs_prior": 3.2}, {"metric_id": "ops.sop_compliance", "brand_id": "papapasta", "period": "2026-05", "value": 73.6, "target": 90, "status": "red", "vs_prior": 13.8}, {"metric_id": "ops.sop_compliance", "brand_id": "papapasta", "period": "2026-06", "value": 78.0, "target": 90, "status": "red", "vs_prior": 4.4}, {"metric_id": "ops.sop_compliance", "brand_id": "papapasta", "period": "2026-07", "value": 77.0, "target": 90, "status": "red", "vs_prior": -1.0}, {"metric_id": "ops.sop_compliance", "brand_id": "papapasta", "period": "2026-08", "value": 80.8, "target": 90, "status": "red", "vs_prior": 3.8}, {"metric_id": "ops.sop_compliance", "brand_id": "acdc", "period": "2026-03", "value": 64.1, "target": 90, "status": "red", "vs_prior": null}, {"metric_id": "ops.sop_compliance", "brand_id": "acdc", "period": "2026-04", "value": 71.7, "target": 90, "status": "red", "vs_prior": 7.6}, {"metric_id": "ops.sop_compliance", "brand_id": "acdc", "period": "2026-05", "value": 74.8, "target": 90, "status": "red", "vs_prior": 3.1}, {"metric_id": "ops.sop_compliance", "brand_id": "acdc", "period": "2026-06", "value": 82.3, "target": 90, "status": "amber", "vs_prior": 7.5}, {"metric_id": "ops.sop_compliance", "brand_id": "acdc", "period": "2026-07", "value": 85.7, "target": 90, "status": "amber", "vs_prior": 3.4}, {"metric_id": "ops.sop_compliance", "brand_id": "acdc", "period": "2026-08", "value": 87.6, "target": 90, "status": "amber", "vs_prior": 1.9}, {"metric_id": "founder.buyback_rate", "brand_id": "infinity", "period": "2026-03", "value": 586.3, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.buyback_rate", "brand_id": "infinity", "period": "2026-04", "value": 313.5, "target": null, "status": "no_data", "vs_prior": -272.8}, {"metric_id": "founder.buyback_rate", "brand_id": "infinity", "period": "2026-05", "value": 283.7, "target": null, "status": "no_data", "vs_prior": -29.8}, {"metric_id": "founder.buyback_rate", "brand_id": "infinity", "period": "2026-06", "value": 468.7, "target": null, "status": "no_data", "vs_prior": 185.0}, {"metric_id": "founder.buyback_rate", "brand_id": "infinity", "period": "2026-07", "value": 240.1, "target": null, "status": "no_data", "vs_prior": -228.6}, {"metric_id": "founder.buyback_rate", "brand_id": "infinity", "period": "2026-08", "value": 184.0, "target": null, "status": "no_data", "vs_prior": -56.1}, {"metric_id": "founder.buyback_rate", "brand_id": "tlf", "period": "2026-03", "value": 459.1, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.buyback_rate", "brand_id": "tlf", "period": "2026-04", "value": 555.2, "target": null, "status": "no_data", "vs_prior": 96.1}, {"metric_id": "founder.buyback_rate", "brand_id": "tlf", "period": "2026-05", "value": 368.9, "target": null, "status": "no_data", "vs_prior": -186.3}, {"metric_id": "founder.buyback_rate", "brand_id": "tlf", "period": "2026-06", "value": 176.4, "target": null, "status": "no_data", "vs_prior": -192.5}, {"metric_id": "founder.buyback_rate", "brand_id": "tlf", "period": "2026-07", "value": 513.6, "target": null, "status": "no_data", "vs_prior": 337.2}, {"metric_id": "founder.buyback_rate", "brand_id": "tlf", "period": "2026-08", "value": 242.9, "target": null, "status": "no_data", "vs_prior": -270.7}, {"metric_id": "founder.buyback_rate", "brand_id": "infx", "period": "2026-03", "value": 476.6, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.buyback_rate", "brand_id": "infx", "period": "2026-04", "value": 503.6, "target": null, "status": "no_data", "vs_prior": 27.0}, {"metric_id": "founder.buyback_rate", "brand_id": "infx", "period": "2026-05", "value": 292.5, "target": null, "status": "no_data", "vs_prior": -211.1}, {"metric_id": "founder.buyback_rate", "brand_id": "infx", "period": "2026-06", "value": 405.0, "target": null, "status": "no_data", "vs_prior": 112.5}, {"metric_id": "founder.buyback_rate", "brand_id": "infx", "period": "2026-07", "value": 590.5, "target": null, "status": "no_data", "vs_prior": 185.5}, {"metric_id": "founder.buyback_rate", "brand_id": "infx", "period": "2026-08", "value": 502.0, "target": null, "status": "no_data", "vs_prior": -88.5}, {"metric_id": "founder.buyback_rate", "brand_id": "fluxflow", "period": "2026-03", "value": 471.2, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.buyback_rate", "brand_id": "fluxflow", "period": "2026-04", "value": 514.9, "target": null, "status": "no_data", "vs_prior": 43.7}, {"metric_id": "founder.buyback_rate", "brand_id": "fluxflow", "period": "2026-05", "value": 269.8, "target": null, "status": "no_data", "vs_prior": -245.1}, {"metric_id": "founder.buyback_rate", "brand_id": "fluxflow", "period": "2026-06", "value": 499.9, "target": null, "status": "no_data", "vs_prior": 230.1}, {"metric_id": "founder.buyback_rate", "brand_id": "fluxflow", "period": "2026-07", "value": 545.0, "target": null, "status": "no_data", "vs_prior": 45.1}, {"metric_id": "founder.buyback_rate", "brand_id": "fluxflow", "period": "2026-08", "value": 184.3, "target": null, "status": "no_data", "vs_prior": -360.7}, {"metric_id": "founder.buyback_rate", "brand_id": "divorced", "period": "2026-03", "value": 547.0, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.buyback_rate", "brand_id": "divorced", "period": "2026-04", "value": 334.8, "target": null, "status": "no_data", "vs_prior": -212.2}, {"metric_id": "founder.buyback_rate", "brand_id": "divorced", "period": "2026-05", "value": 284.8, "target": null, "status": "no_data", "vs_prior": -50.0}, {"metric_id": "founder.buyback_rate", "brand_id": "divorced", "period": "2026-06", "value": 156.8, "target": null, "status": "no_data", "vs_prior": -128.0}, {"metric_id": "founder.buyback_rate", "brand_id": "divorced", "period": "2026-07", "value": 446.7, "target": null, "status": "no_data", "vs_prior": 289.9}, {"metric_id": "founder.buyback_rate", "brand_id": "divorced", "period": "2026-08", "value": 548.2, "target": null, "status": "no_data", "vs_prior": 101.5}, {"metric_id": "founder.buyback_rate", "brand_id": "papapasta", "period": "2026-03", "value": 555.6, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.buyback_rate", "brand_id": "papapasta", "period": "2026-04", "value": 463.8, "target": null, "status": "no_data", "vs_prior": -91.8}, {"metric_id": "founder.buyback_rate", "brand_id": "papapasta", "period": "2026-05", "value": 597.1, "target": null, "status": "no_data", "vs_prior": 133.3}, {"metric_id": "founder.buyback_rate", "brand_id": "papapasta", "period": "2026-06", "value": 171.7, "target": null, "status": "no_data", "vs_prior": -425.4}, {"metric_id": "founder.buyback_rate", "brand_id": "papapasta", "period": "2026-07", "value": 262.1, "target": null, "status": "no_data", "vs_prior": 90.4}, {"metric_id": "founder.buyback_rate", "brand_id": "papapasta", "period": "2026-08", "value": 454.9, "target": null, "status": "no_data", "vs_prior": 192.8}, {"metric_id": "founder.buyback_rate", "brand_id": "acdc", "period": "2026-03", "value": 456.2, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.buyback_rate", "brand_id": "acdc", "period": "2026-04", "value": 279.0, "target": null, "status": "no_data", "vs_prior": -177.2}, {"metric_id": "founder.buyback_rate", "brand_id": "acdc", "period": "2026-05", "value": 521.2, "target": null, "status": "no_data", "vs_prior": 242.2}, {"metric_id": "founder.buyback_rate", "brand_id": "acdc", "period": "2026-06", "value": 483.5, "target": null, "status": "no_data", "vs_prior": -37.7}, {"metric_id": "founder.buyback_rate", "brand_id": "acdc", "period": "2026-07", "value": 210.3, "target": null, "status": "no_data", "vs_prior": -273.2}, {"metric_id": "founder.buyback_rate", "brand_id": "acdc", "period": "2026-08", "value": 296.4, "target": null, "status": "no_data", "vs_prior": 86.1}, {"metric_id": "founder.production_pct", "brand_id": "infinity", "period": "2026-03", "value": 35.0, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "founder.production_pct", "brand_id": "infinity", "period": "2026-04", "value": 37.5, "target": 50, "status": "red", "vs_prior": 2.5}, {"metric_id": "founder.production_pct", "brand_id": "infinity", "period": "2026-05", "value": 35.7, "target": 50, "status": "red", "vs_prior": -1.8}, {"metric_id": "founder.production_pct", "brand_id": "infinity", "period": "2026-06", "value": 41.5, "target": 50, "status": "red", "vs_prior": 5.8}, {"metric_id": "founder.production_pct", "brand_id": "infinity", "period": "2026-07", "value": 46.5, "target": 50, "status": "amber", "vs_prior": 5.0}, {"metric_id": "founder.production_pct", "brand_id": "infinity", "period": "2026-08", "value": 48.8, "target": 50, "status": "amber", "vs_prior": 2.3}, {"metric_id": "founder.production_pct", "brand_id": "tlf", "period": "2026-03", "value": 37.9, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "founder.production_pct", "brand_id": "tlf", "period": "2026-04", "value": 32.3, "target": 50, "status": "red", "vs_prior": -5.6}, {"metric_id": "founder.production_pct", "brand_id": "tlf", "period": "2026-05", "value": 36.1, "target": 50, "status": "red", "vs_prior": 3.8}, {"metric_id": "founder.production_pct", "brand_id": "tlf", "period": "2026-06", "value": 47.5, "target": 50, "status": "amber", "vs_prior": 11.4}, {"metric_id": "founder.production_pct", "brand_id": "tlf", "period": "2026-07", "value": 44.1, "target": 50, "status": "red", "vs_prior": -3.4}, {"metric_id": "founder.production_pct", "brand_id": "tlf", "period": "2026-08", "value": 52.7, "target": 50, "status": "green", "vs_prior": 8.6}, {"metric_id": "founder.production_pct", "brand_id": "infx", "period": "2026-03", "value": 39.2, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "founder.production_pct", "brand_id": "infx", "period": "2026-04", "value": 40.2, "target": 50, "status": "red", "vs_prior": 1.0}, {"metric_id": "founder.production_pct", "brand_id": "infx", "period": "2026-05", "value": 37.7, "target": 50, "status": "red", "vs_prior": -2.5}, {"metric_id": "founder.production_pct", "brand_id": "infx", "period": "2026-06", "value": 46.4, "target": 50, "status": "amber", "vs_prior": 8.7}, {"metric_id": "founder.production_pct", "brand_id": "infx", "period": "2026-07", "value": 43.4, "target": 50, "status": "red", "vs_prior": -3.0}, {"metric_id": "founder.production_pct", "brand_id": "infx", "period": "2026-08", "value": 55.7, "target": 50, "status": "green", "vs_prior": 12.3}, {"metric_id": "founder.production_pct", "brand_id": "fluxflow", "period": "2026-03", "value": 39.0, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "founder.production_pct", "brand_id": "fluxflow", "period": "2026-04", "value": 35.2, "target": 50, "status": "red", "vs_prior": -3.8}, {"metric_id": "founder.production_pct", "brand_id": "fluxflow", "period": "2026-05", "value": 35.5, "target": 50, "status": "red", "vs_prior": 0.3}, {"metric_id": "founder.production_pct", "brand_id": "fluxflow", "period": "2026-06", "value": 40.8, "target": 50, "status": "red", "vs_prior": 5.3}, {"metric_id": "founder.production_pct", "brand_id": "fluxflow", "period": "2026-07", "value": 51.7, "target": 50, "status": "green", "vs_prior": 10.9}, {"metric_id": "founder.production_pct", "brand_id": "fluxflow", "period": "2026-08", "value": 48.6, "target": 50, "status": "amber", "vs_prior": -3.1}, {"metric_id": "founder.production_pct", "brand_id": "divorced", "period": "2026-03", "value": 38.0, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "founder.production_pct", "brand_id": "divorced", "period": "2026-04", "value": 35.5, "target": 50, "status": "red", "vs_prior": -2.5}, {"metric_id": "founder.production_pct", "brand_id": "divorced", "period": "2026-05", "value": 45.5, "target": 50, "status": "amber", "vs_prior": 10.0}, {"metric_id": "founder.production_pct", "brand_id": "divorced", "period": "2026-06", "value": 49.4, "target": 50, "status": "amber", "vs_prior": 3.9}, {"metric_id": "founder.production_pct", "brand_id": "divorced", "period": "2026-07", "value": 46.9, "target": 50, "status": "amber", "vs_prior": -2.5}, {"metric_id": "founder.production_pct", "brand_id": "divorced", "period": "2026-08", "value": 47.3, "target": 50, "status": "amber", "vs_prior": 0.4}, {"metric_id": "founder.production_pct", "brand_id": "papapasta", "period": "2026-03", "value": 30.9, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "founder.production_pct", "brand_id": "papapasta", "period": "2026-04", "value": 43.5, "target": 50, "status": "red", "vs_prior": 12.6}, {"metric_id": "founder.production_pct", "brand_id": "papapasta", "period": "2026-05", "value": 40.8, "target": 50, "status": "red", "vs_prior": -2.7}, {"metric_id": "founder.production_pct", "brand_id": "papapasta", "period": "2026-06", "value": 42.1, "target": 50, "status": "red", "vs_prior": 1.3}, {"metric_id": "founder.production_pct", "brand_id": "papapasta", "period": "2026-07", "value": 45.1, "target": 50, "status": "amber", "vs_prior": 3.0}, {"metric_id": "founder.production_pct", "brand_id": "papapasta", "period": "2026-08", "value": 55.9, "target": 50, "status": "green", "vs_prior": 10.8}, {"metric_id": "founder.production_pct", "brand_id": "acdc", "period": "2026-03", "value": 31.7, "target": 50, "status": "red", "vs_prior": null}, {"metric_id": "founder.production_pct", "brand_id": "acdc", "period": "2026-04", "value": 33.8, "target": 50, "status": "red", "vs_prior": 2.1}, {"metric_id": "founder.production_pct", "brand_id": "acdc", "period": "2026-05", "value": 43.2, "target": 50, "status": "red", "vs_prior": 9.4}, {"metric_id": "founder.production_pct", "brand_id": "acdc", "period": "2026-06", "value": 39.2, "target": 50, "status": "red", "vs_prior": -4.0}, {"metric_id": "founder.production_pct", "brand_id": "acdc", "period": "2026-07", "value": 42.1, "target": 50, "status": "red", "vs_prior": 2.9}, {"metric_id": "founder.production_pct", "brand_id": "acdc", "period": "2026-08", "value": 52.6, "target": 50, "status": "green", "vs_prior": 10.5}, {"metric_id": "founder.delegation_ratio", "brand_id": "infinity", "period": "2026-03", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": null}, {"metric_id": "founder.delegation_ratio", "brand_id": "infinity", "period": "2026-04", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "infinity", "period": "2026-05", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "infinity", "period": "2026-06", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "infinity", "period": "2026-07", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "infinity", "period": "2026-08", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "tlf", "period": "2026-03", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": null}, {"metric_id": "founder.delegation_ratio", "brand_id": "tlf", "period": "2026-04", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "tlf", "period": "2026-05", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "tlf", "period": "2026-06", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "tlf", "period": "2026-07", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "tlf", "period": "2026-08", "value": 0.6, "target": 0.5, "status": "green", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "infx", "period": "2026-03", "value": 0.3, "target": 0.5, "status": "red", "vs_prior": null}, {"metric_id": "founder.delegation_ratio", "brand_id": "infx", "period": "2026-04", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "infx", "period": "2026-05", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "infx", "period": "2026-06", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "infx", "period": "2026-07", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "infx", "period": "2026-08", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "fluxflow", "period": "2026-03", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": null}, {"metric_id": "founder.delegation_ratio", "brand_id": "fluxflow", "period": "2026-04", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "fluxflow", "period": "2026-05", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "fluxflow", "period": "2026-06", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": -0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "fluxflow", "period": "2026-07", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "fluxflow", "period": "2026-08", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": -0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "divorced", "period": "2026-03", "value": 0.3, "target": 0.5, "status": "red", "vs_prior": null}, {"metric_id": "founder.delegation_ratio", "brand_id": "divorced", "period": "2026-04", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "divorced", "period": "2026-05", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "divorced", "period": "2026-06", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "divorced", "period": "2026-07", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "divorced", "period": "2026-08", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "papapasta", "period": "2026-03", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": null}, {"metric_id": "founder.delegation_ratio", "brand_id": "papapasta", "period": "2026-04", "value": 0.3, "target": 0.5, "status": "red", "vs_prior": -0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "papapasta", "period": "2026-05", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "papapasta", "period": "2026-06", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "papapasta", "period": "2026-07", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "papapasta", "period": "2026-08", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "acdc", "period": "2026-03", "value": 0.3, "target": 0.5, "status": "red", "vs_prior": null}, {"metric_id": "founder.delegation_ratio", "brand_id": "acdc", "period": "2026-04", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "acdc", "period": "2026-05", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "acdc", "period": "2026-06", "value": 0.4, "target": 0.5, "status": "red", "vs_prior": 0.0}, {"metric_id": "founder.delegation_ratio", "brand_id": "acdc", "period": "2026-07", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.1}, {"metric_id": "founder.delegation_ratio", "brand_id": "acdc", "period": "2026-08", "value": 0.5, "target": 0.5, "status": "green", "vs_prior": 0.0}, {"metric_id": "founder.escalations", "brand_id": "infinity", "period": "2026-03", "value": 4, "target": 5, "status": "green", "vs_prior": null}, {"metric_id": "founder.escalations", "brand_id": "infinity", "period": "2026-04", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "infinity", "period": "2026-05", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "infinity", "period": "2026-06", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "infinity", "period": "2026-07", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "infinity", "period": "2026-08", "value": 6, "target": 5, "status": "red", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "tlf", "period": "2026-03", "value": 4, "target": 5, "status": "green", "vs_prior": null}, {"metric_id": "founder.escalations", "brand_id": "tlf", "period": "2026-04", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "tlf", "period": "2026-05", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "tlf", "period": "2026-06", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "tlf", "period": "2026-07", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "tlf", "period": "2026-08", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "infx", "period": "2026-03", "value": 3, "target": 5, "status": "green", "vs_prior": null}, {"metric_id": "founder.escalations", "brand_id": "infx", "period": "2026-04", "value": 4, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "infx", "period": "2026-05", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "infx", "period": "2026-06", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "infx", "period": "2026-07", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "infx", "period": "2026-08", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "fluxflow", "period": "2026-03", "value": 3, "target": 5, "status": "green", "vs_prior": null}, {"metric_id": "founder.escalations", "brand_id": "fluxflow", "period": "2026-04", "value": 4, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "fluxflow", "period": "2026-05", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "fluxflow", "period": "2026-06", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "fluxflow", "period": "2026-07", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "fluxflow", "period": "2026-08", "value": 6, "target": 5, "status": "red", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "divorced", "period": "2026-03", "value": 3, "target": 5, "status": "green", "vs_prior": null}, {"metric_id": "founder.escalations", "brand_id": "divorced", "period": "2026-04", "value": 3, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "divorced", "period": "2026-05", "value": 4, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "divorced", "period": "2026-06", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "divorced", "period": "2026-07", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "divorced", "period": "2026-08", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "papapasta", "period": "2026-03", "value": 4, "target": 5, "status": "green", "vs_prior": null}, {"metric_id": "founder.escalations", "brand_id": "papapasta", "period": "2026-04", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "papapasta", "period": "2026-05", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "papapasta", "period": "2026-06", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "papapasta", "period": "2026-07", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "papapasta", "period": "2026-08", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "acdc", "period": "2026-03", "value": 3, "target": 5, "status": "green", "vs_prior": null}, {"metric_id": "founder.escalations", "brand_id": "acdc", "period": "2026-04", "value": 4, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "acdc", "period": "2026-05", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "acdc", "period": "2026-06", "value": 4, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.escalations", "brand_id": "acdc", "period": "2026-07", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.escalations", "brand_id": "acdc", "period": "2026-08", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "infinity", "period": "2026-03", "value": 4, "target": 5, "status": "red", "vs_prior": null}, {"metric_id": "founder.eliminated_tasks", "brand_id": "infinity", "period": "2026-04", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "infinity", "period": "2026-05", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "infinity", "period": "2026-06", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.eliminated_tasks", "brand_id": "infinity", "period": "2026-07", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "infinity", "period": "2026-08", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "tlf", "period": "2026-03", "value": 4, "target": 5, "status": "red", "vs_prior": null}, {"metric_id": "founder.eliminated_tasks", "brand_id": "tlf", "period": "2026-04", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "tlf", "period": "2026-05", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "tlf", "period": "2026-06", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "tlf", "period": "2026-07", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.eliminated_tasks", "brand_id": "tlf", "period": "2026-08", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "infx", "period": "2026-03", "value": 4, "target": 5, "status": "red", "vs_prior": null}, {"metric_id": "founder.eliminated_tasks", "brand_id": "infx", "period": "2026-04", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "infx", "period": "2026-05", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "infx", "period": "2026-06", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "infx", "period": "2026-07", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.eliminated_tasks", "brand_id": "infx", "period": "2026-08", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "fluxflow", "period": "2026-03", "value": 4, "target": 5, "status": "red", "vs_prior": null}, {"metric_id": "founder.eliminated_tasks", "brand_id": "fluxflow", "period": "2026-04", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "fluxflow", "period": "2026-05", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.eliminated_tasks", "brand_id": "fluxflow", "period": "2026-06", "value": 4, "target": 5, "status": "red", "vs_prior": -1}, {"metric_id": "founder.eliminated_tasks", "brand_id": "fluxflow", "period": "2026-07", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "fluxflow", "period": "2026-08", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.eliminated_tasks", "brand_id": "divorced", "period": "2026-03", "value": 3, "target": 5, "status": "red", "vs_prior": null}, {"metric_id": "founder.eliminated_tasks", "brand_id": "divorced", "period": "2026-04", "value": 4, "target": 5, "status": "red", "vs_prior": 1}, {"metric_id": "founder.eliminated_tasks", "brand_id": "divorced", "period": "2026-05", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "divorced", "period": "2026-06", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.eliminated_tasks", "brand_id": "divorced", "period": "2026-07", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "divorced", "period": "2026-08", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "papapasta", "period": "2026-03", "value": 4, "target": 5, "status": "red", "vs_prior": null}, {"metric_id": "founder.eliminated_tasks", "brand_id": "papapasta", "period": "2026-04", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "papapasta", "period": "2026-05", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "papapasta", "period": "2026-06", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.eliminated_tasks", "brand_id": "papapasta", "period": "2026-07", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "papapasta", "period": "2026-08", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "acdc", "period": "2026-03", "value": 4, "target": 5, "status": "red", "vs_prior": null}, {"metric_id": "founder.eliminated_tasks", "brand_id": "acdc", "period": "2026-04", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "acdc", "period": "2026-05", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "acdc", "period": "2026-06", "value": 4, "target": 5, "status": "red", "vs_prior": 0}, {"metric_id": "founder.eliminated_tasks", "brand_id": "acdc", "period": "2026-07", "value": 5, "target": 5, "status": "green", "vs_prior": 1}, {"metric_id": "founder.eliminated_tasks", "brand_id": "acdc", "period": "2026-08", "value": 5, "target": 5, "status": "green", "vs_prior": 0}, {"metric_id": "founder.ladder_position", "brand_id": "infinity", "period": "2026-03", "value": 4.7, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.ladder_position", "brand_id": "infinity", "period": "2026-04", "value": 1.4, "target": null, "status": "no_data", "vs_prior": -3.3}, {"metric_id": "founder.ladder_position", "brand_id": "infinity", "period": "2026-05", "value": 4.5, "target": null, "status": "no_data", "vs_prior": 3.1}, {"metric_id": "founder.ladder_position", "brand_id": "infinity", "period": "2026-06", "value": 2.7, "target": null, "status": "no_data", "vs_prior": -1.8}, {"metric_id": "founder.ladder_position", "brand_id": "infinity", "period": "2026-07", "value": 3.5, "target": null, "status": "no_data", "vs_prior": 0.8}, {"metric_id": "founder.ladder_position", "brand_id": "infinity", "period": "2026-08", "value": 3.0, "target": null, "status": "no_data", "vs_prior": -0.5}, {"metric_id": "founder.ladder_position", "brand_id": "tlf", "period": "2026-03", "value": 3.3, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.ladder_position", "brand_id": "tlf", "period": "2026-04", "value": 1.9, "target": null, "status": "no_data", "vs_prior": -1.4}, {"metric_id": "founder.ladder_position", "brand_id": "tlf", "period": "2026-05", "value": 1.8, "target": null, "status": "no_data", "vs_prior": -0.1}, {"metric_id": "founder.ladder_position", "brand_id": "tlf", "period": "2026-06", "value": 1.1, "target": null, "status": "no_data", "vs_prior": -0.7}, {"metric_id": "founder.ladder_position", "brand_id": "tlf", "period": "2026-07", "value": 4.0, "target": null, "status": "no_data", "vs_prior": 2.9}, {"metric_id": "founder.ladder_position", "brand_id": "tlf", "period": "2026-08", "value": 4.0, "target": null, "status": "no_data", "vs_prior": 0.0}, {"metric_id": "founder.ladder_position", "brand_id": "infx", "period": "2026-03", "value": 3.7, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.ladder_position", "brand_id": "infx", "period": "2026-04", "value": 4.8, "target": null, "status": "no_data", "vs_prior": 1.1}, {"metric_id": "founder.ladder_position", "brand_id": "infx", "period": "2026-05", "value": 4.0, "target": null, "status": "no_data", "vs_prior": -0.8}, {"metric_id": "founder.ladder_position", "brand_id": "infx", "period": "2026-06", "value": 3.6, "target": null, "status": "no_data", "vs_prior": -0.4}, {"metric_id": "founder.ladder_position", "brand_id": "infx", "period": "2026-07", "value": 1.7, "target": null, "status": "no_data", "vs_prior": -1.9}, {"metric_id": "founder.ladder_position", "brand_id": "infx", "period": "2026-08", "value": 1.7, "target": null, "status": "no_data", "vs_prior": 0.0}, {"metric_id": "founder.ladder_position", "brand_id": "fluxflow", "period": "2026-03", "value": 2.3, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.ladder_position", "brand_id": "fluxflow", "period": "2026-04", "value": 4.8, "target": null, "status": "no_data", "vs_prior": 2.5}, {"metric_id": "founder.ladder_position", "brand_id": "fluxflow", "period": "2026-05", "value": 3.9, "target": null, "status": "no_data", "vs_prior": -0.9}, {"metric_id": "founder.ladder_position", "brand_id": "fluxflow", "period": "2026-06", "value": 2.4, "target": null, "status": "no_data", "vs_prior": -1.5}, {"metric_id": "founder.ladder_position", "brand_id": "fluxflow", "period": "2026-07", "value": 2.8, "target": null, "status": "no_data", "vs_prior": 0.4}, {"metric_id": "founder.ladder_position", "brand_id": "fluxflow", "period": "2026-08", "value": 4.6, "target": null, "status": "no_data", "vs_prior": 1.8}, {"metric_id": "founder.ladder_position", "brand_id": "divorced", "period": "2026-03", "value": 2.8, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.ladder_position", "brand_id": "divorced", "period": "2026-04", "value": 2.2, "target": null, "status": "no_data", "vs_prior": -0.6}, {"metric_id": "founder.ladder_position", "brand_id": "divorced", "period": "2026-05", "value": 2.8, "target": null, "status": "no_data", "vs_prior": 0.6}, {"metric_id": "founder.ladder_position", "brand_id": "divorced", "period": "2026-06", "value": 2.0, "target": null, "status": "no_data", "vs_prior": -0.8}, {"metric_id": "founder.ladder_position", "brand_id": "divorced", "period": "2026-07", "value": 4.4, "target": null, "status": "no_data", "vs_prior": 2.4}, {"metric_id": "founder.ladder_position", "brand_id": "divorced", "period": "2026-08", "value": 4.4, "target": null, "status": "no_data", "vs_prior": 0.0}, {"metric_id": "founder.ladder_position", "brand_id": "papapasta", "period": "2026-03", "value": 1.3, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.ladder_position", "brand_id": "papapasta", "period": "2026-04", "value": 2.8, "target": null, "status": "no_data", "vs_prior": 1.5}, {"metric_id": "founder.ladder_position", "brand_id": "papapasta", "period": "2026-05", "value": 1.8, "target": null, "status": "no_data", "vs_prior": -1.0}, {"metric_id": "founder.ladder_position", "brand_id": "papapasta", "period": "2026-06", "value": 1.1, "target": null, "status": "no_data", "vs_prior": -0.7}, {"metric_id": "founder.ladder_position", "brand_id": "papapasta", "period": "2026-07", "value": 4.3, "target": null, "status": "no_data", "vs_prior": 3.2}, {"metric_id": "founder.ladder_position", "brand_id": "papapasta", "period": "2026-08", "value": 2.3, "target": null, "status": "no_data", "vs_prior": -2.0}, {"metric_id": "founder.ladder_position", "brand_id": "acdc", "period": "2026-03", "value": 1.1, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "founder.ladder_position", "brand_id": "acdc", "period": "2026-04", "value": 2.4, "target": null, "status": "no_data", "vs_prior": 1.3}, {"metric_id": "founder.ladder_position", "brand_id": "acdc", "period": "2026-05", "value": 2.9, "target": null, "status": "no_data", "vs_prior": 0.5}, {"metric_id": "founder.ladder_position", "brand_id": "acdc", "period": "2026-06", "value": 1.5, "target": null, "status": "no_data", "vs_prior": -1.4}, {"metric_id": "founder.ladder_position", "brand_id": "acdc", "period": "2026-07", "value": 2.2, "target": null, "status": "no_data", "vs_prior": 0.7}, {"metric_id": "founder.ladder_position", "brand_id": "acdc", "period": "2026-08", "value": 4.4, "target": null, "status": "no_data", "vs_prior": 2.2}, {"metric_id": "impact.people_helped", "brand_id": "infinity", "period": "2026-03", "value": 484, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.people_helped", "brand_id": "infinity", "period": "2026-04", "value": 386, "target": null, "status": "no_data", "vs_prior": -98}, {"metric_id": "impact.people_helped", "brand_id": "infinity", "period": "2026-05", "value": 235, "target": null, "status": "no_data", "vs_prior": -151}, {"metric_id": "impact.people_helped", "brand_id": "infinity", "period": "2026-06", "value": 21, "target": null, "status": "no_data", "vs_prior": -214}, {"metric_id": "impact.people_helped", "brand_id": "infinity", "period": "2026-07", "value": 426, "target": null, "status": "no_data", "vs_prior": 405}, {"metric_id": "impact.people_helped", "brand_id": "infinity", "period": "2026-08", "value": 83, "target": null, "status": "no_data", "vs_prior": -343}, {"metric_id": "impact.people_helped", "brand_id": "tlf", "period": "2026-03", "value": 312, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.people_helped", "brand_id": "tlf", "period": "2026-04", "value": 327, "target": null, "status": "no_data", "vs_prior": 15}, {"metric_id": "impact.people_helped", "brand_id": "tlf", "period": "2026-05", "value": 280, "target": null, "status": "no_data", "vs_prior": -47}, {"metric_id": "impact.people_helped", "brand_id": "tlf", "period": "2026-06", "value": 414, "target": null, "status": "no_data", "vs_prior": 134}, {"metric_id": "impact.people_helped", "brand_id": "tlf", "period": "2026-07", "value": 370, "target": null, "status": "no_data", "vs_prior": -44}, {"metric_id": "impact.people_helped", "brand_id": "tlf", "period": "2026-08", "value": 174, "target": null, "status": "no_data", "vs_prior": -196}, {"metric_id": "impact.people_helped", "brand_id": "infx", "period": "2026-03", "value": 432, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.people_helped", "brand_id": "infx", "period": "2026-04", "value": 492, "target": null, "status": "no_data", "vs_prior": 60}, {"metric_id": "impact.people_helped", "brand_id": "infx", "period": "2026-05", "value": 287, "target": null, "status": "no_data", "vs_prior": -205}, {"metric_id": "impact.people_helped", "brand_id": "infx", "period": "2026-06", "value": 107, "target": null, "status": "no_data", "vs_prior": -180}, {"metric_id": "impact.people_helped", "brand_id": "infx", "period": "2026-07", "value": 110, "target": null, "status": "no_data", "vs_prior": 3}, {"metric_id": "impact.people_helped", "brand_id": "infx", "period": "2026-08", "value": 138, "target": null, "status": "no_data", "vs_prior": 28}, {"metric_id": "impact.people_helped", "brand_id": "fluxflow", "period": "2026-03", "value": 435, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.people_helped", "brand_id": "fluxflow", "period": "2026-04", "value": 64, "target": null, "status": "no_data", "vs_prior": -371}, {"metric_id": "impact.people_helped", "brand_id": "fluxflow", "period": "2026-05", "value": 242, "target": null, "status": "no_data", "vs_prior": 178}, {"metric_id": "impact.people_helped", "brand_id": "fluxflow", "period": "2026-06", "value": 262, "target": null, "status": "no_data", "vs_prior": 20}, {"metric_id": "impact.people_helped", "brand_id": "fluxflow", "period": "2026-07", "value": 218, "target": null, "status": "no_data", "vs_prior": -44}, {"metric_id": "impact.people_helped", "brand_id": "fluxflow", "period": "2026-08", "value": 435, "target": null, "status": "no_data", "vs_prior": 217}, {"metric_id": "impact.people_helped", "brand_id": "divorced", "period": "2026-03", "value": 267, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.people_helped", "brand_id": "divorced", "period": "2026-04", "value": 75, "target": null, "status": "no_data", "vs_prior": -192}, {"metric_id": "impact.people_helped", "brand_id": "divorced", "period": "2026-05", "value": 323, "target": null, "status": "no_data", "vs_prior": 248}, {"metric_id": "impact.people_helped", "brand_id": "divorced", "period": "2026-06", "value": 94, "target": null, "status": "no_data", "vs_prior": -229}, {"metric_id": "impact.people_helped", "brand_id": "divorced", "period": "2026-07", "value": 199, "target": null, "status": "no_data", "vs_prior": 105}, {"metric_id": "impact.people_helped", "brand_id": "divorced", "period": "2026-08", "value": 279, "target": null, "status": "no_data", "vs_prior": 80}, {"metric_id": "impact.people_helped", "brand_id": "papapasta", "period": "2026-03", "value": 36, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.people_helped", "brand_id": "papapasta", "period": "2026-04", "value": 382, "target": null, "status": "no_data", "vs_prior": 346}, {"metric_id": "impact.people_helped", "brand_id": "papapasta", "period": "2026-05", "value": 218, "target": null, "status": "no_data", "vs_prior": -164}, {"metric_id": "impact.people_helped", "brand_id": "papapasta", "period": "2026-06", "value": 75, "target": null, "status": "no_data", "vs_prior": -143}, {"metric_id": "impact.people_helped", "brand_id": "papapasta", "period": "2026-07", "value": 138, "target": null, "status": "no_data", "vs_prior": 63}, {"metric_id": "impact.people_helped", "brand_id": "papapasta", "period": "2026-08", "value": 88, "target": null, "status": "no_data", "vs_prior": -50}, {"metric_id": "impact.people_helped", "brand_id": "acdc", "period": "2026-03", "value": 291, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.people_helped", "brand_id": "acdc", "period": "2026-04", "value": 331, "target": null, "status": "no_data", "vs_prior": 40}, {"metric_id": "impact.people_helped", "brand_id": "acdc", "period": "2026-05", "value": 492, "target": null, "status": "no_data", "vs_prior": 161}, {"metric_id": "impact.people_helped", "brand_id": "acdc", "period": "2026-06", "value": 307, "target": null, "status": "no_data", "vs_prior": -185}, {"metric_id": "impact.people_helped", "brand_id": "acdc", "period": "2026-07", "value": 181, "target": null, "status": "no_data", "vs_prior": -126}, {"metric_id": "impact.people_helped", "brand_id": "acdc", "period": "2026-08", "value": 408, "target": null, "status": "no_data", "vs_prior": 227}, {"metric_id": "impact.purpose_score", "brand_id": "infinity", "period": "2026-03", "value": 5.2, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "impact.purpose_score", "brand_id": "infinity", "period": "2026-04", "value": 5.9, "target": 8, "status": "red", "vs_prior": 0.7}, {"metric_id": "impact.purpose_score", "brand_id": "infinity", "period": "2026-05", "value": 6.3, "target": 8, "status": "red", "vs_prior": 0.4}, {"metric_id": "impact.purpose_score", "brand_id": "infinity", "period": "2026-06", "value": 6.5, "target": 8, "status": "red", "vs_prior": 0.2}, {"metric_id": "impact.purpose_score", "brand_id": "infinity", "period": "2026-07", "value": 7.1, "target": 8, "status": "red", "vs_prior": 0.6}, {"metric_id": "impact.purpose_score", "brand_id": "infinity", "period": "2026-08", "value": 7.2, "target": 8, "status": "amber", "vs_prior": 0.1}, {"metric_id": "impact.purpose_score", "brand_id": "tlf", "period": "2026-03", "value": 5.5, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "impact.purpose_score", "brand_id": "tlf", "period": "2026-04", "value": 6.7, "target": 8, "status": "red", "vs_prior": 1.2}, {"metric_id": "impact.purpose_score", "brand_id": "tlf", "period": "2026-05", "value": 6.7, "target": 8, "status": "red", "vs_prior": 0.0}, {"metric_id": "impact.purpose_score", "brand_id": "tlf", "period": "2026-06", "value": 7.4, "target": 8, "status": "amber", "vs_prior": 0.7}, {"metric_id": "impact.purpose_score", "brand_id": "tlf", "period": "2026-07", "value": 7.8, "target": 8, "status": "amber", "vs_prior": 0.4}, {"metric_id": "impact.purpose_score", "brand_id": "tlf", "period": "2026-08", "value": 8.7, "target": 8, "status": "green", "vs_prior": 0.9}, {"metric_id": "impact.purpose_score", "brand_id": "infx", "period": "2026-03", "value": 6.5, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "impact.purpose_score", "brand_id": "infx", "period": "2026-04", "value": 6.9, "target": 8, "status": "red", "vs_prior": 0.4}, {"metric_id": "impact.purpose_score", "brand_id": "infx", "period": "2026-05", "value": 7.2, "target": 8, "status": "amber", "vs_prior": 0.3}, {"metric_id": "impact.purpose_score", "brand_id": "infx", "period": "2026-06", "value": 7.9, "target": 8, "status": "amber", "vs_prior": 0.7}, {"metric_id": "impact.purpose_score", "brand_id": "infx", "period": "2026-07", "value": 7.1, "target": 8, "status": "red", "vs_prior": -0.8}, {"metric_id": "impact.purpose_score", "brand_id": "infx", "period": "2026-08", "value": 7.4, "target": 8, "status": "amber", "vs_prior": 0.3}, {"metric_id": "impact.purpose_score", "brand_id": "fluxflow", "period": "2026-03", "value": 4.7, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "impact.purpose_score", "brand_id": "fluxflow", "period": "2026-04", "value": 5.8, "target": 8, "status": "red", "vs_prior": 1.1}, {"metric_id": "impact.purpose_score", "brand_id": "fluxflow", "period": "2026-05", "value": 5.7, "target": 8, "status": "red", "vs_prior": -0.1}, {"metric_id": "impact.purpose_score", "brand_id": "fluxflow", "period": "2026-06", "value": 6.5, "target": 8, "status": "red", "vs_prior": 0.8}, {"metric_id": "impact.purpose_score", "brand_id": "fluxflow", "period": "2026-07", "value": 7.2, "target": 8, "status": "amber", "vs_prior": 0.7}, {"metric_id": "impact.purpose_score", "brand_id": "fluxflow", "period": "2026-08", "value": 8.1, "target": 8, "status": "green", "vs_prior": 0.9}, {"metric_id": "impact.purpose_score", "brand_id": "divorced", "period": "2026-03", "value": 5.6, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "impact.purpose_score", "brand_id": "divorced", "period": "2026-04", "value": 5.2, "target": 8, "status": "red", "vs_prior": -0.4}, {"metric_id": "impact.purpose_score", "brand_id": "divorced", "period": "2026-05", "value": 7.1, "target": 8, "status": "red", "vs_prior": 1.9}, {"metric_id": "impact.purpose_score", "brand_id": "divorced", "period": "2026-06", "value": 6.5, "target": 8, "status": "red", "vs_prior": -0.6}, {"metric_id": "impact.purpose_score", "brand_id": "divorced", "period": "2026-07", "value": 6.6, "target": 8, "status": "red", "vs_prior": 0.1}, {"metric_id": "impact.purpose_score", "brand_id": "divorced", "period": "2026-08", "value": 8.3, "target": 8, "status": "green", "vs_prior": 1.7}, {"metric_id": "impact.purpose_score", "brand_id": "papapasta", "period": "2026-03", "value": 6.3, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "impact.purpose_score", "brand_id": "papapasta", "period": "2026-04", "value": 5.1, "target": 8, "status": "red", "vs_prior": -1.2}, {"metric_id": "impact.purpose_score", "brand_id": "papapasta", "period": "2026-05", "value": 6.0, "target": 8, "status": "red", "vs_prior": 0.9}, {"metric_id": "impact.purpose_score", "brand_id": "papapasta", "period": "2026-06", "value": 6.1, "target": 8, "status": "red", "vs_prior": 0.1}, {"metric_id": "impact.purpose_score", "brand_id": "papapasta", "period": "2026-07", "value": 8.1, "target": 8, "status": "green", "vs_prior": 2.0}, {"metric_id": "impact.purpose_score", "brand_id": "papapasta", "period": "2026-08", "value": 7.0, "target": 8, "status": "red", "vs_prior": -1.1}, {"metric_id": "impact.purpose_score", "brand_id": "acdc", "period": "2026-03", "value": 6.0, "target": 8, "status": "red", "vs_prior": null}, {"metric_id": "impact.purpose_score", "brand_id": "acdc", "period": "2026-04", "value": 5.8, "target": 8, "status": "red", "vs_prior": -0.2}, {"metric_id": "impact.purpose_score", "brand_id": "acdc", "period": "2026-05", "value": 6.8, "target": 8, "status": "red", "vs_prior": 1.0}, {"metric_id": "impact.purpose_score", "brand_id": "acdc", "period": "2026-06", "value": 7.3, "target": 8, "status": "amber", "vs_prior": 0.5}, {"metric_id": "impact.purpose_score", "brand_id": "acdc", "period": "2026-07", "value": 7.4, "target": 8, "status": "amber", "vs_prior": 0.1}, {"metric_id": "impact.purpose_score", "brand_id": "acdc", "period": "2026-08", "value": 7.2, "target": 8, "status": "amber", "vs_prior": -0.2}, {"metric_id": "impact.jobs_sustained", "brand_id": "infinity", "period": "2026-03", "value": 258, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.jobs_sustained", "brand_id": "infinity", "period": "2026-04", "value": 281, "target": null, "status": "no_data", "vs_prior": 23}, {"metric_id": "impact.jobs_sustained", "brand_id": "infinity", "period": "2026-05", "value": 177, "target": null, "status": "no_data", "vs_prior": -104}, {"metric_id": "impact.jobs_sustained", "brand_id": "infinity", "period": "2026-06", "value": 191, "target": null, "status": "no_data", "vs_prior": 14}, {"metric_id": "impact.jobs_sustained", "brand_id": "infinity", "period": "2026-07", "value": 276, "target": null, "status": "no_data", "vs_prior": 85}, {"metric_id": "impact.jobs_sustained", "brand_id": "infinity", "period": "2026-08", "value": 362, "target": null, "status": "no_data", "vs_prior": 86}, {"metric_id": "impact.jobs_sustained", "brand_id": "tlf", "period": "2026-03", "value": 350, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.jobs_sustained", "brand_id": "tlf", "period": "2026-04", "value": 46, "target": null, "status": "no_data", "vs_prior": -304}, {"metric_id": "impact.jobs_sustained", "brand_id": "tlf", "period": "2026-05", "value": 239, "target": null, "status": "no_data", "vs_prior": 193}, {"metric_id": "impact.jobs_sustained", "brand_id": "tlf", "period": "2026-06", "value": 196, "target": null, "status": "no_data", "vs_prior": -43}, {"metric_id": "impact.jobs_sustained", "brand_id": "tlf", "period": "2026-07", "value": 374, "target": null, "status": "no_data", "vs_prior": 178}, {"metric_id": "impact.jobs_sustained", "brand_id": "tlf", "period": "2026-08", "value": 218, "target": null, "status": "no_data", "vs_prior": -156}, {"metric_id": "impact.jobs_sustained", "brand_id": "infx", "period": "2026-03", "value": 100, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.jobs_sustained", "brand_id": "infx", "period": "2026-04", "value": 69, "target": null, "status": "no_data", "vs_prior": -31}, {"metric_id": "impact.jobs_sustained", "brand_id": "infx", "period": "2026-05", "value": 159, "target": null, "status": "no_data", "vs_prior": 90}, {"metric_id": "impact.jobs_sustained", "brand_id": "infx", "period": "2026-06", "value": 39, "target": null, "status": "no_data", "vs_prior": -120}, {"metric_id": "impact.jobs_sustained", "brand_id": "infx", "period": "2026-07", "value": 209, "target": null, "status": "no_data", "vs_prior": 170}, {"metric_id": "impact.jobs_sustained", "brand_id": "infx", "period": "2026-08", "value": 417, "target": null, "status": "no_data", "vs_prior": 208}, {"metric_id": "impact.jobs_sustained", "brand_id": "fluxflow", "period": "2026-03", "value": 414, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.jobs_sustained", "brand_id": "fluxflow", "period": "2026-04", "value": 122, "target": null, "status": "no_data", "vs_prior": -292}, {"metric_id": "impact.jobs_sustained", "brand_id": "fluxflow", "period": "2026-05", "value": 353, "target": null, "status": "no_data", "vs_prior": 231}, {"metric_id": "impact.jobs_sustained", "brand_id": "fluxflow", "period": "2026-06", "value": 459, "target": null, "status": "no_data", "vs_prior": 106}, {"metric_id": "impact.jobs_sustained", "brand_id": "fluxflow", "period": "2026-07", "value": 85, "target": null, "status": "no_data", "vs_prior": -374}, {"metric_id": "impact.jobs_sustained", "brand_id": "fluxflow", "period": "2026-08", "value": 349, "target": null, "status": "no_data", "vs_prior": 264}, {"metric_id": "impact.jobs_sustained", "brand_id": "divorced", "period": "2026-03", "value": 290, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.jobs_sustained", "brand_id": "divorced", "period": "2026-04", "value": 295, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "impact.jobs_sustained", "brand_id": "divorced", "period": "2026-05", "value": 135, "target": null, "status": "no_data", "vs_prior": -160}, {"metric_id": "impact.jobs_sustained", "brand_id": "divorced", "period": "2026-06", "value": 119, "target": null, "status": "no_data", "vs_prior": -16}, {"metric_id": "impact.jobs_sustained", "brand_id": "divorced", "period": "2026-07", "value": 345, "target": null, "status": "no_data", "vs_prior": 226}, {"metric_id": "impact.jobs_sustained", "brand_id": "divorced", "period": "2026-08", "value": 463, "target": null, "status": "no_data", "vs_prior": 118}, {"metric_id": "impact.jobs_sustained", "brand_id": "papapasta", "period": "2026-03", "value": 284, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.jobs_sustained", "brand_id": "papapasta", "period": "2026-04", "value": 462, "target": null, "status": "no_data", "vs_prior": 178}, {"metric_id": "impact.jobs_sustained", "brand_id": "papapasta", "period": "2026-05", "value": 423, "target": null, "status": "no_data", "vs_prior": -39}, {"metric_id": "impact.jobs_sustained", "brand_id": "papapasta", "period": "2026-06", "value": 478, "target": null, "status": "no_data", "vs_prior": 55}, {"metric_id": "impact.jobs_sustained", "brand_id": "papapasta", "period": "2026-07", "value": 124, "target": null, "status": "no_data", "vs_prior": -354}, {"metric_id": "impact.jobs_sustained", "brand_id": "papapasta", "period": "2026-08", "value": 158, "target": null, "status": "no_data", "vs_prior": 34}, {"metric_id": "impact.jobs_sustained", "brand_id": "acdc", "period": "2026-03", "value": 287, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "impact.jobs_sustained", "brand_id": "acdc", "period": "2026-04", "value": 433, "target": null, "status": "no_data", "vs_prior": 146}, {"metric_id": "impact.jobs_sustained", "brand_id": "acdc", "period": "2026-05", "value": 366, "target": null, "status": "no_data", "vs_prior": -67}, {"metric_id": "impact.jobs_sustained", "brand_id": "acdc", "period": "2026-06", "value": 307, "target": null, "status": "no_data", "vs_prior": -59}, {"metric_id": "impact.jobs_sustained", "brand_id": "acdc", "period": "2026-07", "value": 488, "target": null, "status": "no_data", "vs_prior": 181}, {"metric_id": "impact.jobs_sustained", "brand_id": "acdc", "period": "2026-08", "value": 378, "target": null, "status": "no_data", "vs_prior": -110}, {"metric_id": "funnel.leads", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-03", "value": 99, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-04", "value": 66, "target": null, "status": "no_data", "vs_prior": -33}, {"metric_id": "funnel.leads", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-05", "value": 104, "target": null, "status": "no_data", "vs_prior": 38}, {"metric_id": "funnel.leads", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-06", "value": 20, "target": null, "status": "no_data", "vs_prior": -84}, {"metric_id": "funnel.leads", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-07", "value": 114, "target": null, "status": "no_data", "vs_prior": 94}, {"metric_id": "funnel.leads", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-08", "value": 44, "target": null, "status": "no_data", "vs_prior": -70}, {"metric_id": "funnel.leads", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-03", "value": 15, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-04", "value": 22, "target": null, "status": "no_data", "vs_prior": 7}, {"metric_id": "funnel.leads", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-05", "value": 21, "target": null, "status": "no_data", "vs_prior": -1}, {"metric_id": "funnel.leads", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-06", "value": 25, "target": null, "status": "no_data", "vs_prior": 4}, {"metric_id": "funnel.leads", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-07", "value": 23, "target": null, "status": "no_data", "vs_prior": -2}, {"metric_id": "funnel.leads", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-08", "value": 25, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.leads", "product_id": "sla_finance", "origin": "inbound", "period": "2026-03", "value": 26, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "sla_finance", "origin": "inbound", "period": "2026-04", "value": 11, "target": null, "status": "no_data", "vs_prior": -15}, {"metric_id": "funnel.leads", "product_id": "sla_finance", "origin": "inbound", "period": "2026-05", "value": 66, "target": null, "status": "no_data", "vs_prior": 55}, {"metric_id": "funnel.leads", "product_id": "sla_finance", "origin": "inbound", "period": "2026-06", "value": 93, "target": null, "status": "no_data", "vs_prior": 27}, {"metric_id": "funnel.leads", "product_id": "sla_finance", "origin": "inbound", "period": "2026-07", "value": 52, "target": null, "status": "no_data", "vs_prior": -41}, {"metric_id": "funnel.leads", "product_id": "sla_finance", "origin": "inbound", "period": "2026-08", "value": 48, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.leads", "product_id": "sla_finance", "origin": "outbound", "period": "2026-03", "value": 40, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "sla_finance", "origin": "outbound", "period": "2026-04", "value": 9, "target": null, "status": "no_data", "vs_prior": -31}, {"metric_id": "funnel.leads", "product_id": "sla_finance", "origin": "outbound", "period": "2026-05", "value": 26, "target": null, "status": "no_data", "vs_prior": 17}, {"metric_id": "funnel.leads", "product_id": "sla_finance", "origin": "outbound", "period": "2026-06", "value": 22, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.leads", "product_id": "sla_finance", "origin": "outbound", "period": "2026-07", "value": 12, "target": null, "status": "no_data", "vs_prior": -10}, {"metric_id": "funnel.leads", "product_id": "sla_finance", "origin": "outbound", "period": "2026-08", "value": 8, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.leads", "product_id": "sla_hr", "origin": "inbound", "period": "2026-03", "value": 69, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "sla_hr", "origin": "inbound", "period": "2026-04", "value": 82, "target": null, "status": "no_data", "vs_prior": 13}, {"metric_id": "funnel.leads", "product_id": "sla_hr", "origin": "inbound", "period": "2026-05", "value": 88, "target": null, "status": "no_data", "vs_prior": 6}, {"metric_id": "funnel.leads", "product_id": "sla_hr", "origin": "inbound", "period": "2026-06", "value": 14, "target": null, "status": "no_data", "vs_prior": -74}, {"metric_id": "funnel.leads", "product_id": "sla_hr", "origin": "inbound", "period": "2026-07", "value": 57, "target": null, "status": "no_data", "vs_prior": 43}, {"metric_id": "funnel.leads", "product_id": "sla_hr", "origin": "inbound", "period": "2026-08", "value": 22, "target": null, "status": "no_data", "vs_prior": -35}, {"metric_id": "funnel.leads", "product_id": "sla_hr", "origin": "outbound", "period": "2026-03", "value": 57, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "sla_hr", "origin": "outbound", "period": "2026-04", "value": 36, "target": null, "status": "no_data", "vs_prior": -21}, {"metric_id": "funnel.leads", "product_id": "sla_hr", "origin": "outbound", "period": "2026-05", "value": 29, "target": null, "status": "no_data", "vs_prior": -7}, {"metric_id": "funnel.leads", "product_id": "sla_hr", "origin": "outbound", "period": "2026-06", "value": 17, "target": null, "status": "no_data", "vs_prior": -12}, {"metric_id": "funnel.leads", "product_id": "sla_hr", "origin": "outbound", "period": "2026-07", "value": 17, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.leads", "product_id": "sla_hr", "origin": "outbound", "period": "2026-08", "value": 8, "target": null, "status": "no_data", "vs_prior": -9}, {"metric_id": "funnel.leads", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-03", "value": 104, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-04", "value": 26, "target": null, "status": "no_data", "vs_prior": -78}, {"metric_id": "funnel.leads", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-05", "value": 83, "target": null, "status": "no_data", "vs_prior": 57}, {"metric_id": "funnel.leads", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-06", "value": 27, "target": null, "status": "no_data", "vs_prior": -56}, {"metric_id": "funnel.leads", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-07", "value": 72, "target": null, "status": "no_data", "vs_prior": 45}, {"metric_id": "funnel.leads", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-08", "value": 111, "target": null, "status": "no_data", "vs_prior": 39}, {"metric_id": "funnel.leads", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-03", "value": 25, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-04", "value": 10, "target": null, "status": "no_data", "vs_prior": -15}, {"metric_id": "funnel.leads", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-05", "value": 56, "target": null, "status": "no_data", "vs_prior": 46}, {"metric_id": "funnel.leads", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-06", "value": 53, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "funnel.leads", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-07", "value": 49, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.leads", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-08", "value": 25, "target": null, "status": "no_data", "vs_prior": -24}, {"metric_id": "funnel.leads", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-03", "value": 103, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-04", "value": 16, "target": null, "status": "no_data", "vs_prior": -87}, {"metric_id": "funnel.leads", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-05", "value": 25, "target": null, "status": "no_data", "vs_prior": 9}, {"metric_id": "funnel.leads", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-06", "value": 11, "target": null, "status": "no_data", "vs_prior": -14}, {"metric_id": "funnel.leads", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-07", "value": 86, "target": null, "status": "no_data", "vs_prior": 75}, {"metric_id": "funnel.leads", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-08", "value": 107, "target": null, "status": "no_data", "vs_prior": 21}, {"metric_id": "funnel.leads", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-03", "value": 39, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-04", "value": 8, "target": null, "status": "no_data", "vs_prior": -31}, {"metric_id": "funnel.leads", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-05", "value": 33, "target": null, "status": "no_data", "vs_prior": 25}, {"metric_id": "funnel.leads", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-06", "value": 14, "target": null, "status": "no_data", "vs_prior": -19}, {"metric_id": "funnel.leads", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-07", "value": 11, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "funnel.leads", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-08", "value": 29, "target": null, "status": "no_data", "vs_prior": 18}, {"metric_id": "funnel.leads", "product_id": "fluxflow", "origin": "inbound", "period": "2026-03", "value": 75, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "fluxflow", "origin": "inbound", "period": "2026-04", "value": 73, "target": null, "status": "no_data", "vs_prior": -2}, {"metric_id": "funnel.leads", "product_id": "fluxflow", "origin": "inbound", "period": "2026-05", "value": 19, "target": null, "status": "no_data", "vs_prior": -54}, {"metric_id": "funnel.leads", "product_id": "fluxflow", "origin": "inbound", "period": "2026-06", "value": 51, "target": null, "status": "no_data", "vs_prior": 32}, {"metric_id": "funnel.leads", "product_id": "fluxflow", "origin": "inbound", "period": "2026-07", "value": 85, "target": null, "status": "no_data", "vs_prior": 34}, {"metric_id": "funnel.leads", "product_id": "fluxflow", "origin": "inbound", "period": "2026-08", "value": 49, "target": null, "status": "no_data", "vs_prior": -36}, {"metric_id": "funnel.leads", "product_id": "fluxflow", "origin": "outbound", "period": "2026-03", "value": 3, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "fluxflow", "origin": "outbound", "period": "2026-04", "value": 21, "target": null, "status": "no_data", "vs_prior": 18}, {"metric_id": "funnel.leads", "product_id": "fluxflow", "origin": "outbound", "period": "2026-05", "value": 23, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.leads", "product_id": "fluxflow", "origin": "outbound", "period": "2026-06", "value": 5, "target": null, "status": "no_data", "vs_prior": -18}, {"metric_id": "funnel.leads", "product_id": "fluxflow", "origin": "outbound", "period": "2026-07", "value": 6, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.leads", "product_id": "fluxflow", "origin": "outbound", "period": "2026-08", "value": 15, "target": null, "status": "no_data", "vs_prior": 9}, {"metric_id": "funnel.leads", "product_id": "acdc_express", "origin": "inbound", "period": "2026-03", "value": 60, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "acdc_express", "origin": "inbound", "period": "2026-04", "value": 48, "target": null, "status": "no_data", "vs_prior": -12}, {"metric_id": "funnel.leads", "product_id": "acdc_express", "origin": "inbound", "period": "2026-05", "value": 23, "target": null, "status": "no_data", "vs_prior": -25}, {"metric_id": "funnel.leads", "product_id": "acdc_express", "origin": "inbound", "period": "2026-06", "value": 19, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.leads", "product_id": "acdc_express", "origin": "inbound", "period": "2026-07", "value": 79, "target": null, "status": "no_data", "vs_prior": 60}, {"metric_id": "funnel.leads", "product_id": "acdc_express", "origin": "inbound", "period": "2026-08", "value": 22, "target": null, "status": "no_data", "vs_prior": -57}, {"metric_id": "funnel.leads", "product_id": "acdc_express", "origin": "outbound", "period": "2026-03", "value": 28, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "acdc_express", "origin": "outbound", "period": "2026-04", "value": 38, "target": null, "status": "no_data", "vs_prior": 10}, {"metric_id": "funnel.leads", "product_id": "acdc_express", "origin": "outbound", "period": "2026-05", "value": 54, "target": null, "status": "no_data", "vs_prior": 16}, {"metric_id": "funnel.leads", "product_id": "acdc_express", "origin": "outbound", "period": "2026-06", "value": 3, "target": null, "status": "no_data", "vs_prior": -51}, {"metric_id": "funnel.leads", "product_id": "acdc_express", "origin": "outbound", "period": "2026-07", "value": 10, "target": null, "status": "no_data", "vs_prior": 7}, {"metric_id": "funnel.leads", "product_id": "acdc_express", "origin": "outbound", "period": "2026-08", "value": 46, "target": null, "status": "no_data", "vs_prior": 36}, {"metric_id": "funnel.leads", "product_id": "tlf", "origin": "inbound", "period": "2026-03", "value": 111, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "tlf", "origin": "inbound", "period": "2026-04", "value": 60, "target": null, "status": "no_data", "vs_prior": -51}, {"metric_id": "funnel.leads", "product_id": "tlf", "origin": "inbound", "period": "2026-05", "value": 65, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "funnel.leads", "product_id": "tlf", "origin": "inbound", "period": "2026-06", "value": 112, "target": null, "status": "no_data", "vs_prior": 47}, {"metric_id": "funnel.leads", "product_id": "tlf", "origin": "inbound", "period": "2026-07", "value": 73, "target": null, "status": "no_data", "vs_prior": -39}, {"metric_id": "funnel.leads", "product_id": "tlf", "origin": "inbound", "period": "2026-08", "value": 36, "target": null, "status": "no_data", "vs_prior": -37}, {"metric_id": "funnel.leads", "product_id": "tlf", "origin": "outbound", "period": "2026-03", "value": 16, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "tlf", "origin": "outbound", "period": "2026-04", "value": 27, "target": null, "status": "no_data", "vs_prior": 11}, {"metric_id": "funnel.leads", "product_id": "tlf", "origin": "outbound", "period": "2026-05", "value": 13, "target": null, "status": "no_data", "vs_prior": -14}, {"metric_id": "funnel.leads", "product_id": "tlf", "origin": "outbound", "period": "2026-06", "value": 43, "target": null, "status": "no_data", "vs_prior": 30}, {"metric_id": "funnel.leads", "product_id": "tlf", "origin": "outbound", "period": "2026-07", "value": 41, "target": null, "status": "no_data", "vs_prior": -2}, {"metric_id": "funnel.leads", "product_id": "tlf", "origin": "outbound", "period": "2026-08", "value": 10, "target": null, "status": "no_data", "vs_prior": -31}, {"metric_id": "funnel.leads", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-03", "value": 92, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-04", "value": 60, "target": null, "status": "no_data", "vs_prior": -32}, {"metric_id": "funnel.leads", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-05", "value": 11, "target": null, "status": "no_data", "vs_prior": -49}, {"metric_id": "funnel.leads", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-06", "value": 60, "target": null, "status": "no_data", "vs_prior": 49}, {"metric_id": "funnel.leads", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-07", "value": 104, "target": null, "status": "no_data", "vs_prior": 44}, {"metric_id": "funnel.leads", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-08", "value": 99, "target": null, "status": "no_data", "vs_prior": -5}, {"metric_id": "funnel.leads", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-03", "value": 66, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.leads", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-04", "value": 17, "target": null, "status": "no_data", "vs_prior": -49}, {"metric_id": "funnel.leads", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-05", "value": 28, "target": null, "status": "no_data", "vs_prior": 11}, {"metric_id": "funnel.leads", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-06", "value": 3, "target": null, "status": "no_data", "vs_prior": -25}, {"metric_id": "funnel.leads", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-07", "value": 28, "target": null, "status": "no_data", "vs_prior": 25}, {"metric_id": "funnel.leads", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-08", "value": 14, "target": null, "status": "no_data", "vs_prior": -14}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-03", "value": 70.5, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-04", "value": 62.3, "target": null, "status": "no_data", "vs_prior": -8.2}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-05", "value": 61.0, "target": null, "status": "no_data", "vs_prior": -1.3}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-06", "value": 64.1, "target": null, "status": "no_data", "vs_prior": 3.1}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-07", "value": 79.9, "target": null, "status": "no_data", "vs_prior": 15.8}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-08", "value": 77.1, "target": null, "status": "no_data", "vs_prior": -2.8}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-03", "value": 23, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-04", "value": 29, "target": null, "status": "no_data", "vs_prior": 6}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-05", "value": 46, "target": null, "status": "no_data", "vs_prior": 17}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-06", "value": 27, "target": null, "status": "no_data", "vs_prior": -19}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-07", "value": 34, "target": null, "status": "no_data", "vs_prior": 7}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-08", "value": 19, "target": null, "status": "no_data", "vs_prior": -15}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_finance", "origin": "inbound", "period": "2026-03", "value": 89.1, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_finance", "origin": "inbound", "period": "2026-04", "value": 82.0, "target": null, "status": "no_data", "vs_prior": -7.1}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_finance", "origin": "inbound", "period": "2026-05", "value": 82.4, "target": null, "status": "no_data", "vs_prior": 0.4}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_finance", "origin": "inbound", "period": "2026-06", "value": 76.0, "target": null, "status": "no_data", "vs_prior": -6.4}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_finance", "origin": "inbound", "period": "2026-07", "value": 67.0, "target": null, "status": "no_data", "vs_prior": -9.0}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_finance", "origin": "inbound", "period": "2026-08", "value": 65.2, "target": null, "status": "no_data", "vs_prior": -1.8}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_finance", "origin": "outbound", "period": "2026-03", "value": 28, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_finance", "origin": "outbound", "period": "2026-04", "value": 37, "target": null, "status": "no_data", "vs_prior": 9}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_finance", "origin": "outbound", "period": "2026-05", "value": 34, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_finance", "origin": "outbound", "period": "2026-06", "value": 34, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_finance", "origin": "outbound", "period": "2026-07", "value": 27, "target": null, "status": "no_data", "vs_prior": -7}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_finance", "origin": "outbound", "period": "2026-08", "value": 19, "target": null, "status": "no_data", "vs_prior": -8}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_hr", "origin": "inbound", "period": "2026-03", "value": 57.5, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_hr", "origin": "inbound", "period": "2026-04", "value": 75.1, "target": null, "status": "no_data", "vs_prior": 17.6}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_hr", "origin": "inbound", "period": "2026-05", "value": 71.2, "target": null, "status": "no_data", "vs_prior": -3.9}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_hr", "origin": "inbound", "period": "2026-06", "value": 58.9, "target": null, "status": "no_data", "vs_prior": -12.3}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_hr", "origin": "inbound", "period": "2026-07", "value": 69.3, "target": null, "status": "no_data", "vs_prior": 10.4}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_hr", "origin": "inbound", "period": "2026-08", "value": 81.5, "target": null, "status": "no_data", "vs_prior": 12.2}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_hr", "origin": "outbound", "period": "2026-03", "value": 50, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_hr", "origin": "outbound", "period": "2026-04", "value": 12, "target": null, "status": "no_data", "vs_prior": -38}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_hr", "origin": "outbound", "period": "2026-05", "value": 20, "target": null, "status": "no_data", "vs_prior": 8}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_hr", "origin": "outbound", "period": "2026-06", "value": 25, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_hr", "origin": "outbound", "period": "2026-07", "value": 27, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_hr", "origin": "outbound", "period": "2026-08", "value": 32, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-03", "value": 72.9, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-04", "value": 73.9, "target": null, "status": "no_data", "vs_prior": 1.0}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-05", "value": 88.5, "target": null, "status": "no_data", "vs_prior": 14.6}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-06", "value": 92.6, "target": null, "status": "no_data", "vs_prior": 4.1}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-07", "value": 61.0, "target": null, "status": "no_data", "vs_prior": -31.6}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-08", "value": 90.4, "target": null, "status": "no_data", "vs_prior": 29.4}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-03", "value": 34, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-04", "value": 40, "target": null, "status": "no_data", "vs_prior": 6}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-05", "value": 26, "target": null, "status": "no_data", "vs_prior": -14}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-06", "value": 16, "target": null, "status": "no_data", "vs_prior": -10}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-07", "value": 37, "target": null, "status": "no_data", "vs_prior": 21}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-08", "value": 25, "target": null, "status": "no_data", "vs_prior": -12}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-03", "value": 66.8, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-04", "value": 75.6, "target": null, "status": "no_data", "vs_prior": 8.8}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-05", "value": 72.5, "target": null, "status": "no_data", "vs_prior": -3.1}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-06", "value": 85.0, "target": null, "status": "no_data", "vs_prior": 12.5}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-07", "value": 63.1, "target": null, "status": "no_data", "vs_prior": -21.9}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-08", "value": 60.5, "target": null, "status": "no_data", "vs_prior": -2.6}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-03", "value": 30, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-04", "value": 46, "target": null, "status": "no_data", "vs_prior": 16}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-05", "value": 30, "target": null, "status": "no_data", "vs_prior": -16}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-06", "value": 31, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-07", "value": 38, "target": null, "status": "no_data", "vs_prior": 7}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-08", "value": 49, "target": null, "status": "no_data", "vs_prior": 11}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "fluxflow", "origin": "inbound", "period": "2026-03", "value": 91.7, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "fluxflow", "origin": "inbound", "period": "2026-04", "value": 72.3, "target": null, "status": "no_data", "vs_prior": -19.4}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "fluxflow", "origin": "inbound", "period": "2026-05", "value": 84.0, "target": null, "status": "no_data", "vs_prior": 11.7}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "fluxflow", "origin": "inbound", "period": "2026-06", "value": 69.4, "target": null, "status": "no_data", "vs_prior": -14.6}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "fluxflow", "origin": "inbound", "period": "2026-07", "value": 86.2, "target": null, "status": "no_data", "vs_prior": 16.8}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "fluxflow", "origin": "inbound", "period": "2026-08", "value": 91.8, "target": null, "status": "no_data", "vs_prior": 5.6}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "fluxflow", "origin": "outbound", "period": "2026-03", "value": 27, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "fluxflow", "origin": "outbound", "period": "2026-04", "value": 18, "target": null, "status": "no_data", "vs_prior": -9}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "fluxflow", "origin": "outbound", "period": "2026-05", "value": 23, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "fluxflow", "origin": "outbound", "period": "2026-06", "value": 25, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "fluxflow", "origin": "outbound", "period": "2026-07", "value": 35, "target": null, "status": "no_data", "vs_prior": 10}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "fluxflow", "origin": "outbound", "period": "2026-08", "value": 30, "target": null, "status": "no_data", "vs_prior": -5}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "acdc_express", "origin": "inbound", "period": "2026-03", "value": 58.8, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "acdc_express", "origin": "inbound", "period": "2026-04", "value": 75.5, "target": null, "status": "no_data", "vs_prior": 16.7}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "acdc_express", "origin": "inbound", "period": "2026-05", "value": 60.8, "target": null, "status": "no_data", "vs_prior": -14.7}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "acdc_express", "origin": "inbound", "period": "2026-06", "value": 60.6, "target": null, "status": "no_data", "vs_prior": -0.2}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "acdc_express", "origin": "inbound", "period": "2026-07", "value": 63.8, "target": null, "status": "no_data", "vs_prior": 3.2}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "acdc_express", "origin": "inbound", "period": "2026-08", "value": 84.2, "target": null, "status": "no_data", "vs_prior": 20.4}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "acdc_express", "origin": "outbound", "period": "2026-03", "value": 33, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "acdc_express", "origin": "outbound", "period": "2026-04", "value": 14, "target": null, "status": "no_data", "vs_prior": -19}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "acdc_express", "origin": "outbound", "period": "2026-05", "value": 22, "target": null, "status": "no_data", "vs_prior": 8}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "acdc_express", "origin": "outbound", "period": "2026-06", "value": 41, "target": null, "status": "no_data", "vs_prior": 19}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "acdc_express", "origin": "outbound", "period": "2026-07", "value": 36, "target": null, "status": "no_data", "vs_prior": -5}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "acdc_express", "origin": "outbound", "period": "2026-08", "value": 34, "target": null, "status": "no_data", "vs_prior": -2}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "tlf", "origin": "inbound", "period": "2026-03", "value": 71.2, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "tlf", "origin": "inbound", "period": "2026-04", "value": 59.9, "target": null, "status": "no_data", "vs_prior": -11.3}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "tlf", "origin": "inbound", "period": "2026-05", "value": 66.0, "target": null, "status": "no_data", "vs_prior": 6.1}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "tlf", "origin": "inbound", "period": "2026-06", "value": 60.6, "target": null, "status": "no_data", "vs_prior": -5.4}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "tlf", "origin": "inbound", "period": "2026-07", "value": 62.4, "target": null, "status": "no_data", "vs_prior": 1.8}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "tlf", "origin": "inbound", "period": "2026-08", "value": 59.6, "target": null, "status": "no_data", "vs_prior": -2.8}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "tlf", "origin": "outbound", "period": "2026-03", "value": 27, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "tlf", "origin": "outbound", "period": "2026-04", "value": 39, "target": null, "status": "no_data", "vs_prior": 12}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "tlf", "origin": "outbound", "period": "2026-05", "value": 45, "target": null, "status": "no_data", "vs_prior": 6}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "tlf", "origin": "outbound", "period": "2026-06", "value": 24, "target": null, "status": "no_data", "vs_prior": -21}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "tlf", "origin": "outbound", "period": "2026-07", "value": 38, "target": null, "status": "no_data", "vs_prior": 14}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "tlf", "origin": "outbound", "period": "2026-08", "value": 47, "target": null, "status": "no_data", "vs_prior": 9}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-03", "value": 79.7, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-04", "value": 77.2, "target": null, "status": "no_data", "vs_prior": -2.5}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-05", "value": 70.1, "target": null, "status": "no_data", "vs_prior": -7.1}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-06", "value": 66.8, "target": null, "status": "no_data", "vs_prior": -3.3}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-07", "value": 75.9, "target": null, "status": "no_data", "vs_prior": 9.1}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-08", "value": 75.9, "target": null, "status": "no_data", "vs_prior": 0.0}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-03", "value": 16, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-04", "value": 36, "target": null, "status": "no_data", "vs_prior": 20}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-05", "value": 33, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-06", "value": 39, "target": null, "status": "no_data", "vs_prior": 6}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-07", "value": 26, "target": null, "status": "no_data", "vs_prior": -13}, {"metric_id": "funnel.conv_lead_to_opp", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-08", "value": 28, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.opportunities", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-03", "value": 35, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-04", "value": 22, "target": null, "status": "no_data", "vs_prior": -13}, {"metric_id": "funnel.opportunities", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-05", "value": 17, "target": null, "status": "no_data", "vs_prior": -5}, {"metric_id": "funnel.opportunities", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-06", "value": 40, "target": null, "status": "no_data", "vs_prior": 23}, {"metric_id": "funnel.opportunities", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-07", "value": 40, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.opportunities", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-08", "value": 7, "target": null, "status": "no_data", "vs_prior": -33}, {"metric_id": "funnel.opportunities", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-03", "value": 4, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-04", "value": 9, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "funnel.opportunities", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-05", "value": 5, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.opportunities", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-06", "value": 2, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "funnel.opportunities", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-07", "value": 7, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "funnel.opportunities", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-08", "value": 15, "target": null, "status": "no_data", "vs_prior": 8}, {"metric_id": "funnel.opportunities", "product_id": "sla_finance", "origin": "inbound", "period": "2026-03", "value": 29, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "sla_finance", "origin": "inbound", "period": "2026-04", "value": 11, "target": null, "status": "no_data", "vs_prior": -18}, {"metric_id": "funnel.opportunities", "product_id": "sla_finance", "origin": "inbound", "period": "2026-05", "value": 16, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "funnel.opportunities", "product_id": "sla_finance", "origin": "inbound", "period": "2026-06", "value": 30, "target": null, "status": "no_data", "vs_prior": 14}, {"metric_id": "funnel.opportunities", "product_id": "sla_finance", "origin": "inbound", "period": "2026-07", "value": 31, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.opportunities", "product_id": "sla_finance", "origin": "inbound", "period": "2026-08", "value": 24, "target": null, "status": "no_data", "vs_prior": -7}, {"metric_id": "funnel.opportunities", "product_id": "sla_finance", "origin": "outbound", "period": "2026-03", "value": 7, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "sla_finance", "origin": "outbound", "period": "2026-04", "value": 16, "target": null, "status": "no_data", "vs_prior": 9}, {"metric_id": "funnel.opportunities", "product_id": "sla_finance", "origin": "outbound", "period": "2026-05", "value": 12, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.opportunities", "product_id": "sla_finance", "origin": "outbound", "period": "2026-06", "value": 5, "target": null, "status": "no_data", "vs_prior": -7}, {"metric_id": "funnel.opportunities", "product_id": "sla_finance", "origin": "outbound", "period": "2026-07", "value": 4, "target": null, "status": "no_data", "vs_prior": -1}, {"metric_id": "funnel.opportunities", "product_id": "sla_finance", "origin": "outbound", "period": "2026-08", "value": 9, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "funnel.opportunities", "product_id": "sla_hr", "origin": "inbound", "period": "2026-03", "value": 18, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "sla_hr", "origin": "inbound", "period": "2026-04", "value": 8, "target": null, "status": "no_data", "vs_prior": -10}, {"metric_id": "funnel.opportunities", "product_id": "sla_hr", "origin": "inbound", "period": "2026-05", "value": 30, "target": null, "status": "no_data", "vs_prior": 22}, {"metric_id": "funnel.opportunities", "product_id": "sla_hr", "origin": "inbound", "period": "2026-06", "value": 39, "target": null, "status": "no_data", "vs_prior": 9}, {"metric_id": "funnel.opportunities", "product_id": "sla_hr", "origin": "inbound", "period": "2026-07", "value": 11, "target": null, "status": "no_data", "vs_prior": -28}, {"metric_id": "funnel.opportunities", "product_id": "sla_hr", "origin": "inbound", "period": "2026-08", "value": 9, "target": null, "status": "no_data", "vs_prior": -2}, {"metric_id": "funnel.opportunities", "product_id": "sla_hr", "origin": "outbound", "period": "2026-03", "value": 16, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "sla_hr", "origin": "outbound", "period": "2026-04", "value": 17, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.opportunities", "product_id": "sla_hr", "origin": "outbound", "period": "2026-05", "value": 11, "target": null, "status": "no_data", "vs_prior": -6}, {"metric_id": "funnel.opportunities", "product_id": "sla_hr", "origin": "outbound", "period": "2026-06", "value": 11, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.opportunities", "product_id": "sla_hr", "origin": "outbound", "period": "2026-07", "value": 8, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "funnel.opportunities", "product_id": "sla_hr", "origin": "outbound", "period": "2026-08", "value": 11, "target": null, "status": "no_data", "vs_prior": 3}, {"metric_id": "funnel.opportunities", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-03", "value": 16, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-04", "value": 24, "target": null, "status": "no_data", "vs_prior": 8}, {"metric_id": "funnel.opportunities", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-05", "value": 12, "target": null, "status": "no_data", "vs_prior": -12}, {"metric_id": "funnel.opportunities", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-06", "value": 27, "target": null, "status": "no_data", "vs_prior": 15}, {"metric_id": "funnel.opportunities", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-07", "value": 15, "target": null, "status": "no_data", "vs_prior": -12}, {"metric_id": "funnel.opportunities", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-08", "value": 26, "target": null, "status": "no_data", "vs_prior": 11}, {"metric_id": "funnel.opportunities", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-03", "value": 11, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-04", "value": 4, "target": null, "status": "no_data", "vs_prior": -7}, {"metric_id": "funnel.opportunities", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-05", "value": 1, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "funnel.opportunities", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-06", "value": 8, "target": null, "status": "no_data", "vs_prior": 7}, {"metric_id": "funnel.opportunities", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-07", "value": 3, "target": null, "status": "no_data", "vs_prior": -5}, {"metric_id": "funnel.opportunities", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-08", "value": 3, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.opportunities", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-03", "value": 7, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-04", "value": 21, "target": null, "status": "no_data", "vs_prior": 14}, {"metric_id": "funnel.opportunities", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-05", "value": 38, "target": null, "status": "no_data", "vs_prior": 17}, {"metric_id": "funnel.opportunities", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-06", "value": 20, "target": null, "status": "no_data", "vs_prior": -18}, {"metric_id": "funnel.opportunities", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-07", "value": 19, "target": null, "status": "no_data", "vs_prior": -1}, {"metric_id": "funnel.opportunities", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-08", "value": 16, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "funnel.opportunities", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-03", "value": 10, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-04", "value": 5, "target": null, "status": "no_data", "vs_prior": -5}, {"metric_id": "funnel.opportunities", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-05", "value": 1, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.opportunities", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-06", "value": 5, "target": null, "status": "no_data", "vs_prior": 4}, {"metric_id": "funnel.opportunities", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-07", "value": 9, "target": null, "status": "no_data", "vs_prior": 4}, {"metric_id": "funnel.opportunities", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-08", "value": 5, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.opportunities", "product_id": "fluxflow", "origin": "inbound", "period": "2026-03", "value": 6, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "fluxflow", "origin": "inbound", "period": "2026-04", "value": 21, "target": null, "status": "no_data", "vs_prior": 15}, {"metric_id": "funnel.opportunities", "product_id": "fluxflow", "origin": "inbound", "period": "2026-05", "value": 6, "target": null, "status": "no_data", "vs_prior": -15}, {"metric_id": "funnel.opportunities", "product_id": "fluxflow", "origin": "inbound", "period": "2026-06", "value": 27, "target": null, "status": "no_data", "vs_prior": 21}, {"metric_id": "funnel.opportunities", "product_id": "fluxflow", "origin": "inbound", "period": "2026-07", "value": 32, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "funnel.opportunities", "product_id": "fluxflow", "origin": "inbound", "period": "2026-08", "value": 14, "target": null, "status": "no_data", "vs_prior": -18}, {"metric_id": "funnel.opportunities", "product_id": "fluxflow", "origin": "outbound", "period": "2026-03", "value": 4, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "fluxflow", "origin": "outbound", "period": "2026-04", "value": 12, "target": null, "status": "no_data", "vs_prior": 8}, {"metric_id": "funnel.opportunities", "product_id": "fluxflow", "origin": "outbound", "period": "2026-05", "value": 2, "target": null, "status": "no_data", "vs_prior": -10}, {"metric_id": "funnel.opportunities", "product_id": "fluxflow", "origin": "outbound", "period": "2026-06", "value": 6, "target": null, "status": "no_data", "vs_prior": 4}, {"metric_id": "funnel.opportunities", "product_id": "fluxflow", "origin": "outbound", "period": "2026-07", "value": 13, "target": null, "status": "no_data", "vs_prior": 7}, {"metric_id": "funnel.opportunities", "product_id": "fluxflow", "origin": "outbound", "period": "2026-08", "value": 13, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.opportunities", "product_id": "acdc_express", "origin": "inbound", "period": "2026-03", "value": 4, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "acdc_express", "origin": "inbound", "period": "2026-04", "value": 7, "target": null, "status": "no_data", "vs_prior": 3}, {"metric_id": "funnel.opportunities", "product_id": "acdc_express", "origin": "inbound", "period": "2026-05", "value": 29, "target": null, "status": "no_data", "vs_prior": 22}, {"metric_id": "funnel.opportunities", "product_id": "acdc_express", "origin": "inbound", "period": "2026-06", "value": 12, "target": null, "status": "no_data", "vs_prior": -17}, {"metric_id": "funnel.opportunities", "product_id": "acdc_express", "origin": "inbound", "period": "2026-07", "value": 30, "target": null, "status": "no_data", "vs_prior": 18}, {"metric_id": "funnel.opportunities", "product_id": "acdc_express", "origin": "inbound", "period": "2026-08", "value": 18, "target": null, "status": "no_data", "vs_prior": -12}, {"metric_id": "funnel.opportunities", "product_id": "acdc_express", "origin": "outbound", "period": "2026-03", "value": 8, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "acdc_express", "origin": "outbound", "period": "2026-04", "value": 7, "target": null, "status": "no_data", "vs_prior": -1}, {"metric_id": "funnel.opportunities", "product_id": "acdc_express", "origin": "outbound", "period": "2026-05", "value": 8, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.opportunities", "product_id": "acdc_express", "origin": "outbound", "period": "2026-06", "value": 7, "target": null, "status": "no_data", "vs_prior": -1}, {"metric_id": "funnel.opportunities", "product_id": "acdc_express", "origin": "outbound", "period": "2026-07", "value": 2, "target": null, "status": "no_data", "vs_prior": -5}, {"metric_id": "funnel.opportunities", "product_id": "acdc_express", "origin": "outbound", "period": "2026-08", "value": 8, "target": null, "status": "no_data", "vs_prior": 6}, {"metric_id": "funnel.opportunities", "product_id": "tlf", "origin": "inbound", "period": "2026-03", "value": 31, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "tlf", "origin": "inbound", "period": "2026-04", "value": 14, "target": null, "status": "no_data", "vs_prior": -17}, {"metric_id": "funnel.opportunities", "product_id": "tlf", "origin": "inbound", "period": "2026-05", "value": 5, "target": null, "status": "no_data", "vs_prior": -9}, {"metric_id": "funnel.opportunities", "product_id": "tlf", "origin": "inbound", "period": "2026-06", "value": 16, "target": null, "status": "no_data", "vs_prior": 11}, {"metric_id": "funnel.opportunities", "product_id": "tlf", "origin": "inbound", "period": "2026-07", "value": 38, "target": null, "status": "no_data", "vs_prior": 22}, {"metric_id": "funnel.opportunities", "product_id": "tlf", "origin": "inbound", "period": "2026-08", "value": 18, "target": null, "status": "no_data", "vs_prior": -20}, {"metric_id": "funnel.opportunities", "product_id": "tlf", "origin": "outbound", "period": "2026-03", "value": 5, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "tlf", "origin": "outbound", "period": "2026-04", "value": 13, "target": null, "status": "no_data", "vs_prior": 8}, {"metric_id": "funnel.opportunities", "product_id": "tlf", "origin": "outbound", "period": "2026-05", "value": 11, "target": null, "status": "no_data", "vs_prior": -2}, {"metric_id": "funnel.opportunities", "product_id": "tlf", "origin": "outbound", "period": "2026-06", "value": 8, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "funnel.opportunities", "product_id": "tlf", "origin": "outbound", "period": "2026-07", "value": 3, "target": null, "status": "no_data", "vs_prior": -5}, {"metric_id": "funnel.opportunities", "product_id": "tlf", "origin": "outbound", "period": "2026-08", "value": 17, "target": null, "status": "no_data", "vs_prior": 14}, {"metric_id": "funnel.opportunities", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-03", "value": 19, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-04", "value": 6, "target": null, "status": "no_data", "vs_prior": -13}, {"metric_id": "funnel.opportunities", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-05", "value": 28, "target": null, "status": "no_data", "vs_prior": 22}, {"metric_id": "funnel.opportunities", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-06", "value": 11, "target": null, "status": "no_data", "vs_prior": -17}, {"metric_id": "funnel.opportunities", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-07", "value": 7, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.opportunities", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-08", "value": 29, "target": null, "status": "no_data", "vs_prior": 22}, {"metric_id": "funnel.opportunities", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-03", "value": 3, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.opportunities", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-04", "value": 4, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.opportunities", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-05", "value": 6, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.opportunities", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-06", "value": 21, "target": null, "status": "no_data", "vs_prior": 15}, {"metric_id": "funnel.opportunities", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-07", "value": 21, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.opportunities", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-08", "value": 7, "target": null, "status": "no_data", "vs_prior": -14}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-03", "value": 641000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-04", "value": 292000, "target": null, "status": "no_data", "vs_prior": -349000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-05", "value": 414000, "target": null, "status": "no_data", "vs_prior": 122000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-06", "value": 448000, "target": null, "status": "no_data", "vs_prior": 34000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-07", "value": 429000, "target": null, "status": "no_data", "vs_prior": -19000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-08", "value": 336000, "target": null, "status": "no_data", "vs_prior": -93000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-03", "value": 38828, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-04", "value": 233321, "target": null, "status": "no_data", "vs_prior": 194493}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-05", "value": 165457, "target": null, "status": "no_data", "vs_prior": -67864}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-06", "value": 76678, "target": null, "status": "no_data", "vs_prior": -88779}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-07", "value": 134313, "target": null, "status": "no_data", "vs_prior": 57635}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-08", "value": 283463, "target": null, "status": "no_data", "vs_prior": 149150}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_finance", "origin": "inbound", "period": "2026-03", "value": 332000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_finance", "origin": "inbound", "period": "2026-04", "value": 213000, "target": null, "status": "no_data", "vs_prior": -119000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_finance", "origin": "inbound", "period": "2026-05", "value": 214000, "target": null, "status": "no_data", "vs_prior": 1000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_finance", "origin": "inbound", "period": "2026-06", "value": 493000, "target": null, "status": "no_data", "vs_prior": 279000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_finance", "origin": "inbound", "period": "2026-07", "value": 742000, "target": null, "status": "no_data", "vs_prior": 249000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_finance", "origin": "inbound", "period": "2026-08", "value": 97000, "target": null, "status": "no_data", "vs_prior": -645000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_finance", "origin": "outbound", "period": "2026-03", "value": 21941, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_finance", "origin": "outbound", "period": "2026-04", "value": 250862, "target": null, "status": "no_data", "vs_prior": 228921}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_finance", "origin": "outbound", "period": "2026-05", "value": 77271, "target": null, "status": "no_data", "vs_prior": -173591}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_finance", "origin": "outbound", "period": "2026-06", "value": 114420, "target": null, "status": "no_data", "vs_prior": 37149}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_finance", "origin": "outbound", "period": "2026-07", "value": 99677, "target": null, "status": "no_data", "vs_prior": -14743}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_finance", "origin": "outbound", "period": "2026-08", "value": 59437, "target": null, "status": "no_data", "vs_prior": -40240}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_hr", "origin": "inbound", "period": "2026-03", "value": 182000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_hr", "origin": "inbound", "period": "2026-04", "value": 648000, "target": null, "status": "no_data", "vs_prior": 466000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_hr", "origin": "inbound", "period": "2026-05", "value": 382000, "target": null, "status": "no_data", "vs_prior": -266000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_hr", "origin": "inbound", "period": "2026-06", "value": 538000, "target": null, "status": "no_data", "vs_prior": 156000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_hr", "origin": "inbound", "period": "2026-07", "value": 375000, "target": null, "status": "no_data", "vs_prior": -163000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_hr", "origin": "inbound", "period": "2026-08", "value": 143000, "target": null, "status": "no_data", "vs_prior": -232000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_hr", "origin": "outbound", "period": "2026-03", "value": 213533, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_hr", "origin": "outbound", "period": "2026-04", "value": 176507, "target": null, "status": "no_data", "vs_prior": -37026}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_hr", "origin": "outbound", "period": "2026-05", "value": 149219, "target": null, "status": "no_data", "vs_prior": -27288}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_hr", "origin": "outbound", "period": "2026-06", "value": 33024, "target": null, "status": "no_data", "vs_prior": -116195}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_hr", "origin": "outbound", "period": "2026-07", "value": 126936, "target": null, "status": "no_data", "vs_prior": 93912}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_hr", "origin": "outbound", "period": "2026-08", "value": 271134, "target": null, "status": "no_data", "vs_prior": 144198}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-03", "value": 785000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-04", "value": 507000, "target": null, "status": "no_data", "vs_prior": -278000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-05", "value": 163000, "target": null, "status": "no_data", "vs_prior": -344000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-06", "value": 181000, "target": null, "status": "no_data", "vs_prior": 18000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-07", "value": 883000, "target": null, "status": "no_data", "vs_prior": 702000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-08", "value": 244000, "target": null, "status": "no_data", "vs_prior": -639000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-03", "value": 227757, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-04", "value": 101883, "target": null, "status": "no_data", "vs_prior": -125874}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-05", "value": 120799, "target": null, "status": "no_data", "vs_prior": 18916}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-06", "value": 338015, "target": null, "status": "no_data", "vs_prior": 217216}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-07", "value": 207853, "target": null, "status": "no_data", "vs_prior": -130162}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-08", "value": 87637, "target": null, "status": "no_data", "vs_prior": -120216}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-03", "value": 206000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-04", "value": 595000, "target": null, "status": "no_data", "vs_prior": 389000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-05", "value": 84000, "target": null, "status": "no_data", "vs_prior": -511000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-06", "value": 286000, "target": null, "status": "no_data", "vs_prior": 202000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-07", "value": 442000, "target": null, "status": "no_data", "vs_prior": 156000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-08", "value": 118000, "target": null, "status": "no_data", "vs_prior": -324000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-03", "value": 132028, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-04", "value": 341227, "target": null, "status": "no_data", "vs_prior": 209199}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-05", "value": 274484, "target": null, "status": "no_data", "vs_prior": -66743}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-06", "value": 50549, "target": null, "status": "no_data", "vs_prior": -223935}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-07", "value": 84022, "target": null, "status": "no_data", "vs_prior": 33473}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-08", "value": 62672, "target": null, "status": "no_data", "vs_prior": -21350}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "fluxflow", "origin": "inbound", "period": "2026-03", "value": 402000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "fluxflow", "origin": "inbound", "period": "2026-04", "value": 327000, "target": null, "status": "no_data", "vs_prior": -75000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "fluxflow", "origin": "inbound", "period": "2026-05", "value": 198000, "target": null, "status": "no_data", "vs_prior": -129000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "fluxflow", "origin": "inbound", "period": "2026-06", "value": 102000, "target": null, "status": "no_data", "vs_prior": -96000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "fluxflow", "origin": "inbound", "period": "2026-07", "value": 85000, "target": null, "status": "no_data", "vs_prior": -17000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "fluxflow", "origin": "inbound", "period": "2026-08", "value": 647000, "target": null, "status": "no_data", "vs_prior": 562000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "fluxflow", "origin": "outbound", "period": "2026-03", "value": 157199, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "fluxflow", "origin": "outbound", "period": "2026-04", "value": 253631, "target": null, "status": "no_data", "vs_prior": 96432}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "fluxflow", "origin": "outbound", "period": "2026-05", "value": 213462, "target": null, "status": "no_data", "vs_prior": -40169}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "fluxflow", "origin": "outbound", "period": "2026-06", "value": 28030, "target": null, "status": "no_data", "vs_prior": -185432}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "fluxflow", "origin": "outbound", "period": "2026-07", "value": 124039, "target": null, "status": "no_data", "vs_prior": 96009}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "fluxflow", "origin": "outbound", "period": "2026-08", "value": 82907, "target": null, "status": "no_data", "vs_prior": -41132}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "acdc_express", "origin": "inbound", "period": "2026-03", "value": 756000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "acdc_express", "origin": "inbound", "period": "2026-04", "value": 369000, "target": null, "status": "no_data", "vs_prior": -387000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "acdc_express", "origin": "inbound", "period": "2026-05", "value": 279000, "target": null, "status": "no_data", "vs_prior": -90000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "acdc_express", "origin": "inbound", "period": "2026-06", "value": 114000, "target": null, "status": "no_data", "vs_prior": -165000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "acdc_express", "origin": "inbound", "period": "2026-07", "value": 94000, "target": null, "status": "no_data", "vs_prior": -20000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "acdc_express", "origin": "inbound", "period": "2026-08", "value": 600000, "target": null, "status": "no_data", "vs_prior": 506000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "acdc_express", "origin": "outbound", "period": "2026-03", "value": 139528, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "acdc_express", "origin": "outbound", "period": "2026-04", "value": 55636, "target": null, "status": "no_data", "vs_prior": -83892}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "acdc_express", "origin": "outbound", "period": "2026-05", "value": 161569, "target": null, "status": "no_data", "vs_prior": 105933}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "acdc_express", "origin": "outbound", "period": "2026-06", "value": 169612, "target": null, "status": "no_data", "vs_prior": 8043}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "acdc_express", "origin": "outbound", "period": "2026-07", "value": 244388, "target": null, "status": "no_data", "vs_prior": 74776}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "acdc_express", "origin": "outbound", "period": "2026-08", "value": 207098, "target": null, "status": "no_data", "vs_prior": -37290}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "tlf", "origin": "inbound", "period": "2026-03", "value": 619000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "tlf", "origin": "inbound", "period": "2026-04", "value": 409000, "target": null, "status": "no_data", "vs_prior": -210000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "tlf", "origin": "inbound", "period": "2026-05", "value": 597000, "target": null, "status": "no_data", "vs_prior": 188000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "tlf", "origin": "inbound", "period": "2026-06", "value": 667000, "target": null, "status": "no_data", "vs_prior": 70000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "tlf", "origin": "inbound", "period": "2026-07", "value": 813000, "target": null, "status": "no_data", "vs_prior": 146000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "tlf", "origin": "inbound", "period": "2026-08", "value": 211000, "target": null, "status": "no_data", "vs_prior": -602000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "tlf", "origin": "outbound", "period": "2026-03", "value": 370612, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "tlf", "origin": "outbound", "period": "2026-04", "value": 45014, "target": null, "status": "no_data", "vs_prior": -325598}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "tlf", "origin": "outbound", "period": "2026-05", "value": 161571, "target": null, "status": "no_data", "vs_prior": 116557}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "tlf", "origin": "outbound", "period": "2026-06", "value": 254508, "target": null, "status": "no_data", "vs_prior": 92937}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "tlf", "origin": "outbound", "period": "2026-07", "value": 295818, "target": null, "status": "no_data", "vs_prior": 41310}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "tlf", "origin": "outbound", "period": "2026-08", "value": 356763, "target": null, "status": "no_data", "vs_prior": 60945}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-03", "value": 421000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-04", "value": 871000, "target": null, "status": "no_data", "vs_prior": 450000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-05", "value": 510000, "target": null, "status": "no_data", "vs_prior": -361000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-06", "value": 357000, "target": null, "status": "no_data", "vs_prior": -153000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-07", "value": 786000, "target": null, "status": "no_data", "vs_prior": 429000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-08", "value": 94000, "target": null, "status": "no_data", "vs_prior": -692000}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-03", "value": 69106, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-04", "value": 254569, "target": null, "status": "no_data", "vs_prior": 185463}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-05", "value": 80153, "target": null, "status": "no_data", "vs_prior": -174416}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-06", "value": 104468, "target": null, "status": "no_data", "vs_prior": 24315}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-07", "value": 389490, "target": null, "status": "no_data", "vs_prior": 285022}, {"metric_id": "funnel.cost_per_opportunity", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-08", "value": 181879, "target": null, "status": "no_data", "vs_prior": -207611}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-03", "value": 74.1, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-04", "value": 66.4, "target": null, "status": "no_data", "vs_prior": -7.7}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-05", "value": 81.9, "target": null, "status": "no_data", "vs_prior": 15.5}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-06", "value": 73.2, "target": null, "status": "no_data", "vs_prior": -8.7}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-07", "value": 81.0, "target": null, "status": "no_data", "vs_prior": 7.8}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-08", "value": 88.5, "target": null, "status": "no_data", "vs_prior": 7.5}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-03", "value": 25, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-04", "value": 25, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-05", "value": 35, "target": null, "status": "no_data", "vs_prior": 10}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-06", "value": 30, "target": null, "status": "no_data", "vs_prior": -5}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-07", "value": 31, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-08", "value": 38, "target": null, "status": "no_data", "vs_prior": 7}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_finance", "origin": "inbound", "period": "2026-03", "value": 76.1, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_finance", "origin": "inbound", "period": "2026-04", "value": 85.9, "target": null, "status": "no_data", "vs_prior": 9.8}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_finance", "origin": "inbound", "period": "2026-05", "value": 73.3, "target": null, "status": "no_data", "vs_prior": -12.6}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_finance", "origin": "inbound", "period": "2026-06", "value": 93.9, "target": null, "status": "no_data", "vs_prior": 20.6}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_finance", "origin": "inbound", "period": "2026-07", "value": 90.8, "target": null, "status": "no_data", "vs_prior": -3.1}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_finance", "origin": "inbound", "period": "2026-08", "value": 69.3, "target": null, "status": "no_data", "vs_prior": -21.5}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_finance", "origin": "outbound", "period": "2026-03", "value": 22, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_finance", "origin": "outbound", "period": "2026-04", "value": 18, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_finance", "origin": "outbound", "period": "2026-05", "value": 44, "target": null, "status": "no_data", "vs_prior": 26}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_finance", "origin": "outbound", "period": "2026-06", "value": 46, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_finance", "origin": "outbound", "period": "2026-07", "value": 15, "target": null, "status": "no_data", "vs_prior": -31}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_finance", "origin": "outbound", "period": "2026-08", "value": 22, "target": null, "status": "no_data", "vs_prior": 7}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_hr", "origin": "inbound", "period": "2026-03", "value": 76.7, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_hr", "origin": "inbound", "period": "2026-04", "value": 89.5, "target": null, "status": "no_data", "vs_prior": 12.8}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_hr", "origin": "inbound", "period": "2026-05", "value": 83.4, "target": null, "status": "no_data", "vs_prior": -6.1}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_hr", "origin": "inbound", "period": "2026-06", "value": 67.2, "target": null, "status": "no_data", "vs_prior": -16.2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_hr", "origin": "inbound", "period": "2026-07", "value": 92.7, "target": null, "status": "no_data", "vs_prior": 25.5}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_hr", "origin": "inbound", "period": "2026-08", "value": 72.2, "target": null, "status": "no_data", "vs_prior": -20.5}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_hr", "origin": "outbound", "period": "2026-03", "value": 22, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_hr", "origin": "outbound", "period": "2026-04", "value": 42, "target": null, "status": "no_data", "vs_prior": 20}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_hr", "origin": "outbound", "period": "2026-05", "value": 28, "target": null, "status": "no_data", "vs_prior": -14}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_hr", "origin": "outbound", "period": "2026-06", "value": 40, "target": null, "status": "no_data", "vs_prior": 12}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_hr", "origin": "outbound", "period": "2026-07", "value": 38, "target": null, "status": "no_data", "vs_prior": -2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_hr", "origin": "outbound", "period": "2026-08", "value": 35, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-03", "value": 87.5, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-04", "value": 83.3, "target": null, "status": "no_data", "vs_prior": -4.2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-05", "value": 79.2, "target": null, "status": "no_data", "vs_prior": -4.1}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-06", "value": 84.1, "target": null, "status": "no_data", "vs_prior": 4.9}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-07", "value": 85.8, "target": null, "status": "no_data", "vs_prior": 1.7}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-08", "value": 87.0, "target": null, "status": "no_data", "vs_prior": 1.2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-03", "value": 23, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-04", "value": 29, "target": null, "status": "no_data", "vs_prior": 6}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-05", "value": 31, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-06", "value": 16, "target": null, "status": "no_data", "vs_prior": -15}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-07", "value": 38, "target": null, "status": "no_data", "vs_prior": 22}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-08", "value": 25, "target": null, "status": "no_data", "vs_prior": -13}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-03", "value": 65.2, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-04", "value": 77.3, "target": null, "status": "no_data", "vs_prior": 12.1}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-05", "value": 60.7, "target": null, "status": "no_data", "vs_prior": -16.6}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-06", "value": 76.6, "target": null, "status": "no_data", "vs_prior": 15.9}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-07", "value": 68.4, "target": null, "status": "no_data", "vs_prior": -8.2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-08", "value": 83.0, "target": null, "status": "no_data", "vs_prior": 14.6}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-03", "value": 24, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-04", "value": 56, "target": null, "status": "no_data", "vs_prior": 32}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-05", "value": 22, "target": null, "status": "no_data", "vs_prior": -34}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-06", "value": 38, "target": null, "status": "no_data", "vs_prior": 16}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-07", "value": 13, "target": null, "status": "no_data", "vs_prior": -25}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-08", "value": 42, "target": null, "status": "no_data", "vs_prior": 29}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "fluxflow", "origin": "inbound", "period": "2026-03", "value": 88.0, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "fluxflow", "origin": "inbound", "period": "2026-04", "value": 56.3, "target": null, "status": "no_data", "vs_prior": -31.7}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "fluxflow", "origin": "inbound", "period": "2026-05", "value": 57.2, "target": null, "status": "no_data", "vs_prior": 0.9}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "fluxflow", "origin": "inbound", "period": "2026-06", "value": 58.3, "target": null, "status": "no_data", "vs_prior": 1.1}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "fluxflow", "origin": "inbound", "period": "2026-07", "value": 87.5, "target": null, "status": "no_data", "vs_prior": 29.2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "fluxflow", "origin": "inbound", "period": "2026-08", "value": 67.0, "target": null, "status": "no_data", "vs_prior": -20.5}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "fluxflow", "origin": "outbound", "period": "2026-03", "value": 20, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "fluxflow", "origin": "outbound", "period": "2026-04", "value": 16, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "fluxflow", "origin": "outbound", "period": "2026-05", "value": 26, "target": null, "status": "no_data", "vs_prior": 10}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "fluxflow", "origin": "outbound", "period": "2026-06", "value": 32, "target": null, "status": "no_data", "vs_prior": 6}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "fluxflow", "origin": "outbound", "period": "2026-07", "value": 22, "target": null, "status": "no_data", "vs_prior": -10}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "fluxflow", "origin": "outbound", "period": "2026-08", "value": 18, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "acdc_express", "origin": "inbound", "period": "2026-03", "value": 85.0, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "acdc_express", "origin": "inbound", "period": "2026-04", "value": 88.1, "target": null, "status": "no_data", "vs_prior": 3.1}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "acdc_express", "origin": "inbound", "period": "2026-05", "value": 81.8, "target": null, "status": "no_data", "vs_prior": -6.3}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "acdc_express", "origin": "inbound", "period": "2026-06", "value": 64.7, "target": null, "status": "no_data", "vs_prior": -17.1}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "acdc_express", "origin": "inbound", "period": "2026-07", "value": 69.5, "target": null, "status": "no_data", "vs_prior": 4.8}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "acdc_express", "origin": "inbound", "period": "2026-08", "value": 77.7, "target": null, "status": "no_data", "vs_prior": 8.2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "acdc_express", "origin": "outbound", "period": "2026-03", "value": 45, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "acdc_express", "origin": "outbound", "period": "2026-04", "value": 36, "target": null, "status": "no_data", "vs_prior": -9}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "acdc_express", "origin": "outbound", "period": "2026-05", "value": 36, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "acdc_express", "origin": "outbound", "period": "2026-06", "value": 38, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "acdc_express", "origin": "outbound", "period": "2026-07", "value": 20, "target": null, "status": "no_data", "vs_prior": -18}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "acdc_express", "origin": "outbound", "period": "2026-08", "value": 34, "target": null, "status": "no_data", "vs_prior": 14}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "tlf", "origin": "inbound", "period": "2026-03", "value": 62.4, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "tlf", "origin": "inbound", "period": "2026-04", "value": 68.3, "target": null, "status": "no_data", "vs_prior": 5.9}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "tlf", "origin": "inbound", "period": "2026-05", "value": 60.7, "target": null, "status": "no_data", "vs_prior": -7.6}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "tlf", "origin": "inbound", "period": "2026-06", "value": 94.5, "target": null, "status": "no_data", "vs_prior": 33.8}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "tlf", "origin": "inbound", "period": "2026-07", "value": 75.5, "target": null, "status": "no_data", "vs_prior": -19.0}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "tlf", "origin": "inbound", "period": "2026-08", "value": 58.7, "target": null, "status": "no_data", "vs_prior": -16.8}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "tlf", "origin": "outbound", "period": "2026-03", "value": 46, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "tlf", "origin": "outbound", "period": "2026-04", "value": 31, "target": null, "status": "no_data", "vs_prior": -15}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "tlf", "origin": "outbound", "period": "2026-05", "value": 21, "target": null, "status": "no_data", "vs_prior": -10}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "tlf", "origin": "outbound", "period": "2026-06", "value": 23, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "tlf", "origin": "outbound", "period": "2026-07", "value": 24, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "tlf", "origin": "outbound", "period": "2026-08", "value": 18, "target": null, "status": "no_data", "vs_prior": -6}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-03", "value": 59.9, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-04", "value": 91.4, "target": null, "status": "no_data", "vs_prior": 31.5}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-05", "value": 64.4, "target": null, "status": "no_data", "vs_prior": -27.0}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-06", "value": 77.1, "target": null, "status": "no_data", "vs_prior": 12.7}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-07", "value": 86.4, "target": null, "status": "no_data", "vs_prior": 9.3}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-08", "value": 77.2, "target": null, "status": "no_data", "vs_prior": -9.2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-03", "value": 26, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-04", "value": 28, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-05", "value": 17, "target": null, "status": "no_data", "vs_prior": -11}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-06", "value": 14, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-07", "value": 36, "target": null, "status": "no_data", "vs_prior": 22}, {"metric_id": "funnel.conv_opp_to_close", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-08", "value": 29, "target": null, "status": "no_data", "vs_prior": -7}, {"metric_id": "funnel.output_zar", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-03", "value": 445000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_zar", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-04", "value": 773000, "target": null, "status": "no_data", "vs_prior": 328000}, {"metric_id": "funnel.output_zar", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-05", "value": 505000, "target": null, "status": "no_data", "vs_prior": -268000}, {"metric_id": "funnel.output_zar", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-06", "value": 842000, "target": null, "status": "no_data", "vs_prior": 337000}, {"metric_id": "funnel.output_zar", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-07", "value": 686000, "target": null, "status": "no_data", "vs_prior": -156000}, {"metric_id": "funnel.output_zar", "product_id": "inf_consultancy", "origin": "inbound", "period": "2026-08", "value": 890000, "target": null, "status": "no_data", "vs_prior": 204000}, {"metric_id": "funnel.output_zar", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-03", "value": 139077, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_zar", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-04", "value": 24762, "target": null, "status": "no_data", "vs_prior": -114315}, {"metric_id": "funnel.output_zar", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-05", "value": 415841, "target": null, "status": "no_data", "vs_prior": 391079}, {"metric_id": "funnel.output_zar", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-06", "value": 253765, "target": null, "status": "no_data", "vs_prior": -162076}, {"metric_id": "funnel.output_zar", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-07", "value": 73651, "target": null, "status": "no_data", "vs_prior": -180114}, {"metric_id": "funnel.output_zar", "product_id": "inf_consultancy", "origin": "outbound", "period": "2026-08", "value": 237701, "target": null, "status": "no_data", "vs_prior": 164050}, {"metric_id": "funnel.output_zar", "product_id": "sla_finance", "origin": "inbound", "period": "2026-03", "value": 177000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_zar", "product_id": "sla_finance", "origin": "inbound", "period": "2026-04", "value": 676000, "target": null, "status": "no_data", "vs_prior": 499000}, {"metric_id": "funnel.output_zar", "product_id": "sla_finance", "origin": "inbound", "period": "2026-05", "value": 222000, "target": null, "status": "no_data", "vs_prior": -454000}, {"metric_id": "funnel.output_zar", "product_id": "sla_finance", "origin": "inbound", "period": "2026-06", "value": 796000, "target": null, "status": "no_data", "vs_prior": 574000}, {"metric_id": "funnel.output_zar", "product_id": "sla_finance", "origin": "inbound", "period": "2026-07", "value": 427000, "target": null, "status": "no_data", "vs_prior": -369000}, {"metric_id": "funnel.output_zar", "product_id": "sla_finance", "origin": "inbound", "period": "2026-08", "value": 875000, "target": null, "status": "no_data", "vs_prior": 448000}, {"metric_id": "funnel.output_zar", "product_id": "sla_finance", "origin": "outbound", "period": "2026-03", "value": 95563, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_zar", "product_id": "sla_finance", "origin": "outbound", "period": "2026-04", "value": 387639, "target": null, "status": "no_data", "vs_prior": 292076}, {"metric_id": "funnel.output_zar", "product_id": "sla_finance", "origin": "outbound", "period": "2026-05", "value": 171673, "target": null, "status": "no_data", "vs_prior": -215966}, {"metric_id": "funnel.output_zar", "product_id": "sla_finance", "origin": "outbound", "period": "2026-06", "value": 58033, "target": null, "status": "no_data", "vs_prior": -113640}, {"metric_id": "funnel.output_zar", "product_id": "sla_finance", "origin": "outbound", "period": "2026-07", "value": 323376, "target": null, "status": "no_data", "vs_prior": 265343}, {"metric_id": "funnel.output_zar", "product_id": "sla_finance", "origin": "outbound", "period": "2026-08", "value": 350024, "target": null, "status": "no_data", "vs_prior": 26648}, {"metric_id": "funnel.output_zar", "product_id": "sla_hr", "origin": "inbound", "period": "2026-03", "value": 324000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_zar", "product_id": "sla_hr", "origin": "inbound", "period": "2026-04", "value": 438000, "target": null, "status": "no_data", "vs_prior": 114000}, {"metric_id": "funnel.output_zar", "product_id": "sla_hr", "origin": "inbound", "period": "2026-05", "value": 145000, "target": null, "status": "no_data", "vs_prior": -293000}, {"metric_id": "funnel.output_zar", "product_id": "sla_hr", "origin": "inbound", "period": "2026-06", "value": 122000, "target": null, "status": "no_data", "vs_prior": -23000}, {"metric_id": "funnel.output_zar", "product_id": "sla_hr", "origin": "inbound", "period": "2026-07", "value": 894000, "target": null, "status": "no_data", "vs_prior": 772000}, {"metric_id": "funnel.output_zar", "product_id": "sla_hr", "origin": "inbound", "period": "2026-08", "value": 827000, "target": null, "status": "no_data", "vs_prior": -67000}, {"metric_id": "funnel.output_zar", "product_id": "sla_hr", "origin": "outbound", "period": "2026-03", "value": 398045, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_zar", "product_id": "sla_hr", "origin": "outbound", "period": "2026-04", "value": 299435, "target": null, "status": "no_data", "vs_prior": -98610}, {"metric_id": "funnel.output_zar", "product_id": "sla_hr", "origin": "outbound", "period": "2026-05", "value": 71477, "target": null, "status": "no_data", "vs_prior": -227958}, {"metric_id": "funnel.output_zar", "product_id": "sla_hr", "origin": "outbound", "period": "2026-06", "value": 361568, "target": null, "status": "no_data", "vs_prior": 290091}, {"metric_id": "funnel.output_zar", "product_id": "sla_hr", "origin": "outbound", "period": "2026-07", "value": 238323, "target": null, "status": "no_data", "vs_prior": -123245}, {"metric_id": "funnel.output_zar", "product_id": "sla_hr", "origin": "outbound", "period": "2026-08", "value": 147344, "target": null, "status": "no_data", "vs_prior": -90979}, {"metric_id": "funnel.output_zar", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-03", "value": 629000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_zar", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-04", "value": 564000, "target": null, "status": "no_data", "vs_prior": -65000}, {"metric_id": "funnel.output_zar", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-05", "value": 276000, "target": null, "status": "no_data", "vs_prior": -288000}, {"metric_id": "funnel.output_zar", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-06", "value": 894000, "target": null, "status": "no_data", "vs_prior": 618000}, {"metric_id": "funnel.output_zar", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-07", "value": 767000, "target": null, "status": "no_data", "vs_prior": -127000}, {"metric_id": "funnel.output_zar", "product_id": "sla_zeestore", "origin": "inbound", "period": "2026-08", "value": 144000, "target": null, "status": "no_data", "vs_prior": -623000}, {"metric_id": "funnel.output_zar", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-03", "value": 370451, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_zar", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-04", "value": 202708, "target": null, "status": "no_data", "vs_prior": -167743}, {"metric_id": "funnel.output_zar", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-05", "value": 226128, "target": null, "status": "no_data", "vs_prior": 23420}, {"metric_id": "funnel.output_zar", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-06", "value": 55091, "target": null, "status": "no_data", "vs_prior": -171037}, {"metric_id": "funnel.output_zar", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-07", "value": 58033, "target": null, "status": "no_data", "vs_prior": 2942}, {"metric_id": "funnel.output_zar", "product_id": "sla_zeestore", "origin": "outbound", "period": "2026-08", "value": 371314, "target": null, "status": "no_data", "vs_prior": 313281}, {"metric_id": "funnel.output_zar", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-03", "value": 506000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_zar", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-04", "value": 206000, "target": null, "status": "no_data", "vs_prior": -300000}, {"metric_id": "funnel.output_zar", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-05", "value": 271000, "target": null, "status": "no_data", "vs_prior": 65000}, {"metric_id": "funnel.output_zar", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-06", "value": 719000, "target": null, "status": "no_data", "vs_prior": 448000}, {"metric_id": "funnel.output_zar", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-07", "value": 766000, "target": null, "status": "no_data", "vs_prior": 47000}, {"metric_id": "funnel.output_zar", "product_id": "infx_solutions", "origin": "inbound", "period": "2026-08", "value": 544000, "target": null, "status": "no_data", "vs_prior": -222000}, {"metric_id": "funnel.output_zar", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-03", "value": 440913, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_zar", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-04", "value": 124786, "target": null, "status": "no_data", "vs_prior": -316127}, {"metric_id": "funnel.output_zar", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-05", "value": 520436, "target": null, "status": "no_data", "vs_prior": 395650}, {"metric_id": "funnel.output_zar", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-06", "value": 163594, "target": null, "status": "no_data", "vs_prior": -356842}, {"metric_id": "funnel.output_zar", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-07", "value": 269530, "target": null, "status": "no_data", "vs_prior": 105936}, {"metric_id": "funnel.output_zar", "product_id": "infx_solutions", "origin": "outbound", "period": "2026-08", "value": 94535, "target": null, "status": "no_data", "vs_prior": -174995}, {"metric_id": "funnel.output_zar", "product_id": "fluxflow", "origin": "inbound", "period": "2026-03", "value": 624000, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_zar", "product_id": "fluxflow", "origin": "inbound", "period": "2026-04", "value": 365000, "target": null, "status": "no_data", "vs_prior": -259000}, {"metric_id": "funnel.output_zar", "product_id": "fluxflow", "origin": "inbound", "period": "2026-05", "value": 158000, "target": null, "status": "no_data", "vs_prior": -207000}, {"metric_id": "funnel.output_zar", "product_id": "fluxflow", "origin": "inbound", "period": "2026-06", "value": 743000, "target": null, "status": "no_data", "vs_prior": 585000}, {"metric_id": "funnel.output_zar", "product_id": "fluxflow", "origin": "inbound", "period": "2026-07", "value": 866000, "target": null, "status": "no_data", "vs_prior": 123000}, {"metric_id": "funnel.output_zar", "product_id": "fluxflow", "origin": "inbound", "period": "2026-08", "value": 498000, "target": null, "status": "no_data", "vs_prior": -368000}, {"metric_id": "funnel.output_zar", "product_id": "fluxflow", "origin": "outbound", "period": "2026-03", "value": 411595, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_zar", "product_id": "fluxflow", "origin": "outbound", "period": "2026-04", "value": 149342, "target": null, "status": "no_data", "vs_prior": -262253}, {"metric_id": "funnel.output_zar", "product_id": "fluxflow", "origin": "outbound", "period": "2026-05", "value": 137791, "target": null, "status": "no_data", "vs_prior": -11551}, {"metric_id": "funnel.output_zar", "product_id": "fluxflow", "origin": "outbound", "period": "2026-06", "value": 178830, "target": null, "status": "no_data", "vs_prior": 41039}, {"metric_id": "funnel.output_zar", "product_id": "fluxflow", "origin": "outbound", "period": "2026-07", "value": 153640, "target": null, "status": "no_data", "vs_prior": -25190}, {"metric_id": "funnel.output_zar", "product_id": "fluxflow", "origin": "outbound", "period": "2026-08", "value": 84122, "target": null, "status": "no_data", "vs_prior": -69518}, {"metric_id": "funnel.output_locations", "product_id": "acdc_express", "origin": "inbound", "period": "2026-03", "value": 4, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_locations", "product_id": "acdc_express", "origin": "inbound", "period": "2026-04", "value": 0, "target": null, "status": "no_data", "vs_prior": -4}, {"metric_id": "funnel.output_locations", "product_id": "acdc_express", "origin": "inbound", "period": "2026-05", "value": 1, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.output_locations", "product_id": "acdc_express", "origin": "inbound", "period": "2026-06", "value": 4, "target": null, "status": "no_data", "vs_prior": 3}, {"metric_id": "funnel.output_locations", "product_id": "acdc_express", "origin": "inbound", "period": "2026-07", "value": 1, "target": null, "status": "no_data", "vs_prior": -3}, {"metric_id": "funnel.output_locations", "product_id": "acdc_express", "origin": "inbound", "period": "2026-08", "value": 1, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.output_locations", "product_id": "acdc_express", "origin": "outbound", "period": "2026-03", "value": 2, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_locations", "product_id": "acdc_express", "origin": "outbound", "period": "2026-04", "value": 0, "target": null, "status": "no_data", "vs_prior": -2}, {"metric_id": "funnel.output_locations", "product_id": "acdc_express", "origin": "outbound", "period": "2026-05", "value": 2, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.output_locations", "product_id": "acdc_express", "origin": "outbound", "period": "2026-06", "value": 1, "target": null, "status": "no_data", "vs_prior": -1}, {"metric_id": "funnel.output_locations", "product_id": "acdc_express", "origin": "outbound", "period": "2026-07", "value": 0, "target": null, "status": "no_data", "vs_prior": -1}, {"metric_id": "funnel.output_locations", "product_id": "acdc_express", "origin": "outbound", "period": "2026-08", "value": 0, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.output_locations", "product_id": "tlf", "origin": "inbound", "period": "2026-03", "value": 1, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_locations", "product_id": "tlf", "origin": "inbound", "period": "2026-04", "value": 1, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.output_locations", "product_id": "tlf", "origin": "inbound", "period": "2026-05", "value": 1, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.output_locations", "product_id": "tlf", "origin": "inbound", "period": "2026-06", "value": 6, "target": null, "status": "no_data", "vs_prior": 5}, {"metric_id": "funnel.output_locations", "product_id": "tlf", "origin": "inbound", "period": "2026-07", "value": 1, "target": null, "status": "no_data", "vs_prior": -5}, {"metric_id": "funnel.output_locations", "product_id": "tlf", "origin": "inbound", "period": "2026-08", "value": 2, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.output_locations", "product_id": "tlf", "origin": "outbound", "period": "2026-03", "value": 1, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_locations", "product_id": "tlf", "origin": "outbound", "period": "2026-04", "value": 0, "target": null, "status": "no_data", "vs_prior": -1}, {"metric_id": "funnel.output_locations", "product_id": "tlf", "origin": "outbound", "period": "2026-05", "value": 1, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.output_locations", "product_id": "tlf", "origin": "outbound", "period": "2026-06", "value": 1, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.output_locations", "product_id": "tlf", "origin": "outbound", "period": "2026-07", "value": 0, "target": null, "status": "no_data", "vs_prior": -1}, {"metric_id": "funnel.output_locations", "product_id": "tlf", "origin": "outbound", "period": "2026-08", "value": 1, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.output_locations", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-03", "value": 3, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_locations", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-04", "value": 1, "target": null, "status": "no_data", "vs_prior": -2}, {"metric_id": "funnel.output_locations", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-05", "value": 2, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.output_locations", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-06", "value": 3, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.output_locations", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-07", "value": 3, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.output_locations", "product_id": "papa_pasta", "origin": "inbound", "period": "2026-08", "value": 6, "target": null, "status": "no_data", "vs_prior": 3}, {"metric_id": "funnel.output_locations", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-03", "value": 0, "target": null, "status": "no_data", "vs_prior": null}, {"metric_id": "funnel.output_locations", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-04", "value": 2, "target": null, "status": "no_data", "vs_prior": 2}, {"metric_id": "funnel.output_locations", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-05", "value": 1, "target": null, "status": "no_data", "vs_prior": -1}, {"metric_id": "funnel.output_locations", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-06", "value": 1, "target": null, "status": "no_data", "vs_prior": 0}, {"metric_id": "funnel.output_locations", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-07", "value": 2, "target": null, "status": "no_data", "vs_prior": 1}, {"metric_id": "funnel.output_locations", "product_id": "papa_pasta", "origin": "outbound", "period": "2026-08", "value": 0, "target": null, "status": "no_data", "vs_prior": -2}, {"metric_id": "fin.ebitda", "brand_id": "infinity", "period": "2026-03", "value": 466000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda", "brand_id": "infinity", "period": "2026-04", "value": 150000, "target": 0, "status": "green", "vs_prior": -316000}, {"metric_id": "fin.ebitda", "brand_id": "infinity", "period": "2026-05", "value": 326000, "target": 0, "status": "green", "vs_prior": 176000}, {"metric_id": "fin.ebitda", "brand_id": "infinity", "period": "2026-06", "value": 279000, "target": 0, "status": "green", "vs_prior": -47000}, {"metric_id": "fin.ebitda", "brand_id": "infinity", "period": "2026-07", "value": 566000, "target": 0, "status": "green", "vs_prior": 287000}, {"metric_id": "fin.ebitda", "brand_id": "infinity", "period": "2026-08", "value": 265000, "target": 0, "status": "green", "vs_prior": -301000}, {"metric_id": "fin.ebitda", "brand_id": "tlf", "period": "2026-03", "value": 620000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda", "brand_id": "tlf", "period": "2026-04", "value": 657000, "target": 0, "status": "green", "vs_prior": 37000}, {"metric_id": "fin.ebitda", "brand_id": "tlf", "period": "2026-05", "value": 129000, "target": 0, "status": "green", "vs_prior": -528000}, {"metric_id": "fin.ebitda", "brand_id": "tlf", "period": "2026-06", "value": 720000, "target": 0, "status": "green", "vs_prior": 591000}, {"metric_id": "fin.ebitda", "brand_id": "tlf", "period": "2026-07", "value": 570000, "target": 0, "status": "green", "vs_prior": -150000}, {"metric_id": "fin.ebitda", "brand_id": "tlf", "period": "2026-08", "value": -125000, "target": 0, "status": "red", "vs_prior": -695000}, {"metric_id": "fin.ebitda", "brand_id": "infx", "period": "2026-03", "value": 243000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda", "brand_id": "infx", "period": "2026-04", "value": 402000, "target": 0, "status": "green", "vs_prior": 159000}, {"metric_id": "fin.ebitda", "brand_id": "infx", "period": "2026-05", "value": 435000, "target": 0, "status": "green", "vs_prior": 33000}, {"metric_id": "fin.ebitda", "brand_id": "infx", "period": "2026-06", "value": 728000, "target": 0, "status": "green", "vs_prior": 293000}, {"metric_id": "fin.ebitda", "brand_id": "infx", "period": "2026-07", "value": 539000, "target": 0, "status": "green", "vs_prior": -189000}, {"metric_id": "fin.ebitda", "brand_id": "infx", "period": "2026-08", "value": -36000, "target": 0, "status": "red", "vs_prior": -575000}, {"metric_id": "fin.ebitda", "brand_id": "fluxflow", "period": "2026-03", "value": 632000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda", "brand_id": "fluxflow", "period": "2026-04", "value": 287000, "target": 0, "status": "green", "vs_prior": -345000}, {"metric_id": "fin.ebitda", "brand_id": "fluxflow", "period": "2026-05", "value": 335000, "target": 0, "status": "green", "vs_prior": 48000}, {"metric_id": "fin.ebitda", "brand_id": "fluxflow", "period": "2026-06", "value": 267000, "target": 0, "status": "green", "vs_prior": -68000}, {"metric_id": "fin.ebitda", "brand_id": "fluxflow", "period": "2026-07", "value": 800000, "target": 0, "status": "green", "vs_prior": 533000}, {"metric_id": "fin.ebitda", "brand_id": "fluxflow", "period": "2026-08", "value": 633000, "target": 0, "status": "green", "vs_prior": -167000}, {"metric_id": "fin.ebitda", "brand_id": "divorced", "period": "2026-03", "value": 379000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda", "brand_id": "divorced", "period": "2026-04", "value": -56000, "target": 0, "status": "red", "vs_prior": -435000}, {"metric_id": "fin.ebitda", "brand_id": "divorced", "period": "2026-05", "value": 4000, "target": 0, "status": "green", "vs_prior": 60000}, {"metric_id": "fin.ebitda", "brand_id": "divorced", "period": "2026-06", "value": 751000, "target": 0, "status": "green", "vs_prior": 747000}, {"metric_id": "fin.ebitda", "brand_id": "divorced", "period": "2026-07", "value": 560000, "target": 0, "status": "green", "vs_prior": -191000}, {"metric_id": "fin.ebitda", "brand_id": "divorced", "period": "2026-08", "value": -111000, "target": 0, "status": "red", "vs_prior": -671000}, {"metric_id": "fin.ebitda", "brand_id": "papapasta", "period": "2026-03", "value": -119000, "target": 0, "status": "red", "vs_prior": null}, {"metric_id": "fin.ebitda", "brand_id": "papapasta", "period": "2026-04", "value": 172000, "target": 0, "status": "green", "vs_prior": 291000}, {"metric_id": "fin.ebitda", "brand_id": "papapasta", "period": "2026-05", "value": 118000, "target": 0, "status": "green", "vs_prior": -54000}, {"metric_id": "fin.ebitda", "brand_id": "papapasta", "period": "2026-06", "value": -139000, "target": 0, "status": "red", "vs_prior": -257000}, {"metric_id": "fin.ebitda", "brand_id": "papapasta", "period": "2026-07", "value": -52000, "target": 0, "status": "red", "vs_prior": 87000}, {"metric_id": "fin.ebitda", "brand_id": "papapasta", "period": "2026-08", "value": 673000, "target": 0, "status": "green", "vs_prior": 725000}, {"metric_id": "fin.ebitda", "brand_id": "acdc", "period": "2026-03", "value": 658000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda", "brand_id": "acdc", "period": "2026-04", "value": 79000, "target": 0, "status": "green", "vs_prior": -579000}, {"metric_id": "fin.ebitda", "brand_id": "acdc", "period": "2026-05", "value": -142000, "target": 0, "status": "red", "vs_prior": -221000}, {"metric_id": "fin.ebitda", "brand_id": "acdc", "period": "2026-06", "value": 445000, "target": 0, "status": "green", "vs_prior": 587000}, {"metric_id": "fin.ebitda", "brand_id": "acdc", "period": "2026-07", "value": -34000, "target": 0, "status": "red", "vs_prior": -479000}, {"metric_id": "fin.ebitda", "brand_id": "acdc", "period": "2026-08", "value": 226000, "target": 0, "status": "green", "vs_prior": 260000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-03", "value": 570000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-03", "value": 42.5, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-03", "value": 458000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-04", "value": 151000, "target": 0, "status": "green", "vs_prior": -419000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-04", "value": 34.0, "target": 0, "status": "green", "vs_prior": -8.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-04", "value": 276000, "target": 0, "status": "green", "vs_prior": -182000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-05", "value": 648000, "target": 0, "status": "green", "vs_prior": 497000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-05", "value": 65.7, "target": 0, "status": "green", "vs_prior": 31.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-05", "value": -28000, "target": 0, "status": "red", "vs_prior": -304000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-06", "value": 727000, "target": 0, "status": "green", "vs_prior": 79000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-06", "value": 42.2, "target": 0, "status": "green", "vs_prior": -23.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-06", "value": -78000, "target": 0, "status": "red", "vs_prior": -50000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-07", "value": 853000, "target": 0, "status": "green", "vs_prior": 126000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-07", "value": 36.5, "target": 0, "status": "green", "vs_prior": -5.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-07", "value": -116000, "target": 0, "status": "red", "vs_prior": -38000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-08", "value": 728000, "target": 0, "status": "green", "vs_prior": -125000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-08", "value": 64.4, "target": 0, "status": "green", "vs_prior": 27.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "fin", "period": "2026-08", "value": 112000, "target": 0, "status": "green", "vs_prior": 228000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-03", "value": 195000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-03", "value": 30.0, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-03", "value": 477000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-04", "value": 214000, "target": 0, "status": "green", "vs_prior": 19000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-04", "value": 61.2, "target": 0, "status": "green", "vs_prior": 31.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-04", "value": 286000, "target": 0, "status": "green", "vs_prior": -191000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-05", "value": 224000, "target": 0, "status": "green", "vs_prior": 10000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-05", "value": 30.7, "target": 0, "status": "green", "vs_prior": -30.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-05", "value": 413000, "target": 0, "status": "green", "vs_prior": 127000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-06", "value": 300000, "target": 0, "status": "green", "vs_prior": 76000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-06", "value": 69.0, "target": 0, "status": "green", "vs_prior": 38.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-06", "value": 496000, "target": 0, "status": "green", "vs_prior": 83000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-07", "value": 289000, "target": 0, "status": "green", "vs_prior": -11000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-07", "value": 49.3, "target": 0, "status": "green", "vs_prior": -19.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-07", "value": 495000, "target": 0, "status": "green", "vs_prior": -1000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-08", "value": 370000, "target": 0, "status": "green", "vs_prior": 81000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-08", "value": 60.0, "target": 0, "status": "green", "vs_prior": 10.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "hr", "period": "2026-08", "value": 173000, "target": 0, "status": "green", "vs_prior": -322000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-03", "value": 715000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-03", "value": 57.4, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-03", "value": 488000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-04", "value": 452000, "target": 0, "status": "green", "vs_prior": -263000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-04", "value": 58.0, "target": 0, "status": "green", "vs_prior": 0.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-04", "value": 238000, "target": 0, "status": "green", "vs_prior": -250000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-05", "value": 175000, "target": 0, "status": "green", "vs_prior": -277000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-05", "value": 63.6, "target": 0, "status": "green", "vs_prior": 5.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-05", "value": -69000, "target": 0, "status": "red", "vs_prior": -307000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-06", "value": 110000, "target": 0, "status": "green", "vs_prior": -65000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-06", "value": 71.3, "target": 0, "status": "green", "vs_prior": 7.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-06", "value": 400000, "target": 0, "status": "green", "vs_prior": 469000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-07", "value": 113000, "target": 0, "status": "green", "vs_prior": 3000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-07", "value": 48.5, "target": 0, "status": "green", "vs_prior": -22.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-07", "value": 17000, "target": 0, "status": "green", "vs_prior": -383000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-08", "value": 457000, "target": 0, "status": "green", "vs_prior": 344000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-08", "value": 30.5, "target": 0, "status": "green", "vs_prior": -18.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "adm", "period": "2026-08", "value": 360000, "target": 0, "status": "green", "vs_prior": 343000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-03", "value": 475000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-03", "value": 70.9, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-03", "value": -26000, "target": 0, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-04", "value": 476000, "target": 0, "status": "green", "vs_prior": 1000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-04", "value": 27.6, "target": 0, "status": "green", "vs_prior": -43.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-04", "value": -116000, "target": 0, "status": "red", "vs_prior": -90000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-05", "value": 771000, "target": 0, "status": "green", "vs_prior": 295000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-05", "value": 48.0, "target": 0, "status": "green", "vs_prior": 20.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-05", "value": 81000, "target": 0, "status": "green", "vs_prior": 197000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-06", "value": 366000, "target": 0, "status": "green", "vs_prior": -405000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-06", "value": 53.1, "target": 0, "status": "green", "vs_prior": 5.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-06", "value": 33000, "target": 0, "status": "green", "vs_prior": -48000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-07", "value": 756000, "target": 0, "status": "green", "vs_prior": 390000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-07", "value": 43.2, "target": 0, "status": "green", "vs_prior": -9.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-07", "value": 380000, "target": 0, "status": "green", "vs_prior": 347000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-08", "value": 809000, "target": 0, "status": "green", "vs_prior": 53000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-08", "value": 35.1, "target": 0, "status": "green", "vs_prior": -8.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "it", "period": "2026-08", "value": 298000, "target": 0, "status": "green", "vs_prior": -82000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-03", "value": 864000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-03", "value": 26.6, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-03", "value": 313000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-04", "value": 415000, "target": 0, "status": "green", "vs_prior": -449000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-04", "value": 46.5, "target": 0, "status": "green", "vs_prior": 19.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-04", "value": 75000, "target": 0, "status": "green", "vs_prior": -238000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-05", "value": 194000, "target": 0, "status": "green", "vs_prior": -221000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-05", "value": 40.0, "target": 0, "status": "green", "vs_prior": -6.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-05", "value": 425000, "target": 0, "status": "green", "vs_prior": 350000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-06", "value": 489000, "target": 0, "status": "green", "vs_prior": 295000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-06", "value": 57.4, "target": 0, "status": "green", "vs_prior": 17.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-06", "value": -57000, "target": 0, "status": "red", "vs_prior": -482000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-07", "value": 127000, "target": 0, "status": "green", "vs_prior": -362000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-07", "value": 30.8, "target": 0, "status": "green", "vs_prior": -26.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-07", "value": 176000, "target": 0, "status": "green", "vs_prior": 233000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-08", "value": 636000, "target": 0, "status": "green", "vs_prior": 509000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-08", "value": 70.6, "target": 0, "status": "green", "vs_prior": 39.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "mkt", "period": "2026-08", "value": 293000, "target": 0, "status": "green", "vs_prior": 117000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-03", "value": 429000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-03", "value": 35.8, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-03", "value": 297000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-04", "value": 473000, "target": 0, "status": "green", "vs_prior": 44000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-04", "value": 37.6, "target": 0, "status": "green", "vs_prior": 1.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-04", "value": 369000, "target": 0, "status": "green", "vs_prior": 72000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-05", "value": 699000, "target": 0, "status": "green", "vs_prior": 226000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-05", "value": 64.3, "target": 0, "status": "green", "vs_prior": 26.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-05", "value": 223000, "target": 0, "status": "green", "vs_prior": -146000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-06", "value": 798000, "target": 0, "status": "green", "vs_prior": 99000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-06", "value": 26.8, "target": 0, "status": "green", "vs_prior": -37.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-06", "value": 145000, "target": 0, "status": "green", "vs_prior": -78000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-07", "value": 653000, "target": 0, "status": "green", "vs_prior": -145000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-07", "value": 62.3, "target": 0, "status": "green", "vs_prior": 35.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-07", "value": 172000, "target": 0, "status": "green", "vs_prior": 27000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-08", "value": 342000, "target": 0, "status": "green", "vs_prior": -311000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-08", "value": 68.6, "target": 0, "status": "green", "vs_prior": 6.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "sal", "period": "2026-08", "value": 65000, "target": 0, "status": "green", "vs_prior": -107000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-03", "value": 732000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-03", "value": 28.1, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-03", "value": 113000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-04", "value": 833000, "target": 0, "status": "green", "vs_prior": 101000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-04", "value": 44.0, "target": 0, "status": "green", "vs_prior": 15.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-04", "value": 412000, "target": 0, "status": "green", "vs_prior": 299000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-05", "value": 225000, "target": 0, "status": "green", "vs_prior": -608000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-05", "value": 60.8, "target": 0, "status": "green", "vs_prior": 16.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-05", "value": -55000, "target": 0, "status": "red", "vs_prior": -467000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-06", "value": 740000, "target": 0, "status": "green", "vs_prior": 515000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-06", "value": 72.7, "target": 0, "status": "green", "vs_prior": 11.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-06", "value": 301000, "target": 0, "status": "green", "vs_prior": 356000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-07", "value": 329000, "target": 0, "status": "green", "vs_prior": -411000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-07", "value": 26.2, "target": 0, "status": "green", "vs_prior": -46.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-07", "value": 214000, "target": 0, "status": "green", "vs_prior": -87000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-08", "value": 622000, "target": 0, "status": "green", "vs_prior": 293000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-08", "value": 41.9, "target": 0, "status": "green", "vs_prior": 15.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "ops1", "period": "2026-08", "value": -42000, "target": 0, "status": "red", "vs_prior": -256000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-03", "value": 874000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-03", "value": 70.4, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-03", "value": 375000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-04", "value": 706000, "target": 0, "status": "green", "vs_prior": -168000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-04", "value": 56.1, "target": 0, "status": "green", "vs_prior": -14.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-04", "value": 334000, "target": 0, "status": "green", "vs_prior": -41000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-05", "value": 258000, "target": 0, "status": "green", "vs_prior": -448000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-05", "value": 29.2, "target": 0, "status": "green", "vs_prior": -26.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-05", "value": 425000, "target": 0, "status": "green", "vs_prior": 91000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-06", "value": 274000, "target": 0, "status": "green", "vs_prior": 16000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-06", "value": 55.7, "target": 0, "status": "green", "vs_prior": 26.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-06", "value": 154000, "target": 0, "status": "green", "vs_prior": -271000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-07", "value": 287000, "target": 0, "status": "green", "vs_prior": 13000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-07", "value": 39.5, "target": 0, "status": "green", "vs_prior": -16.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-07", "value": 405000, "target": 0, "status": "green", "vs_prior": 251000}, {"metric_id": "fin.revenue_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-08", "value": 830000, "target": 0, "status": "green", "vs_prior": 543000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-08", "value": 72.5, "target": 0, "status": "green", "vs_prior": 33.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "infinity", "dept_id": "ops2", "period": "2026-08", "value": 454000, "target": 0, "status": "green", "vs_prior": 49000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-03", "value": 132000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-03", "value": 28.2, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-03", "value": 412000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-04", "value": 465000, "target": 0, "status": "green", "vs_prior": 333000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-04", "value": 61.4, "target": 0, "status": "green", "vs_prior": 33.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-04", "value": 39000, "target": 0, "status": "green", "vs_prior": -373000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-05", "value": 827000, "target": 0, "status": "green", "vs_prior": 362000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-05", "value": 32.9, "target": 0, "status": "green", "vs_prior": -28.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-05", "value": 360000, "target": 0, "status": "green", "vs_prior": 321000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-06", "value": 409000, "target": 0, "status": "green", "vs_prior": -418000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-06", "value": 35.2, "target": 0, "status": "green", "vs_prior": 2.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-06", "value": 222000, "target": 0, "status": "green", "vs_prior": -138000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-07", "value": 484000, "target": 0, "status": "green", "vs_prior": 75000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-07", "value": 59.7, "target": 0, "status": "green", "vs_prior": 24.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-07", "value": 291000, "target": 0, "status": "green", "vs_prior": 69000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-08", "value": 425000, "target": 0, "status": "green", "vs_prior": -59000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-08", "value": 55.9, "target": 0, "status": "green", "vs_prior": -3.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "fin", "period": "2026-08", "value": 202000, "target": 0, "status": "green", "vs_prior": -89000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-03", "value": 676000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-03", "value": 64.2, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-03", "value": 212000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-04", "value": 412000, "target": 0, "status": "green", "vs_prior": -264000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-04", "value": 62.6, "target": 0, "status": "green", "vs_prior": -1.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-04", "value": -51000, "target": 0, "status": "red", "vs_prior": -263000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-05", "value": 848000, "target": 0, "status": "green", "vs_prior": 436000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-05", "value": 35.5, "target": 0, "status": "green", "vs_prior": -27.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-05", "value": -101000, "target": 0, "status": "red", "vs_prior": -50000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-06", "value": 753000, "target": 0, "status": "green", "vs_prior": -95000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-06", "value": 39.3, "target": 0, "status": "green", "vs_prior": 3.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-06", "value": -98000, "target": 0, "status": "red", "vs_prior": 3000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-07", "value": 525000, "target": 0, "status": "green", "vs_prior": -228000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-07", "value": 33.5, "target": 0, "status": "green", "vs_prior": -5.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-07", "value": -131000, "target": 0, "status": "red", "vs_prior": -33000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-08", "value": 190000, "target": 0, "status": "green", "vs_prior": -335000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-08", "value": 63.9, "target": 0, "status": "green", "vs_prior": 30.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "hr", "period": "2026-08", "value": 265000, "target": 0, "status": "green", "vs_prior": 396000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-03", "value": 635000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-03", "value": 39.0, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-03", "value": 149000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-04", "value": 181000, "target": 0, "status": "green", "vs_prior": -454000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-04", "value": 56.0, "target": 0, "status": "green", "vs_prior": 17.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-04", "value": 454000, "target": 0, "status": "green", "vs_prior": 305000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-05", "value": 441000, "target": 0, "status": "green", "vs_prior": 260000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-05", "value": 55.0, "target": 0, "status": "green", "vs_prior": -1.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-05", "value": -127000, "target": 0, "status": "red", "vs_prior": -581000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-06", "value": 776000, "target": 0, "status": "green", "vs_prior": 335000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-06", "value": 66.9, "target": 0, "status": "green", "vs_prior": 11.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-06", "value": 429000, "target": 0, "status": "green", "vs_prior": 556000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-07", "value": 202000, "target": 0, "status": "green", "vs_prior": -574000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-07", "value": 43.9, "target": 0, "status": "green", "vs_prior": -23.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-07", "value": 447000, "target": 0, "status": "green", "vs_prior": 18000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-08", "value": 318000, "target": 0, "status": "green", "vs_prior": 116000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-08", "value": 73.1, "target": 0, "status": "green", "vs_prior": 29.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "adm", "period": "2026-08", "value": -136000, "target": 0, "status": "red", "vs_prior": -583000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-03", "value": 751000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-03", "value": 50.7, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-03", "value": -38000, "target": 0, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-04", "value": 606000, "target": 0, "status": "green", "vs_prior": -145000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-04", "value": 44.6, "target": 0, "status": "green", "vs_prior": -6.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-04", "value": 335000, "target": 0, "status": "green", "vs_prior": 373000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-05", "value": 509000, "target": 0, "status": "green", "vs_prior": -97000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-05", "value": 49.0, "target": 0, "status": "green", "vs_prior": 4.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-05", "value": 272000, "target": 0, "status": "green", "vs_prior": -63000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-06", "value": 781000, "target": 0, "status": "green", "vs_prior": 272000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-06", "value": 45.3, "target": 0, "status": "green", "vs_prior": -3.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-06", "value": 149000, "target": 0, "status": "green", "vs_prior": -123000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-07", "value": 178000, "target": 0, "status": "green", "vs_prior": -603000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-07", "value": 63.2, "target": 0, "status": "green", "vs_prior": 17.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-07", "value": 280000, "target": 0, "status": "green", "vs_prior": 131000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-08", "value": 116000, "target": 0, "status": "green", "vs_prior": -62000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-08", "value": 36.0, "target": 0, "status": "green", "vs_prior": -27.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "it", "period": "2026-08", "value": 96000, "target": 0, "status": "green", "vs_prior": -184000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-03", "value": 617000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-03", "value": 26.0, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-03", "value": -36000, "target": 0, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-04", "value": 332000, "target": 0, "status": "green", "vs_prior": -285000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-04", "value": 31.0, "target": 0, "status": "green", "vs_prior": 5.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-04", "value": 79000, "target": 0, "status": "green", "vs_prior": 115000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-05", "value": 856000, "target": 0, "status": "green", "vs_prior": 524000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-05", "value": 56.9, "target": 0, "status": "green", "vs_prior": 25.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-05", "value": -30000, "target": 0, "status": "red", "vs_prior": -109000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-06", "value": 374000, "target": 0, "status": "green", "vs_prior": -482000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-06", "value": 74.2, "target": 0, "status": "green", "vs_prior": 17.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-06", "value": -134000, "target": 0, "status": "red", "vs_prior": -104000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-07", "value": 315000, "target": 0, "status": "green", "vs_prior": -59000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-07", "value": 43.0, "target": 0, "status": "green", "vs_prior": -31.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-07", "value": 331000, "target": 0, "status": "green", "vs_prior": 465000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-08", "value": 756000, "target": 0, "status": "green", "vs_prior": 441000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-08", "value": 26.0, "target": 0, "status": "green", "vs_prior": -17.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "mkt", "period": "2026-08", "value": 237000, "target": 0, "status": "green", "vs_prior": -94000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-03", "value": 878000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-03", "value": 49.3, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-03", "value": 419000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-04", "value": 312000, "target": 0, "status": "green", "vs_prior": -566000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-04", "value": 37.4, "target": 0, "status": "green", "vs_prior": -11.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-04", "value": 269000, "target": 0, "status": "green", "vs_prior": -150000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-05", "value": 417000, "target": 0, "status": "green", "vs_prior": 105000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-05", "value": 61.4, "target": 0, "status": "green", "vs_prior": 24.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-05", "value": 241000, "target": 0, "status": "green", "vs_prior": -28000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-06", "value": 300000, "target": 0, "status": "green", "vs_prior": -117000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-06", "value": 57.0, "target": 0, "status": "green", "vs_prior": -4.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-06", "value": 14000, "target": 0, "status": "green", "vs_prior": -227000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-07", "value": 101000, "target": 0, "status": "green", "vs_prior": -199000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-07", "value": 32.5, "target": 0, "status": "green", "vs_prior": -24.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-07", "value": 218000, "target": 0, "status": "green", "vs_prior": 204000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-08", "value": 588000, "target": 0, "status": "green", "vs_prior": 487000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-08", "value": 67.6, "target": 0, "status": "green", "vs_prior": 35.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "sal", "period": "2026-08", "value": -126000, "target": 0, "status": "red", "vs_prior": -344000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-03", "value": 848000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-03", "value": 74.0, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-03", "value": -126000, "target": 0, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-04", "value": 356000, "target": 0, "status": "green", "vs_prior": -492000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-04", "value": 62.6, "target": 0, "status": "green", "vs_prior": -11.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-04", "value": 178000, "target": 0, "status": "green", "vs_prior": 304000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-05", "value": 809000, "target": 0, "status": "green", "vs_prior": 453000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-05", "value": 32.5, "target": 0, "status": "green", "vs_prior": -30.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-05", "value": 127000, "target": 0, "status": "green", "vs_prior": -51000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-06", "value": 573000, "target": 0, "status": "green", "vs_prior": -236000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-06", "value": 31.3, "target": 0, "status": "green", "vs_prior": -1.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-06", "value": 230000, "target": 0, "status": "green", "vs_prior": 103000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-07", "value": 381000, "target": 0, "status": "green", "vs_prior": -192000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-07", "value": 58.0, "target": 0, "status": "green", "vs_prior": 26.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-07", "value": -107000, "target": 0, "status": "red", "vs_prior": -337000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-08", "value": 831000, "target": 0, "status": "green", "vs_prior": 450000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-08", "value": 25.5, "target": 0, "status": "green", "vs_prior": -32.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "ops1", "period": "2026-08", "value": -146000, "target": 0, "status": "red", "vs_prior": -39000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-03", "value": 710000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-03", "value": 38.3, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-03", "value": 428000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-04", "value": 778000, "target": 0, "status": "green", "vs_prior": 68000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-04", "value": 32.9, "target": 0, "status": "green", "vs_prior": -5.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-04", "value": 64000, "target": 0, "status": "green", "vs_prior": -364000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-05", "value": 119000, "target": 0, "status": "green", "vs_prior": -659000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-05", "value": 40.7, "target": 0, "status": "green", "vs_prior": 7.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-05", "value": 423000, "target": 0, "status": "green", "vs_prior": 359000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-06", "value": 382000, "target": 0, "status": "green", "vs_prior": 263000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-06", "value": 70.9, "target": 0, "status": "green", "vs_prior": 30.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-06", "value": 158000, "target": 0, "status": "green", "vs_prior": -265000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-07", "value": 426000, "target": 0, "status": "green", "vs_prior": 44000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-07", "value": 38.8, "target": 0, "status": "green", "vs_prior": -32.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-07", "value": -48000, "target": 0, "status": "red", "vs_prior": -206000}, {"metric_id": "fin.revenue_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-08", "value": 745000, "target": 0, "status": "green", "vs_prior": 319000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-08", "value": 66.5, "target": 0, "status": "green", "vs_prior": 27.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "tlf", "dept_id": "ops2", "period": "2026-08", "value": 70000, "target": 0, "status": "green", "vs_prior": 118000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-03", "value": 436000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-03", "value": 37.5, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-03", "value": 3000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-04", "value": 467000, "target": 0, "status": "green", "vs_prior": 31000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-04", "value": 38.9, "target": 0, "status": "green", "vs_prior": 1.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-04", "value": 160000, "target": 0, "status": "green", "vs_prior": 157000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-05", "value": 640000, "target": 0, "status": "green", "vs_prior": 173000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-05", "value": 50.9, "target": 0, "status": "green", "vs_prior": 12.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-05", "value": -100000, "target": 0, "status": "red", "vs_prior": -260000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-06", "value": 635000, "target": 0, "status": "green", "vs_prior": -5000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-06", "value": 50.0, "target": 0, "status": "green", "vs_prior": -0.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-06", "value": 335000, "target": 0, "status": "green", "vs_prior": 435000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-07", "value": 626000, "target": 0, "status": "green", "vs_prior": -9000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-07", "value": 29.8, "target": 0, "status": "green", "vs_prior": -20.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-07", "value": 321000, "target": 0, "status": "green", "vs_prior": -14000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-08", "value": 696000, "target": 0, "status": "green", "vs_prior": 70000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-08", "value": 31.6, "target": 0, "status": "green", "vs_prior": 1.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "fin", "period": "2026-08", "value": -25000, "target": 0, "status": "red", "vs_prior": -346000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-03", "value": 830000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-03", "value": 62.2, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-03", "value": 253000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-04", "value": 197000, "target": 0, "status": "green", "vs_prior": -633000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-04", "value": 44.7, "target": 0, "status": "green", "vs_prior": -17.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-04", "value": 27000, "target": 0, "status": "green", "vs_prior": -226000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-05", "value": 235000, "target": 0, "status": "green", "vs_prior": 38000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-05", "value": 36.4, "target": 0, "status": "green", "vs_prior": -8.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-05", "value": 127000, "target": 0, "status": "green", "vs_prior": 100000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-06", "value": 511000, "target": 0, "status": "green", "vs_prior": 276000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-06", "value": 40.4, "target": 0, "status": "green", "vs_prior": 4.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-06", "value": 155000, "target": 0, "status": "green", "vs_prior": 28000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-07", "value": 726000, "target": 0, "status": "green", "vs_prior": 215000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-07", "value": 68.3, "target": 0, "status": "green", "vs_prior": 27.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-07", "value": -6000, "target": 0, "status": "red", "vs_prior": -161000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-08", "value": 548000, "target": 0, "status": "green", "vs_prior": -178000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-08", "value": 67.4, "target": 0, "status": "green", "vs_prior": -0.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "hr", "period": "2026-08", "value": 398000, "target": 0, "status": "green", "vs_prior": 404000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-03", "value": 211000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-03", "value": 55.9, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-03", "value": 310000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-04", "value": 772000, "target": 0, "status": "green", "vs_prior": 561000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-04", "value": 38.3, "target": 0, "status": "green", "vs_prior": -17.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-04", "value": 31000, "target": 0, "status": "green", "vs_prior": -279000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-05", "value": 650000, "target": 0, "status": "green", "vs_prior": -122000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-05", "value": 42.5, "target": 0, "status": "green", "vs_prior": 4.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-05", "value": 181000, "target": 0, "status": "green", "vs_prior": 150000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-06", "value": 407000, "target": 0, "status": "green", "vs_prior": -243000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-06", "value": 54.9, "target": 0, "status": "green", "vs_prior": 12.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-06", "value": 408000, "target": 0, "status": "green", "vs_prior": 227000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-07", "value": 585000, "target": 0, "status": "green", "vs_prior": 178000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-07", "value": 54.7, "target": 0, "status": "green", "vs_prior": -0.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-07", "value": 171000, "target": 0, "status": "green", "vs_prior": -237000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-08", "value": 268000, "target": 0, "status": "green", "vs_prior": -317000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-08", "value": 47.8, "target": 0, "status": "green", "vs_prior": -6.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "adm", "period": "2026-08", "value": 199000, "target": 0, "status": "green", "vs_prior": 28000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-03", "value": 454000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-03", "value": 28.4, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-03", "value": 496000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-04", "value": 843000, "target": 0, "status": "green", "vs_prior": 389000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-04", "value": 65.3, "target": 0, "status": "green", "vs_prior": 36.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-04", "value": 6000, "target": 0, "status": "green", "vs_prior": -490000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-05", "value": 145000, "target": 0, "status": "green", "vs_prior": -698000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-05", "value": 51.3, "target": 0, "status": "green", "vs_prior": -14.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-05", "value": -45000, "target": 0, "status": "red", "vs_prior": -51000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-06", "value": 859000, "target": 0, "status": "green", "vs_prior": 714000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-06", "value": 39.8, "target": 0, "status": "green", "vs_prior": -11.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-06", "value": 309000, "target": 0, "status": "green", "vs_prior": 354000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-07", "value": 745000, "target": 0, "status": "green", "vs_prior": -114000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-07", "value": 48.7, "target": 0, "status": "green", "vs_prior": 8.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-07", "value": 50000, "target": 0, "status": "green", "vs_prior": -259000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-08", "value": 394000, "target": 0, "status": "green", "vs_prior": -351000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-08", "value": 58.3, "target": 0, "status": "green", "vs_prior": 9.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "it", "period": "2026-08", "value": 278000, "target": 0, "status": "green", "vs_prior": 228000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-03", "value": 386000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-03", "value": 65.1, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-03", "value": 360000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-04", "value": 790000, "target": 0, "status": "green", "vs_prior": 404000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-04", "value": 34.8, "target": 0, "status": "green", "vs_prior": -30.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-04", "value": 304000, "target": 0, "status": "green", "vs_prior": -56000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-05", "value": 660000, "target": 0, "status": "green", "vs_prior": -130000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-05", "value": 59.3, "target": 0, "status": "green", "vs_prior": 24.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-05", "value": 482000, "target": 0, "status": "green", "vs_prior": 178000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-06", "value": 321000, "target": 0, "status": "green", "vs_prior": -339000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-06", "value": 46.7, "target": 0, "status": "green", "vs_prior": -12.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-06", "value": 294000, "target": 0, "status": "green", "vs_prior": -188000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-07", "value": 578000, "target": 0, "status": "green", "vs_prior": 257000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-07", "value": 55.3, "target": 0, "status": "green", "vs_prior": 8.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-07", "value": 456000, "target": 0, "status": "green", "vs_prior": 162000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-08", "value": 124000, "target": 0, "status": "green", "vs_prior": -454000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-08", "value": 69.1, "target": 0, "status": "green", "vs_prior": 13.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "mkt", "period": "2026-08", "value": 411000, "target": 0, "status": "green", "vs_prior": -45000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-03", "value": 183000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-03", "value": 38.0, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-03", "value": -53000, "target": 0, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-04", "value": 758000, "target": 0, "status": "green", "vs_prior": 575000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-04", "value": 60.8, "target": 0, "status": "green", "vs_prior": 22.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-04", "value": 98000, "target": 0, "status": "green", "vs_prior": 151000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-05", "value": 350000, "target": 0, "status": "green", "vs_prior": -408000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-05", "value": 68.3, "target": 0, "status": "green", "vs_prior": 7.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-05", "value": 308000, "target": 0, "status": "green", "vs_prior": 210000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-06", "value": 652000, "target": 0, "status": "green", "vs_prior": 302000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-06", "value": 59.0, "target": 0, "status": "green", "vs_prior": -9.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-06", "value": 19000, "target": 0, "status": "green", "vs_prior": -289000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-07", "value": 414000, "target": 0, "status": "green", "vs_prior": -238000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-07", "value": 57.8, "target": 0, "status": "green", "vs_prior": -1.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-07", "value": -29000, "target": 0, "status": "red", "vs_prior": -48000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-08", "value": 686000, "target": 0, "status": "green", "vs_prior": 272000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-08", "value": 74.2, "target": 0, "status": "green", "vs_prior": 16.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "sal", "period": "2026-08", "value": 36000, "target": 0, "status": "green", "vs_prior": 65000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-03", "value": 888000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-03", "value": 36.2, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-03", "value": 249000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-04", "value": 274000, "target": 0, "status": "green", "vs_prior": -614000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-04", "value": 64.3, "target": 0, "status": "green", "vs_prior": 28.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-04", "value": 155000, "target": 0, "status": "green", "vs_prior": -94000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-05", "value": 724000, "target": 0, "status": "green", "vs_prior": 450000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-05", "value": 60.2, "target": 0, "status": "green", "vs_prior": -4.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-05", "value": -119000, "target": 0, "status": "red", "vs_prior": -274000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-06", "value": 759000, "target": 0, "status": "green", "vs_prior": 35000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-06", "value": 33.0, "target": 0, "status": "green", "vs_prior": -27.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-06", "value": 372000, "target": 0, "status": "green", "vs_prior": 491000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-07", "value": 254000, "target": 0, "status": "green", "vs_prior": -505000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-07", "value": 35.8, "target": 0, "status": "green", "vs_prior": 2.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-07", "value": -119000, "target": 0, "status": "red", "vs_prior": -491000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-08", "value": 747000, "target": 0, "status": "green", "vs_prior": 493000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-08", "value": 44.5, "target": 0, "status": "green", "vs_prior": 8.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "ops1", "period": "2026-08", "value": 382000, "target": 0, "status": "green", "vs_prior": 501000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-03", "value": 287000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-03", "value": 58.6, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-03", "value": 384000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-04", "value": 844000, "target": 0, "status": "green", "vs_prior": 557000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-04", "value": 50.5, "target": 0, "status": "green", "vs_prior": -8.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-04", "value": 281000, "target": 0, "status": "green", "vs_prior": -103000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-05", "value": 602000, "target": 0, "status": "green", "vs_prior": -242000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-05", "value": 60.1, "target": 0, "status": "green", "vs_prior": 9.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-05", "value": 304000, "target": 0, "status": "green", "vs_prior": 23000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-06", "value": 662000, "target": 0, "status": "green", "vs_prior": 60000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-06", "value": 49.0, "target": 0, "status": "green", "vs_prior": -11.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-06", "value": 283000, "target": 0, "status": "green", "vs_prior": -21000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-07", "value": 588000, "target": 0, "status": "green", "vs_prior": -74000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-07", "value": 32.7, "target": 0, "status": "green", "vs_prior": -16.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-07", "value": 321000, "target": 0, "status": "green", "vs_prior": 38000}, {"metric_id": "fin.revenue_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-08", "value": 457000, "target": 0, "status": "green", "vs_prior": -131000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-08", "value": 26.5, "target": 0, "status": "green", "vs_prior": -6.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "infx", "dept_id": "ops2", "period": "2026-08", "value": 23000, "target": 0, "status": "green", "vs_prior": -298000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-03", "value": 857000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-03", "value": 52.3, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-03", "value": 205000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-04", "value": 590000, "target": 0, "status": "green", "vs_prior": -267000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-04", "value": 72.1, "target": 0, "status": "green", "vs_prior": 19.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-04", "value": 489000, "target": 0, "status": "green", "vs_prior": 284000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-05", "value": 185000, "target": 0, "status": "green", "vs_prior": -405000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-05", "value": 33.6, "target": 0, "status": "green", "vs_prior": -38.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-05", "value": 13000, "target": 0, "status": "green", "vs_prior": -476000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-06", "value": 396000, "target": 0, "status": "green", "vs_prior": 211000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-06", "value": 28.9, "target": 0, "status": "green", "vs_prior": -4.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-06", "value": 255000, "target": 0, "status": "green", "vs_prior": 242000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-07", "value": 713000, "target": 0, "status": "green", "vs_prior": 317000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-07", "value": 54.7, "target": 0, "status": "green", "vs_prior": 25.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-07", "value": 370000, "target": 0, "status": "green", "vs_prior": 115000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-08", "value": 271000, "target": 0, "status": "green", "vs_prior": -442000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-08", "value": 54.6, "target": 0, "status": "green", "vs_prior": -0.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "fin", "period": "2026-08", "value": 425000, "target": 0, "status": "green", "vs_prior": 55000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-03", "value": 887000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-03", "value": 39.0, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-03", "value": 389000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-04", "value": 855000, "target": 0, "status": "green", "vs_prior": -32000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-04", "value": 42.0, "target": 0, "status": "green", "vs_prior": 3.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-04", "value": 400000, "target": 0, "status": "green", "vs_prior": 11000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-05", "value": 638000, "target": 0, "status": "green", "vs_prior": -217000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-05", "value": 32.7, "target": 0, "status": "green", "vs_prior": -9.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-05", "value": 378000, "target": 0, "status": "green", "vs_prior": -22000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-06", "value": 626000, "target": 0, "status": "green", "vs_prior": -12000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-06", "value": 73.1, "target": 0, "status": "green", "vs_prior": 40.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-06", "value": -22000, "target": 0, "status": "red", "vs_prior": -400000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-07", "value": 299000, "target": 0, "status": "green", "vs_prior": -327000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-07", "value": 70.6, "target": 0, "status": "green", "vs_prior": -2.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-07", "value": 63000, "target": 0, "status": "green", "vs_prior": 85000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-08", "value": 330000, "target": 0, "status": "green", "vs_prior": 31000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-08", "value": 67.2, "target": 0, "status": "green", "vs_prior": -3.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "hr", "period": "2026-08", "value": 259000, "target": 0, "status": "green", "vs_prior": 196000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-03", "value": 358000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-03", "value": 26.7, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-03", "value": 298000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-04", "value": 342000, "target": 0, "status": "green", "vs_prior": -16000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-04", "value": 67.9, "target": 0, "status": "green", "vs_prior": 41.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-04", "value": 318000, "target": 0, "status": "green", "vs_prior": 20000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-05", "value": 893000, "target": 0, "status": "green", "vs_prior": 551000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-05", "value": 37.5, "target": 0, "status": "green", "vs_prior": -30.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-05", "value": 397000, "target": 0, "status": "green", "vs_prior": 79000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-06", "value": 227000, "target": 0, "status": "green", "vs_prior": -666000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-06", "value": 28.1, "target": 0, "status": "green", "vs_prior": -9.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-06", "value": -11000, "target": 0, "status": "red", "vs_prior": -408000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-07", "value": 383000, "target": 0, "status": "green", "vs_prior": 156000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-07", "value": 71.4, "target": 0, "status": "green", "vs_prior": 43.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-07", "value": 219000, "target": 0, "status": "green", "vs_prior": 230000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-08", "value": 814000, "target": 0, "status": "green", "vs_prior": 431000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-08", "value": 39.9, "target": 0, "status": "green", "vs_prior": -31.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "adm", "period": "2026-08", "value": -89000, "target": 0, "status": "red", "vs_prior": -308000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-03", "value": 373000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-03", "value": 25.8, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-03", "value": 345000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-04", "value": 288000, "target": 0, "status": "green", "vs_prior": -85000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-04", "value": 69.6, "target": 0, "status": "green", "vs_prior": 43.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-04", "value": 272000, "target": 0, "status": "green", "vs_prior": -73000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-05", "value": 439000, "target": 0, "status": "green", "vs_prior": 151000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-05", "value": 50.6, "target": 0, "status": "green", "vs_prior": -19.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-05", "value": 196000, "target": 0, "status": "green", "vs_prior": -76000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-06", "value": 302000, "target": 0, "status": "green", "vs_prior": -137000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-06", "value": 68.9, "target": 0, "status": "green", "vs_prior": 18.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-06", "value": 39000, "target": 0, "status": "green", "vs_prior": -157000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-07", "value": 156000, "target": 0, "status": "green", "vs_prior": -146000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-07", "value": 71.5, "target": 0, "status": "green", "vs_prior": 2.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-07", "value": 476000, "target": 0, "status": "green", "vs_prior": 437000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-08", "value": 401000, "target": 0, "status": "green", "vs_prior": 245000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-08", "value": 64.3, "target": 0, "status": "green", "vs_prior": -7.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "it", "period": "2026-08", "value": -24000, "target": 0, "status": "red", "vs_prior": -500000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-03", "value": 216000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-03", "value": 60.2, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-03", "value": 72000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-04", "value": 435000, "target": 0, "status": "green", "vs_prior": 219000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-04", "value": 51.6, "target": 0, "status": "green", "vs_prior": -8.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-04", "value": 190000, "target": 0, "status": "green", "vs_prior": 118000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-05", "value": 189000, "target": 0, "status": "green", "vs_prior": -246000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-05", "value": 31.4, "target": 0, "status": "green", "vs_prior": -20.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-05", "value": 8000, "target": 0, "status": "green", "vs_prior": -182000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-06", "value": 796000, "target": 0, "status": "green", "vs_prior": 607000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-06", "value": 56.3, "target": 0, "status": "green", "vs_prior": 24.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-06", "value": -45000, "target": 0, "status": "red", "vs_prior": -53000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-07", "value": 292000, "target": 0, "status": "green", "vs_prior": -504000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-07", "value": 31.2, "target": 0, "status": "green", "vs_prior": -25.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-07", "value": 475000, "target": 0, "status": "green", "vs_prior": 520000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-08", "value": 557000, "target": 0, "status": "green", "vs_prior": 265000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-08", "value": 54.7, "target": 0, "status": "green", "vs_prior": 23.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "mkt", "period": "2026-08", "value": 378000, "target": 0, "status": "green", "vs_prior": -97000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-03", "value": 371000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-03", "value": 47.7, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-03", "value": 498000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-04", "value": 136000, "target": 0, "status": "green", "vs_prior": -235000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-04", "value": 58.3, "target": 0, "status": "green", "vs_prior": 10.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-04", "value": -136000, "target": 0, "status": "red", "vs_prior": -634000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-05", "value": 537000, "target": 0, "status": "green", "vs_prior": 401000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-05", "value": 48.6, "target": 0, "status": "green", "vs_prior": -9.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-05", "value": 235000, "target": 0, "status": "green", "vs_prior": 371000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-06", "value": 464000, "target": 0, "status": "green", "vs_prior": -73000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-06", "value": 65.1, "target": 0, "status": "green", "vs_prior": 16.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-06", "value": 236000, "target": 0, "status": "green", "vs_prior": 1000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-07", "value": 642000, "target": 0, "status": "green", "vs_prior": 178000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-07", "value": 32.6, "target": 0, "status": "green", "vs_prior": -32.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-07", "value": -143000, "target": 0, "status": "red", "vs_prior": -379000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-08", "value": 326000, "target": 0, "status": "green", "vs_prior": -316000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-08", "value": 37.9, "target": 0, "status": "green", "vs_prior": 5.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "sal", "period": "2026-08", "value": 300000, "target": 0, "status": "green", "vs_prior": 443000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-03", "value": 335000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-03", "value": 64.8, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-03", "value": 220000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-04", "value": 737000, "target": 0, "status": "green", "vs_prior": 402000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-04", "value": 62.0, "target": 0, "status": "green", "vs_prior": -2.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-04", "value": -137000, "target": 0, "status": "red", "vs_prior": -357000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-05", "value": 526000, "target": 0, "status": "green", "vs_prior": -211000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-05", "value": 49.8, "target": 0, "status": "green", "vs_prior": -12.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-05", "value": 302000, "target": 0, "status": "green", "vs_prior": 439000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-06", "value": 778000, "target": 0, "status": "green", "vs_prior": 252000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-06", "value": 73.9, "target": 0, "status": "green", "vs_prior": 24.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-06", "value": 456000, "target": 0, "status": "green", "vs_prior": 154000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-07", "value": 811000, "target": 0, "status": "green", "vs_prior": 33000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-07", "value": 25.5, "target": 0, "status": "green", "vs_prior": -48.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-07", "value": 464000, "target": 0, "status": "green", "vs_prior": 8000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-08", "value": 364000, "target": 0, "status": "green", "vs_prior": -447000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-08", "value": 31.7, "target": 0, "status": "green", "vs_prior": 6.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "ops1", "period": "2026-08", "value": 130000, "target": 0, "status": "green", "vs_prior": -334000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-03", "value": 267000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-03", "value": 52.6, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-03", "value": 120000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-04", "value": 346000, "target": 0, "status": "green", "vs_prior": 79000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-04", "value": 56.4, "target": 0, "status": "green", "vs_prior": 3.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-04", "value": -98000, "target": 0, "status": "red", "vs_prior": -218000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-05", "value": 521000, "target": 0, "status": "green", "vs_prior": 175000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-05", "value": 43.4, "target": 0, "status": "green", "vs_prior": -13.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-05", "value": 325000, "target": 0, "status": "green", "vs_prior": 423000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-06", "value": 522000, "target": 0, "status": "green", "vs_prior": 1000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-06", "value": 26.3, "target": 0, "status": "green", "vs_prior": -17.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-06", "value": -146000, "target": 0, "status": "red", "vs_prior": -471000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-07", "value": 528000, "target": 0, "status": "green", "vs_prior": 6000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-07", "value": 66.6, "target": 0, "status": "green", "vs_prior": 40.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-07", "value": -67000, "target": 0, "status": "red", "vs_prior": 79000}, {"metric_id": "fin.revenue_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-08", "value": 720000, "target": 0, "status": "green", "vs_prior": 192000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-08", "value": 38.7, "target": 0, "status": "green", "vs_prior": -27.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "fluxflow", "dept_id": "ops2", "period": "2026-08", "value": 10000, "target": 0, "status": "green", "vs_prior": 77000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-03", "value": 627000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-03", "value": 60.3, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-03", "value": -15000, "target": 0, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-04", "value": 188000, "target": 0, "status": "green", "vs_prior": -439000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-04", "value": 56.6, "target": 0, "status": "green", "vs_prior": -3.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-04", "value": -105000, "target": 0, "status": "red", "vs_prior": -90000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-05", "value": 186000, "target": 0, "status": "green", "vs_prior": -2000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-05", "value": 42.8, "target": 0, "status": "green", "vs_prior": -13.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-05", "value": 164000, "target": 0, "status": "green", "vs_prior": 269000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-06", "value": 183000, "target": 0, "status": "green", "vs_prior": -3000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-06", "value": 74.2, "target": 0, "status": "green", "vs_prior": 31.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-06", "value": 205000, "target": 0, "status": "green", "vs_prior": 41000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-07", "value": 697000, "target": 0, "status": "green", "vs_prior": 514000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-07", "value": 71.0, "target": 0, "status": "green", "vs_prior": -3.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-07", "value": 319000, "target": 0, "status": "green", "vs_prior": 114000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-08", "value": 322000, "target": 0, "status": "green", "vs_prior": -375000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-08", "value": 69.9, "target": 0, "status": "green", "vs_prior": -1.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "fin", "period": "2026-08", "value": -70000, "target": 0, "status": "red", "vs_prior": -389000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-03", "value": 577000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-03", "value": 55.7, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-03", "value": 366000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-04", "value": 861000, "target": 0, "status": "green", "vs_prior": 284000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-04", "value": 51.3, "target": 0, "status": "green", "vs_prior": -4.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-04", "value": 409000, "target": 0, "status": "green", "vs_prior": 43000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-05", "value": 173000, "target": 0, "status": "green", "vs_prior": -688000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-05", "value": 38.2, "target": 0, "status": "green", "vs_prior": -13.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-05", "value": 241000, "target": 0, "status": "green", "vs_prior": -168000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-06", "value": 624000, "target": 0, "status": "green", "vs_prior": 451000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-06", "value": 61.1, "target": 0, "status": "green", "vs_prior": 22.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-06", "value": -78000, "target": 0, "status": "red", "vs_prior": -319000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-07", "value": 313000, "target": 0, "status": "green", "vs_prior": -311000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-07", "value": 37.6, "target": 0, "status": "green", "vs_prior": -23.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-07", "value": 437000, "target": 0, "status": "green", "vs_prior": 515000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-08", "value": 438000, "target": 0, "status": "green", "vs_prior": 125000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-08", "value": 43.0, "target": 0, "status": "green", "vs_prior": 5.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "hr", "period": "2026-08", "value": 423000, "target": 0, "status": "green", "vs_prior": -14000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-03", "value": 804000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-03", "value": 72.2, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-03", "value": 417000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-04", "value": 335000, "target": 0, "status": "green", "vs_prior": -469000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-04", "value": 35.0, "target": 0, "status": "green", "vs_prior": -37.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-04", "value": -79000, "target": 0, "status": "red", "vs_prior": -496000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-05", "value": 275000, "target": 0, "status": "green", "vs_prior": -60000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-05", "value": 39.3, "target": 0, "status": "green", "vs_prior": 4.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-05", "value": 85000, "target": 0, "status": "green", "vs_prior": 164000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-06", "value": 784000, "target": 0, "status": "green", "vs_prior": 509000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-06", "value": 57.2, "target": 0, "status": "green", "vs_prior": 17.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-06", "value": 425000, "target": 0, "status": "green", "vs_prior": 340000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-07", "value": 871000, "target": 0, "status": "green", "vs_prior": 87000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-07", "value": 49.0, "target": 0, "status": "green", "vs_prior": -8.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-07", "value": 390000, "target": 0, "status": "green", "vs_prior": -35000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-08", "value": 704000, "target": 0, "status": "green", "vs_prior": -167000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-08", "value": 31.8, "target": 0, "status": "green", "vs_prior": -17.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "adm", "period": "2026-08", "value": 214000, "target": 0, "status": "green", "vs_prior": -176000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-03", "value": 283000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-03", "value": 38.8, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-03", "value": 449000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-04", "value": 669000, "target": 0, "status": "green", "vs_prior": 386000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-04", "value": 42.3, "target": 0, "status": "green", "vs_prior": 3.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-04", "value": 446000, "target": 0, "status": "green", "vs_prior": -3000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-05", "value": 362000, "target": 0, "status": "green", "vs_prior": -307000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-05", "value": 29.1, "target": 0, "status": "green", "vs_prior": -13.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-05", "value": 198000, "target": 0, "status": "green", "vs_prior": -248000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-06", "value": 853000, "target": 0, "status": "green", "vs_prior": 491000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-06", "value": 64.6, "target": 0, "status": "green", "vs_prior": 35.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-06", "value": 357000, "target": 0, "status": "green", "vs_prior": 159000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-07", "value": 350000, "target": 0, "status": "green", "vs_prior": -503000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-07", "value": 33.2, "target": 0, "status": "green", "vs_prior": -31.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-07", "value": 334000, "target": 0, "status": "green", "vs_prior": -23000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-08", "value": 396000, "target": 0, "status": "green", "vs_prior": 46000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-08", "value": 51.8, "target": 0, "status": "green", "vs_prior": 18.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "it", "period": "2026-08", "value": -71000, "target": 0, "status": "red", "vs_prior": -405000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-03", "value": 117000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-03", "value": 41.6, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-03", "value": 75000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-04", "value": 501000, "target": 0, "status": "green", "vs_prior": 384000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-04", "value": 54.7, "target": 0, "status": "green", "vs_prior": 13.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-04", "value": 57000, "target": 0, "status": "green", "vs_prior": -18000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-05", "value": 487000, "target": 0, "status": "green", "vs_prior": -14000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-05", "value": 71.2, "target": 0, "status": "green", "vs_prior": 16.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-05", "value": 91000, "target": 0, "status": "green", "vs_prior": 34000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-06", "value": 187000, "target": 0, "status": "green", "vs_prior": -300000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-06", "value": 25.8, "target": 0, "status": "green", "vs_prior": -45.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-06", "value": 418000, "target": 0, "status": "green", "vs_prior": 327000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-07", "value": 616000, "target": 0, "status": "green", "vs_prior": 429000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-07", "value": 70.3, "target": 0, "status": "green", "vs_prior": 44.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-07", "value": -19000, "target": 0, "status": "red", "vs_prior": -437000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-08", "value": 606000, "target": 0, "status": "green", "vs_prior": -10000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-08", "value": 25.9, "target": 0, "status": "green", "vs_prior": -44.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "mkt", "period": "2026-08", "value": -91000, "target": 0, "status": "red", "vs_prior": -72000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-03", "value": 347000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-03", "value": 60.3, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-03", "value": 481000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-04", "value": 471000, "target": 0, "status": "green", "vs_prior": 124000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-04", "value": 65.0, "target": 0, "status": "green", "vs_prior": 4.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-04", "value": -53000, "target": 0, "status": "red", "vs_prior": -534000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-05", "value": 753000, "target": 0, "status": "green", "vs_prior": 282000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-05", "value": 68.3, "target": 0, "status": "green", "vs_prior": 3.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-05", "value": 457000, "target": 0, "status": "green", "vs_prior": 510000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-06", "value": 601000, "target": 0, "status": "green", "vs_prior": -152000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-06", "value": 46.7, "target": 0, "status": "green", "vs_prior": -21.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-06", "value": 26000, "target": 0, "status": "green", "vs_prior": -431000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-07", "value": 201000, "target": 0, "status": "green", "vs_prior": -400000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-07", "value": 26.8, "target": 0, "status": "green", "vs_prior": -19.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-07", "value": 106000, "target": 0, "status": "green", "vs_prior": 80000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-08", "value": 220000, "target": 0, "status": "green", "vs_prior": 19000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-08", "value": 40.2, "target": 0, "status": "green", "vs_prior": 13.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "sal", "period": "2026-08", "value": -86000, "target": 0, "status": "red", "vs_prior": -192000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-03", "value": 548000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-03", "value": 25.6, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-03", "value": -7000, "target": 0, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-04", "value": 228000, "target": 0, "status": "green", "vs_prior": -320000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-04", "value": 60.5, "target": 0, "status": "green", "vs_prior": 34.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-04", "value": 377000, "target": 0, "status": "green", "vs_prior": 384000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-05", "value": 157000, "target": 0, "status": "green", "vs_prior": -71000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-05", "value": 29.6, "target": 0, "status": "green", "vs_prior": -30.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-05", "value": 387000, "target": 0, "status": "green", "vs_prior": 10000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-06", "value": 672000, "target": 0, "status": "green", "vs_prior": 515000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-06", "value": 74.1, "target": 0, "status": "green", "vs_prior": 44.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-06", "value": 479000, "target": 0, "status": "green", "vs_prior": 92000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-07", "value": 833000, "target": 0, "status": "green", "vs_prior": 161000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-07", "value": 36.0, "target": 0, "status": "green", "vs_prior": -38.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-07", "value": 171000, "target": 0, "status": "green", "vs_prior": -308000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-08", "value": 464000, "target": 0, "status": "green", "vs_prior": -369000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-08", "value": 36.4, "target": 0, "status": "green", "vs_prior": 0.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "ops1", "period": "2026-08", "value": 285000, "target": 0, "status": "green", "vs_prior": 114000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-03", "value": 210000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-03", "value": 49.7, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-03", "value": -46000, "target": 0, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-04", "value": 370000, "target": 0, "status": "green", "vs_prior": 160000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-04", "value": 52.3, "target": 0, "status": "green", "vs_prior": 2.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-04", "value": 439000, "target": 0, "status": "green", "vs_prior": 485000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-05", "value": 880000, "target": 0, "status": "green", "vs_prior": 510000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-05", "value": 68.3, "target": 0, "status": "green", "vs_prior": 16.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-05", "value": 96000, "target": 0, "status": "green", "vs_prior": -343000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-06", "value": 372000, "target": 0, "status": "green", "vs_prior": -508000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-06", "value": 55.3, "target": 0, "status": "green", "vs_prior": -13.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-06", "value": 441000, "target": 0, "status": "green", "vs_prior": 345000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-07", "value": 875000, "target": 0, "status": "green", "vs_prior": 503000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-07", "value": 37.0, "target": 0, "status": "green", "vs_prior": -18.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-07", "value": 89000, "target": 0, "status": "green", "vs_prior": -352000}, {"metric_id": "fin.revenue_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-08", "value": 150000, "target": 0, "status": "green", "vs_prior": -725000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-08", "value": 41.6, "target": 0, "status": "green", "vs_prior": 4.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "divorced", "dept_id": "ops2", "period": "2026-08", "value": -132000, "target": 0, "status": "red", "vs_prior": -221000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-03", "value": 249000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-03", "value": 42.2, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-03", "value": 246000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-04", "value": 317000, "target": 0, "status": "green", "vs_prior": 68000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-04", "value": 73.1, "target": 0, "status": "green", "vs_prior": 30.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-04", "value": 261000, "target": 0, "status": "green", "vs_prior": 15000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-05", "value": 410000, "target": 0, "status": "green", "vs_prior": 93000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-05", "value": 60.4, "target": 0, "status": "green", "vs_prior": -12.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-05", "value": 187000, "target": 0, "status": "green", "vs_prior": -74000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-06", "value": 420000, "target": 0, "status": "green", "vs_prior": 10000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-06", "value": 51.5, "target": 0, "status": "green", "vs_prior": -8.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-06", "value": 460000, "target": 0, "status": "green", "vs_prior": 273000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-07", "value": 569000, "target": 0, "status": "green", "vs_prior": 149000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-07", "value": 39.3, "target": 0, "status": "green", "vs_prior": -12.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-07", "value": 67000, "target": 0, "status": "green", "vs_prior": -393000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-08", "value": 264000, "target": 0, "status": "green", "vs_prior": -305000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-08", "value": 37.5, "target": 0, "status": "green", "vs_prior": -1.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "fin", "period": "2026-08", "value": 276000, "target": 0, "status": "green", "vs_prior": 209000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-03", "value": 860000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-03", "value": 66.5, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-03", "value": 85000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-04", "value": 781000, "target": 0, "status": "green", "vs_prior": -79000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-04", "value": 31.1, "target": 0, "status": "green", "vs_prior": -35.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-04", "value": 223000, "target": 0, "status": "green", "vs_prior": 138000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-05", "value": 247000, "target": 0, "status": "green", "vs_prior": -534000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-05", "value": 65.0, "target": 0, "status": "green", "vs_prior": 33.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-05", "value": 103000, "target": 0, "status": "green", "vs_prior": -120000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-06", "value": 303000, "target": 0, "status": "green", "vs_prior": 56000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-06", "value": 56.7, "target": 0, "status": "green", "vs_prior": -8.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-06", "value": 292000, "target": 0, "status": "green", "vs_prior": 189000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-07", "value": 705000, "target": 0, "status": "green", "vs_prior": 402000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-07", "value": 62.2, "target": 0, "status": "green", "vs_prior": 5.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-07", "value": 39000, "target": 0, "status": "green", "vs_prior": -253000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-08", "value": 814000, "target": 0, "status": "green", "vs_prior": 109000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-08", "value": 32.6, "target": 0, "status": "green", "vs_prior": -29.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "hr", "period": "2026-08", "value": 205000, "target": 0, "status": "green", "vs_prior": 166000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-03", "value": 654000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-03", "value": 33.5, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-03", "value": -76000, "target": 0, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-04", "value": 274000, "target": 0, "status": "green", "vs_prior": -380000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-04", "value": 62.0, "target": 0, "status": "green", "vs_prior": 28.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-04", "value": 72000, "target": 0, "status": "green", "vs_prior": 148000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-05", "value": 539000, "target": 0, "status": "green", "vs_prior": 265000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-05", "value": 51.4, "target": 0, "status": "green", "vs_prior": -10.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-05", "value": -55000, "target": 0, "status": "red", "vs_prior": -127000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-06", "value": 504000, "target": 0, "status": "green", "vs_prior": -35000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-06", "value": 64.1, "target": 0, "status": "green", "vs_prior": 12.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-06", "value": 176000, "target": 0, "status": "green", "vs_prior": 231000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-07", "value": 557000, "target": 0, "status": "green", "vs_prior": 53000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-07", "value": 64.9, "target": 0, "status": "green", "vs_prior": 0.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-07", "value": 10000, "target": 0, "status": "green", "vs_prior": -166000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-08", "value": 803000, "target": 0, "status": "green", "vs_prior": 246000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-08", "value": 58.7, "target": 0, "status": "green", "vs_prior": -6.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "adm", "period": "2026-08", "value": 147000, "target": 0, "status": "green", "vs_prior": 137000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-03", "value": 421000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-03", "value": 53.4, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-03", "value": -138000, "target": 0, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-04", "value": 629000, "target": 0, "status": "green", "vs_prior": 208000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-04", "value": 53.4, "target": 0, "status": "green", "vs_prior": 0.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-04", "value": 75000, "target": 0, "status": "green", "vs_prior": 213000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-05", "value": 781000, "target": 0, "status": "green", "vs_prior": 152000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-05", "value": 36.1, "target": 0, "status": "green", "vs_prior": -17.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-05", "value": -56000, "target": 0, "status": "red", "vs_prior": -131000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-06", "value": 687000, "target": 0, "status": "green", "vs_prior": -94000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-06", "value": 64.2, "target": 0, "status": "green", "vs_prior": 28.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-06", "value": 188000, "target": 0, "status": "green", "vs_prior": 244000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-07", "value": 332000, "target": 0, "status": "green", "vs_prior": -355000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-07", "value": 46.5, "target": 0, "status": "green", "vs_prior": -17.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-07", "value": 342000, "target": 0, "status": "green", "vs_prior": 154000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-08", "value": 515000, "target": 0, "status": "green", "vs_prior": 183000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-08", "value": 65.0, "target": 0, "status": "green", "vs_prior": 18.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "it", "period": "2026-08", "value": 267000, "target": 0, "status": "green", "vs_prior": -75000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-03", "value": 346000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-03", "value": 72.5, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-03", "value": -63000, "target": 0, "status": "red", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-04", "value": 887000, "target": 0, "status": "green", "vs_prior": 541000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-04", "value": 69.0, "target": 0, "status": "green", "vs_prior": -3.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-04", "value": 319000, "target": 0, "status": "green", "vs_prior": 382000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-05", "value": 839000, "target": 0, "status": "green", "vs_prior": -48000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-05", "value": 56.3, "target": 0, "status": "green", "vs_prior": -12.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-05", "value": -6000, "target": 0, "status": "red", "vs_prior": -325000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-06", "value": 467000, "target": 0, "status": "green", "vs_prior": -372000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-06", "value": 38.9, "target": 0, "status": "green", "vs_prior": -17.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-06", "value": -86000, "target": 0, "status": "red", "vs_prior": -80000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-07", "value": 788000, "target": 0, "status": "green", "vs_prior": 321000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-07", "value": 32.6, "target": 0, "status": "green", "vs_prior": -6.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-07", "value": 410000, "target": 0, "status": "green", "vs_prior": 496000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-08", "value": 445000, "target": 0, "status": "green", "vs_prior": -343000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-08", "value": 27.7, "target": 0, "status": "green", "vs_prior": -4.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "mkt", "period": "2026-08", "value": 175000, "target": 0, "status": "green", "vs_prior": -235000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-03", "value": 397000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-03", "value": 39.4, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-03", "value": 208000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-04", "value": 300000, "target": 0, "status": "green", "vs_prior": -97000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-04", "value": 40.7, "target": 0, "status": "green", "vs_prior": 1.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-04", "value": 188000, "target": 0, "status": "green", "vs_prior": -20000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-05", "value": 804000, "target": 0, "status": "green", "vs_prior": 504000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-05", "value": 30.8, "target": 0, "status": "green", "vs_prior": -9.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-05", "value": -75000, "target": 0, "status": "red", "vs_prior": -263000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-06", "value": 710000, "target": 0, "status": "green", "vs_prior": -94000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-06", "value": 70.7, "target": 0, "status": "green", "vs_prior": 39.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-06", "value": 384000, "target": 0, "status": "green", "vs_prior": 459000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-07", "value": 728000, "target": 0, "status": "green", "vs_prior": 18000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-07", "value": 66.3, "target": 0, "status": "green", "vs_prior": -4.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-07", "value": 394000, "target": 0, "status": "green", "vs_prior": 10000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-08", "value": 502000, "target": 0, "status": "green", "vs_prior": -226000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-08", "value": 51.7, "target": 0, "status": "green", "vs_prior": -14.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "sal", "period": "2026-08", "value": -119000, "target": 0, "status": "red", "vs_prior": -513000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-03", "value": 426000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-03", "value": 31.1, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-03", "value": 83000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-04", "value": 868000, "target": 0, "status": "green", "vs_prior": 442000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-04", "value": 66.0, "target": 0, "status": "green", "vs_prior": 34.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-04", "value": 414000, "target": 0, "status": "green", "vs_prior": 331000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-05", "value": 193000, "target": 0, "status": "green", "vs_prior": -675000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-05", "value": 48.7, "target": 0, "status": "green", "vs_prior": -17.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-05", "value": 218000, "target": 0, "status": "green", "vs_prior": -196000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-06", "value": 178000, "target": 0, "status": "green", "vs_prior": -15000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-06", "value": 71.0, "target": 0, "status": "green", "vs_prior": 22.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-06", "value": 419000, "target": 0, "status": "green", "vs_prior": 201000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-07", "value": 864000, "target": 0, "status": "green", "vs_prior": 686000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-07", "value": 45.7, "target": 0, "status": "green", "vs_prior": -25.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-07", "value": 265000, "target": 0, "status": "green", "vs_prior": -154000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-08", "value": 435000, "target": 0, "status": "green", "vs_prior": -429000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-08", "value": 58.7, "target": 0, "status": "green", "vs_prior": 13.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "ops1", "period": "2026-08", "value": -90000, "target": 0, "status": "red", "vs_prior": -355000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-03", "value": 831000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-03", "value": 33.2, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-03", "value": 76000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-04", "value": 194000, "target": 0, "status": "green", "vs_prior": -637000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-04", "value": 31.0, "target": 0, "status": "green", "vs_prior": -2.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-04", "value": 179000, "target": 0, "status": "green", "vs_prior": 103000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-05", "value": 315000, "target": 0, "status": "green", "vs_prior": 121000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-05", "value": 43.0, "target": 0, "status": "green", "vs_prior": 12.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-05", "value": 10000, "target": 0, "status": "green", "vs_prior": -169000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-06", "value": 585000, "target": 0, "status": "green", "vs_prior": 270000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-06", "value": 28.9, "target": 0, "status": "green", "vs_prior": -14.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-06", "value": 447000, "target": 0, "status": "green", "vs_prior": 437000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-07", "value": 197000, "target": 0, "status": "green", "vs_prior": -388000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-07", "value": 72.5, "target": 0, "status": "green", "vs_prior": 43.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-07", "value": 368000, "target": 0, "status": "green", "vs_prior": -79000}, {"metric_id": "fin.revenue_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-08", "value": 635000, "target": 0, "status": "green", "vs_prior": 438000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-08", "value": 73.2, "target": 0, "status": "green", "vs_prior": 0.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "papapasta", "dept_id": "ops2", "period": "2026-08", "value": 335000, "target": 0, "status": "green", "vs_prior": -33000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-03", "value": 345000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-03", "value": 31.9, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-03", "value": 332000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-04", "value": 222000, "target": 0, "status": "green", "vs_prior": -123000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-04", "value": 53.9, "target": 0, "status": "green", "vs_prior": 22.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-04", "value": 285000, "target": 0, "status": "green", "vs_prior": -47000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-05", "value": 704000, "target": 0, "status": "green", "vs_prior": 482000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-05", "value": 33.6, "target": 0, "status": "green", "vs_prior": -20.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-05", "value": 249000, "target": 0, "status": "green", "vs_prior": -36000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-06", "value": 452000, "target": 0, "status": "green", "vs_prior": -252000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-06", "value": 61.7, "target": 0, "status": "green", "vs_prior": 28.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-06", "value": 68000, "target": 0, "status": "green", "vs_prior": -181000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-07", "value": 155000, "target": 0, "status": "green", "vs_prior": -297000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-07", "value": 64.6, "target": 0, "status": "green", "vs_prior": 2.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-07", "value": 215000, "target": 0, "status": "green", "vs_prior": 147000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-08", "value": 101000, "target": 0, "status": "green", "vs_prior": -54000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-08", "value": 68.4, "target": 0, "status": "green", "vs_prior": 3.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "fin", "period": "2026-08", "value": -47000, "target": 0, "status": "red", "vs_prior": -262000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-03", "value": 245000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-03", "value": 35.7, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-03", "value": 70000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-04", "value": 375000, "target": 0, "status": "green", "vs_prior": 130000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-04", "value": 60.4, "target": 0, "status": "green", "vs_prior": 24.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-04", "value": 298000, "target": 0, "status": "green", "vs_prior": 228000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-05", "value": 210000, "target": 0, "status": "green", "vs_prior": -165000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-05", "value": 32.9, "target": 0, "status": "green", "vs_prior": -27.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-05", "value": 348000, "target": 0, "status": "green", "vs_prior": 50000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-06", "value": 394000, "target": 0, "status": "green", "vs_prior": 184000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-06", "value": 52.9, "target": 0, "status": "green", "vs_prior": 20.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-06", "value": 16000, "target": 0, "status": "green", "vs_prior": -332000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-07", "value": 891000, "target": 0, "status": "green", "vs_prior": 497000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-07", "value": 66.1, "target": 0, "status": "green", "vs_prior": 13.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-07", "value": -93000, "target": 0, "status": "red", "vs_prior": -109000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-08", "value": 251000, "target": 0, "status": "green", "vs_prior": -640000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-08", "value": 65.3, "target": 0, "status": "green", "vs_prior": -0.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "hr", "period": "2026-08", "value": 47000, "target": 0, "status": "green", "vs_prior": 140000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-03", "value": 513000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-03", "value": 46.0, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-03", "value": 307000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-04", "value": 154000, "target": 0, "status": "green", "vs_prior": -359000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-04", "value": 29.6, "target": 0, "status": "green", "vs_prior": -16.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-04", "value": 103000, "target": 0, "status": "green", "vs_prior": -204000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-05", "value": 351000, "target": 0, "status": "green", "vs_prior": 197000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-05", "value": 39.3, "target": 0, "status": "green", "vs_prior": 9.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-05", "value": 474000, "target": 0, "status": "green", "vs_prior": 371000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-06", "value": 784000, "target": 0, "status": "green", "vs_prior": 433000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-06", "value": 41.6, "target": 0, "status": "green", "vs_prior": 2.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-06", "value": 413000, "target": 0, "status": "green", "vs_prior": -61000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-07", "value": 758000, "target": 0, "status": "green", "vs_prior": -26000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-07", "value": 37.0, "target": 0, "status": "green", "vs_prior": -4.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-07", "value": -86000, "target": 0, "status": "red", "vs_prior": -499000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-08", "value": 114000, "target": 0, "status": "green", "vs_prior": -644000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-08", "value": 70.3, "target": 0, "status": "green", "vs_prior": 33.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "adm", "period": "2026-08", "value": 17000, "target": 0, "status": "green", "vs_prior": 103000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-03", "value": 219000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-03", "value": 35.0, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-03", "value": 269000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-04", "value": 324000, "target": 0, "status": "green", "vs_prior": 105000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-04", "value": 42.4, "target": 0, "status": "green", "vs_prior": 7.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-04", "value": 121000, "target": 0, "status": "green", "vs_prior": -148000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-05", "value": 859000, "target": 0, "status": "green", "vs_prior": 535000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-05", "value": 41.2, "target": 0, "status": "green", "vs_prior": -1.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-05", "value": -7000, "target": 0, "status": "red", "vs_prior": -128000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-06", "value": 518000, "target": 0, "status": "green", "vs_prior": -341000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-06", "value": 49.0, "target": 0, "status": "green", "vs_prior": 7.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-06", "value": -53000, "target": 0, "status": "red", "vs_prior": -46000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-07", "value": 252000, "target": 0, "status": "green", "vs_prior": -266000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-07", "value": 28.2, "target": 0, "status": "green", "vs_prior": -20.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-07", "value": 446000, "target": 0, "status": "green", "vs_prior": 499000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-08", "value": 216000, "target": 0, "status": "green", "vs_prior": -36000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-08", "value": 74.6, "target": 0, "status": "green", "vs_prior": 46.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "it", "period": "2026-08", "value": 464000, "target": 0, "status": "green", "vs_prior": 18000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-03", "value": 698000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-03", "value": 73.9, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-03", "value": 432000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-04", "value": 201000, "target": 0, "status": "green", "vs_prior": -497000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-04", "value": 38.1, "target": 0, "status": "green", "vs_prior": -35.8}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-04", "value": 24000, "target": 0, "status": "green", "vs_prior": -408000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-05", "value": 477000, "target": 0, "status": "green", "vs_prior": 276000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-05", "value": 25.8, "target": 0, "status": "green", "vs_prior": -12.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-05", "value": 197000, "target": 0, "status": "green", "vs_prior": 173000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-06", "value": 351000, "target": 0, "status": "green", "vs_prior": -126000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-06", "value": 48.5, "target": 0, "status": "green", "vs_prior": 22.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-06", "value": 314000, "target": 0, "status": "green", "vs_prior": 117000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-07", "value": 142000, "target": 0, "status": "green", "vs_prior": -209000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-07", "value": 70.6, "target": 0, "status": "green", "vs_prior": 22.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-07", "value": 353000, "target": 0, "status": "green", "vs_prior": 39000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-08", "value": 477000, "target": 0, "status": "green", "vs_prior": 335000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-08", "value": 58.1, "target": 0, "status": "green", "vs_prior": -12.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "mkt", "period": "2026-08", "value": 281000, "target": 0, "status": "green", "vs_prior": -72000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-03", "value": 101000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-03", "value": 43.8, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-03", "value": 366000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-04", "value": 360000, "target": 0, "status": "green", "vs_prior": 259000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-04", "value": 73.3, "target": 0, "status": "green", "vs_prior": 29.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-04", "value": 113000, "target": 0, "status": "green", "vs_prior": -253000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-05", "value": 316000, "target": 0, "status": "green", "vs_prior": -44000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-05", "value": 63.4, "target": 0, "status": "green", "vs_prior": -9.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-05", "value": -47000, "target": 0, "status": "red", "vs_prior": -160000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-06", "value": 837000, "target": 0, "status": "green", "vs_prior": 521000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-06", "value": 66.6, "target": 0, "status": "green", "vs_prior": 3.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-06", "value": -6000, "target": 0, "status": "red", "vs_prior": 41000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-07", "value": 325000, "target": 0, "status": "green", "vs_prior": -512000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-07", "value": 71.7, "target": 0, "status": "green", "vs_prior": 5.1}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-07", "value": 299000, "target": 0, "status": "green", "vs_prior": 305000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-08", "value": 231000, "target": 0, "status": "green", "vs_prior": -94000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-08", "value": 45.8, "target": 0, "status": "green", "vs_prior": -25.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "sal", "period": "2026-08", "value": -24000, "target": 0, "status": "red", "vs_prior": -323000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-03", "value": 371000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-03", "value": 37.3, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-03", "value": 429000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-04", "value": 867000, "target": 0, "status": "green", "vs_prior": 496000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-04", "value": 45.5, "target": 0, "status": "green", "vs_prior": 8.2}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-04", "value": 16000, "target": 0, "status": "green", "vs_prior": -413000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-05", "value": 398000, "target": 0, "status": "green", "vs_prior": -469000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-05", "value": 36.8, "target": 0, "status": "green", "vs_prior": -8.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-05", "value": 471000, "target": 0, "status": "green", "vs_prior": 455000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-06", "value": 377000, "target": 0, "status": "green", "vs_prior": -21000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-06", "value": 56.5, "target": 0, "status": "green", "vs_prior": 19.7}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-06", "value": -111000, "target": 0, "status": "red", "vs_prior": -582000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-07", "value": 822000, "target": 0, "status": "green", "vs_prior": 445000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-07", "value": 33.1, "target": 0, "status": "green", "vs_prior": -23.4}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-07", "value": 115000, "target": 0, "status": "green", "vs_prior": 226000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-08", "value": 244000, "target": 0, "status": "green", "vs_prior": -578000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-08", "value": 50.0, "target": 0, "status": "green", "vs_prior": 16.9}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "ops1", "period": "2026-08", "value": 93000, "target": 0, "status": "green", "vs_prior": -22000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-03", "value": 510000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-03", "value": 69.0, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-03", "value": 199000, "target": 0, "status": "green", "vs_prior": null}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-04", "value": 662000, "target": 0, "status": "green", "vs_prior": 152000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-04", "value": 51.4, "target": 0, "status": "green", "vs_prior": -17.6}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-04", "value": 262000, "target": 0, "status": "green", "vs_prior": 63000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-05", "value": 223000, "target": 0, "status": "green", "vs_prior": -439000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-05", "value": 56.9, "target": 0, "status": "green", "vs_prior": 5.5}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-05", "value": 245000, "target": 0, "status": "green", "vs_prior": -17000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-06", "value": 563000, "target": 0, "status": "green", "vs_prior": 340000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-06", "value": 30.6, "target": 0, "status": "green", "vs_prior": -26.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-06", "value": 259000, "target": 0, "status": "green", "vs_prior": 14000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-07", "value": 136000, "target": 0, "status": "green", "vs_prior": -427000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-07", "value": 30.9, "target": 0, "status": "green", "vs_prior": 0.3}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-07", "value": 384000, "target": 0, "status": "green", "vs_prior": 125000}, {"metric_id": "fin.revenue_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-08", "value": 562000, "target": 0, "status": "green", "vs_prior": 426000}, {"metric_id": "fin.gross_margin_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-08", "value": 31.9, "target": 0, "status": "green", "vs_prior": 1.0}, {"metric_id": "fin.ebitda_dept", "brand_id": "acdc", "dept_id": "ops2", "period": "2026-08", "value": -120000, "target": 0, "status": "red", "vs_prior": -504000}];
const GSD_FORMULA_EXPLANATIONS = {
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
  "fin.gross_margin_dept": "Department profit after product costs."
};
const GSD_SIMULATED = true;