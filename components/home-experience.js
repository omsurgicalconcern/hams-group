'use client';

import { useEffect, useState } from 'react';
import { asset, categories, companies, companiesIn, sitePath } from '../lib/businesses';
import Arrow from './arrow';
import { gsap } from 'gsap';

export const sectorImages = {
  hospital: 'Hospital/hams-team-upscaled.webp',
  automobile: 'Automobile/banner.png',
  'medical-devices': 'Medical-devices/medical-team.webp',
  'it-ites': 'IT/coding-laptop.jpg',
};
const slides = [
  { name:'Human progress', title:'Moving Life\nForward.', image:'himalayan-sunrise.png', description:'Better health. Greater mobility. Smarter technology.', path:'/#businesses' },
  ...categories.map(category=>({name:category.name,title:category.message.replace('. ','.\n'),description:category.headline,image:sectorImages[category.slug],path:`/${category.slug}/`}))
];

export function CinematicHero() {
  const [active,setActive] = useState(0);
  const [previous,setPrevious] = useState(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const scene = document.querySelector('.hero-scene.active');
      if (!scene) return;
      const timeline = gsap.timeline();
      timeline.fromTo(scene, {clipPath:'inset(calc(100% - 155px) 4% 50px calc(100% - 250px))'}, {clipPath:'inset(0%)',duration:1.1,ease:'power3.inOut'})
        .fromTo(scene.querySelectorAll('.scene-copy > *'),{autoAlpha:0,y:45},{autoAlpha:1,y:0,stagger:.2,duration:1,ease:'power3.out'},.45)
        .fromTo(scene.querySelector('.scene-image'),{scale:1.08},{scale:1,duration:11,ease:'none'},0);
      return () => timeline.revert();
    });
    return () => media.revert();
  }, [active]);
  function changeSlide(index) { setPrevious(active); setActive(index); }
  useEffect(()=>{
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    function schedule(){clearInterval(timer); if(!preference.matches) timer=setInterval(()=>{if(!document.hidden){setPrevious(active);setActive((active+1)%slides.length);}},11000);}
    schedule(); preference.addEventListener('change',schedule);
    return ()=>{clearInterval(timer);preference.removeEventListener('change',schedule);};
  },[active]);
  const move=direction=>changeSlide((active+direction+slides.length)%slides.length);
  return <section className="cinematic-hero" aria-label="Discover HAMS Group" aria-roledescription="carousel">
    {slides.map((slide,index)=><div className={`hero-scene ${active===index?'active':previous===index?'is-previous':''}`} aria-hidden={index!==active} key={slide.name}>
      <img className="scene-image" src={asset(slide.image)} alt="" fetchPriority={index===0?'high':'auto'} loading={index===0?'eager':'lazy'}/><div className="scene-shade"/>
      <div className="shell scene-copy"><p className="eyebrow">{slide.name}</p><h1>{slide.title.split('\n').map((line,i)=><span key={i}>{line}</span>)}</h1><p>{slide.description}</p><a className="outline-link" href={sitePath(slide.path)} tabIndex={active===index?0:-1}>Discover more <Arrow/></a></div>
    </div>)}
    <div className="shell hero-navigation"><a className="scroll-cue" href="#chairperson"><span className="scroll-line"/>Scroll to explore</a><div className="hero-controls"><button onClick={()=>move(-1)} aria-label="Previous slide">←</button><button onClick={()=>move(1)} aria-label="Next slide">→</button></div></div>
    <div className="hero-dots" key={active}>{slides.map((slide,index)=><button key={slide.name} aria-label={`Show ${slide.name}`} aria-current={active===index?'true':undefined} onClick={()=>changeSlide(index)}><span/></button>)}</div>
  </section>;
}

