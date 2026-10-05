# TrustSurface repository governance

**Status:** Operational repository note  
**Framework effect:** None  
**Version effect:** None  

This note defines authority and propagation rules across the repositories used to develop, publish, visualise, and write about the TrustSurface Framework.

It is repository governance, not a TrustSurface framework artefact. It does not alter the normative boundary, framework version, controlled artefact register, or publication status.

## Repository authority map

| Repository | Visibility | Role | Authority |
| --- | --- | --- | --- |
| `bchetcuti/trust-surface-framework` | Public | Canonical framework source, controlled framework artefacts, controlled diagrams, release tags and citation metadata | **Authoritative** for framework meaning, identifiers, controlled diagrams and release state |
| `bchetcuti/trust-surface-web` | Private | Astro / Cloudflare Pages publication implementation for `trustsurface.org` | **Derived publication surface**; may present canonical material but must not lead or redefine framework semantics |
| `bchetcuti/trustsurface-diagrams` | Private | Diagram working, source-production and export workspace | **Non-canonical working repository**; `TSF-DIA-*` identifiers are internal working identifiers mapped to canonical `TSF-01` through `TSF-08` |
| `bchetcuti/trust-surface-manuscript` | Private | Long-form manuscript and editorial development | **Derivative and frozen**; public framework terminology is canon and manuscript text cannot redefine the framework |

## Canonical source rule

`bchetcuti/trust-surface-framework` is the single source of truth for:

- canonical framework definitions and terminology;
- normative, informative, guidance and operational framework artefacts;
- framework version and release state;
- the controlled diagram set `TSF-01` through `TSF-08`;
- changelog, citation guidance and release metadata.

Where another TrustSurface repository conflicts with the canonical framework repository, the canonical framework repository prevails.

## Propagation direction

Framework changes move outward in one direction:

1. analyse or experiment privately where needed;
2. approve and merge canonical framework change in `trust-surface-framework`;
3. update controlled diagrams in the canonical framework repository where affected;
4. synchronise `trust-surface-web` from the accepted canonical state;
5. update private diagram-working metadata or production sources only where ongoing diagram work requires it;
6. update manuscript material only when manuscript work is intentionally resumed.

The publication site, diagram-working repository and manuscript must not become upstream semantic authorities.

## Diagram authority

The controlled public diagram identifiers are:

- `TSF-01`
- `TSF-02`
- `TSF-03`
- `TSF-04`
- `TSF-05`
- `TSF-06`
- `TSF-07`
- `TSF-08`

Their canonical SVGs and release alignment are maintained in `trust-surface-framework/artefacts/diagrams/` and governed by TSF-ART-1.

The private `trustsurface-diagrams` repository remains useful as a working and production workspace. Its historical `TSF-DIA-01` through `TSF-DIA-08` identifiers are internal source identifiers only and map one-to-one to the canonical identifiers above. They must not be cited or presented as a competing canonical identifier scheme.

## Publication authority

`trustsurface.org` is the primary human-facing reading surface, implemented from the private `trust-surface-web` repository.

The site may add presentation-specific frontmatter, navigation, layout and publication copy, but framework meaning must be sourced from `trust-surface-framework`. When canonical content changes, publication follows canonical merge rather than leading it.

## Manuscript boundary

The manuscript repository is not part of the active framework release process.

It may interpret, explain and contextualise TrustSurface for long-form writing, but it must treat the current public framework terminology and authority structure as canon. Manuscript work remains frozen until intentionally resumed.

## Applied evidence projects

ThreatScope Check, the .au Domain Observatory (.auDO), and the Domain Governance Baseline provide applied evidence that can test TrustSurface concepts.

They are not normative dependencies and do not automatically change the framework. Evidence from those projects may justify a future private impact analysis; framework change still requires an explicit canonical decision and controlled release path.

## Protected change path

The canonical default branch is protected by the active repository ruleset `Protect canonical main`.

The protected change path is:

1. create a working branch from the current canonical state;
2. make and review the proposed change on that branch;
3. open a pull request targeting the default branch;
4. merge the accepted pull request into the canonical branch.

The ruleset applies to the repository default branch and:

- blocks branch deletion;
- blocks non-fast-forward updates, including force pushes;
- requires changes to reach the canonical branch through a pull request;
- requires zero approving reviews;
- does not require code-owner review, last-push approval, review-thread resolution, or automated status checks;
- defines no bypass actors.

Requiring a pull request while requiring zero approvals is deliberate. TrustSurface is currently stewarded through a practical single-steward workflow. The pull request provides attributable change history, review context, and an explicit merge event without creating a mandatory second-person dependency.

Automated status checks are not required because this repository currently has no CI or build workflow to gate. Signed commits and linear history are also not mandated; the existing merge-commit based workflow is retained.

If the stewardship model, automated validation surface, or release process changes materially, these exceptions should be reassessed. Direct modification of the protected canonical branch, destructive branch operations, and force pushes are not part of the normal change path.

## Current stop state — September 2026

The v1.2 stocktake and release package is complete.

The stable position is:

- Trust Signal and Evidence are now distinct canonical concepts;
- v1.2.0 has been released and archived;
- `trustsurface.org` is synchronised to the v1.2 public draft;
- the controlled diagram set is authoritative in the framework repository;
- diagram-working and manuscript repositories are non-canonical;
- further framework changes must be earned by applied evidence rather than by repository drift or editorial momentum.

No v1.3 release is implied by this note.
