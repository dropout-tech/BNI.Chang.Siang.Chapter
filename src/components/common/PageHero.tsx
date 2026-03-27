import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { assetUrl } from '../../lib/assets';

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    showScrollIndicator?: boolean;
    children?: React.ReactNode;
}

const GoldArrows: React.FC<{ dir: 'l' | 'r'; className?: string }> = ({ dir, className = '' }) => (
    <span className={`gold-chevron select-none flex items-center ${className}`} aria-hidden="true">
        {dir === 'l' ? '>>>' : '>>>'}
    </span>
);

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, showScrollIndicator = false, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacityParallax = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 pt-20 overflow-hidden grain-heavy brushed-metal-dark">
        {/* === BG: geometric wing layers === */}

        {/* === BG: geometric wing layers === */}

        {/* Abstract Sweeping Geometric Waves (Wings) — Sharp, dynamic angles with exaggerated breathing animation */}
        <motion.svg 
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -1, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] -left-[10%] w-[120%] h-[120%] z-0 pointer-events-none opacity-50" viewBox="0 0 1440 1000" fill="none" preserveAspectRatio="none"
        >
            {/* Base Wing */}
            <path d="M-200,800 C400,600 800,900 1600,0 L1600,1000 L-200,1000 Z" fill="url(#wing-grad-1)" />
            {/* Mid Wing */}
            <path d="M-200,900 C600,700 900,1000 1600,200 L1600,1000 L-200,1000 Z" fill="url(#wing-grad-2)" />
            {/* Sharp Accent Lines */}
            <path d="M-100,750 C500,550 850,850 1600,-50" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" fill="none" />
            <path d="M-100,850 C650,650 950,950 1600,150" stroke="#E8C547" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
            
            <defs>
                <linearGradient id="wing-grad-1" x1="0" y1="1000" x2="1600" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0E1F35" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#163550" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#243B53" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="wing-grad-2" x1="0" y1="1000" x2="1600" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0A1628" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#102A43" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#1A3A5C" stopOpacity="0" />
                </linearGradient>
            </defs>
        </motion.svg>

        {/* Massive Gold glow orbs with intense pulsing */}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.08, 0.03] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[20%] w-[800px] h-[800px] rounded-full pointer-events-none z-0 mix-blend-screen" style={{ background:'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.06, 0.03] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full pointer-events-none z-0 mix-blend-screen" style={{ background:'radial-gradient(circle, #E8C547, transparent 70%)' }} />

        {/* Horizontal gold lines */}
        <div className="absolute top-[28%] left-0 right-0 h-px z-0" style={{ background:'linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)' }} />
        <div className="absolute top-[52%] left-0 right-0 h-px z-0" style={{ background:'linear-gradient(90deg, transparent, rgba(212,175,55,0.05), transparent)' }} />

        {/* Gold floating particles */}
        {Array.from({length:18}).map((_,i) => (
            <motion.div key={i} className="absolute rounded-full z-[1] pointer-events-none"
                style={{ left:`${3+Math.random()*94}%`, top:`${3+Math.random()*94}%`, width:`${Math.random()*2+0.5}px`, height:`${Math.random()*2+0.5}px`, backgroundColor:'#D4AF37' }}
                animate={{ y:[0,-(8+Math.random()*20),0], opacity:[0.04, 0.2+Math.random()*0.15, 0.04] }}
                transition={{ duration:5+Math.random()*7, repeat:Infinity, delay:Math.random()*5, ease:'easeInOut' }}
            />
        ))}

        {/* === CONTENT === */}
        <motion.div 
            initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.5, ease:[0.16, 1, 0.3, 1] }}
            style={{ y: yParallax, opacity: opacityParallax, perspective: 1000 }}
            className="relative z-10 px-4 mt-[-5vh] md:mt-[-8vh] max-w-6xl mx-auto w-full"
        >
            <div className="flex items-center justify-center gap-3 md:gap-5 mb-4 relative">
                {/* Exaggerated Deep Decorative lines behind title */}
                <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 2, delay: 0.5, ease: "easeOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent -z-10 blur-[2px]" />
                
                <motion.div initial={{ x: -100, opacity: 0, rotate: -45 }} animate={{ x: 0, opacity: 1, rotate: 180 }} transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.4 }}>
                    <GoldArrows dir="l" className="text-3xl md:text-6xl opacity-90 drop-shadow-[0_0_25px_rgba(212,175,55,0.8)]" />
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.5, rotateX: 60, y: 100, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0, filter: "blur(0px)" }}
                    transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.2 }}
                    className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[8.5rem] font-black tracking-tight leading-[1.1] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                >
                    <span className="gold-text inline-block animate-float-slow">{title}</span>
                </motion.h1>
                
                <motion.div initial={{ x: 100, opacity: 0, rotate: 45 }} animate={{ x: 0, opacity: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.4 }}>
                    <GoldArrows dir="r" className="text-3xl md:text-6xl opacity-90 drop-shadow-[0_0_25px_rgba(212,175,55,0.8)]" />
                </motion.div>
            </div>
            
            {title && (
                <motion.div 
                    initial={{ opacity:0, y:50, scale: 0.9 }} 
                    animate={{ opacity:1, y:0, scale: 1 }} 
                    transition={{ duration:1.2, delay:0.8, ease:[0.16, 1, 0.3, 1] }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#D4AF37]/10 blur-[80px] -z-20 pointer-events-none rounded-full"
                />
            )}

            {subtitle && (
                <motion.div initial={{ opacity:0, y:40, rotateX: -30 }} animate={{ opacity:1, y:0, rotateX: 0 }} transition={{ duration:1.5, delay:0.8, ease:[0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-2xl lg:text-3xl text-gray-300/90 max-w-4xl mx-auto leading-relaxed font-light mt-10 tracking-[0.1em] drop-shadow-xl"
                >{subtitle}</motion.div>
            )}
            {children}
        </motion.div>

        {showScrollIndicator && (
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                <motion.div animate={{ y:[0,12,0] }} transition={{ duration:2.5, ease: "easeInOut", repeat:Infinity }} className="w-6 h-12 rounded-full border border-[#D4AF37]/30 flex items-start justify-center p-1.5 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <div className="w-1 h-3 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,1)]" />
                </motion.div>
            </motion.div>
        )}
    </section>
    );
};

export default PageHero;
