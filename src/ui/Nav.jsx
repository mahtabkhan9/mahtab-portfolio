import React, { useEffect, useMemo, useRef, useState } from 'react';
import { scrollToTarget, getLenis } from '../lib/scroll';
import { RESUME, EMAIL, LINKS, Hover } from './bits';

const sections = [
  ['experience', 'Experience'], ['skills', 'Skills'], ['projects', 'Projects'], ['education', 'Education'], ['profiles', 'Coding profiles'], ['contact', 'Contact'],
];

// Raycast-style command menu: search, arrow keys, enter
const Palette = ({ open, onClose }) => {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const input = useRef(null);
  const itemRefs = useRef([]);
  const [copied, setCopied] = useState(false);

  const actions = useMemo(() => [
    ...sections.map(([id, label]) => ({ group: 'Go to', label, hint: 'Section', run: () => scrollToTarget(`#${id}`) })),
    { group: 'Actions', label: 'Open resume', hint: '↗', run: () => window.open(RESUME, '_blank', 'noopener') },
    { group: 'Actions', label: copied ? 'Email copied' : `Copy email · ${EMAIL}`, hint: 'Copy', stay: true, run: () => { navigator.clipboard?.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 1600); } },
    { group: 'Elsewhere', label: 'GitHub', hint: '↗', run: () => window.open(LINKS.github, '_blank', 'noopener') },
    { group: 'Elsewhere', label: 'LinkedIn', hint: '↗', run: () => window.open(LINKS.linkedin, '_blank', 'noopener') },
    { group: 'Elsewhere', label: 'LeetCode', hint: '↗', run: () => window.open(LINKS.leetcode, '_blank', 'noopener') },
    { group: 'Elsewhere', label: 'GeeksforGeeks', hint: '↗', run: () => window.open(LINKS.gfg, '_blank', 'noopener') },
  ], [copied]);

  const list = actions.filter((a) => a.label.toLowerCase().includes(q.trim().toLowerCase()));

  useEffect(() => { if (open) { setQ(''); setSel(0); setTimeout(() => input.current?.focus(), 30); } }, [open]);
  useEffect(() => { setSel(0); }, [q]);

  // keep the highlighted row scrolled into the visible part of the list
  useEffect(() => { itemRefs.current[sel]?.scrollIntoView({ block: 'nearest' }); }, [sel]);

  // stop the page (and Lenis) from scrolling behind the open palette
  useEffect(() => {
    if (!open) return undefined;
    const lenis = getLenis();
    lenis?.stop();
    document.documentElement.classList.add('lenis-stopped');
    return () => {
      lenis?.start();
      document.documentElement.classList.remove('lenis-stopped');
    };
  }, [open]);

  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel((s) => Math.min(s + 1, list.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    if (e.key === 'Enter' && list[sel]) { const a = list[sel]; a.run(); if (!a.stay) onClose(); }
    if (e.key === 'Escape') onClose();
  };

  itemRefs.current = [];
  let last = '';
  return (
    <div className={`pal ${open ? 'open' : ''}`} onMouseDown={(e) => e.target === e.currentTarget && onClose()} aria-hidden={!open} inert={!open}>
      <div className="pal-box" role="dialog" aria-modal="true" aria-label="Command menu" onKeyDown={onKey}>
        <div className="pal-in">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search or jump to…" aria-label="Search commands" />
          <kbd>esc</kbd>
        </div>
        <ul className="pal-list" data-lenis-prevent>
          {list.map((a, i) => {
            const head = a.group !== last; last = a.group;
            return (
              <React.Fragment key={a.label}>
                {head && <li className="pal-g" aria-hidden="true">{a.group}</li>}
                <li><button ref={(el) => { itemRefs.current[i] = el; }} className={i === sel ? 'on' : ''} onMouseEnter={() => setSel(i)} onClick={() => { a.run(); if (!a.stay) onClose(); }}><span>{a.label}</span><em>{a.hint}</em></button></li>
              </React.Fragment>
            );
          })}
          {list.length === 0 && <li className="pal-none">No results for “{q}”</li>}
        </ul>
        <div className="pal-foot"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>↵</kbd> select</span></div>
      </div>
    </div>
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen((o) => !o); }
    };
    window.addEventListener('keydown', onKey);
    const els = sections.map(([id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    els.forEach((el) => io.observe(el));
    return () => { window.removeEventListener('keydown', onKey); io.disconnect(); };
  }, []);

  const go = (e, id) => { e.preventDefault(); scrollToTarget(`#${id}`); };

  return (
    <>
      <header className="nav">
        <div className="nav-in">
          <a href="#top" className="brand" onClick={(e) => go(e, 'top')}>
            <span>Mahtab Alam</span>
          </a>
          <nav className="links" aria-label="Sections">
            {sections.slice(0, 5).map(([id, label]) => (
              <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} onClick={(e) => go(e, id)}><Hover>{label.replace('Coding profiles', 'Coding')}</Hover></a>
            ))}
          </nav>
          <div className="nav-r">
            <button className="kbtn" onClick={() => setOpen(true)} aria-label="Open command menu"><span>Search</span><kbd>⌘</kbd><kbd>K</kbd></button>
            <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">Menu</button>
            <a className="cv" href={RESUME} target="_blank" rel="noopener noreferrer"><Hover>Resume</Hover></a>
          </div>
        </div>
      </header>
      <Palette open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Nav;
