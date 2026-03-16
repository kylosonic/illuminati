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
    <div className="p-6 lg:p-16 xl:p-32 max-w-7xl mx-auto animate-reveal space-y-20 lg:space-y-32 bg-bg-void relative">
      <div className="absolute inset-0 geometric-grid opacity-[0.02] pointer-events-none"></div>

      <header className="space-y-12 relative z-10">
        <div className="flex items-center gap-6">
          <div className="badge-pill">
            <Terminal className="w-3.5 h-3.5" /> SYSTEM_DIRECTIVES // TIER-1
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-end">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-none uppercase italic font-black" style={{ letterSpacing: '-0.05em' }}>Operational<br/><span className="text-accent-gold not-italic font-bold">Protocols.</span></h1>
            <p className="text-classified text-lg lg:text-xl font-serif italic max-w-2xl opacity-40 leading-relaxed lowercase">
              "Influence is the quietest power. We do not command the surface; we recalibrate the depths."
            </p>
          </div>
          <div className="flex flex-col items-end gap-4 opacity-20">
            <div className="w-32 h-px bg-accent-gold"></div>
            <div className="text-classified font-black tracking-[0.5em]">Synchronicity Index: 0.99</div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-blueprint relative z-10">
        {directives.map((dir, idx) => (
          <div 
            key={dir.id} 
            className="group p-8 lg:p-16 bg-bg-obsidian hover:bg-white/[0.01] transition-all duration-[1s] space-y-8 lg:space-y-12 relative overflow-hidden border border-transparent hover:border-accent-gold/20"
            style={{ animation: `reveal 0.6s ease forwards`, animationDelay: `${idx * 0.15}s`, opacity: 0 }}
          >
            <div className="absolute top-0 left-0 w-8 h-8 opacity-[0.05] group-hover:opacity-20 transition-opacity duration-[1s]">
              <Crosshair className="w-full h-full text-accent-gold" strokeWidth={0.5} />
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-accent-gold/5 border border-border-blueprint rounded-sm flex items-center justify-center text-dim group-hover:text-accent-gold transition-all duration-[1s] group-hover:rotate-45 shadow-xl group-hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <dir.icon className="w-8 h-8 lg:w-10 lg:h-10 group-hover:-rotate-45 transition-transform duration-[1s]" strokeWidth={1} />
              </div>
              <div className="flex items-center gap-3 lg:gap-4 border border-border-blueprint px-4 lg:px-6 py-2 rounded-sm bg-black/40">
                <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
                <span className="text-classified text-[11px] text-accent-gold font-black tracking-[0.3em] lg:tracking-[0.4em]">{dir.status}</span>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-2xl lg:text-4xl font-serif text-white group-hover:text-accent-gold transition-all duration-700 tracking-wider lg:tracking-widest uppercase font-black">{dir.title}</h3>
              <p className="text-classified text-sm lg:text-base leading-relaxed font-serif italic opacity-40 group-hover:opacity-100 group-hover:text-white transition-all duration-700 max-w-lg lowercase text-justify">
                {dir.description}
              </p>
            </div>

            <div className="pt-8 lg:pt-12 border-t border-border-blueprint flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity duration-[1s]">
              <span className="text-classified font-black tracking-[0.2em] lg:tracking-[0.3em] font-mono">OP_INDEX: {dir.id}</span>
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-accent-gold group-hover:translate-x-4 transition-transform duration-[1s]" strokeWidth={1} />
            </div>

            {/* Background Number */}
            <div className="absolute -bottom-10 -right-10 text-[8rem] lg:text-[12rem] font-black text-white/[0.01] group-hover:text-accent-gold/[0.02] pointer-events-none select-none tracking-tighter transition-colors duration-[2s]">
              {dir.id.split('-')[1] || 'X'}
            </div>
          </div>
        ))}
      </div>

      <footer className="pt-20 lg:pt-32 flex flex-col items-center gap-8 lg:gap-12 relative z-10">
        <div className="h-px w-32 bg-accent-gold opacity-20"></div>
        <div className="max-w-4xl text-center">
          <p className="text-classified opacity-20 font-serif lowercase text-lg lg:text-xl italic tracking-[0.1em] leading-relaxed">
            "Speak only what is necessary to advance the Design. Redundancy is a weakness. Sentiment is a flaw."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Directives;
