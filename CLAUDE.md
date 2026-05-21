# Supercharge-2 — Design System & Slide Conventions

This is a React presentation app (`src/App.tsx`). All slides live in `src/components/slides/`. New slides must match the visual language of the source PowerPoint presentation.

---

## Color System

Derived from the PPTX theme (`SuperchargeAI-Spotkanie04`):

| Token | Hex | Usage |
|---|---|---|
| **Yellow (primary accent)** | `#FEBE42` | Badges, highlights, hover states, title slide bg |
| **Black** | `#000000` | Headlines, body text, borders |
| **Cream (bg1/lt1)** | `#EDE9E6` | Section headers bg, card fills, box backgrounds |
| **White (default bg)** | `#FFFFFF` | Default slide background, lt2 |
| **Dark charcoal** | `#333233` | accent1, secondary text elements |
| **Teal** | `#31BFC7` | Accent on some slides |
| **Pink/Magenta** | `#EA148C` | Rarely used accent |
| **Slate blue** | `#445469` | Label badges (e.g. "VISION") |

**Rule**: Default slide background = `#FFFFFF`. Section divider slides = `#EDE9E6`. Never use a black background unless the source slide explicitly has one.

---

## Typography

| Font | Weight | Usage in PPT | React equivalent |
|---|---|---|---|
| **Poppins ExtraBold** | 800 | Main titles, hero text | `fontFamily: 'Poppins, sans-serif', fontWeight: 800` |
| **Poppins SemiBold** | 600 | Slide titles (32pt), section labels | `fontWeight: 600` |
| **Poppins** | 400 | Body, annotations, subtitles | `fontWeight: 400` |
| **Poppins Light** | 300 | Subtle captions | `fontWeight: 300` |
| **Lora** | 400/700 | Card labels, box text (serif) | `fontFamily: 'Lora, Georgia, serif'` |
| **Montserrat** | varies | Rare — product names | `fontFamily: 'Montserrat, sans-serif'` |

### Font size mapping (PPT sz → React clamp)

| PPT sz | pt | React |
|---|---|---|
| 3600 | 36pt | `clamp(20px, 3.0vw, 40px)` |
| 3527 | ~35pt | `clamp(20px, 2.8vw, 38px)` |
| 3200 | 32pt | `clamp(18px, 2.6vw, 34px)` |
| 2800 | 28pt | `clamp(16px, 2.2vw, 30px)` |
| 2400 | 24pt | `clamp(14px, 2.0vw, 26px)` |
| 2000 | 20pt | `clamp(12px, 1.6vw, 20px)` |
| 1800 | 18pt | `clamp(11px, 1.5vw, 19px)` |
| 1600 | 16pt | `clamp(10px, 1.3vw, 17px)` |
| 1200 | 12pt | `clamp(9px, 1.0vw, 13px)` |
| 1000 | 10pt | `clamp(8px, 0.9vw, 11px)` |

---

## Slide Background Patterns

### Default content slide (48/53 slides)
```tsx
// White background, black text
<div className="w-full max-w-5xl mx-auto">
```

### Section divider slide
```tsx
// Cream background (#EDE9E6), centered content
<div style={{ background: '#EDE9E6', minHeight: '100%' }}>
```

### Title slide (slide 1)
```tsx
// Yellow background (#FEBE42), black text
<div style={{ background: '#FEBE42' }}>
```

---

## Layout Patterns

### 1. Title + content (most common)
```
[Title — Poppins SemiBold 32pt, top-left]
[Content area — flexible layout below]
```

### 2. Three-column card grid
Used for tool comparisons (e.g. AI Design / AI Builder / Agentic tools):
```tsx
<div className="grid grid-cols-3 gap-6">
  <div> {/* Lora 20pt bold header + content */} </div>
</div>
```

### 3. Left content + right annotations (diagram style)
```tsx
<div className="flex gap-8">
  <div style={{ width: '50%' }}> {/* Main content/shapes */} </div>
  <div style={{ width: '45%' }}> {/* Annotations — Poppins, smaller */} </div>
</div>
```

### 4. Two-column equal split
```tsx
<div className="grid grid-cols-2 gap-8">
```

### 5. Section header (divider)
Large centered text on cream background, minimal layout:
```tsx
<div className="text-center" style={{ background: '#EDE9E6' }}>
  <h2 style={{ fontFamily: 'Poppins', fontWeight: 800 }}>Section Title</h2>
  <p className="text-gray-600">subtitle</p>
</div>
```

