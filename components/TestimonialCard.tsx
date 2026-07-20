"use client";
import { motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import { Star } from "lucide-react";
import type { ITestimonial } from "@/data/testimonials";

interface TestimonialCardProps {
    testimonial: ITestimonial;
    index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
    return (
        <motion.div
            className="glass p-7 flex flex-col gap-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: EASE_OUT }}
            whileHover={{ y: -4 }}
        >
            {/* Stars */}
            <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#FF9500" strokeWidth={0} />
                ))}
            </div>

            {/* Quote */}
            <p
                className="text-[16px] leading-[24px] flex-1"
                style={{ color: "#1D1D1F" }}
            >
                "{testimonial.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[15px] font-semibold shrink-0"
                    style={{
                        background: "rgba(0, 113, 227, 0.10)",
                        color: "#0071E3",
                    }}
                >
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <p className="text-[15px] font-semibold" style={{ color: "#1D1D1F" }}>
                        {testimonial.name}
                    </p>
                    <p className="text-[13px]" style={{ color: "#86868B" }}>
                        {testimonial.city} · {testimonial.service}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}