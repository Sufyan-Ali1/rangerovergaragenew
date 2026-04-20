import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Range Rover Garage - Grays, Essex",
  description: "Get in touch with our specialist team at our Grays, Essex workshop. We're happy to answer any questions about your Range Rover or Land Rover engine.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
