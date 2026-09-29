import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, Copy, Check } from 'lucide-react';
import { BUSINESS_INFO, OFFERINGS_DATA } from '../data/babyBlissData';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    parentName: '',
    phone: '',
    email: '',
    babyAge: 'Newborn (0 - 3 months)',
    serviceInterest: initialService || OFFERINGS_DATA[0].title,
    preferredDate: '',
    preferredTimeSlot: 'Morning (9:00 AM - 12:00 PM)',
    areaInBengaluru: 'Dodda Banaswadi',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copied, setCopied] = useState(false);

  // Sync if initialService changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceInterest: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Please enter your name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const ref = `BB-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Baby Bliss (Ref: ${referenceId || 'New Inquiry'}),
My name is ${formData.parentName}.
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Baby Age: ${formData.babyAge}
Interested in: ${formData.serviceInterest}
Preferred Date/Time: ${formData.preferredDate || 'Flexible'} (${formData.preferredTimeSlot})
Location in Bengaluru: ${formData.areaInBengaluru}
Notes: ${formData.notes || 'None'}

Looking forward to hearing from you!`;
    return encodeURIComponent(text);
  };

  const copyInquirySummary = () => {
    const summary = `Baby Bliss Consultation Request
Reference: ${referenceId}
Parent: ${formData.parentName}
Phone: ${formData.phone}
Email: ${formData.email}
Baby Age: ${formData.babyAge}
Service: ${formData.serviceInterest}
Area: ${formData.areaInBengaluru}
Preferred Date: ${formData.preferredDate} (${formData.preferredTimeSlot})
Notes: ${formData.notes}`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#EAE1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-semibold text-[#1F4E5B] uppercase tracking-wider">
            Connect With Baby Bliss
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 [text-wrap:balance]">
            Reach Out for Gentle Bath Care & Consultations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you want to schedule a baby bath session, ask about our care methods, or explore starter products, we are here for you in Dodda Banaswadi, Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Business Info & Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE1D7] shadow-sm space-y-6">
              <h3 className="font-bold text-lg text-slate-900 pb-2 border-b border-[#F4EFEA]">
                Direct Contact Details
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#EBF3F4] text-[#1F4E5B] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Direct Phone Call</p>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-base font-bold text-slate-900 hover:text-[#1F4E5B] transition-colors block mt-0.5"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Quick call for immediate inquiries</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#E7F8EE] text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Instant WhatsApp Chat</p>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors block mt-0.5"
                  >
                    Chat with Baby Bliss (+91 {BUSINESS_INFO.phone})
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Send photos, voice notes, or inquiries</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#EBF3F4] text-[#1F4E5B] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Official Email</p>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-[#1F4E5B] transition-colors break-all block mt-0.5"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">For formal questions, feedback & partner queries</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F5EBE1] text-[#A85A41] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Business Address</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5 leading-snug">
                    {BUSINESS_INFO.address.street}
                  </p>
                  <p className="text-xs text-slate-700 font-medium">
                    {BUSINESS_INFO.address.locality}, {BUSINESS_INFO.address.city}
                  </p>
                  <p className="text-xs text-slate-600">
                    {BUSINESS_INFO.address.state}, {BUSINESS_INFO.address.country}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1.5">
                    Conveniently based in Dodda Banaswadi, serving families across Banaswadi, Kalyan Nagar, HRBR Layout & nearby Bengaluru areas.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-[#F4EFEA]">
                <div className="w-10 h-10 rounded-2xl bg-[#F4EFEA] text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Inquiry Hours</p>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">
                    {BUSINESS_INFO.businessHours}
                  </p>
                </div>
              </div>

            </div>

            {/* Reassurance Note */}
            <div className="p-4 rounded-2xl bg-[#F4EFEA] border border-[#E5DDD2] text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Prompt Response Guarantee: </strong>
              We understand parents have tight baby schedules. We typically respond within a few hours to help you arrange bath care without delay.
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE1D7] shadow-sm">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#F4EFEA] pb-4">
                    <h3 className="font-bold text-xl text-slate-900">
                      Request a Bath Care Consultation
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Share a few details about your baby and preferred timings. We will get back to confirm.
                    </p>
                  </div>

                  {/* Two Column Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Parent Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Parent’s Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-[#FAF8F5] focus:bg-white focus:outline-none transition-colors ${
                          errors.parentName ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-[#EAE1D7] focus:border-[#1F4E5B]'
                        }`}
                      />
                      {errors.parentName && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.parentName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9742173603"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-[#FAF8F5] focus:bg-white focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-[#EAE1D7] focus:border-[#1F4E5B]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. parent@example.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-[#FAF8F5] focus:bg-white focus:outline-none transition-colors ${
                          errors.email ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-[#EAE1D7] focus:border-[#1F4E5B]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Baby Age / Stage */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Baby’s Age or Stage *
                      </label>
                      <select
                        value={formData.babyAge}
                        onChange={(e) => setFormData({ ...formData, babyAge: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#EAE1D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#1F4E5B] transition-colors"
                      >
                        <option value="Expecting Parent (Due Soon)">Expecting Parent (Due Soon)</option>
                        <option value="Newborn (0 - 4 weeks)">Newborn (0 - 4 weeks)</option>
                        <option value="Infant (1 - 3 months)">Infant (1 - 3 months)</option>
                        <option value="Infant (3 - 6 months)">Infant (3 - 6 months)</option>
                        <option value="Older Infant (6 - 12 months)">Older Infant (6 - 12 months)</option>
                        <option value="Toddler (1+ years)">Toddler (1+ years)</option>
                      </select>
                    </div>

                    {/* Service of Interest */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Service or Offering of Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#EAE1D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#1F4E5B] transition-colors"
                      >
                        {OFFERINGS_DATA.map((item) => (
                          <option key={item.id} value={item.title}>
                            {item.title}
                          </option>
                        ))}
                        <option value="General Baby Bath Inquiry">General Baby Bath Inquiry</option>
                      </select>
                    </div>

                    {/* Area in Bengaluru */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Area / Locality in Bengaluru *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.areaInBengaluru}
                        onChange={(e) => setFormData({ ...formData, areaInBengaluru: e.target.value })}
                        placeholder="e.g. Dodda Banaswadi, Kalyan Nagar, etc."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#EAE1D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#1F4E5B] transition-colors"
                      />
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Preferred Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#EAE1D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#1F4E5B] transition-colors"
                      />
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTimeSlot}
                        onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#EAE1D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#1F4E5B] transition-colors"
                      >
                        <option value="Morning (8:30 AM - 11:30 AM)">Morning (8:30 AM - 11:30 AM)</option>
                        <option value="Midday (11:30 AM - 2:30 PM)">Midday (11:30 AM - 2:30 PM)</option>
                        <option value="Afternoon / Evening (3:00 PM - 6:30 PM)">Afternoon / Evening (3:00 PM - 6:30 PM)</option>
                        <option value="Flexible / As per Baby's Routine">Flexible / As per Baby's Routine</option>
                      </select>
                    </div>

                  </div>

                  {/* Special Notes / Questions */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Baby’s Comfort Preferences or Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any notes about umbilical cord healing, cradle cap, sensitive skin, or specific questions..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#EAE1D7] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:border-[#1F4E5B] transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1F4E5B] hover:bg-[#14353E] rounded-full shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Bath Care Request</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2">
                      Baby Bliss respects your family privacy. We will connect with you via phone or WhatsApp.
                    </p>
                  </div>
                </form>
              ) : (
                /* Submission Confirmation State */
                <div className="text-center py-6 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#1F4E5B] bg-[#EBF3F4] px-3 py-1 rounded-full">
                      Reference #{referenceId}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-2">
                      Inquiry Received with Warmth!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-800">{formData.parentName}</strong>. Baby Bliss has recorded your request for <strong>{formData.serviceInterest}</strong> in {formData.areaInBengaluru}.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE1D7] text-left text-xs text-slate-700 space-y-1.5 max-w-md mx-auto">
                    <p><strong>Baby Stage:</strong> {formData.babyAge}</p>
                    <p><strong>Preferred Timing:</strong> {formData.preferredDate || 'Flexible'} ({formData.preferredTimeSlot})</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    {formData.notes && <p><strong>Notes:</strong> {formData.notes}</p>}
                  </div>

                  {/* Instant Direct Transmission Options */}
                  <div className="space-y-3 max-w-md mx-auto pt-2">
                    <p className="text-xs font-semibold text-slate-800">
                      Want an instant reply? Send these details directly to Baby Bliss:
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <a
                        href={`https://wa.me/919742173603?text=${generateWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </a>

                      <a
                        href={`mailto:${BUSINESS_INFO.email}?subject=Consultation%20Request%20(${referenceId})&body=${generateWhatsAppMessage()}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-[#EAE1D7] hover:bg-slate-50 rounded-xl transition-colors"
                      >
                        <Mail className="w-4 h-4 text-[#1F4E5B]" />
                        <span>Send via Email</span>
                      </a>
                    </div>

                    <div className="flex justify-center gap-4 pt-1">
                      <button
                        onClick={copyInquirySummary}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Summary Copied!' : 'Copy Summary'}</span>
                      </button>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            parentName: '',
                            phone: '',
                            email: '',
                            babyAge: 'Newborn (0 - 3 months)',
                            serviceInterest: OFFERINGS_DATA[0].title,
                            preferredDate: '',
                            preferredTimeSlot: 'Morning (9:00 AM - 12:00 PM)',
                            areaInBengaluru: 'Dodda Banaswadi',
                            notes: '',
                          });
                        }}
                        className="text-xs text-[#1F4E5B] hover:underline"
                      >
                        Submit another inquiry
                      </button>
                    </div>

                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
