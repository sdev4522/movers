import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Diamondsafetylogistics — Bangalore's Trusted Relocation Experts",
  description:
    "Bangalore's most trusted packers and movers. Local shifting, office relocation, packing, loading & unloading, warehousing, and vehicle transport. Get a free quote today.",
  keywords: [
    "packers and movers bangalore",
    "home shifting bangalore",
    "office relocation bangalore",
    "best movers bangalore",
    "interstate movers bangalore",
  ],
  openGraph: {
    title: "Diamondsafetylogistics — Bangalore",
    description:
      "5,000+ moves completed. Trained staff, insured goods, transparent pricing. Your trusted partner for local and interstate relocation from Bangalore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        {/* Inter via Google Fonts — progressive enhancement, non-blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
