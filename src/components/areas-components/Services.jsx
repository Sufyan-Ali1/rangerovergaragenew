"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export default function Services({services}){
    return (
        <div>
                <section id="services" className="py-24 bg-white dark:bg-slate-950">
                    <div className="container mx-auto px-6 md:px-12">
                      <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Professional Solutions</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">
                          Specialist Engine Services
                        </h3>
                        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-gray-400">
                          We specialize in Land Rover and Range Rover engines, providing dealership-level quality at competitive independent prices.
                        </p>
                      </div>
            
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full"
                          >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                              {service.icon}
                            </div>
                            <h4 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                              {service.title}
                            </h4>
                            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                              {service.description}
                            </p>
                            <Link 
                              href={`/services/${service.slug}`} 
                              className="inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest hover:gap-3 transition-all"
                            >
                              Explore More
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </section>
        </div>
    )
}