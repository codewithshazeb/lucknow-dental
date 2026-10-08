import React from 'react';
import { X, ShieldAlert, Lock, FileText } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface LegalModalProps {
  type: 'disclaimer' | 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'disclaimer' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Medical & Dental Disclaimer
              </h3>
            </div>

            <div className="space-y-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              <p className="font-medium text-slate-800 bg-slate-50 p-4 rounded-xl border border-slate-200">
                The information provided on this website is for general informational purposes only and should not be considered a substitute for professional medical or dental advice. Treatment recommendations may vary depending on individual patient conditions. Please consult a qualified dental professional for diagnosis and treatment.
              </p>
              <p>
                No doctor-patient relationship is formed solely by submitting an appointment inquiry or browsing this website. All diagnosis, clinical investigations, and procedural plans must be conducted in person at the clinic.
              </p>
              <p>
                In the event of acute dental trauma, severe uncontrollable bleeding, or breathing difficulty related to swelling, please visit the nearest hospital emergency department immediately.
              </p>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Privacy Policy
              </h3>
            </div>

            <div className="space-y-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              <p>
                <strong className="text-slate-800">{CLINIC_INFO.name}</strong> respects your personal privacy. Because our appointment form collects personal details (such as your full name, phone number, and reason for visit), this policy outlines how that information is handled.
              </p>
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                1. Information We Collect
              </h4>
              <p>
                We only collect information voluntarily submitted by you via the appointment request form or telephone calls, including your name, telephone contact, preferred consultation slot, and brief symptom description.
              </p>
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                2. Use of Information
              </h4>
              <p>
                Information is utilized strictly by our clinic reception to contact you, schedule or confirm dental consultations, and address your patient inquiries. We do not sell or trade your data to third-party telemarketers.
              </p>
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                3. Contact for Inquiries
              </h4>
              <p>
                If you have questions regarding your contact details or wish to amend appointment information, please call us directly at {CLINIC_INFO.phone}.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Terms & Conditions
              </h3>
            </div>

            <div className="space-y-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              <p>
                By accessing this website, you acknowledge and agree that online appointment requests constitute preliminary scheduling inquiries and do not guarantee an instantaneous appointment time until verified by clinic staff.
              </p>
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                1. Service Lists & Confirmation
              </h4>
              <p>
                All mentioned services and diagnostic categories represent general dental procedures. Actual treatment eligibility, pricing, and suitability are determined exclusively following clinical examination at our Vikas Nagar clinic.
              </p>
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
                2. Cancellations & Rescheduling
              </h4>
              <p>
                If you need to reschedule or cancel a requested appointment, please notify the clinic reception by telephone at {CLINIC_INFO.phone} in advance.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
