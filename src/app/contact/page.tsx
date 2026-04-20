import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Range Rover & Land Rover Specialist Essex",
  description: "Get in touch with our specialist team in Grays, Essex. We are the UK's leading independent experts for Range Rover and Land Rover engine repairs.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
