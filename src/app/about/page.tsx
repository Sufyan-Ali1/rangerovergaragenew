"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Star, 
  History, 
  Cpu, 
  Users, 
  Heart,
  ArrowRight,
  Target,
  Compass
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapSection from "@/components/MapSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/16r.jpeg"
            alt="Range Rover Specialist Workshop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 md:px-12 pt-20">
          <div className="max-w-4xl">
            <Breadcrumbs />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-primary/10 rounded-lg text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20"
            >
              Defining Automotive Excellence
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-8xl font-heading font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter"
            >
              The UK's Premier <br />
              <span className="text-primary italic">JLR Authority</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-medium"
            >
              Two decades of technical heritage. One mission: To provide the world's most sophisticated Range Rover and Land Rover engine solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "20+", icon: <History className="w-6 h-6" /> },
              { label: "Engines Restored", value: "5,000+", icon: <Award className="w-6 h-6" /> },
              { label: "Master Techs", value: "12", icon: <Users className="w-6 h-6" /> },
              { label: "Success Rate", value: "100%", icon: <CheckCircle2 className="w-6 h-6" /> },
            ].map((stat, i) => (
              <div key={i} className="text-white flex flex-col items-center text-center">
                <div className="mb-3 opacity-80">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-heading font-black mb-1">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - Long Form Content 1 */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-primary"></div>
                <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase">Our Technical Heritage</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">
                Born From <span className="text-primary italic">Engineering Passion</span>
              </h3>
              <div className="space-y-6 text-lg text-slate-600 dark:text-gray-400 font-medium leading-relaxed text-justify">
                <p>
                  Range Rover Garage wasn't built in a day; it was forged over twenty years of grease, precision, and an unwavering obsession with the Land Rover brand. Our journey began in a modest workshop with a singular focus: to understand the intricate mechanical heartbeat of the Range Rover Vogue. While others saw a complex luxury SUV, we saw a masterpiece of British engineering that deserved a higher level of technical scrutiny than the standard main-dealer service could provide.
                </p>
                <p>
                  As the JLR platforms evolved from the rugged simplicity of the classic Tdi engines to the sophisticated, computer-governed TDV6, SDV8, and modern Ingenium powerplants, Range Rover Garage evolved with them. We didn't just keep pace; we led the way. We were among the first independent specialists in the UK to invest in main-dealer level diagnostics and specialized engine timing jigs, ensuring that our technical capability remained at the absolute cutting edge of the industry.
                </p>
                <p>
                  Today, our facility in Grays, Essex, serves as a national center of excellence for Range Rover and Land Rover engine restoration. We have transitioned from a local specialist to a nationwide authority, trusted by private collectors, high-net-worth individuals, and trade partners alike. Our story is one of continuous improvement, driven by the belief that every Range Rover deserves to run with the same vigor it possessed the day it left the Solihull production line.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
            >
              <Image
                src="/13r.jpeg"
                alt="Range Rover Heritage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/5"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section - Long Form Content 2 */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
            >
              <Image
                src="/1r.webp"
                alt="Precision Engineering"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/5"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-primary"></div>
                <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase">The Science of Rebuilding</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">
                Ucompromising <span className="text-primary italic">Technical Standards</span>
              </h3>
              <div className="space-y-6 text-lg text-slate-600 dark:text-gray-400 font-medium leading-relaxed text-justify">
                <p>
                  At Range Rover Garage, we believe that an engine rebuild is more than a repair; it is a meticulous scientific process of re-engineering. When a 3.0L SDV6 or an Ingenium unit arrives at our facility, it undergoes a diagnostic protocol that mirrors the intensity of a forensic investigation. We utilize specialized borescope cameras, high-pressure smoke testers, and the latest TOPIx Cloud software to identify not just the failure, but the root cause of the failure.
                </p>
                <p>
                  Our technicians are master craftsmen who understand the tight tolerances required for modern JLR engines. We don't just replace parts; we optimize. For example, when addressing the common crankshaft failures in the TDV6 platforms, we install uprated heavy-duty bearings and precision-balanced components that resolve the original manufacturer's inherent design weaknesses. This level of technical depth is why we can confidently offer extended warranties of up to 24 months—a standard of protection that few independent garages can match.
                </p>
                <p>
                  Every engine that passes through our workshop is chemically cleaned in high-pressure tanks, meticulously inspected for micro-fractures, and re-assembled in a climate-controlled environment. We use only Genuine OEM parts or superior aftermarket components sourced from reputable engineering partners. This commitment to technical integrity ensures that your Range Rover doesn't just return to the road; it returns with a powerplant that is arguably better than new.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section - Long Form Content 3 */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-primary"></div>
                <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase">State-of-the-Art Infrastructure</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">
                A Facility Built For <span className="text-primary italic">Luxury Assets</span>
              </h3>
              <div className="space-y-6 text-lg text-slate-600 dark:text-gray-400 font-medium leading-relaxed text-justify">
                <p>
                  The sophistication of a Range Rover Vogue L460 or a Discovery 5 demands a workshop environment that matches its pedigree. Our facility in Grays, Essex, is a purpose-built hub of automotive technology, designed specifically for the JLR range. We have moved away from the 'traditional' garage model, opting instead for a clinical, engineering-focused layout that prioritizes precision and cleanliness.
                </p>
                <p>
                  We have invested hundreds of thousands of pounds in specialized infrastructure. This includes high-capacity engine stands, precision cylinder honing machines, and dedicated diagnostic bays equipped with the latest Pathfinder hardware. Our module programming suite allows us to perform complex software updates and ECU coding entirely in-house, ensuring that your vehicle's electronic systems are as healthy as its mechanical ones.
                </p>
                <p>
                  Our commitment to nationwide support is reflected in our dedicated logistics fleet. We operate specialized vehicle transporters that provide secure, fully-insured recovery from any location in the UK. This turnkey approach means that from the moment you call us to the moment we return your vehicle, every touchpoint is handled by Range Rover Garage staff who understand the value and importance of your luxury asset. We don't just provide a service; we provide an end-to-end engineering solution.
                </p>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image src="/14r.jpeg" alt="Facility 1" fill className="object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image src="/15r.jpeg" alt="Facility 2" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/6r.webp" alt="Background" fill className="object-cover opacity-10 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">The Range Rover Garage Way</h2>
            <h3 className="text-4xl font-heading font-black text-white uppercase tracking-tight">Our Core <span className="text-primary italic">Principles</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Radical Transparency",
                desc: "We believe in complete openness. Every repair is documented with photos and technical reports, ensuring you understand exactly what work is being performed and why.",
                icon: <Target className="w-10 h-10" />
              },
              {
                title: "Technical Excellence",
                desc: "We never settle for 'good enough'. Our technicians are constantly trained on the latest JLR updates, and we only use the highest grade parts available on the market.",
                icon: <Compass className="w-10 h-10" />
              },
              {
                title: "Client Partnership",
                desc: "We don't just fix cars; we build relationships. We act as consultants for your vehicle's long-term health, helping you preserve its value for years to come.",
                icon: <Users className="w-10 h-10" />
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 hover:border-primary/40 transition-all text-center"
              >
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-8">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-heading font-black text-white uppercase mb-4 tracking-tight">{value.title}</h4>
                <p className="text-gray-400 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Long Form Content 4 - Our Commitment */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="w-20 h-[2px] bg-primary mx-auto"></div>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Our Commitment To <span className="text-primary italic">The Future</span>
            </h3>
            <div className="space-y-8 text-xl text-slate-600 dark:text-gray-400 font-medium leading-relaxed">
              <p>
                As we look toward the future of the Jaguar Land Rover brand, including the transition to hybrid and fully electric platforms, Range Rover Garage is already preparing. We are investing in high-voltage training and specialized EV diagnostic equipment to ensure that we remain the UK's premier JLR authority for decades to come.
              </p>
              <p>
                However, our heart remains with the internal combustion engine. We understand the emotional connection that owners have with their V8 Supercharged Vogues and their rugged TDV6 Discovery 4s. Our commitment is to ensure these legendary powerplants continue to thrive on British roads. When you choose Range Rover Garage, you aren't just choosing a garage; you are choosing a custodian of automotive history. We promise to treat your vehicle with the same respect and technical precision that we would our own.
              </p>
            </div>
            <div className="pt-10">
              <Link
                href="/get-quote"
                className="inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-2xl font-heading font-black text-2xl hover:scale-[1.02] transition-transform shadow-2xl shadow-primary/20 uppercase tracking-widest"
              >
                Join Our Story
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </div>
  );
}
