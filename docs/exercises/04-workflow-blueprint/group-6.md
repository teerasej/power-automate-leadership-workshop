---
title: "Group 6: Controlled-document approval"
description: "Flow-card challenge for Group 6"
---

# Group 6: Controlled-document approval

## Scenario

When a file is modified in the pending-review folder, the control owner must review it. If the file is approved, a copy must be created in an `Approved` folder outside the source folder. If it is rejected, the coordinator must be notified by email.

Use fictional text files only. Do not use real policies, contracts, or information.

## Challenge

Arrange the Flow cards so that the workflow starts when a file is modified, waits for an approval outcome, and ends by either creating an approved copy or sending a rejection notice. The file created by the workflow must not trigger the workflow again.

> **Boundary:** Use only the node cards in the physical deck. Record the content review, decision rationale, and control owner on sticky notes as human responsibilities.

## Test data

### Normal case

- Source folder: `Pending Review`
- Fictional file: `procedure-draft.txt`
- Size: less than 50 MB.
- Decision: `Approve`
- Expected outcome: a file is created in an `Approved` folder that is not inside the folder monitored by the Trigger.

### Exception case

- Use the same fictional file.
- Decision: `Reject`
- Expected outcome: no file is created in `Approved`, and the coordinator receives an email.

### Limitation to record

- The `When a file is modified` Trigger may skip files larger than 50 MB.

## Before arranging the cards

1. Identify the source and destination folders clearly and make sure they do not overlap.
2. Place the approval as an Action after the Trigger.
3. Use the approval outcome in the Yes/No question.
4. Check that the file-creation Action receives the Folder Path, File Name, and File Content.

## Checkpoint

The group can walk through both approval and rejection. The approval path creates a file in a destination that does not trigger the workflow again, and the group can identify the 50 MB limitation.

[Previous: Group 5](/exercises/04-workflow-blueprint/group-5) · [Back to Practice 1](/exercises/04-workflow-blueprint#practice-1)
