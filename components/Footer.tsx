"use client";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const companyLinks = [
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#process" },
  { name: "Why Us", href: "#why-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const serviceAreas = [
  "Koramangala",
  "Whitefield",
  "Indiranagar",
  "HSR Layout",
  "JP Nagar",
  "Marathahalli",
  "Electronic City",
  "Hebbal",
];

const interstateAreas = [
  "Chennai",
  "Hyderabad",
  "Mumbai",
  "Pune",
  "Kochi",
  "Visakhapatnam",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0, 0, 0.2, 1] as [number, number, number, number],
    },
  }),
};

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t"
      style={{
        background: "#F5F5F7",
        borderColor: "rgba(0,0,0,0.08)",
      }}
    >
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p
              className="text-[19px] font-bold tracking-tight mb-3"
              style={{ color: "#1D1D1F" }}
            >
              Diamondsafety Packers
              <br />
              <span style={{ color: "#0071E3" }}>&amp; Movers</span>
            </p>
            <p
              className="text-[15px] leading-[22px] max-w-[28ch]"
              style={{ color: "#6E6E73" }}
            >
              Bangalore's trusted partner for safe, timely, and stress-free
              relocation.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="transition-colors duration-[180ms]"
                style={{ color: "#86868B" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0071E3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#86868B")}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-colors duration-[180ms]"
                style={{ color: "#86868B" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0071E3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#86868B")}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="transition-colors duration-[180ms]"
                style={{ color: "#86868B" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0071E3")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#86868B")}
              >
                <Youtube size={18} />
              </a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.08em] mb-4"
              style={{ color: "#86868B" }}
            >
              Company
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] transition-colors duration-[180ms]"
                    style={{ color: "#6E6E73" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#0071E3")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#6E6E73")
                    }
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.08em] mb-4"
              style={{ color: "#86868B" }}
            >
              Bangalore Areas
            </p>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="text-[15px]"
                  style={{ color: "#6E6E73" }}
                >
                  {area}
                </li>
              ))}
            </ul>
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.08em] mt-6 mb-3"
              style={{ color: "#86868B" }}
            >
              Interstate
            </p>
            <ul className="space-y-2">
              {interstateAreas.map((city) => (
                <li
                  key={city}
                  className="text-[15px]"
                  style={{ color: "#6E6E73" }}
                >
                  {city}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p
              className="text-[13px] font-semibold uppercase tracking-[0.08em] mb-4"
              style={{ color: "#86868B" }}
            >
              Contact
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#0071E3" }}
                />
                <div>
                  <a
                    href="tel:+919XXXXXXXXX"
                    className="text-[15px] block transition-colors duration-[180ms]"
                    style={{ color: "#6E6E73" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#0071E3")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#6E6E73")
                    }
                  >
                    +91 9X XXXX XXXX
                  </a>
                  <p className="text-[13px]" style={{ color: "#86868B" }}>
                    Mon – Sat, 8 am – 8 pm
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#0071E3" }}
                />
                <a
                  href="mailto:hello@Diamondsafetypackers.in"
                  className="text-[15px] transition-colors duration-[180ms]"
                  style={{ color: "#6E6E73" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0071E3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#6E6E73")
                  }
                >
                  hello@Diamondsafetypackers.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#0071E3" }}
                />
                <p className="text-[15px]" style={{ color: "#6E6E73" }}>
                  Koramangala 5th Block,
                  <br />
                  Bangalore – 560 095
                </p>
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-[180ms] active:scale-[0.97]"
              style={{ background: "#0071E3" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#0077ED")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#0071E3")
              }
            >
              Get a Free Quote →
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-4 text-[12px]"
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)", color: "#86868B" }}
        >
          <p>
            © {new Date().getFullYear()} Diamondsafetylogistics. All rights
            reserved.
          </p>
          <p>Bangalore, Karnataka — India</p>
        </div>
      </div>
    </footer>
  );
}
