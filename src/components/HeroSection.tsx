import { motion, type Easing } from 'framer-motion';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import HeroCanvas from './HeroCanvas';
import myaLogo from '@/assets/mya-logo-white-2.svg';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: 'easeOut' as Easing },
});

export default function HeroSection() {
  const roi = useAnimatedCounter(3, '×');
  const uptime = useAnimatedCounter(99.9, '%', 1);
  const breaches = useAnimatedCounter(0, '');

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      <HeroCanvas />

      <div className="absolute inset-0 z-0" style={{
        background: `
          radial-gradient(ellipse 80% 60% at 70% 50%, hsl(268 38% 73% / 0.08) 0%, transparent 60%),
          radial-gradient(ellipse 50% 80% at 10% 80%, hsl(330 82% 48% / 0.1) 0%, transparent 55%),
          linear-gradient(180deg, hsl(270 40% 4%) 0%, hsl(270 53% 8%) 50%, hsl(270 40% 4%) 100%)
        `
      }} />

      <div className="container relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div {...fadeUp(0.3)} className="eyebrow eyebrow-line mb-6">
              Engenharia de Conversão
            </motion.div>

            <motion.h1 {...fadeUp(0.5)} className="font-display font-800 text-foreground leading-[0.92] tracking-tight mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
              Sua Landing Page é um{' '}
              <span className="text-gradient-brand">Vazamento de Receita?</span>
              <br />
              Nós Estancamos.
            </motion.h1>

            <motion.p {...fadeUp(0.7)} className="text-lg leading-relaxed text-foreground/65 max-w-[520px] mb-10">
              Marketing de alto desempenho não é sorte — é <strong className="text-foreground font-medium">infraestrutura</strong>. 
              Otimização de LCP, segurança nativa e funis blindados que multiplicam capital.
            </motion.p>

            <motion.div {...fadeUp(0.9)} className="flex gap-4 flex-wrap">
              <a href="#contact" className="btn-magenta">
                Solicitar Diagnóstico Técnico →
              </a>
              <a href="#services" className="btn-ghost-lavender">
                Ver Arsenal
              </a>
            </motion.div>

            <motion.div {...fadeUp(1.1)} className="flex gap-10 mt-14 pt-10 border-t border-border/50">
              <div>
                <div ref={roi.ref} className="font-display text-5xl font-800 text-gradient-white">{roi.value}</div>
                <div className="text-[0.65rem] tracking-[0.15em] uppercase text-muted-foreground -mt-1">ROI Médio em Tráfego</div>
              </div>
              <div>
                <div ref={uptime.ref} className="font-display text-5xl font-800 text-gradient-white">{uptime.value}</div>
                <div className="text-[0.65rem] tracking-[0.15em] uppercase text-muted-foreground -mt-1">Uptime Garantido</div>
              </div>
              <div>
                <div ref={breaches.ref} className="font-display text-5xl font-800 text-gradient-white">{breaches.value}</div>
                <div className="text-[0.65rem] tracking-[0.15em] uppercase text-muted-foreground -mt-1">Brechas de Segurança</div>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.6)} className="relative h-[400px] lg:h-[500px] hidden lg:block">
            <div className="absolute inset-0 rounded border border-border/50 flex items-center justify-center overflow-hidden"
              style={{ background: 'radial-gradient(ellipse at 30% 40%, hsl(268 38% 73% / 0.1) 0%, hsl(270 40% 12% / 0.4) 70%)', backdropFilter: 'blur(2px)' }}>
              <img src={myaLogo} alt="MYA" className="w-64 select-none opacity-30" style={{ animation: 'pulse-glow 4s ease-in-out infinite', filter: 'drop-shadow(0 0 30px hsl(268 38% 73% / 0.3))' }} />
            </div>

            <div className="absolute top-[12%] -right-[5%] glass-card rounded-md px-4 py-3 text-[0.72rem]" style={{ animation: 'float1 5s ease-in-out infinite' }}>
              <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-muted-foreground mb-1">LCP Score</div>
              <div className="font-bold text-success">0.8s ✓</div>
            </div>
            <div className="absolute bottom-[18%] -left-[8%] glass-card rounded-md px-4 py-3 text-[0.72rem]" style={{ animation: 'float2 6s ease-in-out infinite' }}>
              <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-muted-foreground mb-1">Conversão</div>
              <div className="font-bold text-magenta">+147% ↑</div>
            </div>
            <div className="absolute top-[55%] right-[5%] glass-card rounded-md px-4 py-3 text-[0.72rem]" style={{ animation: 'float1 7s ease-in-out infinite reverse' }}>
              <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-muted-foreground mb-1">Status</div>
              <div className="font-bold text-foreground flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-success" style={{ animation: 'blink 1.5s infinite' }} />
                Blindado
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
