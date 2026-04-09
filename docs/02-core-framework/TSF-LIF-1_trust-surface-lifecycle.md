# TSF-LIF-1 - Trust Surface Lifecycle

**Status:** Public draft  
**Control:** Normative  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-LIF-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  
**Primary visual artefact:** TSF-05  
**Supports:** TSF-GOV-1, TSF-MTH-1

---

## 1. Purpose

This document defines the Trust Surface Lifecycle - the repeatable operating rhythm through which organisations identify, assess, strengthen, govern, and communicate their digital trust posture.

Digital trust is not static. Changes in infrastructure, vendors, domains, or services can alter the Trust Signals an organisation emits. Without a governing cycle, trust posture tends to degrade silently - not through deliberate decision, but through accumulated drift.

The lifecycle ensures Digital Trust Posture is **maintained**, not assumed.

TSF-LIF-1 is normative. It establishes what SHALL be produced at each lifecycle stage and what it means to operate the lifecycle in a controlled way.

---

## 2. Scope

This document applies to the full Trust Surface Lifecycle as operated within the TrustSurface Framework.

It governs:

- the five lifecycle stages and their required outputs
- minimum output expectations for each stage
- how the lifecycle connects to the governance model (TSF-GOV-1)
- how the lifecycle connects to the assessment method (TSF-MTH-1)

This document does not prescribe how frequently the lifecycle runs in its entirety. Cadence is defined in TSF-GOV-1. Nor does it prescribe the scoring method used in the Assess stage - that is TSF-MTH-1's responsibility.

The lifecycle is visualised in **TSF-05** - Trust Surface Lifecycle.

---

## 3. Lifecycle overview

The Trust Surface Lifecycle consists of five stages operated as a continuous, repeating cycle:

**Discover → Assess → Harden → Govern → Signal → (repeat)**

Each stage produces defined outputs that feed the next. The cycle is not strictly sequential in practice - governance and signalling operate continuously - but the stages provide a clear conceptual structure for managing digital trust posture.

---

## 4. Stage 1 - Discover

### Purpose

Identify the systems, services, domains, and dependencies that make up the organisation's Trust Surface.

### What this stage involves

Discovery involves constructing and maintaining a current inventory of the Trust Surface, organised by Trust Surface Domain.

Typical inclusions:

- registered domains and DNS infrastructure
- email platforms and sending services
- websites, portals, and APIs
- identity boundaries and authentication services
- cloud platforms and hosting
- third-party SaaS providers and integrations

### Minimum output expectations

An organisation completing the Discover stage SHALL produce a **Trust Surface Inventory** that:

- lists trust-critical systems, services, domains, and dependencies
- assigns an accountable owner to each entry
- is organised by Trust Surface Domain or maps entries to domains
- captures the date the inventory was last reviewed
- identifies any components with unknown ownership or unclear scope

A Trust Surface Inventory that cannot be mapped to owners or domain coverage is incomplete. Unknown components SHOULD be flagged and resolved in the next cycle.

---

## 5. Stage 2 - Assess

### Purpose

Evaluate the Trust Surface by assessing the Trust Signals emitted by each Trust Surface Domain.

### What this stage involves

Signals are observed or verified to determine posture and evidence coverage. The assessment method used to evaluate signals is defined in **TSF-MTH-1** - Assessment Method.

For each assessed signal, an assessor produces a Signal Assessment Record containing:
- the signal identifier
- the evidence observed
- the result state (e.g. Present and Strong, Partial, Absent, Unknown)
- a confidence level
- an evidence freshness indicator

### Minimum output expectations

An organisation completing the Assess stage SHALL produce a **Trust Signal Scorecard** that:

- references assessed signals by identifier (using TSF-SIG-1 or an extension)
- records the evidence observed for each signal
- captures the result state and any notable weaknesses or gaps
- includes a Domain Judgement for each Trust Surface Domain assessed
- identifies Trust Signal Gaps - differences between intended posture and assessed evidence
- is dated and attributable

