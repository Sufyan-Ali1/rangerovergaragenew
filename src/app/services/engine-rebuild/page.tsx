import ServiceTemplate from "@/components/ServiceTemplate";
import { Settings } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialist Range Rover Engine Rebuilds | Range Rover Garage",
  description: "Full precision engine rebuilding for Range Rover and Land Rover vehicles. Restoring your engine to factory-new performance.",
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
            "Our engine rebuild processes follow strict manufacturer guidelines, utilizing genuine dealer specifications and precision tooling to guarantee sustained premium performance. Vogue Technics goes considerably beyond standard mechanical repair by extensively load-testing and meticulously calibrating every rebuilt engine to guarantee that it performs identical to a brand new factory unit.",
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
