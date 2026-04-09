# TSF-MOD-1 - Trust Surface Model & Domains

**Status:** Public draft  
**Control:** Normative  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-MOD-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  
**Primary visual artefacts:** TSF-01, TSF-03  
**Supporting visual artefact:** TSF-04  

---

## 1. Purpose

This document defines the core model of the TrustSurface Framework and the domain structure used to describe where digital trust is experienced.

It establishes:

- the model elements that make up the framework
- the relationship between Trust Surface domains, Trust Signals, posture, lifecycle, and governance
- the six domain categories used to describe the Trust Surface
- the minimum vocabulary needed to discuss digital trust in a stable and governable way

TSF-MOD-1 is the canonical model paper for the TrustSurface Framework.

---

## 2. Scope

This document applies to conceptual modelling of the Trust Surface and its domains.

It governs:

- the framework model structure
- the domain baseline used across the framework
- the relationship between domains and Trust Signals
- the model used to move from observable signals to digital trust posture and governance action

It does not define every Trust Signal in detail, prescribe the assessment method, or replace the lifecycle, governance, or maturity artefacts.

Those artefacts remain separate and complementary.

---

## 3. Model proposition

The TrustSurface Framework models digital trust through a connected chain:

**Trust Surface domains → Trust Signals → Trust Signal Scorecard → Digital Trust Posture → Trust Surface Lifecycle → Governance Integration → Trust signalling and continuous improvement**

The purpose of this model is to make digital trust:

- visible
- discussable across organisational functions
- assessable through evidence
- governable over time

The model treats digital trust as an operational and governance concern, not only a technical or communications concern.

---

## 4. Core model elements

The TrustSurface Framework connects four primary elements.

### 4.1 Trust Surface
The digital systems and boundaries through which stakeholders experience an organisation’s digital presence.

### 4.2 Trust Signals
Observable indicators emitted by those systems that suggest how well they are controlled, maintained, and governed.

### 4.3 Trust Surface Lifecycle
The repeatable operating rhythm used to discover, assess, harden, govern, and signal digital trust posture.

### 4.4 Governance Integration
The organisational mechanisms that keep trust posture owned, reviewed, controlled, and connected to decision-making.

Together these elements support understanding and management of **Digital Trust Posture**.

---

## 5. Model flow

The TrustSurface model SHALL be understood in the following order.

### 5.1 Domains define where trust is experienced
Domains provide a stable structure for describing the systems and boundaries that shape digital trust.

### 5.2 Signals define what is observable
Each domain emits observable indicators that can be assessed as evidence of trust posture.

### 5.3 Scorecards summarise observed condition
Assessed signals are summarised into a Trust Signal Scorecard that records strengths, weaknesses, unknowns, and priority gaps.

### 5.4 Posture expresses the evidence-backed condition
Digital Trust Posture is the condition implied by the observed and assessed signals across the Trust Surface.

### 5.5 Lifecycle governs improvement
The lifecycle provides the repeatable mechanism for moving from discovery to assessment, hardening, governance, and signalling.

### 5.6 Governance prevents drift
Governance integration ensures that trust posture remains owned, reviewable, and resilient to organisational change.

### 5.7 Signalling closes the loop
Trust-relevant information is communicated appropriately to stakeholders, and the resulting visibility becomes part of ongoing trust maintenance.

---

## 6. Why domains are needed

Trust posture is rarely owned by a single team.

Domains make distributed ownership discussable.
They provide a stable structure for:

- inventorying the Trust Surface
- assigning ownership
- assessing signals consistently
- identifying posture gaps
- prioritising hardening work
- preventing regressions through governance

Without a domain model, digital trust tends to be discussed either too abstractly or too narrowly.

---

## 7. The six Trust Surface domains

The TrustSurface Framework uses six primary domains.

These domains form the baseline vocabulary for the Trust Surface.

| Domain | Description |
|---|---|
| **Identity** | Systems and controls that establish and manage digital identity at the boundary, including authentication, privileged access, and identity lifecycle governance. |
| **Domains & DNS** | Domain ownership, DNS routing, naming integrity, and related controls that make digital services and communications findable, legitimate, and reliable. |
| **Email Integrity** | Controls and signals that establish the authenticity, integrity, and transport trustworthiness of organisational email communications. |
| **Digital Services** | Websites, portals, APIs, applications, and service interfaces through which stakeholders interact with the organisation digitally. |
| **Infrastructure & Platforms** | The technical and hosting layer underpinning digital services, including platform configuration, resilience, and service-supporting environments. |
| **Third-Party Ecosystem** | External vendors, SaaS platforms, delegated providers, and integrations that shape or influence the organisation’s digital trust posture. |

These domains SHOULD be treated as the default model unless an organisation has a justified reason to extend the structure.

---

## 8. Domain interpretation notes

### 8.1 Identity
Identity includes not only authentication technology but also lifecycle and access governance where those affect outward trust.

It is concerned with who or what can credibly act at the digital boundary.

### 8.2 Domains & DNS
This domain includes public naming, domain ownership integrity, routing trust, and the controls that prevent confusion, abandonment, takeover, or legitimacy failure.

### 8.3 Email Integrity
This domain focuses on the trustworthiness of organisational email as an externally experienced channel.

It includes anti-spoofing, message authenticity, alignment, and secure transport.

### 8.4 Digital Services
This domain covers the actual interfaces through which stakeholders experience the organisation.

It includes web, application, API, and service-surface trust indicators such as service legitimacy, reliability, and protection signals.

### 8.5 Infrastructure & Platforms
This domain covers the supporting layer that underpins service trust at the edge.

