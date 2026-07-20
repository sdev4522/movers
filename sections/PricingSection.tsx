"use client";
import { motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import SectionTitle from "@/components/SectionTitle";

const steps = [
  {
    number: 1,
    title: "Enquire",
    description:
      "Fill out our quick quote form or call us. We respond within a few hours.",
  },
  {
    number: 2,
    title: "Survey & Quote",
    description:
      "We assess your needs — in person or virtually — and give you a detailed, no-surprises quote.",
  },
  {
    number: 3,
    title: "Pack & Move",
    description:
      "Our trained crew arrives on schedule, packs everything carefully, and transports it safely.",
  },
  {
    number: 4,
    title: "Safe Delivery",
    description:
      "Unloading, placement, and a final walkthrough — we don't leave until you're satisfied.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 md:py-24"
      style={{ background: "#FFFFFF" }}
    >
      <div className="container">
        <div className="text-center mx-auto">
          <SectionTitle
            eyebrow="How It Works"
            title="A smooth move in four simple steps."
            subtitle="We've refined our process over 8+ years to remove every source of stress from your relocation."
            align="left"
          />
        </div>

        {/* Desktop: horizontal, connected */}
        <div className="hidden md:flex items-start gap-0 mt-4 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex-1 flex flex-col items-center text-center px-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: EASE_OUT,
              }}
            >
              {/* Circle + connector line */}
              <div className="flex items-center w-full mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-[17px] shrink-0 z-10"
                  style={{
                    background: "#0071E3",
                    boxShadow: "0 4px 16px rgba(0,113,227,0.3)",
                  }}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="flex-1 h-px ml-2"
                    style={{ background: "#D2D2D7" }}
                  />
                )}
              </div>

              {/* Content */}
              <h4
                className="text-[19px] font-semibold mb-2 text-left w-full"
                style={{ color: "#1D1D1F" }}
              >
                {step.title}
              </h4>
              <p
                className="text-[15px] leading-[22px] text-left"
                style={{ color: "#6E6E73" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="flex md:hidden flex-col gap-0 mt-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: EASE_OUT,
              }}
            >
              {/* Vertical connector */}
              <div className="flex flex-col items-center">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-[16px] shrink-0"
                  style={{ background: "#0071E3" }}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2 mb-2"
                    style={{ background: "#D2D2D7", minHeight: "40px" }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 pt-1">
                <h4
                  className="text-[19px] font-semibold mb-1"
                  style={{ color: "#1D1D1F" }}
                >
                  {step.title}
                </h4>
                <p
                  className="text-[15px] leading-[22px]"
                  style={{ color: "#6E6E73" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[17px] font-semibold text-white transition-all duration-[180ms] active:scale-[0.97]"
            style={{
              background: "#0071E3",
              boxShadow: "0 4px 16px rgba(0,113,227,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0077ED";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0071E3";
            }}
          >
            Start Your Move Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
