import React from 'react';
import { Star, ExternalLink, ShieldCheck, Info, MessageSquare, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA, CLINIC_INFO } from '../data/clinicData';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Big Rating */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 uppercase tracking-wider">
            <span>Verified Patient Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            What Our Patients Say
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Patient experiences shared on our Google Business Profile reflect our commitment to dental care in Vikas Nagar, Lucknow.
          </p>

          {/* Prominent Rating Card */}
          <div className="inline-flex items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm mx-auto">
            <div className="flex items-center gap-1.5">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                4.9
              </span>
              <div className="flex flex-col items-start ml-1">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Out of 5.0</span>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200" />

            <div className="text-left">
              <div className="text-sm sm:text-base font-bold text-slate-900">
                {CLINIC_INFO.reviewCount} Google Reviews
              </div>
              <div className="text-xs text-teal-700 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Patient Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-200/60 text-teal-800 font-bold text-xs flex items-center justify-center">
                      {rev.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">
                        {rev.author}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {rev.date} · {rev.source}
                      </div>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="text-xs font-semibold text-teal-800 bg-teal-50/70 px-2.5 py-1 rounded-md inline-block">
                  Theme: {rev.feedbackTheme}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-slate-400">
                  <ThumbsUp className="w-3.5 h-3.5" /> Helpful Patient Feedback
                </span>
                <span className="text-[11px] text-teal-700 font-medium">Selected Google Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency & Complete History Notice */}
        <div className="mt-10 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Transparent Review Policy:</strong> The testimonials shown above are selected summaries reflecting patient themes from our Google Business Profile. While most feedback is overwhelmingly positive (4.9★ average), patient experiences and healing responses vary by individual anatomy and procedure complexity (including endodontic/RCT cases). We encourage all prospective patients to inspect our complete, unedited public review history on Google.
            </div>
          </div>
        </div>

        {/* Dedicated Google Reviews CTA Box */}
        <div className="mt-12 bg-gradient-to-r from-teal-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white text-center shadow-lg max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-teal-200 border border-white/15">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Public Patient Community Feedback</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              See What Our Patients Are Saying
            </h3>

            <div className="flex items-center justify-center gap-2 text-amber-400 py-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="text-lg font-bold text-white ml-2">4.9★ on Google</span>
              <span className="text-slate-300 text-sm">({CLINIC_INFO.reviewCount} Reviews)</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Read authentic feedback directly on Google Maps and browse reviews from Lucknow residents who have visited our Vikas Nagar clinic.
            </p>

            <div className="pt-2">
              <a
                href={CLINIC_INFO.googleReviewsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md"
              >
                <span>View All Google Reviews</span>
                <ExternalLink className="w-4 h-4 text-teal-700" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
