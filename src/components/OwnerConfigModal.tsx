import React, { useState } from 'react';
import { X, Check, AlertTriangle, Save, RefreshCw, Copy } from 'lucide-react';
import { BusinessConfig } from '../types';

interface OwnerConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  business: BusinessConfig;
  onSave: (updated: BusinessConfig) => void;
}

export const OwnerConfigModal: React.FC<OwnerConfigModalProps> = ({
  isOpen,
  onClose,
  business,
  onSave
}) => {
  const [formData, setFormData] = useState<BusinessConfig>({ ...business });
  const [copyStatus, setCopyStatus] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof BusinessConfig, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggleConfirmed = (key: keyof BusinessConfig['ownerConfirmedFields']) => {
    setFormData((prev) => ({
      ...prev,
      ownerConfirmedFields: {
        ...prev.ownerConfirmedFields,
        [key]: !prev.ownerConfirmedFields[key]
      }
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const pendingList = [
    {
      key: 'phone' as const,
      label: 'Verified Official Phone Number',
      current: formData.phone,
      isConfirmed: formData.ownerConfirmedFields.phone,
      instruction: 'Enter the exact calling phone number for customer inquiries.'
    },
    {
      key: 'whatsApp' as const,
      label: 'Verified WhatsApp Business Number',
      current: formData.whatsAppNumber,
      isConfirmed: formData.ownerConfirmedFields.whatsApp,
      instruction: 'Enter numeric format with country code (e.g., 919876543210 for India).'
    },
    {
      key: 'address' as const,
      label: 'Exact Lucknow Shop / Workshop Address',
      current: formData.address,
      isConfirmed: formData.ownerConfirmedFields.address,
      instruction: 'Specific shop/warehouse street address and pin code in Lucknow.'
    },
    {
      key: 'email' as const,
      label: 'Official Contact Email',
      current: formData.email,
      isConfirmed: formData.ownerConfirmedFields.email,
      instruction: 'Domain email or designated quotation inquiry inbox.'
    },
    {
      key: 'operatingHours' as const,
      label: 'Working Days & Operating Hours',
      current: formData.operatingHours,
      isConfirmed: formData.ownerConfirmedFields.operatingHours,
      instruction: 'Specify opening days and hours (e.g. Mon-Sat 9:30 AM - 8:00 PM).'
    }
  ];

  const pendingCount = pendingList.filter((item) => !item.isConfirmed).length;

  const handleExportJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 shadow-2xl">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900">
                Owner Setup &amp; Pending Verification Checklist
              </h3>
              {pendingCount > 0 ? (
                <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
                  {pendingCount} Pending
                </span>
              ) : (
                <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                  All Verified
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Review, edit, and confirm unverified business information for Bansal Glass before production publishing.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          
          {/* Pending items audit notice */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Missing Details Audit for Business Owner</span>
            </div>
            <p className="leading-relaxed">
              In accordance with business integrity guidelines, all unverified contact credentials have placeholder defaults. Update any field below and check the verification box to save live changes immediately.
            </p>
          </div>

          {/* Checklist Form Fields */}
          <div className="space-y-5">
            
            {/* Phone */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  1. Phone Number (Call CTA)
                </label>
                <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.ownerConfirmedFields.phone}
                    onChange={() => handleToggleConfirmed('phone')}
                    className="rounded text-slate-950 focus:ring-slate-950"
                  />
                  <span>Mark as Verified by Owner</span>
                </label>
              </div>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-950"
              />
              <p className="text-[11px] text-slate-500">
                Used in all click-to-call links and footer contact listings.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  2. WhatsApp Number (Numeric format)
                </label>
                <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.ownerConfirmedFields.whatsApp}
                    onChange={() => handleToggleConfirmed('whatsApp')}
                    className="rounded text-slate-950 focus:ring-slate-950"
                  />
                  <span>Mark as Verified by Owner</span>
                </label>
              </div>
              <input
                type="text"
                value={formData.whatsAppNumber}
                onChange={(e) => handleChange('whatsAppNumber', e.target.value)}
                placeholder="919876543210 (country code + 10 digits)"
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-950"
              />
              <p className="text-[11px] text-slate-500">
                Used to trigger all WhatsApp quotation and product inquiry URLs directly.
              </p>
            </div>

            {/* Address */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  3. Exact Lucknow Address
                </label>
                <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.ownerConfirmedFields.address}
                    onChange={() => handleToggleConfirmed('address')}
                    className="rounded text-slate-950 focus:ring-slate-950"
                  />
                  <span>Mark as Verified by Owner</span>
                </label>
              </div>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="Shop No., Street / Commercial Complex, Lucknow, PIN"
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-950"
              />
              <p className="text-[11px] text-slate-500">
                Displayed in Contact section, Schema.org LocalBusiness, and site footer.
              </p>
            </div>

            {/* Email */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  4. Contact Email
                </label>
                <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.ownerConfirmedFields.email}
                    onChange={() => handleToggleConfirmed('email')}
                    className="rounded text-slate-950 focus:ring-slate-950"
                  />
                  <span>Mark as Verified by Owner</span>
                </label>
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="contact@bansalglasslucknow.com"
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-950"
              />
            </div>

            {/* Operating Hours */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  5. Working Days &amp; Hours
                </label>
                <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.ownerConfirmedFields.operatingHours}
                    onChange={() => handleToggleConfirmed('operatingHours')}
                    className="rounded text-slate-950 focus:ring-slate-950"
                  />
                  <span>Mark as Verified by Owner</span>
                </label>
              </div>
              <input
                type="text"
                value={formData.operatingHours}
                onChange={(e) => handleChange('operatingHours', e.target.value)}
                placeholder="Monday – Saturday: 10:00 AM – 8:00 PM"
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-slate-950"
              />
            </div>

          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href="/bansal-glass-lucknow.zip"
                download="bansal-glass-lucknow.zip"
                className="text-xs text-white bg-slate-900 hover:bg-slate-800 flex items-center gap-1.5 py-2 px-3 rounded-lg font-medium cursor-pointer"
              >
                <span>📦 Download Code (ZIP)</span>
              </a>
              <button
                onClick={handleExportJSON}
                className="text-xs text-slate-600 hover:text-slate-950 flex items-center gap-1.5 py-2 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copyStatus ? 'Copied Config JSON' : 'Copy Config JSON'}</span>
              </button>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto py-2.5 px-4 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-sm cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Save Verified Details</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
