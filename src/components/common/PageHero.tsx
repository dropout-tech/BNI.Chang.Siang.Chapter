import React from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '../../lib/assets';

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    showScrollIndicator?: boolean;
    children?: React.ReactNode;
}

const GoldArrows: React.FC<{ direction: 'left' | 'right'; className?: string }> = ({ direction, className = '' }) => (
    <span className={`inline-block font-bold tracking-[0.3em] gold-gradient-text select-none ${className}`} aria-hidden="true">
        {direction === 'left' ? '«' : '»'}
    </span>
);

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, showScrollIndicator = false, children }) => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 pt-20 overflow-hidden" aria-label="BNI 長翔名人堂白金分會">
            {/* === Background Layers === */}

            {/* Base gradient */}
            <div className="absolute inset-0 z-0" style={{
                background: 'linear-gradient(170deg, #0D1B2E 0%, #102A43 25%, #1A3A5C 45%, #102A43 65%, #0A1628 100%)'
            }} />

            {/* Fabric-like curved overlays */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[10%] -left-[10%] w-[70%] h-[60%] rounded-[50%] opacity-[0.08]"
                    style={{ background: 'radial-gradient(ellipse, #1A3A5C 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute top-[20%] right-[-5%] w-[50%] h-[70%] rounded-[40%] opacity-[0.06]"
                    style={{ background: 'radial-gradient(ellipse, #243B53 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute bottom-[5%] left-[20%] w-[60%] h-[40%] rounded-[50%] opacity-[0.05]"
                    style={{ background: 'radial-gradient(ellipse, #1A3A5C 0%, transparent 70%)' }}
                />
            </div>

            {/* Wave SVG bottom */}
            <svg className="absolute bottom-0 left-0 w-full h-[40%] z-0" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
                <path d="M0,200 C240,160 480,240 720,200 C960,160 1200,240 1440,200 L1440,400 L0,400Z" fill="#102A43" fillOpacity="0.4" />
                <path d="M0,250 C180,210 420,290 660,240 C900,190 1140,280 1440,250 L1440,400 L0,400Z" fill="#0E1F35" fillOpacity="0.5" />
                <path d="M0,290 C300,260 540,320 780,280 C1020,240 1260,310 1440,290 L1440,400 L0,400Z" fill="#0A1628" fillOpacity="0.7" />
                {/* Gold accent lines */}
                <path d="M0,210 C240,170 480,250 720,210 C960,170 1200,250 1440,210" stroke="#D4AF37" strokeWidth="0.7" strokeOpacity="0.15" fill="none" />
                <path d="M0,260 C300,220 540,300 780,250 C1020,200 1260,290 1440,260" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.10" fill="none" />
            </svg>

            {/* Gold glow */}
            <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />

            {/* Horizontal gold lines */}
            <div className="absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/[0.08] to-transparent z-0" />
            <div className="absolute top-[50%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/[0.05] to-transparent z-0" />

            {/* Grain overlay */}
            <div className="absolute inset-0 z-[2] grain pointer-events-none" />

            {/* Floating gold particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full z-[1] pointer-events-none"
                    style={{
                        left: `${5 + Math.random() * 90}%`,
                        top: `${5 + Math.random() * 90}%`,
                        width: `${Math.random() * 2 + 1}px`,
                        height: `${Math.random() * 2 + 1}px`,
                        backgroundColor: '#D4AF37',
                    }}
                    animate={{
                        y: [0, -(10 + Math.random() * 25), 0],
                        opacity: [0.05, 0.25 + Math.random() * 0.2, 0.05],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 6,
                        repeat: Infinity,
                        delay: Math.random() * 4,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* === Content === */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                className="relative z-10 px-4 mt-[-5vh] md:mt-[-8vh] max-w-6xl mx-auto"
            >
                {/* Gold arrows + title */}
                <div className="flex items-start justify-center gap-2 md:gap-4 mb-4">
                    <GoldArrows direction="left" className="text-3xl md:text-5xl mt-2 md:mt-4 opacity-60" />
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
                        <span className="gold-gradient-text">{title}</span>
                    </h1>
                    <GoldArrows direction="right" className="text-3xl md:text-5xl mt-2 md:mt-4 opacity-60" />
                </div>

                {subtitle && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mt-6"
                    >
                        {subtitle}
                    </motion.div>
                )}

                {children}
            </motion.div>

            {/* Scroll indicator */}
            {showScrollIndicator && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-[#D4AF37]/25 flex items-start justify-center p-1.5"
                    >
                        <div className="w-1.5 h-3 rounded-full bg-[#D4AF37]/40" />
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default PageHero;
