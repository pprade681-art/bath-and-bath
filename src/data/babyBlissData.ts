import { Offering, WhyChoosePoint, StepItem, TestimonialItem, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Baby Bliss',
  subtitle: 'Home Baby Bath Services',
  motto: 'Care That Comes Home',
  values: ['Safe', 'Gentle', 'Professional'],
  tagline: 'Gentle, Safe & Comforting Baby Bath & Care',
  subheading: 'Specialized home baby bathing and infant care solutions in New Ak Colony, Annaiah Reddy Layout, Dodda Banaswadi, Bengaluru, designed to bring tranquility to babies and complete confidence to parents.',
  phone: '9742173603',
  phoneDisplay: '+91 97421 73603',
  email: 'babybliss416@gmail.com',
  address: {
    street: 'New Ak Colony, Annaiah Reddy Layout',
    locality: 'Dodda Banaswadi',
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    formatted: 'New Ak Colony, Annaiah Reddy Layout, Dodda Banaswadi, Bengaluru, Karnataka, India',
  },
  whatsappUrl: 'https://wa.me/919742173603?text=Hello%20Baby%20Bliss,%20I%20would%20like%20to%20inquire%20about%20your%20baby%20bath%20and%20care%20solutions.',
  businessHours: 'Monday – Sunday: 8:00 AM – 7:00 PM (IST) [Placeholder Schedule]',
  serviceArea: 'Dodda Banaswadi, Annaiah Reddy Layout & surrounding Bengaluru neighborhoods [Placeholder Area Coverage]',
};

