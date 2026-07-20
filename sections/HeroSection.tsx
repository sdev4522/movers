"use client";
import { motion } from "motion/react";
import { Phone, ArrowDown } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";
import { Globe } from "@/components/ui/globe";

const stats = [
  { value: "5,000+", label: "Moves completed" },
  { value: "8+", label: "Years in Bangalore" },
  { value: "50+", label: "Cities served" },
  { value: "4.9★", label: "Average rating" },
];

/** Inline scroll-reveal for each staggered child */
function item(i: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE_OUT },
  } as const;
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] md:min-h-[85vh] flex items-center pt-24 pb-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #E8F1FF 0%, #F5F5F7 45%, #FFFFFF 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,113,227,0.06) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,113,227,0.04) 0%, transparent 70%)",
          transform: "translate(-40%, 40%)",
        }}
      />
      {/* Brand logo */}
      <a
        href="#"
        className="inline-block mb-6 absolute top-6 left-1/2 -translate-x-1/2 md:top-8 z-10"
      >
        <img src="assets/logo.svg" alt="Brand logo" className="w-28 h-auto" />
      </a>

      {/* MOBILE/TABLET ONLY: faded globe peeking from top, behind text, non-interactive */}
      <div
        className="lg:hidden absolute left-1/2 -translate-x-1/2 -translate-y-[38%] w-[380px] sm:w-[440px] aspect-square z-0 pointer-events-none"
        style={{
          opacity: 1,
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 35%, transparent 80%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 35%, transparent 80%)",
        }}
      >
        <Globe />
      </div>

      <div className="relative z-10 mt-12 md:mt-2 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-10 lg:gap-6 items-center w-full max-w-7xl mx-auto md:px-8">
        <div className="max-w-[680px]">
          {/* Eyebrow */}
          <motion.div
            {...item(0)}
            className="mx-auto flex justify-center md:justify-start items-center gap-2 mb-5"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-semibold"
              style={{
                background: "rgba(0,113,227,0.08)",
                color: "#0071E3",
                border: "1px solid rgba(0,113,227,0.18)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#0071E3" }}
              />
              Bangalore's Most Trusted Packers &amp; Movers
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...item(1)}
            className="text-[36px] sm:text-[44px] text-center md:text-start md:text-[64px] leading-[1.06] font-bold tracking-[-0.02em]"
            style={{ color: "#1D1D1F" }}
          >
            Moving, made <span style={{ color: "#0071E3" }}>effortless.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            {...item(2)}
            className="mt-6 px-[10px] text-center md:text-start text-[16px] md:text-[18px] leading-[25px] md:leading-[27px] max-w-[52ch]"
            style={{ color: "#6E6E73" }}
          >
            From a single room to a full office — our Bangalore-based team
            packs, moves, and resettles your world with care, on time, every
            time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...item(3)}
            className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#contact"
              className="inline-flex w-full md:w-auto mx-4 md:px-6 py-3.5 items-center justify-center rounded-full text-[17px] font-semibold text-white transition-all duration-[180ms] active:scale-[0.97]"
              style={{
                background: "#0071E3",
                boxShadow: "0 4px 16px rgba(0,113,227,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0077ED";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0,113,227,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0071E3";
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(0,113,227,0.3)";
              }}
            >
              Get a Free Quote
            </a>

            <a
              href="tel:+918950982536"
              className="inline-flex items-center gap-2 text-[17px] font-medium transition-colors duration-[180ms]"
              style={{ color: "#1D1D1F" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0071E3")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1D1D1F")}
            >
              <Phone size={18} strokeWidth={2} />
              Call: +91 8950982536
            </a>
          </motion.div>

          {/* Trust mini-stats */}
          <motion.div
            {...item(4)}
            className="mt-14 flex flex-col md:flex-row items-center gap-x-8 gap-y-4 pb-4 px-4 md:px-0 justify-center md:justify-start block"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center md:items-start gap-1 rounded-lg p-4 rounded-xl w-full md:w-auto"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 6px 18px rgba(13, 27, 62, 0.06)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <span
                  className="text-[22px] font-bold tracking-tight stat-number"
                  style={{ color: "#1D1D1F" }}
                >
                  {value}
                </span>
                <span className="text-[13px]" style={{ color: "#86868B" }}>
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* DESKTOP ONLY: globe in its own full-opacity column */}
        <div className="hidden lg:block relative w-full aspect-square max-w-[480px] mx-auto">
          <Globe />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={18} style={{ color: "#86868B" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
