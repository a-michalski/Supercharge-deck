---
description: Import a slide from a PPTX URL and/or PDF URL and recreate it as a pixel-perfect React component in this project
argument-hint: "<pptx-url-or-path> <slide-number> [pdf-url-or-path]"
---

You are working in the **Supercharge-2** React presentation project. Your task is to take a slide from a PPTX and/or PDF file (provided as URLs or local paths) and recreate it as a faithful React component, then register it in the slides array.

## Arguments
Parse `$ARGUMENTS`:
- First arg: PPTX file (URL or local path)
- Second arg: slide number (1-based, in presentation order)
- Third arg (optional): PDF file (URL or local path) — used as visual reference

---

## STEP 1 — Download files

For each argument that looks like a URL (starts with `http`), download it:

```bash
mkdir -p /tmp/slide_import

# Download PPTX
curl -L -o /tmp/slide_import/presentation.pptx "<pptx-url>"

# Download PDF (if provided)
curl -L -o /tmp/slide_import/presentation.pdf "<pdf-url>"
```

For local paths, just use them directly (no download needed).

---

## STEP 2 — Render PDF page as visual reference (if PDF provided)

Render the target slide from the PDF as a high-resolution image so you can see exactly what it looks like:

```bash
# macOS built-in: render PDF page N to image
# Page numbers are 0-based for qlmanage
PAGE=$((SLIDE_NUMBER - 1))

# Method 1: qlmanage (always available on macOS)
qlmanage -t -s 2400 -o /tmp/slide_import/ /tmp/slide_import/presentation.pdf 2>/dev/null
# Result: /tmp/slide_import/presentation.pdf.png (or similar)

# Method 2: sips with page selection (if method 1 fails)
sips -s format png /tmp/slide_import/presentation.pdf \
  --out /tmp/slide_import/slide_preview.png 2>/dev/null

# Method 3: use python + subprocess with quartz (macOS)
python3 -c "
import subprocess, os
result = subprocess.run(
  ['qlmanage', '-t', '-s', '2400', '-o', '/tmp/slide_import/', '/tmp/slide_import/presentation.pdf'],
  capture_output=True
)
files = [f for f in os.listdir('/tmp/slide_import/') if 'pdf' in f.lower() and f.endswith('.png')]
print('Rendered:', files)
"
```

After rendering, **use the Read tool to view the PNG image**. This gives you the ground-truth visual to match.

If PDF rendering produces multiple pages (one file per page), identify which file corresponds to `<slide_number>`.

---

## STEP 3 — Extract PPTX slide data

