"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, Loader2, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      const timeout = setTimeout(() => {
        router.push("/");
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [countdown, router]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex items-center justify-center p-6 pt-32">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-xl w-full bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-12 rounded-[3rem] text-center shadow-2xl"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-heading font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight leading-tight">
          Inquiry <span className="text-primary italic">Received!</span>
        </h1>
        
        <p className="text-gray-500 dark:text-gray-400 text-base mb-8 font-medium leading-relaxed">
          Thank you for contacting Range Rover Garage. One of our JLR specialists will review your enquiry and get back to you shortly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <a
            href="tel:01708592377"
            className="flex items-center justify-center gap-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-primary transition-colors group"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span className="font-bold text-slate-900 dark:text-white text-sm tracking-tight">01708 592377</span>
          </a>
          <a
            href="mailto:sales@rangerovergarage.co.uk"
            className="flex items-center justify-center gap-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-primary transition-colors group"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-bold text-slate-900 dark:text-white text-sm tracking-tight">Email Us</span>
          </a>
        </div>

        <div className="bg-gray-50 dark:bg-slate-800/50 py-3 px-6 rounded-full inline-flex items-center gap-3 mb-10 border border-gray-100 dark:border-slate-700">
          <Loader2 className="w-4 h-4 text-primary animate-spin" />
          <p className="text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-widest">
            Redirecting in <span className="text-primary">{countdown}</span> seconds...
          </p>
        </div>

        <br />
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary font-bold hover:underline uppercase tracking-widest text-xs"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Workshop
        </Link>
      </motion.div>
    </div>
  );
}
