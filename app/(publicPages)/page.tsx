import HeroSection from "@/sections/HeroSection";
import TrustBarSection from "@/sections/TrustBarSection";
import FeaturesSection from "@/sections/FeaturesSection";
import PricingSection from "@/sections/PricingSection";
import WhyUsSection from "@/sections/WhyUsSection";
import CTASection from "@/sections/CTASection";
import GallerySection from "@/sections/GallerySection";
import TestimonialSection from "@/sections/TestimonialSection";
import ContactSection from "@/sections/ContactSection";

export default function Page() {
  return (
    <main>
      {/* 1. Hero — staggered entrance, Bangalore copy, CTAs */}
      <HeroSection />

      {/* 2. Trust bar — animated stat counters */}
      <TrustBarSection className="hidden md:block pb-16" />

      {/* 3. Services — 6 card grid */}
      <FeaturesSection />

      {/* 4. Process — 4-step timeline */}
      <PricingSection />

      {/* 5. Why Us — 6 differentiators */}
      <WhyUsSection />

      {/* 6. Coverage — Bangalore home base + interstate */}
      <CTASection />

      {/* 7. Gallery — team in action photos */}
      <GallerySection />

      {/* 8. Testimonials — glass cards on gradient */}
      <TestimonialSection />

      {/* 9. Contact / Quote — lead-gen form only */}
      <ContactSection />
    </main>
  );
}
