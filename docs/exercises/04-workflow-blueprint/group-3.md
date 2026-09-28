---
title: "Group 3: Field-support request routing"
description: "Flow-card challenge for Group 3"
---

# Group 3: Field-support request routing

## Scenario

The field team submits support requests through a form. Each request must include a subject, contact details, urgency level, and description. The central team must read the response and separate requests that are ready to proceed from requests with missing information.

Use fictional requesters and contact details only.

## Challenge

Arrange the Flow cards to receive a form response, retrieve its details, and direct the request to one of two outcomes:

- Complete information: notify the receiving team in Microsoft Teams.
- Missing information: send an email asking for the missing details.

> **Boundary:** Use only the node cards in the physical deck. Do not add an Action for saving to a database, assigning work, or updating a status because those cards are not available.

## Test data

### Normal case

- Subject: `Partner event support`
- Contact details: provided.
- Urgency: `Normal`
- Description: complete.
- Expected outcome: the receiving team sees a message containing the required information.

### Exception case

- Subject: `Branch support`
- Contact details: provided.
- Description: blank.
- Expected outcome: the requester receives an email identifying the information that must be added.

## Before arranging the cards

1. Identify the value that the Trigger passes to the Action that retrieves the response details.
2. Use the same form throughout the path.
3. Write the Yes/No question for the “information is complete” rule.
4. Name the owner of that rule on a sticky note because the system should not define the business rule itself.

## Checkpoint

The group can walk through both a complete and an incomplete request. Information from the form response is used only after the response details have been retrieved.

[Previous: Group 2](/exercises/04-workflow-blueprint/group-2) · [Back to Practice 1](/exercises/04-workflow-blueprint#practice-1) · [Next: Group 4](/exercises/04-workflow-blueprint/group-4)
