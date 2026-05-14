import React from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '../../lib/assets';
import { siteConfig } from '../../config/site.config';

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    showScrollIndicator?: boolean;
    children?: React.ReactNode;
    /** 首頁等可選：標題上的小標／定位句（不影響配色） */
    kicker?: React.ReactNode;
    variant?: 'default' | 'home';
}

const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    showScrollIndicator = false,
    children,
    kicker,
    variant = 'default',
}) => {
    const isHome = variant === 'home';
    const homeHeroImage = assetUrl('/images/assets/hero/chang-siang-hero-bg.webp');

    return (
    <section
        className={
            isHome
                ? 'relative -mt-7 flex min-h-[88vh] flex-col justify-center overflow-hidden bg-white pb-24 pt-8 text-center md:min-h-[90vh] md:pb-28 md:pt-10 md:text-left'
                : 'relative flex min-h-[52vh] flex-col justify-center overflow-hidden bg-white pb-16 pt-14 text-center sm:min-h-[56vh] sm:pb-16 sm:pt-16 md:min-h-[58vh] md:pb-20 md:pt-16 lg:min-h-[62vh] lg:pb-24'
        }
    >
        {isHome ? (
            <>
                <div
                    className="absolute inset-0 scale-[1.02] bg-cover bg-[center_43%]"
                    style={{
                        backgroundImage: `url(${homeHeroImage})`,
                        filter: 'saturate(0.98) contrast(1.08) brightness(1.04)',
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'linear-gradient(90deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.58) 34%, rgba(255,255,255,0.20) 66%, rgba(255,255,255,0.12) 100%)',
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            'radial-gradient(circle at 18% 28%, rgba(207,32,48,0.20), transparent 32%), radial-gradient(circle at 78% 18%, rgba(212,175,55,0.08), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.10) 58%, #ffffff 100%)',
                    }}
                />
                <motion.div
                    aria-hidden
                    animate={{ x: ['-12%', '8%', '-12%'], opacity: [0.16, 0.36, 0.16] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-1/2 top-[42%] h-[42vh] w-[130vw] -translate-x-1/2 -translate-y-1/2 rotate-[-7deg] bg-[linear-gradient(90deg,transparent,rgba(207,32,48,0.18),rgba(255,255,255,0.72),transparent)] blur-3xl"
                />
                <motion.div
                    aria-hidden
                    animate={{ rotate: [0, 4, 0], scale: [1, 1.03, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -right-24 -top-20 h-[560px] w-[560px] rounded-full border border-white/35 shadow-[inset_0_0_90px_rgba(255,255,255,0.16)]"
                />
                <motion.div
                    aria-hidden
                    animate={{ rotate: [0, -4, 0], opacity: [0.3, 0.58, 0.3] }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -left-28 bottom-[-18%] h-[520px] w-[720px] rounded-[100%] border-t border-[#CF2030]/18 shadow-[0_-28px_90px_rgba(207,32,48,0.14)]"
                />
                <div className="absolute inset-0 opacity-[0.08]" style={{
                    backgroundImage: 'linear-gradient(rgba(207,32,48,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(207,32,48,0.45) 1px, transparent 1px)',
                    backgroundSize: '54px 54px',
                    maskImage: 'linear-gradient(to bottom, black 0%, black 58%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 58%, transparent 100%)',
                }} />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/58 to-transparent" />
            </>
        ) : (
            <>
                <div
                    className="absolute inset-0 opacity-[0.2] sm:opacity-[0.24] md:opacity-[0.26]"
                    style={{
                        backgroundImage: `url(${homeHeroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 32%',
                    }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(168deg,rgba(255,255,255,0.94)_0%,rgba(255,252,252,0.92)_45%,rgba(255,245,247,0.96)_100%)]" />
                <div
                    className="absolute inset-0 opacity-90"
                    style={{
                        background:
                            'radial-gradient(ellipse 95% 52% at 50% -8%, rgba(207,32,48,0.11), transparent 58%)',
                    }}
                />
                <div className="pointer-events-none absolute -right-24 top-0 h-[min(22rem,55vw)] w-[min(22rem,55vw)] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2),transparent_68%)] blur-3xl opacity-90" />
                <div className="pointer-events-none absolute -bottom-28 -left-20 h-[min(24rem,70vw)] w-[min(24rem,70vw)] rounded-full bg-[radial-gradient(circle_at_center,rgba(207,32,48,0.11),transparent_68%)] blur-3xl" />
                <motion.div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-[38%] h-[min(28rem,88vw)] w-[min(28rem,88vw)] -translate-x-1/2 -translate-y-1/2 rounded-full md:top-[36%]"
                    style={{
                        background: 'radial-gradient(circle, rgba(207,32,48,0.055) 0%, transparent 68%)',
                    }}
                    animate={{ scale: [1, 1.045, 1], opacity: [0.88, 1, 0.88] }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/95 to-transparent sm:h-28" />
            </>
        )}

        <div className={`absolute inset-0 ${isHome ? 'opacity-[0.05]' : 'opacity-[0.03]'}`} style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #CF2030 1px, transparent 0)',
            backgroundSize: isHome ? '32px 32px' : '28px 28px'
        }} />

        <div
            className={
                isHome
                    ? 'absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#CF2030] to-transparent'
                    : 'absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#CF2030] via-[#E8C547] to-[#CF2030] opacity-95'
            }
        />

        <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8"
        >
            {isHome ? (
                <>
                    {(kicker || isHome) && (
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.08 }}
                            className="mb-7 inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-4 md:justify-start md:px-0"
                        >
                            <span className="inline-flex items-center rounded-full border border-[#CF2030]/16 bg-white/80 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.32em] text-[#CF2030] shadow-[0_16px_48px_rgba(207,32,48,0.10)] backdrop-blur-md md:px-5 md:text-xs">
                                {kicker || <>白金分會・{siteConfig.meeting.displayLine}</>}
                            </span>
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: kicker ? 0.14 : 0.08 }}
                        className="relative mb-8 md:mb-9 md:max-w-[34rem]"
                    >
                        <h1 className="text-5xl font-black leading-[0.98] tracking-tight text-[#19191d] drop-shadow-[0_3px_18px_rgba(255,255,255,0.96)] sm:text-6xl md:text-7xl lg:text-8xl [&_span:first-child]:bg-[linear-gradient(135deg,#CF2030_0%,#E8394A_46%,#A51926_100%)] [&_span:first-child]:bg-clip-text [&_span:first-child]:text-transparent [&_span:last-child]:text-[#19191d]">
                            {title}
                        </h1>
                        <span
                            aria-hidden
                            className="mx-auto mt-7 flex h-[3px] w-20 justify-center rounded-full bg-gradient-to-r from-transparent via-[#CF2030] to-transparent shadow-[0_0_18px_rgba(207,32,48,0.18)] md:mx-0 md:w-24 md:from-[#CF2030] md:via-[#E8394A] md:to-transparent"
                        />
                    </motion.div>

                    {subtitle && (
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative mx-auto max-w-2xl text-base font-semibold leading-relaxed text-gray-700 drop-shadow-[0_2px_12px_rgba(255,255,255,0.92)] md:mx-0 md:max-w-[31rem] md:text-lg md:leading-relaxed"
                        >
                            {subtitle}
                        </motion.div>
                    )}

                    {children && (
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.48 }}
                            className="relative mt-10 md:mt-12 md:max-w-[34rem]"
                        >
                            <span
                                aria-hidden
                                className="mx-auto mb-8 block h-px max-w-[220px] bg-gradient-to-r from-transparent via-[#CF2030]/16 to-transparent md:mx-0 md:max-w-[260px] md:from-[#CF2030]/28 md:via-[#CF2030]/12"
                            />
                            {children}
                        </motion.div>
                    )}
                </>
            ) : (
                <>
                    <div className="mx-auto grid max-w-5xl items-center gap-10 pb-1 lg:max-w-none lg:grid-cols-12 lg:gap-12 xl:gap-14">
                        <div className="relative z-[1] lg:col-span-7">
                            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#CF2030]/15 bg-white/82 p-7 shadow-[0_28px_80px_rgba(207,32,48,0.14),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl ring-1 ring-black/[0.04] md:rounded-[2rem] md:p-10 lg:text-left">
                                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />
                                <div className="pointer-events-none absolute -right-28 -top-28 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.24),transparent_70%)]" />
                                <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(207,32,48,0.08),transparent_72%)]" />

                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.55, delay: 0.06 }}
                                    className="mb-5 flex justify-center lg:justify-start"
                                >
                                    {kicker ? (
                                        <span className="inline-flex max-w-full flex-wrap items-center justify-center rounded-full border border-[#CF2030]/18 bg-gradient-to-r from-red-50/95 via-white to-amber-50/50 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#CF2030] shadow-[0_8px_28px_rgba(207,32,48,0.1)] sm:text-xs lg:justify-start">
                                            {kicker}
                                        </span>
                                    ) : (
                                        <span className="inline-flex max-w-[min(100%,22rem)] flex-wrap items-center justify-center gap-x-2 gap-y-0.5 rounded-full border border-[#CF2030]/18 bg-gradient-to-r from-red-50/95 via-white to-amber-50/50 px-4 py-2 text-center text-[11px] font-bold leading-snug text-[#333] shadow-[0_8px_28px_rgba(207,32,48,0.1)] sm:max-w-none sm:text-xs lg:text-left">
                                            <span className="font-black tracking-wide text-[#CF2030]">BNI</span>
                                            <span className="text-[#444]">{siteConfig.branchName}</span>
                                        </span>
                                    )}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                    className="relative mb-6 md:mb-7"
                                >
                                    <h1 className="text-balance text-[2.35rem] font-black leading-[1.12] tracking-tight text-[#141414] sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]">
                                        {title}
                                    </h1>
                                    <span
                                        aria-hidden
                                        className="mx-auto mt-5 flex h-[3px] w-24 justify-center rounded-full bg-gradient-to-r from-[#CF2030] via-[#E8C547] to-[#CF2030] shadow-[0_2px_14px_rgba(207,32,48,0.2)] sm:mt-6 md:mt-7 md:w-28 lg:mx-0"
                                    />
                                </motion.div>

                                {subtitle && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.28 }}
                                        className="relative mx-auto max-w-2xl text-pretty text-[0.9375rem] leading-relaxed text-gray-700 sm:text-base md:max-w-none md:text-lg md:leading-relaxed lg:mx-0"
                                    >
                                        {subtitle}
                                    </motion.div>
                                )}
                            </div>

                            <div className="relative mx-auto mt-8 max-w-lg lg:hidden">
                                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/70 shadow-[0_16px_48px_rgba(207,32,48,0.15)]">
                                    <div
                                        className="absolute inset-0 scale-105 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${homeHeroImage})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/55 to-white/20" />
                                    <div className="absolute inset-x-4 bottom-3 flex items-center justify-center rounded-lg bg-white/90 py-2.5 backdrop-blur-sm">
                                        <img src={siteConfig.logos.square} alt="" className="h-10 w-auto opacity-95" width={120} height={40} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative hidden lg:col-span-5 lg:block">
                            <div className="pointer-events-none absolute -right-6 top-1/2 z-[1] h-[78%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#CF2030]/25 to-transparent" />
                            <div className="relative mx-auto max-w-sm">
                                <div className="absolute -left-1 top-10 z-[2] rounded-r-lg rounded-tl-sm bg-[#CF2030] px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg">
                                    名人堂
                                </div>
                                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/90 shadow-[0_32px_90px_rgba(207,32,48,0.22)] ring-1 ring-[#CF2030]/10">
                                    <div
                                        className="absolute inset-0 bg-cover bg-[center_40%]"
                                        style={{ backgroundImage: `url(${homeHeroImage})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/35 to-transparent" />
                                    <div className="absolute inset-x-5 bottom-5 flex flex-col items-center gap-2 rounded-xl bg-white/92 px-4 py-4 text-center shadow-md backdrop-blur-md">
                                        <img src={siteConfig.logos.square} alt="BNI" className="h-12 w-auto" width={140} height={48} />
                                        <p className="text-[11px] font-semibold leading-snug text-gray-600">{siteConfig.meeting.displayLine}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {children && (
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.42 }}
                            className="relative mx-auto mt-11 max-w-3xl md:mt-14"
                        >
                            <span
                                aria-hidden
                                className="mx-auto mb-7 block h-px max-w-[260px] bg-gradient-to-r from-transparent via-[#CF2030]/22 to-transparent sm:mb-8 md:max-w-[300px]"
                            />
                            {children}
                        </motion.div>
                    )}
                </>
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
