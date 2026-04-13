"use client";

import { motion } from "framer-motion";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";

export default function ExpertCTA() {
  return (
    <section className="bg-primary py-12 lg:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-2xl">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-white mb-4 leading-tight tracking-tight uppercase"
            >
              Need an Expert Opinion?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/90 text-lg md:text-xl font-medium"
            >
              Talk to our lead technician about your Range Rover engine today.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-black text-lg uppercase tracking-widest hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 active:scale-95 group"
            >
              <MessageSquareText className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Get Free Advice
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
