"use client";
import { motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import {
  Truck,
  Building2,
  PackageCheck,
  ArrowUpDown,
  Warehouse,
  Car,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { servicesData } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Building2,
  PackageCheck,
  ArrowUpDown,
  Warehouse,
  Car,
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-24"
      style={{ background: "#F5F5F7" }}
    >
      <div className="container">
        <div className="text-center mx-auto">
          <SectionTitle
            eyebrow="Our Services"
            title="Everything your move needs, handled."
            subtitle="From careful packing to safe delivery — we manage every detail so you can focus on your new beginning."
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, i) => {
            const Icon = iconMap[service.iconName] ?? Truck;
            return (
              <motion.div
                key={service.title}
                className="group bg-white rounded-[28px] p-8 flex flex-col gap-5 cursor-default"
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: EASE_OUT,
                }}
                whileHover={{ y: -6 }}
              >
                {/* Icon badge */}
                <div
                  className="w-13 h-13 rounded-[18px] flex items-center justify-center"
                  style={{ background: "rgba(0,113,227,0.08)" }}
                >
                  <Icon
                    size={26}
                    strokeWidth={1.8}
                    style={{ color: "#0071E3" }}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-[22px] leading-[28px] font-semibold tracking-[-0.004em] mb-2"
                    style={{ color: "#1D1D1F" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[16px] leading-[22px]"
                    style={{ color: "#6E6E73" }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Learn more link */}
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1 text-[15px] font-medium transition-colors duration-[180ms]"
                  style={{ color: "#0071E3" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0077ED")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#0071E3")
                  }
                >
                  Get a quote →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
