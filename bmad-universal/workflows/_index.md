# BMAD Universal Workflows

Quick reference for all workflows organized by phase.

---

## Phase 1: Analysis (Optional)

| Workflow | Agent | Purpose |
|----------|-------|---------|
| [Brainstorm](1-analysis/brainstorm.md) | Analyst / Brainstorm Coach | Generate and explore ideas |
| [Research](1-analysis/research.md) | Analyst | Market, competitive, technical research |
| [Product Brief](1-analysis/product-brief.md) | Analyst | Initial product vision document |
| [Document Project](1-analysis/document-project.md) | Analyst / Tech Writer | Document existing codebase |

---

## Phase 2: Planning (Required)

| Workflow | Agent | Purpose |
|----------|-------|---------|
| [PRD](2-planning/prd.md) | PM | Product Requirements Document |
| [Tech Spec](2-planning/tech-spec.md) | PM / Quick Flow | Technical specification (small projects) |
| [UX Design](2-planning/ux-design.md) | UX Designer | User experience specification |

---

## Phase 3: Solutioning (For larger projects)

| Workflow | Agent | Purpose |
|----------|-------|---------|
| [Architecture](3-solutioning/architecture.md) | Architect | System architecture design |
| [Create Epics & Stories](3-solutioning/create-epics-stories.md) | PM | Break PRD into implementable pieces |
| [Implementation Readiness](3-solutioning/implementation-readiness.md) | Architect | Validate all docs aligned |

---

## Phase 4: Implementation (Required)

| Workflow | Agent | Purpose |
|----------|-------|---------|
| [Sprint Planning](4-implementation/sprint-planning.md) | SM | Initialize sprint tracking |
| [Create Story](4-implementation/create-story.md) | SM | Draft next story |
| [Dev Story](4-implementation/dev-story.md) | Developer | Implement story |
| [Code Review](4-implementation/code-review.md) | Developer | Quality review |
| [Retrospective](4-implementation/retrospective.md) | SM | Post-epic review |

---

## Quick Flow (Rapid Development)

| Workflow | Agent | Purpose |
|----------|-------|---------|
| [Create Tech Spec](quick-flow/create-tech-spec.md) | Quick Flow | Quick specification |
| [Quick Dev](quick-flow/quick-dev.md) | Quick Flow | Rapid implementation |

---

## Testing & Quality

| Workflow | Agent | Purpose |
|----------|-------|---------|
| [Test Framework](testing/framework.md) | TEA | Setup test infrastructure |
| [Test Design](testing/test-design.md) | TEA | Design test scenarios |
| [Automation](testing/automation.md) | TEA | Generate test automation |

---

## Creative & Innovation

| Workflow | Agent | Purpose |
|----------|-------|---------|
| [Design Thinking](creative/design-thinking.md) | Design Thinking Coach | Human-centered design process |
| [Problem Solving](creative/problem-solving.md) | Problem Solver | Systematic problem resolution |
| [Innovation Strategy](creative/innovation-strategy.md) | Innovation Strategist | Business model innovation |
| [Storytelling](creative/storytelling.md) | Storyteller | Craft compelling narratives |

---

## Workflow Selection Guide

### Starting a New Project
```
Greenfield (new project):
1. Brainstorm (optional) → Analyst
2. PRD → PM
3. Architecture → Architect
4. Sprint Planning → SM
5. Dev Story → Developer
```

### Working with Existing Code
```
Brownfield (existing project):
1. Document Project → Analyst
2. PRD or Tech Spec → PM
3. Architecture (if needed) → Architect
4. Sprint Planning → SM
5. Dev Story → Developer
```

### Quick Fix or Small Feature
```
Quick Flow:
1. Tech Spec → Quick Flow
2. Quick Dev → Quick Flow
Done!
```

### Complex Problem
```
Problem Solving:
1. Problem Solving → Problem Solver
2. Route to appropriate agent based on solution
```
