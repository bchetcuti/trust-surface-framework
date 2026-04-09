# TSF-PRI-1 - Trust Principles

**Status:** Public draft  
**Control:** Informative  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-PRI-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  
**Supports:** TSF-GOV-1, TSF-DEF-1

---

## 1. Purpose

This document establishes the five foundational principles that underpin the TrustSurface Framework.

The principles constrain TrustSurface so it remains neutral, governance-aligned, and evidence-led. They inform every other framework artefact, setting the intent behind the method and the governance model.

These principles are informative, not normative. They do not override normative artefacts such as TSF-DEF-1, TSF-LIF-1, or TSF-GOV-1. Where normative artefacts use SHALL language, those requirements stand independently of how the principles are interpreted. The principles serve as the reasoning behind that language - they explain why the framework is structured as it is.

---

## 2. Scope

This document applies to the TrustSurface Framework as a whole.

The principles are relevant wherever the framework is applied - whether at whole-organisation, business-unit, service, or domain level. They provide a stable reference for understanding framework intent and for resolving ambiguity in how the framework is applied in practice.

This document does not define controls, prescribe methods, or establish scoring logic. Those are the responsibility of normative artefacts.

---

## 3. The five principles

### 3.1 Principle 1 - Trust must be observable

Digital trust cannot rely on assurances alone.
It must be supported by **observable signals**.

Examples include:

- email authentication records
- domain integrity controls
- encryption posture
- service availability indicators

If trust cannot be observed, it cannot be verified.

**Implication**

Organisations should ensure the signals they emit accurately reflect their operational and security posture. Assessment, evidence, and governance must be grounded in what can be demonstrated, not only what is claimed.

---

### 3.2 Principle 2 - Trust failures occur at the surface

Most digital trust failures occur where systems interact with the outside world.

Examples include:

- email spoofing
- DNS misconfiguration
- exposed services
- insecure integrations

These failures happen at the **Trust Surface** - the Digital Edge where stakeholders experience an organisation's digital presence.

**Implication**

Trust governance must focus on observable exposure points, not only internal controls. The concept of the Trust Surface exists precisely because the boundary between systems and stakeholders is where trust is built or lost.

---

### 3.3 Principle 3 - Trust is an organisational responsibility

Digital trust is not owned solely by technology teams.
It spans:

- technology
- risk management
- communications
- procurement
- executive leadership

Failures in vendor governance, operational resilience, or identity management can all erode trust.

**Implication**

TrustSurface governance must operate across organisational functions. Governance Integration is necessary because no single team controls the full Trust Surface. Ownership, accountability, and decision rights must be distributed appropriately.

---

### 3.4 Principle 4 - Trust must be continuously maintained

Digital trust is not a one-time achievement.
Changes in infrastructure, vendors, domains, or services can quickly alter Digital Trust Posture.

**Implication**

Trust Signals must be continuously monitored and periodically reviewed. Digital Trust Posture should be treated as a living operational metric, not a certification endpoint. The Trust Surface Lifecycle exists to operationalise this principle.

---

### 3.5 Principle 5 - Trust should be communicated transparently

Stakeholders increasingly expect organisations to demonstrate accountability for their digital systems.

Transparency about trust posture strengthens credibility and resilience.

Examples include:

- service status reporting
- security transparency
- clear communication during incidents

**Implication**

Organisations should develop Trust Transparency Mechanisms for communicating trust posture to stakeholders in a verifiable way. Transparency is not marketing; it is governed, evidence-based communication appropriate to context.

---

## 4. The five principles (compressed)

Trust must be observable.  
Trust fails at the surface.  
Trust is organisational.  
Trust must be maintained.  
Trust should be transparent.

---

## 5. Principles and normative artefacts

The principles inform but do not override normative artefacts.

Where TSF-DEF-1, TSF-LIF-1, TSF-GOV-1, or TSF-GLO-1 establish SHALL-level requirements, those requirements are authoritative within the framework. The principles explain the reasoning behind those requirements; they do not substitute for them.

Organisations seeking to apply the TrustSurface Framework should read the principles as orientation - a statement of what the framework is trying to achieve - and then follow normative artefacts for specific conformance expectations.

---

## 6. Relationship to TSF-GOV-1

TSF-GOV-1 - Governance Integration Model applies each of the five principles operationally.

- Principle 1 (observable) is applied through TSF-GOV-1's evidence controls and cadence requirements.
- Principle 2 (surface) is applied through the domain ownership model and the Trust Surface Inventory requirement.
- Principle 3 (organisational) is applied through cross-functional role definitions and accountability structures.
- Principle 4 (continuous) is applied through scheduled and trigger-based governance cadence.
- Principle 5 (transparent) is applied through governed Trust Transparency Mechanisms and public signalling controls.

Reading TSF-PRI-1 alongside TSF-GOV-1 shows how intent becomes operational requirement.

---

## 7. Related TrustSurface artefacts

- **TSF-DEF-1** - Trust Surface Definition
- **TSF-MOD-1** - Trust Surface Model & Domains
- **TSF-GOV-1** - Governance Integration Model
- **TSF-LIF-1** - Trust Surface Lifecycle
- **TSF-SIG-1** - Trust Signal Catalogue
- **TSF-GLO-1** - Glossary

---

## 8. Summary statement

The five TrustSurface principles establish that digital trust must be observable, that it fails at the surface, that it is an organisational responsibility, that it must be maintained continuously, and that it should be communicated transparently.

These principles are the stable intent behind every framework artefact. They do not override normative requirements but explain why those requirements exist.
