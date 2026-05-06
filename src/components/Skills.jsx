import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillsInfo } from '../data.js';

const allSkills = SkillsInfo.flatMap(cat => cat.skills);
const doubled = [...allSkills, ...allSkills];
const doubledRev = [...allSkills].reverse().concat([...allSkills].reverse());

const SkillPill = ({ skill, accent }) => (
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.875rem',
    padding: '0.875rem 1.75rem',
    borderRadius: '999px',
    border: accent ? '1px solid rgba(200,255,0,0.2)' : '1px solid var(--border)',
    background: accent ? 'rgba(200,255,0,0.04)' : 'var(--surface)',
    flexShrink: 0,
    whiteSpace: 'nowrap',
  }}>
    {skill.logo ? (
      <img src={skill.logo} alt={skill.name} style={{ width: '28px', height: '28px', objectFit: 'contain', filter: 'saturate(0.7)', flexShrink: 0 }} />
    ) : (
      <span style={{ fontSize: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: accent ? 'var(--accent)' : 'var(--text-muted)' }}>
        {skill.icon}
      </span>
    )}
    <span style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '1.1rem',
      color: accent ? 'var(--accent)' : 'var(--text-muted)',
      letterSpacing: '-0.01em',
    }}>
      {skill.name}
    </span>
  </div>
);

const Skills = () => {
  const [activeCat, setActiveCat] = useState(0);

  return (
    <section id="skills" style={{ padding: '6rem 0 8rem', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>

      {/* Header */}
      <div style={{ padding: '0 5vw', marginBottom: '5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
              02 — Expertise
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--text)' }}>
              Tools of the{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Trade.</span>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '320px', lineHeight: 1.7 }}>
            A curated set of technologies I use to build scalable, modern web applications from frontend to backend.
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', transform: 'rotate(-1.5deg) scaleX(1.05)', transformOrigin: 'center' }}>
        {/* Row 1 — left */}
        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-track marquee-left" style={{ gap: '1.25rem' }}>
            {doubled.map((skill, i) => <SkillPill key={`r1-${i}`} skill={skill} accent={false} />)}
          </div>
        </div>

        {/* Row 2 — right */}
        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-track marquee-right" style={{ gap: '1.25rem' }}>
            {doubledRev.map((skill, i) => <SkillPill key={`r2-${i}`} skill={skill} accent={true} />)}
          </div>
        </div>

        {/* Row 3 — left again */}
        <div style={{ overflow: 'hidden' }}>
          <div className="marquee-track marquee-left" style={{ gap: '1.25rem', animationDuration: '100s' }}>
            {doubled.map((skill, i) => <SkillPill key={`r3-${i}`} skill={skill} accent={false} />)}
          </div>
        </div>
      </div>

      {/* Unique Interactive Category Breakdown */}
      <div style={{ maxWidth: '1200px', margin: '8rem auto 0', padding: '0 5vw', display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
        
        {/* Left side: Navigation / Categories */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '0' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '2rem' }}>
            Skill Categories
          </p>
          {SkillsInfo.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCat(i)}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                cursor: 'none',
                padding: '1.5rem 0',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: activeCat === i ? 'var(--accent)' : 'var(--text-muted)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={e => { if (activeCat !== i) e.currentTarget.style.color = 'var(--text)' }}
              onMouseLeave={e => { if (activeCat !== i) e.currentTarget.style.color = 'var(--text-muted)' }}
              data-cursor="SELECT"
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.02em', transition: 'transform 0.3s', transform: activeCat === i ? 'translateX(10px)' : 'translateX(0)' }}>
                {cat.title}
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, opacity: activeCat === i ? 1 : 0, transition: 'opacity 0.3s' }}>
                ( {cat.skills.length} )
              </span>
            </button>
          ))}
        </div>

        {/* Right side: Skills Display */}
        <div 
          className="skills-grid-container"
          style={{ flex: '2 1 500px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden', minHeight: '400px' }}
        >
          
          {/* Abstract background glow based on category index */}
          <div style={{
            position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px',
            background: 'radial-gradient(circle, rgba(200,255,0,0.08) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(40px)', transition: 'all 0.5s ease',
            transform: `translate(${activeCat * 20}px, ${activeCat * 20}px)`,
            pointerEvents: 'none'
          }} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="skills-grid"
              style={{ position: 'relative', zIndex: 1 }}
            >
              {SkillsInfo[activeCat].skills.map((s, idx) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.25rem',
                    padding: '2rem 1.5rem',
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: '1rem',
                    transition: 'border-color 0.3s, transform 0.3s',
                    cursor: 'none'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {s.logo ? (
                    <img src={s.logo} alt={s.name} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                  ) : (
                    <span style={{ fontSize: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                      {s.icon}
                    </span>
                  )}
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--text)', fontWeight: 600, letterSpacing: '0.02em', textAlign: 'center' }}>
                    {s.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Skills;
