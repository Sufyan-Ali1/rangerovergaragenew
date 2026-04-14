import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Range Rover Garage | Premium Range Rover Specialists UK",
  description: "Range Rover Specialists - The UK's leading experts for Range Rover and Land Rover servicing, repairs, and engine rebuilds.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import ExpertCTA from "@/components/ExpertCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <HowItWorks />
        <ExpertCTA />
        <Footer />
      </body>
    </html>
  );
}


