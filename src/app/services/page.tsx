"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  FileSearch, 
  Settings, 
  ShieldCheck, 
  Wind, 
  Wrench, 
  Zap 
} from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const services = [
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    description: "Master-level 3.0L TDV6 & SDV6 engine rebuilding. We provide full strip-downs and precision re-assembly using genuine OEM parts to restore factory performance levels.",
    icon: <Settings className="w-8 h-8" />,
    features: ["OEM Parts", "24 Month Warranty", "Precision Machining"]
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    description: "Specialist timing chain services for JLR Ingenium and V6 engines. Prevent catastrophic engine failure with our precision-timed replacement solutions.",
    icon: <Cpu className="w-8 h-8" />,
    features: ["Ingenium Specialists", "Factory Locking Tools", "Uprated Chains"]
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    description: "Full diagnostic and high-performance turbocharger replacement for Range Rover Sport and Vogue models. Targeted resolution for limp mode and smoke issues.",
    icon: <Wind className="w-8 h-8" />,
    features: ["System Flush", "ECU Calibration", "Tested Units"]
  },
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    description: "Expert head gasket repair and cylinder head resurfacing. We resolve complex overheating and coolant loss issues in all Land Rover and Range Rover engine variants.",
    icon: <ShieldCheck className="w-8 h-8" />,
    features: ["Pressure Testing", "Surface Skimming", "New Head Bolts"]
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    description: "Precision diagnostics and targeted mechanical repairs for specialized JLR issues. From oil leaks to knocking sounds, we handle every professional detail.",
    icon: <Wrench className="w-8 h-8" />,
    features: ["Advanced Diagnostics", "Component Level Fix", "Expert Service"]
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    description: "High-quality low-mileage engine sourcing and fitting. Full turnkey service including all programming, coding, and comprehensive nationwide warranty protection.",
    icon: <FileSearch className="w-8 h-8" />,
    features: ["Low Mileage Units", "Turnkey Service", "Full Integration"]
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    description: "Professional performance-matched engine swaps. We handle complete mechanical integration and main-dealer level software programming for a seamless finish.",
    icon: <Zap className="w-8 h-8" />,
    features: ["Core Swaps", "Module Programming", "Performance Testing"]
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    description: "Critical maintenance for 2.7L and 3.0L TDV6/SDV6 engines. Ensure long-term reliability with our scheduled cambelt and oil pump replacement services.",
    icon: <Activity className="w-8 h-8" />,
    features: ["Full Kit Renewal", "Water Pump Inc.", "Preventative Care"]
  }
];

