import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BusinessConfig } from '../types';

interface MobileStickyCTAProps {
  business: BusinessConfig;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ business }) => {
  const cleanCallUrl = `tel:${business.phone.replace(/[^0-9+]/g, '')}`;
  const cleanWhatsAppUrl = `https://wa.me/${business.whatsAppNumber}?text=${encodeURIComponent(
    business.defaultWhatsAppMessage
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-lg">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={cleanCallUrl}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold transition-colors truncate"
        >
          <Phone className="w-3.5 h-3.5 text-slate-700 shrink-0" />
          <span className="truncate">Call Now</span>
        </a>

        <a
          href={cleanWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-colors truncate"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
          <span className="truncate">WhatsApp Quote</span>
        </a>
      </div>
    </div>
  );
};
