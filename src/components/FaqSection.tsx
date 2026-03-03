import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  { q: 'Quanto tempo leva para ver resultados?', a: 'Primeiros dados em 2 a 4 semanas. Resultados escaláveis entre 60 e 90 dias. Sites e infraestrutura prontos em 15 a 30 dias úteis.' },
  { q: 'Vocês atendem empresas de qualquer tamanho ou segmento?', a: 'Atendemos empresas sérias em crescer — do empreendedor que quer escalar até médias e grandes empresas. Trabalhamos com quem vê marketing como investimento, não custo.' },
  { q: 'Qual é o investimento mínimo para trabalhar com a MYA?', a: 'Cada projeto é orçado conforme a necessidade. Sem pacotes engessados. Começa com uma conversa gratuita — fale com a gente pelo WhatsApp.' },
  { q: 'Como funciona o acompanhamento e os relatórios?', a: 'Dashboards em tempo real, reuniões quinzenais e relatórios mensais com dados reais: ROAS, CAC, LTV e taxa de conversão. Sem métricas de vaidade.' },
  { q: 'A MYA garante resultados específicos?', a: 'Nenhuma agência honesta garante resultados fixos. Garantimos metodologia rigorosa, transparência total e otimização contínua. Nosso histórico fala por si.' },
  { q: 'Preciso ter um site para trabalhar com vocês em tráfego pago?', a: 'Não necessariamente. Podemos rodar para WhatsApp ou Instagram direto. Mas uma boa landing page faz diferença real no CAC — e podemos criar uma com toda nossa infraestrutura incluída.' },
];

export default function FaqSection() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-background">
      <div className="container" ref={ref}>
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <div className="eyebrow mb-4 flex items-center justify-center gap-3">Dúvidas Reais</div>
          <h2 className="section-title text-foreground" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
            Perguntas que{' '}
            <span className="text-magenta">você vai fazer</span>
          </h2>
        </div>

        <div className="max-w-[780px] mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border-b border-border/50 overflow-hidden"
            >
              <button
                className="flex justify-between items-center py-6 w-full text-left gap-6 group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-base font-medium leading-snug group-hover:text-lavender transition-colors">{faq.q}</span>
                <span className={`w-6 h-6 shrink-0 border border-lavender/30 rounded-full flex items-center justify-center font-mono text-base text-magenta transition-all duration-300 ${openIndex === i ? 'rotate-45 bg-magenta/10' : ''}`}>
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: openIndex === i ? '400px' : '0' }}
              >
                <p className="text-[0.9rem] leading-relaxed text-foreground/55 pb-6">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
