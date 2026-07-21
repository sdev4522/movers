"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-[14px] border px-4 py-3.5 text-[16px] outline-none transition-all duration-[150ms] bg-white";
const labelClass = "block text-[13px] font-medium mb-1.5";

const services = [
  "Local Shifting",
  "Office Relocation",
  "Full Packing Service",
  "Loading & Unloading Only",
  "Warehousing / Storage",
  "Vehicle Transportation",
  "Interstate Move",
];

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const handlePhoneChange = (e: { currentTarget: HTMLInputElement }) => {
    const prefix = "+91 ";
    let value = e.currentTarget.value;

    if (!value.startsWith(prefix)) {
      if (value.startsWith("+91")) {
        value = prefix + value.slice(3).trimStart();
      } else if (value.startsWith("91")) {
        value = prefix + value.slice(2).trimStart();
      } else if (value.startsWith("+")) {
        value = prefix + value.slice(1).trimStart();
      } else {
        value = prefix + value.trimStart();
      }
      e.currentTarget.value = value;
    }
  };

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

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ background: "#F5F5F7" }}
    >
      <div className="container">
        <div className="text-center mx-auto">
          <SectionTitle
            eyebrow="Get a Free Quote"
            title="Tell us about your move."
            subtitle="Fill in the details below and our team will reach out within a few hours with a transparent, no-obligation quote."
            align="center"
          />
        </div>

        <motion.div
          className="max-w-2xl mx-auto mt-4 rounded-[28px] p-8 md:p-10"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="flex flex-col items-center text-center py-12"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(52,199,89,0.1)" }}
                >
                  <CheckCircle2 size={32} style={{ color: "#34C759" }} />
                </div>
                <h3
                  className="text-[24px] font-bold mb-2"
                  style={{ color: "#1D1D1F" }}
                >
                  We've received your request!
                </h3>
                <p
                  className="text-[17px] max-w-[42ch]"
                  style={{ color: "#6E6E73" }}
                >
                  Our team will call you within a few hours with your free
                  quote. Thank you for choosing Diamondsafety Packers!
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {/* Name */}
                <div>
                  <label
                    className={labelClass}
                    htmlFor="cf-name"
                    style={{ color: "#6E6E73" }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    required
                    placeholder="Your name"
                    className={inputClass}
                    style={{
                      color: "#1D1D1F",
                      borderColor: "rgba(0,0,0,0.12)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0071E3";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(0,113,227,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    className={labelClass}
                    htmlFor="cf-phone"
                    style={{ color: "#6E6E73" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9+ ]{7,15}"
                    placeholder="+91 "
                    className={inputClass}
                    style={{
                      color: "#1D1D1F",
                      borderColor: "rgba(0,0,0,0.12)",
                    }}
                    onChange={handlePhoneChange}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0071E3";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(0,113,227,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className={labelClass}
                    htmlFor="cf-email"
                    style={{ color: "#6E6E73" }}
                  >
                    Email <span style={{ color: "#86868B" }}>(optional)</span>
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    className={inputClass}
                    style={{
                      color: "#1D1D1F",
                      borderColor: "rgba(0,0,0,0.12)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0071E3";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(0,113,227,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Service type */}
                <div>
                  <label
                    className={labelClass}
                    htmlFor="cf-service"
                    style={{ color: "#6E6E73" }}
                  >
                    Service Type
                  </label>
                  <select
                    id="cf-service"
                    name="service"
                    className={inputClass}
                    style={{
                      color: "#1D1D1F",
                      borderColor: "rgba(0,0,0,0.12)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0071E3";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(0,113,227,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* From city */}
                <div>
                  <label
                    className={labelClass}
                    htmlFor="cf-from"
                    style={{ color: "#6E6E73" }}
                  >
                    Moving From
                  </label>
                  <input
                    id="cf-from"
                    name="from"
                    placeholder="City / area / locality"
                    className={inputClass}
                    style={{
                      color: "#1D1D1F",
                      borderColor: "rgba(0,0,0,0.12)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0071E3";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(0,113,227,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* To city */}
                <div>
                  <label
                    className={labelClass}
                    htmlFor="cf-to"
                    style={{ color: "#6E6E73" }}
                  >
                    Moving To
                  </label>
                  <input
                    id="cf-to"
                    name="to"
                    placeholder="City / area"
                    className={inputClass}
                    style={{
                      color: "#1D1D1F",
                      borderColor: "rgba(0,0,0,0.12)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0071E3";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(0,113,227,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Moving date */}
                <div>
                  <label
                    className={labelClass}
                    htmlFor="cf-date"
                    style={{ color: "#6E6E73" }}
                  >
                    Preferred Moving Date{" "}
                    <span style={{ color: "#86868B" }}>(optional)</span>
                  </label>
                  <input
                    id="cf-date"
                    name="date"
                    type="date"
                    className={inputClass}
                    style={{
                      color: "#1D1D1F",
                      borderColor: "rgba(0,0,0,0.12)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0071E3";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(0,113,227,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Empty cell for grid alignment */}
                <div className="hidden md:block" />

                {/* Message */}
                <div className="md:col-span-2">
                  <label
                    className={labelClass}
                    htmlFor="cf-message"
                    style={{ color: "#6E6E73" }}
                  >
                    Additional Details{" "}
                    <span style={{ color: "#86868B" }}>(optional)</span>
                  </label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    placeholder="Anything else we should know? (floor number, heavy items, special handling needs...)"
                    className={`${inputClass} resize-none`}
                    style={{
                      color: "#1D1D1F",
                      borderColor: "rgba(0,0,0,0.12)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0071E3";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px rgba(0,113,227,0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                  <button
                    id="quote-submit-btn"
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-full py-4 text-[17px] font-semibold text-white transition-all duration-[180ms] active:scale-[0.97] flex items-center justify-center gap-2 disabled:opacity-60"
                    style={{
                      background: "#0071E3",
                      boxShadow: "0 4px 16px rgba(0,113,227,0.28)",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "submitting") {
                        e.currentTarget.style.background = "#0077ED";
                        e.currentTarget.style.boxShadow =
                          "0 8px 24px rgba(0,113,227,0.35)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#0071E3";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(0,113,227,0.28)";
                    }}
                  >
                    {status === "submitting" && (
                      <Loader2 size={18} className="animate-spin" />
                    )}
                    {status === "submitting"
                      ? "Sending your request…"
                      : "Get My Free Quote"}
                  </button>

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-1.5 mt-3 text-[13px] text-center"
                      style={{ color: "#FF3B30" }}
                    >
                      <AlertCircle size={14} />
                      Something went wrong — please try again or call us
                      directly.
                    </motion.p>
                  )}

                  <p
                    className="mt-4 text-[13px] text-center"
                    style={{ color: "#86868B" }}
                  >
                    No spam. We'll call you once to discuss your move — that's
                    it.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
