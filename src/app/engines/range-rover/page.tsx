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
  title: "Range Rover Specialist Services | Premium Care UK",
  description: "Expert maintenance and performance engineering for the full Range Rover line-up. Luxury care for your luxury vehicle.",
  alternates: {
    canonical: "/engines/range-rover",
  },
};

export default function RangeRoverPage() {
  return (
    <BrandTemplate
      title="Range Rover Specialist Services"
      description="Expert maintenance and performance engineering for the full Range Rover line-up. luxury care for your luxury vehicle."
      heroImage="/5r.webp"
      models={[
        { name: "Range Rover Vogue Old Mk 3 (L322)", href: "/engines/range-rover/vogue-l322" },
        { name: "Range Rover Vogue New Mk 4 (L405)", href: "/engines/range-rover/vogue-l405" },
        { name: "Range Rover Sport Engines", href: "/engines/range-rover/sport" },
        { name: "Range Rover Sport SVR Engines", href: "/engines/range-rover/sport-svr" },
        { name: "Range Rover Evoque Engines", href: "/engines/range-rover/evoque" },
        { name: "Range Rover Velar Engines", href: "/engines/range-rover/velar" }
      ]}
      content={[
        "Range Rover represents the absolute pinnacle of luxury performance SUVs, and their sophisticated powerplants require a specialized level of engineering care that only 20+ years of dedicated service can provide. At Range Rover Garage, we have mastered the art of restoring and maintaining the full spectrum of Range Rover engines, from the classic V8s to the modern Ingenium and SDV8 variants.",
        "The iconic Range Rover Vogue (L405 and L460) demands precision diagnostics and surgical repair methods. We specialize in the complex 3.0L TDV6 and SDV6 engines, addressing the well-documented crankshaft and bottom-end bearing issues that often lead to catastrophic failure if not managed by an expert.",
        "For owners of the high-performance Range Rover Sport (L494), we offer specialized performance-matched engine rebuilds. Our process involves a complete technical strip-down, where every component is inspected for wear and replaced with uprated, heavy-duty parts that go beyond the original manufacturer's specifications.",
        "Our facility in Grays, Essex, is equipped with main-dealer level JLR diagnostic platforms, including Pathfinder and TOPIx Cloud systems. This infrastructure allows us to perform deep-system coding, software updates, and mechanical integrations that most independent garages simply cannot match.",
        "The high-end 4.4L SDV8 engine is one of the most capable diesel powerplants ever produced, yet it requires technical finesse to maintain. We provide comprehensive restoration services for these units, focusing on oil pump integrity and cooling system optimization to ensure sustained luxury performance.",
        "We utilize only genuine Land Rover OEM parts for all our engine services. This commitment to quality ensures that your Range Rover maintains its prestige and resale value, while our standard 6-month warranty (with 24-month extended options) provides the ultimate peace of mind.",
        "Our expertise extends to the sleek Range Rover Velar and the compact Evoque. Whether you are dealing with a complex turbocharger failure or a persistent cooling issue, our 20+ years of JLR heritage means we have already solved the most challenging failures thousands of times before.",
        "Choosing Range Rover Garage means choosing a partner who understands that your Range Rover is more than just a vehicle—it's a precision-engineered asset. We offer a turnkey service, including nationwide collection and delivery, ensuring that your luxury SUV returns to you in factory-new condition in exactly the way you expect."
      ]}
      specialistAreas={[
        "SDV6 & SDV8 Engine Rebuilds",
        "Air Suspension Calibration",
        "Sophisticated ECU Diagnostics",
        "Premium Scheduled Maintenance"
      ]}
      reviews={[
        {
          name: "David Harrison",
          rating: 5,
          text: "My Range Rover Sport SVR had a complete engine rebuild at Range Rover Garage. The technical knowledge of the team is unmatched. The car performs better than new.",
          date: "15 April 2024",
          model: "Range Rover Sport SVR"
        },
        {
          name: "James Thompson",
          rating: 5,
          text: "Excellent service for my L405 Vogue. They diagnosed a complex timing issue that the main dealer couldn't solve. Highly recommended for any Range Rover owner.",
          date: "02 March 2024",
          model: "Range Rover Vogue (L405)"
        },
        {
          name: "Michael Reed",
          rating: 5,
          text: "Had my Velar's Ingenium engine serviced here. Very professional setup and great communication throughout. The price was very competitive for such specialist work.",
          date: "20 February 2024",
          model: "Range Rover Velar"
        },
        {
          name: "Sarah Williams",
          rating: 5,
          text: "The team at Range Rover Garage are true experts. They handled the engine repair on my Evoque with great care and efficiency. I wouldn't take my Range Rover anywhere else.",
          date: "10 January 2024",
          model: "Range Rover Evoque"
        }
      ]}
      faqs={[
        {
          question: "What are the common engine problems in Range Rover L405 models?",
          answer: "The 3.0L TDV6 and SDV6 engines in the L405 often suffer from crankshaft failure and oil pump issues. We provide reinforced components that address these inherent factory weaknesses during our rebuilds."
        },
        {
          question: "Do you use genuine Land Rover parts for engine rebuilds?",
          answer: "Yes, we exclusively use genuine JLR OEM parts for all our engine rebuilds and repairs to ensure your vehicle maintains its factory performance and prestige."
        },
        {
          question: "How long does a full Range Rover engine rebuild take?",
          answer: "A complete master-level engine rebuild typically takes between 10 to 14 working days, depending on the specific engine variant and the extent of the restoration required."
        },
        {
          question: "Do you offer a warranty on your specialist Range Rover services?",
          answer: "Yes, all our major engine work comes with a standard 6-month or 6,000-mile warranty. We also offer extended protection plans of up to 24 months for total peace of mind."
        },
        {
          question: "Can you diagnose timing chain rattle on the Range Rover Evoque?",
          answer: "Yes, timing chain rattle is a common issue on the 2.0L Ingenium engine. We use specialized diagnostic tools and uprated replacement kits to permanently resolve the issue and prevent engine damage."
        },
        {
          question: "Is nationwide collection available for all Range Rover models?",
          answer: "We offer secure nationwide collection for any Range Rover requiring major engine repair or replacement. Our specialized transporters ensure your luxury SUV is handled with professional care."
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
