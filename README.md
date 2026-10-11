# Bansal Glass — Lucknow

Premium architectural website for **Bansal Glass**, a glass supply and installation business serving residential and commercial customers across Lucknow, Uttar Pradesh, India.

> **Tagline:** "Clarity in Glass. Excellence in Every Detail."

---

## 🌟 Features Included

1. **Homepage Experience**:
   - Top Navigation strictly adhering to the 3-Zone Contract with direct WhatsApp CTA.
   - High-impact Hero section with architectural glass imagery and quick enquiry buttons.
   - Glass Categories section showcasing the 5 primary structural classifications.
   - Complete **Glass Catalogue** with 13 products, search, category filters, and pre-filled WhatsApp enquiry buttons.
   - Interactive **Glass Comparison & Safety Guide** explaining Float vs. Toughened, Laminated, Low-Iron, and DGU.
   - 12 comprehensive **Glazing Services** with typical applications and technical notes.
   - **Why Choose Bansal Glass** with honest value pillars and zero fabricated claims.
   - **Design Inspiration Gallery** across 6 architectural categories with an explicit illustrative reference disclaimer.
   - **Quotation Process & Interactive Estimator**: 4-step journey with an interactive WhatsApp message generator (dimensions, Lucknow locality, project type).
   - Comprehensive **FAQ Section** answering real Lucknow project queries.
   - **Contact & Service Areas**: Direct phone call, WhatsApp, contact enquiry form with genuine validation, and Lucknow map.
   - Professional **Footer** with natural Local SEO indexing.
   - **Floating WhatsApp Button** and **Mobile Sticky CTA** (capped under 15% viewport height).
   - In-app **Owner Setup & Verification Panel** allowing the business owner to update and verify contact credentials live.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **SEO & Schema:** Schema.org `HomeAndConstructionBusiness` JSON-LD, OpenGraph, Canonical tags, XML Sitemap, and robots.txt

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm or bun

### Installation
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

The app will be running at `http://localhost:3000`.

### Building for Production
```bash
npm run build
```
This generates the optimized production build in the `dist/` directory.

---

## 📁 Project Structure

```
├── index.html                   # HTML entry point with LocalBusiness schema & SEO meta
├── package.json                 # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── metadata.json                # Application metadata
├── public/
│   ├── robots.txt               # Search engine crawler instructions
│   ├── sitemap.xml              # XML Sitemap for Lucknow glass indexing
│   └── bansal-glass-lucknow.zip # Complete downloadable project archive
└── src/
    ├── App.tsx                  # Main application orchestrator
    ├── main.tsx                 # React entry point
    ├── index.css                # Global styles and typography setup
    ├── types/
    │   └── index.ts             # TypeScript definitions for products, services, config
    ├── data/
    │   └── glassData.ts         # Central editable source for 13 products & 12 services
    └── components/
        ├── Navbar.tsx           # 3-Zone top navigation
        ├── Hero.tsx             # Hero section
        ├── GlassCategories.tsx  # Product classification cards
        ├── GlassCatalogue.tsx   # Searchable catalogue & comparison guide
        ├── FeaturedServices.tsx # 12 Glazing services
        ├── WhyChooseUs.tsx      # Honest value propositions
        ├── DesignInspirationGallery.tsx # Curated gallery with disclaimer
        ├── QuotationProcess.tsx # 4-step workflow & interactive estimator
        ├── FAQSection.tsx       # FAQ accordion
        ├── ContactSection.tsx   # Contact form, details & Lucknow map
        ├── Footer.tsx           # Professional footer & SEO indexing
        ├── FloatingWhatsApp.tsx # Desktop floating WhatsApp CTA
        ├── MobileStickyCTA.tsx  # Mobile sticky CTA (under 15% viewport height)
        ├── OwnerConfigModal.tsx # Business owner verification panel
        └── SafeGlassImage.tsx   # Resilient image component with architectural SVG fallback
```

---

## ⚙️ Customization & Owner Settings

All business contact details and product/service catalogs are centrally located in `src/data/glassData.ts`. You can also update them in real time using the **Owner Setup & Verification Panel** on the website.

---

© Bansal Glass — Lucknow, Uttar Pradesh, India.
