# TSF-MTH-1 - Assessment Method

**Status:** Public draft  
**Control:** Guidance  
**Framework version:** v1.1 public draft  
**Identifier:** TSF-MTH-1  
**Owner:** TrustSurface Framework  
**Supports:** TSF-SIG-1, TSF-LIF-1, TSF-GOV-1, TSF-MAT-1  
**Vocabulary baseline:** TSF-GLO-1  

---

## 1. Purpose

This document defines the method used to assess Trust Signals and produce a Trust Signal Scorecard under the TrustSurface Framework.

It exists to make trust posture assessment:

- repeatable
- evidence-based
- comparable over time
- suitable for governance use
- resistant to unsupported posture claims

TSF-MTH-1 provides the minimum method required to move from Trust Surface inventory to evidence-backed posture assessment.

---

## 2. Scope

This method applies to assessment of Trust Signals across all Trust Surface domains, including:

- identity
- domains and DNS
- email integrity
- digital services
- infrastructure and platforms
- third-party ecosystem

It covers:

- signal observation
- evidence collection and validation
- signal scoring
- handling of unknown, stale, or partial evidence
- domain-level summarisation
- scorecard production
- refresh and review expectations

It does not replace technical testing standards, audit methodologies, penetration testing, or formal assurance programs.

---

## 3. Method position within TrustSurface

TSF-MTH-1 is the method used during the **Assess** stage of the Trust Surface Lifecycle.

It links:

- **TSF-SIG-1** by providing a repeatable way to assess Trust Signals
- **TSF-GOV-1** by producing evidence suitable for governance review and decision-making
- **TSF-MAT-1** by providing a basis for domain-level maturity judgement

Without a defined assessment method, scorecards become inconsistent and posture claims become difficult to govern.

---

## 4. Assessment objectives

An assessment performed using TSF-MTH-1 SHOULD enable an organisation to answer the following questions:

1. What Trust Signals were assessed?
2. What evidence supports each assessment?
3. How current is that evidence?
4. Which signals are strong, weak, unknown, or not applicable?
5. Where are the most material trust posture gaps?
6. Which findings require hardening, governance attention, or exception handling?

---

## 5. Assessment unit

The fundamental unit of assessment is the **signal assessment record**.

Each signal assessment record SHALL contain, at minimum:

- signal identifier
- signal name
- Trust Surface domain
- assessment target
- assessment date
- assessor
- evidence summary
- evidence source type
- evidence freshness
- assessment result
- confidence level
- notes on limitations, sampling, or ambiguity

A Trust Signal Scorecard is the aggregation of multiple signal assessment records.

---

## 6. Assessment targets

Signals are assessed against a defined target.

A target may be:

- an organisational domain
- a service
- a platform
- a business unit
- a vendor dependency
- a named public-facing asset such as a domain, website, or email environment

The target SHALL be explicit.

A score without a clearly defined target is not valid for comparison.

---

## 7. Evidence model

### 7.1 Evidence types

Evidence used in TSF-MTH-1 may be one or more of the following:

1. **Observed external evidence**  
   Publicly observable indicators such as DNS records, TLS posture, public service behaviour, status signalling, and certificate data.

2. **Observed internal evidence**  
   System configuration data, platform settings, audit logs, identity policy configuration, or operational dashboards.

3. **Documented governance evidence**  
   Policies, decision records, vendor documentation, onboarding records, change approvals, or ownership assignments.

4. **Sampled operational evidence**  
   Sample results from tickets, incidents, restore tests, access reviews, lifecycle records, or remediation checks.

### 7.2 Evidence preference

Where possible, assessments SHOULD prefer:

1. direct observation
2. current system evidence
3. attributable operational records
4. documented statements or attestations

Unverifiable assurance language SHOULD NOT be treated as strong evidence.

---

## 8. Evidence sufficiency

A signal SHOULD only be assessed as strong when the evidence is both relevant and sufficiently current.

Evidence sufficiency is determined by five tests.

### 8.1 Relevance
Does the evidence directly support the signal being assessed?

### 8.2 Traceability
Can the evidence source be identified and linked?

### 8.3 Freshness
Is the evidence recent enough for the assessed context?

### 8.4 Specificity
Does the evidence apply to the target being assessed, rather than a generic organisational claim?

### 8.5 Completeness
Is there enough evidence to support the result without major ambiguity?

