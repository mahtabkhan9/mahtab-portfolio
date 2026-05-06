import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { experiences } from '../data';
import { FiLinkedin } from 'react-icons/fi';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: '4rem 0',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic ambient background blobs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(200, 255, 0, 0.03)',
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.01)',
        filter: 'blur(120px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div style={{ padding: '0 5vw', position: 'relative', zIndex: 2 }}>
        
        {/* ── HEADER ── */}
        <div style={{ marginBottom: '5rem' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '1rem',
          }}>
            04 — Professional Milestones
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
            }}>
              Work<br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Experience.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              maxWidth: '380px',
              lineHeight: 1.7,
            }}>
              A timeline of software engineering roles and technical internships in real-world production environments.
            </p>
          </div>
        </div>

        {/* ── DESKTOP INTERACTIVE SYSTEM (Shown on md and up) ── */}
        <div className="hidden md:grid grid-cols-12 gap-12" style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
          {/* Left Column: Navigation Tracks (5 cols) */}
          <div className="col-span-5 flex flex-col gap-3 relative">
            {/* Continuous vertical timeline connector bar */}
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              bottom: '1.5rem',
              left: '2.35rem',
              width: '2px',
              background: 'var(--border)',
              zIndex: 1
            }}>
              {/* Dynamic illuminated progress track overlay */}
              <motion.div 
                style={{
                  width: '100%',
                  background: 'var(--accent)',
                  position: 'absolute',
                  top: 0,
                  height: `${(activeTab / (experiences.length - 1)) * 100}%`,
                  transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            </div>

            {experiences.map((exp, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(index)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2.5rem',
                    padding: '1.5rem',
                    background: isActive ? 'rgba(200, 255, 0, 0.02)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(200, 255, 0, 0.15)' : 'transparent',
                    borderRadius: '1.25rem',
                    textAlign: 'left',
                    width: '100%',
                    cursor: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.01)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'transparent';
                    }
                  }}
                >
                  {/* Glowing Node Point */}
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: isActive ? 'var(--accent)' : 'var(--bg-2)',
                    border: `2px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isActive ? '0 0 15px var(--accent)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    flexShrink: 0
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: isActive ? '#000' : 'transparent',
                      transition: 'all 0.3s'
                    }} />
                  </div>

                  <div>
                    <h4 style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: isActive ? 'var(--accent)' : 'var(--text)',
                      transition: 'color 0.3s'
                    }}>
                      {exp.company.split('(')[0]}
                    </h4>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.2rem'
                    }}>
                      {exp.role}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: High-Fidelity details card (7 cols) */}
          <div className="col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20, y: 5 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -20, y: -5 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '2rem',
                  padding: '3rem',
                  position: 'relative',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  minHeight: '420px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Upper Details Panel */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                    {/* Logo container */}
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid var(--border)',
                      flexShrink: 0,
                      background: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px'
                    }}>
                      <img src={experiences[activeTab].img} alt={experiences[activeTab].company} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>

                    <div>
                      <span style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        background: 'rgba(200, 255, 0, 0.08)',
                        border: '1px solid rgba(200, 255, 0, 0.25)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '99px',
                        display: 'inline-block',
                        marginBottom: '0.5rem'
                      }}>
                        {experiences[activeTab].date}
                      </span>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.8rem',
                        color: 'var(--text)',
                        lineHeight: 1.15
                      }}>
                        {experiences[activeTab].role}
                      </h3>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        marginTop: '0.2rem'
                      }}>
                        {experiences[activeTab].company}
                      </p>
                    </div>
                  </div>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.02rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.85,
                    marginBottom: '2.5rem'
                  }}>
                    {experiences[activeTab].desc}
                  </p>
                </div>

                {/* Tech and Skills Grid */}
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-faint)',
                    marginBottom: '0.88rem'
                  }}>
                    Core Technologies & Competencies
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {experiences[activeTab].skills.map((skill, i) => (
                      <span key={i} className="tag-pill" style={{ fontSize: '0.7rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE LINEAR TIMELINE (Shown under md) ── */}
        <div className="flex md:hidden flex-col gap-8 relative" style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}>
          {/* Continuous Vertical timeline line */}
          <div style={{
            position: 'absolute',
            top: '2rem',
            bottom: '2rem',
            left: '1rem',
            width: '1px',
            background: 'linear-gradient(to bottom, var(--border) 20%, rgba(200,255,0,0.2) 50%, var(--border) 80%)',
            zIndex: 1
          }} />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                position: 'relative',
                paddingLeft: '3rem',
                zIndex: 2
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '0.65rem',
                top: '0.4rem',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'var(--accent)',
                border: '3px solid var(--bg)',
                boxShadow: '0 0 10px var(--accent)',
                zIndex: 3
              }} />

              {/* Glassmorphic Mobile Card */}
              <div style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: '1.5rem',
                padding: '1.75rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
              }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                  {/* Logo */}
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '3px',
                    flexShrink: 0
                  }}>
                    <img src={exp.img} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.04em',
                      color: 'var(--accent)',
                      background: 'rgba(200, 255, 0, 0.05)',
                      border: '1px solid rgba(200, 255, 0, 0.15)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '99px',
                    }}>
                      {exp.date}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: 'var(--text)',
                      marginTop: '0.4rem',
                      lineHeight: 1.2
                    }}>
                      {exp.role}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)'
                    }}>
                      {exp.company.split('(')[0]}
                    </p>
                  </div>
                </div>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem'
                }}>
                  {exp.desc}
                </p>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="tag-pill" style={{ fontSize: '0.65rem', padding: '0.2rem 0.55rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: '5rem',
            paddingTop: '3rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Want to work together?
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.35rem', color: 'var(--text)', marginTop: '0.2rem', letterSpacing: '-0.02em' }}>
              I'm currently open to new opportunities.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:mahtabalam7173@gmail.com"
              className="btn-primary"
              style={{ whiteSpace: 'nowrap', cursor: 'none' }}
            >
              Get In Touch
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 7h10v10" /><path d="M7 17 17 7" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/mahtab7860"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                whiteSpace: 'nowrap', 
                cursor: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                border: '1px solid var(--border)',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '0.75rem',
                color: 'var(--text)',
                textDecoration: 'none',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.85rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.3)';
                e.currentTarget.style.background = 'rgba(200, 255, 0, 0.03)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
              }}
            >
              <FiLinkedin size={15} style={{ color: 'var(--accent)' }} />
              LinkedIn
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
