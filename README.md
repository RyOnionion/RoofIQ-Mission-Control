# RoofIQ Mission Control v1

Clean Next.js starter for the Great American Expansion / Mission Control concept.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Works on Vercel or Netlify with Next.js support.

Build command:

```bash
npm run build
```

## Structure

- `app/layout.tsx` is the dumb root layout.
- `app/(mission)/layout.tsx` wraps all app routes in the Mission Control shell.
- `components/mission-control` contains the persistent sidebar/header/app shell.
- `data/mock` contains mock territories and campaigns.
