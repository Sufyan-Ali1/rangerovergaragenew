"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Navigation } from "lucide-react";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Range+Rover+Garage/@51.4741169,0.3034999,17z/data=!3m1!4b1!4m6!3m5!1s0x47d8b76dba1fd2e1:0xf0dc09e9187bf7f8!8m2!3d51.4741169!4d0.3034999!16s%2Fg%2F11sbv01n43";
// Standard embed URL for the specific business location
const EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.987747715694!2d0.300924977054238!3d51.47412027180214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b76dba1fd2e1%3A0xf0dc09e9187bf7f8!2sRange%20Rover%20Garage!5e0!3m2!1sen!2suk!4v1713000000000!5m2!1sen!2suk";

export default function MapSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight"
          >
            Visit Our <span className="text-primary">Workshop</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-gray-400 font-light"
          >
            Our state-of-the-art diagnostic and repair facility in Grays is ready to serve you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-slate-900 text-white p-10 rounded-[2.5rem] border border-primary/20 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
                <MapPin className="w-3 h-3" />
                Primary Location
              </div>
              <h3 className="text-3xl font-heading font-bold mb-8">Specialist <br />Garage</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Address</span>
                    <span className="text-gray-200 font-medium italic">UNIT 1 Hedley Ave, Grays RM20 4EL</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Opening Hours</span>
                    <span className="text-gray-200 font-medium">Mon - Fri: 09:00 AM - 06:00 PM</span>
                    <span className="text-gray-200 font-medium">Saturday: 07:00 AM - 02:00 PM</span>
                    <span className="text-primary text-xs font-bold mt-1 uppercase">Sunday: Closed</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Email Sales</span>
                    <a href="mailto:sales@rangerovergarage.co.uk" className="text-gray-200 hover:text-primary transition-colors">sales@rangerovergarage.co.uk</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <a 
                href={GOOGLE_MAPS_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl h-[500px] lg:h-auto min-h-[400px]"
          >
            <iframe 
              src={EMBED_URL}
              className="w-full h-full grayscale-[0.2] contrast-[1.1]"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
