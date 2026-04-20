import ServiceTemplate from "@/components/ServiceTemplate";
import { Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Engine Swaps & Unit Swaps | Range Rover Garage",
  description: "Professional core swaps and custom engine installations for enthusiasts and standard repairs.",
  alternates: {
    canonical: "/services/engine-swap",
  },
};

export default function EngineSwapPage() {
  return (
    <ServiceTemplate
      title="Expert Engine Swaps & Unit Swaps"
      description="Professional core swaps and custom engine installations for enthusiasts and standard repairs."
      icon={<Zap className="w-12 h-12" />}
      heroImage="/15r.jpeg"
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
      modelsContent={{
        title: "Specialist Engine Swaps for All Land Rover & Range Rover Models",
        paragraphs: [
          "Our expertise in engine swapping extends to the entire [Range Rover](/engines/range-rover) and [Land Rover](/engines/land-rover) lineup, from the classic [Range Rover Vogue](/engines/range-rover/vogue-l405) and [Sport](/engines/range-rover/sport) to the latest [Land Rover Defender](/engines/land-rover/defender) and [Discovery 5](/engines/land-rover/discovery-5). We are particularly skilled in like-for-like swaps for the high-performance [Autobiography](/engines/range-rover/vogue-l405) and the versatile [Land Rover Discovery 4](/engines/land-rover/discovery-4).",
          "We understand that each model, from the [Range Rover Evoque](/engines/range-rover/evoque) to the full-sized [Land Rover Discovery](/engines/land-rover/discovery-5), has its own unique electronic architecture. That's why we offer tailored solutions including full system coding for your [Range Rover Sport](/engines/range-rover/sport) or [Velar](/engines/range-rover/velar). Based in Grays and serving clients across London and Essex, we provide a professional alternative for the [Land Rover Defender](/engines/land-rover/defender) and beyond."
        ]
      }}
      faqs={[
        {
          question: "Can you swap a different engine model into my Range Rover?",
          answer: "We primarily specialize in like-for-like swaps to ensure maximum reliability and compatibility with your vehicle's existing electronics, but we can discuss custom swap options for specific projects."
        },
        {
          question: "Is ECU coding included in the engine swap service?",
          answer: "Yes, our engine swap service includes full ECU programming and module synchronization to ensure the new engine communicates perfectly with all of your vehicle's systems."
        },
        {
          question: "How do you ensure the swapped engine is in good condition?",
          answer: "Every engine we use for a swap undergoes a rigorous inspection, including compression testing and borescope analysis, to ensure it meets our high standards before installation."
        },
        {
          question: "Will an engine swap affect my vehicle's resale value?",
          answer: "A professionally executed engine swap using a high-quality unit and full diagnostic documentation can often restore or even increase the value of a vehicle that was previously non-runners."
        },
        {
          question: "Do you handle transmission synchronization during a swap?",
          answer: "Yes, we ensure that the new engine is perfectly synchronized with your vehicle's gearbox and transmission control modules for seamless shifting and performance."
        }
      ]}
      reviews={[
        {
          name: "Michael Stevens",
          rating: 5,
          text: "Did a like-for-like swap on my Range Rover Sport. The car runs perfectly and all the electronics integrated flawlessly. Great job by the team.",
          date: "05 April 2024",
          model: "Range Rover Sport"
        },
        {
          name: "Linda Gray",
          rating: 5,
          text: "Very professional service for my Discovery 4 engine swap. They kept me informed throughout and the final result is excellent.",
          date: "18 January 2024",
          model: "Land Rover Discovery 4"
        }
      ]}
      seoSections={[
        {
          title: "Complex Engine Swaps,",
          titleHighlight: "Flawlessly Executed",
          text: [
            "An engine swap in a modern Range Rover or Land Rover is one of the most technically demanding procedures in the automotive sector. Unlike older vehicles, today's JLR platforms feature deeply integrated engine management, adaptive chassis control, and multi-bus CAN communications that require mastery beyond standard mechanical knowledge. With 20+ years of specialised experience, Range Rover Garage is one of the few independents in the UK equipped to handle this level of work.",
            "Whether you need a like-for-like swap on a 4.4L SDV8, or a performance-oriented unit upgrade for your Range Rover Sport, our engineers plan and execute every job with meticulous attention to wiring integrity, gearbox mating tolerances, and thermal management to ensure a durable and refined end result.",
            "We serve Range Rover and Land Rover owners throughout Essex, London, and across the UK via our nationwide secure vehicle transport service. All engine swap work is carried out transparently, with a detailed job card and photographic documentation provided so you know exactly what has been done to your vehicle."
          ],
          image: "/2r.webp",
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
          image: "/4r.webp",
          imageLeft: false,
          imageTitle: "50-Point Validation",
          imageSubtitle: "Live Data Road Testing Included"
        }
      ]}
    />
  );
}
