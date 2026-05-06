import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';
import profile from '../assets/profile2.jpg';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderCodeTerminal = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, x: -30 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        maxWidth: '460px',
        justifySelf: 'center',
        margin: isMobile ? '2.5rem 0' : '0',
        order: isMobile ? 0 : 2
      }}
    >
      {/* Decorative backplane glow */}
      <div style={{
        position: 'absolute',
        inset: '-30px',
        background: 'radial-gradient(circle, rgba(200, 255, 0, 0.08) 0%, transparent 70%)',
        borderRadius: '2rem',
        filter: 'blur(30px)',
        pointerEvents: 'none'
      }} />

      {/* Terminal Window */}
      <div style={{
        width: '100%',
        background: 'rgba(10, 10, 10, 0.65)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--border)',
        borderRadius: '1.25rem',
        boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        overflow: 'hidden',
        fontFamily: '"Fira Code", "Courier New", Courier, monospace',
        fontSize: '0.82rem',
        lineHeight: 1.6,
        color: 'var(--text-muted)'
      }}>
        {/* macOS style Window Header */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          borderBottom: '1px solid var(--border)',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', gap: '0.45rem' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
          </div>
          <div style={{ color: 'var(--text-faint)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.05em' }}>
            mahtab.config.json
          </div>
          <div style={{ width: '38px' }} />
        </div>

        {/* Editor Content Area */}
        <div style={{ padding: '1.5rem', overflowX: 'auto', position: 'relative' }}>
          <span style={{ position: 'absolute', top: '1rem', right: '1.5rem', color: 'rgba(200,255,0,0.1)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em' }}>
            ACTIVE_SESSION
          </span>

          <pre style={{ margin: 0 }}>
            <code style={{ color: 'var(--text)' }}>
              <span style={{ color: '#ff79c6' }}>const</span> developer <span style={{ color: '#ff79c6' }}>=</span> <span style={{ color: '#f8f8f2' }}>{'{'}</span>{'\n'}
              {'  '}name<span style={{ color: '#ff79c6' }}>:</span> <span style={{ color: 'var(--accent)' }}>"Mahtab Alam"</span>,<span style={{ color: 'rgba(255,255,255,0.15)' }}> // Lead Engineer</span>{'\n'}
              {'  '}role<span style={{ color: '#ff79c6' }}>:</span> <span style={{ color: '#f1fa8c' }}>"Full Stack Developer"</span>,{'\n'}
              {'  '}location<span style={{ color: '#ff79c6' }}>:</span> <span style={{ color: '#f1fa8c' }}>"India"</span>,{'\n'}
              {'  '}skills<span style={{ color: '#ff79c6' }}>:</span> <span style={{ color: '#f8f8f2' }}>{'['}</span>{'\n'}
              {'    '}<span style={{ color: '#50fa7b' }}>"MERN Stack"</span>, <span style={{ color: '#50fa7b' }}>"Next.js"</span>,{'\n'}
              {'    '}<span style={{ color: '#50fa7b' }}>"DSA & Problem Solving"</span>,{'\n'}
              {'    '}<span style={{ color: '#50fa7b' }}>"REST APIs"</span>, <span style={{ color: '#50fa7b' }}>"DevOps"</span>,{'\n'}
              {'    '}<span style={{ color: '#50fa7b' }}>"Gen AI"</span>, <span style={{ color: '#50fa7b' }}>"Git & GitHub"</span>{'\n'}
              {'  '}<span style={{ color: '#f8f8f2' }}>{']'}</span>,{'\n'}
              {'  '}experience<span style={{ color: '#ff79c6' }}>:</span> <span style={{ color: '#bd93f9' }}>"1+ Year"</span>,{'\n'}
              {'  '}projectsBuilt<span style={{ color: '#ff79c6' }}>:</span> <span style={{ color: '#bd93f9' }}>10</span>,{'\n'}
              {'  '}openToWork<span style={{ color: '#ff79c6' }}>:</span> <span style={{ color: '#8be9fd' }}>true</span>,{'\n'}
              {'  '}solveProblems<span style={{ color: '#ff79c6' }}>:</span> <span style={{ color: '#8be9fd' }}>function</span>() <span style={{ color: '#f8f8f2' }}>{'{'}</span>{'\n'}
              {'    '}<span style={{ color: '#ff79c6' }}>return</span> <span style={{ color: 'var(--accent)' }}>"scalable_solutions"</span>;{'\n'}
              {'  '}<span style={{ color: '#f8f8f2' }}>{'}'}</span>{'\n'}
              <span style={{ color: '#f8f8f2' }}>{'}'}</span>;
            </code>
          </pre>
        </div>

        {/* Status Bar */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.01)',
          borderTop: '1px solid var(--border)',
          padding: '0.45rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.68rem',
          color: 'var(--text-faint)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s infinite' }} />
            <span>UTF-8</span>
          </div>
          <div>Line 15, Col 1</div>
          <div>JavaScript (ES6)</div>
        </div>
      </div>
    </motion.div>
  );

  const letterVariants = {
    hidden: { y: '110%' },
    visible: (i) => ({
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 },
    }),
  };

  const stats = [
    { num: '10+', label: 'Projects Built' },
    { num: '2', label: 'Internships' },
    { num: '1', label: 'Year Experience' },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '9rem 5vw 2rem',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: '35vw', height: '35vw',
        background: 'radial-gradient(circle, rgba(200,255,0,0.07) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <motion.div style={{ opacity: textOpacity, width: '100%' }} className="w-full">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'var(--accent)', display: 'inline-block',
            }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              Available for work
            </span>
          </motion.div>

          <div style={{
            display: isMobile ? 'flex' : 'grid',
            flexDirection: 'column',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: isMobile ? '2rem' : '4rem',
            alignItems: 'center',
            width: '100%',
          }}>
            {/* Desktop Only Code Terminal on Left of Grid (order 2) */}
            {!isMobile && renderCodeTerminal()}

            {/* Hero text */}
            <div className="w-full" style={{ order: 1 }}>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 8vw, 8rem)',
                fontWeight: 700,
                lineHeight: 0.88,
                letterSpacing: '-0.04em',
                color: 'var(--text)',
                marginBottom: '2rem',
              }}>
                {['MAHTAB', 'ALAM'].map((word, wi) => (
                  <span key={wi} style={{ display: 'block', overflow: 'hidden' }}>
                    {word.split('').map((char, ci) => (
                      <motion.span
                        key={ci}
                        custom={wi * 6 + ci}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'inline-block', fontStyle: wi === 1 ? 'italic' : 'normal' }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ maxWidth: '520px' }}
              >
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2.2vw, 1.3rem)', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  Building digital experiences as a{' '}
                  <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
                    <TypewriterComponent
                      options={{
                        strings: ['Full Stack Developer.', 'MERN Stack Developer.', 'Software Engineer.', 'Frontend Developer.', 'Backend Developer.', 'UI/UX Enthusiast.'],
                        autoStart: true, loop: true, delay: 50, deleteSpeed: 30,
                      }}
                    />
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.8, opacity: 0.7 }}>
                  Passionate about crafting fast, beautiful, accessible web applications that connect design and engineering seamlessly.
                </p>
              </motion.div>

              {/* Mobile Only Code Terminal placed after Bio and before Resume Button */}
              {isMobile && renderCodeTerminal()}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem', alignItems: 'center' }}
              >
                <a href="https://drive.google.com/file/d/1LFhqR8S4wf4FpwOsBDiCsLHR_vwSKx4D/view?usp=drive_link"
                  target="_blank" rel="noopener noreferrer" className="btn-primary">
                  View Resume
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                  </svg>
                </a>
                <a
                  href="mailto:mahtabalam7173@gmail.com"
                  className="btn-outline" style={{ cursor: 'none' }}>
                  Let's Connect
                </a>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem' }}
              >
                <div style={{ width: '36px', height: '1px', background: 'var(--border)', position: 'relative', overflow: 'hidden' }}>
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', inset: 0, background: 'var(--accent)' }}
                  />
                </div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Scroll to explore
                </span>
              </motion.div>
            </div>
          </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-16 md:mt-24">
                {stats.map((stat) => (
                  <div key={stat.label} style={{
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: '1rem', padding: '1.25rem',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center'
                  }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>
                      {stat.num}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}

                {/* Open To Work Card */}
                <div style={{
                  background: 'var(--accent)',
                  borderRadius: '1rem', padding: '1.25rem',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(200, 255, 0, 0.15)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
                    </span>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: '#000', letterSpacing: '0.05em' }}>
                      OPEN TO WORK
                    </p>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(0,0,0,0.8)', fontWeight: 500, lineHeight: 1.4 }}>
                    Available for full-time roles
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>


    </section>
  );
};

export default About;