```python
import zipfile, re, xml.etree.ElementTree as ET, os

pptx_path = '/tmp/slide_import/presentation.pptx'  # or the provided local path
target_position = <slide_number>  # 1-based

with zipfile.ZipFile(pptx_path, 'r') as z:
    # Build presentation order
    with z.open('ppt/_rels/presentation.xml.rels') as f:
        rels_content = f.read().decode('utf-8')
    with z.open('ppt/presentation.xml') as f:
        pres_content = f.read().decode('utf-8')

    slide_rels = dict(re.findall(r'Id="(rId\d+)"[^>]*Target="(slides/slide\d+\.xml)"', rels_content))
    ordered_rids = re.findall(r'<p:sldId[^>]+r:id="(rId\d+)"', pres_content)

    rid = ordered_rids[target_position - 1]
    slide_file = slide_rels[rid]
    print(f"Slide {target_position} = {slide_file}")

    with z.open(f'ppt/{slide_file}') as f:
        slide_xml = f.read().decode('utf-8')

    SLIDE_W, SLIDE_H = 12192000, 6858000
    root = ET.fromstring(slide_xml)

    print("\n=== TEXT SHAPES ===")
    for sp in root.iter():
        if sp.tag.endswith('}sp'):
            texts = [t.text for t in sp.iter() if t.tag.endswith('}t') and t.text and t.text.strip()]
            if not texts:
                continue
            pos = None
            for xfrm in sp.iter():
                if xfrm.tag.endswith('}xfrm'):
                    off = xfrm.find('{http://schemas.openxmlformats.org/drawingml/2006/main}off')
                    ext = xfrm.find('{http://schemas.openxmlformats.org/drawingml/2006/main}ext')
                    if off is not None:
                        pos = (round(int(off.get('x',0))/SLIDE_W*100,1),
                               round(int(off.get('y',0))/SLIDE_H*100,1),
                               round(int(ext.get('cx',0))/SLIDE_W*100,1),
                               round(int(ext.get('cy',0))/SLIDE_H*100,1))
                    break
            fills = [c.attrib.get('val','?') for c in sp.iter()
                     if c.tag.endswith('}srgbClr') or c.tag.endswith('}schemeClr')]
            fonts = list(set(r.attrib.get('typeface','') for r in sp.iter()
                             if r.tag.endswith('}latin') and r.attrib.get('typeface')))
            sizes = [r.attrib.get('sz','') for r in sp.iter()
                     if r.tag.endswith('}rPr') and r.attrib.get('sz')]
            bold = any(r.attrib.get('b','0') == '1' for r in sp.iter() if r.tag.endswith('}rPr'))
            print(f"  pos={pos} bold={bold} sz={sizes[:1]} font={fonts[:1]} fill={fills[:2]}")
            for t in texts:
                print(f"    '{t}'")

    print("\n=== IMAGES ===")
    slide_num = re.search(r'slide(\d+)\.xml', slide_file).group(1)
    rels_path = f'ppt/slides/_rels/slide{slide_num}.xml.rels'
    try:
        with z.open(rels_path) as f:
            slide_rels_xml = f.read().decode('utf-8')
        imgs = re.findall(r'Id="(rId\d+)"[^>]*Target="\.\./media/([^"]+)"', slide_rels_xml)
        
        # Also get image positions from XML
        for pic in root.iter():
            if pic.tag.endswith('}pic'):
                embed = None
                for blip in pic.iter():
                    if blip.tag.endswith('}blip'):
                        embed = blip.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed','')
                pos = None
                for xfrm in pic.iter():
                    if xfrm.tag.endswith('}xfrm'):
                        off = xfrm.find('{http://schemas.openxmlformats.org/drawingml/2006/main}off')
                        ext = xfrm.find('{http://schemas.openxmlformats.org/drawingml/2006/main}ext')
                        if off is not None:
                            pos = (round(int(off.get('x',0))/SLIDE_W*100,1),
                                   round(int(off.get('y',0))/SLIDE_H*100,1),
                                   round(int(ext.get('cx',0))/SLIDE_W*100,1),
                                   round(int(ext.get('cy',0))/SLIDE_H*100,1))
                img_name = dict(imgs).get(embed, '?')
                print(f"  {embed} = {img_name} at pos={pos}")

        os.makedirs('/tmp/slide_import', exist_ok=True)
        for rid, img_name in imgs:
            out = f'/tmp/slide_import/{img_name}'
            with z.open(f'ppt/media/{img_name}') as f:
                data = f.read()
            with open(out, 'wb') as f2:
                f2.write(data)
            print(f"  Extracted: {out} ({len(data)}b)")
    except Exception as e:
        print(f"  No images or error: {e}")

    print("\n=== THEME COLORS ===")
    with z.open('ppt/slideMasters/_rels/slideMaster1.xml.rels') as f:
        master_rels = f.read().decode('utf-8')
    theme_path = re.search(r'Type="[^"]*theme[^"]*" Target="([^"]+)"', master_rels).group(1)
    with z.open('ppt/' + theme_path.replace('../','')) as f:
        theme_root = ET.fromstring(f.read().decode('utf-8'))
    for elem in theme_root.iter():
        tag = elem.tag.split('}')[-1]
        if tag in ['dk1','lt1','dk2','lt2','accent1','accent2']:
            for child in elem:
                print(f"  {tag}: {child.attrib.get('val','?')}")
```

