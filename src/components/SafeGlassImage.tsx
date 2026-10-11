import React, { useState } from 'react';

interface SafeGlassImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  badgeText?: string;
}

export const SafeGlassImage: React.FC<SafeGlassImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatioClass = 'aspect-[16/10]',
  badgeText
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${aspectRatioClass} ${className}`}>
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
          {/* Subtle architectural glass reflection sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-white/10 pointer-events-none" />
        </>
      ) : (
        /* Resilient Architectural Glass Graphic Fallback */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-300 relative">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 flex flex-col items-center max-w-xs">
            <div className="w-12 h-12 rounded-lg border border-slate-700 bg-slate-800/80 flex items-center justify-center mb-3 text-cyan-400 shadow-inner">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 3l-8 18M3 8l18 8" />
              </svg>
            </div>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Architectural Glass Specimen</p>
            <p className="text-sm font-medium text-slate-200 line-clamp-2">{alt}</p>
          </div>
        </div>
      )}

      {badgeText && (
        <div className="absolute bottom-2.5 left-2.5 z-10">
          <span className="text-[11px] font-medium tracking-wide bg-slate-950/85 backdrop-blur-md text-slate-300 px-2.5 py-1 rounded border border-slate-800/80">
            {badgeText}
          </span>
        </div>
      )}
    </div>
  );
};
