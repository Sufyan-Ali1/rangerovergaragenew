import ModelPageTemplate from "@/components/ModelPageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discovery 3 Engine Specialists | L319 TDV6 Rebuilds & Repair",
  description: "Expert engine services for Land Rover Discovery 3 (L319). Specialist 2.7L TDV6 rebuilds, timing belt replacement, and crankshaft repair at Range Rover Garage.",
  alternates: {
    canonical: "/engines/land-rover/discovery-3",
  },
};

export default function Discovery3Page() {
  return (
    <ModelPageTemplate
      modelName="Discovery 3 (L319)"
      modelCode="L319"
      heroImage="/6r.webp"
      engineCodes={["2.7 TDV6", "4.4 V8 Petrol", "4.0 V6 Petrol"]}
      introContent={[
        "The Land Rover Discovery 3 (L319) revolutionized the 4x4 market with its Integrated Body Frame architecture and sophisticated air suspension. However, as these capable machines age, their powerplants—particularly the 2.7L TDV6—require specialized, master-level attention to maintain their legendary go-anywhere capability within the [Land Rover](/engines/land-rover) lineup.",
        "At Range Rover Garage, we are the UK's leading authorities on L319 [engine restoration](/services/engine-rebuild). With over 20 years of technical heritage, we provide the precision engineering required to resolve common Discovery 3 failures, ensuring your vehicle remains a reliable partner for every [engine repair](/services/engine-repair) need."
      ]}
      technicalContent={[
        {
          title: "The 2.7L TDV6: Engineering Excellence & Known Weaknesses",
          text: [
            "The 2.7L TDV6 engine was a landmark in diesel engineering, offering a perfect balance of torque and refinement. However, it is prone to specific technical failures, most notably the 'spun bearing' issue caused by oil pump housing failure. Our re-engineering process addresses this by installing uprated oil pumps and reinforced main bearings during every rebuild.",
            "We utilize specialized JLR timing tools to ensure that the complex belt synchronization is perfect. A common mistake in general workshops is the improper installation of the rear high-pressure fuel pump belt; at Range Rover Garage, we follow a rigorous 150-point inspection protocol that covers every technical detail of the L319's fuel and timing systems."
          ],
          image: "/13r.jpeg",
          imageLeft: false
        },
        {
          title: "Precision Crankshaft & Bottom-End Restoration",
          text: [
            "For Discovery 3 owners facing catastrophic bottom-end failure, we offer a specialized crankshaft restoration service. We don't just replace the failed components; we precision-hone the block and utilize high-performance shells that offer superior thermal resistance compared to the factory-standard parts.",
            "Our workshop in Grays is equipped with the latest diagnostic infrastructure to perform deep-system module resets following any major engine work. This ensures that the engine management system is perfectly synchronized with the newly rebuilt mechanical components, preventing the 'restricted performance' errors that often plague poorly executed repairs."
          ],
          image: "/8r.jpeg",
          imageLeft: true
        }
      ]}
      servicesContent={[
        {
          title: "L319 TDV6 Rebuild",
          slug: "engine-rebuild",
          text: "Master-level 2.7L TDV6 engine rebuilding. We provide a complete technical overhaul using genuine OEM parts and uprated oil pumps to prevent repeat bearing failure."
        },
        {
          title: "Timing Belt Service",
          slug: "timing-belt-replacement",
          text: "Critical maintenance for the L319. We replace both the front timing belt and the rear fuel pump belt, including all tensioners and the water pump for total security."
        },
        {
          title: "Turbocharger Overhaul",
          slug: "turbo-replacement",
          text: "Precision turbocharger replacement for the Discovery 3. We resolve limp mode and smoke issues by installing balanced units and clearing all oil feed lines."
        }
      ]}
      reviews={[
        {
          name: "John Stevenson",
          rating: 5,
          text: "Range Rover Garage saved my Discovery 3. The 2.7 TDV6 had a snapped crank, and they rebuilt it using reinforced parts. The car now runs smoother than it did 10 years ago.",
          date: "14 April 2024",
          engineCode: "2.7 TDV6"
        },
        {
          name: "Philip Thorne",
          rating: 5,
          text: "Excellent service on my L319 timing belt and oil pump replacement. They found a leaking turbo hose that others had missed. Very professional and highly knowledgeable.",
          date: "05 March 2024",
          engineCode: "2.7 TDV6"
        },
        {
          name: "Mark J.",
          rating: 5,
          text: "Highly recommended for any Discovery 3 owner. They fixed a complex air suspension and engine fault that the dealer was struggling with. The car is now back to its best.",
          date: "10 January 2024",
          engineCode: "2.7 TDV6"
        }
      ]}
      faqs={[
        {
          question: "What causes the 'spun bearing' failure in Discovery 3 engines?",
          answer: "The primary cause is often the failure of the oil pump housing or a loss of oil pressure at high temperatures. At Range Rover Garage, we install uprated oil pumps and reinforced bearings to permanently resolve this technical weakness."
        },
        {
          question: "How often should I change the timing belt on my L319?",
          answer: "While JLR intervals are longer, we strongly recommend replacing the front and rear belts every 7 years or 70,000 miles. Neglecting the rear fuel pump belt can lead to sudden non-start issues and sensor damage."
        },
        {
          question: "Can you fix the EGR valve issues on a Discovery 3?",
          answer: "Yes, we provide specialized EGR diagnostic and cleaning services. If the valves are beyond repair, we offer high-quality replacements that ensure your engine remains emissions-compliant and performs efficiently."
        },
        {
          question: "Is it worth rebuilding a Discovery 3 with high mileage?",
          answer: "Absolutely. The L319 is a modern classic with enduring value. A master-level rebuild from Range Rover Garage restores the vehicle's reliability and preserves its resale value for years to come."
        },
        {
          question: "Do you offer nationwide collection for Discovery 3 repairs?",
          answer: "Yes, we provide a secure nationwide recovery service. We can collect your L319 from anywhere in the UK and transport it to our specialist facility in Grays for expert engine work."
        },
        {
          question: "What warranty do you provide on an L319 engine rebuild?",
          answer: "All our Discovery 3 engine rebuilds come with a standard 6-month or 6,000-mile warranty. We also offer extended protection plans of up to 24 months for complete peace of mind."
        }
      ]}
    />
  );
}
