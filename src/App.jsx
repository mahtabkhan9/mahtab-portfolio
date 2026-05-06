import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Profiles from './components/Profiles';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [loaded]);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Noise grain overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Preloader */}
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {/* Main site */}
      <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
        <Navbar />
        <main>
          <About />
          <Skills />
          <Project />
          <Experience />
          <Education />
          <Contact />
          <Profiles />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
