"use client";
import { motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import { MapPin, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { bangaloreCoverage, interstateStates } from "@/data/coverage";

export default function CoverageSection() {
  return (
    <section
      id="coverage"
      className="py-20 md:py-24"
      style={{ background: "#FFFFFF" }}
    >
      <div className="container">
        <SectionTitle
          eyebrow="Service Coverage"
          title="Bangalore is home. Everywhere else is a destination."
          subtitle="Based in Koramangala, we cover every corner of Bangalore and offer full-service interstate moves across South India and beyond."
          align="left"
        />

        {/* Bangalore home base card */}
        <motion.div
          className="relative overflow-hidden rounded-[28px] p-8 md:p-12 mb-10"
          style={{
            background:
              "radial-gradient(120% 120% at 20% 0%, #E8F1FF 0%, #F5F5F7 45%, #FFFFFF 100%)",
            border: "1px solid rgba(0,113,227,0.15)",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.06em] mb-4"
            style={{
              background: "rgba(0,113,227,0.10)",
              color: "#0071E3",
              border: "1px solid rgba(0,113,227,0.2)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#0071E3" }}
            />
            Our Home Base
          </span>

          <h3
            className="text-[28px] md:text-[34px] font-bold tracking-tight mb-2"
            style={{ color: "#1D1D1F" }}
          >
            Bangalore — Full Service
          </h3>
          <p
            className="text-[17px] mb-8 max-w-[52ch]"
            style={{ color: "#6E6E73" }}
          >
            We operate across all of Bangalore — every neighbourhood, every
            zone, same-day and scheduled moves available.
          </p>

          {/* City chips */}
          <div className="flex flex-wrap gap-2.5">
            {bangaloreCoverage.map((item) => (
              <span
                key={item.city}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[14px] font-medium"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  color: "#1D1D1F",
                  border: "1px solid rgba(0,0,0,0.08)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <MapPin size={12} style={{ color: "#0071E3" }} />
                {item.city}
              </span>
            ))}
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[14px] font-medium"
              style={{
                background: "rgba(0,113,227,0.06)",
                color: "#0071E3",
                border: "1px solid rgba(0,113,227,0.15)",
              }}
            >
              + all areas
            </span>
          </div>
        </motion.div>

        {/* Interstate states */}
        <div>
          <motion.p
            className="text-[13px] font-semibold uppercase tracking-[0.08em] mb-5"
            style={{ color: "#86868B" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Outstation from Bangalore — States We Serve
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {interstateStates.map((state, i) => (
              <motion.div
                key={state.state}
                className="rounded-[20px] p-6 transition-all duration-[250ms]"
                style={{
                  background: "#F5F5F7",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: EASE_OUT,
                }}
                whileHover={{
                  y: -4,
                  background: "#FFFFFF",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4
                    className="text-[19px] font-semibold"
                    style={{ color: "#1D1D1F" }}
                  >
                    {state.state}
                  </h4>
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.06em] rounded-full px-2.5 py-1"
                    style={{
                      background: "rgba(0,113,227,0.08)",
                      color: "#0071E3",
                    }}
                  >
                    {state.label}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {state.cities.map((city) => (
                    <span
                      key={city}
                      className="text-[13px] rounded-md px-2.5 py-1"
                      style={{
                        background: "rgba(255,255,255,0.8)",
                        color: "#6E6E73",
                        border: "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA note */}
        <motion.p
          className="mt-10 text-center text-[15px]"
          style={{ color: "#86868B" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Don't see your city?{" "}
          <a
            href="#contact"
            className="font-semibold transition-colors duration-[180ms]"
            style={{ color: "#0071E3" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0077ED")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#0071E3")}
          >
            Contact us — we'll make it happen.{" "}
            <ArrowRight size={12} className="inline" />
          </a>
        </motion.p>
      </div>
    </section>
  );
}
