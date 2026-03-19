# CLAUDE.md — vcalldeal

AI assistant context for the vcalldeal codebase.

---

## Project Overview

**VCALLDEAL** is a Spanish-language car marketplace landing page targeting US-based Spanish-speaking customers. It presents a simple value proposition ("find the car you want without arguing with dealers") and drives conversions via WhatsApp and a search CTA.

**Current state:** Early-stage prototype — a single static React page with no backend, no build config, and no package.json.

---

## Repository Structure

```
vcalldeal/
├── index.html      # HTML entry point (lang="es")
├── main.jsx        # React 18 bootstrap — mounts <App /> into #root
├── App.jsx         # Single functional component — all UI lives here
├── index.css       # Tailwind CSS directives only
└── README.md       # One-line project title, no content
```

No package.json, no bundler config, no test files, no CI/CD.

---

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| UI        | React 18 (functional components)  |
| Styling   | Tailwind CSS (utility-first)      |
| Bundler   | Vite (implied by JSX module refs) |
| Language  | JavaScript (JSX, no TypeScript)   |
| Backend   | None                              |
| Database  | None                              |

> React and ReactDOM are imported in `main.jsx` and `App.jsx` but not declared in any package.json (the file does not exist). A Vite + Tailwind setup is the most likely intended toolchain.

---

## App.jsx — Component Breakdown

The entire UI is one stateless component (`App.jsx`):

| Section  | Lines   | Description                                                             |
|----------|---------|-------------------------------------------------------------------------|
| Header   | 6–14    | VCALLDEAL logo (red), nav links (Inicio, Buscar Autos, Cómo Funciona, Contacto) — all `href="#"` placeholders |
| Hero     | 15–26   | 80vh section, Unsplash background image, dark overlay, headline, 2 CTAs |
| Footer   | 27–30   | Phone, email, copyright                                                 |

### Hardcoded values

- WhatsApp link: `https://wa.me/12393797699` (+1-239-379-7699)
- Contact email: `infovcall@gmail.com`
- Hero background: Unsplash URL (hardcoded, no environment variable)
- Copyright year: 2025

---

## Conventions

### Language
- UI content is in **Spanish** (`lang="es"` on `<html>`).
- Code identifiers and comments should be in **English**.

### Styling
- Use **Tailwind CSS utility classes** exclusively. No custom CSS beyond the three Tailwind directives in `index.css`.
- Inline `style` props are acceptable only for dynamic values (e.g., `backgroundImage`).

### Components
- **Functional components** only — no class components.
- One component per file; filename matches the component name (PascalCase).
- Files use `.jsx` extension.

### No state or hooks yet
The current codebase has zero `useState`, `useEffect`, or any other hooks. When adding interactivity, introduce hooks minimally and co-locate them with the component that needs them.

---

## Missing Infrastructure (Critical Gaps)

The following are absent and must be added before the project can be built or deployed:

1. **`package.json`** — no dependency declarations or scripts
2. **Bundler config** — no `vite.config.js` or equivalent
3. **Tailwind config** — no `tailwind.config.js` or `postcss.config.js`
4. **Environment variables** — all business contact info is hardcoded
5. **Tests** — no test runner or test files
6. **CI/CD** — no GitHub Actions or other pipeline

When creating these files, prefer:
- **Vite** as bundler (`npm create vite@latest` scaffolding pattern)
- **Tailwind CSS v3** with PostCSS
- **Vitest** for unit tests if tests are added

---

## Development Setup (Recommended — not yet configured)

Once package.json exists:

```bash
npm install
npm run dev      # Start dev server (Vite default: http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

---

## Git

- **Main branch:** `master` (GitHub default for this repo)
- **Active dev branch:** `claude/add-claude-documentation-ujNdo`
- Remote: `http://local_proxy@127.0.0.1:36659/git/vcall405/vcalldeal`
- Configured commit author: Claude <noreply@anthropic.com>

Commit messages should be short, imperative, and descriptive (e.g., `Add package.json with Vite and Tailwind`, `Replace hardcoded phone with env variable`).

---

## What to Avoid

- Do not add TypeScript unless explicitly requested — the project uses plain JSX.
- Do not introduce CSS modules or styled-components — Tailwind only.
- Do not add a backend or API layer without explicit scope agreement.
- Do not change the Spanish UI text without confirming with the project owner.
- Do not commit secrets (API keys, credentials) — use `.env` files and add them to `.gitignore`.
