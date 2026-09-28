---
title: "Group 1: Email attachment intake"
description: "Flow-card challenge for Group 1"
---

# Group 1: Email attachment intake

## Scenario

The team receives request emails that may include several supporting documents. The workflow must check whether an email has attachments. If it does, every attachment must be saved in the designated folder. If it does not, the sender must be asked to provide the missing documents.

Use fictional information only. Do not use real names, customer information, case numbers, or documents.

## Challenge

Arrange the Flow cards to show the process from receiving the email to one of these outcomes:

- Email with attachments: every attachment is saved.
- Email without attachments: the sender receives a request for the missing documents.

> **Boundary:** Use only the Trigger, Action, and Control cards in the physical deck. Use sticky notes only for responsible roles, business decisions, steps that require a physical card to be repeated, and unresolved checks. Do not write a new Trigger or Action name on a sticky note.

## Test data

### Normal case

- Subject: `Service case documents`
- The sender includes two fictional files: `request.pdf` and `evidence.jpg`.
- Expected outcome: both files reach the destination folder.

### Exception case

- Subject: `Service case documents — follow-up`
- There are no attachments.
- Expected outcome: no empty file is created, and the sender is asked to provide the missing documents.

## Before arranging the cards

1. Write the Yes/No question that separates the two paths.
2. Identify the information each Action must receive from the preceding card.
3. Show how the flow handles more than one attachment.
4. Add a `Needs verification` sticky note beside any unconfirmed folder, permission, or connector.

## Checkpoint

Another participant can walk through both cases. Every file in the normal case is saved, and the no-attachment case ends with a clear request to the sender.

[Back to Practice 1](/exercises/04-workflow-blueprint#practice-1) · [Next: Group 2](/exercises/04-workflow-blueprint/group-2)
