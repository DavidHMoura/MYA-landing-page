import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, MessageCircle, Instagram, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', business: '', segment: '', service: '', message: '' });

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      alert('Por favor, preencha pelo menos nome e WhatsApp.');
      return;
    }

    const text = encodeURIComponent(
      `Olá! Vim pelo site da MYA e gostaria de conversar.\n\n` +
      `*Nome:* ${form.name}\n` +
      `*Empresa:* ${form.business || 'Não informado'}\n` +
      `*Segmento:* ${form.segment || 'Não informado'}\n` +
      `*Serviço:* ${form.service || 'Não informado'}\n` +
      `*Desafio:* ${form.message || 'Quero saber mais sobre os serviços'}`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/5581989371015?text=${text}`, '_blank');
    }, 800);
  };

  const inputClasses = "w-full bg-foreground/[0.04] border border-lavender/15 rounded px-4 py-3 text-foreground font-body text-sm outline-none transition-all duration-300 focus:border-magenta/40 focus:shadow-[0_0_20px_hsl(var(--magenta)/0.07)] placeholder:text-foreground/20";

  return (
    <section id="contact" className="py-32 text-center relative" style={{
      background: `radial-gradient(ellipse 90% 70% at 50% 0%, hsl(var(--magenta) / 0.12) 0%, transparent 60%), hsl(var(--deep-black))`
    }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="eyebrow mb-6"
        >
          Última Chamada
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title text-foreground mb-6"
          style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
        >
          Cada dia sem a MYA<br />é verba que seus<br />
          <span className="text-magenta">concorrentes agradecem.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base text-foreground/55 max-w-[560px] mx-auto mb-12 leading-relaxed"
        >
          Você chegou até aqui porque sabe que precisa de algo diferente. 
          Não de uma agência — de uma parceria técnica e estratégica que trate seu negócio como prioridade real.
        </motion.p>

        {/* Lead Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-card rounded-xl p-10 max-w-[680px] mx-auto mb-16 text-left relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, hsl(var(--magenta)), hsl(var(--lavender)))' }} />

          {!submitted ? (
            <>
              <h3 className="font-display text-2xl font-700 text-foreground mb-1 tracking-tight">Solicitar Diagnóstico Técnico</h3>
              <p className="text-sm text-foreground/40 mb-8">Preencha abaixo. Responderemos em até 2h no WhatsApp.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">Seu Nome</label>
                  <input className={inputClasses} placeholder="João Silva" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">WhatsApp</label>
                  <input className={inputClasses} placeholder="(81) 99999-0000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-4">
                <label className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">Nome do Negócio / Empresa</label>
                <input className={inputClasses} placeholder="Ex: Loja Exemplo LTDA" value={form.business} onChange={e => setForm({...form, business: e.target.value})} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">Segmento</label>
                  <select className={inputClasses} value={form.segment} onChange={e => setForm({...form, segment: e.target.value})}>
                    <option value="" disabled>Selecione...</option>
                    <option>E-commerce</option>
                    <option>Saúde & Estética</option>
                    <option>Educação & Cursos</option>
                    <option>Serviços B2B</option>
                    <option>Alimentação & Gastronomia</option>
                    <option>Imóveis</option>
                    <option>Finanças & Investimentos</option>
                    <option>Tecnologia / SaaS</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">Serviço de Interesse</label>
                  <select className={inputClasses} value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                    <option value="" disabled>Selecione...</option>
                    <option>Tráfego Pago</option>
                    <option>Consultoria Estratégica</option>
                    <option>Gestão de Redes Sociais</option>
                    <option>Design & Edição Premium</option>
                    <option>LP / Site de Alta Conversão</option>
                    <option>Pacote Completo MYA</option>
                    <option>Ainda não sei — quero conversar</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-4">
                <label className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">Qual é o seu maior desafio hoje?</label>
                <textarea className={`${inputClasses} resize-y`} rows={3} placeholder="Conte brevemente..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
              </div>

              <button onClick={handleSubmit} className="w-full py-4 font-display text-xl font-700 tracking-[0.12em] text-primary-foreground rounded transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--magenta)/0.5)] hover:-translate-y-0.5 mt-2 flex items-center justify-center gap-3" style={{ background: 'linear-gradient(135deg, hsl(var(--magenta)), hsl(330 82% 35%))' }}>
                Solicitar Auditoria de Gargalos
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-[0.7rem] text-foreground/25 mt-4 leading-relaxed">
                Ao enviar, você será redirecionado para nosso WhatsApp. Não compartilhamos seus dados com terceiros.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="font-display text-2xl font-700 text-lavender mb-2">Diagnóstico Solicitado!</h3>
              <p className="text-foreground/50 text-sm">Redirecionando para nosso WhatsApp onde iniciaremos sua auditoria técnica.</p>
            </div>
          )}
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href="https://wa.me/5581989371015?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20MYA%20e%20quero%20uma%20auditoria%20t%C3%A9cnica."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-display text-xl sm:text-2xl font-700 tracking-[0.12em] px-12 py-5 rounded-sm text-primary-foreground mb-12 transition-all duration-300 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--magenta)), hsl(330 82% 35%))',
              boxShadow: '0 0 60px hsl(var(--magenta) / 0.35)',
            }}
          >
            Escalar meu Negócio Agora
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Urgency */}
        <div className="inline-flex items-center gap-2 glass-card rounded px-6 py-3 font-mono text-[0.72rem] text-foreground/55 tracking-wide mb-8">
          <AlertTriangle className="w-4 h-4 text-magenta shrink-0" />
          Atendemos um número limitado de clientes por mês para garantir <strong className="text-magenta">qualidade sem compromisso.</strong> Vagas se esgotando.
        </div>

        {/* Contact channels */}
        <div className="flex justify-center gap-8 flex-wrap mt-8 pt-8 border-t border-border/50">
          <a href="https://wa.me/5581989371015" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground/55 hover:text-lavender transition-colors">
            <MessageCircle className="w-5 h-5" />
            <div className="text-left">
              <span className="font-mono text-[0.7rem] tracking-[0.1em] text-muted-foreground block">WhatsApp</span>
              <span className="font-medium">+55 81 98937-1015</span>
            </div>
          </a>
          <a href="https://instagram.com/myacomunicacoes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground/55 hover:text-lavender transition-colors">
            <Instagram className="w-5 h-5" />
            <div className="text-left">
              <span className="font-mono text-[0.7rem] tracking-[0.1em] text-muted-foreground block">Instagram</span>
              <span className="font-medium">@myacomunicacoes</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
