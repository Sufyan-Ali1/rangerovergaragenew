"use client";

import ModelPageTemplate from "@/components/ModelPageTemplate";

export default function VelarEnginesPage() {
  return (
    <ModelPageTemplate
      modelName="Range Rover Velar"
      modelCode="L560"
      heroImage="/12r.jpeg"
      engineCodes={["3.0 D300 V6", "2.0 Ingenium", "2.0 D240", "3.0 P380 S/C V6", "P400e Hybrid"]}
      introContent={[
        "The Range Rover Velar is a masterpiece of reductionist design, powered by a highly sophisticated range of JLR powerplants that balance performance with cutting-edge efficiency. However, the Velar's advanced engines—from the potent D300 V6 to the innovative Ingenium family—demand a level of technical precision that only a true [Range Rover](/engines/range-rover) specialist can provide.",
        "Range Rover Garage is the UK's premier independent authority for Range Rover Velar [engine services](/services/engine-rebuild). We combine main-dealer level diagnostics with master-level engineering to ensure your Velar remains at the peak of its mechanical and electronic performance."
      ]}
      technicalContent={[
        {
          title: "V6 & D300 Master Engineering",
          text: [
            "The 3.0L V6 engines in the Velar, including the high-torque D300, are engineering marvels that require specific maintenance protocols. We specialize in resolving common timing belt and cooling system issues that can affect these potent units. Our technical process involves using precision-calibrated JLR timing tools to ensure perfect mechanical synchronization.",
            "Every Velar V6 that enters our workshop undergoes a complete technical evaluation of its twin-turbocharging system. We ensure that the boost parameters are perfectly matched to the engine's state of health, providing a smooth, linear power delivery that perfectly complements the Velar's refined driving dynamics."
          ],
          image: "/13r.jpeg",
          imageLeft: true
        },
        {
          title: "Ingenium & Hybrid Integration",
          text: [
            "As a modern JLR flagship, the Velar utilizes the full range of Ingenium petrol and diesel engines, alongside the advanced P400e hybrid system. We are nationwide specialists in Ingenium timing chain replacement and hybrid system diagnostics, utilizing the latest Pathfinder and TOPIx Cloud software to ensure perfect electronic integration.",
            "Our approach to Velar maintenance focuses on preserving the vehicle's sophisticated electronic architecture. We perform main-dealer level software updates and module programming, ensuring that your engine's mechanical state is perfectly reflected in its digital management systems. Every service is a testament to our commitment to technical perfection."
          ],
          image: "/15r.jpeg",
          imageLeft: false
        }
      ]}
      servicesContent={[
        {
          title: "Velar Engine Rebuild",
          slug: "engine-rebuild",
          text: "Full technical re-engineering of Velar V6 and Ingenium powerplants using genuine OEM components."
        },
        {
          title: "Timing Chain Service",
          slug: "timing-chain-replacement",
          text: "Critical timing chain replacement for Ingenium engines to resolve rattles and prevent failure."
        },
        {
          title: "Diagnostic Mastery",
          slug: "engine-repair",
          text: "Main-dealer level diagnostics and module programming for the entire Velar engine range."
        }
      ]}
      reviews={[
        {
          name: "Charles Montrose",
          rating: 5,
          text: "Exceptional service for my Velar D300. They replaced the timing belts and fixed a complex cooling issue that the main dealer couldn't solve. The car is now whisper quiet and incredibly smooth. True professionals.",
          date: "25 April 2024",
          engineCode: "3.0 D300 V6"
        },
        {
          name: "Victoria P.",
          rating: 5,
          text: "Range Rover Garage handled the timing chain replacement on my Ingenium Velar perfectly. They were transparent about the costs and the technical details. Much better value than the dealer with superior expertise.",
          date: "10 March 2024",
          engineCode: "2.0 Ingenium"
        },
        {
          name: "S. Kennedy",
          rating: 5,
          text: "Highly skilled, professional, and clearly the experts for the Velar platform. They diagnosed a complex boost issue on my car in minutes. I won't take my Range Rover anywhere else now.",
          date: "15 January 2024",
          engineCode: "2.0 D240"
        }
      ]}
      faqs={[
        {
          question: "When should the timing belt be replaced on a Range Rover Velar D300?",
          answer: "For the 3.0L V6 diesel engine, we recommend a timing belt and water pump replacement every 7 years or 70,000 miles. This is a critical preventive service to avoid catastrophic engine failure on the Velar platform."
        },
        {
          question: "What causes the 'rattling' sound in Velar Ingenium engines?",
          answer: "The rattle is typically caused by timing chain stretch and guide wear. At Range Rover Garage, we utilize uprated JLR components to permanently resolve the issue and ensure your Velar remains quiet and refined."
        },
        {
          question: "Can you fix DPF and EGR issues on the Range Rover Velar?",
          answer: "Yes, we provide specialized diagnostic and cleaning services for the Velar's exhaust treatment systems. We ensure that your engine breathes correctly, preventing limp mode and maintaining optimal fuel efficiency."
        },
        {
          question: "Do you offer nationwide collection for Velar engine repairs?",
          answer: "We provide a fully-insured nationwide recovery service for any Velar requiring major engine work. Our specialized transporters can collect your vehicle from anywhere in the UK and bring it to our Grays facility."
        },
        {
          question: "How long is the turnaround for a Velar engine replacement?",
          answer: "A complete engine replacement for the Velar typically takes 7-10 working days. This includes professional installation, full ECU coding, module programming, and extensive quality-assurance testing."
        },
        {
          question: "What warranty do you provide on specialist Velar engine work?",
          answer: "All our major Velar engine rebuilds and repairs are covered by a 6-month or 6,000-mile warranty. We also offer extended 12 and 24-month protection plans for total peace of mind."
        }
      ]}
    />
  );
}
