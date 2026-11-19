import { useCallback, useEffect, useState } from 'react';
import siteData from '../../backend/data/siteData.js';
import { ToastProvider } from './context/ToastContext.jsx';

import ScrollProgress from './components/ScrollProgress.jsx';
import Navbar from './components/Navbar.jsx';
import MobileDrawer from './components/MobileDrawer.jsx';
import Hero from './components/Hero.jsx';
import Clients from './components/Clients.jsx';
import Services from './components/Services.jsx';
import Work from './components/Work.jsx';
import Process from './components/Process.jsx';
import Stats from './components/Stats.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function Site() {
  const [menuOpen, setMenuOpen] = useState(false);

  // lock page scroll while the mobile drawer is open
  useEffect(() => {
    document.body.classList.toggle('lock', menuOpen);
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  const { contact } = siteData;

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollProgress />
      <Navbar menuOpen={menuOpen} onToggle={toggleMenu} onClose={closeMenu} />
      <MobileDrawer open={menuOpen} onClose={closeMenu} contact={contact} />

      <main id="main">
        <Hero />
        <Clients />
        <Services services={siteData.services} />
        <Work projects={siteData.projects} contact={contact} />
        <Process steps={siteData.processSteps} />
        <Stats stats={siteData.stats} />
        <Testimonials testimonials={siteData.testimonials} />
        <FAQ faq={siteData.faq} contact={contact} />
        <Contact contact={contact} />
      </main>

      <Footer contact={contact} />
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
