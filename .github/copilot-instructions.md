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
- `photos.json` - Featured photos data (must validate against photos-schema.json)
- `photos-schema.json` - JSON schema for validation
- `_data/settings.yml` - Theme settings (colors, fonts, menu - 182 lines)
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

## CI/CD - 6 GitHub Actions (run on push/PR to main)

1. **jekyll-docker.yml** - Docker build with `jekyll/builder:latest`, runs `jekyll build --future`
2. **jekyll.yml** - Standard build + PR stats
3. **validate-json-nodejs.yml** - Node 12.x: `ajv validate -s photos-schema.json -d photos.json`
4. **justify-json.yml** - Java 21: Justify CLI v3.0.0-RC1 JSON validation
5. **json-api-validator.yml** - Docker: `orrosenblatt/validate-json-action`
6. **codeql-analysis.yml** - JavaScript security scanning (weekly + push/PR)

**Pre-commit checklist:**
1. Build succeeds: `bundle exec jekyll build` (exit 0)
2. JSON valid if changed: `ajv validate -s photos-schema.json -d photos.json` (exit 0)
3. Verify `_site/` not staged: `git status`

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

**Theme customization:**
- Colors/fonts: `_data/settings.yml`
- Styles: `_sass/*.scss` or `css/*.scss`
- Layouts: `_layouts/*.html` or `_includes/*.html`

## Quick Command Reference
```bash
# Full workflow
export GEM_HOME="$HOME/.gem" && export PATH="$HOME/.gem/bin:$PATH"
bundle install
bundle exec jekyll build        # Build (1-2s)
bundle exec jekyll serve        # Develop
ajv validate -s photos-schema.json -d photos.json  # Validate JSON

# Clean build
rm -rf _site && bundle exec jekyll build
```

These instructions are validated and complete. Trust them for standard Jekyll workflows.
