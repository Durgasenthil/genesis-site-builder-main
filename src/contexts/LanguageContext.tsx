import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "ta";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.whatwedo": "What We Do",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.appointment": "Appointment",

    // Hero
    "hero.headline": "True Healing Begins Within",
    "hero.subtext":
      "Personalized, ethical and evidence-informed homoeopathic treatment for complete mind-body wellness.",
    "hero.cta.book": "Book Appointment",
    "hero.cta.learn": "Learn More",

    // About
    "about.title": "About Us",
    "about.tagline": "True Healing Begins Within",
    "about.subtitle": "Welcome to Raphael Homoeo Care",
    "about.p1":
      "At Raphael Homoeo Care, we provide individualized classical homoeopathic treatment that focuses on identifying and correcting the root cause of illness — not just suppressing symptoms",
    "about.p2":
      "We treat every patient as unique, offering safe, gentle and scientifically guided care for all age groups",
    "about.badge.natural": "Modern Homoeopathy",
    "about.badge.safe": "Individualized Prescriptions",
    "about.badge.holistic": "Safe for All Ages",
    "about.badge.noside": "Long-term Wellness Approach",
    "about.p3":
      "We combine structured clinical analysis with compassionate listening to ensure complete, responsible healing.",

    // Doctor Highlight
    "doctor.title": "Meet Our Doctor",
    "doctor.subtitle": "Expert Homoeopathic Care",
    "doctor.name": "Dr. Jonitta Sesuraj",
    "doctor.credentials": "BHMS., D.YYE",
    "doctor.registration": "Registered Homoeopathic Practitioner | Registration No: 9761",
    "doctor.description":
      "Dr. Jonitta follows classical homoeopathic principles with a strong focus on ethical and individualized treatment. With years of dedicated practice, she combines modern clinical knowledge with traditional homoeopathic wisdom.",
    "doctor.cta": "View Full Profile",
    "doctor.cta_title": "Take the First Step Towards Natural Healing",
    "doctor.cta_subtitle": "Book your consultation today and experience personalized homoeopathic care.",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive Homoeopathic Care",
    "services.chronic.title": "Chronic Disease",
    "services.chronic.desc":
      "Long-term relief from chronic conditions through personalized treatment plans.",
    "services.child.title": "Child Care",
    "services.child.desc":
      "Gentle, safe remedies for children's health issues and developmental concerns.",
    "services.women.title": "Women's Health",
    "services.women.desc":
      "Specialized care for hormonal balance, PCOS, fertility, and menopause.",
    "services.skin.title": "Skin Disorders",
    "services.skin.desc":
      "Effective treatment for eczema, psoriasis, acne, and other skin conditions.",
    "services.allergy.title": "Allergy & Asthma",
    "services.allergy.desc":
      "Natural relief from allergies, asthma, and respiratory conditions.",
    "services.stress.title": "Stress & Lifestyle",
    "services.stress.desc":
      "Holistic approach to manage stress, anxiety, insomnia, and lifestyle disorders.",
    "services.hair.title": "Hair Fall Treatment",
    "services.hair.desc":
      "Targeted remedies for hair loss, thinning, and scalp conditions.",
    "services.wellness.title": "General Wellness",
    "services.wellness.desc":
      "Boost immunity and overall health with constitutional homoeopathic treatment.",
    "services.learn": "Learn More",

    // What We Do
    "whatwedo.title": "What We Do",
    "whatwedo.subtitle": "Our Treatment Approach",
    "whatwedo.step1": "Detailed Consultation",
    "whatwedo.step2": "Case Analysis",
    "whatwedo.step3": "Personalized Remedy",
    "whatwedo.step4": "Follow-Up",
    "whatwedo.step5": "Long-term Wellness",
    "whatwedo.desc":
      "We believe in treating the whole person, not just the disease. Our patient-centered approach ensures that every individual receives care tailored to their unique constitution, emotional state, and lifestyle.",
    "whatwedo.point1":
      "Listening carefully to understand your complete health story",
    "whatwedo.point2": "Treating the root cause, not just symptoms",
    "whatwedo.point3": "Supporting emotional and physical healing together",

    // Testimonials
    "testimonial.1.text":
      '"After years of struggling with chronic migraines, Raphael Homoeocare gave me lasting relief. The personalized approach made all the difference."',
    "testimonial.1.name": "Priya S.",
    "testimonial.2.text":
      '"My daughter\'s recurring allergies are finally under control. The gentle remedies are perfect for children."',
    "testimonial.2.name": "Karthik R.",
    "testimonial.3.text":
      '"I was skeptical at first, but homoeopathy truly changed my life. My skin condition has improved dramatically."',
    "testimonial.3.name": "Meena V.",

    // Appointment
    "appointment.title": "Book an Appointment",
    "appointment.subtitle": "Take the first step towards natural healing",
    "appointment.name": "Full Name",
    "appointment.phone": "Phone Number",
    "appointment.email": "Email",
    "appointment.age": "Age",
    "appointment.service": "Select Service",
    "appointment.date": "Preferred Date",
    "appointment.time": "Preferred Time",
    "appointment.message": "Your Message",
    "appointment.lang": "Language Preference",
    "appointment.submit": "🌿 Book Consultation",
    "appointment.success": "Redirecting you to WhatsApp...",

    // Specialties
    "specialties.title": "Our Areas of Expertise",
    "specialties.subtitle": "Comprehensive Treatment for Various Health Conditions",
    "specialties.chronic_allergies": "Chronic Allergies",
    "specialties.asthma": "Asthma",
    "specialties.arthritis": "Arthritis",
    "specialties.migraine": "Migraine",
    "specialties.digestive_disorders": "Digestive Disorders",
    "specialties.thyroid_disorders": "Thyroid Disorders",
    "specialties.pcos": "PCOS",
    "specialties.skin_problems": "Skin Problems",
    "specialties.hair_fall": "Hair Fall",
    "specialties.child_immunity": "Child Immunity",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "Is homoeopathy safe?",
    "faq.a1":
      "Yes, homoeopathy is completely safe for people of all ages, including infants, pregnant women, and the elderly. The remedies are made from natural substances and are highly diluted, ensuring no toxic side effects.",
    "faq.q2": "How long does treatment take?",
    "faq.a2":
      "The duration varies depending on the condition. Acute conditions may improve within days, while chronic conditions typically require a few months of consistent treatment for lasting results.",
    "faq.q3": "Are there side effects?",
    "faq.a3":
      "Homoeopathic remedies are known for having no side effects. They work gently with your body's natural healing processes without causing any harmful reactions.",
    "faq.q4": "Can children take homoeopathy?",
    "faq.a4":
      "Absolutely! Homoeopathy is one of the safest forms of medicine for children. The sweet-tasting pills are easy to administer and children respond very well to homoeopathic treatment.",
    "faq.q5": "Do I need prior medical reports?",
    "faq.a5":
      "While not mandatory, bringing your previous medical reports helps us understand your health history better and provide more targeted treatment.",
    "faq.q6": "Is it suitable for chronic diseases?",
    "faq.a6":
      "Yes, homoeopathy is particularly effective for chronic conditions like arthritis, asthma, skin disorders, hormonal imbalances, and digestive issues. It addresses the root cause for long-term relief.",

    // Contact
    "contact.title": "Visit Us",
    "contact.address":
      "A.G.R Complex, L.F Road, Opp to Balavinayagam textiles, Arumuganeri, Thoothukudi Dist, TamilNadu - 628202",
    "contact.hours":
      "Mon - Sat: Morning 10:00 AM - 1:00 PM, Evening 5:00 PM - 9:30 PM",
    "contact.hours2": "Sunday: Closed",
    "contact.phone": "+91-7598125763",
    "contact.email": "raphaelhomoeocare@gmail.com",
    "contact.walkin": "Walk-ins welcome | Prior appointment recommended",

    // Footer
    "footer.tagline": "True Healing Begins Within.",
    "footer.quicklinks": "Quick Links",
    "footer.contactus": "Contact Us",
    "footer.copyright": "© 2026 Raphael Homoeocare. All Rights Reserved.",
  },
  ta: {
    // Header
    "nav.home": "முகப்பு",
    "nav.about": "ஹோமியோபதி பற்றி",
    "nav.services": "சேவைகள்",
    "nav.whatwedo": "நாங்கள் என்ன செய்கிறோம்",
    "nav.faq": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "nav.contact": "தொடர்பு",
    "nav.appointment": "சந்திப்பு",

    // Hero
    "hero.headline": "உண்மை குணப்படுத்துதல் உள்ளில் நடக்குகிறது",
    "hero.subtext":
      "முழுமையான நல்வாழ்வுக்கான தனிப்பயனாக்கப்பட்ட ஹோமியோபதி சிகிச்சை.",
    "hero.cta.book": "சந்திப்பு முன்பதிவு",
    "hero.cta.learn": "மேலும் அறிக",

    // About
    "about.title": "ஹோமியோபதி பற்றி",
    "about.subtitle": "குணப்படுத்துதலுக்கான இயற்கையான பாதை",
    "about.p1":
      "ஹோமியோபதி என்பது உடலின் இயற்கையான குணப்படுத்தும் சக்தியைத் தூண்டும் ஒரு முழுமையான மருத்துவ முறை. அதிக நீர்த்த இயற்கைப் பொருட்களைப் பயன்படுத்தி, நோயின் அறிகுறிகளை மட்டுமல்லாமல் அடிப்படை காரணத்தை சிகிச்சையளிக்கிறது.",
    "about.p2":
      "குழந்தைகள் முதல் முதியோர் வரை அனைத்து வயதினருக்கும் பாதுகாப்பானது — ஹோமியோபதி பக்கவிளைவுகள் இல்லாமல் மெதுவான, பயனுள்ள சிகிச்சையை வழங்குகிறது.",
    "about.badge.natural": "இயற்கையானது",
    "about.badge.safe": "பாதுகாப்பானது",
    "about.badge.holistic": "முழுமையானது",
    "about.badge.noside": "பக்கவிளைவு இல்லை",
    "about.p3":
      "நாங்கள் கட்டமைக்கப்பட்ட மருத்துவ பகுப்பாய்வை அனுதாபமான கேட்கிறுழறையுடன் இணைத்து முழுமையான, பொறுப்பான குணப்படுத்துதலை உறுதி செய்கிறோம்.",

    // Doctor Highlight
    "doctor.title": "எங்கள் டாக்டரைச் சந்திக்கவும்",
    "doctor.subtitle": "நிபுணமான ஹோமியோபதி பராமரிப்பு",
    "doctor.name": "டாக்டர் ஜொனிட்டா செசுராஜ்",
    "doctor.credentials": "BHMS., D.YYE",
    "doctor.registration": "பதிவு செய்யப்பட்ட ஹோமியோபதி பயிற்சியாளர் | பதிவு எண்: 9761",
    "doctor.description":
      "டாக்டர் ஜொனிட்டா சாத்திரீய ஹோமியோபதி கொள்கைகளைப் பின்பற்றுகிறார் மற்றும் நீதியான மற்றும் ஆளுமை சிகிச்சையில் முக்கியமாக கவனம் செலுத்துகிறார். பல ஆண்டுகளின் அர்ப்பணிக்கப்பட்ட பயிற்சியுடன், அவர் நவீன மருத்துவ அறிவை பாரம்பரிய ஹோமியோபதி ஞானத்துடன் இணைக்கிறார்.",
    "doctor.cta": "முழு சுயவிவரணை பார்க்கவும்",
    "doctor.cta_title": "இயற்கையான குணப்படுத்துதலை நோக்கிய முதல் அடியை எடுக்கவும்",
    "doctor.cta_subtitle": "இன்று உங்கள் ஆலோசனையை முன்பதிவு செய்து ஆளுமை ஹோமியோபதி பராமரிப்பை அனுபவிக்கவும்.",

    // Services
    "services.title": "எங்கள் சேவைகள்",
    "services.subtitle": "விரிவான ஹோமியோபதி பராமரிப்பு",
    "services.chronic.title": "நாள்பட்ட நோய்",
    "services.chronic.desc":
      "தனிப்பயனாக்கப்பட்ட சிகிச்சை திட்டங்கள் மூலம் நாள்பட்ட நிலைகளிலிருந்து நீண்டகால நிவாரணம்.",
    "services.child.title": "குழந்தை பராமரிப்பு",
    "services.child.desc":
      "குழந்தைகளின் உடல்நலப் பிரச்சினைகளுக்கு மென்மையான, பாதுகாப்பான தீர்வுகள்.",
    "services.women.title": "பெண்கள் ஆரோக்கியம்",
    "services.women.desc":
      "ஹார்மோன் சமநிலை, PCOS, கருவுறுதல் மற்றும் மாதவிடாய் நிறுத்தத்திற்கான சிறப்பு பராமரிப்பு.",
    "services.skin.title": "தோல் நோய்கள்",
    "services.skin.desc":
      "அரிக்கும் தோலழற்சி, தடிப்புத் தோல் அழற்சி மற்றும் பிற தோல் நிலைகளுக்கான பயனுள்ள சிகிச்சை.",
    "services.allergy.title": "ஒவ்வாமை & ஆஸ்துமா",
    "services.allergy.desc":
      "ஒவ்வாமை, ஆஸ்துமா மற்றும் சுவாச நிலைகளிலிருந்து இயற்கையான நிவாரணம்.",
    "services.stress.title": "மன அழுத்தம் & வாழ்க்கை முறை",
    "services.stress.desc":
      "மன அழுத்தம், பதட்டம், தூக்கமின்மை ஆகியவற்றை நிர்வகிக்க முழுமையான அணுகுமுறை.",
    "services.hair.title": "முடி உதிர்வு சிகிச்சை",
    "services.hair.desc":
      "முடி உதிர்வு, மெலிவு மற்றும் உச்சந்தலை நிலைகளுக்கான இலக்கு தீர்வுகள்.",
    "services.wellness.title": "பொது நலம்",
    "services.wellness.desc":
      "அரசியலமைப்பு ஹோமியோபதி சிகிச்சை மூலம் நோய் எதிர்ப்பு சக்தி மற்றும் ஒட்டுமொத்த ஆரோக்கியத்தை மேம்படுத்துங்கள்.",
    "services.learn": "மேலும் அறிக",

    // What We Do
    "whatwedo.title": "நாங்கள் என்ன செய்கிறோம்",
    "whatwedo.subtitle": "எங்கள் சிகிச்சை அணுகுமுறை",
    "whatwedo.step1": "விரிவான ஆலோசனை",
    "whatwedo.step2": "வழக்கு பகுப்பாய்வு",
    "whatwedo.step3": "தனிப்பயன் மருந்து",
    "whatwedo.step4": "பின்தொடர்தல்",
    "whatwedo.step5": "நீண்டகால நலம்",
    "whatwedo.desc":
      "நோயை மட்டுமல்ல, முழு மனிதனையும் சிகிச்சையளிப்பதில் நாங்கள் நம்புகிறோம். எங்கள் நோயாளி-மைய அணுகுமுறை ஒவ்வொரு நபரும் தங்கள் தனித்துவமான உடலமைப்புக்கு ஏற்ற பராமரிப்பைப் பெறுவதை உறுதிசெய்கிறது.",
    "whatwedo.point1":
      "உங்கள் முழு ஆரோக்கிய வரலாற்றைப் புரிந்துகொள்ள கவனமாகக் கேட்கிறோம்",
    "whatwedo.point2":
      "அறிகுறிகளை மட்டுமல்ல, அடிப்படை காரணத்தை சிகிச்சையளிக்கிறோம்",
    "whatwedo.point3":
      "உணர்ச்சி மற்றும் உடல் குணப்படுத்துதலை ஒன்றாக ஆதரிக்கிறோம்",

    // Specialties
    "specialties.title": "நமது நிபுணத்வ பகுதிகள்",
    "specialties.subtitle": "பல்வேறு உடல்நல நிலைமைகளுக்கான விரிவான சிகிச்சை",
    "specialties.chronic_allergies": "நாள்பட்ட ஒவ்வாமை",
    "specialties.asthma": "ஆஸ்துமா",
    "specialties.arthritis": "மூட்டு வீக்கம்",
    "specialties.migraine": "ஒற்றைத் தலைவலி",
    "specialties.digestive_disorders": "செரிமான கோளாறுகள்",
    "specialties.thyroid_disorders": "தைராய்டு கோளாறுகள்",
    "specialties.pcos": "பி.சி.ஓ.எஸ்",
    "specialties.skin_problems": "தோல் பிரச்சினைகள்",
    "specialties.hair_fall": "முடி உதிர்வு",
    "specialties.child_immunity": "குழந்தை நோய் எதிர்ப்பு சக்தி",

    // Testimonials
    "testimonial.1.text":
      '"நாள்பட்ட ஒற்றைத் தலைவலியால் பல ஆண்டுகள் அவதிப்பட்ட பிறகு, ரஃபேல் ஹோமியோகேர் எனக்கு நீடித்த நிவாரணம் அளித்தது."',
    "testimonial.1.name": "பிரியா எஸ்.",
    "testimonial.2.text":
      '"என் மகளின் மீண்டும் மீண்டும் வரும் ஒவ்வாமை இறுதியாக கட்டுக்குள் வந்துள்ளது. மென்மையான மருந்துகள் குழந்தைகளுக்கு ஏற்றது."',
    "testimonial.2.name": "கார்த்திக் ஆர்.",
    "testimonial.3.text":
      '"முதலில் சந்தேகமாக இருந்தேன், ஆனால் ஹோமியோபதி உண்மையிலேயே என் வாழ்க்கையை மாற்றியது. என் தோல் நிலை வியத்தகு முறையில் மேம்பட்டுள்ளது."',
    "testimonial.3.name": "மீனா வி.",

    // Appointment
    "appointment.title": "சந்திப்பு முன்பதிவு",
    "appointment.subtitle":
      "இயற்கையான குணப்படுத்துதலை நோக்கிய முதல் அடியை எடுங்கள்",
    "appointment.name": "முழு பெயர்",
    "appointment.phone": "தொலைபேசி எண்",
    "appointment.email": "மின்னஞ்சல்",
    "appointment.age": "வயது",
    "appointment.service": "சேவையைத் தேர்ந்தெடுக்கவும்",
    "appointment.date": "விரும்பும் தேதி",
    "appointment.time": "விரும்பும் நேரம்",
    "appointment.message": "உங்கள் செய்தி",
    "appointment.lang": "மொழி விருப்பம்",
    "appointment.submit": "🌿 ஆலோசனை முன்பதிவு",
    "appointment.success": "WhatsApp-க்கு திருப்பிவிடப்படுகிறது...",

    // FAQ
    "faq.title": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    "faq.q1": "ஹோமியோபதி பாதுகாப்பானதா?",
    "faq.a1":
      "ஆம், ஹோமியோபதி குழந்தைகள், கர்ப்பிணிப் பெண்கள் மற்றும் முதியோர் உட்பட அனைத்து வயதினருக்கும் முற்றிலும் பாதுகாப்பானது.",
    "faq.q2": "சிகிச்சை எவ்வளவு நேரம் எடுக்கும்?",
    "faq.a2":
      "கால அளவு நிலையைப் பொறுத்து மாறுபடும். கடுமையான நிலைகள் நாட்களில் மேம்படலாம், நாள்பட்ட நிலைகளுக்கு சில மாதங்கள் தேவைப்படும்.",
    "faq.q3": "பக்கவிளைவுகள் உள்ளனவா?",
    "faq.a3":
      "ஹோமியோபதி மருந்துகளுக்கு பக்கவிளைவுகள் இல்லை என்பது நன்கு அறியப்பட்டது.",
    "faq.q4": "குழந்தைகள் ஹோமியோபதி எடுக்கலாமா?",
    "faq.a4":
      "நிச்சயமாக! ஹோமியோபதி குழந்தைகளுக்கு மிகவும் பாதுகாப்பான மருத்துவ வடிவங்களில் ஒன்றாகும்.",
    "faq.q5": "முன்பதிவு மருத்துவ அறிக்கைகள் தேவையா?",
    "faq.a5":
      "கட்டாயம் இல்லை என்றாலும், உங்கள் முந்தைய மருத்துவ அறிக்கைகளைக் கொண்டு வருவது சிறந்த சிகிச்சையை வழங்க உதவும்.",
    "faq.q6": "நாள்பட்ட நோய்களுக்கு ஏற்றதா?",
    "faq.a6": "ஆம், ஹோமியோபதி நாள்பட்ட நிலைகளுக்கு மிகவும் பயனுள்ளது.",

    // Contact
    "contact.title": "எங்களை சந்தியுங்கள்",
    "contact.address":
      "ஏ.ஜி.ஆர் குறும்பு, எல்.எப் சாலை, பாலவிநாயகம் ஜவுளிக்கு எதிர், ஆறுமுகநேரி, தூத்துக்குடி மாவட்டம், தமிழ்நாடு - 628202",
    "contact.hours": "திங்கள் - சனி: காலை 10:00 - 1:00 PM, மாலை 5:00 - 9:30 PM",
    "contact.hours2": "ஞாயிறு: மூடப்பட்டது",
    "contact.phone": "+91-7598125763",
    "contact.email": "raphaelhomoeocare@gmail.com",
    "contact.walkin":
      "நேரடி வருகை வரவேற்கப்படுகிறது | முன்கூட்டிய சந்திப்பு பரிந்துரைக்கப்படுகிறது",

    // Footer
    "footer.tagline": "உண்மை குணப்படுத்துதல் உள்ளில் நடக்குகிறது.",
    "footer.quicklinks": "விரைவு இணைப்புகள்",
    "footer.contactus": "எங்களை தொடர்பு கொள்ளுங்கள்",
    "footer.copyright":
      "© 2026 ரஃபேல் ஹோமியோகேர். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem("raphael-lang");
    return (stored === "ta" ? "ta" : "en") as Language;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("raphael-lang", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language === "ta" ? "ta" : "en";
    if (language === "ta") {
      document.body.classList.add("font-tamil");
    } else {
      document.body.classList.remove("font-tamil");
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
