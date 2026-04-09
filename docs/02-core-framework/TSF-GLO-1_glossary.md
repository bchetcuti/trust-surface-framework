# TSF-GLO-1 - Glossary

**Status:** Public draft  
**Control:** Normative  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-GLO-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1 (self-referential - this document is the baseline)

---

## 1. Purpose

This document defines the stable vocabulary used throughout the TrustSurface Framework.

All framework artefacts MUST use terms consistently with the definitions in this glossary. If a term used in a framework artefact is not defined here, the artefact's author SHOULD propose an addition to this document before publication.

If a definition changes, the glossary version MUST be incremented and the change MUST be recorded in the Version history section.

---

## 2. Scope

This glossary covers:

- the core concepts of the TrustSurface Framework
- terms that recur across multiple artefacts
- terms that have a specific TrustSurface meaning distinct from general usage

It does not define technical configuration terms (e.g. SPF, DMARC syntax), external standards, or legal terms. Where external standards use a term differently, the TrustSurface definition governs within the framework.

---

## 3. Definitions

### Digital Trust Posture

**Definition**

> The current, evidence-based state of an organisation's Trust Surface as represented by the strength, consistency, and coverage of its Trust Signals.

**Notes**

- "Digital Trust Posture" is the full, preferred form of this term. "Trust Posture" is accepted as a short form throughout the framework.
- Digital Trust Posture answers: *"How trustworthy do our digital systems appear to stakeholders, based on evidence?"*
- Digital Trust Posture complements (but does not replace) security posture. Security posture focuses on protection from attack; Digital Trust Posture focuses on the reliability and credibility of external-facing digital interactions.
- Posture is not a claim made by branding, intent, or assurance language. It is an evidence-backed condition derived from assessed Trust Signals.

---

### Digital Edge

**Definition**

> The boundary where digital systems and stakeholders meet; the location where trust is experienced.

**Notes**

- The Digital Edge is where Trust Signals become externally visible. It is where email is received, websites are loaded, APIs are called, and DNS is resolved.
- Trust failures are experienced at the Digital Edge before they are detected internally.
- The Digital Edge concept explains why the Trust Surface is a governance concern, not only a technical one: the boundary is experienced by stakeholders regardless of internal controls.

---

### Domain Judgement

**Definition**

> A summary assessment of a Trust Surface Domain's current condition, expressed using one of five labels: Sustained, Mixed, Fragile, Deficient, or Indeterminate.

**Notes**

- Domain Judgements are produced during the Assess stage of the Trust Surface Lifecycle, using the assessment method defined in TSF-MTH-1.
- The five labels reflect assessable outcomes:
  - **Sustained** - trust signals are strong and evidence is current
  - **Mixed** - signals are uneven; some strong, some weak or stale
  - **Fragile** - signals are present but vulnerable to regression
  - **Deficient** - key signals are absent or materially weak
  - **Indeterminate** - evidence is insufficient to judge the domain
- A Domain Judgement is not a score. It is a governed assessment expression requiring interpretation in context.
- Domain Judgements roll into the Trust Signal Scorecard and inform the overall view of Digital Trust Posture.

---

### Evidence Freshness

**Definition**

> Whether assessment evidence is current, aging, stale, or unknown.

**Notes**

- Evidence Freshness is a property of a Signal Assessment Record, indicating how recently the evidence was verified.
- Suggested freshness states:
  - **Current** - evidence was verified within the last assessment cycle
  - **Aging** - evidence is approaching the point at which refresh is warranted
  - **Stale** - evidence has not been refreshed within the defined cadence; the posture claim may no longer be reliable
  - **Unknown** - no evidence has been gathered or the last evidence date is not recorded
- Stale or Unknown evidence degrades the reliability of a Domain Judgement and should be flagged for refresh.
- Evidence Freshness prevents posture from being treated as permanently valid once initially assessed.

---

### Governance Integration

**Definition**

> The organisational mechanisms that keep trust posture owned, reviewed, controlled, and connected to decision-making.

**Notes**

- Governance Integration is one of the four core model elements in TSF-MOD-1.
- It recognises that digital trust is not self-sustaining: without deliberate governance, posture degrades through change, inattention, and distributed ownership.
- Governance Integration is the primary focus of TSF-GOV-1 - Governance Integration Model.
- The term emphasises integration with existing organisational governance rather than creation of a separate bureaucracy.

---

### Signal Assessment Record

**Definition**

