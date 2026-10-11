import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';
import { BusinessConfig } from '../types';

interface FooterProps {
  business: BusinessConfig;
  onOpenOwnerConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ business, onOpenOwnerConfig }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const seoKeywords = [
    'Glass shop in Lucknow',
    'Glass supplier in Lucknow',
    'Glass work in Lucknow',
    'Glass installation in Lucknow',
    'Toughened glass in Lucknow',
    'Glass door installation in Lucknow',
    'Glass partition work in Lucknow',
    'Shopfront glass in Lucknow',
    'Mirror fitting in Lucknow',
    'Residential and commercial glass work in Lucknow'
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Top Footer Tier */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Profile (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-white font-bold text-base">
                <span className="text-cyan-400 font-serif">B</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {business.name}
              </span>
            </div>

            <p className="text-slate-300 font-medium text-xs">
              "{business.tagline}"
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Supply and professional installation of architectural toughened glass, office cabins, shower enclosures, retail shopfronts, and mirrors in Lucknow, Uttar Pradesh.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${business.whatsAppNumber}?text=${encodeURIComponent(business.defaultWhatsAppMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-white font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-white font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-300" />
                <span>{business.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  Glass Catalogue
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Glazing Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Inspiration Gallery
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Quotation Journey
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Glass Solutions (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specialized Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  Toughened &amp; Laminated Safety Glass
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  Frameless Glass Office Partitions
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  Commercial Retail Shopfronts
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  Shower Cubicles &amp; Sliding Screens
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  Fluted &amp; Reeded Architectural Glass
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-white transition-colors">
                  Back-Painted Glass &amp; LED Mirrors
                </a>
              </li>
            </ul>
          </div>

          {/* Lucknow Service Localities (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Service Areas in Lucknow
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Available across Gomti Nagar, Aliganj, Hazratganj, Indira Nagar, Mahanagar, Shaheed Path, Sushant Golf City, Ashiyana, Rajajipuram, Transport Nagar, and all surrounding areas.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenOwnerConfig}
                className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-2 cursor-pointer"
              >
                Owner Verification Portal
              </button>
            </div>
          </div>

        </div>

        {/* Natural Local SEO Indexing Section */}
        <div className="mt-12 pt-8 border-t border-slate-900">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Local Services &amp; Search Index
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-slate-500">
            {seoKeywords.map((kw, i) => (
              <span key={i} className="hover:text-slate-300 transition-colors">
                {kw} {i < seoKeywords.length - 1 ? '·' : ''}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-black/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {business.name}. Lucknow, Uttar Pradesh. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/bansal-glass-lucknow.zip"
              download="bansal-glass-lucknow.zip"
              className="text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              Download Code (ZIP)
            </a>
            <span aria-hidden="true">·</span>
            <a href="/robots.txt" target="_blank" className="hover:text-slate-400">
              robots.txt
            </a>
            <span aria-hidden="true">·</span>
            <a href="/sitemap.xml" target="_blank" className="hover:text-slate-400">
              sitemap.xml
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
