import React from 'react';
import { motion } from 'framer-motion';
const GlowingChevron: React.FC<{ direction: 'left' | 'right', className?: string }> = ({ direction, className = '' }) => (
    <svg 
        className={`w-6 h-6 md:w-12 md:h-12 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] ${direction === 'left' ? 'rotate-180' : ''} ${className}`} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M5 12L12 5L14.828 7.828L10.657 12L14.828 16.172L12 19L5 12Z" fill="url(#chevron-gold)" />
        <path d="M11 12L18 5L20.828 7.828L16.657 12L20.828 16.172L18 19L11 12Z" fill="url(#chevron-gold)" opacity="0.6"/>
        <defs>
            <linearGradient id="chevron-gold" x1="5" y1="5" x2="20.828" y2="19" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5E6B8" />
                <stop offset="0.5" stopColor="#D4AF37" />
                <stop offset="1" stopColor="#B8960C" />
            </linearGradient>
        </defs>
    </svg>
);

const HomeHero: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center pt-24 bg-transparent">
            {/* === Deep Background Layer: The Wing Cascades === */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Massive curved wing panels with deep drop shadows to simulate texture depth */}
                {/* Left massive wing */}
                <motion.div 
                    initial={{ opacity: 0, x: -100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute -left-[20%] top-[-10%] w-[80vw] h-[120vh] rounded-[100%] border-r border-[#D4AF37]/20
                        shadow-[40px_0_80px_-10px_rgba(0,0,0,0.9)]"
                    style={{ background: 'linear-gradient(135deg, rgba(8,18,34,0.95), rgba(12,28,51,0.95))' }}
                />
                
                {/* Right massive wing */}
                <motion.div 
                    initial={{ opacity: 0, x: 100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="absolute right-[-10%] top-[10%] w-[60vw] h-[100vh] rounded-[100%] border-l border-[#D4AF37]/15
                        shadow-[-40px_0_80px_-15px_rgba(0,0,0,0.95)]"
                    style={{ background: 'linear-gradient(225deg, rgba(10,22,40,0.98), rgba(6,12,22,0.98))' }}
                />

                {/* Bottom swooping accent line */}
                <motion.div
                    animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[150vw] h-[50vh] rounded-[100%] border-t-[3px] border-[#D4AF37]/20 shadow-[0_-10px_30px_rgba(212,175,55,0.1)]"
                />

                {/* Floating Gold Particles for Luxury */}
                {Array.from({length:20}).map((_,i) => (
                    <motion.div key={i} className="absolute rounded-full z-[1] pointer-events-none"
                        style={{ left:`${Math.random()*100}%`, top:`${Math.random()*100}%`, width:`${Math.random()*3+1}px`, height:`${Math.random()*3+1}px`, backgroundColor:'#D4AF37', boxShadow: '0 0 15px rgba(212,175,55,1)' }}
                        animate={{ y:[0,-(30+Math.random()*60),0], x:[0, Math.random() > 0.5 ? 20 : -20, 0], opacity:[0, 0.6+Math.random()*0.4, 0], scale: [1, 1.5, 1] }}
                        transition={{ duration:8+Math.random()*10, repeat:Infinity, delay:Math.random()*8, ease:'easeInOut' }}
                    />
                ))}
            </div>

            {/* === Hero Content Container === */}
            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 max-w-[90rem] flex flex-col md:flex-row items-center md:items-end justify-between gap-12 lg:gap-8 mb-20 w-full">
                
                {/* Left Side: Staggered Typography */}
                <div className="flex flex-col relative w-full md:w-auto left-content-wrapper pl-0 md:pl-10">
                    {/* Background glow for text readability */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none -z-10" />

                    {/* Lens Flare effect */}
                    <div className="absolute top-[30%] -left-[10%] w-[200px] h-[50px] bg-[#F5E6B8]/40 blur-[20px] rounded-full rotate-45 pointer-events-none -z-10 mix-blend-overlay" />
                    
                    {/* Top Text: 長翔展翼 */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }} 
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                        className="flex items-center gap-6 relative z-0"
                    >
                        {/* SVG Chevron Decorative icon replacing text */}
                        <div className="animate-pulse opacity-90 mt-4 md:mt-8">
                            <GlowingChevron direction="left" />
                        </div>
                        
                        <h1 className="text-6xl sm:text-7xl md:text-[6rem] lg:text-[8.5rem] font-black tracking-widest leading-none select-none whitespace-nowrap gold-foil-text">
                            長翔展翼
                        </h1>
                    </motion.div>

                    {/* Bottom Text: 商機無限 */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }} 
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} 
                        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                        className="flex items-end gap-6 md:ml-[15%] -mt-6 md:-mt-10 relative z-10"
                    >
                        {/* Glass box decoration matching reference */}
                        <div className="absolute -inset-x-10 inset-y-0 border border-[#D4AF37]/40 bg-gradient-to-r from-white/5 to-transparent pointer-events-none hidden md:block rounded-l-lg shadow-[inset_2px_0_10px_rgba(212,175,55,0.1)] backdrop-blur-[2px]" />
                        
                        <h1 className="text-6xl sm:text-7xl md:text-[7rem] lg:text-[10rem] font-black tracking-[0.15em] leading-none select-none whitespace-nowrap gold-foil-text">
                            商機無限
                        </h1>

                        <div className="animate-pulse opacity-90 mb-4 md:mb-10">
                            <GlowingChevron direction="right" />
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: BNI Text Logo & Subtitle */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col items-center md:items-end md:pb-8 pr-0 md:pr-10 shrink-0"
                >
                    {/* BNI text instead of image to match the clean solid white look perfectly */}
                    <div className="text-[8rem] md:text-[10rem] lg:text-[14rem] font-black text-white leading-[0.8] tracking-tighter select-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] font-sans">
                        BNI
                    </div>
                    
                    {/* Separator line */}
                    <div className="w-[110%] h-[2px] mt-4 mb-4 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,1)]" />
                    
                    {/* Subtitle */}
                    <h2 className="text-[#D4AF37] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.6em] md:tracking-[1.2em] font-serif text-center md:text-right drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)] whitespace-nowrap">
                        長翔名人堂白金分會
                    </h2>
                </motion.div>

            </div>

            {/* Call to action or external props */}
            {children && (
                <div className="relative z-20 w-full max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 -mt-16 mb-10 flex justify-center md:justify-start pl-0 md:pl-10">
                    <div className="md:ml-[15%]">
                        {children}
                    </div>
                </div>
            )}

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 2 }} 
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div 
                    animate={{ y: [0, 8, 0] }} 
                    transition={{ duration: 2, repeat: Infinity }} 
                    className="w-6 h-10 rounded-full border-2 border-[#D4AF37]/30 flex items-start justify-center p-1.5"
                >
                    <div className="w-1.5 h-3 rounded-full bg-[#D4AF37]/50" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HomeHero;
