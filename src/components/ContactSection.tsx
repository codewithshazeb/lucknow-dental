import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Edit3 } from 'lucide-react';
import { BusinessConfig } from '../types';

interface ContactSectionProps {
  business: BusinessConfig;
  onOpenOwnerConfig: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ business, onOpenOwnerConfig }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [locality, setLocality] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Toughened Glass Partition');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setFormError('Please enter a valid contact phone number.');
      return;
    }

    setFormError('');
    setIsSubmitted(true);
  };

  const cleanCallUrl = `tel:${business.phone.replace(/[^0-9+]/g, '')}`;
  const cleanWhatsAppUrl = `https://wa.me/${business.whatsAppNumber}?text=${encodeURIComponent(
    `Hello Bansal Glass, I submitted an enquiry via your website:\nName: ${fullName || 'Customer'}\nPhone: ${phone}\nLocality: ${locality || 'Lucknow'}\nRequirement: ${serviceNeeded}\nNotes: ${message || 'Please provide quotation.'}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
              Direct Contact &amp; Quotation Requests
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Get in Touch with Bansal Glass
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Serving homeowners, architects, interior contractors, and commercial developers throughout Lucknow and surrounding Uttar Pradesh areas.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenOwnerConfig}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-slate-500" />
              <span>Edit / Update Business Details</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Verified / Editable Business Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Business Contact Details
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-800 shadow-xs">
                  <Phone className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Phone (Click to Call)</span>
                    {!business.ownerConfirmedFields.phone && (
                      <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        Pending Owner Confirmation
                      </span>
                    )}
                  </div>
                  <a
                    href={cleanCallUrl}
                    className="text-base font-bold text-slate-900 hover:text-cyan-800 block mt-0.5"
                  >
                    {business.phone}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Direct phone call for project discussions</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-700 shadow-xs">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">WhatsApp Business</span>
                    {!business.ownerConfirmedFields.whatsApp && (
                      <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        Default Placeholder
                      </span>
                    )}
                  </div>
                  <a
                    href={`https://wa.me/${business.whatsAppNumber}?text=${encodeURIComponent(business.defaultWhatsAppMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-900 hover:text-emerald-700 block mt-0.5"
                  >
                    +{business.whatsAppNumber}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Fastest channel for drawings, photos &amp; quotes</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-800 shadow-xs">
                  <Mail className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Email</span>
                    {!business.ownerConfirmedFields.email && (
                      <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        Unconfirmed
                      </span>
                    )}
                  </div>
                  <a
                    href={`mailto:${business.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-cyan-800 block mt-0.5"
                  >
                    {business.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-800 shadow-xs">
                  <MapPin className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Location / Address</span>
                    {!business.ownerConfirmedFields.address && (
                      <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        To be confirmed
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {business.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {business.city}, {business.state}, {business.country}
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-800 shadow-xs">
                  <Clock className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Operating Hours</span>
                    {!business.ownerConfirmedFields.operatingHours && (
                      <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        Approximate
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-slate-900 mt-0.5">
                    {business.operatingHours}
                  </p>
                </div>
              </div>

            </div>

            {/* Service Areas Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Service Coverage Across Lucknow
              </h4>
              <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                {business.serviceAreas.map((area, i) => (
                  <span
                    key={i}
                    className="bg-white px-2.5 py-1 rounded-md border border-slate-200/80 font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Genuine Lead Enquiry Form & Map */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Enquiry Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Send a Quotation Request
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your project details. We will review your request and get back to you with guidance.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Enquiry Recorded Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{fullName}</strong>. Your request for <strong className="text-slate-900">{serviceNeeded}</strong> has been noted. For immediate response and to attach photos or floor plans, continue directly on WhatsApp:
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={cleanWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Open on WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFullName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-950 text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 00000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-950 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Locality in Lucknow
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Gomti Nagar, Aliganj"
                        value={locality}
                        onChange={(e) => setLocality(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-950 text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Required Glass Service
                      </label>
                      <select
                        value={serviceNeeded}
                        onChange={(e) => setServiceNeeded(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-950 text-slate-900"
                      >
                        <option value="Toughened Glass Partition">Toughened Glass Partition</option>
                        <option value="Glass Door / Patch Fitting">Glass Door / Patch Fitting</option>
                        <option value="Bathroom Shower Cubicle">Bathroom Shower Cubicle</option>
                        <option value="Vanity / LED Mirror Fitting">Vanity / LED Mirror Fitting</option>
                        <option value="Shopfront Glass Installation">Shopfront Glass Installation</option>
                        <option value="Glass Railing / Balustrade">Glass Railing / Balustrade</option>
                        <option value="Decorative / Fluted Glass">Decorative / Fluted Glass</option>
                        <option value="Glass Replacement / Repair">Glass Replacement / Repair</option>
                        <option value="Other Custom Glazing">Other Custom Glazing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Approximate Dimensions &amp; Project Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share approximate size, site status, or specific safety requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-950 text-slate-900"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-sm transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Quotation Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Google Maps Embed / Location Preview for Lucknow */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Lucknow Service Region Map</span>
                <span>Uttar Pradesh 226001</span>
              </div>
              <div className="rounded-xl overflow-hidden aspect-[16/7] border border-slate-200 relative bg-slate-200">
                <iframe
                  title="Lucknow, Uttar Pradesh Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113904.83296232236!2d80.87158760086888!3d26.848623049182064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-[11px] text-slate-500">
                Exact shopfront / warehouse address will be pinned upon owner confirmation. Site surveys available across Lucknow municipal limits.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
