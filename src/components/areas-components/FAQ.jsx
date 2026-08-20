"use client";

import { ArrowRight } from "lucide-react";

export default function FAQ({faqData}) {
  const { section, faqs } = faqData;

  return (
    <section className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">
          {section.eyebrow}
        </h2>

        <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
          {section.title}{" "}
          <span className="text-primary italic">{section.highlight}</span>
        </h3>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="group bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800/50 overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 cursor-pointer list-none">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight group-open:text-primary transition-colors">
                {faq.q}
              </h4>

            
            </div>

            <div className="px-6 pb-6 text-slate-600 dark:text-gray-400 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}