import ServiceTemplate from "@/components/ServiceTemplate";
import { FileSearch } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Quality Engine Replacement | Range Rover Garage",
  description: "Sourcing and fitting of low-mileage replacement engines for all Range Rover models.",
};

export default function EngineReplacementPage() {
  return (
    <ServiceTemplate
      title="High-Quality Engine Replacement"
      description="Sourcing and fitting of low-mileage replacement engines for all Range Rover models."
      icon={<FileSearch className="w-12 h-12" />}
      heroImage="/2r.webp"
      content="If your engine is beyond repair, an engine replacement can be the most viable option. We source low-mileage, tested engines and perform a full swap, including all necessary ECU programming. This process is often faster than a full rebuild and provides an immediate solution for major structural failures."
      benefits={[
        "Faster turnaround than a custom rebuild",
        "Sourced from trusted, low-mileage donors",
        "Includes all peripheral component checks",
        "Comprehensive fitting and startup warranty"
      ]}
      process={[
        "Sourcing of an optimized donor engine",
        "Full inspection and compression testing",
        "Precision fitting and ECU synchronization",
        "Fluids and filters replacement service"
      ]}
      seoSections={[
        {
          title: "Fully Managed Range Rover",
          titleHighlight: "Engine Sourcing & Supply",
          text: [
            "When your engine is beyond repair, a quality replacement unit is the fastest path back to the road. Vogue Technics leverages over 20 years of relationships with trusted JLR dismantlers and dealer networks to source the highest-quality, low-mileage replacement engines available in the UK, ensuring you never receive a unit with a questionable history.",
            "Every donor engine we supply goes through our rigorous in-house inspection process before it ever enters your vehicle. We perform compression testing, oil pressure analysis, and an internal borescope inspection to guarantee that the unit meets our strict performance threshold. We source engines for all Range Rover models, including the Vogue L405, Sport L494, Velar, Evoque, and all Land Rover variants.",
            "Based in Grays, Essex with nationwide collection capability, we make the engine replacement process simple and stress-free. Get in touch for a fixed, all-inclusive quote that covers the unit cost, fitting, ECU programming, and our standard 6-month warranty."
          ],
          image: "/land_rover_specialist_workshop_1776083960596.png",
          imageLeft: true,
          imageTitle: "Quality Guaranteed Units",
          imageSubtitle: "Inspected & Tested Before Fitting"
        },
        {
          title: "Seamless ECU Programming &",
          titleHighlight: "System Integration",
          text: [
            "Fitting a replacement engine in a modern Range Rover or Land Rover is far more complex than a simple mechanical swap. Our certified JLR technicians handle the complete electronic integration process, re-programming Control Modules, calibrating the transmission, and ensuring the new engine communicates perfectly with your vehicle's complex network of sensors and systems.",
            "Choosing the wrong garage for an engine replacement can result in persistent warning lights, poor fuel economy, or transmission issues. Our 20+ years of JLR-specific electronics knowledge means we've mastered the coding and calibration process for every platform, from Terrain Response to adaptive air suspension synchronisation, giving you a vehicle that feels factory-new from day one."
          ],
          image: "/hero-bg.png",
          imageLeft: false,
          imageTitle: "ECU Synchronisation",
          imageSubtitle: "Full System Module Programming"
        }
      ]}
    />
  );
}
