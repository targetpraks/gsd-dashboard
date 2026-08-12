# GSD — Get Shit Done · Limited Edition Dashboard

The Infinity Group measurement dashboard. Built from the **CEREBRO v2.0** measurement contract (`cerebro-v2.json`) — the single canonical source for how the portfolio is measured.

## What's inside

- **CEO Twelve** — Layer 1 screen. Survival / Growth / Founder Freedom / Foundation blocks, 20-minute Monday review.
- **Brand Boards** — per-brand focus metrics + department cards for all 7 brands (Infinity Brands, The Local Farmer, INFX Solutions, FluxFlow, Divorced Dads, Papa Pasta, ACDC Express).
- **Funnel** — Sales & Marketing Funnel Tracker model: Marketing → SDR → Dealmaker, per product, with 6-month trends. FND products measured in locations sold, professional services in ZAR.
- **Departments** — drill into Finance, HR, IT, Marketing, Sales, Ops, Founder, Impact across all brands.
- **Metric Library** — all 59 metrics defined once, searchable.
- **Alert Center** — red-flip alerts per the CEREBRO alerting rules (critical/warning).
- **System** — framework pillars (Martell × Squibb), data sources, implementation phases, open decisions, escalation ladder.

## Data

Dummy/simulated data generated deterministically from the contract by `scripts/generate_data.py` (6 months of readings, RAG statuses computed per the contract's standard: green ≥100%, amber 90–99%, red <90%). Labeled clearly in the UI. Live data comes later via Zoho MCP + FluxFlow pipeline.

## Run locally

```sh
python3 scripts/generate_data.py   # regenerate dummy data (optional)
python3 -m http.server 8080       # serve, then open http://localhost:8080
```

## Deploy

Static site — any static host works. Docker image included for Coolify:

```sh
docker build -t gsd-dashboard .
docker run -p 8080:80 gsd-dashboard
```

## Contract

`cerebro-v2.json` is the canonical measurement contract. Any AI, agent or system reading, writing or reporting on portfolio metrics reads this and nothing else.
