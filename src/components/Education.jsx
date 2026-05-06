import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../data';
import { FiBookOpen, FiAward, FiCalendar } from 'react-icons/fi';

const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Core subjects studied to display as a beautiful tag grid
  const coreSubjects = [
    "Data Structures", "Algorithms", "Object-Oriented Programming", 
    "Database Management Systems", "Web Development", "Software Engineering",
    "Computer Networks", "Operating Systems", "Artificial Intelligence", "Machine Learning"
  ];

  return (
    <section 
      id="education" 
      ref={sectionRef}
      style={{ 
        padding: '6rem 0', 
        background: 'var(--bg-2)', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      {/* Huge background text */}
      <div style={{
        position: 'absolute', 
        top: '15%', 
        right: '5%',
        fontFamily: 'var(--font-display)', 
        fontWeight: 900,
        fontSize: 'clamp(6rem, 22vw, 20rem)',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(245,245,240,0.02)',
        letterSpacing: '-0.06em',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0,
      }}>
        ACADEMIA
      </div>

      <div style={{ padding: '0 5vw', position: 'relative', zIndex: 1 }}>
        
        {/* ── HEADER ── */}
        <div style={{ marginBottom: '5rem' }}>
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '0.78rem', 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase', 
            color: 'var(--accent)', 
            marginBottom: '1rem' 
          }}>
            05 — Academic Journey
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}>
            <h2 style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 700, 
              fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
              lineHeight: 1, 
              letterSpacing: '-0.03em', 
              color: 'var(--text)' 
            }}>
              Education<br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Credentials.</span>
            </h2>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '0.9rem', 
              color: 'var(--text-muted)', 
              maxWidth: '380px', 
              lineHeight: 1.7 
            }}>
              Academic foundation in computer science and engineering, focusing on core programming principles, software design, and analytical problem-solving.
            </p>
          </div>
        </div>

        {/* ── HIGH-FIDELITY SHOWCASE GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {education.map((edu, index) => (
            <React.Fragment key={edu.id}>
              {/* Left Column: Grade Showcase Card (lg:col-span-4) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '2rem',
                  padding: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                }}
                className="order-2 lg:order-1 lg:col-span-4"
              >
                {/* Decorative glow inside card */}
                <div style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-20%',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'rgba(200, 255, 0, 0.08)',
                  filter: 'blur(40px)',
                  pointerEvents: 'none'
                }} />

                <div>
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '16px', 
                    background: 'rgba(200, 255, 0, 0.08)', 
                    border: '1px solid rgba(200, 255, 0, 0.2)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '2.5rem',
                    color: 'var(--accent)'
                  }}>
                    <FiAward size={24} />
                  </div>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-faint)',
                    marginBottom: '0.5rem'
                  }}>
                    Current CGPA
                  </p>
                  
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                    color: 'var(--accent)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    marginBottom: '1rem'
                  }}>
                    {edu.grade}
                  </h3>
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: '2rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6
                  }}>
                    Actively engaged in software workshops, computer science labs, and algorithm training at GCE Gaya.
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Institutional Details (lg:col-span-8) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '2rem',
                  padding: 'clamp(2rem, 4vw, 3rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                }}
                className="order-1 lg:order-2 lg:col-span-8"
              >
                <div>
                  {/* Top line with school logo and dates */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid var(--border)',
                        background: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '3px'
                      }}>
                        <img src={edu.img} alt={edu.school} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                      <div>
                        <h4 style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: '1.15rem',
                          color: 'var(--text)'
                        }}>
                          {edu.school.split(',')[0]}
                        </h4>
                        <p style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                          marginTop: '0.1rem'
                        }}>
                          {edu.school.split(',')[1] || ''}
                        </p>
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '99px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-body)'
                    }}>
                      <FiCalendar size={12} color="var(--accent)" />
                      {edu.date}
                    </div>
                  </div>

                  {/* Degree Name */}
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    background: 'rgba(200, 255, 0, 0.08)',
                    border: '1px solid rgba(200, 255, 0, 0.25)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '99px',
                    display: 'inline-block',
                    marginBottom: '1rem'
                  }}>
                    Degree Program
                  </span>
                  
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                    color: 'var(--text)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                    marginBottom: '1.5rem'
                  }}>
                    {edu.degree}
                  </h3>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.8,
                    marginBottom: '2.5rem'
                  }}>
                    {edu.desc}
                  </p>
                </div>

                {/* Core Courses Studied Grid */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.75rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-faint)',
                    marginBottom: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <FiBookOpen size={11} color="var(--accent)" /> Key Subjects Studied
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {coreSubjects.map((subject, i) => (
                      <span key={i} className="tag-pill" style={{ fontSize: '0.7rem' }}>
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
