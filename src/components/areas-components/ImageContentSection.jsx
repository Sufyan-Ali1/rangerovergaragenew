import Image from "next/image";

export default function ImageContentSection({ImageContentSectionData}) {
  const { sections: ContentSections } = ImageContentSectionData;

  return (
    <section className="bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-12 py-24 space-y-24">
        {ContentSections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
              sec.imageLeft ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group shrink-0">
              <Image
                src={sec.image}
                alt={sec.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10 pointer-events-none">
                {sec.imageTitle && (
                  <h4 className="text-white font-heading font-bold text-2xl md:text-3xl mb-2 drop-shadow-md">
                    {sec.imageTitle}
                  </h4>
                )}

                {sec.imageSubtitle && (
                  <p className="text-gray-300 text-sm tracking-widest uppercase font-bold drop-shadow-md">
                    {sec.imageSubtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 dark:text-white leading-tight mb-8">
                {sec.title}{" "}
                {sec.titleHighlight && (
                  <span className="text-primary">{sec.titleHighlight}</span>
                )}
              </h3>

              <div className="space-y-6">
                {sec.text.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed font-medium"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}