import React, { useState } from 'react';
import { X, Copy, Check, Code, FileCode, ExternalLink, Download, Archive } from 'lucide-react';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (contentId: string) => {
    let textToCopy = '';
    if (contentId === 'html') {
      textToCopy = document.getElementById('raw-html-code')?.innerText || '';
    } else if (contentId === 'css') {
      textToCopy = document.getElementById('raw-css-code')?.innerText || '';
    } else if (contentId === 'js') {
      textToCopy = document.getElementById('raw-js-code')?.innerText || '';
    }

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-3 sm:p-6 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-5xl w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-500/10 text-teal-400 rounded-lg">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Complete HTML, CSS & JS Source Code
              </h3>
              <p className="text-xs text-slate-400">
                Pure Vanilla Code · Ready to upload to cPanel, GitHub Pages, Netlify, or open directly in any browser.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/lucknow-dental-clinic.zip"
              download="lucknow-dental-clinic.zip"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download ZIP</span>
            </a>

            <a
              href="/standalone/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-400 bg-teal-950/60 hover:bg-teal-900/60 border border-teal-800/60 rounded-lg transition-colors"
            >
              <span>Open Standalone HTML</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close code modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher & Actions */}
        <div className="px-4 py-2.5 bg-slate-950/50 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'html' ? 'bg-teal-700 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>index.html</span>
            </button>

            <button
              onClick={() => setActiveTab('css')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'css' ? 'bg-teal-700 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>style.css</span>
            </button>

            <button
              onClick={() => setActiveTab('js')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'js' ? 'bg-teal-700 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>script.js</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/lucknow-dental-clinic.zip"
              download="lucknow-dental-clinic.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/80 hover:bg-emerald-900/60 rounded-lg transition-all"
            >
              <Archive className="w-3.5 h-3.5" />
              <span>lucknow-dental-clinic.zip (23 KB)</span>
            </a>

            <button
              onClick={() => handleCopy(activeTab)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition-all cursor-pointer shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : `Copy ${activeTab.toUpperCase()}`}</span>
            </button>
          </div>
        </div>

        {/* Code View Area */}
        <div className="flex-1 overflow-auto p-4 bg-slate-950 font-mono text-xs text-slate-300 leading-relaxed select-all">
          {activeTab === 'html' && (
            <pre id="raw-html-code" className="whitespace-pre">
{`<!-- File: index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lucknow Dental And Implant Center | Dentist in Vikas Nagar, Lucknow</title>
  <meta name="description" content="Lucknow Dental And Implant Center in Vikas Nagar, Lucknow. Explore dental care services, patient reviews, clinic information and request an appointment.">
  <meta name="keywords" content="Dentist in Vikas Nagar Lucknow, Dental clinic in Vikas Nagar Lucknow, Dentist near Vikas Nagar Lucknow, Dental clinic Lucknow, Dental implants in Vikas Nagar">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- CSS Stylesheet -->
  <link rel="stylesheet" href="style.css">

  <!-- Schema.org LocalBusiness Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Lucknow Dental And Implant Center",
    "alternateName": "लखनऊ डेंटल केयर",
    "telephone": "+918887604270",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2/197, Sector 2, Vikas Nagar",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "226022",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "33"
    }
  }
  </script>
</head>
<body>
  <!-- Header, Hero, TrustBar, About, Services, Featured Implants, Why Choose Us, Doctors, Reviews, Gallery, Appointment, Contact, Footer -->
  <!-- (See full file in /standalone/index.html) -->
  <script src="script.js"></script>
</body>
</html>`}
            </pre>
          )}

          {activeTab === 'css' && (
            <pre id="raw-css-code" className="whitespace-pre">
{`/* File: style.css */
/* Complete Vanilla CSS Stylesheet for Lucknow Dental And Implant Center */
:root {
  --primary-navy: #0f172a;
  --secondary-navy: #1e293b;
  --teal-primary: #0f766e;
  --teal-hover: #115e59;
  --teal-light: #ccfbf1;
  --teal-bg: #f0fdfa;
  --accent-cyan: #06b6d4;
  --bg-slate: #f8fafc;
  --white: #ffffff;
  --text-main: #1e293b;
  --text-muted: #64748b;
  --border-color: #e2e8f0;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
}
/* Mobile Responsive & Flexbox/Grid Layout rules */
/* (See complete code in /standalone/style.css) */`}
            </pre>
          )}

          {activeTab === 'js' && (
            <pre id="raw-js-code" className="whitespace-pre">
{`// File: script.js
// Vanilla JavaScript Controller
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  // 2. Services Category Filter
  // 3. Service Detail Modal
  // 4. Doctor Profile Modal
  // 5. Gallery Lightbox Controller
  // 6. Appointment Form Validation & Confirmation
  // 7. Legal Disclaimer & Privacy Modals
});`}
            </pre>
          )}
        </div>

        {/* Footer info inside modal */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>📁 Files saved in: <code className="text-teal-400">/standalone/index.html</code>, <code className="text-teal-400">/standalone/style.css</code>, <code className="text-teal-400">/standalone/script.js</code></span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white font-medium"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
