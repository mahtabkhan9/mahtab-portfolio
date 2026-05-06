import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiArrowUp, FiInstagram, FiPhone } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const ticker = 'AVAILABLE FOR WORK  ·  FULL STACK ENGINEER  ·  MERN STACK  ·  REACT  ·  NODE.JS  ·  OPEN TO COLLABORATE  ·  ';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-10% 0px' });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '2.5rem',
              right: '2.5rem',
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: 'rgba(20, 20, 20, 0.75)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              color: 'var(--accent)',
              border: '1px solid rgba(200, 255, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'none',
              zIndex: 99,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
            whileHover={{ 
              scale: 1.1,
              borderColor: 'var(--accent)',
              boxShadow: '0 15px 35px rgba(200, 255, 0, 0.15)',
              color: 'var(--bg)'
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent)';
              e.currentTarget.style.color = 'var(--bg)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(20, 20, 20, 0.75)';
              e.currentTarget.style.color = 'var(--accent)';
            }}
          >
            <FiArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── TICKER (Marquee Kept Exactly As Requested) ── */}
      <div style={{ 
        borderBottom: '1px solid var(--border)', 
        overflow: 'hidden', 
        padding: '1.25rem 0', 
        background: 'var(--bg-2)',
        position: 'relative',
        zIndex: 2
      }}>
        <div className="marquee-track marquee-left" style={{ gap: 0, animationDuration: '32s' }}>
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
                letterSpacing: '0.15em',
                color: i % 2 === 0 ? 'var(--text-muted)' : 'var(--accent)',
                paddingRight: '3rem',
                whiteSpace: 'nowrap',
              }}
            >
              {ticker}
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer Inner Grid */}
      <div style={{ 
        padding: '6rem 5vw 3rem', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '4rem',
        position: 'relative',
        zIndex: 2
      }}>
        
        {/* Content Row */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '4rem',
          alignItems: 'start'
        }}>
          
          {/* Brand/Availability column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <h2 style={{ 
                fontFamily: 'var(--font-display)', 
                fontWeight: 800, 
                fontSize: '1.75rem', 
                letterSpacing: '-0.03em', 
                color: 'var(--text)',
                margin: 0
              }}>
                MAHTAB <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>ALAM</span>
              </h2>
              <p style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '0.85rem', 
                color: 'var(--text-muted)', 
                marginTop: '0.5rem',
                lineHeight: 1.5
              }}>
                Passionate Fresher & Full-Stack Engineer focused on building high-performance web applications and solving complex DSA challenges.
              </p>
            </div>

            {/* Status dot */}
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border)',
              padding: '0.75rem 1.25rem',
              borderRadius: '2rem',
              alignSelf: 'start'
            }}>
              <span className="availability-dot" style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--accent)',
                boxShadow: '0 0 12px var(--accent)',
              }} />
              <span style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '0.75rem', 
                fontWeight: 500, 
                color: 'var(--text)',
                letterSpacing: '0.02em'
              }}>
                Based in India · Open to Work
              </span>
            </div>
          </motion.div>

          {/* Navigation links column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 700, 
              fontSize: '1rem', 
              letterSpacing: '0.05em', 
              textTransform: 'uppercase', 
              color: 'var(--text-muted)',
              margin: 0
            }}>
              Sitemap
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
                { label: 'Education', href: '#education' },
                { label: 'Coding Profiles', href: '#profiles' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--text-faint)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'none'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-faint)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Socials & Profiles Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 700, 
              fontSize: '1rem', 
              letterSpacing: '0.05em', 
              textTransform: 'uppercase', 
              color: 'var(--text-muted)',
              margin: 0
            }}>
              Social Profiles
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'GitHub', href: 'https://github.com/mahtabkhan9', icon: <FiGithub size={16} /> },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/mahtab7860', icon: <FiLinkedin size={16} /> },
                { label: 'LeetCode', href: 'https://leetcode.com/u/mahtabalam7173/', icon: <SiLeetcode size={16} /> },
                { label: 'GeeksforGeeks', href: 'https://www.geeksforgeeks.org/profile/mahtabal1xrk', icon: <SiGeeksforgeeks size={16} /> },
                { label: 'Instagram', href: 'https://www.instagram.com/mahtab_khan1971/', icon: <FiInstagram size={16} /> },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--text-faint)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'none'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-faint)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <span style={{ color: 'var(--text-faint)', display: 'flex', alignItems: 'center' }}>{social.icon}</span>
                  {social.label} 
                  <FiArrowUpRight size={14} style={{ opacity: 0.6 }} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Direct Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 700, 
              fontSize: '1rem', 
              letterSpacing: '0.05em', 
              textTransform: 'uppercase', 
              color: 'var(--text-muted)',
              margin: 0
            }}>
              Direct Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'mahtabalam7173@gmail.com', href: 'mailto:mahtabalam7173@gmail.com', icon: <FiMail size={16} />, subtitle: 'Email Me' },
                { label: '+91 7260832664', href: 'tel:+917260832664', icon: <FiPhone size={16} />, subtitle: 'Call Me' },
              ].map((contact) => (
                <div key={contact.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '0.75rem', 
                    fontWeight: 600, 
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {contact.subtitle}
                  </span>
                  <a
                    href={contact.href}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--text-faint)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'none'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--accent)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--text-faint)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <span style={{ color: 'var(--text-faint)', display: 'flex', alignItems: 'center' }}>{contact.icon}</span>
                    {contact.label}
                    <FiArrowUpRight size={14} style={{ opacity: 0.6 }} />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

        </div>



        {/* Copyright Footer Sub-bar */}
        <div style={{ 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '2rem', 
          borderTop: '1px solid var(--border)' 
        }}>
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '0.8rem', 
            color: 'var(--text-faint)', 
            letterSpacing: '0.02em',
            margin: 0
          }}>
            © {new Date().getFullYear()} Mahtab Alam. Designed & Engineered with precision.
          </p>
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '0.8rem', 
            color: 'var(--text-faint)', 
            margin: 0
          }}>
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
