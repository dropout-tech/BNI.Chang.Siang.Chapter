import React from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '../../lib/assets';

const HomeHero: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center pt-24 bg-[#0A1220] brushed-metal-dark grain-heavy">
            {/* === Deep Background Layer: The Wing Cascades === */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Massive curved wing panels with deep drop shadows to simulate texture depth */}
                {/* Left massive wing */}
                <motion.div 
                    initial={{ opacity: 0, x: -100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute -left-[20%] top-[-10%] w-[80vw] h-[120vh] rounded-[100%] border border-[#ffffff03] 
                        shadow-[30px_0_50px_-10px_rgba(0,0,0,0.8)]"
                    style={{ background: 'linear-gradient(135deg, rgba(8,18,34,0.9), rgba(12,28,51,0.9))' }}
                />
                
                {/* Right massive wing */}
                <motion.div 
                    initial={{ opacity: 0, x: 100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="absolute right-[-10%] top-[10%] w-[60vw] h-[100vh] rounded-[100%] border border-[#ffffff03] 
                        shadow-[-30px_0_60px_-15px_rgba(0,0,0,0.9)]"
                    style={{ background: 'linear-gradient(225deg, rgba(10,22,40,0.95), rgba(6,12,22,0.95))' }}
                />

                {/* Bottom swooping accent line */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[150vw] h-[50vh] rounded-[100%] border-t-[2px] border-[#D4AF37]/10"
                />
            </div>

            {/* === Hero Content Container === */}
            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 max-w-[90rem] flex flex-col md:flex-row items-center md:items-end justify-between gap-12 lg:gap-8 mb-20 w-full">
                
                {/* Left Side: Staggered Typography */}
                <div className="flex flex-col relative w-full md:w-auto left-content-wrapper pl-0 md:pl-10">
                    {/* Background glow for text readability */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#D4AF37]/5 blur-[60px] rounded-full pointer-events-none -z-10" />

                    {/* Top Text: 長翔展翼 */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex items-center gap-4 relative z-0"
                    >
                        <span className="text-2xl md:text-5xl text-[#D4AF37]/70 font-black tracking-widest animate-pulse select-none">&lt;&lt;&lt;</span>
                        <h1 
                            className="text-6xl sm:text-7xl md:text-[6rem] lg:text-[8rem] font-black tracking-widest leading-none select-none text-[#A8986B] whitespace-nowrap"
                            style={{ 
                                textShadow: '3px 3px 0px rgba(0,0,0,0.6), -1px -1px 0px rgba(255,255,255,0.05)'
                            }}
                        >
                            長翔展翼
                        </h1>
                    </motion.div>

                    {/* Bottom Text: 商機無限 */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex items-end gap-4 md:ml-[15%] -mt-6 md:-mt-10 relative z-10"
                    >
                        {/* Thin glass enclosing box detail as seen in reference */}
                        <div className="absolute -inset-x-8 inset-y-2 border border-[#D4AF37]/30 pointer-events-none hidden md:block" />
                        
                        <h1 className="text-6xl sm:text-7xl md:text-[7rem] lg:text-[9.5rem] font-black tracking-widest leading-none select-none gold-text drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)] whitespace-nowrap">
                            商機無限
                        </h1>
                        <span className="text-3xl md:text-6xl gold-chevron mb-2 md:mb-6 animate-pulse select-none">&gt;&gt;&gt;</span>
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
                    <div className="text-[8rem] md:text-[10rem] lg:text-[14rem] font-black text-white leading-[0.8] tracking-tighter select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] font-sans">
                        BNI
                    </div>
                    
                    {/* Separator line */}
                    <div className="w-[110%] h-[2px] mt-4 mb-4 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
                    
                    {/* Subtitle */}
                    <h2 className="text-[#D4AF37] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.6em] md:tracking-[1em] font-serif text-center md:text-right drop-shadow-md whitespace-nowrap">
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
