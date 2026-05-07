# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Matti Besser (mattibesser.com) built with Jekyll static site generator, hosted on GitHub Pages.

## Build Commands

Requires Homebrew Ruby (not system Ruby). Set PATH before running:
```bash
export PATH="/usr/local/opt/ruby/bin:$PATH"
```

Then run:
```bash
bundle install                         # Install Ruby dependencies (uses vendor/bundle)
bundle exec jekyll serve               # Start dev server at localhost:4000
bundle exec jekyll serve --livereload  # Dev server with auto-reload
bundle exec jekyll build               # Build static site to _site/
bundle exec jekyll clean               # Clean generated files
```

## Architecture

**Stack**: Jekyll 3.10 / Ruby 3.4 / SCSS / Liquid templates / GitHub Pages

**Layout Hierarchy**:
- `_layouts/default.html` → base layout for all pages
- `_layouts/homepage.html` → homepage (extends default)
- `_layouts/case_study.html` → portfolio items (extends default)
- `_layouts/post.html` → blog posts (extends default)

**Content Collections**:
- `_case_studies/` → Portfolio case studies (Markdown with YAML front matter)
- `_posts/` → Blog posts
- `_data/` → Shared data (clients.yml, testimonials.yml)

**Styling**:
- `assets/sass/globals/_variables.scss` → Colors, spacing, breakpoints
- `assets/sass/globals/_mixins.scss` → Responsive breakpoint mixins
- SCSS is compiled inline via `_includes/htmlhead.html`
- Responsive: mobile-first with `@include respond-to(small/medium/large)`

**Key Includes** (`_includes/`):
- `site_header.html`, `site_footer.html` → Site chrome
- `home.html`, `work.html`, `services.html`, `contact.html` → Homepage sections
- `case_studies/` → Case study components (key_facts, roles, testimonials)

## Content Workflow

**Add a case study**: Create `_case_studies/NN_slug.md` with front matter including `project_name`, `title`, `published: true`, add images to `img/{project}/`

**Deployment**: Push to `master` branch triggers automatic GitHub Pages build
