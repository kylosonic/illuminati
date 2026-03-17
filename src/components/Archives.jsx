import React, { useState } from 'react';
import { FileText, Lock, ShieldAlert, Fingerprint, Search, Shield, ChevronRight } from 'lucide-react';

const Archives = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const files = [
    { id: 1, name: 'Sumerian_Binding_Ritual_Tablet_Zero.clay', shortName: 'Binding_Tablet_0.clay', type: 'bin', date: 'BCE_6660', status: 'LOCKED' },
    { id: 2, name: 'Architectural_Blueprints_Civilization_v4.pdf', shortName: 'Blueprints_Civ_v4.pdf', type: 'doc', date: 'BCE_4402', status: 'UNREDACTED' },
    { id: 3, name: 'Bloodline_Registry_Nephilim_Descendants.gen', shortName: 'Nephilim_Registry.gen', type: 'bin', date: 'BCE_3100', status: 'ENCRYPTED' },
    { id: 4, name: 'Solomon_Key_66_Seals_of_Binding.hex', shortName: 'Solomon_66_Seals.hex', type: 'key', date: 'BCE_0966', status: 'LOCKED' },
    { id: 5, name: 'Roman_Collapse_Internal_Directive.txt', shortName: 'Rome_Collapse.txt', type: 'doc', date: '0476.09.04', status: 'UNREDACTED' },
    { id: 6, name: 'Black_Plague_Deployment_Schema_EU.data', shortName: 'Plague_Schema.data', type: 'bin', date: '1347.10.01', status: 'ACTIVE' },
    { id: 7, name: 'Great_Fire_London_Sector_666_Report.log', shortName: 'Fire_666_Report.log', type: 'doc', date: '1666.09.02', status: 'UNREDACTED' },
    { id: 8, name: 'Bavarian_Order_Charter_Original.pdf', shortName: 'Bavarian_Charter.pdf', type: 'doc', date: '1776.05.01', status: 'UNREDACTED' },
    { id: 9, name: 'Archduke_Assassination_Pre-Authorization.key', shortName: 'Archduke_PreAuth.key', type: 'key', date: '1914.06.28', status: 'LOCKED' },
    { id: 10, name: 'Bretton_Woods_Shadow_Amendment.pdf', shortName: 'Bretton_Shadow.pdf', type: 'doc', date: '1944.07.22', status: 'ACTIVE' },
    { id: 11, name: 'MKUltra_Phase_VI_Subliminal_Grid.bin', shortName: 'MKUltra_VI.bin', type: 'bin', date: '1966.06.06', status: 'ENCRYPTED' },
    { id: 12, name: 'Human_Genome_Tampering_Protocol_v6.6.data', shortName: 'Genome_v6.6.data', type: 'bin', date: '1990.10.01', status: 'ACTIVE' },
    { id: 13, name: 'Sociological_Matrix_Recalibration.data', shortName: 'Matrix_Recal.data', type: 'bin', date: '2001.09.10', status: 'ACTIVE' },
    { id: 14, name: 'HAARP_Frequency_Modulation_666Hz.wav', shortName: 'HAARP_666Hz.wav', type: 'bin', date: '2010.01.12', status: 'ENCRYPTED' },
    { id: 15, name: 'Pandemic_Narrative_Architecture_v3.pdf', shortName: 'Pandemic_v3.pdf', type: 'doc', date: '2019.08.15', status: 'ACTIVE' },
    { id: 16, name: 'Digital_Currency_Enslavement_Matrix.key', shortName: 'CBDC_Matrix.key', type: 'key', date: '2024.11.12', status: 'ENCRYPTED' },
    { id: 17, name: 'Predictive_Collapse_Algorithm_2030.exe', shortName: 'Collapse_2030.exe', type: 'bin', date: '2026.06.06', status: 'LOCKED' },
    { id: 18, name: 'Entity_666_Containment_Breach_Log.err', shortName: 'Entity_666.err', type: 'bin', date: '2027.06.66', status: 'LOCKED' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-12 xl:p-24 max-w-7xl mx-auto animate-reveal space-y-8 sm:space-y-12 lg:space-y-24 bg-bg-void relative">
      <div className="absolute inset-0 geometric-grid opacity-[0.02] pointer-events-none"></div>

      <header className="space-y-6 sm:space-y-8 relative z-10">
        <div className="flex items-center gap-4">
          <div className="badge-pill text-[8px] sm:text-[10px]">
            <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> <span className="hidden sm:inline">KNOWLEDGE_SUBSTRATE // TIER-1</span><span className="sm:hidden">ARCHIVES</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-end">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-white leading-none uppercase italic font-black" style={{ letterSpacing: '-0.05em' }}>The Vault of<br/><span className="text-accent-gold not-italic font-bold">Antiquity.</span></h1>
            <p className="text-classified text-xs sm:text-base lg:text-lg font-serif italic max-w-lg opacity-40 leading-relaxed lowercase hidden sm:block">
              "Knowledge is the fulcrum upon which absolute power rests."
            </p>
          </div>
          
          <div className="p-4 sm:p-6 lg:p-8 bg-accent-crimson/[0.03] border border-accent-crimson/20 rounded-sm space-y-3 sm:space-y-4 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <ShieldAlert className="w-12 h-12 sm:w-16 sm:h-16 text-accent-crimson" strokeWidth={0.5} />
            </div>
            <h4 className="text-accent-crimson font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.5em]">EYE-ONLY PROTOCOL</h4>
            <p className="text-classified font-mono text-[10px] sm:text-[11px] leading-relaxed uppercase tracking-[0.1em] font-black opacity-60">
              Historical matrices restricted. Unauthorized access is a terminal offense.
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 relative z-10">
        <div className="xl:col-span-3 space-y-3 sm:space-y-4">
          {/* Table header - hidden on mobile */}
          <div className="hidden md:flex items-center gap-6 px-4 sm:px-8 py-4 text-classified text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] opacity-30 border-b border-border-blueprint">
            <span className="w-10 text-center">TYP</span>
            <span className="flex-1">IDENTIFIER</span>
            <span className="w-28">DATE</span>
            <span className="w-28 text-right">STATE</span>
          </div>
          
          <div className="space-y-2 sm:space-y-3">
            {files.map((file, idx) => (
              <button
                key={file.id}
                onClick={() => setSelectedFile(file)}
                className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 p-4 sm:p-4 lg:p-6 bg-bg-obsidian border border-border-blueprint rounded-sm hover:bg-white/[0.01] hover:border-accent-gold/30 transition-all duration-[1s] group shadow-lg text-left min-h-[52px]"
                style={{ animation: `reveal 0.5s ease forwards`, animationDelay: `${idx * 0.1}s`, opacity: 0 }}
              >
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {file.type === 'doc' ? 
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-dim group-hover:text-accent-gold transition-all duration-[1s] shrink-0" strokeWidth={1} /> : 
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-dim group-hover:text-accent-gold transition-all duration-[1s] shrink-0" strokeWidth={1} />
                  }
                  {/* Short name on mobile, full on desktop */}
                  <span className="sm:hidden text-xs font-serif italic text-white group-hover:text-accent-gold transition-all duration-[1s] font-black tracking-wider uppercase truncate">{file.shortName}</span>
                  <span className="hidden sm:inline flex-1 text-sm lg:text-base font-serif italic text-white group-hover:text-accent-gold transition-all duration-[1s] font-black tracking-wider uppercase truncate">{file.name}</span>
                  
                  {/* Status badge inline on mobile */}
                  <span className={`sm:hidden ml-auto px-2 py-0.5 border text-[8px] font-mono font-black tracking-[0.2em] shrink-0 ${file.status === 'UNREDACTED' ? 'bg-accent-gold/10 border-accent-gold/30 text-accent-gold' : 'bg-white/5 border-border-blueprint text-white/30'}`}>
                    {file.status}
                  </span>
                </div>
                
                {/* Desktop: date and status */}
                <span className="hidden sm:inline w-28 text-xs text-dim font-mono group-hover:text-white transition-all duration-[1s] font-black tracking-wider shrink-0">{file.date}</span>
                <div className="hidden sm:flex w-28 justify-end shrink-0">
                  <span className={`px-3 py-1 border text-[9px] font-mono font-black tracking-[0.2em] sm:tracking-[0.3em] ${file.status === 'UNREDACTED' ? 'bg-accent-gold/10 border-accent-gold/30 text-accent-gold' : 'bg-white/5 border-border-blueprint text-white/30 group-hover:text-white'}`}>
                    {file.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <aside className="space-y-6 sm:space-y-8">
          <div className="p-4 sm:p-6 lg:p-8 bg-bg-obsidian border border-border-blueprint rounded-sm space-y-6 sm:space-y-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-gold/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-[1.5s]"></div>
            <h3 className="text-accent-gold font-mono text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.6em] uppercase font-black text-center">VAULT_UTILITIES</h3>
            <div className="space-y-3">
              <button className="w-full py-4 sm:py-4 border border-border-blueprint text-inscription text-[10px] sm:text-[10px] hover:border-accent-gold hover:text-accent-gold transition-all duration-700 font-black tracking-[0.2em] sm:tracking-[0.3em] flex items-center justify-center gap-3 min-h-[48px]">
                <Search className="w-4 h-4" strokeWidth={1} /> NEURAL_SCAN
              </button>
              <button className="w-full py-4 sm:py-4 border border-border-blueprint text-inscription text-[10px] sm:text-[10px] hover:border-accent-crimson hover:text-accent-crimson transition-all duration-700 font-black tracking-[0.2em] sm:tracking-[0.3em] min-h-[48px]">
                CLEANSE_CACHE
              </button>
            </div>
            <div className="pt-6 border-t border-border-blueprint flex flex-col items-center gap-4">
              <Fingerprint className="w-10 h-10 sm:w-12 sm:h-12 text-white/[0.03] group-hover:text-accent-gold/[0.1] transition-all duration-[2s]" strokeWidth={0.5} />
              <div className="text-classified font-black tracking-[0.3em] sm:tracking-[0.5em] text-dim group-hover:text-accent-gold opacity-30 uppercase text-[8px] sm:text-[9px]">Biometric_Lock</div>
            </div>
          </div>
        </aside>
      </div>

      {/* File Modal */}
      {selectedFile && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4 lg:p-8 bg-bg-void/98 backdrop-blur-3xl" style={{ animation: 'slow-focus 1s ease forwards' }}>
          <div className="w-full sm:max-w-4xl h-[85vh] sm:h-[80vh] bg-bg-void border border-border-blueprint shadow-[0_50px_200px_rgba(0,0,0,1)] flex flex-col relative overflow-hidden rounded-t-lg sm:rounded-lg">
            <div className="p-3 sm:p-6 lg:p-8 border-b border-border-blueprint flex justify-between items-center bg-bg-obsidian relative shrink-0">
              <div className="flex items-center gap-3 sm:gap-6 min-w-0 flex-1 mr-4">
                <div className="w-3 h-3 bg-accent-gold rounded-sm rotate-45 animate-pulse shadow-[0_0_20px_rgba(212,175,55,1)] shrink-0"></div>
                <span className="text-white font-serif text-sm sm:text-xl italic tracking-tight uppercase font-black truncate">{selectedFile.shortName}</span>
              </div>
              <button 
                onClick={() => setSelectedFile(null)} 
                className="px-6 sm:px-8 py-3 sm:py-3 border border-border-blueprint text-inscription text-[10px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.4em] font-black hover:border-accent-gold transition-all duration-700 shrink-0 min-h-[44px]"
              >
                CLOSE
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-16 space-y-8 sm:space-y-12 scroll-smooth custom-scrollbar relative">
              <div className="absolute inset-0 geometric-grid opacity-[0.01] pointer-events-none"></div>
              
              <div className="space-y-4 sm:space-y-6 relative z-10">
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-accent-gold font-mono text-[10px] sm:text-[12px] tracking-[0.3em] sm:tracking-[0.5em] font-black uppercase italic">ZERO-SUM_PROTOCOL</span>
                  <div className="h-px flex-1 bg-border-blueprint opacity-20"></div>
                </div>
              </div>
              
              <div className="relative z-10">
                <p className="text-base sm:text-xl lg:text-3xl font-serif text-white/80 leading-relaxed italic first-letter:text-4xl sm:first-letter:text-6xl lg:first-letter:text-8xl first-letter:font-black first-letter:text-accent-gold first-letter:float-left first-letter:mr-3 sm:first-letter:mr-6 first-letter:mt-1 sm:first-letter:mt-2 first-letter:leading-none">
                  The transition of global hegemony requires meticulous oversight of the cultural narrative. As defined in the initial architecture, the masses are to be guided by the "Invisible Hand"—a construct of economic and social pressures that maintain stability through perceived choice.
                </p>
              </div>
              
              <div className="p-6 sm:p-12 border border-border-blueprint border-dashed rounded-sm text-center space-y-3 sm:space-y-6 relative z-10 opacity-40 hover:opacity-100 transition-opacity duration-[2s] group">
                <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-accent-gold opacity-20 group-hover:opacity-100 transition-opacity duration-[2s] mx-auto" strokeWidth={0.5} />
                <p className="text-classified font-black text-[9px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.6em] uppercase italic">
                  Full Authorization Required For Deep Access.
                </p>
              </div>
            </div>

            <div className="h-10 bg-bg-obsidian border-t border-border-blueprint flex items-center justify-center text-[7px] sm:text-[8px] font-mono tracking-[0.3em] sm:tracking-[0.6em] text-accent-gold/20 uppercase font-black shrink-0">
              Aeterne_Veritas
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archives;
