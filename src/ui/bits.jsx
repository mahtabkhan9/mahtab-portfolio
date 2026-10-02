import React, { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

export const RESUME = 'https://drive.google.com/file/d/11CegXugrm9Mv0gFNLOY665cTRqXjbsxR/view?usp=drive_link';
export const EMAIL = 'mahtabalam7173@gmail.com';
export const PHONE = '+91 72608 32664';
export const LINKS = {
  github: 'https://github.com/mahtabkhan9',
  linkedin: 'https://linkedin.com/in/mahtab7860',
  instagram: 'https://www.instagram.com/mahtab_khan1971/',
  leetcode: 'https://leetcode.com/u/mahtabalam7173/',
  gfg: 'https://www.geeksforgeeks.org/profile/mahtabal1xrk',
};
export const host = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');
export const bullets = (desc) => desc.replace(/Pvt\. Ltd\./g, 'Pvt Ltd').split(/\.\s+/).map((s) => s.trim().replace(/\.$/, '')).filter(Boolean);
export const shortCo = (c) => {
  const s = c.replace('Indian Institute of Technology Patna', 'IIT Patna');
  if (s.startsWith('IIT Patna')) return s.trim();
  return s.split('(')[0].replace(/Pvt\. Ltd\./, '').trim();
};
export const pad = (n) => String(n).padStart(2, '0');

// cards light their border under the cursor
export const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};

// a link's label slides up and out on hover/focus while a duplicate copy
// slides up from underneath to take its place; pure CSS (the parent <a>/
// <button>'s :hover and :focus-visible drive the transform), so it costs
// nothing on mount and needs no JS per instance
export const Hover = ({ children, className }) => (
  <span className={`sl${className ? ` ${className}` : ''}`}>
    <span className="sl-in">
      <span className="sl-a">{children}</span>
      <span className="sl-b" aria-hidden="true">{children}</span>
    </span>
  </span>
);

// one quiet composition: name, title, a single line filling in. Nothing else.
export const Preloader = ({ onDone }) => {
  const root = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    // gsap.context + ctx.revert() (not tl.kill()) matters here: in dev, React's
    // StrictMode runs this effect twice, and a killed gsap.from() leaves the
    // elements at their "from" values (opacity: 0) baked in as inline styles,
    // so the second run's .from() would then animate from invisible to
    // invisible. revert() undoes those inline styles so the real run starts clean.
    const ctx = gsap.context(() => {
      gsap.timeline({ onComplete: onDone })
        .from('.pl-name', { opacity: 0, y: 12, duration: 0.7, ease: 'power3.out' })
        .from('.pl-role', { opacity: 0, y: 8, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .fromTo(fillRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: 'power2.inOut', transformOrigin: 'left' }, '-=0.15')
        .to(root.current, { opacity: 0, duration: 0.5, ease: 'power2.inOut' }, '+=0.35');
    }, root);
    return () => ctx.revert();
  }, [onDone]);

  return (
    <div ref={root} className="pl" aria-hidden="true">
      <div className="pl-in">
        <p className="pl-name">Mahtab Alam</p>
        <p className="pl-role mono">Full Stack Engineer</p>
        <div className="pl-track"><i ref={fillRef} /></div>
      </div>
    </div>
  );
};
