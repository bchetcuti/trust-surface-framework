# TSF-REG-1 - Document Register

**Status:** Public draft  
**Control:** Operational  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-REG-1  
**Owner:** TrustSurface Framework  

---

## 1. Purpose

This register is the canonical index of all TrustSurface Framework artefacts for the v1.1 draft release.

It records each artefact's identifier, title, control class, publication status, and location within the repository.

---

## 2. Classification model

- **Control:** Normative / Informative / Guidance / Operational
- **Status:** Public draft / Public draft / Public release / Superseded / Retired / Archived

---

## 3. Normative boundary

The following artefacts form the normative core of the TrustSurface Framework v1.1 draft:

- **TSF-DEF-1** - Trust Surface Definition
- **TSF-MOD-1** - Trust Surface Model & Domains
- **TSF-LIF-1** - Trust Surface Lifecycle
- **TSF-GOV-1** - Governance Integration Model
- **TSF-GLO-1** - Glossary
- **TSF-SPEC-1** - One-page Specification

Informative, Guidance, and Operational artefacts support this set but do not override it.

---

## 4. Framework artefact register

### 01-start-here

| Identifier | Title                  | Control     | Status | File                                                      |
| ---------- | ---------------------- | ----------- | ------ | --------------------------------------------------------- |
| TSF-OVR-1  | Framework Overview     | Informative | Draft  | `docs/01-start-here/TSF-OVR-1_framework-overview.md`      |
| TSF-SPEC-1 | One-page Specification | Normative   | Draft  | `docs/01-start-here/TSF-SPEC-1_one-page-specification.md` |

### 02-core-framework

| Identifier | Title                         | Control     | Status | File                                                                  |
| ---------- | ----------------------------- | ----------- | ------ | --------------------------------------------------------------------- |
| TSF-PRI-1  | Trust Principles              | Informative | Draft  | `docs/02-core-framework/TSF-PRI-1_trust-principles.md`                |
| TSF-DEF-1  | Trust Surface Definition      | Normative   | Draft  | `docs/02-core-framework/TSF-DEF-1_trust-surface-definition.md`        |
| TSF-MOD-1  | Trust Surface Model & Domains | Normative   | Draft  | `docs/02-core-framework/TSF-MOD-1_trust-surface-model-and-domains.md` |
| TSF-SIG-1  | Trust Signal Catalogue        | Informative | Draft  | `docs/02-core-framework/TSF-SIG-1_trust-signal-catalogue.md`          |
| TSF-LIF-1  | Trust Surface Lifecycle       | Normative   | Draft  | `docs/02-core-framework/TSF-LIF-1_trust-surface-lifecycle.md`         |
| TSF-GOV-1  | Governance Integration Model  | Normative   | Draft  | `docs/02-core-framework/TSF-GOV-1_governance-integration-model.md`    |
| TSF-MAT-1  | Digital Trust Maturity Model  | Informative | Draft  | `docs/02-core-framework/TSF-MAT-1_digital-trust-maturity-model.md`    |
| TSF-GLO-1  | Glossary                      | Normative   | Draft  | `docs/02-core-framework/TSF-GLO-1_glossary.md`                        |

### 03-application

| Identifier | Title | Control | Status | File |
|---|---|---|---|---|
| TSF-MTH-1 | Assessment Method | Guidance | Public draft | `docs/03-application/TSF-MTH-1_assessment-method.md` |
| TSF-EXM-1 | Worked Example - Email Integrity | Guidance | Public draft | `docs/03-application/TSF-EXM-1_worked-example-email-integrity.md` |
| TSF-ADP-1 | Adoption Guidance | Guidance | Public draft | `docs/03-application/TSF-ADP-1_adoption-guidance.md` |
| TSF-BRD-1 | Board Questions | Guidance | Public draft | `docs/03-application/TSF-BRD-1_board-questions.md` |
| TSF-CMP-1 | Comparative Positioning & Reference Mappings | Informative | Public draft | `docs/03-application/TSF-CMP-1_comparative-positioning-and-reference-mappings.md` |

### 04-publication-control

