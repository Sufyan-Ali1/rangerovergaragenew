import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ExternalLink,
  CarFront,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Link from "next/link";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=UNIT+1+Hedley+Avenue+Grays+RM20+4EL+UK";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=UNIT+1+Hedley+Avenue+Grays+RM20+4EL+UK&output=embed";

const locationInfo = [
  {
    icon: MapPin,
    title: "ADDRESS",
    content: ["UNIT 1 Hedley Avenue, Grays", "RM20 4EL, United Kingdom"],
    href: MAP_URL,
  },
  {
    icon: Phone,
    title: "PHONE",
    content: ["01708 592377"],
    href: "tel:01708592377",
    expand:1
  },
  {
    icon: Mail,
    title: "EMAIL",
    content: ["info@voguevans.co.uk"],
  
    href: "mailto:info@voguevans.co.uk",
    expand:1
  },
  {
    icon: Clock3,
    title: "OPENING HOURS",
    content: [
      "Mon - Fri: 8:30 AM - 6:00 PM",
      "Sat: 9:00 AM - 2:00 PM | Sun: Closed",
    ],
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "EXPERT TECHNICIANS",
    description: "Specialist in Range Rover service & repairs",
  },
  {
    icon: Wrench,
    title: "GENUINE PARTS",
    description: "We use only Genuine OEM Parts",
  },
  {
    icon: ShieldCheck,
    title: "6 MONTHS WARRANTY",
    description: "Every service comes with 6 Months Warranty",
  },
  {
    icon: CarFront,
    title: "CUSTOMER CARE",
    description: "Dedicated support for all your needs",
  },
];

export default function Map() {
  return (
    <section className="w-full bg-white px-4 py-10 px-6 lg:px-12">
      <div className="mx-auto max-w-[1470px]">
        {/* Main Location Section */}
        <div className="overflow-hidden rounded-[28px] bg-[#0d1629] py-3 px-5 shadow-2xl ">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {/* ================= LEFT SIDE ================= */}
            <div className="flex flex-col justify-center">
              {/* Small Heading */}
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[1px] w-10 bg-[#cda553]" />

                <span className="text-[13px] font-semibold tracking-[2px] text-[#cda553]">
                  OUR LOCATION
                </span>

                <span className="h-[1px] w-8 bg-[#cda553]" />
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-1px] text-white sm:text-5xl lg:text-[52px]">
                Find Us.
                <br />
                <span className="text-[#cda553]">We're</span> Here To Help.
              </h2>

              {/* Description */}
              <p className="mt-3 max-w-[500px] text-base leading-7 text-slate-300 sm:text-lg">
                Visit our garage for expert Range Rover servicing,
                diagnostics and repairs.
              </p>

              {/* Information Cards */}
              <div className="mt-4 space-y-3   flex flex-wrap">
                {locationInfo.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div className={`items-center px-2 ${item.expand ? "w-full lg:w-1/2" : "w-full"}`} key={index}>
        <Link
 
  href={item.href ? `${item.href}` : ""}
 
  className={` flex  flex-wrap h-full gap-2 rounded-2xl border border-white/[0.04] bg-[#141f34] w-[100%] py-2 transition-all duration-300 hover:bg-[#19263d] px-3 `}


                    >
                      {/* Icon */}
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#cda553]/50 bg-[#0d1629]">
                        <Icon
                          size={27}
                          strokeWidth={1.8}
                          className="text-[#cda553]"
                        />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <p className="mb-1 text-[11px] font-semibold tracking-[1.5px] text-[#cda553]">
                          {item.title}
                        </p>

                        {item.content.map((text, textIndex) => (
                          <p
                            key={textIndex}
                            className="text-sm leading-6 break-words text-white sm:text-[15px]"
                          >
                            {text}
                          </p>
                        ))}
                      </div>

                    
                    </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ================= RIGHT SIDE / MAP ================= */}
            <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-white shadow-xl sm:min-h-[580px]">
              {/* Google Map */}
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Vogue Vans Location"
                className="absolute inset-0 h-full w-full"
              />

              {/* Bottom Location Card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-[20px] bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.18)] sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  {/* Car Icon */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0d1629]">
                    <CarFront
                      size={30}
                      strokeWidth={1.7}
                      className="text-[#cda553]"
                    />
                  </div>

                  {/* Address */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-extrabold text-[#101a2d]">
                      RANGE ROVER{" "}
                      <span className="text-[#cda553]">GARAGE</span>
                    </h3>

                    
                  </div>

                  {/* Maps Button */}
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#cda553] px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#b88f3e] hover:shadow-xl"
                  >
                    <ExternalLink size={18} />
                    OPEN IN MAPS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FEATURES BAR ================= */}
        <div className="mt-8 overflow-hidden rounded-[28px] bg-[#0d1629] px-6 py-7 shadow-xl sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-4 py-5 first:pt-0 last:pb-0 sm:px-5 sm:py-3 lg:px-7 lg:first:pl-0 lg:last:pr-0"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#cda553]/50">
                    <Icon
                      size={25}
                      strokeWidth={1.7}
                      className="text-[#cda553]"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-sm font-bold tracking-[0.5px] text-[#cda553]">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm leading-5 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}