A scorecard that does not include evidence references or domain-level judgements does not meet the minimum expectation. Assessments based on recalled impressions rather than verified evidence are not assessments - they are assumptions.

---

## 6. Stage 3 - Harden

### Purpose

Strengthen weak, partial, or absent trust signals to improve Digital Trust Posture.

### What this stage involves

Trust Hardening is the work required to address weaknesses identified during assessment. It involves prioritising gaps from the Trust Signal Scorecard and translating them into planned, sequenced actions.

Typical actions include:

- enforcing DMARC policies and alignment
- improving domain governance and DNS hygiene
- strengthening authentication boundaries
- hardening public service posture (TLS, headers, availability)
- addressing vendor governance gaps
- closing orphaned access or unowned domain entries

### Minimum output expectations

An organisation completing the Harden stage SHALL produce a **Trust Hardening Plan** that:

- lists actions by priority, referencing signal identifiers and domain areas
- assigns an owner to each hardening action
- sequences actions in 30/60/90-day increments or an equivalent milestone structure
- records the rationale for prioritisation decisions
- is reviewed and updated on the governance cadence defined in TSF-GOV-1

The Trust Hardening Plan SHOULD also include a backlog of lower-priority items not yet sequenced for current delivery.

---

## 7. Stage 4 - Govern

### Purpose

Integrate trust posture into organisational governance mechanisms so it stays strong over time and is resilient to change.

### What this stage involves

Governance integration ensures that the improvements made during Harden do not erode through organisational change, vendor shifts, or operational drift. It connects trust posture to existing governance processes rather than creating a separate bureaucracy.

Governance mechanisms SHALL include:

- assigning accountability for each Trust Surface Domain
- incorporating trust posture into risk reporting
- integrating signal state into procurement and vendor onboarding decisions
- establishing regular Trust Surface reviews on a defined cadence
- defining exception handling with expiry dates and accountable owners
- applying change control to trust-critical assets and configurations

### Minimum output expectations

An organisation completing the Govern stage SHALL produce or maintain a **Governance model** that:

- documents domain ownership and accountability
- defines the governance cadence and triggers for out-of-cycle review
- records decision rights for trust-critical changes and exceptions
- maintains a decision and exception log with expiry tracking
- connects trust posture to at least one existing risk, change, or leadership governance pathway

The minimum governance model is defined in full in **TSF-GOV-1** - Governance Integration Model.

---

## 8. Stage 5 - Signal

### Purpose

Communicate trust posture in ways stakeholders can verify, in a manner appropriate to context.

### What this stage involves

Trust Signalling is the deliberate communication of trust-relevant information to stakeholders. The goal is not marketing. It is credible, appropriate transparency - ensuring that the trust posture an organisation maintains is visible to those who need to evaluate it.

Trust Transparency Mechanisms are the approved channels through which this communication occurs.

Examples include:

- service status communication
- security contact and disclosure pathways
- clear incident communications
- published security or trust posture notes
- verification guidance for customers or partners

### Minimum output expectations

An organisation completing the Signal stage SHALL identify and maintain **Trust Transparency Mechanisms** that:

- are consistent with current Digital Trust Posture and the Trust Signal Scorecard
- avoid claims that cannot be supported by current evidence
- are reviewed after incidents and material changes
- are governed - not ad hoc or owned informally

An organisation is not required to make all trust posture information public. The appropriate scope and audience for each transparency mechanism is a governance decision. What is required is that the decision is made deliberately and that the resulting signalling is accurate.

---

## 9. Why the lifecycle matters

Without a lifecycle, organisations often address trust issues only after incidents.

The Trust Surface Lifecycle creates a repeatable rhythm that turns trust into evidence, work, and governance controls. Each stage produces outputs that the next stage depends on:

- Discover produces the inventory that Assess evaluates
- Assess produces the scorecard that Harden acts on
- Harden produces the plan that Govern prioritises and controls
- Govern provides the decision structure that Signal depends on to remain accurate
- Signal closes the loop by creating accountability for what is communicated

