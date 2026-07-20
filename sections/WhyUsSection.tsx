"use client";
import { motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import {
  ShieldCheck,
  Users,
  IndianRupee,
  Clock,
  Headphones,
  Recycle,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { whyUsData } from "@/data/whyUs";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Users,
  IndianRupee,
  Clock,
  Headphones,
  Recycle,
};

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-24"
      style={{ background: "#FBFBFD" }}
    >
      <div className="container">
        <div className="text-center mx-auto">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="The Bharath difference."
            subtitle="We've built our reputation on trust, transparency, and taking genuine care of our customers and their belongings."
            align="start"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4">
          {whyUsData.map((item, i) => {
            const Icon = iconMap[item.iconName] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                className="flex gap-5 p-7 rounded-[24px] group transition-all duration-[250ms]"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: EASE_OUT,
                }}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-[16px] flex items-center justify-center shrink-0 transition-colors duration-[250ms]"
                  style={{ background: "rgba(0,113,227,0.08)" }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    style={{ color: "#0071E3" }}
                  />
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="text-[17px] font-semibold mb-1.5"
                    style={{ color: "#1D1D1F" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[15px] leading-[22px]"
                    style={{ color: "#6E6E73" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
