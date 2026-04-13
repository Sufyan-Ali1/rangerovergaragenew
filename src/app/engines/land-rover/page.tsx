import React from "react";
import { Metadata } from "next";
import BrandTemplate from "@/components/BrandTemplate";

export const metadata: Metadata = {
  title: "Land Rover Specialist Support | Specialist Care UK",
  description: "Dedicated specialist services for Land Rover Defender, Discovery, and more. Built for the rugged, maintained by experts.",
};

export default function LandRoverPage() {
  return (
    <BrandTemplate
      title="Land Rover Specialist Support"
      description="Dedicated specialist services for Land Rover Defender, Discovery, and more. Built for the rugged, maintained by experts."
      heroImage="/7.webp"
      models={["Defender (Classic & New L663)", "Discovery 4/5", "Discovery Sport", "Freelander"]}
      content={[
        "Land Rover vehicles are synonymous with rugged durability and global exploration, and their engines are built to withstand the most demanding conditions. With over 20 years of technical passion, Vogue Technics provides the specialized engineering support required to keep these hard-working machines performing at their legendary peak through every mile.",
        "The introduction of the JLR Ingenium 2.0L engine family brought new challenges to Land Rover maintenance. We are nationally recognized authorities in resolving Ingenium-specific issues, such as timing chain rattles and early-life turbocharger failures, using specialized JLR timing jigs and calibrated diagnostic tools.",
        "The legendary Defender (L663) and its classic predecessors are core to our repair identity. We offer specialized restoration services for Defender powerplants, focusing on reinforcing weak points and ensuring that the vehicle maintains its full off-road capability and uncompromising reliability for years to come.",
        "For Discovery 4 and 5 owners, we provide the UK's leading solution for 3.0L SDV6 'spun bearing' failures. Our engineering team installs precision-machined crankshafts and reinforced high-capacity oil pumps that resolve the inherent design weaknesses found in factory-standard components.",
        "Our technical process is one of the most thorough in the industry. Every Land Rover engine that enters our workshop undergoes a chemical deep-clean and a technical inspection that covers over 200 individual checkpoints, ensuring that no technical detail is missed during the rebuild process.",
        "We possess the unique knowledge required to maintain the versatile Discovery Sport and the Freelander 2. From resolving complex Haldex-related faults to standard engine reconditioning, we provide a dealership-level service at a transparent, independent, and competitive price point.",
        "Our workshop features ultra-modern JLR-specific diagnostic infrastructure, allowing us to perform main-dealer level module programming and software updates. This ensures that every mechanical repair is perfectly synchronized with the vehicle's sophisticated electronic control units.",
        "With 20+ years of proven results across the UK, we offer the ultimate engineering destination for Land Rover owners. From Grays to the furthest reaches of the nation via our secure collection service, we ensure your Land Rover is ready for its next 100,000 miles of adventure and endurance."
      ]}
      specialistAreas={[
        "Ingenium Diesel Performance",
        "All-Terrain System Maintenance",
        "Heavy-Duty Engine Repairs",
        "Chassis & Protection Services"
      ]}
    />
  );
}
