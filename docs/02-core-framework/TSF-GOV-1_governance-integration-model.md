# TSF-GOV-1 - Governance Integration Model

**Status:** Public draft  
**Control:** Normative  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-GOV-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  

---

## 1. Purpose

This document defines how digital trust is integrated into organisational governance through the TrustSurface Framework.

It establishes the minimum governance model required to:

- assign accountability for Trust Surface domains and trust-critical decisions
- connect Trust Signals to governance, risk, operational, and leadership processes
- prevent trust posture from degrading through organisational change
- support transparent communication of trust posture where appropriate

TSF-GOV-1 turns digital trust from an informal concern into a governed operating responsibility.

---

## 2. Scope

This document applies to governance of the Trust Surface, including:

- identity boundaries
- domains and DNS
- email integrity
- digital services
- infrastructure and platforms
- third-party ecosystem dependencies

This document governs how trust posture is overseen, reviewed, escalated, and communicated.

It does not prescribe product-specific technical controls or replace existing cyber, risk, legal, privacy, or operational governance frameworks.

---

## 3. Core proposition

Digital trust is organisational.

Trust posture is shaped by decisions made across leadership, technology, risk, communications, procurement, service operations, legal, and identity governance functions.

A TrustSurface governance model exists to coordinate those decisions so that trust signals remain observable, credible, current, and owned.

---

## 4. Governance objectives

An organisation using TrustSurface SHALL establish governance that can do all of the following:

1. Maintain a current view of its Trust Surface.
2. Assign clear accountability for each Trust Surface domain.
3. Assess Trust Signals using repeatable evidence.
4. Prioritise and track trust hardening work.
5. Escalate material trust posture issues through existing governance pathways.
6. Prevent regressions caused by change, vendor adoption, or operational drift.
7. Support transparent and accurate trust signalling to stakeholders where context requires it.

---

## 5. Governance principles applied

TSF-GOV-1 applies the core TrustSurface principles operationally.

### 5.1 Trust must be observable
Governance SHALL rely on evidence, not assurance language alone.

### 5.2 Trust failures occur at the surface
Governance SHALL focus on externally experienced systems and trust-critical dependencies.

### 5.3 Trust is an organisational responsibility
Governance SHALL operate across functions and SHALL NOT assume technology is the sole owner of trust posture.

### 5.4 Trust must be continuously maintained
Governance SHALL include cadence, refresh, exception management, and trigger-based review.

### 5.5 Trust should be communicated transparently
Governance SHALL define when and how trust posture is communicated, including during incidents and material changes.

---

## 6. Governance model

The TrustSurface governance model consists of five layers.

### 6.1 Sponsorship
Provides executive backing, direction, and acceptance of residual trust risk.

### 6.2 Ownership
Assigns accountable owners for each Trust Surface domain and major trust-critical service.

### 6.3 Evidence and assessment
Maintains Trust Signal evidence, scorecards, and posture assessments.

### 6.4 Decision and control
Applies change control, exception handling, prioritisation, and escalation.

### 6.5 Signalling and transparency
Determines how trust posture is represented to internal and external stakeholders.

---

## 7. Minimum governance roles

An organisation implementing TrustSurface SHALL define, at minimum, the following roles.

### 7.1 Executive sponsor
Accountable for sponsorship, blockage removal, and acceptance of residual trust risk.

Typical participants:
- CIO
- CTO
- CISO
- COO
- delegated executive owner

### 7.2 TrustSurface owner
Accountable for ensuring the lifecycle operates as a repeatable governance rhythm.

Typical responsibilities:
- coordinate reviews
- maintain the operating cadence
- ensure scorecards and decisions are current
- escalate unresolved trust posture issues

### 7.3 Domain owners
Accountable for trust posture within one or more Trust Surface domains.

Examples:
- identity owner
- domain and DNS owner
- email integrity owner
- digital service owner
- infrastructure/platform owner
- third-party ecosystem owner

### 7.4 Evidence steward
Responsible for maintaining evidence links, refresh dates, and traceability of assessments.

### 7.5 Risk and assurance partner
Responsible for linking trust posture to risk reporting, assurance activity, control oversight, and governance forums.

### 7.6 Communications or public trust partner
Responsible for ensuring public trust signalling, status communication, and posture claims remain accurate and supportable.

### 7.7 Procurement / vendor governance partner
Responsible for ensuring third-party dependencies, delegated trust, and supplier onboarding are governed through a trust posture lens.

### 7.8 Legal / policy partner
Responsible for obligations, disclosures, and legal interpretation where trust posture intersects with contractual, regulatory, or public commitments.

---

## 8. Accountability model

TrustSurface governance SHALL distinguish four forms of accountability.

### 8.1 Strategic accountability
Who sponsors the model and accepts residual trust risk.

### 8.2 Domain accountability
Who owns the trust posture of a specific domain.

### 8.3 Operational accountability
Who maintains evidence, reviews signals, and executes hardening actions.

