---
title: terraform production rollout {{ sha }} on {{ date | date('DD-MM-YYYY') }}
assignees: Waschnick
labels: deployment, terraform
---

# Rollout reason:

*Pusher: @{{ actor }}*

> {{ env.INPUT_COMMENT }}

# Terraform Plan (PRODUCTION) `{{ env.PLAN_OUTCOME }}`

<details><summary>Show Plan Output</summary>

```{{env.PLAN}}```

</details>

*Pusher: @{{ actor }}, Action: `{{ event }}`, Workflow: `{{ workflow }}`*