export const OFFERINGS_DATA: Offering[] = [
  {
    id: 'gentle-home-bath',
    title: 'Gentle Newborn & Infant Bath Session',
    category: 'services',
    categoryLabel: 'In-Home / Studio Service',
    badge: 'Popular Request',
    shortDescription: 'A calm, supportive bathing session handled with utmost gentleness, correct water warmth, and loving care.',
    fullDescription: 'Designed to transform bath time from a stressful chore into a serene bonding ritual. Baby Bliss provides careful handling, peaceful water acclimatization, and safe support so your little one feels secure and soothed.',
    keyHighlights: [
      'Stress-free water acclimatization designed for baby comfort',
      'Careful thermal check and constant ergonomic head-and-neck support',
      'Hygienic towel wrapping and gentle post-bath drying',
      'Guidance for observing baby comfort cues throughout'
    ],
    idealFor: 'Newborns and infants (0 – 12 months) whose parents seek gentle, professional bathing assistance.',
    placeholderNote: '[Placeholder Note: Session duration, location terms (home visit vs. studio), and pricing to be finalized by Baby Bliss]',
    formatOrDuration: 'Approx. 45 – 60 min session [Placeholder]',
  },
  {
    id: 'soothing-post-bath-massage',
    title: 'Post-Bath Soothing & Gentle Massage Routine',
    category: 'services',
    categoryLabel: 'Care & Comfort Service',
    badge: 'Relaxation & Rest',
    shortDescription: 'A tranquil post-bath routine focusing on light, comforting strokes to ease gas, promote deep relaxation, and assist sleep.',
    fullDescription: 'Following a gentle bath, this soothing session helps baby transition into calm slumber. Gentle stroke techniques provide comfort, ease colic restlessness, and create a tranquil bedtime or nap routine.',
    keyHighlights: [
      'Gentle, rhythm-based infant soothing techniques',
      'Focus on relaxation, muscle ease, and tummy comfort',
      'Calm sensory environment with dim lighting and warm swaddling',
      'Teaches parents comforting bedtime touch sequences'
    ],
    idealFor: 'Babies with evening fussiness, tummy discomfort, or trouble winding down.',
    placeholderNote: '[Placeholder Note: Oils/lotions used or brought by parents to be specified by Baby Bliss]',
    formatOrDuration: 'Approx. 30 – 40 min [Placeholder]',
  },
  {
    id: 'first-time-parent-coaching',
    title: 'First-Time Parents Bath & Handling Coaching',
    category: 'guidance',
    categoryLabel: 'Hands-on Workshop',
    badge: 'Parent Confidence',
    shortDescription: 'One-on-one practical guidance for expectant and new parents to master safe, stress-free baby bathing at home.',
    fullDescription: 'Overcome the fear of bathing a slippery newborn. In this reassuring session, Baby Bliss walks you through setup, water preparation, holding grips, sponge washing, umbilical care precautions, and soothing tricks.',
    keyHighlights: [
      'Ergonomic holding techniques for wet, slippery newborns',
      'Safe water temperature testing and bathtub preparation',
      'Step-by-step face, scalp, fold, and diaper area cleansing routine',
      'Emergency readiness, slip prevention, and nursery warm-up checklist'
    ],
    idealFor: 'Expectant parents, new mothers, fathers, and caregivers wanting hands-on confidence.',
    placeholderNote: '[Placeholder Note: Coaching format (in-home demo or private clinic) to be confirmed by Baby Bliss]',
    formatOrDuration: '60 – 75 min hands-on tutorial [Placeholder]',
  },
  {
    id: 'baby-bath-care-kit',
    title: 'Baby Bliss Gentle Bath & Care Kit',
    category: 'products',
    categoryLabel: 'Care Products [Concept]',
    badge: 'Care Package',
    shortDescription: 'A thoughtfully assembled bundle of gentle bath essentials designed for sensitive newborn skin.',
    fullDescription: 'Curated essentials to make bath time hygienic and organized. Prepared with ultra-soft materials to protect your baby’s delicate skin barrier without harsh chemicals or abrasive textures.',
    keyHighlights: [
      'Ultra-soft pure cotton / muslin washcloths & hooded towel [Placeholder]',
      'Floating baby-safe bath thermometer for instant temperature verification',
      'Gentle natural baby sponge or wash pad [Placeholder]',
      'Hypoallergenic, tear-free cleansing product recommendations [Placeholder]'
    ],
    idealFor: 'Gifting for baby showers, hospital homecoming, or new parent nursery preparation.',
    placeholderNote: '[Placeholder Note: Exact product catalog, ingredients, and retail packaging to be designated by Baby Bliss]',
    formatOrDuration: 'Complete newborn essentials bundle [Placeholder]',
  },
  {
    id: 'sensitive-skin-bath-support',
    title: 'Sensitive Skin & Cradle Cap Gentle Bath Support',
    category: 'services',
    categoryLabel: 'Specialized Bathing Service',
    badge: 'Gentle Scalp & Skin',
    shortDescription: 'Delicate, non-abrasive bath routines tailored for babies with dry skin patches, cradle cap, or heat rash.',
    fullDescription: 'Special care is needed when infant skin is irritated or flaky. This session utilizes lukewarm water management, soft bristle combing technique, and mild soothing procedures to keep skin calm and nourished.',
    keyHighlights: [
      'Lukewarm water duration control to prevent moisture loss',
      'Gentle circular scalp softening and cradle cap flaking care',
      'Zero vigorous rubbing; gentle pat-dry method with soft muslin',
      'Post-bath moisture retention advice tailored to Bengaluru climate'
    ],
    idealFor: 'Infants experiencing cradle cap, dry patches, or sensitivity to standard soaps.',
    placeholderNote: '[Placeholder Note: Protocol details and care formulations to be vetted and specified by Baby Bliss]',
    formatOrDuration: '45 min specialized session [Placeholder]',
  },
  {
    id: 'postpartum-mom-baby-bath-aid',
    title: 'Postpartum Mother & Baby Daily Bath Assistance',
    category: 'guidance',
    categoryLabel: 'Extended Care Support',
    badge: 'Family Relief',
    shortDescription: 'Ongoing daily or weekly bathing assistance during the recovery period following delivery.',
    fullDescription: 'The early weeks after childbirth require physical rest for the mother. Baby Bliss assists with safe daily bathing and drying routines so parents can recuperate without worrying about bath-time logistics.',
    keyHighlights: [
      'Assistance during mother’s post-operative or postpartum recovery',
      'Consistent, hygienic bath routine at your preferred morning/afternoon slot',
      'Tub cleaning and sanitization check before and after each bath',
      'Calm, dependable presence that brings daily peace of mind'
    ],
    idealFor: 'Mothers recovering from C-section or natural delivery needing reliable physical support.',
    placeholderNote: '[Placeholder Note: Multi-day packages, schedules, and booking terms to be decided by Baby Bliss]',
    formatOrDuration: 'Multi-day or weekly package [Placeholder]',
  },
];