---

## Brand Elements

### Supercharge logo mark
Double chevron `>>` + "supercharge" text. In code:
```tsx
<div className="flex gap-0.5">
  <div className="w-2 h-6 bg-black transform skew-x-[-20deg]" />
  <div className="w-2 h-6 bg-black transform skew-x-[-20deg]" />
  <div className="w-2 h-6 bg-black transform skew-x-[-20deg]" />
</div>
<span style={{ fontWeight: 800 }}>supercharge</span>
```

### Yellow accent arrow/chevron (SVG from brand)
White right-pointing chevron, used decoratively on title slides:
```tsx
// SVG path from brand assets
<svg viewBox="0 0 46 87" fill="none">
  <path d="M44.9231 41.3017C45.6376 42.5394 45.6376 44.0642 44.9231 45.3018L22.2325 84.6026C21.518 85.8402 20.1975 86.6025 18.7684 86.6025L4.00688 86.6025C0.927704 86.6025-0.996801 83.2692 0.542757 80.6026L20.9231 45.3017C21.6376 44.0641 21.6376 42.5394 20.9231 41.3018L0.541857 5.99999C-0.997726 3.33333 0.92677 0 4.00596 0L18.7684 0C20.1975 0 21.518 0.762403 22.2325 2.00002L44.9231 41.3017Z" fill="white"/>
</svg>
```

### Ink splatter decoration
Used on architectural/diagram slides. File: `public/ai-architecture-frame.png`.
Apply as background-image positioned at bottom of a container.

### VISION / section badges
Dark slate blue (#445469), Poppins bold, ALL CAPS, small size:
```tsx
<span style={{ background: '#445469', color: 'white', padding: '2px 8px', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em' }}>
  VISION
</span>
```

---

## Component Conventions

### All slides must use motion/react
```tsx
import { motion } from 'motion/react';

export default function MySlide() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl mx-auto"
    >
```

### Staggered children animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
>
```

### Cards (from ui/card)
```tsx
import { Card } from '../ui/card';
// White bg, gray border, subtle shadow
<Card className="p-6 hover:shadow-md transition-shadow">
```

### Badges / labels
```tsx
import { Badge } from '../ui/badge';
// Yellow accent
<Badge className="bg-[#FEBE42] text-black border-[#FEBE42]">Label</Badge>
// Outline
<Badge variant="outline" className="border-black/20">Label</Badge>
```

### Cream-background boxes (Lora labels)
```tsx
// Used for stacked layer diagrams, card backgrounds
<div style={{
  background: '#EDE9E6',
  fontFamily: 'Lora, Georgia, serif',
  fontSize: 'clamp(12px, 1.6vw, 20px)',
  textAlign: 'center',
  padding: '18px 16px',
}}>
  Label text
</div>
```

### Highlight / key takeaway text
Do not render a highlight, key takeaway, recap sentence, or closing thought as a separate card/CTA box unless the source PowerPoint explicitly uses a framed callout. It must not have a border, card background, chip, CTA styling, or bold weight.

Preferred pattern: plain regular-weight text below the main content, aligned with the slide content, using Poppins and `clamp()` sizing:
```tsx
<motion.p
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
  style={{
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    fontSize: 'clamp(11px, 1.5vw, 19px)',
    color: '#000000',
  }}
>
  Key takeaway sentence.
</motion.p>
```

---

## Slide Registration (App.tsx)

```ts
// 1. Import at top
import MySlide from './components/slides/MySlide';

// 2. Add to slides array — id = sequential index
{ id: N, title: 'Polish title', component: MySlide, duration: 'X min', icon: IconFromLucide },
```

Available icons (already imported): `Presentation, User, Lightbulb, Code, Sparkles, FileText, Settings, Shield, MessageSquare, Edit, Route, Layers, FileCode, BookOpen, Zap, Box, Play, AlertTriangle, Trophy, Heart, Clock, HelpCircle`

---

## Image Assets

Decorative images extracted from PPTX go to `public/`. Reference as `/filename.png` in JSX.

Current assets:
- `public/ai-architecture-frame.png` — ink splatter frame for diagram slides

---

## What NOT to do

- Never use absolute CSS positioning as the primary layout strategy — use flexbox/grid
- Never hardcode pixel font sizes — always use `clamp()`
- Never add content not in the source — no extra summaries or commentary
- Never use a black background unless the PPT slide explicitly has one
- Never use pure white (#FFF) for card/box fills — use `#EDE9E6` (cream) to match theme
