import React, { useState } from 'react';
import { Activity, ShieldAlert, Globe, Info, ChevronRight, BarChart3, Target, Crosshair } from 'lucide-react';

const Map = () => {
  const [hoveredSector, setHoveredSector] = useState(null);
  
  const sectors = [
    { id: 'NULL-A', name: 'SECTOR NULL-A', region: 'North America', desc: 'Primary media control node. Technological surveillance vanguard. Population sedation index: 96.2%.', coords: '220,120' },
    { id: 'NULL-B', name: 'SECTOR NULL-B', region: 'Western Europe', desc: 'Legislative manipulation anchor. Historical narrative falsification center. 1,400 assets embedded.', coords: '480,120' },
    { id: 'TESSERACT', name: 'SECTOR TESSERACT', region: 'East Asia', desc: 'Manufacturing substrate. Population density exploitation core. Social credit prototype zone.', coords: '780,180' },
    { id: 'AEGIS', name: 'SECTOR AEGIS', region: 'Russia / Northern Asia', desc: 'Energy extraction monopoly. Strategic buffer zone. Nuclear dead-hand integration active.', coords: '620,80' },
    { id: 'CRUCIBLE', name: 'SECTOR CRUCIBLE', region: 'Middle East', desc: 'Controlled volatility engine. Perpetual conflict sustainer. Resource tension maintained at 88%.', coords: '540,200' },
    { id: 'GENESIS', name: 'SECTOR GENESIS', region: 'Sub-Saharan Africa', desc: 'Unexploited mineral reserves. Experimental pharmaceutical deployment zone. Bloodline harvesting active.', coords: '520,330' },
    { id: 'LEVIATHAN', name: 'SECTOR LEVIATHAN', region: 'South America', desc: 'Ecological asset vault. Underground tunnel network HQ. Jungle laboratory complex operational.', coords: '300,330' },
    { id: 'NEPHILIM', name: 'SECTOR NEPHILIM', region: 'Central Asia', desc: 'Ancient artifact excavation zone. Six sealed gates monitored continuously. Seismic anomalies increasing.', coords: '660,160' },
    { id: 'BABEL', name: 'SECTOR BABEL', region: 'South Asia', desc: 'Linguistic fragmentation testing ground. 1.4 billion subjects under cognitive frequency modulation.', coords: '710,230' },
    { id: 'STYX', name: 'SECTOR STYX', region: 'Oceania / Pacific', desc: 'Deep-ocean facility network. Submarine cable interception hub. Underwater signal array broadcasting 6.66Hz.', coords: '850,340' },
    { id: 'MOLOCH', name: 'SECTOR MOLOCH', region: 'Central America', desc: 'Transit corridor for unmarked cargo. Underground ritual site maintenance. Pyramid frequency resonance active.', coords: '240,240' },
    { id: 'VOID-0', name: 'SECTOR VOID-0', region: 'Antarctica', desc: 'Subglacial research complex. Pre-human technology vault. Thermal anomaly 6.66°C above baseline detected.', coords: '500,450' },
    { id: '666', name: 'SECTOR 666', region: '[COORDINATES EXPUNGED]', desc: 'THE THRESHOLD. Dimensional boundary monitoring station. Containment integrity at 66.6%. DO NOT ENGAGE.', coords: '500,250' },
  ];

  const metrics = [
    { label: 'COGNITIVE_DISSONANCE', value: 78.4, detail: 'Optimal suppression achieved.' },
    { label: 'NARRATIVE_SATURATION', value: 92.1, detail: 'Absolute media coverage.' },
    { label: 'DISTRACTION_QUOTIENT', value: 88, detail: 'Behavioral loop sustained.' },
    { label: 'OBEDIENCE_INDEX', value: 66.6, detail: 'Threshold compliance nominal.' },
    { label: 'BLOODLINE_PURITY', value: 99.7, detail: 'Lineage integrity confirmed.' },
  ];

  return (
    <div className="flex flex-col xl:flex-row h-full overflow-auto xl:overflow-hidden bg-bg-void relative">
      <div className="absolute inset-0 geometric-grid opacity-[0.03] pointer-events-none"></div>

      {/* Map Area */}
      <div className="flex-1 bg-bg-void relative overflow-hidden flex flex-col p-4 sm:p-6 lg:p-12 xl:p-20">
        
        <header className="relative z-10 mb-6 sm:mb-10 lg:mb-16 flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-12 h-px bg-accent-gold/20"></div>
              <div className="text-classified font-black text-accent-gold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[8px] sm:text-[10px]">Global Telemetry // Live</div>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white uppercase italic font-black" style={{ letterSpacing: '-0.05em' }}>
              Asset<br/>
              <span className="text-accent-gold not-italic font-bold">Distribution.</span>
            </h2>
          </div>
          <div className="p-3 sm:p-6 border border-border-blueprint bg-black/40 flex flex-col items-end gap-1 shadow-2xl relative overflow-hidden group self-start">
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-2 h-2 bg-accent-gold animate-ping rounded-full shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
              <span className="text-classified text-[8px] sm:text-[10px] text-white/40 font-black tracking-wider sm:tracking-widest uppercase">Nodes Online</span>
            </div>
            <span className="text-white font-mono text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter relative z-10">12,402</span>
          </div>
        </header>

        <div className="flex-1 relative flex items-center justify-center min-h-[200px] sm:min-h-[300px]">
          <svg viewBox="0 0 1000 500" className="w-full max-w-6xl opacity-90">
            <path 
              fill="none" 
              stroke="var(--color-border-blueprint)" 
              strokeWidth="0.5" 
              d="M50,150 Q200,50 350,100 T600,80 T850,150 M100,350 Q250,450 450,380 T750,420 T950,350"
              className="stencil-draw opacity-20"
              strokeDasharray="10 10"
            />
            
            {sectors.map((sector) => {
              const [cx, cy] = sector.coords.split(',');
              const isActive = hoveredSector?.id === sector.id;
              return (
                <g 
                  key={sector.id} 
                  className="cursor-pointer group"
                  onMouseEnter={() => setHoveredSector(sector)}
                  onMouseLeave={() => setHoveredSector(null)}
                  onClick={() => setHoveredSector(hoveredSector?.id === sector.id ? null : sector)}
                >
                  {/* Invisible touch target */}
                  <circle cx={cx} cy={cy} r="30" className="fill-transparent" />
                  {isActive && (
                    <circle cx={cx} cy={cy} r="25" className="fill-none stroke-accent-gold/20" strokeWidth="1" style={{ animation: 'pulse-ring 1.5s ease-out infinite' }} />
                  )}
                  <circle cx={cx} cy={cy} r={isActive ? "18" : "12"} className="fill-accent-gold/5 stroke-accent-gold/10 transition-all duration-700" />
                  <circle cx={cx} cy={cy} r="4" className={`fill-accent-gold transition-all duration-500 ${isActive ? 'scale-[3]' : ''}`} style={isActive ? { filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.8))' } : {}} />
                  
                  <text 
                    x={cx} 
                    y={parseInt(cy) - 30} 
                    textAnchor="middle" 
                    className={`font-mono text-[9px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.5em] transition-all duration-1000 pointer-events-none uppercase font-black ${isActive ? 'fill-accent-gold opacity-100' : 'fill-white opacity-10'}`}
                  >
                    {sector.id}
                  </text>

                  <line x1={cx} y1={cy} x2="500" y2="250" stroke="var(--color-border-blueprint)" strokeWidth="0.5" className={`transition-all duration-1000 ${isActive ? 'opacity-100 stroke-accent-gold' : 'opacity-[0.05]'}`} />
                </g>
              );
            })}
          </svg>

          {/* Tooltip - positioned differently on mobile */}
          {hoveredSector && (
            <div className="absolute bottom-0 left-0 right-0 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:bottom-auto sm:right-auto p-4 sm:p-10 bg-black/95 backdrop-blur-3xl border border-border-blueprint rounded-sm sm:w-[90%] sm:max-w-[440px] pointer-events-none z-50 shadow-[0_50px_200px_rgba(0,0,0,0.9)] overflow-hidden" style={{ animation: 'reveal 0.3s ease forwards' }}>
              <div className="space-y-3 sm:space-y-6 relative z-10">
                <div className="flex justify-between items-center px-2 sm:px-4 py-1.5 border-l-2 border-accent-gold bg-accent-gold/5">
                  <span className="text-accent-gold font-mono text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.6em] uppercase font-black">{hoveredSector.id}</span>
                </div>
                <h3 className="text-white font-serif text-xl sm:text-3xl tracking-tight leading-none italic font-black uppercase">{hoveredSector.region}</h3>
                <p className="text-secondary text-[10px] sm:text-xs leading-relaxed tracking-[0.1em] sm:tracking-[0.2em] uppercase font-mono font-bold opacity-80">
                  {hoveredSector.desc}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-[9px] sm:text-[10px] font-mono text-white/30 tracking-[0.2em] sm:tracking-[0.4em] uppercase font-bold">
                    <span>Influence</span>
                    <span className="text-accent-gold">84%</span>
                  </div>
                  <div className="h-px bg-border-blueprint w-full relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-accent-gold w-[84%] opacity-60" style={{ boxShadow: '0 0 15px rgba(212,175,55,0.5)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Analysis Sidebar */}
      <aside className="w-full xl:w-[420px] 2xl:w-[500px] bg-bg-void p-4 sm:p-6 lg:p-12 xl:p-16 flex flex-col overflow-y-auto relative border-t xl:border-t-0 xl:border-l border-border-blueprint">
        <div className="mb-8 sm:mb-12 lg:mb-16 space-y-8 sm:space-y-12">
          <header className="space-y-4 sm:space-y-6">
            <div className="w-12 h-px bg-accent-gold"></div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white leading-tight uppercase font-black" style={{ letterSpacing: '-0.05em' }}>Cerebral<br/><span className="text-accent-gold italic font-light">Telemetrics.</span></h2>
            <div className="text-classified tracking-[0.4em] sm:tracking-[0.8em] font-black uppercase opacity-20 text-[8px] sm:text-[10px]">Analysis Division_04</div>
          </header>
          
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {metrics.map((metric, idx) => (
              <div key={idx} className="group space-y-4 sm:space-y-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-1 sm:space-y-2 min-w-0 flex-1 mr-4">
                    <span className="text-[10px] sm:text-[12px] text-white font-mono tracking-[0.2em] sm:tracking-[0.5em] uppercase group-hover:text-accent-gold transition-colors font-black opacity-40 group-hover:opacity-100 block truncate">{metric.label}</span>
                    <div className="text-[8px] text-accent-gold font-mono tracking-wider opacity-20 uppercase font-black hidden sm:block">Statistical Balance: Observed</div>
                  </div>
                  <span className="text-2xl sm:text-3xl text-white font-mono font-light tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity shrink-0">{metric.value}%</span>
                </div>
                <div className="h-[1px] bg-border-blueprint w-full relative overflow-hidden group-hover:bg-accent-gold/10 transition-colors duration-1000">
                  <div 
                    className="h-full bg-accent-gold transition-all duration-[3s] ease-[cubic-bezier(0.16,1,0.3,1)]" 
                    style={{ width: `${metric.value}%`, boxShadow: '0 0 30px rgba(212,175,55,0.8)' }}
                  ></div>
                </div>
                <p className="text-[10px] sm:text-[12px] text-secondary/40 font-serif italic leading-relaxed group-hover:text-secondary/70 transition-colors uppercase tracking-[0.1em] sm:tracking-[0.2em] font-light">
                  // {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-8 sm:pt-12 border-t border-border-blueprint space-y-6 sm:space-y-10">
          <div className="p-4 sm:p-8 bg-accent-crimson/[0.03] border border-accent-crimson/20 rounded-sm group overflow-hidden relative transition-all duration-[1s] hover:bg-accent-crimson/[0.05] shadow-2xl">
            <div className="absolute -top-10 -right-10 p-4 opacity-[0.02] group-hover:opacity-10 transition-opacity duration-[2s]">
              <ShieldAlert className="w-32 h-32 sm:w-48 sm:h-48 text-accent-crimson" strokeWidth={0.5} />
            </div>
            <div className="relative z-10 space-y-3 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-2.5 h-2.5 bg-accent-crimson rounded-full animate-ping shadow-[0_0_20px_rgba(220,38,38,1)]"></div>
                <span className="text-[10px] sm:text-[12px] text-accent-crimson font-mono uppercase tracking-[0.2em] sm:tracking-[0.4em] font-black">Vector_Alpha_Crisis</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-mono text-white/40 uppercase tracking-[0.1em] sm:tracking-[0.2em] leading-relaxed font-black">
                Localized narrative friction in Sector Null-B. 
                <span className="text-accent-crimson block mt-3 border-t border-accent-crimson/20 pt-3">PACIFICATION PROTOCOL 04_INITIATED.</span>
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-center px-2 opacity-30">
            <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.4em] text-white uppercase font-black">
              <Activity className="w-4 h-4 text-accent-gold" strokeWidth={1} />
              <span>Neural Sync</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] sm:tracking-[0.4em] text-accent-gold uppercase font-black italic">
              <ChevronRight className="w-3 h-3" />
              +0.04°
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Map;
