import React from 'react';

const Ticker = () => {
  const transactions = [
    "[TRX-998] Transfer: 4.2 Trillion USD equivalent => OBSCURED_OFFSHORE_NODE_7",
    "[TRX-999] Liquidating public equities (Sector Tesseract) => Converting to rare earth commodities.",
    "[TRX-001] Central Bank Algorithm Override => Inflationary pressure induced in Target Zone 4.",
    "[TRX-002] Funding allocation: Operation SILENT GAMBIT => $850M deployed to media subsidiaries.",
    "[TRX-003] Neural Net Arbitrage: Exploiting localized market volatility in Sector Null-A.",
    "[TRX-004] Sovereign Debt Absorption: Primary node acquisition in Sector Aegis.",
  ];

  return (
    <div className="h-10 bg-black/80 backdrop-blur-3xl border-b border-white/5 overflow-hidden flex items-center relative z-40">
      <div className="absolute left-0 h-full glass border-l-0 border-y-0 px-4 lg:px-6 flex items-center z-10 shadow-[20px_0_40px_rgba(0,0,0,0.8)]">
        <div className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-3 animate-pulse"></div>
        <span className="text-[10px] font-bold text-accent-gold tracking-[0.2em] font-mono uppercase hidden sm:inline">DARK POOL ROUTING</span>
      </div>
      
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex gap-12 lg:gap-16 px-8 items-center h-full">
          {transactions.map((tx, i) => (
            <div key={i} className="flex items-center gap-4 lg:gap-6">
              <span className="text-[10px] text-secondary/60 font-mono tracking-widest uppercase">
                {tx}
              </span>
              <div className="w-1 h-1 bg-white/10 rounded-full"></div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {transactions.map((tx, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4 lg:gap-6">
              <span className="text-[10px] text-secondary/60 font-mono tracking-widest uppercase">
                {tx}
              </span>
              <div className="w-1 h-1 bg-white/10 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute right-0 h-full bg-gradient-to-l from-black via-black/80 to-transparent w-16 lg:w-24 z-10"></div>
    </div>
  );
};

export default Ticker;
