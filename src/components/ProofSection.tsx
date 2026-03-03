import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star } from 'lucide-react';

const proofs = [
  {
    text: 'Em 90 dias, nosso ROAS saiu de 1.2× para 4.7×. Eles não fazem post — constroem sistema.',
    name: 'Carlos M.',
    role: 'CEO — E-commerce de Moda',
  },
  {
    text: 'Nosso site caía em pico de tráfego. A MYA reconstruiu a infraestrutura — zero incidentes técnicos em 8 meses.',
    name: 'Fernanda R.',
    role: 'Diretora de Marketing — Clínica Estética',
  },
  {
    text: 'Saímos de "presença nas redes" para uma máquina de leads com CAC 60% menor que a média do setor.',
    name: 'Ricardo A.',
    role: 'Fundador — Startup B2B SaaS',
  },
];

export default function ProofSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="proof" className="py-24 border-t border-b border-border/50" style={{
      background: 'linear-gradient(180deg, hsl(var(--deep-black)), hsl(var(--card-bg) / 0.5))'
    }}>
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <div className="eyebrow mb-4 flex items-center justify-center gap-3">Logs de Sucesso</div>
          <h2 className="section-title text-foreground" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Resultados que falam.{' '}
            <span className="text-magenta">Números que provam.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-lg p-8 relative hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              <span className="absolute top-3 left-5 font-display text-5xl text-magenta/40 leading-none">"</span>
              <div className="flex gap-0.5 text-magenta mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/65 italic mt-6">{p.text}</p>
              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="font-bold text-sm text-foreground">{p.name}</div>
                <div className="font-mono text-[0.72rem] text-muted-foreground">{p.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
