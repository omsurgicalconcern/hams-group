import SiteHeader from '../../components/site-header';
import SiteFooter from '../../components/site-footer';
import Breadcrumbs from '../../components/breadcrumbs';
import Arrow from '../../components/arrow';
import { asset, categories, sitePath } from '../../lib/businesses';

export const metadata = { title: 'About HAMS | HAMS Group', description: 'Human Progress unites HAMS Group across healthcare, mobility, medical technology and digital services.' };
const values = [
  ['Human First', 'Start with the person behind every need. Build around their experience, safety and opportunity.'],
  ['Earn Trust', 'Say what we mean, do what we say and protect long-term relationships.'],
  ['Raise the Standard', 'Pursue measurable quality, disciplined execution and continuous improvement.'],
  ['Build for Tomorrow', 'Invest in people, capabilities and institutions that create lasting value.'],
  ['One HAMS', 'Different businesses, shared standards. Collaborate across boundaries and move forward together.'],
];

export default function AboutPage() {
  return <><SiteHeader /><main id="main">
    <section className="editorial-intro"><div className="shell"><Breadcrumbs items={[{label:'Home',href:sitePath('/')},{label:'About HAMS'}]} /><p className="eyebrow">Human progress</p><h1>Many businesses.<br />One human purpose<span>.</span></h1><p className="editorial-lead">Rooted in Nepal. United by the progress we create.</p></div></section>
    <section className="section-space"><div className="shell about-story"><div><p className="eyebrow">About HAMS Group</p><h2>Moving Life Forward<span className="gold-dot">.</span></h2><p>HAMS Group brings together healthcare, mobility, medical technology and digital services around one belief: progress matters most when people can experience it.</p><p>We build businesses that help people live healthier lives, move with greater freedom, make better decisions and work smarter. Our shared purpose connects the capability of each business with the possibilities it creates for people.</p></div><div className="about-brand"><img src={asset('hams-logo.svg')} alt="HAMS Group — Moving Life Forward" width="600" height="207" /><span>People + Technology + Execution</span></div></div></section>
    <section className="about-direction section-space"><div className="shell about-direction-grid"><article><p className="eyebrow">Our vision</p><h2>A future built<br />on trust.</h2><p>To build a trusted, future-ready group that moves people, businesses and industries forward across health, mobility, medical technology and digital services.</p></article><article><p className="eyebrow">Our mission</p><h2>Capability with<br />a human purpose.</h2><p>We build and operate businesses that improve everyday life by combining capable people, dependable technology, responsible innovation and disciplined execution.</p></article></div></section>
    <section id="values" className="approach section-space"><div className="shell approach-grid"><div className="approach-intro"><p className="eyebrow text-gold">Our values</p><h2>The principles<br />that move us<span className="gold-dot">.</span></h2><p>Different businesses. A common commitment to people, quality and lasting progress.</p></div><div className="values-list">{values.map(([title,description],index)=><div className="value" key={title}><span className="value-number">0{index+1}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></div></section>
    <section className="section-space"><div className="shell"><p className="eyebrow">Across HAMS</p><h2>Four expressions of progress<span className="gold-dot">.</span></h2><div className="about-portfolio">{categories.map(category=><a href={sitePath(`/${category.slug}/`)} key={category.slug}><span>{category.number}</span><h3>{category.name}</h3><p>{category.message}</p><Arrow diagonal /></a>)}</div><a className="text-link" href={sitePath('/board-members/')}>Meet our leadership<Arrow /></a></div></section>
  </main><SiteFooter /></>;
}

