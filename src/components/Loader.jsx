import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('counting'); // counting | reveal | exit

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = 100 / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= 100) {
        setCount(100);
        clearInterval(timer);
        setTimeout(() => setPhase('reveal'), 200);
        setTimeout(() => setPhase('exit'), 900);
        setTimeout(() => onComplete(), 1600);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="loader-screen"
          animate={phase === 'exit' ? { y: '-100%' } : { y: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'var(--bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
        >
          {/* Progress bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, height: '2px', background: 'var(--border)', width: '100%' }}>
            <motion.div
              style={{ height: '100%', background: 'var(--accent)', originX: 0 }}
              animate={{ scaleX: count / 100 }}
              transition={{ duration: 0.05 }}
            />
          </div>

          {/* Counter */}
          <div style={{ overflow: 'hidden', marginBottom: '1rem' }}>
            <motion.p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(5rem, 18vw, 14rem)',
                fontWeight: 700,
                color: 'var(--text)',
                lineHeight: 1,
                letterSpacing: '-0.04em',
              }}
            >
              {String(count).padStart(2, '0')}
            </motion.p>
          </div>

          {/* Tagline reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={phase === 'reveal' ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ position: 'absolute', bottom: '4rem', left: '5vw', right: '5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text)' }}>
              MAHTAB ALAM
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Full Stack Developer
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
