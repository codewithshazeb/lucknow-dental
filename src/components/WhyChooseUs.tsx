import React from 'react';
import { ShieldCheck, Ruler, Wrench, MessageSquare, Building2, Sparkles } from 'lucide-react';
import { BusinessConfig } from '../types';

interface WhyChooseUsProps {
  business: BusinessConfig;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ business }) => {
  const pillars = [
    {
      title: 'Precision Sizing & Edge Finishing',
      description: 'Accurate CNC and manual glass cutting, pencil polishing, beveled edges, and precise hardware cut-outs before tempering.',
      icon: <Ruler className="w-6 h-6 text-slate-900" />
    },
    {
      title: 'Safety Glass Compliance',
      description: 'Strict adherence to safety codes for doors, railings, and shower cubicles using genuine toughened and laminated glazing.',
      icon: <ShieldCheck className="w-6 h-6 text-slate-900" />
    },
    {
      title: 'End-to-End Installation Care',
      description: 'Comprehensive support covering initial glass recommendation, site measurement verification, and reliable installation.',
      icon: <Wrench className="w-6 h-6 text-slate-900" />
    },
    {
      title: 'Direct WhatsApp Consultation',
      description: 'Quick preliminary reviews of rough drawings, room dimensions, and photo references without cumbersome delays.',
      icon: <MessageSquare className="w-6 h-6 text-slate-900" />
    },
    {
      title: 'Residential & Commercial Scope',
      description: 'Equipped to handle individual home mirror fittings and shower cubicles up to full corporate office cabins and showroom storefronts.',
      icon: <Building2 className="w-6 h-6 text-slate-900" />
    },
    {
      title: 'Curated Glass Specializations',
      description: 'Access to modern architectural finishes including trending fluted glass, back-painted lacquered panels, and acoustic DGU units.',
      icon: <Sparkles className="w-6 h-6 text-slate-900" />
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
            Professional Workmanship &amp; Integrity
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Why Choose Bansal Glass
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We focus on technical precision, appropriate safety ratings, and dependable local service across Lucknow—without inflated claims or generic compromises.
          </p>
        </div>

        {/* 6 Structural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Bansal Glass · Principle 0{i + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
