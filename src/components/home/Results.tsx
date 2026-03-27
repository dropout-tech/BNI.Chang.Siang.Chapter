import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import { FileText, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import ResultsChart from './ResultsChart';
import { LuxuryBackground, GlowingChevron } from '../common/PremiumDecorations';

const MetricCard: React.FC<{ icon: React.ReactNode, value: number, suffix: string, label: string, subtext?: string, isCurrency?: boolean }> = ({ icon, value, suffix, label, subtext, isCurrency }) => {
    const { count, elementRef } = useCountUp(value);
    return (
        <motion.div 
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } } }}
            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
            ref={elementRef} 
            className="card-glass gold-border gold-border-hover rounded-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden group h-full cursor-default"
        >
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-[25px] group-hover:bg-[#D4AF37]/15 transition-colors duration-500" />
            <div className="absolute top-4 right-4 text-xs opacity-40 group-hover:opacity-100 transition-opacity"><GlowingChevron direction="right" className="w-5 h-5 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" /></div>
            <div className="text-[#D4AF37] mb-6 p-5 rounded-full border border-[#D4AF37]/20 z-10 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-300 bg-[#D4AF37]/5">{icon}</div>
            <div className="text-4xl lg:text-5xl font-black text-white mb-2 font-mono tabular-nums z-10 drop-shadow-md">
                {isCurrency ? (count / 100).toFixed(1) : count.toLocaleString()}
                <span className="text-2xl ml-1 text-[#D4AF37] font-sans drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">{suffix}</span>
            </div>
            <div className="text-gray-300 font-bold text-lg uppercase tracking-[0.15em] mt-3 z-10 group-hover:text-[#D4AF37] transition-colors">{label}</div>
            {subtext && <div className="text-sm text-gray-500 mt-2 z-10 font-mono tracking-wider">{subtext}</div>}
        </motion.div>
    );
};

const Results: React.FC = () => (
    <section className="py-24 relative grain-heavy brushed-metal-dark overflow-hidden">
        {/* Subtle geometric wing background for Results section */}
        <svg className="absolute top-[20%] left-[-20%] w-[140%] h-[140%] z-0 pointer-events-none opacity-20" viewBox="0 0 1440 1000" fill="none" preserveAspectRatio="none">
            <path d="M-200,800 C400,600 800,900 1600,0 L1600,1000 L-200,1000 Z" fill="#102A43" />
            <path d="M-100,750 C500,550 850,850 1600,-50" stroke="#D4AF37" strokeWidth="1" strokeOpacity="1" fill="none" />
        </svg>
        <LuxuryBackground />

        <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[40px] -z-10" />
                <h2 className="text-4xl md:text-5xl font-black mb-4 gold-text drop-shadow-md">引薦成果</h2>
                <div className="gold-line w-24 mx-auto mb-6 shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
                <p className="text-gray-300 text-lg tracking-wide uppercase">創會以來歷年累計實績</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mb-24">
                <ResultsChart />
            </motion.div>
            
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4"
            >
                <div className="w-full">
                    <MetricCard icon={<FileText size={42} />} value={26459} suffix="張" label="總引薦單數" />
                </div>
                <div className="w-full">
                    <MetricCard icon={<TrendingUp size={42} />} value={629} suffix="億+" label="總交易價值 (TWD)" subtext="NT$ 629,007,136" isCurrency />
                </div>
                <div className="w-full h-full">
                    <motion.div 
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } } }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="card-glass gold-border gold-border-hover rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 text-center h-full relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="text-[#D4AF37] mb-6 p-5 rounded-full border border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/10 transition-colors bg-[#D4AF37]/5"><Users size={42} /></div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">邀請來賓參與</h3>
                        <p className="text-gray-300/90 mb-8 text-lg font-light">誠摯邀請您前來體驗我們的聚會，親自感受長翔的熱情。</p>
                        <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 brushed-gold text-[#0A1628] font-bold text-lg rounded-full transition-all group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]">
                            預約參訪 <div className="ml-1 opacity-90 font-black tracking-widest leading-none">&gt;&gt;&gt;</div>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </section>
);

export default Results;
