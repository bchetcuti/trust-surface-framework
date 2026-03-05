# 06 — TrustSurface Operating Rhythm

TrustSurface is designed to be run as a repeatable operating rhythm.
Trust posture changes with systems, vendors, and configuration drift; therefore trust must be *maintained*.

## The cycle

**Discover → Assess → Harden → Govern → Signal → (repeat)**

## 1) Discover
**Objective:** establish what exists at the trust surface.

**Minimum outputs:**
- Trust Surface Inventory (domains, identity providers, email services, public apps/APIs, key vendors)
- Ownership map (who owns what)

**Success condition:** nothing trust‑critical is “unknown” or “owned by nobody”.

## 2) Assess
**Objective:** evaluate posture using observable trust signals.

**Minimum outputs:**
- Trust Signal Scorecard (baseline signals by domain)
- Evidence links (what proves the score)

**Success condition:** posture is evidence‑backed, not opinion‑based.

## 3) Harden
**Objective:** close the highest‑impact trust signal gaps.

**Minimum outputs:**
- Prioritised hardening backlog (likelihood × trust impact)
- A 30/60/90‑day hardening plan

**Success condition:** gaps are treated as work with owners, not “known issues”.

## 4) Govern
**Objective:** keep trust posture stable under change.

**Minimum outputs:**
- TrustSurface ownership + decision rights
- Change controls for trust‑critical assets (DNS, IdP, email auth, public endpoints)
- Reporting cadence and escalation paths

This stage aligns naturally with enterprise risk governance models and the “Govern” function in contemporary cyber frameworks. citeturn27search3turn27search11

**Success condition:** trust regressions are prevented by design, not detected late.

## 5) Signal
**Objective:** communicate posture in a stable, verifiable way.

**Minimum outputs (context dependent):**
- published policy (e.g., email authentication, security contact)
- service status transparency
- executive/board reporting artefacts

**Success condition:** stakeholders can validate trust posture without bespoke assurance work.

## Operating guidance
- Run the full cycle at least quarterly for high‑change environments; otherwise semi‑annually.
- Run a lightweight check after any trust‑critical change (DNS, email sending sources, IdP changes, new vendor integrations).
- Treat evidence as a first‑class artefact; if it isn’t evidenced, it doesn’t exist.
