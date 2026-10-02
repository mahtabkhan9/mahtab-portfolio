import React, { useCallback, useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, SplitText, prefersReduced } from './lib/gsap';
import { setLenis } from './lib/scroll';
import { Preloader } from './ui/bits';
import Nav from './ui/Nav';
import Hero from './ui/Hero';
import { Experience, Skills, Projects, Profiles, Education, Contact } from './ui/Sections';
import './ui/ui.css';

const App = () => {
  const [ready, setReady] = useState(() => prefersReduced());
  const done = useCallback(() => setReady(true), []);

  useEffect(() => { document.documentElement.classList.toggle('is-loading', !ready); }, [ready]);

  useEffect(() => {
    const reduce = prefersReduced();
    let lenis = null, tick, cancelled = false;
    const splits = [];

    if (!reduce) {
      lenis = new Lenis({ duration: 1.1 });
      setLenis(lenis);
      lenis.on('scroll', ScrollTrigger.update);
      tick = (t) => lenis.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    const setup = () => {
      if (cancelled || reduce) return;
      document.querySelectorAll('[data-split]').forEach((el) => {
        const sp = SplitText.create(el, {
          type: 'lines', mask: 'lines', autoSplit: true,
          onSplit: (self) => gsap.from(self.lines, { yPercent: 105, duration: 1.1, ease: 'power4.out', stagger: 0.08, scrollTrigger: { trigger: el, start: 'top 90%', once: true } }),
        });
        splits.push(sp);
      });
      gsap.utils.toArray('[data-fade]').forEach((el) => {
        gsap.from(el, { opacity: 0, y: 28, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
      });
      ScrollTrigger.refresh();
    };
    document.fonts.ready.then(setup);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    return () => {
      cancelled = true;
      window.removeEventListener('load', refresh);
      splits.forEach((s) => s.revert());
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <>
      {!ready && <Preloader onDone={done} />}
      <Nav />
      <main className="frame">
        <Hero ready={ready} />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Profiles />
        <Contact />
      </main>
    </>
  );
};

export default App;
