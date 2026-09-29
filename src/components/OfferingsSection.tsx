import React, { useState } from 'react';
import { OFFERINGS_DATA, IMAGE_ASSETS } from '../data/babyBlissData';
import { Offering, OfferingCategory } from '../types';
import { Check, ArrowRight, Info, Sparkles, AlertCircle } from 'lucide-react';

interface OfferingsSectionProps {
  onSelectOffering: (offeringTitle: string) => void;
}

export const OfferingsSection: React.FC<OfferingsSectionProps> = ({ onSelectOffering }) => {
  const [activeCategory, setActiveCategory] = useState<OfferingCategory>('all');
  const [imageError, setImageError] = useState(false);

  const filteredOfferings = OFFERINGS_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const categories: { key: OfferingCategory; label: string }[] = [
    { key: 'all', label: 'All Offerings' },
    { key: 'services', label: 'Bath Services' },
    { key: 'products', label: 'Care Products [Concept]' },
    { key: 'guidance', label: 'Parent Guidance' },
  ];

  return (
    <section id="offerings" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#EAE1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <p className="text-xs font-semibold text-[#1F4E5B] uppercase tracking-wider">
            Services & Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
            Gentle Bath Solutions Crafted for Growing Families
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore our thoughtfully designed baby bath care sessions, parent workshops, and care product concepts.
          </p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F4EFEA] border border-[#E5DDD2] rounded-md text-[11px] text-slate-600 mt-2">
            <Info className="w-3.5 h-3.5 text-[#1F4E5B]" />
            <span>Note: Specific offerings and session rates are currently placeholders to be customized by Baby Bliss.</span>
          </div>
        </div>

        {/* Category Filter Tabs (Interactive buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                activeCategory === cat.key
                  ? 'bg-[#1F4E5B] text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-[#EAE1D7] hover:bg-[#F2ECE4]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Feature Spotlight Banner with Image */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-[#E8DFD5] bg-gradient-to-r from-[#F4ECE3] via-[#FAF4EE] to-[#F1ECE6] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="text-xs font-semibold text-[#1F4E5B] flex items-center gap-1.5 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>The Baby Bliss Promise</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Safe Acclimatization & Cozy Post-Bath Comfort
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                Every session prioritizes gentle water adaptation—slowly introducing warm water so baby feels grounded and secure. Following the bath, we wrap your infant in plush, soft hooded cotton for a calming transition.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
                <span>· Calming water temperatures</span>
                <span>· Non-slip ergonomic grip</span>
                <span>· Post-bath relaxation & rest</span>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#E5DDD2] shadow-sm max-h-52">
                {!imageError ? (
                  <img
                    src={IMAGE_ASSETS.serviceSwaddle}
                    alt="Baby comfortably wrapped in a soft hooded towel after a warm bath"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-[#EAE1D7] flex items-center justify-center text-xs text-slate-500">
                    Post-bath cozy comfort
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredOfferings.map((offering: Offering) => (
            <div
              key={offering.id}
              className="flex flex-col rounded-3xl bg-white border border-[#EAE1D7] hover:border-[#1F4E5B]/50 transition-all duration-200 hover:shadow-md overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 pb-4 border-b border-[#F4EFEA] flex-1">
                {/* Unboxed category metadata with badge if available */}
                <div className="flex items-center justify-between gap-2 text-xs mb-2">
                  <span className="font-semibold text-[#1F4E5B] uppercase tracking-wider text-[11px]">
                    {offering.categoryLabel}
                  </span>
                  {offering.badge && (
                    <span className="text-[11px] font-medium text-slate-500">
                      {offering.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {offering.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {offering.shortDescription}
                </p>

                {/* Key highlights */}
                <div className="space-y-2 mb-4">
                  <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                    Key Highlights:
                  </p>
                  <ul className="space-y-1.5">
                    {offering.keyHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#1F4E5B] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="pt-2 text-xs text-slate-500">
                  <strong className="text-slate-700 font-medium">Ideal For: </strong>
                  {offering.idealFor}
                </div>
              </div>

              {/* Card Footer with explicit placeholder notice & CTA */}
              <div className="p-5 bg-[#FAF8F5] border-t border-[#EAE1D7] space-y-3">
                
                {/* Explicit Placeholder Note */}
                <div className="p-2.5 rounded-xl bg-[#F4EFEA] border border-[#E5DDD2] text-[11px] text-slate-600 flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span className="leading-tight">{offering.placeholderNote}</span>
                </div>

                {/* Action button */}
                <button
                  onClick={() => onSelectOffering(offering.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1F4E5B] hover:text-white bg-white hover:bg-[#1F4E5B] border border-[#1F4E5B]/30 hover:border-[#1F4E5B] rounded-xl transition-all shadow-2xs active:scale-[0.99]"
                >
                  <span>Inquire for {offering.title.includes('Kit') ? 'Kit' : 'Session'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Customization Note for Baby Bliss */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Need a personalized bath routine or custom support in Dodda Banaswadi? Contact us directly and Baby Bliss will tailor an approach suited to your newborn.
        </div>

      </div>
    </section>
  );
};
