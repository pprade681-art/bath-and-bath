import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, IMAGE_ASSETS } from '../data/babyBlissData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#14353E] text-slate-300 pt-16 pb-12 border-t border-[#1F4E5B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Purpose (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={IMAGE_ASSETS.logo}
                alt="Baby Bliss Logo"
                className="w-14 h-14 rounded-full object-cover border-2 border-amber-300/80 shadow-md bg-white p-0.5"
              />
              <div>
                <h3 className="text-2xl font-bold font-display text-white tracking-tight leading-tight">
                  Baby Bliss
                </h3>
                <p className="text-xs font-semibold text-pink-300 uppercase tracking-wider">
                  Home Baby Bath Services
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Dedicated to safe, gentle, and hygienic baby bath and baby-care solutions for growing families in New Ak Colony, Annaiah Reddy Layout, Dodda Banaswadi, Bengaluru.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-amber-200">
              <Heart className="w-4 h-4 fill-amber-300 text-amber-300 shrink-0" />
              <span className="italic font-serif">“Care That Comes Home”</span>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Baby Bliss
                </a>
              </li>
              <li>
                <a href="#offerings" className="hover:text-white transition-colors">
                  Services & Products
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Parent Feedback
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Common FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Book
                </a>
              </li>
            </ul>
          </div>

          {/* Offerings Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Care Offerings
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>· Gentle Newborn Bath Sessions</li>
              <li>· Post-Bath Soothing & Comfort Routine</li>
              <li>· First-Time Parent Hands-on Coaching</li>
              <li>· Baby Bath Care Starter Bundles [Concept]</li>
              <li>· Sensitive Skin & Scalp Care Assistance</li>
              <li>· Postpartum Daily Bath Assistance</li>
            </ul>
          </div>

          {/* Verified Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Business Location & Contact
            </p>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EBB39D] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.formatted}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EBB39D] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-white font-medium transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EBB39D] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-emerald-200 transition-colors"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Legal / Transparency notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} Baby Bliss. All rights reserved. Dodda Banaswadi, Bengaluru.</p>
            <p className="text-[11px] text-slate-400">
              Transparency Notice: All product ingredients, pricing schedules, and customer feedback marked with [Placeholder] are prepared for customization by Baby Bliss management.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors text-xs shrink-0"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
