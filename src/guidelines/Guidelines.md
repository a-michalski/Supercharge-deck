# Project Structure Guidelines

## Component Organization Philosophy

This project uses a **flat + colocation** approach for maximum simplicity and maintainability.

### Folder Structure

```
/components/
  /slides/          ← All presentation slides in one place
  /ui/              ← ShadCN UI components (never modify structure)
  /figma/           ← Figma-related helpers (protected)
```

### Core Principles

1. **Flat Structure for Related Components**
   - All slides live in `/components/slides/`
   - Easy to find, simple mental model
   - No deep nesting (`slides/intro/IntroSlide.tsx` ❌)

2. **Extract Shared Components Only When Needed**
   - **Rule of Three**: Extract only after 3rd duplication
   - Don't create `/shared/` prematurely
   - Wait for real patterns to emerge

3. **Colocation**
   - Keep related code close:
     ```tsx
     /components/slides/
       GitManagementSlide.tsx     ← Main component
       // Future: GitManagementSlide.utils.ts (if needed)
       // Future: GitManagementSlide.types.ts (if needed)
     ```

4. **Import Paths**
   - From slides to UI: `import { Card } from '../ui/card'`
   - From App to slides: `import TitleSlide from './components/slides/TitleSlide'`
   - Always use relative paths for clarity

### When to Scale Up

**Use feature-based structure when:**
- Project has distinct features (`/dashboard`, `/auth`, `/settings`)
- Team size grows (3+ developers)
- Components share complex state

**Never do:**
- ❌ Atomic design folders (`/atoms`, `/molecules`, `/organisms`)
  - Good for thinking, terrible for navigation
- ❌ Premature abstraction
  - Don't create shared components "just in case"

### File Naming

- Components: `PascalCase.tsx` (e.g., `TitleSlide.tsx`)
- Utils/hooks: `camelCase.ts` (e.g., `useTimer.ts`)
- Types: `PascalCase.types.ts` (e.g., `Slide.types.ts`)

### Current Project Status

- ✅ All slides refactored to `/components/slides/`
- ✅ No shared components yet (waiting for real duplication)
- ✅ Clean imports updated in `App.tsx`

**Remember:** Start simple, refactor when patterns emerge. Complexity should be earned, not assumed.

---

## SuperchargeAI Design System

### Color Palette

**Primary Colors:**
- Yellow Accent: `#FEBE42` - Used for badges, highlights, CTAs
- White: `#FFFFFF` - Background
- Black: `#000000` - Primary text

**Secondary Colors:**
- Cyan: `#31BFC7` - Info, success states
- Light Blue: `#46BAD8` - Secondary actions
- Pink: `#FF438B` - Warnings, attention
- Orange: `#F69E2C` - Tertiary accents

### Typography

- Use inline `style={{ fontWeight: 800 }}` for headings
- Use inline `style={{ fontWeight: 700 }}` for subheadings
- Use inline `style={{ fontWeight: 600 }}` for emphasis
- **Never** use Tailwind font classes (`text-2xl`, `font-bold`, `leading-none`)
  - We have default typography in `styles/globals.css`

### Logo

```tsx
<div className="flex gap-0.5">
  <div className="w-3 h-12 bg-black transform skew-x-[-20deg]"></div>
  <div className="w-3 h-12 bg-black transform skew-x-[-20deg]"></div>
  <div className="w-3 h-12 bg-black transform skew-x-[-20deg]"></div>
</div>
<span className="text-3xl text-black" style={{ fontWeight: 800 }}>supercharge</span>
```

### Component Patterns

**Slide Header:**
```tsx
<Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">
  CZĘŚĆ X: Tytuł sekcji
</Badge>
<h2 className="text-4xl text-black" style={{ fontWeight: 800 }}>
  Tytuł slajdu
</h2>
```

**Card with Icon:**
```tsx
<div className="p-3 rounded-lg" style={{ backgroundColor: `${color}20` }}>
  <Icon className="w-8 h-8" style={{ color: color }} />
</div>
```

### Animation

- Use Motion (formerly Framer Motion): `import { motion } from 'motion/react'`
- Standard fade-in: `initial={{ opacity: 0, y: -20 }}`
- Stagger delays: `delay: 0.2 + idx * 0.1`
<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
-->
