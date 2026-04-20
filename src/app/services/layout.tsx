import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialist Engine Services | Range Rover & Land Rover Experts",
  description: "Explore our full range of specialist engine services, from complete rebuilds and timing chain replacements to turbo repairs and engine swaps. UK's leading JLR specialists.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
