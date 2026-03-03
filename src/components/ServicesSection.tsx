import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Target, Code2, ShieldCheck, BarChart3, Palette, Share2 } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

const services: { num: string; icon: LucideIcon; name: string; tagline: string; desc: string; bullets: string[]; featured?: boolean }[] = [
  {
    num: '01',
    icon: Target,
    name: 'Tráfego Pago de Alta Performance',
    tagline: 'CPA otimizado, ROAS escalável',
    desc: 'Google Ads, Meta Ads, TikTok Ads com otimização contínua de funil e segmentação cirúrgica.',
    bullets: ['Funis multi-etapa A/B testados', 'Otimização de CPA em tempo real', 'Relatórios com ROI, não vaidade'],
  },
  {
    num: '02',
    icon: Code2,
    name: 'Engenharia de Landing Pages',
    tagline: 'LCP < 1s · Core Web Vitals A+',
    desc: 'Landing pages com performance de sub-segundo, infraestrutura cloud e segurança nativa.',
    bullets: ['SSR/Edge rendering', 'Largest Contentful Paint otimizado', 'Infraestrutura escalável'],
    featured: true,
  },
  {
    num: '03',
    icon: ShieldCheck,
    name: 'Funil Blindado (CyberSec)',
    tagline: 'Proteção Anti-Bot · Anti-DDoS',
    desc: 'Proteção de dados dos leads, filtragem de bots que inflam CPA e defesa contra ataques.',
    bullets: ['WAF + Anti-DDoS ativo 24/7', 'Filtragem de tráfego fraudulento', 'Criptografia ponta-a-ponta'],
  },
  {
    num: '04',
    icon: BarChart3,
    name: 'Dashboard de Performance',
    tagline: 'Dados reais · Zero métricas de vaidade',
    desc: 'Monitoramento em tempo real com métricas que importam: ROAS, CAC, LTV e taxa de conversão.',
    bullets: ['KPIs customizados', 'Alertas de anomalia', 'Integração multi-canal'],
  },
  {
    num: '05',
    icon: Palette,
    name: 'Design & Edição Premium',
    tagline: 'Identidade que converte',
    desc: 'Design estratégico focado em conversão, não em likes. Cada elemento tem um propósito mensurável.',
    bullets: ['Criativos para Ads', 'Social media estratégico', 'Branding de alta conversão'],
  },
  {
    num: '06',
    icon: Share2,
    name: 'Gestão de Redes Sociais',
    tagline: 'Conteúdo estratégico · Não genérico',
    desc: 'Presença digital com estratégia de conteúdo que gera demanda — não apenas engagement.',
    bullets: ['Calendário editorial estratégico', 'Copy persuasiva', 'Análise de performance'],
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container" ref={ref}>
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <div className="eyebrow mb-4 flex items-center justify-center gap-3">Arsenal Técnico</div>
          <h2 className="section-title text-foreground mb-4" style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}>
            Não vendemos serviços.{' '}
            <span className="text-magenta">Construímos sistemas.</span>
          </h2>
          <p className="text-foreground/50 text-[0.95rem] leading-relaxed">
            Cada módulo funciona integrado. Tráfego sem infraestrutura é jogar dinheiro no fogo. 
            Infraestrutura sem estratégia é um bunker vazio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-border/50 border border-border/50 rounded-xl overflow-hidden">
          {services.map((s, i) => {
            const IconComp = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`bg-card-bg p-8 relative overflow-hidden group transition-colors duration-300 hover:bg-accent ${s.featured ? 'bg-gradient-to-br from-accent to-card-bg border border-magenta/25' : ''}`}
              >
                <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" style={{ background: 'linear-gradient(90deg, hsl(var(--magenta)), hsl(var(--lavender)))' }} />

                <div className="font-mono text-[0.75rem] tracking-[0.25em] text-muted-foreground mb-5">{s.num}</div>
                <IconComp className="w-8 h-8 mb-5 text-lavender" strokeWidth={1.5} />
                <h3 className={`font-display text-xl font-700 tracking-tight mb-3 leading-tight ${s.featured ? 'text-lavender' : 'text-foreground'}`}>{s.name}</h3>
                <div className="font-mono text-[0.78rem] text-magenta tracking-[0.1em] uppercase mb-4">{s.tagline}</div>
                <p className="text-sm leading-relaxed text-foreground/50 mb-5">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="text-[0.78rem] text-foreground/45 flex items-center gap-2.5">
                      <span className="text-magenta shrink-0">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
