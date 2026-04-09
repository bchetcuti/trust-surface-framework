# TSF-ART-1 - Diagram Library and Artefact Register

**Status:** Public draft  
**Control:** Operational  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-ART-1  
**Owner:** TrustSurface Framework  
**Applies to:** controlled diagrams, visual models, downloadable artefacts, and related publication metadata  

---

## 1. Purpose

This document defines how TrustSurface diagrams and related downloadable artefacts are identified, classified, versioned, published, and maintained.

It exists to ensure that:

- core visual models remain aligned to the current framework state
- diagrams are treated as controlled artefacts rather than decorative assets
- downloadable artefacts can be referenced and cited with confidence
- publication formats remain traceable to a canonical source
- the website artefact library reflects the actual framework release state

TSF-ART-1 provides the operational register for the visual and downloadable layer of the TrustSurface Framework.

---

## 2. Scope

This document applies to controlled artefacts published as part of the TrustSurface Framework, including:

- canonical diagrams
- downloadable SVG, PNG, and PDF artefacts
- figure-level visual models embedded in framework documents
- one-page framework summaries and specifications where published as downloadable artefacts
- reference tables, mappings, and artefact bundles where included in a release

It governs:

- artefact identifiers
- artefact classes
- metadata requirements
- source and publication formats
- relationship to framework documents
- publication status
- version alignment
- register maintenance

It does not prescribe design tooling or illustration style except where those affect publication integrity.

---

## 3. Objectives

TrustSurface artefact governance SHALL support all of the following:

1. Stable identification of each controlled artefact.
2. Clear link between artefacts and the framework concepts they represent.
3. Visibility of current, superseded, and draft visual models.
4. Traceable relationship between source files and publication formats.
5. Consistent presentation of diagram status, version, and related artefacts.
6. A public artefact library that supports framework reading, citation, and reuse.

---

## 4. Artefact classes

Controlled TrustSurface artefacts SHOULD be assigned one artefact class.

### 4.1 Canonical diagram
A visual model that represents a core framework concept and is intended for repeated reference.

Examples:
- Trust Surface Map
- Trust Surface Domains
- Trust Surface Lifecycle
- Governance Integration Model

### 4.2 Supporting diagram
A diagram that clarifies a concept, comparison, or relationship but is not itself part of the normative boundary.

Examples:
- Trust Surface vs Attack Surface
- Trust Signal Anatomy
- Trust Signal Gap

### 4.3 Downloadable specification artefact
A concise downloadable artefact intended to summarise or package part of the framework for publication, briefing, or citation support.

### 4.4 Reference artefact
A downloadable mapping, table, or reference sheet published to support framework use.

---

## 5. Artefact identifiers

Every controlled artefact SHALL have a stable identifier.

Recommended identifier structure:

```text
TSF-[NN]
```

Examples:
- TSF-01
- TSF-02
- TSF-03
- TSF-04
- TSF-05
- TSF-06
- TSF-07
- TSF-08

Where useful, a descriptive slug MAY be used in filenames and URLs, but the numeric artefact identifier remains the primary reference.

Identifiers SHALL remain stable across minor and patch revisions.

A new identifier SHOULD only be created where:
- an artefact is replaced by a materially different visual model
- the purpose changes significantly
- continuity would otherwise become misleading

---

## 6. Artefact metadata model

Each controlled artefact SHALL be recorded in the artefact register.

The minimum metadata fields are:

- artefact identifier
- title
- artefact class
- related framework artefact(s)
- control relevance
- publication status
- framework version alignment
- source format
- publication format(s)
- canonical file or route
- owner or steward
- notes on use, scope, or limitations

Recommended additional fields:

- short description
- figure caption
- supersedes / superseded by
- release date
- checksum for downloadable release artefacts
- accessibility notes
- usage guidance

---

## 7. Relationship to framework artefacts

Every controlled diagram SHOULD identify the framework artefact or artefacts it supports.

