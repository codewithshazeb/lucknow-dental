import React, { useState, useMemo } from 'react';
import { MessageCircle, Info, Eye, X, Check, Image as ImageIcon } from 'lucide-react';
import { GalleryItem, BusinessConfig } from '../types';
import { SafeGlassImage } from './SafeGlassImage';

interface DesignInspirationGalleryProps {
  items: GalleryItem[];
  business: BusinessConfig;
}

export const DesignInspirationGallery: React.FC<DesignInspirationGalleryProps> = ({ items, business }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Residential Interiors',
    'Commercial Spaces',
    'Glass Doors',
    'Office Partitions',
    'Mirrors and Decorative Glass',
    'Windows and Facades'
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  const generateEnquiryUrl = (item: GalleryItem) => {
    const text = `Hello Bansal Glass, I am referencing this design inspiration (${item.title} - ${item.category}) for my property in Lucknow. Please let me know if a similar glass installation can be executed.`;
    return `https://wa.me/${business.whatsAppNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="gallery" className="py-20 bg-slate-100/60 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
            Architectural Concepts &amp; Visual Reference
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Design Inspiration Gallery
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Explore curated architectural concepts to visualize how different glass textures, structural partitions, and mirror fittings transform modern living and commercial environments.
          </p>
        </div>

        {/* Mandatory Transparency Banner (Stock Photography Disclaimer) */}
        <div className="mb-10 p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-900 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong className="font-semibold text-amber-950">Illustrative Design Notice: </strong>
            Bansal Glass currently provides these curated architectural photographs solely as illustrative design inspiration to assist your planning. They are not represented as completed Bansal Glass projects. Every image slot is structured for seamless replacement with authentic company project photographs as site documentation is finalized.
          </div>
        </div>

        {/* Category Tabs (Segmented Controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => setActiveModalItem(item)}
                >
                  <SafeGlassImage
                    src={item.imageUrl}
                    alt={item.title}
                    aspectRatioClass="aspect-[16/11]"
                    badgeText="Illustrative Inspiration"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-medium py-1.5 px-3 rounded-lg shadow-sm">
                      Inspect Concept
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Clean unboxed category */}
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {item.category}
                  </div>
                  <h3
                    onClick={() => setActiveModalItem(item)}
                    className="text-base font-bold text-slate-900 group-hover:text-cyan-900 transition-colors cursor-pointer"
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Recommended Glass: </span>
                    <span className="text-slate-600">{item.suitableGlass}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={generateEnquiryUrl(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Enquire Similar on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Gallery Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{activeModalItem.category}</span>
                <h3 className="text-lg font-bold text-slate-900">{activeModalItem.title}</h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <SafeGlassImage
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                aspectRatioClass="aspect-[16/10]"
                badgeText="Illustrative Design Concept"
              />

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Concept Description</h4>
                <p className="text-sm text-slate-700 leading-relaxed">{activeModalItem.description}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <strong className="text-slate-900">Recommended Glass Specification: </strong>
                {activeModalItem.suitableGlass}
              </div>

              <div className="p-3 rounded-lg bg-amber-50 text-amber-900 text-xs">
                Note: This reference photo illustrates architectural possibility. Final fabrication specs and mounting profiles are customized to your site.
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={generateEnquiryUrl(activeModalItem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Request Similar Custom Installation</span>
                </a>
                <button
                  onClick={() => setActiveModalItem(null)}
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
