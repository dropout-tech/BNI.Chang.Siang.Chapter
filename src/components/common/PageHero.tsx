import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    showScrollIndicator?: boolean;
    children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, showScrollIndicator = false, children }) => (
    <section className="min-h-[85vh] md:min-h-screen flex flex-col justify-center items-center text-center relative pt-24 pb-16 overflow-hidden">
        {/* Background: BNI white/red with subtle executive texture */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#fff8f8_48%,#ffffff_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(207,32,48,0.08),transparent)]" />

        {/* Decorative circles */}
        <div className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] rounded-full border border-[#CF2030]/10" />
        <div className="absolute top-[-5%] right-[-2%] w-[350px] h-[350px] rounded-full border border-[#CF2030]/15" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[420px] h-[420px] rounded-full bg-[#CF2030]/[0.035] blur-sm" />
        <div className="absolute left-6 md:left-16 top-32 h-40 w-2 rounded-full bg-gradient-to-b from-[#CF2030] to-transparent opacity-80" />
        <div className="absolute right-6 md:right-20 bottom-20 h-28 w-28 rounded-3xl border border-[#CF2030]/10 rotate-12" />

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #CF2030 0.5px, transparent 0)',
            backgroundSize: '32px 32px'
        }} />

        {/* Top red accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#CF2030] via-[#E8394A] to-[#CF2030]" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="relative z-10 px-4 max-w-5xl mx-auto">
            <div className="bni-kicker mb-5 mx-auto">BNI Chang Siang Chapter</div>
            <h1 className="bni-gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.12] drop-shadow-sm">{title}</h1>
            {subtitle && (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed bg-white/55 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/70 shadow-[0_18px_50px_rgba(207,32,48,0.06)]">{subtitle}</motion.div>
            )}
            {children}
        </motion.div>

        {showScrollIndicator && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
                    className="w-7 h-11 rounded-full border-2 border-[#CF2030]/30 flex items-start justify-center p-1.5">
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-3 rounded-full bg-[#CF2030]" />
                </motion.div>
            </motion.div>
        )}
    </section>
);

export default PageHero;
