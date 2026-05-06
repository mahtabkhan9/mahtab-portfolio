import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import { FiExternalLink, FiGithub, FiX, FiCheck } from 'react-icons/fi';

const ProjectCard = ({ project, index, isFeatured, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className={`project-card ${isFeatured ? 'md:col-span-2' : ''}`}
      style={{
        background: 'var(--bg-2)',
        border: hovered ? '1px solid var(--accent)' : '1px solid var(--border)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        cursor: 'none',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'border-color 0.4s var(--ease-expo), box-shadow 0.4s var(--ease-expo)',
        boxShadow: hovered ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(200, 255, 0, 0.05)' : 'none',
      }}
      data-cursor="VIEW"
    >
      {/* Top half: Image wrapper */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: isFeatured ? '16/9' : '4/3',
        overflow: 'hidden',
        background: '#040404',
        borderBottom: '1px solid var(--border)'
      }}>
        <motion.img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Index number badge */}
        <div style={{
          position: 'absolute', top: '1.25rem', left: '1.25rem',
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: '0.7rem', letterSpacing: '0.1em',
          background: 'rgba(8, 8, 8, 0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--border)',
          color: 'var(--accent)', padding: '0.3rem 0.6rem', borderRadius: '99px'
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Bottom half: Project Info */}
      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
            lineHeight: 1.2, marginBottom: '0.75rem',
            transition: 'color 0.3s ease',
            color: hovered ? 'var(--accent)' : 'var(--text)'
          }}>
            {project.title}
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.88rem',
            color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem',
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
          }}>
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {project.tags.slice(0, isFeatured ? 6 : 4).map((tag, i) => (
              <span key={i} className="tag-pill" style={{ fontSize: '0.65rem', padding: '0.2rem 0.55rem' }}>
                {tag}
              </span>
            ))}
            {project.tags.length > (isFeatured ? 6 : 4) && (
              <span className="tag-pill" style={{ fontSize: '0.65rem', padding: '0.2rem 0.55rem', borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                +{project.tags.length - (isFeatured ? 6 : 4)} More
              </span>
            )}
          </div>

          {/* Action buttons inside card */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <motion.a
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05, backgroundColor: 'var(--accent)', color: '#000', borderColor: 'var(--accent)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '99px',
                border: '1px solid rgba(200, 255, 0, 0.3)',
                background: 'rgba(200, 255, 0, 0.05)',
                color: 'var(--accent)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 600,
                textDecoration: 'none',
                cursor: 'none',
                transition: 'border-color 0.2s, background-color 0.2s, color 0.2s',
              }}
            >
              <span>Live Link</span> <FiExternalLink size={12} />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'var(--text)', color: 'var(--text)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1.1rem',
                borderRadius: '99px',
                border: '1px solid var(--border)',
                background: 'rgba(255, 255, 255, 0.02)',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: 500,
                textDecoration: 'none',
                cursor: 'none',
                transition: 'border-color 0.2s, background-color 0.2s, color 0.2s',
              }}
            >
              <span>Source Code</span> <FiGithub size={12} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Project = () => {
  const [selected, setSelected] = useState(null);

  const open = (p) => { setSelected(p); document.documentElement.classList.add('lenis-stopped'); };
  const close = () => { setSelected(null); document.documentElement.classList.remove('lenis-stopped'); };

  return (
    <section id="projects" style={{ padding: '4rem 5vw', background: 'var(--bg)', position: 'relative' }}>
      {/* Header */}
      <div style={{ marginBottom: '5rem' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
          03 — Selected Works
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--text)',
          }}>
            Featured<br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Creations.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '380px', lineHeight: 1.7 }}>
            A curated collection of full-stack MERN applications and digital solutions combining robust engineering with modern interactive design.
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          // Flagship projects get wider spans on desktop for a beautiful bento stagger
          const isFeatured = index === 0 || index === 2; // BookSwap (0) and Renderly (2) are featured
          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isFeatured={isFeatured}
              onClick={open}
            />
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}
          >
            <div onClick={close} style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.92)', backdropFilter: 'blur(12px)', cursor: 'none' }} />
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.97 }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              style={{
                position: 'relative',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: '1.5rem',
                width: 'calc(100% - 1rem)',
                maxWidth: '1040px',
                maxHeight: '90vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 610,
                boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
              }}
              data-lenis-prevent
            >
              <button onClick={close} style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem', zIndex: 10,
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(15,15,15,0.85)', backdropFilter: 'blur(8px)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text)', cursor: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
              >
                <FiX size={18} />
              </button>

              <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden no-scrollbar" style={{ flexGrow: 1 }} data-lenis-prevent>
                {/* Image panel */}
                <div className="w-full md:w-[45%] md:flex-shrink-0 bg-[#040404] flex items-center justify-center p-6 md:p-8 min-h-[240px] md:min-h-[280px] border-b md:border-b-0 md:border-r border-neutral-800">
                  <img src={selected.image} alt={selected.title} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '0.75rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
                </div>

                {/* Details panel */}
                <div className="flex-grow overflow-y-auto no-scrollbar" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'clamp(1.5rem, 4vw, 3rem)' }} data-lenis-prevent>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--text)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                      {selected.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                      {selected.description}
                    </p>
                    <div style={{ marginBottom: '2.5rem' }}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: '0.75rem' }}>
                        Technologies Used
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {selected.tags.map((tag, i) => (
                          <span key={i} className="tag-pill" style={{ fontSize: '0.7rem' }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                    <a href={selected.webapp} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center', cursor: 'none' }}>
                      Live Link <FiExternalLink size={14} />
                    </a>
                    <a href={selected.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ flex: 1, justifyContent: 'center', cursor: 'none' }}>
                      Source Code <FiGithub size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
