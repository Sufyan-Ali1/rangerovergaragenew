import ContentSection from "@/components/areas-components/ContentSection";
import FAQ from "@/components/areas-components/FAQ";
import HeroSaction from "@/components/areas-components/HeroSaction";
import SEOSaction from "@/components/areas-components/SEOSaction";
import ContentSactionData from "@/lib/areas-data/ContentSaction.json";
import FAQ_data from "@/lib/areas-data/FAQ.json";
import hero_data from "@/lib/areas-data/HeroSaction.json"
import SEOSactionData from "@/lib/areas-data/SEOSaction.json"
import Map  from "@/components/areas-components/Map";
import Areas from "@/components/areas-components/Areas";
import areas_data from "@/lib/areas-data/Areas.json"
export default function areas(){
    return(
        <div className="flex flex-wrap w-full">
            <div className="w-full">
<HeroSaction data={hero_data} />
<Areas areas_data={areas_data} />
<ContentSection data={ContentSactionData}/>
<SEOSaction seoSectionsData={SEOSactionData} />
<FAQ faqData={FAQ_data} />



<Map />
            </div>

        </div>
    )
}