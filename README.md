# Dhyanish Marbles

Production website for Dhyanish Marbles, Ahmedabad. The site showcases marble,
granite, natural quartzite, onyx, CNC stone wall panels, and bespoke stone
furniture.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

Next.js exports the complete static site to `out/`. Netlify uses the settings in
`netlify.toml` to publish that directory without a server runtime.

## Deployment

Pushes to the production branch trigger a Netlify build and deployment. The
production URL is `https://dhyanish-marbles.netlify.app`.
