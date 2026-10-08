import React from 'react';
import { Phone, Calendar, MapPin, Star, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-sky-50/70 via-white to-slate-50 pt-8 pb-16 lg:py-20 overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Top location tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>Sector 2, Vikas Nagar, Lucknow</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Your Smile Deserves <br className="hidden sm:inline" />
              <span className="text-teal-700">Expert Dental Care</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Comfortable, professional dental care in Vikas Nagar, Lucknow — with convenient appointments and patient-focused treatment.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneDial}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm hover:border-slate-400 transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Indicator below CTAs */}
            <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5 font-medium text-slate-900">
                <span className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </span>
                <span className="font-bold">4.9/5</span>
                <span>Google Rating</span>
                <span className="text-slate-400 mx-1">|</span>
                <span className="text-slate-600 font-semibold">{CLINIC_INFO.reviewCount} Reviews</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-600">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Open today · Closes 9:00 PM</span>
              </div>
            </div>

            {/* Key Ethical Care Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Hygienic Operatory</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Convenient Evening Hours</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Patient-First Approach</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Operatory Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/90 shadow-xl overflow-hidden p-5 sm:p-6">
              
              {/* Header badge inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Lucknow Dental And Implant Center
                  </h3>
                  <p className="text-xs text-slate-500">{CLINIC_INFO.hindiName} · Sector 2, Vikas Nagar</p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open Now
                </span>
              </div>

              {/* Clinic Operatory Architectural Visual Graphic */}
              <div className="my-4 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 text-white relative overflow-hidden shadow-inner min-h-[260px] flex flex-col justify-between">
                {/* Background clinical ambient grid & soft glow */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-500/20 rounded-full blur-2xl" />

                <div className="relative z-10 flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-teal-400">
                      Clinical Suite
                    </span>
                    <h4 className="text-lg font-bold text-slate-100">
                      Modern Operatory & Consultation
                    </h4>
                  </div>
                  <div className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded text-[11px] text-slate-200 border border-white/10">
                    Sector 2 Clinic
                  </div>
                </div>

                {/* SVG Dental Operatory Diagram / Graphic */}
                <div className="relative z-10 my-4 flex items-center justify-center">
                  <svg className="w-48 h-28 text-teal-400 drop-shadow-md" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Modern Dental Chair Contour */}
                    <path d="M40 100 C70 100 85 95 105 85 C125 75 145 75 180 82 C195 85 205 92 215 95" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
                    {/* Backrest & Headrest */}
                    <path d="M40 100 C30 80 32 55 45 42 C50 37 60 40 68 50 C75 60 80 75 85 85" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" />
                    <rect x="35" y="28" width="18" height="12" rx="4" stroke="#e0f2fe" strokeWidth="2.5" fill="#0f172a" />
                    {/* Base & Support Hydraulic Column */}
                    <path d="M120 80 L120 120" stroke="#94a3b8" strokeWidth="5" strokeLinecap="round" />
                    <path d="M90 120 L150 120" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
                    {/* Overhead Focus Light Arm */}
                    <path d="M185 115 L185 45 L150 35" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="150" cy="35" r="9" stroke="#38bdf8" strokeWidth="2" fill="#0369a1" />
                    <circle cx="150" cy="35" r="3" fill="#fef08a" />
                    {/* Instrument Delivery Tray */}
                    <path d="M105 85 L95 65 L70 65" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
                    <rect x="65" y="60" width="30" height="6" rx="2" fill="#38bdf8" fillOpacity="0.8" />
                  </svg>
                </div>

                {/* Status tag */}
                <div className="relative z-10 flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-800">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    Strict Sterilization Protocol
                  </span>
                  <span className="text-slate-400">Vikas Nagar</span>
                </div>
              </div>

              {/* Bottom Quick Feature Cards */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs text-slate-500 font-medium">Timings</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">Until 9:00 PM</div>
                  <div className="text-[11px] text-teal-700 font-medium">Daily evening slots</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs text-slate-500 font-medium">Appointments</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">By Request</div>
                  <div className="text-[11px] text-teal-700 font-medium">Quick callback</div>
                </div>
              </div>

              {/* Direct call action on banner */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-xs">
                    LD
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-slate-900">Direct Reception</div>
                    <div className="text-slate-500">Sector 2, Vikas Nagar</div>
                  </div>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phoneDial}`}
                  className="px-3 py-1.5 text-xs font-semibold text-teal-800 bg-teal-100/70 hover:bg-teal-200 rounded-lg transition-colors"
                >
                  Call Now
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
