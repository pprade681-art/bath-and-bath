import React, { useState } from 'react';
import { X, Calendar, Phone, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, OFFERINGS_DATA, IMAGE_ASSETS } from '../data/babyBlissData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOffering?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedOffering = '',
}) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(selectedOffering || OFFERINGS_DATA[0].title);
  const [babyAge, setBabyAge] = useState('Newborn (0 - 3 months)');
  const [area, setArea] = useState('Dodda Banaswadi');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (selectedOffering) {
      setService(selectedOffering);
    }
  }, [selectedOffering]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !phone.trim()) {
      setError('Please provide your name and phone number');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `Hello Baby Bliss,
My name is ${parentName}.
Phone: ${phone}
Service: ${service}
Baby Age: ${babyAge}
Area: ${area}

I would like to book or inquire about this baby bath care session!`;
    return `https://wa.me/919742173603?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl border border-[#EAE1D7] shadow-2xl overflow-hidden p-6 sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-[#F2ECE4] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-[#F4EFEA]">
              <img
                src={IMAGE_ASSETS.logo}
                alt="Baby Bliss Logo"
                className="w-13 h-13 rounded-full object-cover border border-amber-200/90 shadow-2xs shrink-0"
              />
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1F4E5B] uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Quick Bath Care Booking</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  Schedule with Baby Bliss
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Home Baby Bath Services · Phone: {BUSINESS_INFO.phoneDisplay}
                </p>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-2.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Parent’s Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Radhika Menon"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[#EAE1D7] bg-white focus:outline-none focus:border-[#1F4E5B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9742173603"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[#EAE1D7] bg-white focus:outline-none focus:border-[#1F4E5B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Baby’s Age
                  </label>
                  <select
                    value={babyAge}
                    onChange={(e) => setBabyAge(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[#EAE1D7] bg-white focus:outline-none focus:border-[#1F4E5B]"
                  >
                    <option value="Expecting Parent">Expecting Parent</option>
                    <option value="Newborn (0 - 4 weeks)">Newborn (0 - 4 weeks)</option>
                    <option value="Infant (1 - 3 months)">Infant (1 - 3 months)</option>
                    <option value="Infant (3 - 6 months)">Infant (3 - 6 months)</option>
                    <option value="Older Infant (6 - 12 months)">Older Infant (6 - 12 months)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Requested Offering
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[#EAE1D7] bg-white focus:outline-none focus:border-[#1F4E5B]"
                >
                  {OFFERINGS_DATA.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                  <option value="General Baby Bath Consultation">General Baby Bath Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Area / Locality in Bengaluru
                </label>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Dodda Banaswadi, HRBR Layout, Kalyan Nagar..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[#EAE1D7] bg-white focus:outline-none focus:border-[#1F4E5B]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1F4E5B] hover:bg-[#14353E] rounded-full shadow-sm hover:shadow transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Request to Baby Bliss</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-1 text-xs text-slate-500">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-flex items-center gap-1 hover:text-[#1F4E5B]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1F4E5B]" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Directly</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Thank You, {parentName}!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Your request for <strong>{service}</strong> in {area} has been registered. Baby Bliss will get in touch on {phone}.
            </p>

            <div className="p-3 bg-white rounded-2xl border border-[#EAE1D7] text-xs text-slate-600">
              Fast-track response: Send these details on WhatsApp with one click below.
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="flex-1 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-[#EAE1D7] hover:bg-slate-50 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
