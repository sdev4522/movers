"use client";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-24"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #E8F1FF 0%, #F5F5F7 45%, #FFFFFF 100%)",
      }}
    >
      <div className="container">
        <div className="text-center mx-auto">
          <SectionTitle
            eyebrow="Customer Stories"
            title="5,000+ happy moves — hear from them."
            subtitle="Real customers, real moves. We don't just move boxes — we move lives, and we take that seriously."
            align="start"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mt-4">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Trust note */}
        <p
          className="mt-10 text-center text-[14px]"
          style={{ color: "#86868B" }}
        >
          4.9★ rated on Google · 4.8★ on JustDial · 500+ verified reviews
        </p>
      </div>
    </section>
  );
}
