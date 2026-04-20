import { Metadata } from "next";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import GetQuoteForm from "@/components/GetQuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Engine Quote | Specialist Range Rover Repairs",
  description: "Request a free, no-obligation quote for your Range Rover or Land Rover engine repair, rebuild, or replacement. Fast DVLA-verified lookup.",
  alternates: {
    canonical: "/get-quote",
  },
};

export default function GetQuotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    }>
      <GetQuoteForm />
    </Suspense>
  );
}
