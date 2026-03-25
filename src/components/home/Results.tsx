import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import { FileText, TrendingUp, Users } from 'lucide-react';
import ResultsChart from './ResultsChart';

const MetricCard: React.FC<{ icon: React.ReactNode, value: number, suffix: string, label: string, subtext?: string, isCurrency?: boolean }> = ({ icon, value, suffix, label, subtext, isCurrency }) => {
    const { count, elementRef } = useCountUp(value);
    return (
        <div ref={elementRef} className="card-glass gold-border gold-border-hover rounded-2xl p-8 flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
            {/* Subtle card background wing wave */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-[20px] group-hover:bg-[#D4AF37]/10 transition-colors" />
            <div className="absolute top-4 right-4 text-xs opacity-50"><span className="gold-chevron">&gt;&gt;&gt;</span></div>
            <div className="text-[#D4AF37] mb-6 p-4 rounded-full border border-[#D4AF37]/20 z-10">{icon}</div>
            <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono tabular-nums z-10">
                {isCurrency ? (count / 100).toFixed(1) : count.toLocaleString()}
                <span className="text-2xl ml-1 text-[#D4AF37]/70 font-sans">{suffix}</span>
            </div>
            <div className="text-gray-300 font-medium text-lg uppercase tracking-wide mt-2 z-10">{label}</div>
            {subtext && <div className="text-sm text-gray-500 mt-2 z-10">{subtext}</div>}
        </div>
    );
};

const Results: React.FC = () => (
    <section className="py-24 relative grain-heavy brushed-metal-dark overflow-hidden">
        {/* Subtle geometric wing background for Results section */}
        <svg className="absolute top-[20%] left-[-20%] w-[140%] h-[140%] z-0 pointer-events-none opacity-20" viewBox="0 0 1440 1000" fill="none" preserveAspectRatio="none">
            <path d="M-200,800 C400,600 800,900 1600,0 L1600,1000 L-200,1000 Z" fill="#102A43" />
            <path d="M-100,750 C500,550 850,850 1600,-50" stroke="#D4AF37" strokeWidth="1" strokeOpacity="1" fill="none" />
        </svg>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-text">引薦成果</h2>
                <div className="gold-line w-20 mx-auto mb-4" />
                <p className="text-gray-400 text-base">創會以來累計實績</p>
            </div>
            <div className="mb-20"><ResultsChart /></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 px-4">
                <div className="w-full">
                    <MetricCard icon={<FileText size={40} />} value={26459} suffix="張" label="總引薦單數" />
                </div>
                <div className="w-full">
                    <MetricCard icon={<TrendingUp size={40} />} value={629} suffix="億+" label="總交易價值 (TWD)" subtext="NT$ 629,007,136" isCurrency />
                </div>
                <div className="w-full h-full">
                    <div className="card-glass gold-border gold-border-hover rounded-2xl p-8 flex flex-col items-center justify-center hover:-translate-y-2 transition-all duration-300 text-center h-full">
                        <div className="text-[#D4AF37] mb-6 p-4 rounded-full border border-[#D4AF37]/20"><Users size={40} /></div>
                        <h3 className="text-2xl font-bold text-white mb-2">邀請來賓參與</h3>
                        <p className="text-gray-400 mb-6 text-base">誠摯邀請您前來體驗我們的聚會。</p>
                        <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2 brushed-gold text-[#0A1628] font-bold rounded-full transition-all text-sm group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                            聯繫我們 <span className="gold-chevron text-[#0A1628] drop-shadow-none scale-110 ml-1">&gt;&gt;&gt;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Results;
