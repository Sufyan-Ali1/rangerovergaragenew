import { MapPin } from "lucide-react";
import Link from "next/link";
export default function Map_areas({areasData})
{
    return(
        <div className="flex bg-[white] px-5 lg:px-15 py-7  items-stretch  flex-wrap">
           <div className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
            <span className="text-[#b8893d]">{areasData.name} Map </span>and Other Areas
           </div>
            <div className="lg:w-7/12 px-2 py-3 w-full md:w-1/2">
                <iframe
  src={areasData.map}
  width="100%"
  
  className="w-full h-full"
  style={{ border: 0, borderRadius:"10px" }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>
            </div>
             <div className="w-full lg:w-5/12 py-3 flex flex-wrap px-2 md:w-1/2">
             <div className="bg-[#f5f3ef] pb-7 p-4 rounded-xl">
            <div className="w-full flex flex-wrap gap-3">
          <MapPin className="text-primary text-[20]" />
                Other Areas
            </div>
            <div className="w-full font-bold text-xl">
                        Linked Pages
            </div>
            <div className="w-full">
                Browse the rest of our area pages and jump straight to the location you need.
            </div>
            <div className="w-full flex flex-wrap  justify-center">
                {areasData.areas.map((area,index)=>(
                          <Link
                key={area.slug}
               href={`/areas/${area.slug}`}
                className="group px-2 cursor-pointer w-full mt-3 xl:w-1/2 md:w-full flex min-h-[76px] "
              >
                <div className="items-center gap-2 flex flex-wrap w-full rounded-[18px] border-[2px] border-[#cda653] bg-[#101c32] px-3 text-left shadow-[0_8px_20px_rgba(16,28,50,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#16243e] hover:shadow-[0_14px_28px_rgba(16,28,50,0.22)]">
                {/* Location icon */}
                <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center">
                  <svg
                    viewBox="0 0 32 40"
                    className="h-[34px] w-[28px] transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2C8.268 2 2 8.268 2 16C2 26.5 16 38 16 38C16 38 30 26.5 30 16C30 8.268 23.732 2 16 2Z"
                      stroke="#D5AA52"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="4"
                      stroke="#D5AA52"
                      strokeWidth="2.5"
                    />
                  </svg>
                </span>

                <span className="text-[18px] font-semibold tracking-[-0.2px] text-white sm:text-[19px] md:text-[20px]">
                  {area.name}
                </span>
                </div>
              </Link>
                ))}
                <div className="flex flex wrap w-full justify-center">

                    <div className="w-full flex justify-center mt-6">
  <Link
    href="/areas"
    className="
      group
      inline-flex
      items-center
      justify-center
      gap-3
      px-8
      py-4
      rounded-full
      border-2
      border-[#9a7235]
     bg-[#101c32] 
      text-white
      font-bold
      text-lg
     
      transition-all
      duration-300
      hover:bg-[#9a7235]
      hover:border-[#9a7235]
      hover:shadow-[0_0_25px_rgba(154,114,53,0.35)]
    "
  >
    <span className="tracking-wide">View More Areas</span>

    <span
      className="
        flex
        items-center
        justify-center
        w-8
        h-8
        rounded-full
        bg-[#9a7235]
        text-white
        transition-all
        duration-300
        group-hover:translate-x-1
      "
    >
      →
    </span>
  </Link>
</div>
                </div>
                 
                    
                  


            </div>
            {areasData.viewmore && (
<div className="w-full p-4 flex justify-center">
<Link href={`/areas`} className=" mt-8" >
                   
<button
  className="
    group
    
    mx-auto
    flex
    items-center
    justify-center
    gap-3
    px-8
    py-3
    rounded-full
    border-2
    border-[#9a7235]
    bg-transparent
    text-[#1d3a2a]
    font-bold
    text-sm
    md:text-base
    transition-all
    duration-300
    hover:bg-[#1d3a2a]
    hover:text-white
    hover:border-[#1d3a2a]
    hover:shadow-[0_0_25px_rgba(154,114,53,0.45)]
  "
>
  <span className="tracking-wide">View More Areas</span>

  <span
    className="
      flex
      items-center
      justify-center
      w-8
      h-8
      rounded-full
      bg-[#9a7235]
      text-white
      transition-all
      duration-300
      group-hover:translate-x-1
    "
  >
    →
  </span>
</button>
</Link>
            </div>
            )}
            </div>
</div>
        </div>
    )
}