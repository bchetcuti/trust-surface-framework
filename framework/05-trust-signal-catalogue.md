# Trust Signal Catalogue (v0.1)

The Trust Signal Catalogue defines the observable indicators used to assess an organisation’s digital trust posture.

Signals may be externally observable (e.g. DNS records) or internally verifiable (e.g. privileged access governance).

## Signal structure

| Attribute | Description |
|---|---|
| Signal Name | The observable indicator |
| Domain | Trust Surface domain |
| Observation Method | How it can be observed/verified |
| Trust Implication | What it reveals about trust posture |

## Identity

### Multi-factor authentication enforcement
- **Domain:** Identity
- **Observation:** internal verification of policies and coverage
- **Implication:** reduces account compromise risk

### Privileged access governance
- **Domain:** Identity
- **Observation:** access control, monitoring, and periodic review
- **Implication:** prevents unmanaged admin access

### Identity lifecycle management
- **Domain:** Identity
- **Observation:** joiner/mover/leaver controls and audit trails
- **Implication:** reduces orphaned accounts and access drift

## Domains & DNS

### Domain ownership integrity
- **Domain:** Domains & DNS
- **Observation:** registrar controls, locks, expiry monitoring
- **Implication:** reduces takeover/impersonation risk

### DNS integrity
- **Domain:** Domains & DNS
- **Observation:** authoritative DNS configuration review
- **Implication:** reduces tampering and misrouting risk

### DNSSEC adoption
- **Domain:** Domains & DNS
- **Observation:** DNSSEC status
- **Implication:** strengthens DNS authenticity where supported

## Email Integrity

### SPF policy integrity
- **Domain:** Email Integrity
- **Observation:** SPF record validity and sending sources
- **Implication:** reduces spoofing via unauthorised senders

### DKIM signing
- **Domain:** Email Integrity
- **Observation:** DKIM selectors/signatures validation
- **Implication:** improves message authenticity and integrity

### DMARC enforcement
- **Domain:** Email Integrity
- **Observation:** DMARC policy and reporting
- **Implication:** prevents unauthorised use of domain in email

### Mail transport security
- **Domain:** Email Integrity
- **Observation:** SMTP TLS capability / policy where applicable
- **Implication:** improves confidentiality and integrity in transit

## Digital Services

### HTTPS enforcement
- **Domain:** Digital Services
- **Observation:** HTTPS/TLS presence and redirects
- **Implication:** protects users and improves trust signals

### Certificate hygiene
- **Domain:** Digital Services
- **Observation:** validity, automation, configuration
- **Implication:** avoids visible trust failures (expired/misconfigured certs)

### Security headers baseline
- **Domain:** Digital Services
- **Observation:** HSTS/CSP/frame/referrer policies (as appropriate)
- **Implication:** reduces common browser-facing risks

### Service reliability
- **Domain:** Digital Services
- **Observation:** monitoring and incident visibility
- **Implication:** trust is reinforced by consistency and transparency

## Infrastructure & Platforms

### Patch hygiene
- **Domain:** Infrastructure & Platforms
- **Observation:** patching cadence and coverage
- **Implication:** reduces exploitability and operational risk

### Resilience readiness
- **Domain:** Infrastructure & Platforms
- **Observation:** backups, recovery testing, failover readiness
- **Implication:** reduces outage impact and improves confidence

### Network exposure discipline
- **Domain:** Infrastructure & Platforms
- **Observation:** external exposure review (ports/services)
- **Implication:** reduces unnecessary risk at the edge

## Third-Party Ecosystem

### Vendor security attestation
- **Domain:** Third-Party Ecosystem
- **Observation:** SOC2/ISO statements, disclosures, security posture evidence
- **Implication:** strengthens confidence in critical vendors

### Vendor dependency awareness
- **Domain:** Third-Party Ecosystem
- **Observation:** inventory of critical vendors/integrations
- **Implication:** reduces “unknown dependency” risk

### Data handling transparency
- **Domain:** Third-Party Ecosystem
- **Observation:** privacy/data processing clarity and controls
- **Implication:** reduces reputational and regulatory exposure

## Maturity model

Signals should be assessed using a simple scale:

| Level | Description |
|---|---|
| 0 | Unknown / not assessed |
| 1 | Weak or absent |
| 2 | Basic implementation |
| 3 | Strong implementation |
| 4 | Leading practice |
