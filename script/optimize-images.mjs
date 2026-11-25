#!/usr/bin/env node
/**
 * Generates responsive WebP derivatives (800w and 1600w) for featured images
 * referenced in `_projects/*.md` and `_posts/*.md`, and writes their paths and
 * intrinsic dimensions to `_data/image_variants.json` for Jekyll templates.
 *
 * Requires `cwebp` (e.g. `brew install webp` on macOS, `apt install webp` on Linux).
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = process.cwd();
const OUT_ROOT = path.join(ROOT, 'images', 'webp');
const DATA_OUT = path.join(ROOT, '_data', 'image_variants.json');
const WIDTHS = [800, 1600];

function collectFeaturedImages() {
  const paths = new Set();
  for (const dir of ['_projects', '_posts']) {
    const fullDir = path.join(ROOT, dir);
    if (!fs.existsSync(fullDir)) continue;
    for (const file of fs.readdirSync(fullDir)) {
      if (!file.endsWith('.md')) continue;
      const content = fs.readFileSync(path.join(fullDir, file), 'utf8');
      const match = content.match(/^featured_image:\s*['"]?([^'"\n]+)['"]?/m);
      if (match) {
        const imgPath = match[1].trim();
        if (imgPath.startsWith('/images/') && /\.(jpe?g|png)$/i.test(imgPath)) {
          paths.add(imgPath);
        }
      }
    }
  }
  return Array.from(paths).sort();
}

function getDimensions(filePath) {
  // Use macOS sips if available, fallback to parsing via python3/PIL or ffprobe
  try {
    const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', filePath], {
      encoding: 'utf8',
    });
    const w = Number(out.match(/pixelWidth:\s*(\d+)/)?.[1]);
    const h = Number(out.match(/pixelHeight:\s*(\d+)/)?.[1]);
    if (w && h) return { width: w, height: h };
  } catch {
    // Fallback to ffprobe
    const out = execFileSync(
      'ffprobe',
      ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=s=x:p=0', filePath],
      { encoding: 'utf8' }
    ).trim();
    const [w, h] = out.split('x').map(Number);
    if (w && h) return { width: w, height: h };
  }
  return { width: null, height: null };
}

function buildWebp(srcFile, destFile, targetWidth, origWidth) {
  fs.mkdirSync(path.dirname(destFile), { recursive: true });
  const args = ['-q', '80', '-mt'];
  if (origWidth && origWidth > targetWidth) {
    args.push('-resize', String(targetWidth), '0');
  }
  args.push(srcFile, '-o', destFile);
  execFileSync('cwebp', args, { stdio: 'ignore' });
}

const featured = collectFeaturedImages();
const manifest = {};
let origTotal = 0;
let webp800Total = 0;
let webp1600Total = 0;

for (const webPath of featured) {
  const relFromImages = webPath.replace(/^\/images\//, '');
  const srcFile = path.join(ROOT, 'images', relFromImages);
  if (!fs.existsSync(srcFile)) {
    console.warn(`Skipping missing image: ${webPath}`);
    continue;
  }

  const { width, height } = getDimensions(srcFile);
  const parsed = path.parse(relFromImages);
  const entry = { width, height };

  origTotal += fs.statSync(srcFile).size;

  for (const w of WIDTHS) {
    const outRel = path.join(parsed.dir, `${parsed.name}-${w}w.webp`);
    const outFile = path.join(OUT_ROOT, outRel);
    buildWebp(srcFile, outFile, w, width);
    const outUrl = '/images/webp/' + outRel.split(path.sep).join('/');
    entry[`webp_${w}`] = outUrl;
    const sz = fs.statSync(outFile).size;
    if (w === 800) webp800Total += sz;
    if (w === 1600) webp1600Total += sz;
  }

  manifest[webPath] = entry;
}

fs.writeFileSync(DATA_OUT, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

console.log(`Processed ${Object.keys(manifest).length} featured images.`);
console.log(`Original JPEGs total: ${(origTotal / 1024 / 1024).toFixed(2)} MB`);
console.log(`Generated 800w WebP total: ${(webp800Total / 1024 / 1024).toFixed(2)} MB (${Math.round((1 - webp800Total / origTotal) * 100)}% smaller)`);
console.log(`Generated 1600w WebP total: ${(webp1600Total / 1024 / 1024).toFixed(2)} MB (${Math.round((1 - webp1600Total / origTotal) * 100)}% smaller)`);
console.log(`Wrote manifest to _data/image_variants.json`);
