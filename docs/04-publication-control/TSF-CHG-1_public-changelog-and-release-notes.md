# Public Changelog and Release Notes

**Status:** Public draft  
**Control:** Operational  
**Framework version:** v1.2 public draft  
**Identifier:** TSF-CHG-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  
**Supports:** TSF-REG-1, TSF-CIT-1

---

## 1. Purpose

This document records normative changes to the TrustSurface Framework across versions. It is the authoritative public record of what changed, when, and why.

## 2. Scope of this changelog

This changelog records **normative changes only**.

Normative changes are changes that alter the meaning, scope, or required structure of the TrustSurface Framework, including:

- **Definitions** (authoritative vocabulary)
- **Domain boundaries** (what is in/out of each Trust Surface domain)
- **Lifecycle / operating rhythm** (the required loop and its outputs)
- **Framework structure** (the set of normative artefacts and how they relate)

The following are **non-normative** and are intentionally excluded unless needed to explain alignment to a normative change:

- wording and readability edits that do not change meaning
- layout, typography, navigation, and visual polish
- worked examples and guidance expansions (unless explicitly designated normative)
- implementation templates, assessments, and delivery methods

## 3. Release entries

---

### v1.2 - 2026-09-06 (public draft)
**Change type:** Substantive compatible / MINOR - Trust Signal and Evidence semantic separation

v1.2 resolves a semantic inconsistency in v1.1 by separating **Trust Signal** from **Evidence** as distinct framework concepts while preserving the existing domain model, lifecycle, assessment mechanics, scorecard, and governance structure.

**Canonical vocabulary changes:**

- **Trust Signal** is now defined as: *A defined trust-relevant property, behaviour or condition of a Trust Surface component or relationship that can be assessed using attributable evidence.*
- **Evidence** is added as a canonical glossary term: *An attributable observation, record, configuration, artefact, test result or verification used to assess a Trust Signal for a defined target.*
- **Signal Assessment Record** is clarified as the governed assessment record that distinguishes the Trust Signal being assessed, the Evidence used, the assessment result, confidence, Evidence Freshness, target, and limitations.

**Normative alignment:**

- **TSF-GLO-1** establishes the Signal / Evidence distinction.
- **TSF-MOD-1** now treats Trust Signals as the assessment layer and Evidence as the attributable basis for assessment; the high-level framework chain is unchanged.
- **TSF-SPEC-1** carries the same distinction and clarifies the existing evidence-backed conformance requirement.
- **TSF-DEF-1** retains the canonical Trust Surface definition unchanged while removing universal wording that implied every Trust Signal is literally emitted.
- **TSF-LIF-1** retains Discover → Assess → Harden → Govern → Signal and its existing outputs while making the Assess-stage Signal / Evidence relationship explicit.
- **TSF-GOV-1** retains roles, cadence, decision rights, controls, and conformance while distinguishing Trust Signal assessment from Evidence governance.

**Supporting alignment:**

- **TSF-SIG-1** preserves all 28 signal identifiers and the `Signal | Evidence` catalogue structure while clarifying their distinct jobs. Two labels are normalised without changing identifiers or intended coverage: `INF-02` becomes **Backup and recovery capability** and `TP-02` becomes **Supplier assurance review**.
- **TSF-MTH-1** makes its existing assessment sequence explicit: define scope and target → select Trust Signals → gather and evaluate Evidence → assess → summarise → scorecard → action. Result states, confidence, Evidence Freshness, and numeric summary mapping remain unchanged.
- **TSF-OVR-1**, **TSF-PRI-1**, **TSF-MAT-1**, **TSF-ADP-1**, **TSF-BRD-1**, **TSF-CMP-1**, and **TSF-EXM-1** are aligned so Signal condition is not conflated with Evidence or Evidence Freshness.
- **TSF-06 Trust Signal Anatomy** is redesigned to show `Trust Signal → Evidence → Assessment → Scorecard / posture` and remains a Supporting diagram.

**Explicit structural non-changes:**

v1.2 does **not** change:

- the canonical Trust Surface definition;
- the six Trust Surface Domains;
- the Trust Surface Lifecycle stages or order;
- the Trust Signal Scorecard requirement;
- assessment result states (`Strong / Partial / Weak / Unknown / Not applicable`);
- the confidence model;
- the Evidence Freshness model;
- Governance Integration structure, roles, cadence, or controls;
- the Trust Signal Gap definition;
- the Digital Trust Maturity Model structure;
- any of the 28 Trust Signal identifiers.

**Deferred by design:**

- evidence-role semantics such as assessment-driving versus supporting/contextual Evidence;
- Identity and Infrastructure & Platforms signal reclassification or narrowing, including any future treatment of INF-01 or INF-04;
- longitudinal observation-horizon semantics;
- maturity-model redesign;
- broader relationship or domain restructuring.

**Backward compatibility:**

Existing v1.1 Signal Assessment Records remain directly intelligible under v1.2 because they already distinguish signal identifier/name from evidence summary, source, freshness, result, confidence, and target. No record migration or identifier remapping is required solely because of the semantic separation.

