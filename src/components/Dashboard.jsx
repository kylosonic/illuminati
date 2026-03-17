import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Archive, 
  MessageSquare, 
  Shield, 
  Terminal, 
  Activity, 
  Zap, 
  Target, 
  Eye, 
  Lock,
  ChevronRight,
  Fingerprint,
  Cpu,
  Share2,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import Map from './Map';
import Archives from './Archives';
import Communications from './Communications';
import Directives from './Directives';

const AnimatedNumber = ({ value, suffix = '' }) => {
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    const num = parseFloat(value);
    if (isNaN(num)) { setDisplay(value); return; }
    let start = 0;
    const end = num;
    const duration = 2000;
    const step = (end - start) / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { start = end; clearInterval(timer); }
      setDisplay(end % 1 !== 0 ? start.toFixed(1) : Math.round(start).toString());
    }, 16);
    return () => clearInterval(timer);
  }, [value]);
  return <>{display}{suffix}</>;
};

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('DASHBOARD');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'DASHBOARD', label: 'Command Node', icon: Terminal, desc: 'Central Matrix Control' },
    { id: 'MAP', label: 'Global Assets', icon: Globe, desc: 'Real-time Deployment' },
    { id: 'DIRECTIVES', label: 'Protocols', icon: Zap, desc: 'Active Interventions' },
    { id: 'VAULT', label: 'Archival Vault', icon: Archive, desc: 'Historical Recalibration' },
    { id: 'CHANNELS', label: 'Comms Link', icon: MessageSquare, desc: 'Zero-Knowledge Relay' },
  ];

  const coreMetrics = [
    { label: 'COGNITIVE_SYNC', value: '92.4', suffix: '%', detail: 'Variance Nominal', icon: Activity },
    { label: 'NARRATIVE_DENSITY', value: '0.84', suffix: '', detail: 'Saturation Delta: +0.02', icon: Share2 },
    { label: 'SYSTEM_COHERENCE', value: 'OPTIMAL', suffix: '', detail: 'Encryption Strength: Omniscient', icon: Cpu },
  ];

  return (
    <div className="h-screen h-[100dvh] bg-bg-void text-white flex overflow-hidden font-sans relative">
      <div className="absolute inset-0 geometric-grid opacity-[0.02] pointer-events-none"></div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:relative z-50 bg-bg-obsidian border-r border-border-blueprint transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col h-full
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isSidebarCollapsed ? 'lg:w-20 w-72' : 'w-72 lg:w-80'}
      `}>
        <div className="p-4 sm:p-6 lg:p-8 border-b border-border-blueprint flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-accent-gold/5 border border-border-blueprint rounded-sm flex items-center justify-center text-accent-gold rotate-45 shadow-[0_0_15px_rgba(212,175,55,0.1)] animate-glow-pulse shrink-0">
              <Shield className="w-4 h-4 lg:w-5 lg:h-5 -rotate-45" strokeWidth={1} />
            </div>
            {!isSidebarCollapsed && (
              <div className="space-y-0.5">
                <span className="text-inscription text-[9px] lg:text-[10px] tracking-wider lg:tracking-widest text-accent-gold font-black">ILLUMINATI</span>
                <div className="text-classified text-[6px] lg:text-[7px] uppercase tracking-[0.3em] lg:tracking-[0.5em] opacity-30">Tier-1 Authority</div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {/* Close sidebar on mobile */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-white/5 rounded-sm transition-colors lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5 text-accent-gold" />
            </button>
            {/* Collapse sidebar on desktop */}
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-2 hover:bg-white/5 rounded-full transition-colors opacity-30 hover:opacity-100 hidden lg:block"
            >
              <ChevronRight className={`w-4 h-4 transition-transform duration-700 ${isSidebarCollapsed ? 'rotate-0' : 'rotate-180'}`} strokeWidth={1} />
            </button>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto overflow-x-hidden p-3 lg:p-4 space-y-1 lg:space-y-2 py-4 lg:py-6">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
              className={`w-full group relative flex items-center gap-4 lg:gap-6 p-4 lg:p-4 transition-all duration-700 rounded-sm overflow-hidden min-h-[48px]
                ${activeTab === item.id ? 'bg-accent-gold/[0.03]' : 'hover:bg-white/[0.02]'}`}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-px bg-accent-gold transition-transform duration-700 ${activeTab === item.id ? 'scale-y-100' : 'scale-y-0'}`}></div>
              <item.icon className={`w-4 h-4 lg:w-5 lg:h-5 transition-all duration-700 shrink-0 ${activeTab === item.id ? 'text-accent-gold scale-110' : 'text-dim group-hover:text-white'}`} strokeWidth={activeTab === item.id ? 1.5 : 1} />
              
              {!isSidebarCollapsed && (
                <div className="text-left min-w-0">
                  <div className={`text-inscription text-[10px] lg:text-[11px] font-black transition-colors duration-700 truncate ${activeTab === item.id ? 'text-white' : 'text-secondary/60 group-hover:text-white'}`}>
                    {item.label}
                  </div>
                  <div className="text-classified text-[7px] lg:text-[8px] uppercase opacity-30 font-mono tracking-tighter truncate">
                    {item.desc}
                  </div>
                </div>
              )}
            </button>
          ))}
        </nav>

        <div className="p-3 lg:p-6 border-t border-border-blueprint space-y-4 lg:space-y-6 bg-black/40">
          {!isSidebarCollapsed && (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-classified text-[7px] lg:text-[8px] font-black uppercase tracking-wider lg:tracking-widest opacity-30">
                <span>Terminal Integrity</span>
                <span>100%</span>
              </div>
              <div className="h-0.5 bg-white/5 w-full relative overflow-hidden rounded-full">
                <div className="absolute inset-y-0 left-0 bg-accent-gold w-full animate-pulse opacity-40 rounded-full"></div>
              </div>
            </div>
          )}
          <button 
            onClick={onLogout}
            className="w-full py-4 lg:py-4 border border-border-blueprint text-inscription text-[9px] lg:text-[9px] hover:border-accent-crimson hover:text-accent-crimson transition-all duration-700 flex items-center justify-center gap-3 group min-h-[48px]"
          >
            <Lock className="w-3 h-3 lg:w-3.5 lg:h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" strokeWidth={1} /> 
            {!isSidebarCollapsed && 'Quarantine Node'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative w-full">
        {/* Top Header */}
        <header className="h-14 lg:h-24 border-b border-border-blueprint bg-black/20 backdrop-blur-3xl px-4 lg:px-12 flex items-center justify-between relative z-10 shrink-0">
          <div className="flex items-center gap-3 lg:gap-10">
            {/* Hamburger in header on mobile */}
            <button 
              className="p-2 border border-border-blueprint rounded-sm lg:hidden hover:border-accent-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5 text-dim" />
            </button>
            <div className="hidden md:flex items-center gap-3 text-classified text-[8px] lg:text-[9px] font-black uppercase tracking-[0.3em] lg:tracking-[0.6em] opacity-20">
              <span>Root</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-accent-gold opacity-100">{activeTab}</span>
            </div>
            {/* Mobile breadcrumb */}
            <span className="md:hidden text-accent-gold text-[9px] font-mono font-black uppercase tracking-wider">{activeTab}</span>
          </div>
          <div className="flex items-center gap-3 lg:gap-6">
            <div className="flex flex-col items-end">
              <div className="text-inscription text-[8px] lg:text-[10px] text-white font-black tracking-wider lg:tracking-widest">Architect Omega</div>
              <div className="text-classified text-[7px] lg:text-[8px] text-accent-gold font-mono tracking-tighter hidden sm:block">Session Valid: 04:59:59</div>
            </div>
            <div className="w-10 h-10 lg:w-10 lg:h-10 glass border-border-blueprint flex items-center justify-center group cursor-pointer hover:border-accent-gold transition-all duration-700 rounded-sm min-w-[44px] min-h-[44px]">
              <Fingerprint className="w-5 h-5 lg:w-5 lg:h-5 text-dim group-hover:text-accent-gold transition-colors" strokeWidth={1} />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar relative">
          {activeTab === 'DASHBOARD' && (
            <div className="p-4 sm:p-6 lg:p-16 xl:p-24 max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-32 slow-reveal">
              {/* Hero Stat */}
              <section className="space-y-8 sm:space-y-12 lg:space-y-16">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <div className="flex items-center gap-3 sm:gap-6">
                    <div className="badge-pill text-[8px] sm:text-[10px]">
                      <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> <span className="hidden sm:inline">COMMAND_MATRIX // V.4.0</span><span className="sm:hidden">CMD_MATRIX</span>
                    </div>
                    <div className="h-px flex-1 bg-border-blueprint opacity-30"></div>
                  </div>
                  <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-none uppercase italic font-black" style={{ letterSpacing: '-0.05em' }}>
                    Omniscient<br/>
                    <span className="not-italic text-accent-gold gold-shimmer bg-clip-text opacity-80">Authority.</span>
                  </h1>
                  <p className="text-classified text-sm sm:text-base lg:text-xl font-serif italic max-w-3xl opacity-40 leading-relaxed font-light lowercase">
                    "The surface is a carousel of distractions. We calibrate the inertia beneath."
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border-blueprint">
                  {coreMetrics.map((stat, idx) => (
                    <div key={idx} className="bg-bg-obsidian p-4 sm:p-6 lg:p-10 space-y-3 sm:space-y-4 lg:space-y-6 hover:bg-white/[0.01] transition-colors duration-1000 group">
                      <div className="flex justify-between items-start">
                        <div className="p-2 sm:p-3 bg-white/5 rounded-sm border border-border-blueprint text-dim group-hover:text-accent-gold transition-all duration-700 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                          <stat.icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1} />
                        </div>
                        <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-dim opacity-20 -rotate-90" />
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <div className="text-classified font-black opacity-30 text-[8px] sm:text-[10px]">{stat.label}</div>
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-mono text-white tracking-wider sm:tracking-widest font-black">
                          {stat.value === 'OPTIMAL' ? stat.value : <AnimatedNumber value={stat.value} suffix={stat.suffix} />}
                        </div>
                        <div className="text-classified italic opacity-20 text-[8px] sm:text-[10px]">{stat.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sub-Operational */}
              <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                  <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-inscription text-xl sm:text-2xl lg:text-4xl text-white font-light tracking-tight italic">Structural<br/>Symmetry.</h2>
                    <p className="text-classified text-xs sm:text-sm lg:text-base leading-relaxed opacity-30 font-serif italic lowercase max-w-xl">
                      Monitoring the interplay between shadow agencies and public narrative. Every variable is an instrument.
                    </p>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-10 border border-border-blueprint space-y-4 sm:space-y-6 relative group overflow-hidden hover:border-accent-gold/30 transition-all duration-1000">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent-gold"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent-gold"></div>
                    <div className="flex items-center gap-4 sm:gap-6">
                      <Activity className="w-8 h-8 sm:w-10 sm:h-10 text-accent-crimson opacity-20 animate-pulse shrink-0" strokeWidth={1} />
                      <div className="space-y-1 min-w-0">
                        <div className="text-classified font-black text-accent-gold text-[9px] sm:text-[10px] truncate">ANOMALY_LOG // SECTOR_4</div>
                        <p className="text-classified opacity-40 text-[9px] sm:text-[10px]">Narrative friction detected in European Legislative Loop.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square flex items-center justify-center p-8 hidden lg:flex">
                  <div className="absolute inset-0 border border-border-blueprint rounded-full opacity-10"></div>
                  <div className="absolute inset-16 border border-border-blueprint rounded-full opacity-5"></div>
                  <div className="relative w-full h-full border border-border-blueprint/20 mask-phi flex items-center justify-center">
                    <Globe className="w-3/4 h-3/4 text-white opacity-[0.03] animate-[spin_60s_linear_infinite]" strokeWidth={0.5} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Target className="w-10 h-10 text-accent-gold animate-pulse" strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
          {activeTab === 'MAP' && <Map />}
          {activeTab === 'DIRECTIVES' && <Directives />}
          {activeTab === 'VAULT' && <Archives />}
          {activeTab === 'CHANNELS' && <Communications />}
        </div>

        {/* Footer */}
        <footer className="h-10 lg:h-14 border-t border-border-blueprint bg-black px-4 lg:px-12 flex items-center justify-between text-classified text-[6px] sm:text-[7px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] lg:tracking-[0.8em] opacity-30 pointer-events-none relative z-10 shrink-0">
          <span>Terminal: Omniscient</span>
          <span className="hidden sm:inline">Architect: Tier-1</span>
          <span>Pulse: Active</span>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
