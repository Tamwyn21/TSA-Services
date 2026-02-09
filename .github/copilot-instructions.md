# GitHub Copilot Instructions — TSA Services 🔧

## Summary
- Small React + Vite single-page site using **React 19**, **Vite (rolldown-vite)** and **Tailwind CSS v4**.
- Key folders: `src/components` (UI pieces), `src/assets` (all images/icons and central `assets.js`), `src/index.css` (Tailwind + theme), project config in root (`vite.config.js`, `package.json`, `eslint.config.js`).

## Quick start ⚡
- Dev server: `npm run dev` (Vite with HMR)
- Build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint` (ESLint is enabled via `eslint.config.js`)

## Architecture & Data flow 💡
- App root (`src/App.jsx`) manages **theme** (stored in `localStorage`) and passes `theme` / `setTheme` down to `Navbar` and `ThemeToggleBtn`.
- `src/assets/assets.js` centralizes static asset imports and exports a default `assets` object plus named exports like `company_logos` and `teamData`. Components import this as `import assets from '../assets/assets'`.
- Components are small, presentational, and follow PascalCase filenames with default exports (`ServiceCard.jsx`, `Title.jsx`, etc.). Tailwind classes live inline in JSX.

## Project-specific conventions ✅
- Use default exports for components and name files `PascalCase.jsx`.
- Centralize images in `src/assets/assets.js` and reference properties (e.g. `assets.logo` or `company_logos`).
- Dark mode is implemented by toggling the `dark` class on `document.documentElement`. CSS uses Tailwind utilities; `src/index.css` also includes a `@custom-variant` used for dark selectors.
- Linting rule of note: `no-unused-vars` (with `varsIgnorePattern: '^[A-Z_]'`) — keep imports tidy to avoid lint errors.

## Known issues & specific, fixable examples 🩺
> These are *discoverable* problems you will likely be asked to fix — include small, testable changes and run `npm run lint` and `npm run dev` after.

- Missing imports
  - `App.jsx` references `Hero`, `TrustedBy`, `Services` but does not import them. Add e.g.:
    ```js
    import Hero from './components/Hero'
    import TrustedBy from './components/TrustedBy'
    import Services from './components/Services'
    ```
- `ThemeToggleBtn.jsx` typos & logic
  - Bug: uses `DocumentTimeline.documentElement` (typo). Replace with `document.documentElement`.
  - Ensure initial `setTheme` logic does not cause infinite re-renders (validate `useEffect` dependencies).
- `ServiceCard.jsx` issues
  - Missing `useState` import and several typos (`visibile` vs `visible`, unquoted class names like `opacity-70`). Fix imports and string interpolation.
- Components referencing `assets` but not importing
  - `Hero.jsx` and `Services.jsx` refer to `assets` but do not `import assets from '../assets/assets'`.

## How to approach edits (recommended process) 🧭
1. Run `npm run lint` and address obvious linter errors first.
2. Start the dev server `npm run dev` to see HMR feedback for UI fixes.
3. Make small, focused commits (e.g., `fix(theme): correct document reference in ThemeToggleBtn`) and include the lint output if relevant.
4. For behavioral fixes (theme toggle, stateful components), add minimal unit/integration tests if you introduce new logic (note: repo currently has no test harness configured—add one only if scoped and agreed on).

## Files to inspect when diagnosing UI/behavior issues 🔎
- `src/App.jsx` — app-level state and composition
- `src/components/*` — small components; look for missing imports or hooks
- `src/assets/assets.js` — canonical place for images/icons
- `src/index.css` — Tailwind entry + custom variants
- `vite.config.js` / `package.json` — dev/build commands and plugins

## When in doubt — communication cues ✉️
- Ask for confirmation before refactoring multiple files at once.
- If a fix requires adding a dependency or changing build config, raise an issue or PR that documents the reason and rollback plan.

---
If anything here is unclear or you'd like more specific examples (e.g., a ready-made PR that fixes the Theme toggle + one ServiceCard), tell me which area to expand and I will iterate. ✅