> The fundamental unit of assessment in TSF-MTH-1, containing the signal identifier, evidence observed, result state, confidence level, and evidence freshness for a single assessed Trust Signal.

**Notes**

- Signal Assessment Records are produced during the Assess stage of the Trust Surface Lifecycle.
- Each record references a signal identifier from TSF-SIG-1 (or an organisational extension).
- A collection of Signal Assessment Records is aggregated into a Trust Signal Scorecard.
- Signal Assessment Records provide the traceability needed to support governance decisions - they are not informal notes.

---

### Trust Hardening

**Definition**

> The work required to strengthen weak, partial, or poorly governed Trust Signals.

**Notes**

- Trust Hardening is the activity that occurs in Stage 3 of the Trust Surface Lifecycle.
- It is distinct from security hardening in that it focuses specifically on the trust-signal layer: the observable indicators through which stakeholders judge trustworthiness.
- Trust Hardening addresses Trust Signal Gaps - closing the difference between the posture an organisation intends and the posture actually evidenced at the Trust Surface.
- Hardening actions typically include enforcing email authentication policies, improving domain governance, strengthening identity controls, and addressing vendor ecosystem gaps.

---

### Trust Hardening Plan

**Definition**

> A prioritised set of actions to strengthen Trust Signals, typically sequenced in 30/60/90-day increments.

**Notes**

- The Trust Hardening Plan is the primary output of Stage 3 (Harden) of the Trust Surface Lifecycle.
- It references specific signal identifiers and Trust Surface Domains from TSF-SIG-1.
- Each action in the plan SHOULD have an accountable owner, a target date, and a success criterion.
- The plan is reviewed and updated through the governance cadence defined in TSF-GOV-1.
- A Trust Hardening Plan that is not actively maintained and reviewed is not functioning as a governance artefact.

---

### Trust Signalling

**Definition**

> The deliberate communication of trust-relevant information to stakeholders.

**Notes**

- Trust Signalling is the activity that occurs in Stage 5 of the Trust Surface Lifecycle.
- It is distinct from the technical concept of a Trust Signal: Trust Signalling is the governed, intentional communication act, while a Trust Signal is the observable indicator assessed in the Assess stage.
- The goal of Trust Signalling is appropriate transparency - ensuring that stakeholders can verify or assess the organisation's digital trust posture in context.
- Trust Signalling is not a marketing activity. Claims made through Trust Signalling must be supportable by current evidence.

---

### Trust Signal

**Definition**

> An observable indicator (evidence) that describes the trust posture of a Trust Surface component.

**Notes**

- Signals can be externally observable (e.g. DNS records, TLS certificates) or internally verifiable (e.g. identity governance records), but must be demonstrable.
- A signal is only useful if it can be evidenced, refreshed, and governed.
- The baseline set of Trust Signals is defined in TSF-SIG-1 - Trust Signal Catalogue.
- The anatomy of a Trust Signal - including signal structure, evidence requirements, and result states - is illustrated in visual artefact TSF-06.

---

### Trust Signal Gap

**Definition**

> The difference between the trust posture an organisation intends (or believes it has) and the posture actually signalled by observable evidence.

**Notes**

- The gap is most visible when strong internal controls coexist with weak external signals - for example, a mature security programme alongside spoofable email or unmanaged domains.
- Closing the gap is a governance task: it requires inventory, evidence, ownership, and change control.
- Trust Signal Gaps are identified during the Assess stage and addressed through Trust Hardening.
- A gap that is known but not actively managed is an accepted exception and must be governed as such.

---

### Trust Signal Scorecard

**Definition**

> A structured summary of assessed Trust Signals, evidence, and posture gaps, organised by Trust Surface Domain.

**Notes**

- The Trust Signal Scorecard is the primary output of Stage 2 (Assess) of the Trust Surface Lifecycle.
- It aggregates Signal Assessment Records into a domain-structured view of Digital Trust Posture.
- A complete scorecard includes: signal-level outcomes, evidence references, Evidence Freshness indicators, Trust Signal Gaps, and Domain Judgements for each assessed domain.
- The scorecard is the governance artefact from which hardening priorities are derived and posture is reported to leadership.
- It is not a one-time deliverable: it must be refreshed on the cadence defined in TSF-GOV-1 to remain current.

---

### Trust Surface

**Definition**

> The collection of digital systems and observable signals through which stakeholders experience and judge the trustworthiness of an organisation's digital presence.

