import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Search, Cpu, Settings, TrendingUp } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

const steps: { num: string; icon: LucideIcon; title: string; desc: string }[] = [
  { num: '01', icon: Search, title: 'Diagnóstico', desc: 'Auditoria técnica do seu funil: performance, segurança, pontos de vazamento de receita.' },
  { num: '02', icon: Cpu, title: 'Estratégia', desc: 'Arquitetura do sistema de conversão com KPIs claros e roadmap de implementação.' },
  { num: '03', icon: Settings, title: 'Engenharia', desc: 'Construção da infraestrutura: LPs rápidas, funis blindados, campanhas calibradas.' },
  { num: '04', icon: TrendingUp, title: 'Escala', desc: 'Otimização contínua baseada em dados. Escalar o que funciona, cortar o que não.' },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="py-32 section-gradient">
      <div className="container" ref={ref}>
        <div className="text-center max-w-[640px] mx-auto mb-20">
          <div className="eyebrow mb-4 flex items-center justify-center gap-3">Metodologia</div>
          <h2 className="section-title text-foreground" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}>
            Como funciona a{' '}
            <span className="text-magenta">engenharia MYA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-[1px]" style={{ background: 'linear-gradient(90deg, hsl(var(--magenta)), hsl(var(--lavender)), hsl(var(--magenta)))' }} />

          {steps.map((step, i) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center relative z-[1] group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-card-bg border border-magenta/30 flex items-center justify-center relative group-hover:shadow-[0_0_30px_hsl(var(--magenta)/0.35)] group-hover:border-magenta transition-all duration-300">
                  <IconComp className="w-6 h-6 text-magenta" strokeWidth={1.5} />
                  <div className="absolute -inset-1 rounded-full border border-border/50" />
                </div>
                <div className="font-mono text-[0.6rem] tracking-[0.2em] text-magenta uppercase mb-1.5">{step.num}</div>
                <h3 className="font-display text-xl font-700 tracking-tight text-foreground mb-3">{step.title}</h3>
                <p className="text-[0.8rem] leading-relaxed text-foreground/50">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
