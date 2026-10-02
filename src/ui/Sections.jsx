import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiGithub, FiArrowUpRight, FiCopy, FiCheck } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { gsap, prefersReduced } from '../lib/gsap';
import { scrollToTarget } from '../lib/scroll';
import { projects, experiences, SkillsInfo, education } from '../data';
import { spot, bullets, shortCo, host, pad, EMAIL, PHONE, LINKS, RESUME, Hover } from './bits';

const Head = ({ id, title, sub, tag }) => (
  <header className="sh">
    <span className="tag mono" data-fade>{tag}</span>
    <h2 className="h2" data-split>{title}</h2>
    {sub && <p className="sub" data-fade>{sub}</p>}
  </header>
);

/* ---------- experience: a Linear-style issue list ---------- */
const Status = ({ now }) => (
  <svg className={`st ${now ? 'now' : 'done'}`} viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
    <circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    {now ? <path d="M8 4.2a3.8 3.8 0 0 1 0 7.6z" fill="currentColor" /> : <path d="m5.3 8.2 1.9 1.9 3.6-3.7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />}
  </svg>
);

export const Experience = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="sec">
      <Head tag="Experience" title="Where I've worked." sub="Three engineering internships, newest first." />
      <div className="issues" data-fade>
        <div className="is-head mono"><span>Status</span><span>Role</span><span>Company</span><span>Period</span></div>
        {experiences.map((e, i) => {
          const now = e.date.includes('Present');
          const on = open === i;
          return (
            <article key={e.id} className={`is ${on ? 'open' : ''}`}>
              <button className="is-row" onClick={() => setOpen(on ? -1 : i)} aria-expanded={on}>
                <span className="is-st"><Status now={now} /><em className="mono">{now ? 'In progress' : 'Done'}</em></span>
                <span className="is-role"><i className="mono">MA-{pad(experiences.length - i)}</i>{e.role}</span>
                <span className="is-co">{shortCo(e.company)}</span>
                <span className="is-date mono">{e.date}</span>
                <span className="is-car" aria-hidden="true">›</span>
              </button>
              <div className="is-body">
                <div className="is-in">
                  <div className="is-logo"><img src={e.img} alt="" /></div>
                  <div>
                    <ul>{bullets(e.desc).map((b) => <li key={b}>{b}</li>)}</ul>
                    <div className="chips">{e.skills.map((s) => <span key={s} className="chip">{s}</span>)}</div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

/* ---------- skills: a bordered feature grid ---------- */
const blurb = { Languages: 'What I write in.', 'Core CS': 'What I reason with.', Frontend: 'What people see.', Backend: 'What runs behind it.', 'Gen AI': 'Building with models.', 'Tools & Cloud': 'How it ships.' };

export const Skills = () => (
  <section id="skills" className="sec">
    <Head tag="Skills" title="What I work with." sub="Grouped by where each tool sits in a product." />
    <div className="grid3" data-fade>
      {SkillsInfo.map((cat, i) => (
        <div key={cat.title} className="cell" onPointerMove={spot}>
          <span className="cell-n mono">{pad(i + 1)}</span>
          <h3>{cat.title}</h3>
          <p>{blurb[cat.title]}</p>
          <ul>
            {cat.skills.map((s) => (
              <li key={s.name}>{s.logo ? <img src={s.logo} alt="" /> : <span className="gl">{s.icon}</span>}{s.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

/* ---------- projects: alternating rows, each in a browser window ---------- */
export const Projects = () => (
  <section id="projects" className="sec">
    <Head tag="Projects" title="Things I've built." sub="Four full-stack products, each with a live demo and the source on GitHub." />
    <div className="proj-list">
      {projects.map((p, i) => {
        const [name, ...rest] = p.title.split(' - ');
        return (
          <article key={p.id} className={`proj ${i % 2 ? 'rev' : ''}`} onPointerMove={spot} data-fade>
            <div className="proj-copy">
              <span className="proj-n mono">{pad(i + 1)} / {pad(projects.length)}</span>
              <h3>{name}</h3>
              {rest.length > 0 && <p className="proj-sub">{rest.join(' - ')}</p>}
              <p className="proj-d">{p.description}</p>
              <div className="chips">{p.tags.slice(0, 6).map((t) => <span key={t} className="chip">{t}</span>)}</div>
              <div className="proj-l">
                <a className="b-primary sm" href={p.webapp} target="_blank" rel="noopener noreferrer"><Hover>Live demo</Hover> <FiArrowUpRight /></a>
                <a className="b-ghost sm" href={p.github} target="_blank" rel="noopener noreferrer"><Hover>Source</Hover> <FiGithub /></a>
              </div>
            </div>
            <a className="proj-win" href={p.webapp} target="_blank" rel="noopener noreferrer" aria-label={`Open ${name} live demo`}>
              <div className="win-chrome"><i /><i /><i /><span className="mono">{host(p.webapp)}</span></div>
              <div className="win-shot"><img src={p.image} alt={`${name} screenshot`} loading="lazy" /></div>
            </a>
          </article>
        );
      })}
    </div>
    <div className="more" data-fade><a className="b-ghost" href="https://github.com/mahtabkhan9?tab=repositories" target="_blank" rel="noopener noreferrer"><Hover>All repositories on GitHub</Hover> <FiArrowUpRight /></a></div>
  </section>
);

/* ---------- coding profiles ---------- */
const profiles = [
  { name: 'GitHub', user: 'mahtabkhan9', use: 'Source for every project here.', href: LINKS.github, Icon: FiGithub },
  { name: 'LeetCode', user: 'mahtabalam7173', use: 'Data structures and algorithms practice.', href: LINKS.leetcode, Icon: SiLeetcode },
  { name: 'GeeksforGeeks', user: 'mahtabal1xrk', use: 'Core CS revision and problem notes.', href: LINKS.gfg, Icon: SiGeeksforgeeks },
];

export const Profiles = () => (
  <section id="profiles" className="sec">
    <Head tag="Coding profiles" title="Where I code." sub="Where I build, practise and keep learning." />
    <div className="pf" data-fade>
      {profiles.map(({ name, user, use, href, Icon }) => (
        <a key={name} className="pf-c" href={href} target="_blank" rel="noopener noreferrer" onPointerMove={spot}>
          <Icon className="pf-i" />
          <div><h3><Hover>{name}</Hover></h3><p>{use}</p></div>
          <span className="pf-u mono">@{user}</span>
          <FiArrowUpRight className="pf-go" />
        </a>
      ))}
    </div>
  </section>
);

/* ---------- education ---------- */
export const Education = () => {
  const e = education[0];
  const num = useRef(null);
  const bar = useRef(null);
  const val = parseFloat(e.grade);
  useEffect(() => {
    if (prefersReduced()) { bar.current.style.width = `${val * 10}%`; return undefined; }
    const o = { v: 0 };
    const tw = gsap.to(o, { v: val, duration: 2, ease: 'power3.out', onUpdate: () => { num.current.textContent = o.v.toFixed(2); bar.current.style.width = `${o.v * 10}%`; }, scrollTrigger: { trigger: num.current, start: 'top 88%', once: true } });
    return () => { tw.scrollTrigger?.kill(); tw.kill(); };
  }, [val]);
  return (
    <section id="education" className="sec">
      <Head tag="Education" title="Where I studied." />
      <div className="edu" data-fade onPointerMove={spot}>
        <div className="edu-l">
          <span className="mono edu-d">{e.date}</span>
          <h3>{e.school}</h3>
          <p className="edu-deg">{e.degree}</p>
          <p className="edu-n">{e.desc}</p>
        </div>
        <div className="edu-r" aria-label={`CGPA ${e.grade}`}>
          <span className="mono">CGPA</span>
          <b ref={num}>0.00</b>
          <div className="meter"><i ref={bar} /></div>
          <small className="mono">out of 10</small>
        </div>
      </div>
    </section>
  );
};

/* ---------- contact ---------- */
export const Contact = () => {
  const form = useRef();
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({ state: 'idle', text: '' });
  const copy = () => { navigator.clipboard?.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 1800); };
  const send = (ev) => {
    ev.preventDefault();
    setStatus({ state: 'sending', text: 'Sending…' });
    emailjs.sendForm('service_bwh8bai', 'template_t4y4q9a', form.current, 'S1poagTAK82pHgYCU')
      .then(() => { form.current.reset(); setStatus({ state: 'sent', text: 'Message sent. I will reply soon.' }); })
      .catch(() => setStatus({ state: 'error', text: 'Message not sent. Check your connection and try again, or email me directly.' }));
  };
  return (
    <section id="contact" className="sec contact">
      <div className="cta" data-fade onPointerMove={spot}>
        <span className="tag mono">Contact · Open to full-time roles</span>
        <h2 className="cta-h">Let's build something together.</h2>
        <p className="sub">Hiring for an engineering role? Send a message and I'll reply soon.</p>
        <div className="cta-a">
          <a className="b-primary" href={`mailto:${EMAIL}`}><Hover>Email me</Hover></a>
          <button className="b-ghost" onClick={copy}>{copied ? <FiCheck /> : <FiCopy />} {copied ? 'Copied' : EMAIL}</button>
        </div>
      </div>

      <div className="ct" data-fade>
        <div className="ct-l">
          <h3>Find me online</h3>
          <ul>
            <li><a href={LINKS.github} target="_blank" rel="noopener noreferrer"><Hover>GitHub</Hover><FiArrowUpRight /></a></li>
            <li><a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><Hover>LinkedIn</Hover><FiArrowUpRight /></a></li>
            <li><a href={LINKS.instagram} target="_blank" rel="noopener noreferrer"><Hover>Instagram</Hover><FiArrowUpRight /></a></li>
            <li><a href={`tel:${PHONE.replace(/\s/g, '')}`}><Hover>{PHONE}</Hover><FiArrowUpRight /></a></li>
          </ul>
        </div>
        <form ref={form} onSubmit={send} className="form">
          <h3>Send a message</h3>
          <div className="two">
            <div className="field"><label htmlFor="user_name">Name</label><input id="user_name" name="user_name" type="text" required autoComplete="name" placeholder="Your name" /></div>
            <div className="field"><label htmlFor="user_email">Email</label><input id="user_email" name="user_email" type="email" required autoComplete="email" placeholder="you@company.com" /></div>
          </div>
          <div className="field"><label htmlFor="subject">Subject</label><input id="subject" name="subject" type="text" required placeholder="What is this about?" /></div>
          <div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="4" required placeholder="Tell me about the role or project" /></div>
          <button className="b-primary" type="submit" disabled={status.state === 'sending'}>Send message</button>
          <p className="note" role="status" aria-live="polite">{status.text}</p>
        </form>
      </div>

      <footer className="foot">
        <span>© 2026 Mahtab Alam · Full Stack Engineer</span>
        <span className="foot-r"><a href={RESUME} target="_blank" rel="noopener noreferrer"><Hover>Resume</Hover></a><button onClick={() => scrollToTarget('#top')}><Hover>Back to top ↑</Hover></button></span>
      </footer>
    </section>
  );
};
