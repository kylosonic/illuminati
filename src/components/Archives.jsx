import React, { useState } from 'react';
import { FileText, Lock, ShieldAlert, Fingerprint, Search, Shield, ChevronRight } from 'lucide-react';

const Archives = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const files = [
    { id: 1, name: 'Architectural_Blueprints_Civilization_v4.pdf', type: 'doc', date: 'BCE_4402', status: 'UNREDACTED' },
    { id: 2, name: 'Sociological_Matrix_Recalibration.data', type: 'bin', date: '2024.11.12', status: 'ACTIVE' },
    { id: 3, name: 'Historical_Timeline_Correction_Log.txt', type: 'doc', date: '1914.06.28', status: 'LOCKED' },
    { id: 4, name: 'Asset_Transfer_Protocol_Alpha.key', type: 'key', date: '2026.03.16', status: 'ENCRYPTED' },
  ];

  return (
    <div className="p-6 lg:p-16 xl:p-32 max-w-7xl mx-auto animate-reveal space-y-20 lg:space-y-32 bg-bg-void relative">
      <div className="absolute inset-0 geometric-grid opacity-[0.02] pointer-events-none"></div>

      <header className="space-y-12 relative z-10">
        <div className="flex items-center gap-6">
          <div className="badge-pill">
            <Lock className="w-3.5 h-3.5" /> KNOWLEDGE_SUBSTRATE // TIER-1
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-none uppercase italic font-black" style={{ letterSpacing: '-0.05em' }}>The Vault of<br/><span className="text-accent-gold not-italic font-bold">Antiquity.</span></h1>
            <p className="text-classified text-lg lg:text-xl font-serif italic max-w-lg opacity-40 leading-relaxed lowercase">
              "Knowledge is the fulcrum upon which absolute power rests. Act in shadow, read in silence."
            </p>
          </div>
          
          <div className="p-8 lg:p-12 bg-accent-crimson/[0.03] border border-accent-crimson/20 rounded-sm space-y-6 lg:space-y-8 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldAlert className="w-20 h-20 lg:w-24 lg:h-24 text-accent-crimson" strokeWidth={0.5} />
            </div>
            <h4 className="text-accent-crimson font-mono text-xs font-black uppercase tracking-[0.4em] lg:tracking-[0.6em]">EYE-ONLY PROTOCOL</h4>
            <p className="text-classified font-mono text-[11px] leading-loose uppercase tracking-[0.1em] lg:tracking-[0.2em] font-black opacity-60">
              Historical matrices restricted. Unauthorized calibration of the unredacted past is a terminal offense.
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 lg:gap-20 relative z-10">
        <div className="xl:col-span-3 space-y-6 lg:space-y-10">
          <div className="hidden sm:flex items-center gap-12 px-6 lg:px-12 py-6 text-classified text-[11px] font-black uppercase tracking-[0.5em] lg:tracking-[0.8em] opacity-30 border-b border-border-blueprint">
            <span className="w-12 text-center">TYP</span>
            <span className="flex-1">IDENTIFIER</span>
            <span className="w-32 lg:w-48">ESTABLISHED</span>
            <span className="w-32 lg:w-48 text-right">STATE</span>
          </div>
          
          <div className="space-y-3 lg:space-y-4">
            {files.map((file, idx) => (
              <button
                key={file.id}
                onClick={() => setSelectedFile(file)}
                className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 lg:gap-12 px-6 lg:px-12 py-6 lg:py-10 bg-bg-obsidian border border-border-blueprint rounded-sm hover:bg-white/[0.01] hover:border-accent-gold/30 transition-all duration-[1s] group shadow-xl"
                style={{ animation: `reveal 0.5s ease forwards`, animationDelay: `${idx * 0.1}s`, opacity: 0 }}
              >
                <div className="w-12 flex justify-center hidden sm:flex">
                  {file.type === 'doc' ? 
                    <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-dim group-hover:text-accent-gold transition-all duration-[1s] group-hover:rotate-12" strokeWidth={1} /> : 
                    <Lock className="w-6 h-6 lg:w-8 lg:h-8 text-dim group-hover:text-accent-gold transition-all duration-[1s] group-hover:rotate-[-12deg]" strokeWidth={1} />
                  }
                </div>
                <span className="flex-1 text-left text-sm lg:text-lg font-serif italic text-white group-hover:text-accent-gold transition-all duration-[1s] font-black tracking-wider lg:tracking-widest uppercase">{file.name}</span>
                <span className="w-32 lg:w-48 text-xs text-dim font-mono group-hover:text-white transition-all duration-[1s] font-black tracking-widest">{file.date}</span>
                <div className="w-32 lg:w-48 flex sm:justify-end">
                  <span className={`px-4 lg:px-6 py-2 border text-[10px] font-mono font-black tracking-[0.3em] lg:tracking-[0.4em] ${file.status === 'UNREDACTED' ? 'bg-accent-gold/10 border-accent-gold/30 text-accent-gold' : 'bg-white/5 border-border-blueprint text-white/30 group-hover:text-white'}`}>
                    {file.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <aside className="space-y-12">
          <div className="p-8 lg:p-12 bg-bg-obsidian border border-border-blueprint rounded-sm space-y-12 lg:space-y-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-gold/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-[1.5s]"></div>
            <h3 className="text-accent-gold font-mono text-[10px] tracking-[0.6em] lg:tracking-[0.8em] uppercase font-black text-center">VAULT_UTILITIES</h3>
            <div className="space-y-4 lg:space-y-6">
              <button className="w-full py-5 lg:py-6 border border-border-blueprint text-inscription text-[10px] hover:border-accent-gold hover:text-accent-gold transition-all duration-700 font-black tracking-[0.3em] lg:tracking-[0.4em] flex items-center justify-center gap-4 lg:gap-6">
                <Search className="w-5 h-5" strokeWidth={1} /> DEEP_NEURAL_SCAN
              </button>
              <button className="w-full py-5 lg:py-6 border border-border-blueprint text-inscription text-[10px] hover:border-accent-crimson hover:text-accent-crimson transition-all duration-700 font-black tracking-[0.3em] lg:tracking-[0.4em]">
                CLEANSE_CACHE
              </button>
            </div>
            <div className="pt-8 lg:pt-12 border-t border-border-blueprint flex flex-col items-center gap-6 lg:gap-8">
              <Fingerprint className="w-12 h-12 lg:w-16 lg:h-16 text-white/[0.03] group-hover:text-accent-gold/[0.1] transition-all duration-[2s]" strokeWidth={0.5} />
              <div className="text-classified font-black tracking-[0.4em] lg:tracking-[0.6em] text-dim group-hover:text-accent-gold opacity-30 uppercase text-[9px]">Biometric_Lock_Active</div>
            </div>
          </div>
        </aside>
      </div>

      {selectedFile && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8 xl:p-24 bg-bg-void/98 backdrop-blur-3xl" style={{ animation: 'slow-focus 1.5s ease forwards' }}>
          <div className="w-full max-w-7xl h-full bg-bg-void border border-border-blueprint shadow-[0_50px_200px_rgba(0,0,0,1)] flex flex-col relative overflow-hidden">
            <div className="p-6 lg:p-16 border-b border-border-blueprint flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-bg-obsidian relative">
              <div className="flex items-center gap-6 lg:gap-10">
                <div className="w-4 h-4 bg-accent-gold rounded-sm rotate-45 animate-pulse shadow-[0_0_20px_rgba(212,175,55,1)]"></div>
                <span className="text-white font-serif text-xl lg:text-3xl italic tracking-tight uppercase font-black">{selectedFile.name}</span>
              </div>
              <button 
                onClick={() => setSelectedFile(null)} 
                className="px-8 lg:px-12 py-4 lg:py-5 border border-border-blueprint text-inscription text-[10px] tracking-[0.3em] lg:tracking-[0.5em] font-black hover:border-accent-gold transition-all duration-700"
              >
                CLOSE_ARCHIVE
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 lg:p-20 xl:p-40 space-y-16 lg:space-y-24 scroll-smooth custom-scrollbar relative">
              <div className="absolute inset-0 geometric-grid opacity-[0.01] pointer-events-none"></div>
              
              <div className="space-y-12 relative z-10">
                <div className="flex items-center gap-6 lg:gap-10">
                  <span className="text-accent-gold font-mono text-[12px] tracking-[0.4em] lg:tracking-[0.6em] font-black uppercase italic">ZERO-SUM_PROTOCOL_INTERNAL</span>
                  <div className="h-px flex-1 bg-border-blueprint opacity-20"></div>
                </div>
                <div className="space-y-4 lg:space-y-6">
                  <div className="h-6 w-full bg-white/[0.01] border border-border-blueprint/10 rounded-sm overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 bg-accent-gold/10 w-1/3" style={{ animation: 'shimmer 2s infinite' }}></div>
                  </div>
                  <div className="h-6 w-3/4 bg-white/[0.01] border border-border-blueprint/10 rounded-sm overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 bg-accent-gold/10 w-1/4" style={{ animation: 'shimmer 2s infinite 1.5s' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <p className="text-2xl lg:text-4xl font-serif text-white/80 leading-relaxed italic first-letter:text-7xl lg:first-letter:text-9xl first-letter:font-black first-letter:text-accent-gold first-letter:float-left first-letter:mr-6 lg:first-letter:mr-10 first-letter:mt-2 lg:first-letter:mt-4 first-letter:leading-none drop-shadow-2xl">
                  The transition of global hegemony requires meticulous oversight of the cultural narrative. As defined in the initial architecture, the masses are to be guided by the "Invisible Hand"—a construct of economic and social pressures that maintain stability through perceived choice.
                </p>
              </div>
              
              <div className="p-12 lg:p-24 border border-border-blueprint border-dashed rounded-sm text-center space-y-6 lg:space-y-8 relative z-10 opacity-40 hover:opacity-100 transition-opacity duration-[2s] group">
                <Lock className="w-10 h-10 lg:w-12 lg:h-12 text-accent-gold opacity-20 group-hover:opacity-100 transition-opacity duration-[2s] mx-auto" strokeWidth={0.5} />
                <p className="text-classified font-black text-[11px] lg:text-[12px] tracking-[0.5em] lg:tracking-[0.8em] uppercase italic">
                  Full Biometric Authorization Required for Deep Layer Access.
                </p>
              </div>
            </div>

            <div className="h-12 bg-bg-obsidian border-t border-border-blueprint flex items-center justify-center text-[8px] font-mono tracking-[0.5em] lg:tracking-[1em] text-accent-gold/20 uppercase font-black">
              Aeterne_Veritas_In_Umbra
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archives;