Examples:
- **TSF-01 Trust Surface Map** → TSF-MOD-1
- **TSF-03 Trust Surface Domains** → TSF-MOD-1
- **TSF-05 Trust Surface Lifecycle** → TSF-LIF-1
- **TSF-07 Digital Trust Maturity Model** → TSF-MAT-1
- **TSF-08 Governance Integration Model** → TSF-GOV-1

A diagram that materially represents a normative concept SHALL be reviewed when the underlying normative artefact changes.

If a diagram and text diverge materially, the framework text prevails until the diagram is corrected or superseded.

---

## 8. Source and publication format policy

Controlled artefacts SHOULD maintain a clear distinction between:

- **source format** - the editable master file
- **publication format** - the released file intended for reading, embedding, or download

Preferred publication pattern:

- SVG for canonical web publication
- PNG for compatibility fallback where needed
- PDF where a document-grade or bundle artefact is intended

The artefact register SHOULD indicate which format is canonical for publication.

Where multiple publication formats exist, they SHOULD represent the same conceptual artefact rather than divergent content.

---

## 9. Publication status model

Artefact status SHALL align with the TrustSurface publication status model defined in TSF-VPOL-1.

Permitted statuses are:

- Draft
- Public draft
- Public release
- Superseded
- Retired
- Archived

Status SHALL be visible through the artefact library or otherwise discoverable through the publication surface.

---

## 10. Version alignment

Each controlled artefact SHALL show its framework version alignment.

Examples:
- `Framework version: v1.1 draft`
- `Framework version: v1.1.0`

Where a diagram is revised without changing framework meaning, the framework version MAY remain unchanged if the change is editorial.

Where a diagram is revised because the framework meaning changed, the artefact SHALL align to the updated framework release.

Local revision markers MAY be kept internally, but the framework release version remains the primary public reference.

---

## 11. Canonical publication path

Each controlled artefact SHOULD have one canonical publication path.

The canonical publication path SHOULD:
- remain stable where possible
- redirect older publication routes where needed
- match the current artefact status
- support discovery through the artefact library

Where both embedded and downloadable versions exist, the register SHOULD identify the downloadable canonical path.

---

## 12. Artefact library structure

The TrustSurface artefact library SHOULD make the following visible for current controlled artefacts:

- identifier
- title
- current status
- framework version alignment
- related framework document
- available publication formats
- download links where relevant

The artefact library MAY group artefacts by:
- release
- framework domain
- related document
- artefact class

The primary requirement is clarity, not taxonomy depth.

---

## 13. Alignment and dependency review

A controlled artefact SHOULD be reviewed when any of the following occurs:

- the related normative framework artefact changes materially
- the artefact caption, meaning, or labels no longer match the current framework vocabulary
- the publication surface or canonical route changes
- the artefact is promoted from supporting to canonical status
- accessibility or legibility issues materially affect its use

Alignment review SHOULD confirm:
- concept accuracy
- label consistency
- version alignment
- route correctness
- status correctness
- metadata completeness

---

## 14. Accessibility and legibility expectations

Controlled artefacts SHOULD be usable within a governance-grade reading surface.

Minimum expectations:
- readable titles and labels
- sufficient contrast
- legible export size
- concise caption or description where embedded
- alternative text or equivalent descriptive support where published on the web

A diagram that cannot be read or interpreted reliably does not function as a trustworthy artefact.

---

## 15. Supersession and retirement

A diagram or downloadable artefact MAY be superseded or retired under the same principles defined in TSF-VPOL-1.

Where a controlled artefact is superseded, the register SHOULD record:
- superseding artefact or release
- date of supersession
- whether the artefact remains historically citable

Retired or archived artefacts SHALL NOT appear as current authoritative visuals in the primary reading path.

---

## 16. Register maintenance responsibilities

The artefact register SHALL have a named steward.

The steward is responsible for ensuring that:
- current artefacts are listed
- metadata remains accurate
- relationships to framework documents are current
- superseded artefacts are visibly marked
- release-aligned publication formats are available where intended

This responsibility MAY sit with the framework owner or a delegated publication steward.

---

## 17. Current controlled artefact set for v1.1 draft

