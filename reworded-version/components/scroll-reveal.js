'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

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
].join(', ');

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;
    const elements = new Set();
    let frame;
    let motionFrame;
    function paintScroll() {
      document.querySelectorAll('.reading-statement, .chairperson-statement').forEach(statement => {
        const rect = statement.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight * .88 - rect.top) / (window.innerHeight * .48 + rect.height * .4)));
        const words = [...statement.querySelectorAll('[data-reading-word], [data-reading-char]')];
        words.forEach((word, index) => word.style.setProperty('--word-opacity', motion.matches ? '1' : String(.18 + .82 * Math.max(0, Math.min(1, progress * (words.length + 2) - index)))));
      });
      document.querySelectorAll('.progress-story').forEach(story => {
        const rect = story.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const image = story.querySelector('img');
          if (image) image.style.transform = motion.matches ? 'none' : `translateY(${Math.max(-45, Math.min(45, (window.innerHeight / 2 - rect.top - rect.height / 2) * .09))}px)`;
        }
      });
    }
    function queueMotion() { cancelAnimationFrame(motionFrame); motionFrame = requestAnimationFrame(paintScroll); }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting, boundingClientRect }) => {
        if (isIntersecting || motion.matches) {
          target.dataset.revealState = 'visible';
        } else if (boundingClientRect.top >= window.innerHeight) {
          // Re-arm only below the viewport, so scrolling upward never hides content above.
          target.dataset.revealState = 'pending';
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -64px 0px' });

    function register() {
      const candidates = [...document.querySelectorAll(targets)].filter(element => !element.closest('.cinematic-hero, .reading-statement, .chairperson-section'));
      const selected = new Set(candidates);
      candidates.forEach(element => {
        if (elements.has(element)) return;
        let parent = element.parentElement;
        while (parent && !selected.has(parent)) parent = parent.parentElement;
        if (parent) return;
        elements.add(element);
        const siblings = [...element.parentElement.children].filter(child => selected.has(child));
        element.style.setProperty('--reveal-delay', `${Math.max(0, siblings.indexOf(element) % 4) * 110}ms`);
        element.classList.add('scroll-reveal');
        const rect = element.getBoundingClientRect();
        element.dataset.revealState = motion.matches || rect.bottom < 0 ? 'visible' : 'pending';
        observer.observe(element);
      });
    }
    function updateMotion() {
      if (motion.matches) elements.forEach(element => { element.dataset.revealState = 'visible'; });
      queueMotion();
    }
    function revealFocus(event) {
      const element = event.target.closest('.scroll-reveal');
      if (element) element.dataset.revealState = 'visible';
    }
    register();
    queueMotion();
    window.addEventListener('scroll', queueMotion, { passive: true });
    window.addEventListener('resize', queueMotion);
    // Include content that arrives through streamed rendering or client navigation.
    const mutations = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(register);
      queueMotion();
    });
    mutations.observe(document.body, { childList: true, subtree: true });
    motion.addEventListener('change', updateMotion);
    document.addEventListener('focusin', revealFocus);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(motionFrame);
      window.removeEventListener('scroll', queueMotion);
      window.removeEventListener('resize', queueMotion);
      motion.removeEventListener('change', updateMotion);
      document.removeEventListener('focusin', revealFocus);
      elements.forEach(element => {
        element.classList.remove('scroll-reveal');
        delete element.dataset.revealState;
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, [pathname]);

  return null;
}
