import ServiceTemplate from "@/components/ServiceTemplate";
import { Activity } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialist Timing Belt Replacement | Range Rover Garage",
  description: "Essential maintenance for older Range Rover and Land Rover engines. Prevent belt snap today.",
  alternates: {
    canonical: "/services/timing-belt-replacement",
  },
};

export default function TimingBeltPage() {
  return (
    <ServiceTemplate
      title="Specialist Timing Belt Replacement"
      description="Essential maintenance for older Range Rover and Land Rover engines. Prevent belt snap today."
      icon={<Activity className="w-12 h-12" />}
      heroImage="/9r.jpeg"
      content="Unlike later chain-driven models, many Range Rover engines rely on a timing belt. Neglecting this part can lead to total engine destruction. We provide a full timing belt kit service, including tensioners and the water pump, ensuring your engine remains safe for thousands of miles to come."
      benefits={[
        "Guaranteed protection against belt snap",
        "Includes water pump and tensioner kit",
        "Maintains vehicle service history and value",
        "Peace of mind for high-mileage journeys"
      ]}
      process={[
        "Inspection of current belt condition",
        "Removal of peripherals and covers",
        "Installation of complete JLR belt kit",
        "Correct tensioning and timing verification"
      ]}
      modelsContent={{
        title: "Timing Belt Maintenance for a Wide Range of Land Rover & Range Rover Models",
        paragraphs: [
          "Regular timing belt replacement is crucial for many Land Rover and Range Rover models, especially those with belt-driven powerplants. We specialize in comprehensive cambelt services for the [Range Rover Sport](/engines/range-rover/sport), [Range Rover Vogue](/engines/range-rover/vogue-l405), and older [Land Rover Discovery 3](/engines/land-rover/discovery-3) and [4](/engines/land-rover/discovery-4) models.",
          "Operating from our Grays workshop, we support [Range Rover](/engines/range-rover) and [Land Rover](/engines/land-rover) enthusiasts from across London and Essex. Our timing belt service includes the belt, tensioners, and water pump for your [Discovery](/engines/land-rover/discovery-4), [Evoque](/engines/range-rover/evoque), or Sport. We use only genuine JLR-approved parts to maintain the integrity of your [Land Rover Defender](/engines/land-rover/defender) or [Discovery 1](/engines/land-rover/discovery-1)."
        ]
      }}
      faqs={[
        {
          question: "When should I replace the timing belt on my Range Rover?",
          answer: "Service intervals vary by model, but generally, we recommend replacing the timing belt every 7 years or 105,000 miles, whichever comes first. However, for vehicles used in demanding conditions, earlier replacement is often advisable."
        },
        {
          question: "Does your timing belt service include the water pump?",
          answer: "Yes, our standard timing belt kit service includes the replacement of the water pump, tensioners, and idler pulleys to ensure the entire system is renewed and reliable."
        },
        {
          question: "What happens if a timing belt snaps?",
          answer: "If a timing belt snaps, it can lead to immediate and severe engine damage, often requiring a full engine rebuild or replacement. Preventative replacement is significantly more cost-effective."
        },
        {
          question: "Can you perform a timing belt service while I wait?",
          answer: "A timing belt and water pump service typically takes a full working day. We recommend dropping the vehicle off in the morning and it will be ready for collection by the late afternoon."
        },
        {
          question: "Do you replace the oil pump during a timing belt service?",
          answer: "For the 2.7L and 3.0L TDV6 engines, we strongly recommend replacing the oil pump at the same time as the timing belt, as the original pump housings are a known failure point."
        }
      ]}
      reviews={[
        {
          name: "Kevin Miller",
          rating: 5,
          text: "Had the cambelt replaced on my Discovery 4. Professional service and they even pointed out a minor oil leak I hadn't noticed. Very impressed.",
          date: "25 March 2024",
          model: "Land Rover Discovery 4"
        },
        {
          name: "Jessica Taylor",
          rating: 5,
          text: "Excellent value for money. They replaced the full timing belt kit on my Evoque. Much better price than the main dealer and great service.",
          date: "10 February 2024",
          model: "Range Rover Evoque"
        }
      ]}
      seoSections={[
        {
          title: "Don't Ignore Your",
          titleHighlight: "Timing Belt Service Interval",
          text: [
            "The timing belt — or cambelt — is one of the most critical and time-sensitive maintenance items on belt-driven Range Rover and Land Rover engines. Unlike the metallic timing chains used in Ingenium platforms, a rubber timing belt will degrade silently over time and distance, with catastrophic consequences when it snaps. With over 20 years of experience treating the aftermath of neglected belts, the Range Rover Garage team strongly advocate for adhering strictly to JLR's recommended service intervals.",
            "We service timing belts on older Range Rover 4.0L and 4.6L V8 engines, as well as TD5 and TVM Diesel units found in Defenders and early Discoverys. Our technicians use precise manufacturer tension gauges and factory locking tools to ensure your new belt sits at the exact specification, protecting your engine from any possibility of valve contact.",
            "Located in Grays, Essex, we welcome owners from across London and the South East. We offer a complete timing belt kit service, including the tensioner pulley, idler roller, and water pump replacement — ensuring that every component that touches the new belt is also new, providing maximum peace of mind."
          ],
          image: "/10r.jpeg",
          imageLeft: true,
          imageTitle: "Preventative Maintenance",
          imageSubtitle: "JLR Service Interval Specialists"
        },
        {
          title: "Complete Kit Replacement,",
          titleHighlight: "Zero Shortcuts",
          text: [
            "Many garages replace only the belt itself to keep the headline cost down. Range Rover Garage takes a different approach. Our standard timing belt service includes the tensioner spring and pulley, idler roller, and water pump — all renewed simultaneously. This approach costs marginally more initially, but eliminates the need to revisit the job in an estimated 15,000-20,000 miles when the secondary components reach their own end-of-life.",
            "We document all timing belt work meticulously in your vehicle's service history. This meticulous record-keeping not only safeguards your engine but also enhances the resale value of your Range Rover or Land Rover, providing prospective buyers with documented evidence of professional preventative maintenance at the UK's leading JLR specialist."
          ],
          image: "/14r.jpeg",
          imageLeft: false,
          imageTitle: "Full Kit Replacement",
          imageSubtitle: "Belt, Tensioners & Water Pump"
        }
      ]}
    />
  );
}
