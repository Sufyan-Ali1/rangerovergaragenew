import ModelPageTemplate from "@/components/ModelPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Land Rover Defender Engine Specialists | L663 & Classic Support",
  description: "Expert engine services for Land Rover Defender. Specialist Ingenium D250/D300 rebuilds, Td5 restoration, and V8 performance at Range Rover Garage.",
  alternates: {
    canonical: "/engines/land-rover/defender",
  },
};

export default function DefenderPage() {
  return (
    <ModelPageTemplate
      modelName="Land Rover Defender"
      modelCode="L663 / Classic"
      heroImage="/6r.webp"
      engineCodes={["D200 / D250 / D300 Ingenium", "P300 / P400 Petrol", "Td5 Classic", "300Tdi Classic", "5.0L V8 Supercharged"]}
      introContent={[
        "The Land Rover Defender is an automotive icon, representing the ultimate in rugged endurance and off-road capability. From the high-tech L663 to the legendary classic variants, the Defender's powerplants require a specialized, master-level understanding of [Land Rover](/engines/land-rover) heritage to maintain their uncompromising performance.",
        "At Range Rover Garage, we are the UK's leading authorities on Defender [engine restoration](/services/engine-rebuild). We combine main-dealer level diagnostics for the modern Ingenium range with old-school engineering passion for the Td5 and Tdi classics, ensuring your Defender remains a reliable partner for every [engine repair](/services/engine-repair) need."
      ]}
      technicalContent={[
        {
          title: "Modern Ingenium & Pathfinder Diagnostics",
          text: [
            "The latest Defender L663 is powered by the advanced Ingenium engine family, which demands a high level of digital and mechanical precision. We utilize the latest JLR Pathfinder and TOPIx Cloud diagnostics to perform critical module updates and timing chain calibrations, resolving the common rattles and performance issues seen in early units.",
            "Our engineering process for the modern Defender includes specialized DPF and AdBlue system diagnostics. We ensure that the vehicle's sophisticated exhaust treatment systems are perfectly synchronized with the engine's mechanical state, preventing 'no-start' conditions and maintaining optimal efficiency across all terrains."
          ],
          image: "/13r.jpeg",
          imageLeft: false
        },
        {
          title: "Classic Heritage: Td5 & Tdi Master Restoration",
          text: [
            "For owners of the classic Defender, we offer specialized restoration services for the Td5, 300Tdi, and 200Tdi powerplants. We understand the unique mechanical nuances of these engines, providing precision cylinder head work, injector testing, and complete bottom-end rebuilds that restore the rugged dependability these vehicles are famous for.",
            "We go beyond standard repairs by installing uprated cooling systems and reinforced gaskets that address the thermal weaknesses of the classic Land Rover engines. At Range Rover Garage, we treat every classic Defender as a piece of history, applying 20+ years of technical heritage to ensure it stays on the road for the next generation."
          ],
          image: "/12r.jpeg",
          imageLeft: true
        }
      ]}
      servicesContent={[
        {
          title: "Defender Rebuild",
          slug: "engine-rebuild",
          text: "Master-level rebuilding for modern Ingenium and classic Defender engines using precision OEM components."
        },
        {
          title: "Timing Chain Service",
          slug: "timing-chain-replacement",
          text: "Critical timing chain replacement for the L663 Ingenium range to resolve rattles and prevent failure."
        },
        {
          title: "Classic Restoration",
          slug: "engine-repair",
          text: "Specialized technical restoration for Td5 and Tdi Defender engines, focusing on long-term reliability."
        }
      ]}
      reviews={[
        {
          name: "James Stevenson",
          rating: 5,
          text: "Range Rover Garage performed a full Td5 rebuild on my Defender 110. The quality of work is outstanding and the engine hasn't missed a beat. Clearly the experts for both old and new Land Rovers.",
          date: "12 April 2024",
          engineCode: "2.5 Td5"
        },
        {
          name: "Andrew Foster",
          rating: 5,
          text: "Excellent service on my new Defender L663. They diagnosed a complex electronic fault that the dealer was struggling with. Very professional and highly knowledgeable team.",
          date: "05 March 2024",
          engineCode: "D300 Ingenium"
        },
        {
          name: "Robert King",
          rating: 5,
          text: "The only place I'd trust with my Defender. They did a great job on the timing chain and software updates. Transparent pricing and exceptional technical expertise. Highly recommended.",
          date: "15 January 2024",
          engineCode: "D250 Ingenium"
        }
      ]}
      faqs={[
        {
          question: "When should I replace the timing chain on my modern Defender L663?",
          answer: "We recommend inspecting the Ingenium timing chain every 50,000 to 60,000 miles. If you notice a metallic rattle on cold starts, immediate replacement is vital to prevent catastrophic engine failure."
        },
        {
          question: "Can you fix the AdBlue and DEF system faults on the new Defender?",
          answer: "Yes, we utilize main-dealer level JLR diagnostics to troubleshoot and repair complex DEF system errors, ensuring your Defender remains emissions-compliant and stays out of 'no-start' mode."
        },
        {
          question: "Is it worth rebuilding a classic Defender Td5 engine?",
          answer: "Absolutely. The Td5 is a legendary engine with enduring value. A master-level rebuild from Range Rover Garage restores its reliability and preserves the heritage and resale value of your classic vehicle."
        },
        {
          question: "Do you offer nationwide collection for Defender engine work?",
          answer: "Yes, we provide a secure, fully-insured nationwide recovery service. We can collect your Defender from anywhere in the UK and transport it safely to our specialist workshop in Grays."
        },
        {
          question: "How long does a Defender engine replacement take?",
          answer: "A complete engine replacement typically takes 7-10 working days. This includes professional installation, full ECU coding, module programming, and extensive quality-assurance testing."
        },
        {
          question: "What warranty do you provide on specialist Defender engine work?",
          answer: "All our major Defender engine work comes with a standard 6-month or 6,000-mile warranty. We also offer extended protection plans of up to 24 months for complete peace of mind."
        }
      ]}
    />
  );
}