The lifecycle is not linear in a strict sense. Governance and signalling operate continuously. But the staged structure ensures that no component of digital trust posture is maintained informally or assumed to be current without evidence.

---

## 10. Relationship to TSF-GOV-1

The Govern stage of the lifecycle and TSF-GOV-1 - Governance Integration Model are closely related.

TSF-GOV-1 defines the full governance model - including roles, decision rights, cadence, accountability structures, integration with existing governance, and escalation pathways.

TSF-LIF-1 defines the lifecycle as an operating rhythm. The Govern stage within that rhythm is the point at which lifecycle outputs connect to the governance structures that TSF-GOV-1 requires.

Organisations SHOULD read TSF-LIF-1 and TSF-GOV-1 together. The lifecycle without the governance model is an activity; the governance model without the lifecycle has no operating mechanism.

---

## 11. Relationship to TSF-MTH-1

TSF-MTH-1 - Assessment Method defines how the Assess stage is conducted in practice.

It specifies:

- how Signal Assessment Records are produced
- how evidence is evaluated
- how Evidence Freshness is assessed
- how Domain Judgements are derived from signal outcomes
- how posture is summarised into a Trust Signal Scorecard

TSF-LIF-1 defines the stage structure and output expectations. TSF-MTH-1 defines the method that produces those outputs. Together they define the full operating model for the Assess stage.

---

## 12. Conformance

An organisation claiming to operate the Trust Surface Lifecycle in alignment with TSF-LIF-1 SHALL be able to demonstrate:

1. A current Trust Surface Inventory with accountable owners (Stage 1 output)
2. A current Trust Signal Scorecard with evidence and Domain Judgements (Stage 2 output)
3. An active Trust Hardening Plan with ownership and sequencing (Stage 3 output)
4. An active governance model aligned to TSF-GOV-1, including cadence and decision rights (Stage 4 output)
5. Identified and governed Trust Transparency Mechanisms (Stage 5 output)

An organisation that has completed some stages but not others SHOULD describe its position as adoption in progress. Partial lifecycle operation is a valid state - provided it is described accurately and work is progressing.

---

## 13. Non-goals

TSF-LIF-1 does not:

- define the governance model in full (that is TSF-GOV-1's responsibility)
- prescribe the assessment scoring method (that is TSF-MTH-1's responsibility)
- define the signal baseline (that is TSF-SIG-1's responsibility)
- require a specific tool, platform, or workflow to operate the lifecycle
- claim the lifecycle is linear or must be completed in strict sequence before any stage is revisited

---

## 14. Related TrustSurface artefacts

- **TSF-DEF-1** - Trust Surface Definition
- **TSF-MOD-1** - Trust Surface Model & Domains
- **TSF-SIG-1** - Trust Signal Catalogue
- **TSF-MTH-1** - Assessment Method
- **TSF-GOV-1** - Governance Integration Model
- **TSF-MAT-1** - Digital Trust Maturity Model
- **TSF-GLO-1** - Glossary
- **TSF-05** - Trust Surface Lifecycle (visual artefact)

---

## 15. Backlog

The following items are deferred to a future release:

1. Whether the lifecycle outputs (Inventory, Scorecard, Hardening Plan, Governance Model, Transparency Mechanisms) should be formally cross-referenced as numbered artefact types in TSF-ART-1.

> **Resolved in v1.1 public draft:** Minimum cadence is defined in TSF-GOV-1 only. Per-domain cadence variation is out of scope. "Signal" is retained as the fifth stage label. Domain judgement labels (Sustained, Mixed, Fragile, Deficient, Indeterminate) are defined in TSF-MTH-1.

---

## 16. Summary statement

The Trust Surface Lifecycle - Discover, Assess, Harden, Govern, Signal - is the repeatable operating rhythm through which organisations maintain Digital Trust Posture over time.

Each stage produces outputs that the next depends on, and the whole cycle prevents trust posture from drifting unnoticed between incidents.
