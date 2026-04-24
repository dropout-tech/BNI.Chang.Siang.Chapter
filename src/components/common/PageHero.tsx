import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    showScrollIndicator?: boolean;
    children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, showScrollIndicator = false, children }) => (
    <section className="min-h-[80vh] md:min-h-screen flex flex-col justify-center items-center text-center relative pt-24 pb-16 overflow-hidden bg-white">
        {/* Subtle BNI red accent top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#CF2030]" />

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #CF2030 1px, transparent 0)',
            backgroundSize: '40px 40px'
        }} />

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative z-10 px-4 max-w-5xl mx-auto"
        >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-[#333333] leading-[1.15]">
                {title}
            </h1>
            {subtitle && (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-base md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
                    {subtitle}
                </motion.div>
            )}
            {children}
        </motion.div>

        {showScrollIndicator && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5">
                    <div className="w-1.5 h-3 rounded-full bg-[#CF2030]" />
                </motion.div>
            </motion.div>
        )}
    </section>
);

export default PageHero;
