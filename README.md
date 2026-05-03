# Sudhakaran C — Portfolio Website

A clean, professional, dark-themed portfolio website.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All content & structure — edit text here |
| `style.css`  | All styling & layout — edit colours/fonts here |
| `script.js`  | Animations & interactivity |
| `README.md`  | This file |

## How to Open Locally

Just double-click `index.html` — it opens in any browser.
No server or install needed.

## How to Deploy on GitHub Pages

1. Create a GitHub repo named: `sudhakaran-c.github.io`
2. Upload all 4 files to the root of the repo
3. Go to **Settings → Pages → Source → main branch → Save**
4. Live at: `https://sudhakaran-c.github.io` within ~2 minutes

## Quick Customisation

### Change accent colour
Open `style.css`, find `:root` at the top, edit `--accent`:
```css
--accent: #00d4ff;   /* cyan (default) */
--accent: #7c3aed;   /* purple */
--accent: #16a34a;   /* green */
```

### Add a new client to the timeline
In `index.html`, copy any `<!-- Client N -->` block inside `.tl` and update the content.

### Update skill bar percentage
Find `data-w="90"` on any `.bf` element and change the number (0–100).

### Add a new project card
Copy any `.prc` block inside `.pg` and update title, description, and stack tags.

## Tech Stack
- HTML5 · CSS3 · Vanilla JavaScript
- Fonts: DM Serif Display · Outfit · JetBrains Mono (Google Fonts)
- No frameworks. No dependencies.
