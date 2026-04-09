# Public Changelog and Release Notes

**Status:** Public draft  
**Control:** Operational  
**Framework version:** v1.1 public draft  
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

The following are **non-normative** and are intentionally excluded:

- wording and readability edits that do not change meaning
- layout, typography, navigation, and visual polish
- worked examples and guidance expansions (unless explicitly designated normative)
- implementation templates, assessments, and delivery methods

## 3. Release entries

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
- **TSF-VPOL-1** - Vocabulary and Naming Policy: governs term introduction, deprecation, and cross-artefact consistency.

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
- **TSF-VPOL-1** - Vocabulary and Naming Policy
- **TSF-GLO-1** - Glossary

## Summary statement

TSF-CHG-1 is the authoritative public record of normative changes to the TrustSurface Framework. It distinguishes normative changes - those that alter meaning, scope, or required structure - from non-normative editorial and formatting work.
