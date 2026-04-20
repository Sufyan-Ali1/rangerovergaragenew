"use client";

import ModelPageTemplate from "@/components/ModelPageTemplate";

export default function SportSVRPage() {
  return (
    <ModelPageTemplate
      modelName="Range Rover Sport SVR"
      modelCode="Special Vehicle Operations"
      heroImage="/8r.jpeg"
      engineCodes={["5.0L V8 Supercharged", "575PS", "550PS"]}
      introContent={[
        "The Range Rover Sport SVR is the pinnacle of SUV performance, powered by the legendary 5.0L Supercharged V8 engine. This masterpiece of engineering delivers supercar-levels of power, but its high-performance nature demands a level of technical precision that goes far beyond standard maintenance within the [Range Rover](/engines/range-rover) range.",
        "Range Rover Garage is the UK's leading independent specialist for the SVR powerplant. We understand the unique thermal and mechanical stresses placed on the 5.0L V8, providing master-level [rebuilds](/services/engine-rebuild), supercharger restoration, and [high-performance tuning](/services/engine-repair) solutions that preserve the SVR's extraordinary capabilities."
      ]}
      technicalContent={[
        {
          title: "The 5.0L V8 Supercharged Authority",
          text: [
            "The heart of the SVR is the AJ133 5.0L Supercharged V8—an engine we know intimately. We specialize in resolving the common timing chain tensioner failures and cooling system vulnerabilities that can affect these high-strung units. Our engineering process involves using uprated JLR components and precision timing tools to ensure perfect mechanical synchronization.",
            "We also provide specialized supercharger snout rebuilds, addressing the common 'clattering' sound caused by coupler wear. By restoring the supercharger to factory-fresh efficiency, we ensure the SVR maintains its relentless acceleration and signature exhaust note. Every SVR engine we service is treated as a high-performance asset."
          ],
          image: "/13r.jpeg",
          imageLeft: true
        },
        {
          title: "Cooling & Thermal Management",
          text: [
            "Thermal management is critical for the SVR, especially under spirited driving conditions. We provide specialized cooling system overhauls, including high-capacity water pump replacements and precision-flushed radiators. We utilize advanced thermal imaging and live data monitoring to ensure your SVR stays within optimal temperature ranges.",
            "Our diagnostic approach for the SVR includes a complete evaluation of the active exhaust systems and drivetrain integration. We ensure that the engine's incredible power is perfectly managed by the vehicle's electronic systems, providing a seamless and exhilarating driving experience that honors the Special Vehicle Operations heritage."
          ],
          image: "/15r.jpeg",
          imageLeft: false
        }
      ]}
      servicesContent={[
        {
          title: "SVR Engine Rebuild",
          slug: "engine-rebuild",
          text: "Master-level restoration of the 5.0L Supercharged V8 using precision-machined OEM parts."
        },
        {
          title: "Supercharger Restoration",
          slug: "turbo-replacement",
          text: "Technical rebuild of the Eaton supercharger system to restore factory boost and efficiency."
        },
        {
          title: "Timing Chain Mastery",
          slug: "timing-chain-replacement",
          text: "Critical timing chain and guide replacement using reinforced JLR components for the V8 range."
        }
      ]}
      reviews={[
        {
          name: "Benedict Thorne",
          rating: 5,
          text: "The only place I trust with my SVR. They performed a full supercharger rebuild and timing chain service. The engine is now whisper quiet at idle and absolutely savage under load. Expert knowledge.",
          date: "20 April 2024",
          engineCode: "5.0L V8 S/C"
        },
        {
          name: "S. Richardson",
          rating: 5,
          text: "Range Rover Garage fixed a complex cooling issue on my SVR that the dealer couldn't solve. Their technical depth and passion for the SVO brand is clear. Professional and highly recommended.",
          date: "05 March 2024",
          engineCode: "5.0L V8 S/C"
        },
        {
          name: "Dominic West",
          rating: 5,
          text: "Outstanding service. Full rebuild on my SVR engine after a major failure. They kept me updated with photos throughout. The car runs perfectly and the 24-month warranty is a huge plus.",
          date: "15 January 2024",
          engineCode: "5.0L V8 S/C"
        }
      ]}
      faqs={[
        {
          question: "What is the primary cause of engine failure in the Range Rover Sport SVR?",
          answer: "The 5.0L Supercharged V8 commonly faces cooling system failures (water pump/coolant pipes) and timing chain tensioner wear. Our technical rebuilds address these issues by using uprated aluminum components to ensure maximum thermal stability."
        },
        {
          question: "Can you fix the supercharger rattle on the SVR?",
          answer: "Yes, we provide specialized supercharger snout rebuilds. We replace the worn coupler and bearings with high-performance units, restoring the smooth boost and quiet idle your SVR deserves."
        },
        {
          question: "Does an engine rebuild affect the SVR's performance?",
          answer: "A master-level rebuild from Range Rover Garage often improves performance. By precision-balancing the internal components and optimizing the supercharger, we restore the 575PS output to its factory-peak levels."
        },
        {
          question: "Do you use Genuine JLR parts for SVR engine work?",
          answer: "Exclusively. For a high-performance asset like the SVR, we only utilize Genuine JLR parts or superior engineering-grade alternatives that meet the extreme demands of the 5.0L Supercharged V8."
        },
        {
          question: "How long does a full SVR engine rebuild take?",
          answer: "Due to the complexity of the SVO-tuned V8, a full rebuild typically takes 14-21 working days. This includes meticulous technical assembly and extensive high-load dyno-simulation testing."
        },
        {
          question: "Is nationwide recovery available for SVR models?",
          answer: "Yes, we provide secure, fully-insured nationwide recovery specifically for SVO models. We handle your SVR with the utmost care, ensuring it is transported by specialists to our Grays facility."
        }
      ]}
    />
  );
}
