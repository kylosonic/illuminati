import React from 'react';
import { ShieldCheck, Zap, Ghost, EyeOff, Terminal, ChevronRight, Crosshair } from 'lucide-react';

const Directives = () => {
  const directives = [
    {
      id: 'OP-ECLIPSE',
      title: 'OP-ECLIPSE',
      description: 'Engineering artificial grid failure to test urban dependency metrics.',
      status: 'PHASED_ROLLOUT',
      icon: Zap
    },
    {
      id: 'OP-MOCKINGBIRD',
      title: 'OP-MOCKINGBIRD V2.0',
      description: 'Injecting synthesized partisan outrage into digital social networks to maintain public division.',
      status: 'SELF_SUSTAINING',
      icon: Ghost
    },
    {
      id: 'OP-PROMETHEUS',
      title: 'OP-PROMETHEUS',
      description: 'Suppressing breakthrough zero-point energy patents to maintain fossil-fuel economic leverage.',
      status: 'TARGETED',
      icon: EyeOff
    },
    {
      id: 'PROTOCOL-CASSANDRA',
      title: 'PROTOCOL CASSANDRA',
      description: 'Discrediting whistleblowers via algorithmically generated deepfake campaigns.',
      status: 'ACTIVE',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-12 xl:p-24 max-w-7xl mx-auto animate-reveal space-y-8 sm:space-y-12 lg:space-y-24 bg-bg-void relative">
      <div className="absolute inset-0 geometric-grid opacity-[0.02] pointer-events-none"></div>

      <header className="space-y-6 sm:space-y-8 relative z-10">
        <div className="flex items-center gap-4">
          <div className="badge-pill text-[8px] sm:text-[10px]">
            <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> <span className="hidden sm:inline">SYSTEM_DIRECTIVES // TIER-1</span><span className="sm:hidden">DIRECTIVES</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-white leading-none uppercase italic font-black" style={{ letterSpacing: '-0.05em' }}>Operational<br/><span className="text-accent-gold not-italic font-bold">Protocols.</span></h1>
            <p className="text-classified text-xs sm:text-base lg:text-lg font-serif italic max-w-2xl opacity-40 leading-relaxed lowercase">
              "Influence is the quietest power. We recalibrate the depths."
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 opacity-20">
            <div className="w-20 sm:w-32 h-px bg-accent-gold"></div>
            <div className="text-classified font-black tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-[10px]">Synchronicity: 0.99</div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border-blueprint relative z-10">
        {directives.map((dir, idx) => (
          <div 
            key={dir.id} 
            className="group p-4 sm:p-8 lg:p-12 bg-bg-obsidian hover:bg-white/[0.01] transition-all duration-[1s] space-y-4 sm:space-y-6 lg:space-y-10 relative overflow-hidden border border-transparent hover:border-accent-gold/20"
            style={{ animation: `reveal 0.6s ease forwards`, animationDelay: `${idx * 0.15}s`, opacity: 0 }}
          >
            <div className="flex flex-row justify-between items-start gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-accent-gold/5 border border-border-blueprint rounded-sm flex items-center justify-center text-dim group-hover:text-accent-gold transition-all duration-[1s] group-hover:rotate-45 shadow-xl group-hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] shrink-0">
                <dir.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 group-hover:-rotate-45 transition-transform duration-[1s]" strokeWidth={1} />
              </div>
              <div className="flex items-center gap-2 border border-border-blueprint px-2 sm:px-4 py-1 sm:py-1.5 rounded-sm bg-black/40 shrink-0">
                <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
                <span className="text-classified text-[8px] sm:text-[10px] text-accent-gold font-black tracking-[0.15em] sm:tracking-[0.3em]">{dir.status}</span>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-serif text-white group-hover:text-accent-gold transition-all duration-700 tracking-wider uppercase font-black">{dir.title}</h3>
              <p className="text-classified text-[11px] sm:text-sm leading-relaxed font-serif italic opacity-40 group-hover:opacity-100 group-hover:text-white transition-all duration-700 max-w-lg lowercase">
                {dir.description}
              </p>
            </div>

            <div className="pt-4 sm:pt-6 lg:pt-8 border-t border-border-blueprint flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity duration-[1s]">
              <span className="text-classified font-black tracking-[0.1em] sm:tracking-[0.2em] font-mono text-[8px] sm:text-[10px]">OP: {dir.id}</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold group-hover:translate-x-2 transition-transform duration-[1s]" strokeWidth={1} />
            </div>

            {/* Background Number - hidden on mobile */}
            <div className="absolute -bottom-6 -right-6 text-[6rem] sm:text-[8rem] lg:text-[10rem] font-black text-white/[0.01] group-hover:text-accent-gold/[0.02] pointer-events-none select-none tracking-tighter transition-colors duration-[2s] hidden sm:block">
              {dir.id.split('-')[1] || 'X'}
            </div>
          </div>
        ))}
      </div>

      <footer className="pt-8 sm:pt-12 flex flex-col items-center gap-4 sm:gap-8 relative z-10">
        <div className="h-px w-20 sm:w-32 bg-accent-gold opacity-20"></div>
        <div className="max-w-4xl text-center px-4">
          <p className="text-classified opacity-20 font-serif lowercase text-sm sm:text-base lg:text-lg italic tracking-[0.05em] sm:tracking-[0.1em] leading-relaxed">
            "Speak only what is necessary. Redundancy is a weakness."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Directives;
