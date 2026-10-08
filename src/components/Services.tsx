import React, { useState } from 'react';
import { 
  Search, Sparkles, ShieldAlert, Crown, Anchor, Layers, 
  Smile, Scissors, HeartPulse, ShieldCheck, ArrowRight, 
  Info, X, Calendar, Phone, CheckCircle 
} from 'lucide-react';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = ['All', 'General', 'Restorative', 'Preventive', 'Cosmetic'];

  const filteredServices = selectedCategory === 'All' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return Search;
      case 'Sparkles': return Sparkles;
      case 'ShieldAlert': return ShieldAlert;
      case 'Crown': return Crown;
      case 'Anchor': return Anchor;
      case 'Layers': return Layers;
      case 'Smile': return Smile;
      case 'Scissors': return Scissors;
      case 'HeartPulse': return HeartPulse;
      case 'ShieldCheck': return ShieldCheck;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 uppercase tracking-wider">
            <span>Dental Services Overview</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Comprehensive Dental Care Categories
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore common dental care and restorative treatment categories. Each procedure begins with an evaluation of your dental health and individual needs.
          </p>

          {/* Mandatory Clinical Confirmation Notice */}
          <div className="inline-flex items-center gap-2 p-3 text-xs text-amber-900 bg-amber-50 border border-amber-200/90 rounded-xl max-w-2xl text-left sm:text-center mx-auto">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Clinical Note:</strong> These service categories represent standard dental treatments and are subject to confirmation upon consultation at Lucknow Dental And Implant Center.
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8 pb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat} Treatments
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-teal-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-100/70 text-teal-700 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
                      {service.name}
                    </h3>
                    {service.hindiName && (
                      <p className="text-xs text-teal-700/80 font-medium mt-0.5">
                        {service.hindiName}
                      </p>
                    )}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900 group-hover:underline transition-all cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-medium text-slate-500 hover:text-slate-800"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section bottom CTA strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Not sure which dental service you require?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Schedule a comprehensive examination at our Vikas Nagar clinic for personal guidance.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${CLINIC_INFO.phoneDial}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>Call Reception</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-fadeIn"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-teal-50 text-teal-700 rounded-xl">
                  {React.createElement(getServiceIcon(activeModalService.iconName), { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider">
                    {activeModalService.category} Care
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {activeModalService.name}
                  </h3>
                  {activeModalService.hindiName && (
                    <p className="text-xs text-slate-500 font-medium">
                      {activeModalService.hindiName}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                <p className="leading-relaxed">
                  {activeModalService.overview}
                </p>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
                  <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Common Reasons for Consultation:
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activeModalService.commonReasons.map((reason, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  <strong>Clinical Notice:</strong> {activeModalService.clinicalNote}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveModalService(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm"
                >
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
