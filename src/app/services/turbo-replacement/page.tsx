import ServiceTemplate from "@/components/ServiceTemplate";
import { Wind } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turbocharger Replacement & Repair | Range Rover Garage",
  description: "High-performance turbo replacement for Range Rover Sport and Vogue models. Restore your vehicle's power.",
  alternates: {
    canonical: "/services/turbo-replacement",
  },
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
      modelsContent={{
        title: "Turbocharger Solutions for All Land Rover & Range Rover Models",
        paragraphs: [
          "Our turbocharger replacement and repair services cover the entire spectrum of the Land Rover and Range Rover family. We specialize in high-performance turbo units for the [Range Rover Sport](/engines/range-rover/sport) and [Range Rover Vogue](/engines/range-rover/vogue-l405), as well as the sophisticated Autobiography editions. Whether your [Land Rover Discovery 4](/engines/land-rover/discovery-4) is experiencing power loss or your [Range Rover Velar's](/engines/range-rover/velar) Ingenium engine requires a new turbocharger, our technicians have the expertise to restore full boost and performance. We also provide specialist support for the [Range Rover Evoque](/engines/range-rover/evoque) and [Land Rover Freelander 2](/engines/land-rover/freelander-2).",
          "Based in Grays, Essex, we serve Range Rover and Land Rover owners across London and the South East. We understand the unique challenges of the 2.0L and 3.0L turbocharged units and offer a comprehensive service that includes a full intake system flush and intercooler cleaning. Whether you drive a rugged [Land Rover Defender](/engines/land-rover/defender) or a sleek Range Rover Sport, we ensure your turbocharger replacement is handled with the highest level of specialist care for every [Land Rover Discovery 5](/engines/land-rover/discovery-5) and Range Rover model."
        ]
      }}
      faqs={[
        {
          question: "What are the signs of a failing turbocharger?",
          answer: "Common signs include a significant loss of power, black or blue smoke from the exhaust, a high-pitched whistling or whining sound, and a 'Check Engine' or 'Limp Mode' warning on the dashboard."
        },
        {
          question: "Do you offer reconditioned turbochargers?",
          answer: "Yes, we provide both brand-new and high-quality reconditioned turbo units, both of which are fully tested and balanced to meet or exceed manufacturer specifications."
        },
        {
          question: "Is it safe to drive with a failing turbo?",
          answer: "No, we recommend against driving with a failing turbo as it can lead to engine oil contamination or, in extreme cases, the engine can 'run away' on its own oil, causing catastrophic failure."
        },
        {
          question: "How long does it take to replace a Range Rover turbo?",
          answer: "A standard turbo replacement typically takes 2 to 4 working days. This allows for the removal of the old unit, full system cleaning, and precise fitting and testing of the new turbocharger."
        },
        {
          question: "Do you perform an oil flush when replacing a turbo?",
          answer: "Absolutely. We perform a complete engine oil and filter flush to ensure no debris from the old turbo remains in the system, which is critical for the longevity of the new unit."
        }
      ]}
      reviews={[
        {
          name: "Mark Collins",
          rating: 5,
          text: "My Range Rover Sport lost all power. Range Rover Garage diagnosed a turbo failure and replaced it quickly. The car feels like it has its original power back. Excellent job.",
          date: "12 April 2024",
          model: "Range Rover Sport"
        },
        {
          name: "Sarah Jenkins",
          rating: 5,
          text: "Very professional turbo replacement on my Discovery 4. They even cleaned the intercooler and oil lines. Highly recommend their specialist knowledge.",
          date: "05 March 2024",
          model: "Land Rover Discovery 4"
        }
      ]}
      seoSections={[
        {
          title: "Recognise the Signs of",
          titleHighlight: "Turbo Failure Early",
          text: [
            "Turbocharger failure is a common and costly issue on both the Range Rover Vogue and Sport TDV6 and SDV6 platforms. The early warning signs are often subtle: an oily smell when accelerating, a barely audible high-pitched whistle, or a slight reduction in throttle response. By the time black smoke appears from the exhaust or the engine enters limp mode, damage is often already spreading to the oil system and intercooler.",
            "Range Rover Garage in Grays, Essex, provides rapid turbo assessment and replacement for the full range of JLR vehicles. With over 20 years of dedicated turbocharger experience, our technicians can diagnose the specific failure mode — whether it's a collapsed oil seal, failed variable vane actuator, or compressor wheel impact — and recommend the most cost-effective solution, from a reconditioned unit to a fully new OEM turbocharger.",
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
            "Every turbo replacement is followed by a controlled run-in period and a live boost pressure verification on our diagnostic system. Only when the new unit is confirmed to be operating within its designed boost range and temperature threshold do we certify the vehicle as ready. This comprehensive approach is why Range Rover Garage is regarded as the UK's most trusted independent turbo specialist for JLR vehicles."
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
