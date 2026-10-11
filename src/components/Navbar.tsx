import React, { useState } from 'react';
import { MessageCircle, Phone, Menu, X, ShieldAlert, Sparkles } from 'lucide-react';
import { BusinessConfig } from '../types';

interface NavbarProps {
  business: BusinessConfig;
  onOpenOwnerConfig: () => void;
  pendingCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ business, onOpenOwnerConfig, pendingCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cleanWhatsAppUrl = `https://wa.me/${business.whatsAppNumber}?text=${encodeURIComponent(
    business.defaultWhatsAppMessage
  )}`;

  return (
    <>
      {/* Pending verification notice bar for owner if unconfirmed items remain */}
      {pendingCount > 0 && (
        <div className="bg-slate-900 border-b border-slate-800 text-slate-300 px-4 py-2 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2 max-w-4xl mx-auto w-full justify-between">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>
                Owner Notice: <strong className="text-white">{pendingCount} business details</strong> are pending confirmation from Bansal Glass.
              </span>
            </span>
            <div className="flex items-center gap-3">
              <a
                href="/bansal-glass-lucknow.zip"
                download="bansal-glass-lucknow.zip"
                className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-2 whitespace-nowrap cursor-pointer flex items-center gap-1"
              >
                <span>Download Code (ZIP)</span>
              </a>
              <span className="text-slate-600">·</span>
              <button
                onClick={onOpenOwnerConfig}
                className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-2 whitespace-nowrap cursor-pointer"
              >
                Review &amp; Edit Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Top Bar strictly obeying the 3-zone contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-slate-800 transition-colors">
                <span className="text-cyan-400 font-serif">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                  {business.name}
                </span>
                <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase">
                  Lucknow · Uttar Pradesh
                </span>
              </div>
            </a>
          </div>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#catalogue" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Glass Catalogue
            </a>
            <a href="#services" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#gallery" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Inspiration Gallery
            </a>
            <a href="#process" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Quotation Journey
            </a>
            <a href="#faq" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              FAQs
            </a>
            <a href="#contact" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={cleanWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-sm transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Enquire on WhatsApp</span>
            </a>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
              <a
                href="#catalogue"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 transition-colors"
              >
                Glass Catalogue
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 transition-colors"
              >
                Services &amp; Custom Work
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 transition-colors"
              >
                Design Inspiration Gallery
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 transition-colors"
              >
                Quotation Process
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 transition-colors"
              >
                Frequently Asked Questions
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-md hover:bg-slate-100 transition-colors"
              >
                Contact &amp; Lucknow Location
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${business.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-slate-600" />
                <span>Call: {business.phone}</span>
              </a>
              <a
                href="/bansal-glass-lucknow.zip"
                download="bansal-glass-lucknow.zip"
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200"
              >
                <span>📦 Download Complete Code (ZIP)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOwnerConfig();
                }}
                className="text-xs text-slate-500 hover:text-slate-900 py-1 text-center"
              >
                Owner Configuration &amp; Verification Panel
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
