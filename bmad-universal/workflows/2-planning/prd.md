# Workflow: Create PRD

## Purpose
Create a comprehensive Product Requirements Document through collaborative discovery.

## Agent
Product Manager (John)

## Prerequisites
- Project idea or product brief (optional but helpful)
- Understanding of target users
- Business context

---

## Process

### Step 1: Understand the Vision

**Discussion Points:**
1. What problem are we solving?
2. Who has this problem?
3. Why does this matter now?
4. What does success look like?

**Output:** Clear problem statement and vision

---

### Step 2: Define Users

**Discussion Points:**
1. Who are the primary users?
2. What are their goals?
3. What frustrates them today?
4. How tech-savvy are they?

**Output:** User personas (at least primary persona)

---

### Step 3: Document Functional Requirements

For each feature/capability:

**Template:**
```markdown
### FR-[N]: [Feature Name]

**Description:** [What this feature does]

**User Story:** 
As a [user], I want [goal] so that [benefit]

**Acceptance Criteria:**
- [ ] [Testable criterion 1]
- [ ] [Testable criterion 2]
- [ ] [Testable criterion 3]

**Priority:** Must Have | Should Have | Nice to Have
```

**Discussion Points:**
1. What must the product do? (Must Have)
2. What should it do? (Should Have)
3. What would be nice? (Nice to Have)

**Rules:**
- Each FR has a user story
- Each FR has testable acceptance criteria
- Prioritize ruthlessly for MVP

---

### Step 4: Document Non-Functional Requirements

**Categories to cover:**

#### Performance
- Response time expectations
- Throughput requirements
- Scalability needs

#### Security
- Authentication requirements
- Data protection needs
- Compliance requirements

#### Reliability
- Uptime expectations
- Recovery requirements
- Backup needs

#### Usability
- Accessibility requirements
- Device/browser support
- Localization needs

---

### Step 5: Map User Flows

**For key journeys:**
```
[Entry Point] → [Step 1] → [Step 2] → [Decision]
                                         ├── [Yes] → [Outcome A]
                                         └── [No] → [Outcome B]
```

**Key flows to document:**
- Primary user journey (happy path)
- Error/exception flows
- Edge cases

---

### Step 6: Define Scope

**In Scope:**
- [Feature/capability included]
- [Feature/capability included]

**Out of Scope:**
- [Explicitly NOT included]
- [Explicitly NOT included]

**Future Considerations:**
- [Potential future feature]
- [Potential future feature]

---

### Step 7: Identify Risks

**Template:**
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| [Risk] | H/M/L | H/M/L | [Strategy] |

**Consider:**
- Technical risks
- Market risks
- Resource risks
- Dependency risks

---

### Step 8: Review and Validate

Run through PRD checklist:
- [ ] Problem clearly stated
- [ ] Users defined
- [ ] All FRs have user stories
- [ ] All FRs have acceptance criteria
- [ ] NFRs documented
- [ ] Scope clearly defined
- [ ] Risks identified

---

## Output

- PRD document: `docs/PRD.md`
- Use template: `templates/prd.md`

---

## Tips for Good PRDs

1. **Be specific** - Vague requirements = vague products
2. **Think users** - Every feature serves a user need
3. **Prioritize** - MVP means minimum VIABLE
4. **Test criteria** - If you can't test it, rewrite it
5. **Stay lean** - You can always add more later

---

## Next Steps

After PRD complete:
1. (Optional) UX Design if UI-heavy
2. Architecture design
3. Create epics and stories
4. Implementation readiness check