export function BusinessExplorer() {
  const [tab,setTab]=useState('verticals');
  const [active,setActive]=useState(0);
  const category=categories[active];
  function keyboard(event,index){if(['ArrowRight','ArrowLeft','Home','End'].includes(event.key)){event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?categories.length-1:(index+(event.key==='ArrowRight'?1:-1)+categories.length)%categories.length;setActive(next);document.getElementById(`sector-tab-${next}`)?.focus();}}
  return <section id="businesses" className="business-explorer section-space"><div className="shell"><div className="explorer-heading"><div><p className="eyebrow">Our businesses</p><h2>Progress across<br/>possibilities<span>.</span></h2></div><div className="explorer-modes" aria-label="Business view"><button aria-pressed={tab==='verticals'} onClick={()=>setTab('verticals')}>Business verticals</button><button aria-pressed={tab==='companies'} onClick={()=>setTab('companies')}>Our companies</button></div></div>
    {tab==='verticals'?<><div className="sector-tabs" role="tablist" aria-label="Business verticals">{categories.map((item,index)=><button key={item.slug} id={`sector-tab-${index}`} role="tab" aria-selected={active===index} aria-controls="sector-panel" tabIndex={active===index?0:-1} onKeyDown={event=>keyboard(event,index)} onClick={()=>setActive(index)}>{item.name}<Arrow diagonal/></button>)}</div><div id="sector-panel" role="tabpanel" aria-labelledby={`sector-tab-${active}`} className="sector-panel" key={category.slug}><img src={asset(sectorImages[category.slug])} alt={`${category.name} at HAMS Group`} loading="lazy"/><div className="sector-panel-shade"/><div className="sector-panel-content"><p className="eyebrow">{category.message}</p><h3>{category.headline}</h3><div className="sector-company-links">{companiesIn(category.slug).map(company=><a key={company.slug} href={sitePath(`/${category.slug}/${company.slug}/`)}>{company.shortName}<Arrow diagonal/></a>)}</div><a className="outline-link" href={sitePath(`/${category.slug}/`)}>Explore {category.name.toLowerCase()}<Arrow/></a></div></div></>:<div className="all-company-grid">{companies.map(company=><a href={sitePath(`/${company.category}/${company.slug}/`)} key={company.slug}><span>{categories.find(category=>category.slug===company.category).name}</span><h3>{company.name}</h3><Arrow diagonal/></a>)}</div>}
  </div></section>;
}

export function PurposeStatement() {
  const words='We bring people, technology and capability together to improve everyday life.'.split(' ');
  return <section id="purpose" className="purpose-statement section-space"><div className="shell purpose-layout"><div className="purpose-label"><p className="eyebrow">Rooted in Nepal.<br/>Looking ahead.</p><span className="purpose-symbol" aria-hidden="true">H<span>+</span></span></div><div><p className="reading-statement" aria-label={words.join(' ')}>{words.map((word,index)=><span key={index} data-reading-word aria-hidden="true">{word} </span>)}</p><div className="purpose-caption"><p>Many businesses.<br/>One human purpose.</p><a className="text-link" href={sitePath('/about/')}>Discover HAMS Group<Arrow/></a></div></div></div></section>;
}

export function ChairpersonStatement() {
  const statement='HAMS Group brings diverse businesses together around one human purpose: moving life forward. Better care, greater mobility and useful technology are all expressions of that shared ambition.';
  return <section id="chairperson" className="chairperson-section" aria-label="Our shared purpose and chairperson">
    <div className="chairperson-portrait"><img src={asset('leadership/ram-sharan-bhandari-portrait.png')} alt="Ram Sharan Bhandari, Chairperson of HAMS Group" width="600" height="800" loading="eager"/></div>
    <div className="chairperson-copy"><div className="chairperson-speech"><p className="eyebrow">HAMS Group / Our shared purpose</p><p className="chairperson-statement" aria-label={statement}>{statement.split(' ').map((word,index)=><span className="chairperson-word" key={index} aria-hidden="true">{[...word].map((char,charIndex)=><span data-reading-char key={charIndex}>{char}</span>)}{' '}</span>)}</p><svg className="speech-outline" viewBox="0 0 1000 160" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M0 30H335V140L425 30H980Q998 30 998 10V0" vectorEffect="non-scaling-stroke"/></svg></div><div className="chairperson-info"><h2>Ram Sharan Bhandari</h2><p>Chairperson, HAMS Group</p><a className="profile-link" href={sitePath('/board-members/')}>View profile<Arrow diagonal/></a></div></div>
  </section>;
}


