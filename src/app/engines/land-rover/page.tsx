import BrandTemplate from "@/components/BrandTemplate";
import { Metadata } from "next";
import { 
  Activity, 
  Cpu, 
  FileSearch, 
  Settings, 
  ShieldCheck, 
  Wind, 
  Wrench, 
  Zap 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Land Rover Specialist Support | Specialist Care UK",
  description: "Dedicated specialist services for Land Rover Defender, Discovery, and more. Built for the rugged, maintained by experts.",
  alternates: {
    canonical: "/engines/land-rover",
  },
};

export default function LandRoverPage() {
  return (
    <BrandTemplate
      title="Land Rover Specialist Support"
      description="Dedicated specialist services for Land Rover Defender, Discovery, and more. Built for the rugged, maintained by experts."
      heroImage="/6r.webp"
      models={[
        { name: "Discovery 1 Engines", href: "/engines/land-rover/discovery-1" },
        { name: "Discovery 2 Engines", href: "/engines/land-rover/discovery-2" },
        { name: "Discovery 3 (L319 / LR3) Engines", href: "/engines/land-rover/discovery-3" },
        { name: "Discovery 4 (L319 / LR4) Engines", href: "/engines/land-rover/discovery-4" },
        { name: "Discovery 5 (L462) Engines", href: "/engines/land-rover/discovery-5" },
        { name: "Discovery Sport Engines", href: "/engines/land-rover/discovery-sport" },
        { name: "Freelander 1 Engines", href: "/engines/land-rover/freelander-1" },
        { name: "Freelander 2 Engines", href: "/engines/land-rover/freelander-2" },
        { name: "Land Rover Defender Engines", href: "/engines/land-rover/defender" }
      ]}
      content={[
        "Land Rover vehicles are synonymous with rugged durability and global exploration, and their engines are built to withstand the most demanding conditions. With over 20 years of technical passion, Range Rover Garage provides the specialized engineering support required to keep these hard-working machines performing at their legendary peak through every mile.",
        "The introduction of the JLR Ingenium 2.0L engine family brought new challenges to Land Rover maintenance. We are nationally recognized authorities in resolving Ingenium-specific issues, such as timing chain rattles and early-life turbocharger failures, using specialized JLR timing jigs and calibrated diagnostic tools.",
        "The legendary Defender (L663) and its classic predecessors are core to our repair identity. We offer specialized restoration services for Defender powerplants, focusing on reinforcing weak points and ensuring that the vehicle maintains its full off-road capability and uncompromising reliability for years to come.",
        "For Discovery 4 and 5 owners, we provide the UK's leading solution for 3.0L SDV6 'spun bearing' failures. Our engineering team installs precision-machined crankshafts and reinforced high-capacity oil pumps that resolve the inherent design weaknesses found in factory-standard components.",
        "Our technical process is one of the most thorough in the industry. Every Land Rover engine that enters our workshop undergoes a chemical deep-clean and a technical inspection that covers over 200 individual checkpoints, ensuring that no technical detail is missed during the rebuild process.",
        "We possess the unique knowledge required to maintain the versatile Discovery Sport and the Freelander 2. From resolving complex Haldex-related faults to standard engine reconditioning, we provide a dealership-level service at a transparent, independent, and competitive price point.",
        "Our workshop features ultra-modern JLR-specific diagnostic infrastructure, allowing us to perform main-dealer level module programming and software updates. This ensures that every mechanical repair is perfectly synchronized with the vehicle's sophisticated electronic control units.",
        "With 20+ years of proven results across the UK, we offer the ultimate engineering destination for Land Rover owners. From Grays to the furthest reaches of the nation via our secure collection service, we ensure your Land Rover is ready for its next 100,000 miles of adventure and endurance."
      ]}
      specialistAreas={[
        "Ingenium Diesel Performance",
        "All-Terrain System Maintenance",
        "Heavy-Duty Engine Repairs",
        "Chassis & Protection Services"
      ]}
      reviews={[
        {
          name: "Thomas Hardy",
          rating: 5,
          text: "The only place I trust with my Discovery 4. They replaced the crankshaft with a reinforced unit and the car has been faultless ever since. Specialist knowledge at its best.",
          date: "12 April 2024",
          model: "Land Rover Discovery 4"
        },
        {
          name: "Andrew Foster",
          rating: 5,
          text: "Excellent service on my new Defender. They performed a specialized engine check and software update. Very impressed with the workshop facilities and staff expertise.",
          date: "05 March 2024",
          model: "Land Rover Defender (L663)"
        },
        {
          name: "Robert King",
          rating: 5,
          text: "Had my Freelander 2 engine reconditioned here. The difference in performance is amazing. Great to find a garage that actually knows Land Rovers inside out.",
          date: "18 February 2024",
          model: "Land Rover Freelander 2"
        },
        {
          name: "William Scott",
          rating: 5,
          text: "Very professional timing chain replacement on my Discovery Sport. They used an upgraded kit and kept me updated with photos throughout. Top tier service.",
          date: "02 January 2024",
          model: "Land Rover Discovery Sport"
        }
      ]}
      faqs={[
        {
          question: "What is the common issue with Land Rover Ingenium engines?",
          answer: "The 2.0L Ingenium engines are known for timing chain failure and turbocharger issues. We offer uprated timing chain kits and reinforced turbos to prevent repeat failures."
        },
        {
          question: "How do you fix the 'spun bearing' issue in Discovery 4 models?",
          answer: "We resolve this by installing a precision-machined crankshaft and a reinforced high-capacity oil pump, addressing the design weaknesses that lead to the original failure."
        },
        {
          question: "Can you perform software updates on the new Land Rover Defender?",
          answer: "Yes, we have full main-dealer level JLR diagnostic equipment, allowing us to perform software updates, module programming, and adaptations on all new Land Rover models."
        },
        {
          question: "What is your turnaround time for a Land Rover engine repair?",
          answer: "Turnaround varies by complexity, but most significant repairs or reconditioning projects are completed within 7 to 14 working days."
        },
        {
          question: "Do you offer nationwide collection for Land Rover Discovery engines?",
          answer: "Yes, we provide secure nationwide recovery for all Land Rover models. Our specialized vehicle transporters ensure your Discovery or Defender is handled by experts throughout its journey."
        },
        {
          question: "What warranty do you provide on Land Rover engine rebuilds?",
          answer: "All our major Land Rover engine work is covered by a standard 6-month or 6,000-mile warranty. We also offer extended protection plans up to 24 months for complete confidence."
        }
      ]}
      services={[
        {
          title: "Engine Rebuild",
          slug: "engine-rebuild",
          description: "Master-level 3.0L TDV6 & SDV6 engine rebuilding. We provide full strip-downs and precision re-assembly using genuine OEM parts to restore factory performance levels.",
          icon: <Settings className="w-8 h-8" />
        },
        {
          title: "Timing Chain Replacement",
          slug: "timing-chain-replacement",
          description: "Specialist timing chain services for JLR Ingenium and V6 engines. Prevent catastrophic engine failure with our precision-timed replacement solutions.",
          icon: <Cpu className="w-8 h-8" />
        },
        {
          title: "Turbo Replacement",
          slug: "turbo-replacement",
          description: "Full diagnostic and high-performance turbocharger replacement for Range Rover Sport and Vogue models. Targeted resolution for limp mode and smoke issues.",
          icon: <Wind className="w-8 h-8" />
        },
        {
          title: "Head Gasket Replacement",
          slug: "head-gasket-replacement",
          description: "Expert head gasket repair and cylinder head resurfacing. We resolve complex overheating and coolant loss issues in all Land Rover and Range Rover engine variants.",
          icon: <ShieldCheck className="w-8 h-8" />
        },
        {
          title: "Engine Repair",
          slug: "engine-repair",
          description: "Precision diagnostics and targeted mechanical repairs for specialized JLR issues. From oil leaks to knocking sounds, we handle every professional detail.",
          icon: <Wrench className="w-8 h-8" />
        },
        {
          title: "Engine Replacement",
          slug: "engine-replacement",
          description: "High-quality low-mileage engine sourcing and fitting. Full turnkey service including all programming, coding, and comprehensive nationwide warranty protection.",
          icon: <FileSearch className="w-8 h-8" />
        },
        {
          title: "Engine Swap",
          slug: "engine-swap",
          description: "Professional performance-matched engine swaps. We handle complete mechanical integration and main-dealer level software programming for a seamless finish.",
          icon: <Zap className="w-8 h-8" />
        },
        {
          title: "Timing Belt Replacement",
          slug: "timing-belt-replacement",
          description: "Critical maintenance for 2.7L and 3.0L TDV6/SDV6 engines. Ensure long-term reliability with our scheduled cambelt and oil pump replacement services.",
          icon: <Activity className="w-8 h-8" />
        }
      ]}
    />
  );
}
