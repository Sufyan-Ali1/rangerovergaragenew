"use client";

import { motion } from "framer-motion";
import { Clock, Loader2, Mail, MapPin, MessageSquare, Phone, Send, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    reg: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const payload = {
      website_name: "range-rover-garage-new",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      postcode: "",
      vrm: formData.reg,
      make: "",
      model: "",
      fuel: "",
      year: "",
      size: "",
      engine_code: "",
      engine_number: "",
      vin: "",
      color: "",
      body_type: "",
      body_style: "",
      number_of_doors: "",
      seat_capacity: "",
      wheel_plan: "",
      aspiration: "",
      maximum_bhp: "",
      transmission: "",
      co2: "",
      issue: formData.message,
      browser: navigator.userAgent,
      ip_address: "Client-Side",
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg("Submission failed. Please call us directly on 01708 592377.");
      }
    } catch {
      setErrorMsg("Network error. Please call us on 01708 592377.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: MapPin,
      label: "Workshop Address",
      value: "UNIT 1 Hedley Ave, Grays RM20 4EL",
      link: "https://www.google.com/maps/place/Range+Rover+Garage",
    },
    {
      icon: Phone,
      label: "Sales Line",
      value: "01708 592377",
      link: "tel:+441708592377",
    },
    {
      icon: Phone,
      label: "Mobile / WhatsApp",
      value: "07477 733313",
      link: "tel:+447477733313",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sales@rangerovergarage.co.uk",
      link: "mailto:sales@rangerovergarage.co.uk",
    },
    {
      icon: Clock,
      label: "Opening Hours",
      value: "Mon–Fri: 09:00–18:00 | Sat: 07:00–14:00",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pt-28 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-[10px] font-black uppercase tracking-[0.4em] block mb-4"
          >
            We're Here to Help
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-6"
          >
            Contact <span className="text-primary italic">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-gray-400 font-medium"
          >
            Reach out to our specialist team at our Grays, Essex workshop. We're happy to answer any questions about your Range Rover or Land Rover.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start max-w-7xl mx-auto">

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-slate-900 rounded-[2.5rem] p-8 border border-primary/20 shadow-2xl">
              <h2 className="text-2xl font-heading font-black text-white mb-8 uppercase tracking-tight">
                Get In <span className="text-primary italic">Touch</span>
              </h2>
              <div className="space-y-6">
                {contactDetails.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="text-gray-200 font-bold hover:text-primary transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-200 font-bold text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Get Quote CTA */}
            <div className="bg-primary rounded-[2rem] p-8 text-white text-center shadow-xl shadow-primary/30">
              <MessageSquare className="w-10 h-10 mx-auto mb-4" />
              <h3 className="font-heading font-black text-xl mb-3 uppercase tracking-tight">Need an Engine Quote?</h3>
              <p className="text-sm opacity-90 mb-6 font-medium">Get a fast, fixed, all-inclusive quote for your Range Rover or Land Rover engine work.</p>
              <Link
                href="/get-quote"
                className="inline-block bg-white text-primary px-8 py-3 rounded-full font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-colors shadow-lg"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-slate-800"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">
                  Message <span className="text-primary italic">Sent!</span>
                </h3>
                <p className="text-gray-500 font-medium mb-8 max-w-sm leading-relaxed">
                  Thank you for reaching out. Our specialist team will respond to your enquiry as soon as possible.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", message: "", reg: "" }); }}
                  className="text-primary font-black uppercase tracking-widest text-xs hover:underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] block mb-3">Direct Enquiry</span>
                  <h2 className="text-3xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    Send Us a <span className="text-primary italic">Message</span>
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Optional Reg Number */}
                  <div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2 ml-1">Vehicle Registration <span className="text-gray-300">(Optional)</span></span>
                    <div className="flex items-stretch h-13 rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm focus-within:border-primary transition-all">
                      <div className="bg-blue-800 w-12 flex flex-col items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-7 h-3.5 mb-0.5">
                          <rect width="60" height="30" fill="#012169" />
                          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                        </svg>
                        <span className="text-[7px] font-black text-white uppercase">GB</span>
                      </div>
                      <input
                        type="text"
                        value={formData.reg}
                        onChange={(e) => setFormData({ ...formData, reg: e.target.value.toUpperCase() })}
                        className="flex-1 bg-yellow-400/5 border-none text-slate-950 dark:text-white font-heading font-black text-lg tracking-widest text-center focus:ring-0 uppercase placeholder:text-gray-300 outline-none"
                        placeholder="ENTER REG"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="group">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2 ml-1">Full Name*</span>
                    <div className="relative">
                      <User className="absolute left-4 top-[14px] w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors" />
                      <input
                        type="text" required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter Your Full Name"
                        className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl py-4 pl-12 pr-4 text-slate-900 dark:text-white text-sm font-medium focus:bg-white dark:focus:bg-slate-700 focus:border-primary outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="group">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2 ml-1">Email*</span>
                      <div className="relative">
                        <Mail className="absolute left-4 top-[14px] w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors" />
                        <input
                          type="email" required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter Email Address"
                          className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl py-4 pl-12 pr-4 text-slate-900 dark:text-white text-sm font-medium focus:bg-white dark:focus:bg-slate-700 focus:border-primary outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2 ml-1">Phone</span>
                      <div className="relative">
                        <Phone className="absolute left-4 top-[14px] w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Enter Phone Number"
                          className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl py-4 pl-12 pr-4 text-slate-900 dark:text-white text-sm font-medium focus:bg-white dark:focus:bg-slate-700 focus:border-primary outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2 ml-1">Message*</span>
                    <textarea
                      required rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you? Tell us about your vehicle and its issue..."
                      className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl py-4 px-5 text-slate-900 dark:text-white text-sm font-medium focus:bg-white dark:focus:bg-slate-700 focus:border-primary outline-none transition-all shadow-sm resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-red-500 text-sm font-bold text-center">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-5 rounded-2xl font-heading font-black text-xl uppercase tracking-widest hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-60 flex items-center justify-center gap-3 shadow-lg shadow-primary/10"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-6 h-6 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-5 h-5" /> Send Message</>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>

        {/* Map Embed */}
        <div className="mt-16 rounded-[2.5rem] overflow-hidden h-[400px] shadow-2xl border border-slate-200 dark:border-slate-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.987747715694!2d0.300924977054238!3d51.47412027180214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b76dba1fd2e1%3A0xf0dc09e9187bf7f8!2sRange%20Rover%20Garage!5e0!3m2!1sen!2suk!4v1713000000000!5m2!1sen!2suk"
            width="100%" height="100%"
            style={{ border: 0 }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
