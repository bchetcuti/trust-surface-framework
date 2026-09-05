# Comparative Positioning and Reference Mappings

**Status:** Public draft  
**Control:** Informative  
**Framework version:** v1.2 public draft  
**Identifier:** TSF-CMP-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  
**Supports:** TSF-OVR-1, TSF-MOD-1

---

## 1. Purpose

This document positions the TrustSurface Framework relative to the governance and security standards most commonly encountered by adopting organisations. It is provided for orientation, not prescription. Readers using TrustSurface alongside an existing standard will find practical guidance on where the two complement each other.

TrustSurface is a **lens**. It helps organisations identify and govern trust-relevant properties, behaviours, and conditions at the digital edge, then assess those Trust Signals using attributable Evidence. It does not compete with control frameworks, audit standards, or maturity models. It complements them by connecting internal controls and governance intent to evidence-backed Digital Trust Posture.

---

## 2. What TrustSurface is

> A framework for making trust posture visible, assessable, and governable through defined Trust Signals and attributable Evidence.

---

## 3. What TrustSurface is not

- not an ISMS
- not a control catalogue
- not an audit standard
- not attack surface management

---

## 4. Side-by-side comparison (high level)

| Standard / framework | Primary purpose | Primary unit of work | Typical outputs | Where TrustSurface fits |
|---|---|---|---|---|
| **ISO/IEC 27001** | Establish and operate an ISMS | Controls, policies, ISMS processes | SoA, policies, audits, continual improvement | Adds a Trust Signal view of trust-relevant conditions at the digital edge and the Evidence used to assess them |
| **NIST CSF** | Organise cyber risk management outcomes | Functions / categories (Identify, Protect, Detect, Respond, Recover) | Profiles, target state, outcomes mapping | Adds a digital-edge lens that connects outcomes to Trust Signals, evidence-backed assessment, and refresh discipline |
| **COBIT** | Govern and manage enterprise IT | Governance and management objectives | Objectives, accountability, metrics | Adds a focused posture lens for externally experienced systems, supporting executive decision rights and reporting |
| **ASD Essential Eight** | Reduce likelihood and impact of common cyber attacks | Eight mitigation strategies and maturity levels | Maturity assessments, remediation plans | Helps decide where Essential Eight maturity materially shapes Trust Surface condition and what Evidence supports that assessment |
| **Australian Government ISM** | Cyber security framework guidance for protecting systems and data | Controls / guidelines applied via risk management | Control profiles, implementation guidance, assurance artefacts | Provides control depth; TrustSurface provides a surface-oriented assessment lens over trust-relevant conditions and Evidence |
| **PSPF** | Protective security policy for people, information, and resources | Security domains and required outcomes | Policy compliance, maturity reporting, protective security plans | Helps connect policy intent to evidence-backed Digital Trust Posture for digital-facing services and delegated trust |

---

## 5. How TrustSurface fits alongside each standard

### 5.1 ISO/IEC 27001

Use TrustSurface to strengthen ISO 27001 where stakeholders experience digital trust.

- treat Trust Surface domains as **ISMS-relevant groupings** at the digital edge
- use Trust Signals to define **what trust-relevant condition is assessed** for trust-critical areas such as email, domains, public services, and third-party integrations
- define the Evidence needed to support those assessments
- use TrustSurface artefacts (inventory, scorecard, signal gap log) as inputs to management review

### 5.2 NIST CSF

Use TrustSurface to connect CSF outcomes to evidence-backed Digital Trust Posture.

- map Trust Surface domains to CSF outcomes where relevant
- define Trust Signals that describe the trust-relevant condition to be assessed
- gather Evidence that supports those assessments (e.g. spoof resistance, transport integrity, service reliability)
- use the operating rhythm to establish a lightweight reassessment cadence

### 5.3 COBIT

Use TrustSurface to operationalise governance intent into evidence-backed posture.

- clarify **decision rights** and ownership for trust-critical systems
- add trust posture measures alongside service and risk measures
- use the Trust Signal Gap to track assurance intent versus observable reality where that comparison can be supported

### 5.4 ASD Essential Eight

The Essential Eight is a set of mitigation strategies with maturity levels. TrustSurface does not restate those controls.

Use TrustSurface to:

- identify which parts of your environment are **trust-critical at the edge** (e.g. identity boundary, email integrity, public services)
- define Trust Signals only where a control or condition materially shapes the Trust Surface
- gather Evidence that supports assessment of those Trust Signals
- ensure maturity uplift is governed through ownership, cadence, and exception handling

### 5.5 Australian Government ISM

The ISM provides broad control guidance and implementation depth. TrustSurface provides a surface-oriented lens over externally experienced trust posture.

Use TrustSurface to:

- make "what we must protect" explicit as a Trust Surface inventory
- identify the trust-relevant properties, behaviours, or conditions to assess
- define what Evidence will support posture assessment for those trust-critical areas
- avoid over-measuring: focus on conditions that materially affect Digital Trust Posture rather than importing a broad control catalogue

### 5.6 Protective Security Policy Framework (PSPF)

PSPF sets policy outcomes across protective security domains. TrustSurface can help governance teams ensure the digital edge aligns to policy intent.

Use TrustSurface to:

- translate policy-level requirements into Trust Signals where they materially shape digital-facing services and delegated trust
- assess those Trust Signals using attributable Evidence
- maintain a rhythm of reassessment rather than a once-a-year compliance exercise
- surface exceptions and residual gaps as governance decisions

---

## 6. The practical distinction

Traditional frameworks answer:

- *Are controls defined and operating?*
- *Are we managing risk within appetite?*

TrustSurface adds:

- *What trust-relevant properties, behaviours, or conditions at the digital edge are we assessing?*
- *What attributable Evidence supports those assessments?*
- *Would an external stakeholder experience weak posture even where internal controls appear strong?*
- *Do we have ownership and cadence to keep the evidence and posture assessment current?*

---

## 7. External references

- ASD Essential Eight: https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight
- ASD Information Security Manual (ISM): https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism
- Protective Security Policy Framework (PSPF): https://www.protectivesecurity.gov.au/

---

## Related TrustSurface artefacts

- **TSF-OVR-1** - Framework Overview
- **TSF-MOD-1** - Trust Surface Model and Domains
- **TSF-DEF-1** - Core Definitions
- **TSF-GOV-1** - Governance Integration
- **TSF-SIG-1** - Trust Signal Catalogue
- **TSF-MAT-1** - Digital Trust Maturity Model
- **TSF-GLO-1** - Glossary
- **TSF-ADP-1** - Adoption Guidance (practical operating guidance for adopters)

---

## Summary statement

TSF-CMP-1 positions TrustSurface as a complementary lens alongside ISO/IEC 27001, NIST CSF, COBIT, ASD Essential Eight, the Australian Government ISM, and the PSPF. In each case, the existing standard provides control depth or policy structure; TrustSurface identifies trust-relevant conditions at the digital edge and uses attributable Evidence to assess and govern the Digital Trust Posture those conditions support.
