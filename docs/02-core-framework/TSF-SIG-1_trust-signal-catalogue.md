# TSF-SIG-1 - Trust Signal Catalogue

**Status:** Public draft  
**Control:** Informative  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-SIG-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  
**Primary visual artefact:** TSF-06  
**Supports:** TSF-MTH-1, TSF-LIF-1

---

## 1. Purpose

This document defines a baseline set of observable indicators - Trust Signals - used to assess Digital Trust Posture at the Trust Surface.

The Trust Signal Catalogue serves three purposes:

1. It gives organisations a structured starting point for identifying what to assess when evaluating their Trust Surface.
2. It provides a common signal vocabulary that makes posture assessments comparable and discussable across teams.
3. It establishes the signal layer that the Assessment Method (TSF-MTH-1) acts upon when producing Signal Assessment Records and Domain Judgements.

The catalogue is a baseline, not an exhaustive specification. Organisations are expected to extend it with context-specific signals relevant to their environment. The governance of that extension is described in Section 6.

---

## 2. Scope

This document covers:

- the signal record format used across the catalogue
- the baseline set of Trust Signals, organised by Trust Surface Domain
- guidance on how the catalogue relates to the assessment method
- catalogue governance - how signals may be extended

This document does not define assessment scoring logic, evidence sufficiency thresholds, or how Domain Judgements are produced. Those are defined in **TSF-MTH-1** - Assessment Method.

The catalogue is informative. It provides the signal vocabulary that normative processes act upon, but the catalogue itself does not impose SHALL-level requirements on organisations. Organisations SHOULD use the baseline as a starting point and MAY extend it.

---

## 3. What a Trust Signal is

A Trust Signal is evidence that a system is:

- **authentic** - harder to impersonate
- **well governed** - owned, controlled, maintained
- **resilient** - behaves predictably under change and stress
- **accountable** - can be explained and evidenced

Signals may be publicly observable (e.g. DNS records) or internally verifiable (e.g. privileged access governance), but they should always be demonstrable.

A signal is only useful if it can be evidenced, refreshed, and governed. A Trust Signal that cannot be verified or updated is not a functioning signal - it is an assumption. The distinction between a current, evidenced signal and a stale or assumed one is captured through the concept of Evidence Freshness, defined in TSF-GLO-1.

The anatomy of a Trust Signal - how signals are structured, what makes them strong or weak, and how they relate to evidence and posture - is illustrated in visual artefact **TSF-06** - Trust Signal Anatomy.

---

## 4. Signal record format

Each signal in the catalogue is defined using the following structure:

- **ID** - stable identifier (e.g. EML-03)
- **Domain** - Trust Surface Domain to which the signal belongs
- **Signal** - what is being measured
- **Evidence** - what constitutes acceptable proof
- **Trust implication** - why the signal matters for trust posture

When organisations produce Signal Assessment Records during assessment (per TSF-MTH-1), this catalogue provides the signal reference. Each Signal Assessment Record references a signal identifier from this catalogue (or from an organisationally-maintained extension).

---

## 5. Catalogue (baseline set)

### Identity boundary (IDN)

| ID | Signal | Evidence | Trust implication |
|---|---|---|---|
| IDN-01 | MFA for privileged accounts | enforcement policy + audit evidence | reduces takeover and lateral movement |
| IDN-02 | Strong authentication for workforce | MFA coverage %; exceptions documented | reduces common compromise paths |
| IDN-03 | Privileged access governance | role separation; approval workflow; monitoring | proves admin access is controlled |
| IDN-04 | Joiner/mover/leaver lifecycle | deprovisioning SLA + sampling evidence | prevents orphaned access |
| IDN-05 | External federation governance | SSO inventory; trust relationships reviewed | reduces identity boundary drift |

### Domains & DNS (DNS)

| ID | Signal | Evidence | Trust implication |
|---|---|---|---|
| DNS-01 | Registrar controls | registrar lock; MFA; recovery controls | prevents domain hijack |
| DNS-02 | Authoritative DNS hygiene | resilient NS; change control; no stale records | reduces outages and routing abuse |
| DNS-03 | DNSSEC on critical domains | DS records present and valid | strengthens resolution integrity |
| DNS-04 | CAA records | CAA restricting certificate issuance | reduces mis-issuance risk |
| DNS-05 | Subdomain inventory | current inventory + ownership mapping | reduces shadow surface |

### Email integrity (EML)

| ID | Signal | Evidence | Trust implication |
|---|---|---|---|
| EML-01 | SPF defined and constrained | SPF present; no unsafe wildcards; aligned sending | reduces spoofing paths |
| EML-02 | DKIM signing for major streams | DKIM selectors deployed; signing verified | enables domain responsibility |
| EML-03 | DMARC alignment and policy | DMARC record; alignment; policy; reporting | reduces impersonation and improves reporting |
| EML-04 | Transport integrity (where applicable) | controls configured and validated | reduces downgrade and interception risk |
| EML-05 | Sender change control | approval path + inventory updated | prevents "shadow senders" |

### Digital services (WEB)

| ID | Signal | Evidence | Trust implication |
|---|---|---|---|
| WEB-01 | HTTPS posture | valid cert; modern TLS; automation | prevents trivial interception |
| WEB-02 | Baseline security headers | CSP/HSTS/frame protection set | reduces common browser attack classes |
| WEB-03 | Availability signalling | status page or equivalent comms | reduces ambiguity during outages |
| WEB-04 | Vulnerability contact | security.txt or published contact process | enables responsible disclosure |
| WEB-05 | API edge controls (where relevant) | authn/z; rate limiting; logging | reduces abuse of exposed APIs |

