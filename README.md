# TrustSurface Framework

A framework for making digital trust visible, assessable, and governable.

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.19499957.svg)](https://doi.org/10.5281/zenodo.19499957)

---

## What TrustSurface is

TrustSurface is a framework for understanding how digital systems shape stakeholder trust.

It helps organisations:

- identify the systems through which digital trust is experienced
- assess the observable trust signals those systems emit
- understand digital trust posture through evidence rather than assurance language alone
- govern trust posture through ownership, lifecycle, and transparency

TrustSurface focuses on the digital edge: the domains, services, dependencies, and signals through which trust is actually experienced.

It complements cybersecurity, risk, architecture, service, and vendor governance disciplines. It does not replace them.

---

## Current release

**Framework version:** v1.1 public draft  
**Publication status:** Public draft  
**Primary entry point:** [TSF-OVR-1 - Framework Overview](docs/01-start-here/TSF-OVR-1_framework-overview.md)

---

## Normative boundary

The current normative framework set is:

- **TSF-DEF-1** - [Trust Surface Definition](docs/02-core-framework/TSF-DEF-1_trust-surface-definition.md)
- **TSF-MOD-1** - [Trust Surface Model & Domains](docs/02-core-framework/TSF-MOD-1_trust-surface-model-and-domains.md)
- **TSF-LIF-1** - [Trust Surface Lifecycle](docs/02-core-framework/TSF-LIF-1_trust-surface-lifecycle.md)
- **TSF-GOV-1** - [Governance Integration Model](docs/02-core-framework/TSF-GOV-1_governance-integration-model.md)
- **TSF-GLO-1** - [Glossary](docs/02-core-framework/TSF-GLO-1_glossary.md)
- **TSF-SPEC-1** - [One-page Specification](docs/01-start-here/TSF-SPEC-1_one-page-specification.md)

Informative, Guidance, and Operational artefacts support this set but do not override it.

---

## Core model

TrustSurface models digital trust through a connected chain:

**Trust Surface domains → Trust Signals → Trust Signal Scorecard → Digital Trust Posture → Trust Surface Lifecycle → Governance Integration → Trust signalling and continuous improvement**

The six-domain baseline is:

1. **Identity**
2. **Domains & DNS**
3. **Email Integrity**
4. **Digital Services**
5. **Infrastructure & Platforms**
6. **Third-Party Ecosystem**

---

## Repository structure

```
trust-surface-framework/
├── README.md
├── docs/
│   ├── 01-start-here/          Framework overview, one-page specification
│   ├── 02-core-framework/      Normative and core informative artefacts
│   ├── 03-application/         Assessment method, examples, adoption guidance
│   ├── 04-publication-control/ Document register, versioning, citation, licence
│   └── 05-narrative/           Origin and context
└── artefacts/
    └── diagrams/               Controlled SVG diagrams (TSF-01 through TSF-08)
```

---

## Recommended reading order

1. **TSF-OVR-1** - [Framework Overview](docs/01-start-here/TSF-OVR-1_framework-overview.md)
2. **TSF-PRI-1** - [Trust Principles](docs/02-core-framework/TSF-PRI-1_trust-principles.md)
3. **TSF-DEF-1** - [Trust Surface Definition](docs/02-core-framework/TSF-DEF-1_trust-surface-definition.md)
4. **TSF-MOD-1** - [Trust Surface Model & Domains](docs/02-core-framework/TSF-MOD-1_trust-surface-model-and-domains.md)
5. **TSF-SIG-1** - [Trust Signal Catalogue](docs/02-core-framework/TSF-SIG-1_trust-signal-catalogue.md)
6. **TSF-LIF-1** - [Trust Surface Lifecycle](docs/02-core-framework/TSF-LIF-1_trust-surface-lifecycle.md)
7. **TSF-GOV-1** - [Governance Integration Model](docs/02-core-framework/TSF-GOV-1_governance-integration-model.md)
8. **TSF-MTH-1** - [Assessment Method](docs/03-application/TSF-MTH-1_assessment-method.md)
9. **TSF-MAT-1** - [Digital Trust Maturity Model](docs/02-core-framework/TSF-MAT-1_digital-trust-maturity-model.md)

---

## Application artefacts

- **TSF-MTH-1** - [Assessment Method](docs/03-application/TSF-MTH-1_assessment-method.md)
- **TSF-EXM-1** - [Worked Example - Email Integrity](docs/03-application/TSF-EXM-1_worked-example-email-integrity.md)
- **TSF-ADP-1** - [Adoption Guidance](docs/03-application/TSF-ADP-1_adoption-guidance.md)
- **TSF-BRD-1** - [Board Questions](docs/03-application/TSF-BRD-1_board-questions.md)
- **TSF-CMP-1** - [Comparative Positioning & Reference Mappings](docs/03-application/TSF-CMP-1_comparative-positioning-and-reference-mappings.md)

---

## Publication control

- **TSF-REG-1** - [Document Register](docs/04-publication-control/TSF-REG-1_document-register.md)
- **TSF-VPOL-1** - [Versioning & Normative Boundary Policy](docs/04-publication-control/TSF-VPOL-1_versioning-and-normative-boundary-policy.md)
- **TSF-ART-1** - [Diagram Library & Artefact Register](docs/04-publication-control/TSF-ART-1_diagram-library-and-artefact-register.md)
- **TSF-CIT-1** - [Citation Guidance](docs/04-publication-control/TSF-CIT-1_citation-guidance.md)
- **TSF-CHG-1** - [Public Changelog & Release Notes](docs/04-publication-control/TSF-CHG-1_public-changelog-and-release-notes.md)
- **TSF-CNS-1** - [Consultation & Contribution Guidance](docs/04-publication-control/TSF-CNS-1_consultation-and-contribution-guidance.md)

---

## What TrustSurface is not

TrustSurface is not:

- a replacement for cybersecurity frameworks
- a full attack surface management model
- a purely brand or communications-based trust method
- a product-specific implementation standard
- a claim that digital trust can be reduced to one single number without interpretation

It is a framework for making digital trust visible, assessable, and governable over time.

---

## Licence

TrustSurface Framework content is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](docs/04-publication-control/TSF-LIC-1_licence.md).

---

## Citation

Chetcuti, Bryan. (2026). *TrustSurface Framework* (v1.1 public draft). trustsurface.org.

See [TSF-CIT-1](docs/04-publication-control/TSF-CIT-1_citation-guidance.md) for full citation and attribution guidance.

---

## Contributing

Feedback and contributions are welcome. See [TSF-CNS-1 - Consultation & Contribution Guidance](docs/04-publication-control/TSF-CNS-1_consultation-and-contribution-guidance.md).

---

## Security

See [TSF-SEC-1 - Security & Vulnerability Disclosure](docs/04-publication-control/TSF-SEC-1_security-and-vulnerability-disclosure.md).
