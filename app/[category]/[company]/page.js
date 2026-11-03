import { notFound } from 'next/navigation';
import { asset, categories, companies, companiesIn, sitePath } from '../../../lib/businesses';
import SiteHeader from '../../../components/site-header';
import SiteFooter from '../../../components/site-footer';
import Breadcrumbs from '../../../components/breadcrumbs';
import CompanyCard from '../../../components/company-card';
import Arrow from '../../../components/arrow';

export const dynamicParams = false;
export function generateStaticParams() {
  return companies.map(company => ({ category: company.category, company: company.slug }));
}
export async function generateMetadata({ params }) {
  const { category, company: slug } = await params;
  const company = companies.find(item => item.category === category && item.slug === slug);
  return { title: `${company?.name || 'Company'} | HAMS Group`, description: company?.summary };
}

export default async function CompanyPage({ params }) {
  const { category: categorySlug, company: companySlug } = await params;
  const company = companies.find(item => item.category === categorySlug && item.slug === companySlug);
  const category = categories.find(item => item.slug === categorySlug);
  if (!company || !category) notFound();
  const related = companiesIn(categorySlug).filter(item => item.slug !== companySlug);
  return <><SiteHeader /><main id="main">
    <section className="company-profile"><div className="shell">
      <Breadcrumbs items={[{ label: 'Home', href: sitePath('/') }, { label: category.name, href: sitePath(`/${category.slug}/`) }, { label: company.shortName }]} />
      <div className="profile-intro">
        <figure className={`profile-image${company.imageMode === 'logo' ? ' profile-logo' : ''}`}><img src={asset(company.image)} alt={company.imageAlt} width="700" height="700" fetchPriority="high" /><figcaption>{company.shortName}</figcaption></figure>
        <div className="profile-copy"><p className="eyebrow">HAMS Group / {category.name}</p><h1>{company.name}<span>.</span></h1><p className="profile-tagline">{company.tagline}</p>{company.logo && company.imageMode !== 'logo' && <div className="company-brand-logo"><img src={asset(company.logo)} alt={`${company.name} logo`} width="240" height="100" /></div>}<p className="profile-description">{company.description}</p>{company.website && <a href={company.website} className="text-link" target="_blank" rel="noopener noreferrer">Visit company website <Arrow diagonal /></a>}</div>
      </div>
      {company.services.length > 0 && <section className="profile-row" aria-labelledby="services-heading"><div><p className="eyebrow">What they do</p><h2 id="services-heading">Services &amp;<br />capabilities<span className="gold-dot">.</span></h2></div><ul className="profile-services">{company.services.map((service, index) => <li key={service}><span>{String(index + 1).padStart(2, '0')}</span>{service}</li>)}</ul></section>}
      <section className="profile-row" aria-labelledby="contact-heading"><div><p className="eyebrow">Get in touch</p><h2 id="contact-heading">Connect with<br />{company.shortName}<span className="gold-dot">.</span></h2></div><div className="profile-contact"><dl>{company.address && <div><dt>Location</dt><dd>{company.address}</dd></div>}{company.phone && <div><dt>Telephone</dt><dd><a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}>{company.phone}</a></dd></div>}{company.email && <div><dt>Email</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>}</dl>{company.website ? <a className="text-link" href={company.website} target="_blank" rel="noopener noreferrer">{company.action}<Arrow diagonal /></a> : <a className="text-link" href={sitePath(`/${category.slug}/`)}>Explore {category.name.toLowerCase()}<Arrow /></a>}<p className="company-source">Learn more: <a href={company.source} target="_blank" rel="noopener noreferrer">{company.sourceLabel || 'Official company website'} ↗</a></p></div></section>
    </div></section>
    {related.length > 0 && <section className="section-space related-companies"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Across {category.name}</p><h2>Shared purpose. More possibilities<span className="gold-dot">.</span></h2></div><a className="text-link" href={sitePath(`/${category.slug}/`)}>All {category.name.toLowerCase()}<Arrow /></a></div><div className="company-grid">{related.map(item => <CompanyCard company={item} key={item.slug} />)}</div></div></section>}
  </main><SiteFooter /></>;
}
