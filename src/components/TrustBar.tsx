import React from 'react';
import { Star, MessageSquareQuote, MapPin, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      metric: '4.9★',
      label: 'Google Rating',
      detail: 'Based on verified patient reviews',
      icon: Star,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50/70',
    },
    {
      metric: `${CLINIC_INFO.reviewCount}+`,
      label: 'Patient Reviews',
      detail: 'Local community feedback',
      icon: MessageSquareQuote,
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-50/70',
    },
    {
      metric: 'Vikas Nagar',
      label: 'Convenient Location',
      detail: 'Sector 2, Lucknow',
      icon: MapPin,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50/70',
    },
    {
      metric: 'Open Until 9 PM',
      label: 'Clinic Timing',
      detail: 'Evening consultations available',
      icon: Clock,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50/70',
    },
  ];

  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-4 sm:p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex items-start gap-3.5 pt-3 lg:pt-0 ${
                  index % 2 === 0 ? 'pr-2' : 'pl-2 lg:px-4'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${item.bgColor} shrink-0`}>
                  <Icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <div className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {item.metric}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700">
                    {item.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 truncate">
                    {item.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
