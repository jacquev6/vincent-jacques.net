---
tags:
  - web
---
My [infrastructure] repository holds my... infrastructure, as code.

It uses [Terraform] to maintain my DNS records at [Gandi],
and point them at a [Kubernetes]+[Helm] cluster on [Google Cloud Platform].
(I left [Amazon Web Services] when I adopted Kubernetes because of the GKE pricing).

Private credential files are kept securely in the public git repository using [git-crypt].

I use a single IP address for all my (sub-)domains and use [HAProxy] to dispatch requests accordingly.
