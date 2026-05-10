# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Matti Besser (mattibesser.com). Plain static HTML/CSS/JS — no build step required. Hosted on GitHub Pages with `.nojekyll`.

## Deployment

Push to `master` branch. GitHub Pages serves files directly (no Jekyll processing).

## Architecture

**Stack**: Vanilla HTML / inline CSS / vanilla JS

**Key files**:
- `index.html` — entire site: hero with canvas halftone portrait, about, contact, footer. All CSS and JS are inline.
- `legal/index.html` — legal/imprint page (plain HTML)
- `assets/sass/` — legacy SCSS (no longer compiled; kept for reference)
- `img/` — images including `portrait-halftone.png` (source for canvas halftone)
- `favicon.svg` — SVG favicon with light/dark mode support
- `CNAME` — custom domain (mattibesser.com)

**Notable JS in index.html**:
- Canvas halftone portrait — samples `img/portrait-halftone.png` on an off-screen canvas, renders as animated dot grid. Uses `Math.round()` for W/H and `imageData.width` as row stride (Firefox float-precision fix).
- Random colour scheme — fetches an analogic palette from thecolorapi.com on each load
- Typewriter verb animation
- Scroll reveal

**Deployment**: Push to `master` triggers GitHub Pages build
