# Trust Signal Catalogue

The **Trust Signal Catalogue** defines the observable indicators used to assess an organisation’s digital trust posture.

Trust Signals represent measurable evidence that digital systems are:

* authentic
* well-governed
* resilient
* responsibly managed

Signals may be:

* externally observable (e.g. DNS records)
* internally verifiable (e.g. identity governance controls)

Together, these signals provide insight into how trustworthy an organisation’s digital environment appears to stakeholders.

---

# Trust Signal Structure

Each Trust Signal is defined by four attributes.

| Attribute          | Description                                       |
| ------------------ | ------------------------------------------------- |
| Signal Name        | The observable indicator                          |
| Domain             | The Trust Surface domain where the signal applies |
| Observation Method | How the signal can be observed or verified        |
| Trust Implication  | What the signal reveals about trust posture       |

Signals are evaluated using a **maturity model** described later in this document.

---

# Identity Signals

## Multi-Factor Authentication Enforcement

| Attribute          | Value                                                      |
| ------------------ | ---------------------------------------------------------- |
| Domain             | Identity                                                   |
| Observation Method | Internal verification of authentication policies           |
| Trust Implication  | Reduces risk of account compromise and unauthorised access |

Strong MFA enforcement is one of the most important identity trust signals.

---

## Privileged Access Governance

| Attribute          | Value                                                          |
| ------------------ | -------------------------------------------------------------- |
| Domain             | Identity                                                       |
| Observation Method | Internal review of privileged access policies                  |
| Trust Implication  | Ensures administrative privileges are controlled and monitored |

Weak privileged access controls often lead to major security incidents.

---

## Identity Lifecycle Management

| Attribute          | Value                                           |
| ------------------ | ----------------------------------------------- |
| Domain             | Identity                                        |
| Observation Method | Internal policy and operational review          |
| Trust Implication  | Prevents orphaned accounts and unmanaged access |

Organisations must demonstrate that identities are properly provisioned and removed.

---

# Domain & DNS Signals

## Domain Ownership Integrity

| Attribute          | Value                                             |
| ------------------ | ------------------------------------------------- |
| Domain             | Domains & DNS                                     |
| Observation Method | Domain registry and ownership verification        |
| Trust Implication  | Ensures domain ownership is secure and controlled |

Weak domain governance enables impersonation and fraud.

---

## DNS Integrity

| Attribute          | Value                                                       |
| ------------------ | ----------------------------------------------------------- |
| Domain             | Domains & DNS                                               |
| Observation Method | DNS configuration analysis                                  |
| Trust Implication  | Indicates that domain resolution infrastructure is reliable |

DNS misconfiguration can undermine service reliability and trust.

---

## DNSSEC Adoption

| Attribute          | Value                                     |
| ------------------ | ----------------------------------------- |
| Domain             | Domains & DNS                             |
| Observation Method | DNS record inspection                     |
| Trust Implication  | Protects domain resolution from tampering |

DNSSEC adoption strengthens the integrity of domain infrastructure.

---

# Email Integrity Signals

## SPF Policy Integrity

| Attribute          | Value                                                  |
| ------------------ | ------------------------------------------------------ |
| Domain             | Email Integrity                                        |
| Observation Method | DNS SPF record inspection                              |
| Trust Implication  | Indicates legitimate email sending sources are defined |

Weak SPF policies enable spoofing and impersonation.

---

## DKIM Signing

| Attribute          | Value                                           |
| ------------------ | ----------------------------------------------- |
| Domain             | Email Integrity                                 |
| Observation Method | DKIM signature verification                     |
| Trust Implication  | Demonstrates message authenticity and integrity |

DKIM helps recipients verify the origin of email communications.

---

## DMARC Enforcement

| Attribute          | Value                                                        |
| ------------------ | ------------------------------------------------------------ |
| Domain             | Email Integrity                                              |
| Observation Method | DMARC DNS record inspection                                  |
| Trust Implication  | Prevents unauthorised use of organisational domains in email |

DMARC enforcement is one of the strongest trust signals in email systems.

---

## Mail Transport Security

| Attribute          | Value                                                   |
| ------------------ | ------------------------------------------------------- |
| Domain             | Email Integrity                                         |
| Observation Method | SMTP TLS capability analysis                            |
| Trust Implication  | Indicates email communications are transmitted securely |

Secure transport protects email communications from interception.

---

