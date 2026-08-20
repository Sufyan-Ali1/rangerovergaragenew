import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Phone,
  ShieldCheck,
} from "lucide-react";


const renderWithLinks = (text) => text;

export default function ServiceContent({data}) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary"></span>
                Detailed Overview
              </h2>
              <h3 className="text-4xl font-heading font-bold text-slate-900 dark:text-white mb-8">
                Specialist Care & Technical Precision
              </h3>
              <p className="text-lg text-slate-600 dark:text-gray-300 mb-8 leading-relaxed whitespace-pre-wrap italic border-l-4 border-primary pl-6">
                {renderWithLinks(data.content)}
              </p>

              <div className="bg-slate-900 rounded-3xl p-8 text-white mb-12 border border-primary/20">
                <h4 className="text-xl font-bold mb-4 text-primary flex items-center gap-2 uppercase tracking-wider">
                  <ShieldCheck className="w-6 h-6" />
                  Warranty & Parts Excellence
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All our engine services and rebuilds are performed using{" "}
                  <strong>Genuine OEM Parts</strong> to ensure maximum
                  longevity and performance for your vehicle.
                </p>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <p className="font-bold text-lg mb-2">Standard Protection:</p>
                  <p className="text-gray-400 mb-6 italic">
                    Every service includes our comprehensive 6 Months or 6,000
                    Miles Warranty as standard.
                  </p>

                  <p className="font-bold text-lg mb-2">
                    Looking for extended coverage?
                  </p>
                  <p className="text-gray-400">
                    We also offer up to <strong>24 Months Warranty</strong>,
                    sourced directly from main dealers. Please note, this
                    option comes at a higher cost due to the extended
                    protection and premium coverage.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors group">
                <h4 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  Key Benefits
                </h4>
                <ul className="flex flex-col gap-5">
                  {data.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-gray-200 transition-colors"
                    >
                      <span className="text-primary font-bold">✓</span>
                      {benefit}
                    </li>
                  ))}
                  <li className="flex gap-4 text-slate-900 dark:text-white font-bold">
                    <span className="text-primary">✓</span>
                    Genuine OEM Parts Used
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors group">
                <h4 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  The Process
                </h4>
                <ul className="flex flex-col gap-5">
                  {data.process.map((step, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-gray-200 transition-colors"
                    >
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Models Content Section */}
            {data.modelsContent && (
              <div className="mt-16 bg-primary/5 rounded-[2.5rem] p-10 border border-primary/10">
                <h3 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                  {data.modelsContent.title}
                </h3>
                <div className="space-y-6">
                  {data.modelsContent.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed"
                    >
                      {renderWithLinks(p)}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Section */}
            {data.faqs && data.faqs.length > 0 && (
              <div className="mt-16">
                <h3 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-10">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  {data.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-primary/30 transition-colors"
                    >
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-start gap-3">
                        <span className="text-primary">Q:</span>
                        {faq.question}
                      </h4>
                      <p className="text-slate-600 dark:text-gray-400 leading-relaxed pl-8 border-l-2 border-primary/20">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-slate-900 text-white p-10 rounded-[2rem] border border-primary/20 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>

                <div className="relative z-10 text-center">
                  <h4 className="text-3xl font-heading font-black mb-8 uppercase tracking-tight">
                    Need a <br />
                    <span className="text-primary italic">Quote?</span>
                  </h4>

                  <div className="flex flex-col gap-4">
                    {/* Direct Link to Quote Form */}
                    <Link
                      href="/get-quote"
                      className="flex items-center justify-center gap-4 bg-primary text-white py-5 rounded-2xl font-heading font-black text-xl hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 uppercase tracking-widest"
                    >
                      Get Quote
                    </Link>

                    <div className="py-4">
                      <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] block mb-4">
                        Or Call Specialist
                      </span>
                      <a
                        href="tel:+441708592377"
                        className="flex items-center justify-center gap-4 text-white hover:text-primary transition-colors font-black text-xl tracking-wider mb-3"
                      >
                        <Phone className="w-5 h-5 text-primary" />
                        01708 592377
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 dark:text-white italic">
                    OEM Registered Specialist
                  </h5>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">
                    Main Dealer Sourced Parts
                  </p>
                </div>
              </div>

              {/* Reviews Card Section */}
              {data.reviews && data.reviews.length > 0 && (
                <div className="mt-8 space-y-4">
                  <h4 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 px-2">
                    Verified Client Reviews
                  </h4>

                  {data.reviews.map((review, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
                    >
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, starIdx) => (
                          <span
                            key={starIdx}
                            className={
                              starIdx < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      <p className="text-slate-600 dark:text-gray-400 text-sm italic mb-4 leading-relaxed">
                        "{review.text}"
                      </p>

                      <div className="flex justify-between items-end">
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white text-sm">
                            {review.name}
                          </p>
                          {review.model && (
                            <p className="text-primary text-[10px] font-bold uppercase">
                              {review.model}
                            </p>
                          )}
                        </div>
                        <p className="text-gray-400 text-[10px]">
                          {review.date}
                        </p>
                      </div>
                    </div>
                  ))}

                  <Link
                    href="/reviews"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all border border-slate-100 dark:border-slate-700 mt-2"
                  >
                    Explore More Reviews
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}