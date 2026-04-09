# TSF-VPOL-1 - Versioning & Normative Boundary Policy

**Status:** Public draft  
**Control:** Operational  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-VPOL-1  
**Owner:** TrustSurface Framework  
**Applies to:** all TrustSurface framework artefacts, releases, and publication states  

---

## 1. Purpose

This document defines how TrustSurface framework artefacts are classified, versioned, changed, superseded, and published.

It exists to ensure that:

- the normative boundary of the framework is explicit
- changes to core artefacts are controlled and traceable
- public releases can be cited with confidence
- supporting and operational materials do not create ambiguity about framework authority
- diagrams, specification summaries, guidance, and reference materials remain aligned to the current framework state

TSF-VPOL-1 establishes the minimum document control policy required for a framework that intends to be stable, versioned, and governance-grade.

---

## 2. Scope

This policy applies to all TrustSurface artefacts, including:

- core framework papers
- guidance documents
- informative reference material
- operational publication artefacts
- diagrams and visual models
- specifications, changelogs, and citation material
- templates and registers published as part of the framework

It governs classification, status, identifiers, version numbering, change control, release packaging, supersession, and retirement.

It does not prescribe repository tooling, file structure, or build tooling except where those affect publication integrity.

---

## 3. Policy objectives

TrustSurface document control SHALL support all of the following:

1. Clear distinction between normative, informative, guidance, and operational materials.
2. Stable and referenceable identifiers for framework artefacts.
3. Controlled change to normative artefacts.
4. Publicly understandable release status.
5. Traceable supersession and retirement of outdated content.
6. Alignment between text artefacts and visual artefacts.
7. A publication surface that reflects the actual framework state, not draft sprawl.

---

## 4. Artefact control classes

All TrustSurface artefacts SHALL be assigned one control class.

### 4.1 Normative
Normative artefacts define the framework's authoritative concepts, requirements, or model boundaries.

A normative artefact may:
- define terms or concepts that other artefacts depend upon
- state required expectations using normative language
- establish conformance conditions
- change the meaning or structure of the framework

Examples:
- Trust Principles
- Trust Surface Definition
- Trust Surface Model & Domains
- Trust Signal Catalogue
- Trust Surface Lifecycle
- Governance Integration Model
- Glossary

### 4.2 Informative
Informative artefacts explain, interpret, compare, or contextualise the framework but do not change its requirements.

Examples:
- Framework Overview
- Digital Trust Maturity Model
- Comparative Positioning
- Origin

### 4.3 Guidance
Guidance artefacts explain how the framework may be applied in practice.

They support implementation but do not redefine the framework.

Examples:
- Assessment Method
- Adoption Guidance
- Worked Examples
- Board Questions
- FAQs

### 4.4 Operational
Operational artefacts support publication, governance, stewardship, citation, release control, and artefact management.

Examples:
- Document Register
- Diagram Library / Artefact Register
- Versioning Policy
- Citation Guidance
- Release Notes
- Consultation and contribution documents

---

## 5. Normative boundary

The normative boundary of TrustSurface SHALL be explicitly declared for each public release.

Only artefacts marked as **Normative** form the authoritative core of the framework.

Informative, Guidance, and Operational artefacts:
- may explain or support the framework
- SHALL NOT override a normative artefact
- SHALL NOT introduce contradictory definitions or requirements
- SHALL reference the normative artefacts they depend upon where material

If a conflict exists between artefacts, the higher control class prevails in the following order:

1. Normative
2. Informative
3. Guidance
4. Operational

Where two artefacts of the same control class conflict, the higher-status or later valid release prevails unless explicitly superseded.

---

## 6. Document identifiers

Every framework artefact SHALL have a stable identifier.

The recommended identifier structure is:

```text
TSF-[TYPE]-[NUMBER]
```

Examples:
- TSF-PRI-1
- TSF-DEF-1
- TSF-MOD-1
- TSF-SIG-1
- TSF-LIF-1
- TSF-GOV-1
- TSF-MTH-1
- TSF-MAT-1
- TSF-VPOL-1

Identifiers SHALL remain stable across minor and patch revisions.

A new identifier SHOULD only be created when:
- the artefact is split into materially different artefacts
- the artefact is replaced by a new conceptual unit
- the purpose changes so materially that continuity would be misleading

