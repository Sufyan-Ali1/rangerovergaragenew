import ModelPageTemplate from "@/components/ModelPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovery Sport Engine Specialists | Ingenium Timing Chain & Rebuilds",
  description: "Expert engine services for Land Rover Discovery Sport. Specialist Ingenium timing chain replacement, turbo repair, and full engine rebuilds at Range Rover Garage.",
  alternates: {
    canonical: "/engines/land-rover/discovery-sport",
  },
};

export default function DiscoverySportPage() {
  return (
    <ModelPageTemplate
      modelName="Discovery Sport"
      modelCode="L550"
      heroImage="/4r.webp"
      engineCodes={["2.0 Ingenium Diesel", "2.0 Ingenium Petrol", "2.2 SD4 Diesel", "P300e Hybrid"]}
      introContent={[
        "The Land Rover Discovery Sport is the ultimate versatile compact SUV, combining modern design with legendary capability. However, the Ingenium engine family that powers most modern Discovery Sports requires specialized, master-level attention—particularly regarding its complex [timing chain](/services/timing-chain-replacement) and turbocharger systems.",
        "At Range Rover Garage, we are the UK's leading authorities on Discovery Sport [engine services](/services/engine-rebuild). From the robust early 2.2L SD4 units to the advanced 2.0L Ingenium powerplants, we provide a level of technical expertise that ensures your [Land Rover](/engines/land-rover) remains a reliable and high-performing asset."
      ]}
      technicalContent={[
        {
          title: "The Ingenium Challenge: Timing Chain & Turbo Solutions",
          text: [
            "The 2.0L Ingenium diesel and petrol engines are the heart of the Discovery Sport range, but they are notoriously sensitive to timing chain wear. We have performed hundreds of Ingenium timing chain replacements, using uprated guides and the latest JLR-specified locking tools to ensure a perfect mechanical finish that resolves factory-inherited rattles.",
            "Our engineering process for the Ingenium family includes a deep-clean of the oil lubrication system. We provide specialized solutions to prevent the carbon build-up that often leads to premature chain fatigue and turbocharger failure. Every Ingenium service at Range Rover Garage is backed by our robust specialist warranty."
          ],
          image: "/13r.jpeg",
          imageLeft: false
        },
        {
          title: "Precision Rebuilds for 2.2L SD4 Powerplants",
          text: [
            "For owners of the earlier Discovery Sport models, the 2.2L SD4 engine offers rugged performance but requires scheduled cambelt and water pump replacement to avoid catastrophic failure. We provide specialized maintenance for these units, including high-pressure fuel pump testing and technical injector cleaning.",
            "If your 2.2L SD4 has suffered a major failure, our master-level rebuild process restores the engine to factory specifications. We utilize only Genuine OEM components, ensuring that your vehicle maintains its refinement and reliability for years to come. Our technical depth allows us to offer a credible alternative to main-dealer engine replacement at a competitive independent price."
          ],
          image: "/8r.jpeg",
          imageLeft: true
        }
      ]}
      servicesContent={[
        {
          title: "Ingenium Chain Service",
          slug: "timing-chain-replacement",
          text: "Specialist timing chain replacement for the Discovery Sport. We utilize revised, reinforced guides and the latest chain kits to provide a permanent solution to engine rattling."
        },
        {
          title: "Discovery Sport Rebuild",
          slug: "engine-rebuild",
          text: "Master-level engine rebuilding for all Discovery Sport variants. We utilize precision-balanced components and OEM parts to restore factory-fresh performance levels."
        },
        {
          title: "Turbocharger Repair",
          slug: "turbo-replacement",
          text: "Full diagnostic and replacement service for Discovery Sport turbochargers. We resolve limp mode and smoke issues by installing balanced units and clearing all oil feed lines."
        }
      ]}
      reviews={[
        {
          name: "James Bennett",
          rating: 5,
          text: "Range Rover Garage saved my Discovery Sport! The timing chain was rattling badly and the dealer was quoting a fortune. These guys did it for a fair price with better service. The car is now whisper quiet.",
          date: "12 April 2024",
          engineCode: "2.0 Ingenium"
        },
        {
          name: "Emily R.",
          rating: 5,
          text: "Professional, efficient, and clearly the experts. They diagnosed a complex turbo issue on my Discovery Sport in minutes. The car drives like new again. Thank you Range Rover Garage!",
          date: "20 January 2024",
          engineCode: "2.0 TD4"
        },
        {
          name: "Mark B.",
          rating: 5,
          text: "Very professional timing chain replacement on my Discovery Sport. They used an upgraded kit and kept me updated with photos throughout. Top tier service.",
          date: "02 January 2024",
          engineCode: "2.0 Ingenium"
        }
      ]}
      faqs={[
        {
          question: "When should I replace the timing chain on my Discovery Sport Ingenium?",
          answer: "We recommend inspecting the chain every 50,000 miles. If you hear a distinctive metallic rattle on cold starts, immediate replacement is vital to prevent catastrophic engine failure."
        },
        {
          question: "Can you fix the turbocharger failure on the Land Rover Discovery Sport?",
          answer: "Yes, turbocharger failure is a known issue. We provide precision turbo rebuilds and replacements, ensuring that the oil feed lines are also cleared to prevent repeat failures."
        },
        {
          question: "Is the Discovery Sport 2.2 SD4 engine reliable?",
          answer: "The 2.2L SD4 is a robust engine, but it requires regular cam belt changes every 7 years or 70,000 miles. We provide specialized maintenance to keep these rugged engines running smoothly."
        },
        {
          question: "Do you offer nationwide collection for Discovery Sport engine rebuilds?",
          answer: "We offer a turnkey nationwide collection and delivery service. We can safely transport your Discovery Sport from any location in the UK to our specialist engineering facility in Grays."
        },
        {
          question: "How long does a Discovery Sport engine replacement take?",
          answer: "A complete engine replacement typically takes 7-10 working days. This includes professional installation, full ECU coding, module programming, and extensive quality-assurance testing."
        },
        {
          question: "What warranty do you provide on specialist Discovery Sport work?",
          answer: "All major engine work at Range Rover Garage comes with a standard 6-month or 6,000-mile warranty, with extended protection plans of up to 24 months available for total peace of mind."
        }
      ]}
    />
  );
}
