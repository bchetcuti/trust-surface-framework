# Worked Example — Email Integrity

> Status: Informative  
> Version: v1.0  
> Last updated: 2026-03-06

> **Example:** Worked examples are informative. They illustrate the method; they do not change definitions, domains, or required lifecycle elements.

This example shows how TrustSurface can be applied to a common scenario: reducing email impersonation and improving the trust posture of organisational email.

The technical standards involved (SPF, DKIM, DMARC) are well-defined.
The failure mode is usually governance: multiple sending systems, unclear ownership, and inconsistent evidence.

## Scenario
An organisation receives reports of phishing emails impersonating its brand.
Internal security controls may be strong, but recipients cannot reliably distinguish legitimate from fraudulent emails.

### Objective
Make impersonation materially harder by closing the **Trust Signal Gap** for email.

---

## 1) Discover
**Identify what exists.**

Minimum inventory:

- sending domains (primary domain, subdomains, “marketing” domains)
- sending platforms (M365/Google, marketing automation, ticketing, CRM, bulk senders)
- ownership (who approves new sending sources)
- dependencies (vendors with delegated send rights)

Output:

- Email Trust Surface Inventory (domains × sending sources × owners)

## 2) Assess
**Measure observable Trust Signals.**

Baseline signals (from the catalogue):

- SPF defined and constrained
- DKIM signing for major streams
- DMARC alignment and policy
- Transport integrity controls where applicable (e.g. MTA‑STS / TLS reporting)

Output:

- Trust Signal Scorecard with evidence links (DNS records, provider configs, sample authentication results)

## 3) Harden
**Close the highest‑impact gaps.**

Typical hardening sequence:

1. Consolidate and validate legitimate sending sources.
2. Fix SPF to authorise only those sources (avoid unsafe wildcards and excessive lookups).
3. Enable DKIM for each platform (unique selectors, rotation plan).
4. Implement DMARC in phases:
   - start with monitoring to validate streams
   - progress to quarantine, then reject for aligned mail
5. Add transport integrity controls where they materially reduce risk.

Output:

- Hardening backlog + staged deployment plan that avoids breaking legitimate mail

## 4) Govern
**Prevent regressions.**

Controls:

- “New sender” change control (approval required before adding vendors or platforms)
- ownership and escalation (email integrity owner, backup owner)
- evidence refresh cadence (monthly for high-change environments)
- exception process with expiry (temporary deviations are time-bound)

Output:

- Operating procedure for introducing and validating new senders

## 5) Signal
**Make trust posture verifiable.**

Depending on context:

- publish a security contact / abuse address
- communicate internally how to verify authentic organisational email
- include email integrity posture in executive reporting

Output:

- a stable narrative supported by evidence, not marketing claims

---

## What changed

Before: email trust posture depended on internal belief and ad hoc fixes.

After: email trust posture is evidence‑based, governed, and measurably harder to impersonate.

That is the TrustSurface move: convert a trust failure mode into observable signals and enforceable governance.