### 8.4 Decision accountability
Who approves changes, accepts exceptions, and determines escalation pathways.

An organisation SHALL be able to answer the following at any time:

- Who owns this trust-critical surface?
- Who approved its current posture?
- What evidence supports that assessment?
- What happens if the posture degrades?

---

## 9. Decision rights

The governance model SHALL define decision rights for, at minimum, the following events.

### 9.1 New trust surface components
Examples:
- new domains
- new public services or APIs
- new email sending platforms
- new external identity dependencies
- new vendors with delegated trust impact

### 9.2 Material trust posture changes
Examples:
- DMARC policy changes
- DNS migrations
- identity provider changes
- certificate or TLS posture changes
- major supplier incidents

### 9.3 Exceptions
Examples:
- temporary weak signal accepted due to dependency constraints
- delayed remediation due to delivery sequencing
- vendor limitation requiring a time-bound workaround

### 9.4 Public trust signalling decisions
Examples:
- status communication
- transparency reporting
- posture claims on public websites
- stakeholder notification during incidents

Decision rights SHALL identify:
- approver
- consultation requirements
- evidence required
- expiry rules for exceptions
- escalation path if agreement cannot be reached

---

## 10. Governance cadence

TrustSurface governance SHALL operate on both a scheduled and trigger-based cadence.

### 10.1 Scheduled cadence
Minimum required rhythm:

| Activity | Minimum cadence | Primary output |
|---|---:|---|
| Trust Surface Inventory review | Quarterly | Updated inventory and ownership |
| Trust Signal Scorecard refresh | Quarterly, or more frequently for high-change domains | Current posture assessment |
| Hardening backlog review | Monthly | Prioritised remediation decisions |
| Governance review | Quarterly | Decision log, exceptions, escalations |
| Executive posture review | Quarterly or aligned to existing governance cycle | Executive summary and material risks |
| Transparency / signalling review | Quarterly and after incidents | Updated trust signalling decisions |

### 10.2 Trigger-based review
Out-of-cycle governance review SHALL occur when any of the following applies:

- major domain or DNS change
- identity provider change or federation change
- new public service launch
- new vendor onboarding with trust impact
- major vendor incident
- significant outage or service degradation
- trust-related incident such as spoofing, impersonation, certificate failure, or public legitimacy concern

---

## 11. Required governance artefacts

The governance model SHALL maintain the following artefacts.

### 11.1 Trust Surface Inventory
A current inventory of trust-critical systems, services, domains, dependencies, and owners.

### 11.2 Trust Signal Scorecard
A current assessment of signal strength, coverage, and notable gaps.

### 11.3 Evidence register
Linked evidence showing how posture claims were assessed.

### 11.4 Trust Hardening Plan
A prioritised set of actions to strengthen weak or inconsistent trust signals.

### 11.5 Decision and exception log
A record of governance decisions, accepted exceptions, expiry dates, and accountable owners.

### 11.6 Trust transparency mechanisms
A record of approved external or internal trust signalling mechanisms, such as status communication, security posture notes, incident communication pathways, and verification guidance.

---

## 12. Integration points with existing governance

TrustSurface SHALL integrate with existing governance rather than operate as a parallel bureaucracy.

### 12.1 Risk management
Material trust posture weaknesses SHALL be representable within enterprise, operational, or service risk processes.

### 12.2 Architecture and change governance
Changes affecting the Trust Surface SHALL be reviewable through architecture, engineering, CAB, or equivalent change pathways.

### 12.3 Service management and operations
Trust posture regressions SHALL be treated as operationally meaningful events when they materially affect confidence, integrity, or stakeholder trust.

### 12.4 Procurement and vendor governance
Third-party dependencies with trust impact SHALL be reviewed during onboarding, renewal, and incident response.

### 12.5 Security governance
TrustSurface SHALL complement security governance by translating external-facing signals into a posture that leadership and non-technical stakeholders can understand.

### 12.6 Executive and board reporting
Material trust posture issues, trends, and accepted exceptions SHALL be capable of inclusion in leadership and board reporting.

---

## 13. Minimum control requirements

An organisation claiming alignment with TSF-GOV-1 SHALL implement the following minimum controls.

### 13.1 Ownership control
Each Trust Surface domain SHALL have an accountable owner.

### 13.2 Change control
Material changes to trust-critical systems SHALL follow an approved change pathway.

### 13.3 Evidence control
Trust posture claims SHALL be backed by dated and attributable evidence.

### 13.4 Exception control
Exceptions SHALL be explicit, approved, time-bound, and reviewed before expiry.

### 13.5 Review control
Trust posture SHALL be reviewed on a cadence proportionate to change and exposure.

### 13.6 Escalation control
Material trust posture degradation SHALL have a defined escalation pathway.

### 13.7 Transparency control
Public trust signalling SHALL be truthful, supportable, and aligned to current evidence.