If two or more of these tests fail, the signal SHOULD be scored as unknown, weak, or partial rather than strong.

---

## 9. Evidence freshness model

Evidence freshness SHALL be recorded using one of the following states:

- **Current** - evidence is within the accepted review window for the target and signal type
- **Aging** - evidence is still usable but nearing the end of its acceptable review window
- **Stale** - evidence is outdated and no longer sufficient for a strong claim
- **Unknown** - freshness cannot be determined

Default review windows SHOULD be set by the organisation according to signal volatility.

Recommended baseline:

| Signal type | Suggested review window |
|---|---|
| High-change signals | 30 days |
| Medium-change signals | 90 days |
| Low-change structural signals | 180 days |
| Vendor documentation / attestation | aligned to renewal or annual cycle |

These are defaults, not absolutes.

High-exposure environments MAY require shorter windows.

---

## 10. Assessment result states

Each signal assessment SHALL use one of the following result states.

### 10.1 Strong
Evidence indicates the signal is implemented, current, and supportable.

### 10.2 Partial
Evidence indicates the signal is present but incomplete, inconsistent, weakly governed, or not uniformly applied.

### 10.3 Weak
Evidence indicates the signal is absent, materially deficient, or unreliable.

### 10.4 Unknown
Available evidence is insufficient to make a supportable judgement.

### 10.5 Not applicable
The signal does not apply to the target or assessed context.

These states are preferred for executive and governance readability.

---

## 11. Numeric scoring model

For scorecard comparison and summarisation, result states MAY be mapped to a simple numeric model.

| Result state | Numeric score |
|---|---:|
| Strong | 3 |
| Partial | 2 |
| Weak | 1 |
| Unknown | 0 |
| Not applicable | excluded |

This numeric model is an aid to summarisation.

It SHALL NOT replace the underlying evidence record.

---

## 12. Confidence model

Every signal assessment SHALL carry a confidence rating.

### 12.1 High confidence
Evidence is direct, attributable, current, and sufficiently complete.

### 12.2 Medium confidence
Evidence is adequate but limited by sampling, partial visibility, tool constraints, or moderate freshness concerns.

### 12.3 Low confidence
Evidence is sparse, indirect, stale, or materially constrained.

A strong result SHOULD NOT be reported with low confidence without an explicit note.

---

## 13. Handling unknown and partial evidence

Unknown is a valid assessment outcome.

It SHALL NOT be treated as equivalent to strong or partial.

Unknown exists to prevent unsupported certainty.

A signal SHOULD be recorded as unknown when:

- evidence cannot be obtained
- ownership is unclear
- data is stale or contradictory
- the target boundary is not sufficiently defined
- only generic assurance language is available

Partial exists to represent signals that are present but not reliable enough to count as strong.

A signal SHOULD be recorded as partial when:

- implementation exists in some but not all relevant areas
- evidence is current for only part of the target
- configuration is present but not enforced
- ownership exists but review discipline is inconsistent

---

## 14. Sampling rules

Not every signal requires exhaustive review.

TSF-MTH-1 allows sampling where full validation is impractical, provided the sampling basis is recorded.

Where sampling is used, the assessment record SHOULD state:

- sample type
- sample size
- selection basis
- limitations of inference

Signals based on sampled evidence SHOULD NOT be reported as high-confidence strong unless sampling coverage is clearly sufficient.

---

## 15. Contradictory evidence

Where evidence conflicts, the assessor SHALL:

1. record the conflict
2. prefer direct and current evidence over general or historical claims
3. lower confidence where ambiguity remains
4. avoid assigning a strong result unless the conflict is resolved

Contradictory evidence is itself a governance-relevant finding.

---

## 16. Domain-level summarisation

Signal assessments MAY be summarised at domain level.

A domain summary SHOULD include:

- number of signals assessed
- number strong / partial / weak / unknown / not applicable
- notable coverage gaps
- key risks or posture gaps
- overall domain judgement

### 16.1 Domain judgement model

A domain MAY be summarised using one of the following judgements:

- Sustained
- Mixed
- Fragile
- Deficient
- Indeterminate

These labels are intentionally distinct from the Digital Trust Maturity Model.
They describe the current assessed condition of a domain, not the organisation's broader maturity state.

This judgement should be based on:

- signal distribution
- evidence confidence
- criticality of weak signals
- existence of material unknowns
- whether key control signals are absent

