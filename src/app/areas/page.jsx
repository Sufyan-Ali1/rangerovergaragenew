import ContentSection from "@/components/areas-components/ContentSection";
import FAQ from "@/components/areas-components/FAQ";
import HeroSection from "@/components/areas-components/HeroSection";
import ImageContentSection from "@/components/areas-components/ImageContentSection";
import ContentSectionData from "@/lib/areas-data/ContentSection.json";
import FAQ_data from "@/lib/areas-data/FAQ.json";
import hero_data from "@/lib/areas-data/HeroSection.json";
import ImageContentSectionData from "@/lib/areas-data/ImageContentSectionData.json";
import MapSection  from "@/components/MapSection";
import Areas from "@/components/areas-components/Areas";
import areas_data from "@/lib/areas-data/Areas.json";
import HowItWorks from "@/components/HowItWorks";
import ExpertCTA from "@/components/ExpertCTA";

export default function areas(){
    return(
        <div className="flex flex-wrap w-full">
            <div className="w-full">
<HeroSection data={hero_data} />
<Areas areas_data={areas_data} />
<ContentSection data={ContentSectionData}/>
<ImageContentSection ImageContentSectionData={ImageContentSectionData} />
<FAQ faqData={FAQ_data} />

<HowItWorks />
        <ExpertCTA />

< MapSection  />
            </div>

        </div>
    )
}