import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar } from 'lucide-react';
import { BUSINESS_INFO, IMAGE_ASSETS } from '../data/babyBlissData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Offerings', href: '#offerings' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE1D7] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group"
          >
            <img
              src={IMAGE_ASSETS.logo}
              alt="Baby Bliss Company Logo"
              className="w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover shadow-2xs border border-amber-200/80 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1F4E5B] font-display group-hover:text-[#14353E] transition-colors leading-tight">
                Baby Bliss
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-pink-600">
                Home Baby Bath Services
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#1F4E5B] transition-colors py-1 hover:border-b-2 hover:border-[#1F4E5B]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#1F4E5B] transition-colors whitespace-nowrap"
              title="Call Baby Bliss"
            >
              <Phone className="w-3.5 h-3.5 text-[#1F4E5B]" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#1F4E5B] hover:bg-[#14353E] rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Bath Care</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#1F4E5B] rounded-full"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#1F4E5B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E5B]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EAE1D7] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#1F4E5B] hover:bg-[#F2ECE4] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#EAE1D7] flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-800 bg-white border border-[#EAE1D7] rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#1F4E5B]" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Baby Bliss</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-[#1F4E5B] hover:bg-[#14353E] rounded-lg shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Bath Care Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
