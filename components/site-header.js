'use client';

import { useState } from 'react';
import { asset, categories, sitePath } from '../lib/businesses';
import Arrow from './arrow';

const navigation = [['Home', '/'], ...categories.map(category => [category.name, `/${category.slug}/`])];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header"><div className="shell flex items-center justify-between gap-8">
      <a href={sitePath('/')} aria-label="HAMS Group home" className="logo"><img src={asset('hams-logo.svg')} alt="HAMS Group — Moving Life Forward" width="210" height="73" /></a>
      <nav className="desktop-nav items-center gap-8" aria-label="Main navigation">{navigation.map(([name, href]) => <a href={sitePath(href)} key={href}>{name}</a>)}</nav>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className={`menu-lines${open ? ' is-open' : ''}`}><i /><i /></span></button>
    </div>{open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([name, href]) => <a key={href} href={sitePath(href)} onClick={() => setOpen(false)}>{name}<Arrow /></a>)}</nav>}</header>
  </>;
}
