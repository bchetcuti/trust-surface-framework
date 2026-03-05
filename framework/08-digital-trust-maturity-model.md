# 08 — Digital Trust Maturity Model

## Purpose
The Digital Trust Maturity Model provides a lightweight way to express how well an organisation governs its trust surface.

It is designed to complement conventional security maturity approaches by focusing on **observable trust signals** and the governance mechanisms that keep them stable.

## Levels
| Level | Name | What it means |
|---:|---|---|
| 1 | **Unmanaged** | signals are accidental; ownership unclear |
| 2 | **Reactive** | issues fixed after incidents or pressure |
| 3 | **Managed** | signals are maintained; owners exist |
| 4 | **Governed** | trust posture is integrated into governance and change |
| 5 | **Assured** | posture is continuously evidenced and, where appropriate, transparently signalled |

## Level definitions
### Level 1 — Unmanaged
- no reliable inventory of trust‑critical assets
- inconsistent or missing signals (e.g., email auth, TLS hygiene)
- trust failures surprise the organisation

### Level 2 — Reactive
- partial controls exist, often implemented after an incident
- evidence is hard to assemble quickly
- changes routinely create regressions

### Level 3 — Managed
- core inventories exist (domains, email, key services, key vendors)
- baseline trust signals are measured and improved
- ownership is defined for trust‑critical systems

### Level 4 — Governed
- trust posture is a governance artefact (cadence, reporting, decision rights)
- vendor onboarding includes trust surface considerations
- change processes protect trust‑critical assets

### Level 5 — Assured
- trust posture is continuously evidenced
- regressions are detected quickly and treated as operational events
- external signalling (status/policy/assurance) is intentional and consistent

## Domain-level maturity
Maturity can be assessed per Trust Surface domain.

Example:

| Domain | Maturity |
|---|---|
| Identity boundary | 3 |
| Domains & DNS | 4 |
| Email integrity | 2 |
| Digital services | 3 |
| Infrastructure & platforms | 3 |
| Third‑party ecosystem | 2 |

## Using the model with the signal catalogue
A practical method:

1. Score each baseline signal (present, enforced, evidenced).
2. Aggregate by domain.
3. Use the maturity levels to describe what the score means operationally.
4. Track change over time as part of the TrustSurface operating rhythm.

The model is intentionally simple: it exists to make progress visible and governable.
