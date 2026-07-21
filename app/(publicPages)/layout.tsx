import DockNav from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamondsafetylogistics — Trusted Relocation in Bangalore",
  description:
    "Bangalore's most trusted packers and movers since 2016. Home shifting, office relocation, packing, loading & unloading, warehousing, vehicle transport. Get a free quote today — no booking required.",
  keywords: [
    "packers and movers bangalore",
    "home shifting bangalore",
    "office relocation bangalore",
    "local shifting bangalore",
    "interstate movers from bangalore",
    "best packers movers koramangala",
  ],
  openGraph: {
    title: "Diamondsafetylogistics — Bangalore",
    description:
      "5,000+ moves. Trained staff, insured goods, transparent pricing. Serving all of Bangalore + interstate moves across South India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* <Footer /> */}
      {/* Bottom dock nav — rendered after content so it sits above everything */}
      {/* <DockNav /> */}
      {/* Fixed WhatsApp button — always visible */}
    </>
  );
}
