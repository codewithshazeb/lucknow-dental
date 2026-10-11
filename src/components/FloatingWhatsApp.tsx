import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { BusinessConfig } from '../types';

interface FloatingWhatsAppProps {
  business: BusinessConfig;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ business }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const cleanWhatsAppUrl = `https://wa.me/${business.whatsAppNumber}?text=${encodeURIComponent(
    business.defaultWhatsAppMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
      {/* Interactive Tooltip on hover / toggle */}
      {showTooltip && (
        <div className="bg-slate-950 text-white text-xs p-3.5 rounded-xl shadow-xl max-w-xs border border-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-bold text-emerald-400">Bansal Glass · WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            Share your glass requirements, sizes, or drawings for a prompt Lucknow quotation.
          </p>
        </div>
      )}

      {/* Action Button */}
      <a
        href={cleanWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Chat on WhatsApp with Bansal Glass"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide whitespace-nowrap">
          WhatsApp Quote
        </span>
      </a>
    </div>
  );
};
