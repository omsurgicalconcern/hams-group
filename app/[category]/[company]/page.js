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
    <section className="company-intro"><div className="shell"><Breadcrumbs items={[{ label: 'Home', href: sitePath('/') }, { label: category.name, href: sitePath(`/${category.slug}/`) }, { label: company.shortName }]} /><div className="company-title-row"><div><p className="eyebrow">HAMS Group / {category.name}</p><h1>{company.name}<span>.</span></h1></div>{company.website && <a href={company.website} className="text-link" target="_blank" rel="noopener noreferrer">Visit company website <Arrow diagonal /></a>}</div></div></section>
    <div className="shell"><div className={`company-cover${company.imageMode ? ` is-${company.imageMode}` : ' is-photo'}`}><img src={asset(company.image)} alt={company.imageAlt} width="1440" height="720" fetchPriority="high" /><span className="cover-label">{company.shortName} / {category.name}</span></div></div>
    <section className="section-space company-overview"><div className="shell company-overview-grid"><div><p className="eyebrow">{company.name}</p><h2>{company.tagline}</h2></div><div>{company.logo && company.imageMode !== 'logo' && <div className="company-brand-logo"><img src={asset(company.logo)} alt={`${company.name} logo`} width="240" height="100" /></div>}<p className="company-description">{company.description}</p><p className="company-source">Learn more: <a href={company.source} target="_blank" rel="noopener noreferrer">{company.slug === 'sindhu-sadabahar' ? 'Om Surgical Concern company profile' : 'Official company website'} <span aria-hidden="true">↗</span></a></p></div></div></section>
    {company.services.length > 0 && <section className="company-services section-space"><div className="shell"><div className="section-heading"><div><p className="eyebrow">What they do</p><h2>Capability with purpose<span className="gold-dot">.</span></h2></div></div><div className="service-grid">{company.services.map((service, index) => <div className="service-item" key={service}><span>0{index + 1}</span><h3>{service}</h3><Arrow diagonal /></div>)}</div></div></section>}
    <section className="section-space company-contact"><div className="shell company-contact-grid"><div><p className="eyebrow">Your next step</p><h2>{company.website ? 'Connect with ' : 'Discover '}{company.shortName}<span className="gold-dot">.</span></h2><p>{company.website ? 'Visit the company website for current services, product information and direct enquiries.' : 'Explore the wider hospital network and the people behind it.'}</p>{company.website ? <a className="button button-navy" href={company.website} target="_blank" rel="noopener noreferrer">{company.action}<Arrow diagonal /></a> : <a className="button button-navy" href={sitePath(`/${category.slug}/`)}>Explore our hospitals<Arrow /></a>}</div><dl className="contact-details">{company.address && <div><dt>Location</dt><dd>{company.address}</dd></div>}{company.phone && <div><dt>Telephone</dt><dd><a href={`tel:${company.phone.replace(/[^+\d]/g, '')}`}>{company.phone}</a></dd></div>}{company.email && <div><dt>Email</dt><dd><a href={`mailto:${company.email}`}>{company.email}</a></dd></div>}</dl></div></section>
    {related.length > 0 && <section className="section-space related-companies"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Across {category.name}</p><h2>Shared purpose. More possibilities<span className="gold-dot">.</span></h2></div><a className="text-link" href={sitePath(`/${category.slug}/`)}>All {category.name.toLowerCase()}<Arrow /></a></div><div className="company-grid">{related.map(item => <CompanyCard company={item} key={item.slug} />)}</div></div></section>}
  </main><SiteFooter /></>;
}