**Notes**

- "Trust Surface" is broader than "Attack Surface". It includes the systems that shape trust perception - and therefore reputation and adoption - not only technical entry points.
- A Trust Surface is experienced at the Digital Edge: domains and DNS, email, public-facing services, identity boundaries, and delegated trust through vendors.
- The Trust Surface includes both what an organisation operates and what it delegates to third parties.
- The canonical definition and governance necessity of the Trust Surface are established in TSF-DEF-1.

---

### Trust Surface Domain

**Definition**

> One of the six categories used to describe where digital trust is experienced.

**Notes**

- The six Trust Surface Domains are: Identity boundary, Domains & DNS, Email integrity, Digital services, Infrastructure & platforms, and Third-party ecosystem.
- Domains provide a stable structure for assigning ownership, assessing signals, and organising governance.
- Domain boundaries are conceptually distinct but operationally overlapping; multi-domain interpretation is expected and supported by the framework.
- The full domain model is defined in TSF-MOD-1 - Trust Surface Model & Domains.

---

### Trust Surface Inventory

**Definition**

> A current inventory of trust-critical systems, services, domains, dependencies, and owners, organised by Trust Surface Domain.

**Notes**

- The Trust Surface Inventory is the primary output of Stage 1 (Discover) of the Trust Surface Lifecycle.
- A complete inventory includes: systems and services listed, domain assignment, accountable owner, and last review date.
- Inventory entries with unknown ownership or scope should be flagged for resolution.
- An out-of-date or incomplete inventory undermines all subsequent stages of the lifecycle.
- The Trust Surface Inventory is a living governance document, not a project deliverable.

---

### Trust Surface Lifecycle

**Definition**

> The repeatable operating rhythm for managing digital trust posture: Discover, Assess, Harden, Govern, Signal.

**Notes**

- The lifecycle ensures Digital Trust Posture is maintained, not assumed.
- Each stage produces defined outputs that feed the next stage.
- The lifecycle is not strictly sequential in practice - governance and signalling operate continuously - but the staged structure ensures no component of trust posture is managed informally.
- The normative specification of the lifecycle is in TSF-LIF-1.
- The lifecycle is visualised in TSF-05.

---

### Trust Transparency Mechanism

**Definition**

> An approved mechanism for communicating trust posture to stakeholders (e.g. status pages, security contact, incident communication channels, posture statements).

**Notes**

- Trust Transparency Mechanisms are the governed channels through which Trust Signalling is conducted.
- Examples include: service status pages, security.txt files, incident communication processes, published security posture statements, and verification guidance.
- The appropriateness and scope of each mechanism is a governance decision: not all trust posture information needs to be public.
- Trust Transparency Mechanisms MUST be consistent with current Digital Trust Posture; they MUST NOT make claims that cannot be supported by evidence.
- Trust Transparency Mechanisms are defined and governed under Stage 5 of the Trust Surface Lifecycle and the transparency controls in TSF-GOV-1.

---

## 4. Related TrustSurface artefacts

- **TSF-DEF-1** - Trust Surface Definition
- **TSF-MOD-1** - Trust Surface Model & Domains
- **TSF-SIG-1** - Trust Signal Catalogue
- **TSF-LIF-1** - Trust Surface Lifecycle
- **TSF-GOV-1** - Governance Integration Model
- **TSF-MTH-1** - Assessment Method
- **TSF-MAT-1** - Digital Trust Maturity Model

---

## 5. Summary statement

TSF-GLO-1 establishes the stable vocabulary for the TrustSurface Framework.

All framework artefacts depend on consistent use of these definitions. If vocabulary changes, this document must change first - and the version must be incremented.

---

## Version history

- **v1.0 (2026-03-06)** - Initial stabilised glossary. Defined: Trust Surface, Trust Signal, Trust Posture, Trust Signal Gap.
- **v1.1 (2026-04-09)** - Expanded to full v1.1 vocabulary baseline. Renamed "Trust Posture" to "Digital Trust Posture" (primary), with "Trust Posture" retained as accepted short form. Added: Trust Surface Domain, Trust Signal Scorecard, Trust Surface Inventory, Trust Hardening, Trust Hardening Plan, Trust Signalling, Trust Transparency Mechanism, Trust Surface Lifecycle, Governance Integration, Signal Assessment Record, Evidence Freshness, Domain Judgement, Digital Edge. Control updated from Informative to Normative.
