# TrustSurface Glossary v1.0

**Identifier:** TSF-GLO-1  
**Status:** Stable vocabulary (normative for TrustSurface Framework v0.3+)  
**Version:** 1.0  
**Author:** Bryan Chetcuti  
**Year:** 2026

---

This glossary stabilises the core terms used throughout TrustSurface.

If a definition changes, the glossary version MUST be incremented.

## Trust Surface

**Definition**

> The collection of digital systems and observable signals through which stakeholders experience and judge the trustworthiness of an organisation’s digital presence.

**Notes**

- “Trust surface” is broader than “attack surface”. It includes the systems that shape trust perception (and therefore reputation and adoption), not only technical entry points.
- A trust surface is experienced at the digital edge: domains and DNS, email, public-facing services, identity boundaries, and delegated trust through vendors.

## Trust Signal

**Definition**

> An observable indicator (evidence) that describes the trust posture of a Trust Surface component.

**Notes**

- Signals can be externally observable (e.g. DNS records) or internally verifiable (e.g. identity governance), but must be demonstrable.
- A signal is only useful if it can be evidenced, refreshed, and governed.

## Trust Posture

**Definition**

> The current, evidence-based state of an organisation’s Trust Surface as represented by the strength, consistency, and coverage of its Trust Signals.

**Notes**

- Trust posture answers: *“How trustworthy do our digital systems appear to stakeholders, based on evidence?”*
- Trust posture complements (but does not replace) security posture. Security posture focuses on protection from attack; trust posture focuses on the reliability and credibility of external-facing digital interactions.

## Trust Signal Gap

**Definition**

> The difference between the trust posture an organisation intends (or believes it has) and the posture actually signalled by observable evidence.

**Notes**

- The gap is most visible when strong internal controls coexist with weak external signals (e.g. mature security program, but spoofable email or unmanaged domains).
- Closing the gap is a governance task: inventory, evidence, ownership, and change control.

---

## Version history

- **v1.0 (2026)** — Initial stabilised glossary.
