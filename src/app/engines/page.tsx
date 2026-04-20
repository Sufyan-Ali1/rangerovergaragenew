"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Search, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Wind, 
  Wrench, 
  FileSearch, 
  Activity,
  Award,
  CheckCircle2,
  Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import RegLookup from "@/components/RegLookup";
import MapSection from "@/components/MapSection";

const services = [
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    description: "Master-level 3.0L TDV6 & SDV6 engine rebuilding with precision re-assembly.",
    icon: <Settings className="w-8 h-8" />
  },
  {
    title: "Timing Chain",
    slug: "timing-chain-replacement",
    description: "Specialist timing chain services for JLR Ingenium and V6 engines.",
    icon: <Cpu className="w-8 h-8" />
  },
  {
    title: "Turbo Repair",
    slug: "turbo-replacement",
    description: "Full diagnostic and high-performance turbocharger replacement services.",
    icon: <Wind className="w-8 h-8" />
  },
  {
    title: "Head Gasket",
    slug: "head-gasket-replacement",
    description: "Expert head gasket repair and cylinder head resurfacing services.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    description: "Precision diagnostics and targeted repairs for specialized JLR issues.",
    icon: <Wrench className="w-8 h-8" />
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    description: "High-quality low-mileage engine sourcing and fitting with full integration.",
    icon: <FileSearch className="w-8 h-8" />
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    description: "Professional performance-matched core swaps and module programming.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Timing Belt",
    slug: "timing-belt-replacement",
    description: "Critical maintenance for 2.7L and 3.0L TDV6/SDV6 engines.",
    icon: <Activity className="w-8 h-8" />
  }
];

const brands = [
  {
    name: "Range Rover",
    slug: "range-rover",
    image: "/8r.jpeg",
    models: ["Vogue L322/L405/L460", "Sport L320/L494/L461", "Velar L560", "Evoque L538/L551"]
  },
  {
    name: "Land Rover",
    slug: "land-rover",
    image: "/6r.webp",
    models: ["Discovery 3/4/5", "Discovery Sport", "Defender L663", "Freelander 1/2"]
  }
];

