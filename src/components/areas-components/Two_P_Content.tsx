import Link from "next/link";

interface SEOContentItem {
  title?: string;
  titleHighlight?: string;
  paragraph?: string[];
}

interface SEOContentProps {
  seoContent?: SEOContentItem[];
}

export default function SEOContent({
  seoContent = [],
}: SEOContentProps) {

  const renderWithLinks = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);

    return parts.map((part, i) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);

      if (match) {
        return (
          <Link
            key={i}
            href={match[2]}
            className="text-primary hover:underline font-bold"
          >
            {match[1]}
          </Link>
        );
      }

      return part;
    });
  };

  if (!seoContent.length) {
    return null;
  }

  return (
    <div className="px-5 md:px-12 ">
    <section className="mt-32 py-20 bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] border border-slate-200 dark:border-slate-800/50 relative overflow-hidden">

      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {seoContent.map((section, index) => (

            <div key={index} className="space-y-8">

              <h3 className="text-3xl font-heading font-black text-slate-900 dark:text-white uppercase tracking-tight leading-tight">

                {section.title}

                {" "}

                <span className="text-primary italic">
                  {section.titleHighlight}
                </span>

              </h3>

            {(section.paragraph ?? []).map(
  (pgraph, Index) => (
    <p
      key={Index}
      className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed font-medium"
    >
      {renderWithLinks(pgraph)}
    </p>
  )
)}

            </div>

          ))}

        </div>

      </div>

    </section>
    </div>
  );
}