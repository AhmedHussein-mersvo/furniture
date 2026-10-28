import type { Category, CategorySlug, Product } from '../data/products'
import type { Lang } from './translations'

const categoryName: Record<Lang, Record<CategorySlug, string>> = {
  en: {
    bedroom: 'Bedroom',
    salon: 'Salon',
    'living-room': 'Living Room',
    dining: 'Dining',
    office: 'Office',
  },
  ar: {
    bedroom: 'غرف النوم',
    salon: 'صالون',
    'living-room': 'غرفة المعيشة',
    dining: 'السفرة',
    office: 'المكتب',
  },
}

const categoryDescription: Record<Lang, Record<CategorySlug, string>> = {
  en: {
    bedroom: 'Beds, wardrobes, vanities, and complete bedroom suites.',
    salon: 'Elegant reception seating sets for refined salon spaces.',
    'living-room': 'Modern sofas, cabinets, and living room furniture.',
    dining: 'Sideboards, buffets, and dining furniture pieces.',
    office: 'Desks and reception counters for professional spaces.',
  },
  ar: {
    bedroom: 'أسرّة ودواليب وتسريحات وأطقم غرف نوم كاملة.',
    salon: 'جلسات استقبال أنيقة لمساحات الصالون الراقية.',
    'living-room': 'كنب وخزائن وأثاث عصري لغرفة المعيشة.',
    dining: 'بوفيهات وخزائن وقطع أثاث للسفرة.',
    office: 'مكاتب وكاونترات استقبال للمساحات المهنية.',
  },
}

/** English product label prefixes → Arabic */
const productLabelAr: Record<string, string> = {
  'Bedroom Suite': 'طقم غرفة نوم',
  Headboard: 'ظهر السرير',
  Wardrobe: 'دولاب',
  'Vanity Set': 'تسريحة',
  Nightstand: 'كومودينو',
  'Dressing Unit': 'وحدة تزيين',
  'Salon Sofa': 'كنبة صالون',
  'Reception Set': 'طقم استقبال',
  'Classic Armchair': 'كرسي كلاسيك',
  'Salon Seating': 'جلسة صالون',
  'Salon Collection': 'مجموعة صالون',
  'Living Sofa Set': 'طقم جلوس',
  'Display Cabinet': 'دولاب عرض',
  'Living Seating': 'جلسة معيشة',
  Sideboard: 'بوفيه',
  'Dining Buffet': 'بوفيه سفرة',
  'Dining Cabinet': 'دولاب سفرة',
  'Reception Desk': 'مكتب استقبال',
  'Office Counter': 'كاونتر مكتبي',
}

const productShort: Record<Lang, Record<CategorySlug, string>> = {
  en: {
    bedroom: 'Premium bedroom piece from the Al-Faisal collection.',
    salon: 'Premium salon piece from the Al-Faisal collection.',
    'living-room': 'Premium living room piece from the Al-Faisal collection.',
    dining: 'Premium dining piece from the Al-Faisal collection.',
    office: 'Premium office piece from the Al-Faisal collection.',
  },
  ar: {
    bedroom: 'قطعة غرفة نوم فاخرة من مجموعة الفيصل.',
    salon: 'قطعة صالون فاخرة من مجموعة الفيصل.',
    'living-room': 'قطعة معيشة فاخرة من مجموعة الفيصل.',
    dining: 'قطعة سفرة فاخرة من مجموعة الفيصل.',
    office: 'قطعة مكتبية فاخرة من مجموعة الفيصل.',
  },
}

const productDescription: Record<Lang, Record<CategorySlug, string>> = {
  en: {
    bedroom:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    salon:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    'living-room':
      'A carefully crafted living room piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    dining:
      'A carefully crafted dining piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    office:
      'A carefully crafted office piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
  },
  ar: {
    bedroom:
      'قطعة غرفة نوم مصنوعة بعناية لتوفير راحة تدوم وتشطيب راقٍ. تواصل معنا عبر واتساب لمعرفة التوفر والتشطيبات والخيارات المخصصة.',
    salon:
      'قطعة صالون مصنوعة بعناية لتوفير راحة تدوم وتشطيب راقٍ. تواصل معنا عبر واتساب لمعرفة التوفر والتشطيبات والخيارات المخصصة.',
    'living-room':
      'قطعة معيشة مصنوعة بعناية لتوفير راحة تدوم وتشطيب راقٍ. تواصل معنا عبر واتساب لمعرفة التوفر والتشطيبات والخيارات المخصصة.',
    dining:
      'قطعة سفرة مصنوعة بعناية لتوفير راحة تدوم وتشطيب راقٍ. تواصل معنا عبر واتساب لمعرفة التوفر والتشطيبات والخيارات المخصصة.',
    office:
      'قطعة مكتبية مصنوعة بعناية لتوفير راحة تدوم وتشطيب راقٍ. تواصل معنا عبر واتساب لمعرفة التوفر والتشطيبات والخيارات المخصصة.',
  },
}

export function getCategoryName(slug: CategorySlug, lang: Lang) {
  return categoryName[lang][slug]
}

export function getCategoryDescription(slug: CategorySlug, lang: Lang) {
  return categoryDescription[lang][slug]
}

export function localizeCategory(category: Category, lang: Lang): Category {
  return {
    ...category,
    name: getCategoryName(category.slug, lang),
    description: getCategoryDescription(category.slug, lang),
  }
}

export function localizeProductName(name: string, lang: Lang) {
  if (lang === 'en') return name

  const labels = Object.keys(productLabelAr).sort((a, b) => b.length - a.length)
  for (const label of labels) {
    if (name === label || name.startsWith(`${label} `)) {
      const suffix = name.slice(label.length)
      return `${productLabelAr[label]}${suffix}`
    }
  }
  return name
}

export function localizeProduct(product: Product, lang: Lang): Product {
  return {
    ...product,
    name: localizeProductName(product.name, lang),
    shortDescription: productShort[lang][product.category],
    description: productDescription[lang][product.category],
  }
}
