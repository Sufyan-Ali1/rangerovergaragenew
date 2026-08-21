import FAQ from "@/components/areas-components/FAQ";
import HeroSection from "@/components/areas-components/HeroSection";
import ImageContentSection from "@/components/areas-components/ImageContentSection";
import Map_areas from "@/components/areas-components/Map_areas";
import Services from "@/components/areas-components/Services";
import ServiceData from "@/lib/areas-data/ServicesData.json"
import areas_data from "@/lib/areas-data/Areas.json";
import { notFound } from "next/navigation";
import Two_P_Content from "@/components/areas-components/Two_P_Content"
import HowItWorks from "@/components/HowItWorks";
import ExpertCTA from "@/components/ExpertCTA";
     
export default async function AreasDetail({ params }) {
    const { slug } = await params;

    const area = areas_data.find(
        (item) => item.slug === slug
    );

   if (!area) {
        notFound();
    }

    return (
        <div className="flex flex-wrap w-full">
            <div className="w-full">

                <HeroSection data={area.HaroSaction} />

                <ImageContentSection
                    ImageContentSectionData={area.SEOSaction}
                />

                <Services
                    services={ServiceData}
                />
            <Two_P_Content seoContent={area.seoContent} />

                <FAQ
                    faqData={area.FAQ}
                />

                <Map_areas areasData={area} />
                <HowItWorks />
        <ExpertCTA />

            </div>
        </div>
    );
}