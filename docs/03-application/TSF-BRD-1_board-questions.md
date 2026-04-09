# Board Questions for Governing Digital Trust

**Status:** Public draft  
**Control:** Guidance  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-BRD-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  
**Supports:** TSF-GOV-1, TSF-MTH-1

---

## 1. Purpose

This document provides a structured question set for boards and executive committees governing digital trust using evidence. Questions are designed for a 10–20 minute discussion, supported by a one-page Trust Signal Scorecard.

The questions align to the five lifecycle phases of the TrustSurface Framework (Discover, Assess, Harden, Govern, Signal) and the six Trust Surface domains defined in **TSF-MOD-1**.

---

## 2. Governing questions

### 2.1 What is our Trust Surface?

- Do we have a current inventory of trust-critical systems (domains, identity providers, email platforms, public services and APIs, critical vendors)?
- Who owns each Trust Surface domain (decision rights and accountability, not "support")?

### 2.2 What do we signal to the outside world?

- If an external party tries to validate us (email, website, portals), what evidence do they see?
- Where are Trust Signals weak, inconsistent, or out of date?

### 2.3 Where is the Trust Signal Gap highest?

- Which gaps create the largest combined impact across reputation, fraud risk, and operational disruption?
- Which gaps sit "between teams" (i.e. nobody is truly accountable)?

### 2.4 How do we prevent regressions?

- What controls prevent trust posture from drifting (DNS changes, identity provider changes, new vendors, new email senders)?
- Do we treat regressions as operational events with clear escalation?

### 2.5 How do we evidence and report trust posture?

- Can we produce a Trust Signal Scorecard with evidence links within 48 hours?
- Is trust posture reviewed on a cadence alongside cyber risk and operational resilience?

---

## 3. Domain prompts (use selectively)

These prompts supplement the governing questions above. Select the domains most relevant to the session.

### 3.1 Identity boundary

- Are privileged accounts protected with strong MFA and monitored access?
- Do we know where identity is delegated (SaaS logins, federations, shared admin accounts)?

### 3.2 Domains and DNS

- Are registrar controls strong enough to prevent domain hijack?
- Do we maintain an inventory of subdomains and ownership?

### 3.3 Email integrity

- Can our primary domains be spoofed today?
- Are SPF, DKIM, and DMARC aligned and enforced for major sending streams?

### 3.4 Digital services

- Are public services consistently secured (TLS posture, headers, availability signalling)?
- Do we have a predictable incident communication pathway?

### 3.5 Infrastructure and platforms

- Are trust-critical assets covered by change control, monitoring, and recovery testing?

### 3.6 Third-party ecosystem

- Do we know which vendors could materially damage trust if compromised?
- Do we have a clear offboarding and access revocation process?

---

## 4. Output to request

Ask for a **one-page Trust Signal Scorecard** summarising:

- maturity by domain
- top 5 trust signal gaps (with owners and due dates)
- the next review date

The scorecard provides the evidence base for the discussion; these questions provide the governance frame.

---

## Related TrustSurface artefacts

- **TSF-MOD-1** - Trust Surface Model and Domains
- **TSF-GOV-1** - Governance Integration
- **TSF-GLO-1** - Glossary
- **TSF-SIG-1** - Trust Signal Catalogue
- **TSF-MTH-1** - Assessment Method
- **TSF-LIF-1** - Trust Lifecycle
- **TSF-ADP-1** - Adoption Guidance

---

## Summary statement

TSF-BRD-1 equips boards and executive committees with a concise, evidence-oriented question set for governing digital trust posture. Used alongside the Trust Signal Scorecard, it converts a complex technical domain into a 10–20 minute governance discussion with clear outputs and accountabilities.
