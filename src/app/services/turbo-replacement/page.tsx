import ServiceTemplate from "@/components/ServiceTemplate";
import { Wind } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turbocharger Replacement & Repair | Range Rover Garage",
  description: "High-performance turbo replacement for Range Rover Sport and Vogue models. Restore your vehicle's power.",
};

export default function TurboReplacementPage() {
  return (
    <ServiceTemplate
      title="Turbocharger Replacement & Repair"
      description="High-performance turbo replacement for Range Rover Sport and Vogue models. Restore your vehicle's power."
      icon={<Wind className="w-12 h-12" />}
      heroImage="/4r.webp"
      content="Turbocharger issues often manifest as black smoke, loss of power, or a high-pitched whistling sound. We provide both new and reconditioned turbo units, ensuring they are perfectly balanced and calibrated for your specific Range Rover engine. We also perform a full intake system flush to prevent future contamination."
      benefits={[
        "Immediate restoration of power and torque",
        "Improved fuel economy and emissions",
        "Prevention of engine oil contamination",
        "Full calibration to ECU specifications"
      ]}
      process={[
        "Verification of turbo boost pressures",
        "Checking for oil leaks and shaft play",
        "Fitting of new specialized turbo unit",
        "Cleaning of intercooler and oil feed lines"
      ]}
      seoSections={[
        {
          title: "Recognise the Signs of",
          titleHighlight: "Turbo Failure Early",
          text: [
            "Turbocharger failure is a common and costly issue on both the Range Rover Vogue and Sport TDV6 and SDV6 platforms. The early warning signs are often subtle: an oily smell when accelerating, a barely audible high-pitched whistle, or a slight reduction in throttle response. By the time black smoke appears from the exhaust or the engine enters limp mode, damage is often already spreading to the oil system and intercooler.",
            "Vogue Technics in Grays, Essex, provides rapid turbo assessment and replacement for the full range of JLR vehicles. With over 20 years of dedicated turbocharger experience, our technicians can diagnose the specific failure mode — whether it's a collapsed oil seal, failed variable vane actuator, or compressor wheel impact — and recommend the most cost-effective solution, from a reconditioned unit to a fully new OEM turbocharger.",
            "We use a specialist boost pressure test rig and live smoke testing to confirm the diagnosis before any parts are ordered, ensuring you only pay for what's genuinely needed. Our nationwide vehicle collection means you don't need to risk driving a compromised vehicle to our workshop."
          ],
          image: "/2r.webp",
          imageLeft: true,
          imageTitle: "Turbo Failure Specialists",
          imageSubtitle: "Early Diagnosis Saves Engines"
        },
        {
          title: "Full System Flush &",
          titleHighlight: "Intercooler Restoration",
          text: [
            "A turbocharger replacement done in isolation, without addressing the cause of failure, will see the new unit fail prematurely. Our industry-leading turbo replacement service includes a thorough flush of all oil feed and return lines, an intercooler cleaning procedure to remove any oil deposits from the charge air cooler, and an oil change with JLR-specification lubricant before the new turbo is started under controlled conditions.",
            "Every turbo replacement is followed by a controlled run-in period and a live boost pressure verification on our diagnostic system. Only when the new unit is confirmed to be operating within its designed boost range and temperature threshold do we certify the vehicle as ready. This comprehensive approach is why Vogue Technics is regarded as the UK's most trusted independent turbo specialist for JLR vehicles."
          ],
          image: "/3r.webp",
          imageLeft: false,
          imageTitle: "Full System Flush",
          imageSubtitle: "Intercooler & Oil Lines Restored"
        }
      ]}
    />
  );
}