File names, URLs, and page titles MAY change without changing the identifier, provided continuity remains clear.

---

## 7. Versioning model

TrustSurface SHALL use semantic versioning at the framework release level.

### 7.1 Framework release version
The framework release version SHALL use the format:

```text
MAJOR.MINOR.PATCH
```

Interpretation:
- **MAJOR** - breaking change to the framework boundary, core concepts, identifiers, or normative interpretation
- **MINOR** - addition or substantive refinement that remains broadly compatible with the existing framework structure
- **PATCH** - clarifications, corrections, wording improvements, or non-substantive alignment changes

### 7.2 Artefact version expression
Artefacts SHOULD align to the framework release version in which they are published.

Where needed, an artefact MAY also show a local revision marker, but the public baseline SHALL remain the framework release version.

Recommended public expression:
- `Framework version: v1.1 draft`
- `Framework version: v1.1.0`

### 7.3 Draft notation
Pre-release states MAY use clear draft notation, such as:
- `v1.1 draft`
- `v1.1.0-alpha`
- `v1.1.0-beta`

The draft notation chosen SHALL be applied consistently across the release surface.

---

## 8. Status model

Every published artefact SHALL show one publication status.

Approved status values are:

- **Draft** - working content not yet approved as a stable public release
- **Public draft** - publicly visible draft published for consultation or early use
- **Public release** - approved release suitable for citation
- **Superseded** - retained for historical reference but replaced by a newer artefact or release
- **Retired** - no longer active and not recommended for current use
- **Archived** - retained for record only, without active framework role

Status values SHALL be visible on published artefacts or clearly discoverable through the publication surface.

---

## 9. Change classes

All changes to framework artefacts SHOULD be classified before publication.

### 9.1 Editorial change
Changes wording, readability, formatting, or non-substantive examples without affecting meaning.

### 9.2 Clarification change
Makes meaning more explicit without intentionally changing the normative interpretation.

### 9.3 Substantive compatible change
Adds or refines content while remaining compatible with the current framework release direction.

### 9.4 Breaking change
Changes definitions, expectations, normative interpretation, conformance, or the shape of the framework in a way that may invalidate prior references or assessments.

The change class SHOULD be recorded in release notes.

---

## 10. Change control by class

### 10.1 Normative artefacts
Changes to normative artefacts SHALL:
- be reviewed intentionally, not only merged incidentally
- be classified by change type
- identify whether the change is editorial, clarification, substantive compatible, or breaking
- be reflected in release notes
- trigger dependency review for affected informative, guidance, operational, and visual artefacts

### 10.2 Informative artefacts
Informative artefacts MAY evolve more flexibly, but SHALL be reviewed for alignment when a normative artefact changes materially.

### 10.3 Guidance artefacts
Guidance artefacts MAY change more frequently than normative artefacts.

Where guidance implies a method or control that affects interpretation of the framework, release notes SHOULD record the change.

### 10.4 Operational artefacts
Operational artefacts MAY change as needed for publication integrity, but SHALL remain aligned to the active normative boundary and release model.

---

## 11. Dependency control

When a normative artefact changes, the following SHOULD be reviewed for alignment:

- glossary terms
- diagrams and figure captions
- specification summary
- related guidance documents
- comparative or explanatory materials
- changelog and citation guidance
- website navigation and artefact listings

A release SHALL NOT present known contradictions between normative text and supporting artefacts without explicit status notes.

---

## 12. Supersession rules

An artefact is superseded when a newer artefact or release replaces it while historical access remains useful.

When an artefact is marked **Superseded**, the publication surface SHOULD show:
- the superseding artefact or release
- the date of supersession
- whether the artefact remains citable for historical reference

Superseded artefacts SHALL NOT appear as current authoritative material in the primary reading path.

---

## 13. Retirement rules

An artefact MAY be retired when:
- it no longer serves an active framework role
- its content has been merged elsewhere
- its continued publication would create confusion
- it belongs to earlier exploratory work rather than the current framework canon

Retired artefacts MAY remain available for historical or book-development purposes, but SHALL NOT be represented as active framework components.

Examples of likely retired framework-adjacent material may include early framing essays that have been absorbed into a formal overview.

