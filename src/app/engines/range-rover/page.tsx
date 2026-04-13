import React from "react";
import { Metadata } from "next";
import BrandTemplate from "@/components/BrandTemplate";

export const metadata: Metadata = {
  title: "Range Rover Specialist Services | Premium Care UK",
  description: "Expert maintenance and performance engineering for the full Range Rover line-up. Luxury care for your luxury vehicle.",
};

export default function RangeRoverPage() {
  return (
    <BrandTemplate
      title="Range Rover Specialist Services"
      description="Expert maintenance and performance engineering for the full Range Rover line-up. luxury care for your luxury vehicle."
      heroImage="/5.webp"
      models={["Vogue (L405/L460)", "Range Rover Sport", "Velar", "Evoque"]}
      content={[
        "Range Rover represents the absolute pinnacle of luxury performance SUVs, and their sophisticated powerplants require a specialized level of engineering care that only 20+ years of dedicated service can provide. At Vogue Technics, we have mastered the art of restoring and maintaining the full spectrum of Range Rover engines, from the classic V8s to the modern Ingenium and SDV8 variants.",
        "The iconic Range Rover Vogue (L405 and L460) demands precision diagnostics and surgical repair methods. We specialize in the complex 3.0L TDV6 and SDV6 engines, addressing the well-documented crankshaft and bottom-end bearing issues that often lead to catastrophic failure if not managed by an expert.",
        "For owners of the high-performance Range Rover Sport (L494), we offer specialized performance-matched engine rebuilds. Our process involves a complete technical strip-down, where every component is inspected for wear and replaced with uprated, heavy-duty parts that go beyond the original manufacturer's specifications.",
        "Our facility in Grays, Essex, is equipped with main-dealer level JLR diagnostic platforms, including Pathfinder and TOPIx Cloud systems. This infrastructure allows us to perform deep-system coding, software updates, and mechanical integrations that most independent garages simply cannot match.",
        "The high-end 4.4L SDV8 engine is one of the most capable diesel powerplants ever produced, yet it requires technical finesse to maintain. We provide comprehensive restoration services for these units, focusing on oil pump integrity and cooling system optimization to ensure sustained luxury performance.",
        "We utilize only genuine Land Rover OEM parts for all our engine services. This commitment to quality ensures that your Range Rover maintains its prestige and resale value, while our standard 6-month warranty (with 24-month extended options) provides the ultimate peace of mind.",
        "Our expertise extends to the sleek Range Rover Velar and the compact Evoque. Whether you are dealing with a complex turbocharger failure or a persistent cooling issue, our 20+ years of JLR heritage means we have already solved the most challenging failures thousands of times before.",
        "Choosing Vogue Technics means choosing a partner who understands that your Range Rover is more than just a vehicle—it's a precision-engineered asset. We offer a turnkey service, including nationwide collection and delivery, ensuring that your luxury SUV returns to you in factory-new condition in exactly the way you expect."
      ]}
      specialistAreas={[
        "SDV6 & SDV8 Engine Rebuilds",
        "Air Suspension Calibration",
        "Sophisticated ECU Diagnostics",
        "Premium Scheduled Maintenance"
      ]}
    />
  );
}
