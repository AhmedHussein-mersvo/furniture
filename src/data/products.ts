export type CategorySlug =
  | 'bedroom'
  | 'salon'
  | 'living-room'
  | 'dining'
  | 'office'

export interface Category {
  slug: CategorySlug
  name: string
  description: string
  image: string
}

export interface Product {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  category: CategorySlug
  image: string
  images: string[]
  featured?: boolean
}

const imageModules = import.meta.glob(
  ['../assets/products/*.jpg', '../assets/products/*.png'],
  {
    eager: true,
    import: 'default',
  },
) as Record<string, string>

function productImage(fileName: string) {
  const key = `../assets/products/${fileName}`
  const src = imageModules[key]
  if (!src) throw new Error(`Missing product image: ${fileName}`)
  return src
}

export const categories: Category[] = [
  {
    slug: 'bedroom',
    name: 'Bedroom',
    description: 'Beds, wardrobes, vanities, and complete bedroom suites.',
    image: productImage('cat_100.jpg'),
  },
  {
    slug: 'salon',
    name: 'Salon',
    description: 'Elegant reception seating sets for refined salon spaces.',
    image: productImage('20.png'),
  },
  {
    slug: 'living-room',
    name: 'Living Room',
    description: 'Modern sofas, cabinets, and living room furniture.',
    image: productImage('cat_134.jpg'),
  },
  {
    slug: 'dining',
    name: 'Dining',
    description: 'Sideboards, buffets, and dining furniture pieces.',
    image: productImage('cat_008.jpg'),
  },
  {
    slug: 'office',
    name: 'Office',
    description: 'Desks and reception counters for professional spaces.',
    image: productImage('cat_075.jpg'),
  },
]

