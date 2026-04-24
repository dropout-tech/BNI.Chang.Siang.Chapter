import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Zap, Users, GraduationCap, PartyPopper } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionWrapper from '../components/common/SectionWrapper';
import SEO from '../components/common/SEO';

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const events = [
    { icon: Zap, cat: 'Power Day', title: 'Power Day — 產業鏈串聯日', date: '定期舉辦', desc: '夥伴們深度交流各自的專業領域與需求，透過結構化的媒合流程創造精準的商業合作機會。', color: '#D4AF37' },
    { icon: Users, cat: 'BOD', title: 'BOD 策略會議', date: '每月舉辦', desc: '核心幹部團隊定期召開策略會議，針對分會發展方向、會員成長計畫進行深入討論。', color: '#E8C547' },
    { icon: PartyPopper, cat: '尾牙春酒', title: '年度尾牙春酒', date: '每年舉辦', desc: '歲末年初的歡聚時刻。精彩表演、豐富抽獎，還有夥伴們發自內心的感謝與祝福。', color: '#D4AF37' },
    { icon: GraduationCap, cat: '教育訓練', title: '引薦技巧工作坊', date: '不定期', desc: '邀請 BNI 資深顧問進行專題訓練，全面提升夥伴的引薦能力與信心。', color: '#E8C547' },
];

const Events: React.FC = () => (
    <div className="overflow-hidden">
        <SEO description="BNI 長翔名人堂白金分會活動紀錄 — Power Day、BOD、尾牙春酒等特殊日子，展現長翔有溫度的一面。" />
        <PageHero title={<>活動紀錄</>} subtitle="Power Day、BOD、尾牙春酒⋯⋯ 展現長翔有溫度的一面" />

        <SectionWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {events.map((e, i) => (
                    <motion.div key={e.title} {...f} transition={{ ...f.transition, delay: i * 0.1 }}
                        className="bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#CF2030]/20 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1">
                        <div className="h-48 bg-gradient-to-br from-[#102A43] to-[#0A1628] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.05]" style={{ background: `radial-gradient(circle at 30% 50%, ${e.color}, transparent 70%)` }} />
                            <e.icon size={48} className="text-[#CF2030]/30 group-hover:text-[#CF2030]/50 transition-colors" />
                            <div className="absolute top-4 right-4">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#CF2030]/10 text-[#CF2030] border border-[#CF2030]/20">{e.cat}</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 text-sm text-[#CF2030]/70 mb-2">
                                <Calendar size={14} /><span>{e.date}</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#CF2030] transition-colors">{e.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>

        <SectionWrapper className="text-center py-16" dark>
            <motion.div {...f}>
                <p className="text-gray-500 text-lg mb-2">更多活動照片與紀錄即將上線</p>
                <p className="text-gray-600 text-sm">歡迎追蹤我們的 <a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer" className="text-[#CF2030] hover:underline">Facebook 粉專</a></p>
            </motion.div>
        </SectionWrapper>
    </div>
);

export default Events;
