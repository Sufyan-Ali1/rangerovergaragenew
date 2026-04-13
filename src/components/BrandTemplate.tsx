"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Clock, MapPin, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import MapSection from "./MapSection";
import RegLookup from "./RegLookup";

interface BrandTemplateProps {
  title: string;
  description: string;
  heroImage: string;
  models: string[];
  content: string | string[];
  specialistAreas: string[];
}

export default function BrandTemplate({
  title,
  description,
  heroImage,
  models,
  content,
  specialistAreas
}: BrandTemplateProps) {

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 md:px-12 pt-48 md:pt-40">
          <div className="max-w-3xl">
           
            
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6 uppercase tracking-tight"
            >
              {title.split(' ')[0]} <br />
              <span className="text-primary">{title.split(' ').slice(1).join(' ')}</span>.
            </motion.h1>

            <motion.p
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed font-medium"
            >
              {description}
            </motion.p>

            <RegLookup />

            {/* Trust Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white/10"
            >
              <div className="flex items-center gap-4 text-white">
                <MapPin className="text-primary w-7 h-7" />
                <span className="text-sm font-bold tracking-widest uppercase">Grays, RM20 4EL</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <Clock className="text-primary w-7 h-7" />
                <span className="text-sm font-bold tracking-widest uppercase">OEM Parts Only</span>
              </div>
              <div className="hidden md:flex items-center gap-4 text-white">
                <ShieldCheck className="text-primary w-7 h-7" />
                <span className="text-sm font-bold tracking-widest uppercase">Standard 6M Warranty</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Uncompromising Excellence
              </div>
              <div className="space-y-12 mb-16">
                {Array.isArray(content) ? (
                  content.map((para, i) => {
                    if (i === 0) {
                      return (
                        <div key={i} className="relative pl-8 border-l-4 border-primary">
                          <p className="text-2xl md:text-3xl font-heading font-bold text-slate-900 dark:text-white leading-tight italic">
                            {para}
                          </p>
                        </div>
                      );
                    }
                    
                    if (i === 3 || i === 6) {
                      return (
                        <div key={i} className="bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] p-10 border border-primary/20 shadow-inner relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>
                           <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4">Technical Spotlight</h4>
                           <p className="text-lg text-slate-800 dark:text-gray-200 leading-relaxed font-bold relative z-10">
                            {para}
                           </p>
                        </div>
                      );
                    }

                    return (
                      <div key={i} className="group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="h-px w-8 bg-primary/30" />
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60">Insight {i + 1}</span>
                        </div>
                        <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-medium pl-12 group-hover:text-slate-900 dark:group-hover:text-gray-200 transition-colors">
                          {para}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed font-light">
                    {content}
                  </p>
                )}
              </div>

              <div className="bg-slate-900 rounded-3xl p-8 text-white mb-12 border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-primary flex items-center gap-2 uppercase tracking-wider">
                  <ShieldCheck className="w-6 h-6" />
                  Premium Parts & Warranty
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  We use **Genuine OEM Parts** for all mechanical repairs and engine rebuilds. Our standard service includes a **6 Months or 6,000 Miles Warranty** for your peace of mind.
                </p>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <p className="font-bold text-sm mb-2 uppercase tracking-widest text-primary">Extended Coverage Option</p>
                  <p className="text-gray-400 text-sm italic">
                    Looking for more? We offer up to **24 months warranty**, sourced directly from main dealers (additional cost applies).
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {specialistAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/40 transition-all group">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-slate-800 dark:text-gray-200">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12"
            >
              <div className="flex flex-col gap-6 lg:gap-12">
                <div className="p-8 md:p-12 bg-slate-100 dark:bg-slate-900 rounded-[3rem] text-center border border-slate-200 dark:border-slate-800 group hover:bg-white dark:hover:bg-slate-800 transition-all shadow-xl shadow-slate-200/20 dark:shadow-none">
                  <Star className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-6 group-hover:rotate-12 transition-transform" />
                  <span className="block text-4xl md:text-5xl font-heading font-black dark:text-white mb-3 tracking-tighter">20+</span>
                  <span className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-[0.2em] leading-tight">Years Specialist Experience</span>
                </div>
                <div className="p-8 md:p-12 bg-primary rounded-[3rem] text-center text-white shadow-2xl shadow-primary/30 transform lg:translate-x-6">
                  <Award className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-6" />
                  <span className="block text-4xl md:text-5xl font-heading font-black mb-3 tracking-tighter">100%</span>
                  <span className="text-xs md:text-sm opacity-80 font-bold uppercase tracking-[0.2em] leading-tight">Customer Satisfaction</span>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:gap-12 justify-center">
                <div className="p-8 md:p-12 bg-slate-900 rounded-[3rem] text-center text-white border border-primary/20 relative overflow-hidden group min-h-[400px] flex flex-col justify-center">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h4 className="text-primary font-heading font-black text-xl md:text-2xl mb-8 relative z-10 uppercase tracking-tighter">Models We Service</h4>
                  <ul className="flex flex-col gap-4 text-gray-400 relative z-10">
                    {models.map(model => (
                      <li key={model} className="text-xs md:text-sm font-black uppercase tracking-[0.2em] hover:text-white transition-colors cursor-default">
                        {model}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <MapSection />
    </div>
  );
}
