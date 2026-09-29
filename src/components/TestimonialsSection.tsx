import React from 'react';
import { PLACEHOLDER_TESTIMONIALS, BUSINESS_INFO } from '../data/babyBlissData';
import { Quote, AlertCircle, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F7F2EB] border-t border-[#EAE1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <p className="text-xs font-semibold text-[#1F4E5B] uppercase tracking-wider">
            Parent Experiences
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
            Reassurance for New Mothers, Fathers & Families
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            See the comfort and relief our gentle baby bath solutions bring to daily household routines.
          </p>
        </div>

        {/* Mandatory Transparency Notice Banner */}
        <div className="max-w-2xl mx-auto mb-10 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <strong className="font-semibold">Placeholder Reviews Notice: </strong>
            To maintain strict honesty and prevent fabricated claims, the cards below are clearly designated structured placeholders. Baby Bliss will update this section with verified testimonials from parents in Bengaluru.
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLACEHOLDER_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 rounded-3xl bg-white border border-[#EAE1D7] shadow-2xs hover:shadow-sm transition-all relative overflow-hidden"
            >
              {/* Placeholder Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-tight uppercase text-amber-700 font-medium">
                  [Placeholder Testimonial]
                </span>
                <Quote className="w-5 h-5 text-[#1F4E5B]/20" />
              </div>

              {/* Quote */}
              <blockquote className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6 flex-1">
                “{item.quote}”
              </blockquote>

              {/* Author & Location Info */}
              <div className="pt-4 border-t border-[#F4EFEA] space-y-1">
                <p className="text-xs font-bold text-slate-900">
                  {item.authorRole}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <span>{item.locationArea}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.babyAgeStage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Review CTA for real families */}
        <div className="mt-12 text-center">
          <a
            href={`mailto:${BUSINESS_INFO.email}?subject=Parent%20Feedback%20for%20Baby%20Bliss`}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#1F4E5B] hover:text-[#14353E] underline underline-offset-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Are you a Baby Bliss parent? Email your feedback to {BUSINESS_INFO.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
