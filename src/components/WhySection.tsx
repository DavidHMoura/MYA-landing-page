import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const truths = [
  'Seu "site bonito" pode estar custando 40% mais por lead com um LCP acima de 3s.',
  'Cada segundo de latência reduz sua taxa de conversão em até 7%.',
  'Bots estão inflando seu CPA — e sua agência atual nem monitora isso.',
  'Infraestrutura frágil = campanhas bilionárias jogando dinheiro no lixo.',
];

export default function WhySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why" className="py-32 section-gradient">
      <div className="container">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow eyebrow-line mb-4">O Diagnóstico</div>
            <h2 className="section-title text-foreground mb-6" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}>
              Sua página converte ou{' '}
              <span className="text-magenta">sangra receita?</span>
            </h2>
            <p className="text-lg leading-relaxed text-foreground/70 mb-8">
              A maioria das empresas paga caro por tráfego e joga esses visitantes em páginas lentas, 
              inseguras e sem engenharia de conversão. <strong className="text-foreground/90">Isso não é marketing. É desperdício.</strong>
            </p>

            <ul className="space-y-0">
              {truths.map((truth, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 py-4 border-b border-border/50 text-[0.9rem] text-foreground/75 leading-relaxed"
                >
                  <span className="text-magenta font-mono text-base mt-0.5 shrink-0">→</span>
                  {truth}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card rounded-lg p-10 relative overflow-hidden"
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, hsl(var(--magenta)), hsl(var(--lavender)), hsl(var(--magenta)))' }} />

            <blockquote className="font-display text-2xl font-700 leading-snug tracking-tight text-foreground mb-6">
              "Agências vendem <strong className="text-magenta">promessas</strong>. 
              Nós entregamos <strong className="text-lavender">engenharia</strong>."
            </blockquote>
            <p className="text-sm leading-relaxed text-foreground/55">
              Cada pixel, cada milissegundo, cada rota do funil é otimizada com métricas reais. 
              Não vendemos criativos — construímos máquinas de conversão com infraestrutura blindada, 
              performance de sub-segundo e segurança de nível militar.
            </p>

            {/* Decorative quote mark */}
            <span className="absolute -bottom-8 right-4 font-display text-[15rem] text-lavender/[0.04] leading-none pointer-events-none select-none">"</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
