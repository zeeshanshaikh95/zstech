import { useCallback, useEffect, useState } from 'react';
import { ToastProvider } from './context/ToastContext.jsx';
import { getSiteData } from './lib/api.js';
import { useEasterEggs } from './hooks/useEasterEggs.js';

import Preloader from './components/Preloader.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Navbar from './components/Navbar.jsx';
import MobileDrawer from './components/MobileDrawer.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Services from './components/Services.jsx';
import Work from './components/Work.jsx';
import Process from './components/Process.jsx';
import Stats from './components/Stats.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function Site() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEasterEggs();

  useEffect(() => {
    let cancelled = false;
    getSiteData().then((d) => {
      if (cancelled) return;
      setData(d);
      setLoaded(true);
    });
    return () => { cancelled = true; };
  }, []);

  // body scroll lock + Escape for the mobile drawer
  useEffect(() => {
    document.body.classList.toggle('lock', menuOpen);
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('lock');
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const handleMenuChange = useCallback((open) => setMenuOpen(open), []);
  const handlePreloaderDone = useCallback(() => setPreloaderDone(true), []);

  return (
    <>
      {!preloaderDone && <Preloader onDone={handlePreloaderDone} />}
      <CustomCursor />
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <Navbar menuOpen={menuOpen} onMenuChange={handleMenuChange} />
      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} contact={data?.contact} />

      {loaded ? (
        <div id="app">
          <main>
            <Hero words={data.typewriterWords} contact={data.contact} />
            <Marquee items={data.marqueeItems} altItems={data.altMarqueeItems} />
            <Services services={data.services} contact={data.contact} />
            <Work projects={data.projects} contact={data.contact} />
            <Process steps={data.processSteps} />
            <Stats stats={data.stats} />
            <Testimonials testimonials={data.testimonials} />
            <FAQ faq={data.faq} />
            <Contact contact={data.contact} />
          </main>
          <Footer contact={data.contact} />
        </div>
      ) : (
        <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
          <div className="logo-mark" style={{ width: 58, height: 58 }}><span>ZS</span></div>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <Site />
    </ToastProvider>
  );
}
