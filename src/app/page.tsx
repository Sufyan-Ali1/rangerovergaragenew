"use client";

import MapSection from "@/components/MapSection";
import RegLookup from "@/components/RegLookup";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  Cpu,
  FileSearch,
  MapPin,
  Phone,
  Settings,
  ShieldCheck,
  Wind,
  Wrench,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const brandSlides = [
  {
    id: 1,
    brand: "Range Rover",
    tagline: "Unmatched Expertise",
    title: "Engine Restoration Excellence",
    description: [
      "Experience the pinnacle of automotive engineering with Vogue Technics, the UK's premier destination for specialized Range Rover engine restoration. With over 20 years of technical experience, our master technicians provide unparalleled expertise in the complete overhaul of 3.0L TDV6 and SDV6 platforms, alongside high-performance 4.4L SDV8 and 5.0L Supercharged variants.",
      "We possess a deep technical understanding of the Range Rover Vogue (L405/L460) and Sport (L494/L461) models. Our facility is equipped with state-of-the-art diagnostic machinery that mirrors main-dealer capabilities, allowing us to identify and resolve complex mechanical failures with surgical precision that only two decades of specialization can provide.",
      "Our engine rebuild process is exhaustive and precision-driven. We provide specialized solutions for common failure points, such as bottom-end bearing failures and crankshaft issues, by using uprated components that often exceed factory standards. This technical depth ensures your prestige vehicle maintains its performance and reliability.",
      "Located in Grays, Essex, we serve luxury vehicle owners across London and the UK with our secure nationwide collection and delivery service. Every Range Rover rebuild is performed using genuine OEM parts and is backed by a comprehensive warranty, ensuring the maximum longevity and resale value of your asset.",
      "Whether you require a minor technical repair or a complete turnkey engine replacement, our 20+ years of JLR-specific heritage ensures a seamless, main-dealer quality service at competitive independent prices. Trust the UK's leading experts who live and breathe Range Rover engineering excellence every day."
    ],
    image: "/range_rover_engine_expert_1776083944324.png",
    features: [
      "3.0L TDV6 / SDV6 Rebuilds",
      "4.4L SDV8 Full Restoration",
      "5.0L V8 Supercharged Specialists",
      "L405, L494, L460 Expertise"
    ]
  },
  {
    id: 2,
    brand: "Land Rover",
    tagline: "Built for Endurance",
    title: "Technical Engineering Authority",
    description: [
      "Land Rover vehicles are built for the toughest environments, but their sophisticated powerplants require master-level care to maintain rugged reliability. Vogue Technics provides engineering authority across the entire Land Rover fleet, drawing on over 20 years of specialized experience with the Defender L663, Discovery series, and the versatile Discovery Sport.",
      "We are nationally recognized authorities on the JLR Ingenium 2.0L engine family. From resolving notorious timing chain rattles to correcting catastrophic turbocharger failures, our technicians utilize specialized JLR timing jigs and the latest Pathfinder/TOPIx software to ensure a perfect mechanical finish that restores factory performance.",
      "For owners of the Discovery 4 and 5, we provide specialized bottom-end reinforcement and crankshaft restoration services. We address the 'spun bearing' issues common in the 3.0L platforms by installing precision-machined heavy-duty components that resolve inherent design weaknesses found in original manufacturer specifications.",
      "Our engineering process involves a complete technical strip-down, chemical cleaning of all internal components, and precision honing of cylinder bores. We resolve common overheating, head gasket, and coolant loss issues that frequently affect Evoque and Freelander models during their lifecycle.",
      "Choosing Vogue Technics means choosing dealership-quality engineering backed by two decades of technical passion. We offer transparent, fixed-price quotes and up to 24 months of warranty protection, providing the ultimate peace of mind for those who demand the ultimate from their Land Rover adventure vehicle."
    ],
    image: "/land_rover_specialist_workshop_1776083960596.png",
    features: [
      "Defender L663 / Classic Specialists",
      "Discovery 4 & 5 Bottom-End Repair",
      "Ingenium 2.0L Timing Chains",
      "Evoque & Freelander Support"
    ]
  },
  {
    id: 3,
    brand: "Engineering",
    tagline: "Main Dealer Technology",
    title: "precision Diagnostics & Tooling",
    description: [
      "At Vogue Technics, our commitment to engineering excellence is underpinned by over 20 years of frontline specialized experience in the luxury SUV sector. We don't just repair engines; we re-engineer them using technical insights gained from thousands of successful JLR restorations and performance upgrades.",
      "We invest heavily in the future of automotive technology, utilizing the latest Pathfinder and TOPIx Cloud diagnostic computer systems. This main-dealer level infrastructure allows our master technicians to pinpoint mechanical and electronic issues with surgical precision, ensuring your luxury vehicle is returned to peak condition without guesswork.",
      "Our workshop is outfitted with specialized engine timing jigs, precision crankshaft grinding machines, and high-pressure chemical cleaning tanks. This heavy investment in specialized tooling allows us to perform complex rebuilds in-house, maintaining total quality control over every micron of measurement.",
      "Experience matters when dealing with modern JLR software and coding. Our technicians are experts in main-dealer level software updates, module programming, and complete vehicle integration. We ensure that every engine swap or repair is perfectly synchronized with your vehicle's complex onboard computer systems.",
      "From our base in Grays, Essex, we maintain the highest standards of transparency and technical integrity. Whether you are a private owner or a trade partner, our 20+ years of proven results make us the UK's first choice for professional Range Rover and Land Rover engine solutions."
    ],
    image: "/hero-bg.png",
    features: [
      "Pathfinder & TOPIx Cloud Diagnostics",
      "Specialized Engine Timing Jigs",
      "Main-Dealer Level Software Updates",
      "Precision Crankshaft Grinding"
    ]
  }
];

function BrandShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brandSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Image Side */}
        <div className="relative rounded-[3.5rem] overflow-hidden aspect-[4/3] shadow-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={brandSlides[currentSlide].image}
                alt={brandSlides[currentSlide].brand}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Content Side */}
        <div className="relative lg:min-h-[600px] flex flex-col mt-12 lg:mt-0">
          <div className="relative flex-grow min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <h2 className="text-sm font-black text-primary tracking-[0.3em] uppercase mb-4 shrink-0">
                  {brandSlides[currentSlide].tagline}
                </h2>
                <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-950 dark:text-white uppercase tracking-tight mb-6 leading-tight shrink-0">
                  {brandSlides[currentSlide].brand} <br /> 
                  <span className="text-primary italic">{brandSlides[currentSlide].title}</span>
                </h3>
                
                {/* Scrollable Description Container */}
                <div className="max-h-[300px] overflow-y-auto custom-scrollbar pr-6 mb-8">
                  {brandSlides[currentSlide].description.map((para, i) => (
                    <p key={i} className="text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed font-medium last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 shrink-0">
                  {brandSlides[currentSlide].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-gray-300 font-bold uppercase text-[10px] tracking-widest">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <style jsx global>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #D4AF37;
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #B8962E;
            }
          `}</style>

          {/* Navigation Dots - Clearly Separated */}
          <div className="flex gap-4 pt-10 border-t border-slate-100 dark:border-slate-800">
            {brandSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 transition-all duration-500 rounded-full ${
                  currentSlide === i ? "w-10 bg-primary" : "w-2.5 bg-slate-200 dark:bg-slate-800"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {

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
            src="/hero-bg.png"
            alt="Luxury Range Rover"
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
              className="text-4xl md:text-7xl font-heading font-extrabold text-white leading-tight mb-6"
            >
              The Range Rover <br />
              <span className="text-primary">Specialists</span>.
            </motion.h1>

            <motion.p
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Expert engine rebuilds and specialist servicing for all Land Rover and Range Rover models. 
              The UK's leading specialists with state-of-the-art diagnostic facilities.
            </motion.p>

            <RegLookup />

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-white/10"
            >
              <div className="flex items-center gap-3 text-white">
                <MapPin className="text-primary w-6 h-6" />
                <span className="text-sm font-medium">Grays, RM20 4EL</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Clock className="text-primary w-6 h-6" />
                <span className="text-sm font-medium uppercase tracking-tight">OEM Parts Specialists</span>
              </div>
              <div className="hidden md:flex items-center gap-3 text-white">
                <ShieldCheck className="text-primary w-6 h-6" />
                <span className="text-sm font-medium italic">6 Month / 6,000 Mile Warranty</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Warranty Highlight */}
      <section className="pb-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 md:px-12">
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
        </div>
      </section>

      {/* Brand Expertise Slider */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <BrandShowcase />
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-primary-foreground">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">Need an Expert Opinion?</h4>
            <p className="font-medium opacity-90">Talk to our lead technician about your Range Rover engine today.</p>
          </div>
          <a
            href="tel:+441708592377"
            className="bg-white text-primary px-10 py-4 rounded-full font-extrabold text-lg hover:bg-slate-50 transition-colors shadow-lg"
          >
            Get Free Advice
          </a>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Client Trust</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white mb-6 uppercase">Customer Reviews</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "David H.", 
                text: "Outstanding service. My Range Rover Sport had a bottom end failure and these guys rebuilt it better than new. Transparent pricing and high expertise.",
                rating: 5,
                vehicle: "Range Rover Sport"
              },
              { 
                name: "Sarah L.", 
                text: "Best Specialist in the UK. Managed to fix a timing chain issue that the dealer wanted double for. Highly recommended for any JLR owner.",
                rating: 5,
                vehicle: "Range Rover Velar"
              },
              { 
                name: "Michael R.", 
                text: "Professional from start to finish. The team kept me updated throughout my engine replacement with photos and technical details.",
                rating: 5,
                vehicle: "Vogue L405"
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Zap key={index} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-gray-400 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-lg">
                    {review.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">{review.name}</h5>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{review.vehicle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-heading font-black text-slate-950 dark:text-white uppercase tracking-tight mb-6">
                  UK's Premier Independent <span className="text-primary">Range Rover</span> Specialists
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-medium">
                  Welcome to Range Rover Garage, the UK's leading independent destination for Range Rover and Land Rover engine excellence. Based in Grays, Essex, we serve luxury vehicle owners nationwide who demand dealer-level expertise without the dealership price tag. 
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  Our facility is equipped with the latest JLR-specific diagnostic tools, allowing our master technicians to pinpoint issues with surgical precision. From the modern Range Rover L460 to the classic L322, we possess the specialist knowledge required to maintain and restore these complex machines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase text-sm tracking-widest text-primary">Engine Rebuilds</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">Full 3.0L TDV6 & SDV6 rebuilds using uprated crankshafts and premium OEM components.</p>
                </div>
                <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase text-sm tracking-widest text-primary">Timing Chains</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">Specialist replacement services to prevent catastrophic failure in Ingenium and V8 engines.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/30 transition-all" />
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8 leading-tight">
                Why Choose Our <br /> <span className="text-primary">Master Technicians?</span>
              </h3>
              <ul className="space-y-6">
                {[
                  "Nationwide Collection and Delivery Available",
                  "Genuine Land Rover (OEM) Parts Only",
                  "Master Technicians with 15+ Years Experience",
                  "Fixed Pricing with No Hidden Surprises",
                  "Comprehensive 6-Month / 6,000 Mile Warranty",
                  "Specialists in TDV6, SDV6 and Ingenium Engines"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Call for advice</p>
                  <p className="text-white font-heading font-black text-xl tracking-wider">01708 592377</p>
                </div>
                <ShieldCheck className="w-12 h-12 text-primary opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </div>
  );
}

const services = [
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    description: "Master-level 3.0L TDV6 & SDV6 engine rebuilding. We provide full strip-downs and precision re-assembly using genuine OEM parts to restore factory performance levels.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    description: "Specialist timing chain services for JLR Ingenium and V6 engines. Prevent catastrophic engine failure with our precision-timed replacement solutions.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    description: "Full diagnostic and high-performance turbocharger replacement for Range Rover Sport and Vogue models. Targeted resolution for limp mode and smoke issues.",
    icon: <Wind className="w-6 h-6" />
  },
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    description: "Expert head gasket repair and cylinder head resurfacing. We resolve complex overheating and coolant loss issues in all Land Rover and Range Rover engine variants.",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    description: "Precision diagnostics and targeted mechanical repairs for specialized JLR issues. From oil leaks to knocking sounds, we handle every professional detail.",
    icon: <Wrench className="w-6 h-6" />
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    description: "High-quality low-mileage engine sourcing and fitting. Full turnkey service including all programming, coding, and comprehensive nationwide warranty protection.",
    icon: <FileSearch className="w-6 h-6" />
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    description: "Professional performance-matched engine swaps. We handle complete mechanical integration and main-dealer level software programming for a seamless finish.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    description: "Critical maintenance for 2.7L and 3.0L TDV6/SDV6 engines. Ensure long-term reliability with our scheduled cambelt and oil pump replacement services.",
    icon: <Activity className="w-6 h-6" />
  }
];



