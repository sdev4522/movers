---
name: apple-glass-moving-ui
description: Apple-inspired (apple.com / iOS) design system for building a Packers & Movers marketing website in Next.js — colors, typography, spacing, border radius, shadows, glassmorphism, and micro-animation rules, plus ready-to-use component patterns (navbar, hero, services grid, process timeline, testimonials, contact-only lead form, footer). Use this skill whenever the user is building, styling, or reviewing ANY page/component for this moving-company site, whenever they mention "apple style", "glassmorphism", "glass ui", "clean minimal ui", or ask for a hero/navbar/card/button/form for this project — even if they don't say "design system" explicitly. This is a no-booking, contact-form-only marketing site — never add booking/checkout/payment flows unless the user explicitly asks.
---

# Apple-Style Glassmorphic UI — Packers & Movers Website (Next.js)

This skill is the single source of truth for the visual language of this project. Every component, page, and PR should be checked against it. It is written to be pasted directly into an IDE/AI (Cursor rules, Claude Code, Copilot instructions) as a standing style guide.

## 0. Project Context (read first)

- **Business**: Packers & Movers / Relocation agency (local shifting, office relocation, packing, loading-unloading, warehousing, vehicle transport).
- **Goal of the site**: Pure marketing + trust-building + lead capture. **No online booking, no payments, no login.** The only interactive conversion element is a **Contact / Get a Quote form** that captures details and sends a lead (email/API), nothing else.
- **Stack**: Next.js (App Router), Tailwind CSS, `next/font`, Framer Motion for animation, Lucide (or SF Symbols-style line icons) for icons.
- **Design north star**: apple.com marketing pages + iOS 17/18 system UI — generous whitespace, restrained color, large confident type, soft glass surfaces floating over subtle gradients/imagery, physics-based motion, everything driven by accessible contrast.
- **Never do**: neon gradients, hard drop shadows, skeuomorphism, more than one accent hue at once, cluttered dense layouts, bouncy/cartoonish easing, tiny low-contrast gray-on-gray text.

Read `references/design-tokens.css` for copy-paste CSS variables, `references/tailwind-setup.md` for the Tailwind config wiring, and `references/components.md` for full component code patterns (navbar, hero, service card, contact form, etc.) once you've internalized the rules below.

---

## 1. Color System

Apple UI is built on **neutral surfaces + one restrained accent + system semantic colors**. Do not introduce extra brand hues.

### 1.1 Core neutrals (Light mode)

