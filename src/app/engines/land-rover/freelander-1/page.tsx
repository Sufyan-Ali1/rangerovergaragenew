import ModelPageTemplate from "@/components/ModelPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelander 1 Engine Specialists | Td4 & K-Series Rebuilds",
  description: "Expert engine services for Land Rover Freelander 1. Specialist Td4 diesel and K-Series head gasket restoration at Range Rover Garage.",
  alternates: {
    canonical: "/engines/land-rover/freelander-1",
  },
};

export default function Freelander1Page() {
  return (
    <ModelPageTemplate
      modelName="Freelander 1"
      modelCode="L314"
      heroImage="/7r.jpeg"
      engineCodes={["2.0 Td4 Diesel", "1.8 K-Series Petrol", "2.5 V6 Petrol", "2.0 L-Series Diesel"]}
      introContent={[
        "The Land Rover Freelander 1 pioneered the compact premium SUV segment, offering legendary Land Rover capability in a refined, everyday package. Whether powered by the robust BMW-sourced Td4 diesel or the responsive K-Series petrol, these modern classics require specialized technical attention to maintain their mechanical integrity as they age.",
        "At Range Rover Garage, we provide master-level engineering support for the Freelander 1. With over 20 years of technical heritage, we specialize in resolving the common engine challenges of this platform, ensuring your vehicle remains a reliable and efficient partner for all your journeys."
      ]}
      technicalContent={[
        {
          title: "Td4 Diesel Excellence: Mastering the M47 Powerplant",
          text: [
            "The 2.0L Td4 engine is the heart of the Freelander 1 range, known for its torque and efficiency. We provide complete technical overhauls for the Td4, focusing on precision injector testing, high-pressure fuel pump restoration, and turbocharger calibration. Our rebuild process addresses common issues such as crankcase breather neglect and sensor fatigue.",
            "We utilize specialized diagnostic tools to ensure that the Td4's electronic fuel management is perfectly synchronized with its mechanical components. By installing high-quality OEM seals and filters, we restore the signature smoothness and rugged dependability that made the Td4 the definitive Freelander 1 engine choice."
          ],
          image: "/13r.jpeg",
          imageLeft: false
        },
        {
          title: "K-Series Specialist: Head Gasket & Thermal Management",
          text: [
            "The 1.8L K-Series engine is a masterpiece of lightweight engineering but is highly sensitive to thermal management. We provide a specialized head gasket restoration service that utilizes multi-layer steel (MLS) gaskets and uprated oil ladders to resolve original manufacturer weaknesses and ensure long-term reliability.",
            "Our process includes precision cylinder head skimming and pressure testing to ensure a perfect mechanical seal. We also optimize the cooling system with high-flow thermostats and reinforced hoses. At Range Rover Garage, we have mastered the art of making the K-Series as reliable as it is responsive, protecting your Freelander 1's future."
          ],
          image: "/8r.jpeg",
          imageLeft: true
        }
      ]}
      servicesContent={[
        {
          title: "Freelander 1 Rebuild",
          slug: "engine-rebuild",
          text: "Master-level rebuilding for Td4 and K-Series variants. We provide a complete technical restoration using precision components to restore original performance."
        },
        {
          title: "Head Gasket Service",
          slug: "head-gasket-replacement",
          text: "Specialist K-Series head gasket restoration. We utilize uprated MLS gaskets and oil ladders to provide a permanent solution to thermal failures."
        },
        {
          title: "Td4 Turbo Repair",
          slug: "turbo-replacement",
          text: "Full diagnostic and replacement service for Td4 turbochargers. We resolve power loss and smoke issues while ensuring all oil feed lines are cleared."
        }
      ]}
      reviews={[
        {
          name: "Mark T.",
          rating: 5,
          text: "Range Rover Garage performed a head gasket restoration on my Freelander 1 K-Series. They used the uprated parts and the car has been faultless for two years. Specialist expertise you can trust.",
          date: "12 March 2024",
          engineCode: "1.8 K-Series"
        },
        {
          name: "Simon L.",
          rating: 5,
          text: "Excellent service on my Freelander 1 Td4. They diagnosed a tricky starting issue in minutes and had me back on the road the same day. Very knowledgeable and professional team.",
          date: "18 February 2024",
          engineCode: "2.0 Td4"
        },
        {
          name: "Gareth D.",
          rating: 5,
          text: "Restored the V6 in my Freelander 1 after a major failure. The car now drives perfectly and the service was top notch. Highly recommend for any classic Freelander owner.",
          date: "10 January 2024",
          engineCode: "2.5 V6"
        }
      ]}
      faqs={[
        {
          question: "How do I prevent head gasket failure on a Freelander 1 K-Series?",
          answer: "Regular cooling system checks and the installation of an uprated MLS head gasket kit with a reinforced oil ladder are the most effective technical solutions we provide."
        },
        {
          question: "Is the Td4 engine in the Freelander 1 reliable?",
          answer: "Yes, the Td4 is exceptionally robust. However, it requires specialist attention to the crankcase breather system and high-pressure fuel system to maintain its legendary reliability."
        },
        {
          question: "Can you fix the V6 engine issues in the Freelander 1?",
          answer: "Yes, we provide specialized maintenance for the 2.5L V6, focusing on timing belt replacement and inlet manifold diagnostics to ensure smooth and powerful performance."
        },
        {
          question: "Do you offer nationwide collection for Freelander 1 repairs?",
          answer: "Yes, we provide a secure nationwide recovery service. We can collect your Freelander 1 from anywhere in the UK and transport it safely to our engineering center in Grays."
        },
        {
          question: "How long does a Freelander 1 engine rebuild take?",
          answer: "A complete master-level rebuild typically takes 7-10 working days. This includes a full technical strip-down, chemical cleaning, and precision re-assembly."
        },
        {
          question: "What warranty do you provide on classic Freelander engine work?",
          answer: "All our major Freelander 1 engine work comes with a standard 6-month or 6,000-mile warranty, providing peace of mind for your compact Land Rover classic."
        }
      ]}
    />
  );
}
