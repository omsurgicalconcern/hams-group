'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { asset, categories, companies, sitePath } from '../lib/businesses';
import Arrow from './arrow';

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState('');
  const header = useRef(null);
  const search = useRef(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 45);
    update(); window.addEventListener('scroll', update, { passive: true });
    function close(event) { if (event.key === 'Escape' || (event.type === 'pointerdown' && !header.current?.contains(event.target))) setMenu(false); }
    document.addEventListener('keydown', close); document.addEventListener('pointerdown', close);
    return () => { window.removeEventListener('scroll', update); document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', close); };
  }, []);
  const results = [{name:'About HAMS',path:'/about/'},{name:'Board Members',path:'/board-members/'},...categories.map(item=>({name:item.name,path:`/${item.slug}/`,keywords:item.description})),...companies.map(item=>({name:item.name,path:`/${item.category}/${item.slug}/`,keywords:item.description}))].filter(item=>`${item.name} ${item.keywords || ''}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header ref={header} className={`site-header ${pathname === '/' && !scrolled && !menu ? 'over-hero' : ''}`}>
      <div className="header-inner"><a href={sitePath('/')} className="logo" aria-label="HAMS Group home"><img src={asset('hams-logo.svg')} width="210" height="73" alt="HAMS Group — Moving Life Forward" /></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href={sitePath('/about/')}>About us</a><button className={menu ? 'selected' : ''} onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-controls="business-menu">Our businesses <span>⌄</span></button><a href={sitePath('/board-members/')}>Leadership</a></nav>
        <div className="header-actions"><button className="search-button" aria-label="Search website" onClick={()=>search.current.showModal()}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="m16 16 5 5" stroke="currentColor" strokeWidth="1.5"/></svg></button><button className={`menu-toggle ${menu?'is-open':''}`} aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu} aria-controls="business-menu" onClick={()=>setMenu(!menu)}><i/><i/></button></div>
      </div>
      {menu && <div id="business-menu" className="mega-menu"><div className="mega-intro"><p className="eyebrow">One HAMS</p><h2>Many businesses.<br/>One human purpose.</h2><a className="text-link" href={sitePath('/about/')}>Discover the group <Arrow/></a><div className="mobile-menu-links"><a href={sitePath('/about/')}>About us</a><a href={sitePath('/board-members/')}>Leadership</a></div></div><div className="mega-sectors">{categories.map(category=><div key={category.slug}><a className="mega-category" href={sitePath(`/${category.slug}/`)}>{category.name}<Arrow diagonal/></a>{companies.filter(company=>company.category===category.slug).map(company=><a key={company.slug} href={sitePath(`/${category.slug}/${company.slug}/`)}>{company.shortName}</a>)}</div>)}</div></div>}
    </header>
    <dialog className="search-dialog" ref={search} onClick={event=>{if(event.target===event.currentTarget) search.current.close();}}><div className="search-content"><button className="search-close" aria-label="Close search" onClick={()=>search.current.close()}>×</button><p className="eyebrow">Explore HAMS</p><h2>What are you looking for?</h2><label htmlFor="site-search" className="sr-only">Search pages and companies</label><input id="site-search" type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search pages and companies…"/><div className="search-results">{results.length?results.map(item=><a key={item.path} href={sitePath(item.path)}>{item.name}<Arrow diagonal/></a>):<p>No matching pages. Try a business or company name.</p>}</div></div></dialog>
  </>;
}

