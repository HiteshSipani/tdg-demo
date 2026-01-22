'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, Cpu, Users, Search, BrainCircuit, Play, Database, Server, Cloud, 
  Lock, ArrowRight, Code, Zap, Smartphone, Home, Clock, FileText, CheckCircle, 
  Pickaxe, Sparkles, Activity, AlertTriangle, Workflow, Globe, Layers, ShieldCheck, Network
} from 'lucide-react';

const TDGStrategyPage = () => {
  // State for TDG Business Agents (Bottom Section)
  const [activeAgent, setActiveAgent] = useState('TrueID_Guardian');
  // State for Strike48 Digital Squad (Middle Section)
  const [activeSquadMember, setActiveSquadMember] = useState('Cyra');
  
  const [scrolled, setScrolled] = useState(false);
  const [isMined, setIsMined] = useState(false);
  const [isMining, setIsMining] = useState(false);

  // Ref for auto-scroll after mining
  const architectureRef = useRef<HTMLElement>(null);

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStrikeGold = () => {
    if (isMined) {
      architectureRef.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setIsMining(true);
    setTimeout(() => {
      setIsMined(true);
      setIsMining(false);
      // Auto-scroll to architecture after "striking gold"
      setTimeout(() => {
        if (architectureRef.current) {
          architectureRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1500); 
    }, 1000); 
  };

  // --- DATA: STRIKE48 SQUAD (Standard Product Agents) ---
  type SquadMember = { role: string; tagline: string; desc: string; task: React.ReactNode; color: string; image: string; icon: React.ReactNode };
  const squadMembers: Record<string, SquadMember> = {
    Cyra: {
      role: "Cyber Advisory Monitor",
      tagline: "The Scout",
      desc: "Helps find the latest cybersecurity advisories, vulnerabilities, and threat intelligence. Filters for critical impact (CVSS ≥ 7.0).",
      task: "OUTPUT: Detected 'Salesloft Drift' Advisory. Vulnerability Confirmed.",
      color: "text-purple-400",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop", 
      icon: <Search className="w-6 h-6" />
    },
    Leo: {
      role: "Level 1 Analyst",
      tagline: "The Gatekeeper",
      desc: "Performs Triage & Confidence Scoring. Calculates Evidence Points vs. Data Gaps. Validates False Positives.",
      task: "OUTPUT: Priority 1 Breach. Confidence Score: 85%.",
      color: "text-blue-400",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop", 
      icon: <Shield className="w-6 h-6" />
    },
    Lexi: {
      role: "Level 2 Analyst",
      tagline: "The Detective",
      desc: "Validates L1 Triage (Trust but Verify). Traces 'Patient Zero'. Uses Agent-to-Agent delegation.",
      task: "OUTPUT: Approval Decision - 'Revoke OAuth Tokens?'",
      color: "text-amber-400",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop", 
      icon: <BrainCircuit className="w-6 h-6" />
    },
    Max: {
      role: "SOC Manager",
      tagline: "The Architect",
      desc: "Oversight & Performance. Monitors case queues. Generates reports. No manual edits.",
      task: (
        <>
          <span className="block mb-1">ACTION: Closing Incident #9921.</span>
          <span className="block text-slate-500">REPORT: Generating Monthly MTTR Board Deck.</span>
        </>
      ),
      color: "text-green-400",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop", 
      icon: <Users className="w-6 h-6" />
    }
  };

  // --- DATA: TDG STRATEGIC CONCEPTS (Custom Business Agents) ---
  type Agent = { role: string; tagline: string; desc: string; task: React.ReactNode; color: string; border: string; image: string; icon: React.ReactNode };
  const agents: Record<string, Agent> = {
    TrueID_Guardian: {
      role: "Consumer Fraud Protection",
      tagline: "Protecting 36M+ Users",
      desc: "Monitors TrueID login patterns in real-time. Detects credential stuffing and account takeovers across the entertainment ecosystem.",
      task: "OUTPUT: Blocked 450 suspicious logins from IP Block 103.x.x.x (Credential Stuffing).",
      color: "text-red-500",
      border: "border-red-500/50",
      image: "https://tdg-assets.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2025/03/01_Banner_1200x600.jpg?q=80&w=1000&auto=format&fit=crop", 
      icon: <Smartphone className="w-6 h-6" />
    },
    MSSP_Concierge: {
      role: "Customer-Facing Bot",
      tagline: "The Support Killer",
      desc: "Allows TDG's MSSP clients (Banks, Retailers) to ask 'Did we block this IP?' via portal, reducing L1 support tickets for your team.",
      task: "OUTPUT: Client Query: 'Status of CVE-2024-3094?' -> Auto-Reply: 'Patched on 45/50 servers.'",
      color: "text-blue-500",
      border: "border-blue-500/50",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop", 
      icon: <Users className="w-6 h-6" />
    },
    SmartLife_Sentinel: {
      role: "IoT Security Agent",
      tagline: "Securing the Home",
      desc: "Dedicated agent for the 'TrueX' & 'Smart Living' ecosystem. Monitors anomalies in IoT device traffic (Cameras, Sensors) at scale.",
      task: "OUTPUT: Anomaly Detected: Smart Cam #9921 sending 5GB data to unknown external IP.",
      color: "text-amber-500",
      border: "border-amber-500/50",
      image: "https://tdg-assets.sgp1.cdn.digitaloceanspaces.com/wp-content/uploads/2025/03/20250402_Banner_TrueX-Website_Pic2-scaled.png?q=80&w=1000&auto=format&fit=crop", 
      icon: <Home className="w-6 h-6" />
    }
  };

  return (
    <div className="bg-slate-950 text-white font-sans overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="h-10 flex items-center">
            <img src="/tdg-logo.png" alt="True Digital Group" className="h-full w-auto object-contain" />
          </div>
          <div className="h-12 flex items-center">
            <img src="/logo.png" alt="Strike48" className="h-full w-auto object-contain" />
          </div>
        </div>
      </nav>

      {/* --- 1. HERO --- */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center z-10 animate-fade-in flex flex-col items-center">
          <div className="inline-block mb-6 px-4 py-1 border border-amber-500/30 rounded-full bg-amber-500/10 text-amber-400 font-mono text-sm tracking-widest uppercase backdrop-blur-sm">
            Strategic Acceleration Program
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Accelerating TDG's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-500 to-blue-600">Autonomous Agentic SOC</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Eliminating alert noise. Scaling intelligence.<br/>
            From <span className="text-red-400 font-semibold">Manual Constraints</span> to <span className="text-amber-400 font-semibold">Automated Velocity</span>.
          </p>

          <button onClick={() => {
            const element = document.getElementById('challenges');
            element?.scrollIntoView({ behavior: 'smooth' });
          }} className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-500 hover:to-amber-400 text-white font-bold text-lg rounded-full transition-all shadow-[0_0_30px_rgba(29,78,216,0.4)] flex items-center gap-2">
            Explore the Path <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>
      </header>

      {/* --- 2. CHALLENGES --- */}
      <section id="challenges" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Identifying the Bottlenecks</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 hover:border-red-500 transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-6 text-red-500">
                <Code className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Manual Ingestion Fatigue</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Engineers are tied up manually building parsers for every new customer log source. This creates a backlog that slows onboarding.
              </p>
            </div>
            <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 hover:border-amber-500 transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="w-12 h-12 bg-amber-900/20 rounded-lg flex items-center justify-center mb-6 text-amber-500">
                <AlertTriangle className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Alert Fatigue & Noise</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Operations are being impacted by excessive alert volume. The team is currently overwhelmed by false positives pending fine-tuning.
              </p>
            </div>
            <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 hover:border-blue-500 transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-500">
                <Workflow className="w-6 h-6"/>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Splunk Forwarder Limits</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                While keeping Splunk HFs is preferred, <span className="text-blue-400 font-semibold">technical limits (SEDCMD)</span> are blocking complex parsing. Snare is the necessary path forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. EXECUTION PLAN (Roadmap) --- */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Execution Plan for TDG</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            
            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-blue-500 group-hover:border-blue-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                <span className="text-slate-400 font-bold group-hover:text-white">1</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all">
                <h3 className="font-bold text-lg text-blue-400 mb-1">Enablement & Tuning</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Deep dive into LINQ queries and <span className="text-white font-semibold">Alert Fine-Tuning</span> to reduce noise.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-indigo-500 group-hover:border-indigo-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                 <span className="text-slate-400 font-bold group-hover:text-white">2</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-all">
                <h3 className="font-bold text-lg text-indigo-400 mb-1">Snare Validation</h3>
                <p className="text-slate-400 text-sm">
                  Overcoming Splunk SEDCMD limitations. Joint validation of Snare agents in your internal environment to ensure stability.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-amber-500 group-hover:border-amber-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                 <span className="text-slate-400 font-bold group-hover:text-white">3</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-all">
                <h3 className="font-bold text-lg text-amber-500 mb-1">Strike48 Agentic SOC</h3>
                <p className="text-slate-400 text-sm">Presenting Prospector Studio: The "Force Multiplier" that allows your limited team to handle massive MSSP scale.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-green-500 group-hover:border-green-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                 <span className="text-slate-400 font-bold group-hover:text-white">4</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-green-500/50 transition-all">
                <h3 className="font-bold text-lg text-green-400 mb-1">AI Collectors & Parsers</h3>
                <p className="text-slate-400 text-sm">Introducing the AI Ingestion Engine. Discussing how it generates parser code from log examples in seconds.</p>
              </div>
            </div>

             {/* Step 5 */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-purple-500 group-hover:border-purple-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                 <span className="text-slate-400 font-bold group-hover:text-white">5</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all">
                <h3 className="font-bold text-lg text-purple-400 mb-1">Custom Business Agents</h3>
                <p className="text-slate-400 text-sm">Partnering to build specialized agents for TrueID, Smart Living, and your MSSP clients.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. START OF PITCH: STRIKE GOLD INTERACTION --- */}
      <section className="relative py-32 bg-slate-950 border-t border-slate-800 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="relative z-10 max-w-5xl px-6">
          <div className="inline-block mb-6 px-4 py-1 border border-amber-500/30 rounded-full bg-amber-500/10 text-amber-400 font-mono text-sm tracking-widest uppercase backdrop-blur-sm">
            Agentic Log Management
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-2xl">
            Stop Paying the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">SIEM Tax.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your logs are a <span className="text-amber-400 font-semibold glow">Gold Mine</span>, not a graveyard. 
            <br/>Connect your existing stack. Deploy a digital squad.
          </p>

          <div className="relative mt-8 group cursor-pointer inline-block" onClick={handleStrikeGold}>
            <div className={`absolute -top-16 -right-12 transition-transform duration-300 origin-bottom-left z-20 ${isMining ? 'rotate-[-45deg] translate-y-10 translate-x-[-10px]' : 'rotate-12 group-hover:rotate-0'}`}>
              <img src="/pickaxe.png" alt="Pickaxe" className="w-28 h-28 drop-shadow-2xl object-contain" />
            </div>
            <button className={`relative overflow-hidden font-bold text-2xl py-6 px-16 rounded-xl border-4 transition-all duration-500 shadow-2xl transform ${isMined ? 'bg-amber-500 border-yellow-300 text-black shadow-[0_0_60px_rgba(245,158,11,0.6)] scale-110' : 'bg-slate-800/80 border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500 backdrop-blur-md'}`}>
              <span className="relative z-10 flex items-center gap-3">
                {isMined ? <><Sparkles className="w-6 h-6 animate-pulse" /> STRIKE GOLD!</> : "Strike Gold"}
              </span>
              {!isMined && <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-30 mix-blend-overlay"></div>}
            </button>
            {!isMined && <p className="mt-4 text-sm font-mono text-slate-500 animate-pulse">( Click to Mine )</p>}
          </div>
        </div>
      </section>

      {/* --- 5. UNIFIED LAYER (Ref Target) --- */}
      <section ref={architectureRef} className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-mono rounded-full border border-amber-500/20">THE SOLUTION</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">The Unified Agentic Layer</h2>
          <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-lg">
            Strike48 <span className="text-white font-bold">sits on top</span> of your fragmented silos, correlating data and automating tasks without moving logs.
          </p>
          
          <div className="relative max-w-5xl mx-auto h-[450px] flex flex-col justify-end items-center">
            {/* Top Layer */}
            <div className="absolute top-0 z-20 w-full animate-fade-in">
              <div className="inline-block p-6 px-16 bg-slate-950 border-2 border-amber-500 rounded-3xl shadow-[0_0_50px_rgba(245,158,11,0.2)] relative">
                 <div className="text-3xl font-bold flex items-center gap-3 justify-center">
                    <img src="/logo.png" alt="Strike48" className="h-10 w-auto object-contain" />
                 </div>
                 <div className="text-sm font-mono text-amber-500 mt-2 tracking-widest uppercase">Agentic Log Management</div>
                 <div className="absolute -bottom-3 left-1/4 w-4 h-4 bg-amber-500 rounded-full border-4 border-slate-900"></div>
                 <div className="absolute -bottom-3 left-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-slate-900 -translate-x-1/2"></div>
                 <div className="absolute -bottom-3 right-1/4 w-4 h-4 bg-amber-500 rounded-full border-4 border-slate-900"></div>
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="absolute inset-0 z-10 top-20">
               <svg className="w-full h-full" preserveAspectRatio="none">
                  <path d="M512 0 L 200 280" fill="none" stroke="url(#gradientLine)" strokeWidth="2" strokeDasharray="8,8" className="animate-pulse" />
                  <path d="M512 0 L 400 280" fill="none" stroke="url(#gradientLine)" strokeWidth="2" strokeDasharray="8,8" className="animate-pulse" />
                  <path d="M512 0 L 620 280" fill="none" stroke="url(#gradientLine)" strokeWidth="2" strokeDasharray="8,8" className="animate-pulse" />
                  <path d="M512 0 L 820 280" fill="none" stroke="url(#gradientLine)" strokeWidth="2" strokeDasharray="8,8" className="animate-pulse" />
                  <defs>
                    <linearGradient id="gradientLine" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#334155" stopOpacity="0" />
                    </linearGradient>
                  </defs>
               </svg>
            </div>

            {/* Silos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full z-10">
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col items-center gap-3 hover:border-red-500/50 transition-all">
                    <Shield className="text-red-500 w-8 h-8" />
                    <div><div className="font-bold text-slate-200">SOC / Threat</div><div className="text-xs text-slate-500 mt-1">CrowdStrike, SentinelOne</div></div>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col items-center gap-3 hover:border-green-500/50 transition-all">
                    <Server className="text-green-500 w-8 h-8" />
                    <div><div className="font-bold text-slate-200">DevOps / Logs</div><div className="text-xs text-slate-500 mt-1">Splunk, Datadog</div></div>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col items-center gap-3 hover:border-orange-500/50 transition-all">
                    <Cloud className="text-orange-500 w-8 h-8" />
                    <div><div className="font-bold text-slate-200">Infra / Cloud</div><div className="text-xs text-slate-500 mt-1">AWS, Azure</div></div>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col items-center gap-3 hover:border-blue-500/50 transition-all">
                    <Activity className="text-blue-500 w-8 h-8" />
                    <div><div className="font-bold text-slate-200">NOC / Uptime</div><div className="text-xs text-slate-500 mt-1">PagerDuty, Jira</div></div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. CORE AI TECHNOLOGIES (Added Section) --- */}
      <section className="py-24 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core AI Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "LLM Orchestration", desc: "Chains cognitive steps. Handles 50+ step investigations.", icon: <BrainCircuit/> },
              { name: "MCP Standard", desc: "The 'USB Port' for connecting to Salesforce, AWS, & CrowdStrike.", icon: <Cpu/> },
              { name: "GraphRAG", desc: "Grounds AI in YOUR business reality to reduce hallucinations.", icon: <Database/> },
              { name: "Agent-to-Agent", desc: "Google Protocol. Automatic delegation between L1 & Forensic Agents.", icon: <Users/> }
            ].map((tech, i) => (
              <div key={i} className="bg-slate-950/50 p-8 rounded-2xl border border-slate-800 hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 text-amber-500 border border-slate-700">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{tech.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. WORKFORCE EVOLUTION --- */}
      <section className="py-32 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Workforce Evolution</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Augment", subtitle: "Thinking Partner", desc: "Writes complex queries. Finds hidden patterns.", color: "blue" },
              { title: "Automate", subtitle: "Task Pilot", desc: "Handles reporting, rules, and routine checks.", color: "purple" },
              { title: "Agency", subtitle: "Teammate", desc: "Investigates autonomously. Operates within guardrails.", color: "amber" }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all">
                <div className={`absolute top-0 left-0 w-full h-1 bg-${item.color}-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                <h3 className="text-3xl font-bold mb-2 text-white">{item.title}</h3>
                <h4 className={`text-sm font-mono text-${item.color}-400 mb-6 uppercase tracking-widest`}>{item.subtitle}</h4>
                <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 8. MEET YOUR DIGITAL SQUAD (Added) --- */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-5/12">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Meet Your <br/><span className="text-amber-500">Digital Squad.</span></h2>
            <p className="text-xl text-slate-300 mb-10">
              Assigned by Job Description. <br/>Validated by "Sandwich Architecture".
            </p>
            <div className="flex flex-col gap-4">
              {Object.keys(squadMembers).map((name) => (
                <button 
                  key={name}
                  onClick={() => setActiveSquadMember(name)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all border ${activeSquadMember === name ? 'bg-slate-800 border-amber-500/50 shadow-lg scale-105' : 'bg-slate-950/50 border-slate-800 hover:bg-slate-800'}`}
                >
                  <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${activeSquadMember === name ? 'border-amber-500' : 'border-slate-700'}`}>
                      <img src={squadMembers[name].image} alt={name} className="w-full h-full object-cover filter brightness-90 contrast-110" />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${activeSquadMember === name ? 'text-white' : 'text-slate-400'}`}>{name}</h4>
                    <span className="text-xs font-mono text-slate-500 uppercase">{squadMembers[name].role}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-7/12 w-full">
            <div className="relative bg-slate-950/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl h-[600px] flex flex-col justify-between overflow-hidden">
              <div className={`absolute -top-20 -right-20 w-64 h-64 ${squadMembers[activeSquadMember].color.replace('text-', 'bg-')}/10 rounded-full blur-[80px]`}></div>
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl">
                        <img src={squadMembers[activeSquadMember].image} alt={activeSquadMember} className="w-full h-full object-cover filter brightness-90 contrast-110" />
                    </div>
                    <div>
                        <h3 className={`text-5xl font-bold ${squadMembers[activeSquadMember].color}`}>{activeSquadMember}</h3>
                        <p className="text-lg font-mono text-slate-400 mt-2 flex items-center gap-2">
                           {squadMembers[activeSquadMember].icon} {squadMembers[activeSquadMember].tagline}
                        </p>
                    </div>
                  </div>
                </div>
                <p className="text-2xl text-slate-200 leading-relaxed font-light">
                  "{squadMembers[activeSquadMember].desc}"
                </p>
              </div>
              <div className="bg-slate-900/80 rounded-xl p-6 border-l-4 border-amber-500 backdrop-blur-sm mt-8">
                <p className="font-mono text-xs text-amber-500 mb-3 tracking-widest uppercase">Live Task Output</p>
                <div className="text-slate-300 font-mono text-sm leading-7">
                    <span className="text-green-400 mr-2">$</span>
                    {squadMembers[activeSquadMember].task}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* --- 10. SOLVING AI HALLUCINATION (Trust Section) --- */}
      <section className="py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Solving the "AI Hallucination" Problem</h2>
          <div className="relative p-12 bg-slate-900/50 border border-slate-800 rounded-3xl inline-block w-full">
            <div className="flex flex-col gap-2 max-w-lg mx-auto">
                <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-t-xl rounded-b-md text-center backdrop-blur-sm">
                    <h4 className="text-blue-400 font-bold font-mono text-sm uppercase mb-1">Top Bun: Data Layer</h4>
                    <p className="text-slate-300 text-sm">Deterministic Data Fetch (Zero Hallucination)</p>
                </div>
                <div className="bg-amber-900/20 border border-amber-500/30 p-8 rounded-md text-center my-1 backdrop-blur-sm shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                    <h4 className="text-amber-400 font-bold font-mono text-sm uppercase mb-1">Meat: Cognition Layer</h4>
                    <p className="text-slate-200 font-medium">AI Reasoning & Logic Processing</p>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-b-xl rounded-t-md text-center backdrop-blur-sm">
                    <h4 className="text-blue-400 font-bold font-mono text-sm uppercase mb-1">Bottom Bun: Verification Layer</h4>
                    <p className="text-slate-300 text-sm">Supervisor Validation & Guardrails</p>
                </div>
            </div>
            <div className="mt-8 inline-block px-6 py-2 bg-green-900/20 border border-green-500/30 rounded-full text-green-400 font-mono text-sm">
                Result: "Trust but Verify" Architecture
            </div>
          </div>
        </div>
      </section>

      {/* --- 11. LIVE DEMO --- */}
      <section className="py-40 bg-slate-950 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670')] opacity-5 bg-cover bg-center"></div>
        <div className="relative z-10">
            <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center mb-8 animate-pulse shadow-[0_0_50px_rgba(245,158,11,0.5)] mx-auto">
            <Play className="w-10 h-10 text-black ml-1" fill="black" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">Live Demo</h2>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto font-light">
            Switching to Prospector Studio Environment...
            </p>
        </div>
      </section>

      {/* --- 12. TABLE STAKES (ENTERPRISE) (Added Section) --- */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-800/20 skew-x-12 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise Table Stakes</h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              Security, flexibility, and compliance aren't add-ons. They are the foundation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "LLM Agnostic", icon: <BrainCircuit className="w-5 h-5 text-purple-400" />, desc: "Plug & play. GPT-4, Claude, or local Llama." },
                  { title: "Deployment Agnostic", icon: <Server className="w-5 h-5 text-blue-400" />, desc: "On-Prem, Private VPC, or Cloud SaaS." },
                  { title: "Source Agnostic", icon: <Database className="w-5 h-5 text-amber-400" />, desc: "Search-in-Place (Splunk, etc) via Connectors." },
                  { title: "Multi-Tenant Control", icon: <Globe className="w-5 h-5 text-green-400" />, desc: "Manage 100+ tenants from one control plane." },
                  { title: "Full Audit Trails", icon: <FileText className="w-5 h-5 text-slate-300" />, desc: "SIEM-grade governance & lineage tracking." },
                  { title: "Agentic Logs", icon: <Layers className="w-5 h-5 text-pink-400" />, desc: "Autonomous collection & enrichment pipelines." },
                  { title: "Real-Time Alerting", icon: <Zap className="w-5 h-5 text-yellow-400" />, desc: "Sub-second response triggers." },
                  { title: "High Fidelity", icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />, desc: "Trust but verify. No Black Box AI." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-all">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-center items-center relative overflow-hidden">
               <div className="absolute inset-0 bg-grid-slate-800/[0.2] bg-[size:20px_20px]"></div>
               <h3 className="text-2xl font-bold mb-8 text-center relative z-10 flex items-center gap-2">
                 <Lock className="w-6 h-6 text-green-400" />
                 Privacy First Architecture
               </h3>
               <div className="relative z-10 w-full max-w-sm flex flex-col gap-6">
                  <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center relative">
                    <div className="text-xs font-mono text-slate-400 uppercase mb-1">Your Environment</div>
                    <div className="font-bold text-white flex justify-center items-center gap-2">
                       <Database className="w-4 h-4 text-blue-400"/> Customer Data
                    </div>
                  </div>
                  <div className="flex justify-center"><div className="h-8 w-0.5 bg-slate-600"></div></div>
                  <div className="relative bg-slate-950 p-6 rounded-2xl border-2 border-green-500/30 text-center shadow-[0_0_40px_rgba(34,197,94,0.1)]">
                     <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 px-3 py-1 rounded-full border border-green-500/50 text-green-400 text-xs font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> SECURE ENCLAVE
                     </div>
                     <p className="text-sm text-slate-300 font-medium">Inference Only Processing</p>
                     <p className="text-xs text-slate-500 mt-1">Data is processed, answered, and forgotten.</p>
                  </div>
                  <div className="flex justify-center items-center gap-4 text-xs font-mono text-red-400 opacity-80 mt-2">
                     <div className="h-px w-12 bg-red-900/50"></div>
                     <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-red-900/20 border border-red-500/50 flex items-center justify-center mb-1"><span className="text-lg font-bold">×</span></div>
                        <span>NO TRAINING</span>
                     </div>
                     <div className="h-px w-12 bg-red-900/50"></div>
                  </div>
                  <div className="text-center opacity-50">
                    <div className="inline-flex items-center gap-2 text-xs text-slate-500 border border-slate-800 px-3 py-1 rounded-full">
                       <Network className="w-3 h-3" /> External LLMs (GPT/Claude)
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 14. JOURNEY & PACKAGES (Added Section) --- */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Prospector Studio Journey</h2>
            <div className="relative border-l-2 border-slate-800 pl-8 space-y-12">
              {['Start Day 1 with Pre-built Agents', 'Build Custom Personas (No-Code)', 'Expand to entire IT Stack via MCP'].map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-amber-500 z-10"></div>
                  <h3 className="text-xl font-bold text-white mb-2">Phase {i+1}</h3>
                  <p className="text-slate-400">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">Agentic Packages</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-blue-900/10 border border-blue-500/20 rounded-xl hover:bg-blue-900/20 transition-colors">
                <h4 className="font-bold text-blue-400 mb-2 text-lg">SOC Package</h4>
                <p className="text-xs text-slate-400 leading-relaxed">L1/L2/L3 Analysts, Forensic, Threat Intel, SOC Manager</p>
              </div>
              <div className="p-6 bg-purple-900/10 border border-purple-500/20 rounded-xl hover:bg-purple-900/20 transition-colors">
                <h4 className="font-bold text-purple-400 mb-2 text-lg">Compliance</h4>
                <p className="text-xs text-slate-400 leading-relaxed">SOC 2, NIST, GDPR, PCI-DSS Auditors</p>
              </div>
              <div className="p-6 bg-green-900/10 border border-green-500/20 rounded-xl hover:bg-green-900/20 transition-colors">
                <h4 className="font-bold text-green-400 mb-2 text-lg">UEBA</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Baseline, Risk Scoring, Context Enrichment</p>
              </div>
              <div className="p-6 bg-amber-900/10 border border-amber-500/20 rounded-xl hover:bg-amber-900/20 transition-colors">
                <h4 className="font-bold text-amber-400 mb-2 text-lg">Studio</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Agent Builder, Alert Support, Modifier</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 9. CORE VALUE PROPOSITIONS --- */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Core Value Propositions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-600 mb-4">90%</div>
              <div className="text-slate-300 text-lg font-medium">Faster Triage</div>
            </div>
            <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-600 mb-4">70%</div>
              <div className="text-slate-300 text-lg font-medium">Cost Savings</div>
            </div>
            <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-600 mb-4">Zero</div>
              <div className="text-slate-300 text-lg font-medium">Training Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 13. PROPOSED CONCEPTS --- */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-mono rounded-full border border-amber-500/20">PROPOSED CONCEPTS</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Agents for <span className="text-amber-500">TDG's Core Business</span></h2>
            <p className="text-slate-400">Beyond just "SOC" — we can partner to build agents that drive value for your key business pillars.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.keys(agents).map((name) => (
              <div key={name} className={`bg-slate-900 border rounded-2xl p-8 transition-all hover:-translate-y-2 ${agents[name].border}`}>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-700">
                      <img src={agents[name].image} className="w-full h-full object-cover" alt={name} />
                   </div>
                   <div>
                      <h3 className={`text-xl font-bold ${agents[name].color}`}>{name.replace('_', ' ')}</h3>
                      <div className="text-xs font-mono text-slate-500 uppercase">{agents[name].role}</div>
                   </div>
                </div>
                <p className="text-slate-300 text-sm mb-6 min-h-[60px]">{agents[name].desc}</p>
                <div className="bg-slate-950 rounded p-3 font-mono text-xs border-l-2 border-amber-500 text-slate-400 shadow-inner">
                    {agents[name].task}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* --- 15. PARTNER --- */}
      <section className="py-32 bg-gradient-to-b from-slate-950 to-amber-950/20 relative">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block p-4 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <Users className="w-8 h-8 text-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Partner With Us</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We don't just sell software. We partner with you to build your <span className="text-amber-400 font-bold">core business use cases</span>, custom AI agents, and automated workflows.
          </p>
          <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg py-4 px-10 rounded-full transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)]">
            Become a Design Partner
          </button>
        </div>
      </section>

    </div>
  );
};

export default TDGStrategyPage;