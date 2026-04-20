import ModelPageTemplate from "@/components/ModelPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovery 2 Engine Specialists | Td5 & V8 Rebuilds & Repair",
  description: "Expert engine services for Land Rover Discovery 2 (L318). Specialist Td5 engine rebuilds, injector services, and V8 restoration at Range Rover Garage.",
  alternates: {
    canonical: "/engines/land-rover/discovery-2",
  },
};

export default function Discovery2Page() {
  return (
    <ModelPageTemplate
      modelName="Discovery 2"
      modelCode="L318"
      heroImage="/13r.jpeg"
      engineCodes={["2.5 Td5 Diesel", "4.0 V8 Petrol", "4.6 V8 Petrol"]}
      introContent={[
        "The Land Rover Discovery 2 (L318) refined the rugged formula of its predecessor, introducing the technologically advanced Td5 engine and high-torque V8 variants. As these vehicles transition into cherished modern classics, their sophisticated powerplants require a specialized level of [Land Rover](/engines/land-rover) technical expertise to maintain their legendary performance and durability.",
        "At Range Rover Garage, we are the UK's leading authorities on Discovery 2 [engine restoration](/services/engine-rebuild). With over 20 years of technical heritage, we provide the precision engineering required to resolve common Td5 and V8 failures, ensuring your Discovery 2 remains a reliable partner for every [engine repair](/services/engine-repair) need."
      ]}
      technicalContent={[
        {
          title: "The Td5 Engineering: Mastering Electronic Diesel Injection",
          text: [
            "The 2.5L Td5 engine was a landmark for Land Rover, featuring advanced electronic unit injectors and a robust five-cylinder design. We provide complete technical overhauls for the Td5, focusing on resolving common issues such as 'oil in the loom' caused by injector harness failure and the critical cylinder head 'porosity' issues seen on earlier 10P models.",
            "Our Td5 rebuild process includes precision cylinder head pressure testing and the installation of uprated head gaskets. We utilize main-dealer level diagnostics to perform technical calibration of the electronic injectors, ensuring your Td5 delivers the perfect balance of torque, fuel efficiency, and legendary smoothness."
          ],
          image: "/14r.jpeg",
          imageLeft: false
        },
        {
          title: "Rover V8 Performance: Addressing Sleeves & Thermal Issues",
          text: [
            "Discovery 2 petrol owners often face technical challenges with the 4.0L and 4.6L V8 powerplants, particularly regarding cylinder liner movement and localized overheating. Our master-level restoration service addresses these issues by installing top-hat liners and performing precision block machining that exceeds original factory standards.",
            "We focus on creating a thermally stable engine environment by optimizing the cooling system and utilizing high-performance camshafts and lifters. At Range Rover Garage, we restore the smooth, authoritative power of your Discovery 2 V8, providing a durable solution that protects your investment in this iconic 4x4 platform."
          ],
          image: "/8r.jpeg",
          imageLeft: true
        }
      ]}
      servicesContent={[
        {
          title: "Discovery 2 Rebuild",
          slug: "engine-rebuild",
          text: "Master-level rebuilding for Td5 and V8 variants. We provide a complete technical restoration using precision-machined components to resolve factory weaknesses."
        },
        {
          title: "Td5 Injector Service",
          slug: "engine-repair",
          text: "Specialist electronic injector testing and loom replacement. We resolve misfires and starting issues while optimizing fuel delivery for maximum efficiency."
        },
        {
          title: "V8 Thermal Restoration",
          slug: "head-gasket-replacement",
          text: "Precision solution for V8 head gasket and liner issues. We install top-hat liners and uprated gaskets to ensure long-term engine reliability."
        }
      ]}
      reviews={[
        {
          name: "Steve P.",
          rating: 5,
          text: "Range Rover Garage rebuilt the Td5 in my Discovery 2 after it suffered from oil in the harness. The engine is now incredibly quiet and powerful. Their knowledge of these older JLR units is unmatched.",
          date: "10 April 2024",
          engineCode: "2.5 Td5"
        },
        {
          name: "Richard G.",
          rating: 5,
          text: "They handled the top-hat liner installation on my Discovery 2 V8. The car now runs perfectly cool even under load. Excellent technical service and very professional team.",
          date: "15 January 2024",
          engineCode: "4.0 V8"
        },
        {
          name: "Alan W.",
          rating: 5,
          text: "Outstanding Td5 rebuild. They resolved a complex misfire and the car is now pulling like a train. Clearly the experts for the Discovery 2 platform.",
          date: "05 December 2023",
          engineCode: "2.5 Td5"
        }
      ]}
      faqs={[
        {
          question: "What is 'oil in the loom' on a Discovery 2 Td5?",
          answer: "This occurs when oil migrates from the injector harness into the main engine ECU. We provide a permanent solution by installing improved seals and revised wiring looms to prevent electronic failure."
        },
        {
          question: "Can you fix the 'porosity' issue in early Td5 cylinder heads?",
          answer: "Yes, we provide pressure testing and specialized restoration for Td5 heads. If a head is beyond repair, we source high-quality replacement units that resolve the original manufacturing weaknesses."
        },
        {
          question: "Why do Discovery 2 V8 engines suffer from overheating?",
          answer: "Common causes include slipped cylinder liners or restricted cooling galleries. Our specialized rebuilds include top-hat liners and cooling system overhauls to provide a permanent technical fix."
        },
        {
          question: "Do you offer nationwide collection for Discovery 2 repairs?",
          answer: "Yes, we provide a secure nationwide recovery service. We can collect your Discovery 2 from anywhere in the UK and transport it to our specialist workshop in Grays for expert engine work."
        },
        {
          question: "How long does a Discovery 2 engine rebuild take?",
          answer: "A complete master-level rebuild typically takes 14-21 working days. This timeframe allows for thorough strip-down, technical cleaning, precision assembly, and extensive road testing."
        },
        {
          question: "What warranty do you provide on Discovery 2 engine work?",
          answer: "All our major Discovery 2 engine work comes with a standard 6-month or 6,000-mile warranty, with extended protection plans of up to 24 months available for total peace of mind."
        }
      ]}
    />
  );
}
