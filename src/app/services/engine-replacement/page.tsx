import ServiceTemplate from "@/components/ServiceTemplate";
import { FileSearch } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Quality Engine Replacement | Range Rover Garage",
  description: "Sourcing and fitting of low-mileage replacement engines for all Range Rover models.",
  alternates: {
    canonical: "/services/engine-replacement",
  },
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
      modelsContent={{
        title: "Expert Engine Replacement for all Land Rover & Range Rover Generations",
        paragraphs: [
          "Our engine replacement service covers the full spectrum of the [Land Rover](/engines/land-rover) and [Range Rover](/engines/range-rover) family. We specialize in sourcing units for the [Range Rover Sport](/engines/range-rover/sport), [Range Rover Vogue](/engines/range-rover/vogue-l405), and Autobiography editions. Whether you are dealing with a failure in your [Land Rover Discovery 4](/engines/land-rover/discovery-4) or looking for a replacement for your [Range Rover Velar's](/engines/range-rover/velar) Ingenium engine, we have the network to help.",
          "Operating from our Grays facility, we serve Essex and London with professional engine swaps. We handle the process for your [Discovery](/engines/land-rover/discovery-5), [Velar](/engines/range-rover/velar), or full-sized [Range Rover](/engines/range-rover). Our technicians are experienced with everything from the older TD5 and V8 engines to the most modern [Land Rover Defender](/engines/land-rover/defender) powerhouses."
        ]
      }}
      faqs={[
        {
          question: "Where do you source your replacement engines from?",
          answer: "We source our engines from a network of trusted JLR dismantlers and dealer networks across the UK. Every engine is verified for mileage and undergoes a rigorous multi-point inspection before fitting."
        },
        {
          question: "How long does an engine replacement take?",
          answer: "An engine replacement is typically faster than a rebuild, usually taking between 5 to 7 working days, depending on the availability of the specific engine model."
        },
        {
          question: "Will the replacement engine affect my car's electronics?",
          answer: "No, we perform full ECU programming and system synchronization to ensure the replacement engine communicates perfectly with your vehicle's existing electronics and sensors."
        },
        {
          question: "Do you provide a warranty with replacement engines?",
          answer: "Yes, all our fitted replacement engines come with a standard 6-month or 6,000-mile warranty, with options to extend coverage for up to 2 years."
        },
        {
          question: "Can you source engines for older Range Rover models?",
          answer: "Yes, we have an extensive network that allows us to source high-quality replacement units for older L322 Vogue models as well as the latest L460 and Discovery 5 platforms."
        }
      ]}
      reviews={[
        {
          name: "Robert Davies",
          rating: 5,
          text: "My Discovery 4 engine failed suddenly. Range Rover Garage sourced a great replacement unit and had me back on the road in a week. Outstanding service.",
          date: "10 April 2024",
          model: "Land Rover Discovery 4"
        },
        {
          name: "Emily White",
          rating: 5,
          text: "Replaced the engine in my Evoque. The team was very helpful and the car feels brand new. Much more affordable than I expected.",
          date: "22 February 2024",
          model: "Range Rover Evoque"
        }
      ]}
      seoSections={[
        {
          title: "Fully Managed Range Rover",
          titleHighlight: "Engine Sourcing & Supply",
          text: [
            "When your engine is beyond repair, a quality replacement unit is the fastest path back to the road. Range Rover Garage leverages over 20 years of relationships with trusted JLR dismantlers and dealer networks to source the highest-quality, low-mileage replacement engines available in the UK, ensuring you never receive a unit with a questionable history.",
            "Every donor engine we supply goes through our rigorous in-house inspection process before it ever enters your vehicle. We perform compression testing, oil pressure analysis, and an internal borescope inspection to guarantee that the unit meets our strict performance threshold. We source engines for all Range Rover models, including the Vogue L405, Sport L494, Velar, Evoque, and all Land Rover variants.",
            "Based in Grays, Essex with nationwide collection capability, we make the engine replacement process simple and stress-free. Get in touch for a fixed, all-inclusive quote that covers the unit cost, fitting, ECU programming, and our standard 6-month warranty."
          ],
          image: "/1r.webp",
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
          image: "/2r.webp",
          imageLeft: false,
          imageTitle: "ECU Synchronisation",
          imageSubtitle: "Full System Module Programming"
        }
      ]}
    />
  );
}