The following artefacts are currently recognised as the controlled diagram baseline for the v1.1 draft.

| Identifier | Title | Artefact class | Related framework artefact | Current status | Notes |
|---|---|---|---|---|---|
| TSF-01 | Trust Surface Map | Canonical diagram | TSF-MOD-1 | Draft | Core model overview |
| TSF-02 | Trust Signal Gap | Supporting diagram | TSF-OVR-1 / narrative support | Draft | Framing and explanatory use |
| TSF-03 | Trust Surface Domains | Canonical diagram | TSF-MOD-1 | Draft | Domain-level concept support |
| TSF-04 | Trust Surface vs Attack Surface | Supporting diagram | TSF-DEF-1 / comparison support | Draft | Clarifying comparison |
| TSF-05 | Trust Surface Lifecycle | Canonical diagram | TSF-LIF-1 | Draft | Lifecycle visual anchor |
| TSF-06 | Trust Signal Anatomy | Supporting diagram | TSF-SIG-1 / TSF-MTH-1 | Draft | Signal structure support |
| TSF-07 | Digital Trust Maturity Model | Canonical diagram | TSF-MAT-1 | Draft | Maturity illustration |
| TSF-08 | Governance Integration Model | Canonical diagram | TSF-GOV-1 | Draft | Governance model visual anchor |

This table is the initial register baseline and SHOULD be expanded into a fuller artefact library entry set as release preparation continues.

---

## 18. Minimum artefact register entry template

Each artefact register entry SHOULD follow a standard structure.

Recommended template:

```text
Identifier:
Title:
Artefact class:
Related framework artefact(s):
Control relevance:
Status:
Framework version:
Source format:
Publication format(s):
Canonical path:
Owner / steward:
Description:
Usage notes:
Supersedes / superseded by:
```

---

## 19. Release expectations

A TrustSurface public release that includes controlled artefacts SHOULD provide:

1. a current artefact register
2. visible status for each active artefact
3. release-aligned downloadable formats for canonical diagrams where intended
4. alignment between embedded diagrams and downloadable copies
5. route continuity for canonical artefact references

A release SHOULD NOT claim publication maturity if the current controlled diagrams cannot be reliably identified or matched to the current framework version.

---

## 20. Conformance to this register policy

A TrustSurface artefact library may be considered aligned with TSF-ART-1 only if it can show:

1. stable identifiers for controlled artefacts
2. metadata for active artefacts
3. relationship between controlled artefacts and framework documents
4. visible status and version alignment
5. supersession or retirement handling for outdated artefacts
6. one discoverable artefact library or register view

Partial adoption SHOULD be described as draft artefact control rather than full alignment.

---

## 21. Non-goals

TSF-ART-1 does not:
- require a specific design application or diagramming tool
- require every image on the website to be a controlled artefact
- prescribe visual branding beyond legibility and integrity needs
- require all artefacts to be downloadable in every format

Its purpose is to ensure that framework visuals and downloadable artefacts remain governed, aligned, and referenceable.

---

## 22. Related TrustSurface artefacts

- TSF-VPOL-1 - Versioning & Normative Boundary Policy
- TSF-REG-1 - Document Register
- TSF-MOD-1 - Trust Surface Model & Domains
- TSF-LIF-1 - Trust Surface Lifecycle
- TSF-GOV-1 - Governance Integration Model
- TSF-MAT-1 - Digital Trust Maturity Model
- TSF-SPEC-1 - One-page Specification

---

## 23. Resolved issues

The following items were resolved for the v1.1 public draft:

1. TSF-02 Trust Signal Gap remains in the controlled artefact set as a supporting diagram for TSF-OVR-1.
2. TSF-06 Trust Signal Anatomy remains a supporting diagram.
3. Checksums are not mandatory for this release.
4. Local revision markers are not required; framework version alignment is sufficient.
5. A separate figure register is not required at this time.

---

## 24. Summary statement

TrustSurface diagrams and downloadable artefacts should behave like controlled framework components: clearly identified, version-aligned, easy to locate, and visibly connected to the framework concepts they represent.
