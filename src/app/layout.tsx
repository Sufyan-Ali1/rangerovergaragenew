import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://www.rangerover-garage.co.uk"),
  title: {
    default: "Range Rover Garage | UK's #1 Premium Range Rover Engine Specialists",
    template: "%s | Range Rover Garage"
  },
  description: "UK's leading Range Rover and Land Rover engine specialists. Expert engine rebuilds, timing chains, turbo repairs, and main-dealer diagnostics in Grays, Essex.",
  keywords: ["Range Rover Engine Rebuild", "Land Rover Specialist", "Range Rover Repair Essex", "JLR Engine Specialist", "Range Rover Timing Chain", "Land Rover Engine Replacement"],
  authors: [{ name: "Range Rover Garage" }],
  creator: "Range Rover Garage",
  publisher: "Range Rover Garage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Range Rover Garage | Premium Range Rover Specialists UK",
    description: "The UK's leading experts for Range Rover and Land Rover engine servicing, repairs, and rebuilds.",
    url: "https://www.rangerover-garage.co.uk",
    siteName: "Range Rover Garage",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Range Rover Garage | Premium Range Rover Specialists UK",
    description: "The UK's leading experts for Range Rover and Land Rover engine servicing, repairs, and rebuilds.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import ExpertCTA from "@/components/ExpertCTA";
import StructuredData from "@/components/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`} suppressHydrationWarning>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5RPPZ76H');`}
      </Script>
      <body className="min-h-screen bg-background text-foreground font-sans flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <HowItWorks />
        <ExpertCTA />
        <Footer />
        <StructuredData />
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5RPPZ76H"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}