export default function ServicesPage() {
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
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumbs />
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-[10px] font-black uppercase tracking-[0.4em] block mb-4"
          >
            Engineering Authority
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-6"
          >
            Our Specialist <span className="text-primary italic">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-gray-400 font-medium"
          >
            We provide main-dealer level expertise for Range Rover and Land Rover engines. 
            From precision rebuilds to advanced diagnostics, our master technicians ensure your vehicle performs at its absolute peak.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full overflow-hidden"
            >
              {/* Card Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-heading font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight leading-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-medium">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {feat}
                    </div>
                  ))}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Models Covered Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Precision Expertise</h2>
            <h3 className="text-4xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight">Models We <span className="text-primary italic">Specialize In</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Range Rover Models */}
            <Link href="/engines/range-rover" className="group">
              <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-primary/20 shadow-xl relative overflow-hidden h-full transition-all hover:border-primary/50 hover:shadow-primary/10">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
                <div className="flex justify-between items-start mb-8">
                  <h4 className="text-2xl font-heading font-black text-white uppercase tracking-tight">Range Rover <span className="text-primary italic">Series</span></h4>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Vogue Mk 3 (L322)", 
                    "Vogue Mk 4 (L405)", 
                    "Range Rover Sport", 
                    "Sport SVR", 
                    "Evoque", 
                    "Velar"
                  ].map((model) => (
                    <li key={model} className="flex items-center gap-3 text-gray-300 font-bold uppercase text-[10px] tracking-widest">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {model}
                    </li>
                  ))}
                </ul>
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Explore Range Rover Engines →</span>
              </div>
            </Link>

            {/* Land Rover Models */}
            <Link href="/engines/land-rover" className="group">
              <div className="bg-slate-900 rounded-[2.5rem] p-10 border border-primary/20 shadow-xl relative overflow-hidden h-full transition-all hover:border-primary/50 hover:shadow-primary/10">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
                <div className="flex justify-between items-start mb-8">
                  <h4 className="text-2xl font-heading font-black text-white uppercase tracking-tight">Land Rover <span className="text-primary italic">Series</span></h4>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "Discovery 1 & 2", 
                    "Discovery 3 & 4", 
                    "Discovery 5", 
                    "Discovery Sport", 
                    "Freelander 1 & 2"
                  ].map((model) => (
                    <li key={model} className="flex items-center gap-3 text-gray-300 font-bold uppercase text-[10px] tracking-widest">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {model}
                    </li>
                  ))}
                </ul>
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Explore Land Rover Engines →</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Detailed SEO Content Section */}
        <section className="mt-32 py-20 bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] border border-slate-200 dark:border-slate-800/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <h3 className="text-3xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                  The Gold Standard in <span className="text-primary italic">JLR Engine Engineering</span>
                </h3>
                <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                  {renderWithLinks("Range Rover Garage stands as the UK’s premier independent authority for specialist [Range Rover](/engines/range-rover) and [Land Rover engine services](/services). Our purpose-built engineering center in Grays, Essex, is designed to handle the most complex mechanical challenges facing modern JLR vehicles. From the precision-engineered 3.0L TDV6 and SDV6 engines to the advanced Ingenium 2.0L and high-performance 5.0L V8 Supercharged units, our master technicians bring over two decades of technical heritage to every repair.")}
                </p>
                <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                  {renderWithLinks("We utilize [main-dealer level diagnostics](/services/engine-repair), including the latest Pathfinder and TOPIx Cloud systems, to ensure your vehicle receives the exact calibration and attention to detail it deserves. Our facility is equipped with specialized engine timing jigs, precision crankshaft grinding machines, and high-pressure chemical cleaning tanks, allowing us to perform high-level [engine rebuilds](/services/engine-rebuild) and technical repairs entirely in-house.")}
                </p>
              </div>
              <div className="space-y-8">
                <h3 className="text-3xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                  Nationwide Support & <span className="text-primary italic">Turnkey Solutions</span>
                </h3>
                <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                  {renderWithLinks("We understand that an engine failure in a prestige vehicle like a [Range Rover Vogue](/engines/range-rover/vogue-l405) or [Sport](/engines/range-rover/sport) is a significant event. That’s why we offer a comprehensive, turnkey solution that includes secure nationwide vehicle collection and delivery. Whether you are located in London, Manchester, or the Scottish Highlands, our specialized transporters can safely move your vehicle to our expert workshop.")}
                </p>
                <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                  {renderWithLinks("We pride ourselves on using only [genuine OEM Land Rover parts](/services/engine-rebuild) and uprated heavy-duty components, ensuring that every repair we perform—be it a [timing chain replacement](/services/timing-chain-replacement), turbocharger overhaul, or a complete [engine swap](/services/engine-swap)—exceeds factory specifications for longevity and performance. Every service is backed by our robust warranty, providing you with total peace of mind for your [Defender](/engines/land-rover/defender), [Discovery](/engines/land-rover/discovery-4), or [Range Rover](/engines/range-rover).")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services FAQ Section */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Service Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Service <span className="text-primary italic">FAQs</span></h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "What specific Range Rover engines do you specialize in?",
                a: "We are specialist engineers for the full JLR range, with particular expertise in the 3.0L TDV6/SDV6, 4.4L SDV8, 5.0L V8 Supercharged, and the modern 2.0L Ingenium diesel and petrol engines."
              },
              {
                q: "Is your timing chain replacement service warrantied?",
                a: "Absolutely. Our timing chain replacements use uprated kits and come with a standard 6-month / 6,000-mile warranty, with options to extend coverage up to 24 months through our dealer-level protection plans."
              },
              {
                q: "Do you provide a full diagnostic report before starting any repair?",
                a: "Yes, every vehicle undergoes a comprehensive JLR-certified diagnostic health check. We provide a detailed technical report and a fixed-price quote before any mechanical work begins."
              },
              {
                q: "Can you handle ECU programming and coding after an engine swap?",
                a: "Yes, we utilize the latest JLR Pathfinder and TOPIx software to perform all necessary module programming, adaptations, and coding to ensure the new engine is perfectly integrated with your vehicle's systems."
              },
              {
                q: "Do you offer nationwide collection for all engine services?",
                a: "We offer secure nationwide collection and delivery for all major engine services, including rebuilds, replacements, and significant mechanical repairs, ensuring your vehicle is handled by experts from start to finish."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800/50 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight group-open:text-primary transition-colors">
                    {faq.q}
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-slate-600 dark:text-gray-400 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Warranty Highlight */}
        <section className="mt-32">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white border border-primary/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tight">Warranty & <span className="text-primary italic">Parts Excellence</span></h3>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl font-medium">
                All our engine services and rebuilds are performed using <span className="text-white font-bold">**Genuine OEM Parts**</span> to ensure maximum longevity and performance for your vehicle.
              </p>
    
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:border-primary/30 transition-colors">
                  <h4 className="text-primary font-black uppercase tracking-widest text-sm mb-4">Standard Protection:</h4>
                  <p className="text-gray-400 italic leading-relaxed">Every service includes our comprehensive 6 Months or 6,000 Miles Warranty as standard.</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:border-primary/30 transition-colors">
                  <h4 className="text-primary font-black uppercase tracking-widest text-sm mb-4">Looking for extended coverage?</h4>
                  <p className="text-gray-400 leading-relaxed font-medium">
                    We also offer up to <span className="text-white">**24 Months Warranty**</span>, sourced directly from main dealers. Please note, this option comes at a higher cost due to the extended protection and premium coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-slate-900 rounded-[3.5rem] p-10 md:p-16 text-center border border-primary/20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 -ml-24 -mt-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 -mr-24 -mb-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 uppercase tracking-tight">
              Need a Custom <span className="text-primary italic">Quote?</span>
            </h2>
            <p className="text-gray-400 font-medium mb-10 text-lg">
              Not sure which service you need? Speak with one of our master technicians today for expert advice and a transparent quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/get-quote"
                className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all shadow-xl shadow-primary/20"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+441708592377"
                className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all"
              >
                Call Us Directly
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
