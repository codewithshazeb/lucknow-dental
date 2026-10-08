import React, { useState } from 'react';
import { Calendar, Clock, Phone, User, FileText, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { AppointmentFormState } from '../types';

export const AppointmentSection: React.FC = () => {
  const [formState, setFormState] = useState<AppointmentFormState>({
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    reasonForVisit: 'General Dental Checkup',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const visitReasons = [
    'General Dental Checkup',
    'Teeth Cleaning & Scaling',
    'Tooth Pain / Root Canal Consultation',
    'Dental Implants Consultation',
    'Dental Crown / Cap Fitting',
    'Tooth Filling / Cavity',
    'Bleeding Gums / Periodontal Check',
    'Cosmetic Dentistry Assessment',
    'Other Dental Concern',
  ];

  const timeSlots = [
    'Morning (10:00 AM - 1:00 PM)',
    'Afternoon (1:00 PM - 5:00 PM)',
    'Evening (5:00 PM - 9:00 PM)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formState.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = formState.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile phone number.');
      return;
    }

    if (!formState.preferredDate) {
      setErrorMessage('Please select your preferred date for the appointment.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormState({
      fullName: '',
      phone: '',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      reasonForVisit: 'General Dental Checkup',
      additionalNotes: '',
    });
    setIsSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 uppercase tracking-wider">
              <span>Appointment Request</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Ready to Take the Next Step Toward Better Dental Care?
            </h2>

            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Contact Lucknow Dental And Implant Center in Vikas Nagar to request an appointment.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 lg:p-12">
            
            {isSubmitted ? (
              /* Success State - Strict ethical text */
              <div className="text-center py-8 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Thank You for Your Request
                  </h3>
                  <p className="text-base font-medium text-slate-700 leading-relaxed">
                    Thank you. Your appointment request has been received. The clinic will contact you to confirm the appointment.
                  </p>
                  <p className="text-xs text-slate-500 pt-2">
                    Please note: Appointment slots are confirmed only after our reception staff verifies clinician availability with you via phone call.
                  </p>
                </div>

                {/* Summary of submitted request */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500">Patient Name:</span>
                    <span className="font-semibold text-slate-900">{formState.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500">Contact Number:</span>
                    <span className="font-semibold text-slate-900">{formState.phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-slate-500">Requested Date & Time:</span>
                    <span className="font-semibold text-slate-900">{formState.preferredDate} ({formState.preferredTime.split(' ')[0]})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Reason for Visit:</span>
                    <span className="font-semibold text-slate-900">{formState.reasonForVisit}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>

                  <a
                    href={`tel:${CLINIC_INFO.phoneDial}`}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-colors inline-flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Clinic (088876 04270)</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Request Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Sharma"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="e.g. 088876 04270 or 9876543210"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <label htmlFor="preferredDate" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        id="preferredDate"
                        type="date"
                        required
                        value={formState.preferredDate}
                        onChange={(e) => setFormState({ ...formState, preferredDate: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Preferred Time Slot */}
                  <div className="space-y-2">
                    <label htmlFor="preferredTime" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        id="preferredTime"
                        value={formState.preferredTime}
                        onChange={(e) => setFormState({ ...formState, preferredTime: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Reason for Visit */}
                  <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="reasonForVisit" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Reason for Visit *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <FileText className="w-4 h-4" />
                      </div>
                      <select
                        id="reasonForVisit"
                        value={formState.reasonForVisit}
                        onChange={(e) => setFormState({ ...formState, reasonForVisit: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                      >
                        {visitReasons.map((reason) => (
                          <option key={reason} value={reason}>
                            {reason}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Additional notes */}
                  <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="additionalNotes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Additional Notes / Symptoms (Optional)
                    </label>
                    <textarea
                      id="additionalNotes"
                      rows={2}
                      value={formState.additionalNotes}
                      onChange={(e) => setFormState({ ...formState, additionalNotes: e.target.value })}
                      placeholder="Briefly describe your symptoms or specific requests..."
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-500 text-center sm:text-left">
                    Your request will be received by clinic reception. We will call you to confirm your date and time slot.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 disabled:opacity-70 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Request Appointment'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick direct phone alternative */}
                <div className="text-center pt-2 text-xs text-slate-600">
                  Prefer speaking with someone directly?{' '}
                  <a
                    href={`tel:${CLINIC_INFO.phoneDial}`}
                    className="font-bold text-teal-700 hover:text-teal-800 underline underline-offset-2"
                  >
                    Call 088876 04270
                  </a>{' '}
                  during clinic hours (open until 9 PM).
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
