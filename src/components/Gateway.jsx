import React, { useState, useEffect, useRef } from 'react';
import { Shield, Eye, Lock, Globe, Terminal, Activity, ArrowRight, Zap, Target, Users, ChevronRight, Sparkles, Star } from 'lucide-react';

const Gateway = ({ onAuthorize }) => {
  const [cipher, setCipher] = useState('');
  const [status, setStatus] = useState('IDLE');
  const [shutterOpen, setShutterOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  // Generate floating particles on mount
  useEffect(() => {
    const pts = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 30 + 20,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.05,
    }));
    setParticles(pts);
  }, []);

  const handleMouseMove = (e) => {
    const x = Math.round((e.clientX / window.innerWidth) * 100);
    const y = Math.round((e.clientY / window.innerHeight) * 100);
    setMousePos({ x, y });
  };

  const handleInitialize = () => {
    setShutterOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cipher) return;
    setStatus('SCANNING');
    setTimeout(() => {
      if (cipher === '33' || cipher.length > 5) {
        setStatus('AUTHORIZED');
        setTimeout(() => onAuthorize(), 1500);
      } else {
        setStatus('DENIED');
        setTimeout(() => setStatus('IDLE'), 2000);
      }
    }, 3000);
  };

  return (
    <div 
      className="min-h-screen bg-bg-void text-white font-sans relative overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
      style={{ cursor: 'crosshair' }}
    >
      {/* Animated Particle Constellation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-accent-gold"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animation: `float ${p.speed}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
        {/* Constellation Lines (subtle) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
          <line x1="30%" y1="40%" x2="60%" y2="25%" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
          <line x1="60%" y1="25%" x2="80%" y2="50%" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
          <line x1="80%" y1="50%" x2="70%" y2="75%" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
          <line x1="20%" y1="60%" x2="45%" y2="80%" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
          <line x1="45%" y1="80%" x2="75%" y2="70%" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Geometric Grid */}
      <div className="absolute inset-0 geometric-grid opacity-[0.03]"></div>
      
      {/* Radial Gold Ambient Light */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 600px 600px at ${mousePos.x}% ${mousePos.y}%, rgba(212, 175, 55, 0.03), transparent)`,
          transition: 'background 0.5s ease-out',
        }}
      />

      {/* Top Gold Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent"></div>

      {/* Shutter Component */}
      <div className={`fixed inset-0 z-[150] pointer-events-none`}>
        <div className={`absolute top-0 left-0 right-0 h-1/2 bg-bg-void border-b border-border-blueprint transition-transform duration-[2.5s] ease-[cubic-bezier(0.85,0,0.15,1)] ${shutterOpen ? '-translate-y-full' : 'translate-y-0'}`}>
          <div className="absolute bottom-10 left-10 text-classified font-black opacity-10">VAULT_SECTOR_01 // SECURE</div>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-bg-void border-t border-border-blueprint transition-transform duration-[2.5s] ease-[cubic-bezier(0.85,0,0.15,1)] ${shutterOpen ? 'translate-y-full' : 'translate-y-0'}`}>
          <div className="absolute top-10 right-10 text-classified font-black opacity-10 font-mono tracking-tighter">PHASE_04 // ORDER_FROM_CHAOS</div>
        </div>
      </div>

      {/* 1. INITIAL CEREMONIAL VIEW */}
      {!shutterOpen && (
        <div className="relative z-[160] text-center space-y-16 slow-reveal px-6">
          {/* Sacred Geometry Decoration */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 opacity-[0.04] pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="95" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.3" className="stencil-draw" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.3" className="stencil-draw" style={{ animationDelay: '0.5s' }} />
              <polygon points="100,10 190,150 10,150" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.3" className="stencil-draw" style={{ animationDelay: '1s' }} />
              <polygon points="100,190 10,50 190,50" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.3" className="stencil-draw" style={{ animationDelay: '1.5s' }} />
            </svg>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-px bg-accent-gold-muted"></div>
              <span className="text-inscription text-[10px] text-accent-gold font-black opacity-60">Architectural Vanguard</span>
              <div className="w-20 h-px bg-accent-gold-muted"></div>
            </div>
            
            {/* Eye of Providence */}
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20 flex items-center justify-center animate-float">
                <div className="absolute inset-0 border border-accent-gold/20 rounded-full animate-glow-pulse"></div>
                <Eye className="w-8 h-8 text-accent-gold opacity-60" strokeWidth={1} />
              </div>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-9xl font-serif text-white tracking-widest uppercase font-black animate-text-glow">
              OMNISCIENCE
            </h1>
            <p className="text-classified tracking-[0.5em] uppercase italic opacity-30 mt-4">
              Everything seen. Nothing known.
            </p>
          </div>

          {/* Recruitment Tagline */}
          <div className="space-y-4 max-w-lg mx-auto">
            <p className="text-secondary text-sm tracking-[0.2em] uppercase font-light leading-relaxed">
              The architects of tomorrow seek those who dare to see beyond the veil
            </p>
          </div>
           
          <button 
            onClick={handleInitialize}
            className="group relative px-12 py-6 border border-border-blueprint text-inscription text-xs hover:border-accent-gold transition-all duration-1000 overflow-hidden animate-glow-pulse"
          >
            <div className="absolute inset-0 bg-accent-gold/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000"></div>
            <span className="relative z-10 flex items-center gap-4 text-accent-gold/80 group-hover:text-accent-gold">
              Enter The Inner Sanctum <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-700" strokeWidth={1} />
            </span>
          </button>

          {/* Recruitment Stats */}
          <div className="flex items-center justify-center gap-12 mt-8 opacity-30">
            <div className="text-center">
              <div className="text-accent-gold font-mono text-lg font-bold">12,402</div>
              <div className="text-[8px] font-mono uppercase tracking-[0.3em] text-dim">Active Nodes</div>
            </div>
            <div className="w-px h-8 bg-border-blueprint"></div>
            <div className="text-center">
              <div className="text-accent-gold font-mono text-lg font-bold">247</div>
              <div className="text-[8px] font-mono uppercase tracking-[0.3em] text-dim">Years Active</div>
            </div>
            <div className="w-px h-8 bg-border-blueprint"></div>
            <div className="text-center">
              <div className="text-accent-gold font-mono text-lg font-bold">∞</div>
              <div className="text-[8px] font-mono uppercase tracking-[0.3em] text-dim">Influence</div>
            </div>
          </div>
        </div>
      )}

      {/* 2. THE VAULT TERMINAL */}
      {shutterOpen && (
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-6 py-20 slow-reveal">
          
          {/* Coordinate Metadata */}
          <div className="absolute top-10 left-10 space-y-2 text-classified text-[8px] opacity-20 hidden md:block">
            <div>PTR: {mousePos.x}_{mousePos.y}</div>
            <div>SEC: ALPHA_NULL</div>
            <div>TIM: 1776_2026</div>
          </div>

          <div className="w-full space-y-20">
            <div className="text-center space-y-6">
              <h2 className="text-inscription text-4xl md:text-6xl text-white font-light tracking-tight italic">
                The Great Work<br/>
                <span className="not-italic font-black text-accent-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]">Proceeds.</span>
              </h2>
              <div className="flex items-center justify-center gap-8">
                <div className="h-px w-12 bg-white/10"></div>
                <p className="text-classified uppercase italic opacity-40">Biometric resonance sync required</p>
                <div className="h-px w-12 bg-white/10"></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-16">
              <div className="relative group">
                <input
                  type="password"
                  value={cipher}
                  onChange={(e) => setCipher(e.target.value)}
                  className="w-full bg-transparent border-b border-border-blueprint text-accent-gold text-center py-8 text-5xl font-mono focus:outline-none focus:border-accent-gold transition-all duration-1000 placeholder:text-white/5 tracking-[0.6em]"
                  placeholder="••••••"
                  disabled={status === 'SCANNING' || status === 'AUTHORIZED'}
                />
                <div className="absolute -bottom-px left-0 right-0 h-px bg-accent-gold scale-x-0 group-focus-within:scale-x-100 transition-transform duration-[2s]"></div>
                
                {/* Decorative SVG */}
                <svg className="absolute -top-20 -left-20 w-40 h-40 opacity-[0.05] pointer-events-none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="stencil-draw" />
                  <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.2" />
                  <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" className="stencil-draw" style={{ animationDelay: '1s'}} />
                </svg>
              </div>

              <div className="space-y-10">
                <button
                  type="submit"
                  disabled={status !== 'IDLE'}
                  className={`w-full py-6 bg-bg-void border border-border-blueprint text-inscription text-[11px] font-black hover:border-accent-gold hover:text-accent-gold transition-all duration-700 relative overflow-hidden group ${status !== 'IDLE' ? 'opacity-50' : ''}`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-accent-gold/20"></div>
                  {status === 'IDLE' ? 'INITIATE NEURAL HANDSHAKE' : status}
                  <div className="absolute inset-x-0 bottom-0 h-px bg-accent-gold/20"></div>
                </button>
                
                <div className="flex justify-between items-center text-[8px] font-mono tracking-[0.4em] uppercase text-dim italic opacity-30">
                  <span>Symmetry Active</span>
                  <span>A=A</span>
                  <span>Silence Absolute</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SCANNING / AUTH STATUS OVERLAYS */}
      {(status === 'SCANNING' || status === 'AUTHORIZED') && (
        <div className="fixed inset-0 bg-bg-void z-[200] flex flex-col items-center justify-center space-y-12 backdrop-blur-3xl bg-black/95" style={{ animation: 'slow-focus 1s ease forwards' }}>
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute inset-0 border border-border-blueprint rounded-full"></div>
            <div className="absolute inset-0 border-t-2 border-accent-gold rounded-full animate-spin"></div>
            {/* Pulsing rings */}
            <div className="absolute inset-[-10px] border border-accent-gold/10 rounded-full" style={{ animation: 'pulse-ring 2s ease-out infinite' }}></div>
            <div className="absolute inset-[-25px] border border-accent-gold/5 rounded-full" style={{ animation: 'pulse-ring 2s ease-out infinite 0.5s' }}></div>
            <div className="w-1 h-1 bg-accent-gold rounded-full animate-pulse"></div>
          </div>
          <div className="text-center space-y-4">
            <span className="text-inscription text-xs text-accent-gold animate-pulse">
              {status === 'AUTHORIZED' ? 'Access Granted' : 'Synthesizing Intent...'}
            </span>
            <p className="text-classified text-[8px] italic opacity-30 uppercase tracking-[0.5em]">Identity dissolution in progress</p>
          </div>
        </div>
      )}

      {status === 'DENIED' && (
        <div className="fixed inset-0 bg-bg-void z-[200] flex flex-col items-center justify-center space-y-12 bg-black/98" style={{ animation: 'reveal 0.5s ease forwards' }}>
          <div className="p-16 border border-accent-crimson/30 rounded-full relative">
            <Shield className="w-20 h-20 text-accent-crimson animate-bounce" strokeWidth={0.5} />
            <div className="absolute inset-0 bg-accent-crimson/5 blur-3xl"></div>
          </div>
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif text-white tracking-widest uppercase italic font-black">Anomaly Detected</h2>
            <p className="text-classified text-accent-crimson/60 tracking-widest uppercase font-bold">Trace sequence initiated // Node quarantine active</p>
          </div>
        </div>
      )}

      {/* Bottom Metadata */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-7xl flex justify-between items-center px-12 text-classified text-[7px] font-black opacity-10 uppercase tracking-[0.8em] pointer-events-none">
        <span>Symmetry: Verified</span>
        <span>Architect Guild: Clandestine</span>
        <span>Matrix: Absolute</span>
      </div>
    </div>
  );
};

export default Gateway;
