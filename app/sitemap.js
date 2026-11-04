import { categories, companies } from '../lib/businesses';
import { siteUrl } from '../lib/seo';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    '/', '/about/', '/board-members/',
    ...categories.map(category => `/${category.slug}/`),
    ...companies.map(company => `/${company.category}/${company.slug}/`),
  ].map(path => ({ url: `${siteUrl}${path}` }));
}
