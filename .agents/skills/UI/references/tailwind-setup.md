# Tailwind + next/font Setup

Read this when scaffolding or configuring the Next.js project itself (first setup, or when a component needs a Tailwind class that doesn't exist yet).

## 1. Install

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

Tailwind should already be set up by `create-next-app`. If not:

```bash
npx create-next-app@latest . --typescript --tailwind --app --eslint
```

## 2. Font — `app/layout.tsx`

Use `next/font/google` for Inter as the fallback font (renders as real SF Pro automatically on Apple devices via the `-apple-system` stack; Inter covers everyone else).

```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

## 3. Import tokens — `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "./design-tokens.css"; /* copy references/design-tokens.css into your project, e.g. app/design-tokens.css */

body {
  background: var(--bg-primary);
  color: var(--label-primary);
  font-family: var(--font-sans);
}
```

## 4. `tailwind.config.ts` — wire tokens into Tailwind's theme

This lets you write `bg-bg-secondary`, `text-label-secondary`, `rounded-xl`, `shadow-md`, `duration-card`, etc. and have them resolve to the design tokens instead of Tailwind's defaults.

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" }, // cap real content width at 1200px
    },
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-tertiary": "var(--bg-tertiary)",
        "label-primary": "var(--label-primary)",
        "label-secondary": "var(--label-secondary)",
        "label-tertiary": "var(--label-tertiary)",
        "label-quaternary": "var(--label-quaternary)",
        separator: "var(--separator)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          active: "var(--accent-active)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      spacing: {
        18: "72px",
        22: "88px",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.28, 0.11, 0.32, 1)",
      },
      transitionDuration: {
        hover: "180ms",
        press: "100ms",
        card: "250ms",
        reveal: "500ms",
        hero: "700ms",
      },
      maxWidth: {
        container: "1200px",
        prose: "70ch",
      },
    },
  },
  plugins: [],
};

export default config;
```

## 5. `lib/cn.ts` — className helper (used across all components)

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## 6. Usage examples with the wired tokens

```tsx
<section className="bg-bg-secondary py-20 md:py-24">
  <div className="container">
    <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-accent mb-3">
      Our Services
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-label-primary tracking-tight">
      Everything your move needs, handled.
    </h2>
  </div>
</section>

<button className="rounded-pill bg-accent text-white px-6 py-3 text-[17px] font-semibold
  shadow-sm hover:bg-accent-hover hover:shadow-md active:scale-[0.97]
  transition-all duration-hover ease-apple">
  Get a Free Quote
</button>
```

Next: see `references/components.md` for full component code following these patterns.
