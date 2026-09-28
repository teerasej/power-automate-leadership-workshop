---
title: "Group 2: Monthly review and approval"
description: "Flow-card challenge for Group 2"
---

# Group 2: Monthly review and approval

## Scenario

At the start of every month, the team must begin a review of assumptions used in an internal report. The responsible person must request approval from the business owner, then notify the team if the review is approved or notify the coordinator if it is rejected.

The rules, schedule, and approver used in this activity are fictional and do not represent an actual policy.

## Challenge

Arrange the Flow cards so that the process starts on the scheduled recurrence, waits for a decision, and reaches a different outcome for **Approved** and **Rejected**.

> **Boundary:** Use only the Trigger, Action, and Control cards in the physical deck. Record roles, approvers, and business rules on sticky notes; do not turn them into new nodes.

## Test data

### Normal case

- Review schedule: the first day of every month at 09:00.
- Decision: `Approve`
- Expected outcome: the team receives a message confirming that the review was approved.

### Exception case

- The review starts on the same schedule.
- Decision: `Reject`
- Expected outcome: the coordinator receives an email stating that the review was rejected.

## Before arranging the cards

1. State when the workflow starts and who is responsible for checking the schedule.
2. Place the approval step after the correct Trigger.
3. Write the Yes/No question that checks the approval outcome.
4. Make each path end with a clearly identified responsible role.

## Checkpoint

The group can walk through both `Approve` and `Reject` outcomes without assigning the approver's decision to the system.

[Previous: Group 1](/exercises/04-workflow-blueprint/group-1) · [Back to Practice 1](/exercises/04-workflow-blueprint#practice-1) · [Next: Group 3](/exercises/04-workflow-blueprint/group-3)
