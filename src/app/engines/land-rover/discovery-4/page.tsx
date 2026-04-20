import ModelPageTemplate from "@/components/ModelPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovery 4 Engine Specialists | L319 SDV6 Rebuilds & Repair",
  description: "Expert engine services for Land Rover Discovery 4. Specialist 3.0L SDV6 crankshaft repair, timing belt replacement, and full rebuilds at Range Rover Garage.",
  alternates: {
    canonical: "/engines/land-rover/discovery-4",
  },
};

export default function Discovery4Page() {
  return (
    <ModelPageTemplate
      modelName="Discovery 4 (L319)"
      modelCode="L319"
      heroImage="/1r.webp"
      engineCodes={["3.0 SDV6", "3.0 TDV6", "5.0 V8 Petrol", "3.0 SCV6 Petrol"]}
      introContent={[
        "The Land Rover Discovery 4 (L319) is globally recognized as one of the most versatile and capable luxury SUVs ever produced. Powered by the high-torque 3.0L SDV6 engine, it offers a seamless blend of performance and utility, but requires master-level [Land Rover](/engines/land-rover) engineering to maintain its complex mechanical systems.",
        "Range Rover Garage provides comprehensive [engine rebuild](/services/engine-rebuild) and maintenance solutions for the Discovery 4. We specialize in resolving common crankshaft issues and [timing belt](/services/timing-belt-replacement) failures, ensuring your vehicle continues to deliver its signature reliability and power."
      ]}
      technicalContent={[
        {
          title: "The SDV6 Challenge: Crankshaft & Bearing Solutions",
          text: [
            "The 3.0L SDV6 engine is a masterpiece of torque, but it is susceptible to catastrophic crankshaft failure and 'spun' main bearings. Our engineering team has developed a specialized rebuild protocol that includes the installation of precision-machined crankshafts and uprated heavy-duty bearing shells.",
            "We go beyond standard repairs by analyzing the oil flow dynamics of each engine. By installing reinforced high-capacity oil pumps and ensuring that all lubrication galleries are chemically deep-cleaned, we provide a robust solution that significantly reduces the risk of repeat failure on your Discovery 4."
          ],
          image: "/13r.jpeg",
          imageLeft: false
        },
        {
          title: "Advanced JLR Diagnostics & Technical Integration",
          text: [
            "A Discovery 4 engine rebuild is only as good as its electronic integration. We utilize main-dealer level Pathfinder and TOPIx Cloud diagnostics to perform critical module adaptations and software updates following any major mechanical work. This ensures that the engine management system is perfectly calibrated for your new components.",
            "From turbocharger actuator synchronization to high-pressure fuel system coding, we handle every technical detail entirely in-house at our Grays facility. This total quality control ensures that your Discovery 4 delivers the smooth, effortless power it was designed for, without the nagging warning lights often seen after amateur repairs."
          ],
          image: "/4r.webp",
          imageLeft: true
        }
      ]}
      servicesContent={[
        {
          title: "SDV6 Master Rebuild",
          slug: "engine-rebuild",
          text: "Full technical restoration of the 3.0L SDV6. We utilize reinforced crankshafts and uprated bearings to resolve factory weaknesses and restore factory-peak performance."
        },
        {
          title: "Timing Belt Service",
          slug: "timing-belt-replacement",
          text: "Comprehensive cambelt and oil pump service. We renew all belts, tensioners, and the critical oil pump to protect your SDV6 engine from catastrophic synchronization failure."
        },
        {
          title: "DPF & Turbo Specialist",
          slug: "turbo-replacement",
          text: "Expert resolution for Velar and Discovery 4 turbo failures. We perform high-level diagnostics to identify root causes and install balanced, high-efficiency replacements."
        }
      ]}
      reviews={[
        {
          name: "Andrew Foster",
          rating: 5,
          text: "Range Rover Garage is the only place I'd trust with my Discovery 4. They rebuilt my engine after a crankshaft failure, and the car has been faultless for 20,000 miles since. True specialists.",
          date: "12 April 2024",
          engineCode: "3.0 SDV6"
        },
        {
          name: "Robert King",
          rating: 5,
          text: "Excellent service on my Discovery 4 timing belt and water pump. They used genuine parts and provided a full technical report. Much better experience than the main dealer.",
          date: "18 February 2024",
          engineCode: "3.0 TDV6"
        },
        {
          name: "Kevin S.",
          rating: 5,
          text: "The best independent specialist I've used. They diagnosed a complex turbo issue on my Discovery 4 in minutes. Transparent pricing and exceptional technical knowledge.",
          date: "12 January 2024",
          engineCode: "3.0 SDV6"
        }
      ]}
      faqs={[
        {
          question: "How common is crankshaft failure on the Discovery 4 SDV6?",
          answer: "While it is a documented issue, it can be mitigated with specialist maintenance. If failure occurs, Range Rover Garage provides a specialized re-engineering service using reinforced components to prevent recurrence."
        },
        {
          question: "What are the signs of impending engine failure in a Discovery 4?",
          answer: "A rhythmic knocking sound from the bottom end or a sudden loss of oil pressure are critical warnings. If you notice these, we recommend immediate technical diagnosis to prevent a total engine seizure."
        },
        {
          question: "Do you use genuine Land Rover parts for Discovery 4 rebuilds?",
          answer: "Yes, we exclusively use Genuine JLR OEM parts or uprated engineering-grade alternatives that meet or exceed factory specifications to ensure the highest levels of reliability."
        },
        {
          question: "How long does a Discovery 4 engine rebuild take?",
          answer: "A master-level rebuild typically takes between 10 to 14 working days. This timeframe allows for a complete strip-down, chemical cleaning, precision assembly, and extensive road testing."
        },
        {
          question: "Is nationwide collection available for my Discovery 4?",
          answer: "We offer a fully-insured nationwide recovery service. We can collect your Discovery 4 from any UK location and transport it safely to our engineering center in Grays for expert repair."
        },
        {
          question: "What warranty do you provide on specialist Discovery 4 work?",
          answer: "All our major Discovery 4 engine work comes with a standard 6-month or 6,000-mile warranty, with extended protection plans of up to 24 months available for total peace of mind."
        }
      ]}
    />
  );
}
