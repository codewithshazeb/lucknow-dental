import React, { useState } from 'react';
import { Phone, MapPin, Clock, Calendar, Navigation, ShieldAlert, Lock, FileText, ChevronUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { LegalModal } from './LegalModals';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [legalModal, setLegalModal] = useState<'disclaimer' | 'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-850">
          
          {/* Brand & Clinic Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {CLINIC_INFO.name}
              </h3>
              <p className="text-sm font-medium text-teal-400 mt-0.5">
                {CLINIC_INFO.hindiName}
              </p>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Professional dental clinic in Sector 2, Vikas Nagar, Lucknow. Dedicated to comfortable, patient-centered oral care, restorative dentistry, and dental check-ups.
            </p>

            {/* NAP Info */}
            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address.fullFormatted}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneDial}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{CLINIC_INFO.timing.days} · {CLINIC_INFO.timing.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Action & Direct Booking CTA */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Appointments & Directions
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book a consultation or call reception for appointment inquiries in Vikas Nagar.
            </p>

            <div className="flex flex-col gap-2.5 pt-1">
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-600 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>

              <a
                href={CLINIC_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-xl transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-teal-400" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              Plus Code: <span className="font-mono text-slate-400">{CLINIC_INFO.plusCode}</span>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer Banner in Footer */}
        <div className="py-6 border-b border-slate-900 text-xs text-slate-400 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">Medical Disclaimer:</strong> The information provided on this website is for general informational purposes only and should not be considered a substitute for professional medical or dental advice. Treatment recommendations may vary depending on individual patient conditions. Please consult a qualified dental professional for diagnosis and treatment.
            </p>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Lucknow Dental And Implant Center. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <Lock className="w-3 h-3 text-teal-500" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <FileText className="w-3 h-3 text-teal-500" />
              <span>Terms & Conditions</span>
            </button>

            <button
              onClick={() => setLegalModal('disclaimer')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Medical Disclaimer
            </button>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modals */}
      <LegalModal
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </footer>
  );
};
