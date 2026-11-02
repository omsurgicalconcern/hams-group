'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const targets = [
  'main h1', 'main h2', 'main h3', 'main p', 'main figure',
  'main .button', 'main .text-link', 'main .business-card', 'main .company-card',
  'main .value', 'main .careers-photo', 'main .careers-copy', 'main .purpose-copy',
  'main .about-story > div', 'main .about-direction article', 'main .about-portfolio > a',
  'main .profile-image', 'main .profile-copy', 'main .profile-row',
  'main .leadership-title', 'main .leadership-panel', 'main .member-card',
  'main .category-pillars > div', 'main .other-category-links > a',
  'main .category-team-photo', 'main .alliance-static > div',
  'main .photo-hero-count', 'main .category-member-count',
  'footer .footer-main > *', 'footer .footer-bottom',
  'main .sector-tabs', 'main .sector-panel', 'main .all-company-grid > a',
  'main .leadership-feature-image', 'main .people-grid > a', 'main .outline-link',
  'main .round-link', 'footer .footer-top > *', 'footer .footer-columns > div',
  'main .accordion-panel',
].join(', ');

export default function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    const media = gsap.matchMedia();
    let mutation;
    let refreshFrame;
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const seen = new WeakSet();
      const animations = new Map();
      const context = gsap.context(() => {});
      function register() {
        context.add(() => {
          const candidates = [...document.querySelectorAll(targets)].filter(el => !el.closest('.cinematic-hero, .reading-statement, .chairperson-section'));
          const selected = new Set(candidates);
          candidates.forEach(el => {
            if (seen.has(el)) return;
            let parent = el.parentElement;
            while (parent && !selected.has(parent)) parent = parent.parentElement;
            if (parent) return;
            seen.add(el);
            const siblings = [...el.parentElement.children].filter(child => selected.has(child));
            const tween = gsap.fromTo(el, {autoAlpha:0, y:44}, {autoAlpha:1, y:0, duration:.95, delay:Math.max(0,siblings.indexOf(el)%4)*.1, ease:'power3.out', scrollTrigger:{trigger:el,start:'top 92%',toggleActions:'play none none reverse'}});
            animations.set(el,tween);
          });
          document.querySelectorAll('.progress-story > img, .category-photo-background, .chairperson-portrait img, .sector-panel > img').forEach(image => {
            if(seen.has(image))return;
            seen.add(image);
            gsap.fromTo(image,{yPercent:-6,scale:1.14},{yPercent:6,scale:1.14,ease:'none',scrollTrigger:{trigger:image.parentElement,start:'top bottom',end:'bottom top',scrub:1.1,invalidateOnRefresh:true}});
          });
        });
        ScrollTrigger.refresh();
      }
      context.add(() => {
        const hero = document.querySelector('.cinematic-hero');
        if (hero) {
          gsap.to(hero, {'--cover-shade': .38, ease:'none', scrollTrigger:{
            trigger:hero, start:'top top', end:'bottom top', pin:true,
            pinSpacing:false, scrub:.7, anticipatePin:1, invalidateOnRefresh:true,
          }});
          gsap.to(hero.querySelectorAll('.hero-scene'), {yPercent:-18,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:.7,invalidateOnRefresh:true}});
        }
        document.querySelectorAll('.reading-statement, .chairperson-statement').forEach(statement => {
          const chars=statement.querySelectorAll('[data-reading-word], [data-reading-char]');
          gsap.fromTo(chars,{opacity:.18},{opacity:1,stagger:.035,ease:'none',scrollTrigger:{trigger:statement,start:'top 85%',end:'bottom 40%',scrub:.65}});
        });
        const outline=document.querySelector('.speech-outline path');
        if(outline){const length=outline.getTotalLength();gsap.fromTo(outline,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,ease:'none',scrollTrigger:{trigger:'.chairperson-copy',start:'top 80%',end:'bottom 65%',scrub:1}});}
      });
      register();
      mutation=new MutationObserver(() => {
        cancelAnimationFrame(refreshFrame);
        refreshFrame=requestAnimationFrame(register);
      });
      mutation.observe(document.querySelector('main') || document.body,{subtree:true,childList:true});
      const images=[...document.images].filter(image=>!image.complete);
      const refresh=()=>ScrollTrigger.refresh();
      images.forEach(image=>image.addEventListener('load',refresh));
      function focus(event){for(const [el,tween] of animations){if(el.contains(event.target))tween.progress(1);}}
      document.addEventListener('focusin',focus);
      return () => {
        mutation.disconnect(); cancelAnimationFrame(refreshFrame);
        images.forEach(image=>image.removeEventListener('load',refresh));
        document.removeEventListener('focusin',focus);
        context.revert();
      };
    });
    return () => { media.revert(); };
  }, [pathname]);
  return null;
}
