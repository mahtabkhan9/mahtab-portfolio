import React, { useEffect, useRef, useState } from 'react';
import { gsap, prefersReduced } from '../lib/gsap';
import { scrollToTarget } from '../lib/scroll';
import { RESUME, Hover } from './bits';
import reactL from '../assets/tech_logo/reactjs.png';
import nextL from '../assets/tech_logo/nextjs.png';
import nodeL from '../assets/tech_logo/nodejs.png';
import expressL from '../assets/tech_logo/express.png';
import mongoL from '../assets/tech_logo/mongodb.png';
import pgL from '../assets/tech_logo/postgre.png';
import tsL from '../assets/tech_logo/typescript.png';
import twL from '../assets/tech_logo/tailwindcss.png';
import gitL from '../assets/tech_logo/git.png';
import vercelL from '../assets/tech_logo/vercel.png';

const logos = [reactL, nextL, nodeL, expressL, mongoL, pgL, tsL, twL, gitL, vercelL];

const T = {
  'orders.controller.js': {
    code: [
      [['k', 'router'], ['p', '.'], ['f', 'post'], ['p', '('], ['s', "'/orders'"], ['p', ', '], ['f', 'auth'], ['p', ', '], ['k', 'async '], ['p', '(req, res) => {']],
      [['p', '  '], ['k', 'const '], ['v', 'order'], ['p', ' = '], ['k', 'await '], ['f', 'Order'], ['p', '.'], ['f', 'create'], ['p', '(req.body)']],
      [['p', '  '], ['k', 'await '], ['f', 'queue'], ['p', '.'], ['f', 'add'], ['p', '('], ['s', "'notify'"], ['p', ', { id: order.id })']],
      [['p', '  res.'], ['f', 'status'], ['p', '('], ['n', '201'], ['p', ').'], ['f', 'json'], ['p', '(order)']],
      [['p', '})']],
    ],
    res: ['201 Created', '{', '  "id": "ord_9f2c",', '  "status": "created",', '  "queued": true', '}'],
    ok: true,
  },
  'schema.sql': {
    code: [
      [['k', 'CREATE TABLE '], ['v', 'orders'], ['p', ' (']],
      [['p', '  id      '], ['k', 'uuid PRIMARY KEY'], ['p', ',']],
      [['p', '  user_id '], ['k', 'uuid REFERENCES '], ['v', 'users'], ['p', ',']],
      [['p', '  total   '], ['k', 'numeric'], ['p', '(10,2),']],
      [['p', '  status  '], ['k', 'text DEFAULT '], ['s', "'created'"]],
      [['p', ');']],
    ],
    res: ['Migration applied', 'CREATE TABLE', '1 table · 5 columns', 'PostgreSQL 16'],
    ok: true,
  },
  'OrderList.jsx': {
    code: [
      [['k', 'export default function '], ['f', 'OrderList'], ['p', '() {']],
      [['p', '  '], ['k', 'const '], ['p', '{ data } = '], ['f', 'useQuery'], ['p', '(['], ['s', "'orders'"], ['p', '])']],
      [['p', '  '], ['k', 'return '], ['p', '<'], ['f', 'Table'], ['p', ' rows={data} />']],
      [['p', '}']],
    ],
    res: ['Rendered in 38 ms', '<Table rows={12} />', 'Lighthouse 98'],
    ok: true,
  },
};
const tabs = Object.keys(T);
const count = (t) => T[t].code.reduce((n, l) => n + l.reduce((m, [, x]) => m + x.length, 0), 0);

// isolated so its ~60fps re-renders while typing never touch the rest of the hero
// (a shared re-render loop here used to stall the logo marquee's CSS animation)
const CodeTyper = ({ tab, ready }) => {
  const [typed, setTyped] = useState(() => (prefersReduced() ? count(tab) : 0));

  useEffect(() => {
    if (!ready) return undefined;
    if (prefersReduced()) { setTyped(count(tab)); return undefined; }
    setTyped(0);
    const o = { v: 0 };
    const total = count(tab);
    const tw = gsap.to(o, { v: total, duration: Math.max(1.4, total / 70), ease: 'none', delay: 0.5, onUpdate: () => setTyped(Math.floor(o.v)) });
    return () => tw.kill();
  }, [tab, ready]);

  const cur = T[tab];
  const done = typed >= count(tab);
  let left = typed;

  return (
    <div className="panel-body">
      <pre className="code" aria-label={`${tab} source`}>
        {cur.code.map((line, li) => (
          <div key={li} className="ln"><em>{li + 1}</em>
            {line.map(([c, t], ti) => {
              const take = Math.max(0, Math.min(t.length, left));
              left -= take;
              return <span key={ti} className={`t-${c}`}>{t.slice(0, take)}</span>;
            })}
          </div>
        ))}
        {!done && <span className="caret" />}
      </pre>
      <div className={`resp ${done ? 'show' : ''}`}>
        <div className="resp-h mono"><span>Response</span><b>{cur.res[0]}</b></div>
        <pre>{cur.res.slice(1).join('\n')}</pre>
      </div>
    </div>
  );
};

