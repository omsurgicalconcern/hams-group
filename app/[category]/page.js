import { notFound } from 'next/navigation';
import { categories, companiesIn, sitePath } from '../../lib/businesses';
import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import Breadcrumbs from '../../components/breadcrumbs';
import CompanyCard from '../../components/company-card';
import Arrow from '../../components/arrow';

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
  return <><SiteHeader /><main id="main">
    <section className="category-intro"><div className="shell">
      <Breadcrumbs items={[{ label: 'Home', href: sitePath('/') }, { label: category.name }]} />
      <div className="category-intro-grid"><div><p className="eyebrow">Our businesses / {category.number}</p><h1>{category.name}<span>.</span></h1><p className="category-tagline">{category.message}</p></div><div className="category-lead"><h2>{category.headline}</h2><p>{category.description}</p><span className="category-member-count">{String(members.length).padStart(2, '0')} {members.length === 1 ? 'company' : 'companies'} · One shared purpose</span></div></div>
    </div></section>
    <section className="section-space category-companies"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Meet our companies</p><h2>Progress, in practice<span className="gold-dot">.</span></h2></div><p>Discover the people and businesses<br />behind our shared purpose.</p></div><div className={`company-grid${members.length === 1 ? ' single-company-grid' : ''}`}>{members.map(company => <CompanyCard company={company} key={company.slug} />)}</div></div></section>
    <section className="category-purpose"><div className="shell"><p className="eyebrow text-gold">{category.name} at HAMS</p><h2>{category.headline}</h2><div className="category-pillars">{category.focus.map((focus, index) => <div key={focus}><span>0{index + 1}</span><h3>{focus}</h3></div>)}</div></div></section>
    <section className="section-space more-businesses"><div className="shell"><p className="eyebrow">One HAMS</p><h2>Explore our other businesses<span className="gold-dot">.</span></h2><div className="other-category-links">{categories.filter(item => item.slug !== slug).map(item => <a href={sitePath(`/${item.slug}/`)} key={item.slug}>{item.name}<Arrow diagonal /></a>)}</div></div></section>
  </main><SiteFooter /></>;
}