---

## STEP 4 — View all extracted images

For every image in `/tmp/slide_import/`, use the **Read tool** to view it. Take note of:
- Is it decorative (texture, splatter, background pattern)?
- Does it contain content (icons, screenshots, charts)?
- What color scheme does it use?

---

## STEP 5 — Map layout to React

Before coding, explicitly define:

**Background**: use theme `lt1` value for light slides, `#000` or `dk1` for dark slides.

**Layout type** — choose the closest React pattern:
- Stack of blocks → `flex flex-col gap-X`
- Two columns → `flex gap-X` or `grid grid-cols-2`
- Grid → `grid grid-cols-N gap-X`
- Diagram with annotations → flex row: left content + right labels
- Full-bleed → `position: relative` with aspect-ratio container

**Font size mapping** (PPT pt × 100 → `sz` value in XML):
| sz | pt | React clamp |
|----|----|----|
| 3200 | 32pt | `clamp(18px, 2.6vw, 34px)` |
| 2800 | 28pt | `clamp(16px, 2.2vw, 30px)` |
| 2400 | 24pt | `clamp(14px, 2.0vw, 26px)` |
| 2000 | 20pt | `clamp(12px, 1.6vw, 20px)` |
| 1600 | 16pt | `clamp(10px, 1.3vw, 17px)` |
| 1200 | 12pt | `clamp(9px, 1.0vw, 13px)` |

**Color resolution**:
- `schemeClr val="bg1"` → theme `lt1` hex
- `schemeClr val="tx1"` → theme `dk1` hex
- `schemeClr val="accent1"` → theme `accent1` hex
- `srgbClr val="RRGGBB"` → `#RRGGBB`

---

## STEP 6 — Copy decorative images to `public/`

```bash
cp /tmp/slide_import/<image>.png /Users/adammichalski/Code/Supercharge-2/public/<descriptive-name>.png
```

Reference in JSX as: `<img src="/<descriptive-name>.png" />`

---

## STEP 7 — Create the component

File: `src/components/slides/<Name>Slide.tsx`

**Project conventions:**
- `import { motion } from 'motion/react'` — always
- `import { Card } from '../ui/card'` — for content cards
- `import { Badge } from '../ui/badge'` — for labels/tags
- `import { SomeIcon } from 'lucide-react'` — for icons
- Animations: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}`
- Max width: `className="w-full max-w-5xl mx-auto"`
- No comments in code
- Responsive font sizes via `clamp()`
- Text copied verbatim from XML extraction

**If the slide has a dark background** (lt1 is dark or slide has explicit dark bg):
- Wrap in a `min-h-screen bg-black` equivalent and let the content fill the presentation area

---

## STEP 8 — Register in App.tsx

1. Read current `src/App.tsx`
2. Add import after existing imports
3. Insert slide at the requested position (default: index 1, right after TitleSlide)
4. Renumber all `id` fields sequentially
5. Pick icon from already-imported lucide set (or add import if needed)

---

## STEP 9 — Verify

1. `npx vite build` → must pass
2. Start dev server if not running: `npx vite --port 5174 &`
3. Take screenshot via chrome-devtools MCP, navigate to the new slide
4. Compare side-by-side with the PDF reference image
5. Iterate if needed (font sizes, spacing, colors)

---

## Key rules

- PPTX slide numbers follow **presentation order** (not file name order) — always resolve via `presentation.xml`
- Never use raw absolute CSS positioning unless unavoidable — prefer flexbox/grid
- Never invent content — only use what's in the source slide
- If an image contains text (screenshot, diagram), embed it as `<img>` rather than recreating the text
- The PDF page image is your ground-truth visual — the PPTX XML gives you the data
