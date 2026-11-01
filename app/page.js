import SiteHeader from '../components/site-header';
import SiteFooter from '../components/site-footer';
import BusinessCarousel from '../components/business-carousel';
import Arrow from '../components/arrow';
import { asset, categories } from '../lib/businesses';

const values = [
  ['Human First', 'Start with the person. Build around their experience, safety and opportunity.'],
  ['Earn Trust', 'Say what we mean. Do what we say. Protect the long-term relationship.'],
  ['Raise the Standard', 'Pursue quality, disciplined execution and continuous improvement.'],
  ['Build for Tomorrow', 'Invest in people and capabilities that create lasting value.'],
  ['One HAMS', 'Different businesses, shared standards. Moving forward together.'],
];

export default function Home() {
  return <>
    <SiteHeader />
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src={asset('himalayan-sunrise.png')} alt="Sunrise over the Himalayan mountains and Nepalese foothills" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="shell hero-content">
          <p className="eyebrow text-gold">Human progress</p>
          <h1 id="hero-title">Moving Life<br />Forward<span>.</span></h1>
          <p className="hero-description">Better health. Greater mobility.<br className="mobile-break" /> Smarter technology.</p>
          <a className="button button-gold" href="#businesses">Explore our businesses <Arrow /></a>
        </div>
        <div className="hero-bottom shell"><span>Rooted in Nepal. Looking ahead.</span><a href="#about" aria-label="Discover our purpose">Scroll to discover <span>↓</span></a></div>
      </section>

      <section id="about" className="purpose section-space">
        <div className="shell">
          <p className="eyebrow">One HAMS. Shared purpose.</p>
          <div className="purpose-grid">
            <h2>Many businesses.<br />One human purpose<span className="gold-dot">.</span></h2>
            <div className="purpose-copy"><p>We bring people, technology and capability together to improve everyday life.</p><p className="muted">Across health, mobility, medical technology and digital services, we believe progress matters most when people can experience it.</p><a className="text-link" href="#approach">Discover our approach <Arrow /></a></div>
          </div>
        </div>
      </section>

      <section id="businesses" className="business-section section-space">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Our businesses</p><h2>Progress across<br className="mobile-break" /> possibilities<span className="gold-dot">.</span></h2></div><p>Four expressions of one belief.<br />A better everyday life.</p></div>
          <div className="business-grid">{categories.map(category => <BusinessCarousel category={category} key={category.slug} />)}</div>
        </div>
      </section>

      <section id="approach" className="approach section-space">
        <div className="shell approach-grid">
          <div className="approach-intro"><p className="eyebrow text-gold">What moves us</p><h2>Progress with<br />people at<br />its heart<span className="gold-dot">.</span></h2><p>Our measure of progress is what becomes possible for people, organisations and communities.</p><div className="signature-line" /><span className="small-signature">People + Technology + Execution</span></div>
          <div className="values-list">{values.map(([title, copy], i) => <div className="value" key={title}><span className="value-number">0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
        </div>
      </section>

      <section id="board-members" className="board-section section-space" aria-labelledby="board-heading">
        <div className="shell"><div className="section-heading"><div><p className="eyebrow">Our leadership</p><h2 id="board-heading">Board Members<span className="gold-dot">.</span></h2></div><p>The people guiding<br />our shared direction.</p></div>
          <div className="leadership-profiles">
            <article className="leadership-profile"><h3 className="leadership-title">Meet our <em>Chairperson</em></h3><div className="leadership-panel"><div className="leadership-portrait"><img src={asset('leadership/ram-sharan-bhandari.jpeg')} alt="Ram Sharan Bhandari, Chairperson" width="600" height="800" loading="lazy" /></div><div className="leadership-copy"><p className="eyebrow">A shared vision</p><h4>Progress with people<br />at its heart.</h4><p>HAMS Group brings diverse businesses together around one human purpose: moving life forward. Better care, greater mobility and useful technology are all expressions of that shared ambition.</p><p>Our direction is grounded in trust, responsible innovation and the belief that growth matters when it improves everyday life.</p><div className="leadership-signature"><span>Ram Sharan Bhandari</span><p>Chairperson</p></div></div></div></article>
            <article className="leadership-profile leadership-reverse"><h3 className="leadership-title">Meet our <em>CEO</em></h3><div className="leadership-panel"><div className="leadership-portrait"><img src={asset('leadership/ajay-bhardwaj.webp')} alt="Ajay Bhardwaj, CEO" width="1000" height="1250" loading="lazy" /></div><div className="leadership-copy"><p className="eyebrow">Moving forward, together</p><h4>One purpose.<br />Everyday progress.</h4><p>Across HAMS, people, technology and disciplined execution come together to turn shared ambition into practical progress.</p><p>Different businesses share the same commitment: putting people first, earning trust, raising the standard and building capabilities for tomorrow.</p><div className="leadership-signature"><span>Ajay Bhardwaj</span><p>CEO</p></div></div></div></article>
          </div>
        </div>
      </section>

      <section id="careers" className="careers section-space">
        <div className="shell careers-grid"><div className="careers-photo"><img src={asset('technology.jpg')} alt="Colleagues sharing ideas and building new capabilities" loading="lazy" width="900" height="650" /><span>People who move us forward.</span></div><div className="careers-copy"><p className="eyebrow">Grow with purpose</p><h2>A shared ambition.<br />A stronger tomorrow<span className="gold-dot">.</span></h2><p>Meaningful work starts with people who care about what they build. Our culture brings together curiosity, responsibility and the ambition to keep raising the standard.</p><a href="#approach" className="text-link">Explore our values <Arrow /></a></div></div>
      </section>

      <section id="connect" className="connect section-space"><div className="shell"><p className="eyebrow">The next chapter</p><h2>Building a better tomorrow,<br />together<span className="gold-dot">.</span></h2><div className="connect-bottom"><p>Discover the possibilities across HAMS.</p><a className="button button-navy" href="#businesses">Find your business area <Arrow /></a></div></div></section>
    </main>

    <SiteFooter />
  </>;
}