export const WHY_CHOOSE_POINTS: WhyChoosePoint[] = [
  {
    id: 'hygiene',
    number: '01',
    title: 'Uncompromising Hygiene & Cleanliness',
    description: 'Every session adheres to strict cleanliness standards—thoroughly washed hands, sanitized tools, and clean, sterile handling protocols to safeguard delicate infant immunity.',
    benefit: 'Safeguards baby’s delicate skin barrier and developing immune system.',
  },
  {
    id: 'gentle-care',
    number: '02',
    title: 'Patient, Tear-Free & Gentle Handling',
    description: 'We believe bathing should never be hurried or forced. We move at your baby’s individual pace, using soft whispers and supportive cradling to prevent distress.',
    benefit: 'Transforms an often-crying ordeal into a peaceful, pleasurable memory.',
  },
  {
    id: 'safety',
    number: '03',
    title: 'Temperature & Slip Safety Protocols',
    description: 'Precise water temperature checks (preventing burns or chills), firm non-slip grips, and continuous head-and-spine support throughout every second in the water.',
    benefit: 'Eliminates parent anxiety about drops, slips, or incorrect temperatures.',
  },
  {
    id: 'convenience',
    number: '04',
    title: 'Local Convenience in Dodda Banaswadi, Bengaluru',
    description: 'Based right in Dodda Banaswadi, Bengaluru, we offer accessible local service with quick response times for families living in Banaswadi and surrounding localities.',
    benefit: 'No stressful long-distance travel with an infant in Bengaluru traffic.',
  },
  {
    id: 'confidence',
    number: '05',
    title: 'Building Lifelong Parent Confidence',
    description: 'We do not just bathe your baby—we explain what we are doing and why. We empower parents with practical tips, hold demonstrations, and calming techniques.',
    benefit: 'You learn how to bathe your baby comfortably on your own with zero fear.',
  },
  {
    id: 'respect',
    number: '06',
    title: 'Respect for Family Traditions & Preferences',
    description: 'Every family has unique routines, cultural bath practices, and preferences. Baby Bliss listens attentively to your wishes and honors your home environment.',
    benefit: 'A respectful, harmonious experience tailored to your parenting style.',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Reach Out & Share Your Baby’s Needs',
    description: 'Call us at 9742173603, message on WhatsApp, or submit our online form with your baby’s age, address in Bengaluru, and your specific requirements.',
    detail: 'Fast response within working hours with clear scheduling details.',
  },
  {
    number: '02',
    title: 'Personalized Care & Schedule Setup',
    description: 'We coordinate an ideal time aligned with your baby’s feeding and sleep rhythm [Placeholder: Baby Bliss booking terms].',
    detail: 'Ensures baby is neither overtired nor overly hungry during the bath.',
  },
  {
    number: '03',
    title: 'Safe, Soothing Bath Experience',
    description: 'We prepare the bath area with pristine hygiene, confirm water temperature, and gently bathe your infant with loving, patient support.',
    detail: 'Calm, steady handholds and gentle water flow keeping baby relaxed.',
  },
  {
    number: '04',
    title: 'Warm Towel Swaddle & Post-Bath Calm',
    description: 'Baby is immediately enveloped in soft, pre-warmed towels, gently dried, moisturized, and prepared for peaceful sleep or feeding.',
    detail: 'Leaves your baby cozy, contented, and ready for deep rest.',
  },
];

