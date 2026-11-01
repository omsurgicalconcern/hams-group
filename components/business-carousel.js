'use client';

import { useEffect, useRef, useState } from 'react';
import { asset, companiesIn, companyPath, sitePath } from '../lib/businesses';
import Arrow from './arrow';

export default function BusinessCarousel({ category }) {
  const items = companiesIn(category.slug);
  const track = useRef(null);
  const card = useRef(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [interacting, setInteracting] = useState(false);

  function show(index) {
    const next = (index + items.length) % items.length;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.current?.scrollTo({ left: next * track.current.clientWidth, behavior: reduced ? 'instant' : 'smooth' });
  }

  useEffect(() => {
    // Start motion only when the visitor has not requested reduced motion.
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPlaying(!preference.matches);
    const update = () => setPlaying(!preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!playing || interacting || items.length < 2) return;
    const timer = setInterval(() => {
      if (document.hidden || !card.current) return;
      const bounds = card.current.getBoundingClientRect();
      if (bounds.top >= window.innerHeight || bounds.bottom <= 0) return;
      show(Math.round(track.current.scrollLeft / track.current.clientWidth) + 1);
    }, 6500);
    return () => clearInterval(timer);
  }, [playing, interacting, items.length]);

  return <article ref={card} className="business-card carousel-card" aria-label={`${category.name} companies`} aria-roledescription="carousel" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
    <div className="carousel-visual">
      <div ref={track} id={`carousel-${category.slug}`} className="company-track" onScroll={() => { const element = track.current; if (element?.clientWidth) setActive(Math.round(element.scrollLeft / element.clientWidth)); }}>
        {items.map((company, index) => <a className={`company-slide${company.imageMode ? ` ${company.imageMode}-slide` : ''}`} key={company.slug} href={companyPath(company)} aria-label={`Explore ${company.name}`} tabIndex={index === active ? 0 : -1} aria-hidden={index !== active}>
          <img src={asset(company.image)} alt={company.imageAlt} width="600" height="700" loading="lazy" />
          <span className="slide-caption"><span>{company.shortName}</span><Arrow diagonal /></span>
        </a>)}
      </div>
      <span className="business-number">{category.number}</span>
    </div>
    <div className="carousel-controls">
      <span className="carousel-count">{String(active + 1).padStart(2, '0')} <span>/ {String(items.length).padStart(2, '0')}</span></span>
      {items.length === 1 && <span className="single-company">Company</span>}
    </div>
    <h3><a href={sitePath(`/${category.slug}/`)}>{category.name}</a></h3>
    <p>{category.message}</p>
    <a className="card-link" href={sitePath(`/${category.slug}/`)}>Explore {category.name.toLowerCase()} <Arrow /></a>
  </article>;
}
