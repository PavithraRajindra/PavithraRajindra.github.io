# Pavithra Rajindra — Portfolio

A retro pixel-desktop portfolio built with **React + Vite**. Static output, deploys to Vercel with zero config.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the build locally
```

Requires Node 18+.

## Edit content

Everything you see (projects, experience, education, skills, links) lives in **`src/data.js`**.
Change text there — no component code needed.

- **Featured projects** → `featured` (big cards). `terminal` = the lines shown in the card's mini terminal, `hue` = card colour (`blue`, `peach`, `mint`, `lilac`, `yellow`), `link` is optional.
- **Archive** → `archive` (the file-explorer list).
- **Résumé** → put your PDF at `public/resume.pdf` (the CV icon, footer and links point to `/resume.pdf`).

## Deploy to Vercel

**Option A — GitHub (recommended)**
1. Create a new GitHub repo and push this folder:
   ```bash
   git init && git add . && git commit -m "portfolio"
   git branch -M main
   git remote add origin https://github.com/PavithraRajindra/portfolio.git
   git push -u origin main
   ```
2. On vercel.com → **Add New → Project** → import the repo.
3. Vercel auto-detects **Vite** (build `npm run build`, output `dist`). Click **Deploy**.

**Option B — CLI**
```bash
npm i -g vercel
vercel          # first deploy (preview)
vercel --prod   # production
```

## Features

- Desktop-style hero with live clock, draggable windows (grab the title bars), and a clickable sidekick robot, Bit
- Light / dark theme toggle (remembered per browser)
- Pixel-dissolve transition, layered project cards with animated mini-terminals
- Tabbed `experience.exe` and `skills.dir` windows, file-explorer project archive
- Fixed pixel dock for navigation, scroll reveals, fully responsive, respects reduced-motion
