import { siteUrl } from './seo';

export function companySchema(company) {
  const url = `${siteUrl}/${company.category}/${company.slug}/`;
  const imageUrl = image => `${siteUrl}/images/${image.split('/').map(encodeURIComponent).join('/')}`;
  return {
    '@context': 'https://schema.org',
    '@type': company.category === 'hospital' ? 'Hospital' : company.category === 'education' ? 'EducationalOrganization' : 'Organization',
    '@id': `${url}#organization`,
    name: company.name,
    alternateName: company.shortName,
    url,
    description: company.description,
    image: imageUrl(company.image),
    ...(company.logo ? { logo: imageUrl(company.logo) } : {}),
    ...(company.website ? { sameAs: [company.website] } : {}),
    ...(company.address ? { address: company.address } : {}),
    ...(company.phone ? { telephone: company.phone } : {}),
    ...(company.email ? { email: company.email } : {}),
  };
}
