import React from 'react';
import { MapPin, PhoneCall, HeartHandshake, Star, Clock, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_REASONS, CLINIC_INFO } from '../data/clinicData';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin': return MapPin;
      case 'PhoneCall': return PhoneCall;
      case 'HeartHandshake': return HeartHandshake;
      case 'Star': return Star;
      case 'Clock': return Clock;
      default: return Star;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 uppercase tracking-wider">
            <span>Clinic Strengths</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Why Patients Choose Lucknow Dental And Implant Center
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our commitment is to provide dependable, respectful, and accessible dental care for families residing in Vikas Nagar and across Lucknow.
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_REASONS.map((item, idx) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                  idx === 0 ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                      {item.metric}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs text-slate-500">
                  <span>Fact-based clinic attribute</span>
                </div>
              </div>
            );
          })}

          {/* Direct CTA card as 6th item for balance */}
          <div className="bg-gradient-to-br from-teal-800 to-slate-900 rounded-2xl p-6 text-white shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
                Visit Us in Vikas Nagar
              </span>
              <h3 className="text-xl font-bold text-white">
                Experience Patient-Focused Care Today
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Schedule your appointment or call directly for immediate assistance with your dental inquiry.
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Request Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={`tel:${CLINIC_INFO.phoneDial}`}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 rounded-xl transition-all whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5 text-teal-300" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
