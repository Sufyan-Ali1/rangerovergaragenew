"use client";

import ModelPageTemplate from "@/components/ModelPageTemplate";

export default function VogueL405Page() {
  return (
    <ModelPageTemplate
      modelName="Range Rover Vogue Mk4"
      modelCode="L405"
      heroImage="/15r.jpeg"
      engineCodes={["3.0 TDV6", "4.4 SDV8", "3.0 SDV6", "P400e Hybrid", "5.0 S/C V8"]}
      introContent={[
        "The L405 Range Rover Vogue redefined the luxury SUV with its all-aluminum construction and advanced technological suite. However, the sophisticated engines that power this [Range Rover](/engines/range-rover) flagship—particularly the SDV6 and SDV8—demand specialist engineering knowledge to maintain their complex cooling and timing systems.",
        "Range Rover Garage provides master-level [engine solutions](/services/engine-rebuild) for the entire L405 range. We utilize main-dealer level diagnostics and specialized JLR tooling to ensure your prestige vehicle receives the highest standard of [mechanical care](/services/engine-repair) available in the UK."
      ]}
      technicalContent={[
        {
          title: "SDV6 & SDV8 Engineering",
          text: [
            "The 3.0L SDV6 and 4.4L SDV8 powerplants are the heart of the L405's effortless torque. We specialize in resolving common [crankshaft vulnerabilities](/services/engine-rebuild) and oil pump issues that can affect these high-performance diesels. Our process involves using reinforced bearings and uprated internal components that exceed original factory specifications.",
            "Every L405 diesel engine that enters our workshop undergoes a complete technical assessment of its DPF and EGR systems. We ensure that the peripheral components are functioning perfectly to prevent premature engine wear, providing a robust [engine repair](/services/engine-repair) solution that preserves the longevity of your luxury asset."
          ],
          image: "/14r.jpeg",
          imageLeft: true
        },
        {
          title: "P400e & Ingenium Hybrid Support",
          text: [
            "As the L405 transitioned into the hybrid era, we invested heavily in the specialized diagnostics and safety equipment required for the P400e platform. We understand the complex integration between the Ingenium 2.0L engine and the electric drive systems, providing expert technical support for both elements.",
            "Our technicians are trained to handle the unique thermal challenges faced by hybrid JLR engines. From cooling system flushes to high-voltage component diagnostics, we ensure your modern Vogue remains at the peak of efficiency and performance, regardless of the drivetrain."
          ],
          image: "/13r.jpeg",
          imageLeft: false
        }
      ]}
      servicesContent={[
        {
          title: "L405 Engine Rebuild",
          slug: "engine-rebuild",
          text: "Technical overhaul of SDV6 and SDV8 engines using precision-machined OEM parts."
        },
        {
          title: "Timing Chain Service",
          slug: "timing-chain-replacement",
          text: "Critical timing chain replacement for Ingenium and V6 engines to prevent catastrophic failure."
        },
        {
          title: "Engine Replacement",
          slug: "engine-replacement",
          text: "Full turnkey engine replacement service with complete module coding and integration."
        }
      ]}
      reviews={[
        {
          name: "Dr. Alistair Cook",
          rating: 5,
          text: "Exceptional service for my L405 SDV8. They handled a complex timing issue that the main dealer couldn't diagnose. The car is now smoother and more responsive than ever. True JLR experts.",
          date: "28 April 2024",
          engineCode: "4.4 SDV8"
        },
        {
          name: "Marcus V.",
          rating: 5,
          text: "Range Rover Garage rebuilt the SDV6 in my Range Rover Vogue after a crankshaft failure. The quality of work is outstanding, and the 24-month warranty gives me total peace of mind.",
          date: "12 March 2024",
          engineCode: "3.0 SDV6"
        },
        {
          name: "Julian S.",
          rating: 5,
          text: "Knowledgeable, professional, and fair. They fixed my P400e hybrid system issues with ease. The best independent specialist in the London/Essex area for modern JLR models.",
          date: "05 February 2024",
          engineCode: "P400e Hybrid"
        }
      ]}
      faqs={[
        {
          question: "How common is crankshaft failure on the Range Rover L405 SDV6?",
          answer: "Crankshaft failure is a documented technical concern for the 3.0L SDV6 engine. We provide a specialized re-engineering service that uses reinforced bearings and high-capacity oil pumps to significantly reduce the risk of failure and restore engine integrity."
        },
        {
          question: "What are the benefits of rebuilding an L405 SDV8 engine?",
          answer: "Rebuilding your 4.4L SDV8 with Range Rover Garage ensures that all internal components meet or exceed JLR's latest technical revisions. We focus on turbocharger optimization and cooling system reinforcement to maintain the legendary torque of the L405."
        },
        {
          question: "Can you diagnose hybrid system errors on the L405 P400e?",
          answer: "Yes, we are equipped with main-dealer level Pathfinder diagnostics to troubleshoot and repair complex hybrid system faults on the P400e, ensuring seamless integration between the petrol engine and electric motor."
        },
        {
          question: "Do you use genuine JLR parts for L405 engine repairs?",
          answer: "We exclusively use Genuine JLR OEM parts or superior performance-matched components. This ensures your Range Rover L405 maintains its factory warranty standards and prestige resale value."
        },
        {
          question: "Is nationwide recovery available for L405 engine replacements?",
          answer: "We offer a dedicated, fully-insured nationwide recovery service. We can collect your L405 from any UK location and transport it to our specialist facility in Grays for expert engine diagnostics and replacement."
        },
        {
          question: "What is the turnaround time for a full L405 engine rebuild?",
          answer: "A comprehensive master-level engine rebuild for the L405 typically takes 10-14 working days. This includes a full technical strip-down, chemical cleaning, precision machining, and extensive road testing."
        }
      ]}
    />
  );
}
