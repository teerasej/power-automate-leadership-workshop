---
title: "Exercise 5: Review and hand over the Blueprint"
description: "English learner instructions for Exercise 5: Review and hand over the Blueprint"
---

# Exercise 5: Review and hand over the Blueprint

<CourseProgress :current="5" />

Turn your paper-tested workflow into a short description. Use live Copilot Chat or the labelled facilitator fallback to identify gaps, then judge every review item before completing the Leadership Handover Card.

**Time:** 15:20–15:57, 37 minutes.

> **Access:** Use Copilot Chat with an eligible work or school account approved for this workshop. Basic chat does not require the separate Microsoft 365 Copilot add-on licence; eligibility and organisation settings still apply. Confirm access before class. No Power Automate build is required.

Microsoft documentation now uses **Microsoft Copilot Chat** for the experience previously named **Microsoft 365 Copilot Chat**. Your interface may retain the earlier name during the transition.

## Preparation

- Bring the physical Blueprint and both paper-test records from Exercise 4.
- Use one approved internet-connected device per group. Assign a typist and a reader.
- Open [Worksheets 6A–6C](/resources/worksheets).
- At the facilitator's instruction, open the organisation-approved Copilot Chat experience, such as [Copilot Chat on the web](https://m365copilot.com/), and sign in with the approved work or school account. Check the enterprise data protection indicator with the facilitator.
- Use fictional or sanitised text. Remove names, customer details, personal data, confidential information, and real operational reference numbers. Fictional case IDs such as R-101 may remain.
- If access fails, use the facilitator's prepared fictional review response for Practices 3–6.

> **Important:** Copilot provides review input. Its response does not certify licences, permissions, connector availability, policy compliance, technical feasibility, or production readiness. Enterprise data protection does not authorise sharing confidential information in this activity.

## Practice 1: Describe the tested flow (5 minutes) {#practice-1}

**Primary target:** Produce a sanitised text description that accurately represents the paper-tested design.

**Learner output:** A completed safe brief in Worksheet 6A.

1. Complete Worksheet 6A from the cards and sticky notes on your table.
2. Include the problem, outcome, Trigger, ordered steps, branches, human decisions, and exception handling.
3. Separate proposed design choices from assumptions and matters requiring verification.
4. Check the text for prohibited information. Do not photograph or upload the cards.

### Checkpoint

The text matches the physical Blueprint and clearly identifies unresolved matters.

## Practice 2: Set the review mindset (5 minutes) {#practice-2}

**Primary target:** Agree how the group will treat review input before reading it.

**Learner output:** Four shared review rules: paper test first, human decision on every item, no readiness certification, and no more than two changes.

Treat Copilot like a colleague reviewing a recipe: it may notice a missing step, but the responsible people must decide whether the advice fits. Follow the visual review sequence and keep the cards unchanged until you assess the response.

### Checkpoint

Every participant can explain why the group will judge each item before changing the Blueprint.

## Practice 3: Obtain a design review (8 minutes) {#practice-3}

**Primary target:** Obtain traceable suggestions and verification questions using Goal, Context, Source, and Expectation.

**Learner output:** Up to four numbered review items in Worksheet 6B, labelled as live or facilitator fallback.

Choose one path and mark the **Review source** in Worksheet 6B:

- **Live Copilot Chat:** paste the prompt below, replace the bracketed fields with Worksheet 6A content, send it, and read the response together.
- **Facilitator fallback:** use the prepared fictional response and label it **Simulated review input — not tenant evidence**.

Do not change the cards yet.

