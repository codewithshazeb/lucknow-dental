import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Building2, Armchair } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Clinic', 'Dental Care', 'Treatment', 'Interior'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Visual artwork representation helper for the clinic gallery
  const renderItemVisual = (item: GalleryItem) => {
    switch (item.badge) {
      case 'Operatory 1':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center text-teal-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]" />
            <Armchair className="w-12 h-12 text-teal-400 mb-2 drop-shadow" />
            <span className="text-xs font-bold text-slate-100">{item.title}</span>
            <span className="text-[11px] text-teal-300/80 mt-1">Hygienic Dental Consultation Suite</span>
          </div>
        );
      case 'Equipment':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-800 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center text-sky-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]" />
            <Sparkles className="w-12 h-12 text-sky-400 mb-2 drop-shadow" />
            <span className="text-xs font-bold text-slate-100">{item.title}</span>
            <span className="text-[11px] text-sky-300/80 mt-1">LED Focus Lighting & Ergonomic Chair</span>
          </div>
        );
      case 'Reception':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center text-emerald-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:12px_12px]" />
            <Building2 className="w-12 h-12 text-emerald-400 mb-2 drop-shadow" />
            <span className="text-xs font-bold text-slate-100">{item.title}</span>
            <span className="text-[11px] text-emerald-300/80 mt-1">Air-Conditioned Patient Lounge</span>
          </div>
        );
      case 'Hygiene':
      case 'Sterilization':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center text-cyan-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:12px_12px]" />
            <ShieldCheck className="w-12 h-12 text-cyan-400 mb-2 drop-shadow" />
            <span className="text-xs font-bold text-slate-100">{item.title}</span>
            <span className="text-[11px] text-cyan-300/80 mt-1">Autoclaved Clinical Standards</span>
          </div>
        );
      default:
        return (
          <div className="w-full h-48 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center text-teal-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:12px_12px]" />
            <Armchair className="w-12 h-12 text-teal-400 mb-2 drop-shadow" />
            <span className="text-xs font-bold text-slate-100">{item.title}</span>
            <span className="text-[11px] text-teal-300/80 mt-1">Clinical Treatment Environment</span>
          </div>
        );
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 uppercase tracking-wider">
            <span>Clinical Environment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Inside Our Dental Clinic
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Take a visual tour of our treatment areas, modern equipment, reception lounge, and sterilization standards in Sector 2, Vikas Nagar.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8 pb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-lg transition-all bg-slate-50 flex flex-col"
            >
              {/* Visual Card */}
              <div className="relative overflow-hidden">
                {renderItemVisual(item)}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-slate-800 shadow-sm">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Sector 2, Vikas Nagar</span>
                  <span className="text-teal-700 font-semibold group-hover:underline">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-fadeIn">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden sm:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden sm:block"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="max-w-2xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="p-2 sm:p-4">
              {renderItemVisual(filteredItems[lightboxIndex])}
            </div>

            <div className="p-6 bg-slate-950 text-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                  {filteredItems[lightboxIndex].category} · {filteredItems[lightboxIndex].badge}
                </span>
                <span className="text-xs text-slate-400">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Lucknow Dental And Implant Center</span>
                <span>Vikas Nagar, Lucknow</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
