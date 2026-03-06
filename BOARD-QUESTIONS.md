# Board Questions

These questions help a board or executive committee govern digital trust using evidence.
They are designed for a 10–20 minute discussion, supported by a one‑page TrustSurface scorecard.

(Definitions align to TrustSurface Glossary v1.0.)

## 1) What is our Trust Surface?

- Do we have a current inventory of trust‑critical systems (domains, identity providers, email platforms, public services/APIs, critical vendors)?
- Who owns each Trust Surface domain (decision rights and accountability, not “support”)?

## 2) What do we signal to the outside world?

- If an external party tries to validate us (email, website, portals), what evidence do they see?
- Where are Trust Signals weak, inconsistent, or out of date?

## 3) Where is the Trust Signal Gap highest?

- Which gaps create the largest combined impact across reputation, fraud risk, and operational disruption?
- Which gaps sit “between teams” (i.e. nobody is truly accountable)?

## 4) How do we prevent regressions?

- What controls prevent trust posture from drifting (DNS changes, identity provider changes, new vendors, new email senders)?
- Do we treat regressions as operational events with clear escalation?

## 5) How do we evidence and report trust posture?

- Can we produce a Trust Signal Scorecard with evidence links within 48 hours?
- Is trust posture reviewed on a cadence alongside cyber risk and operational resilience?

## Domain prompts (use selectively)

### Identity boundary

- Are privileged accounts protected with strong MFA and monitored access?
- Do we know where identity is delegated (SaaS logins, federations, shared admin accounts)?

### Domains & DNS

- Are registrar controls strong enough to prevent domain hijack?
- Do we maintain an inventory of subdomains and ownership?

### Email integrity

- Can our primary domains be spoofed today?
- Are SPF/DKIM/DMARC aligned and enforced for major sending streams?

### Digital services

- Are public services consistently secured (TLS posture, headers, availability signalling)?
- Do we have a predictable incident communication pathway?

### Infrastructure & platforms

- Are trust‑critical assets covered by change control, monitoring, and recovery testing?

### Third‑party ecosystem

- Do we know which vendors could materially damage trust if compromised?
- Do we have a clear offboarding and access revocation process?

## Output to request

Ask for a **one‑page TrustSurface scorecard** summarising:

- maturity by domain
- top 5 trust signal gaps (with owners and due dates)
- the next review date
