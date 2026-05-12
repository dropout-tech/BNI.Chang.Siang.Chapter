import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    showScrollIndicator?: boolean;
    children?: React.ReactNode;
    /** 首頁等可選：標題上的小標／定位句（不影響配色） */
    kicker?: React.ReactNode;
    variant?: 'default' | 'home';
}

const heroParticles = [
    { left: '14%', top: '24%', delay: 0.2, size: '3px' },
    { left: '28%', top: '70%', delay: 1.4, size: '2px' },
    { left: '52%', top: '18%', delay: 0.8, size: '2px' },
    { left: '73%', top: '66%', delay: 1.8, size: '3px' },
    { left: '86%', top: '34%', delay: 0.4, size: '2px' },
    { left: '43%', top: '82%', delay: 2.2, size: '2px' },
];

const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    showScrollIndicator = false,
    children,
    kicker,
    variant = 'default',
}) => {
    const isHome = variant === 'home';

    return (
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden bg-white pb-24 pt-8 text-center md:min-h-[90vh] md:pb-28 md:pt-10">
        {isHome ? (
            <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.98),transparent_18%),radial-gradient(circle_at_18%_18%,rgba(207,32,48,0.13),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(212,175,55,0.11),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fff8f8_58%,#ffffff_100%)]" />
                <motion.div
                    aria-hidden
                    animate={{ x: ['-10%', '7%', '-10%'], opacity: [0.18, 0.42, 0.18] }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-1/2 top-[44%] h-[46vh] w-[130vw] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] bg-[linear-gradient(90deg,transparent,rgba(207,32,48,0.13),rgba(255,255,255,0.8),transparent)] blur-3xl"
                />
                <motion.div
                    aria-hidden
                    animate={{ rotate: [0, 4, 0], scale: [1, 1.03, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -right-24 -top-20 h-[560px] w-[560px] rounded-full border border-[#CF2030]/10 shadow-[inset_0_0_80px_rgba(207,32,48,0.035)]"
                />
                <motion.div
                    aria-hidden
                    animate={{ rotate: [0, -4, 0], opacity: [0.3, 0.58, 0.3] }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -left-28 bottom-[-18%] h-[520px] w-[720px] rounded-[100%] border-t border-[#CF2030]/12 shadow-[0_-28px_90px_rgba(207,32,48,0.08)]"
                />
                <div className="absolute inset-0 opacity-[0.08]" style={{
                    backgroundImage: 'linear-gradient(rgba(207,32,48,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(207,32,48,0.45) 1px, transparent 1px)',
                    backgroundSize: '54px 54px',
                    maskImage: 'linear-gradient(to bottom, black 0%, black 58%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 58%, transparent 100%)',
                }} />
                {heroParticles.map((particle) => (
                    <motion.div
                        key={`${particle.left}-${particle.top}`}
                        aria-hidden
                        animate={{ y: [0, -18, 0], opacity: [0.16, 0.72, 0.16], scale: [1, 1.4, 1] }}
                        transition={{ duration: 6.5, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
                        className="absolute rounded-full bg-[#CF2030] shadow-[0_0_18px_rgba(207,32,48,0.38)]"
                        style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
                    />
                ))}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent" />
            </>
        ) : (
            <>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFF9F9] to-[#FFF3F5]" />
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
            </>
        )}

        {!isHome && (
            <>
                <div className="pointer-events-none absolute top-[-8%] right-[-6%] h-[460px] w-[460px] rounded-full border border-[#CF2030]/[0.06] md:right-[-4%]" />
                <div className="pointer-events-none absolute top-[-4%] right-[-4%] h-[280px] w-[280px] rounded-full border border-[#CF2030]/[0.10]" />
                <div className="pointer-events-none absolute bottom-[-12%] left-[-10%] h-[380px] w-[380px] rounded-full bg-[#CF2030]/[0.025]" />
            </>
        )}

        <div className={`absolute inset-0 ${isHome ? 'opacity-[0.05]' : 'opacity-[0.03]'}`} style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #CF2030 1px, transparent 0)',
            backgroundSize: isHome ? '32px 32px' : '28px 28px'
        }} />

        <div className={`absolute top-0 left-0 right-0 h-1 ${isHome ? 'bg-gradient-to-r from-transparent via-[#CF2030] to-transparent' : 'bg-gradient-to-r from-[#CF2030] via-[#E8394A] to-[#CF2030]'}`} />

        <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto w-full max-w-5xl px-4 md:max-w-[56rem]"
        >
            {(kicker || isHome) && (
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.08 }}
                    className="mx-auto mb-7 inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-4"
                >
                    <span className={isHome ? 'inline-flex items-center rounded-full border border-[#CF2030]/16 bg-white/80 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.32em] text-[#CF2030] shadow-[0_16px_48px_rgba(207,32,48,0.10)] backdrop-blur-md md:px-5 md:text-xs' : 'inline-flex items-center rounded-full border border-[#CF2030]/20 bg-white/85 px-4 py-2 text-[11px] font-black uppercase tracking-[0.42em] text-[#CF2030] shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-sm md:px-5 md:text-xs'}>
                        {kicker || '白金分會・每週三清晨・晶宴民生館'}
                    </span>
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: kicker ? 0.14 : 0.08 }}
                className="relative mb-8 md:mb-9"
            >
                <h1 className={isHome ? 'text-5xl font-black leading-[0.98] tracking-tight text-[#19191d] drop-shadow-[0_1px_0_rgba(255,255,255,1)] sm:text-6xl md:text-7xl lg:text-8xl [&_span:first-child]:bg-[linear-gradient(135deg,#CF2030_0%,#E8394A_46%,#A51926_100%)] [&_span:first-child]:bg-clip-text [&_span:first-child]:text-transparent [&_span:last-child]:text-[#19191d]' : 'text-[2.65rem] font-black leading-[1.08] tracking-tight text-[#222] drop-shadow-[0_1px_0_rgba(255,255,255,1)] sm:text-5xl md:text-6xl lg:text-7xl'}>
                    {title}
                </h1>
                <span
                    aria-hidden
                    className={isHome ? 'mx-auto mt-7 flex h-[3px] w-20 justify-center rounded-full bg-gradient-to-r from-transparent via-[#CF2030] to-transparent shadow-[0_0_18px_rgba(207,32,48,0.18)]' : 'mx-auto mt-6 flex h-[3px] w-16 justify-center rounded-full bg-gradient-to-r from-[#CF2030] to-[#E8394A] md:mt-7 md:w-[4.25rem]'}
                />
            </motion.div>

            {subtitle && (
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={isHome ? 'relative mx-auto max-w-2xl text-base font-medium leading-relaxed text-gray-600 md:text-lg md:leading-relaxed' : 'relative mx-auto max-w-xl text-[0.9375rem] leading-relaxed text-gray-600 md:max-w-2xl md:text-lg md:leading-relaxed'}
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
                        className={isHome ? 'mx-auto mb-8 block h-px max-w-[220px] bg-gradient-to-r from-transparent via-[#CF2030]/16 to-transparent' : 'mx-auto mb-8 block h-px max-w-[200px] bg-gradient-to-r from-transparent via-[#CF2030]/15 to-transparent'}
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
                    className={`flex h-11 w-7 items-start justify-center rounded-full border-2 p-1.5 backdrop-blur-[2px] ${isHome ? 'border-[#CF2030]/28 bg-white/55' : 'border-[#CF2030]/35 bg-white/30'}`}
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
};

export default PageHero;
