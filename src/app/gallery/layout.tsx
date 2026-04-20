import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Range Rover & Land Rover Engine Restoration",
  description: "View our portfolio of engine rebuilds, restorations, and specialist repairs. See the quality of work performed by our master technicians.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
