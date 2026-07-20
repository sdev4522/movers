# Component Patterns

Concrete React/Tailwind/Framer-Motion code following the tokens in `design-tokens.css` and `tailwind-setup.md`. Treat these as **starting patterns to adapt**, not rigid copy-paste — keep the class names token-based (radius, spacing, color, duration) rather than introducing raw hex/px values.

Table of contents:
1. Sticky glass navbar
2. Hero section
3. Service card (grid item)
4. Process/timeline step
5. Testimonial glass card
6. Contact / Get-a-Quote form
7. Footer

---

## 1. Sticky Glass Navbar

```tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "How it Works", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-hover ease-apple
        ${scrolled ? "glass-nav shadow-xs" : "bg-transparent"}`}
    >
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        <a href="/" className="text-[19px] font-semibold text-label-primary tracking-tight">
          MoveEase
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[15px] text-label-secondary hover:text-label-primary
                transition-colors duration-hover after:content-[''] after:absolute after:-bottom-1
                after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all
                after:duration-hover hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+911234567890" className="flex items-center gap-1.5 text-[15px] text-label-secondary">
            <Phone size={16} /> +91 12345 67890
          </a>
          <a
            href="#contact"
            className="rounded-pill bg-accent text-white px-5 py-2.5 text-[15px] font-semibold
              shadow-sm hover:bg-accent-hover hover:shadow-md active:scale-[0.97]
              transition-all duration-hover ease-apple"
          >
            Get a Free Quote
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.28, 0.11, 0.32, 1] }}
          className="glass md:hidden mx-4 mb-4 p-6 rounded-xl flex flex-col gap-4"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[17px] text-label-primary">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-pill bg-accent text-white text-center py-3 font-semibold">
            Get a Free Quote
          </a>
        </motion.div>
      )}
    </header>
  );
}
```

---

## 2. Hero Section

```tsx
"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0, 0, 0.2, 1] },
  }),
};

