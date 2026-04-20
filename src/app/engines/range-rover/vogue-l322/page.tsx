"use client";

import ModelPageTemplate from "@/components/ModelPageTemplate";

export default function VogueL322Page() {
  return (
    <ModelPageTemplate
      modelName="Range Rover Vogue Mk3"
      modelCode="L322"
      heroImage="/1r.webp"
      engineCodes={["3.6 TDV8", "4.4 TDV8", "3.0 TD6", "4.2 S/C V8", "5.0 S/C V8"]}
      introContent={[
        "The L322 Range Rover Vogue is widely considered the peak of Range Rover design—a vehicle that combined timeless engineering with legendary British luxury. As these modern classics age, their complex powerplants require specialized, master-level [engine maintenance](/services/engine-repair) to maintain their flagship performance within the [Range Rover](/engines/range-rover) portfolio.",
        "At Range Rover Garage, we specialize in the complete [engine restoration](/services/engine-rebuild) and technical maintenance of the L322 range. From the early 3.0L TD6 to the high-performance 5.0L Supercharged V8s, our technicians bring decades of hands-on experience to every [mechanical repair](/services/engine-repair)."
      ]}
      technicalContent={[
        {
          title: "The TDV8 Specialists",
          text: [
            "The 3.6L and 4.4L TDV8 engines are the backbone of the late L322 generation. While exceptionally powerful, they are prone to [turbocharger failure](/services/turbo-replacement) and exhaust manifold warping. Our engineering process involves a complete technical evaluation of the twin-turbo systems, using precision-calibrated equipment to ensure optimal boost pressure and thermal efficiency.",
            "We provide specialized solutions for the 4.4L TDV8 oil leak issues and cooling system vulnerabilities. By using uprated seals and high-performance cooling components, we extend the operational lifespan of these magnificent powerplants far beyond original factory expectations. Every TDV8 that passes through our workshop undergoes a rigorous chemical cleaning and pressure testing cycle."
          ],
          image: "/13r.jpeg",
          imageLeft: true
        },
        {
          title: "V8 Supercharged Mastery",
          text: [
            "For owners of the 4.2L and 5.0L Supercharged V8 models, we offer a level of technical expertise that matches the performance of the vehicle. These engines are marvels of power, but they require precision timing and cooling to prevent catastrophic failure. We specialize in supercharger snout rebuilds and timing chain replacements using reinforced JLR components.",
            "Our diagnostic approach for the L322 V8 range includes comprehensive module analysis and live data monitoring. We ensure that the ECU mapping is perfectly synchronized with the mechanical state of the engine, providing a smooth, linear power delivery that restores the effortless acceleration these models are famous for."
          ],
          image: "/16r.jpeg",
          imageLeft: false
        }
      ]}
      servicesContent={[
        {
          title: "L322 Engine Rebuild",
          slug: "engine-rebuild",
          text: "Complete strip-down and re-engineering of TDV8 and V8 powerplants using genuine OEM parts."
        },
        {
          title: "Turbo Restoration",
          slug: "turbo-replacement",
          text: "Precision turbocharger replacement and calibration for the 3.6 and 4.4 TDV8 twin-turbo systems."
        },
        {
          title: "Timing Chain Service",
          slug: "timing-chain-replacement",
          text: "Critical timing chain and guide replacement for the 5.0L Supercharged V8 engines."
        }
      ]}
      reviews={[
        {
          name: "James Whitaker",
          rating: 5,
          text: "The only place I'd trust with my 4.4 TDV8. They fixed a complex oil leak and replaced both turbos. The car runs like it just left the showroom. Incredible technical knowledge of the L322 platform.",
          date: "14 April 2024",
          engineCode: "4.4 TDV8"
        },
        {
          name: "Robert M.",
          rating: 5,
          text: "Full rebuild on my 5.0L Supercharged Vogue. The timing chain was rattling badly, but Range Rover Garage handled the entire process professionally. Transparent pricing and great communication.",
          date: "02 March 2024",
          engineCode: "5.0 S/C V8"
        },
        {
          name: "Alistair G.",
          rating: 5,
          text: "The technical depth here is incredible. They diagnosed a complex oil pressure issue on my TDV8 that three other garages missed. My L322 is now back to its best.",
          date: "15 January 2024",
          engineCode: "3.6 TDV8"
        },
        {
          name: "Simon T.",
          rating: 5,
          text: "Saved my 3.6 TDV8 from a major failure. Their diagnosis was spot on where others were just guessing. Highly recommend for any L322 owner who values quality.",
          date: "20 January 2024",
          engineCode: "3.6 TDV8"
        }
      ]}
      faqs={[
        {
          question: "What are the common failure points in the Range Rover L322 TDV8 engine?",
          answer: "The 3.6L and 4.4L TDV8 engines commonly face turbocharger failure due to oil starvation and exhaust manifold warping. At Range Rover Garage, we use uprated gaskets and precision-balanced turbos to address these factory weaknesses, ensuring long-term reliability for your L322."
        },
        {
          question: "How often should I service my Range Rover L322 5.0L Supercharged V8?",
          answer: "For the high-performance 5.0L S/C V8, we recommend a specialist service every 6,000 to 8,000 miles. Regular oil changes are critical to prevent timing chain guide wear, which is a documented issue on this specific AJ133 engine platform."
        },
        {
          question: "Can you fix the timing chain rattle on the L322 V8 engines?",
          answer: "Yes, we are specialists in L322 timing chain replacement. We use the latest revised JLR timing guides and tensioners to permanently resolve the rattle and prevent catastrophic engine synchronization failure."
        },
        {
          question: "Is the early 3.0 TD6 engine in the L322 reliable?",
          answer: "The M57 3.0 TD6 is a robust engine but often suffers from gearbox-related strain and injector failure. We provide full technical support for this unit, including fuel system overhauls and precision injector testing."
        },
        {
          question: "Do you offer nationwide collection for L322 engine rebuilds?",
          answer: "Absolutely. We provide secure, fully-insured nationwide collection for any Range Rover L322 requiring major engine work. This turnkey service ensures your modern classic is handled by JLR experts from start to finish."
        },
        {
          question: "What warranty do you provide on an L322 engine restoration?",
          answer: "All our L322 engine rebuilds come with a standard 6-month or 6,000-mile warranty. We also offer extended protection plans of up to 24 months, providing you with main-dealer level confidence in our independent engineering."
        }
      ]}
    />
  );
}
