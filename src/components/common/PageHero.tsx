import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    showScrollIndicator?: boolean;
    children?: React.ReactNode;
    /** 首頁等可選：標題上的小標／定位句（不影響配色） */
    kicker?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    showScrollIndicator = false,
    children,
    kicker,
}) => (
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden pb-24 pt-8 text-center md:min-h-[90vh] md:pb-28 md:pt-10">
        {/* --- 底層：延續白＋淡玫底，加厚中心光暈 --- */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFF9F9] to-[#FFF3F5]" />

        {/* 呼吸的中心光斑（同色票，只做體感） */}
        <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[42%] h-[min(560px,90vw)] w-[min(560px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 md:top-[38%]"
            style={{
                background:
                    'radial-gradient(circle, rgba(207,32,48,0.07) 0%, rgba(207,32,48,0.02) 45%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.75, 0.95, 0.75] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* 幾何裝飾（保留原紅色相，略收邊視覺份量） */}
        <div className="pointer-events-none absolute top-[-8%] right-[-6%] h-[460px] w-[460px] rounded-full border border-[#CF2030]/[0.06] md:right-[-4%]" />
        <div className="pointer-events-none absolute top-[-4%] right-[-4%] h-[280px] w-[280px] rounded-full border border-[#CF2030]/[0.10]" />
        <div className="pointer-events-none absolute bottom-[-12%] left-[-10%] h-[380px] w-[380px] rounded-full bg-[#CF2030]/[0.025]" />

        {/* 細點網 */}
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
                backgroundImage:
                    'radial-gradient(circle at 1px 1px, #CF2030 1px, transparent 0)',
                backgroundSize: '28px 28px',
            }}
        />

        {/* 頂部紅條 */}
        <div className="absolute left-0 right-0 top-0 z-[2] h-1 bg-gradient-to-r from-[#CF2030] via-[#E8394A] to-[#CF2030]" />

        <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto w-full max-w-5xl px-4 md:max-w-[56rem]"
        >
            {kicker && (
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.08 }}
                    className="mx-auto mb-7 inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-4"
                >
                    <span className="inline-flex items-center rounded-full border border-[#CF2030]/20 bg-white/85 px-4 py-2 text-[11px] font-black uppercase tracking-[0.42em] text-[#CF2030] shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-sm md:px-5 md:text-xs">
                        {kicker}
                    </span>
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: kicker ? 0.14 : 0.08 }}
                className="relative mb-8 md:mb-9"
            >
                <h1 className="text-[2.65rem] font-black leading-[1.08] tracking-tight text-[#222] drop-shadow-[0_1px_0_rgba(255,255,255,1)] sm:text-5xl md:text-6xl lg:text-7xl">
                    {title}
                </h1>
                <span
                    aria-hidden
                    className="mx-auto mt-6 flex h-[3px] w-16 justify-center rounded-full bg-gradient-to-r from-[#CF2030] to-[#E8394A] md:mt-7 md:w-[4.25rem]"
                />
            </motion.div>

            {subtitle && (
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.32 }}
                    className="relative mx-auto max-w-xl border border-[#CF2030]/[0.12] bg-white/80 px-6 py-5 text-[0.9375rem] leading-relaxed text-gray-600 shadow-[0_22px_50px_-24px_rgba(207,32,48,0.18)] backdrop-blur-sm md:max-w-2xl md:px-10 md:text-lg md:leading-relaxed"
                    style={{
                        borderRadius: '1rem',
                        boxShadow:
                            'inset 0 1px 0 rgba(255,255,255,0.92), 0 22px 50px -24px rgba(207,32,48,0.14)',
                    }}
                >
                    {subtitle}
                </motion.div>
            )}

            {children && (
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.48 }}
                    className="relative mt-10 md:mt-12"
                >
                    <span
                        aria-hidden
                        className="mx-auto mb-8 block h-px max-w-[200px] bg-gradient-to-r from-transparent via-[#CF2030]/15 to-transparent"
                    />
                    {children}
                </motion.div>
            )}
        </motion.div>

        {showScrollIndicator && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.35 }}
                className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2 md:bottom-9"
            >
                <motion.div
                    animate={{ y: [0, 9, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-[#CF2030]/35 bg-white/30 p-1.5 backdrop-blur-[2px]"
                >
                    <motion.div
                        animate={{ opacity: [0.35, 1, 0.35] }}
                        transition={{ duration: 2.4, repeat: Infinity }}
                        className="h-2.5 w-1 rounded-full bg-gradient-to-b from-[#CF2030] to-[#E8394A]"
                    />
                </motion.div>
            </motion.div>
        )}
    </section>
);

export default PageHero;
