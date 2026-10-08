import React from 'react';
import { MapPin, Navigation, Clock, Phone, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptive Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider">
              <span>About The Clinic</span>
              <span>·</span>
              <span>{CLINIC_INFO.hindiName}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
              Dental Care With Comfort, Care & Confidence
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Located in Sector 2, Vikas Nagar, <strong className="font-semibold text-slate-800">Lucknow Dental And Implant Center</strong> is dedicated to delivering a comfortable and patient-friendly dental experience for individuals and families in Lucknow.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We understand that visiting a dental clinic can sometimes feel daunting. Our clinic emphasizes clear communication, gentle clinical care, and a calm environment so that every patient feels listened to before any procedure begins.
            </p>

            {/* Address & Direct Details Block */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Clinic Address
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-900">
                    {CLINIC_INFO.address.fullFormatted}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Plus Code: <span className="font-medium text-slate-700">{CLINIC_INFO.plusCode}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-200/60 text-xs sm:text-sm text-slate-700">
                <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Operating Hours: Monday – Sunday, Open until 9:00 PM</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4 text-teal-400" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100/80 border border-teal-200 rounded-xl transition-all cursor-pointer"
              >
                <span>Request Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneDial}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-teal-700 transition-colors py-2 px-2"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Values & Environmental Assurance */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-teal-900 via-slate-900 to-slate-950 p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
                    Our Patient Commitment
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    A Patient-Centered Environment in Vikas Nagar
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/10 text-teal-300 shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Welcoming & Respectful Care</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Attentive consultations focused on understanding your individual dental concerns and comfort level.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/10 text-teal-300 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Hygienic Clinical Standards</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        High standards of cleanliness, autoclaved equipment, and sanitized treatment rooms for every visitor.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white/10 text-teal-300 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Accessible Evening Hours</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Open up to 9:00 PM to accommodate working professionals and families in Vikas Nagar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                  <span>Google Rating: <strong>4.9 / 5</strong></span>
                  <span><strong>33</strong> Reviews</span>
                </div>
              </div>
            </div>

            {/* Location Guidance Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-900 block">Need help finding us?</span>
                <span>Near Sector 2 Vikas Nagar market area, Lucknow.</span>
              </div>
              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 hover:text-teal-800 underline underline-offset-2 whitespace-nowrap ml-3"
              >
                View on Map →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
