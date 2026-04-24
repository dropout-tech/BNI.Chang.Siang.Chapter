import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import { FileText, TrendingUp, Users } from 'lucide-react';
import ResultsChart from './ResultsChart';

const MetricCard: React.FC<{ icon: React.ReactNode, value: number, suffix: string, label: string, subtext?: string, isCurrency?: boolean }> = ({ icon, value, suffix, label, subtext, isCurrency }) => {
    const { count, elementRef } = useCountUp(value);
    return (
        <div ref={elementRef} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#CF2030]/20 transition-all text-center">
            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                <div className="text-[#CF2030]">{icon}</div>
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-[#333] mb-2 tabular-nums">
                {isCurrency ? (count / 100).toFixed(1) : count.toLocaleString()}
                <span className="text-xl ml-1 text-[#CF2030]">{suffix}</span>
            </div>
            <div className="text-gray-500 font-medium text-sm uppercase tracking-wide mt-2">{label}</div>
            {subtext && <div className="text-xs text-gray-400 mt-1">{subtext}</div>}
        </div>
    );
};

const Results: React.FC = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-black text-[#333] mb-3">引薦成果</h2>
                <div className="red-line mx-auto mb-4" />
                <p className="text-gray-500">創會以來累計實績</p>
            </div>
            <div className="mb-16"><ResultsChart /></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <MetricCard icon={<FileText size={32} />} value={26459} suffix="張" label="總引薦單數" />
                <MetricCard icon={<TrendingUp size={32} />} value={629} suffix="億+" label="總交易價值" subtext="NT$ 629,007,136" isCurrency />
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                        <Users size={32} className="text-[#CF2030]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#333] mb-2">邀請來賓參與</h3>
                    <p className="text-gray-500 mb-5 text-sm">誠摯邀請您前來體驗。</p>
                    <a href="#contact" className="inline-block px-6 py-2 bg-[#CF2030] text-white font-bold rounded-full hover:bg-[#A51926] transition-colors text-sm mx-auto">
                        聯繫我們
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Results;
