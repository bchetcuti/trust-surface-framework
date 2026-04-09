# TSF-MAT-1 - Digital Trust Maturity Model

**Status:** Public draft  
**Control:** Informative  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-MAT-1  
**Owner:** TrustSurface Framework  
**Vocabulary baseline:** TSF-GLO-1  
**Primary visual artefact:** TSF-07  
**Supports:** TSF-MTH-1, TSF-GOV-1

---

## 1. Purpose

This document defines the Digital Trust Maturity Model - a structured way for organisations to understand how effectively they manage the Trust Signals emitted by their Trust Surface.

The model supports:

- benchmarking current Digital Trust Posture against a progressive capability scale
- prioritising improvement investment across Trust Surface Domains
- communicating trust posture maturity to executive and governance audiences
- understanding the relationship between assessment results and organisational capability

The Digital Trust Maturity Model complements traditional cybersecurity maturity assessments by focusing on **observable trust signals rather than internal controls alone**. Where security maturity models typically address threat reduction and control coverage, this model addresses the credibility, consistency, and governance of what an organisation signals to the outside world.

The maturity model is informative. It provides a useful lens for interpreting assessment results and planning improvement. It does not produce binding conformance obligations.

---

## 2. Scope

This document covers:

- the five maturity levels and their characteristics
- how domain-level maturity is assessed and interpreted
- the relationship between TSF-MTH-1 assessment outcomes and maturity level
- implementation guidance for organisations using the model
- the governance judgement involved in determining maturity

This document does not define how Trust Signals are individually assessed - that is TSF-MTH-1's responsibility. It provides the model against which patterns of assessment results are interpreted.

---

## 3. Maturity levels

| Level | Name | Description |
|---:|---|---|
| 1 | Unaware | Limited visibility of Trust Surface and signals |
| 2 | Reactive | Improvements occur mainly after incidents or pressure |
| 3 | Managed | Signals are actively measured, owned, and improved |
| 4 | Integrated | Trust posture is integrated into governance and operations |
| 5 | Trust leader | Trust posture is strong and transparently communicated |

---

## 4. Level descriptions

### 4.1 Level 1 - Unaware

Typical characteristics:

- no reliable inventory of domains or digital assets
- email authentication partially implemented or absent
- limited visibility of third-party SaaS dependencies
- trust signals not considered in governance discussions

Trust failures occur unexpectedly because the Trust Surface is not actively governed.

**Typical assessment pattern:** Most signals are Absent or Unknown. Evidence Freshness is predominantly Unknown. Domain Judgements are likely Deficient or Indeterminate across multiple domains.

---

### 4.2 Level 2 - Reactive

Typical characteristics:

- trust issues addressed after incidents or audit findings
- ad hoc domain and email remediation
- limited coordination between teams managing surface systems

Trust improves, but only in response to problems.

**Typical assessment pattern:** Some signals show improvement in domains that have been recently remediated. Others remain Absent or Partial. Evidence Freshness is often Stale for domains not recently reviewed. Domain Judgements are typically Mixed or Fragile, with some Deficient areas.

---

### 4.3 Level 3 - Managed

Typical characteristics:

- Trust Surface Inventory maintained and owned
- baseline Trust Signals assessed on a cadence
- clear ownership for key domains (email, DNS, identity, services)
- a Trust Hardening backlog exists and is prioritised

Organisations can identify and address weak signals before incidents occur.

**Typical assessment pattern:** Most baseline signals have been assessed with current evidence. Domain Judgements are primarily Sustained or Mixed, with a managed set of known gaps in the hardening backlog. Evidence Freshness is Current or Aging for most signals.

---

### 4.4 Level 4 - Integrated

Typical characteristics:

- Trust Surface reviews incorporated into risk management
- trust posture included in executive reporting
- vendor trust signals assessed during procurement
- change control prevents common regressions

Trust posture becomes an explicit organisational objective.

**Typical assessment pattern:** Signal coverage is broad and evidence is current across most domains. Domain Judgements are predominantly Sustained. Governance Integration is active - scorecard refreshes, decision logs, and exception handling are functioning. The Trust Hardening Plan is tracked and progressing.

---

### 4.5 Level 5 - Trust leader

Typical characteristics:

- strong signals across all Trust Surface Domains
- transparent communication of trust posture appropriate to context
- proactive governance of vendor ecosystems
- trust posture treated as a strategic asset

**Typical assessment pattern:** Signal Assessment Records are current across all domains. Evidence Freshness is predominantly Current. Domain Judgements are consistently Sustained. Trust Transparency Mechanisms are governed and accurate. The organisation proactively communicates trust posture and maintains the capability to verify it.

---

## 5. Domain-level maturity

Organisations typically reach different maturity levels across Trust Surface Domains.

This is normal. A single organisation may have strong email integrity governance but limited third-party ecosystem visibility, or mature DNS hygiene with reactive infrastructure management.

Domain-level maturity allows organisations to focus improvement effort where it is most needed.

Example:

| Domain | Maturity |
|---|---|
| Identity boundary | Level 3 |
| Domains & DNS | Level 4 |
| Email integrity | Level 2 |
| Digital services | Level 3 |
| Infrastructure & platforms | Level 2 |
| Third-party ecosystem | Level 1 |

