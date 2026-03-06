# TrustSurface Framework

TrustSurface is a neutral, evidence-led framework for identifying, measuring, and governing the **observable trust signals** an organisation emits at its digital edge.

It exists because organisations can be internally well-controlled and still appear untrustworthy through weak signals: spoofable email, brittle DNS, inconsistent identity boundaries, unreliable services, and unmanaged third-party integrations.

## Current release

- **Framework:** v1.0
- **Glossary baseline:** v1.0
- **Last updated:** 2026-03-06
- **Public normative changelog:** `/changelog/`

## Quick links

- Website: https://trustsurface.org/
- Framework overview: https://trustsurface.org/framework/
- One-page specification: https://trustsurface.org/spec/
- Print specification (A4): https://trustsurface.org/spec/print/
- Glossary: https://trustsurface.org/framework/glossary/
- Adoption guidance: https://trustsurface.org/adoption/
- Comparative positioning: https://trustsurface.org/comparative/
- Worked example: https://trustsurface.org/example/
- Library: https://trustsurface.org/docs/

## Normative boundary

TrustSurface distinguishes between **normative** and **informative** documents.

Normative documents currently define the framework’s stable boundaries:

- `framework/03-trust-surface-definition.md`
- `framework/04-trust-surface-map.md`
- `framework/06-trust-surface-lifecycle.md`

All other documents are informative unless explicitly stated otherwise.

## Core concepts

Definitions are stabilised through the glossary baseline and used consistently across the site.

- **Trust Surface** — the systems and signals where trust is experienced.
- **Trust Signal** — an observable indicator describing posture.
- **Trust Posture** — the evidence-based state implied by signals.
- **Trust Signal Gap** — intended posture versus observed evidence.

## Repository structure

- `assets/` — shared CSS, JavaScript, and docs manifest
- `data/glossary.json` — single-source glossary definitions used by tooltip highlighting
- `framework/` — framework source documents and canonical route entrypoints
- `spec/` — one-page specification and print-friendly specification
- `diagrams/` — framework diagrams
- `_redirects` and `_headers` — static host routing and security configuration
- `scripts/validate_repo.py` — repository hygiene and route validation

## Deployment notes

The site is built as a static project for Cloudflare Pages or another static host with support for `_redirects` and `_headers`.

Recommended deployment posture:

- Publish the repository root as the site output.
- Preserve `_redirects` and `_headers` verbatim.
- Do not introduce rewrite-based routing for `/docs/` or `/framework/`; canonical route folders are the source of truth.
- Keep Google Fonts allowed in CSP for Poppins rendering, especially for `/spec/print/`.

## Validation and GitHub hygiene

A lightweight GitHub Actions workflow runs `scripts/validate_repo.py` on push and pull request. It checks:

- required files are present
- `assets/docs.json` points only to real documents
- normative status metadata is present
- canonical route files exist
- `_redirects` has no conflicting entries
- print specification loads Poppins and inlines the diagram

## Licence

Framework content is licensed under **Creative Commons Attribution 4.0 (CC BY 4.0)**.

Templates, assessment instruments, and implementation methods are excluded unless explicitly stated.

See `LICENSE.md`.

## Contributing

TrustSurface is published to encourage careful reuse, scrutiny, and improvement.

Use GitHub issues for:

- clarity corrections
- link or routing defects
- glossary consistency issues
- suggestions for worked examples or comparative references
