import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GlassCategories } from './components/GlassCategories';
import { GlassCatalogue } from './components/GlassCatalogue';
import { FeaturedServices } from './components/FeaturedServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DesignInspirationGallery } from './components/DesignInspirationGallery';
import { QuotationProcess } from './components/QuotationProcess';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { OwnerConfigModal } from './components/OwnerConfigModal';
import { defaultBusinessConfig, glassProducts, glassServices, galleryItems, faqs } from './data/glassData';
import { BusinessConfig, GlassCategory } from './types';

export function App() {
  const [business, setBusiness] = useState<BusinessConfig>(() => {
    try {
      const stored = localStorage.getItem('bansal_glass_config');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error reading saved business config', e);
    }
    return defaultBusinessConfig;
  });

  const [selectedCategory, setSelectedCategory] = useState<GlassCategory | 'All'>('All');
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);

  // Save to localStorage when owner updates config
  const handleSaveConfig = (updated: BusinessConfig) => {
    setBusiness(updated);
    try {
      localStorage.setItem('bansal_glass_config', JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving business config', e);
    }
  };

  // Calculate count of pending items needing owner confirmation
  const pendingCount = Object.values(business.ownerConfirmedFields).filter((v) => !v).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* 1. Navigation bar with the Bansal Glass logo, page links and prominent WhatsApp CTA */}
      <Navbar
        business={business}
        onOpenOwnerConfig={() => setIsOwnerModalOpen(true)}
        pendingCount={pendingCount}
      />

      <main className="flex-1 pb-16 sm:pb-0">
        {/* 2-6. Hero section (Headline, Supporting text, Primary & Secondary buttons, Image) */}
        <Hero business={business} />

        {/* 7. Glass categories with relevant images */}
        <GlassCategories onSelectCategory={setSelectedCategory} />

        {/* Searchable Glass Catalogue with all 13 products */}
        <GlassCatalogue
          products={glassProducts}
          business={business}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* 8. Featured services (12 confirmed/potential services) */}
        <FeaturedServices services={glassServices} business={business} />

        {/* 9. Why Choose Bansal Glass */}
        <WhyChooseUs business={business} />

        {/* 10. Design inspiration gallery */}
        <DesignInspirationGallery items={galleryItems} business={business} />

        {/* Quotation Process & Interactive Request Journey */}
        <QuotationProcess business={business} />

        {/* 11. Frequently asked questions */}
        <FAQSection faqs={faqs} business={business} />

        {/* 12. Contact and final enquiry CTA */}
        <ContactSection
          business={business}
          onOpenOwnerConfig={() => setIsOwnerModalOpen(true)}
        />
      </main>

      {/* 13. Professional footer */}
      <Footer
        business={business}
        onOpenOwnerConfig={() => setIsOwnerModalOpen(true)}
      />

      {/* Floating WhatsApp button visible on all desktop pages */}
      <FloatingWhatsApp business={business} />

      {/* Mobile Sticky CTA with 15% viewport height cap */}
      <MobileStickyCTA business={business} />

      {/* Owner verification checklist modal */}
      <OwnerConfigModal
        isOpen={isOwnerModalOpen}
        onClose={() => setIsOwnerModalOpen(false)}
        business={business}
        onSave={handleSaveConfig}
      />
    </div>
  );
}

export default App;