const Hero = ({ ready }) => {
  const root = useRef(null);
  const [tab, setTab] = useState(tabs[0]);
  const user = useRef(false);
  const trackRef = useRef(null);
  const setRef = useRef(null);

  // loop by the exact measured width of one copy, not -50%: flex gaps round to
  // whole pixels per set, so the percentage can drift a px or two and leave a
  // visible seam where the track jumps back to its start every lap
  useEffect(() => {
    const track = trackRef.current, firstSet = setRef.current;
    if (!track || !firstSet) return undefined;
    const measure = () => track.style.setProperty('--mw', `${firstSet.getBoundingClientRect().width}px`);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(firstSet);
    const imgs = [...firstSet.querySelectorAll('img')];
    imgs.forEach((img) => { if (!img.complete) img.addEventListener('load', measure, { once: true }); });
    window.addEventListener('resize', measure);
    return () => { ro.disconnect(); window.removeEventListener('resize', measure); };
  }, []);

  useEffect(() => {
    if (!ready || prefersReduced()) return undefined;
    const ctx = gsap.context(() => {
      gsap.from('.hero [data-up]', { opacity: 0, y: 24, duration: 1, ease: 'power3.out', stagger: 0.08, delay: 0.05 });
      gsap.from('.hero .panel', { opacity: 0, y: 50, duration: 1.2, ease: 'power3.out', delay: 0.4 });
    }, root);
    return () => ctx.revert();
  }, [ready]);

  // rotate files until the visitor picks one
  useEffect(() => {
    if (!ready || prefersReduced()) return undefined;
    const id = setInterval(() => { if (!user.current) setTab((t) => tabs[(tabs.indexOf(t) + 1) % tabs.length]); }, 8000);
    return () => clearInterval(id);
  }, [ready]);

  return (
    <section id="top" ref={root} className="hero">
      <div className="hero-in">
        <a className="ann" href="#experience" data-up onClick={(e) => { e.preventDefault(); scrollToTarget('#experience'); }}>
          <span className="dot" /> Full Stack Engineer Intern at IIT Patna <i>→</i>
        </a>
        <h1 className="h1" data-up>
          Full Stack Engineer.<br /><span>Building products end to end.</span>
        </h1>
        <p className="lead" data-up>I'm Mahtab Alam. I design and build web applications: the interface you interact with, the backend that powers it, and the database that keeps track of everything in between. I also build AI features, wired in where they actually help.</p>
        <div className="actions" data-up>
          <button className="b-primary" onClick={() => scrollToTarget('#projects')}><Hover>View my work</Hover></button>
          <a className="b-ghost" href={RESUME} target="_blank" rel="noopener noreferrer"><Hover>Download resume</Hover> <i>↗</i></a>
        </div>

        <div className="panel">
          <div className="panel-bar">
            <div className="tabs" role="tablist">
              {tabs.map((t) => (
                <button key={t} role="tab" aria-selected={tab === t} className={tab === t ? 'on' : ''} onClick={() => { user.current = true; setTab(t); }}>{t}</button>
              ))}
            </div>
            <span className="live"><u /> live</span>
          </div>
          <CodeTyper tab={tab} ready={ready} />
        </div>

        <div className="trusted" data-up>
          <p className="mono">Tools I build with</p>
          <div className="lg">
            <div className="lg-track" ref={trackRef}>
              <div className="lg-set" ref={setRef}>{logos.map((l, i) => <img key={i} src={l} alt="" />)}</div>
              <div className="lg-set" aria-hidden="true">{logos.map((l, i) => <img key={i} src={l} alt="" />)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
