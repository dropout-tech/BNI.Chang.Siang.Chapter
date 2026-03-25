import React from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '../../lib/assets';

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    showScrollIndicator?: boolean;
    children?: React.ReactNode;
}

const GoldArrows: React.FC<{ dir: 'l' | 'r'; className?: string }> = ({ dir, className = '' }) => (
    <span className={`gold-text font-black tracking-[0.2em] select-none ${className}`} aria-hidden="true">
        {dir === 'l' ? '《' : '》'}
    </span>
);

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, showScrollIndicator = false, children }) => (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 pt-20 overflow-hidden grain">
        {/* === BG: geometric wave layers === */}
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(170deg, #0D1B2E 0%, #102A43 30%, #163550 50%, #102A43 75%, #0A1628 100%)' }} />

        {/* Fabric/silk curved overlays — 3 layers */}
        <motion.div animate={{ y:[0,-12,0] }} transition={{ duration:10, repeat:Infinity, ease:'easeInOut' }}
            className="absolute top-[5%] -left-[15%] w-[80%] h-[50%] rounded-[60%_40%_50%_40%] opacity-[0.07] z-0"
            style={{ background:'radial-gradient(ellipse at 40% 50%, #1A3A5C, transparent 70%)' }} />
        <motion.div animate={{ y:[0,15,0] }} transition={{ duration:12, repeat:Infinity, ease:'easeInOut', delay:1.5 }}
            className="absolute top-[25%] right-[-10%] w-[55%] h-[60%] rounded-[40%_60%_45%_55%] opacity-[0.06] z-0"
            style={{ background:'radial-gradient(ellipse at 60% 50%, #243B53, transparent 70%)' }} />
        <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:14, repeat:Infinity, ease:'easeInOut', delay:3 }}
            className="absolute bottom-[0%] left-[10%] w-[70%] h-[35%] rounded-[50%_50%_40%_60%] opacity-[0.05] z-0"
            style={{ background:'radial-gradient(ellipse at 50% 60%, #1A3A5C, transparent 70%)' }} />

        {/* SVG wave bottom */}
        <svg className="absolute bottom-0 left-0 w-full h-[45%] z-0" viewBox="0 0 1440 500" fill="none" preserveAspectRatio="none">
            <path d="M0,250C240,200,480,300,720,250S1200,200,1440,250L1440,500L0,500Z" fill="#102A43" fillOpacity="0.45" />
            <path d="M0,300C180,260,420,340,660,290S1140,320,1440,300L1440,500L0,500Z" fill="#0E1F35" fillOpacity="0.55" />
            <path d="M0,360C300,330,540,390,780,350S1260,380,1440,360L1440,500L0,500Z" fill="#0A1628" fillOpacity="0.75" />
            <path d="M0,260C240,220,480,300,720,260S1200,220,1440,260" stroke="#D4AF37" strokeWidth="0.7" strokeOpacity="0.12" fill="none" />
            <path d="M0,320C300,280,540,360,780,310S1260,340,1440,320" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.08" fill="none" />
        </svg>

        {/* Gold glow orbs */}
        <div className="absolute top-[20%] left-[30%] w-[600px] h-[600px] rounded-full opacity-[0.025] pointer-events-none z-0" style={{ background:'radial-gradient(circle, #D4AF37, transparent 65%)' }} />
        <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] rounded-full opacity-[0.02] pointer-events-none z-0" style={{ background:'radial-gradient(circle, #E8C547, transparent 65%)' }} />

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
        <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, ease:'easeOut', delay:0.3 }}
            className="relative z-10 px-4 mt-[-5vh] md:mt-[-8vh] max-w-6xl mx-auto w-full"
        >
            <div className="flex items-center justify-center gap-3 md:gap-5 mb-4">
                <GoldArrows dir="l" className="text-2xl md:text-4xl opacity-50" />
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
                    <span className="gold-text">{title}</span>
                </h1>
                <GoldArrows dir="r" className="text-2xl md:text-4xl opacity-50" />
            </div>
            {subtitle && (
                <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.6 }}
                    className="text-base md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed font-light mt-6"
                >{subtitle}</motion.div>
            )}
            {children}
        </motion.div>

        {showScrollIndicator && (
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <motion.div animate={{ y:[0,8,0] }} transition={{ duration:2, repeat:Infinity }} className="w-6 h-10 rounded-full border-2 border-[#D4AF37]/20 flex items-start justify-center p-1.5">
                    <div className="w-1.5 h-3 rounded-full bg-[#D4AF37]/35" />
                </motion.div>
            </motion.div>
        )}
    </section>
);

export default PageHero;
