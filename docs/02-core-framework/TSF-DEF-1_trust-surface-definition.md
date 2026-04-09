# TSF-DEF-1 - Trust Surface Definition

**Status:** Public draft  
**Control:** Normative  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-DEF-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  
**Primary visual artefact:** TSF-04  
**Supports:** TSF-MOD-1, TSF-LIF-1, TSF-GOV-1

---

## 1. Purpose

This document is the canonical definition paper for the Trust Surface concept within the TrustSurface Framework.

It establishes:

- the authoritative definition of Trust Surface
- why the concept exists and what problem it solves
- how the Trust Surface is distinct from related concepts such as Attack Surface
- why governance of the Trust Surface is necessary
- what it means for an organisation to "use" the Trust Surface definition correctly

Every other TrustSurface Framework artefact depends on the definition established here. TSF-DEF-1 is a normative foundation: all framework artefacts MUST be consistent with it.

---

## 2. Scope

This document applies to any organisation adopting or applying the TrustSurface Framework.

It governs:

- how the term "Trust Surface" is defined and interpreted across the framework
- the conceptual boundary between Trust Surface, Attack Surface, and related concepts
- the relationship between Trust Surface components, Trust Signals, and Digital Trust Posture
- the governance necessity that follows from the Trust Surface's distributed nature

This document does not define every Trust Signal in detail, prescribe assessment methods, or establish scoring logic. Those are the responsibility of TSF-SIG-1 and TSF-MTH-1 respectively.

---

## 3. The Trust Surface defined

Digital systems are now the primary interface between organisations and their stakeholders.

Stakeholders interact with organisations through digital channels such as:

- email communications
- websites and online services
- domain names
- application platforms
- third-party services

These systems collectively shape how trustworthy an organisation appears in the digital environment.

The **Trust Surface** describes the systems and observable signals through which this trust is experienced.

### Canonical definition

**Trust Surface**

> The collection of digital systems and observable signals through which stakeholders experience and judge the trustworthiness of an organisation's digital presence.

The Trust Surface includes both the systems an organisation operates and the signals those systems emit.

Examples include:

- domain ownership and DNS configuration
- email authentication policies
- encryption and certificate posture
- reliability of digital services
- vendor platforms connected to organisational systems

Together, these elements shape Digital Trust Posture.

---

## 4. Why the Trust Surface matters

Stakeholders rarely see internal controls or governance processes.

Instead, they experience signals such as:

- whether an email appears authentic
- whether a website connection is secure
- whether a service functions reliably
- whether a third-party platform behaves appropriately

These experiences occur at the Digital Edge - the boundary where digital systems and stakeholders meet.

Failures at the Trust Surface often lead stakeholders to question the organisation itself. A compromised email domain, an invalid certificate, an unreachable service, or an impersonated identity is experienced by a stakeholder before any internal team is aware of it.

This is why the Trust Surface is a governance concern, not only a technical one.

---

## 5. Trust Surface vs Attack Surface

The Trust Surface is related to, but distinct from, the concept of an **Attack Surface**.

| Concept | Focus |
|---|---|
| Attack Surface | Technical entry points through which systems can be attacked |
| Trust Surface | Signals and behaviours through which stakeholders evaluate trust |

Attack surface management focuses on vulnerabilities and exploitability.

TrustSurface governance focuses on observable trust posture and the organisational discipline required to maintain it.

The two perspectives are complementary. An organisation may have a well-managed attack surface and still have a weak Trust Surface - for example, if email authentication is incomplete, domain governance is inconsistent, or key services emit confusing or insecure signals to users.

This distinction is illustrated in visual artefact **TSF-04** - Trust Surface vs Attack Surface.

---

## 6. Components of the Trust Surface

The Trust Surface can be described through six Trust Surface Domains:

1. **Identity boundary** - systems and controls that establish and manage digital identity at the boundary
2. **Domains & DNS** - domain ownership, DNS routing, naming integrity, and related controls
3. **Email integrity** - controls and signals establishing the authenticity and transport trustworthiness of email
4. **Digital services** - websites, portals, APIs, and service interfaces through which stakeholders interact
5. **Infrastructure & platforms** - the technical and hosting layer underpinning digital services
6. **Third-party ecosystem** - external vendors, SaaS platforms, and integrations that shape trust posture

The full domain model is defined in **TSF-MOD-1** - Trust Surface Model & Domains.

Each domain emits Trust Signals. Assessed signals are summarised into a Trust Signal Scorecard and together describe the organisation's Digital Trust Posture.

---

## 7. Why Trust Surface governance is necessary

In many organisations, Trust Surface components are managed by different teams.

Examples include:

- technology teams managing infrastructure
- marketing teams registering domains
- procurement teams selecting SaaS platforms
- communications teams operating digital channels

Because responsibility is distributed, organisations may lack a unified understanding of how these systems collectively influence trust.

TrustSurface provides a structured way to inventory, assess, harden, and govern this surface over time. Without deliberate governance, the Trust Surface tends toward inconsistency, unowned components, and degraded signals - not because of malice, but because no team is responsible for the whole.

The Trust Surface Lifecycle - Discover, Assess, Harden, Govern, Signal - provides the repeatable operating rhythm that maintains posture across this distributed responsibility landscape.

---

## 8. Conformance expectations

An organisation claiming to use the Trust Surface definition correctly SHALL be able to demonstrate all of the following:

1. It can articulate what its Trust Surface consists of, using the six-domain structure or a justified extension of it.
2. It has a current Trust Surface Inventory that identifies trust-critical systems, services, domains, and dependencies.
3. It can name accountable owners for each area of the Trust Surface.
4. It treats Digital Trust Posture as evidence-based, not assurance-language-based.
5. It consistently uses the term "Trust Surface" in alignment with this definition, not as a synonym for Attack Surface or general IT infrastructure.

Partial adoption - for example, inventorying some domains but not others - SHOULD be described as in progress rather than as full alignment.

---

## 9. Non-goals

TSF-DEF-1 does not:

- define every Trust Signal in detail (that is TSF-SIG-1's responsibility)
- prescribe assessment scoring methods (that is TSF-MTH-1's responsibility)
- replace the model artefact TSF-MOD-1, which defines domain structure in full
- claim that the Trust Surface is the complete description of an organisation's security or risk posture
- require organisations to use a specific tool or platform to manage the Trust Surface

---

## 10. Related TrustSurface artefacts

- **TSF-PRI-1** - Trust Principles
- **TSF-MOD-1** - Trust Surface Model & Domains
- **TSF-SIG-1** - Trust Signal Catalogue
- **TSF-LIF-1** - Trust Surface Lifecycle
- **TSF-GOV-1** - Governance Integration Model
- **TSF-MTH-1** - Assessment Method
- **TSF-GLO-1** - Glossary
- **TSF-04** - Trust Surface vs Attack Surface (visual artefact)

---

## 11. Backlog

The following items are deferred to a future release:

1. Whether TSF-DEF-1 should include a short illustrative example (e.g., a mid-size organisation's Trust Surface described at a high level) to aid adoption.

> **Resolved in v1.1 public draft:** The third-party ecosystem is within scope of the Trust Surface. Descriptive language is retained in preference to explicitly naming "Digital Edge." Conformance expectations are aligned numerically to TSF-GOV-1.

---

## 12. Summary statement

The Trust Surface is the collection of digital systems and observable signals through which stakeholders experience and judge the trustworthiness of an organisation's digital presence.

It is a governance concept as much as a technical one - distributed in ownership, experienced at the Digital Edge, and requiring a continuous lifecycle to remain strong.
