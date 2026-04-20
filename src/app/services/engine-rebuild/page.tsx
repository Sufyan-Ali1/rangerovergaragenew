import ServiceTemplate from "@/components/ServiceTemplate";
import { Settings } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialist Range Rover Engine Rebuilds | Range Rover Garage",
  description: "Full precision engine rebuilding for Range Rover and Land Rover vehicles. Restoring your engine to factory-new performance.",
  alternates: {
    canonical: "/services/engine-rebuild",
  },
};

export default function EngineRebuildPage() {
  return (
    <ServiceTemplate
      title="Specialist Range Rover Engine Rebuilds"
      description="Full precision engine rebuilding for Range Rover and Land Rover vehicles. Restoring your engine to factory-new performance."
      icon={<Settings className="w-12 h-12" />}
      heroImage="/8r.jpeg"
      content="A complete engine rebuild is the ultimate solution for a high-mileage or damaged Range Rover engine. Our process involves a complete strip-down to the bare block, followed by ultrasonic cleaning and precision machining. We replace all wearing components with genuine OEM parts, including pistons, rings, bearings, and seals. Our master technicians ensure every tolerance meets or exceeds manufacturer specifications."
      benefits={[
        "Restores factory performance and fuel efficiency",
        "Significantly cheaper than a new vehicle purchase",
        "Increases the resale value of your Range Rover",
        "Comes with our comprehensive 24-month warranty"
      ]}
      process={[
        "Complete engine extraction and decontamination",
        "Precision block honing and head skimming",
        "Installation of new high-grade components",
        "Dyno testing and final diagnostics"
      ]}
      modelsContent={{
        title: "Precision Engine Rebuilds for All Range Rover & Land Rover Models",
        paragraphs: [
          "Our specialist workshop is fully equipped to handle complete engine rebuilds for the entire Range Rover and Land Rover lineup. Whether you drive a luxury [Range Rover Vogue](/engines/range-rover/vogue-l405), a high-performance [Range Rover Sport](/engines/range-rover/sport), or the versatile [Land Rover Discovery](/engines/land-rover/discovery-4), our technicians have the expertise to restore your vehicle's heart. We specialize in the complex TDV6 and SDV6 engines found in the Discovery and Sport models, as well as the robust Ingenium engines powering the newer [Range Rover Velar](/engines/range-rover/velar) and [Evoque](/engines/range-rover/evoque). For those with the legendary [Land Rover Defender](/engines/land-rover/defender) or the classic Range Rover Autobiography, we provide bespoke rebuilding services that respect the heritage while utilizing modern precision engineering techniques.",
          "Every rebuild is tailored to the specific requirements of your vehicle's model and year. We understand the nuances between the 3.0L TDV6, the 4.4L SDV8, and the 2.0L Ingenium units. Our facility in Grays serves owners across Essex and London, providing a reliable alternative to main dealer prices without compromising on quality. From the rugged [Land Rover Defender](/engines/land-rover/defender) used for off-roading to the sophisticated [Range Rover Velar](/engines/range-rover/velar) seen in the city, we ensure every engine that leaves our workshop meets the highest standards of reliability and performance."
        ]
      }}
      faqs={[
        {
          question: "How long does a full Range Rover engine rebuild take?",
          answer: "A typical engine rebuild takes between 10 to 14 working days. This allows for complete disassembly, precision machining, parts procurement, and rigorous testing to ensure factory-standard performance."
        },
        {
          question: "Do you use genuine parts for the rebuild?",
          answer: "Yes, we exclusively use Genuine OEM (Original Equipment Manufacturer) parts or high-quality equivalents that meet or exceed manufacturer specifications to guarantee longevity."
        },
        {
          question: "Is there a warranty on the rebuilt engine?",
          answer: "We provide a standard 6-month / 6,000-mile warranty on all rebuilds, with options to extend this up to 24 months for added peace of mind through our main dealer protection plans."
        },
        {
          question: "Can you rebuild the 3.0L TDV6 engine with the common crankshaft issue?",
          answer: "Yes, we specialize in the 3.0L TDV6 and SDV6 rebuilds. We use reinforced crankshafts and uprated bearings to address the design weaknesses found in the original factory units."
        },
        {
          question: "Do you offer nationwide collection for engine rebuilds?",
          answer: "Yes, we provide secure nationwide vehicle collection and delivery services, ensuring your Range Rover is transported safely to our specialist workshop from anywhere in the UK."
        }
      ]}
      reviews={[
        {
          name: "James Wilson",
          rating: 5,
          text: "Range Rover Garage did a fantastic job rebuilding my Range Rover Sport engine. It runs smoother than when I first bought it. Highly recommended!",
          date: "12 March 2024",
          model: "Range Rover Sport 3.0 TDV6"
        },
        {
          name: "Sarah Thompson",
          rating: 5,
          text: "Excellent service. They kept me updated throughout the rebuild process of my Discovery 4. The 2-year warranty option gave me great confidence.",
          date: "5 February 2024",
          model: "Land Rover Discovery 4"
        }
      ]}
      seoSections={[
        {
          title: "Top-Quality Range Rover",
          titleHighlight: "Engine Repair Specialist",
          text: [
            "With over 20 years of experience facilitating Range Rover owners, we strive to provide the best servicing and fitting facility to the locals of Grays, Essex, regardless of what model of Range Rover they drive. As a trusted Range Rover Engine Specialist and Land Rover Specialist, our workshop is the preferred choice for drivers searching for an expert near me for repairs, fitting, or professional diagnostics.",
            "With substantial investment in state-of-the-art facilities and the most updated equipment specialized for Range Rover engine repair, servicing, and fitting of engines, we are the top choice for locals and have gained their trust through dedication to our craft.",
            "Our testimonials prove the quality and devotion we bring to our services and our clients. Visit us for complete peace of mind, expert service, and trusted workmanship backed by true specialists in Range Rover engine works, component repair, and Land Rover engine rebuild services."
          ],
          image: "/6r.webp",
          imageLeft: true,
          imageTitle: "Expert Technicians",
          imageSubtitle: "State of the art repairs and diagnostics"
        },
        {
          title: "Matchless Dealership-Level",
          titleHighlight: "Engine Reconditioning",
          text: [
            "Our engine rebuild processes follow strict manufacturer guidelines, utilizing genuine dealer specifications and precision tooling to guarantee sustained premium performance. Range Rover Garage goes considerably beyond standard mechanical repair by extensively load-testing and meticulously calibrating every rebuilt engine to guarantee that it performs identical to a brand new factory unit.",
            "We understand that your Range Rover or Land Rover is a high-value asset. By performing all complex machining, crankshaft balancing, and head-skimming completely in-house in our advanced Grays workshop, we bypass third-party delays and offer rapid, robust solutions designed for ultimate long-term reliability. Every complete engine rebuild is securely backed by up to 6 months of warranty protection."
          ],
          image: "/1r.webp",
          imageLeft: false,
          imageTitle: "Precision Engineering",
          imageSubtitle: "In-House Component Machining"
        }
      ]}
    />
  );
}
