import React, { useState } from 'react';
import { MessageCircle, ArrowRight, CheckCircle2, Ruler, Send, Copy, Check } from 'lucide-react';
import { BusinessConfig } from '../types';
import { quotationSteps } from '../data/glassData';

interface QuotationProcessProps {
  business: BusinessConfig;
}

export const QuotationProcess: React.FC<QuotationProcessProps> = ({ business }) => {
  const [selectedService, setSelectedService] = useState('Toughened Glass Partition');
  const [projectType, setProjectType] = useState<'Residential' | 'Commercial' | 'Retail / Showroom'>('Residential');
  const [approxWidth, setApproxWidth] = useState('');
  const [approxHeight, setApproxHeight] = useState('');
  const [unit, setUnit] = useState<'Feet' | 'Inches' | 'Meters'>('Feet');
  const [locality, setLocality] = useState('Gomti Nagar');
  const [scope, setScope] = useState<'Supply & Installation' | 'Supply Only'>('Supply & Installation');
  const [copied, setCopied] = useState(false);

  const lucknowAreas = [
    'Gomti Nagar',
    'Gomti Nagar Extension',
    'Hazratganj',
    'Aliganj',
    'Indira Nagar',
    'Mahanagar',
    'Amar Shaheed Path',
    'Sushant Golf City',
    'Ashiyana',
    'Vikas Nagar',
    'Janki Puram',
    'Rajajipuram',
    'Chowk',
    'Transport Nagar',
    'Other Lucknow Area'
  ];

  const glassOptions = [
    'Toughened Glass Partition',
    'Glass Doors & Entrance Pivot',
    'Bathroom Shower Enclosure',
    'Vanity / LED Backlit Mirror',
    'Shopfront Commercial Glass',
    'Balcony Glass Railing',
    'Fluted / Reeded Decorative Glass',
    'Back-Painted Lacquered Kitchen Splashback',
    'Soundproof DGU Double Glazed Windows',
    'Custom Float Glass Table Top / Shelf'
  ];

  const generatedMessage = `Hello Bansal Glass, I would like to request a quotation for glass work in Lucknow:
- Requirement: ${selectedService}
- Project Type: ${projectType}
- Dimensions: ${approxWidth && approxHeight ? `${approxWidth} x ${approxHeight} ${unit} (Approx)` : 'Dimensions to be measured on site'}
- Location: ${locality}, Lucknow
- Scope: ${scope}
Please share estimated pricing range and next steps.`;

  const whatsAppUrl = `https://wa.me/${business.whatsAppNumber}?text=${encodeURIComponent(generatedMessage)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="process" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
            Structured Enquiry Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            How the Quotation Process Works
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We follow a transparent 4-step workflow to understand your space, confirm architectural safety specifications, and provide a clear quotation.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quotationSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-slate-300 font-serif group-hover:text-cyan-700 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-cyan-600 transition-colors" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 text-[11px] font-medium text-slate-400">
                Step 0{idx + 1} of 04
              </div>
            </div>
          ))}
        </div>

        {/* Interactive WhatsApp Quotation Formulator Card */}
        <div className="bg-slate-950 rounded-2xl p-6 sm:p-10 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                  Interactive Quotation Assistant
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Format Your Quotation Request
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Select your options below to compose an exact WhatsApp enquiry. Quotations are individually estimated based on size, hardware, and site conditions.
                </p>
              </div>

              {/* Requirement Type */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  1. Glass Work / Product Requirement
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-cyan-400"
                >
                  {glassOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-slate-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Type & Scope */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    2. Space Classification
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-cyan-400"
                  >
                    <option value="Residential">Residential (Home / Villa / Apartment)</option>
                    <option value="Commercial">Commercial (Office / Workplace)</option>
                    <option value="Retail / Showroom">Retail / Showroom / Shop</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    3. Scope
                  </label>
                  <select
                    value={scope}
                    onChange={(e) => setScope(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-cyan-400"
                  >
                    <option value="Supply & Installation">Supply &amp; Professional Installation</option>
                    <option value="Supply Only">Glass Supply Only (Fabrication)</option>
                  </select>
                </div>
              </div>

              {/* Approximate Dimensions */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                  <span>4. Approximate Dimensions (Optional)</span>
                  <div className="flex gap-2 text-[11px] text-slate-400">
                    {(['Feet', 'Inches', 'Meters'] as const).map((u) => (
                      <button
                        key={u}
                        type="button"
                        onClick={() => setUnit(u)}
                        className={`hover:text-white cursor-pointer ${unit === u ? 'text-cyan-400 font-bold' : ''}`}
                      >
                        {u}
                      </button>
                    ))}
                  </div>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder={`Width (${unit}) e.g. 8`}
                    value={approxWidth}
                    onChange={(e) => setApproxWidth(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:border-cyan-400"
                  />
                  <input
                    type="text"
                    placeholder={`Height (${unit}) e.g. 7`}
                    value={approxHeight}
                    onChange={(e) => setApproxHeight(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Locality in Lucknow */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  5. Site Locality in Lucknow
                </label>
                <select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-cyan-400"
                >
                  {lucknowAreas.map((area) => (
                    <option key={area} value={area} className="bg-slate-900 text-white">
                      {area}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Generated Preview & WhatsApp Action */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Formatted WhatsApp Message
                </span>
                <button
                  onClick={handleCopy}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-lg border border-slate-800/80 text-xs font-mono text-slate-300 whitespace-pre-line leading-relaxed">
                {generatedMessage}
              </div>

              <div className="pt-2 space-y-3">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-slate-950" />
                  <span>Send Request to Bansal Glass on WhatsApp</span>
                </a>

                <p className="text-[11px] text-slate-400 text-center leading-normal">
                  Estimates are non-binding budgetary indications until precise site laser measurements and glass specifications are verified.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
