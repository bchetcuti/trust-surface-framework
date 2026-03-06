# TrustSurface Framework — One‑Page Specification

> Status: Informative  
> Version: v1.0  
> Last updated: 2026-03-06

> **Status:** Normative
> **Framework version:** v1.0
> **Vocabulary baseline:** Glossary v1.0 (TSF‑GLO‑1)
> **Last updated:** 2026‑03‑06


**Identifier:** TSF‑SPEC‑1

**Version:** v1.0 (Public Release)

**Vocabulary baseline:** Glossary v1.0 (TSF‑GLO‑1)

**Author:** Bryan Chetcuti

**Year:** 2026

**Changelog:** /changelog/ (normative-only)

---

## 1. Purpose
TrustSurface defines a neutral, evidence‑led method to:

- identify an organisation’s Trust Surface
- measure observable Trust Signals
- govern Trust Posture through a repeatable operating rhythm

**Purpose sentence:** TrustSurface is a practitioner-led framework for identifying, measuring, and governing the observable trust signals an organisation emits at its digital edge.

## 2. Definitions (normative)
Definitions in this specification align to **TrustSurface Glossary v1.0**.

**Trust Surface:** the collection of digital systems and observable signals through which stakeholders experience and judge the trustworthiness of an organisation’s digital presence.

**Trust Signal:** an observable indicator (evidence) that describes the trust posture of a Trust Surface component.

**Trust Posture:** the current, evidence-based state of an organisation’s Trust Surface as represented by the strength, consistency, and coverage of its Trust Signals.

**Trust Signal Gap:** the difference between intended posture and the posture actually signalled by observable evidence.

## 3. Domain model
TrustSurface SHALL be described using the following domain set:

1. Identity boundary
2. Domains & DNS
3. Email integrity
4. Digital services
5. Infrastructure & platforms
6. Third‑party ecosystem

## 4. Operating rhythm
TrustSurface SHALL be operated as a repeatable cycle:

**Discover → Assess → Harden → Govern → Signal → (repeat)**

Minimum outputs:

- **Discover:** Trust Surface Inventory + ownership
- **Assess:** Trust Signal Scorecard + evidence links
- **Harden:** prioritised backlog + 30/60/90‑day plan
- **Govern:** decision rights + change controls + cadence
- **Signal:** verifiable trust communications (context dependent)

## 5. Visual anchor
![TrustSurface Framework diagram](/diagrams/trust-surface.svg)

## 6. Scope and non‑goals
In scope:
- externally observable trust posture
- governance of trust‑critical systems and delegated trust

Out of scope:
- full attack surface management
- product‑specific implementation details

## 7. Licensing
Core framework content is licensed under **CC BY 4.0**.
Implementation templates, assessment instruments, and delivery methods are excluded unless explicitly stated.