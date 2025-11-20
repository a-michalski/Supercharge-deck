
  # Interaktywna Prezentacja Warsztatu AI

  This is a code bundle for Interaktywna Prezentacja Warsztatu AI. The original project is available at https://www.figma.com/design/ko6Xh77bsJ0ICu0yEn6BTk/Interaktywna-Prezentacja-Warsztatu-AI.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Exporting to PDF

  To export the entire presentation (22 slides, 50 pages including sub-slides) to PDF:

  1. **Start the dev server** (in one terminal):
     ```bash
     npm run dev
     ```

  2. **Export to PDF** (in another terminal):
     ```bash
     npm run export:pdf
     ```

  The PDF will be saved to `exports/presentation.pdf`.

  **Note:** The export script automatically:
  - Detects all 22 main slides
  - Navigates through all sub-slides (9 for Git slides, 3 for step-based slides)
  - Generates a single PDF with all 50 pages
  - Uses screenshot-based rendering for accurate visual representation
