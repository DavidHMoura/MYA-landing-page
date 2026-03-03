import myaLogo from '@/assets/mya-logo-white-2.svg';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-16" style={{ background: 'hsl(270 40% 2%)' }}>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-16 pb-12 border-b border-border/50 mb-8">
          <div>
            <img src={myaLogo} alt="MYA Comunicações" className="h-10 mb-3" />
            <p className="text-sm text-lavender/40 leading-relaxed max-w-[280px]">
              Engenharia de Conversão para empresas que tratam marketing como investimento, não custo.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground mb-5">Serviços</h4>
            <ul className="space-y-2.5">
              {['Tráfego Pago', 'Landing Pages', 'Redes Sociais', 'Design & Edição', 'CyberSec'].map(s => (
                <li key={s}><a href="#services" className="text-sm text-foreground/40 hover:text-lavender transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground mb-5">Empresa</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Por Que MYA', href: '#why' },
                { label: 'Como Funciona', href: '#process' },
                { label: 'Casos de Sucesso', href: '#proof' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contato', href: 'https://wa.me/5581989371015' },
              ].map(l => (
                <li key={l.label}><a href={l.href} className="text-sm text-foreground/40 hover:text-lavender transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[0.72rem] text-lavender/20">© 2025 MYA Comunicações. Todos os direitos reservados.</p>
          <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-lavender/15 mt-2">
            Nada Óbvio, Tudo MYA — Performance. Segurança. Resultado.
          </div>
        </div>
      </div>
    </footer>
  );
}
