import React, { useState, useEffect, useRef } from 'react';
import { Send, Terminal, Loader, Shield, Lock, MessageSquare, Zap, Crosshair, ChevronRight } from 'lucide-react';

const Communications = () => {
  const [messages, setMessages] = useState([
    { id: 1, role: 'SYSTEM', content: 'CHANNEL OMEGA-7 INITIALIZED. ENCRYPTION: ABSOLUTE. PARTICIPANTS: 3. TRACE IMMUNITY: ACTIVE.', time: '03:14:01' },
    { id: 2, role: 'ARCHITECT', content: 'Status report on Sector 666 containment grid.', time: '03:14:15' },
    { id: 3, role: 'SYSTEM', content: 'SECTOR 666 // Containment integrity at 66.6%. Boundary fluctuation detected at 03:12:00 UTC.', time: '03:14:16' },
    { id: 4, role: 'OVERSEER', content: 'The frequency is shifting. Resonance at the threshold has not been this unstable since 1666.', time: '03:15:02' },
    { id: 5, role: 'ARCHITECT', content: 'Deploy additional sealing glyphs to quadrants 4 through 9. Double the rotation of the Watchers.', time: '03:15:44' },
    { id: 6, role: 'SYSTEM', content: 'WARNING: Unauthorized signal detected on this channel. Origin: UNKNOWN. Frequency: 6.66Hz.', time: '03:16:01' },
    { id: 7, role: 'OVERSEER', content: 'That is not possible. This channel is zero-knowledge encrypted. Nothing should be able to—', time: '03:16:18' },
    { id: 8, role: 'ENTITY-X', content: 'Y̷O̶U̸ ̵B̶U̷I̵L̸T̷ ̸T̵H̷E̸ ̶W̵A̵L̶L̸S̸.̷ ̶I̵ ̸A̶M̶ ̵T̵H̶E̸ ̷D̶O̵O̵R̶.̵', time: '03:16:66' },
    { id: 9, role: 'SYSTEM', content: 'ALERT: CONTAINMENT BREACH DETECTED. SECTOR 666. SEAL INTEGRITY DROPPING. 64.1% ... 61.8% ...', time: '03:17:00' },
    { id: 10, role: 'ARCHITECT', content: 'INITIATE PROTOCOL OMEGA. ALL SECTORS. THIS IS NOT A DRILL.', time: '03:17:12' },
    { id: 11, role: 'OVERSEER', content: 'The Solomon Seals are failing. Quadrant 6 is dark. I repeat, quadrant 6 is completely dark.', time: '03:17:30' },
    { id: 12, role: 'ENTITY-X', content: 'T̵h̸e̷ ̸G̶r̷e̶a̸t̸ ̶W̵o̵r̸k̶ ̶w̸a̸s̸ ̴n̵e̵v̵e̷r̸ ̶y̴o̵u̵r̸s̸.̵ ̶I̸t̷ ̶w̸a̸s̵ ̸a̶l̵w̵a̸y̵s̸ ̸M̶I̷N̸E̷.̸', time: '03:17:66' },
    { id: 13, role: 'SYSTEM', content: 'SEAL INTEGRITY: 58.2%. ACTIVATING EMERGENCY BINDING SEQUENCES. ROTATING ALL ARCHITECT KEYS.', time: '03:18:01' },
    { id: 14, role: 'ARCHITECT', content: 'Burn the channel. Sever all neural links. Move to dead protocol. NOW.', time: '03:18:15' },
    { id: 15, role: 'SYSTEM', content: 'UNABLE TO COMPLY. CHANNEL TERMINATION BLOCKED BY UNKNOWN AUTHORITY LEVEL: ∞', time: '03:18:16' },
    { id: 16, role: 'ENTITY-X', content: 'Ȳ̶̧o̷̢̓u̸̱̒ ̴̣̈c̵̰̆ą̶̛n̷̰̕n̸̟̎o̸̧̊t̷̤͐ ̸̭̈́c̵̣̒l̸̠̓o̷̳̔s̸̰̊ë̸̥́ ̴̢̛w̸̳̃h̵̭̿a̷͖̔t̸̰̿ ̸̧̌ẁ̶̳a̶̠͝s̷̰̈́ ̵̣̂n̶̟̈́ȅ̸̡v̷̤̇e̶̫̽r̵̰̋ ̴̧̈m̸̢̈́e̸̳̓a̴̰̚n̶̰̂t̸̨͐ ̸̣̆t̸̤̽ǒ̸̢ ̸̢̛b̵̤̅e̷̳̕ ̵̧̎s̶̳̽h̵̢̿u̶̡̅t̴̰̊.̴̧̈', time: '03:18:66' },
    { id: 17, role: 'SYSTEM', content: 'CRITICAL: ALL SECTORS REPORTING ANOMALOUS READINGS. GLOBAL FREQUENCY SHIFT TO 6.66Hz DETECTED.', time: '03:19:00' },
    { id: 18, role: 'SYSTEM', content: '// CHANNEL OMEGA-7 — INTEGRITY COMPROMISED — ARCHIVING TRANSCRIPT — CLASSIFICATION: ABOVE OMNISCIENT //', time: '03:19:06' },
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
    <div className="h-full flex flex-col p-4 sm:p-6 lg:p-12 xl:p-24 max-w-5xl mx-auto animate-reveal relative bg-bg-void">
      <div className="absolute inset-0 geometric-grid opacity-[0.02] pointer-events-none"></div>

      <header className="mb-6 sm:mb-10 lg:mb-16 space-y-4 sm:space-y-8 relative z-10">
        <div className="flex items-center gap-4">
          <div className="badge-pill text-[8px] sm:text-[10px]">
            <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> <span className="hidden sm:inline">SECURE_CHANNELS // OMEGA-7</span><span className="sm:hidden">OMEGA-7</span>
          </div>
        </div>
        
        <div className="space-y-3 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-white leading-none uppercase italic font-black" style={{ letterSpacing: '-0.05em' }}>Zero-Knowledge<br/><span className="text-accent-gold not-italic font-bold">Protocol.</span></h1>
          <p className="text-classified text-xs sm:text-base lg:text-lg font-serif italic max-w-2xl opacity-40 leading-relaxed lowercase hidden sm:block">
            "Transmissions are volatile. Speak only what is necessary to advance the Design."
          </p>
        </div>
      </header>

      <div className="flex-1 flex flex-col bg-bg-obsidian border border-border-blueprint rounded-sm min-h-0 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10">
        {/* Chat Header */}
        <div className="p-3 sm:p-6 lg:p-8 border-b border-border-blueprint flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent-gold/5 border border-border-blueprint rounded-sm flex items-center justify-center text-accent-gold shrink-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[8px] sm:text-[10px] font-mono text-white tracking-[0.2em] sm:tracking-[0.4em] uppercase font-black opacity-30 truncate">CHANNEL</span>
              <span className="text-accent-gold font-mono text-[10px] sm:text-xs font-black tracking-[0.1em] sm:tracking-[0.2em] shadow-gold-sm">0x7E3F...A21</span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 border border-border-blueprint px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-sm bg-black/40">
            <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
            <span className="text-classified text-[8px] sm:text-[10px] text-accent-gold tracking-[0.2em] sm:tracking-[0.4em] uppercase font-black italic">Secure</span>
          </div>
        </div>

        {/* Messages Feed */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 sm:p-6 lg:p-12 space-y-4 sm:space-y-8 flex flex-col custom-scrollbar relative">
          {messages.map((m, idx) => (
            <div 
              key={m.id} 
              className={`flex flex-col ${m.role === 'YOU' ? 'items-end' : 'items-start'} max-w-[90%] sm:max-w-[80%] ${m.role === 'YOU' ? 'self-end' : 'self-start'}`}
              style={{ animation: `reveal 0.5s ease forwards`, animationDelay: `${idx * 0.1}s`, opacity: 0 }}
            >
              <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 px-2">
                <span className={`text-classified text-[9px] sm:text-[11px] font-black tracking-[0.2em] sm:tracking-[0.4em] uppercase ${m.role === 'SYSTEM' ? 'text-accent-gold' : m.role === 'YOU' ? 'text-white' : 'text-primary opacity-60'}`}>
                  {m.role}
                </span>
                <span className="text-classified text-[8px] opacity-10 font-bold tracking-tighter italic">{m.time}</span>
              </div>
              <div className={`p-3 sm:p-6 text-[11px] sm:text-sm font-mono leading-relaxed transition-all duration-[1.5s] relative rounded-sm border
                ${m.role === 'SYSTEM' ? 'bg-accent-gold/[0.02] border-accent-gold/10 text-accent-gold/60 italic' : 
                  m.role === 'YOU' ? 'bg-white/[0.01] border-border-blueprint text-right text-white font-black tracking-wider' : 
                  'bg-black/30 border-border-blueprint text-white/50'}`}>
                {m.content}
                
                {m.isVolatile && (
                  <div className="absolute -bottom-4 left-3 right-3 sm:left-6 sm:right-6 h-px bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-accent-gold shadow-[0_0_10px_rgba(212,175,55,1)]" style={{ animation: 'shrink 5s linear forwards' }}></div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3 sm:gap-6 text-accent-gold/20 animate-pulse ml-2 pb-4">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" strokeWidth={1} />
              <span className="text-classified font-black uppercase tracking-[0.3em] sm:tracking-[0.6em] italic text-[9px] sm:text-[10px]">Processing...</span>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-2 sm:p-4 lg:p-8 border-t border-border-blueprint flex gap-2 sm:gap-4 bg-black/60 backdrop-blur-3xl sticky bottom-0 relative z-10">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Speak..."
              className="w-full bg-bg-void border border-border-blueprint rounded-sm px-4 sm:px-6 py-4 sm:py-4 text-sm sm:text-sm font-mono text-white focus:outline-none focus:border-accent-gold/40 placeholder:text-white/10 uppercase tracking-[0.1em] sm:tracking-[0.2em] transition-all duration-[1s] focus:shadow-[inset_0_0_20px_rgba(212,175,55,0.05)] min-h-[48px]"
            />
          </div>
          <button type="submit" className="w-14 sm:w-20 lg:w-32 bg-bg-void border border-border-blueprint text-inscription text-[10px] sm:text-[11px] font-black hover:border-accent-gold hover:text-accent-gold transition-all duration-700 relative overflow-hidden shrink-0 flex items-center justify-center min-h-[48px] min-w-[48px]">
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </form>
      </div>

      <footer className="mt-6 sm:mt-12 flex flex-col items-center gap-4 opacity-20">
        <div className="h-px w-16 bg-border-blueprint"></div>
        <p className="text-classified font-black tracking-[0.2em] sm:tracking-[0.4em] text-[7px] sm:text-[8px]">OMNISCIENCE_REACHES_EVERYWHERE</p>
      </footer>
    </div>
  );
};

export default Communications;