This example shows an organisation that should prioritise its third-party ecosystem and email integrity domains in the next lifecycle cycle.

---

## 6. Relationship to TSF-MTH-1 assessment results

TSF-MTH-1 - Assessment Method produces Signal Assessment Records and Domain Judgements for each Trust Surface Domain.

The domain judgement labels used in TSF-MTH-1 (Variant A) map to maturity patterns as follows:

| Domain Judgement | Maturity implication |
|---|---|
| **Sustained** | Signals are strong and evidence is current - consistent with Level 3–5 |
| **Mixed** | Signals are uneven - some strong, some weak or stale - consistent with Level 2–3 transitioning |
| **Fragile** | Signals are present but vulnerable to regression - consistent with Level 2–3, requiring active hardening |
| **Deficient** | Key signals are absent or very weak - consistent with Level 1–2 |
| **Indeterminate** | Evidence is insufficient to judge the domain - consistent with Level 1, or any level where assessment has not been completed |

This mapping is indicative, not mechanical. A Sustained judgement in one domain does not set the organisation's overall maturity level. Maturity is assessed holistically across domains, taking into account governance capacity and the robustness of the improvement cycle.

**Maturity is a governance judgement, not an automatic computation from scores.**

An organisation with consistent Sustained judgements but no governance cadence, no ownership model, and no hardening plan is not operating at Level 4. The level reflects both the signal evidence and the organisational capability to maintain it. Assessors and governance partners should evaluate both dimensions.

---

## 7. Maturity and the Trust Surface Lifecycle

The maturity level of an organisation reflects how well it operates the Trust Surface Lifecycle.

| Maturity level | Lifecycle operating status |
|---|---|
| Level 1 | Discover has not been completed; no reliable inventory |
| Level 2 | Discover and Assess occur episodically; Harden is reactive |
| Level 3 | Discover and Assess are on a cadence; Harden is active and prioritised |
| Level 4 | Govern is functioning; lifecycle is integrated with existing governance |
| Level 5 | All five stages are operating well; Signal stage is governed and credible |

Organisations can use the maturity model to identify which lifecycle stage is the limiting factor in their current trust governance capability.

---

## 8. Implementation guidance

### 8.1 Starting out

Organisations beginning with the Digital Trust Maturity Model should:

1. Complete a first-cycle Trust Surface Inventory (Stage 1 of the lifecycle)
2. Assess baseline Trust Signals across available domains using TSF-SIG-1 and TSF-MTH-1
3. Review Domain Judgements and map them to the maturity level descriptions above
4. Use the maturity level view to prioritise which domains to address first in the Trust Hardening Plan

Starting at Level 1 or 2 is not a failure - it is the accurate baseline from which improvement is governed.

### 8.2 Setting improvement targets

Maturity improvement targets SHOULD be set by governance, not determined by assessors alone.

Targets should be:
- domain-specific (e.g. "move email integrity from Level 2 to Level 3 within two cycles")
- tied to the Trust Hardening Plan
- reviewed as part of the regular governance cadence defined in TSF-GOV-1
- reported to executive sponsors as part of trust posture reporting

Avoid setting a single whole-organisation maturity target without domain-level decomposition. Aggregate targets obscure where effort is needed.

### 8.3 Reporting maturity

Maturity level information is appropriate for:

- executive trust posture reports
- risk reporting and risk register updates
- board-level digital trust briefings
- procurement and vendor assurance conversations

When reporting maturity, organisations should include:
- domain-level breakdown (not only an aggregate level)
- the assessment date
- key Domain Judgements underlying the level
- priority hardening actions in progress

### 8.4 Using the model for benchmarking

The maturity model is designed to be used internally for improvement, not as a comparative scoring system between organisations. External benchmarking (comparing maturity levels across different organisations) is possible but should be done with care, since context, scope, and assessment method vary.

---

## 9. Non-goals

TSF-MAT-1 does not:

- define how Trust Signals are individually assessed (that is TSF-MTH-1's responsibility)
- produce a precise score or number that uniquely identifies maturity
- certify an organisation at a given maturity level
- replace cybersecurity maturity assessments
- claim that higher maturity is achievable without genuine governance investment

---

## 10. Related TrustSurface artefacts

- **TSF-DEF-1** - Trust Surface Definition
- **TSF-MOD-1** - Trust Surface Model & Domains
- **TSF-SIG-1** - Trust Signal Catalogue
- **TSF-LIF-1** - Trust Surface Lifecycle
- **TSF-MTH-1** - Assessment Method
- **TSF-GOV-1** - Governance Integration Model
- **TSF-GLO-1** - Glossary
- **TSF-07** - Digital Trust Maturity Model (visual artefact)

---

## 11. Summary statement

The Digital Trust Maturity Model provides a five-level scale - Unaware, Reactive, Managed, Integrated, Trust Leader - for understanding how effectively an organisation governs the Trust Signals emitted by its Trust Surface.

Maturity is a governance judgement informed by assessed signal patterns and lifecycle operating capability, not an automatic computation from scores. Organisations use the model to prioritise improvement, report posture to leadership, and understand where the lifecycle is the limiting factor.
