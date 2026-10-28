export const translations = {
  en: {
    home: 'Home',
    ourProducts: 'Our Products',
    contactUs: 'Contact Us',
    aboutUs: 'About Us',
    whatsapp: 'WhatsApp',
    language: 'Language',
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
    categories: 'Categories',
    callUs: 'Call Us',
    exploreProducts: 'Explore products',
    talkToUs: 'Talk to us',
    viewAllProducts: 'View all products',
    readMore: 'Read more',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    discountBanner:
      'Shop or contact us through the website and get 5% off',
    heroEyebrow: 'Visual Furniture',
    heroTitleBefore: 'Spaces worth',
    heroTitleHighlight: 'living in',
    heroSubtitle:
      'Distinctive furniture for homes that refuse the ordinary — crafted with presence, comfort, and lasting quality.',
    collections: 'Collections',
    shopByCategory: 'Shop by category',
    shopByCategorySub:
      'From bedroom suites to salon seating — find the pieces that fit your space.',
    viewCollection: 'View collection',
    highlights: 'Highlights',
    featuredPieces: 'Featured pieces',
    whyVisual: 'Why Visual',
    whyTitle: 'Design that feels intentional',
    whyCuratedTitle: 'Curated collections',
    whyCuratedText:
      'Every piece is selected for proportion, material, and lasting everyday comfort.',
    whyDetailTitle: 'Finish & detail',
    whyDetailText:
      'From joinery to upholstery — we obsess over the details you notice up close.',
    whyReachTitle: 'Regional reach',
    whyReachText:
      'Serving clients across Egypt and the UAE with dedicated WhatsApp support.',
    ctaTitle: 'Ready to furnish your space?',
    ctaSubtitle:
      'Tell us what you need — our team will help you find the right pieces for your home or project.',
    contactCta: 'Contact us',
    whatsappNow: 'WhatsApp now',
    chatOnWhatsApp: 'Chat on WhatsApp',
    footerBlurb:
      'Crafting distinctive furniture for homes and spaces that deserve more than ordinary.',
    explore: 'Explore',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  ar: {
    home: 'الرئيسية',
    ourProducts: 'منتجاتنا',
    contactUs: 'تواصل معنا',
    aboutUs: 'من نحن',
    whatsapp: 'واتساب',
    language: 'اللغة',
    lightMode: 'الوضع الفاتح',
    darkMode: 'الوضع الداكن',
    categories: 'الأقسام',
    callUs: 'اتصل بنا',
    exploreProducts: 'استكشف المنتجات',
    talkToUs: 'تحدث معنا',
    viewAllProducts: 'عرض كل المنتجات',
    readMore: 'اقرأ المزيد',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    discountBanner:
      'اشترِ أو تواصل معنا عبر الموقع واحصل على خصم ٥٪',
    heroEyebrow: 'فيجوال فرنتشر',
    heroTitleBefore: 'مساحات تستحق',
    heroTitleHighlight: 'أن تُعاش',
    heroSubtitle:
      'أثاث مميز للمنازل التي ترفض العادي — مصنوع بحضور وراحة وجودة تدوم.',
    collections: 'المجموعات',
    shopByCategory: 'تسوق حسب القسم',
    shopByCategorySub:
      'من غرف النوم إلى صالونات الاستقبال — اعثر على القطع المناسبة لمساحتك.',
    viewCollection: 'عرض المجموعة',
    highlights: 'مختارات',
    featuredPieces: 'قطع مميزة',
    whyVisual: 'لماذا فيجوال',
    whyTitle: 'تصميم مقصود بعناية',
    whyCuratedTitle: 'مجموعات منتقاة',
    whyCuratedText:
      'كل قطعة مختارة من حيث النسبة والخامة والراحة اليومية الدائمة.',
    whyDetailTitle: 'تشطيب وتفاصيل',
    whyDetailText:
      'من النجارة إلى التنجيد — نهتم بالتفاصيل التي تلاحظها عن قرب.',
    whyReachTitle: 'تواجد إقليمي',
    whyReachText:
      'نخدم عملاءنا في مصر والإمارات بدعم مخصص عبر واتساب.',
    ctaTitle: 'جاهز لتأثيث مساحتك؟',
    ctaSubtitle:
      'أخبرنا بما تحتاجه — سيساعدك فريقنا في اختيار القطع المناسبة لمنزلك أو مشروعك.',
    contactCta: 'تواصل معنا',
    whatsappNow: 'واتساب الآن',
    chatOnWhatsApp: 'تحدث عبر واتساب',
    footerBlurb:
      'نصنع أثاثًا مميزًا للمنازل والمساحات التي تستحق أكثر من العادي.',
    explore: 'استكشف',
    contact: 'تواصل',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
  },
} as const

export type Lang = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
