import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';

const navItems = [
  { id: 'about', label: 'About', num: '01' },
  { id: 'skills', label: 'Skills', num: '02' },
  { id: 'projects', label: 'Projects', num: '03' },
  { id: 'experience', label: 'Experience', num: '04' },
  { id: 'contact', label: 'Contact', num: '05' },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious();
    setHidden(latest > prev && latest > 120);
    setScrolled(latest > 40);
  });

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Lock body scroll and stop Lenis when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('lenis-stopped');
    } else {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: '-110%' } }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          padding: scrolled ? '1rem 5vw' : '1.75rem 5vw',
          transition: 'padding 0.4s ease, background 0.4s ease, border-color 0.4s ease',
          background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('about')}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.5rem',
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            cursor: 'none',
            background: 'none',
            border: 'none',
          }}
        >
          M<span style={{ color: 'var(--accent)' }}>A</span><span style={{ color: 'var(--accent)' }}>.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-[1.1rem] lg:gap-[2.5rem]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{ cursor: 'none', background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              className="nav-link"
            >
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>
                {item.num}
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side: Social + CTA */}
        <div className="flex items-center gap-[0.75rem] lg:gap-[1.5rem]">
          <div className="hidden md:flex items-center gap-[0.6rem] lg:gap-[1rem]">
            <a href="https://github.com/mahtabkhan9" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', cursor: 'none', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <FiGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/mahtab7860" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', cursor: 'none', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <FiLinkedin size={18} />
            </a>
          </div>

          <a
            href="mailto:mahtabalam7173@gmail.com"
            className="btn-primary hidden md:inline-flex"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem' }}
          >
            Let's Talk <FiArrowUpRight size={14} />
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col md:hidden"
            style={{ cursor: 'none', background: 'none', border: 'none', color: 'var(--text)', gap: '5px', padding: '4px' }}
            aria-label="Toggle menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              style={{ display: 'block', width: '22px', height: '1.5px', background: 'currentColor', transformOrigin: 'center', transition: 'background 0.2s' }} />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ display: 'block', width: '22px', height: '1.5px', background: 'currentColor' }} />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              style={{ display: 'block', width: '22px', height: '1.5px', background: 'currentColor', transformOrigin: 'center' }} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            data-lenis-prevent
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 400,
              background: 'var(--bg)',
              display: 'flex',
              flexDirection: 'column',
              padding: '8rem 5vw 4rem',
              overflowY: 'auto',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1], duration: 0.6 }}
                  style={{ borderBottom: '1px solid var(--border)' }}
                >
                  <motion.button
                    onClick={() => scrollTo(item.id)}
                    whileHover={{ x: 12, color: 'var(--accent)' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '1.25rem 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'none',
                      color: 'var(--text)',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em', transition: 'color 0.2s' }}>
                      {item.label}
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.1em' }}>
                      {item.num}
                    </span>
                  </motion.button>
                </motion.div>
              ))}
            </nav>

            {/* Social Icons with separator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                marginTop: '4rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem'
              }}
            >
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Connect Socially
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <a href="https://github.com/mahtabkhan9" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: '#000', borderColor: 'var(--accent)' }}
                    whileTap={{ scale: 0.92 }}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-muted)',
                      transition: 'border-color 0.2s, background-color 0.2s'
                    }}
                  >
                    <FiGithub size={20} />
                  </motion.div>
                </a>
                <a href="https://linkedin.com/in/mahtab7860" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: '#000', borderColor: 'var(--accent)' }}
                    whileTap={{ scale: 0.92 }}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-muted)',
                      transition: 'border-color 0.2s, background-color 0.2s'
                    }}
                  >
                    <FiLinkedin size={20} />
                  </motion.div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
