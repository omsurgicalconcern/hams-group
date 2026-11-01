'use client';

import { useEffect, useRef, useState } from 'react';

const asset = (name) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/${name}`;

const businesses = [
  { id: 'hospitals', name: 'Hospitals', message: 'Better Health. Humanly Delivered.', image: 'hospitals.jpg', alt: 'Healthcare professional in a clinical setting', number: '01', title: 'Care begins with people.', description: 'Helping people live healthier lives through care, capability and technology. Our healthcare direction puts dignity, confidence and the person behind every need at the centre.', focus: ['Human-centred care', 'Clinical capability', 'Healthier communities'] },
  { id: 'automobiles', name: 'Automobiles', message: 'Greater Mobility. More Possibility.', image: 'automobiles.jpg', alt: 'Modern vehicle outdoors', number: '02', title: 'More freedom to move.', description: 'Mobility connects people to work, family and opportunity. Our automotive direction is built around greater freedom, access and confidence in everyday journeys.', focus: ['Everyday mobility', 'Dependable service', 'Access and opportunity'] },
  { id: 'medical-devices', name: 'Medical Devices', message: 'Better Tools. Better Decisions.', image: 'medical-devices.jpg', alt: 'Laboratory equipment and medical research', number: '03', title: 'Capability behind better decisions.', description: 'Helping clinicians and institutions make better decisions with better tools. Medical technology brings useful information and dependable capability closer to the people who need them.', focus: ['Medical technology', 'Diagnostic capability', 'Institutional partnerships'] },
  { id: 'technology', name: 'IT & ITES', message: 'Smarter Technology. Stronger Business.', image: 'technology.jpg', alt: 'Team collaborating around a laptop', number: '04', title: 'Technology with a human purpose.', description: 'Helping organisations work smarter, connect faster and build new capability. We approach digital services through the practical problems they can simplify and the possibilities they can create.', focus: ['Digital capability', 'Connected organisations', 'Smarter ways of working'] },
];
const values = [
  ['Human First', 'Start with the person. Build around their experience, safety and opportunity.'],
  ['Earn Trust', 'Say what we mean. Do what we say. Protect the long-term relationship.'],
  ['Raise the Standard', 'Pursue quality, disciplined execution and continuous improvement.'],
  ['Build for Tomorrow', 'Invest in people and capabilities that create lasting value.'],
  ['One HAMS', 'Different businesses, shared standards. Moving forward together.'],
];
const nav = [['About HAMS', '#about'], ['Businesses', '#businesses'], ['Our Approach', '#approach'], ['Careers', '#careers']];

function Arrow({ diagonal = false, className = '' }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M3 12h17m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const lastTrigger = useRef(null);

  useEffect(() => {
    if (selected && dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal();
  }, [selected]);

  function closeBusiness() {
    dialogRef.current?.close();
    setSelected(null);
    lastTrigger.current?.focus();
  }

  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header">
      <div className="shell flex items-center justify-between gap-8">
        <a href="#" aria-label="HAMS Group home" className="logo"><img src={asset('hams-logo.svg')} alt="HAMS Group — Moving Life Forward" width="210" height="73" /></a>
        <nav aria-label="Main navigation" className="desktop-nav items-center gap-8">
          {nav.map(([name, href]) => <a key={href} href={href}>{name}</a>)}
        </nav>
        <a href="#connect" className="button button-navy header-contact">Let’s connect <Arrow /></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}><span className={menuOpen ? 'menu-lines is-open' : 'menu-lines'}><i /><i /></span></button>
      </div>
      {menuOpen && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{[...nav, ['Let’s connect', '#connect']].map(([name, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{name}<Arrow /></a>)}</nav>}
    </header>

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
          <div className="business-grid">
            {businesses.map(b => <button className="business-card group text-left" key={b.id} aria-haspopup="dialog" onClick={e => { lastTrigger.current = e.currentTarget; setSelected(b); }}>
              <div className="business-image"><img src={asset(b.image)} alt={b.alt} loading="lazy" width="600" height="700" /><span className="business-number">{b.number}</span><span className="image-arrow"><Arrow diagonal /></span></div>
              <h3>{b.name}</h3><p>{b.message}</p><span className="card-link">Explore business <Arrow /></span>
            </button>)}
          </div>
          <p className="image-note">Business imagery is illustrative.</p>
        </div>
      </section>

      <section id="approach" className="approach section-space">
        <div className="shell approach-grid">
          <div className="approach-intro"><p className="eyebrow text-gold">What moves us</p><h2>Progress with<br />people at<br />its heart<span className="gold-dot">.</span></h2><p>Our measure of progress is what becomes possible for people, organisations and communities.</p><div className="signature-line" /><span className="small-signature">People + Technology + Execution</span></div>
          <div className="values-list">{values.map(([title, copy], i) => <div className="value" key={title}><span className="value-number">0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
        </div>
      </section>

      <section id="careers" className="careers section-space">
        <div className="shell careers-grid"><div className="careers-photo"><img src={asset('technology.jpg')} alt="Colleagues sharing ideas and building new capabilities" loading="lazy" width="900" height="650" /><span>People who move us forward.</span></div><div className="careers-copy"><p className="eyebrow">Grow with purpose</p><h2>A shared ambition.<br />A stronger tomorrow<span className="gold-dot">.</span></h2><p>Meaningful work starts with people who care about what they build. Our culture brings together curiosity, responsibility and the ambition to keep raising the standard.</p><a href="#approach" className="text-link">Explore our values <Arrow /></a></div></div>
      </section>

      <section id="connect" className="connect section-space"><div className="shell"><p className="eyebrow">The next chapter</p><h2>Building a better tomorrow,<br />together<span className="gold-dot">.</span></h2><div className="connect-bottom"><p>Discover the possibilities across HAMS.</p><a className="button button-navy" href="#businesses">Find your business area <Arrow /></a></div></div></section>
    </main>

    <footer><div className="shell"><div className="footer-main"><a href="#" className="footer-logo" aria-label="Back to HAMS Group home"><img src={asset('hams-logo.svg')} alt="HAMS Group" width="210" height="73" /></a><p>Many businesses.<br />One human purpose.</p><nav aria-label="Footer navigation">{nav.map(([name, href]) => <a key={href} href={href}>{name}</a>)}</nav><a href="#" className="back-top">Back to top <span>↑</span></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} HAMS Group.</span><span>Moving Life Forward.</span><span>Nepal</span></div></div></footer>

    <dialog ref={dialogRef} className="business-dialog" aria-labelledby="business-dialog-title" onCancel={e => { e.preventDefault(); closeBusiness(); }} onClick={e => { if (e.target === e.currentTarget) closeBusiness(); }}>
      {selected && <div className="dialog-content"><button className="dialog-close" onClick={closeBusiness} aria-label="Close business details" autoFocus>×</button><div className="dialog-photo"><img src={asset(selected.image)} alt={selected.alt} /></div><div className="dialog-copy"><p className="eyebrow">HAMS {selected.name}</p><h2 id="business-dialog-title">{selected.title}</h2><p>{selected.description}</p><ul>{selected.focus.map(f => <li key={f}>{f}</li>)}</ul><p className="dialog-signature">{selected.message}</p><button className="text-link" onClick={closeBusiness}>Back to our businesses <Arrow /></button></div></div>}
    </dialog>
  </>;
}

