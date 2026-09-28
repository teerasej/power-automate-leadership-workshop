---
title: "Group 4: Internal resource approval"
description: "Flow-card challenge for Group 4"
---

# Group 4: Internal resource approval

## Scenario

A coordinator receives an internal resource request that has already passed an initial information check. The coordinator must start the workflow manually, send the request to the budget owner for a decision, and notify the relevant team of the outcome.

The request details, amount, and approver used in this activity are fictional and do not represent an actual policy.

## Challenge

Arrange the Flow cards so that the coordinator starts the workflow, requests approval, and separates the **Approved** and **Rejected** outcomes. Each path must have a clearly identified recipient.

> **Boundary:** Use only the node cards in the physical deck. Record policy checks, approver selection, and sign-off as human responsibilities on sticky notes, not as new Actions.

## Test data

### Normal case

- Request ID: `REQ-104`
- Item: equipment for an internal activity.
- Decision: `Approve`
- Expected outcome: the operations team receives a message telling them to begin the next step.

### Exception case

- Request ID: `REQ-105`
- Item: equipment for an internal activity.
- Decision: `Reject`
- Expected outcome: the coordinator receives an email with the decision, and the request is not passed on for action.

## Before arranging the cards

1. Make it clear that the workflow does not start until the coordinator starts it.
2. Place the approval as an Action after the Trigger.
3. Use the approval outcome in the Yes/No question.
4. Record the human checkpoint and the evidence the approver should use on a sticky note.

## Checkpoint

The group can walk through both outcomes and explain that the system sends the request and communicates the result but does not make the decision for the budget owner.

[Previous: Group 3](/exercises/04-workflow-blueprint/group-3) · [Back to Practice 1](/exercises/04-workflow-blueprint#practice-1) · [Next: Group 5](/exercises/04-workflow-blueprint/group-5)
