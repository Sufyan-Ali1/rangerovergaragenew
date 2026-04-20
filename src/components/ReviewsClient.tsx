"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, MapPin, CheckCircle2, ArrowRight, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";
import MapSection from "@/components/MapSection";
import Breadcrumbs from "@/components/Breadcrumbs";

const reviews = [
  {
    id: 1,
    name: "James Anderson",
    vehicle: "Range Rover Sport SDV6",
    service: "Full Engine Rebuild",
    location: "London",
    content: "Absolutely brilliant service. My Range Rover Sport had the dreaded bottom-end failure. Range Rover Garage collected the car from London and performed a full engine rebuild using uprated parts. The car runs smoother than ever. Highly recommend their specialist JLR knowledge.",
    rating: 5,
    date: "March 2024"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    vehicle: "Range Rover Evoque",
    service: "Timing Chain Replacement",
    location: "Essex",
    content: "Found this specialist in Grays after the dealer gave me a ridiculous quote for a timing chain rattle. These guys are true professionals. They used genuine JLR parts and the price was transparent. Excellent communication throughout the process.",
    rating: 5,
    date: "February 2024"
  },
  {
    id: 3,
    name: "Michael Roberts",
    vehicle: "Land Rover Discovery 4",
    service: "Engine Repair",
    location: "Kent",
    content: "The only place I trust with my Discovery 4. They resolved a complex overheating issue that three other garages couldn't figure out. Their JLR diagnostics are main-dealer level. Great team in Grays, Essex.",
    rating: 5,
    date: "January 2024"
  },
  {
    id: 4,
    name: "David Thompson",
    vehicle: "Range Rover Vogue L405",
    service: "Turbo Replacement",
    location: "Surrey",
    content: "Expert turbo replacement on my Vogue. Fast turnaround and much more affordable than the main dealer. You can tell they really know these engines inside out. The 6-month warranty gives great peace of mind.",
    rating: 5,
    date: "December 2023"
  },
  {
    id: 5,
    name: "Robert Wilson",
    vehicle: "Land Rover Defender L663",
    service: "Engine Diagnostics",
    location: "Essex",
    content: "Took my new Defender in for a diagnostic check after a warning light appeared. They pinpointed the sensor issue immediately using their Pathfinder system. Professional, honest, and very capable technicians.",
    rating: 5,
    date: "November 2023"
  },
  {
    id: 6,
    name: "Emma Watson",
    vehicle: "Range Rover Velar",
    service: "Ingenium Engine Repair",
    location: "Hertfordshire",
    content: "Fantastic experience getting my Velar's Ingenium engine serviced. They are experts in these specific engines and addressed the timing issues before they became catastrophic. Very grateful for their advice.",
    rating: 5,
    date: "October 2023"
  },
  {
    id: 7,
    name: "Christopher Lee",
    vehicle: "Range Rover Sport SVR",
    service: "Performance Tuning & Maintenance",
    location: "London",
    content: "Brought my SVR in for specialized maintenance. They are one of the few places I trust with the 5.0L Supercharged V8. Meticulous attention to detail and perfect results. Best Range Rover specialist in the UK.",
    rating: 5,
    date: "September 2023"
  },
  {
    id: 8,
    name: "Patricia Miller",
    vehicle: "Land Rover Discovery Sport",
    service: "Head Gasket Replacement",
    location: "Essex",
    content: "Top class engine repair. My Discovery Sport needed a head gasket replacement. They were very thorough, pressure testing everything and ensuring the car was 100% before return. Brilliant service in Grays.",
    rating: 5,
    date: "August 2023"
  },
  {
    id: 9,
    name: "Kevin Davies",
    vehicle: "Range Rover Vogue L322",
    service: "Engine Swap",
    location: "Essex",
    content: "Did an amazing job with a low-mileage engine swap on my classic Vogue L322. It feels like a new car. Their expertise in sourcing quality units is unmatched. Truly the best Land Rover specialists around.",
    rating: 5,
    date: "July 2023"
  },
  {
    id: 10,
    name: "Andrew Wright",
    vehicle: "Freelander 2",
    service: "Timing Belt Replacement",
    location: "Kent",
    content: "Reliable and honest service for my Freelander 2. Changed the cambelt and water pump. Very fair price and high-quality workmanship. I won't go anywhere else for my engine needs.",
    rating: 5,
    date: "June 2023"
  },
  {
    id: 11,
    name: "Linda Taylor",
    vehicle: "Range Rover Sport",
    service: "Crankshaft Repair",
    location: "London",
    content: "Saved my car from the scrap heap! After a crankshaft failure, I thought it was over. These guys rebuilt the engine with a reinforced crank. 10,000 miles later and it's still perfect. Absolute life savers.",
    rating: 5,
    date: "May 2023"
  },
  {
    id: 12,
    name: "Mark Stevens",
    vehicle: "Discovery 5",
    service: "SDV6 Engine Rebuild",
    location: "Essex",
    content: "Masterful engine rebuild on my Discovery 5. They addressed all the common JLR failure points during the process. The level of technical knowledge in that workshop is incredible. 5 stars all the way.",
    rating: 5,
    date: "April 2023"
  }
];

export default function ReviewsClient() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32">
      <div className="container mx-auto px-6 md:px-12">
        <Breadcrumbs />
      </div>
      {/* Header Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-[10px] font-black uppercase tracking-[0.4em] block mb-4"
          >
            Verified Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-6"
          >
            Customer <span className="text-primary italic">Reviews</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-gray-400 font-medium"
          >
            With over 20 years of technical passion, we have built a reputation as the UK's leading 
            independent Range Rover and Land Rover engine specialists. Here is what our clients have to say.
          </motion.p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-700" />
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <div className="relative mb-8">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/10 -z-0" />
                  <p className="text-slate-600 dark:text-gray-300 italic font-medium leading-relaxed relative z-10">
                    "{review.content}"
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight text-lg">
                      {review.name}
                    </h4>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      {review.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <div className="flex items-center gap-1.5 text-primary text-[10px] font-black uppercase tracking-widest">
                      <CheckCircle2 className="w-3 h-3" />
                      {review.vehicle}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </div>
                  </div>
                  <div className="mt-4 inline-block px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full text-[9px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-[0.15em]">
                    {review.service}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-slate-900 rounded-[3.5rem] p-10 md:p-16 text-center border border-primary/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 -ml-24 -mt-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 -mr-24 -mb-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <MessageSquare className="w-16 h-16 text-primary mx-auto mb-8 animate-bounce" />
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 uppercase tracking-tight">
                Ready to Experience <span className="text-primary italic">Excellence?</span>
              </h2>
              <p className="text-gray-400 font-medium mb-12 text-lg">
                Join our hundreds of satisfied clients and restore your Range Rover or Land Rover 
                to its original performance levels. Speak with our master technicians today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/get-quote"
                  className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-all shadow-xl shadow-primary/20"
                >
                  Start Your Journey
                </Link>
                <a
                  href="tel:+441708592377"
                  className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  <Phone className="w-4 h-4" />
                  01708 592377
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />
    </div>
  );
}
