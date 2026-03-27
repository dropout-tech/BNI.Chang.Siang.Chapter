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
            {/* Majestic Sweeping Light Beams replacing 'two soft dots' */}
            <motion.div 
                animate={{ rotate: [0, 5, 0], opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] origin-center mix-blend-screen"
                style={{ background: 'conic-gradient(from 90deg at 20% 20%, transparent 0deg, rgba(212,175,55,0.06) 45deg, transparent 90deg)' }}
            />
            <motion.div 
                animate={{ rotate: [0, -5, 0], opacity: [0.2, 0.6, 0.2], scale: [1.1, 1, 1.1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[120%] origin-center mix-blend-screen"
                style={{ background: 'conic-gradient(from 270deg at 80% 80%, transparent 0deg, rgba(245,230,184,0.06) 45deg, transparent 90deg)' }}
            />
            
            {/* Glowing Embers */}
            {Array.from({length: 20}).map((_, i) => (
                <motion.div key={`ember-${i}`} className="absolute rounded-full"
                    style={{ 
                        left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, 
                        width: `${Math.random()*3+2}px`, height: `${Math.random()*3+2}px`, 
                        background: 'radial-gradient(circle, #FFF 0%, #D4AF37 50%, transparent 100%)',
                        boxShadow: '0 0 15px rgba(212,175,55,1)' 
                    }}
                    animate={{ 
                        y: [0, -(50+Math.random()*80), 0], 
                        x: [0, Math.random() > 0.5 ? 20 : -20, 0],
                        opacity: [0, 0.6+Math.random()*0.4, 0], 
                        scale: [1, 1.5, 1] 
                    }}
                    transition={{ 
                        duration: 8+Math.random()*10, 
                        repeat: Infinity, 
                        delay: Math.random()*8, 
                        ease: 'easeInOut' 
                    }}
                />
            ))}
        </div>
    );
};
