import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO, IMAGE_ASSETS } from '../data/babyBlissData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#F6F1EA] to-[#FAF8F5]">
      {/* Subtle organic background warm ambiance */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#EFE5D8]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#E5ECE9]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Logo Badge & Official Motto */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#EAE1D7] shadow-2xs">
              <img
                src={IMAGE_ASSETS.logo}
                alt="Baby Bliss Company Logo"
                className="w-7 h-7 rounded-full object-cover border border-amber-300/80 shrink-0"
              />
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-slate-900">Baby Bliss</span>
                <span className="hidden xs:inline text-slate-300">·</span>
                <span className="font-semibold text-pink-600 uppercase text-[10px] tracking-wider">Home Baby Bath Services</span>
                <span className="hidden sm:inline text-slate-300">·</span>
                <span className="hidden sm:inline italic text-[#1F4E5B] font-serif text-[11px]">“Care That Comes Home”</span>
              </div>
            </div>

            {/* Unboxed Metadata Trust Line (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold text-[#1F4E5B] tracking-wide uppercase">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#1F4E5B]" />
                <span>New Ak Colony, Dodda Banaswadi</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Safe</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Gentle</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Professional</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] [text-wrap:balance]">
              Where Every Baby Bath Is A Moment Of <span className="text-[#1F4E5B] italic font-serif">Gentle Calm</span> & Pure Care.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Nurturing, hygienic, and stress-free baby bathing solutions tailored for parents in Bengaluru. 
              We blend gentle cradling, verified water warmth, and patient touch so your little one feels safe, 
              giving new families total reassurance and confidence.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#1F4E5B] hover:bg-[#14353E] rounded-full shadow-md hover:shadow-lg transition-all active:scale-[0.98] whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Bath Care Consultation</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-emerald-800 bg-[#E8F7EE] hover:bg-[#D5EFE0] border border-[#C2E8D2] rounded-full transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Quiet Trust Points Adjacency */}
            <div className="pt-4 border-t border-[#EAE1D7] grid grid-cols-3 gap-4 text-slate-700">
              <div>
                <p className="text-lg sm:text-xl font-bold text-[#1F4E5B]">100%</p>
                <p className="text-xs text-slate-500 mt-0.5">Gentle Touch Focus</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-[#1F4E5B]">Sterile</p>
                <p className="text-xs text-slate-500 mt-0.5">Hygiene Protocols</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-[#1F4E5B]">Bengaluru</p>
                <p className="text-xs text-slate-500 mt-0.5">Dodda Banaswadi Hub</p>
              </div>
            </div>

          </div>

          {/* Right Visual Carrier Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer frame with soft shadow & rounded corners */}
              <div className="relative rounded-3xl overflow-hidden border border-[#E8DFD5] bg-[#F2ECE4] shadow-xl">
                {!imageError ? (
                  <img
                    src={IMAGE_ASSETS.hero}
                    alt="Baby Bliss gentle and caring baby bath time in warm water"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-[360px] sm:h-[460px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-[360px] sm:h-[460px] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#F5ECE2] to-[#EAE1D7] text-[#1F4E5B] text-center">
                    <Heart className="w-12 h-12 mb-3 text-[#1F4E5B]/70" />
                    <h3 className="font-semibold text-lg text-slate-800">Baby Bliss Care</h3>
                    <p className="text-xs text-slate-600 mt-1 max-w-xs">Gentle, safe, and hygienic bath routines for your newborn.</p>
                  </div>
                )}

                {/* Subtle bottom info bar overlay with measured contrast */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-5 text-white">
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-200">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Gentle Acclimatization Method</span>
                  </div>
                  <p className="text-sm font-semibold text-white/95 mt-1">
                    Warm, stress-free bath care designed to comfort newborn skin.
                  </p>
                  <p className="text-[11px] text-white/80 mt-1">
                    Serving Dodda Banaswadi & nearby Bengaluru communities
                  </p>
                </div>
              </div>

              {/* Decorative accent card floating slightly */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-sm border border-[#EAE1D7] p-3.5 rounded-2xl shadow-lg items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1F3] text-[#1F4E5B] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Safety Verified Warmth</p>
                  <p className="text-[11px] text-slate-500">Careful temperature verification before every touch</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
