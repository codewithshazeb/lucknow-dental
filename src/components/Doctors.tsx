import React, { useState } from 'react';
import { UserCheck, Info, X, Calendar, Phone } from 'lucide-react';
import { DOCTORS_PLACEHOLDER, CLINIC_INFO } from '../data/clinicData';
import { DoctorPlaceholder } from '../types';

interface DoctorsProps {
  onOpenBooking: () => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onOpenBooking }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorPlaceholder | null>(null);

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 uppercase tracking-wider">
            <span>Our Practitioners</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Meet Our Dental Care Team
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our clinic is staffed by dedicated dental professionals providing attentive consultations and individualized dental care.
          </p>

          {/* Placeholder Notice */}
          <div className="inline-flex items-center gap-2 p-3 text-xs text-slate-700 bg-slate-50 border border-slate-200/90 rounded-xl text-left max-w-2xl mx-auto">
            <Info className="w-4 h-4 text-teal-600 shrink-0" />
            <span>
              <strong>Note:</strong> Clinician credentials and full profiles are displayed as placeholders pending confirmation from clinic administration.
            </span>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {DOCTORS_PLACEHOLDER.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-teal-300 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200/60 text-teal-700 flex items-center justify-center shrink-0">
                    <UserCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider">
                      {doc.role}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {doc.placeholderName}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Dentist / Dental Surgeon
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600 bg-slate-50/80 p-4 rounded-xl border border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/50 pb-2">
                    <span className="font-semibold text-slate-700">Qualifications:</span>
                    <span className="text-teal-800 font-mono text-xs bg-white px-2 py-0.5 rounded border border-slate-200">
                      {doc.placeholderQualifications}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/50 pb-2 pt-1">
                    <span className="font-semibold text-slate-700">Specialization:</span>
                    <span className="text-teal-800 font-mono text-xs bg-white px-2 py-0.5 rounded border border-slate-200">
                      {doc.placeholderSpecialization}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1">
                    <span className="font-semibold text-slate-700">Department:</span>
                    <span className="text-slate-600 font-medium">
                      {doc.department}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed italic">
                  {doc.bioNote}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedDoctor(doc)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <span>View Doctor Profile</span>
                </button>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-teal-700 hover:text-teal-900 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with Doctor</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Guidance for Clinic Owner */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-center text-xs text-slate-500">
          <strong>Clinic Administrator Notice:</strong> To customize doctor names, qualifications, degrees (e.g. BDS, MDS), and specialized certificates, update the profile entries in the clinic records.
        </div>

      </div>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-fadeIn"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <UserCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedDoctor.placeholderName}
                  </h3>
                  <p className="text-xs text-teal-700 font-semibold">
                    {selectedDoctor.role}
                  </p>
                  <p className="text-xs text-slate-500">
                    Dentist / Dental Surgeon
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                  <div className="text-slate-500 font-semibold uppercase text-[10px]">
                    Qualifications
                  </div>
                  <div className="text-slate-900 font-mono text-xs">
                    {selectedDoctor.placeholderQualifications}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                  <div className="text-slate-500 font-semibold uppercase text-[10px]">
                    Specialization
                  </div>
                  <div className="text-slate-900 font-mono text-xs">
                    {selectedDoctor.placeholderSpecialization}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                  <div className="text-slate-500 font-semibold uppercase text-[10px]">
                    Practice Location
                  </div>
                  <div className="text-slate-900 text-xs">
                    Lucknow Dental And Implant Center, Sector 2, Vikas Nagar
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                {selectedDoctor.bioNote}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={`tel:${CLINIC_INFO.phoneDial}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>Call Reception</span>
                </a>

                <button
                  onClick={() => {
                    setSelectedDoctor(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm"
                >
                  Request Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
