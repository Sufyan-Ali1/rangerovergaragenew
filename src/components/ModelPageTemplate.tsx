"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Star, 
  ArrowRight,
  Settings,
  Cpu,
  Wind,
  Wrench,
  Zap,
  Activity,
  FileSearch
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import MapSection from "./MapSection";
import RegLookup from "./RegLookup";

interface ModelPageTemplateProps {
  modelName: string;
  modelCode: string;
  heroImage: string;
  engineCodes: string[];
  introContent: string[];
  technicalContent: {
    title: string;
    text: string[];
    image: string;
    imageLeft: boolean;
  }[];
  reviews: {
    name: string;
    rating: number;
    text: string;
    date: string;
    engineCode: string;
  }[];
  servicesContent: {
    title: string;
    slug: string;
    text: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const specialistServices = [
  { title: "Engine Rebuild", slug: "engine-rebuild", icon: <Settings className="w-6 h-6" /> },
  { title: "Timing Chain", slug: "timing-chain-replacement", icon: <Cpu className="w-6 h-6" /> },
  { title: "Turbo Repair", slug: "turbo-replacement", icon: <Wind className="w-6 h-6" /> },
  { title: "Head Gasket", slug: "head-gasket-replacement", icon: <ShieldCheck className="w-6 h-6" /> },
  { title: "Engine Repair", slug: "engine-repair", icon: <Wrench className="w-6 h-6" /> },
  { title: "Replacement", slug: "engine-replacement", icon: <FileSearch className="w-6 h-6" /> },
  { title: "Engine Swap", slug: "engine-swap", icon: <Zap className="w-6 h-6" /> },
  { title: "Timing Belt", slug: "timing-belt-replacement", icon: <Activity className="w-6 h-6" /> },
];

export default function ModelPageTemplate({
  modelName,
  modelCode,
  heroImage,
  engineCodes,
  introContent,
  technicalContent,
  reviews,
  servicesContent,
  faqs
}: ModelPageTemplateProps) {
  const renderWithLinks = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <Link 
            key={i} 
            href={match[2]} 
            className="text-primary hover:underline font-bold"
          >
            {match[1]}
          </Link>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={`${modelName} ${modelCode}`}
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white dark:from-slate-950 dark:via-slate-950/80 dark:to-slate-950"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 md:px-12">
          <div className="max-w-4xl">
            <Breadcrumbs />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-primary/10 rounded-lg text-primary text-xs font-bold uppercase tracking-widest mb-8 mt-12 border border-primary/20"
            >
              Specialist Engine Solutions: {modelCode}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-[0.9] mb-8"
            >
              {modelName} <br />
              <span className="text-primary italic">Engine Expertise</span>.
            </motion.h1>

            <div className="flex flex-wrap gap-3 mb-10">
              {engineCodes.map(code => (
                <span key={code} className="px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest border border-slate-200 dark:border-slate-800">
                  {code}
                </span>
              ))}
            </div>

            <RegLookup />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8 text-xl text-slate-600 dark:text-gray-400 font-medium leading-relaxed text-justify italic border-l-4 border-primary pl-8">
              {introContent.map((p, i) => (
                <p key={i}>{renderWithLinks(p)}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive Sections */}
      {technicalContent.map((section, idx) => (
        <section key={idx} className={`py-24 overflow-hidden ${idx % 2 === 0 ? 'bg-slate-50 dark:bg-slate-900/30' : 'bg-white dark:bg-slate-950'}`}>
          <div className="container mx-auto px-6 md:px-12">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${section.imageLeft ? '' : 'lg:flex-row-reverse'}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative aspect-square rounded-[3rem] overflow-hidden border border-primary/20 shadow-2xl ${section.imageLeft ? 'order-1' : 'order-1 lg:order-2'}`}
              >
                <Image src={section.image} alt={section.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: section.imageLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={section.imageLeft ? 'order-2' : 'order-2 lg:order-1'}
              >
                <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight mb-8">
                  {section.title}
                </h3>
                <div className="space-y-6 text-lg text-slate-600 dark:text-gray-400 font-medium leading-relaxed text-justify">
                  {section.text.map((p, i) => (
                    <p key={i}>{renderWithLinks(p)}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Model-Specific Services Grid */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mt-48"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Professional Engineering</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight">Expert Services for <span className="text-primary italic">{modelName}</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialistServices.map((service, i) => {
              const customContent = servicesContent.find(s => s.slug === service.slug);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 hover:border-primary/40 transition-all flex flex-col group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-heading font-black text-white uppercase mb-6 tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                    {customContent?.text || `Specialized ${service.title} for ${modelName}. Our master technicians ensure every component is restored to factory standards using genuine JLR parts and advanced diagnostic calibration.`}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-3 text-primary text-xs font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-4 bg-slate-950 text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary transition-all border border-white/10 shadow-2xl"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Model-Specific Reviews */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Proven Results</h2>
            <h3 className="text-4xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight">What Our <span className="text-primary italic">{modelCode} Clients</span> Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none flex flex-col h-full"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, starI) => (
                    <Star key={starI} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed mb-8 italic flex-grow font-medium">
                  "{review.text}"
                </p>
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-end">
                  <div>
                    <p className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest mb-1">{review.name}</p>
                    <p className="text-[10px] text-primary font-black uppercase tracking-widest">Engine: {review.engineCode}</p>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-3 bg-slate-950 dark:bg-white text-white dark:text-slate-900 px-12 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-2xl"
            >
              Explore More Reviews
              <ArrowRight className="w-6 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Specialist FAQs */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Model Intelligence</h2>
            <h3 className="text-4xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight">Technical <span className="text-primary italic">Knowledge Base</span></h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800/50 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight group-open:text-primary transition-colors">
                    {faq.question}
                  </h4>
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-open:rotate-180 transition-transform text-primary">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </div>
                </summary>
                <div className="px-8 pb-8 text-lg text-slate-600 dark:text-gray-400 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-6">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <MapSection />
    </div>
  );
}
