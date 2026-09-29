import React, { useState } from 'react';
import { FAQ_DATA, BUSINESS_INFO } from '../data/babyBlissData';
import { ChevronDown, ChevronUp, HelpCircle, Phone } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id, FAQ_DATA[1].id]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#EAE1D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <p className="text-xs font-semibold text-[#1F4E5B] uppercase tracking-wider">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
            Answers to Common Parent Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our baby bath routines, safety standards, and service details in Bengaluru.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-[#EAE1D7] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FDFBF9] transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EAE1D7] flex items-center justify-center text-slate-500 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#1F4E5B]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#F5EFE8]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Prompt */}
        <div className="mt-12 p-6 rounded-3xl bg-[#F4EFEA] border border-[#E5DDD2] text-center space-y-3">
          <HelpCircle className="w-6 h-6 text-[#1F4E5B] mx-auto" />
          <h3 className="font-bold text-base text-slate-900">
            Have a question specific to your baby or location?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Reach out directly to Baby Bliss in Dodda Banaswadi. We are happy to discuss your infant’s stage and clarify any questions.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1F4E5B] hover:bg-[#14353E] rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#1F4E5B] bg-white border border-[#E5DDD2] hover:bg-slate-50 rounded-full transition-colors"
            >
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
