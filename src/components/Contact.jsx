import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { FiArrowUpRight, FiMail, FiMapPin, FiCheckCircle, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm('service_bwh8bai', 'template_t4y4q9a', form.current, 'S1poagTAK82pHgYCU')
      .then(() => {
        setIsSent(true);
        setIsSending(false);
        form.current.reset();
        toast.success('Message sent! ✅', {
          position: 'bottom-right', autoClose: 3000, hideProgressBar: true, theme: 'dark',
          style: { background: 'var(--surface)', border: '1px solid var(--accent)', color: 'var(--text)' },
        });
        setTimeout(() => setIsSent(false), 4000);
      })
      .catch((err) => {
        setIsSending(false);
        toast.error('Failed. Please try again.', {
          position: 'bottom-right', autoClose: 3000, hideProgressBar: true, theme: 'dark',
          style: { background: 'var(--surface)', border: '1px solid #ef4444', color: 'var(--text)' },
        });
      });
  };

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--border)',
    padding: '1.25rem 0',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
    cursor: 'none',
    transition: 'border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      style={{ padding: '6rem 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}
    >
      <ToastContainer />

      {/* Decorative ambient neon background blobs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(200,255,0,0.03) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.01) 0%, transparent 65%)',
        borderRadius: '50%', pointerEvents: 'none',
        zIndex: 1
      }} />

      <div style={{ padding: '0 5vw', position: 'relative', zIndex: 2 }}>
        
        {/* ── HIGH-FIDELITY SPLIT GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Header (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]"></span>
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Open to full-time roles & internships
                </span>
              </motion.div>

              {/* Giant Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                style={{
                  fontFamily: 'var(--font-display)', 
                  fontWeight: 700,
                  fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
                  lineHeight: 1.05, 
                  letterSpacing: '-0.04em',
                  color: 'var(--text)', 
                  marginBottom: '2rem',
                }}
              >
                Let's <br />
                <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Connect.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '3.5rem', maxWidth: '420px' }}
              >
                Whether you are a recruiter looking to hire a passionate full-stack developer for your team, an engineering manager discussing internships, or someone with a creative vision—I am ready to connect and contribute!
              </motion.p>
            </div>

            {/* Glowing Direct Channels list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Mail Channel */}
              <motion.a
                href="mailto:mahtabalam7173@gmail.com"
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem 1.75rem',
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '1.25rem',
                  textDecoration: 'none',
                  cursor: 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.25)';
                  e.currentTarget.style.background = 'rgba(200, 255, 0, 0.02)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--bg-2)';
                }}
              >
                <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center' }}>
                  <FiMail size={20} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                    Email Me
                  </p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', color: 'var(--text)', marginTop: '0.15rem' }}>
                    mahtabalam7173@gmail.com
                  </p>
                </div>
                <div style={{ marginLeft: 'auto', color: 'var(--text-faint)', display: 'flex', alignItems: 'center' }}>
                  <FiArrowUpRight size={16} />
                </div>
              </motion.a>

              {/* LinkedIn Channel */}
              <motion.a
                href="https://linkedin.com/in/mahtab7860"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem 1.75rem',
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '1.25rem',
                  textDecoration: 'none',
                  cursor: 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.25)';
                  e.currentTarget.style.background = 'rgba(200, 255, 0, 0.02)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.background = 'var(--bg-2)';
                }}
              >
                <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center' }}>
                  <FiLinkedin size={20} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
                    LinkedIn
                  </p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', color: 'var(--text)', marginTop: '0.15rem' }}>
                    Connect on LinkedIn
                  </p>
                </div>
                <div style={{ marginLeft: 'auto', color: 'var(--text-faint)', display: 'flex', alignItems: 'center' }}>
                  <FiArrowUpRight size={16} />
                </div>
              </motion.a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Glassmorphic Form Card (7 Cols) */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: '2rem',
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}
            >
              <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                
                {/* Input Fields */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    { name: 'user_name', placeholder: 'Your name', type: 'text' },
                    { name: 'user_email', placeholder: 'Email address', type: 'email' },
                    { name: 'subject', placeholder: 'Subject', type: 'text' },
                  ].map((field) => (
                    <div key={field.name} style={{ position: 'relative' }}>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required
                        className="form-input"
                        style={inputStyle}
                        onFocus={e => e.target.style.borderBottomColor = 'var(--accent)'}
                        onBlur={e => e.target.style.borderBottomColor = 'var(--border)'}
                      />
                    </div>
                  ))}

                  <div style={{ position: 'relative' }}>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      required
                      className="form-input"
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => e.target.style.borderBottomColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderBottomColor = 'var(--border)'}
                    />
                  </div>
                </div>

                {/* Submitting Button */}
                <button
                  type="submit"
                  disabled={isSent || isSending}
                  className="btn-primary"
                  style={{
                    marginTop: '1rem',
                    alignSelf: 'flex-start',
                    opacity: isSent || isSending ? 0.75 : 1,
                    cursor: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    width: '100%',
                    justifyContent: 'center',
                    padding: '1.1rem 2rem',
                    borderRadius: '999px',
                  }}
                >
                  {isSent ? (
                    <>
                      Message Sent <FiCheckCircle size={16} />
                    </>
                  ) : isSending ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message <FiArrowUpRight size={16} />
                    </>
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
