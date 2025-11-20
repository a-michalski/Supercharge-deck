/**
 * PDF Export Script for Presentation
 * 
 * Exports the entire presentation to a single PDF file by:
 * - Taking screenshots of each slide and sub-slide
 * - Converting screenshots to PDF pages
 * - Merging all pages into a single PDF document
 * 
 * Requirements:
 * - Dev server must be running on http://localhost:3000
 * - Chrome/Chromium must be installed
 * 
 * Usage:
 *   npm run export:pdf
 * 
 * Output:
 *   exports/presentation.pdf - Final merged PDF
 *   exports/screenshots/ - Individual slide screenshots
 */

import puppeteer, { Browser, Page } from 'puppeteer';
import { PDFDocument } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';

// Configuration
const DEV_SERVER_URL = 'http://localhost:3000';
const OUTPUT_DIR = path.join(process.cwd(), 'exports');
const SCREENSHOTS_DIR = path.join(OUTPUT_DIR, 'screenshots');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'presentation.pdf');

// Slide configuration - which slides have sub-slides
const SLIDES_WITH_SUBSLIDES: Record<number, { type: 'subSlide' | 'step'; max: number }> = {
  4: { type: 'subSlide', max: 8 },  // GitManagementSlide - 9 sub-slides (0-8)
  5: { type: 'subSlide', max: 8 },  // GitConfigSlide - 9 sub-slides (0-8)
  7: { type: 'step', max: 3 },     // CursorRulesSlide - 3 steps (1-3)
  11: { type: 'step', max: 3 },     // PromptingExampleSlide - 3 steps (1-3)
  14: { type: 'step', max: 3 },     // DesignSystemRulesSlide - 3 steps (1-3)
  15: { type: 'step', max: 3 },     // ExtractTokensSlide - 3 steps (1-3)
  16: { type: 'step', max: 3 },     // StartFreshSlide - 3 steps (1-3)
  17: { type: 'step', max: 3 },    // ComponentMigrationSlide - 3 steps (1-3)
};

const TOTAL_SLIDES = 22;

// Wait for animations to complete
const waitForAnimation = async (page: Page, delay: number = 500) => {
  // Wait the base delay
  await new Promise(resolve => setTimeout(resolve, delay));
  
  // Wait for main content to be visible using waitForFunction
  try {
    await page.waitForFunction(
      () => {
        const main = document.querySelector('main');
        if (!main) return false;
        const style = window.getComputedStyle(main);
        return parseFloat(style.opacity) > 0.9;
      },
      { timeout: 3000 }
    );
  } catch (e) {
    // Continue if timeout - content might already be visible
  }
};

// Navigate to a specific slide
const navigateToSlide = async (page: Page, slideIndex: number) => {
  const currentSlide = await page.evaluate(() => {
    const progressBar = document.querySelector('[role="progressbar"]');
    const ariaValueNow = progressBar?.getAttribute('aria-valuenow');
    return ariaValueNow ? parseInt(ariaValueNow) - 1 : 0;
  });

  const steps = slideIndex - currentSlide;
  if (steps > 0) {
    for (let i = 0; i < steps; i++) {
      await page.keyboard.press('ArrowRight');
      await waitForAnimation(page, 1000); // Longer wait for slide transitions
    }
  } else if (steps < 0) {
    for (let i = 0; i < Math.abs(steps); i++) {
      await page.keyboard.press('ArrowLeft');
      await waitForAnimation(page, 1000);
    }
  } else {
    await waitForAnimation(page, 500);
  }
};

// Navigate through sub-slides
const navigateSubSlide = async (page: Page, direction: 'down' | 'up' = 'down') => {
  const key = direction === 'down' ? 'ArrowDown' : 'ArrowUp';
  await page.keyboard.press(key);
  // Longer wait for sub-slide transitions and typewriter effects
  await waitForAnimation(page, 2000);
};

