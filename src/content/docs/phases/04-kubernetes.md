---
title: 04-kubernetes
description: ""
template: ""
hero: ""
tagline:
image:
file:
actions:
  - text:
draft: false
link:
icon:
variant:
order: ""
---
## Steps

- [x] Install k3s via k3s-ansible
- [x] Get kubeconfig
- [x] Get helm
- [x] Add Longhorn
- [x] Add cert-manager
- [x] Add ArgoCD
- [x] Add Rancher
- [ ] Add open-iscsi
- [ ] Add nfs-subdir-external-provisioner
- [ ] add nfs-provisioner

### Containers to consider

- [ ] [Calibre Web Automated](https://github.com/crocodilestick/Calibre-Web-Automated#how-to-install-)
- [ ] [Shelfmark](https://github.com/calibrain/shelfmark)
### Docs

- [k3s-ansible](https://github.com/k3s-io/k3s-ansible/tree/main)
- [argocd sops](https://vieitesss.github.io/posts/ArgoCD-and-SOPS/) - but migrate to Hashicorp vault eventually
- [external-secrets-operator](https://oneuptime.com/blog/post/2026-02-26-argocd-external-secrets-operator/view)
- [external-secrets-operator Infisical](https://external-secrets.io/latest/provider/infisical/)