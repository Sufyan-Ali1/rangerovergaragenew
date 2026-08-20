import FAQ from "@/components/areas-components/FAQ";
import HeroSaction from "@/components/areas-components/HeroSaction";
import SEOSaction from "@/components/areas-components/SEOSaction";
import Map_areas from "@/components/areas-components/Map_areas";
import Services from "@/components/areas-components/Services";
import ServiceData from "@/lib/areas-data/ServicesData.json"
import areas_data from "@/lib/areas-data/Areas.json";
import { notFound } from "next/navigation";
import SEOContent from "@/components/areas-components/SEOContent"
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

                <HeroSaction data={area.HaroSaction} />

                <SEOSaction
                    seoSectionsData={area.SEOSaction}
                />

                <Services
                    services={ServiceData}
                />
            <SEOContent seoContent={area.seoContent} />

                <FAQ
                    faqData={area.FAQ}
                />

                <Map_areas areasData={area} />

            </div>
        </div>
    );
}