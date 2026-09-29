import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { OfferingsSection } from './components/OfferingsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from './data/babyBlissData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedOffering, setSelectedOffering] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedOffering(serviceName);
    }
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleSelectOffering = (offeringTitle: string) => {
    setSelectedOffering(offeringTitle);
    // Smooth scroll to contact form or open modal for immediate completion
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 antialiased selection:bg-[#E2D7CD] selection:text-[#2B2118]">
      
      {/* 1. Header with Baby Bliss branding, navigation, and booking button */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. About Baby Bliss Section */}
        <AboutSection />

        {/* 4. Baby Bath Services & Products Section */}
        <OfferingsSection onSelectOffering={handleSelectOffering} />

        {/* 5. Why Choose Baby Bliss Section */}
        <WhyChooseUsSection />

        {/* 6. How It Works Section */}
        <HowItWorksSection onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Testimonials Section (Strictly labeled placeholder parent feedback) */}
        <TestimonialsSection />

        {/* 8. FAQ Section */}
        <FaqSection />

        {/* 9. Contact & Booking Section with Dodda Banaswadi details, phone, email, form */}
        <ContactSection initialService={selectedOffering} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Booking / Consultation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        selectedOffering={selectedOffering}
      />

      {/* Floating Quick Action Bar for Mobile Touch (Under 15% Mobile Height Cap) */}
      <aside
        aria-label="Quick contact"
        className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EAE1D7] px-4 py-2 flex items-center justify-between gap-3 shadow-lg"
      >
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-800 bg-white border border-[#EAE1D7] rounded-xl shadow-2xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#1F4E5B]" />
          <span>Call 9742173603</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-white bg-[#25D366] rounded-xl shadow-2xs"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </aside>

    </div>
  );
}
