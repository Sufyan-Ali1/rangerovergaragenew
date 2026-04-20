import ModelPageTemplate from "@/components/ModelPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovery 1 Engine specialists | 300Tdi & V8 Restoration",
  description: "Expert engine services for Land Rover Discovery 1. Specialist 300Tdi rebuilds, V8 restoration, and timing belt services at Range Rover Garage.",
  alternates: {
    canonical: "/engines/land-rover/discovery-1",
  },
};

export default function Discovery1Page() {
  return (
    <ModelPageTemplate
      modelName="Discovery 1"
      modelCode="Series I"
      heroImage="/12r.jpeg"
      engineCodes={["300Tdi", "200Tdi", "3.5 V8 Petrol", "3.9 V8 Petrol"]}
      introContent={[
        "The Land Rover Discovery 1 is the vehicle that defined the modern family 4x4, combining rugged off-road prowess with everyday usability. Whether powered by the legendary Tdi diesel range or the classic Rover V8, these vehicles have become cherished modern classics that demand specialized mechanical care to remain on the road within the [Land Rover](/engines/land-rover) legacy.",
        "At Range Rover Garage, we share your passion for the Discovery 1. With over 20 years of technical heritage, we provide the master-level [engine restoration](/services/engine-rebuild) and rebuilding services required to keep these iconic powerplants performing with their original vigor and [reliability](/services/engine-repair)."
      ]}
      technicalContent={[
        {
          title: "The Tdi Heritage: 200Tdi & 300Tdi Restoration",
          text: [
            "The 200Tdi and 300Tdi engines are the bedrock of Discovery 1 reliability. We provide complete technical overhauls for these units, focusing on precision timing belt replacement, cylinder head restoration, and fuel injection pump calibration. Our rebuild process includes the installation of uprated gaskets and cooling system components to prevent the common overheating issues associated with aging Tdi units.",
            "We understand the nuances of the Bosch mechanical injection systems used in these engines. By precision-testing every injector and ensuring that the turbocharger boost levels are correctly calibrated, we restore the signature low-end torque and rugged dependability that made the Discovery 1 a global explorer."
          ],
          image: "/13r.jpeg",
          imageLeft: false
        },
        {
          title: "Rover V8 Mastery: Power & Refinement",
          text: [
            "For Discovery 1 V8 owners, we offer specialized restoration services for the 3.5L and 3.9L powerplants. We address common issues such as camshaft wear and rocker gear fatigue, utilizing high-performance components that offer superior longevity compared to the original factory specifications.",
            "Our engine rebuilds for the Rover V8 focus on achieving perfect thermal balance and oil pressure stability. We utilize precision-honed blocks and high-quality internal components, ensuring that your Discovery 1 continues to deliver the smooth, effortless power and evocative V8 soundtrack that defines the petrol Discovery experience."
          ],
          image: "/8r.jpeg",
          imageLeft: true
        }
      ]}
      servicesContent={[
        {
          title: "Discovery 1 Rebuild",
          slug: "engine-rebuild",
          text: "Master-level rebuilding for Tdi and V8 engines. We provide a complete technical restoration using precision-machined components to restore original reliability."
        },
        {
          title: "Tdi Timing Service",
          slug: "timing-belt-replacement",
          text: "Critical cambelt and tensioner replacement for 200Tdi and 300Tdi engines. We ensure perfect mechanical synchronization for long-term engine health."
        },
        {
          title: "Turbo Restoration",
          slug: "turbo-replacement",
          text: "Full diagnostic and replacement service for Discovery 1 turbochargers. We resolve power loss and smoke issues by installing balanced, high-efficiency units."
        }
      ]}
      reviews={[
        {
          name: "David H.",
          rating: 5,
          text: "Range Rover Garage restored the 300Tdi in my Discovery 1, and the results are incredible. The engine is quiet, powerful, and hasn't missed a beat. True craftsmen who understand the Land Rover heritage.",
          date: "14 March 2024",
          engineCode: "300Tdi"
        },
        {
          name: "Michael S.",
          rating: 5,
          text: "Excellent V8 rebuild on my Discovery 1. They handled the entire process professionally and provided great communication throughout. The car drives like new again.",
          date: "05 January 2024",
          engineCode: "3.9 V8"
        },
        {
          name: "Chris L.",
          rating: 5,
          text: "Restored my 200Tdi Discovery 1 to its former glory. The technical knowledge and passion for these older Land Rovers is truly impressive. Highly recommend.",
          date: "12 December 2023",
          engineCode: "200Tdi"
        }
      ]}
      faqs={[
        {
          question: "How reliable are Discovery 1 Tdi engines today?",
          answer: "The Tdi range is exceptionally reliable if maintained correctly. With a master-level rebuild from Range Rover Garage, these engines can easily provide another 200,000 miles of reliable service."
        },
        {
          question: "What is the most common engine issue on a Discovery 1 V8?",
          answer: "Camshaft wear and cooling system neglect are common. We provide specialized V8 restoration that addresses these weaknesses and ensures long-term thermal stability."
        },
        {
          question: "Do you use genuine parts for Discovery 1 engine work?",
          answer: "We use a combination of Genuine JLR parts and high-quality OEM alternatives that meet or exceed the original factory specifications to ensure the best possible performance and longevity."
        },
        {
          question: "How long does a Discovery 1 engine restoration take?",
          answer: "A complete master-level restoration typically takes 14-21 working days. This allows for a thorough strip-down, technical cleaning, precision machining, and extensive quality-assurance testing."
        },
        {
          question: "Is nationwide collection available for my Discovery 1?",
          answer: "Yes, we provide a secure nationwide recovery service. We can collect your Discovery 1 from anywhere in the UK and transport it safely to our specialist workshop in Grays."
        },
        {
          question: "What warranty do you provide on classic Land Rover engine work?",
          answer: "All our major Discovery 1 engine work comes with a standard 6-month or 6,000-mile warranty, providing peace of mind for your investment in a modern classic."
        }
      ]}
    />
  );
}
