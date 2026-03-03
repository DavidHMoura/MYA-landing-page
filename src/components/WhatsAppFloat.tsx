import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function WhatsAppFloat() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/5581989371015?text=Ol%C3%A1%21+Vim+pelo+site+da+MYA+e+tenho+interesse+em+escalar+meu+neg%C3%B3cio."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[500] w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 group"
        style={{
          background: '#25D366',
          boxShadow: '0 4px 24px rgba(37,211,102,0.4)',
          animation: 'wa-pulse 3s ease-in-out infinite',
        }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" fill="currentColor" />
        <span className="absolute right-[70px] glass-card rounded px-3 py-2 text-[0.72rem] whitespace-nowrap text-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Falar no WhatsApp
        </span>
      </a>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 left-8 z-[500] w-11 h-11 rounded-full glass-card flex items-center justify-center text-lavender transition-all duration-300 hover:-translate-y-1 hover:border-lavender ${showBackTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </>
  );
}
