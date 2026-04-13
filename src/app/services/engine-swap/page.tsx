import React from "react";
import { Metadata } from "next";
import { Zap } from "lucide-react";
import ServiceTemplate from "@/components/ServiceTemplate";

export const metadata: Metadata = {
  title: "Expert Engine Swaps & Unit Swaps | Range Rover Garage",
  description: "Professional core swaps and custom engine installations for enthusiasts and standard repairs.",
};

export default function EngineSwapPage() {
  return (
    <ServiceTemplate
      title="Expert Engine Swaps & Unit Swaps"
      description="Professional core swaps and custom engine installations for enthusiasts and standard repairs."
      icon={<Zap className="w-12 h-12" />}
      heroImage="/10.webp"
      content="Engine swapping requires advanced knowledge of modern vehicle electronics and wiring. We specialize in swapping like-for-like units as well as performance swaps. We handle the entire process, including intake mapping, transmission synchronization, and the final coding required for a seamless integration."
      benefits={[
        "Seamless integration with existing systems",
        "All wiring and programming included",
        "Upgrade opportunities for older models",
        "Professional testing and road validation"
      ]}
      process={[
        "Configuration of electronics and wiring",
        "Precision mechanical mating of engine/gearbox",
        "System-wide module programming",
        "Full performance and safety validation"
      ]}
      seoSections={[
        {
          title: "Complex Engine Swaps,",
          titleHighlight: "Flawlessly Executed",
          text: [
            "An engine swap in a modern Range Rover or Land Rover is one of the most technically demanding procedures in the automotive sector. Unlike older vehicles, today's JLR platforms feature deeply integrated engine management, adaptive chassis control, and multi-bus CAN communications that require mastery beyond standard mechanical knowledge. With 20+ years of specialised experience, Vogue Technics is one of the few independents in the UK equipped to handle this level of work.",
            "Whether you need a like-for-like swap on a 4.4L SDV8, or a performance-oriented unit upgrade for your Range Rover Sport, our engineers plan and execute every job with meticulous attention to wiring integrity, gearbox mating tolerances, and thermal management to ensure a durable and refined end result.",
            "We serve Range Rover and Land Rover owners throughout Essex, London, and across the UK via our nationwide secure vehicle transport service. All engine swap work is carried out transparently, with a detailed job card and photographic documentation provided so you know exactly what has been done to your vehicle."
          ],
          image: "/hero-bg.png",
          imageLeft: true,
          imageTitle: "Full Swap Capability",
          imageSubtitle: "Like-for-Like & Performance Units"
        },
        {
          title: "Post-Swap Programming &",
          titleHighlight: "Vehicle Validation",
          text: [
            "The mechanical work is just the beginning. After a successful engine swap, our technicians conduct a comprehensive software programming session using JLR Pathfinder, resetting learned values, calibrating adaptive parameters, and ensuring the Engine Control Module, gearbox, and all ancillary systems recognise and communicate correctly with the new unit.",
            "We then road-test every completed swap under real-world conditions, monitoring live data streams for temperature, boost, fuel trims, and transmission behaviour. Only after passing our 50-point post-swap validation checklist is your vehicle certified as ready for collection. This unrivalled attention to detail is why our clients return to us time and time again."
          ],
          image: "/range_rover_engine_expert_1776083944324.png",
          imageLeft: false,
          imageTitle: "50-Point Validation",
          imageSubtitle: "Live Data Road Testing Included"
        }
      ]}
    />
  );
}
