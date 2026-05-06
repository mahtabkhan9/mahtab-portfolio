import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const profiles = [
  {
    label: 'GitHub',
    username: 'mahtabkhan9',
    href: 'https://github.com/mahtabkhan9',
    icon: <FiGithub size={24} />,
    glowColor: 'rgba(255, 255, 255, 0.05)',
    brandBg: 'rgba(255, 255, 255, 0.05)',
    brandColor: '#FFFFFF',
    brandBorder: 'rgba(255, 255, 255, 0.1)',
  },
  {
    label: 'LeetCode',
    username: 'mahtabalam7173',
    href: 'https://leetcode.com/u/mahtabalam7173/',
    icon: <SiLeetcode size={24} />,
    glowColor: 'rgba(255, 161, 22, 0.15)',
    brandBg: 'rgba(255, 161, 22, 0.08)',
    brandColor: '#FFA116',
    brandBorder: 'rgba(255, 161, 22, 0.2)',
  },
  {
    label: 'GeeksforGeeks',
    username: 'mahtabal1xrk',
    href: 'https://www.geeksforgeeks.org/profile/mahtabal1xrk',
    icon: <SiGeeksforgeeks size={24} />,
    glowColor: 'rgba(47, 142, 72, 0.15)',
    brandBg: 'rgba(47, 142, 72, 0.08)',
    brandColor: '#2F8E48',
    brandBorder: 'rgba(47, 142, 72, 0.2)',
  },
];

const Profiles = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section 
      id="profiles" 
      ref={ref}
      style={{ 
        padding: '6rem 5vw', 
        background: 'var(--bg)', 
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Gradient Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '400px',
        background: 'radial-gradient(circle, rgba(200, 255, 0, 0.02) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
            <span style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '0.75rem', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              color: 'var(--text-muted)' 
            }}>
              Problem Solving & DSA
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 700, 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              lineHeight: 1.1, 
              letterSpacing: '-0.04em', 
              color: 'var(--text)' 
            }}
          >
            Coding <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Profiles.</span>
          </motion.h2>
        </div>

        {/* Bento Profiles Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {profiles.map((p, i) => (
            <motion.a
              key={p.label}
              href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1], 
                delay: 0.15 + i * 0.08 
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: '1.5rem',
                cursor: 'none',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.4s var(--ease-expo), box-shadow 0.4s var(--ease-expo)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.2)';
                e.currentTarget.style.boxShadow = `0 15px 40px -10px ${p.glowColor}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              data-cursor="VISIT"
            >
              {/* Card Ambient Glow Overlay */}
              <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-20%',
                width: '180px',
                height: '180px',
                background: `radial-gradient(circle, ${p.glowColor} 0%, transparent 70%)`,
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 1,
              }} />

              <div style={{ position: 'relative', zIndex: 2 }}>
                
                {/* Header Row: Icon and Visit Icon */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  marginBottom: '2rem' 
                }}>
                  <div style={{
                    width: '54px', 
                    height: '54px', 
                    borderRadius: '1rem',
                    background: p.brandBg,
                    border: `1px solid ${p.brandBorder}`,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: p.brandColor,
                    transition: 'all 0.3s ease',
                  }}>
                    {p.icon}
                  </div>
                  
                  <div style={{ 
                    color: 'var(--text-faint)', 
                    display: 'flex', 
                    alignItems: 'center',
                    transition: 'transform 0.3s var(--ease-expo), color 0.3s ease'
                  }} className="visit-arrow">
                    <FiArrowUpRight size={20} />
                  </div>
                </div>

                {/* Profile Meta details */}
                <div>
                  <h3 style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontWeight: 700, 
                    fontSize: '1.5rem', 
                    color: 'var(--text)', 
                    letterSpacing: '-0.02em',
                    marginBottom: '0.25rem'
                  }}>
                    {p.label}
                  </h3>
                  <p style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontWeight: 500,
                    fontSize: '0.85rem', 
                    color: 'var(--accent)', 
                    marginBottom: '0px',
                    letterSpacing: '0.02em'
                  }}>
                    {p.username}
                  </p>
                </div>

              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Profiles;
