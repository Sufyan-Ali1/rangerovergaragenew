import ServiceTemplate from "@/components/ServiceTemplate";
import { ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Range Rover Head Gasket Repair | Range Rover Garage",
  description: "Specialist head gasket services to resolve overheating and coolant issues. Precision machining included.",
  alternates: {
    canonical: "/services/head-gasket-replacement",
  },
};

export default function HeadGasketPage() {
  return (
    <ServiceTemplate
      title="Range Rover Head Gasket Repair"
      description="Specialist head gasket services to resolve overheating and coolant issues. Precision machining included."
      icon={<ShieldCheck className="w-12 h-12" />}
      heroImage="/10r.jpeg"
      content="Overheating is a serious threat to luxury engines. Our head gasket service includes a pressure test of the cylinder head to check for cracks. We perform precision skimming to ensure a perfectly flat surface, using high-performance gaskets that can withstand the extreme temperatures of Range Rover engines."
      benefits={[
        "Fixes overheating and coolant loss",
        "Prevents internal engine corrosion",
        "Ensures a perfect seal between block and head",
        "Restores compression for better power"
      ]}
      process={[
        "Cylinder head removal and pressure testing",
        "Precision milling/skimming for flatness",
        "Replacement of head bolts and gaskets",
        "Cooling system flush and pressure check"
      ]}
      modelsContent={{
        title: "Specialist Head Gasket Repair for All Land Rover & Range Rover Models",
        paragraphs: [
          "Our head gasket repair services are essential for maintaining the performance and longevity of every vehicle in the Land Rover and Range Rover lineup. We specialize in resolving overheating and coolant issues for the [Range Rover Sport](/engines/range-rover/sport), [Range Rover Vogue](/engines/range-rover/vogue-l405), and high-end Autobiography models. Whether you drive a [Land Rover Discovery 4](/engines/land-rover/discovery-4) or 5, or a [Range Rover Velar](/engines/range-rover/velar) with an Ingenium engine, our precision machining and high-quality gaskets ensure a perfect seal.",
          "Based in Grays, Essex, our workshop serves [Range Rover](/engines/range-rover) and [Land Rover](/engines/land-rover) owners across London and the South East. We understand the specific thermal management requirements of the 3.0L TDV6 and 4.4L SDV8 engines. Whether it's a [Land Rover Discovery 3](/engines/land-rover/discovery-3) or a brand-new Velar, we apply the same level of specialist care, ensuring that every engine is protected from catastrophic damage for any model in the [Land Rover](/engines/land-rover) family, from the [Defender](/engines/land-rover/defender) to the Vogue."
        ]
      }}
      faqs={[
        {
          question: "What are the early signs of a head gasket failure?",
          answer: "Common early signs include unexplained coolant loss, the engine running hotter than normal, white smoke from the exhaust, or a 'milky' appearance to the engine oil."
        },
        {
          question: "Is head skimming necessary for every head gasket repair?",
          answer: "Yes, we always recommend precision head skimming to ensure a perfectly flat mating surface. This is critical for creating a long-lasting seal that can withstand the high pressures of a Range Rover engine."
        },
        {
          question: "How long does a head gasket replacement take?",
          answer: "A professional head gasket replacement, including pressure testing and machining, typically takes between 5 to 8 working days depending on the model and complexity."
        },
        {
          question: "Can a head gasket leak cause internal engine damage?",
          answer: "Yes, if left untreated, a leaking head gasket can lead to coolant entering the cylinders or oil system, causing severe internal corrosion and potentially catastrophic engine failure."
        },
        {
          question: "Do you use multi-layer steel (MLS) gaskets for repairs?",
          answer: "Yes, we use high-performance multi-layer steel gaskets that offer superior durability and heat resistance compared to standard composite gaskets, ensuring a much more reliable seal."
        }
      ]}
      reviews={[
        {
          name: "Alan Richards",
          rating: 5,
          text: "Fixed the overheating issue on my Range Rover Vogue. The head gasket repair was done to a very high standard and the car is now running perfectly. Excellent service.",
          date: "14 April 2024",
          model: "Range Rover Vogue"
        },
        {
          name: "Sophie Bennett",
          rating: 5,
          text: "They diagnosed a head gasket leak on my Discovery 4 that another garage missed. Very thorough work and great communication throughout the process.",
          date: "02 February 2024",
          model: "Land Rover Discovery 4"
        }
      ]}
      seoSections={[
        {
          title: "The Invisible Threat to",
          titleHighlight: "Your Range Rover Engine",
          text: [
            "A failing head gasket is one of the most deceptive and destructive engine faults a Range Rover or Land Rover can suffer. The first signs — a slight loss of coolant, a faint smell of coolant from the vents, or the engine running slightly hotter than normal — are easy to dismiss. However, if left unaddressed, a blown head gasket on a 3.0L TDV6 or Ingenium 2.0L can result in hydrolocking, internal corrosion, and total engine failure.",
            "At Range Rover Garage in Grays, Essex, our technicians have 20+ years of experience identifying even the most subtle head gasket failures before they become catastrophic. We use a combustion gas test alongside a chemical block test to confirm coolant contamination before recommending a repair, ensuring you only pay for work that is absolutely necessary.",
            "We serve Range Rover and Land Rover owners from across London and Essex, offering nationwide vehicle collection for those who cannot drive their vehicle safely to our workshop. If your car is overheating or showing white smoke from the exhaust, contact us immediately for a rapid assessment."
          ],
          image: "/11r.jpeg",
          imageLeft: true,
          imageTitle: "Thermal Management Experts",
          imageSubtitle: "Cooling System Restoration Specialists"
        },
        {
          title: "Precision Head Skimming &",
          titleHighlight: "Surface Engineering",
          text: [
            "Our head gasket service goes far beyond simply fitting a new gasket. We use precision CNC milling machines to skim the cylinder head surface to within factory tolerances, restoring a perfectly flat mating surface that is essential for a long-lasting seal. This in-house machining capability means we control every aspect of quality and turn-around time.",
            "All head bolts are replaced as standard — reusing old head bolts on a JLR engine is a false economy that risks torque inconsistency and gasket re-failure. We use the latest OEM composite head gaskets and apply the manufacturer's specified multi-stage torque sequence to guarantee a seal that outperforms the original. Every completed repair is backed by our 6-month warranty as standard."
          ],
          image: "/12r.jpeg",
          imageLeft: false,
          imageTitle: "CNC Precision Skimming",
          imageSubtitle: "Flatness Within Factory Tolerances"
        }
      ]}
    />
  );
}