export const PLACEHOLDER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'As first-time parents in Dodda Banaswadi, we were terrified of the first few baths. Baby Bliss brought such calm, reassuring energy into our home. Our baby did not cry even once during the water transition!',
    authorRole: 'First-Time Mother',
    locationArea: 'Dodda Banaswadi, Bengaluru',
    babyAgeStage: 'Baby aged 6 weeks',
    isPlaceholder: true,
  },
  {
    id: 'test-2',
    quote: 'The patience and hygiene shown was remarkable. The techniques taught to us for holding our baby securely made all the difference. We now look forward to bath time every day.',
    authorRole: 'Father of Twins',
    locationArea: 'Banaswadi / Kalyan Nagar, Bengaluru',
    babyAgeStage: 'Babies aged 2 months',
    isPlaceholder: true,
  },
  {
    id: 'test-3',
    quote: 'Recovering from my C-section was difficult, and lifting or bending for the bath was painful. Having a gentle and respectful service take care of my baby’s bath with such warmth gave me total peace of mind.',
    authorRole: 'New Mother',
    locationArea: 'Bengaluru East',
    babyAgeStage: 'Baby aged 3 weeks',
    isPlaceholder: true,
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'safety',
    question: 'At what age can baby bath sessions begin?',
    answer: 'Gentle sponge baths can be performed from the first days after birth once the umbilical cord area has been given appropriate initial care. Full immersion or tub baths are typically introduced once the umbilical stump has naturally separated. [Placeholder Note: Exact age criteria and health guidelines to be specified by Baby Bliss].',
  },
  {
    id: 'faq-2',
    category: 'safety',
    question: 'How do you ensure water temperature is safe for infant skin?',
    answer: 'Baby skin is remarkably delicate and thinned compared to adults. We check water temperatures with reliable thermometers to keep the water comfortably warm—around 37°C to 38°C (98.6°F to 100°F)—and perform an elbow/wrist verification before baby touches the water.',
  },
  {
    id: 'faq-3',
    category: 'location',
    question: 'Where are Baby Bliss services provided?',
    answer: 'Baby Bliss is located at New Ak Colony, Annaiah Reddy Layout, Dodda Banaswadi, Bengaluru, Karnataka, India. We offer personalized services for families in Dodda Banaswadi, Annaiah Reddy Layout, and surrounding Bengaluru localities. Please contact us at 9742173603 or via WhatsApp to confirm coverage for your specific neighborhood.',
  },
  {
    id: 'faq-4',
    category: 'booking',
    question: 'What do parents need to prepare prior to the session?',
    answer: 'We recommend having 2 to 3 clean, soft cotton towels, a change of clothes, fresh diaper, and a quiet, draft-free room with comfortable room temperature. [Placeholder Note: Specific list of supplies provided by Baby Bliss vs. parents to be finalized by the business].',
  },
  {
    id: 'faq-5',
    category: 'services',
    question: 'Do you offer bath care products and starter kits as well?',
    answer: 'Yes, Baby Bliss is developing curated baby bath and care solutions. Specific product lineups, formulations, and care accessories are currently in preparation. [Placeholder Note: Product availability and ordering details can be verified by contacting babybliss416@gmail.com].',
  },
  {
    id: 'faq-6',
    category: 'booking',
    question: 'How can I schedule or inquire about a bath session?',
    answer: 'You can easily connect with us by calling or messaging 9742173603 (also available on WhatsApp), emailing babybliss416@gmail.com, or using the booking inquiry form on this website. We respond promptly to understand your baby’s stage and schedule a convenient time.',
  },
];

export const IMAGE_ASSETS = {
  logo: '/src/assets/images/baby_bliss_logo.jpg',
  hero: '/src/assets/images/hero_baby_bath_gentle_1790695112819.jpg',
  about: '/src/assets/images/about_baby_bath_sanctuary_1790695132072.jpg',
  serviceSwaddle: '/src/assets/images/services_baby_swaddle_care_1790695148446.jpg',
  hygieneEssentials: '/src/assets/images/hygiene_care_essentials_1790695162055.jpg',
};
