"use client";

import MapSection from "@/components/MapSection";
import RegLookup from "@/components/RegLookup";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  Cpu,
  FileSearch,
  MapPin,
  Settings,
  ShieldCheck,
  Wind,
  Wrench,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const brandSlides = [
  {
    id: 1,
    brand: "Range Rover",
    tagline: "Unmatched Expertise",
    title: "Engine Restoration Excellence",
    href: "/engines/range-rover",
    description: [
      "Experience the pinnacle of automotive engineering with Range Rover Garage, the UK's premier destination for specialized Range Rover engine restoration. With over 20 years of technical experience, our master technicians provide unparalleled expertise in the complete overhaul of 3.0L TDV6 and SDV6 platforms, alongside high-performance 4.4L SDV8 and 5.0L Supercharged variants.",
      "We possess a deep technical understanding of the Range Rover Vogue (L405/L460) and Sport (L494/L461) models. Our facility is equipped with state-of-the-art diagnostic machinery that mirrors main-dealer capabilities, allowing us to identify and resolve complex mechanical failures with surgical precision that only two decades of specialization can provide.",
      "Our engine rebuild process is exhaustive and precision-driven. We provide specialized solutions for common failure points, such as bottom-end bearing failures and crankshaft issues, by using uprated components that often exceed factory standards. This technical depth ensures your prestige vehicle maintains its performance and reliability.",
      "Located in Grays, Essex, we serve luxury vehicle owners across London and the UK with our secure nationwide collection and delivery service. Every Range Rover rebuild is performed using genuine OEM parts and is backed by a comprehensive warranty, ensuring the maximum longevity and resale value of your asset.",
      "Whether you require a minor technical repair or a complete turnkey engine replacement, our 20+ years of JLR-specific heritage ensures a seamless, main-dealer quality service at competitive independent prices. Trust the UK's leading experts who live and breathe Range Rover engineering excellence every day."
    ],
    image: "/16r.jpeg",
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
    href: "/engines/land-rover",
    description: [
      "Land Rover vehicles are built for the toughest environments, but their sophisticated powerplants require master-level care to maintain rugged reliability. Range Rover Garage provides engineering authority across the entire Land Rover fleet, drawing on over 20 years of specialized experience with the Defender L663, Discovery series, and the versatile Discovery Sport.",
      "We are nationally recognized authorities on the JLR Ingenium 2.0L engine family. From resolving notorious timing chain rattles to correcting catastrophic turbocharger failures, our technicians utilize specialized JLR timing jigs and the latest Pathfinder/TOPIx software to ensure a perfect mechanical finish that restores factory performance.",
      "For owners of the Discovery 4 and 5, we provide specialized bottom-end reinforcement and crankshaft restoration services. We address the 'spun bearing' issues common in the 3.0L platforms by installing precision-machined heavy-duty components that resolve inherent design weaknesses found in original manufacturer specifications.",
      "Our engineering process involves a complete technical strip-down, chemical cleaning of all internal components, and precision honing of cylinder bores. We resolve common overheating, head gasket, and coolant loss issues that frequently affect Evoque and Freelander models during their lifecycle.",
      "Choosing Range Rover Garage means choosing dealership-quality engineering backed by two decades of technical passion. We offer transparent, fixed-price quotes and up to 24 months of warranty protection, providing the ultimate peace of mind for those who demand the ultimate from their Land Rover adventure vehicle."
    ],
    image: "/5r.webp",
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
    href: "/services",
    description: [
      "At Range Rover Garage, our commitment to engineering excellence is underpinned by over 20 years of frontline specialized experience in the luxury SUV sector. We don't just repair engines; we re-engineer them using technical insights gained from thousands of successful JLR restorations and performance upgrades.",
      "We invest heavily in the future of automotive technology, utilizing the latest Pathfinder and TOPIx Cloud diagnostic computer systems. This main-dealer level infrastructure allows our master technicians to pinpoint mechanical and electronic issues with surgical precision, ensuring your luxury vehicle is returned to peak condition without guesswork.",
      "Our workshop is outfitted with specialized engine timing jigs, precision crankshaft grinding machines, and high-pressure chemical cleaning tanks. This heavy investment in specialized tooling allows us to perform complex rebuilds in-house, maintaining total quality control over every micron of measurement.",
      "Experience matters when dealing with modern JLR software and coding. Our technicians are experts in main-dealer level software updates, module programming, and complete vehicle integration. We ensure that every engine swap or repair is perfectly synchronized with your vehicle's complex onboard computer systems.",
      "From our base in Grays, Essex, we maintain the highest standards of transparency and technical integrity. Whether you are a private owner or a trade partner, our 20+ years of proven results make us the UK's first choice for professional Range Rover and Land Rover engine solutions."
    ],
    image: "/13r.jpeg",
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 shrink-0 mb-8">
                  {brandSlides[currentSlide].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-gray-300 font-bold uppercase text-[10px] tracking-widest">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={brandSlides[currentSlide].href}
                  className="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl shadow-slate-900/10 self-start"
                >
                  Explore {brandSlides[currentSlide].brand} Page
                  <ArrowRight className="w-4 h-4" />
                </Link>
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

function ModelShowcase() {
  const [activeModel, setActiveModel] = useState(0);
  
  const vehicleModels = [
    {
      title: "Range Rover Vogue",
      code: "L405 / L460",
      description: "Specialized engine solutions for the flagship Vogue. We master the 3.0L TDV6 and 4.4L SDV8 powerplants, resolving inherent crankshaft and oil pump issues with precision engineering.",
      image: "/1r.webp",
      href: "/engines/range-rover/vogue-l405"
    },
    {
      title: "Range Rover Sport",
      code: "L494 / SVR",
      description: "High-performance engine rebuilds for the Sport and SVR. We optimize the 5.0L Supercharged V8 and SDV6 engines for maximum endurance and throttle response.",
      image: "/16r.jpeg",
      href: "/engines/range-rover/sport"
    },
    {
      title: "Land Rover Discovery",
      code: "Discovery 4 & 5",
      description: "The UK's leading experts for Discovery engine restoration. We resolve 'spun bearing' issues in the 3.0L SDV6 by installing reinforced, uprated crankshafts.",
      image: "/5r.webp",
      href: "/engines/land-rover/discovery-4"
    },
    {
      title: "Range Rover Evoque",
      code: "L538 / L551",
      description: "Master-level care for the Ingenium 2.0L family. We specialize in resolving timing chain rattles and early-life turbo failures with upgraded, reliable components.",
      image: "/4r.webp",
      href: "/engines/range-rover/evoque"
    },
    {
        title: "Land Rover Defender",
        code: "L663 / Classic",
        description: "Rugged reliability restored for the ultimate off-roader. Specialist engineering for both the modern D250/D300 Ingenium units and the legendary classic powerplants.",
        image: "/6r.webp",
        href: "/engines/land-rover/defender"
      }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveModel((prev) => (prev + 1) % vehicleModels.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [vehicleModels.length]);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-2 text-shadow-sm">Specialist Model Support</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">Engine Excellence <span className="text-primary italic">By Model</span></h3>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setActiveModel(prev => (prev - 1 + vehicleModels.length) % vehicleModels.length)}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button 
              onClick={() => setActiveModel(prev => (prev + 1) % vehicleModels.length)}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModel}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                    <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-primary/20 inline-block">
                        {vehicleModels[activeModel].code}
                    </span>
                    <h4 className="text-3xl md:text-5xl font-heading font-black text-slate-950 dark:text-white uppercase tracking-tight leading-none">
                        {vehicleModels[activeModel].title}
                    </h4>
                </div>
                <p className="text-lg text-slate-600 dark:text-gray-400 font-medium leading-relaxed border-l-3 border-primary pl-5">
                  {vehicleModels[activeModel].description}
                </p>
                <Link 
                  href={vehicleModels[activeModel].href}
                  className="inline-flex items-center gap-3 bg-slate-950 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl"
                >
                  Explore Model
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="lg:col-span-7 relative h-[280px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl group">
                <Image 
                  src={vehicleModels[activeModel].image} 
                  alt={vehicleModels[activeModel].title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
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

      {/* Model Specialist Slider */}
      <ModelShowcase />

      {/* Brand Expertise Slider */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden border-t border-slate-100 dark:border-slate-900">
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

          <div className="mt-16 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl"
            >
              Explore More Reviews
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed SEO Content Section */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="/15r.jpeg" 
                alt="Range Rover Engine Specialist Grays Essex" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-2 text-shadow-sm">Master Engineering</p>
                <h4 className="text-white font-heading font-bold text-2xl uppercase tracking-tight text-shadow-md">Precision Rebuilds</h4>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                UK's Leading Authority in <span className="text-primary italic">Range Rover Engine Restoration</span>
              </h3>
              <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                Range Rover Garage is the UK's leading authority in Range Rover engine restoration, providing a master-level service from our state-of-the-art facility in <span className="text-slate-900 dark:text-white font-bold">Grays, Essex</span>. With over 20 years of technical heritage, our independent workshop offers a credible alternative to main dealers, combining specialized <span className="text-primary font-bold">JLR expertise</span> with competitive independent pricing. We specialize in the complete overhaul and re-engineering of the Land Rover and Range Rover engine family, including the high-performance 5.0L V8 Supercharged units and the incredibly popular 3.0L TDV6 and SDV6 diesel platforms. 
                Our engineering process involves a 200-point inspection protocol and the use of specialized JLR timing jigs, ensuring that every reconditioned engine we produce meets or exceeds factory tolerances for thermal efficiency and mechanical longevity. From London to Manchester, our nationwide collection service ensures your prestige vehicle is handled with the absolute care it deserves.</p>
              <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                Our technicians utilize the latest <span className="text-slate-900 dark:text-white font-bold">Pathfinder and TOPIx Cloud diagnostics</span> to ensure every mechanical repair is perfectly synchronized with your vehicle's complex onboard computer systems. Whether you are dealing with a catastrophic crankshaft failure or require precision timing chain replacement for an Ingenium 2.0L unit, we provide a transparent, fixed-price solution that restores your prestige vehicle to factory-new performance levels.
              </p>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">
                Nationwide Support & <span className="text-primary italic">OEM Parts Excellence</span>
              </h3>
              <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                Our commitment to engineering excellence extends across the entire South East, serving luxury vehicle owners in <span className="text-slate-900 dark:text-white font-bold">London, Essex, Kent</span>, and beyond with our secure nationwide collection and delivery service. We understand that your Range Rover Vogue or Sport is a precision-engineered asset, which is why we use only <span className="text-primary font-bold">genuine Land Rover OEM parts</span> and uprated heavy-duty components where known design weaknesses exist. 
              </p>
              <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                Our engine rebuild process is exhaustive, involving a complete technical strip-down, high-pressure chemical cleaning, and precision honing of cylinder bores to ensure maximum longevity and resale value. Every engine service we perform is backed by a comprehensive warranty, giving you total peace of mind for the road ahead. From the classic <span className="text-slate-900 dark:text-white font-bold">Range Rover L322 to the modern Discovery 5 and Defender L663</span>, trust the specialists who live and breathe Range Rover engineering every day.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="/13r.jpeg" 
                alt="Land Rover Specialist UK Engine Repair" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-2 text-shadow-sm">JLR Certified Tools</p>
                <h4 className="text-white font-heading font-bold text-2xl uppercase tracking-tight text-shadow-md">Diagnostic Mastery</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Your Questions Answered</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Frequently Asked <span className="text-primary italic">Questions</span></h3>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
            {[
              {
                q: "How long does a Range Rover engine rebuild typically take?",
                a: "A standard engine rebuild usually takes between 7 to 14 working days. This timeframe allows for a meticulous strip-down, cleaning, precision machining, and extensive testing to ensure your engine returns to you in factory-new condition."
              },
              {
                q: "Do you offer a warranty on your engine services?",
                a: "Yes, all our engine rebuilds and repairs come with a comprehensive 6-month or 6,000-mile warranty as standard. For added peace of mind, we also offer extended 12 and 24-month warranties sourced through main dealer networks."
              },
              {
                q: "Can you collect my vehicle if the engine has failed?",
                a: "Absolutely. We offer a secure nationwide vehicle collection and delivery service. Our specialized transporters can collect your Range Rover or Land Rover from anywhere in the UK and bring it directly to our Grays, Essex workshop."
              },
              {
                q: "Do you use genuine Land Rover parts?",
                a: "We exclusively use genuine Land Rover (OEM) parts or high-performance uprated components that exceed factory standards. This ensures the longevity of the repair and maintains your vehicle's resale value."
              },
              {
                q: "How much does a typical engine replacement cost?",
                a: "Costs vary depending on the specific engine model (e.g., 3.0L TDV6 vs. 5.0L SVR) and the extent of the damage. We provide transparent, fixed-price quotes after an initial diagnostic assessment, ensuring no hidden surprises."
              }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors group"
              >
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex gap-4 items-start">
                  <span className="text-primary font-black">Q.</span>
                  {faq.q}
                </h4>
                <p className="text-slate-600 dark:text-gray-400 font-medium leading-relaxed flex gap-4 items-start pl-8 border-l-2 border-slate-100 dark:border-slate-800 group-hover:border-primary/30 transition-colors">
                  {faq.a}
                </p>
              </motion.div>
            ))}
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



