import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Badge } from '../ui/badge';
import BottomHint from './shared/BottomHint';

interface TerminalLine {
  text: string;
  color?: string;
  type?: 'prompt' | 'empty' | 'text' | 'bash' | 'output' | 'status' | 'task' | 'task-completed' | 'hint' | 'cursor';
  bold?: boolean;
}

export default function DesignSystemRulesSlide() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [displayedLines, setDisplayedLines] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Terminal content (27 lines)
  const terminalLines: TerminalLine[] = [
    { text: '> /figma:create_design_system_rules (MCP) is running…', color: '#E8E4D9', type: 'prompt' },
    { text: '', type: 'empty' },
    { text: "I'll analyze this codebase and create comprehensive design system rules...", color: '#FFFFFF', type: 'text' },
    { text: '', type: 'empty' },
    { text: 'Bash(ls -la)', color: '#F5C57C', type: 'bash', bold: true },
    { text: 'total 136', color: '#D4A574', type: 'output' },
    { text: 'drwxr-xr-x  12 user  staff   384 Nov 13 10:23 .', color: '#D4A574', type: 'output' },
    { text: 'drwxr-xr-x   8 user  staff   256 Nov 12 14:15 ..', color: '#D4A574', type: 'output' },
    { text: 'drwxr-xr-x   3 user  staff    96 Nov 13 09:45 components', color: '#D4A574', type: 'output' },
    { text: 'drwxr-xr-x   2 user  staff    64 Nov 12 16:30 styles', color: '#D4A574', type: 'output' },
    { text: '-rw-r--r--   1 user  staff  2156 Nov 13 10:20 App.tsx', color: '#D4A574', type: 'output' },
    { text: '... +79 lines', color: '#808080', type: 'hint' },
    { text: '', type: 'empty' },
    { text: 'Status: Exploring project structure...', color: '#FF6B6B', type: 'status', bold: true },
    { text: '', type: 'empty' },
    { text: '■ Explore project structure', color: '#4EC9B0', type: 'task-completed', bold: true },
    { text: '■ Analyze design patterns', color: '#4EC9B0', type: 'task-completed', bold: true },
    { text: '■ Extract color palette', color: '#4EC9B0', type: 'task-completed', bold: true },
    { text: '■ Document typography', color: '#4EC9B0', type: 'task-completed', bold: true },
    { text: '■ Map component usage', color: '#4EC9B0', type: 'task-completed', bold: true },
    { text: '■ Generate spacing rules', color: '#4EC9B0', type: 'task-completed', bold: true },
    { text: '□ Create Guidelines.md', color: '#808080', type: 'task' },
    { text: '', type: 'empty' },
    { text: '█', color: '#F5C57C', type: 'cursor' }
  ];

  // Guidelines.md preview (15 lines for Step 2)
  const guidelinesPreview = `# Project Structure Guidelines

## Component Organization Philosophy

This project uses a **flat + colocation** approach for maximum simplicity and maintainability.

### Folder Structure

\`\`\`
/components/
  /slides/          ← All presentation slides in one place
  /ui/              ← ShadCN UI components (never modify structure)
  /figma/           ← Figma-related helpers (protected)
\`\`\``;

  // Guidelines.md full (220+ lines for Step 3)
  const guidelinesFull = `# Project Structure Guidelines

## Component Organization Philosophy

This project uses a **flat + colocation** approach for maximum simplicity and maintainability.

### Folder Structure

\`\`\`
/components/
  /slides/          ← All presentation slides in one place
  /ui/              ← ShadCN UI components (never modify structure)
  /figma/           ← Figma-related helpers (protected)
\`\`\`

### Core Principles

1. **Flat Structure for Related Components**
   - All slides live in \`/components/slides/\`
   - Easy to find, simple mental model
   - No deep nesting (\`slides/intro/IntroSlide.tsx\` ❌)

2. **Extract Shared Components Only When Needed**
   - **Rule of Three**: Extract only after 3rd duplication
   - Don't create \`/shared/\` prematurely
   - Wait for real patterns to emerge

3. **Colocation**
   - Keep related code close:
     \`\`\`tsx
     /components/slides/
       GitManagementSlide.tsx     ← Main component
       // Future: GitManagementSlide.utils.ts (if needed)
       // Future: GitManagementSlide.types.ts (if needed)
     \`\`\`

4. **Import Paths**
   - From slides to UI: \`import { Card } from '../ui/card'\`
   - From App to slides: \`import TitleSlide from './components/slides/TitleSlide'\`
   - Always use relative paths for clarity

### When to Scale Up

**Use feature-based structure when:**
- Project has distinct features (\`/dashboard\`, \`/auth\`, \`/settings\`)
- Team size grows (3+ developers)
- Components share complex state

**Never do:**
- ❌ Atomic design folders (\`/atoms\`, \`/molecules\`, \`/organisms\`)
  - Good for thinking, terrible for navigation
- ❌ Premature abstraction
  - Don't create shared components "just in case"

### File Naming

- Components: \`PascalCase.tsx\` (e.g., \`TitleSlide.tsx\`)
- Utils/hooks: \`camelCase.ts\` (e.g., \`useTimer.ts\`)
- Types: \`PascalCase.types.ts\` (e.g., \`Slide.types.ts\`)

### Current Project Status

- ✅ All slides refactored to \`/components/slides/\`
- ✅ No shared components yet (waiting for real duplication)
- ✅ Clean imports updated in \`App.tsx\`

**Remember:** Start simple, refactor when patterns emerge. Complexity should be earned, not assumed.

---

## SuperchargeAI Design System

### Color Palette

**Primary Colors:**
- Yellow Accent: \`#FEBE42\` - Used for badges, highlights, CTAs
- White: \`#FFFFFF\` - Background
- Black: \`#000000\` - Primary text

**Secondary Colors:**
- Cyan: \`#31BFC7\` - Info, success states
- Light Blue: \`#46BAD8\` - Secondary actions
- Pink: \`#FF438B\` - Warnings, attention
- Orange: \`#F69E2C\` - Tertiary accents

### Typography

- Use inline \`style={{ fontWeight: 800 }}\` for headings
- Use inline \`style={{ fontWeight: 700 }}\` for subheadings
- Use inline \`style={{ fontWeight: 600 }}\` for emphasis
- **Never** use Tailwind font classes (\`text-2xl\`, \`font-bold\`, \`leading-none\`)
  - We have default typography in \`styles/globals.css\`

### Logo

\`\`\`tsx
<div className="flex gap-0.5">
  <div className="w-3 h-12 bg-black transform skew-x-[-20deg]"></div>
  <div className="w-3 h-12 bg-black transform skew-x-[-20deg]"></div>
  <div className="w-3 h-12 bg-black transform skew-x-[-20deg]"></div>
</div>
<span className="text-3xl text-black" style={{ fontWeight: 800 }}>supercharge</span>
\`\`\`

### Component Patterns

**Slide Header:**
\`\`\`tsx
<Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
  CZĘŚĆ X: Tytuł sekcji
</Badge>
<h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
  Tytuł slajdu
</h2>
\`\`\`

**Card with Icon:**
\`\`\`tsx
<div className="p-3 rounded-lg" style={{ backgroundColor: \`\${color}20\` }}>
  <Icon className="w-8 h-8" style={{ color: color }} />
</div>
\`\`\`

### Animation

- Use Motion (formerly Framer Motion): \`import { motion } from 'motion/react'\`
- Standard fade-in: \`initial={{ opacity: 0, y: -20 }}\`
- Stagger delays: \`delay: 0.2 + idx * 0.1\`

---

## Generated by MCP Tool
**Date:** November 13, 2025  
**Version:** 1.0.0`;

  // Typewriter effect (only Step 1)
  useEffect(() => {
    if (step !== 1) return;
    
    setDisplayedLines(0);
    setIsTypingComplete(false);

    const timer = setInterval(() => {
      setDisplayedLines(prev => {
        if (prev >= terminalLines.length) {
          setIsTypingComplete(true);
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [step]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        if (step === 1 && isTypingComplete) {
          setStep(2);
        } else if (step === 2) {
          setStep(3);
        } else if (step === 3) {
          setStep(1); // Reset
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, isTypingComplete]);

  // Terminal Panel Component
  const TerminalPanel = ({ lines, showCursor }: { lines: TerminalLine[]; showCursor: boolean }) => (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      {/* Header with dots */}
      <div className="bg-[#323232] px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-white/70 text-sm">Terminal</span>
      </div>
      
      {/* Terminal content */}
      <div className="bg-[#1E1E1E] p-6 font-mono text-sm h-[650px] overflow-auto">
        {lines.map((line, idx) => (
          <div 
            key={idx} 
            className={line.type === 'empty' ? 'h-6' : ''}
            style={{
              color: line.color || '#FFFFFF',
              fontWeight: line.bold ? 700 : 400,
              whiteSpace: 'pre-wrap'
            }}
          >
            {line.text}
            {idx === lines.length - 1 && showCursor && line.type === 'cursor' && (
              <span className="animate-pulse">{line.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // Editor Panel Component
  const EditorPanel = ({ content, lineCount, fullWidth = false }: { content: string; lineCount: number; fullWidth?: boolean }) => {
    const lines = content.split('\n').slice(0, lineCount);
    
    return (
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg">
        {/* Header with dots */}
        <div className="bg-[#323232] px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-white/70 text-sm">Guidelines.md</span>
        </div>
        
        {/* Editor content */}
        <div className={`bg-[#1E1E1E] p-6 font-mono text-sm ${fullWidth ? 'max-h-[650px] overflow-y-auto' : 'h-[650px]'}`}>
          <div className="flex gap-4">
            {/* Line numbers */}
            <div className="text-white/30 text-right select-none flex-shrink-0">
              {lines.map((_, idx) => (
                <div key={idx}>{idx + 1}</div>
              ))}
            </div>
            
            {/* Content with syntax highlighting */}
            <div className="flex-1">
              {lines.map((line, idx) => {
                let coloredLine = line;
                let color = '#FFFFFF';
                
                // Mock syntax highlighting
                if (line.startsWith('#')) {
                  color = '#4EC9B0'; // Cyan for headers
                } else if (line.startsWith('```')) {
                  color = '#808080'; // Gray for code blocks
                } else if (line.includes('http')) {
                  color = '#569CD6'; // Blue for links
                } else if (line.startsWith('-') || line.startsWith('*')) {
                  color = '#D4D4D4'; // Light gray for lists
                }
                
                return (
                  <div key={idx} style={{ color, whiteSpace: 'pre-wrap' }}>
                    {line || '\u00A0'}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-white py-12 px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Badge className="bg-[#1976D2] text-white border-[#1976D2] mb-4">
          CZĘŚĆ 4: Automatyzacja
        </Badge>
        <h2 className="text-4xl text-black mb-2" style={{ fontWeight: 800 }}>
          Automatyczne generowanie Guidelines.md
        </h2>
        <p className="text-lg text-gray-600" style={{ fontWeight: 600 }}>
          MCP tool analizuje projekt i tworzy dokumentację design systemu
        </p>
      </motion.div>

      {/* Step 1: Terminal only (typewriter) */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl mx-auto"
          >
            <TerminalPanel 
              lines={terminalLines.slice(0, displayedLines)} 
              showCursor={displayedLines === terminalLines.length}
            />
            {isTypingComplete && <BottomHint text="Naciśnij ↓ aby zobaczyć Guidelines.md" />}
          </motion.div>
        )}

        {/* Step 2: Terminal + Guidelines side-by-side */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Terminal (static) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <TerminalPanel lines={terminalLines} showCursor={false} />
              </motion.div>

              {/* Guidelines preview (slide in from right) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <EditorPanel content={guidelinesPreview} lineCount={15} />
              </motion.div>
            </div>
            <BottomHint text="Naciśnij ↓ aby rozwinąć dokument" />
          </motion.div>
        )}

        {/* Step 3: Guidelines only (full width) */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <EditorPanel content={guidelinesFull} lineCount={9999} fullWidth />
            <BottomHint text="Naciśnij ↓ aby wrócić do początku" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sub-slide navigation indicator */}
      <div className="fixed bottom-8 right-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-3 shadow-lg">
        <div className="text-sm text-gray-600" style={{ fontWeight: 600 }}>
          {step}/3
        </div>
      </div>
    </div>
  );
}