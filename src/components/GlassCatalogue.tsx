import React, { useState, useMemo } from 'react';
import { Search, MessageCircle, Info, Check, SlidersHorizontal, BookOpen, X, ArrowUpRight } from 'lucide-react';
import { GlassProduct, GlassCategory, BusinessConfig } from '../types';
import { SafeGlassImage } from './SafeGlassImage';

interface GlassCatalogueProps {
  products: GlassProduct[];
  business: BusinessConfig;
  selectedCategory: GlassCategory | 'All';
  onCategoryChange: (cat: GlassCategory | 'All') => void;
}

export const GlassCatalogue: React.FC<GlassCatalogueProps> = ({
  products,
  business,
  selectedCategory,
  onCategoryChange
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProductModal, setActiveProductModal] = useState<GlassProduct | null>(null);
  const [showComparisonGuide, setShowComparisonGuide] = useState(false);

  const categories: Array<GlassCategory | 'All'> = [
    'All',
    'Safety & Security',
    'Decorative & Textured',
    'Acoustic & Energy-Efficient',
    'Mirrors & Coloured',
    'Basic & Architectural'
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.commonApplications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const generateWhatsAppUrl = (product: GlassProduct) => {
    const text = `Hello Bansal Glass, I am inquiring about ${product.name} for supply/installation in Lucknow. Please share suitable options, thickness recommendations and quotation process.`;
    return `https://wa.me/${business.whatsAppNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="catalogue" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
              Comprehensive Product Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Glass Catalogue
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Explore our core range of architectural, safety, acoustic, and decorative glass types available for custom supply and installation in Lucknow.
            </p>
          </div>

          {/* Guide CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowComparisonGuide(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-cyan-700" />
              <span>Glass Selection &amp; Comparison Guide</span>
            </button>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/90 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search glass by name, application (e.g. partition, shower, toughened)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-950 focus:border-transparent placeholder:text-slate-400 text-slate-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Product count */}
            <div className="text-xs text-slate-500 font-medium px-2 shrink-0">
              Showing <strong className="text-slate-900 font-semibold">{filteredProducts.length}</strong> of {products.length} products
            </div>
          </div>

          {/* Interactive Category Filter Pills (Functional Buttons) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3.5 py-1.5 font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-600 font-medium">No glass types match "{searchQuery}" in this category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('All');
              }}
              className="mt-3 text-xs text-cyan-700 hover:underline font-semibold"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Image Carrier with Resilient Fallback */}
                  <div className="relative overflow-hidden cursor-pointer" onClick={() => setActiveProductModal(product)}>
                    <SafeGlassImage
                      src={product.imageUrl}
                      alt={`${product.name} - Lucknow Glass Supply`}
                      aspectRatioClass="aspect-[16/10]"
                      badgeText="Illustrative Specimen"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Unboxed Metadata (Zero-Pill Discipline) */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-medium text-slate-600">{product.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Lucknow Supply &amp; Fitting</span>
                    </div>

                    <h3
                      onClick={() => setActiveProductModal(product)}
                      className="text-lg font-bold text-slate-900 group-hover:text-cyan-900 transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Common Applications List */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Common Applications
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {product.commonApplications.slice(0, 3).map((app, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-cyan-600 mt-0.5 shrink-0" />
                            <span className="line-clamp-1">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Transparency notice regarding thickness */}
                    <p className="mt-4 text-[11px] text-slate-500 italic">
                      Specifications: {product.typicalThicknessRange}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <a
                    href={generateWhatsAppUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setActiveProductModal(product)}
                    className="w-full py-2 px-3 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 transition-colors cursor-pointer"
                  >
                    View Details &amp; Specifications
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Editable & Removable Product Notice */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-slate-400 shrink-0" />
            <span>
              All product lines are editable. Glass thicknesses and availability are subject to verified site safety and architectural requirements.
            </span>
          </div>
          <span className="text-[11px] text-slate-400 whitespace-nowrap">Bansal Glass · Lucknow Catalogue</span>
        </div>

      </div>

      {/* Product Detail Modal */}
      {activeProductModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">
            
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{activeProductModal.category}</span>
                <h3 className="text-xl font-bold text-slate-900">{activeProductModal.name}</h3>
              </div>
              <button
                onClick={() => setActiveProductModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <SafeGlassImage
                src={activeProductModal.imageUrl}
                alt={activeProductModal.name}
                aspectRatioClass="aspect-[16/9]"
                badgeText="Illustrative Design Reference"
              />

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Product Overview</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{activeProductModal.detailedDesc}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Key Engineering Benefits</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  {activeProductModal.keyBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Common Applications in Lucknow</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {activeProductModal.commonApplications.map((app, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <strong className="text-slate-900">Custom Sizing &amp; Safety Note: </strong>
                {activeProductModal.typicalThicknessRange}. Final selection is tailored to room aperture dimensions, wind load, framing profiles, and structural safety codes.
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={generateWhatsAppUrl(activeProductModal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Enquire for {activeProductModal.name}</span>
                </a>
                <button
                  onClick={() => setActiveProductModal(null)}
                  className="w-full sm:w-auto py-3 px-6 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Comparison Guide Modal */}
      {showComparisonGuide && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl">
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Educational Buyer's Guide</span>
                <h3 className="text-xl font-bold text-slate-900">Understanding Glass Types &amp; Differences</h3>
              </div>
              <button
                onClick={() => setShowComparisonGuide(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 text-sm text-slate-600 leading-relaxed">
              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60">
                <h4 className="font-bold text-slate-900 mb-1">1. Float Glass vs. Toughened (Tempered) Glass</h4>
                <p>
                  Standard float glass is regular un-tempered glass. When broken, it forms large, razor-sharp shards that can cause severe injury. Toughened glass is heated to over 600°C and rapidly chilled. It is 4–5 times stronger and disintegrates into blunt, safe pebbles. <em>Important: Toughened glass cannot be cut or drilled once tempered.</em>
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60">
                <h4 className="font-bold text-slate-900 mb-1">2. Toughened vs. Laminated Glass</h4>
                <p>
                  While toughened glass is strong against blunt impacts, laminated glass provides anti-fallout safety. Laminated glass bonds two sheets with a tough PVB plastic interlayer. If struck, the glass cracks but stays securely glued to the interlayer, preventing anyone from falling through overhead canopies or balcony railings.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60">
                <h4 className="font-bold text-slate-900 mb-1">3. Clear Float vs. Low-Iron Glass (Extra Clear)</h4>
                <p>
                  Standard float glass has a subtle green tint visible at the edges and through thick panels due to trace iron oxide. Low-Iron glass eliminates this green tint entirely, offering pristine crystal transparency. Essential for luxury showcases, museum vitrines, and light-toned back-painted walls.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60">
                <h4 className="font-bold text-slate-900 mb-1">4. Single Glazing vs. Double Glazing (DGU)</h4>
                <p>
                  Single glazing consists of one glass pane. Double Glazing (Insulated Glass Unit) pairs two panes separated by a sealed dehydrated air/argon gap. DGU drastically blocks outdoor traffic noise and cuts solar heat penetration, making homes on busy Lucknow streets peaceful and energy-efficient.
                </p>
              </div>

              <div className="pt-2 text-right">
                <button
                  onClick={() => setShowComparisonGuide(false)}
                  className="py-2.5 px-6 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg cursor-pointer"
                >
                  Understood, Back to Catalogue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
