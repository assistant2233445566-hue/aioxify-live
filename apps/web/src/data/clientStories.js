import { testimonials } from '@/data/testimonials';

export const clientStories = testimonials.map((item, index) => ({
  id: index + 1,
  slug: item.slug,
  companyName: item.company,
  industry: 'SopnoTec review',
  quote: item.quote,
  person: item.person,
  photo: item.photo,
  role: item.role,
  videoPlaceholder: item.person,
  results: [`${item.stat} ${item.statLabel}`, ...item.chips.slice(0, 3)],
  challenge: item.bio,
  solution: item.quote,
  outcome: item.shortQuote,
  website: undefined,
}));