// Hide UI elements for clean screenshot
const hideUIElements = async (page: Page) => {
  await page.evaluate(() => {
    // Hide header
    const header = document.querySelector('header');
    if (header) {
      (header as HTMLElement).style.display = 'none';
    }
    // Hide navigation
    const nav = document.querySelector('nav');
    if (nav) {
      (nav as HTMLElement).style.display = 'none';
    }
    // Hide progress bar
    const progressBar = document.querySelector('[role="progressbar"]');
    if (progressBar) {
      (progressBar as HTMLElement).style.display = 'none';
    }
    // Hide sub-slide indicators
    const indicators = document.querySelectorAll('[class*="fixed bottom"]');
    indicators.forEach((indicator) => {
      if (indicator.textContent?.includes('/')) {
        (indicator as HTMLElement).style.display = 'none';
      }
    });
  });
  await waitForAnimation(page, 300);
};

// Wait for slide content to be fully loaded and visible
const waitForSlideContent = async (page: Page, slideIndex: number) => {
  // Wait for main content to be visible
  try {
    await page.waitForSelector('main', { visible: true, timeout: 5000 });
  } catch (e) {
    // Continue anyway if selector not found
  }
  
  // Special handling for slides with typewriter effects (DesignSystemRulesSlide - slide 14)
  if (slideIndex === 14) {
    // Wait for typewriter effect to complete (27 lines * 60ms = ~1.6s, add buffer)
    // Use waitForFunction to check if terminal has enough lines
    try {
      await page.waitForFunction(
        () => {
          const terminal = document.querySelector('[class*="Terminal"]') || 
                          document.querySelector('[class*="terminal"]');
          if (terminal) {
            const lines = terminal.querySelectorAll('div, p, span');
            return lines.length > 20; // Typewriter should show at least 20 lines
          }
          return true; // No terminal found, proceed
        },
        { timeout: 3000 }
      );
    } catch (e) {
      // Continue if timeout
    }
    // Extra wait for typewriter
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // General wait for all animations - longer for complex slides
  await waitForAnimation(page, 1500);
};

// Take full page screenshot
const takeScreenshot = async (page: Page, filename: string, slideIndex: number): Promise<Buffer> => {
  // Set viewport to ensure full content is visible
  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  // Wait for slide content to be fully loaded
  await waitForSlideContent(page, slideIndex);

  // Take full page screenshot
  const screenshot = await page.screenshot({
    type: 'png',
    fullPage: true,
    captureBeyondViewport: true,
  });

  return screenshot as Buffer;
};

// Convert PNG to PDF page
const convertImageToPDF = async (imageBuffer: Buffer): Promise<PDFDocument> => {
  const pdfDoc = await PDFDocument.create();
  
  // Load PNG image
  const image = await pdfDoc.embedPng(imageBuffer);
  
  // Get image dimensions
  const imageDims = image.scale(1);
  
  // Use A4 Landscape dimensions (842 x 595 points = 29.7 x 21 cm)
  // But scale to fit the actual screenshot dimensions
  const pageWidth = imageDims.width;
  const pageHeight = imageDims.height;
  
  // Add page with image dimensions (so nothing gets cut off)
  const page = pdfDoc.addPage([pageWidth, pageHeight]);
  page.drawImage(image, {
    x: 0,
    y: 0,
    width: imageDims.width,
    height: imageDims.height,
  });
  
  return pdfDoc;
};

// Check if dev server is running
async function checkDevServer(): Promise<boolean> {
  return new Promise((resolve) => {
    const req = http.get(DEV_SERVER_URL, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(2000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

// Main export function
async function exportPresentationToPDF() {
  console.log('🚀 Starting PDF export (screenshot-based)...\n');

  // Check if dev server is running
  console.log('🔍 Checking if dev server is running...');
  const serverRunning = await checkDevServer();
  if (!serverRunning) {
    console.error('❌ Dev server is not running!');
    console.error('   Please run: npm run dev');
    console.error('   Then in another terminal run: npm run export:pdf');
    process.exit(1);
  }
  console.log('✅ Dev server is running\n');

  // Create output directories
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  }

  // Launch browser
  console.log('🌐 Launching browser...');
  
  // Try to find Chrome executable
  let executablePath: string | undefined;
  if (process.platform === 'darwin') {
    const chromePaths = [
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
    ];
    for (const path of chromePaths) {
      if (fs.existsSync(path)) {
        executablePath = path;
        break;
      }
    }
  }
  
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-software-rasterizer',
    ],
    executablePath,
    timeout: 60000,
  });

  const page = await browser.newPage();
  
  // Set longer timeout for page operations
  page.setDefaultTimeout(60000);
  page.setDefaultNavigationTimeout(60000);
  
  // Set viewport
  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  try {
    // Navigate to presentation
    console.log(`🌐 Navigating to ${DEV_SERVER_URL}...`);
    await page.goto(DEV_SERVER_URL, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for React to load
    await page.waitForSelector('[role="progressbar"]', { timeout: 10000 });
    await waitForAnimation(page, 1000);

    console.log('✅ Presentation loaded\n');

    // Create merged PDF document
    const mergedPdf = await PDFDocument.create();
    const screenshotFiles: string[] = [];
    let totalPages = 0;

    // Export each slide
    for (let slideIndex = 0; slideIndex < TOTAL_SLIDES; slideIndex++) {
      console.log(`📄 Exporting slide ${slideIndex + 1}/${TOTAL_SLIDES}...`);

      // Navigate to slide
      await navigateToSlide(page, slideIndex);

      // Check if this slide has sub-slides
      const subSlideConfig = SLIDES_WITH_SUBSLIDES[slideIndex];

      if (subSlideConfig) {
        const { type, max } = subSlideConfig;
        const startIndex = type === 'subSlide' ? 0 : 1;
        const endIndex = type === 'subSlide' ? max : max;

        console.log(`   └─ Found ${endIndex - startIndex + 1} ${type === 'subSlide' ? 'sub-slides' : 'steps'}`);

        // Export each sub-slide
        for (let subIndex = startIndex; subIndex <= endIndex; subIndex++) {
          // Navigate to specific sub-slide if not at start
          if (subIndex > startIndex) {
            await navigateSubSlide(page, 'down');
          }

          // Hide UI and take screenshot
          await hideUIElements(page);
          const filename = `slide-${slideIndex + 1}-${type}-${subIndex + (type === 'step' ? 0 : 1)}.png`;
          const filepath = path.join(SCREENSHOTS_DIR, filename);
          
          const screenshot = await takeScreenshot(page, filename, slideIndex);
          fs.writeFileSync(filepath, screenshot);
          screenshotFiles.push(filepath);

          // Convert to PDF and add to merged PDF
          const pdfDoc = await convertImageToPDF(screenshot);
          const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
          pages.forEach((page) => mergedPdf.addPage(page));
          totalPages++;

          const displayIndex = type === 'step' ? subIndex : subIndex + 1;
          console.log(`      ✓ Exported ${type} ${displayIndex}`);
        }

        // Reset to first sub-slide for next main slide
        if (type === 'subSlide') {
          for (let i = 0; i < endIndex; i++) {
            await navigateSubSlide(page, 'up');
          }
        } else {
          await navigateSubSlide(page, 'down');
        }
      } else {
        // No sub-slides, export directly
        await hideUIElements(page);
        const filename = `slide-${slideIndex + 1}.png`;
        const filepath = path.join(SCREENSHOTS_DIR, filename);
        
        const screenshot = await takeScreenshot(page, filename, slideIndex);
        fs.writeFileSync(filepath, screenshot);
        screenshotFiles.push(filepath);

        // Convert to PDF and add to merged PDF
        const pdfDoc = await convertImageToPDF(screenshot);
        const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        pages.forEach((page) => mergedPdf.addPage(page));
        totalPages++;
        console.log(`   ✓ Exported`);
      }
    }

    // Save merged PDF
    console.log(`\n💾 Saving PDF (${totalPages} pages)...`);
    const pdfBytes = await mergedPdf.save();
    fs.writeFileSync(OUTPUT_FILE, pdfBytes);

    console.log(`\n✅ PDF exported successfully!`);
    console.log(`📁 Location: ${OUTPUT_FILE}`);
    console.log(`📊 Total pages: ${totalPages}`);
    console.log(`📸 Screenshots saved in: ${SCREENSHOTS_DIR}`);

  } catch (error) {
    console.error('❌ Error during export:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run export
if (require.main === module) {
  exportPresentationToPDF()
    .then(() => {
      console.log('\n🎉 Export completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Export failed:', error);
      process.exit(1);
    });
}

export { exportPresentationToPDF };