| Identifier | Title | Control | Status | File |
|---|---|---|---|---|
| TSF-REG-1 | Document Register | Operational | Public draft | `docs/04-publication-control/TSF-REG-1_document-register.md` |
| TSF-VPOL-1 | Versioning & Normative Boundary Policy | Operational | Public draft | `docs/04-publication-control/TSF-VPOL-1_versioning-and-normative-boundary-policy.md` |
| TSF-ART-1 | Diagram Library & Artefact Register | Operational | Public draft | `docs/04-publication-control/TSF-ART-1_diagram-library-and-artefact-register.md` |
| TSF-CIT-1 | Citation Guidance | Operational | Public draft | `docs/04-publication-control/TSF-CIT-1_citation-guidance.md` |
| TSF-CHG-1 | Public Changelog & Release Notes | Operational | Public draft | `docs/04-publication-control/TSF-CHG-1_public-changelog-and-release-notes.md` |
| TSF-CNS-1 | Consultation & Contribution Guidance | Operational | Public draft | `docs/04-publication-control/TSF-CNS-1_consultation-and-contribution-guidance.md` |
| TSF-LIC-1 | Licence | Operational | Public draft | `docs/04-publication-control/TSF-LIC-1_licence.md` |
| TSF-SEC-1 | Security & Vulnerability Disclosure | Operational | Public draft | `docs/04-publication-control/TSF-SEC-1_security-and-vulnerability-disclosure.md` |

### 05-narrative

| Identifier | Title  | Control     | Status | File                                    |
| ---------- | ------ | ----------- | ------ | --------------------------------------- |
| TSF-NAR-3  | Origin | Informative | Draft  | `docs/05-narrative/TSF-NAR-1_origin.md` |

### Controlled diagrams

| Identifier | Title | Class | Related document | File |
|---|---|---|---|---|
| TSF-01 | Trust Surface Map | Canonical | TSF-MOD-1 | `artefacts/diagrams/TSF-01_trust-surface-map.svg` |
| TSF-02 | Trust Signal Gap | Supporting | TSF-OVR-1 | `artefacts/diagrams/TSF-02_trust-signal-gap.svg` |
| TSF-03 | Trust Surface Domains | Canonical | TSF-MOD-1 | `artefacts/diagrams/TSF-03_trust-surface-domains.svg` |
| TSF-04 | Trust Surface vs Attack Surface | Supporting | TSF-DEF-1 | `artefacts/diagrams/TSF-04_trust-surface-vs-attack-surface.svg` |
| TSF-05 | Trust Surface Lifecycle | Canonical | TSF-LIF-1 | `artefacts/diagrams/TSF-05_trust-surface-lifecycle.svg` |
| TSF-06 | Trust Signal Anatomy | Supporting | TSF-SIG-1 | `artefacts/diagrams/TSF-06_trust-signal-anatomy.svg` |
| TSF-07 | Digital Trust Maturity Model | Canonical | TSF-MAT-1 | `artefacts/diagrams/TSF-07_digital-trust-maturity-model.svg` |
| TSF-08 | Governance Integration Model | Canonical | TSF-GOV-1 | `artefacts/diagrams/TSF-08_governance-integration-model.svg` |

---

## 5. Retired artefacts

The following artefacts from earlier drafts have been retired from the v1.1 framework set. Their core content has been absorbed into TSF-OVR-1 (Framework Overview).

| Former identifier | Title | Disposition |
|---|---|---|
| TSF-NAR-1 | The Digital Trust Problem | Retired - content merged into TSF-OVR-1 |
| TSF-NAR-2 | The Trust Signal Gap | Retired - content merged into TSF-OVR-1 |
| TSF-NAR-4 | Author Note | Retired - superseded by TSF-NAR-3 (Origin) |
| TSF-NAR-5 | Framework Map (legacy explainer) | Retired - superseded by TSF-MOD-1 |

---

## 6. Deferred artefacts

| Identifier | Title | Notes |
|---|---|---|
| TSF-FAQ-1 | FAQ & Clarifications | Deferred until the framework receives real-world feedback |

---

## 7. Related TrustSurface artefacts

- TSF-VPOL-1 - Versioning & Normative Boundary Policy
- TSF-ART-1 - Diagram Library & Artefact Register
- TSF-CHG-1 - Public Changelog & Release Notes

---

## 8. Summary statement

This register is the single source of truth for what the TrustSurface Framework v1.1 draft contains, where each artefact lives, and what authority it carries.