export default function EnginesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/1r.webp"
            alt="Range Rover Engines"
            fill
            className="object-cover opacity-20 dark:opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white dark:from-slate-950 dark:via-slate-950/80 dark:to-slate-950"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 md:px-12">
          <Breadcrumbs />
          <div className="max-w-4xl mx-auto text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-primary/10 rounded-lg text-primary text-xs font-bold uppercase tracking-widest mb-8"
            >
              UK's Leading JLR Engine Specialist
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-[0.9] mb-8"
            >
              Find Your <br />
              <span className="text-primary italic">Perfect Engine</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-gray-400 mb-12 font-medium"
            >
              Expert engine solutions for Range Rover and Land Rover. Enter your registration to find compatible engines and specialist services for your vehicle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-xl mx-auto"
            >
              <RegLookup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Selection Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative h-[600px] rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase mb-6 tracking-tighter">
                    {brand.name} <span className="text-primary italic">Engines</span>
                  </h2>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {brand.models.map(model => (
                      <div key={model} className="flex items-center gap-2 text-gray-300 text-[10px] font-bold uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {model}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/engines/${brand.slug}`}
                    className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all self-start shadow-xl shadow-primary/20"
                  >
                    Explore Models
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist Services Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Professional Solutions</h2>
            <h3 className="text-4xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight">Specialist <span className="text-primary italic">Engine Care</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none hover:border-primary/50 transition-all flex flex-col group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-heading font-black text-slate-900 dark:text-white mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-medium">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl"
            >
              Explore All Specialist Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Authority Content Section 1: Left Image, Right Content */}
      <section className="py-24 overflow-hidden bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[4rem] overflow-hidden border border-primary/20 shadow-2xl"
            >
              <Image
                src="/13r.jpeg"
                alt="Range Rover Engine Workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-8">
                The Gold Standard in <br />
                <span className="text-primary italic">JLR Engine Engineering</span>
              </h3>
              <div className="space-y-6 text-lg text-slate-600 dark:text-gray-400 font-medium leading-relaxed text-justify">
                <p>
                  Range Rover Garage stands as the UK’s premier independent authority for specialist <span className="text-slate-900 dark:text-white font-bold">Range Rover and Land Rover engine services</span>. Our purpose-built engineering center in Grays, Essex, is meticulously designed to handle the most complex mechanical and electronic challenges facing modern Jaguar Land Rover vehicles. From the precision-engineered 3.0L TDV6 and SDV6 engines found in the Range Rover Sport and Vogue to the advanced Ingenium 2.0L diesel and high-performance 5.0L V8 Supercharged units, our master technicians bring over two decades of technical heritage to every repair.
                </p>
                <p>
                  We utilize <span className="text-primary font-bold">main-dealer level diagnostics</span>, including the latest Pathfinder and TOPIx Cloud systems, ensuring your luxury vehicle receives the exact calibration and attention to detail it deserves. Our facility is equipped with specialized engine timing jigs, precision crankshaft grinding machines, and high-pressure chemical cleaning tanks, allowing us to perform high-level rebuilds and technical repairs entirely in-house. This internal capability allows us to maintain strict quality control and bypass the delays associated with third-party machining.
                </p>
                <p>
                  Whether you are dealing with the common 3.0L crankshaft failure, Ingenium timing chain rattle, or turbocharger efficiency issues, our team provides a robust, engineered solution that restores your vehicle to factory-fresh performance. Every engine that leaves our workshop is a testament to our commitment to engineering excellence and customer satisfaction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Content Section 2: Right Image, Left Content */}
      <section className="py-24 overflow-hidden bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-8">
                Nationwide Support & <br />
                <span className="text-primary italic">Turnkey Solutions</span>
              </h3>
              <div className="space-y-6 text-lg text-slate-600 dark:text-gray-400 font-medium leading-relaxed text-justify">
                <p>
                  We understand that an engine failure in a prestige vehicle like a Range Rover Vogue L405 or a Land Rover Discovery 5 is a significant and stressful event. That’s why we offer a comprehensive, <span className="text-slate-900 dark:text-white font-bold">nationwide turnkey solution</span> that handles everything from initial recovery to final testing. Our specialized vehicle transporters provide secure nationwide collection and delivery, moving your vehicle safely from London, Manchester, Birmingham, or the furthest reaches of the UK directly to our expert workshop in Grays.
                </p>
                <p>
                  We pride ourselves on using only <span className="text-primary font-bold">genuine OEM Land Rover parts</span> and uprated heavy-duty components where factory weaknesses have been identified. Our process ensures that every repair—be it a timing chain replacement, turbocharger overhaul, or a complete engine swap—exceeds original manufacturer specifications for longevity and reliability. Every master-level service is backed by our robust warranty, preserving the long-term resale value of your luxury asset and providing you with total peace of mind.
                </p>
                <p>
                  Our commitment to transparency means you receive detailed technical reports and progress updates throughout the repair process. By choosing Range Rover Garage, you are choosing a partner dedicated to preserving the legendary performance of your Land Rover. From the rugged Defender used for off-road adventures to the sophisticated Range Rover Autobiography, we ensure your vehicle is ready for its next 100,000 miles of operation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[4rem] overflow-hidden border border-primary/20 shadow-2xl order-1 lg:order-2"
            >
              <Image
                src="/14r.jpeg"
                alt="Range Rover Nationwide Recovery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Client Testimonials</h2>
            <h3 className="text-4xl font-heading font-black text-white uppercase tracking-tight">Verified <span className="text-primary italic">Client Reviews</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alistair Graham",
                rating: 5,
                text: "The master technicians at Range Rover Garage are true miracle workers. My Range Rover Sport had a catastrophic engine failure, and they handled the entire rebuild with absolute precision. The transparency and technical knowledge they provided throughout the process were outstanding.",
                model: "Range Rover Sport SDV6",
                date: "22 April 2024"
              },
              {
                name: "Marcus Thorne",
                rating: 5,
                text: "I was hesitant about getting my Discovery 4 engine replaced, but the team here made it seamless. They sourced a low-mileage unit, performed all the necessary coding, and had me back on the road in less than a week. A truly specialist service that beats any main dealer.",
                model: "Land Rover Discovery 4",
                date: "10 March 2024"
              },
              {
                name: "Benedict Wells",
                rating: 5,
                text: "Exceptional service for my Range Rover Vogue. They diagnosed a complex timing issue that two other garages had missed. Their facility in Grays is state-of-the-art, and the 24-month warranty option gave me total peace of mind for my investment.",
                model: "Range Rover Vogue L405",
                date: "15 February 2024"
              },
              {
                name: "Dominic S.",
                rating: 5,
                text: "The only place I would trust with an Ingenium engine repair. They replaced the timing chain on my Evoque using uprated parts, and it now runs quieter than ever. Professional, efficient, and clearly the top JLR specialists in the Essex area.",
                model: "Range Rover Evoque",
                date: "02 January 2024"
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 hover:border-primary/30 transition-all flex flex-col h-full"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, starI) => (
                    <Star key={starI} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-8 italic flex-grow">
                  "{review.text}"
                </p>
                <div className="pt-6 border-t border-white/5">
                  <p className="font-black text-white text-xs uppercase tracking-widest mb-1">{review.name}</p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{review.model}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md text-white px-12 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-primary transition-all border border-white/10 shadow-2xl"
            >
              Explore More Reviews
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Engine FAQs */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Service Expertise</h2>
            <h3 className="text-4xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight">JLR Engine <span className="text-primary italic">Technical FAQs</span></h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "What are the common failure points in Range Rover engines?",
                a: "The most documented issues include crankshaft failure in 3.0L TDV6 models, timing chain wear in Ingenium 2.0L units, and turbocharger contamination across the SDV6 range. We provide uprated components to address these specific factory weaknesses."
              },
              {
                q: "Do you use genuine Land Rover parts for all rebuilds?",
                a: "Yes, we exclusively use Genuine JLR OEM parts or high-performance aftermarket equivalents that exceed manufacturer specifications, ensuring your vehicle maintains its factory reliability and prestige."
              },
              {
                q: "How do you verify the mileage on replacement engines?",
                a: "Every engine we source undergoes a rigorous verification process, including inspection of donor vehicle service records, HPI checks, and physical borescope analysis to ensure mileage and condition are accurate."
              },
              {
                q: "Is nationwide collection available for all major work?",
                a: "Yes, we offer secure nationwide collection and delivery using specialized vehicle transporters. This ensures your vehicle is handled by experts from the moment it leaves your driveway until it's returned."
              },
              {
                q: "What warranty do you provide on specialist engine work?",
                a: "All major engine work comes with a standard 6-month or 6,000-mile warranty. We also offer extended protection plans of up to 24 months, backed by comprehensive engineering reports."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800/50 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight group-open:text-primary transition-colors">
                    {faq.q}
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-open:rotate-180 transition-transform text-primary">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-slate-600 dark:text-gray-400 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                  {faq.a}
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
