<div align="center">

# Kawaiiculator ♡ (｡◕‿◕｡)

**A kawaii collection of calculators for every domain — each one hosted by its own little anime chibi pet friend.**

[![Live on Vercel](https://img.shields.io/badge/live-kawaiiculator.vercel.app-ff9ec4?style=for-the-badge)](https://kawaiiculator.vercel.app)
&nbsp;
![Next.js](https://img.shields.io/badge/Next.js-15-000?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)

### ✦ [**Try it live → kawaiiculator.vercel.app**](https://kawaiiculator.vercel.app) ✦

</div>

---

## 🐾 Meet the friends

Eight little chibi pets, each an expert at their own kind of math. Pick a friend and let them crunch the numbers for you~

| Calculator | Pet | Domain | What it does |
|---|---|---|---|
| **Basic** | 🐱 Mochi the cat | Everyday | Full keypad arithmetic — *works with your keyboard too!* |
| **Tip Splitter** | 🐶 Biscuit the puppy | Dining | Split any bill by tip % and number of people |
| **BMI** | 🐰 Momo the bunny | Health | Body-mass index in metric **or** imperial units |
| **Unit Converter** | 🦊 Kon the fox | Science | Length, weight & temperature, instantly converted |
| **Loan** | 🐻 Kuma the bear | Finance | Monthly payment, total interest & payment count |
| **Age** | 🐼 Dango the panda | Time | Exact age, days alive & countdown to your next 🎂 |
| **Percentage** | 🐧 Pomu the penguin | Math | *% of* · *is what %* · *% change* — three modes |
| **Love** | 🦄 Yumeko the unicorn | Just for fun ♡ | Two names, one magical (100% whimsy) match |

> Every mascot is drawn as **inline SVG** — big sparkly eyes, blushy cheeks, theme-tinted via CSS variables — so they stay crisp at any size and need **zero external image assets**.

## ✨ Highlights

- **A pet per domain** — each calculator has its own chibi friend, matching pastel colour scheme, and cute one-liner.
- **Fits your window** — the whole app is sized to the viewport (`100dvh`), so there's no awkward page scroll; small screens fall back to a comfy scrollable layout.
- **Everything is client-side** — no backend, no tracking, no dependencies beyond Next/React. Your numbers never leave the browser.
- **Kawaii by design** — floaty pastel background blobs, soft rounded cards, hover wiggles, and rounded fonts (Baloo 2 + Quicksand).

## 🛠️ Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Pure CSS** design system — per-pet accent themes, `clamp()`-based responsive spacing, `next/font` for the typefaces
- Deployed on **Vercel**

## 📁 Project structure

```
kawaiiculator/
├── app/
│   ├── layout.tsx            # fonts + metadata
│   ├── page.tsx              # home — the grid of pet friends
│   ├── globals.css           # the whole kawaii design system
│   ├── components/
│   │   ├── Pet.tsx           # 8 inline-SVG chibi mascots
│   │   └── CalcShell.tsx     # shared themed page wrapper
│   └── <calculator>/page.tsx # one folder per calculator
└── lib/
    └── calculators.ts        # registry: pet, domain, accent & copy
```

## 🚀 Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

---

<div align="center">

made with ♡ &amp; a lot of blush

</div>