```text
Review this high-level workflow as a reviewer and gap finder.

Goal:
Identify missing steps, ambiguous rules, unhandled exceptions, decisions that need human judgement, and opportunities to simplify the design.

Context:
This is a paper draft for a leadership discussion. It uses fictional or sanitised information. It has not been built or tested in a Power Automate tenant.

Source:
- Business problem: [complete]
- Intended outcome: [complete]
- Agreed start and end boundary: [complete]
- Trigger: [complete]
- Ordered steps: [complete]
- Conditions and Yes/No branches: [complete]
- Human review or decision points: [complete]
- Missing-information, rejection, or stalled-work paths: [complete]
- Assumptions and matters already marked for verification: [complete]

Expectation:
1. Identify important missing or ambiguous steps.
2. Identify exceptions the draft may not handle.
3. Identify decisions that should remain with people.
4. Surface assumptions about information, permissions, connectors, ownership, or timing that a process owner or IT must confirm.
5. Label each item Suggestion or Needs verification. Explain the link to the supplied Source.

Do not claim that this flow is technically feasible, compliant, licensed, or ready to deploy. Do not invent facts absent from the Source. If information is missing, ask a question or state an assumption.
Respond concisely in English, with no more than four numbered items so the group can review every item.
```

### Checkpoint

Worksheet 6B identifies the review source and contains no more than four traceable items. The group treats them as review input, not confirmed facts.

## Practice 4: Judge every review item (7 minutes) {#practice-4}

**Primary target:** Use scenario evidence to assign a human decision to every review item.

**Learner output:** A completed decision and reason for every item in Worksheet 6B.

1. Record each review item in Worksheet 6B. If live Copilot ignores the response limit, ask it to consolidate the response before reviewing it.
2. Classify every item as **Adopt**, **Adapt**, **Verify**, or **Reject**. Mark irrelevant or out-of-scope items Reject rather than silently dropping them.
3. Give a short reason grounded in the case, paper test, or agreed scope.
4. Retain Verify items as questions for the process owner or IT. Do not turn them into asserted facts.

| Decision | Meaning |
|---|---|
| Adopt | Supported by the scenario and useful as written |
| Adapt | Useful after modification |
| Verify | A responsible person must confirm it |
| Reject | Unsupported, unnecessary, or outside scope |

### Checkpoint

Every review item has a human decision and an evidence-based reason.

## Practice 5: Apply limited changes (5 minutes) {#practice-5}

**Primary target:** Revise the physical Blueprint only where the group has justified a change.

**Learner output:** No more than two Adopt/Adapt changes recorded on the physical Blueprint and Worksheet 6B.

1. Rank the Adopt and Adapt items by importance to the agreed boundary.
2. Apply no more than two changes to the cards or sticky notes.
3. Record each selected change and its justification in Worksheet 6B.
4. Add the accepted changes to Worksheet 6C. Leave Verify and Reject items unchanged.

### Checkpoint

The revised Blueprint contains no more than two justified changes, each traceable to a review decision.

## Practice 6: Finalise the Handover Card (7 minutes) {#practice-6}

**Primary target:** Complete a handover with an owner, baseline measure, and next decision.

**Learner output:** A complete Worksheet 6C Leadership Handover Card.

1. Return to Worksheet 6C, started in Exercise 3.
2. Confirm paper-test exceptions, accepted changes, and unresolved verification questions added during earlier exercises.
3. Select one measure and describe how to collect a baseline and check output accuracy.
4. Record people affected, support or communication needed, and one concern to test during a controlled trial.
5. Label benefits as expected until a real trial provides evidence.
6. Record the next decision, responsible person or role, and follow-up date.

### Checkpoint

The card is ready for a discussion with the process owner. It does not claim tenant testing or deployment readiness.

## If you get stuck

- For broad advice, ask Copilot to refer back to the original Source. Do not add real operational data.
- Reject suggestions that conflict with the scenario. Verify claims about permissions, licences, policies, or connectors with the responsible team.
- If time is short, apply only the most important one or two changes. Retain unresolved questions on the Handover Card.

## Summary

The group remains responsible for its design. The next step is a discussion with the process owner and relevant support teams, not deployment. Complete Worksheet 7 at 15:57–16:00.

## Official references

- [Copilot Chat overview and eligibility](https://learn.microsoft.com/en-us/copilot/overview)
- [Privacy and protections](https://learn.microsoft.com/en-us/copilot/privacy-and-protections)

[Course home](/) · [Previous exercise](/exercises/04-workflow-blueprint)

<ExerciseFooter prev="/exercises/04-workflow-blueprint" next="/" prev-label="Exercise 4" next-label="Learning journey" />
