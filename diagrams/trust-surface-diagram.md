# Trust Surface Diagram (TSF)

```mermaid
flowchart TB
  O((Organisation))

  I[Identity]
  D[Domains & DNS]
  E[Email Integrity]
  S[Digital Services]
  P[Infrastructure & Platforms]
  T[Third-Party Ecosystem]

  O --- I
  O --- D
  O --- E
  O --- S
  O --- P
  O --- T

  I --> X[Trust Signals]
  D --> X
  E --> X
  S --> X
  P --> X
  T --> X

  X --> Z[Stakeholder Trust]
```
