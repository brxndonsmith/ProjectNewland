
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Globe, Zap, Cpu, Compass, Shield, Eye, Database, Activity, Map, Building, Rocket, HeartPulse, Microscope, Network, RefreshCw, Wind } from 'lucide-react';
import habitatImage from './src/assets/images/regenerated_image_1777946581399.png';

const NavLink = ({ href, children, offset }: { href: string, children: React.ReactNode, offset?: number }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY - (offset || 80);
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };
    return (
        <a href={href} onClick={handleClick} className="text-[10px] uppercase tracking-[0.25em] font-medium text-white/30 hover:text-newland-gold hover:translate-x-2 transition-all duration-500 cursor-pointer">
            {children}
        </a>
    );
};

const BackgroundGlow = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                className="glow-dot"
                initial={{ 
                    x: Math.random() * 100 + "%", 
                    y: Math.random() * 100 + "%",
                    opacity: 0.1 + Math.random() * 0.3
                }}
                animate={{
                    opacity: [0.1, 0.5, 0.1],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 5 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        ))}
    </div>
);

const SectionTitle = ({ number, title, subtitle, colorClass = "text-newland-gold" }: { number: string, title: string, subtitle?: string, colorClass?: string }) => (
    <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
            <span className={`font-mono ${colorClass} text-xs tracking-widest font-bold`}>{number}</span>
            <div className={`h-[1px] w-16 ${colorClass.replace('text-', 'bg-')}/40`}></div>
        </div>
        <h2 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-[0.9] tracking-tighter drop-shadow-sm">{title}</h2>
        {subtitle && <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold bg-white/5 inline-block px-3 py-1 rounded-sm">{subtitle}</p>}
    </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-newland-obsidian min-h-screen selection:bg-newland-gold selection:text-black">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${scrolled ? 'bg-black/90 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-8 flex justify-between items-center">
            <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="w-10 h-10 border border-newland-gold/30 rounded-lg flex items-center justify-center group-hover:rotate-90 transition-transform duration-700">
                    <Network size={18} className="text-newland-gold" />
                </div>
                <div className="flex flex-col">
                    <span className="font-sans font-bold text-lg tracking-[0.2em] text-white uppercase">Newland</span>
                    <span className="font-mono text-[8px] tracking-[0.4em] text-white/30 uppercase">Operational Framework</span>
                </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
                <NavLink href="#infrastructure">Infrastructure</NavLink>
                <NavLink href="#civilian">Civic</NavLink>
                <NavLink href="#commons">Commons</NavLink>
                <NavLink href="#health">Health</NavLink>
                <NavLink href="#geopolitics">Harmony</NavLink>
                <NavLink href="#technology">Tech</NavLink>
                <NavLink href="#expansion">Expansion</NavLink>
                <NavLink href="#lki">LKI Research</NavLink>
                <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
                <button className="px-6 py-2 border border-newland-gold/30 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-newland-gold hover:text-black transition-all duration-500 cursor-pointer shadow-[0_0_20px_rgba(232,193,127,0.1)]">
                    Access Portal
                </button>
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-110">
            <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
                alt="Planetary Interface" 
                className="w-full h-full object-cover grayscale brightness-50 opacity-40 shadow-2xl"
                referrerPolicy="no-referrer"
            />
        </div>
        
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)] z-10" />
        <div className="absolute inset-0 data-grid opacity-10 pointer-events-none z-10"></div>
        <div className="absolute inset-0 scanlines opacity-[0.03] pointer-events-none z-10"></div>

        <div className="relative z-20 text-center px-6">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="inline-block mb-12">
                     <span className="font-mono text-[10px] tracking-[0.8em] text-newland-gold uppercase px-6 py-2 border border-newland-gold/20 rounded-full backdrop-blur-md">Operational Projection 2026.04</span>
                </div>
                <h1 className="font-serif text-8xl md:text-9xl lg:text-[14rem] leading-[0.8] mb-8 text-white tracking-tighter drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                    NEWLAND
                </h1>
                <div className="flex items-center justify-center gap-12 mb-16">
                    <div className="h-[1px] w-32 bg-white/10"></div>
                    <p className="font-sans text-sm md:text-base text-white/30 tracking-[0.5em] font-medium uppercase mix-blend-difference">
                        Integrated • Functional • Absolute
                    </p>
                    <div className="h-[1px] w-32 bg-white/10"></div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 2 }}
            >
                <a href="#infrastructure" onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#infrastructure')?.scrollIntoView({ behavior: 'smooth' });
                }} className="group flex flex-col items-center gap-6 text-[10px] tracking-[0.5em] text-white/20 hover:text-white transition-all duration-700 cursor-pointer">
                    <span className="group-hover:tracking-[0.8em] transition-all">ESTABLISH CONNECTION</span>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent"></div>
                </a>
            </motion.div>
        </div>
      </header>

      <main className="relative z-20">
        
        {/* Subtle System Introduction */}
        <section id="intro" className="py-24 relative overflow-hidden bg-newland-obsidian/30 backdrop-blur-sm border-b border-white/5">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start gap-1"
                    >
                        <h4 className="font-serif text-3xl text-white tracking-tight">Brandon Smith</h4>
                        <p className="font-mono text-[10px] text-newland-gold uppercase tracking-[0.4em]">Chief Architect • Founder</p>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-md text-right border-r-2 border-newland-gold/20 pr-8"
                    >
                        <p className="text-xs text-white/40 uppercase tracking-[0.2em] leading-relaxed font-medium">
                            "The transition from theoretical architecture to planetary operative is now complete. We have moved beyond the age of reactive maintenance into the era of absolute systemic integrity."
                        </p>
                    </motion.div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-newland-gold/[0.01] -skew-x-12"></div>
        </section>

        {/* 01: Global Infrastructure System */}
        <section id="infrastructure" className="py-32 md:py-64 border-t border-white/5 relative overflow-hidden group">
            <BackgroundGlow />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-fixed opacity-[0.07] grayscale group-hover:opacity-15 transition-opacity duration-1000"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-newland-obsidian via-transparent to-newland-obsidian"></div>
            
            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
                    <div className="lg:col-span-12 max-w-5xl mx-auto space-y-12">
                        <SectionTitle number="01" title="Infrastructure" subtitle="Transit & Power Backbone" colorClass="text-newland-energy" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                            <div className="space-y-8">
                                <h3 className="font-serif text-5xl md:text-7xl text-white leading-tight">The Planetary <span className="text-newland-energy italic">Nervous System</span>.</h3>
                                <p className="text-xl text-white/50 font-light leading-relaxed">
                                    Mechanical conduits tapping into the core's geodynamics. Continuous, frictionless motion for a world that never stops accelerating.
                                </p>
                                <p className="text-sm text-white/30 uppercase tracking-[0.3em] font-mono leading-loose">
                                    The planetary grid is a zero-latency distribution network for resource allocation and energy management.
                                </p>
                            </div>
                            <div className="space-y-12">
                                {[
                                    { title: "Magnetic Rail Network", desc: "Superconducting conduits embedded into the planetary lithosphere.", icon: <Activity /> },
                                    { title: "Oceanic Siphons", desc: "Thermal-power harvesting and high-speed deep-sea logistics.", icon: <Map /> },
                                    { title: "Thermal Exchange", desc: "Geodynamic taps converting core heat into unified grid power.", icon: <Zap /> }
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex gap-8 group/item"
                                    >
                                        <div className="w-16 h-16 glass-panel flex items-center justify-center text-newland-energy group-hover/item:text-white transition-colors duration-500 bg-newland-energy/5 border-newland-energy/20 shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1 border-b border-white/10 pb-8 hover:border-newland-energy/40 transition-colors">
                                            <h4 className="font-serif text-3xl text-white mb-3">{item.title}</h4>
                                            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 02: Civilian World */}
        <section id="civilian" className="py-24 md:py-48 bg-black relative overflow-hidden group border-b border-white/5">
            <BackgroundGlow />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449156001935-d2863fb72690?auto=format&fit=crop&q=80&w=2070')] bg-cover opacity-[0.05] grayscale transition-opacity duration-1000 group-hover:opacity-10"></div>
            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
                    <div className="lg:col-span-5 space-y-10">
                        <SectionTitle number="02" title="Civic Habitat" subtitle="Master Planned Presence" colorClass="text-white" />
                        <h3 className="text-4xl md:text-6xl text-white font-serif tracking-tighter leading-none">
                            Systemic <span className="text-white/30 italic">Autonomy</span>.
                        </h3>
                        <p className="text-xl text-white/50 leading-relaxed font-light">
                            Self-supportive architectural ecosystems where technology and living spaces exist as a single, unified organism. A world powered by efficiency and <span className="text-white">zero-emission engineering</span>.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "Energy Autonomy", desc: "Integrated solar-thermal skins and kinetic harvesting.", icon: <Zap /> },
                                { title: "Efficient Community", desc: "Homes that recycle, generate, and balance resources.", icon: <RefreshCw /> }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 glass-panel border-white/5 hover:bg-white/[0.05] transition-all duration-500 group/card border-l-2 border-l-white/20">
                                    <div className="text-white/20 mb-4 group-hover/card:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <h5 className="font-bold text-[10px] tracking-[0.4em] uppercase mb-4 text-white/80">{item.title}</h5>
                                    <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-widest leading-loose">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 h-[500px] md:h-[650px] glass-panel relative overflow-hidden rounded-[4rem] shadow-2xl border-white/10 group"
                    >
                        <img 
                            src={habitatImage} 
                            alt="Autonomous Habitat Architecture" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[8s]"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 scanlines opacity-5 pointer-events-none"></div>
                        <div className="absolute inset-0 data-grid opacity-5"></div>
                    </motion.div>
                </div>
            </div>
        </section>


        {/* 03: Knowledge Commons - Shared Science */}
        <section id="commons" className="py-48 md:py-80 relative overflow-hidden group border-y border-white/5 bg-newland-obsidian">
            <BackgroundGlow />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6ad?auto=format&fit=crop&q=80&w=2070')] bg-cover opacity-[0.05] grayscale brightness-50 contrast-125 transition-opacity duration-1000 group-hover:opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-newland-gold/[0.03] to-transparent"></div>
            <div className="container mx-auto px-8 relative z-10">
                 <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                        <div className="lg:col-span-12">
                             <SectionTitle number="03" title="Knowledge Commons" subtitle="Open Source Evolution" colorClass="text-newland-gold" />
                        </div>
                        <div className="lg:col-span-7 space-y-12">
                             <h3 className="font-serif text-5xl md:text-7xl text-white leading-tight tracking-tight">
                                Intelligence as a <span className="text-newland-gold italic">Global Constant</span>.
                             </h3>
                             <p className="text-2xl text-white/40 font-light leading-relaxed">
                                Scientific research and medical innovation are hardcoded into every nation's architecture. We have abolished the monetization of discovery. Knowledge is the air our species breathes.
                             </p>
                             <div className="py-12 border-y border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h5 className="font-mono text-[10px] text-newland-gold tracking-[0.4em] uppercase mb-4">The Anti-Gatekeeper Protocol</h5>
                                    <p className="text-xs text-white/30 leading-loose uppercase tracking-widest">
                                        Real-time synthesis of all micronation research. Zero latency between discovery and global deployment.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-mono text-[10px] text-newland-gold tracking-[0.4em] uppercase mb-4">Universal Health Lattices</h5>
                                    <p className="text-xs text-white/30 leading-loose uppercase tracking-widest">
                                        Epidemiological data shared across the terrestrial lattice. Diagnostics are a public utility, not a market asset.
                                    </p>
                                </div>
                             </div>
                        </div>
                        <div className="lg:col-span-5">
                             <div className="p-16 glass-panel border-newland-gold/20 relative group/box overflow-hidden">
                                <div className="absolute top-0 right-0 p-8">
                                    <Microscope className="text-newland-gold/20" size={80} />
                                </div>
                                <div className="relative z-10 space-y-12">
                                    <h4 className="font-serif text-4xl text-white">Non-Monetized Discovery</h4>
                                    <div className="space-y-4">
                                        {[
                                            "Zero-Gate Access Tiers",
                                            "Humanity-First IP Law",
                                            "Micro-Nation Research Sync",
                                            "Shared Biological Libraries"
                                        ].map((text, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="w-1 h-1 bg-newland-gold"></div>
                                                <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pt-8 border-t border-white/5">
                                        <p className="font-mono text-[9px] text-newland-gold/40 tracking-[0.4em] uppercase">Status: Broadcasting Universally</p>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        {/* 04: Global Health & Human Maintenance */}
        <section id="health" className="py-32 md:py-80 bg-newland-obsidian overflow-hidden relative group">
            <BackgroundGlow />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070')] bg-cover opacity-[0.03] grayscale transition-opacity duration-1000 group-hover:opacity-10"></div>
            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 items-center">
                    <div className="w-full lg:w-1/2">
                        <SectionTitle number="04" title="Human Health" subtitle="Global Research & Shared Synthesis" colorClass="text-newland-medical" />
                        <p className="text-4xl md:text-6xl text-white font-serif tracking-tighter leading-[0.9] mb-12">
                             Systemic <span className="text-newland-medical">Vitality</span>. 
                        </p>

                        <p className="text-xl text-white/50 leading-relaxed font-light mb-8 max-w-lg">
                            Newland operates as a unified medical engine. Every micronation contributes real-time data to a global shared research lattice.
                        </p>
                        <p className="text-sm text-white/30 uppercase tracking-[0.2em] font-mono leading-relaxed mb-16 max-w-lg">
                            Advancements in medical and scientific research are decentralized and immediately available to all humanity, abolishing the monetization of discovery.
                        </p>
                        <div className="space-y-4 mb-16">
                            {['Global Discovery Lattice', 'Zero-Latency Synthesis', 'Open-Science Protocol', 'Human Evolutionary Tiers'].map((label, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 group/li cursor-pointer"
                                >
                                    <div className="w-2 h-2 bg-newland-medical rounded-full group-hover/li:scale-150 transition-transform"></div>
                                    <span className="text-xs uppercase tracking-[0.4em] text-white/30 group-hover/li:text-white transition-colors">{label}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                            <div>
                                <h5 className="font-mono text-[9px] text-newland-medical tracking-[0.4em] uppercase mb-4">Inter-National Synthesis</h5>
                                <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
                                    Research is not owned by any single nation. Every scientific breakthrough is instantly synthesized across the global medical mesh.
                                </p>
                            </div>
                            <div>
                                <h5 className="font-mono text-[9px] text-newland-medical tracking-[0.4em] uppercase mb-4">The Collective Cure</h5>
                                <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
                                    Abolishing medical borders. Rare conditions are solved via the combined processing power of every distributed research hub on the planet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 aspect-square relative glass-panel rounded-full overflow-hidden shadow-[0_0_150px_rgba(99,179,237,0.15)] group/orbit p-4">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,179,237,0.1)_0%,transparent_70%)]"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2074" 
                            alt="Biological Resilience Lattice" 
                            className="w-full h-full object-cover grayscale opacity-40 brightness-75 contrast-125 group-hover/orbit:scale-110 transition-transform duration-[8s]"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                             <div className="w-[80%] h-[80%] border border-newland-medical/10 rounded-full animate-pulse-slow"></div>
                             <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-1 h-32 bg-newland-medical/20 animate-spin-slow"></div>
                             </div>
                        </div>
                        <div className="absolute inset-0 rounded-full border-[12px] border-black/80 shadow-inner"></div>
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 px-4 py-1 glass-panel border-newland-medical/30">
                            <span className="font-mono text-[8px] text-newland-medical uppercase tracking-[0.5em] font-bold">Scientific Synthesis: 100% Shared</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* 05: Geopolitical Harmony */}
        <section id="geopolitics" className="py-32 md:py-64 bg-black relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(214,158,46,0.05)_0%,transparent_50%)]"></div>
            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <SectionTitle number="05" title="Geopolitical Catalyst" subtitle="Distributed Sovereign Harmony" colorClass="text-newland-gold" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-20 items-start">
                        <div className="space-y-12">
                            <h3 className="text-4xl md:text-6xl text-white font-serif tracking-tighter leading-tight">
                                A Network of <span className="text-newland-gold italic">Universal Presence</span>.
                            </h3>
                            <p className="text-xl text-white/50 leading-relaxed font-light">
                                Newland is not a single location, but a distributed resonance. It consists of <span className="text-white">autonomous micronations</span> established within the borders of every existing country on Earth.
                            </p>
                            <div className="p-8 glass-panel border-newland-gold/20 bg-newland-gold/5">
                                <p className="font-mono text-xs text-white/80 tracking-widest uppercase leading-loose">
                                    These sites serve as "Neutral Zones" for global research, shared logistics, and zero-latency synthesis, effectively influencing geopolitical harmony from within.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-16 lg:pt-12">
                            {[
                                { 
                                    title: "Sub-National Diplomacy", 
                                    desc: "Micronations act as stabilizing nodes, easing border tensions through shared resource dependencies.", 
                                    icon: <Globe className="text-newland-gold" /> 
                                },
                                { 
                                    title: "Universal Synthesis", 
                                    desc: "Information generated in one node is immediately legally and scientifically valid in all others, bypassing bureaucratic friction.", 
                                    icon: <Network className="text-newland-gold" /> 
                                },
                                { 
                                    title: "Geopolitical Frictionless", 
                                    desc: "The mesh reduces the incentive for conflict by making every nation a direct beneficiary of Newland's global infrastructure.", 
                                    icon: <Shield className="text-newland-gold" /> 
                                }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="flex gap-8 group"
                                >
                                    <div className="w-12 h-12 glass-panel flex items-center justify-center shrink-0 border-newland-gold/20">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-2xl text-white mb-2">{item.title}</h4>
                                        <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-newland-gold/10 to-transparent"></div>
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-32 rounded-full border border-newland-gold/5 animate-pulse"></div>
        </section>

        {/* 06: Technology Systems */}
        <section id="technology" className="py-48 md:py-64 relative group overflow-hidden">
            <BackgroundGlow />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070')] bg-cover opacity-[0.05] grayscale group-hover:opacity-15 transition-opacity duration-1000"></div>
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
                    alt="System Tech" 
                    className="w-full h-full object-cover grayscale opacity-[0.03]"
                    referrerPolicy="no-referrer"
                />
            </div>
            <div className="container mx-auto px-8 relative z-10">
                 <div className="max-w-4xl border-l border-newland-energy/20 pl-16">
                    <SectionTitle number="06" title="System Tech" subtitle="Functional Intelligence" colorClass="text-newland-energy" />
                    <p className="text-3xl md:text-5xl text-white leading-none font-serif mb-12 tracking-tighter">
                        Technology that <span className="text-newland-energy italic">serves life</span>. 
                    </p>
                    <p className="text-xl text-white/50 font-light mb-16 max-w-2xl leading-relaxed">
                        Logistics-integrated AI, molecular synthesis, and atmospheric regulation hubs dispersed throughout the planetary framework.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-24">
                        {[
                            { 
                                icon: <Zap />, 
                                title: "Recursive Energy", 
                                desc: "Kinetic harvesting systems that capture the energy of their own operations. A perpetual cycle where waste heat and motion are fed back into the primary grid." 
                            },
                            { 
                                icon: <RefreshCw />, 
                                title: "Molecular Siphons", 
                                desc: "Total waste-to-resource synthesis. 100% of refuse is broken down at the atomic level to produce ultra-pure water and life-supporting bio-catalysts." 
                            },
                            { 
                                icon: <Wind />, 
                                title: "Atmospheric Anchors", 
                                desc: "True zero-emission units that actively repair the environment. These nodes scrub particulate toxicity while Enriching the air with medical-grade oxygen." 
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group/tech glass-panel p-8 border-newland-energy/10 hover:bg-newland-energy/5 transition-all duration-500">
                                <div className="text-newland-energy mb-6 group-hover/tech:scale-110 transition-transform duration-500">{item.icon}</div>
                                <h5 className="font-bold text-[10px] tracking-[0.4em] uppercase text-white/80 mb-6 border-b border-white/5 pb-4">{item.title}</h5>
                                <p className="text-[10px] text-white/30 uppercase tracking-widest leading-loose">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 glass-panel border-white/5 bg-white/[0.02]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <h4 className="font-serif text-3xl text-white">Closed-Loop <span className="text-newland-energy italic">Engineering</span>.</h4>
                                <p className="text-sm text-white/40 leading-relaxed uppercase tracking-widest leading-loose">
                                    Newland differs from traditional industry through its recursive architectural philosophy. We do not extract; we synthesize. Every mechanical motion within the city generates secondary energy, and every liter of waste is molecularly restructured.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <span className="font-mono text-[8px] text-newland-energy tracking-[0.4em] uppercase">Efficiency Ratio</span>
                                    <p className="text-2xl text-white font-serif">104.2%</p>
                                    <p className="text-[8px] text-white/20 uppercase tracking-widest">Self-Refining Power Cycle</p>
                                </div>
                                <div className="space-y-4">
                                    <span className="font-mono text-[8px] text-newland-energy tracking-[0.4em] uppercase">Reclamation Rate</span>
                                    <p className="text-2xl text-white font-serif">100%</p>
                                    <p className="text-[8px] text-white/20 uppercase tracking-widest">Total Resource Recovery</p>
                                </div>
                                <div className="space-y-4">
                                    <span className="font-mono text-[8px] text-newland-energy tracking-[0.4em] uppercase">Residual Waste</span>
                                    <p className="text-2xl text-white font-serif">0.00%</p>
                                    <p className="text-[8px] text-white/20 uppercase tracking-widest">Exit Loss Index (ELI)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        {/* 07: Expansion Systems */}
        <section id="expansion" className="py-48 md:py-80 bg-black relative overflow-hidden group">
            <BackgroundGlow />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2072')] bg-cover opacity-10 bg-fixed grayscale transition-opacity duration-1000 group-hover:opacity-20"></div>
            <div className="container mx-auto px-8 relative z-10">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div>
                        <SectionTitle number="07" title="Expansion" subtitle="Engineering the Horizon" colorClass="text-white" />
                        <p className="text-4xl md:text-6xl text-white font-serif tracking-tighter leading-none mb-12 italic">
                            The outward trajectory. 
                        </p>
                        <p className="text-xl text-white/40 leading-relaxed font-light mb-16">
                            Space elevators as physical tethers, connecting terrestrial infrastructure to orbital manufacturing hubs. We extend the grid.
                        </p>
                        <div className="space-y-6">
                            {[
                                "Tethered Orbital Anchors",
                                "Off-World Habitat Foundations",
                                "Planetary Launch Hubs",
                                "Solar Harvesting Lattices"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-6 group/item cursor-pointer">
                                    <div className="w-12 h-[1px] bg-white/20 group-hover/item:w-24 transition-all duration-500"></div>
                                    <span className="text-xs tracking-[0.5em] text-white/30 group-hover/item:text-white transition-colors uppercase">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="aspect-[4/3] glass-panel rounded-[3rem] overflow-hidden border-white/10 shadow-2xl relative shadow-white/5">
                        <img 
                            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2072" 
                            alt="Off-world Expansion" 
                            className="w-full h-full object-cover grayscale brightness-50 opacity-40 group-hover:scale-110 transition-transform duration-[6s]"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 pointer-events-none scanlines opacity-10"></div>
                    </div>
                 </div>
            </div>
        </section>

        {/* 08: LKI Research - The Archive Section */}
        <section id="lki" className="py-48 md:py-80 bg-black relative border-t-4 border-newland-gold/10 overflow-hidden group">
            <BackgroundGlow />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516339901600-2e1a62986307?auto=format&fit=crop&q=80&w=2070')] bg-cover opacity-5 grayscale transition-opacity duration-1000 group-hover:opacity-10"></div>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-newland-gold/20 rounded-full animate-pulse-slow"></div>
            </div>
            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div 
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 1.5 }}
                        className="w-24 h-24 mb-16 border-2 border-newland-gold/40 flex items-center justify-center rotate-45 bg-newland-gold/5 backdrop-blur-sm shadow-[0_0_50px_rgba(232,193,127,0.1)]"
                    >
                        <div className="-rotate-45">
                            <Eye className="text-newland-gold" size={32} />
                        </div>
                    </motion.div>
                    <SectionTitle number="08" title="The LKI Institute" subtitle="Isolated Theoretical Research" colorClass="text-newland-gold" />
                    
                    <div className="max-w-4xl text-2xl md:text-5xl text-newland-gold/70 italic font-serif leading-tight mb-32 drop-shadow-2xl">
                        "Here, we preserve the symbolic. Strictly isolated from the functional world, 
                        the Liminal Knowledge Institute researches ancient scripts and the theoretical origins of harmony."
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                        {[
                            { title: "Theoretical Core", desc: "Research into sacred geometry and zero-point resonance fields.", icon: <Database /> },
                            { title: "Ancient Records", desc: "Deciphering the blueprints of previous terrestrial epochs.", icon: <Compass /> },
                            { title: "Symbolic Law", desc: "Governance models based on universal harmonic principles.", icon: <Shield /> }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-12 glass-panel border-newland-gold/10 hover:bg-newland-gold/5 transition-all duration-700 text-left group"
                            >
                                <div className="text-newland-gold mb-8 group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                                <h4 className="font-serif text-3xl text-white mb-6 flex items-center gap-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-white/40 leading-relaxed uppercase tracking-wider">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-40 w-full h-[400px] md:h-[650px] glass-panel border-white/5 rounded-[4rem] overflow-hidden relative group/scene shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80&w=2070" 
                            alt="Theoretical Observatories" 
                            className="w-full h-full object-cover grayscale brightness-[0.2] opacity-60 group-hover:scale-110 transition-transform duration-[10s]"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-95"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                             <motion.div 
                                className="w-[500px] h-[500px] border border-newland-gold/10 rounded-full"
                                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                             />
                             <motion.div 
                                className="w-[400px] h-[400px] border border-newland-gold/5 rounded-full absolute"
                                animate={{ rotate: -360, scale: [1.05, 1, 1.05] }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                             />
                             <div className="w-[1px] h-[400px] bg-gradient-to-b from-transparent via-newland-gold/40 to-transparent"></div>
                             <div className="w-[400px] h-[1px] bg-gradient-to-r from-transparent via-newland-gold/40 to-transparent absolute"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="grid grid-cols-4 gap-4 opacity-10">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="w-8 h-8 border border-newland-gold/20 flex items-center justify-center text-[8px] text-newland-gold">
                                        {Math.floor(Math.random() * 99)}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute inset-0 data-grid opacity-[0.03]"></div>
                        <div className="absolute top-12 left-12 right-12 flex justify-between font-mono text-[8px] tracking-[0.8em] text-newland-gold/30 uppercase">
                             <span>Sector_Index: 066</span>
                             <span>Frequency: Harmonic</span>
                        </div>
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
                             <p className="font-mono text-[9px] tracking-[0.8em] text-newland-gold uppercase font-bold text-glow">LKI SECURE INTERFACE | THEORETICAL ARCHIVE</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* Founder's Statement - Small & Subtle */}
        <section className="py-24 border-t border-white/5 bg-black/50 backdrop-blur-md">
            <div className="container mx-auto px-8">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <p className="font-serif text-2xl md:text-3xl text-white/70 italic leading-relaxed">
                        "Reality is no longer an accident. We have engineered it to serve the intentional evolution of our species."
                    </p>
                    <div className="pt-4 border-t border-white/5 inline-block px-12">
                         <h4 className="text-white text-xs font-bold tracking-[0.5em] uppercase">Brandon Smith</h4>
                         <p className="text-newland-gold font-mono text-[9px] tracking-[0.4em] uppercase mt-2">Founder • Chief Architect</p>
                    </div>
                </div>
            </div>
        </section>

      </main>

      <footer className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-24">
                <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-lg border border-newland-gold/30 flex items-center justify-center text-newland-gold font-bold">N</div>
                        <span className="font-sans font-bold text-2xl tracking-[0.2em] text-white">NEWLAND</span>
                    </div>
                    <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-mono leading-loose">
                        A planetary system of coordinated evolution. Constructed reality for a unified species.
                    </p>
                </div>
                
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
                    <div className="flex flex-col gap-6">
                        <span className="text-[10px] text-newland-gold uppercase tracking-[0.5em] font-bold mb-4 border-b border-newland-gold/10 pb-2">Architecture</span>
                        <NavLink href="#infrastructure">Global Infrastructure</NavLink>
                        <NavLink href="#civilian">Civic Habitats</NavLink>
                        <NavLink href="#commons">Knowledge Commons</NavLink>
                        <NavLink href="#health">Systemic Vitality</NavLink>
                        <NavLink href="#geopolitics">Geopolitical Harmony</NavLink>
                    </div>
                    <div className="flex flex-col gap-6">
                        <span className="text-[10px] text-newland-gold uppercase tracking-[0.5em] font-bold mb-4 border-b border-newland-gold/10 pb-2">Intelligence</span>
                        <NavLink href="#technology">Functional Intelligence</NavLink>
                        <NavLink href="#expansion">Expansion Horizons</NavLink>
                        <NavLink href="#lki">Theoretical Archives</NavLink>
                    </div>
                    <div className="flex flex-col gap-6">
                        <span className="text-[10px] text-newland-gold uppercase tracking-[0.5em] font-bold mb-4 border-b border-newland-gold/10 pb-2">Access</span>
                        <NavLink href="#">Operational Code</NavLink>
                        <NavLink href="#">Protocol Tiers</NavLink>
                        <NavLink href="#">Compliance</NavLink>
                    </div>
                </div>
            </div>

            <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
                <span className="font-mono text-[9px] tracking-[0.6em] text-white/20 uppercase font-bold text-center md:text-left">
                    © MMXXVI | NEWLAND OPERATIONAL SYSTEM | ALL SECTORS ACTIVE
                </span>
                <div className="flex gap-12 text-white/20 hover:text-white transition-colors cursor-pointer">
                    <Globe size={18} className="hover:text-newland-gold hover:scale-125 transition-all" />
                    <Network size={18} className="hover:text-newland-gold hover:scale-125 transition-all" />
                    <Shield size={18} className="hover:text-newland-gold hover:scale-125 transition-all" />
                </div>
            </div>
        </div>
        <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-full h-[500px] bg-newland-energy/5 blur-[150px] rounded-full"></div>
      </footer>
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9999] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default App;
