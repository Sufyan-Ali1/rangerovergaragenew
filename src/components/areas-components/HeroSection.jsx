"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroSaction({data}) {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 md:px-12 pt-48 md:pt-40">
        <div className="max-w-3xl">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6"
          >
            {data.title.split(" ").slice(0, -1).join(" ")}{" "}
            <br />
            <span className="text-primary">
              {data.title.split(" ").slice(-1)}
            </span>
            .
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              href="/get-quote"
              className="bg-primary text-white px-10 py-5 rounded-2xl font-heading font-black text-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 uppercase tracking-widest"
            >
              Get Quote
            </Link>

            <a
              href="tel:+441708592377"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-heading font-black text-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all uppercase tracking-widest"
            >
              <Phone className="w-5 h-5 text-primary" />
              01708 592377
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-6 pt-12 border-t border-white/10"
          >
            <div className="flex items-center gap-3 text-white">
              <MapPin className="text-primary w-6 h-6" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Grays, RM20 4EL
              </span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <Clock className="text-primary w-6 h-6" />
              <span className="text-sm font-medium tracking-wide uppercase">
                OEM Parts Guarantee
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-3 text-white">
              <ShieldCheck className="text-primary w-6 h-6" />
              <span className="text-sm font-medium tracking-wide uppercase">
                6 Month / 6,000 Mile Warranty
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}