import React, { useState, useEffect, useRef } from 'react';
import { Shield, Eye, Lock, Globe, Terminal, Activity, ArrowRight, Zap, Target, Users, ChevronRight, Sparkles, Star } from 'lucide-react';

const Gateway = ({ onAuthorize }) => {
  const [cipher, setCipher] = useState('');
  const [status, setStatus] = useState('IDLE');
  const [shutterOpen, setShutterOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const pts = Array.from({ length: 30 }, (_, i) => ({
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
      className="min-h-screen min-h-[100dvh] bg-bg-void text-white font-sans relative overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
      style={{ cursor: 'crosshair' }}
    >
      {/* Particle Background */}
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
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] hidden sm:block" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
          <line x1="30%" y1="40%" x2="60%" y2="25%" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
          <line x1="60%" y1="25%" x2="80%" y2="50%" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="absolute inset-0 geometric-grid opacity-[0.03]"></div>
      
      {/* Radial Gold Light (desktop only) */}
      <div className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background: `radial-gradient(ellipse 600px 600px at ${mousePos.x}% ${mousePos.y}%, rgba(212, 175, 55, 0.03), transparent)`,
          transition: 'background 0.5s ease-out',
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent"></div>

      {/* Shutter */}
      <div className="fixed inset-0 z-[150] pointer-events-none">
        <div className={`absolute top-0 left-0 right-0 h-1/2 bg-bg-void border-b border-border-blueprint transition-transform duration-[2.5s] ease-[cubic-bezier(0.85,0,0.15,1)] ${shutterOpen ? '-translate-y-full' : 'translate-y-0'}`}>
          <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 text-classified font-black opacity-10 text-[7px] sm:text-[10px]">VAULT_SECTOR_01 // SECURE</div>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-1/2 bg-bg-void border-t border-border-blueprint transition-transform duration-[2.5s] ease-[cubic-bezier(0.85,0,0.15,1)] ${shutterOpen ? 'translate-y-full' : 'translate-y-0'}`}>
          <div className="absolute top-4 right-4 sm:top-10 sm:right-10 text-classified font-black opacity-10 font-mono tracking-tighter text-[7px] sm:text-[10px]">PHASE_04 // ORDER_FROM_CHAOS</div>
        </div>
      </div>

      {/* 1. INITIAL CEREMONIAL VIEW */}
      {!shutterOpen && (
        <div className="relative z-[160] text-center space-y-8 sm:space-y-12 md:space-y-16 slow-reveal px-4 sm:px-6 w-full max-w-4xl">
          {/* Sacred Geometry (hidden on small mobile) */}
          <div className="absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 w-40 sm:w-64 h-40 sm:h-64 opacity-[0.04] pointer-events-none hidden sm:block">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="95" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.3" className="stencil-draw" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.3" className="stencil-draw" style={{ animationDelay: '0.5s' }} />
              <polygon points="100,10 190,150 10,150" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.3" className="stencil-draw" style={{ animationDelay: '1s' }} />
            </svg>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="w-8 sm:w-20 h-px bg-accent-gold-muted"></div>
              <span className="text-inscription text-[8px] sm:text-[10px] text-accent-gold font-black opacity-60">Architectural Vanguard</span>
              <div className="w-8 sm:w-20 h-px bg-accent-gold-muted"></div>
            </div>
            
            {/* Eye of Providence */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center animate-float">
                <div className="absolute inset-0 border border-accent-gold/20 rounded-full animate-glow-pulse"></div>
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-accent-gold opacity-60" strokeWidth={1} />
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-serif text-white tracking-[0.1em] sm:tracking-widest uppercase font-black animate-text-glow">
              OMNISCIENCE
            </h1>
            <p className="text-classified tracking-[0.3em] sm:tracking-[0.5em] uppercase italic opacity-30 mt-2 sm:mt-4 text-[8px] sm:text-[10px]">
              Everything seen. Nothing known.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 max-w-lg mx-auto px-4">
            <p className="text-secondary text-[11px] sm:text-sm tracking-[0.1em] sm:tracking-[0.2em] uppercase font-light leading-relaxed">
              The architects of tomorrow seek those who dare to see beyond the veil
            </p>
          </div>
           
          <button 
            onClick={handleInitialize}
            className="group relative px-6 sm:px-12 py-4 sm:py-6 border border-border-blueprint text-inscription text-[9px] sm:text-xs hover:border-accent-gold transition-all duration-1000 overflow-hidden animate-glow-pulse"
          >
            <div className="absolute inset-0 bg-accent-gold/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000"></div>
            <span className="relative z-10 flex items-center gap-3 sm:gap-4 text-accent-gold/80 group-hover:text-accent-gold">
              Enter The Inner Sanctum <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform duration-700" strokeWidth={1} />
            </span>
          </button>

          {/* Recruitment Stats */}
          <div className="flex items-center justify-center gap-6 sm:gap-12 mt-6 sm:mt-8 opacity-30">
            <div className="text-center">
              <div className="text-accent-gold font-mono text-sm sm:text-lg font-bold">12,402</div>
              <div className="text-[7px] sm:text-[8px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-dim">Active Nodes</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-border-blueprint"></div>
            <div className="text-center">
              <div className="text-accent-gold font-mono text-sm sm:text-lg font-bold">247</div>
              <div className="text-[7px] sm:text-[8px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-dim">Years Active</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-border-blueprint"></div>
            <div className="text-center">
              <div className="text-accent-gold font-mono text-sm sm:text-lg font-bold">∞</div>
              <div className="text-[7px] sm:text-[8px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-dim">Influence</div>
            </div>
          </div>
        </div>
      )}

      {/* 2. THE VAULT TERMINAL */}
      {shutterOpen && (
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 sm:px-6 py-10 sm:py-20 slow-reveal">
          
          <div className="absolute top-10 left-4 sm:left-10 space-y-2 text-classified text-[8px] opacity-20 hidden md:block">
            <div>PTR: {mousePos.x}_{mousePos.y}</div>
            <div>SEC: ALPHA_NULL</div>
            <div>TIM: 1776_2026</div>
          </div>

          <div className="w-full space-y-10 sm:space-y-20">
            <div className="text-center space-y-4 sm:space-y-6">
              <h2 className="text-inscription text-2xl sm:text-4xl md:text-6xl text-white font-light tracking-tight italic">
                The Great Work<br/>
                <span className="not-italic font-black text-accent-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]">Proceeds.</span>
              </h2>
              <div className="flex items-center justify-center gap-4 sm:gap-8">
                <div className="h-px w-8 sm:w-12 bg-white/10"></div>
                <p className="text-classified uppercase italic opacity-40 text-[8px] sm:text-[10px]">Biometric resonance sync required</p>
                <div className="h-px w-8 sm:w-12 bg-white/10"></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-sm sm:max-w-md mx-auto space-y-8 sm:space-y-16 px-2">
              <div className="relative group">
                <input
                  type="password"
                  value={cipher}
                  onChange={(e) => setCipher(e.target.value)}
                  className="w-full bg-transparent border-b border-border-blueprint text-accent-gold text-center py-4 sm:py-8 text-3xl sm:text-5xl font-mono focus:outline-none focus:border-accent-gold transition-all duration-1000 placeholder:text-white/5 tracking-[0.3em] sm:tracking-[0.6em]"
                  placeholder="••••••"
                  disabled={status === 'SCANNING' || status === 'AUTHORIZED'}
                />
                <div className="absolute -bottom-px left-0 right-0 h-px bg-accent-gold scale-x-0 group-focus-within:scale-x-100 transition-transform duration-[2s]"></div>
              </div>

              <div className="space-y-6 sm:space-y-10">
                <button
                  type="submit"
                  disabled={status !== 'IDLE'}
                  className={`w-full py-4 sm:py-6 bg-bg-void border border-border-blueprint text-inscription text-[10px] sm:text-[11px] font-black hover:border-accent-gold hover:text-accent-gold transition-all duration-700 relative overflow-hidden group ${status !== 'IDLE' ? 'opacity-50' : ''}`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-accent-gold/20"></div>
                  {status === 'IDLE' ? 'INITIATE NEURAL HANDSHAKE' : status}
                  <div className="absolute inset-x-0 bottom-0 h-px bg-accent-gold/20"></div>
                </button>
                
                <div className="flex justify-between items-center text-[7px] sm:text-[8px] font-mono tracking-[0.2em] sm:tracking-[0.4em] uppercase text-dim italic opacity-30 px-1">
                  <span>Symmetry Active</span>
                  <span>A=A</span>
                  <span>Silence Absolute</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SCANNING / AUTH STATUS */}
      {(status === 'SCANNING' || status === 'AUTHORIZED') && (
        <div className="fixed inset-0 bg-bg-void z-[200] flex flex-col items-center justify-center space-y-8 sm:space-y-12 backdrop-blur-3xl bg-black/95" style={{ animation: 'slow-focus 1s ease forwards' }}>
          <div className="relative w-24 h-24 sm:w-40 sm:h-40 flex items-center justify-center">
            <div className="absolute inset-0 border border-border-blueprint rounded-full"></div>
            <div className="absolute inset-0 border-t-2 border-accent-gold rounded-full animate-spin"></div>
            <div className="absolute inset-[-10px] border border-accent-gold/10 rounded-full" style={{ animation: 'pulse-ring 2s ease-out infinite' }}></div>
            <div className="absolute inset-[-25px] border border-accent-gold/5 rounded-full" style={{ animation: 'pulse-ring 2s ease-out infinite 0.5s' }}></div>
            <div className="w-1 h-1 bg-accent-gold rounded-full animate-pulse"></div>
          </div>
          <div className="text-center space-y-3 sm:space-y-4 px-4">
            <span className="text-inscription text-[10px] sm:text-xs text-accent-gold animate-pulse">
              {status === 'AUTHORIZED' ? 'Access Granted' : 'Synthesizing Intent...'}
            </span>
            <p className="text-classified text-[7px] sm:text-[8px] italic opacity-30 uppercase tracking-[0.3em] sm:tracking-[0.5em]">Identity dissolution in progress</p>
          </div>
        </div>
      )}

      {status === 'DENIED' && (
        <div className="fixed inset-0 bg-bg-void z-[200] flex flex-col items-center justify-center space-y-8 sm:space-y-12 bg-black/98 px-4" style={{ animation: 'reveal 0.5s ease forwards' }}>
          <div className="p-8 sm:p-16 border border-accent-crimson/30 rounded-full relative">
            <Shield className="w-12 h-12 sm:w-20 sm:h-20 text-accent-crimson animate-bounce" strokeWidth={0.5} />
            <div className="absolute inset-0 bg-accent-crimson/5 blur-3xl"></div>
          </div>
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-wider sm:tracking-widest uppercase italic font-black">Anomaly Detected</h2>
            <p className="text-classified text-accent-crimson/60 tracking-wider sm:tracking-widest uppercase font-bold text-[9px] sm:text-[10px]">Trace sequence initiated // Node quarantine active</p>
          </div>
        </div>
      )}

      {/* Bottom Metadata */}
      <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-full max-w-7xl flex justify-center sm:justify-between items-center px-4 sm:px-12 text-classified text-[6px] sm:text-[7px] font-black opacity-10 uppercase tracking-[0.4em] sm:tracking-[0.8em] pointer-events-none">
        <span className="hidden sm:inline">Symmetry: Verified</span>
        <span>Architect Guild: Clandestine</span>
        <span className="hidden sm:inline">Matrix: Absolute</span>
      </div>
    </div>
  );
};

export default Gateway;
