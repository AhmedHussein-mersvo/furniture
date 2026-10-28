import fs from 'fs'
import path from 'path'

const pad = (n) => String(n).padStart(3, '0')
const range = (a, b) => {
  const o = []
  for (let i = a; i <= b; i++) o.push(i)
  return o
}
const catFile = (n) => `cat_${pad(n)}.jpg`

/** Existing JPG catalog mapping */
const jpgMap = {
  bedroom: [
    ...range(1, 7),
    ...range(9, 10),
    ...range(12, 41),
    ...range(43, 45),
    ...range(49, 69),
    ...range(71, 74),
    ...range(76, 131),
  ],
  salon: [...range(132, 133), ...range(135, 153)],
  'living-room': [11, 42, 46, 48, 70, 134],
  dining: [0, 8, 47],
  office: [75],
}

/** New PNG uploads (1.png–37.png) → salon */
const salonPngs = fs
  .readdirSync('src/assets/products')
  .filter((f) => /^\d+\.png$/i.test(f))
  .sort((a, b) => Number.parseInt(a, 10) - Number.parseInt(b, 10))

const meta = {
  bedroom: {
    name: 'Bedroom',
    description: 'Beds, wardrobes, vanities, and complete bedroom suites.',
    coverFile: catFile(100),
    labels: [
      'Bedroom Suite',
      'Headboard',
      'Wardrobe',
      'Vanity Set',
      'Nightstand',
      'Dressing Unit',
    ],
  },
  salon: {
    name: 'Salon',
    description: 'Elegant reception seating sets for refined salon spaces.',
    coverFile: salonPngs.includes('20.png') ? '20.png' : catFile(140),
    labels: [
      'Salon Sofa',
      'Reception Set',
      'Classic Armchair',
      'Salon Seating',
      'Salon Collection',
    ],
  },
  'living-room': {
    name: 'Living Room',
    description: 'Modern sofas, cabinets, and living room furniture.',
    coverFile: catFile(134),
    labels: ['Living Sofa Set', 'Display Cabinet', 'Living Seating'],
  },
  dining: {
    name: 'Dining',
    description: 'Sideboards, buffets, and dining furniture pieces.',
    coverFile: catFile(8),
    labels: ['Sideboard', 'Dining Buffet', 'Dining Cabinet'],
  },
  office: {
    name: 'Office',
    description: 'Desks and reception counters for professional spaces.',
    coverFile: catFile(75),
    labels: ['Reception Desk', 'Office Counter'],
  },
}

/** Flatten into product source list: { category, file, featured? } */
const featuredFiles = new Set([
  catFile(1),
  catFile(20),
  catFile(50),
  catFile(100),
  catFile(132),
  catFile(140),
  catFile(134),
  catFile(8),
  catFile(75),
  catFile(40),
  '10.png',
  '20.png',
  '30.png',
  '37.png',
])

const productsSource = []

for (const [slug, nums] of Object.entries(jpgMap)) {
  for (const n of nums) {
    productsSource.push({
      category: slug,
      file: catFile(n),
      featured: featuredFiles.has(catFile(n)),
    })
  }
}

for (const file of salonPngs) {
  productsSource.push({
    category: 'salon',
    file,
    featured: featuredFiles.has(file),
  })
}

const cats = Object.keys(meta)

let out = `export type CategorySlug =
${cats.map((c) => `  | '${c}'`).join('\n')}

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
  const key = \`../assets/products/\${fileName}\`
  const src = imageModules[key]
  if (!src) throw new Error(\`Missing product image: \${fileName}\`)
  return src
}

export const categories: Category[] = [
`

for (const slug of cats) {
  const m = meta[slug]
  out += `  {
    slug: '${slug}',
    name: '${m.name}',
    description: '${m.description}',
    image: productImage('${m.coverFile}'),
  },
`
}

out += `]

export const products: Product[] = [
`

const labelIndex = Object.fromEntries(cats.map((c) => [c, 0]))
let id = 1

for (const item of productsSource) {
  const m = meta[item.category]
  const label = m.labels[labelIndex[item.category] % m.labels.length]
  labelIndex[item.category] += 1

  const base = path.parse(item.file).name
  const name = `${label} ${base}`
  const slugName = `${label}-${base}`.toLowerCase().replace(/\s+/g, '-')
  const short = `Premium ${m.name.toLowerCase()} piece from the Visual Furniture collection.`
  const desc = `A carefully crafted ${m.name.toLowerCase()} piece designed for lasting comfort and a refined finish. Contact us on WhatsApp for availability, finishes, and custom options.`

  out += `  {
    id: '${id}',
    slug: '${slugName}',
    name: '${name}',
    shortDescription:
      '${short}',
    description:
      '${desc}',
    category: '${item.category}',
    image: productImage('${item.file}'),
    images: [productImage('${item.file}')],
`
  if (item.featured) out += `    featured: true,\n`
  out += `  },\n`
  id++
}

out += `]

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
  copyright: \`\\u00A9 \${new Date().getFullYear()} Visual Furniture. All rights reserved.\`,
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
`

fs.writeFileSync('src/data/products.ts', out, 'utf8')

const counts = Object.fromEntries(
  cats.map((c) => [
    c,
    productsSource.filter((p) => p.category === c).length,
  ]),
)
console.log('Wrote products.ts with', id - 1, 'products')
console.log(counts)
console.log('New salon PNGs added:', salonPngs.length)