export function Hero() {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-[85vh] flex items-center pt-24"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="container">
        <div className="max-w-2xl">
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="text-[13px] font-semibold uppercase tracking-[0.08em] text-accent mb-4"
          >
            Trusted Packers & Movers
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-[40px] md:text-[64px] leading-[1.08] font-bold tracking-[-0.02em] text-label-primary"
          >
            Moving, made effortless.
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="mt-6 text-[17px] leading-[25px] text-label-secondary max-w-[52ch]"
          >
            From a single room to a full office — our team packs, moves, and
            resettles your world with care, on time, every time.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-pill bg-accent text-white px-7 py-3.5 text-[17px] font-semibold
                shadow-sm hover:bg-accent-hover hover:shadow-md active:scale-[0.97]
                transition-all duration-hover ease-apple"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+911234567890"
              className="text-[17px] font-medium text-label-primary hover:text-accent transition-colors"
            >
              Call us: +91 12345 67890 →
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="mt-14 flex flex-wrap gap-8 text-[13px] text-label-tertiary"
          >
            <span><strong className="text-label-primary text-[17px]">10,000+</strong> moves completed</span>
            <span><strong className="text-label-primary text-[17px]">50+</strong> cities served</span>
            <span><strong className="text-label-primary text-[17px]">4.8★</strong> average rating</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

---

## 3. Service Card

```tsx
"use client";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
      whileHover={{ y: -4 }}
      className="bg-bg-tertiary rounded-xl p-8 shadow-sm hover:shadow-md
        transition-shadow duration-card border border-separator"
    >
      <div className="w-12 h-12 rounded-2xl bg-accent-tint-10 flex items-center justify-center mb-5">
        <Icon size={24} className="text-accent" strokeWidth={2} />
      </div>
      <h3 className="text-[22px] leading-[28px] font-semibold text-label-primary mb-2">
        {title}
      </h3>
      <p className="text-[16px] leading-[21px] text-label-secondary">
        {description}
      </p>
    </motion.div>
  );
}
```

Example grid usage:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <ServiceCard icon={Truck} title="Local Shifting" description="Quick, careful moves within your city, door to door." />
  <ServiceCard icon={Building2} title="Office Relocation" description="Minimal downtime relocation for your whole workspace." />
  <ServiceCard icon={PackageCheck} title="Packing Services" description="Professional-grade packing materials and techniques." />
  {/* ...Loading & Unloading, Warehousing, Vehicle Transportation */}
</div>
```

---

## 4. Process / Timeline Step

```tsx
export function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="flex md:flex-col items-start gap-4 md:gap-0 relative flex-1">
      <div className="flex items-center">
        <div className="w-11 h-11 rounded-full bg-accent text-white flex items-center
          justify-center font-semibold text-[17px] shrink-0">
          {number}
        </div>
        {!isLast && (
          <div className="hidden md:block h-px bg-separator-opaque flex-1 ml-4" />
        )}
      </div>
      <div className="md:mt-5">
        <h4 className="text-[17px] font-semibold text-label-primary mb-1">{title}</h4>
        <p className="text-[15px] leading-5 text-label-secondary max-w-[28ch]">{description}</p>
      </div>
    </div>
  );
}
```

---

## 5. Testimonial Glass Card

Place this section on a gradient background (`style={{ background: "var(--hero-gradient)" }}`) so the `.glass` class reads correctly.

```tsx
export function TestimonialCard({
  quote,
  name,
  city,
}: {
  quote: string;
  name: string;
  city: string;
}) {
  return (
    <div className="glass p-8 max-w-md">
      <p className="text-[17px] leading-[25px] text-label-primary mb-6">“{quote}”</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent-tint-15 text-accent font-semibold
          flex items-center justify-center text-[15px]">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-[15px] font-semibold text-label-primary">{name}</p>
          <p className="text-[13px] text-label-tertiary">{city}</p>
        </div>
      </div>
    </div>
  );
}
```

---

## 6. Contact / Get-a-Quote Form (the ONLY form on the site)

Client-side component; wire the `onSubmit` to a Next.js Route Handler (`app/api/lead/route.ts`) that emails/stores the lead. No booking, no payment — just capture + confirm.

```tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-md border border-separator bg-bg-primary px-4 py-3 text-[16px] " +
    "text-label-primary placeholder:text-label-tertiary outline-none " +
    "focus:border-accent focus:shadow-xs transition-all duration-hover";

  const labelClass = "block text-[13px] font-medium text-label-secondary mb-1.5";

  return (
    <div className="relative bg-bg-tertiary rounded-xl shadow-md p-8 md:p-10 max-w-2xl mx-auto border border-separator">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col items-center text-center py-10"
          >
            <CheckCircle2 size={48} className="text-success mb-4" />
            <h3 className="text-[22px] font-semibold text-label-primary mb-2">Thank you!</h3>
            <p className="text-[16px] text-label-secondary">
              We've received your details — our team will call you within a few hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div>
              <label className={labelClass} htmlFor="name">Full Name *</label>
              <input id="name" name="name" required className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">Phone Number *</label>
              <input id="phone" name="phone" type="tel" required pattern="[0-9+ ]{7,15}"
                className={inputClass} placeholder="+91 12345 67890" />
            </div>
            <div>
              <label className={labelClass} htmlFor="from">Moving From</label>
              <input id="from" name="from" className={inputClass} placeholder="City / area" />
            </div>
            <div>
              <label className={labelClass} htmlFor="to">Moving To</label>
              <input id="to" name="to" className={inputClass} placeholder="City / area" />
            </div>
            <div>
              <label className={labelClass} htmlFor="date">Preferred Moving Date</label>
              <input id="date" name="date" type="date" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="service">Service Type</label>
              <select id="service" name="service" className={inputClass}>
                <option>Local Shifting</option>
                <option>Office Relocation</option>
                <option>Full Packing</option>
                <option>Warehousing / Storage</option>
                <option>Vehicle Transportation</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className={labelClass} htmlFor="message">Additional Details</label>
              <textarea id="message" name="message" rows={4} className={inputClass}
                placeholder="Anything else we should know?" />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-pill bg-accent text-white py-3.5 text-[17px] font-semibold
                  shadow-sm hover:bg-accent-hover hover:shadow-md active:scale-[0.97]
                  transition-all duration-hover ease-apple disabled:opacity-60
                  flex items-center justify-center gap-2"
              >
                {status === "submitting" && <Loader2 size={18} className="animate-spin" />}
                {status === "submitting" ? "Sending..." : "Get My Free Quote"}
              </button>
              {status === "error" && (
                <p className="text-[13px] text-error mt-2 text-center">
                  Something went wrong — please try again or call us directly.
                </p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
```

Minimal Route Handler stub (`app/api/lead/route.ts`) — replace the TODO with an email service (Resend, Nodemailer) or a DB insert:

```ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  // TODO: send email / save to DB / forward to CRM
  console.log("New lead:", data);
  return NextResponse.json({ ok: true });
}
```

---

## 7. Footer

```tsx
export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-separator pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="text-[19px] font-semibold text-label-primary mb-3">MoveEase</p>
          <p className="text-[15px] text-label-secondary max-w-[30ch]">
            Reliable packing and moving services, done right.
          </p>
        </div>
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-label-tertiary mb-4">Company</p>
          <ul className="space-y-2 text-[15px] text-label-secondary">
            <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
            <li><a href="#process" className="hover:text-accent transition-colors">How it Works</a></li>
            <li><a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-label-tertiary mb-4">Service Areas</p>
          <ul className="space-y-2 text-[15px] text-label-secondary">
            <li>Delhi NCR</li><li>Mumbai</li><li>Bengaluru</li><li>Pune</li>
          </ul>
        </div>
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-label-tertiary mb-4">Contact</p>
          <ul className="space-y-2 text-[15px] text-label-secondary">
            <li>+91 12345 67890</li>
            <li>hello@moveease.com</li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 pt-6 border-t border-separator text-[12px] text-label-tertiary">
        © {new Date().getFullYear()} MoveEase. All rights reserved.
      </div>
    </footer>
  );
}
```
