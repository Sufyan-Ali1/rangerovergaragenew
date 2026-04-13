"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RegLookup() {
  const [reg, setReg] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetReg = reg.trim();
    if (!targetReg) {
      setError(true);
      return;
    }
    router.push(`/get-quote${targetReg ? `?reg=${targetReg}` : ""}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReg(e.target.value.toUpperCase());
    if (error) setError(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="w-full max-w-2xl mx-auto lg:mx-0"
    >
      <form 
        onSubmit={handleSubmit}
        className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-2 sm:p-3 rounded-[2rem] shadow-2xl flex flex-col sm:flex-row gap-3"
      >
        <div className="flex-1 flex items-stretch min-h-[60px] relative overflow-hidden rounded-2xl border-2 border-slate-800 focus-within:border-primary transition-colors">
          {/* UK Flag Area */}
          <div className="bg-blue-800 w-12 flex flex-col items-center justify-center gap-1 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-8 h-4">
              <rect width="60" height="30" fill="#012169"/>
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
              <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
              <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
            </svg>
            <span className="text-[8px] font-black text-white leading-none tracking-tighter uppercase">GB</span>
          </div>

          {/* Input Area (Yellow Plate Style) */}
          <div className="flex-1 bg-accent/90 flex items-center px-4">
            <input 
              type="text"
              value={reg}
              onChange={handleChange}
              placeholder="ENTER VEHICLE REG"
              maxLength={8}
              className="w-full bg-transparent border-none text-slate-900 text-xl font-heading font-black placeholder:text-slate-900/40 uppercase tracking-widest focus:ring-0"
            />
          </div>
        </div>

        <button 
          type="submit"
          className="bg-primary text-white px-8 py-4 sm:py-0 rounded-2xl font-heading font-black text-lg sm:text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 shrink-0 uppercase tracking-tight"
        >
          <Search className="w-5 h-5" />
          Get Quote
        </button>
      </form>
      
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-red-500 font-bold text-sm uppercase tracking-widest text-center lg:text-left pl-4"
        >
          Kindly add reg number
        </motion.p>
      )}
      
      <p className="mt-4 text-gray-400 text-sm font-medium flex items-center gap-2 justify-center lg:justify-start">
        Don't have the Reg? <button type="button" onClick={() => router.push("/get-quote")} className="text-primary hover:underline italic">Find vehicle manually</button>
      </p>
    </motion.div>
  );
}