---

## 14. Release package requirements

A TrustSurface public release SHOULD include, at minimum:

1. declared framework version
2. declared normative boundary
3. visible artefact statuses
4. release notes or changelog entry
5. current document register or artefact index
6. aligned diagrams for core visual models
7. citation guidance or stable citation path

A release claiming **Public release** status SHOULD NOT omit the current normative artefact list.

---

## 15. Diagram and visual alignment policy

Diagrams are not decorative.

Where a diagram represents a core framework concept, the diagram SHALL be treated as a controlled artefact.

For each controlled diagram, the framework SHOULD maintain:
- a stable diagram identifier
- title
- related framework artefact(s)
- current status
- release version alignment
- source format and publication formats where relevant

Where a normative text artefact and a diagram diverge materially, the normative text prevails until the diagram is corrected or superseded.

A diagram library or artefact register SHOULD record these relationships.

---

## 16. Citation and canonical reference policy

A TrustSurface artefact published as **Public release** SHOULD be citable through:
- a stable identifier
- a stable canonical URL or reference path
- visible framework version
- visible artefact status

Citation guidance SHOULD prefer artefact identifier plus release version over page title alone.

If a route changes, canonical continuity SHOULD be preserved through redirects, canonical references, or an artefact index.

---

## 17. Publication integrity requirements

A public publication surface claiming to represent TrustSurface SHOULD:
- distinguish clearly between current and superseded material
- identify the active framework version
- avoid presenting draft notes as core doctrine without status marking
- keep top-level navigation aligned to the actual framework structure
- make the current normative artefacts easy to find

A calm publication surface is not sufficient if the authority structure is ambiguous.

---

## 18. Normative language policy

Normative artefacts SHOULD use explicit language where requirements are intended.

Recommended usage:
- **SHALL** for required expectations
- **SHOULD** for recommended but context-dependent expectations
- **MAY** for permitted variation

Informative, Guidance, and Operational artefacts MAY use lighter language where appropriate, but SHALL NOT create ambiguity about normative requirements.

---

## 19. Minimum metadata requirements

Every published artefact SHOULD display, at minimum:

- title
- identifier
- control class
- publication status
- framework version
- related artefacts where relevant

Normative artefacts SHOULD additionally display:
- vocabulary baseline where applicable
- any conformance note where applicable
- supersession state if not current

---

## 20. Conformance to this policy

A TrustSurface release may be considered aligned with TSF-VPOL-1 only if it can show:

1. a declared normative boundary
2. control class for each published artefact
3. visible publication status for each active artefact
4. stable identifiers for core artefacts
5. release notes or changelog for the published version
6. a method for identifying superseded or retired materials
7. alignment review between current normative text and core diagrams

Partial application SHOULD be described as draft publication control, not full alignment.

---

## 21. Non-goals

TSF-VPOL-1 does not:
- prescribe a single repository structure
- require a specific build tool or static site generator
- require formal standards-body governance
- prohibit exploratory drafts from existing privately
- prevent future restructuring of the framework surface

Its purpose is not bureaucracy.
Its purpose is to preserve clarity, continuity, and authority as the framework matures.

---

## 22. Related TrustSurface artefacts

- TSF-REG-1 - Document Register
- TSF-ART-1 - Diagram Library / Artefact Register
- TSF-PRI-1 - Trust Principles
- TSF-SIG-1 - Trust Signal Catalogue
- TSF-GOV-1 - Governance Integration Model
- TSF-MTH-1 - Assessment Method
- TSF-SPEC-1 - One-page Specification
- release notes and citation guidance

---

## 23. Resolved issues

The following items were resolved for the v1.1 public draft:

1. Public draft and Draft remain as separate statuses.
2. Patch-level releases are recorded in release notes only, not on individual artefact pages.
3. Individual diagrams do not require local revision markers; release alignment is sufficient.
4. No additional mandatory metadata fields are required for operational artefacts beyond the current minimum set.
5. Retired framework-adjacent essays are moved outside the framework surface entirely.

---

## 24. Summary statement

A framework becomes durable when its authority boundary is explicit, its artefacts are classed and versioned, its releases are traceable, and its diagrams, guidance, and public surface do not outrun the current state of the model.

