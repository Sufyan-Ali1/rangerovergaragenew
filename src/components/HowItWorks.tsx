"use client";

import { motion } from "framer-motion";
import { Search, Truck, CalendarDays } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Instant Quote",
    text: "Enter your registration and get an instant quote for your engine service.",
    icon: Search
  },
  {
    number: "02",
    title: "Book Recovery",
    text: "Book your nationwide recovery, which is fully all-inclusive in your fixed quote.",
    icon: Truck
  },
  {
    number: "03",
    title: "Back On Road",
    text: "Get your car back on the road in just 10 working days, fully restored and tested.",
    icon: CalendarDays
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight"
          >
            How It <span className="text-primary">Works</span>
          </motion.h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 font-medium tracking-tight">
            Our streamlined process is designed for your ultimate convenience and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-12 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-primary mb-8 shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                <step.icon className="w-8 h-8" />
              </div>
              <span className="text-sm font-black text-primary/30 uppercase tracking-[0.3em] mb-4">Step {step.number}</span>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
