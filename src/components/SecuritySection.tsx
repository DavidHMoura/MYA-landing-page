import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Lock, Bot, Swords, Activity, Zap, Shield } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

const pillars: { icon: LucideIcon; name: string; tag: string; text: string }[] = [
  { icon: Lock, name: 'SSL & Criptografia', tag: 'AES-256', text: 'Certificados SHA-256 com HSTS e criptografia ponta-a-ponta em todas as transmissões de dados.' },
  { icon: Bot, name: 'Filtragem Anti-Bot', tag: 'ML-Powered', text: 'Detecção inteligente de tráfego fraudulento que infla seu CPA. Só leads reais passam.' },
  { icon: Swords, name: 'Defesa Anti-DDoS', tag: 'Ativo 24/7', text: 'Detecção e absorção automática. Mesmo sob ataque, seu site permanece online.' },
  { icon: Activity, name: 'Monitoramento Contínuo', tag: 'Zero Downtime', text: 'Vigilância 24/7. Resposta em menos de 2 horas antes de impactar suas campanhas.' },
  { icon: Zap, name: 'Performance Técnica', tag: 'Core Web Vitals A+', text: 'Velocidade é conversão. Páginas carregando em menos de 1 segundo, no topo do Google.' },
];

export default function SecuritySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="security" className="py-32 relative overflow-hidden" style={{
      background: `
        radial-gradient(ellipse 70% 60% at 50% 50%, hsl(270 40% 12% / 0.8) 0%, transparent 70%),
        linear-gradient(180deg, hsl(var(--deep-black)), hsl(270 50% 5%), hsl(var(--deep-black)))
      `
    }}>
      <div className="absolute inset-0" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, hsl(268 38% 73% / 0.02) 60px, hsl(268 38% 73% / 0.02) 61px),
          repeating-linear-gradient(90deg, transparent, transparent 60px, hsl(268 38% 73% / 0.02) 60px, hsl(268 38% 73% / 0.02) 61px)`
      }} />

      <div className="container relative z-[1]" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow eyebrow-line mb-4">Funil Blindado</div>
            <h2 className="section-title text-foreground mb-6" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}>
              Segurança não é{' '}
              <span className="text-magenta">feature. É fundação.</span>
            </h2>

            <div className="flex flex-col gap-4 mt-10">
              {pillars.map((p, i) => {
                const IconComp = p.icon;
                return (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="glass-card-hover rounded-md flex gap-5 items-start p-5"
                  >
                    <div className="w-11 h-11 rounded-md shrink-0 flex items-center justify-center border border-magenta/25" style={{ background: 'linear-gradient(135deg, hsl(var(--magenta) / 0.2), hsl(var(--lavender) / 0.1))' }}>
                      <IconComp className="w-5 h-5 text-magenta" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground mb-1">
                        {p.name}
                        <span className="ml-2 inline-block font-mono text-[0.58rem] bg-magenta/15 text-magenta px-1.5 py-0.5 rounded-sm tracking-[0.1em] uppercase align-middle">
                          {p.tag}
                        </span>
                      </div>
                      <div className="text-[0.8rem] text-foreground/45 leading-relaxed">{p.text}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:sticky lg:top-[120px]"
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8" style={{
              background: 'linear-gradient(135deg, hsl(var(--magenta)), hsl(var(--lavender)))',
              boxShadow: '0 0 40px hsl(var(--magenta) / 0.3)',
              animation: 'pulse-glow 3s ease-in-out infinite'
            }}>
              <Shield className="w-9 h-9 text-primary-foreground" strokeWidth={1.5} />
            </div>

            <div className="glass-card rounded-md p-6 mb-8 font-mono text-[0.78rem] text-foreground/60 leading-relaxed">
              <div className="mb-3 text-magenta font-bold">// ALERTA DE MERCADO</div>
              <strong className="text-magenta">43%</strong> dos ataques cibernéticos miram pequenas e médias empresas.<br />
              <strong className="text-magenta">60%</strong> dessas empresas fecham em menos de 6 meses após um ataque grave.<br />
              <strong className="text-magenta">95%</strong> dos incidentes são preveníveis com a infraestrutura correta.<br /><br />
              <span className="text-lavender">A pergunta não é "se" você será atacado.<br />É "quando" — e se estará preparado.</span>
            </div>

            <div className="grid grid-cols-2 gap-[1px] bg-border/50 rounded-md overflow-hidden">
              {[
                { val: '<1s', lbl: 'Carregamento' },
                { val: '99.9%', lbl: 'Uptime' },
                { val: '2h', lbl: 'Resposta' },
                { val: '256bit', lbl: 'Criptografia' },
              ].map(s => (
                <div key={s.lbl} className="bg-card-bg p-5 text-center">
                  <div className="font-display text-3xl font-800 text-gradient-white">{s.val}</div>
                  <div className="text-[0.65rem] text-muted-foreground tracking-[0.12em] uppercase -mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-foreground/35 leading-relaxed font-mono">
              Enquanto suas campanhas rodam, sua infraestrutura dorme protegida.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