A domain with one severe weak signal MAY justify a lower domain judgement even if other signals are strong.

---

## 17. Relationship to maturity model

TSF-MTH-1 supports TSF-MAT-1 but does not automatically compute maturity.

Maturity is a governance judgement informed by:

- signal strength
- signal coverage
- review cadence
- ownership clarity
- evidence quality
- governance integration
- transparency discipline

Suggested interpretation:

| Domain judgement pattern | Likely maturity implication |
|---|---|
| Indeterminate or Deficient | Level 1–2 |
| Fragile with reactive improvement | Level 2 |
| Mixed with active ownership | Level 3 |
| Sustained with governance integration | Level 4 |
| Sustained plus transparency and strategic governance | Level 5 |

This table is indicative, not deterministic.

---

## 18. Materiality and critical signals

Not all signals carry equal weight.

An organisation using TSF-MTH-1 SHOULD identify critical signals whose weakness materially affects trust posture.

Examples may include:

- DMARC enforcement for a primary email domain
- accountable ownership of a primary organisational domain
- identity governance for privileged access
- public service legitimacy and reliability signalling
- major supplier trust dependencies

A critical weak signal SHOULD be escalated even if the overall score distribution appears acceptable.

---

## 19. Minimum scorecard structure

A Trust Signal Scorecard produced under TSF-MTH-1 SHOULD include, at minimum:

1. scope and target
2. assessment date
3. domains assessed
4. signal result summary
5. evidence freshness summary
6. confidence summary
7. key posture gaps
8. hardening priorities
9. governance escalations or accepted exceptions
10. review or refresh date

---

## 20. Minimum assessment workflow

The minimum assessment workflow is:

### 20.1 Define scope
Identify target, domains, and signal set.

### 20.2 Gather evidence
Collect direct, attributable evidence and record source types.

### 20.3 Assess each signal
Assign result state, confidence, freshness, and notes.

### 20.4 Summarise by domain
Identify critical weak or unknown signals.

### 20.5 Produce scorecard
Create a governance-ready summary with evidence linkage.

### 20.6 Trigger action
Raise hardening items, governance exceptions, or escalation items where required.

---

## 21. Required outputs

An assessment run using TSF-MTH-1 SHOULD produce the following outputs:

- signal assessment records
- Trust Signal Scorecard
- evidence register or evidence links
- posture summary by domain
- hardening candidates
- governance exceptions or escalation items where relevant

These outputs SHOULD feed TSF-GOV-1 artefacts and decisions.

---

## 22. Conformance expectations

An organisation claiming that a scorecard was produced using TSF-MTH-1 SHALL be able to show:

1. defined target and scope
2. identifiable signal set
3. assessment records for assessed signals
4. evidence linkage or evidence register
5. result state and confidence for each assessed signal
6. treatment of unknown and not applicable signals
7. date of assessment and review date

Where these are absent, the output SHOULD be described as a heuristic review, not a TSF-MTH-1 scorecard.

---

## 23. Method constraints and non-goals

TSF-MTH-1 does not:

- claim to quantify trust precisely
- replace technical audit or penetration testing
- guarantee comparability across organisations without consistent scope
- treat every signal as equally material
- require exhaustive assessment of every possible signal at all times

The purpose of the method is disciplined judgement, not false precision.

---

## 24. Implementation notes

Organisations may implement TSF-MTH-1 using:

- spreadsheets
- GRC tooling
- service review packs
- architecture review artefacts
- internal dashboards
- lightweight evidence registers

The tool is less important than the discipline of evidence, scope, and refresh.

---

## 25. Related TrustSurface artefacts

- TSF-SIG-1 - Trust Signal Catalogue
- TSF-LIF-1 - Trust Surface Lifecycle
- TSF-GOV-1 - Governance Integration Model
- TSF-MAT-1 - Digital Trust Maturity Model
- TSF-ADP-1 - Adoption Guidance
- TSF-BRD-1 - Board Questions

---

## 26. Planned companion artefact

A standard **signal assessment template** will be published as a companion artefact in a future release, registered in TSF-ART-1.

> **Resolved in v1.1 public draft:** Domain judgement labels, critical signal definitions, evidence freshness windows, and the assessment/guidance boundary are retained in their current form.

---

## 27. Summary statement

Trust posture should not be declared by impression.

It should be assessed through explicit scope, observable signals, current evidence, honest handling of unknowns, and scorecards that can support governance decisions over time.

