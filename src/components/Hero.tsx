import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2, Shield, Compass, Sparkles } from 'lucide-react';
import { BusinessConfig } from '../types';
import { SafeGlassImage } from './SafeGlassImage';

interface HeroProps {
  business: BusinessConfig;
}

export const Hero: React.FC<HeroProps> = ({ business }) => {
  const whatsAppHeroUrl = `https://wa.me/${business.whatsAppNumber}?text=${encodeURIComponent(
    'Hello Bansal Glass, I would like to get a quote for glass supply and installation in Lucknow. Please assist with options.'
  )}`;

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-10 pb-16 lg:py-24">
      {/* Subtle architectural geometric grid backdrop */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Ambient gradient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Tagline & Business Meta (unboxed, clean typography) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-cyan-300 font-medium tracking-wide">
              <span>{business.tagline}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Serving Lucknow &amp; Uttar Pradesh</span>
            </div>

            {/* Required Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Premium Glass Solutions for Every Space.
            </h1>

            {/* Required Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Explore glass products and customised glass work for homes, shops, offices and commercial interiors in Lucknow.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={whatsAppHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Get a Quote on WhatsApp</span>
              </a>

              <a
                href="#catalogue"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all"
              >
                <span>Explore Glass Solutions</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Verified Capabilities Checklist (No fabricated stats) */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Custom Sizing &amp; Fitting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Toughened &amp; Laminated Safety</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Residential &amp; Commercial</span>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Glass Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700/80 shadow-2xl backdrop-blur-sm">
              <div className="rounded-xl overflow-hidden relative">
                <SafeGlassImage
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern architectural glass facade and commercial installation"
                  aspectRatioClass="aspect-[4/3] sm:aspect-[16/11]"
                  badgeText="Architectural Glass Solutions · Lucknow"
                />

                {/* Glass detail footer card */}
                <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <div>
                    <p className="font-semibold text-white">Bansal Glass Lucknow</p>
                    <p className="text-slate-400 text-[11px]">Precision Supply &amp; Professional Installation</p>
                  </div>
                  <a
                    href="#process"
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 text-[11px]"
                  >
                    <span>Quotation steps</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
