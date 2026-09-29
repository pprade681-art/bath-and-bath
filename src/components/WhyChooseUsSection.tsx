import React, { useState } from 'react';
import { WHY_CHOOSE_POINTS, IMAGE_ASSETS, BUSINESS_INFO } from '../data/babyBlissData';
import { ShieldCheck, Sparkles, CheckCircle, MapPin } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#F5F0E8] border-t border-[#EAE1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-semibold text-[#1F4E5B] uppercase tracking-wider">
            Why Choose Baby Bliss
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
            Safe, Loving Bath Care Backed by Cleanliness and Empathy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every parent wants the gentlest touch for their newborn. Here is why families across Dodda Banaswadi and Bengaluru rely on Baby Bliss for their baby bath routines.
          </p>
        </div>

        {/* Feature Grid with Spotlight Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          {/* Left Column: Image & Cleanliness Spotlight (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#E0D5C7] bg-[#FAF8F5] shadow-lg">
              {!imageError ? (
                <img
                  src={IMAGE_ASSETS.hygieneEssentials}
                  alt="Baby Bliss sterile and gentle baby care essentials, bath thermometer, and soft cotton towels"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-[440px] object-cover"
                />
              ) : (
                <div className="w-full h-[440px] flex flex-col items-center justify-center p-6 bg-[#FAF8F5] text-[#1F4E5B] text-center">
                  <ShieldCheck className="w-12 h-12 mb-2" />
                  <p className="font-semibold text-slate-800">Sterile Infant Essentials</p>
                  <p className="text-xs text-slate-500 mt-1">Hygienic tools and clean cotton handling</p>
                </div>
              )}

              {/* Overlay reassurance card */}
              <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#EAE1D7] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1F4E5B]">
                  <Sparkles className="w-4 h-4" />
                  <span>The Baby Bliss Standard</span>
                </div>
                <p className="text-xs text-slate-700 mt-1">
                  Gentle temperature control, tear-free methods, and sterile washcloth protocols for ultimate infant skin safety.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Clear Editorial Points (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_CHOOSE_POINTS.map((point) => (
              <div
                key={point.id}
                className="p-5 rounded-2xl bg-white border border-[#E8DFD5] shadow-2xs hover:border-[#1F4E5B]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#1F4E5B]">
                      {point.number}
                    </span>
                    <CheckCircle className="w-4 h-4 text-[#1F4E5B]/60" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F4EFEA] text-[11px] text-slate-700 font-medium">
                  <span className="text-[#1F4E5B] font-semibold">Benefit: </span>
                  {point.benefit}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Local Reassurance Strip */}
        <div className="p-6 rounded-2xl bg-white border border-[#E5DDD2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EBF3F4] text-[#1F4E5B] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Based at New Ak Colony, Annaiah Reddy Layout, Dodda Banaswadi
              </h4>
              <p className="text-xs text-slate-600">
                Punctual in-home and local care across Dodda Banaswadi, Kalyan Nagar, HRBR Layout, and surrounding Bengaluru neighborhoods.
              </p>
            </div>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1F4E5B] hover:bg-[#14353E] rounded-full whitespace-nowrap shadow-2xs transition-colors"
          >
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>

      </div>
    </section>
  );
};
