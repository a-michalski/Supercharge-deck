#!/usr/bin/env node

/**
 * Script to decode base64-encoded PNG images to binary PNG files
 * This fixes images that were saved as base64 strings by Figma Make
 */

const fs = require('fs');
const path = require('path');

// Directories to check for base64-encoded PNG files
const ASSET_DIRS = [
  'public/assets',
  'src/assets',
  'build/assets',
  'dist/assets'
];

/**
 * Check if a file is base64-encoded (starts with base64 PNG header)
 */
function isBase64Encoded(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Base64 PNG starts with "iVBORw0KGgo" (base64 of PNG magic bytes)
    // Real PNG starts with binary bytes: 89 50 4E 47 0D 0A 1A 0A
    return content.trim().startsWith('iVBORw0KGgo');
  } catch (error) {
    return false;
  }
}

/**
 * Decode base64 string to binary buffer
 */
function decodeBase64ToBuffer(base64String) {
  try {
    // Remove any whitespace/newlines
    const cleanBase64 = base64String.trim().replace(/\s/g, '');
    return Buffer.from(cleanBase64, 'base64');
  } catch (error) {
    throw new Error(`Failed to decode base64: ${error.message}`);
  }
}

/**
 * Process a single file
 */
function processFile(filePath) {
  if (!isBase64Encoded(filePath)) {
    return { processed: false, reason: 'Not base64-encoded' };
  }

  try {
    const base64Content = fs.readFileSync(filePath, 'utf8');
    const binaryBuffer = decodeBase64ToBuffer(base64Content);
    
    // Verify it's a valid PNG by checking magic bytes
    const pngMagicBytes = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
    if (!binaryBuffer.slice(0, 8).equals(pngMagicBytes)) {
      return { processed: false, reason: 'Decoded content is not a valid PNG' };
    }

    // Write binary PNG file
    fs.writeFileSync(filePath, binaryBuffer);
    return { processed: true, size: binaryBuffer.length };
  } catch (error) {
    return { processed: false, reason: error.message };
  }
}

/**
 * Find all PNG files in a directory
 */
function findPngFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isFile() && item.name.endsWith('.png')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Scanning for base64-encoded PNG images...\n');

  let totalProcessed = 0;
  let totalSkipped = 0;
  let totalErrors = 0;

  for (const dir of ASSET_DIRS) {
    if (!fs.existsSync(dir)) {
      console.log(`⚠️  Directory not found: ${dir}`);
      continue;
    }

    console.log(`📁 Checking: ${dir}`);
    const files = findPngFiles(dir);

    for (const file of files) {
      const result = processFile(file);
      
      if (result.processed) {
        console.log(`  ✅ Decoded: ${path.basename(file)} (${(result.size / 1024).toFixed(2)} KB)`);
        totalProcessed++;
      } else if (result.reason === 'Not base64-encoded') {
        totalSkipped++;
      } else {
        console.log(`  ❌ Error: ${path.basename(file)} - ${result.reason}`);
        totalErrors++;
      }
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Decoded: ${totalProcessed}`);
  console.log(`   ⏭️  Skipped (already binary): ${totalSkipped}`);
  console.log(`   ❌ Errors: ${totalErrors}`);

  if (totalProcessed > 0) {
    console.log(`\n✨ Successfully decoded ${totalProcessed} image(s)!`);
    process.exit(0);
  } else {
    console.log(`\n✨ No base64-encoded images found. All images are already binary.`);
    process.exit(0);
  }
}

// Run the script
main();

