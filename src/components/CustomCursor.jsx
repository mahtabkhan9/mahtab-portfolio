import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [label, setLabel] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;

    const lerp = (a, b, t) => a + (b - a) * t;

    const moveCursor = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot) {
        dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.1);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.1);
      if (ring) {
        ring.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    // Detect interactive elements for cursor expansion
    const handleElementEnter = (e) => {
      const el = e.currentTarget;
      const cursorLabel = el.dataset.cursor;
      if (cursorLabel) setLabel(cursorLabel);
      if (dot) {
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.opacity = '0.5';
      }
      if (ring) {
        ring.style.width = cursorLabel ? '90px' : '60px';
        ring.style.height = cursorLabel ? '90px' : '60px';
        ring.style.borderColor = 'var(--accent)';
      }
    };

    const handleElementLeave = () => {
      setLabel('');
      if (dot) {
        dot.style.width = '8px';
        dot.style.height = '8px';
        dot.style.opacity = '1';
      }
      if (ring) {
        ring.style.width = '40px';
        ring.style.height = '40px';
        ring.style.borderColor = 'rgba(245,245,240,0.4)';
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    rafRef.current = requestAnimationFrame(animate);

    // Attach to interactive elements
    const interactives = document.querySelectorAll('a, button, [data-cursor], input, textarea, select');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleElementEnter);
      el.addEventListener('mouseleave', handleElementLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleElementEnter);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--accent)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.3s, height 0.3s, opacity 0.3s',
          opacity: isHidden ? 0 : 1,
          willChange: 'transform',
        }}
      />

      {/* Ring */}
      <div
        ref={cursorRingRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(245,245,240,0.4)',
          pointerEvents: 'none',
          zIndex: 99998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, opacity 0.3s ease',
          opacity: isHidden ? 0 : 1,
          willChange: 'transform',
        }}
      >
        {label && (
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}>
            {label}
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
