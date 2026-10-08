import React from 'react';
import { Calendar, Phone, CheckCircle2, Info, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FeaturedImplantProps {
  onOpenBooking: () => void;
}

export const FeaturedImplant: React.FC<FeaturedImplantProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-teal-950 rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-xl relative overflow-hidden">
          
          {/* Subtle background illumination */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Restorative Care · Lucknow Dental & Implant Center</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Restore Your Smile With Modern Dental Solutions
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Dental implants are modern restorative fixtures designed to replace missing teeth by providing a sturdy foundation for custom-crafted crowns. Unlike removable dentures, implants integrate with the jawbone to emulate natural tooth function and appearance.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Evaluation of Jawbone & Anatomy:</strong> A comprehensive diagnostic examination determines individual suitability and bone density.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Natural Chewing Stability:</strong> Restores biting strength and preserves facial contour and alignment.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Conservative Treatment Approach:</strong> Adjacent healthy teeth do not need to be ground down as required with conventional bridges.
                  </span>
                </div>
              </div>

              {/* Ethical Disclaimer Box */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-start gap-3 leading-relaxed">
                <Info className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Ethical Advisory:</strong> Suitability for dental implant placement varies significantly based on individual oral health, bone support, and medical history. Treatment timelines and outcomes are discussed thoroughly during your clinical consultation.
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-teal-50 active:bg-teal-100 rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 text-teal-700" />
                  <span>Book a Consultation</span>
                </button>

                <a
                  href={`tel:${CLINIC_INFO.phoneDial}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-all whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>Call 088876 04270</span>
                </a>
              </div>

            </div>

            {/* Right Graphic: Anatomical Implant Structure Diagram */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 space-y-5 text-center">
                <div className="text-xs uppercase tracking-wider text-teal-400 font-semibold">
                  Implant Anatomy Breakdown
                </div>

                {/* SVG Schematic of Dental Implant */}
                <div className="flex justify-center py-2">
                  <svg className="w-56 h-64 text-slate-200" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Crown Component (White Ceramic) */}
                    <path d="M70 30 C70 15 130 15 130 30 C135 45 135 65 125 75 C115 80 85 80 75 75 C65 65 65 45 70 30 Z" fill="#f8fafc" stroke="#38bdf8" strokeWidth="2.5" />
                    <text x="145" y="55" fill="#e2e8f0" fontSize="10" fontWeight="600">Crown</text>
                    <path d="M125 55 L140 55" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />

                    {/* Abutment Connector (Titanium / Ceramic) */}
                    <path d="M85 75 L115 75 L110 95 L90 95 Z" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="2" />
                    <text x="145" y="90" fill="#e2e8f0" fontSize="10" fontWeight="600">Abutment</text>
                    <path d="M112 88 L140 88" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" />

                    {/* Gum Line */}
                    <path d="M30 95 C60 92 80 102 100 102 C120 102 140 92 170 95" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" />
                    <text x="12" y="98" fill="#fda4af" fontSize="9">Gum line</text>

                    {/* Implant Post / Titanium Screw Threading */}
                    <path d="M90 95 L110 95 L108 175 L92 175 Z" fill="#64748b" stroke="#38bdf8" strokeWidth="2" />
                    {/* Thread ridges */}
                    <line x1="86" y1="110" x2="114" y2="110" stroke="#38bdf8" strokeWidth="2" />
                    <line x1="87" y1="125" x2="113" y2="125" stroke="#38bdf8" strokeWidth="2" />
                    <line x1="88" y1="140" x2="112" y2="140" stroke="#38bdf8" strokeWidth="2" />
                    <line x1="89" y1="155" x2="111" y2="155" stroke="#38bdf8" strokeWidth="2" />
                    <line x1="91" y1="168" x2="109" y2="168" stroke="#38bdf8" strokeWidth="2" />
                    {/* Apex tip */}
                    <path d="M92 175 L100 190 L108 175 Z" fill="#64748b" stroke="#38bdf8" strokeWidth="2" />

                    <text x="145" y="145" fill="#38bdf8" fontSize="10" fontWeight="600">Implant Post</text>
                    <text x="145" y="158" fill="#94a3b8" fontSize="8">(Jawbone integration)</text>
                    <path d="M114 140 L140 140" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />

                    {/* Surrounding Bone Indicator */}
                    <path d="M45 130 C45 200 155 200 155 130" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
                    <text x="100" y="215" textAnchor="middle" fill="#64748b" fontSize="9">Surrounding Jawbone</text>
                  </svg>
                </div>

                <div className="pt-3 border-t border-white/10 text-xs text-slate-300">
                  <p>In-depth clinical assessment and digital imaging help determine candidacy for implant restoration.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
