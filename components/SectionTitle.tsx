"use client";
import { motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`${alignClass} mb-12`}>
      <motion.p
        className="text-[13px] font-semibold uppercase tracking-[0.08em] mb-3"
        style={{ color: "#0071E3" }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, ease: EASE_OUT }}
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        className={`${align === "center" ? "text-center mx-auto" : "text-left"} text-[32px] md:text-[40px] leading-[1.1] font-bold tracking-[-0.015em] max-w-2xl`}
        style={{ color: "#1D1D1F" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.07, ease: EASE_OUT }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className={`${align === "center" ? "text-center mx-auto" : "text-left"} mt-4 text-[17px] leading-[25px] max-w-[60ch]`}
          style={{ color: "#6E6E73" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.14, ease: EASE_OUT }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
