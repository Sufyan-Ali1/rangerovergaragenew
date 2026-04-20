import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | Range Rover & Land Rover Engine Specialists",
  description: "Read what our customers say about our specialist engine rebuilds, timing chain replacements, and JLR diagnostics. UK's leading JLR independent garage.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
