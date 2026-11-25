# Copilot Instructions for vision.hossainkhan.com

## Overview
Jekyll 3.10.0 photography portfolio (~1.2GB, 446 files). Uses licensed Duet theme. Site: https://vision.hossainkhan.com/

**Tech Stack:** Ruby 3.2+, Jekyll, Liquid, SCSS, JavaScript (jQuery 3.2.1), JSON with schema validation

**Critical:** Never commit `_site/` directory (build artifact already in .gitignore)

## Environment Setup & Build

**ALWAYS set these environment variables first to avoid permission errors:**
```bash
export GEM_HOME="$HOME/.gem"
export PATH="$HOME/.gem/bin:$PATH"
```

**Setup (first time):**
```bash
export GEM_HOME="$HOME/.gem" && export PATH="$HOME/.gem/bin:$PATH"
gem install bundler jekyll
bundle install  # Installs jekyll 3.10.0, jekyll-paginate, jekyll-sitemap, kramdown-parser-gfm
```

**Build (~1-2 seconds):**
```bash
export GEM_HOME="$HOME/.gem" && export PATH="$HOME/.gem/bin:$PATH"
bundle exec jekyll build  # Output: _site/ directory
```

**Development server:**
```bash
export GEM_HOME="$HOME/.gem" && export PATH="$HOME/.gem/bin:$PATH"
bundle exec jekyll serve  # http://127.0.0.1:4000/ (add --host 0.0.0.0 for Codespaces)
```

**JSON validation (required if modifying photos.json):**
```bash
npm install -g ajv-cli
ajv validate -s photos-schema.json -d photos.json
```

## Project Structure

**Key Files:**
- `_config.yml` - Jekyll config (collections: pages/posts/projects, paginate: 6, plugins: jekyll-paginate/sitemap)
- `Gemfile`/`Gemfile.lock` - Ruby dependencies (commit lock file)
- `package.json`/`package-lock.json` - Node regression test & image optimization scripts
- `photos.json` - Featured photos data (must validate against photos-schema.json)
- `photos-schema.json` - JSON schema for validation
- `_data/settings.yml` - Theme settings (colors, fonts, menu)
- `_data/image_variants.json` - Auto-generated WebP `800w`/`1600w` paths & intrinsic dimensions for `<picture>` tags
- `script/optimize-images.mjs` - Generates responsive WebP derivatives via `cwebp` and updates `_data/image_variants.json`
- `script/check-site.mjs` - Static validator for internal links, `src`/`srcset` assets, and `photos.json` paths
- `tests/site.spec.js` - Playwright smoke, responsive layout, theme, and axe-core accessibility tests
- `script/cibuild.sh` - CI build script

**Directories:**
- `_layouts/` - Templates (default.html, page.html, post.html, project.html, category.html)
- `_includes/` - Reusable components (header.html, footer.html, contact-form.html, socials.html)
- `_pages/` - Static pages: about.md, contact.md, thanks.md
- `_posts/` - Blog posts (format: YYYY-MM-DD-title.md)
- `_projects/` - Project pages (format: YYYY-MM-DD-title.md)
- `_sass/` - SCSS partials (_basic.scss, _darkmode.scss, _mixins.scss, _plugins.scss, _reset.scss)
- `css/` - Main stylesheets (style.scss - 7252 lines, style-dark.scss)
- `js/` - Scripts (duet.js, jquery-3.2.1.min.js, plugins/)
- `images/` - Static images (~1GB, 31 subdirectories)
- `_site/` - **BUILD ARTIFACT - DO NOT COMMIT**

**Jekyll Collections:**
- pages → `/:name`
- posts → `/blog/:slug`
- projects → `/project/:slug`

## CI/CD - 7 GitHub Actions (run on push/PR to main)

1. **site-regression-ci.yml** - Builds Jekyll, validates all internal links/`src`/`srcset` (`npm run check:site`), and runs Playwright smoke, layout, theme, and axe-core tests (`npm test`)
2. **jekyll-docker.yml** - Docker build with `jekyll/builder:latest`, runs `jekyll build --future`
3. **jekyll.yml** - Standard build + PR stats
4. **validate-json-nodejs.yml** - Node 12.x: `ajv validate -s photos-schema.json -d photos.json`
5. **justify-json.yml** - Java 21: Justify CLI v3.0.0-RC1 JSON validation
6. **json-api-validator.yml** - Docker: `orrosenblatt/validate-json-action`
7. **codeql-analysis.yml** - JavaScript security scanning (weekly + push/PR)

**Pre-commit checklist:**
1. If new featured images were added: `npm run optimize:images` (updates `images/webp/` and `_data/image_variants.json`)
2. Build succeeds: `bundle exec jekyll build` (exit 0)
3. Regression tests pass: `npm test` (exit 0 — validates links/images/`srcset` and runs Playwright suite)
4. JSON valid if changed: `ajv validate -s photos-schema.json -d photos.json` (exit 0)
5. Verify `_site/` and `node_modules/` are not staged: `git status`

## Common Issues

