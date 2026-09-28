# Fictional case pack: Internal training requests

All information is fictional and provided for learning. It does not describe any organisation's actual process, policy, or performance.

> **Optional reference:** Exercise 1 is designed to run from the projected presentation and spoken facilitator prompts. Participants do not need to open this file during the activity.

## One case throughout the day

A coordination team receives training requests by email. Each request needs a topic, date, participant count, and business reason. A coordinator checks the details, copies them into a register, sends the request to a manager, and communicates the decision. Requesters often email for status updates while waiting.

## Roles

- **Requester:** submits the request and supplies missing information.
- **Coordinator:** checks completeness, maintains the register, and follows up on status.
- **Manager:** evaluates suitability and makes the business decision.
- **System administrator:** helps verify permissions and technical feasibility before any real trial.

## Current process

| Step | Work | Responsible role | Handover |
|---|---|---|---|
| 1 | Email the request | Requester | Topic, date, participant count, reason |
| 2 | Check required details | Coordinator | Complete request or list of missing details |
| 3 | Request and supply missing information | Coordinator and requester | Updated request |
| 4 | Copy details into the register | Coordinator | Request ID and status |
| 5 | Send for review | Coordinator | Request and supporting information |
| 6 | Decide and inform the coordinator | Manager | Approval or rejection, with a reason |
| 7 | Notify the requester and update status | Coordinator | Requester knows the outcome |

## Fictional evidence for comparing pain points

These figures support practice only. They do not promise automation benefits.

| Pain point | Fictional evidence | Question still to ask |
|---|---|---|
| Re-entering request details | 60 requests per month require the same details to be copied | Could the information be captured in a structured form initially? |
| Chasing approval status | The coordinator reviews pending requests daily | Does the manager lack review time or clear decision criteria? |
| Missing request information | 12 of 60 requests in one sample month lack information | Which fields are required, and who defines completeness? |

## Cases for the paper walk-test

| ID | Input | What to test |
|---|---|---|
| R-101 | Topic and date supplied; 12 participants; reason supplied | Normal path until the requester knows the outcome |
| R-102 | Topic supplied; date blank; 8 participants; reason supplied | Who requests missing details, and where does progress stop? |
| R-103 | Complete details; manager rejects the request | Notify the requester without proceeding as if approved |
| R-104 | Complete details; manager has not responded | Who follows up, and when should someone escalate? |

Agree any additional rules as proposals and label them accordingly. This case does not establish an SLA, approval limit, or guaranteed manager response.

## Physical Flow-card guidance

- Choose cards only after selecting the opportunity and learning Trigger, Action, and Condition.
- Choose a Trigger matching the agreed start event. Select only Actions or Control cards that help explain your design.
- Add ordinary sticky notes for human decisions, process owners, required information, exceptions, outcomes, and repeated steps.
- Mark unconfirmed connectors, permissions, licences, policies, and data **Needs verification**.
- The supplied `Start and wait for an approval` card is printed as a Trigger. Place it as an **Action** after a valid Trigger without altering the original.
- Card arrangement and paper testing check conceptual clarity. They do not prove that the flow will run in a tenant.

For this case, a group might propose an email-arrival Trigger, a completeness Condition, an approval Action on the complete path, and notification steps. Use sticky notes for missing or repeated steps. This is an illustrative proposal, not a verified solution or a list of connectors enabled for your organisation.

## Scenario cards for Exercise 1

Use this guide for each scenario:

1. If a rule, access, or responsible person is unknown, choose **More information needed**.
2. Otherwise, if someone must judge or approve, choose **Human decision needed**.
3. Otherwise, when the rule and access are clear, choose **System can help under agreed rules**.

**A.** A request arrives in the approved mailbox. Notify the coordinator.

**B.** A request does not match an agreed rule. A manager must decide whether it is suitable.

**C.** The date is blank. The agreed rule says to ask the requester for it.

**D.** Copy data from another system. Access has not been confirmed.

**E.** At the agreed time, remind the agreed person about a waiting request.

**F.** The manager has not decided. Tell the requester it is approved.

Sort each card into **System can help under agreed rules**, **Human decision needed**, or **More information needed**. Give a reason.

## Official reference

[Approval actions and prerequisites](https://learn.microsoft.com/en-us/power-automate/get-started-approvals)

[Course home](/)
