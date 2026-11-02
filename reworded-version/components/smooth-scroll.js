'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)');
    let frame = 0;
    let destination = window.scrollY;
    let lastTime = 0;
    function cancel() { cancelAnimationFrame(frame); frame = 0; destination = window.scrollY; }
    function tick(time) {
      const distance = destination - window.scrollY;
      const fraction = 1 - Math.pow(.83, Math.min(2, (time - lastTime) / 16.67 || 1));
      lastTime = time;
      if (Math.abs(distance) < 1.5) { window.scrollTo({ top: destination, behavior: 'instant' }); frame = 0; return; }
      window.scrollTo({ top: window.scrollY + distance * fraction, behavior: 'instant' });
      frame = requestAnimationFrame(tick);
    }
    function wheel(event) {
      if (reduced.matches || !desktop.matches || event.ctrlKey || event.metaKey || event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (event.target.closest('dialog[open], .mega-menu, input, textarea, select, .company-track')) return;
      const limit = document.documentElement.scrollHeight - window.innerHeight;
      if (!frame) destination = window.scrollY;
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1);
      destination = Math.max(0, Math.min(limit, destination + delta));
      if (!event.cancelable) return;
      event.preventDefault();
      if (!frame) { lastTime = 0; frame = requestAnimationFrame(tick); }
    }
    window.addEventListener('wheel', wheel, { passive: false });
    window.addEventListener('keydown', cancel);
    window.addEventListener('pointerdown', cancel);
    window.addEventListener('resize', cancel);
    reduced.addEventListener('change', cancel);
    return () => {
      cancel();
      window.removeEventListener('wheel', wheel);
      window.removeEventListener('keydown', cancel);
      window.removeEventListener('pointerdown', cancel);
      window.removeEventListener('resize', cancel);
      reduced.removeEventListener('change', cancel);
    };
  }, []);
  return null;
}