**Permission error on gem install:**
```bash
export GEM_HOME="$HOME/.gem" && export PATH="$HOME/.gem/bin:$PATH"
```

**Bundler version mismatch:** Let bundler auto-install correct version (2.5.17 in Gemfile.lock)

**_site committed by mistake:**
```bash
git rm -r --cached _site
```

**Sass deprecation warning:** Expected during `bundle install` - ignore, doesn't affect build

**Missing gems:** Always run `bundle install` before `bundle exec jekyll build`

**GitHub CLI (gh) Sandbox Workaround:**
If you run `gh` commands within the agent sandbox environment, you might encounter permission errors or hook interceptions. To work around this:
1. Explicitly specify the repository using the `--repo` flag:
   ```bash
   gh pr create --repo hossain-khan/vision.hossainkhan.com
   ```
2. Run the command inside a clean shell using `zsh -f -c` to bypass interactive shell initialization scripts and wrapper interceptions:
   ```bash
   zsh -f -c 'gh pr create --repo hossain-khan/vision.hossainkhan.com'
   ```

## Development Workflow

1. Set environment: `export GEM_HOME="$HOME/.gem" && export PATH="$HOME/.gem/bin:$PATH"`
2. Install dependencies: `bundle install`
3. Make changes to markdown/HTML/SCSS files
4. Test locally: `bundle exec jekyll serve` → verify at http://127.0.0.1:4000/
5. Build: `bundle exec jekyll build`
6. If photos.json changed: `ajv validate -s photos-schema.json -d photos.json`
7. Verify no build artifacts: `git status`
8. Commit and push

**Naming conventions:**
- Blog posts: `_posts/YYYY-MM-DD-title.md`
- Projects: `_projects/YYYY-MM-DD-title.md`

## Adding a New Project or Blog Post & Images

Follow these standards whenever adding a new portfolio project (`_projects/`) or blog post (`_posts/`):

1. **Place original images in the right folder:**
   - Portfolio projects: `images/front-page/` (use a web-sized crop for `featured_image`, e.g., `1600x1100`, and keep the full-res original JPEG for the project body if desired).
   - Blog posts & galleries: `images/YYYY-MM/` (create the month folder if needed).
   - **Never commit non-web source files** such as Pixelmator `.pxd`, `.psd`, `.tiff`, or `.raw` files into `images/`.
2. **Create the Markdown file** with front matter:
   ```yaml
   ---
   title: 'Your Title'
   subtitle: 'f: 1.8, t: 1/500, l: 24mm, Camera Model' # EXIF for projects; omit for blog posts
   date: YYYY-MM-DD HH:MM:SS
   featured_image: '/images/front-page/your-image-1600x1100.jpg'
   ---
   ```
   - Always include descriptive `alt` text on body images (`![Descriptive caption](/images/...)`) rather than empty `![](...)`.
3. **Generate responsive WebP variants & intrinsic dimensions:**
   ```bash
   # Requires cwebp (macOS: brew install webp | Ubuntu: sudo apt install webp)
   npm run optimize:images
   ```
   - This leaves your original JPEGs untouched, generates `800w` and `1600w` WebP (`-q 80`) thumbnails under `images/webp/`, and updates `_data/image_variants.json` with their paths and `width`/`height` (used automatically by `<picture>` + `srcset` on `index.html` and `blog/index.html` to cut transfer size and prevent CLS).
   - Commit both the generated `images/webp/...` files and the updated `_data/image_variants.json`. (If a post is added before running the script, templates gracefully fall back to the original JPEG.)
   - Animated `.gif` featured images are automatically skipped and served as-is.
4. **Update `photos.json`** (only if featuring a scenery photo in the public feed — no portraits of individuals) and validate it against `photos-schema.json`.
5. **Verify locally before opening a PR:**
   ```bash
   bundle exec jekyll build && npm test
   ```
   `npm test` checks that every internal link, `src`, `srcset` WebP variant, and `photos.json` asset resolves in `_site/` and passes the Playwright smoke/layout/a11y suite.

**Theme customization:**
- Colors/fonts: `_data/settings.yml` and `_sass/_darkmode.scss` (uses `color-scheme: light dark` and `light-dark()` tokens)
- Styles: `_sass/*.scss` or `css/*.scss`
- Layouts: `_layouts/*.html` or `_includes/*.html`

## Quick Command Reference
```bash
# Full workflow
export GEM_HOME="$HOME/.gem" && export PATH="$HOME/.gem/bin:$PATH"
bundle install
npm ci                          # Install Playwright & axe-core test deps
npm run optimize:images         # Generate 800w/1600w WebP + _data/image_variants.json
bundle exec jekyll build        # Build (~0.5s)
npm test                        # Link/image/srcset check + Playwright E2E/a11y suite
bundle exec jekyll serve        # Develop at http://127.0.0.1:4000/
ajv validate -s photos-schema.json -d photos.json  # Validate JSON

# Clean build
rm -rf _site && bundle exec jekyll build
```

These instructions are validated and complete. Trust them for standard Jekyll workflows.
