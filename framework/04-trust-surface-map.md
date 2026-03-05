# 04 — Trust Surface Domains

TrustSurface models the trust surface as a small set of domains.
The purpose is to give boards, executives, and practitioners a shared vocabulary that supports evidence-based governance.

## Domain set
| Domain | What it covers | Typical signals |
|---|---|---|
| **Identity boundary** | how users, admins, and services prove who they are | MFA posture, federation integrity, session controls, admin separation |
| **Domains & DNS** | ownership, routing, integrity, and availability of public domains | DNSSEC, CAA, authoritative NS hygiene, subdomain sprawl |
| **Email integrity** | authenticity and integrity of email that claims your domain | SPF, DKIM, DMARC alignment and policy, reporting, MTA‑STS |
| **Digital services** | websites, portals, APIs, and the public application edge | TLS posture, headers, availability, API exposure, change control |
| **Infrastructure & platforms** | hosting and platforms that underpin the edge | certificate automation, logging/monitoring, resilience, platform governance |
| **Third‑party ecosystem** | vendors and SaaS platforms where trust is delegated | vendor inventory, assurance evidence, integration boundaries, offboarding |

## How to use the domains
1. **Inventory** what exists in each domain.
2. **Attach evidence** (trust signals) for what is claimed.
3. **Identify gaps** where the signal does not match the intended posture.
4. **Prioritise** remediation based on likelihood × trust impact.
5. **Assign ownership** and maintain through a repeatable rhythm.

## Notes
- The domain set is intentionally small.
- The domain set is not a taxonomy of all IT assets.
- The domain set is a governance tool: it exists to make trust posture discussable, measurable, and actionable.
