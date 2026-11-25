#!/usr/bin/env node
/**
 * Minimal static file server for `_site/` with Jekyll clean-URL support.
 * Used by Playwright during local and CI test runs.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const SITE_DIR = path.resolve(process.cwd(), '_site');
const PORT = Number(process.env.PORT || 4173);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.webmanifest': 'application/manifest+json',
};

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  const rel = clean.replace(/^\/+/, '');
  const candidates = rel
    ? [
        path.join(SITE_DIR, rel),
        path.join(SITE_DIR, `${rel}.html`),
        path.join(SITE_DIR, rel, 'index.html'),
      ]
    : [path.join(SITE_DIR, 'index.html')];

  for (const candidate of candidates) {
    const resolved = path.resolve(candidate);
    if (!resolved.startsWith(SITE_DIR)) continue;
    if (fs.existsSync(resolved) && fs.statSync(resolved).isFile()) {
      return resolved;
    }
  }
  return null;
}

const server = http.createServer((req, res) => {
  const filePath = resolveFile(req.url || '/');
  if (!filePath) {
    const notFound = path.join(SITE_DIR, '404.html');
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    if (fs.existsSync(notFound)) {
      fs.createReadStream(notFound).pipe(res);
    } else {
      res.end('Not Found');
    }
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Serving _site/ at http://127.0.0.1:${PORT}`);
});
