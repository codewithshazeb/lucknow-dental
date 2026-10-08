/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Services } from './components/Services';
import { FeaturedImplant } from './components/FeaturedImplant';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Doctors } from './components/Doctors';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { CodeExportModal } from './components/CodeExportModal';
import { Code2, Download } from 'lucide-react';

export default function App() {
  const [codeModalOpen, setCodeModalOpen] = useState(false);

  const handleScrollToBooking = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-700 selection:text-white relative">
      {/* HTML/CSS/JS Code Banner / Quick Access Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 flex items-center justify-between border-b border-slate-800 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>ZIP Folder Ready · Complete Standalone Website (HTML, CSS, JS)</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/lucknow-dental-clinic.zip"
            download="lucknow-dental-clinic.zip"
            className="text-emerald-300 hover:text-emerald-200 font-bold inline-flex items-center gap-1.5 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download ZIP (23 KB)</span>
          </a>
          <span className="text-slate-600">|</span>
          <button
            onClick={() => setCodeModalOpen(true)}
            className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>View / Copy Code</span>
          </button>
          <span className="text-slate-600">|</span>
          <a
            href="/standalone/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white"
          >
            Preview Standalone ↗
          </a>
        </div>
      </div>

      {/* Sticky Top Navigation */}
      <Navbar onOpenBooking={handleScrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={handleScrollToBooking} />

        {/* Trust & Credibility Metrics Bar */}
        <TrustBar />

        {/* About Clinic */}
        <About onOpenBooking={handleScrollToBooking} />

        {/* Dental Services Overview */}
        <Services onOpenBooking={handleScrollToBooking} />

        {/* Featured Service: Dental Implants */}
        <FeaturedImplant onOpenBooking={handleScrollToBooking} />

        {/* Why Choose Us */}
        <WhyChooseUs onOpenBooking={handleScrollToBooking} />

        {/* Doctors & Clinical Team */}
        <Doctors onOpenBooking={handleScrollToBooking} />

        {/* Verified Google Reviews & Public Profile CTA */}
        <Reviews />

        {/* Inside Our Clinic Gallery with Lightbox */}
        <Gallery />

        {/* Direct Appointment Request Booking Form */}
        <AppointmentSection />

        {/* Location & Map Contact Section */}
        <ContactSection onOpenBooking={handleScrollToBooking} />
      </main>

      {/* Footer & Legal Modals */}
      <Footer onOpenBooking={handleScrollToBooking} />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyCTA onOpenBooking={handleScrollToBooking} />

      {/* HTML, CSS, JS Source Code Viewer Modal */}
      <CodeExportModal
        isOpen={codeModalOpen}
        onClose={() => setCodeModalOpen(false)}
      />
    </div>
  );
}
