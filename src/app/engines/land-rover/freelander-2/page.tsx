import ModelPageTemplate from "@/components/ModelPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelander 2 Engine Specialists | 2.2 SD4 Rebuilds & Support",
  description: "Expert engine services for Land Rover Freelander 2. Specialist 2.2L SD4 engine rebuilds, timing belt replacement, and turbo repair at Range Rover Garage.",
  alternates: {
    canonical: "/engines/land-rover/freelander-2",
  },
};

export default function Freelander2Page() {
  return (
    <ModelPageTemplate
      modelName="Freelander 2"
      modelCode="L359"
      heroImage="/6r.webp"
      engineCodes={["2.2 TD4 Diesel", "2.2 SD4 Diesel", "3.2 i6 Petrol", "2.0 Si4 Petrol"]}
      introContent={[
        "The Land Rover Freelander 2 is widely regarded as one of the most reliable and capable compact SUVs in its class, powered by the robust 2.2L diesel engine family. However, maintaining its legendary durability requires specialized [Land Rover](/engines/land-rover) engineering knowledge, particularly regarding its [timing systems](/services/timing-belt-replacement) and fuel infrastructure.",
        "At Range Rover Garage, we are the UK's leading authorities on Freelander 2 [engine restoration](/services/engine-rebuild). With over 20 years of technical heritage, we provide the precision engineering required to keep your Freelander 2 performing at its peak, ensuring it remains a dependable partner for another 100,000 miles of [engine repair](/services/engine-repair) needs."
      ]}
      technicalContent={[
        {
          title: "The 2.2L Diesel: Mastering Timing & Reliability",
          text: [
            "The 2.2L TD4 and SD4 engines are the workhorses of the Freelander 2 range. While fundamentally robust, they are critically dependent on scheduled timing belt (cambelt) and water pump replacement. We utilize specialized JLR locking tools to ensure that the belt synchronization is perfect, preventing the catastrophic engine damage that follows a belt failure.",
            "Our technical process for the Freelander 2 includes a deep-clean of the EGR and intake systems. We provide specialized solutions for common turbocharger actuator faults and injector seal leaks, ensuring that your engine delivers its full torque and maintains optimal fuel efficiency across all driving conditions."
          ],
          image: "/13r.jpeg",
          imageLeft: false
        },
        {
          title: "Precision Rebuilds for High-Mileage Freelander 2s",
          text: [
            "For owners of high-mileage Freelander 2s, a master-level engine rebuild can restore the vehicle to factory-fresh performance. Our rebuild process involves a complete technical strip-down, where every internal component is inspected for wear and replaced with Genuine OEM parts, including the critical bottom-end bearings and oil pump.",
            "We also specialize in the rare 3.2L i6 and 2.0L Si4 petrol variants, providing main-dealer level diagnostics to resolve complex electronic faults and mechanical wear. At Range Rover Garage, we provide a dealership-standard service with independent passion, ensuring your Freelander 2 receives the technical scrutiny it deserves."
          ],
          image: "/4r.webp",
          imageLeft: true
        }
      ]}
      servicesContent={[
        {
          title: "Freelander 2 Rebuild",
          slug: "engine-rebuild",
          text: "Master-level rebuilding for the 2.2L diesel and petrol variants. We utilize precision-balanced components and genuine parts to restore original performance levels."
        },
        {
          title: "Timing Belt Service",
          slug: "timing-belt-replacement",
          text: "Critical cambelt and water pump replacement for the Freelander 2. We renew all belts and tensioners to protect your engine from catastrophic synchronization failure."
        },
        {
          title: "Turbocharger Repair",
          slug: "turbo-replacement",
          text: "Precision turbocharger replacement and calibration. We resolve power loss and smoke issues by installing balanced units and clearing all lubrication lines."
        }
      ]}
      reviews={[
        {
          name: "Robert M.",
          rating: 5,
          text: "Range Rover Garage rebuilt the engine in my Freelander 2 after a major timing failure. The quality of work is outstanding, and the car has been faultless ever since. Specialist knowledge at its best.",
          date: "12 March 2024",
          engineCode: "2.2 SD4"
        },
        {
          name: "Andrew foster",
          rating: 5,
          text: "Excellent service on my Freelander 2 timing belt and water pump. They used genuine parts and provided a full technical report. Much better value than the dealer with superior expertise.",
          date: "18 February 2024",
          engineCode: "2.2 TD4"
        },
        {
          name: "Julian S.",
          rating: 5,
          text: "Knowledgeable, professional, and fair. They fixed my Freelander 2 engine issues with ease. The best independent specialist in the London/Essex area for Land Rovers.",
          date: "05 February 2024",
          engineCode: "2.2 SD4"
        }
      ]}
      faqs={[
        {
          question: "How often should I change the timing belt on my Freelander 2?",
          answer: "While JLR intervals are longer, we strongly recommend replacing the cambelt and water pump every 7 years or 70,000 miles to prevent catastrophic engine failure due to belt fatigue."
        },
        {
          question: "Can you fix the turbocharger issues on the Freelander 2?",
          answer: "Yes, turbocharger failure or actuator faults are common. We provide precision turbo rebuilds and replacements, ensuring that the oil feed lines are also cleared to prevent repeat failures."
        },
        {
          question: "What causes the 'restricted performance' error on a Freelander 2?",
          answer: "This is often caused by split intercooler hoses, EGR valve failure, or turbocharger issues. We utilize main-dealer level diagnostics to pinpoint the exact fault and provide a permanent solution."
        },
        {
          question: "Is it worth rebuilding a Freelander 2 engine with high mileage?",
          answer: "Absolutely. The Freelander 2 is a highly capable and durable vehicle. A master-level rebuild from Range Rover Garage restores its reliability and preserves its value for many more years of use."
        },
        {
          question: "Do you offer nationwide collection for Freelander 2 engine work?",
          answer: "Yes, we provide a secure nationwide recovery service. We can collect your Freelander 2 from anywhere in the UK and transport it to our specialist facility in Grays for expert engine diagnostics and repair."
        },
        {
          question: "What warranty do you provide on specialist Freelander 2 work?",
          answer: "All our major Freelander 2 engine work comes with a standard 6-month or 6,000-mile warranty, with extended protection plans of up to 24 months available for complete peace of mind."
        }
      ]}
    />
  );
}
