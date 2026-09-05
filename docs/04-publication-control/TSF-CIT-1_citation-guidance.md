# Citation Guidance

**Status:** Public draft  
**Control:** Operational  
**Framework version:** v1.2 public draft  
**Identifier:** TSF-CIT-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  
**Supports:** TSF-LIC-1, TSF-CHG-1

---

## 1. Purpose

This document provides the recommended citation format for the TrustSurface Framework and attribution guidance for reuse under the CC BY 4.0 licence.

## 2. Recommended citation

### 2.1 Live v1.2 public draft

When referring to the current web/repository framework rather than an immutable archive:

Chetcuti, Bryan. (2026). *TrustSurface Framework* (Version v1.2 public draft). trustsurface.org.

Changelog: https://trustsurface.org/changelog/

Repository: https://github.com/bchetcuti/trust-surface-framework

### 2.2 Archived v1.2.0 release

GitHub release `v1.2.0 — Public Draft` is archived by Zenodo and represents the immutable tag at commit `5d79740d8b6a0608185dbe356991b9e63cd4ecd7`.

Release: https://github.com/bchetcuti/trust-surface-framework/releases/tag/v1.2.0

Zenodo latest-archive resolver for this repository: https://zenodo.org/badge/latestdoi/1173391560

When citing the archived release, use the **version-specific DOI displayed by the Zenodo record**, not the DOI of an earlier version and not a later latest-version DOI.

The live v1.2 public draft on `main` includes a later one-line informative publication-integrity correction that keeps `Unknown` assessment outcomes outside remediation. That correction does not alter the framework version, normative boundary, lifecycle, result states, or assessment semantics, but it means the current repository head is not byte-identical to the immutable v1.2.0 archive.

### 2.3 Earlier archive

DOI `10.5281/zenodo.19499957` identifies the archived **v1.1.0** snapshot only.

It SHOULD be cited when specifically referencing that archived v1.1.0 snapshot. It MUST NOT be described as the DOI for v1.2 or for the current public draft.

## 3. Attribution guidance (CC BY 4.0)

Attribution should include:

- author name (Bryan Chetcuti)
- title (TrustSurface Framework)
- version (framework and/or glossary)
- link to trustsurface.org, the repository, or the version-specific archive
- indication of changes (if you modified the material)

Where a specific artefact is cited rather than the framework as a whole, include the artefact identifier (e.g., TSF-GLO-1, TSF-MOD-1) alongside the version.

## 4. Version tracking

The version to cite depends on what you are referencing:

- For the live framework as a whole, cite the active framework version and canonical web/repository path.
- For an immutable archived release, cite the version-specific DOI displayed by that Zenodo record.
- For individual artefacts, include the artefact identifier and current framework version status.
- Do not reuse a prior version DOI for a newer framework release.
- A repository-level latest-DOI resolver is convenient for discovery but is not a substitute for a version-specific DOI when reproducibility depends on the exact archived release.
- The **TSF-CHG-1** changelog records normative changes. Non-normative edits that do not alter framework meaning are recorded where publication integrity requires traceability.

---

## Related TrustSurface artefacts

- **TSF-LIC-1** - Licence (CC BY 4.0 terms governing reuse)
- **TSF-CHG-1** - Public Changelog and Release Notes
- **TSF-CNS-1** - Consultation and Contribution Guidance
- **TSF-REG-1** - Framework Register (canonical list of artefact identifiers and versions)

## Summary statement

TSF-CIT-1 provides the canonical citation format for the TrustSurface Framework and explains how attribution requirements under CC BY 4.0 should be met when referencing or adapting framework content. It distinguishes the live v1.2 public draft, the immutable v1.2.0 Zenodo-backed release archive, and earlier archived versions.
