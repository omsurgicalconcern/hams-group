'use client';

import { useEffect, useRef, useState } from 'react';
import { asset, categories, sitePath } from '../lib/businesses';
import Arrow from './arrow';

function BusinessDropdown({ onNavigate, mobile = false }) {
  const [expanded, setExpanded] = useState(false);
  const container = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    function outside(event) { if (!container.current?.contains(event.target)) setExpanded(false); }
    function escape(event) { if (event.key === 'Escape' && expanded) { setExpanded(false); trigger.current?.focus(); } }
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, [expanded]);
  const id = mobile ? 'mobile-business-links' : 'desktop-business-links';
  return <div ref={container} className={`business-dropdown${mobile ? ' mobile-business-dropdown' : ''}`}>
    <button ref={trigger} className="business-dropdown-trigger" aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(!expanded)}>Our Business <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" /></svg></button>
    {expanded && <div id={id} className="business-dropdown-links">{categories.map(category => <a key={category.slug} href={sitePath(`/${category.slug}/`)} onClick={() => { setExpanded(false); onNavigate?.(); }}>{category.name}<Arrow diagonal /></a>)}</div>}
  </div>;
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header"><div className="shell flex items-center justify-between gap-8">
      <a href={sitePath('/')} aria-label="HAMS Group home" className="logo"><img src={asset('hams-logo.svg')} alt="HAMS Group — Moving Life Forward" width="210" height="73" /></a>
      <nav className="desktop-nav items-center gap-8" aria-label="Main navigation"><a href={sitePath('/')}>Home</a><BusinessDropdown /><a href={sitePath('/#board-members')}>Board Members</a></nav>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className={`menu-lines${open ? ' is-open' : ''}`}><i /><i /></span></button>
    </div>{open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation"><a href={sitePath('/')} onClick={() => setOpen(false)}>Home<Arrow /></a><BusinessDropdown mobile onNavigate={() => setOpen(false)} /><a href={sitePath('/#board-members')} onClick={() => setOpen(false)}>Board Members<Arrow /></a></nav>}</header>
  </>;
}
