import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQItem, BusinessConfig } from '../types';

interface FAQSectionProps {
  faqs: FAQItem[];
  business: BusinessConfig;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs, business }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const whatsAppGeneralUrl = `https://wa.me/${business.whatsAppNumber}?text=${encodeURIComponent(
    'Hello Bansal Glass, I have a specific question regarding glass installation in Lucknow. Please assist.'
  )}`;

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
            Clear Answers &amp; Guidance
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Essential facts about toughened glass safety, fabrication constraints, site measurements, and project timelines in Lucknow.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 text-slate-900 hover:text-cyan-900 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-slate-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-slate-600" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                      <span>Category: {faq.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Verified Guidance</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Assistance */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
          <p className="text-sm font-semibold text-slate-900">
            Have a project question not answered above?
          </p>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Discuss your requirements directly with Bansal Glass for clear answers on thickness, installation, and feasibility.
          </p>
          <div className="pt-2">
            <a
              href={whatsAppGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Ask Your Question on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