### Infrastructure & platforms (INF)

| ID | Signal | Evidence | Trust implication |
|---|---|---|---|
| INF-01 | Logging and monitoring coverage | logs for critical services; alerting | supports detection and assurance |
| INF-02 | Backup and recovery evidence | backups tested; RTO/RPO defined | reduces impact of failure |
| INF-03 | Change control for trust-critical assets | approval + audit trail for DNS/IdP/email | prevents accidental trust regressions |
| INF-04 | Secrets and key management | vaulting; rotation; access controls | reduces credential leakage risk |

### Third-party ecosystem (TP)

| ID | Signal | Evidence | Trust implication |
|---|---|---|---|
| TP-01 | Vendor inventory and ownership | current list; service owners | prevents unmanaged dependency risk |
| TP-02 | Assurance evidence captured | SOC2/ISO attestations or risk review | supports procurement trust decisions |
| TP-03 | Integration boundary control | least privilege; scoped tokens; reviews | reduces blast radius |
| TP-04 | Offboarding and exit controls | access revocation; data handling documented | prevents persistent third-party exposure |

---

## 6. Catalogue governance

### 6.1 Baseline signals and organisational extensions

The signals listed in Section 5 are the TrustSurface Framework baseline. They represent a well-considered starting point applicable to most organisations, but they are not exhaustive.

Organisations operating the Trust Surface Lifecycle MAY extend the catalogue with additional signals suited to their context. Examples include:

- regulatory signals relevant to specific sectors (e.g. financial services, health, critical infrastructure)
- product-specific signals for platforms not covered at baseline
- signals relevant to specific stakeholder groups or assurance obligations

When extending the catalogue, organisations SHOULD:

- follow the same signal record format (ID, Domain, Signal, Evidence, Trust implication)
- assign stable identifiers to extension signals
- document the extension in their Trust Surface Inventory or assessment records
- review extensions as part of the regular governance cadence

### 6.2 Retiring and superseding signals

Signals may become obsolete due to changes in technology, protocol deprecation, or governance practice. Organisations SHOULD review their signal baseline periodically and retire signals that are no longer relevant.

At the framework level, changes to the baseline catalogue are versioned through TSF-CHG-1 - Change Management.

### 6.3 Minimum coverage

Organisations beginning Trust Surface assessment do not need to assess every signal immediately. A reasonable starting point is to assess the highest-risk signals across each domain, build evidence, and expand coverage over time.

The catalogue intentionally supports incremental adoption. The absence of coverage for some signals should be recorded and tracked rather than treated as disqualifying.

---

## 7. Relationship to TSF-MTH-1

The Trust Signal Catalogue defines the signal inventory. TSF-MTH-1 - Assessment Method defines how signals are assessed.

When an assessor works through the lifecycle's Assess stage, they:

1. Reference signals from this catalogue (and any extensions)
2. Evaluate evidence against each signal
3. Produce a Signal Assessment Record for each signal assessed
4. Aggregate Signal Assessment Records into a Trust Signal Scorecard
5. Derive a Domain Judgement for each Trust Surface Domain

The catalogue provides the "what to assess" layer. TSF-MTH-1 provides the "how to assess" layer. Neither document is complete without the other.

Signal Assessment Records will use the signal identifiers defined here (e.g. EML-03, DNS-01) as their primary reference keys.

---

## 8. Relationship to maturity

Signals can be assessed using the Digital Trust Maturity Model (TSF-MAT-1).

An organisation's pattern of strong, mixed, partial, or absent signals across the catalogue typically reflects its maturity level:

- Level 1 organisations often cannot evidence many baseline signals
- Level 2 organisations may have partial evidence following remediation episodes
- Level 3 organisations have consistent evidence across most signals
- Level 4 and 5 organisations evidence signals routinely and have governance that prevents regressions

The catalogue does not determine maturity directly. Maturity is a governance judgement informed by patterns in assessed signals. See TSF-MAT-1 for the full model.

---

## 9. Non-goals

TSF-SIG-1 does not:

- define assessment scoring formulas or posture thresholds (that is TSF-MTH-1's responsibility)
- prescribe which signals are mandatory for every organisation
- claim that the baseline catalogue covers every possible trust-relevant indicator
- determine an organisation's maturity level (that is TSF-MAT-1's responsibility)
- replace technical configuration guidance for individual technologies

---

## 10. Related TrustSurface artefacts

- **TSF-DEF-1** - Trust Surface Definition
- **TSF-MOD-1** - Trust Surface Model & Domains
- **TSF-LIF-1** - Trust Surface Lifecycle
- **TSF-MTH-1** - Assessment Method
- **TSF-MAT-1** - Digital Trust Maturity Model
- **TSF-GOV-1** - Governance Integration Model
- **TSF-GLO-1** - Glossary
- **TSF-06** - Trust Signal Anatomy (visual artefact)

---

## 11. Summary statement

The Trust Signal Catalogue defines the observable indicators through which Digital Trust Posture is assessed.

It provides a domain-structured baseline of signals that organisations use to discover what to assess, produce consistent evidence, and connect signal outcomes to posture, maturity, and governance decisions. The catalogue is a starting point designed for extension - not a closed list.
