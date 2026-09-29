import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/babyBlissData';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#EAE1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <p className="text-xs font-semibold text-[#1F4E5B] uppercase tracking-wider">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
            Four Simple Steps to a Calming Bath Routine
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From your first message to post-bath cuddles, we ensure a seamless, stress-free experience for parents and baby.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col p-6 rounded-3xl bg-white border border-[#EAE1D7] shadow-2xs hover:border-[#1F4E5B]/40 transition-all hover:shadow-sm"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-[#EBF3F4] text-[#1F4E5B] font-mono font-bold text-sm flex items-center justify-center">
                  {step.number}
                </span>
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300 -mr-2" />
                )}
              </div>

              {/* Step Content */}
              <h3 className="font-bold text-base text-slate-900 mb-2 leading-snug">
                {step.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                {step.description}
              </p>

              {/* Step Detail Footer */}
              <div className="pt-3 border-t border-[#F4EFEA] text-[11px] text-[#1F4E5B] font-medium flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 shrink-0" />
                <span>{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1F4E5B] hover:bg-[#14353E] rounded-full shadow-sm hover:shadow transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Schedule Your Baby’s Session Now</span>
          </button>
        </div>

      </div>
    </section>
  );
};
