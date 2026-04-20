"use client";

import ModelPageTemplate from "@/components/ModelPageTemplate";

export default function SportEnginesPage() {
  return (
    <ModelPageTemplate
      modelName="Range Rover Sport"
      modelCode="L494"
      heroImage="/16r.jpeg"
      engineCodes={["3.0 SDV6", "3.0 TDV6", "4.4 SDV8", "5.0 S/C V8", "2.0 Ingenium"]}
      introContent={[
        "The Range Rover Sport L494 is the ultimate expression of dynamic luxury, powered by some of the most advanced engines in the [Range Rover](/engines/range-rover) portfolio. However, the high-performance nature of the Sport means that its powerplants—especially the SDV6 and the Ingenium range—require meticulous technical care to maintain their reliability.",
        "Range Rover Garage is the UK's leading authority for Range Rover Sport [engine services](/services/engine-rebuild). From precision rebuilds to [high-level diagnostics](/services/engine-repair), our master technicians ensure that your Sport continues to deliver its signature blend of power and refinement."
      ]}
      technicalContent={[
        {
          title: "SDV6 Performance Engineering",
          text: [
            "The 3.0L SDV6 is the most popular engine in the Range Rover Sport range, offering incredible torque and efficiency. We provide specialized technical solutions for the common crankshaft and bearing issues that can affect these units. Our engineering process includes installing uprated components that resolve factory weaknesses and enhance long-term durability.",
            "We utilize specialized diagnostic equipment to monitor turbocharger efficiency and fuel injection timing. By optimizing these critical parameters, we restore the linear power delivery that makes the Range Rover Sport so rewarding to drive. Every rebuild is backed by our comprehensive warranty and technical support."
          ],
          image: "/13r.jpeg",
          imageLeft: true
        },
        {
          title: "Ingenium 2.0L Technical Support",
          text: [
            "The 2.0L Ingenium engine in the modern Sport is a marvel of efficiency, but it is highly sensitive to timing chain wear and turbocharger issues. We are nationwide specialists in Ingenium timing chain replacement, using the latest JLR-specified tools and uprated guides to ensure a perfect mechanical finish.",
            "Our approach to Ingenium maintenance involves regular technical evaluation of the oil lubrication system. We provide specialized flushes and uprated filters to prevent the carbon build-up that often leads to premature engine wear, ensuring your efficient Sport remains reliable for years to come."
          ],
          image: "/14r.jpeg",
          imageLeft: false
        }
      ]}
      servicesContent={[
        {
          title: "Sport Engine Rebuild",
          slug: "engine-rebuild",
          text: "Full technical re-engineering of SDV6 and SDV8 powerplants using genuine JLR components."
        },
        {
          title: "Timing Chain Replacement",
          slug: "timing-chain-replacement",
          text: "Specialist timing chain services for Ingenium and V6 engines to prevent failure."
        },
        {
          title: "Turbo Repair & Fitting",
          slug: "turbo-replacement",
          text: "Expert turbocharger diagnostics and replacement for the entire Range Rover Sport range."
        }
      ]}
      reviews={[
        {
          name: "Daniel Harris",
          rating: 5,
          text: "The team at Range Rover Garage are true specialists. They rebuilt the SDV6 in my Sport after a major failure and the car is now better than ever. Their knowledge of the L494 platform is unmatched.",
          date: "15 April 2024",
          engineCode: "3.0 SDV6"
        },
        {
          name: "Sophie T.",
          rating: 5,
          text: "Excellent service for my Ingenium powered Sport. They replaced the timing chain and guides quickly and professionally. Much better value than the main dealer with superior expertise.",
          date: "02 March 2024",
          engineCode: "2.0 Ingenium"
        },
        {
          name: "Kevin R.",
          rating: 5,
          text: "Professional, transparent, and highly skilled. They diagnosed a complex turbo issue on my Sport that three other garages couldn't find. Highly recommended for any Sport owner.",
          date: "10 January 2024",
          engineCode: "3.0 TDV6"
        }
      ]}
      faqs={[
        {
          question: "When should I replace the timing chain on my Range Rover Sport Ingenium?",
          answer: "While JLR intervals are longer, we recommend inspecting the Ingenium timing chain every 50,000 miles. Early replacement of the chain and guides prevents catastrophic failure and preserves the engine's performance."
        },
        {
          question: "What causes the 'knocking' sound in Range Rover Sport SDV6 engines?",
          answer: "A rhythmic knocking sound is often a sign of main bearing wear or crankshaft issues. If you hear this, we recommend immediate technical diagnosis to prevent a total engine seizure on your L494 Sport."
        },
        {
          question: "Can you fix turbocharger lag on the Range Rover Sport SDV8?",
          answer: "Yes, we specialize in twin-turbo calibration and replacement. We ensure that the actuator synchronization is perfect, restoring the instant throttle response the SDV8 is known for."
        },
        {
          question: "Do you offer reconditioned engines for the Range Rover Sport?",
          answer: "We provide high-quality reconditioned engines that have been fully stripped and rebuilt in-house. Every unit is chemically cleaned and fitted with new OEM-spec components for guaranteed reliability."
        },
        {
          question: "How long is the warranty on a Range Rover Sport engine rebuild?",
          answer: "All our specialist engine rebuilds come with a 6-month or 6,000-mile warranty. For added security, we offer extended 12 and 24-month protection plans that are honored nationwide."
        },
        {
          question: "Is nationwide collection free for major Range Rover Sport engine work?",
          answer: "We offer competitive nationwide collection rates and often include free recovery within a certain radius for full engine rebuild projects. Contact us for a precise quote based on your location."
        }
      ]}
    />
  );
}
