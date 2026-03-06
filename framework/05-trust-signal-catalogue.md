# Trust Signal Catalogue

The Trust Signal Catalogue defines a baseline set of **observable indicators** used to assess Trust Posture at the Trust Surface.

A Trust Signal is evidence that a system is:

- authentic (harder to impersonate)
- well governed (owned, controlled, maintained)
- resilient (behaves predictably under change and stress)
- accountable (can be explained and evidenced)

Signals may be publicly observable (e.g. DNS records) or internally verifiable (e.g. privileged access governance), but they should always be demonstrable.

(Definitions align to TrustSurface Glossary v1.0.)

---

## Signal record format

Each signal should be defined using the same structure:

- **ID** — stable identifier (e.g. EML‑03)
- **Domain** — Trust Surface domain
- **Signal** — what is being measured
- **Evidence** — what is acceptable proof
- **Trust implication** — why the signal matters

## Catalogue (baseline set)

### Identity boundary (IDN)

| ID | Signal | Evidence | Trust implication |
|---|---|---|---|
| IDN‑01 | MFA for privileged accounts | enforcement policy + audit evidence | reduces takeover and lateral movement |
| IDN‑02 | Strong authentication for workforce | MFA coverage %; exceptions documented | reduces common compromise paths |
| IDN‑03 | Privileged access governance | role separation; approval workflow; monitoring | proves admin access is controlled |
| IDN‑04 | Joiner/mover/leaver lifecycle | deprovisioning SLA + sampling evidence | prevents orphaned access |
| IDN‑05 | External federation governance | SSO inventory; trust relationships reviewed | reduces identity boundary drift |

### Domains & DNS (DNS)

| ID | Signal | Evidence | Trust implication |
|---|---|---|---|
| DNS‑01 | Registrar controls | registrar lock; MFA; recovery controls | prevents domain hijack |
| DNS‑02 | Authoritative DNS hygiene | resilient NS; change control; no stale records | reduces outages and routing abuse |
| DNS‑03 | DNSSEC on critical domains | DS records present and valid | strengthens resolution integrity |
| DNS‑04 | CAA records | CAA restricting certificate issuance | reduces mis‑issuance risk |
| DNS‑05 | Subdomain inventory | current inventory + ownership mapping | reduces shadow surface |

### Email integrity (EML)

| ID | Signal | Evidence | Trust implication |
|---|---|---|---|
| EML‑01 | SPF defined and constrained | SPF present; no unsafe wildcards; aligned sending | reduces spoofing paths |
| EML‑02 | DKIM signing for major streams | DKIM selectors deployed; signing verified | enables domain responsibility |
| EML‑03 | DMARC alignment and policy | DMARC record; alignment; policy; reporting | reduces impersonation and improves reporting |
| EML‑04 | Transport integrity (where applicable) | controls configured and validated | reduces downgrade and interception risk |
| EML‑05 | Sender change control | approval path + inventory updated | prevents “shadow senders” |

### Digital services (WEB)

| ID | Signal | Evidence | Trust implication |
|---|---|---|---|
| WEB‑01 | HTTPS posture | valid cert; modern TLS; automation | prevents trivial interception |
| WEB‑02 | Baseline security headers | CSP/HSTS/frame protection set | reduces common browser attack classes |
| WEB‑03 | Availability signalling | status page or equivalent comms | reduces ambiguity during outages |
| WEB‑04 | Vulnerability contact | security.txt or published contact process | enables responsible disclosure |
| WEB‑05 | API edge controls (where relevant) | authn/z; rate limiting; logging | reduces abuse of exposed APIs |

### Infrastructure & platforms (INF)

| ID | Signal | Evidence | Trust implication |
|---|---|---|---|
| INF‑01 | Logging and monitoring coverage | logs for critical services; alerting | supports detection and assurance |
| INF‑02 | Backup and recovery evidence | backups tested; RTO/RPO defined | reduces impact of failure |
| INF‑03 | Change control for trust‑critical assets | approval + audit trail for DNS/IdP/email | prevents accidental trust regressions |
| INF‑04 | Secrets and key management | vaulting; rotation; access controls | reduces credential leakage risk |

### Third‑party ecosystem (TP)

| ID | Signal | Evidence | Trust implication |
|---|---|---|---|
| TP‑01 | Vendor inventory and ownership | current list; service owners | prevents unmanaged dependency risk |
| TP‑02 | Assurance evidence captured | SOC2/ISO attestations or risk review | supports procurement trust decisions |
| TP‑03 | Integration boundary control | least privilege; scoped tokens; reviews | reduces blast radius |
| TP‑04 | Offboarding and exit controls | access revocation; data handling documented | prevents persistent third‑party exposure |

---

## Relationship to the maturity model

Signals can be assessed using the Digital Trust Maturity Model.
The catalogue is intentionally a baseline; organisations can extend it with context‑specific signals.
