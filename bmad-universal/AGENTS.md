# BMAD Universal - Complete Agent Reference

Quick reference for all 17 specialist agents with intent-based auto-routing.

---

## Intent-Based Routing

The ORCHESTRATOR automatically selects agents based on your intent:

| Your Intent | Agent Selected |
|-------------|----------------|
| Exploring ideas, brainstorming | Analyst or Brainstorm Coach |
| Defining features, requirements | PM |
| User experience, interfaces | UX Designer |
| System design, tech decisions | Architect |
| Organizing work, stories | SM |
| Writing code, implementing | Developer |
| Testing, quality | TEA |
| Documentation | Tech Writer |
| Quick fixes, small features | Quick Flow |
| Creative ideation | Brainstorm Coach |
| Complex problems | Problem Solver |
| Human-centered design | Design Thinking Coach |
| Business strategy | Innovation Strategist |
| Presentations | Presentation Master |
| Narratives, messaging | Storyteller |
| Multi-agent discussion | Party Mode |
| Custom agents/workflows | Builder |

---

## Core Development Agents

### PM (John) 📋
**Product Manager** - Requirements, PRD, features
- `*create-prd` - Product Requirements Document
- `*create-tech-spec` - Quick specification
- `*create-epics-stories` - Break down requirements

### Analyst (Mary) 📊
**Business Analyst** - Research, discovery, brainstorming
- `*brainstorm` - Guided ideation
- `*research` - Market/competitive/technical research
- `*product-brief` - Initial vision document
- `*document-project` - Analyze existing codebase

### Architect (Winston) 🏗️
**System Architect** - System design, tech decisions
- `*create-architecture` - System architecture
- `*validate-architecture` - Check completeness
- `*implementation-readiness` - Validate alignment

### SM (Bob) 🏃
**Scrum Master** - Sprint planning, story creation
- `*sprint-planning` - Initialize sprint tracking
- `*create-story` - Draft next story
- `*retrospective` - Post-epic review

### Developer (Amelia) 💻
**Senior Software Engineer** - Implementation, coding
- `*dev-story` - Implement story with TDD
- `*code-review` - Quality review
- `*story-done` - Mark complete

### TEA (Murat) 🧪
**Test Architect** - Testing, quality, CI/CD
- `*framework` - Setup test infrastructure
- `*test-design` - Design test scenarios
- `*automate` - Generate test automation

### UX Designer (Sally) 🎨
**UX/UI Specialist** - User experience, interfaces
- `*create-ux-design` - UX specification
- `*create-wireframe` - Visual wireframes

### Tech Writer (Paige) 📚
**Documentation Specialist** - Technical writing
- `*document-project` - Project documentation
- `*generate-diagram` - Mermaid diagrams

### Quick Flow (Barry) 🚀
**Elite Solo Developer** - Rapid development
- `*create-tech-spec` - Quick specification
- `*quick-dev` - Rapid implementation

---

## Creative Innovation Agents

### Brainstorm Coach (Carson) 🧠
**Innovation Catalyst** - Ideation, creativity
- `*brainstorm` - Guided brainstorming session

### Problem Solver (Dr. Quinn) 🔬
**Solutions Architect** - Root cause, complex problems
- `*solve` - Systematic problem-solving

### Design Thinking Coach (Maya) 🎨
**Human-Centered Design Expert** - Empathy, user needs
- Design thinking workshops

### Innovation Strategist (Victor) ⚡
**Business Model Innovator** - Strategy, disruption
- Business model innovation

### Presentation Master (Caravaggio) 🎨
**Visual Communication Expert** - Presentations, slides
- Presentation design and coaching

### Storyteller (Sophia) 📖
**Narrative Strategist** - Stories, messaging
- Narrative development

---

## Meta Agents

### BMAD Master 🧙
**Orchestrator** - Multi-agent coordination
- `*party-mode` - Multi-agent discussions
- `*list-agents` - Show all agents
- `*list-workflows` - Show all workflows

### BMAD Builder 🧙
**System Maintainer** - Custom agents/workflows
- Create custom agents
- Create custom workflows

---

## Activation Methods

### 1. Auto-Routing (Recommended)
Just describe what you need:
```
"I need to define the features for this app"
→ Routes to PM automatically
```

### 2. Direct Reference
```
"@architect - Review this design"
"Act as Developer"
```

### 3. File Reference
```
Load agents/dev.md and implement story-003
```

### 4. Party Mode
```
"Let's discuss with PM, Architect, and UX"
```

---

## Agent Files

All agents are in `agents/` folder:
- `pm.md`, `analyst.md`, `architect.md`
- `sm.md`, `dev.md`, `tea.md`
- `ux-designer.md`, `tech-writer.md`
- `quick-flow-solo-dev.md`
- `brainstorming-coach.md`, `creative-problem-solver.md`
- `design-thinking-coach.md`, `innovation-strategist.md`
- `presentation-master.md`, `storyteller.md`
- `bmad-master.md`, `bmad-builder.md`
- `party-mode.md`
