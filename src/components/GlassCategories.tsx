import React from 'react';
import { ShieldCheck, Layers, Sparkles, Volume2, Eye } from 'lucide-react';
import { GlassCategory } from '../types';
import { SafeGlassImage } from './SafeGlassImage';

interface GlassCategoriesProps {
  onSelectCategory: (category: GlassCategory | 'All') => void;
}

export const GlassCategories: React.FC<GlassCategoriesProps> = ({ onSelectCategory }) => {
  const categoriesList: Array<{
    category: GlassCategory;
    title: string;
    description: string;
    keyUses: string;
    imageUrl: string;
    icon: React.ReactNode;
  }> = [
    {
      category: 'Safety & Security',
      title: 'Safety & Structural Glass',
      description: 'Engineered toughened and laminated glass for doors, office cabins, railings, and shopfronts.',
      keyUses: 'Frameless doors · Balustrades · Office partitions · Canopies',
      imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-600" />
    },
    {
      category: 'Decorative & Textured',
      title: 'Decorative & Textured Glass',
      description: 'Fluted reeded glass, acid-etched frosted patterns, and designer textures for tactile luxury.',
      keyUses: 'Room dividers · Kitchen cabinets · Shower screens · Pooja doors',
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      icon: <Sparkles className="w-5 h-5 text-indigo-600" />
    },
    {
      category: 'Acoustic & Energy-Efficient',
      title: 'Acoustic & Solar Control Glass',
      description: 'Double glazed units (DGU), Low-E coatings, and tinted reflective glass to reduce heat and noise.',
      keyUses: 'Soundproof windows · Commercial facades · Heat control balconies',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      icon: <Volume2 className="w-5 h-5 text-blue-600" />
    },
    {
      category: 'Mirrors & Coloured',
      title: 'Mirrors & Lacquered Glass',
      description: 'High-definition silver vanity mirrors, gym wall mirrors, and gloss back-painted splashback glass.',
      keyUses: 'Bathroom vanities · Gym walls · Kitchen splashbacks · Wardrobe fronts',
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      icon: <Eye className="w-5 h-5 text-teal-600" />
    },
    {
      category: 'Basic & Architectural',
      title: 'Architectural & Ultra-Clear Float',
      description: 'High-purity float and Low-Iron crystal glass for pristine optical clarity without green edges.',
      keyUses: 'Jewellery counters · Display showcases · Table covers · Shelves',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      icon: <Layers className="w-5 h-5 text-slate-700" />
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
            Engineered Glazing Classifications
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Explore Glass Categories by Application
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Different spaces require specific strength, privacy, and thermal properties. Browse our core glass families to find the right specification for your residential or commercial space in Lucknow.
          </p>
        </div>

        {/* 5-Column / Responsive Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesList.map((cat, idx) => (
            <div
              key={cat.category}
              className={`group bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="relative overflow-hidden">
                  <SafeGlassImage
                    src={cat.imageUrl}
                    alt={cat.title}
                    aspectRatioClass={idx === 0 ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[16/10]'}
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-xs">
                    {cat.icon}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    {cat.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-800 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="text-xs text-slate-500 pt-3 border-t border-slate-100">
                    <strong className="text-slate-700 font-medium">Common Uses: </strong>
                    {cat.keyUses}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    onSelectCategory(cat.category);
                    const el = document.getElementById('catalogue');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-center transition-colors cursor-pointer"
                >
                  View Products in this Category →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
