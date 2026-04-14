import ServiceTemplate from "@/components/ServiceTemplate";
import { ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Range Rover Head Gasket Repair | Range Rover Garage",
  description: "Specialist head gasket services to resolve overheating and coolant issues. Precision machining included.",
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
      seoSections={[
        {
          title: "The Invisible Threat to",
          titleHighlight: "Your Range Rover Engine",
          text: [
            "A failing head gasket is one of the most deceptive and destructive engine faults a Range Rover or Land Rover can suffer. The first signs — a slight loss of coolant, a faint smell of coolant from the vents, or the engine running slightly hotter than normal — are easy to dismiss. However, if left unaddressed, a blown head gasket on a 3.0L TDV6 or Ingenium 2.0L can result in hydrolocking, internal corrosion, and total engine failure.",
            "At Vogue Technics in Grays, Essex, our technicians have 20+ years of experience identifying even the most subtle head gasket failures before they become catastrophic. We use a combustion gas test alongside a chemical block test to confirm coolant contamination before recommending a repair, ensuring you only pay for work that is absolutely necessary.",
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
