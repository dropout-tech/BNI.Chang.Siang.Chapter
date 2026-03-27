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

        {/* Abstract Sweeping Geometric Waves (Wings) — Sharp, dynamic angles */}
        <svg className="absolute top-[10%] -left-[10%] w-[120%] h-[120%] z-0 pointer-events-none opacity-40" viewBox="0 0 1440 1000" fill="none" preserveAspectRatio="none">
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
        </svg>

        {/* Gold glow orbs */}
        <div className="absolute top-[20%] left-[30%] w-[600px] h-[600px] rounded-full opacity-[0.035] pointer-events-none z-0 mix-blend-screen" style={{ background:'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
        <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none z-0 mix-blend-screen" style={{ background:'radial-gradient(circle, #E8C547, transparent 70%)' }} />

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
            initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:1.2, ease:[0.16, 1, 0.3, 1], delay:0.2 }}
            style={{ y: yParallax, opacity: opacityParallax }}
            className="relative z-10 px-4 mt-[-5vh] md:mt-[-8vh] max-w-6xl mx-auto w-full"
        >
            <div className="flex items-center justify-center gap-3 md:gap-5 mb-4 relative">
                {/* Decorative lines behind title */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -z-10 blur-[1px]" />
                <GoldArrows dir="l" className="text-2xl md:text-5xl opacity-80 rotate-180 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-black tracking-tight leading-[1.1] drop-shadow-2xl">
                    <span className="gold-text">{title}</span>
                </h1>
                <GoldArrows dir="r" className="text-2xl md:text-5xl opacity-80 drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
            </div>
            {subtitle && (
                <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.4, ease:[0.16, 1, 0.3, 1] }}
                    className="text-base md:text-xl lg:text-2xl text-gray-300/90 max-w-4xl mx-auto leading-relaxed font-light mt-8 tracking-wide drop-shadow-md"
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