| Token | Hex | Use |
|---|---|---|
| `--bg-primary` | `#FFFFFF` | Page background |
| `--bg-secondary` | `#F5F5F7` | Section alt background (Apple's signature off-white) |
| `--bg-tertiary` | `#FBFBFD` | Card background on white sections |
| `--label-primary` | `#1D1D1F` | Headlines, primary text (near-black, never pure `#000`) |
| `--label-secondary` | `#6E6E73` | Body copy, subheads |
| `--label-tertiary` | `#86868B` | Captions, meta text, placeholders |
| `--label-quaternary` | `#D2D2D7` | Disabled text, faint dividers |
| `--separator` | `rgba(0,0,0,0.08)` | Hairline borders |
| `--separator-opaque` | `#D2D2D7` | Solid dividers |

### 1.2 Core neutrals (Dark mode — if/when added)

| Token | Hex |
|---|---|
| `--bg-primary` | `#000000` |
| `--bg-secondary` | `#1D1D1F` |
| `--bg-tertiary` | `#161617` |
| `--label-primary` | `#F5F5F7` |
| `--label-secondary` | `#98989D` |
| `--label-tertiary` | `#6E6E73` |
| `--separator` | `rgba(255,255,255,0.12)` |

### 1.3 Accent (pick ONE, use everywhere)

- **Primary accent**: `#0071E3` (Apple blue — trust, reliability, calm). Hover/active: `#0077ED` / `#005BB8`.
- Use accent **only** for: primary CTA buttons, links, focus rings, active nav indicator, icon highlight on hover, form field focus border.
- Do **not** use accent as a large background fill except inside a hero gradient overlay at low opacity.

### 1.4 Semantic (system) colors — use sparingly, for status only

| Purpose | Hex |
|---|---|
| Success (form submitted, "on time") | `#34C759` |
| Warning | `#FF9500` |
| Error / required-field | `#FF3B30` |
| Info | `#0071E3` (same as accent) |

### 1.5 Gradients (hero / glass backdrops only)

Apple-style gradients are **soft, low-saturation, multi-stop meshes** — never a hard 2-color diagonal.

```css
--hero-gradient: radial-gradient(120% 120% at 20% 0%, #E8F1FF 0%, #F5F5F7 45%, #FFFFFF 100%);
--hero-gradient-dark: radial-gradient(120% 120% at 20% 0%, #0A1E33 0%, #0D0D0F 50%, #000000 100%);
```

Use a gradient **behind** glass cards, never behind plain body text without a scrim.

### 1.6 Contrast rules (non-negotiable)

- Body text on `--bg-primary`/`--bg-secondary` must hit **WCAG AA (4.5:1)** minimum; headlines can drop to **3:1** only at ≥24px/bold.
- Never place `--label-secondary` or lighter directly on a glass surface over a busy photo — add a scrim (`rgba(0,0,0,0.25)` or `rgba(255,255,255,0.5)`) first.
- White text on the accent blue `#0071E3` passes AA — safe for buttons.
- Placeholder text (`--label-tertiary`) is decorative only — never the sole label for a required form field (always pair with a real `<label>`).

---

## 2. Typography

### 2.1 Font stack

Apple's actual font (SF Pro) isn't freely licensed for arbitrary web embedding. Use the system-font stack first (renders as real SF Pro on Apple devices), with **Inter** as the closest-metric open fallback everywhere else.

```css
--font-sans:
  -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text",
  "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
```

In Next.js, load Inter via `next/font/google` and set it as the fallback CSS variable — see `references/tailwind-setup.md`.

### 2.2 Type scale

Apple type is **large, confident, tight tracking on big sizes, loose-ish on small sizes**. Use this exact scale:

| Role | Size / Line-height | Weight | Letter-spacing | Tailwind class suggestion |
|---|---|---|---|---|
| Display XL (hero) | 64px / 70px (48/54 mobile) | 700 | -0.02em | `text-[64px] leading-[70px] font-bold tracking-[-0.02em]` |
| Display | 48px / 56px (36/42 mobile) | 700 | -0.015em | `text-5xl leading-[56px] font-bold tracking-tight` |
| Title 1 | 34px / 41px | 700 | -0.01em | `text-4xl leading-[41px] font-bold` |
| Title 2 | 28px / 34px | 600 | -0.008em | `text-3xl leading-[34px] font-semibold` |
| Title 3 | 22px / 28px | 600 | -0.004em | `text-2xl leading-[28px] font-semibold` |
| Headline | 17px / 22px | 600 | 0 | `text-[17px] leading-[22px] font-semibold` |
| Body (default) | 17px / 25px | 400 | 0 | `text-[17px] leading-[25px] font-normal` |
| Callout | 16px / 21px | 400 | 0 | `text-base leading-[21px]` |
| Subhead | 15px / 20px | 400 | 0.001em | `text-[15px] leading-5` |
| Footnote | 13px / 18px | 400 | 0.003em | `text-[13px] leading-[18px]` |
| Caption | 12px / 16px | 400–500 | 0.006em | `text-xs leading-4` |

Rules:
- Body copy default is **17px**, not 16px — this is a deliberate Apple signature, keep it.
- Never go below 12px for real content (13px footnote is the practical floor).
- Headlines use `font-bold`/`font-semibold` only — never `font-black`/900 (too heavy, not Apple).
- Max line length for body paragraphs: **60–75 characters** (`max-w-[640px]` or `ch`-based width).
- Section eyebrow labels (small caps-style label above a headline, e.g. "OUR SERVICES") use Footnote size, accent color, `uppercase`, `tracking-[0.08em]`, `font-semibold`.

---

## 3. Spacing System

4pt base grid — every margin/padding/gap must be a multiple of 4.

```
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160
```

| Token | px | Typical use |
|---|---|---|
| `space-1` | 4 | icon-to-label gap |
| `space-2` | 8 | tight inline gaps |
| `space-3` | 12 | form field internal padding (vertical) |
| `space-4` | 16 | default gap between related elements |
| `space-5` | 20 | card internal padding (mobile) |
| `space-6` | 24 | card internal padding (desktop), button padding-x |
| `space-8` | 32 | gap between cards in a grid |
| `space-10` | 40 | gap between sub-blocks inside a section |
| `space-12` | 48 | small section padding (mobile) |
| `space-16` | 64 | section vertical padding (tablet) |
| `space-20` | 80 | section vertical padding (desktop) |
| `space-24` | 96 | hero vertical padding (desktop) |
| `space-40` | 160 | large hero breathing room, top-level page gaps |

Rules:
- Section vertical rhythm on desktop: **80–120px** top/bottom padding. Never less than 64px between major sections.
- Container max-width: `1200px` (apple.com uses ~980–1200px), horizontal padding `24px` mobile / `40px` tablet / `80px` desktop.
- Card internal padding: `24px` minimum, `32px` for feature cards.
- Grid gaps: `24px` mobile, `32px` desktop.

---

## 4. Border Radius

Apple UI uses **large, soft, "continuous-curvature" corners** — never sharp 0–4px corners on cards, never full-circle-only pill buttons everywhere.

| Token | px | Use |
|---|---|---|
| `--radius-xs` | 8 | small chips, badges, input checkboxes |
| `--radius-sm` | 12 | small buttons, tags, tooltips |
| `--radius-md` | 16 | form inputs, small cards |
| `--radius-lg` | 20 | standard content cards, glass panels |
| `--radius-xl` | 28 | large feature cards, modals, hero glass panel |
| `--radius-2xl` | 36 | full-bleed image cards, big hero media frame |
| `--radius-pill` | 980px | primary/secondary CTA buttons, nav pill, filter chips |

Rules:
- Buttons: **pill-shaped** (`rounded-full`) for primary/secondary CTAs — this is the single most recognizable Apple UI signature.
- Cards/panels: `20–28px` radius, consistent across the whole page (pick one and reuse — don't mix 12px and 24px cards on the same grid).
- Inputs: `12–16px` radius, never pill-shaped (pill inputs read as search bars, not form fields).
- Nested radius rule: an inner element's radius should be ≤ outer element's radius minus its padding, so curves stay visually concentric.

---

## 5. Elevation & Shadows

Apple shadows are **soft, low-opacity, multi-layer, and cool-neutral** — never a single hard `0 4px 6px black`.

```css
--shadow-xs: 0 1px 2px rgba(0,0,0,0.04);
--shadow-sm: 0 2px 8px rgba(0,0,0,0.06);
--shadow-md: 0 8px 24px rgba(0,0,0,0.08);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.10);
--shadow-xl: 0 24px 64px rgba(0,0,0,0.12);

/* Glass-specific: shadow gets an added top inner highlight, see §6 */
```

Rules:
- Default resting card: `--shadow-sm`. On hover: transition to `--shadow-md` + subtle `translateY(-2px)`.
- Sticky navbar: `--shadow-xs` only once scrolled (else no shadow, just the glass border).
- Never stack more than one shadow token on the same element.
- No colored shadows (no blue-tinted shadow under a blue button) — keep shadows neutral black at low opacity even under colored elements.

---

## 6. Glassmorphism Spec

This is the site's signature surface treatment. Use it for: sticky navbar, hero CTA panel, floating service-highlight cards over imagery, testimonial cards over the gradient background, mobile menu overlay, quote-form card if placed over a photo/gradient section.

**Do not** apply glass to plain white-on-white sections — glass only reads correctly over an image, gradient, or colored background.

### 6.1 Light-mode glass

```css
.glass {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.6); /* top inner highlight */
  border-radius: var(--radius-xl);
}
```

### 6.2 Dark / over-photo glass (e.g. hero over a truck/moving photo)

```css
.glass-dark {
  background: rgba(20, 20, 22, 0.45);
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  color: #F5F5F7;
}
```

### 6.3 Sticky navbar glass (thinner, less blur, for perf + legibility while scrolling)

```css
.glass-nav {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
```

### 6.4 Glass rules

- Blur range: **12px (nav/thin bars) to 24px (hero/feature cards)**. Never below 8px (looks like a dirty smudge, not glass) or above 32px (kills legibility of what's behind it, tanks perf on mobile).
- Always pair blur with `saturate(150–200%)` — this is what makes Apple's glass feel "alive" instead of gray/washed out.
- Always give glass a **1px semi-transparent border** — without it the edge looks unfinished.
- Always add the `inset 0 1px 0 rgba(255,255,255,0.5–0.6)` top highlight on light glass — this is the subtle "light hitting the top edge" cue.
- Text inside glass must satisfy contrast against the **busiest part of whatever is behind it**, not the average — test over the darkest/lightest patch of the underlying image.
- Performance: `backdrop-filter` is GPU-expensive — cap simultaneous blurred elements on screen to a handful (nav + 1 hero panel + visible cards), and always include the `-webkit-` prefix for Safari.
- Fallback: wrap in `@supports (backdrop-filter: blur(1px))`; provide a solid `rgba(255,255,255,0.92)` background fallback for unsupported browsers.

---

## 7. Motion & Animation

Apple motion is **physics-based, quick to start, gentle to settle** — never linear, never bouncy/cartoonish, never longer than ~600ms for UI feedback.

### 7.1 Easing curves

```css
--ease-apple: cubic-bezier(0.28, 0.11, 0.32, 1);   /* default "apple ease" - snappy start, soft landing */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);        /* symmetric, for simple fades */
--ease-out: cubic-bezier(0, 0, 0.2, 1);             /* entrances */
--ease-in: cubic-bezier(0.4, 0, 1, 1);              /* exits */
```

With Framer Motion, prefer **spring** transitions over duration/easing for anything the user directly touches (buttons, cards, drawers):

```js
transition: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 }
```

For scroll-triggered reveals (non-interactive), use duration + `--ease-out`:

```js
transition: { duration: 0.5, ease: [0, 0, 0.2, 1] }
```

### 7.2 Durations

| Interaction | Duration |
|---|---|
| Hover state (color/shadow/scale) | 150–200ms |
| Button press (scale down) | 100ms |
| Card hover lift | 250ms |
| Section scroll-reveal (fade+slide-up) | 400–600ms |
| Page-level hero entrance | 600–800ms, staggered 80–120ms per child |
| Modal / mobile menu open | 300–400ms |
| Sticky nav background fade-in on scroll | 200ms |

### 7.3 Standard micro-interactions

- **Buttons**: on hover, background lightens/darkens ~8% + `--shadow-sm`→`--shadow-md`; on press, `scale(0.97)` with the spring above; on focus, a 2px accent-color ring offset 2px (`focus-visible` only, never on mouse click).
- **Cards**: on hover, `translateY(-4px)` + shadow bump + (optional) very slight `scale(1.01)`. Combine, don't just do one.
- **Links**: underline slides in from 0-width on hover (150ms `--ease-in-out`), color shifts to accent.
- **Scroll reveal**: elements start `opacity: 0, translateY: 24px`, animate to `opacity: 1, translateY: 0` when ~20% in viewport (use `IntersectionObserver` or Framer's `whileInView`). Stagger children in a grid by 60–100ms.
- **Hero parallax (optional, subtle only)**: background image/gradient moves at 0.3–0.5x scroll speed max — never full parallax that feels janky.
- **Number counters** (e.g. "5000+ moves completed"): animate count-up over 1.2–1.5s when scrolled into view, `--ease-out`.
- **Form field focus**: border color transitions to accent over 150ms, label (if floating-label style) shrinks/moves over 150ms `--ease-in-out`.
- **Toast / success message** after form submit: slide-up + fade-in, 300ms spring, auto-dismiss after ~4s with fade-out.

### 7.4 Motion rules

- Always respect `prefers-reduced-motion: reduce` — fall back to opacity-only fades, no translate/scale, near-instant (≤100ms).
- Never animate more than transform + opacity for scroll reveals (avoid animating `width`/`height`/`top`/`left` — causes layout thrash).
- Nothing should loop infinitely except a genuinely decorative background element (and even then, keep it barely perceptible).
- Stagger, don't simultaneously fire, more than ~6 elements at once.

---

## 8. Layout & Breakpoints

```
sm: 375px   (mobile)
md: 768px   (tablet)
lg: 1024px  (small desktop)
xl: 1280px  (desktop)
2xl: 1440px (large desktop, content still caps at 1200px container)
```

- Container: `max-width: 1200px; margin-inline: auto; padding-inline: 24px (mobile) / 40px (md) / 80px (xl)`.
- Grid: services/features use a **3-column grid on desktop, 2 on tablet, 1 on mobile** (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`), `gap-8`.
- Hero: full-bleed background (image or gradient), content constrained to container, glass panel or plain content centered/left-aligned, min-height `80vh` desktop / `70vh` mobile — never a full `100vh` locked hero (feels app-like, not marketing-like).
- Always design mobile-first; verify the glass/blur and large type scale gracefully step down (see §2 mobile sizes in the type table).

---

## 9. Page Structure for This Site (recommended section order)

1. **Sticky glass navbar** — logo, 4–5 nav links, phone number (click-to-call) or "Get a Free Quote" pill button (accent, always visible).
2. **Hero** — gradient or photo background, Display XL headline (e.g. "Moving, made effortless."), one-line subhead in `--label-secondary`, primary CTA pill ("Get a Free Quote") + secondary ghost/text button ("Call us: +91 ..."), optional trust row (years in business / cities served / moves completed) in Footnote size.
3. **Trust bar** — logos/badges or simple stat row (glass or plain), e.g. "10,000+ Moves", "50+ Cities", "4.8★ Rated".
4. **Services grid** — cards: Local Shifting, Office/Corporate Relocation, Packing Services, Loading & Unloading, Warehousing & Storage, Vehicle Transportation. Each card: icon, Title3 heading, one-sentence Body/Callout description, no CTA per card (whole card links or opens detail).
5. **How it works / Process** — 3–4 step horizontal (desktop) / vertical (mobile) timeline: Enquiry → Site Survey/Quote → Packing & Moving → Safe Delivery. Numbered circles, connecting line, Headline + Callout per step.
6. **Why choose us** — 4–6 feature bullets (icon + Headline + short Callout) in a grid, e.g. Trained Staff, Insured Goods, Transparent Pricing, On-Time Delivery.
7. **Gallery / fleet & team photos** — image grid, generous radius (`--radius-2xl`), soft shadow, no captions cluttering the image.
8. **Testimonials** — glass cards over a soft gradient section, avatar/initial + name + city + short quote (Callout size), optionally a simple carousel.
9. **Contact / Get a Quote section (the ONLY form on the site)** — see §10 below in detail.
10. **Footer** — logo, short tagline, nav links, service area list, contact info (phone/email/address), social icons, copyright line in Footnote/Caption size on `--bg-secondary`.

---

## 10. The Contact Form (this is the entire "conversion" surface — no booking/payment anywhere)

Fields (keep it short — this is a lead form, not a checkout):

- Full Name (required)
- Phone Number (required, tel input, basic pattern validation)
- Email (optional or required — your call, but don't require both phone AND email)
- Moving From (city/area)
- Moving To (city/area)
- Preferred Moving Date (optional, date input)
- Service Type (select: Local / Office / Full Packing / Storage / Vehicle Transport)
- Message / Additional Details (textarea, optional)
- Primary submit button: pill, accent, full-width on mobile, e.g. **"Get My Free Quote"**

UI treatment:
- Present as a card: `--radius-xl`, `--shadow-md`, either plain `--bg-tertiary` on a plain section, or `.glass` if the section sits on a gradient/photo background.
- Two-column field layout on desktop (`grid-cols-2 gap-4`), single column on mobile.
- Inputs: `--radius-md` (16px), `1px solid --separator`, `16px` vertical padding, `16–17px` font, focus state = accent border + subtle accent-tinted `--shadow-xs` glow, smooth 150ms transition.
- Inline validation: red (`#FF3B30`) helper text under a field only after blur/submit attempt — never red-outline a field before the user has interacted with it.
- On submit: disable button, show a small spinner (or Apple-style pulsing dot), replace with success state ("Thanks — we'll call you within a few hours.") using the toast pattern from §7.3. No page reload, no redirect to a "checkout" — this is a lead capture, not a transaction.
- Do not add: cart, price calculator with live totals-as-checkout, saved payment info, account creation, multi-step "booking wizard" beyond simple progressive disclosure of the fields above. If the user later asks for any of these, confirm with them first since it contradicts the "contact form only" brief.

---

## 11. Icons

- Use a single consistent line-icon set (Lucide is a good default: `lucide-react`), **2px stroke weight, rounded line caps**, no filled/duotone icons mixed in.
- Icon sizing: 20px inline with text, 24px in nav/buttons, 32–40px in feature/service cards inside a soft circular/rounded-square tinted background (`bg-accent/10`, `rounded-2xl` or `rounded-full`, icon in accent color).
- Never mix icon styles (no Font Awesome solid next to Lucide line icons).

---

## 12. Accessibility Checklist (apply to every component)

- All interactive elements reachable by keyboard, visible `focus-visible` ring (2px accent, 2px offset).
- Color is never the only signal (pair error color with icon/text, not just a red border).
- All images have descriptive `alt` text (esp. truck/team/gallery photos).
- Form: every input has a real associated `<label>` (visually can be small Footnote-size label above the field — not a placeholder-only field).
- Maintain WCAG AA contrast everywhere per §1.6, especially text over glass/gradient.
- Respect `prefers-reduced-motion` per §7.4.
- Tap targets ≥ 44×44px on mobile (buttons, nav links, form checkboxes).

---

## 13. Quick Reference — "Is this on-brand?" checklist

Before shipping any component, confirm:

- [ ] Uses only tokens from §1 (color), §2 (type), §3 (space), §4 (radius) — no ad-hoc hex codes or arbitrary px values.
- [ ] One accent color only (`#0071E3` family), everything else neutral + semantic-only-when-needed.
- [ ] Buttons are pill-shaped; cards use one consistent radius across the page.
- [ ] Shadows are soft/neutral, never hard or colored.
- [ ] Glass (if used) has blur 12–24px + saturate + 1px border + inner top highlight, and sits over an image/gradient, not plain white.
- [ ] Motion uses `--ease-apple`/spring, 150–600ms range, transform+opacity only, reduced-motion fallback present.
- [ ] Body text is 17px, headlines are bold/semibold (never black/900), line length capped ~70ch.
- [ ] Generous whitespace — when in doubt, add more space, not more color/decoration.
- [ ] No booking/payment/cart/login UI anywhere — the only form is the contact/quote form in §10.

---

## Reference Files

- `references/design-tokens.css` — full copy-paste CSS custom properties (light + dark) for every token in this doc.
- `references/tailwind-setup.md` — `tailwind.config.ts` wiring, `next/font` setup for Inter, and global CSS glass utility classes.
- `references/components.md` — ready-to-adapt React/Tailwind/Framer-Motion code for: sticky glass navbar, hero, service card, process step, testimonial glass card, and the contact/quote form. Read this when actually writing component code, not just when reading this overview.
