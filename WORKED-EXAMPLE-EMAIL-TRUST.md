# Worked Example — Email Integrity

This example shows how TrustSurface is applied to a common scenario: reducing email impersonation and improving the trust posture of organisational email.

The standards involved (SPF, DKIM, DMARC) are well-defined, but the governance failure mode is common: multiple sending systems, unclear ownership, and inconsistent evidence. citeturn27search0turn27search1turn27search2

## Scenario
An organisation receives reports of phishing emails impersonating its brand.
Internal security controls are strong, but recipients cannot reliably distinguish legitimate from fraudulent emails.

### Objective
Make impersonation materially harder by closing the email trust signal gap.

---

## 1) Discover
**Identify what exists.**

Minimum inventory:
- sending domains (primary domain, subdomains, “marketing” domains)
- email platforms (M365/Google, marketing automation, ticketing, CRM, bulk senders)
- ownership (who approves new sending sources)

Output:
- Email trust surface inventory (domains × sending sources × owners)

## 2) Assess
**Measure observable trust signals.**

Baseline signals (from the catalogue):
- EML‑01 SPF defined and constrained
- EML‑02 DKIM signing for major streams
- EML‑03 DMARC alignment and policy
- EML‑04 MTA‑STS (where applicable)
- EML‑05 TLS‑RPT (where applicable)

Output:
- scorecard with evidence links (DNS records, provider configs, sample message authentication results)

## 3) Harden
**Close the highest-impact gaps.**

Typical hardening sequence:
1. Consolidate and validate legitimate sending sources.
2. Fix SPF to authorise only those sources (avoid unsafe wildcards / excessive lookups).
3. Enable DKIM for each platform (unique selectors, rotation plan).
4. Implement DMARC in phases:
   - start with monitoring (p=none) to validate streams
   - progress to quarantine, then reject for aligned mail
5. Add MTA‑STS and TLS‑RPT where it materially improves transport integrity.

Output:
- hardening backlog + a staged deployment plan that avoids breaking legitimate mail

## 4) Govern
**Prevent regressions.**

Controls:
- “New sender” change control (approval required before adding vendors or new platforms)
- ownership and escalation (email integrity owner, backup owner)
- evidence refresh cadence (e.g., monthly for high-change environments)

Output:
- operating procedure: how new senders are introduced and validated

## 5) Signal
**Make trust posture verifiable.**

Depending on context:
- publish a security contact / abuse address
- communicate to staff how to verify authentic organisational email
- include email integrity posture in executive reporting

Output:
- a stable narrative supported by evidence, not marketing claims

---

## What changed
Before: email trust posture depended on internal belief.
After: email trust posture is evidence‑based, governed, and harder to impersonate.

That is the TrustSurface move: convert a trust failure mode into measurable signals and enforceable governance.
