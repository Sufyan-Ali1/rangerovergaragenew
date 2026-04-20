import ServiceTemplate from "@/components/ServiceTemplate";
import { Cpu } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Timing Chain Replacement | Range Rover Garage",
  description: "Expert timing chain services for JLR Ingenium and SDV6 engines. Prevent catastrophic engine failure today.",
  alternates: {
    canonical: "/services/timing-chain-replacement",
  },
};

export default function TimingChainPage() {
  return (
    <ServiceTemplate
      title="Precision Timing Chain Replacement"
      description="Expert timing chain services for JLR Ingenium and SDV6 engines. Prevent catastrophic engine failure today."
      icon={<Cpu className="w-12 h-12" />}
      heroImage="/7r.jpeg"
      content="Timing chain failure is a known issue in certain Land Rover and Range Rover engines. Symptoms include a rattling sound on startup and poor engine performance. We use the latest specialist locking tools to ensure perfect synchronization. Our service includes replacing the chain, tensioners, guides, and sprockets to ensure long-term reliability."
      benefits={[
        "Prevents catastrophic engine damage",
        "Eliminates engine rattle and poor idling",
        "Ensures perfect valve timing and performance",
        "Uses upgraded, reinforced chain kits"
      ]}
      process={[
        "Full diagnostic check and timing assessment",
        "Manual engine rotation to top-dead-center",
        "Replacement of all chain system components",
        "EOC recalibration and road testing"
      ]}
      modelsContent={{
        title: "Timing Chain Specialists for All Modern Land Rover & Range Rover Models",
        paragraphs: [
          "Our workshop is a center of excellence for timing chain replacement across the entire modern Land Rover and Range Rover fleet. We have extensive experience with the Ingenium engines found in the [Range Rover Evoque](/engines/range-rover/evoque), [Range Rover Velar](/engines/range-rover/velar), and the latest [Land Rover Defender](/engines/land-rover/defender) models. We also specialize in the complex timing systems of the 3.0L TDV6 and SDV6 engines powering the [Range Rover Sport](/engines/range-rover/sport) and [Land Rover Discovery](/engines/land-rover/discovery-4).",
          "Serving owners from London, Essex, and throughout the UK, our Grays facility handles timing chain issues for every Land Rover generation. From the [Freelander 2](/engines/land-rover/freelander-2) and [Discovery Sport](/engines/land-rover/discovery-sport) to the flagship [Range Rover Vogue](/engines/range-rover/vogue-l405), we provide uprated chain kits that often exceed original factory specifications. By choosing our specialist timing chain service, you ensure your [Land Rover Defender](/engines/land-rover/defender) or [Discovery](/engines/land-rover/discovery-5) remains reliable for the long term."
        ]
      }}
      faqs={[
        {
          question: "What are the symptoms of a failing timing chain?",
          answer: "The most common symptom is a rattling or 'clattering' noise on startup, which may fade as the engine warms up. Other signs include poor idling, decreased fuel economy, and a 'Check Engine' light on the dashboard."
        },
        {
          question: "Is timing chain failure common in Range Rovers?",
          answer: "Yes, particularly in the 2.0L Ingenium and 3.0L SDV6 engines, timing chain wear is a well-documented issue that requires specialist intervention to prevent total engine failure."
        },
        {
          question: "Do you use upgraded timing chain kits?",
          answer: "Yes, we often use uprated and reinforced timing chain kits that feature stronger materials and improved tensioner designs to provide better durability than the original factory parts."
        },
        {
          question: "How long does a timing chain replacement take?",
          answer: "A professional timing chain replacement is a complex procedure that typically takes 3 to 5 working days, allowing for full access and precise calibration of the new components."
        },
        {
          question: "Do you use factory locking tools for the replacement?",
          answer: "Yes, we use the exact JLR-specified factory locking jigs and timing tools to ensure that the engine's timing is set with absolute precision, matching the original manufacturer calibration."
        }
      ]}
      reviews={[
        {
          name: "Chris Evans",
          rating: 5,
          text: "My Evoque was making a terrible rattling sound on cold starts. Range Rover Garage replaced the timing chain with an upgraded kit and it's now silent and runs beautifully.",
          date: "30 March 2024",
          model: "Range Rover Evoque"
        },
        {
          name: "Paul Wright",
          rating: 5,
          text: "Specialist service for my Discovery 5 timing chain. They used the proper JLR tools and the job was finished on time. Much better peace of mind now.",
          date: "12 February 2024",
          model: "Land Rover Discovery 5"
        }
      ]}
      seoSections={[
        {
          title: "Ingenium Timing Chain —",
          titleHighlight: "A Known JLR Failure",
          text: [
            "The JLR Ingenium 2.0L engine family, fitted to the Range Rover Evoque, Discovery Sport, Defender 110, and Freelander 2, is notorious within the industry for premature timing chain wear and tensioner failure. The symptom is unmistakable: a loud, metallic rattle from the front of the engine on cold start, which may disappear once oil pressure builds. This noise should never be ignored — it indicates that the chain is already slapping against its guides under low tension.",
            "At Range Rover Garage, our Grays workshop has become synonymous with resolving this issue. With over 20 years of JLR engine experience, we hold specialist JLR timing locking tooling for every current engine platform, allowing us to perform the chain replacement with absolute precision and without improvised tooling that risks catastrophic engine damage.",
            "We also service the SDV6 3.0L and TDV6 timing chain systems, which share similar failure patterns in high-mileage examples. If you can hear an unusual engine noise on startup, contact us today — early intervention is infinitely cheaper than a total engine failure."
          ],
          image: "/9r.jpeg",
          imageLeft: true,
          imageTitle: "Ingenium Chain Specialists",
          imageSubtitle: "Factory JLR Timing Locking Tools"
        },
        {
          title: "Uprated Chain Kits for",
          titleHighlight: "Long-Term Reliability",
          text: [
            "We don't simply fit a direct OEM replacement chain where documented design weaknesses exist. For Ingenium engines, we source uprated timing chain kits featuring stronger hardened-steel chain links and upgraded tensioner assemblies that address the root cause of the original failure. This means your repaired engine is more reliable than it was when it left the factory.",
            "Every timing chain replacement at our Grays workshop is followed by an extended warm-up cycle and live data monitoring session. We observe oil pressure response, cold-start chain tension, and cam timing parameters before your vehicle is cleared for road use. This is the Range Rover Garage standard — and it's why our customers trust us with their most valued assets."
          ],
          image: "/7r.jpeg",
          imageLeft: false,
          imageTitle: "Uprated Chain Systems",
          imageSubtitle: "Stronger Than Factory Standard"
        }
      ]}
    />
  );
}
