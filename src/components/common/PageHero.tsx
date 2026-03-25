import React from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '../../lib/assets';

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    showScrollIndicator?: boolean;
    children?: React.ReactNode;
}

const WaveLayers: React.FC = () => (
    <svg className="absolute bottom-0 left-0 w-full h-[60%] opacity-80" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {/* Deep wave layers */}
        <path d="M0,300 C240,260 480,340 720,300 C960,260 1200,340 1440,300 L1440,600 L0,600Z" fill="#102A43" fillOpacity="0.5" />
        <path d="M0,350 C180,310 420,390 660,340 C900,290 1140,380 1440,350 L1440,600 L0,600Z" fill="#0E1F35" fillOpacity="0.6" />
        <path d="M0,400 C300,360 540,430 780,380 C1020,330 1260,420 1440,400 L1440,600 L0,600Z" fill="#0A1628" fillOpacity="0.7" />
        <path d="M0,440 C200,420 480,470 720,440 C960,410 1200,460 1440,440 L1440,600 L0,600Z" fill="#081320" fillOpacity="0.8" />
        {/* Gold accent lines */}
        <path d="M0,310 C240,270 480,350 720,310 C960,270 1200,350 1440,310" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.2" fill="none" />
        <path d="M0,370 C300,330 540,410 780,360 C1020,310 1260,400 1440,370" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />
        <path d="M0,420 C200,400 480,450 720,420 C960,390 1200,440 1440,420" stroke="#E8C547" strokeWidth="0.5" strokeOpacity="0.1" fill="none" />
    </svg>
);

const FloatingGoldParticles: React.FC = () => (
    <>
        {[...Array(12)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                    backgroundColor: '#D4AF37',
                }}
                animate={{
                    y: [0, -(15 + Math.random() * 20), 0],
                    opacity: [0.1, 0.4 + Math.random() * 0.3, 0.1],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: 'easeInOut',
                }}
            />
        ))}
    </>
);

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, showScrollIndicator = false, children }) => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 pt-20 overflow-hidden" aria-label="BNI 長翔名人堂白金分會">
            {/* Gradient base */}
            <div className="absolute inset-0 z-0" style={{
                background: 'linear-gradient(180deg, #0A1628 0%, #102A43 30%, #1A3A5C 50%, #102A43 70%, #0A1628 100%)'
            }} />

            {/* Wave layers */}
            <WaveLayers />

            {/* Gold glow orbs */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-[200px] opacity-[0.04]" />
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#D4AF37] rounded-full blur-[150px] opacity-[0.03]" />
            </div>

            {/* Horizontal gold lines */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />
                <div className="absolute top-[45%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent" />
                <div className="absolute bottom-[35%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/8 to-transparent" />
            </div>

            {/* Floating particles */}
            <FloatingGoldParticles />

            {/* Grain texture overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative z-10 px-4 mt-[-5vh] md:mt-[-10vh]"
            >
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight font-sans">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#F5E6B8] via-[#D4AF37] to-[#B8960C] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                        {title}
                    </span>
                </h1>
                {subtitle && (
                    <div className="text-base md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
                        {subtitle}
                    </div>
                )}
                {children}
            </motion.div>

            {/* Scroll indicator */}
            {showScrollIndicator && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-[#D4AF37]/30 flex items-start justify-center p-1.5"
                    >
                        <div className="w-1.5 h-3 rounded-full bg-[#D4AF37]/50" />
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default PageHero;
