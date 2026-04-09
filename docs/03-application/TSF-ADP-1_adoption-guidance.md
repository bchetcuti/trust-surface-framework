# Adoption Guidance - Operating TrustSurface

**Status:** Public draft  
**Control:** Guidance  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-ADP-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  
**Supports:** TSF-GOV-1, TSF-LIF-1

---

## 1. Purpose

This document provides practical guidance for organisations adopting the TrustSurface Framework. TrustSurface is intentionally small. Adoption succeeds when it becomes a repeatable operating rhythm that produces evidence, prioritised work, and governance controls.

This guidance is non-prescriptive: it describes minimum viable practices that organisations can adapt to their own context and change velocity.

---

## 2. Cadence

Trust posture changes whenever systems change. Cadence should follow the rate of change in your environment.

### 2.1 Suggested baseline cadence

| Activity | Purpose | Typical cadence |
|---|---|---|
| Trust Surface Inventory review | Confirm what exists and who owns it | Quarterly (or after major change) |
| Trust Signal Scorecard refresh | Observe signals, update evidence links | Monthly for high-change domains; quarterly otherwise |
| Hardening backlog review | Confirm priorities, unblock owners | Fortnightly or monthly |
| Governance check | Validate ownership, change control, exceptions | Quarterly |
| External signalling review | Ensure trust communications remain true | Quarterly, and after incidents |

*Cross-reference: governance rhythm aligns with the cadence expectations in **TSF-GOV-1**.*

### 2.2 Trigger-based reviews

Run an out-of-cycle review after:

- domain and DNS migrations
- email platform changes or new sending vendors
- new public services, portals, or APIs
- vendor onboarding or major vendor incidents
- incidents involving impersonation, outages, or data exposure

---

## 3. Roles

TrustSurface is cross-functional by design. The goal is clear accountability without creating a new bureaucracy.

### 3.1 Minimum role set

| Role | Why it exists | Typical participants |
|---|---|---|
| TrustSurface owner | Accountable for keeping the lifecycle running | Technology governance lead, security lead, or service owner |
| Domain owners | Own signal quality in each Trust Surface domain | Identity, platform, comms/email, web/service owners |
| Evidence steward | Maintains evidence links and refresh discipline | GRC analyst, security operations, platform ops |
| Risk / assurance partner | Connects posture to governance, risk, and reporting | Risk team, internal audit, compliance |
| Executive sponsor | Removes blockers; accepts residual trust risk | CIO/CTO/CISO, COO, or delegate |

*Cross-reference: ownership and decision rights align to the governance model in **TSF-GOV-1**.*

### 3.2 Decision rights

At minimum, define who can:

- approve new trust surface components (e.g. new domains, new email senders, new vendors)
- accept exceptions (documented with expiry)
- prioritise hardening work when delivery pressure is high

---

## 4. Evidence artefacts

TrustSurface treats "proof" as operational artefacts that can be refreshed. Avoid one-off slide decks as your primary evidence.

### 4.1 Minimum evidence set

| Artefact | What it proves | Produced in |
|---|---|---|
| Trust Surface Inventory | What systems exist, and ownership | Discover |
| Trust Signal Scorecard | Current signal strength and coverage | Assess |
| Evidence links | Verifiable sources for each signal | Assess |
| Hardening backlog | Prioritised remediation work | Harden |
| 30/60/90-day hardening plan | Sequenced delivery plan | Harden |
| Governance controls | Ownership, change control, exception process | Govern |
| Trust signalling mechanisms | What you publish and communicate, and why it is true | Signal |

### 4.2 Evidence standards (lightweight)

Evidence should be:

- **verifiable** - a link, a config, a screenshot, or a query result
- **time-bound** - captured and checked date recorded
- **owned** - accountable party named
- **repeatable** - can be refreshed on cadence

---

## 5. What "good" looks like

A simple maturity heuristic:

- **Level 1–2:** ad hoc fixes after incidents; limited inventory; evidence is expensive to produce
- **Level 3:** scorecard exists; owners are assigned; reviews happen on a cadence
- **Level 4–5:** posture is integrated into governance; vendor onboarding includes trust signals; signalling is transparent

See the Digital Trust Maturity Model (**TSF-MAT-1**) for the full progression.

---

## 6. Common failure modes

- Treating trust signals as a one-time "hardening project" rather than an operating rhythm.
- Inventory without ownership (knowledge without accountability).
- Evidence captured once and allowed to go stale.
- Exceptions with no expiry (permanent trust debt).
- Confusing "security posture" with "trust posture" in executive reporting.

---

## 7. Quick start (30 days)

1. Nominate a TrustSurface owner and domain owners.
2. Produce a minimal Trust Surface Inventory (domains, email platforms, public services, key vendors).
3. Assess the highest-risk domain first (commonly: email integrity or domains/DNS).
4. Publish a simple scorecard with evidence links and top gaps.
5. Convert gaps into a 30/60/90-day plan and define change control for regressions.

---

## Related TrustSurface artefacts

- **TSF-GOV-1** - Governance Integration (ownership model; decision rights; cadence expectations)
- **TSF-LIF-1** - Trust Lifecycle (Discover, Assess, Harden, Govern, Signal)
- **TSF-MTH-1** - Assessment Method
- **TSF-MAT-1** - Digital Trust Maturity Model
- **TSF-SIG-1** - Trust Signal Catalogue
- **TSF-MOD-1** - Trust Surface Model and Domains
- **TSF-GLO-1** - Glossary
- **TSF-BRD-1** - Board Questions (escalation and governance reporting)
- **TSF-EXM-1** - Worked Example: Email Integrity (practical lifecycle application)

---

## Summary statement

TSF-ADP-1 describes the minimum viable operating practices for organisations running TrustSurface as a governance discipline - covering cadence, roles, evidence standards, and failure modes. It is deliberately non-prescriptive, recognising that adoption must fit each organisation's rate of change and existing governance structures.
