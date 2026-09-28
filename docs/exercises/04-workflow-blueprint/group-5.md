---
title: "Group 5: Teams service-request routing"
description: "Flow-card challenge for Group 5"
---

# Group 5: Teams service-request routing

## Scenario

The team uses the `Service Intake` channel to receive internal service requests. A message that begins with `[URGENT]` must notify the on-duty role by email. A normal message must be forwarded to the `Service Queue` channel.

Do not use real messages or user information during testing.

## Challenge

Arrange the Flow cards to check a new top-level channel message and branch according to the `[URGENT]` tag without creating a loop that triggers the workflow again.

> **Boundary:** Use only the node cards in the physical deck. Do not add an Action for creating a ticket, assigning a person, or editing a message because those cards are not available.

## Test data

### Normal case

- Source channel: `Service Intake`
- Top-level message: `Please review the new internal request.`
- Expected outcome: the message is sent to `Service Queue`, which is a different channel.

### Exception case

- Source channel: `Service Intake`
- Top-level message: `[URGENT] Service interruption reported.`
- Expected outcome: the on-duty role receives an email.

### Limitation to explain

- If the message is a **Reply** to an existing post, the Trigger in this deck will not start the workflow.

## Before arranging the cards

1. Write the Yes/No question that checks the tag at the beginning of the message.
2. Make the source and destination channels different.
3. Use sticky notes to identify the on-duty role and the channel owner.
4. Add `Needs verification` beside the Teams permissions and Workflows app availability.

## Checkpoint

The group can walk through both a normal and an urgent message, explain the Reply limitation, and show that no path posts back to the channel monitored by the Trigger.

[Previous: Group 4](/exercises/04-workflow-blueprint/group-4) · [Back to Practice 1](/exercises/04-workflow-blueprint#practice-1) · [Next: Group 6](/exercises/04-workflow-blueprint/group-6)
