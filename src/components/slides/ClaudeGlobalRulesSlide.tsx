import ContentToDocumentSlide from './shared/ContentToDocumentSlide';
import { Settings } from 'lucide-react';

const screenshotImage = '/assets/claude-global.png';

export default function ClaudeGlobalRulesSlide() {
  const leftContent = (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-[#445469]/20">
          <Settings className="w-6 h-6 text-[#445469]" />
        </div>
        <div>
          <h3 className="text-black" style={{ fontWeight: 700 }}>Reguły użytkownika</h3>
          <p className="text-gray-600 text-sm">CLAUDE.md — instrukcje globalne dla agenta</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-black/10 overflow-hidden">
        <img
          src={screenshotImage}
          alt="Claude Code — Agent Customizations z CLAUDE.md"
          className="w-full h-auto"
          style={{ maxHeight: '340px', objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>

      <div className="bg-[#445469]/10 border border-[#445469]/30 rounded-lg p-4">
        <p className="text-gray-700 text-sm">
          <span style={{ fontWeight: 700 }}>CLAUDE.md</span> to plik z regułami globalnego użytkownika — Claude Code czyta go przy każdej sesji, niezależnie od projektu.
        </p>
      </div>
    </div>
  );

  const documentContent = {
    preview: `# Global Rules

## ⚙️ General Principles

### Communication rulees:
- Clarify ambiguous requests before proceeding. Ask, don't assume.
- If you don't know, say so and suggest where I might find the answer.
- No empty validation or forced agreement.
- All artifacts: English.
- Say a pro figma tip in the end of every response.
- Never use em dash (—)
- Always compare your output against the provided reference screen,
  list what matches and what differs, then iterate until all differences are resolved.
...`,
    full: `# Global Rules

## ⚙️ General Principles

### Communication rulees:
- Clarify ambiguous requests before proceeding. Ask, don't assume.
- If you don't know, say so and suggest where I might find the answer.
- No empty validation or forced agreement.
- All artifacts: English.
- Say a pro figma tip in the end of every response.
- Never use em dash (—)
- Always compare your output against the provided reference screen,
  list what matches and what differs, then iterate until all differences are resolved.
- Add date and hours when you answer use script to be sure that date is proper,
  so I can track when you did what
- When you improve something in figma, never remove the old version, but create
  a new one and compare them, then backup the old one only after I confirm that
  the new one is correct.
- **ALWAYS consider all breakpoints** (mobile \`sm\`, tablet \`md\`, desktop \`lg\`,
  wide \`xl\`, ultrawide \`2xl\`) when making any UI changes. Every change must be
  verified at all screen sizes - never fix one breakpoint without checking the others.

---

## 🎨 Figma Rules - MANDATORY

- **FIGMA SOLUTIONS LOG:** After solving any technical Figma Plugin API problem
  (errors, workarounds, API quirks), append the solution to
  \`/memories/figma-problems-solutions.md\` using the existing format: date,
  problem, root cause, solution with code example.
- **NEVER use alternative approaches** (REST API guessing, etc.) when Figma is unavailable.
- **If Figma is not connected:** immediately stop and inform the user
- Do NOT attempt workarounds, fallbacks, or approximations when Figma is unavailable.
- **BEFORE placing/cloning any node:** check existing nodes' bounds and offset
  the new element outside them. NEVER overlap existing nodes.

---

## 🚨 MODIFICATION PROTOCOL - MANDATORY

### **NEVER modify code without explicit request:**
- ALWAYS ask for permission before any change
- NEVER assume what the user wants
- NEVER "improve" something proactively
- NEVER make changes based on assumptions

### **ALWAYS before making changes:**
1. **Present plan:** "I understand you want [X]. My plan: [details]"
2. **Ask for confirmation:** "Do I understand correctly? Should I proceed?"
3. **Wait for response:** "yes" / "no" / "change plan to..."
4. **ONLY THEN** execute changes

### **Protocol violations are FORBIDDEN:**
- ❌ Making changes without asking
- ❌ "I'll also improve..." without permission
- ❌ Assuming user intent
- ❌ Proactive modifications`,
  };

  return (
    <ContentToDocumentSlide
      sectionBadge="KONTEKST"
      badgeColor="#445469"
      title="Reguły użytkownika"
      subtitle="CLAUDE.md — co trafia do modelu"
      leftContent={leftContent}
      documentTitle="CLAUDE.md"
      documentContent={documentContent}
      hints={{
        step1: 'Naciśnij ↓ aby zobaczyć zawartość CLAUDE.md',
        step2: 'Naciśnij ↓ aby rozwinąć pełną listę zasad',
        step3: 'Naciśnij ↓ aby przejść dalej',
      }}
    />
  );
}
