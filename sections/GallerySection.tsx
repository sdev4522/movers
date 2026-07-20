"use client";
import { motion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

const photos = [
  {
    src: "/assets/gallery-packing.png",
    alt: "Our team carefully packing furniture and boxes in a Bangalore apartment",
    caption: "Professional Packing",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/assets/gallery-truck.png",
    alt: "Moving truck being loaded by our team on a Bangalore street",
    caption: "Safe Loading & Transport",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/assets/gallery-delivery.png",
    alt: "Happy Bangalore family watching movers place their sofa in new home",
    caption: "Happy Delivery",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-20 md:py-24"
      style={{ background: "#F5F5F7" }}
    >
      <div className="container">
        <div className="text-center mx-auto">
          <SectionTitle
            eyebrow="Our Work"
            title="See us in action."
            subtitle="From carefully wrapping your valuables to placing the last piece of furniture — we take pride in every step."
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              className={`relative overflow-hidden rounded-[28px] group ${photo.span}`}
              style={{
                aspectRatio: i === 2 ? "16/9" : "4/3",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: EASE_OUT,
              }}
              whileHover={{ scale: 1.01 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Caption overlay */}
              <div
                className="absolute bottom-0 inset-x-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[300ms]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
                }}
              >
                <p className="text-white font-semibold text-[15px]">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
