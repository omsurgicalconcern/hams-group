'use client';
import { useState } from 'react';
import { asset, categories, sectorImages, sitePath } from '../lib/businesses';
import Arrow from './arrow';
export default function BusinessAccordion(){
 const [active,setActive]=useState(0);
 function keyboard(event,index){if(['ArrowRight','ArrowLeft','ArrowDown','ArrowUp','Home','End'].includes(event.key)){event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?categories.length-1:(index+(['ArrowRight','ArrowDown'].includes(event.key)?1:-1)+categories.length)%categories.length;setActive(next);document.getElementById(`business-accordion-${next}`)?.focus();}}
 return <section id="businesses" className="business-explorer section-space"><div className="shell"><p className="eyebrow">Our businesses</p><h2>Progress across<br/>possibilities<span>.</span></h2></div><div className="business-accordion">{categories.map((category,index)=><article key={category.slug} className={`accordion-panel ${active===index?'is-active':''}`} onPointerEnter={event=>{if(event.pointerType==='mouse')setActive(index);}}><img src={asset(sectorImages[category.slug])} alt="" loading="lazy"/><div className="accordion-shade"/><button id={`business-accordion-${index}`} className="accordion-trigger" aria-expanded={active===index} aria-controls={`business-details-${index}`} onClick={()=>setActive(index)} onKeyDown={event=>keyboard(event,index)}><span>{category.name}</span></button><div id={`business-details-${index}`} className="accordion-details" inert={active!==index} aria-hidden={active!==index}><h3>{category.name}</h3><p>{category.description}</p><a className="outline-link" href={sitePath(`/${category.slug}/`)}>Explore {category.name.toLowerCase()}<Arrow/></a></div></article>)}</div></section>;
}
