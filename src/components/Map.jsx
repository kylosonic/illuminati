import React, { useState } from 'react';
import { Activity, ShieldAlert, Globe, Info, ChevronRight, BarChart3, Target, Crosshair } from 'lucide-react';

const Map = () => {
  const [hoveredSector, setHoveredSector] = useState(null);
  
  const sectors = [
    { id: 'NULL-A', name: 'SECTOR NULL-A', region: 'North America', desc: 'Primary Media Node / Technological Vanguard', coords: '220,120' },
    { id: 'NULL-B', name: 'SECTOR NULL-B', region: 'Western Europe', desc: 'Legislative Anchor / Historical Matrix', coords: '480,120' },
    { id: 'TESSERACT', name: 'SECTOR TESSERACT', region: 'Asia-Pacific', desc: 'Manufacturing Substrate / Population Density Core', coords: '780,180' },
    { id: 'AEGIS', name: 'SECTOR AEGIS', region: 'Eastern Europe/Northern Asia', desc: 'Energy Extraction / Strategic Buffer Zone', coords: '620,100' },
    { id: 'CRUCIBLE', name: 'SECTOR CRUCIBLE', region: 'Middle East/North Africa', desc: 'Controlled Volatility / Resource Tension Point', coords: '520,220' },
    { id: 'GENESIS', name: 'SECTOR GENESIS', region: 'Sub-Saharan Africa', desc: 'Unexploited Mineral Reserves / Future Expansion Grid', coords: '540,350' },
    { id: 'LEVIATHAN', name: 'SECTOR LEVIATHAN', region: 'South America', desc: 'Ecological Asset Vault / Agricultural Sub-system', coords: '300,350' },
  ];

  const metrics = [
    { label: 'COGNITIVE_DISSONANCE', value: 78.4, detail: 'Optimal suppressing.' },
    { label: 'NARRATIVE_SATURATION', value: 92.1, detail: 'Absolute coverage.' },
    { label: 'DISTRACTION_QUOTIENT', value: 88, detail: 'Loop sustained.' },
  ];

  return (
    <div className="flex flex-col xl:flex-row h-full overflow-hidden bg-bg-void relative">
      <div className="absolute inset-0 geometric-grid opacity-[0.03] pointer-events-none"></div>

      {/* Map Control Area */}
      <div className="flex-1 bg-bg-void relative overflow-hidden flex flex-col p-6 lg:p-12 xl:p-24 xl:border-r border-border-blueprint">
        
        <header className="relative z-10 mb-12 lg:mb-20 flex flex-col sm:flex-row justify-between items-start gap-6">
          <div className="space-y-6 lg:space-y-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-accent-gold/20"></div>
              <div className="text-classified font-black text-accent-gold uppercase tracking-[0.5em]">Global Telemetry // Live</div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-serif text-white uppercase italic font-black" style={{ letterSpacing: '-0.05em' }}>
              Asset<br/>
              <span className="text-accent-gold not-italic font-bold">Distribution.</span>
            </h2>
          </div>
          <div className="p-6 lg:p-8 border border-border-blueprint bg-black/40 flex flex-col items-end gap-2 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent-gold/[0.02] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[2s]"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-2 h-2 bg-accent-gold animate-ping rounded-full shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
              <span className="text-classified text-[10px] text-white/40 font-black tracking-widest uppercase">Nodes Online</span>
            </div>
            <span className="text-white font-mono text-2xl lg:text-3xl font-black tracking-tighter relative z-10">12,402</span>
          </div>
        </header>

        <div className="flex-1 relative flex items-center justify-center">
          {/* SVG Map */}
          <svg viewBox="0 0 1000 500" className="w-full max-w-6xl opacity-90 filter drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]">
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
                >
                  {/* Outer pulse ring when active */}
                  {isActive && (
                    <circle cx={cx} cy={cy} r="25" className="fill-none stroke-accent-gold/20" strokeWidth="1" style={{ animation: 'pulse-ring 1.5s ease-out infinite' }} />
                  )}
                  <circle cx={cx} cy={cy} r={isActive ? "20" : "12"} className="fill-accent-gold/5 stroke-accent-gold/10 transition-all duration-700" />
                  <circle cx={cx} cy={cy} r="2" className={`fill-accent-gold transition-all duration-500 ${isActive ? 'scale-[4]' : ''}`} style={isActive ? { filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.8))' } : {}} />
                  
                  <text 
                    x={cx} 
                    y={parseInt(cy) - 40} 
                    textAnchor="middle" 
                    className={`font-mono text-[11px] tracking-[0.5em] transition-all duration-1000 pointer-events-none uppercase font-black ${isActive ? 'fill-accent-gold opacity-100' : 'fill-white opacity-10'}`}
                  >
                    {sector.id}
                  </text>

                  <line x1={cx} y1={cy} x2="500" y2="250" stroke="var(--color-border-blueprint)" strokeWidth="0.5" className={`transition-all duration-1000 ${isActive ? 'opacity-100 stroke-accent-gold' : 'opacity-[0.05]'}`} />
                </g>
              );
            })}
          </svg>

          {/* Hover Tooltip */}
          {hoveredSector && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 lg:p-16 bg-black/95 backdrop-blur-3xl border border-border-blueprint rounded-sm w-[90%] max-w-[500px] pointer-events-none z-50 shadow-[0_50px_200px_rgba(0,0,0,0.9)] overflow-hidden" style={{ animation: 'reveal 0.5s ease forwards' }}>
              <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.05] -rotate-12 translate-x-8 -translate-y-8">
                <Crosshair className="w-full h-full text-accent-gold" strokeWidth={0.5} />
              </div>
              <div className="space-y-8 lg:space-y-10 relative z-10">
                <div className="flex justify-between items-center px-4 py-2 border-l border-accent-gold bg-accent-gold/5">
                  <span className="text-accent-gold font-mono text-[10px] tracking-[0.6em] uppercase font-black">{hoveredSector.id}</span>
                  <div className="h-0.5 w-8 bg-accent-gold opacity-20"></div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-white font-serif text-3xl lg:text-5xl tracking-tight leading-none italic font-black uppercase">{hoveredSector.region}</h3>
                  <p className="text-classified italic opacity-40 font-serif lowercase">Authorized calibration zone</p>
                </div>
                <div className="h-px w-full bg-border-blueprint"></div>
                <p className="text-secondary text-xs leading-relaxed tracking-[0.2em] uppercase font-mono font-bold opacity-80">
                  {hoveredSector.desc}
                </p>
                <div className="pt-4 lg:pt-6 space-y-4">
                  <div className="flex justify-between text-[10px] font-mono text-white/30 tracking-[0.4em] uppercase font-bold">
                    <span>Influence Efficiency</span>
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
      <aside className="w-full xl:w-[500px] 2xl:w-[600px] bg-bg-void p-6 lg:p-12 xl:p-24 flex flex-col overflow-y-auto relative border-t xl:border-t-0 xl:border-l border-border-blueprint">
        <div className="mb-16 lg:mb-24 space-y-12 lg:space-y-20">
          <header className="space-y-8">
            <div className="w-16 h-px bg-accent-gold"></div>
            <h2 className="text-3xl lg:text-4xl font-serif text-white leading-tight uppercase font-black" style={{ letterSpacing: '-0.05em' }}>Cerebral<br/><span className="text-accent-gold italic font-light">Telemetrics.</span></h2>
            <div className="text-classified tracking-[0.8em] font-black uppercase opacity-20">Analysis Division_04</div>
          </header>
          
          <div className="space-y-16 lg:space-y-24">
            {metrics.map((metric, idx) => (
              <div key={idx} className="group space-y-8 lg:space-y-10">
                <div className="flex justify-between items-end">
                  <div className="space-y-3">
                    <span className="text-[12px] text-white font-mono tracking-[0.5em] uppercase group-hover:text-accent-gold transition-colors font-black opacity-40 group-hover:opacity-100">{metric.label}</span>
                    <div className="text-[9px] text-accent-gold font-mono tracking-widest opacity-20 uppercase font-black">Statistical Balance: Observed</div>
                  </div>
                  <span className="text-3xl lg:text-4xl text-white font-mono font-light tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">{metric.value}%</span>
                </div>
                <div className="h-[1px] bg-border-blueprint w-full relative overflow-hidden group-hover:bg-accent-gold/10 transition-colors duration-1000">
                  <div 
                    className="h-full bg-accent-gold transition-all duration-[3s] ease-[cubic-bezier(0.16,1,0.3,1)]" 
                    style={{ width: `${metric.value}%`, boxShadow: '0 0 30px rgba(212,175,55,0.8)' }}
                  ></div>
                </div>
                <p className="text-[12px] text-secondary/40 font-serif italic leading-relaxed group-hover:text-secondary/70 transition-colors uppercase tracking-[0.2em] font-light">
                  // {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-16 lg:pt-24 border-t border-border-blueprint space-y-12 lg:space-y-16">
          <div className="p-8 lg:p-12 bg-accent-crimson/[0.03] border border-accent-crimson/20 rounded-sm group overflow-hidden relative transition-all duration-[1s] hover:bg-accent-crimson/[0.05] hover:border-accent-crimson/40 shadow-2xl">
            <div className="absolute -top-10 -right-10 p-4 opacity-[0.02] group-hover:opacity-10 transition-opacity duration-[2s]">
              <ShieldAlert className="w-48 h-48 text-accent-crimson" strokeWidth={0.5} />
            </div>
            <div className="relative z-10 space-y-6 lg:space-y-8">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="w-3 h-3 bg-accent-crimson rounded-full animate-ping shadow-[0_0_20px_rgba(220,38,38,1)]"></div>
                <span className="text-[11px] lg:text-[13px] text-accent-crimson font-mono uppercase tracking-[0.3em] lg:tracking-[0.5em] font-black">Vector_Alpha_Crisis</span>
              </div>
              <p className="text-[11px] font-mono text-white/40 uppercase tracking-[0.2em] leading-loose font-black text-justify">
                Localized narrative friction in Sector Null-B. Divergence from historical matrix detected. 
                <span className="text-accent-crimson block mt-4 lg:mt-6 border-t border-accent-crimson/20 pt-4 lg:pt-6">PACIFICATION PROTOCOL 04_INITIATED.</span>
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-center px-4 opacity-30">
            <div className="flex items-center gap-4 lg:gap-6 text-[11px] font-mono tracking-[0.3em] lg:tracking-[0.5em] text-white uppercase font-black">
              <Activity className="w-5 h-5 text-accent-gold" strokeWidth={1} />
              <span>Neural Sync</span>
            </div>
            <div className="flex items-center gap-2 lg:gap-4 text-[11px] font-mono tracking-[0.3em] lg:tracking-[0.5em] text-accent-gold uppercase font-black italic">
              <ChevronRight className="w-4 h-4" />
              +0.04° Convergence
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Map;
