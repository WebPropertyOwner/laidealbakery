# La Ideal 2 — Static Site (GitHub Pages)

This folder is a self-contained static version of the bakery landing page.
It's pure HTML/CSS — no build step, no server, no dependencies.

## Publish on GitHub Pages

1. Push this project to GitHub (Lovable → **+** menu → GitHub → Connect).
2. On GitHub, open your repo → **Settings** → **Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and **Folder** to `/docs`. Click **Save**.
5. Wait ~1 minute. GitHub shows your live URL:
   `https://<your-username>.github.io/<repo-name>/`

## Updating

Edit `docs/index.html` (text and prices) or swap images in `docs/assets/`.
Push to GitHub and the live site updates automatically.

## What to customize

- Phone number: search `+10000000000` and `(000) 000-0000` in `index.html`
- Address + hours: in the "Visit Us" section
- Prices: in the "Menu" section