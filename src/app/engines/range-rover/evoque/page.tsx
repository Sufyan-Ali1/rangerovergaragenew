"use client";

import ModelPageTemplate from "@/components/ModelPageTemplate";

export default function EvoqueEnginesPage() {
  return (
    <ModelPageTemplate
      modelName="Range Rover Evoque"
      modelCode="L538 / L551"
      heroImage="/4r.webp"
      engineCodes={["2.0 Ingenium", "2.2 SD4", "2.0 TD4", "2.0 Si4", "P300e Hybrid"]}
      introContent={[
        "The Range Rover Evoque redefined the compact luxury SUV, combining striking design with legendary Land Rover capability. However, the Ingenium engine family that powers the majority of modern Evoques requires specialized, master-level attention—particularly regarding its complex [timing chain](/services/timing-chain-replacement) and turbocharger systems.",
        "At Range Rover Garage, we are the UK's leading authorities on Evoque [engine services](/services/engine-rebuild). From the robust early 2.2L SD4 units to the advanced 2.0L Ingenium and Hybrid powerplants, we provide a level of technical expertise that ensures your Evoque remains a reliable and high-performing asset within the [Range Rover](/engines/range-rover) family."
      ]}
      technicalContent={[
        {
          title: "Ingenium Timing Chain Authority",
          text: [
            "The 2.0L Ingenium diesel and petrol engines are the heart of the Evoque range, but they are notoriously sensitive to timing chain wear. We have performed hundreds of Ingenium timing chain replacements, using uprated guides and the latest JLR-specified locking tools to ensure a perfect mechanical finish that resolves factory-inherited rattles.",
            "Our engineering process for the Ingenium family includes a deep-clean of the oil lubrication system. We provide specialized solutions to prevent the carbon build-up that often leads to premature chain fatigue and turbocharger failure. Every Ingenium service at Range Rover Garage is backed by our robust specialist warranty."
          ],
          image: "/14r.jpeg",
          imageLeft: true
        },
        {
          title: "Hybrid & Turbocharged Innovation",
          text: [
            "As the Evoque has moved toward electrification with the P300e, we have invested in the high-voltage diagnostics and safety equipment required to support these advanced powerplants. We understand the complex thermal relationship between the 1.5L 3-cylinder engine and the electric drive systems, providing expert technical solutions for both.",
            "For owners of the turbocharged Si4 and SD4 models, we offer precision turbocharger rebuilds and boost system calibrations. We utilize advanced smoke testing and live data analysis to identify subtle efficiency leaks, restoring the snappy acceleration and smooth power delivery that the Evoque is famous for."
          ],
          image: "/13r.jpeg",
          imageLeft: false
        }
      ]}
      servicesContent={[
        {
          title: "Evoque Engine Rebuild",
          slug: "engine-rebuild",
          text: "Technical overhaul of Ingenium and SD4 engines using genuine OEM JLR components."
        },
        {
          title: "Timing Chain Service",
          slug: "timing-chain-replacement",
          text: "Specialist timing chain and guide replacement to resolve Ingenium rattling and prevent failure."
        },
        {
          title: "Turbo Repair & Fitting",
          slug: "turbo-replacement",
          text: "Precision turbocharger diagnostics and replacement for all Evoque diesel and petrol variants."
        }
      ]}
      reviews={[
        {
          name: "Sarah Jenkins",
          rating: 5,
          text: "Range Rover Garage saved my Evoque! The timing chain was rattling badly and the dealer was quoting a fortune. These guys did it for a fair price with better service. The car is now whisper quiet.",
          date: "12 April 2024",
          engineCode: "2.0 Ingenium"
        },
        {
          name: "Thomas L.",
          rating: 5,
          text: "Excellent service on my 2.2 SD4 Evoque. Full engine rebuild after a major failure. They really know their stuff and the communication was top notch. Highly recommended.",
          date: "02 March 2024",
          engineCode: "2.2 SD4"
        },
        {
          name: "Emily R.",
          rating: 5,
          text: "Professional, efficient, and clearly the experts. They diagnosed a complex turbo issue on my Evoque in minutes. The car drives like new again. Thank you Range Rover Garage!",
          date: "20 January 2024",
          engineCode: "2.0 TD4"
        }
      ]}
      faqs={[
        {
          question: "What is the common timing chain issue in the Range Rover Evoque Ingenium engine?",
          answer: "The 2.0L Ingenium engine often suffers from timing chain stretch, causing a rattling sound and potential engine failure. We use uprated, reinforced guides and the latest chain revisions to provide a permanent technical solution."
        },
        {
          question: "Can you fix the turbocharger failure on the Range Rover Evoque?",
          answer: "Yes, turbocharger failure is a known issue across the TD4 and Si4 ranges. We provide precision turbo rebuilds and replacements, ensuring that the oil feed lines are also cleared to prevent repeat failures."
        },
        {
          question: "Is the Range Rover Evoque 2.2 SD4 engine reliable?",
          answer: "The early 2.2L SD4 is one of JLR's more robust units, but it requires regular cam belt changes and EGR system cleaning. We provide specialized maintenance to keep these rugged engines running smoothly."
        },
        {
          question: "Do you offer nationwide collection for Evoque engine rebuilds?",
          answer: "We offer a turnkey nationwide collection and delivery service. We can safely transport your Evoque from any location in the UK to our specialist engineering facility in Grays for major repair work."
        },
        {
          question: "How much does it cost to replace an Evoque engine?",
          answer: "Costs vary depending on whether you choose a new, reconditioned, or low-mileage used unit. We provide transparent, competitive quotes that include full fitting, programming, and warranty."
        },
        {
          question: "What warranty is provided on specialist Evoque engine services?",
          answer: "All major engine work at Range Rover Garage comes with a standard 6-month or 6,000-mile warranty. We also offer extended protection plans of up to 24 months for complete long-term peace of mind."
        }
      ]}
    />
  );
}
