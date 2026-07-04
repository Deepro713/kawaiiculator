# Kawaiiculator ♡ (｡◕‿◕｡)

A **kawaii collection of calculators** for every domain — each one hosted by its own
little anime chibi pet friend, with a matching pastel colour scheme. Built with
**Next.js** (App Router) and deployed on **Vercel**.

## The friends

| Calculator | Pet | Domain |
|---|---|---|
| **Basic** | 🐱 Mochi the cat | Everyday arithmetic (with keyboard support!) |
| **Tip Splitter** | 🐶 Biscuit the puppy | Dining — split the bill fairly |
| **BMI** | 🐰 Momo the bunny | Health — metric & imperial |
| **Unit Converter** | 🦊 Kon the fox | Length, weight & temperature |
| **Loan** | 🐻 Kuma the bear | Finance — monthly payments & interest |
| **Age** | 🐼 Dango the panda | Time — days alive & next birthday |
| **Percentage** | 🐧 Pomu the penguin | Math — % of / is what % / % change |
| **Love** | 🦄 Yumeko the unicorn | Just for fun ♡ |

Every mascot is drawn as **inline SVG** — crisp at any size, theme-tinted via CSS
variables, and needing zero external image assets.

## Tech

- Next.js 15 (App Router) + React 19 + TypeScript
- Pure CSS design system (pastel accent themes per pet, rounded kawaii fonts:
  Baloo 2 + Quicksand via `next/font`)
- No runtime dependencies beyond Next/React — every calculation runs client-side

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

made with ♡ &amp; a lot of blush
