import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Specialist Engine Quote | Range Rover Garage",
  description: "Request a free, no-obligation quote for your Range Rover or Land Rover engine rebuild, repair, or replacement. Fast, transparent pricing.",
  alternates: {
    canonical: "/get-quote",
  },
};

export default function GetQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
