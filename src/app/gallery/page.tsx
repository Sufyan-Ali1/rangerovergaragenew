"use client";

import { motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { src: "/1r.webp",      alt: "Range Rover Engine Bay — Expert Workshop Inspection" },
  { src: "/2r.webp",      alt: "Specialist Engine Rebuild — Precision Machining" },
  { src: "/3r.webp",      alt: "Land Rover Engine — Complete Strip Down & Assessment" },
  { src: "/4r.webp",      alt: "Range Rover Sport — Engine Removal & Replacement" },
  { src: "/5r.webp",      alt: "Turbocharger Replacement — JLR Specialist Workshop" },
  { src: "/6r.webp",      alt: "Timing Chain Service — Vogue Technics Grays Essex" },
  { src: "/7r.jpeg",      alt: "Head Gasket Repair — Precision Surface Skimming" },
  { src: "/8r.jpeg",      alt: "Engine Components — OEM Quality Parts Verified" },
  { src: "/9.webp",      alt: "Engine Component" },
  { src: "/10r.jpeg",     alt: "Workshop Bay — State of the Art Diagnostic Equipment" },
  { src: "/11r.jpeg",  alt: "Range Rover Garage — Vogue Technics UK Specialists" },
  { src: "/12r.jpeg",     alt: "Land Rover Engine Inspection" },
  { src: "/13r.jpeg",     alt: "JLR Precision Engineering — Land Rover Specialists" },
  { src: "/14r.jpeg",     alt: "Land Rover Engine Inspection — 20+ Years Experience" },
  { src: "/15r.jpeg",     alt: "Range Rover Specialists" },
  { src: "/16r.jpeg",     alt: "Range Rover Specialists garage" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-28 pb-24">
      {/* Hero Header */}
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary text-[10px] font-black uppercase tracking-[0.4em] block mb-4"
        >
          Our Workshop
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-6"
        >
          Workshop <span className="text-primary italic">Gallery</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-gray-400 font-medium max-w-2xl mx-auto"
        >
          A look inside our state-of-the-art facility in Grays, Essex — 20+ years of JLR engineering excellence.
        </motion.p>
      </div>

      {/* Masonry Grid */}
      <div className="container mx-auto px-4 md:px-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid relative overflow-hidden rounded-2xl shadow-lg group cursor-zoom-in border border-slate-200 dark:border-slate-800"
              onClick={() => setLightbox(img.src)}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-500 flex items-center justify-center">
                  <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-xl" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <p className="text-white text-xs font-bold uppercase tracking-widest leading-snug">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-10"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-5xl max-h-[85vh] aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Gallery image enlarged"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