It includes platform resilience, hosting integrity, exposure posture, and the operational foundation of digital interaction.

### 8.6 Third-Party Ecosystem
This domain recognises that trust is often delegated.

It covers vendors, SaaS, integrations, and partner platforms whose behaviour becomes part of the organisation’s trust posture whether or not they are directly controlled.

---

## 9. Domain boundaries and overlap

The six domains are conceptually distinct but operationally connected.

Overlap is expected.

Examples:
- a public authentication flow may involve both **Identity** and **Digital Services**
- an email platform decision may affect **Email Integrity**, **Domains & DNS**, and **Third-Party Ecosystem**
- a cloud platform outage may affect **Infrastructure & Platforms**, **Digital Services**, and public trust signalling

The framework SHALL allow multi-domain interpretation where necessary.

The existence of overlap is not a flaw in the model.
It reflects the real interdependence of digital systems at the trust surface.

---

## 10. Trust Signals within the model

Each domain emits observable Trust Signals.

Signals may be:
- externally observable
- internally verifiable
- structurally persistent
- operationally volatile

The Trust Signal Catalogue defines the signal layer in detail.

TSF-MOD-1 establishes that Trust Signals are not separate from the domain model; they are the evidence layer through which each domain becomes assessable.

---

## 11. Trust Signal Scorecard and posture

The model assumes that assessed signals can be summarised into a Trust Signal Scorecard.

The purpose of the scorecard is to provide a structured view of:
- current signal condition
- evidence coverage
- material weaknesses
- priority hardening needs
- cross-domain posture patterns

Digital Trust Posture is the condition implied by that assessed signal set.

It is not a claim made by branding, intent, or assurance language alone.
It is an evidence-backed condition derived from the Trust Surface.

---

## 12. Relationship to the lifecycle

The model defined in TSF-MOD-1 is operationalised through the Trust Surface Lifecycle.

The domains provide the structure for the **Discover** stage.
The signals provide the basis for the **Assess** stage.
The posture gaps shape the **Harden** stage.
The ownership and decision implications feed the **Govern** stage.
The externally experienced condition informs the **Signal** stage.

TSF-MOD-1 therefore defines the model that the lifecycle acts upon.

---

## 13. Relationship to governance integration

The domain model supports governance by making trust posture assignable and reviewable.

Without a stable model, governance questions become vague.

With the model in place, organisations can ask:
- which domains are in scope?
- who owns each domain?
- which signals matter most?
- where are the material gaps?
- what governance pathway should control change?

TSF-GOV-1 defines how those questions become ownership, cadence, decision rights, and escalation.

---

## 14. Relationship to attack surface

Trust Surface and Attack Surface are related but distinct.

| Concept | Focus |
|---|---|
| **Attack Surface** | Entry points through which systems can be attacked |
| **Trust Surface** | Systems and signals through which stakeholders evaluate trust |

Attack Surface Management focuses on exploitability and technical exposure.

TrustSurface focuses on observable legitimacy, reliability, governance, and confidence at the digital edge.

The two perspectives are complementary.
Neither replaces the other.

TSF-MOD-1 therefore recognises Attack Surface as adjacent, but not equivalent, to the Trust Surface model.

---

## 15. Minimum model expectations

An organisation claiming alignment with TSF-MOD-1 SHOULD be able to do all of the following:

1. identify the Trust Surface using the six-domain baseline or a justified extension of it
2. explain which systems, services, and dependencies fall into each domain
3. relate relevant Trust Signals to those domains
4. show how assessed signals roll into a scorecard and posture view
5. connect the model to lifecycle and governance activity

If these conditions cannot be met, the organisation may still be exploring digital trust, but it is not yet using the TrustSurface model in a controlled way.

---

## 16. Model use in practice

The model may be applied at multiple levels, including:
- whole organisation
- business unit
- service portfolio
- individual public-facing service
- domain namespace
- selected vendor ecosystem

The level of application MAY vary.
The structure of the model SHOULD remain recognisable.

---

## 17. Non-goals

TSF-MOD-1 does not:
- define every signal in detail
- prescribe a universal scoring formula
- require every organisation to create new domains
- replace lifecycle, governance, or maturity artefacts
- claim that trust posture can be reduced to one single number without interpretation

Its purpose is to provide a stable conceptual model and domain structure for the framework.

---

## 18. Related TrustSurface artefacts

- TSF-OVR-1 - Framework Overview
- TSF-PRI-1 - Trust Principles
- TSF-DEF-1 - Trust Surface Definition
- TSF-SIG-1 - Trust Signal Catalogue
- TSF-LIF-1 - Trust Surface Lifecycle
- TSF-GOV-1 - Governance Integration Model
- TSF-MTH-1 - Assessment Method
- TSF-MAT-1 - Digital Trust Maturity Model
- TSF-ART-1 - Diagram Library and Artefact Register

---

## 19. Terminology note

The framework uses the term **domains** throughout the normative artefacts. Public-facing materials (such as the website information architecture) may use **dimensions** as an alternative label where it aids comprehension. Where this occurs, it should be called out explicitly. The canonical normative term remains **domains**.

> **Resolved in v1.1 public draft:** The domain label "Identity" is retained as-is. TSF-06 remains a supporting diagram. Trust Transparency Mechanisms are addressed in lifecycle and governance papers. Domain-mapping examples are kept in supporting guidance only.

---

## 20. Summary statement

The TrustSurface model provides a stable way to describe where digital trust is experienced, how it becomes observable, how it is assessed into posture, and how that posture is governed over time.

Its six-domain structure gives organisations a common language for moving digital trust from scattered signals to a governable model.

