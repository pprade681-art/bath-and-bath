import React, { useState } from 'react';
import { Heart, Droplets, Shield, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, IMAGE_ASSETS } from '../data/babyBlissData';

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const pillars = [
    {
      title: 'Gentle, Baby-Led Rhythm',
      description: 'We respect every infant’s sensory boundaries. Never rushed or overwhelming—every motion is calculated to reassure and relax.',
      icon: Heart,
    },
    {
      title: 'Pristine Cleanliness Standards',
      description: 'Sterilized preparation, sanitized towels, and clean hands at all stages. We prioritize infant dermatological safety above all.',
      icon: Droplets,
    },
    {
      title: 'Thermal & Ergonomic Safety',
      description: 'Precise water temperature monitoring prevents thermal shock, while secure cradling ensures your baby feels safe and supported.',
      icon: Shield,
    },
    {
      title: 'Parent Empowerment & Peace',
      description: 'We demystify the bath process for new mothers and fathers, building positive bonding memories from the earliest weeks.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#EAE1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-semibold text-[#1F4E5B] uppercase tracking-wider">
            About Baby Bliss
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
            Crafting Peaceful, Loving Bath Routines for Bengaluru Families
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Founded with a heartfelt commitment to infant well-being, Baby Bliss transforms daily bath time into a calm, gentle, and hygienic care ritual right in Dodda Banaswadi, Bengaluru.
          </p>
        </div>

        {/* Narrative & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8DFD5] bg-[#F2ECE4] shadow-md">
              {!imageError ? (
                <img
                  src={IMAGE_ASSETS.about}
                  alt="Baby Bliss pristine baby bath sanctuary with soft towels and warm atmosphere"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-[400px] object-cover"
                />
              ) : (
                <div className="w-full h-[400px] flex flex-col items-center justify-center p-6 bg-[#F5ECE2] text-[#1F4E5B] text-center">
                  <Droplets className="w-12 h-12 mb-2" />
                  <p className="font-semibold text-slate-800">Baby Bliss Sanctuary</p>
                  <p className="text-xs text-slate-500 mt-1">Immaculate, peaceful baby bath care</p>
                </div>
              )}

              {/* Inset Badge Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#EAE1D7] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <MapPin className="w-4 h-4 text-[#1F4E5B]" />
                  <span>New Ak Colony, Dodda Banaswadi, Bengaluru</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  Dedicated to serving expectant parents and growing families with genuine care.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                For new parents, the first weeks of bathing an infant can feel nerve-wracking: slippery soapy skin, uncertainty about water temperature, sensitive umbilical healing, and baby fussiness. 
              </p>
              <p>
                <strong className="text-slate-900 font-semibold">Baby Bliss was born to change that.</strong> We bring warm, gentle, and clinically respectful baby bath and infant care solutions directly to your family. By blending gentle cradling methods, attentive thermal control, and spotless hygiene protocols, we turn what was once anxious into moments of pure serenity.
              </p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-2xl bg-white border border-[#EAE1D7] hover:border-[#1F4E5B]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-[#EBF3F4] text-[#1F4E5B] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-sm text-slate-900">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Trust statement */}
            <div className="p-4 rounded-2xl bg-[#F4EFEA] border border-[#E5DDD2] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1F4E5B] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">Family-Centric Transparency: </span>
                We adhere strictly to gentle, non-medical infant hygiene care. All sessions are structured to keep parents actively informed, comfortable, and in full control of their baby’s care routine.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