---

### v1.1 - 2026-09-06 integrity correction (public draft)
**Change type:** Clarification / publication integrity alignment - no framework version change

This maintenance correction aligns normative artefacts to the already-declared v1.1 public-draft authority and assessment model. It does not introduce a new framework concept, domain, lifecycle stage, conformance requirement, or assessment state.

**Normative artefact corrections:**

- **TSF-SPEC-1** - corrected the declared normative framework set to match TSF-REG-1, the README, artefact control headers, and the v1.1 release record. TSF-PRI-1 and TSF-SIG-1 remain active Informative artefacts rather than Normative artefacts.
- **TSF-LIF-1** - aligned assessment-state terminology to TSF-MTH-1: `Strong / Partial / Weak / Unknown / Not applicable`, replacing stale `Present and Strong / Partial / Absent / Unknown` wording. The lifecycle structure and assessment semantics are unchanged.

This entry records the normative-artefact maintenance required by TSF-VPOL-1 change control while preserving the existing v1.1 public-draft framework version.

---

### v1.1 - 2026-04 (public draft)
**Change type:** Major expansion - normative boundary extended, new artefacts, assessment model introduced

**Normative boundary expansion:**

The following artefacts are added to the normative set in v1.1:

- **TSF-MOD-1** - Trust Surface Model & Domains (domain model formalised as normative)
- **TSF-GOV-1** - Governance Integration Model (governance requirements now normative)
- **TSF-DEF-1** - Core Definitions (definitions artefact formalised)
- **TSF-LIF-1** - Trust Surface Lifecycle (operating rhythm formalised as normative)
- **TSF-GLO-1** - Glossary (vocabulary baseline, already present; formally designated normative)

**New artefacts introduced:**

- **TSF-GOV-1** - Governance Integration Model: specifies how Trust Posture connects to board reporting, risk governance, and ownership accountability.
- **TSF-MTH-1** - Assessment Method: introduces the evidence model, Signal Assessment Record structure, Domain Judgement labels (Sustained / Mixed / Fragile / Deficient / Indeterminate), and scoring approach.
- **TSF-ART-1** - Artefact Register and Visual Index: controlled catalogue of framework diagrams (TSF-01 through TSF-08) and artefact identifiers.
- **TSF-VPOL-1** - Versioning & Normative Boundary Policy: governs artefact classification, versioning, change control, supersession, and publication integrity.

**Glossary expansion:**

- Glossary expanded from 4 terms (v1.0 baseline) to 17 terms.
- New terms cover: Trust Posture, Digital Trust Posture, Trust Signal Gap, Trust Signal Scorecard, Trust Surface Domain, Trust Surface Inventory, Trust Hardening, Trust Hardening Plan, Trust Signalling, Trust Transparency Mechanism, Signal Assessment Record, Evidence Freshness, Domain Judgement, Digital Edge, Governance Integration.

**Structural additions:**

- Publication control framework established (TSF-CIT-1, TSF-CHG-1, TSF-CNS-1, TSF-LIC-1, TSF-SEC-1).
- Standard v1.1 front-matter block and document conventions codified.
- Narrative artefacts NAR-1 and NAR-2 retired; TSF-NAR-3 (Origin) retained as the canonical origin narrative.

**Open issues resolved for public draft:**

- All open issues across 8 documents resolved or deferred to backlog.
- GOV-1 minimum cadence language confirmed as mandatory (SHALL).
- Third-party ecosystem confirmed as within scope of the Trust Surface (DEF-1).
- Domain label "Identity" retained; "domains" retained as canonical normative term with "dimensions" permitted at website IA layer (MOD-1).
- Signal assessment template confirmed as planned companion artefact (MTH-1).
- PRI-1 and SIG-1 confirmed as Informative control class.
- Patch-level releases recorded in release notes only (VPOL-1).
- Status promoted from Draft to Public draft.

---

### v1.0 - 2026-03-06
**Change type:** Initial public release (normative baseline)

**Normative baseline established:**

- **Definitions:** Trust Surface, Trust Signal, Trust Posture, Trust Signal Gap (via Glossary v1.0)
- **Domain model:** identity boundary; domains & DNS; email integrity; digital services; infrastructure & platforms; third-party ecosystem
- **Operating rhythm:** Discover → Assess → Harden → Govern → Signal
- **Visual anchor:** TrustSurface diagram (SVG) referenced by the one-page specification
- **Normative artefacts:**
  - TSF-SPEC-1 (One-Page Specification)
  - TSF-GLO-1 (Glossary v1.0)

---

## Related TrustSurface artefacts

- **TSF-REG-1** - Framework Register (canonical artefact list and version status)
- **TSF-CIT-1** - Citation Guidance
- **TSF-LIC-1** - Licence
- **TSF-VPOL-1** - Versioning & Normative Boundary Policy
- **TSF-GLO-1** - Glossary

## Summary statement

TSF-CHG-1 is the authoritative public record of normative changes to the TrustSurface Framework. It distinguishes normative changes - those that alter meaning, scope, or required structure - from non-normative editorial and formatting work.
