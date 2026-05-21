import ContentToDocumentSlide from './shared/ContentToDocumentSlide';
const cursorRulesImage = '/assets/d694e230f1eb244b50317692762cbfab04d85eea.png';
import { Lightbulb } from 'lucide-react';

export default function CursorRulesSlide() {
  // Left content - Cursor rules file preview
  const leftContent = (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-purple-500/20">
          <svg
            className="w-6 h-6 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div>
          <h3 className="text-white" style={{ fontWeight: 700 }}>CLAUDE.md</h3>
          <p className="text-white/60 text-sm">AI-Augmented Engineering Rules</p>
        </div>
      </div>

      {/* Cursor rules preview */}
      <div className="bg-white rounded-lg border border-white/10 overflow-hidden">
        <img 
          src={cursorRulesImage} 
          alt="Cursor rules file" 
          className="w-full h-auto"
        />
      </div>

      <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-purple-500" />
          <p className="text-white/90 text-sm">
            <span style={{ fontWeight: 700 }}>Tip:</span> CLAUDE.md definiuje zasady pracy z AI w tym projekcie.
            Claude Code czyta go automatycznie przy każdej sesji.
          </p>
        </div>
      </div>
    </div>
  );

  // Document content - Cursor rules
  const documentContent = {
    preview: `# Cursor Rules - AI-Augmented Engineering

## Core Workflow

### NEVER Code Immediately - Always Plan First

1. **Scan codebase first**
   - Find ALL relevant files
   - List them for user review
   - Wait for approval before coding
   - DO NOT guess - show your reasoning

2. **Ask clarifying questions**
3. **Create detailed plan**
4. **Get explicit approval**
5. **Work on single phases**
6. **Request code review**
...`,
    full: `# Cursor Rules - AI-Augmented Engineering

## Core Workflow

### NEVER Code Immediately - Always Plan First

1. **Scan codebase first**
   - Find ALL relevant files
   - List them for user review
   - Wait for approval before coding
   - DO NOT guess - show your reasoning

2. **Ask clarifying questions** in this format:
   \`\`\`
   1. [Question about requirements]
      a. [Option A]
      b. [Option B]
   2. [Technical question]
      a. [Technical option A]
      b. [Technical option B]
   \`\`\`

3. **Create detailed plan** with:
   - Clear phases with unique IDs
   - Scope boundaries
   - Implementation approach
   - Save in \`./docs/plans/\` (if exists)

4. **Get explicit approval** before implementation

5. **Work on single phases** - One task at a time

6. **Request code review** after completion

## Code Quality Standards

### Before Writing Code
- Check existing components - reuse before creating new
- Scan design system for similar components
- Follow existing patterns and architecture
- Use relevant documentation as context

### Code Requirements
- TypeScript interfaces for validation
- Proper error handling (no application crashes)
- Comments explaining complex logic
- Semantic variable and function names
- Files under 500 lines (refactor if larger)
- Client and server-side validation

### Pre-Deployment Checklist
✅ Linter passes (BLOCK deployment if fails)
✅ TypeScript errors resolved
✅ Build successful: \`npm run build && npm start\`
✅ Tested locally
✅ All components render correctly

## Documentation

### Auto-Document After Changes
Add file-level comments with context:
\`\`\`typescript
/**
 * [Brief description of what file does]
 * 
 * Recent changes (2024-01-15):
 * - [What changed and why]
 * 
 * Next agent: [Important context for next AI or developer]
 */
\`\`\`

### Documentation Rules
- Save plans: \`./docs/plans/\` (if structure exists)
- Save docs: \`./docs/<area>/\` (if structure exists)
- Include working code examples
- Explain the "why" behind decisions
- Reference external docs and URLs
- Update after introducing changes

## Git Workflow

### Branch Management
- DO NOT delete local branches after merge (preserve history)
- Use descriptive names: \`fix-chat-loading\`, \`feat-speed-insights\`
- Push to origin/main but keep branch locally
- Local branches serve as backup

### Commit Standards
- Commit after each completed phase
- Write clear, descriptive messages in English
- Include documentation updates in commits

## Component Development

### Storybook Integration (if available)
Check if project has Storybook:
- \`.storybook/\` folder exists OR
- \`package.json\` has \`@storybook/*\` dependencies OR
- \`package.json\` has \`storybook\` scripts

**If Storybook exists in project:**
- ALWAYS create \`.stories.tsx\` for each component
- Test all states: default, loading, error, empty
- Verify visually before marking complete
- Consider accessibility

**If NO Storybook:**
- Skip stories creation
- Use alternative verification (tests, browser)

### Component Reuse Rule
- ALWAYS check existing components before creating new
- Prefer composition over duplication
- List similar components before creating new ones

Example:
\`\`\`
❌ DON'T: Create new button from scratch
✅ DO: Find and use existing Button component
\`\`\`

## Asset Management

- Save all external assets locally in project
- Use descriptive names: \`user-icon.svg\`, \`sparkles-white.png\`
- Store in appropriate directories: \`public/icons/\`
- Update paths to local references
- Add new files to Git

## Security

- NEVER modify security implementations without explicit user request
- Preserve all security patterns and validation
- Do not change webhook URLs or API endpoints without consent
- Maintain double validation for critical data

## Refactoring

### Refactor-As-You-Go
- Refactor immediately after completing task
- Keep files under 500 lines
- Use nested structure for large modules
- Split large files into smaller components
- Balance with time constraints

## Key Principles

**Remember:**
- **Quality over speed** - Solid foundations enable sustainable velocity
- **Plan first, code second** - No immediate coding without approval
- **Documentation is investment** - Increases value over time
- **Force scanning** - Show reasoning, don't guess
- **Reuse components** - Check design system first
- **You (engineer) × AI = 3x capability** - This is augmented engineering

This is AI-augmented engineering, not AI-vibe-led engineering`,
  };

  return (
    <ContentToDocumentSlide
      sectionBadge="CZĘŚĆ 2: Konfiguracja"
      badgeColor="#31BFC7"
      title="CLAUDE.md"
      subtitle="Zasady pracy z AI"
      leftContent={leftContent}
      documentTitle="CLAUDE.md"
      documentContent={documentContent}
      hints={{
        step1: 'Naciśnij ↓ aby zobaczyć zasady Claude Code',
        step2: 'Naciśnij ↓ aby rozwinąć pełne zasady',
        step3: 'Naciśnij ↓ aby wrócić do początku',
      }}
    />
  );
}