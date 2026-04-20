"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  Car,
  CheckCircle2,
  ChevronLeft,
  Loader2,
  Mail,
  MapPin,
  Phone,
  RefreshCcw,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const trustFeatures = [
  "Engine Specialists With Over 20 Years Of Experience.",
  "Competitive Prices With Up To 24 Month Warranty.",
  "Customer Satisfaction, Top Priority.",
  "Fully Tested Engines And Genuine OEM Parts.",
  "Nationwide Collection & Delivery Included.",
];

export default function GetQuoteForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialReg = searchParams.get("reg") || "";

  const [vehicleData, setVehicleData] = useState<any>(null);
  const [vehicleStatus, setVehicleStatus] = useState<"idle" | "loading" | "found" | "not_found">("idle");
  const [captcha, setCaptcha] = useState({ n1: 0, n2: 0, result: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    reg: initialReg,
    name: "",
    email: "",
    phone: "",
    postcode: "",
    issue: "",
    captchaInput: "",
  });

  const [errors, setErrors] = useState({ email: "", phone: "", captcha: "" });

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ n1, n2, result: n1 + n2 });
    setErrors((prev) => ({ ...prev, captcha: "" }));
  };

  // Fetch vehicle data on load if reg is in URL
  useEffect(() => {
    generateCaptcha();
    const cleanVrm = initialReg.trim().replace(/\s/g, "");
    if (!cleanVrm) return;

    const fetchVehicle = async () => {
      setVehicleStatus("loading");
      try {
        const res = await fetch(`/api/vehicle-lookup?vrm=${cleanVrm}`);
        if (res.ok) {
          const data = await res.json();
          // Check if we have any useful data at all
          const hasData = data?.vehicleRegistration || data?.smmtDetails;
          if (hasData) {
            setVehicleData(data);
            setVehicleStatus("found");
            // Also update the form vrm field with the found VRM
            setFormData(prev => ({ ...prev, vrm: data.vrm || cleanVrm }));
          } else {
            setVehicleStatus("not_found");
          }
        } else {
          setVehicleStatus("not_found");
        }
      } catch {
        setVehicleStatus("not_found");
      }
    };

    fetchVehicle();
  }, [initialReg]);



  const validate = () => {
    const newErrors = { email: "", phone: "", captcha: "" };
    let isValid = true;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (formData.phone.replace(/\s+/g, "").length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits.";
      isValid = false;
    }

    if (parseInt(formData.captchaInput) !== captcha.result) {
      newErrors.captcha = "Incorrect answer. Please try again.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      if (parseInt(formData.captchaInput) !== captcha.result) generateCaptcha();
      return;
    }

    setIsSubmitting(true);

    const vState = vehicleData?.vehicleRegistration || {};
    const smmt = vehicleData?.smmtDetails || {};
    const engine = vehicleData?.engine || {};

    let extractedEngineCode = smmt.EngineCode || "";
    const fullEngineNumber = vState.EngineNumber || "";
    if (!extractedEngineCode && fullEngineNumber) {
      const codeMatch = fullEngineNumber.trim().match(/[0-9]{3}[A-Z]{2,3}$/);
      if (codeMatch) extractedEngineCode = codeMatch[0];
      else if (fullEngineNumber.length > 6) {
        const last6 = fullEngineNumber.trim().slice(-6);
        if (/^[A-Z0-9]+$/.test(last6)) extractedEngineCode = last6;
      }
    }

    const payload = {
      website_name: "range-rover-garage-new",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      postcode: formData.postcode,
      vrm: formData.reg,
      make: vState.Make || "",
      model: vState.Model || "",
      fuel: vState.FuelType || "",
      year: vState.YearOfManufacture || "",
      size: vState.EngineCapacity || "",
      engine_code: extractedEngineCode,
      engine_number: fullEngineNumber,
      vin: vState.Vin || "",
      color: vState.Colour || "",
      body_type: smmt.BodyStyle || vState.DoorPlanLiteral || "",
      body_style: smmt.BodyStyle || vState.DoorPlanLiteral || "",
      number_of_doors: smmt.NumberOfDoors || vState.DoorPlanLiteral || "",
      seat_capacity: vState.SeatingCapacity || "",
      wheel_plan: smmt.DriveType || vState.WheelPlan || "",
      aspiration: engine.Aspiration || "",
      maximum_bhp: engine.MaxBhp || "",
      transmission: vState.TransmissionType || vState.Transmission || "",
      co2: vState.Co2Emissions || "",
      issue: formData.issue,
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
        router.push("/thank-you");
      } else {
        setErrors((prev) => ({
          ...prev,
          captcha: "Submission failed. Please try again or call us directly.",
        }));
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        captcha: "Network error. Please call us on 01708 592377.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const vState = vehicleData?.vehicleRegistration || {};

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-24 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-slate-900 transition-colors mb-8 font-bold uppercase tracking-widest text-[10px]"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Back to Workshop
        </Link>

        <div className="mb-10">
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
            Free Quote — No Obligation
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-slate-900 uppercase tracking-tight leading-none">
            Get Your{" "}
            <span className="text-primary italic">Engine Quote</span>
          </h1>
        </div>

        <AnimatePresence mode="wait">
          {vehicleStatus === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white border border-gray-100 p-5 rounded-2xl flex items-center gap-4 mb-8 shadow-sm"
            >
              <Loader2 className="w-5 h-5 text-primary animate-spin shrink-0" />
              <span className="text-slate-900 font-bold uppercase tracking-widest text-xs">
                Looking up your vehicle...
              </span>
            </motion.div>
          )}
          {vehicleStatus === "found" && (
            <motion.div
              key="found"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-l-4 border-primary p-6 rounded-r-2xl mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-md"
            >
              <Car className="w-7 h-7 text-primary shrink-0" />
              <div>
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">
                  Vehicle Identified
                </h3>
                <p className="text-gray-600 font-bold text-sm uppercase tracking-wide">
                  {vState.Make} {vState.Model} — {vState.EngineCapacity}cc {vState.FuelType} ({vState.YearOfManufacture})
                </p>
                <span className="text-[9px] font-bold text-primary uppercase tracking-widest px-2 py-0.5 bg-primary/5 rounded-full border border-primary/20 inline-block mt-2">
                  DVLA Verified
                </span>
              </div>
            </motion.div>
          )}
          {vehicleStatus === "not_found" && (
            <motion.div
              key="notfound"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border-l-4 border-amber-400 p-6 rounded-r-2xl mb-8 flex items-center gap-4 shadow-md"
            >
              <AlertCircle className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">
                  Vehicle Not Found
                </h3>
                <p className="text-gray-500 text-sm font-medium">
                  Please enter your details manually below. Our team will contact you shortly.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-3 bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.25em] block mb-2 ml-1">
                  Vehicle Registration
                </label>
                <div className="flex items-stretch h-14 rounded-xl overflow-hidden border-2 border-gray-100 bg-white shadow-sm focus-within:border-primary transition-all">
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
                    required
                    value={formData.reg}
                    onChange={(e) => setFormData({ ...formData, reg: e.target.value.toUpperCase() })}
                    className="flex-1 bg-yellow-400/5 border-none text-slate-950 font-heading font-black text-xl tracking-widest text-center focus:ring-0 uppercase placeholder:text-gray-300 outline-none"
                    placeholder="ENTER REG"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2 ml-1">Full Name*</span>
                  <div className="relative">
                    <User className="absolute left-4 top-[14px] w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors" />
                    <input
                      type="text" required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter Full Name"
                      className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-4 pl-12 pr-4 text-slate-900 text-sm font-medium focus:bg-white focus:border-primary outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>
                <div className="group">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2 ml-1">Email Address*</span>
                  <div className="relative">
                    <Mail className="absolute left-4 top-[14px] w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors" />
                    <input
                      type="email" required
                      value={formData.email}
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                      placeholder="Enter Email Address"
                      className={`w-full bg-gray-50/50 border ${errors.email ? "border-red-500 ring-1 ring-red-500" : "border-gray-100"} rounded-xl py-4 pl-12 pr-4 text-slate-900 text-sm font-medium focus:bg-white focus:border-primary outline-none transition-all shadow-sm`}
                    />
                  </div>
                  {errors.email && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1 uppercase tracking-wider">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2 ml-1">Phone Number*</span>
                  <div className="relative">
                    <Phone className="absolute left-4 top-[14px] w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors" />
                    <input
                      type="tel" required
                      value={formData.phone}
                      onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                      placeholder="Enter Phone Number"
                      className={`w-full bg-gray-50/50 border ${errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-gray-100"} rounded-xl py-4 pl-12 pr-4 text-slate-900 text-sm font-medium focus:bg-white focus:border-primary outline-none transition-all shadow-sm`}
                    />
                  </div>
                  {errors.phone && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1 uppercase tracking-wider">{errors.phone}</p>}
                </div>
                <div className="group">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2 ml-1">Post Code*</span>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-[14px] w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors" />
                    <input
                      type="text" required
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      placeholder="Enter Post Code"
                      className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-4 pl-12 pr-4 text-slate-900 text-sm font-medium focus:bg-white focus:border-primary outline-none transition-all shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="group">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2 ml-1">Issue with Vehicle*</span>
                <textarea
                  required rows={4}
                  value={formData.issue}
                  onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                  placeholder="Describe your vehicle's issue in as much detail as possible..."
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-4 px-5 text-slate-900 text-sm font-medium focus:bg-white focus:border-primary outline-none transition-all shadow-sm resize-none"
                />
              </div>

              <div className={`flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-50/50 rounded-2xl border ${errors.captcha ? "border-red-400" : "border-gray-100"} shadow-inner`}>
                <div className="flex-1 text-center md:text-left">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-2">Human Verification</span>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <p className="text-xl font-black text-slate-900">What is {captcha.n1} + {captcha.n2}?</p>
                    <button type="button" onClick={generateCaptcha} className="p-1.5 bg-white text-primary border border-gray-100 rounded-full hover:bg-primary hover:text-white transition-all">
                      <RefreshCcw className="w-4 h-4" />
                    </button>
                  </div>
                  {errors.captcha && <p className="text-[10px] text-red-500 font-bold mt-2 uppercase tracking-widest">{errors.captcha}</p>}
                </div>
                <div className="w-24">
                  <input
                    type="number" required
                    value={formData.captchaInput}
                    onChange={(e) => { setFormData({ ...formData, captchaInput: e.target.value }); setErrors({ ...errors, captcha: "" }); }}
                    placeholder="?"
                    className={`w-full bg-white border ${errors.captcha ? "border-red-400" : "border-gray-100"} rounded-xl py-3.5 text-center text-primary text-xl font-black focus:ring-4 focus:ring-primary/5 shadow-sm outline-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-5 rounded-2xl font-heading font-black text-xl uppercase tracking-widest hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/30 transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg shadow-primary/10"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-6 h-6 animate-spin" /> Processing...</>
                ) : "Submit Quote Request"}
              </button>
              <p className="text-center text-[8px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
                By submitting, you agree to our contact terms. We never share your data.
              </p>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-8 sticky top-28">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 space-y-5">
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">Why Choose Us</p>
              {trustFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-slate-800 font-bold text-sm leading-snug">{feat}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-primary/20 text-white space-y-5">
              <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">Prefer to Call?</p>
              <p className="text-gray-300 text-sm font-medium leading-relaxed">
                Speak directly with one of our JLR specialists. Mon–Fri 9am–6pm, Sat 7am–2pm.
              </p>
              <a href="tel:+441708592377" className="flex items-center gap-3 text-white font-heading font-black text-xl tracking-wider hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                01708 592377
              </a>
              <a href="tel:+447477733313" className="flex items-center gap-3 text-white font-heading font-black text-xl tracking-wider hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                07477 733313
              </a>
              <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm font-medium italic">UNIT 1 Hedley Ave, Grays RM20 4EL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
