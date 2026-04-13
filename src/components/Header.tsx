"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Menu, X, ShieldCheck } from "lucide-react";

const services = [
  { title: "Engine Rebuild", href: "/services/engine-rebuild" },
  { title: "Timing Chain Replacement", href: "/services/timing-chain-replacement" },
  { title: "Turbo Replacement", href: "/services/turbo-replacement" },
  { title: "Head Gasket Replacement", href: "/services/head-gasket-replacement" },
  { title: "Engine Repair", href: "/services/engine-repair" },
  { title: "Engine Replacement", href: "/services/engine-replacement" },
  { title: "Engine Swap", href: "/services/engine-swap" },
  { title: "Timing Belt Replacement", href: "/services/timing-belt-replacement" },
];

const engines = [
  { title: "Range Rover", href: "/engines/range-rover" },
  { title: "Land Rover", href: "/engines/land-rover" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightPage = pathname === "/get-quote" || pathname === "/gallery" || pathname === "/contact";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isLightPage ? "bg-slate-900/95 backdrop-blur-md py-2 shadow-xl" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-heading font-bold text-white tracking-widest uppercase">
              Range Rover <span className="text-primary">Garage</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-primary transition-colors font-medium">Home</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-white hover:text-primary transition-colors font-medium">
                Services <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-4 w-64 bg-slate-900 border border-slate-800 rounded-xl mt-2 p-2 shadow-2xl"
                  >
                    {services.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href}
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all text-sm"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Brands Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown("engines")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-white hover:text-primary transition-colors font-medium">
                Engines <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "engines" ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === "engines" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-4 w-48 bg-slate-900 border border-slate-800 rounded-xl mt-2 p-2 shadow-2xl"
                  >
                    {engines.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href} 
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all text-sm"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/gallery" className="text-white hover:text-primary transition-colors font-medium">Gallery</Link>
            <Link href="/contact" className="text-white hover:text-primary transition-colors font-medium">Contact</Link>

            <div className="flex items-center gap-3">
              <a href="tel:+447477733313" className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full hover:bg-primary hover:border-primary transition-all font-bold text-sm tracking-wide">
                <Phone className="w-3.5 h-3.5 text-primary" />
                07477 733313
              </a>
              <a href="tel:+441708592377" className="flex items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all font-bold text-sm shadow-lg shadow-primary/20 tracking-wide">
                <Phone className="w-3.5 h-3.5" />
                01708 592377
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-xl text-white font-bold border-b border-white/5 pb-2">Home</Link>
              
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold uppercase text-xs tracking-widest">Our Services</span>
                {services.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-gray-300 hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold uppercase text-xs tracking-widest">Specialist Engines</span>
                {engines.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-gray-300 hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-xl text-white font-bold border-b border-white/5 pb-2">Gallery</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl text-white font-bold border-b border-white/5 pb-2">Contact Us</Link>

              <div className="flex flex-col gap-3">
                <Link href="tel:+447477733313" className="flex items-center justify-center gap-2 text-white font-bold py-2 border-b border-white/5">
                  <Phone className="w-4 h-4" />
                  07477 733313
                </Link>
                <Link href="tel:+441708592377" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold">
                  <Phone className="w-5 h-5" />
                  Call Sales: 01708 592377
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
