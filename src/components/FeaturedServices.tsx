import React, { useState } from 'react';
import { MessageCircle, Check, ArrowRight, ShieldCheck, X, Compass, AlertCircle } from 'lucide-react';
import { GlassService, BusinessConfig } from '../types';
import { SafeGlassImage } from './SafeGlassImage';

interface FeaturedServicesProps {
  services: GlassService[];
  business: BusinessConfig;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ services, business }) => {
  const [selectedService, setSelectedService] = useState<GlassService | null>(null);

  const getWhatsAppServiceUrl = (service: GlassService) => {
    const message = `Hello Bansal Glass, I am interested in ${service.name} for my property in Lucknow. Please share installation process, site visit and quotation details.`;
    return `https://wa.me/${business.whatsAppNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
            Comprehensive Glazing &amp; Installation Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Architectural Services &amp; Custom Work
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From modern office partition cabins and shopfront displays to frameless bathroom shower cubicles and mirror fittings, Bansal Glass caters to residential and commercial projects across Lucknow.
          </p>
        </div>

        {/* Site Condition Advisory Callout */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
          <div className="p-2 bg-slate-100 rounded-lg text-slate-700 shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5 text-cyan-700" />
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-slate-900 font-semibold">Important Architectural Note: </strong>
            Final glass selection, thickness specifications (8mm/10mm/12mm), and hardware grades (patch fittings, floor springs, spiders, base shoes) depend entirely on exact site measurements, slab-to-ceiling heights, wind loads, and structural safety requirements.
          </div>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Service Visual */}
                <div
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <SafeGlassImage
                    src={service.imageUrl}
                    alt={`${service.name} in Lucknow`}
                    aspectRatioClass="aspect-[16/10]"
                    badgeText={`Service 0${index + 1}`}
                  />
                </div>

                {/* Service Details */}
                <div className="p-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Lucknow Installation
                  </div>
                  <h3
                    onClick={() => setSelectedService(service)}
                    className="text-lg font-bold text-slate-900 group-hover:text-cyan-900 transition-colors cursor-pointer"
                  >
                    {service.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 mb-3">
                    {service.headline}
                  </p>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Typical Applications Snippet */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Typical Applications
                    </p>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {service.typicalApplications.slice(0, 2).map((app, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Service Action Footer */}
              <div className="p-6 pt-0 space-y-2">
                <a
                  href={getWhatsAppServiceUrl(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-2 px-3 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-colors cursor-pointer"
                >
                  View Full Specifications →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">
            
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Service Details</span>
                <h3 className="text-xl font-bold text-slate-900">{selectedService.name}</h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <SafeGlassImage
                src={selectedService.imageUrl}
                alt={selectedService.name}
                aspectRatioClass="aspect-[16/9]"
                badgeText="Bansal Glass Installation Capability"
              />

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{selectedService.headline}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{selectedService.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Typical Applications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {selectedService.typicalApplications.map((app, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <strong className="text-slate-900">Technical &amp; Site Considerations: </strong>
                {selectedService.technicalConsiderations}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getWhatsAppServiceUrl(selectedService)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Request Quote for {selectedService.name}</span>
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto py-3 px-6 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
