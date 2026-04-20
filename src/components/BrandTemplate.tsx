"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Clock, MapPin, ShieldCheck, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MapSection from "./MapSection";
import RegLookup from "./RegLookup";
import Breadcrumbs from "./Breadcrumbs";

interface BrandTemplateProps {
  title: string;
  description: string;
  heroImage: string;
  models: {
    name: string;
    href?: string;
  }[];
  content: string | string[];
  specialistAreas: string[];
  reviews?: {
    name: string;
    rating: number;
    text: string;
    date: string;
    model: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  services?: {
    title: string;
    slug: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

export default function BrandTemplate({
  title,
  description,
  heroImage,
  models,
  content,
  specialistAreas,
  reviews,
  faqs,
  services
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
            sizes="100vw"
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
          <Breadcrumbs />
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
                    if (i === 3 || i === 6) return null; // Render these full-width later
                    
                    if (i === 0) {
                      return (
                        <div key={i} className="relative pl-8 border-l-4 border-primary">
                          <p className="text-2xl md:text-3xl font-heading font-bold text-slate-900 dark:text-white leading-tight italic">
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
                      <li key={model.name} className="text-xs md:text-sm font-black uppercase tracking-[0.2em] hover:text-white transition-colors">
                        {model.href ? (
                          <Link href={model.href} className="hover:text-primary transition-colors">
                            {model.name}
                          </Link>
                        ) : (
                          model.name
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-Width Technical Spotlights */}
      {Array.isArray(content) && (content[3] || content[6]) && (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[3, 6].map((index) => {
                const para = content[index];
                if (!para) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-[3rem] p-12 border border-white/10 hover:border-primary/40 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                        <Award className="w-6 h-6" />
                      </div>
                      <h4 className="text-primary font-black uppercase tracking-widest text-xs">Technical Spotlight</h4>
                    </div>
                    <p className="text-2xl font-heading font-bold text-white leading-tight group-hover:text-primary transition-colors">
                      {para}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      {reviews && reviews.length > 0 && (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Client Trust</h2>
              <h3 className="text-4xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight">Verified <span className="text-primary italic">Client Reviews</span></h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none hover:border-primary/30 transition-all flex flex-col h-full"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, starI) => (
                      <Star key={starI} className={`w-4 h-4 ${starI < review.rating ? 'text-primary fill-primary' : 'text-slate-300'}`} />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 italic flex-grow">
                    "{review.text}"
                  </p>
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <p className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest mb-1">{review.name}</p>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{review.model}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-10 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all border border-slate-200 dark:border-slate-800 shadow-xl"
              >
                Explore More Reviews
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Service Expertise</h2>
              <h3 className="text-4xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight">Technical <span className="text-primary italic">FAQs</span></h3>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800/50 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight group-open:text-primary transition-colors">
                      {faq.question}
                    </h4>
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-open:rotate-180 transition-transform">
                      <Star className="w-4 h-4 rotate-90" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 dark:text-gray-400 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {services && services.length > 0 && (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Expertise</h2>
              <h3 className="text-4xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight">Specialist <span className="text-primary italic">Engine Services</span></h3>
              <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                Comprehensive engineering solutions for all Range Rover and Land Rover platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all flex flex-col h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
                    {service.icon}
                  </div>
                  
                  <h4 className="text-xl font-heading font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight group-hover:text-primary transition-colors relative z-10">
                    {service.title}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-medium relative z-10">
                    {service.description}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform relative z-10"
                  >
                    View Service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl"
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <MapSection />
    </div>
  );
}
