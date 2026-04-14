import ServiceTemplate from "@/components/ServiceTemplate";
import { Activity } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialist Timing Belt Replacement | Range Rover Garage",
  description: "Essential maintenance for older Range Rover and Land Rover engines. Prevent belt snap today.",
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
      seoSections={[
        {
          title: "Don't Ignore Your",
          titleHighlight: "Timing Belt Service Interval",
          text: [
            "The timing belt — or cambelt — is one of the most critical and time-sensitive maintenance items on belt-driven Range Rover and Land Rover engines. Unlike the metallic timing chains used in Ingenium platforms, a rubber timing belt will degrade silently over time and distance, with catastrophic consequences when it snaps. With over 20 years of experience treating the aftermath of neglected belts, the Vogue Technics team strongly advocate for adhering strictly to JLR's recommended service intervals.",
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
            "Many garages replace only the belt itself to keep the headline cost down. Vogue Technics takes a different approach. Our standard timing belt service includes the tensioner spring and pulley, idler roller, and water pump — all renewed simultaneously. This approach costs marginally more initially, but eliminates the need to revisit the job in an estimated 15,000-20,000 miles when the secondary components reach their own end-of-life.",
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
