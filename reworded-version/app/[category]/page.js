import { notFound } from 'next/navigation';
import { asset, categories, companiesIn, sitePath } from '../../lib/businesses';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import Breadcrumbs from '../../components/breadcrumbs';
import CompanyCard from '../../components/company-card';
import Arrow from '../../components/arrow';
import BrandAlliances from '../../components/brand-alliances';

export const dynamicParams = false;
export function generateStaticParams() { return categories.map(category => ({ category: category.slug })); }
export async function generateMetadata({ params }) {
  const { category: slug } = await params;
  const category = categories.find(item => item.slug === slug);
  return { title: `${category?.name || 'Businesses'} | HAMS Group`, description: category?.description };
}

export default async function CategoryPage({ params }) {
  const { category: slug } = await params;
  const category = categories.find(item => item.slug === slug);
  if (!category) notFound();
  const members = companiesIn(slug);
  const banner = {
    hospital: { image: 'Hospital/hams-team-upscaled.webp', alt: 'HAMS Hospital team gathered outside the hospital', width: 3000, height: 1569 },
    automobile: { image: 'Automobile/banner.png', alt: 'Naveco, Kawei and Iveco vehicles against Nepalese temples and Himalayan mountains', width: 2460, height: 936 },
    'medical-devices': { image: 'Medical-devices/medical-team.webp', alt: 'The medical devices team gathered outside their office', width: 3000, height: 1569 },
    'it-ites': { image: 'IT/coding-laptop.jpg', alt: 'Laptop displaying software code beside a plant on a table', width: 2400, height: 1350 },
  }[slug];
  return <><SiteHeader /><main id="main">
    {banner ? <section className={`category-photo-hero ${slug}-photo-hero`} aria-labelledby="category-photo-title">
      <img className="category-photo-background" src={asset(banner.image)} alt={banner.alt} width={banner.width} height={banner.height} fetchPriority="high" />
      <div className="category-photo-shade" />
      <div className="shell"><Breadcrumbs items={[{ label: 'Home', href: sitePath('/') }, { label: category.name }]} /><p className="eyebrow">Our businesses / {category.number}</p><h1 id="category-photo-title">{category.name}<span>.</span></h1><p className="photo-hero-tagline">{category.message}</p><p className="photo-hero-description">{category.description}</p><span className="photo-hero-count">{String(members.length).padStart(2, '0')} {members.length === 1 ? 'company' : 'companies'} · One shared purpose</span></div>
    </section> : <section className="category-intro"><div className="shell">
      <Breadcrumbs items={[{ label: 'Home', href: sitePath('/') }, { label: category.name }]} />
      <div className="category-intro-grid"><div><p className="eyebrow">Our businesses / {category.number}</p><h1>{category.name}<span>.</span></h1><p className="category-tagline">{category.message}</p></div><div className="category-lead"><h2>{category.headline}</h2><p>{category.description}</p><span className="category-member-count">{String(members.length).padStart(2, '0')} {members.length === 1 ? 'company' : 'companies'} · One shared purpose</span></div></div>
    </div></section>}
    <section className="section-space category-companies"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Meet our companies</p><h2>Progress, in practice<span className="gold-dot">.</span></h2></div><p>Discover the people and businesses<br />behind our shared purpose.</p></div><div className={`company-grid${members.length === 1 ? ' single-company-grid' : ''}`}>{members.map(company => <CompanyCard company={company} key={company.slug} />)}</div></div></section>
    <section className="category-purpose"><div className="shell"><p className="eyebrow text-gold">{category.name} at HAMS</p><h2>{category.headline}</h2><div className="category-pillars">{category.focus.map((focus, index) => <div key={focus}><span>0{index + 1}</span><h3>{focus}</h3></div>)}</div></div></section>
    {(slug === 'medical-devices' || slug === 'automobile') && <BrandAlliances category={slug} />}
    <section className="section-space more-businesses"><div className="shell"><p className="eyebrow">One HAMS</p><h2>Explore our other businesses<span className="gold-dot">.</span></h2><div className="other-category-links">{categories.filter(item => item.slug !== slug).map(item => <a href={sitePath(`/${item.slug}/`)} key={item.slug}>{item.name}<Arrow diagonal /></a>)}</div></div></section>
  </main><SiteFooter /></>;
}