export const products: Product[] = [
  {
    id: '1',
    slug: 'bedroom-suite-cat_001',
    name: 'Bedroom Suite cat_001',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_001.jpg'),
    images: [productImage('cat_001.jpg')],
    featured: true,
  },
  {
    id: '2',
    slug: 'headboard-cat_002',
    name: 'Headboard cat_002',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_002.jpg'),
    images: [productImage('cat_002.jpg')],
  },
  {
    id: '3',
    slug: 'wardrobe-cat_003',
    name: 'Wardrobe cat_003',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_003.jpg'),
    images: [productImage('cat_003.jpg')],
  },
  {
    id: '4',
    slug: 'vanity-set-cat_004',
    name: 'Vanity Set cat_004',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_004.jpg'),
    images: [productImage('cat_004.jpg')],
  },
  {
    id: '5',
    slug: 'nightstand-cat_005',
    name: 'Nightstand cat_005',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_005.jpg'),
    images: [productImage('cat_005.jpg')],
  },
  {
    id: '6',
    slug: 'dressing-unit-cat_006',
    name: 'Dressing Unit cat_006',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_006.jpg'),
    images: [productImage('cat_006.jpg')],
  },
  {
    id: '7',
    slug: 'bedroom-suite-cat_007',
    name: 'Bedroom Suite cat_007',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_007.jpg'),
    images: [productImage('cat_007.jpg')],
  },
  {
    id: '8',
    slug: 'headboard-cat_009',
    name: 'Headboard cat_009',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_009.jpg'),
    images: [productImage('cat_009.jpg')],
  },
  {
    id: '9',
    slug: 'wardrobe-cat_010',
    name: 'Wardrobe cat_010',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_010.jpg'),
    images: [productImage('cat_010.jpg')],
  },
  {
    id: '10',
    slug: 'vanity-set-cat_012',
    name: 'Vanity Set cat_012',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_012.jpg'),
    images: [productImage('cat_012.jpg')],
  },
  {
    id: '11',
    slug: 'nightstand-cat_013',
    name: 'Nightstand cat_013',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_013.jpg'),
    images: [productImage('cat_013.jpg')],
  },
  {
    id: '12',
    slug: 'dressing-unit-cat_014',
    name: 'Dressing Unit cat_014',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_014.jpg'),
    images: [productImage('cat_014.jpg')],
  },
  {
    id: '13',
    slug: 'bedroom-suite-cat_015',
    name: 'Bedroom Suite cat_015',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_015.jpg'),
    images: [productImage('cat_015.jpg')],
  },
  {
    id: '14',
    slug: 'headboard-cat_016',
    name: 'Headboard cat_016',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_016.jpg'),
    images: [productImage('cat_016.jpg')],
  },
  {
    id: '15',
    slug: 'wardrobe-cat_017',
    name: 'Wardrobe cat_017',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_017.jpg'),
    images: [productImage('cat_017.jpg')],
  },
  {
    id: '16',
    slug: 'vanity-set-cat_018',
    name: 'Vanity Set cat_018',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_018.jpg'),
    images: [productImage('cat_018.jpg')],
  },
  {
    id: '17',
    slug: 'nightstand-cat_019',
    name: 'Nightstand cat_019',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_019.jpg'),
    images: [productImage('cat_019.jpg')],
  },
  {
    id: '18',
    slug: 'dressing-unit-cat_020',
    name: 'Dressing Unit cat_020',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_020.jpg'),
    images: [productImage('cat_020.jpg')],
    featured: true,
  },
  {
    id: '19',
    slug: 'bedroom-suite-cat_021',
    name: 'Bedroom Suite cat_021',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_021.jpg'),
    images: [productImage('cat_021.jpg')],
  },
  {
    id: '20',
    slug: 'headboard-cat_022',
    name: 'Headboard cat_022',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_022.jpg'),
    images: [productImage('cat_022.jpg')],
  },
  {
    id: '21',
    slug: 'wardrobe-cat_023',
    name: 'Wardrobe cat_023',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_023.jpg'),
    images: [productImage('cat_023.jpg')],
  },
  {
    id: '22',
    slug: 'vanity-set-cat_024',
    name: 'Vanity Set cat_024',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_024.jpg'),
    images: [productImage('cat_024.jpg')],
  },
  {
    id: '23',
    slug: 'nightstand-cat_025',
    name: 'Nightstand cat_025',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_025.jpg'),
    images: [productImage('cat_025.jpg')],
  },
  {
    id: '24',
    slug: 'dressing-unit-cat_026',
    name: 'Dressing Unit cat_026',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_026.jpg'),
    images: [productImage('cat_026.jpg')],
  },
  {
    id: '25',
    slug: 'bedroom-suite-cat_027',
    name: 'Bedroom Suite cat_027',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_027.jpg'),
    images: [productImage('cat_027.jpg')],
  },
  {
    id: '26',
    slug: 'headboard-cat_028',
    name: 'Headboard cat_028',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_028.jpg'),
    images: [productImage('cat_028.jpg')],
  },
  {
    id: '27',
    slug: 'wardrobe-cat_029',
    name: 'Wardrobe cat_029',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_029.jpg'),
    images: [productImage('cat_029.jpg')],
  },
  {
    id: '28',
    slug: 'vanity-set-cat_030',
    name: 'Vanity Set cat_030',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_030.jpg'),
    images: [productImage('cat_030.jpg')],
  },
  {
    id: '29',
    slug: 'nightstand-cat_031',
    name: 'Nightstand cat_031',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_031.jpg'),
    images: [productImage('cat_031.jpg')],
  },
  {
    id: '30',
    slug: 'dressing-unit-cat_032',
    name: 'Dressing Unit cat_032',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_032.jpg'),
    images: [productImage('cat_032.jpg')],
  },
  {
    id: '31',
    slug: 'bedroom-suite-cat_033',
    name: 'Bedroom Suite cat_033',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_033.jpg'),
    images: [productImage('cat_033.jpg')],
  },
  {
    id: '32',
    slug: 'headboard-cat_034',
    name: 'Headboard cat_034',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_034.jpg'),
    images: [productImage('cat_034.jpg')],
  },
  {
    id: '33',
    slug: 'wardrobe-cat_035',
    name: 'Wardrobe cat_035',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_035.jpg'),
    images: [productImage('cat_035.jpg')],
  },
  {
    id: '34',
    slug: 'vanity-set-cat_036',
    name: 'Vanity Set cat_036',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_036.jpg'),
    images: [productImage('cat_036.jpg')],
  },
  {
    id: '35',
    slug: 'nightstand-cat_037',
    name: 'Nightstand cat_037',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_037.jpg'),
    images: [productImage('cat_037.jpg')],
  },
  {
    id: '36',
    slug: 'dressing-unit-cat_038',
    name: 'Dressing Unit cat_038',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_038.jpg'),
    images: [productImage('cat_038.jpg')],
  },
  {
    id: '37',
    slug: 'bedroom-suite-cat_039',
    name: 'Bedroom Suite cat_039',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_039.jpg'),
    images: [productImage('cat_039.jpg')],
  },
  {
    id: '38',
    slug: 'headboard-cat_040',
    name: 'Headboard cat_040',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_040.jpg'),
    images: [productImage('cat_040.jpg')],
    featured: true,
  },
  {
    id: '39',
    slug: 'wardrobe-cat_041',
    name: 'Wardrobe cat_041',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_041.jpg'),
    images: [productImage('cat_041.jpg')],
  },
  {
    id: '40',
    slug: 'vanity-set-cat_043',
    name: 'Vanity Set cat_043',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_043.jpg'),
    images: [productImage('cat_043.jpg')],
  },
  {
    id: '41',
    slug: 'nightstand-cat_044',
    name: 'Nightstand cat_044',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_044.jpg'),
    images: [productImage('cat_044.jpg')],
  },
  {
    id: '42',
    slug: 'dressing-unit-cat_045',
    name: 'Dressing Unit cat_045',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_045.jpg'),
    images: [productImage('cat_045.jpg')],
  },
  {
    id: '43',
    slug: 'bedroom-suite-cat_049',
    name: 'Bedroom Suite cat_049',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_049.jpg'),
    images: [productImage('cat_049.jpg')],
  },
  {
    id: '44',
    slug: 'headboard-cat_050',
    name: 'Headboard cat_050',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_050.jpg'),
    images: [productImage('cat_050.jpg')],
    featured: true,
  },
  {
    id: '45',
    slug: 'wardrobe-cat_051',
    name: 'Wardrobe cat_051',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_051.jpg'),
    images: [productImage('cat_051.jpg')],
  },
  {
    id: '46',
    slug: 'vanity-set-cat_052',
    name: 'Vanity Set cat_052',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_052.jpg'),
    images: [productImage('cat_052.jpg')],
  },
  {
    id: '47',
    slug: 'nightstand-cat_053',
    name: 'Nightstand cat_053',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_053.jpg'),
    images: [productImage('cat_053.jpg')],
  },
  {
    id: '48',
    slug: 'dressing-unit-cat_054',
    name: 'Dressing Unit cat_054',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_054.jpg'),
    images: [productImage('cat_054.jpg')],
  },
  {
    id: '49',
    slug: 'bedroom-suite-cat_055',
    name: 'Bedroom Suite cat_055',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_055.jpg'),
    images: [productImage('cat_055.jpg')],
  },
  {
    id: '50',
    slug: 'headboard-cat_056',
    name: 'Headboard cat_056',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_056.jpg'),
    images: [productImage('cat_056.jpg')],
  },
  {
    id: '51',
    slug: 'wardrobe-cat_057',
    name: 'Wardrobe cat_057',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_057.jpg'),
    images: [productImage('cat_057.jpg')],
  },
  {
    id: '52',
    slug: 'vanity-set-cat_058',
    name: 'Vanity Set cat_058',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_058.jpg'),
    images: [productImage('cat_058.jpg')],
  },
  {
    id: '53',
    slug: 'nightstand-cat_059',
    name: 'Nightstand cat_059',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_059.jpg'),
    images: [productImage('cat_059.jpg')],
  },
  {
    id: '54',
    slug: 'dressing-unit-cat_060',
    name: 'Dressing Unit cat_060',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_060.jpg'),
    images: [productImage('cat_060.jpg')],
  },
  {
    id: '55',
    slug: 'bedroom-suite-cat_061',
    name: 'Bedroom Suite cat_061',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_061.jpg'),
    images: [productImage('cat_061.jpg')],
  },
  {
    id: '56',
    slug: 'headboard-cat_062',
    name: 'Headboard cat_062',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_062.jpg'),
    images: [productImage('cat_062.jpg')],
  },
  {
    id: '57',
    slug: 'wardrobe-cat_063',
    name: 'Wardrobe cat_063',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_063.jpg'),
    images: [productImage('cat_063.jpg')],
  },
  {
    id: '58',
    slug: 'vanity-set-cat_064',
    name: 'Vanity Set cat_064',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_064.jpg'),
    images: [productImage('cat_064.jpg')],
  },
  {
    id: '59',
    slug: 'nightstand-cat_065',
    name: 'Nightstand cat_065',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_065.jpg'),
    images: [productImage('cat_065.jpg')],
  },
  {
    id: '60',
    slug: 'dressing-unit-cat_066',
    name: 'Dressing Unit cat_066',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_066.jpg'),
    images: [productImage('cat_066.jpg')],
  },
  {
    id: '61',
    slug: 'bedroom-suite-cat_067',
    name: 'Bedroom Suite cat_067',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_067.jpg'),
    images: [productImage('cat_067.jpg')],
  },
  {
    id: '62',
    slug: 'headboard-cat_068',
    name: 'Headboard cat_068',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_068.jpg'),
    images: [productImage('cat_068.jpg')],
  },
  {
    id: '63',
    slug: 'wardrobe-cat_069',
    name: 'Wardrobe cat_069',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_069.jpg'),
    images: [productImage('cat_069.jpg')],
  },
  {
    id: '64',
    slug: 'vanity-set-cat_071',
    name: 'Vanity Set cat_071',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_071.jpg'),
    images: [productImage('cat_071.jpg')],
  },
  {
    id: '65',
    slug: 'nightstand-cat_072',
    name: 'Nightstand cat_072',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_072.jpg'),
    images: [productImage('cat_072.jpg')],
  },
  {
    id: '66',
    slug: 'dressing-unit-cat_073',
    name: 'Dressing Unit cat_073',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_073.jpg'),
    images: [productImage('cat_073.jpg')],
  },
  {
    id: '67',
    slug: 'bedroom-suite-cat_074',
    name: 'Bedroom Suite cat_074',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_074.jpg'),
    images: [productImage('cat_074.jpg')],
  },
  {
    id: '68',
    slug: 'headboard-cat_076',
    name: 'Headboard cat_076',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_076.jpg'),
    images: [productImage('cat_076.jpg')],
  },
  {
    id: '69',
    slug: 'wardrobe-cat_077',
    name: 'Wardrobe cat_077',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_077.jpg'),
    images: [productImage('cat_077.jpg')],
  },
  {
    id: '70',
    slug: 'vanity-set-cat_078',
    name: 'Vanity Set cat_078',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_078.jpg'),
    images: [productImage('cat_078.jpg')],
  },
  {
    id: '71',
    slug: 'nightstand-cat_079',
    name: 'Nightstand cat_079',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_079.jpg'),
    images: [productImage('cat_079.jpg')],
  },
  {
    id: '72',
    slug: 'dressing-unit-cat_080',
    name: 'Dressing Unit cat_080',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_080.jpg'),
    images: [productImage('cat_080.jpg')],
  },
  {
    id: '73',
    slug: 'bedroom-suite-cat_081',
    name: 'Bedroom Suite cat_081',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_081.jpg'),
    images: [productImage('cat_081.jpg')],
  },
  {
    id: '74',
    slug: 'headboard-cat_082',
    name: 'Headboard cat_082',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_082.jpg'),
    images: [productImage('cat_082.jpg')],
  },
  {
    id: '75',
    slug: 'wardrobe-cat_083',
    name: 'Wardrobe cat_083',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_083.jpg'),
    images: [productImage('cat_083.jpg')],
  },
  {
    id: '76',
    slug: 'vanity-set-cat_084',
    name: 'Vanity Set cat_084',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_084.jpg'),
    images: [productImage('cat_084.jpg')],
  },
  {
    id: '77',
    slug: 'nightstand-cat_085',
    name: 'Nightstand cat_085',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_085.jpg'),
    images: [productImage('cat_085.jpg')],
  },
  {
    id: '78',
    slug: 'dressing-unit-cat_086',
    name: 'Dressing Unit cat_086',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_086.jpg'),
    images: [productImage('cat_086.jpg')],
  },
  {
    id: '79',
    slug: 'bedroom-suite-cat_087',
    name: 'Bedroom Suite cat_087',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_087.jpg'),
    images: [productImage('cat_087.jpg')],
  },
  {
    id: '80',
    slug: 'headboard-cat_088',
    name: 'Headboard cat_088',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_088.jpg'),
    images: [productImage('cat_088.jpg')],
  },
  {
    id: '81',
    slug: 'wardrobe-cat_089',
    name: 'Wardrobe cat_089',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_089.jpg'),
    images: [productImage('cat_089.jpg')],
  },
  {
    id: '82',
    slug: 'vanity-set-cat_090',
    name: 'Vanity Set cat_090',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_090.jpg'),
    images: [productImage('cat_090.jpg')],
  },
  {
    id: '83',
    slug: 'nightstand-cat_091',
    name: 'Nightstand cat_091',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_091.jpg'),
    images: [productImage('cat_091.jpg')],
  },
  {
    id: '84',
    slug: 'dressing-unit-cat_092',
    name: 'Dressing Unit cat_092',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_092.jpg'),
    images: [productImage('cat_092.jpg')],
  },
  {
    id: '85',
    slug: 'bedroom-suite-cat_093',
    name: 'Bedroom Suite cat_093',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_093.jpg'),
    images: [productImage('cat_093.jpg')],
  },
  {
    id: '86',
    slug: 'headboard-cat_094',
    name: 'Headboard cat_094',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_094.jpg'),
    images: [productImage('cat_094.jpg')],
  },
  {
    id: '87',
    slug: 'wardrobe-cat_095',
    name: 'Wardrobe cat_095',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_095.jpg'),
    images: [productImage('cat_095.jpg')],
  },
  {
    id: '88',
    slug: 'vanity-set-cat_096',
    name: 'Vanity Set cat_096',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_096.jpg'),
    images: [productImage('cat_096.jpg')],
  },
  {
    id: '89',
    slug: 'nightstand-cat_097',
    name: 'Nightstand cat_097',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_097.jpg'),
    images: [productImage('cat_097.jpg')],
  },
  {
    id: '90',
    slug: 'dressing-unit-cat_098',
    name: 'Dressing Unit cat_098',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_098.jpg'),
    images: [productImage('cat_098.jpg')],
  },
  {
    id: '91',
    slug: 'bedroom-suite-cat_099',
    name: 'Bedroom Suite cat_099',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_099.jpg'),
    images: [productImage('cat_099.jpg')],
  },
  {
    id: '92',
    slug: 'headboard-cat_100',
    name: 'Headboard cat_100',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_100.jpg'),
    images: [productImage('cat_100.jpg')],
    featured: true,
  },
  {
    id: '93',
    slug: 'wardrobe-cat_101',
    name: 'Wardrobe cat_101',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_101.jpg'),
    images: [productImage('cat_101.jpg')],
  },
  {
    id: '94',
    slug: 'vanity-set-cat_102',
    name: 'Vanity Set cat_102',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_102.jpg'),
    images: [productImage('cat_102.jpg')],
  },
  {
    id: '95',
    slug: 'nightstand-cat_103',
    name: 'Nightstand cat_103',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_103.jpg'),
    images: [productImage('cat_103.jpg')],
  },
  {
    id: '96',
    slug: 'dressing-unit-cat_104',
    name: 'Dressing Unit cat_104',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_104.jpg'),
    images: [productImage('cat_104.jpg')],
  },
  {
    id: '97',
    slug: 'bedroom-suite-cat_105',
    name: 'Bedroom Suite cat_105',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_105.jpg'),
    images: [productImage('cat_105.jpg')],
  },
  {
    id: '98',
    slug: 'headboard-cat_106',
    name: 'Headboard cat_106',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_106.jpg'),
    images: [productImage('cat_106.jpg')],
  },
  {
    id: '99',
    slug: 'wardrobe-cat_107',
    name: 'Wardrobe cat_107',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_107.jpg'),
    images: [productImage('cat_107.jpg')],
  },
  {
    id: '100',
    slug: 'vanity-set-cat_108',
    name: 'Vanity Set cat_108',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_108.jpg'),
    images: [productImage('cat_108.jpg')],
  },
  {
    id: '101',
    slug: 'nightstand-cat_109',
    name: 'Nightstand cat_109',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_109.jpg'),
    images: [productImage('cat_109.jpg')],
  },
  {
    id: '102',
    slug: 'dressing-unit-cat_110',
    name: 'Dressing Unit cat_110',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_110.jpg'),
    images: [productImage('cat_110.jpg')],
  },
  {
    id: '103',
    slug: 'bedroom-suite-cat_111',
    name: 'Bedroom Suite cat_111',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_111.jpg'),
    images: [productImage('cat_111.jpg')],
  },
  {
    id: '104',
    slug: 'headboard-cat_112',
    name: 'Headboard cat_112',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_112.jpg'),
    images: [productImage('cat_112.jpg')],
  },
  {
    id: '105',
    slug: 'wardrobe-cat_113',
    name: 'Wardrobe cat_113',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_113.jpg'),
    images: [productImage('cat_113.jpg')],
  },
  {
    id: '106',
    slug: 'vanity-set-cat_114',
    name: 'Vanity Set cat_114',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_114.jpg'),
    images: [productImage('cat_114.jpg')],
  },
  {
    id: '107',
    slug: 'nightstand-cat_115',
    name: 'Nightstand cat_115',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_115.jpg'),
    images: [productImage('cat_115.jpg')],
  },
  {
    id: '108',
    slug: 'dressing-unit-cat_116',
    name: 'Dressing Unit cat_116',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_116.jpg'),
    images: [productImage('cat_116.jpg')],
  },
  {
    id: '109',
    slug: 'bedroom-suite-cat_117',
    name: 'Bedroom Suite cat_117',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_117.jpg'),
    images: [productImage('cat_117.jpg')],
  },
  {
    id: '110',
    slug: 'headboard-cat_118',
    name: 'Headboard cat_118',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_118.jpg'),
    images: [productImage('cat_118.jpg')],
  },
  {
    id: '111',
    slug: 'wardrobe-cat_119',
    name: 'Wardrobe cat_119',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_119.jpg'),
    images: [productImage('cat_119.jpg')],
  },
  {
    id: '112',
    slug: 'vanity-set-cat_120',
    name: 'Vanity Set cat_120',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_120.jpg'),
    images: [productImage('cat_120.jpg')],
  },
  {
    id: '113',
    slug: 'nightstand-cat_121',
    name: 'Nightstand cat_121',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_121.jpg'),
    images: [productImage('cat_121.jpg')],
  },
  {
    id: '114',
    slug: 'dressing-unit-cat_122',
    name: 'Dressing Unit cat_122',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_122.jpg'),
    images: [productImage('cat_122.jpg')],
  },
  {
    id: '115',
    slug: 'bedroom-suite-cat_123',
    name: 'Bedroom Suite cat_123',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_123.jpg'),
    images: [productImage('cat_123.jpg')],
  },
  {
    id: '116',
    slug: 'headboard-cat_124',
    name: 'Headboard cat_124',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_124.jpg'),
    images: [productImage('cat_124.jpg')],
  },
  {
    id: '117',
    slug: 'wardrobe-cat_125',
    name: 'Wardrobe cat_125',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_125.jpg'),
    images: [productImage('cat_125.jpg')],
  },
  {
    id: '118',
    slug: 'vanity-set-cat_126',
    name: 'Vanity Set cat_126',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_126.jpg'),
    images: [productImage('cat_126.jpg')],
  },
  {
    id: '119',
    slug: 'nightstand-cat_127',
    name: 'Nightstand cat_127',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_127.jpg'),
    images: [productImage('cat_127.jpg')],
  },
  {
    id: '120',
    slug: 'dressing-unit-cat_128',
    name: 'Dressing Unit cat_128',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_128.jpg'),
    images: [productImage('cat_128.jpg')],
  },
  {
    id: '121',
    slug: 'bedroom-suite-cat_129',
    name: 'Bedroom Suite cat_129',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_129.jpg'),
    images: [productImage('cat_129.jpg')],
  },
  {
    id: '122',
    slug: 'headboard-cat_130',
    name: 'Headboard cat_130',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_130.jpg'),
    images: [productImage('cat_130.jpg')],
  },
  {
    id: '123',
    slug: 'wardrobe-cat_131',
    name: 'Wardrobe cat_131',
    shortDescription:
      'Premium bedroom piece from the Visual Furniture collection.',
    description:
      'A carefully crafted bedroom piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'bedroom',
    image: productImage('cat_131.jpg'),
    images: [productImage('cat_131.jpg')],
  },
  {
    id: '124',
    slug: 'salon-sofa-cat_132',
    name: 'Salon Sofa cat_132',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_132.jpg'),
    images: [productImage('cat_132.jpg')],
    featured: true,
  },
  {
    id: '125',
    slug: 'reception-set-cat_133',
    name: 'Reception Set cat_133',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_133.jpg'),
    images: [productImage('cat_133.jpg')],
  },
  {
    id: '126',
    slug: 'classic-armchair-cat_135',
    name: 'Classic Armchair cat_135',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_135.jpg'),
    images: [productImage('cat_135.jpg')],
  },
  {
    id: '127',
    slug: 'salon-seating-cat_136',
    name: 'Salon Seating cat_136',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_136.jpg'),
    images: [productImage('cat_136.jpg')],
  },
  {
    id: '128',
    slug: 'salon-collection-cat_137',
    name: 'Salon Collection cat_137',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_137.jpg'),
    images: [productImage('cat_137.jpg')],
  },
  {
    id: '129',
    slug: 'salon-sofa-cat_138',
    name: 'Salon Sofa cat_138',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_138.jpg'),
    images: [productImage('cat_138.jpg')],
  },
  {
    id: '130',
    slug: 'reception-set-cat_139',
    name: 'Reception Set cat_139',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_139.jpg'),
    images: [productImage('cat_139.jpg')],
  },
  {
    id: '131',
    slug: 'classic-armchair-cat_140',
    name: 'Classic Armchair cat_140',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_140.jpg'),
    images: [productImage('cat_140.jpg')],
    featured: true,
  },
  {
    id: '132',
    slug: 'salon-seating-cat_141',
    name: 'Salon Seating cat_141',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_141.jpg'),
    images: [productImage('cat_141.jpg')],
  },
  {
    id: '133',
    slug: 'salon-collection-cat_142',
    name: 'Salon Collection cat_142',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_142.jpg'),
    images: [productImage('cat_142.jpg')],
  },
  {
    id: '134',
    slug: 'salon-sofa-cat_143',
    name: 'Salon Sofa cat_143',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_143.jpg'),
    images: [productImage('cat_143.jpg')],
  },
  {
    id: '135',
    slug: 'reception-set-cat_144',
    name: 'Reception Set cat_144',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_144.jpg'),
    images: [productImage('cat_144.jpg')],
  },
  {
    id: '136',
    slug: 'classic-armchair-cat_145',
    name: 'Classic Armchair cat_145',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_145.jpg'),
    images: [productImage('cat_145.jpg')],
  },
  {
    id: '137',
    slug: 'salon-seating-cat_146',
    name: 'Salon Seating cat_146',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_146.jpg'),
    images: [productImage('cat_146.jpg')],
  },
  {
    id: '138',
    slug: 'salon-collection-cat_147',
    name: 'Salon Collection cat_147',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_147.jpg'),
    images: [productImage('cat_147.jpg')],
  },
  {
    id: '139',
    slug: 'salon-sofa-cat_148',
    name: 'Salon Sofa cat_148',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_148.jpg'),
    images: [productImage('cat_148.jpg')],
  },
  {
    id: '140',
    slug: 'reception-set-cat_149',
    name: 'Reception Set cat_149',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_149.jpg'),
    images: [productImage('cat_149.jpg')],
  },
  {
    id: '141',
    slug: 'classic-armchair-cat_150',
    name: 'Classic Armchair cat_150',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_150.jpg'),
    images: [productImage('cat_150.jpg')],
  },
  {
    id: '142',
    slug: 'salon-seating-cat_151',
    name: 'Salon Seating cat_151',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_151.jpg'),
    images: [productImage('cat_151.jpg')],
  },
  {
    id: '143',
    slug: 'salon-collection-cat_152',
    name: 'Salon Collection cat_152',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_152.jpg'),
    images: [productImage('cat_152.jpg')],
  },
  {
    id: '144',
    slug: 'salon-sofa-cat_153',
    name: 'Salon Sofa cat_153',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('cat_153.jpg'),
    images: [productImage('cat_153.jpg')],
  },
  {
    id: '145',
    slug: 'living-sofa-set-cat_011',
    name: 'Living Sofa Set cat_011',
    shortDescription:
      'Premium living room piece from the Visual Furniture collection.',
    description:
      'A carefully crafted living room piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'living-room',
    image: productImage('cat_011.jpg'),
    images: [productImage('cat_011.jpg')],
  },
  {
    id: '146',
    slug: 'display-cabinet-cat_042',
    name: 'Display Cabinet cat_042',
    shortDescription:
      'Premium living room piece from the Visual Furniture collection.',
    description:
      'A carefully crafted living room piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'living-room',
    image: productImage('cat_042.jpg'),
    images: [productImage('cat_042.jpg')],
  },
  {
    id: '147',
    slug: 'living-seating-cat_046',
    name: 'Living Seating cat_046',
    shortDescription:
      'Premium living room piece from the Visual Furniture collection.',
    description:
      'A carefully crafted living room piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'living-room',
    image: productImage('cat_046.jpg'),
    images: [productImage('cat_046.jpg')],
  },
  {
    id: '148',
    slug: 'living-sofa-set-cat_048',
    name: 'Living Sofa Set cat_048',
    shortDescription:
      'Premium living room piece from the Visual Furniture collection.',
    description:
      'A carefully crafted living room piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'living-room',
    image: productImage('cat_048.jpg'),
    images: [productImage('cat_048.jpg')],
  },
  {
    id: '149',
    slug: 'display-cabinet-cat_070',
    name: 'Display Cabinet cat_070',
    shortDescription:
      'Premium living room piece from the Visual Furniture collection.',
    description:
      'A carefully crafted living room piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'living-room',
    image: productImage('cat_070.jpg'),
    images: [productImage('cat_070.jpg')],
  },
  {
    id: '150',
    slug: 'living-seating-cat_134',
    name: 'Living Seating cat_134',
    shortDescription:
      'Premium living room piece from the Visual Furniture collection.',
    description:
      'A carefully crafted living room piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'living-room',
    image: productImage('cat_134.jpg'),
    images: [productImage('cat_134.jpg')],
    featured: true,
  },
  {
    id: '151',
    slug: 'sideboard-cat_000',
    name: 'Sideboard cat_000',
    shortDescription:
      'Premium dining piece from the Visual Furniture collection.',
    description:
      'A carefully crafted dining piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'dining',
    image: productImage('cat_000.jpg'),
    images: [productImage('cat_000.jpg')],
  },
  {
    id: '152',
    slug: 'dining-buffet-cat_008',
    name: 'Dining Buffet cat_008',
    shortDescription:
      'Premium dining piece from the Visual Furniture collection.',
    description:
      'A carefully crafted dining piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'dining',
    image: productImage('cat_008.jpg'),
    images: [productImage('cat_008.jpg')],
    featured: true,
  },
  {
    id: '153',
    slug: 'dining-cabinet-cat_047',
    name: 'Dining Cabinet cat_047',
    shortDescription:
      'Premium dining piece from the Visual Furniture collection.',
    description:
      'A carefully crafted dining piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'dining',
    image: productImage('cat_047.jpg'),
    images: [productImage('cat_047.jpg')],
  },
  {
    id: '154',
    slug: 'reception-desk-cat_075',
    name: 'Reception Desk cat_075',
    shortDescription:
      'Premium office piece from the Visual Furniture collection.',
    description:
      'A carefully crafted office piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'office',
    image: productImage('cat_075.jpg'),
    images: [productImage('cat_075.jpg')],
    featured: true,
  },
  {
    id: '155',
    slug: 'reception-set-1',
    name: 'Reception Set 1',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('1.png'),
    images: [productImage('1.png')],
  },
  {
    id: '156',
    slug: 'classic-armchair-2',
    name: 'Classic Armchair 2',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('2.png'),
    images: [productImage('2.png')],
  },
  {
    id: '157',
    slug: 'salon-seating-3',
    name: 'Salon Seating 3',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('3.png'),
    images: [productImage('3.png')],
  },
  {
    id: '158',
    slug: 'salon-collection-4',
    name: 'Salon Collection 4',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('4.png'),
    images: [productImage('4.png')],
  },
  {
    id: '159',
    slug: 'salon-sofa-5',
    name: 'Salon Sofa 5',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('5.png'),
    images: [productImage('5.png')],
  },
  {
    id: '160',
    slug: 'reception-set-6',
    name: 'Reception Set 6',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('6.png'),
    images: [productImage('6.png')],
  },
  {
    id: '161',
    slug: 'classic-armchair-7',
    name: 'Classic Armchair 7',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('7.png'),
    images: [productImage('7.png')],
  },
  {
    id: '162',
    slug: 'salon-seating-8',
    name: 'Salon Seating 8',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('8.png'),
    images: [productImage('8.png')],
  },
  {
    id: '163',
    slug: 'salon-collection-9',
    name: 'Salon Collection 9',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('9.png'),
    images: [productImage('9.png')],
  },
  {
    id: '164',
    slug: 'salon-sofa-10',
    name: 'Salon Sofa 10',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('10.png'),
    images: [productImage('10.png')],
    featured: true,
  },
  {
    id: '165',
    slug: 'reception-set-11',
    name: 'Reception Set 11',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('11.png'),
    images: [productImage('11.png')],
  },
  {
    id: '166',
    slug: 'classic-armchair-12',
    name: 'Classic Armchair 12',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('12.png'),
    images: [productImage('12.png')],
  },
  {
    id: '167',
    slug: 'salon-seating-13',
    name: 'Salon Seating 13',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('13.png'),
    images: [productImage('13.png')],
  },
  {
    id: '168',
    slug: 'salon-collection-14',
    name: 'Salon Collection 14',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('14.png'),
    images: [productImage('14.png')],
  },
  {
    id: '169',
    slug: 'salon-sofa-15',
    name: 'Salon Sofa 15',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('15.png'),
    images: [productImage('15.png')],
  },
  {
    id: '170',
    slug: 'reception-set-16',
    name: 'Reception Set 16',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('16.png'),
    images: [productImage('16.png')],
  },
  {
    id: '171',
    slug: 'classic-armchair-17',
    name: 'Classic Armchair 17',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('17.png'),
    images: [productImage('17.png')],
  },
  {
    id: '172',
    slug: 'salon-seating-18',
    name: 'Salon Seating 18',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('18.png'),
    images: [productImage('18.png')],
  },
  {
    id: '173',
    slug: 'salon-collection-19',
    name: 'Salon Collection 19',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('19.png'),
    images: [productImage('19.png')],
  },
  {
    id: '174',
    slug: 'salon-sofa-20',
    name: 'Salon Sofa 20',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('20.png'),
    images: [productImage('20.png')],
    featured: true,
  },
  {
    id: '175',
    slug: 'reception-set-21',
    name: 'Reception Set 21',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('21.png'),
    images: [productImage('21.png')],
  },
  {
    id: '176',
    slug: 'classic-armchair-22',
    name: 'Classic Armchair 22',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('22.png'),
    images: [productImage('22.png')],
  },
  {
    id: '177',
    slug: 'salon-seating-23',
    name: 'Salon Seating 23',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('23.png'),
    images: [productImage('23.png')],
  },
  {
    id: '178',
    slug: 'salon-collection-24',
    name: 'Salon Collection 24',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('24.png'),
    images: [productImage('24.png')],
  },
  {
    id: '179',
    slug: 'salon-sofa-25',
    name: 'Salon Sofa 25',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('25.png'),
    images: [productImage('25.png')],
  },
  {
    id: '180',
    slug: 'reception-set-26',
    name: 'Reception Set 26',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('26.png'),
    images: [productImage('26.png')],
  },
  {
    id: '181',
    slug: 'classic-armchair-27',
    name: 'Classic Armchair 27',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('27.png'),
    images: [productImage('27.png')],
  },
  {
    id: '182',
    slug: 'salon-seating-28',
    name: 'Salon Seating 28',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('28.png'),
    images: [productImage('28.png')],
  },
  {
    id: '183',
    slug: 'salon-collection-29',
    name: 'Salon Collection 29',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('29.png'),
    images: [productImage('29.png')],
  },
  {
    id: '184',
    slug: 'salon-sofa-30',
    name: 'Salon Sofa 30',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('30.png'),
    images: [productImage('30.png')],
    featured: true,
  },
  {
    id: '185',
    slug: 'reception-set-31',
    name: 'Reception Set 31',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('31.png'),
    images: [productImage('31.png')],
  },
  {
    id: '186',
    slug: 'classic-armchair-32',
    name: 'Classic Armchair 32',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('32.png'),
    images: [productImage('32.png')],
  },
  {
    id: '187',
    slug: 'salon-seating-33',
    name: 'Salon Seating 33',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('33.png'),
    images: [productImage('33.png')],
  },
  {
    id: '188',
    slug: 'salon-collection-34',
    name: 'Salon Collection 34',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('34.png'),
    images: [productImage('34.png')],
  },
  {
    id: '189',
    slug: 'salon-sofa-35',
    name: 'Salon Sofa 35',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('35.png'),
    images: [productImage('35.png')],
  },
  {
    id: '190',
    slug: 'reception-set-36',
    name: 'Reception Set 36',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('36.png'),
    images: [productImage('36.png')],
  },
  {
    id: '191',
    slug: 'classic-armchair-37',
    name: 'Classic Armchair 37',
    shortDescription:
      'Premium salon piece from the Visual Furniture collection.',
    description:
      'A carefully crafted salon piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.',
    category: 'salon',
    image: productImage('37.png'),
    images: [productImage('37.png')],
    featured: true,
  },
]

export const companyInfo = {
  name: 'Visual Furniture',
  phone: '+201127699811',
  phoneDisplay: '+20 11 2769 9811',
  whatsapp: [
    {
      id: 'eg',
      label: 'Egypt',
      number: '+201005707488',
      display: '+20 10 0570 7488',
      flag: 'EG',
      countryCode: 'EG',
    },
    {
      id: 'ae',
      label: 'United Arab Emirates',
      number: '+971504797859',
      display: '+971 50 479 7859',
      flag: 'AE',
      countryCode: 'AE',
    },
  ],
  email: 'info@visualfurniture.com',
  address: 'Youssef Youssef, Helwan Sharkeya, Helwan, Cairo',
  taxRegistration: 'Tax Registration No. 000-000-000',
  copyright: `\u00A9 ${new Date().getFullYear()} Visual Furniture. All rights reserved.`,
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: CategorySlug | 'all') {
  if (category === 'all') return products
  return products.filter((p) => p.category === category)
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug)
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured)
}
