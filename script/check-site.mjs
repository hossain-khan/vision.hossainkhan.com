#!/usr/bin/env node
/**
 * Static integrity checker for the built Jekyll `_site/` output.
 * Verifies:
 *  1. Every internal href/src across all generated HTML pages resolves to a real file in `_site/`.
 *  2. Every image_src / raw_src in `_site/photos.json` resolves to a real file in `_site/`.
 */
import fs from 'node:fs';
import path from 'node:path';

const SITE_DIR = path.resolve(process.cwd(), '_site');
const SITE_ORIGIN = 'https://vision.hossainkhan.com';

if (!fs.existsSync(SITE_DIR)) {
  console.error('Error: _site/ directory does not exist. Run `bundle exec jekyll build` first.');
  process.exit(1);
}

function walkHtml(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkHtml(full, results);
    } else if (entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

function resolveInSite(urlPath) {
  const clean = decodeURIComponent(urlPath.split('#')[0].split('?')[0]);
  if (!clean || clean === '/') {
    return fs.existsSync(path.join(SITE_DIR, 'index.html'));
  }
  const rel = clean.replace(/^\/+/, '');
  const candidates = [
    path.join(SITE_DIR, rel),
    path.join(SITE_DIR, `${rel}.html`),
    path.join(SITE_DIR, rel, 'index.html'),
  ];
  return candidates.some((c) => fs.existsSync(c) && fs.statSync(c).isFile());
}

const htmlFiles = walkHtml(SITE_DIR);
const errors = [];
let checkedRefs = 0;

// Match href="..." or src="..." (double or single quoted)
const ATTR_RE = /\b(href|src)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;

for (const file of htmlFiles) {
  const relFile = path.relative(SITE_DIR, file);
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = ATTR_RE.exec(content)) !== null) {
    const attr = match[1].toLowerCase();
    const raw = (match[2] ?? match[3] ?? '').trim();
    if (!raw) continue;
    if (
      raw.startsWith('#') ||
      raw.startsWith('mailto:') ||
      raw.startsWith('tel:') ||
      raw.startsWith('javascript:') ||
      raw.startsWith('data:') ||
      raw.startsWith('//')
    ) {
      continue;
    }

    let checkPath = null;
    if (raw.startsWith('/')) {
      checkPath = raw;
    } else if (raw.startsWith(SITE_ORIGIN)) {
      checkPath = raw.slice(SITE_ORIGIN.length) || '/';
    } else if (/^https?:\/\//i.test(raw)) {
      // Skip external URLs to keep CI deterministic and fast
      continue;
    } else {
      // Relative path against current file's directory
      const baseDir = '/' + path.relative(SITE_DIR, path.dirname(file));
      checkPath = path.posix.resolve(baseDir, raw);
    }

    checkedRefs++;
    if (!resolveInSite(checkPath)) {
      errors.push(`${relFile}: broken ${attr}="${raw}" (resolved: ${checkPath})`);
    }
  }
}

// Validate photos.json image paths
const photosJsonPath = path.join(SITE_DIR, 'photos.json');
let checkedPhotos = 0;
if (fs.existsSync(photosJsonPath)) {
  const photos = JSON.parse(fs.readFileSync(photosJsonPath, 'utf8'));
  for (const item of photos.featured_photos || []) {
    for (const key of ['image_src', 'raw_src']) {
      const val = item[key];
      if (typeof val === 'string' && val.startsWith(SITE_ORIGIN)) {
        checkedPhotos++;
        const urlPath = val.slice(SITE_ORIGIN.length);
        if (!resolveInSite(urlPath)) {
          errors.push(`photos.json (${item.title}): missing ${key} -> ${urlPath}`);
        }
      }
    }
  }
} else {
  errors.push('Missing _site/photos.json');
}

console.log(`Checked ${htmlFiles.length} HTML files (${checkedRefs} internal refs) and ${checkedPhotos} photos.json assets.`);

if (errors.length > 0) {
  console.error(`\nFound ${errors.length} broken internal reference(s):`);
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
}

console.log('All internal links, assets, and photos.json image paths resolved cleanly.');
