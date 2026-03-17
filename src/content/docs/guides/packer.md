---
title: Packer
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
## Reference

- [Packer on Proxmox Tutorial](https://devlog.brittg.com/posts/homelab-part-1-proxmox/)
- [HashiCorp Boot Commands](https://developer.hashicorp.com/packer/docs/builders/virtualbox/iso#boot-command)
## Snippets

### Generating a `$6$` hash

```bash

openssl passwd -6 'PASSWORD_HERE'

```