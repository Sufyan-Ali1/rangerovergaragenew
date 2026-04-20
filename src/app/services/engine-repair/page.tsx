import ServiceTemplate from "@/components/ServiceTemplate";
import { Wrench } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Range Rover Engine Repair | Range Rover Garage",
  description: "From sensors to seals, we handle all aspects of Land Rover and Range Rover engine component repairs.",
  alternates: {
    canonical: "/services/engine-repair",
  },
};

export default function EngineRepairPage() {
  return (
    <ServiceTemplate
      title="General Range Rover Engine Repair"
      description="From sensors to seals, we handle all aspects of Land Rover and Range Rover engine component repairs."
      icon={<Wrench className="w-12 h-12" />}
      heroImage="/13r.jpeg"
      content="Not every engine issue requires a rebuild. We use advanced dealer-level diagnostics to identify the exact source of your problem, whether it's a faulty sensor, a leaking seal, or a mechanical component. Our experts focus on efficient repairs that get you back on the road safely and economically."
      benefits={[
        "Cost-effective targeted solutions",
        "Dealer-level diagnostic accuracy",
        "All work performed by JLR specialists",
        "Only genuine or premium parts used"
      ]}
      process={[
        "Full electronic and mechanical diagnosis",
        "Quotation for specific component repair",
        "Precision repair and software updates",
        "Final system verification walk-through"
      ]}
      modelsContent={{
        title: "Comprehensive Engine Repair for the Entire Land Rover Family",
        paragraphs: [
          "Our engine repair services are designed to support every model under the [Land Rover](/engines/land-rover) and [Range Rover](/engines/range-rover) umbrella. From the agile [Range Rover Evoque](/engines/range-rover/evoque) and stylish [Range Rover Velar](/engines/range-rover/velar) to the heavy-duty [Land Rover Discovery](/engines/land-rover/discovery-4) and the iconically rugged [Land Rover Defender](/engines/land-rover/defender), we provide precision repairs for all engine variants. We understand the specific vulnerabilities of the 2.0L Ingenium diesel and petrol units, as well as the high-torque demands of the 3.0L and 4.4L SDV8 powerhouses found in the [Range Rover Vogue](/engines/range-rover/vogue-l405) and Autobiography.",
          "We take pride in our ability to serve a diverse range of customers across Essex and London. Whether you own a [Range Rover Sport](/engines/range-rover/sport) used for daily commutes or a [Land Rover Discovery 5](/engines/land-rover/discovery-5) for family adventures, our workshop in Grays is equipped with the latest diagnostic tools to handle any repair. We specialize in everything from complex ECU programming on newer models to mechanical component fixes on traditional [Range Rover](/engines/range-rover) units."
        ]
      }}
      faqs={[
        {
          question: "Can you diagnose a warning light on my Range Rover's dashboard?",
          answer: "Absolutely. We use dealer-level Pathfinder and TOPIx diagnostic tools to accurately read fault codes and identify the underlying issue with your engine's sensors or mechanical components."
        },
        {
          question: "Do you offer a warranty on general engine repairs?",
          answer: "Yes, all our repair work comes with a standard 6-month or 6,000-mile warranty, giving you peace of mind that the fix is robust and reliable."
        },
        {
          question: "How do your repair prices compare to a main dealer?",
          answer: "As an independent specialist, we offer dealership-quality repairs and parts at significantly more competitive rates, often saving our clients up to 40% on labor costs."
        },
        {
          question: "Do you fix oil leaks on Range Rover Vogue and Sport models?",
          answer: "Yes, we specialize in identifying and repairing oil leaks on all JLR engines, including common failure points like the oil cooler seals, rocker covers, and vacuum pumps."
        },
        {
          question: "Can you perform software updates after a mechanical repair?",
          answer: "Yes, our diagnostic equipment allows us to perform all necessary module software updates, adaptations, and coding required to ensure your engine runs perfectly after a repair."
        }
      ]}
      reviews={[
        {
          name: "Mark Henderson",
          rating: 5,
          text: "Identified a complex sensor issue on my Velar that another garage couldn't find. Fast repair and very professional staff. Highly recommended.",
          date: "28 March 2024",
          model: "Range Rover Velar P250"
        },
        {
          name: "David Clarke",
          rating: 5,
          text: "Excellent service on my Discovery 5. They fixed the oil leak quickly and the price was much better than what the local dealer quoted.",
          date: "15 February 2024",
          model: "Land Rover Discovery 5"
        }
      ]}
      seoSections={[
        {
          title: "Precise Fault Diagnosis for",
          titleHighlight: "Range Rover Engines",
          text: [
            "With over 20 years of hands-on experience, the Range Rover Garage team in Grays, Essex has encountered and resolved virtually every form of Range Rover and Land Rover engine fault imaginable. Our dealer-grade Pathfinder and TOPIx diagnostic platforms allow us to read deep fault codes, live sensor data, and module communication logs that a generic OBD scanner simply cannot access.",
            "Whether you're experiencing misfires on a 3.0L TDV6, erratic boost on an Ingenium, or intermittent warning lights on your Vogue L460, our experts perform a systematic, multi-point diagnostic process that isolates the issue quickly, reducing the time your vehicle is off the road and saving you money by avoiding unnecessary part replacement.",
            "Our diagnostic service is trusted by Range Rover and Land Rover owners across London, Essex, and the wider South East. If you've been quoted an expensive repair elsewhere, bring your vehicle to us first for a professional second opinion backed by genuine JLR expertise."
          ],
          image: "/14r.jpeg",
          imageLeft: true,
          imageTitle: "Dealer-Grade Diagnostics",
          imageSubtitle: "Pathfinder & TOPIx Certified"
        },
        {
          title: "Cost-Effective Repairs,",
          titleHighlight: "Dealer-Level Results",
          text: [
            "Not every engine issue demands a full rebuild. Our skilled master technicians specialise in targeted, component-level repairs that restore full performance without the cost of a complete engine overhaul. From replacing faulty EGR valves and oil coolers to resolving injector seal failures and variable geometry turbo actuators, we fix the actual problem — not just the symptom.",
            "Every repair carried out at our Grays workshop uses genuine OEM or main-dealer sourced components, backed by our comprehensive 6-month warranty. For owners of the Range Rover Evoque, Freelander 2, or Discovery Sport who want dealer-quality repair at an independent price, Range Rover Garage is your definitive answer."
          ],
          image: "/13r.jpeg",
          imageLeft: false,
          imageTitle: "Component-Level Precision",
          imageSubtitle: "Targeted Repair, Maximum Reliability"
        }
      ]}
    />
  );
}