---

## 14. Escalation model

An organisation SHALL define escalation criteria for trust posture issues.

Examples include:
- spoofable primary domain
- unowned or abandoned trust-critical domain
- significant degradation of identity or authentication posture
- repeated service reliability issues affecting stakeholder confidence
- critical supplier incident affecting public trust or service legitimacy
- inability to produce evidence for a high-risk posture claim

Escalation criteria SHOULD consider:
- stakeholder impact
- exposure duration
- fraud or impersonation risk
- operational dependency
- reputational consequence
- regulatory or contractual consequence

---

## 15. Transparency and public signalling

TrustSurface governance includes not only internal oversight but also governed communication.

An organisation using TSF-GOV-1 SHALL determine which trust posture signals are communicated publicly, internally, or only on request.

Typical signalling mechanisms may include:
- service status communication
- incident communication pathways
- security transparency statements
- verification guidance for customers or partners
- contact points for abuse, security, or authenticity concerns

Public trust signalling SHALL:
- be evidence-based
- avoid claims that cannot be supported operationally
- be reviewed after incidents and material changes
- align to the current Trust Signal Scorecard where relevant

---

## 16. Governance outputs by lifecycle stage

TSF-GOV-1 is the primary normative output of the **Govern** stage, but governance expectations apply across the full lifecycle.

| Lifecycle stage | Governance expectation | Minimum output |
|---|---|---|
| Discover | Inventory and ownership are current | Trust Surface Inventory |
| Assess | Evidence is linked and reviewable | Trust Signal Scorecard + evidence |
| Harden | Priorities are owned and sequenced | Trust Hardening Plan |
| Govern | Decision rights, controls, and exceptions are active | Digital Trust Governance Model |
| Signal | Communication is accurate and supportable | Trust Transparency Mechanisms |

---

## 17. Maturity implications

The maturity of TrustSurface governance can be understood as follows.

### Level 1–2
- ownership is fragmented
- reviews occur after incidents
- evidence is hard to assemble
- trust posture is not regularly reported

### Level 3
- scorecards exist
- owners are assigned
- cadence is active
- hardening work is governed

### Level 4
- trust posture is integrated into risk and executive reporting
- supplier governance includes trust criteria
- change governance actively prevents regressions

### Level 5
- trust posture is strategically governed and transparently signalled
- the organisation demonstrates leadership in how digital trust is maintained and communicated

---

## 18. Non-goals

TSF-GOV-1 does not:

- replace cybersecurity frameworks or risk frameworks
- define every technical control required for each domain
- require a new standing committee where existing forums are sufficient
- prescribe a single organisational structure
- turn trust posture into a marketing exercise

---

## 19. Conformance

An organisation may claim alignment with TSF-GOV-1 only if it can demonstrate all of the following:

1. a current Trust Surface Inventory with accountable owners
2. a current Trust Signal Scorecard with evidence
3. active governance cadence and trigger-based review
4. documented decision rights and exception handling
5. escalation pathways for material trust posture degradation
6. integration with at least one existing risk, change, or leadership governance pathway
7. governed trust signalling mechanisms where relevant

Partial adoption SHOULD be described as adoption in progress, not full alignment.

---

## 20. Implementation notes

This document is intentionally framework-level.

Organisations may implement TSF-GOV-1 through:
- existing governance committees
- service ownership structures
- architecture and change forums
- risk and resilience reporting
- procurement and vendor assurance workflows

The required outcome is not a specific structure.
The required outcome is governed, evidence-based, cross-functional control of digital trust posture.

---

## 21. Related TrustSurface artefacts

- TSF-PRI-1 - Trust Principles
- TSF-DEF-1 - Trust Surface Definition
- TSF-MOD-1 - Trust Surface Model & Domains
- TSF-SIG-1 - Trust Signal Catalogue
- TSF-LIF-1 - Trust Surface Lifecycle
- TSF-MTH-1 - Assessment Method
- TSF-MAT-1 - Digital Trust Maturity Model
- TSF-ADP-1 - Adoption Guidance
- TSF-BRD-1 - Board Questions

---

## 22. Resolved issues

The following items were resolved for the v1.1 public draft:

1. Legal and identity governance are treated as Trust Surface domains (current position retained).
2. Minimum cadence language is mandatory (SHALL).
3. Evidence sufficiency, scoring tolerance, and handling of unknown or stale evidence are addressed in TSF-MTH-1 following an approach consistent with comparable frameworks - TrustSurface is not a compliance certification.
4. Normative change control, supersession, and deprecation are addressed in TSF-VPOL-1.
5. Decision-log templates and exception registers are not published as separate operational artefacts.

---

## 23. Summary statement

Digital trust is not governed by one team acting alone.

It is governed when an organisation can show who owns the Trust Surface, what signals are being emitted, what evidence supports current posture, how change is controlled, how weaknesses are escalated, and how trust is communicated truthfully.

