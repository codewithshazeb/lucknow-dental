import React from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 uppercase tracking-wider">
            <span>Clinic Contact & Location</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Find Us in Vikas Nagar, Lucknow
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Conveniently located in Sector 2, Vikas Nagar. Visit us for consultation or get in touch by phone to schedule your appointment.
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact Cards */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
              <div>
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                  Dental Clinic
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-xs font-medium text-slate-500">
                  {CLINIC_INFO.hindiName}
                </p>
              </div>

              {/* Address details */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Address
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5 leading-snug">
                    {CLINIC_INFO.address.fullFormatted}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Google Plus Code: <span className="font-mono text-slate-700">{CLINIC_INFO.plusCode}</span>
                  </div>
                </div>
              </div>

              {/* Phone details */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Phone Inquiries & Booking
                  </div>
                  <div className="text-lg font-bold text-teal-700 mt-0.5">
                    <a href={`tel:${CLINIC_INFO.phoneDial}`} className="hover:underline">
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Call for direct appointment requests & timing inquiries
                  </div>
                </div>
              </div>

              {/* Operating hours */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Clinic Timings
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    {CLINIC_INFO.timing.days}: {CLINIC_INFO.timing.hours}
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold mt-0.5">
                    {CLINIC_INFO.timing.eveningNotice}
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs Bar */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm space-y-3">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Quick Actions
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={`tel:${CLINIC_INFO.phoneDial}`}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>Call Now</span>
                </a>

                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-400" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-white flex flex-col">
            <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-semibold text-slate-800">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>Sector 2, Vikas Nagar, Lucknow (226022)</span>
              </div>
              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Map iframe */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-100 flex-1">
              <iframe
                title="Lucknow Dental And Implant Center Location"
                src={CLINIC_INFO.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                Easy parking & road access in Sector 2
              </span>
              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 font-semibold hover:underline"
              >
                Calculate driving or walking route →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
