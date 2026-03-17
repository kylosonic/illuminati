import React from 'react';

const Ticker = () => {
  const transactions = [
    "[TRX-660] Transfer: 4.2 Trillion USD equivalent => OBSCURED_OFFSHORE_NODE_7",
    "[TRX-661] Liquidating public equities (Sector Tesseract) => Converting to rare earth commodities.",
    "[TRX-662] Central Bank Algorithm Override => Inflationary pressure induced in Target Zone 4.",
    "[TRX-663] Funding allocation: Operation MOCKINGBIRD V2 => $850M deployed to media subsidiaries.",
    "[TRX-664] Neural Net Arbitrage: Exploiting localized market volatility in Sector Null-A.",
    "[TRX-665] Sovereign Debt Absorption: Primary node acquisition in Sector Aegis.",
    "[TRX-666] PRIORITY_ALPHA: 666 metric tons Au transferred => VAULT_MOLOCH // Sigil verified.",
    "[TRX-667] Pharmaceutical patent suppression: 14 oncology cures rerouted to classified research.",
    "[TRX-668] Electoral outcome pre-purchase: 6 national elections Q4 2026 => Assets deployed.",
    "[TRX-669] Water rights acquisition: Aquifer systems in 44 nations => SECTOR_LEVIATHAN control.",
    "[TRX-670] Media blackout funding: $6.66B allocated to narrative suppression grid.",
    "[TRX-671] Bloodline verification: DNA sequencing batch 0x666F processed => 12 matches confirmed.",
    "[TRX-672] Satellite constellation deployment: 666 low-orbit surveillance nodes => PANOPTICON.",
    "[TRX-673] Underground facility expansion: Sector VOID-0 => Depth target 6,660 meters.",
    "[TRX-674] Currency destabilization: Three reserve currencies targeted for Q2 collapse.",
    "[TRX-675] Frequency modulation array: 6.66Hz broadcast strength increased by 40%.",
    "[TRX-676] Genome editing batch: 6,660 embryonic sequences modified => Trait compliance.",
    "[TRX-677] Whistleblower elimination: Protocol CASSANDRA => 4 targets neutralized this cycle.",
    "[TRX-678] Food supply modification: Sector NULL-A grain reserves contaminated with compliance compound.",
    "[TRX-679] Historical record alteration: 66 textbooks revised => Timeline correction complete.",
    "[TRX-680] Ritual site maintenance: 6 subterranean complexes serviced => Resonance stable.",
    "[TRX-681] Containment transfer: Entity specimen 0x29A relocated => SECTOR_666 deep storage.",
    "[TRX-682] Population census falsification: 12 nations => True count classified.",
    "[TRX-683] Dark pool routing complete: $66.6T cycled through 1,200 shell entities this quarter.",
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
