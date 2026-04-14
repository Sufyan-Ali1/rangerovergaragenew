import ServiceTemplate from "@/components/ServiceTemplate";
import { Cpu } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Timing Chain Replacement | Range Rover Garage",
  description: "Expert timing chain services for JLR Ingenium and SDV6 engines. Prevent catastrophic engine failure today.",
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
      seoSections={[
        {
          title: "Ingenium Timing Chain —",
          titleHighlight: "A Known JLR Failure",
          text: [
            "The JLR Ingenium 2.0L engine family, fitted to the Range Rover Evoque, Discovery Sport, Defender 110, and Freelander 2, is notorious within the industry for premature timing chain wear and tensioner failure. The symptom is unmistakable: a loud, metallic rattle from the front of the engine on cold start, which may disappear once oil pressure builds. This noise should never be ignored — it indicates that the chain is already slapping against its guides under low tension.",
            "At Vogue Technics, our Grays workshop has become synonymous with resolving this issue. With over 20 years of JLR engine experience, we hold specialist JLR timing locking tooling for every current engine platform, allowing us to perform the chain replacement with absolute precision and without improvised tooling that risks catastrophic engine damage.",
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
            "Every timing chain replacement at our Grays workshop is followed by an extended warm-up cycle and live data monitoring session. We observe oil pressure response, cold-start chain tension, and cam timing parameters before your vehicle is cleared for road use. This is the Vogue Technics standard — and it's why our customers trust us with their most valued assets."
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
