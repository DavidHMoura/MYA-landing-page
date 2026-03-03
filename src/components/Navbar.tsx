import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import myaLogo from '@/assets/mya-logo-white-2.svg';

const navLinks = [
  { label: 'Por Que MYA', href: '#why' },
  { label: 'Arsenal', href: '#services' },
  { label: 'Processo', href: '#process' },
  { label: 'Segurança', href: '#security' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] px-6 py-3 flex items-center justify-between backdrop-blur-[20px] border-b border-border/50 transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_40px_rgba(0,0,0,0.5)]' : ''}`}
        style={{ background: 'hsl(270 40% 4% / 0.7)' }}
      >
        <a href="#" className="flex items-center">
          <img src={myaLogo} alt="MYA Comunicações" className="h-10" />
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-[0.75rem] tracking-[0.1em] uppercase text-foreground/55 hover:text-lavender transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo('#contact')}
            className="hidden sm:block btn-magenta !py-2 !px-5 !text-[0.75rem]"
          >
            Diagnóstico
          </button>

          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Menu"
          >
            <span className={`block h-[1.5px] bg-lavender transition-all duration-300 rounded ${drawerOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block h-[1.5px] bg-lavender transition-all duration-300 rounded ${drawerOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] bg-lavender transition-all duration-300 rounded ${drawerOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[98] bg-background/50"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-[320px] z-[99] backdrop-blur-[20px] border-l border-border/50 p-16 pt-24 flex flex-col gap-2"
              style={{ background: 'hsl(270 53% 8% / 0.97)' }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block py-4 font-display text-[1.8rem] tracking-[0.05em] text-foreground/70 hover:text-magenta border-b border-border/50 text-left transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="mt-8 block w-full py-4 bg-primary text-primary-foreground text-center text-lg tracking-[0.12em] uppercase rounded-sm font-bold"
              >
                Diagnóstico
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
