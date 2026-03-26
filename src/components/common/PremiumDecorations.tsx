import React from 'react';
import { motion } from 'framer-motion';

export const GlowingChevron: React.FC<{ direction: 'left' | 'right', className?: string }> = ({ direction, className = '' }) => (
    <svg 
        className={`w-6 h-6 md:w-10 md:h-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] ${direction === 'left' ? 'rotate-180' : ''} ${className}`} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M5 12L12 5L14.828 7.828L10.657 12L14.828 16.172L12 19L5 12Z" fill="url(#chevron-gold-shared)" />
        <path d="M11 12L18 5L20.828 7.828L16.657 12L20.828 16.172L18 19L11 12Z" fill="url(#chevron-gold-shared)" opacity="0.6"/>
        <defs>
            <linearGradient id="chevron-gold-shared" x1="5" y1="5" x2="20.828" y2="19" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5E6B8" />
                <stop offset="0.5" stopColor="#D4AF37" />
                <stop offset="1" stopColor="#B8960C" />
            </linearGradient>
        </defs>
    </svg>
);

export const LuxuryBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Soft Breathing Lens Flare / Glow Backdrop */}
            <motion.div 
                animate={{ opacity: [0.05, 0.2, 0.05], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[100px] rounded-full mix-blend-screen"
            />
            <motion.div 
                animate={{ opacity: [0.05, 0.15, 0.05], scale: [1.1, 1, 1.1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#F5E6B8]/5 blur-[90px] rounded-full mix-blend-screen"
            />
            
            {/* Floating Gold Particles */}
            {Array.from({length: 15}).map((_, i) => (
                <motion.div key={`particle-${i}`} className="absolute rounded-full"
                    style={{ 
                        left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, 
                        width: `${Math.random()*3+1}px`, height: `${Math.random()*3+1}px`, 
                        backgroundColor: '#D4AF37', boxShadow: '0 0 10px rgba(212,175,55,0.8)' 
                    }}
                    animate={{ 
                        y: [0, -(30+Math.random()*50), 0], 
                        opacity: [0, 0.4+Math.random()*0.4, 0], 
                        scale: [1, 1.3, 1] 
                    }}
                    transition={{ 
                        duration: 6+Math.random()*8, 
                        repeat: Infinity, 
                        delay: Math.random()*5, 
                        ease: 'easeInOut' 
                    }}
                />
            ))}
        </div>
    );
};
