import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    showScrollIndicator?: boolean;
    children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ title, showScrollIndicator = false }) => {
    const { scrollYProgress } = useScroll();
    
    // Smooth scroll parallax for the background elements
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Mouse interactive parallax
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const smoothMouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
            const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
            setMousePosition({ x, y });
            smoothMouseX.set(x * 40); // Max 40px movement
            smoothMouseY.set(y * 40);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [smoothMouseX, smoothMouseY]);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 pt-20 overflow-hidden grain-heavy brushed-metal-dark group">
            
            {/* Massive Background Typography interacting with mouse */}
            <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center pointer-events-none select-none z-0"
                style={{ 
                    x: useTransform(smoothMouseX, x => x * -1 + '-50%'), 
                    y: useTransform(smoothMouseY, y => y * -1 + '-50%'),
                    opacity: opacityParallax
                }}
            >
                <div className="text-[12rem] md:text-[20rem] font-black leading-none text-outline-gold tracking-tighter mix-blend-screen opacity-40">
                    PLATINUM
                </div>
                <div className="text-[8rem] md:text-[14rem] font-black leading-none text-outline-gold tracking-[0.2em] mix-blend-screen opacity-20 -mt-20">
                    CHAPTER
                </div>
            </motion.div>

            {/* Glowing Mouse-chasing Orb */}
            <motion.div 
                className="absolute w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen z-0"
                style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
                    x: smoothMouseX,
                    y: smoothMouseY,
                }}
            />

            {/* Foreground Content */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 50 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
                style={{ y: yParallax, opacity: opacityParallax }}
                className="relative z-10 w-full px-4 flex flex-col items-center"
            >
                {/* Micro Subtitle above Main Title */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="flex justify-center items-center gap-4 mb-6"
                >
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                    <span className="text-[#D4AF37] tracking-[0.4em] text-xs md:text-sm font-bold uppercase">Taipei Elite Business Network</span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
                </motion.div>

                {/* Staggered Floating Main Title */}
                <motion.h1 
                    className="text-6xl sm:text-7xl md:text-[7rem] lg:text-[9rem] font-black tracking-tighter leading-[1.0] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex flex-col items-center"
                >
                    <motion.span 
                        style={{ x: useTransform(smoothMouseX, x => x * 0.5) }} /* Foreground moves WITH mouse slightly */
                        className="gold-text inline-block"
                    >
                        {title}
                    </motion.span>
                </motion.h1>

                {/* Vertical Decor Line */}
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 100, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    className="w-px bg-gradient-to-b from-[#D4AF37] to-transparent mt-12 hidden md:block"
                />
            </motion.div>

            {/* Awwwards Style Rotating Scroll Badge */}
            {showScrollIndicator && (
                <motion.div 
                    initial={{ scale: 0, opacity: 0, rotate: -90 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 2, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute bottom-12 right-8 md:right-16 z-20 flex items-center justify-center p-4 cursor-pointer group"
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                >
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        {/* Rotating SVG Text */}
                        <svg className="absolute inset-0 w-full h-full spin-slow group-hover:text-[#D4AF37] transition-colors duration-500 text-gray-400" viewBox="0 0 100 100">
                            <defs>
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text fontSize="10" fontLength="100" fontWeight="bold" letterSpacing="2.5" fill="currentColor">
                                <textPath href="#circlePath" startOffset="0%">
                                    SCROLL TO EXPLORE  •  BNI PLATINUM CHAPTER  •  
                                </textPath>
                            </text>
                        </svg>
                        {/* Central Arrow */}
                        <div className="text-[#D4AF37] group-hover:translate-y-2 transition-transform duration-500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <polyline points="19 12 12 19 5 12"></polyline>
                            </svg>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
};

export default PageHero;
