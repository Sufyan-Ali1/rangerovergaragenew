import ServiceTemplate from "@/components/ServiceTemplate";
import { Wrench } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Range Rover Engine Repair | Range Rover Garage",
  description: "From sensors to seals, we handle all aspects of Land Rover and Range Rover engine component repairs.",
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
      seoSections={[
        {
          title: "Precise Fault Diagnosis for",
          titleHighlight: "Range Rover Engines",
          text: [
            "With over 20 years of hands-on experience, the Vogue Technics team in Grays, Essex has encountered and resolved virtually every form of Range Rover and Land Rover engine fault imaginable. Our dealer-grade Pathfinder and TOPIx diagnostic platforms allow us to read deep fault codes, live sensor data, and module communication logs that a generic OBD scanner simply cannot access.",
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
            "Every repair carried out at our Grays workshop uses genuine OEM or main-dealer sourced components, backed by our comprehensive 6-month warranty. For owners of the Range Rover Evoque, Freelander 2, or Discovery Sport who want dealer-quality repair at an independent price, Vogue Technics is your definitive answer."
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