# Digital Service Signals

## HTTPS Enforcement

| Attribute          | Value                                                           |
| ------------------ | --------------------------------------------------------------- |
| Domain             | Digital Services                                                |
| Observation Method | Web service inspection                                          |
| Trust Implication  | Demonstrates encrypted communication between users and services |

HTTPS is a foundational trust signal for modern web services.

---

## Certificate Hygiene

| Attribute          | Value                                                  |
| ------------------ | ------------------------------------------------------ |
| Domain             | Digital Services                                       |
| Observation Method | TLS certificate inspection                             |
| Trust Implication  | Indicates responsible certificate lifecycle management |

Expired or misconfigured certificates reduce trust in digital services.

---

## Security Headers

| Attribute          | Value                                                  |
| ------------------ | ------------------------------------------------------ |
| Domain             | Digital Services                                       |
| Observation Method | HTTP header inspection                                 |
| Trust Implication  | Demonstrates attention to secure service configuration |

Security headers reduce risk of common web-based attacks.

---

## Service Reliability

| Attribute          | Value                                                 |
| ------------------ | ----------------------------------------------------- |
| Domain             | Digital Services                                      |
| Observation Method | Monitoring and uptime reporting                       |
| Trust Implication  | Indicates operational reliability of digital services |

Frequent outages erode stakeholder confidence.

---

# Infrastructure Signals

## Patch Hygiene

| Attribute          | Value                                                |
| ------------------ | ---------------------------------------------------- |
| Domain             | Infrastructure & Platforms                           |
| Observation Method | Internal patch management review                     |
| Trust Implication  | Demonstrates that systems are maintained and updated |

Unpatched infrastructure increases risk of compromise.

---

## Resilience Readiness

| Attribute          | Value                                              |
| ------------------ | -------------------------------------------------- |
| Domain             | Infrastructure & Platforms                         |
| Observation Method | Disaster recovery and backup capability review     |
| Trust Implication  | Indicates preparedness for operational disruptions |

Resilient systems support continuity and trust.

---

## Network Exposure

| Attribute          | Value                                       |
| ------------------ | ------------------------------------------- |
| Domain             | Infrastructure & Platforms                  |
| Observation Method | External network scanning                   |
| Trust Implication  | Identifies unnecessary exposure of services |

Excessive network exposure increases attack risk.

---

# Third-Party Trust Signals

## Vendor Security Attestation

| Attribute          | Value                                 |
| ------------------ | ------------------------------------- |
| Domain             | Third-Party Ecosystem                 |
| Observation Method | Vendor documentation review           |
| Trust Implication  | Demonstrates vendor security maturity |

Vendor failures often become organisational trust failures.

---

## Vendor Dependency Awareness

| Attribute          | Value                                                                 |
| ------------------ | --------------------------------------------------------------------- |
| Domain             | Third-Party Ecosystem                                                 |
| Observation Method | Vendor inventory review                                               |
| Trust Implication  | Indicates whether organisations understand their digital dependencies |

Lack of vendor visibility increases operational risk.

---

## Data Handling Transparency

| Attribute          | Value                                              |
| ------------------ | -------------------------------------------------- |
| Domain             | Third-Party Ecosystem                              |
| Observation Method | Privacy and compliance documentation review        |
| Trust Implication  | Demonstrates responsible data governance practices |

Transparent data practices strengthen stakeholder confidence.

---

# Trust Signal Maturity Model

Each signal can be assessed using a simple maturity scale.

| Level   | Description             |
| ------- | ----------------------- |
| Level 0 | Unknown or not assessed |
| Level 1 | Weak or absent          |
| Level 2 | Basic implementation    |
| Level 3 | Strong implementation   |
| Level 4 | Leading practice        |

This model enables organisations to quantify trust posture across domains.

---

# Example Trust Signal Scorecard

An organisation’s trust posture may be summarised as follows.

| Domain           | Maturity |
| ---------------- | -------- |
| Identity         | Level 3  |
| Domains & DNS    | Level 4  |
| Email Integrity  | Level 2  |
| Digital Services | Level 3  |
| Infrastructure   | Level 2  |
| Third-Party      | Level 1  |

This scorecard provides a simple way for executives to understand digital trust risk.

---

# Status of This Document

This catalogue forms part of the **Trust Surface Framework draft**, published for consultation and discussion.

The signal set may evolve as organisations apply the framework and identify additional indicators.