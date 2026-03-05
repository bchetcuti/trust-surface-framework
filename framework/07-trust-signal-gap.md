# 07 — Trust Signal Gap

## Definition
**Trust signal gap**

> The difference between the posture an organisation intends to have and the posture it **signals externally**, as evidenced by observable trust signals.

This gap explains why organisations with mature internal security programs can still be easy to impersonate, difficult to validate, or operationally brittle at the digital edge.

## Typical causes
Trust signal gaps are rarely caused by a single “missing control”.
They emerge from structural patterns:

- **Fragmented ownership** (domains/email/identity owned across functions)
- **Configuration drift** (changes accumulate without a trust review)
- **Tool overconfidence** (strong internal telemetry, weak external posture)
- **Third‑party delegation** (trust outsourced by accident)
- **Evidence debt** (controls exist but cannot be evidenced quickly)

## Examples
| Intended posture | Observed signal | Gap outcome |
|---|---|---|
| “No one can spoof our brand” | DMARC absent or permissive | successful impersonation attempts |
| “We control our public domains” | registrar lock missing; stale records | domain hijack risk and confusion |
| “Vendors are governed” | no inventory; no assurance evidence | procurement and incident response chaos |

## Why the gap matters
Trust signal gaps:

- increase incident likelihood (because attackers exploit the edge)
- increase the cost of assurance (because evidence is hard to assemble)
- erode stakeholder confidence (because failures are visible)

## Closing the gap
Closing a trust signal gap is operational work, not branding work.
The TrustSurface operating rhythm does this deliberately:

1. **Discover** — inventory the surface and ownership.
2. **Assess** — score signals with evidence.
3. **Harden** — prioritise and remediate gaps.
4. **Govern** — prevent re‑emergence through controls and decision rights.
5. **Signal** — make trust posture verifiable where appropriate.

The key move is simple: treat external trust signals as a governable surface, not a side effect.
