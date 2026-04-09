# Worked Example: Email Integrity

**Status:** Public draft  
**Control:** Guidance  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-EXM-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  
**Supports:** TSF-LIF-1, TSF-MTH-1, TSF-SIG-1

---

> Worked examples are informative. They illustrate the method; they do not change definitions, domains, or required lifecycle elements.

---

## 1. Purpose

This document illustrates the TrustSurface lifecycle applied to a concrete, common scenario: reducing email impersonation and improving the trust posture of organisational email.

The technical standards involved (SPF, DKIM, DMARC) are well-defined. The failure mode is usually governance: multiple sending systems, unclear ownership, and inconsistent evidence. This example traces the full lifecycle (see **TSF-LIF-1**) through that failure mode, using the assessment method described in **TSF-MTH-1** and drawing on email integrity signals EML-01 through EML-05 from **TSF-SIG-1**.

---

## 2. Scenario

An organisation receives reports of phishing emails impersonating its brand. Internal security controls may be strong, but recipients cannot reliably distinguish legitimate from fraudulent emails.

### Objective

Make impersonation materially harder by closing the **Trust Signal Gap** for email.

---

## 3. Discover

**Identify what exists.**

Minimum inventory:

- sending domains (primary domain, subdomains, "marketing" domains)
- sending platforms (M365/Google, marketing automation, ticketing, CRM, bulk senders)
- ownership (who approves new sending sources)
- dependencies (vendors with delegated send rights)

**Output:** Email Trust Surface Inventory (domains × sending sources × owners)

*This step maps directly to the Discover phase of the lifecycle (TSF-LIF-1).*

---

## 4. Assess

**Measure observable Trust Signals.**

Baseline signals from the signal catalogue (**TSF-SIG-1**, signals EML-01 through EML-05):

- EML-01 - SPF defined and constrained
- EML-02 - DKIM signing for major streams
- EML-03 - DMARC alignment and policy
- EML-04 - Transport integrity controls where applicable (e.g. MTA-STS, TLS reporting)
- EML-05 - Abuse contact / reporting pathway published

Apply the domain judgement scale from **TSF-MTH-1** (Sustained / Mixed / Fragile / Deficient / Indeterminate) to characterise the current email integrity posture.

**Output:** Trust Signal Scorecard with evidence links (DNS records, provider configs, sample authentication results)

---

## 5. Harden

**Close the highest-impact gaps.**

Typical hardening sequence:

1. Consolidate and validate legitimate sending sources.
2. Fix SPF to authorise only those sources (avoid unsafe wildcards and excessive lookups).
3. Enable DKIM for each platform (unique selectors, rotation plan).
4. Implement DMARC in phases:
   - start with monitoring to validate streams
   - progress to quarantine, then reject for aligned mail
5. Add transport integrity controls where they materially reduce risk.

**Output:** Hardening backlog and staged deployment plan that avoids breaking legitimate mail

*Cross-reference: the sequencing and prioritisation approach is described in **TSF-MTH-1**.*

---

## 6. Govern

**Prevent regressions.**

Controls:

- "New sender" change control (approval required before adding vendors or platforms)
- ownership and escalation (email integrity owner, backup owner)
- evidence refresh cadence (monthly for high-change environments)
- exception process with expiry (temporary deviations are time-bound)

**Output:** Operating procedure for introducing and validating new senders

*Cross-reference: governance integration guidance is in **TSF-GOV-1**.*

---

## 7. Signal

**Make trust posture verifiable.**

Depending on context:

- publish a security contact and abuse address
- communicate internally how to verify authentic organisational email
- include email integrity posture in executive reporting

**Output:** A stable narrative supported by evidence, not marketing claims

---

## 8. What changed

Before: email trust posture depended on internal belief and ad hoc fixes.

After: email trust posture is evidence-based, governed, and measurably harder to impersonate.

That is the TrustSurface move: convert a trust failure mode into observable signals and enforceable governance.

---

## Related TrustSurface artefacts

- **TSF-LIF-1** - Trust Lifecycle (Discover, Assess, Harden, Govern, Signal)
- **TSF-SIG-1** - Trust Signal Catalogue (signals EML-01 through EML-05)
- **TSF-MTH-1** - Assessment Method (domain judgement labels; prioritisation approach)
- **TSF-MOD-1** - Trust Surface Model and Domains
- **TSF-GOV-1** - Governance Integration
- **TSF-GLO-1** - Glossary
- **TSF-BRD-1** - Board Questions (for escalating email integrity posture to governance)

---

## Summary statement

TSF-EXM-1 traces the full TrustSurface lifecycle through an email integrity scenario, from inventory and signal assessment through hardening sequencing and governance controls. It demonstrates how the framework converts a common trust failure mode - inconsistent email authentication across multiple sending platforms - into observable signals, a prioritised hardening backlog, and repeatable governance.
