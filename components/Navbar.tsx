"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, Package, GitCommitHorizontal, Star, Phone } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const navItems = [
  { label: "Home", href: "#hero", Icon: Home },
  { label: "Services", href: "#services", Icon: Package },
  { label: "Process", href: "#process", Icon: GitCommitHorizontal },
  { label: "Testimonials", href: "#testimonials", Icon: Star },
  { label: "Contact", href: "tel:918950982536", Icon: Phone },
];

export default function DockNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map((n) => n.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "0px 0px -30% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      id="dock-nav"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 28, delay: 0.4 }}
      aria-label="Site navigation dock"
    >
      <div
        className="glass-dock flex items-center gap-1 px-3 py-2.5 md:px-4 md:py-3"
        style={{
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        {navItems.map(({ label, href, Icon }, i) => {
          const isActive = activeSection === href.replace("#", "");
          const isHovered = hoveredIndex === i;
          const isNeighbor =
            hoveredIndex !== null && Math.abs(hoveredIndex - i) === 1;

          const scale = isHovered ? 1.28 : isNeighbor ? 1.1 : 1;

          return (
            <motion.div
              key={href}
              className="relative flex flex-col items-center"
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              animate={{ scale }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              style={{ transformOrigin: "bottom center" }}
            >
              <button
                onClick={() => handleNavClick(href)}
                aria-label={label}
                aria-current={isActive ? "page" : undefined}
                className="group relative flex flex-col items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-2xl transition-colors duration-[180ms]"
                style={{
                  background: isActive
                    ? "rgba(0, 113, 227, 0.10)"
                    : "transparent",
                }}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  style={{
                    color: isActive ? "#0071E3" : "#6E6E73",
                    transition: "color 180ms",
                  }}
                />

                {/* Active dot */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="dock-active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0071E3]"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                    />
                  )}
                </AnimatePresence>
              </button>

              {/* Hover label — desktop only */}
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    key="label"
                    className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-medium px-2 py-1 rounded-md bg-[#1D1D1F] text-white pointer-events-none"
                    initial={{ opacity: 0, y: 4, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.9 }}
                    transition={{ duration: 0.15, ease: [0.28, 0.11, 0.32, 1] }}
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {/* Divider */}
        <div
          className="w-px h-6 mx-1 rounded-full"
          style={{ background: "rgba(0,0,0,0.12)" }}
        />

        {/* CTA button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          className="hidden md:flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold text-white transition-all duration-[180ms] active:scale-[0.97]"
          style={{
            background: "#0071E3",
            boxShadow: "0 2px 8px rgba(0,113,227,0.3)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#0077ED")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#0071E3")}
        >
          Free Quote
        </a>
        {/* WhatsApp button */}
        <WhatsAppButton Class="md:hidden" />
      </div>
    </motion.nav>
  );
}
