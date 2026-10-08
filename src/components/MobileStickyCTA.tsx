import React from 'react';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface MobileStickyCTAProps {
  onOpenBooking: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] px-3 py-2.5 safe-area-bottom">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Call Now button */}
        <a
          href={`tel:${CLINIC_INFO.phoneDial}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 active:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors whitespace-nowrap shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-teal-700 shrink-0" />
          <span>Call Now</span>
        </a>

        {/* Book Appointment button */}
        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-teal-700 active:bg-teal-800 text-white rounded-xl text-xs font-bold transition-colors whitespace-nowrap shadow-sm cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span>Book Visit</span>
        </button>

        {/* Directions icon button */}
        <a
          href={CLINIC_INFO.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 bg-slate-900 active:bg-slate-800 text-teal-400 rounded-xl transition-colors shrink-0 flex items-center justify-center shadow-xs"
          aria-label="Get directions on Google Maps"
        >
          <Navigation className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
