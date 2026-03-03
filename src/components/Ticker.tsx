const items = [
  'TRÁFEGO PAGO', 'ENGENHARIA DE CONVERSÃO', 'CIBERSEGURANÇA', 'INFRAESTRUTURA CLOUD',
  'DESIGN PREMIUM', 'ROAS ESCALÁVEL', 'CORE WEB VITALS A+', 'FUNIL BLINDADO',
];

export default function Ticker() {
  const repeated = [...items, ...items];

  return (
    <div className="ticker-gradient py-3 overflow-hidden relative z-[2]">
      <div className="flex gap-0 whitespace-nowrap" style={{ animation: 'ticker 25s linear infinite' }}>
        {repeated.map((item, i) => (
          <span key={i} className="font-display text-base tracking-[0.15em] px-10 text-primary-foreground/90 flex items-center gap-4">
            {item}
            <span className="opacity-50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
