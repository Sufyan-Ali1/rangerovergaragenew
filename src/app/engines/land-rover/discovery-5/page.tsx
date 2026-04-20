import ModelPageTemplate from "@/components/ModelPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovery 5 Engine Specialists | L462 Ingenium & SDV6 Support",
  description: "Expert engine services for Land Rover Discovery 5 (L462). Specialist Ingenium timing chain, SDV6 rebuilds, and diagnostic services at Range Rover Garage.",
  alternates: {
    canonical: "/engines/land-rover/discovery-5",
  },
};

export default function Discovery5Page() {
  return (
    <ModelPageTemplate
      modelName="Discovery 5 (L462)"
      modelCode="L462"
      heroImage="/5r.webp"
      engineCodes={["2.0 Ingenium", "3.0 SDV6", "3.0 SD6", "3.0 D250/D300", "2.0 P300 Petrol"]}
      introContent={[
        "The Land Rover Discovery 5 (L462) is a masterpiece of modern engineering, combining peerless off-road capability with state-of-the-art technological refinement. However, its complex range of powerplants—from the advanced Ingenium 2.0L to the high-torque SDV6—demand a specialist level of [Land Rover](/engines/land-rover) care to maintain their sophisticated mechanical integrity.",
        "At Range Rover Garage, we are at the forefront of L462 [engine maintenance](/services/engine-repair). We combine main-dealer level diagnostics with master-level [engine restoration](/services/engine-rebuild) to ensure your Discovery 5 remains at the absolute peak of its performance."
      ]}
      technicalContent={[
        {
          title: "Mastering the Ingenium & SDV6 Technical Challenges",
          text: [
            "The Discovery 5's Ingenium engines are renowned for their efficiency but are highly sensitive to timing chain wear and turbocharger lubrication issues. We utilize specialized JLR timing jigs and the latest technical revisions to perform precision timing chain replacements that resolve rattles and prevent catastrophic synchronization failure.",
            "For the 3.0L SDV6 and SD6 variants, we offer specialized bottom-end reinforcement services. We address the well-documented crankshaft failure points by installing uprated heavy-duty bearings and precision-calibrated oil pumps, ensuring that your high-torque Discovery 5 remains reliable for another 100,000 miles of operation."
          ],
          image: "/13r.jpeg",
          imageLeft: false
        },
        {
          title: "Pathfinder Diagnostics & Software Integration",
          text: [
            "Modern Land Rover engines are as much about software as they are about hardware. We utilize the latest JLR Pathfinder and TOPIx Cloud diagnostics to perform deep-system module updates and adaptations. This ensures that every mechanical repair is perfectly synchronized with the L462's complex onboard computer systems.",
            "Our technicians are experts in resolving complex AdBlue/DEF system faults and DPF regeneration issues that frequently affect the Discovery 5. By choosing Range Rover Garage, you are choosing a partner who understands the intricate relationship between your engine's mechanical performance and its electronic control suite."
          ],
          image: "/6r.webp",
          imageLeft: true
        }
      ]}
      servicesContent={[
        {
          title: "Ingenium Chain Service",
          slug: "timing-chain-replacement",
          text: "Specialist timing chain replacement for the Discovery 5. We utilize revised, reinforced guides and the latest chain kits to provide a permanent solution to engine rattling."
        },
        {
          title: "SDV6 Re-Engineering",
          slug: "engine-rebuild",
          text: "Master-level 3.0L SDV6 and SD6 engine rebuilding. We utilize reinforced crankshafts and precision-balanced components to restore factory-fresh performance levels."
        },
        {
          title: "Turbo & DPF Recovery",
          slug: "turbo-replacement",
          text: "Full diagnostic and replacement service for Discovery 5 turbochargers. We resolve limp mode and efficiency issues while ensuring the exhaust treatment system is perfectly calibrated."
        }
      ]}
      reviews={[
        {
          name: "William Scott",
          rating: 5,
          text: "Excellent service on my Discovery 5 timing chain replacement. Range Rover Garage used the latest revised parts and provided a full technical report. The car is now whisper quiet.",
          date: "02 January 2024",
          engineCode: "2.0 Ingenium"
        },
        {
          name: "Thomas Hardy",
          rating: 5,
          text: "They diagnosed a complex AdBlue fault on my Discovery 5 that the dealer couldn't fix. Their technical knowledge and diagnostic equipment are truly top-tier. Highly recommended.",
          date: "12 April 2024",
          engineCode: "3.0 SDV6"
        },
        {
          name: "Liam O.",
          rating: 5,
          text: "Exceptional service for my Discovery 5. They handled the timing chain replacement with total precision. The car drives perfectly now and the service was very professional.",
          date: "15 January 2024",
          engineCode: "2.0 Ingenium"
        }
      ]}
      faqs={[
        {
          question: "When should I replace the timing chain on my Discovery 5 Ingenium?",
          answer: "If you hear a metallic rattle on cold starts or notice a 'Check Engine' light, immediate inspection is required. We recommend replacing the chain every 60,000 to 70,000 miles to prevent failure."
        },
        {
          question: "Can you fix the AdBlue/DEF system faults on the L462?",
          answer: "Yes, we utilize main-dealer level JLR diagnostics to troubleshoot and repair complex DEF system errors, ensuring your Discovery 5 remains emissions-compliant and out of 'no-start' mode."
        },
        {
          question: "What causes turbocharger failure in the Discovery 5?",
          answer: "Oil contamination and carbon build-up in the feed lines are common causes. We provide full turbo overhauls that include cleaning the entire lubrication system to prevent repeat failures."
        },
        {
          question: "Do you use genuine Land Rover parts for Discovery 5 repairs?",
          answer: "We exclusively use Genuine JLR OEM parts or superior engineering-grade alternatives, ensuring your vehicle maintains its factory warranty standards and prestige resale value."
        },
        {
          question: "How long does a Discovery 5 engine rebuild take?",
          answer: "A comprehensive master-level rebuild typically takes 10-14 working days. This includes a full technical strip-down, chemical cleaning, and precision-calibrated re-assembly."
        },
        {
          question: "Is nationwide collection available for Discovery 5 models?",
          answer: "Yes, we provide a secure, fully-insured nationwide recovery service. We can collect your L462 from anywhere in the UK and transport it to our specialist workshop in Grays."
        }
      ]}
    />
  );
}
