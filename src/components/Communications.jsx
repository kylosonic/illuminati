import React, { useState, useEffect, useRef } from 'react';
import { Send, Terminal, Loader, Shield, Lock, MessageSquare, Zap, Crosshair, ChevronRight } from 'lucide-react';

const Communications = () => {
  const [messages, setMessages] = useState([
    { id: 1, role: 'SYSTEM', content: 'Neural link established. Channel: OMEGA-7.', time: '15:32:01' },
    { id: 2, role: 'ARCHITECT', content: 'Status report on Sector 4 recalibration.', time: '15:32:45' },
    { id: 3, role: 'SYSTEM', content: 'Variance contained. Media blackout active.', time: '15:33:12' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input) return;

    const newMessage = {
      id: messages.length + 1,
      role: 'YOU',
      content: input.toUpperCase(),
      time: new Date().toLocaleTimeString('en-GB', { hour12: false }),
      isVolatile: true
    };

    setMessages([...messages, newMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => prev.filter(m => m.id !== newMessage.id));
      setIsTyping(false);
    }, 5000);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="h-full flex flex-col p-6 lg:p-16 xl:p-32 max-w-7xl mx-auto animate-reveal relative bg-bg-void">
      <div className="absolute inset-0 geometric-grid opacity-[0.02] pointer-events-none"></div>

      <header className="mb-12 lg:mb-20 space-y-8 lg:space-y-12 relative z-10">
        <div className="flex items-center gap-6">
          <div className="badge-pill">
            <MessageSquare className="w-3.5 h-3.5" /> SECURE_CHANNELS // OMEGA-7
          </div>
        </div>
        
        <div className="space-y-6 lg:space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white leading-none uppercase italic font-black" style={{ letterSpacing: '-0.05em' }}>Zero-Knowledge<br/><span className="text-accent-gold not-italic font-bold">Protocol.</span></h1>
          <p className="text-classified text-lg lg:text-xl font-serif italic max-w-2xl opacity-40 leading-relaxed lowercase">
            "Transmissions are volatile. Neural auto-destruct sequence active. Speak only what is necessary to advance the Design."
          </p>
        </div>
      </header>

      <div className="flex-1 flex flex-col bg-bg-obsidian border border-border-blueprint rounded-sm min-h-0 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] z-10">
        {/* Chat Header */}
        <div className="p-6 lg:p-10 border-b border-border-blueprint flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-black/40">
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent-gold/5 border border-border-blueprint rounded-sm flex items-center justify-center text-accent-gold group cursor-pointer hover:rotate-45 transition-all duration-[1s]">
              <Shield className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-rotate-45 transition-all duration-[1s]" strokeWidth={1} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-white tracking-[0.3em] lg:tracking-[0.4em] uppercase font-black opacity-30">CHANNEL_SELECTOR</span>
              <span className="text-accent-gold font-mono text-xs font-black tracking-[0.2em] shadow-gold-sm">0x7E3F...A21</span>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6 border border-border-blueprint px-6 lg:px-8 py-3 rounded-sm bg-black/40 group overflow-hidden relative">
            <div className="absolute inset-0 bg-accent-gold/[0.05] translate-x-full group-hover:translate-x-0 transition-transform duration-[1s]"></div>
            <div className="w-2.5 h-2.5 bg-accent-gold rounded-full animate-pulse shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
            <span className="text-classified text-[10px] text-accent-gold tracking-[0.4em] lg:tracking-[0.6em] uppercase font-black italic relative z-10">Quantum_Secure</span>
          </div>
        </div>

        {/* Messages Feed */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 lg:p-12 xl:p-24 space-y-10 lg:space-y-16 flex flex-col custom-scrollbar bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.02)_0%,_transparent_70%)] relative">
          <div className="absolute inset-0 mask-phi opacity-[0.02] pointer-events-none border border-border-blueprint rounded-full scale-110"></div>
          
          {messages.map((m, idx) => (
            <div 
              key={m.id} 
              className={`flex flex-col ${m.role === 'YOU' ? 'items-end' : 'items-start'} max-w-[85%] lg:max-w-[75%] ${m.role === 'YOU' ? 'self-end' : 'self-start'}`}
              style={{ animation: `reveal 0.5s ease forwards`, animationDelay: `${idx * 0.1}s`, opacity: 0 }}
            >
              <div className="flex items-center gap-4 lg:gap-6 mb-4 lg:mb-6 px-4">
                <span className={`text-classified text-[11px] font-black tracking-[0.4em] lg:tracking-[0.6em] uppercase ${m.role === 'SYSTEM' ? 'text-accent-gold' : m.role === 'YOU' ? 'text-white' : 'text-primary opacity-60'}`}>
                  {m.role}
                </span>
                <span className="text-classified text-[9px] opacity-10 font-bold tracking-tighter italic">{m.time}</span>
              </div>
              <div className={`p-6 lg:p-10 text-sm font-mono leading-relaxed transition-all duration-[1.5s] relative group/msg rounded-sm border
                ${m.role === 'SYSTEM' ? 'bg-accent-gold/[0.02] border-accent-gold/10 text-accent-gold/60 italic' : 
                  m.role === 'YOU' ? 'bg-white/[0.01] border-border-blueprint text-right text-white font-black tracking-wider lg:tracking-widest' : 
                  'bg-black/30 border-border-blueprint text-white/50'}`}>
                
                {m.content}
                
                {m.isVolatile && (
                  <div className="absolute -bottom-6 lg:-bottom-8 left-6 lg:left-10 right-6 lg:right-10 h-px bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-accent-gold shadow-[0_0_10px_rgba(212,175,55,1)]" style={{ animation: 'shrink 5s linear forwards' }}></div>
                  </div>
                )}

                {/* Geometric Corners */}
                <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-accent-gold opacity-0 group-hover/msg:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-accent-gold opacity-0 group-hover/msg:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-6 lg:gap-8 text-accent-gold/20 animate-pulse ml-4 pb-8 lg:pb-12">
              <Zap className="w-5 h-5 lg:w-6 lg:h-6 animate-spin" strokeWidth={1} />
              <span className="text-classified font-black uppercase tracking-[0.5em] lg:tracking-[0.8em] italic text-[10px]">Processing_Neural_Intent...</span>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 lg:p-8 xl:p-12 border-t border-border-blueprint flex gap-4 lg:gap-10 bg-black/60 backdrop-blur-3xl sticky bottom-0 relative z-10">
          <div className="flex-1 relative group/input">
            <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 border border-border-blueprint rounded-sm flex items-center justify-center text-dim group-focus-within/input:text-accent-gold group-focus-within/input:border-accent-gold transition-all duration-[1s] group-focus-within/input:rotate-90">
              <Terminal className="w-4 h-4 lg:w-5 lg:h-5 group-focus-within/input:-rotate-90 transition-transform duration-[1s]" strokeWidth={1} />
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Speak only what is necessary..."
              className="w-full bg-bg-void border border-border-blueprint rounded-sm px-16 lg:px-24 py-4 lg:py-8 text-sm lg:text-base font-mono text-white focus:outline-none focus:border-accent-gold/40 placeholder:text-white/5 uppercase tracking-[0.2em] lg:tracking-[0.4em] transition-all duration-[1s] shadow-inner focus:shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]"
            />
          </div>
          <button type="submit" className="w-24 lg:w-48 bg-bg-void border border-border-blueprint text-inscription text-[11px] font-black tracking-[0.2em] lg:tracking-[0.4em] hover:border-accent-gold hover:text-accent-gold transition-all duration-700 relative overflow-hidden group/btn">
            <div className="absolute inset-0 bg-accent-gold/[0.02] scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-[1s]"></div>
            <span className="relative z-10 flex items-center justify-center gap-2 lg:gap-4">
              <span className="hidden lg:inline">SEND</span> <ChevronRight className="w-4 h-4" strokeWidth={1} />
            </span>
          </button>
        </form>
      </div>

      <footer className="mt-12 lg:mt-20 flex flex-col items-center gap-6 lg:gap-8 opacity-20">
        <div className="h-px w-20 bg-border-blueprint"></div>
        <p className="text-classified font-black tracking-[0.3em] lg:tracking-[0.5em] text-[8px]">OMNISCIENCE_REACHES_EVERYWHERE</p>
      </footer>
    </div>
  );
};

export default Communications;
