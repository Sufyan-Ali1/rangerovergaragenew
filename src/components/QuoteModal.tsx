"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Mail, Phone, User, MapPin, AlertCircle, Loader2 } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialReg: string;
}

export default function QuoteModal({ isOpen, onClose, initialReg }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reg: initialReg,
    name: "",
    email: "",
    phone: "",
    postcode: "",
    issue: "",
    captcha: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setFormData(prev => ({ ...prev, reg: initialReg }));
  }, [initialReg]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Captcha Check
    if (formData.captcha !== "2") {
      alert("Please solve the captcha correctly (1 + 1 = 2).");
      return;
    }

    setIsSubmitting(true);

    // Placeholder for FUTURE API CALL
    console.log("Form Data to be sent to API later:", formData);
    
    // Simulate delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after some time and close
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ reg: "", name: "", email: "", phone: "", postcode: "", issue: "", captcha: "" });
      }, 3000);
    }, 1500);
  };

  if (!isOpen && !isSuccess) return null;

  return (
    <AnimatePresence>
      {(isOpen || isSuccess) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl"
          >
            {isSuccess ? (
              <div className="p-16 text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <ShieldCheck className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-heading font-black text-white mb-4 uppercase tracking-tight">Request Received</h3>
                <p className="text-gray-400">Our specialists will review your requirements and contact you shortly with a tailored quote.</p>
              </div>
            ) : (
              <>
                <div className="absolute top-8 right-8 z-10">
                  <button onClick={onClose} className="p-2 text-gray-500 hover:text-white transition-colors bg-white/5 rounded-full">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-8 md:p-12">
                  <div className="mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                      <ShieldCheck className="w-3 h-3" />
                      Specialist Quote Request
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight">Get Your <span className="text-primary italic">Quote</span></h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Reg Plate Visual */}
                    <div className="flex items-stretch h-14 rounded-xl overflow-hidden border-2 border-slate-700 bg-accent relative">
                      <div className="bg-blue-800 w-10 flex flex-col items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-3 mb-1">
                          <rect width="60" height="30" fill="#012169"/>
                          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
                          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                        </svg>
                        <span className="text-[6px] font-black text-white uppercase leading-none">GB</span>
                      </div>
                      <input 
                        type="text"
                        value={formData.reg}
                        onChange={(e) => setFormData({...formData, reg: e.target.value.toUpperCase()})}
                        className="flex-1 bg-accent border-none text-slate-900 font-heading font-black text-xl tracking-widest text-center focus:ring-0 placeholder:text-slate-900/30 uppercase"
                        placeholder="Registration Number"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                        <input 
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your Name*"
                          className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                        <input 
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Email Address*"
                          className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                        <input 
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="Phone Number*"
                          className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                        />
                      </div>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                        <input 
                          type="text"
                          required
                          value={formData.postcode}
                          onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                          placeholder="Post Code*"
                          className="w-full bg-slate-800/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <textarea 
                        required
                        value={formData.issue}
                        onChange={(e) => setFormData({...formData, issue: e.target.value})}
                        placeholder="Issue with Vehicle*"
                        rows={3}
                        className="w-full bg-slate-800/50 border border-white/5 rounded-2xl p-4 text-white placeholder:text-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/5">
                      <div className="flex-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Human Verification</span>
                        <p className="text-white font-black text-lg">What is 1 + 1?</p>
                      </div>
                      <input 
                        type="text"
                        required
                        value={formData.captcha}
                        onChange={(e) => setFormData({...formData, captcha: e.target.value})}
                        className="w-32 bg-slate-900 border border-primary/30 rounded-xl py-3 px-4 text-center text-primary text-xl font-bold focus:ring-primary outline-none"
                        placeholder="Result"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-[1.01] transition-transform shadow-xl shadow-primary/20 disabled:opacity-50 mt-4 uppercase tracking-tight lg:tracking-widest"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                    
                    <p className="text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-loose">
                      Your data is handled securely and only used to provide your specialist engine quote.
                    </p>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
