import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Zap, Users, GraduationCap, PartyPopper, type LucideIcon } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionWrapper from '../components/common/SectionWrapper';
import SEO from '../components/common/SEO';
import { siteConfig } from '../config/site.config';
import { insforge, isBackendConfigured } from '../lib/insforge';
import type { EventEntry } from '../types';

const ICON_MAP: Record<string, LucideIcon> = {
    Calendar,
    Zap,
    Users,
    GraduationCap,
    PartyPopper,
};

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.6 } };

const STATIC_EVENTS: EventEntry[] = [
    { title: 'Power Day — 產業鏈串聯日', category: 'Power Day', event_date: '定期舉辦', description: '夥伴們深度交流各自的專業領域與需求，透過結構化的媒合流程創造精準的商業合作機會。', icon_name: 'Zap', is_published: true, sort_order: 0 },
    { title: 'BOD 策略會議', category: 'BOD', event_date: '每月舉辦', description: '核心幹部團隊定期召開策略會議，針對分會發展方向、會員成長計畫進行深入討論。', icon_name: 'Users', is_published: true, sort_order: 1 },
    { title: '年度尾牙春酒', category: '尾牙春酒', event_date: '每年舉辦', description: '歲末年初的歡聚時刻。精彩表演、豐富抽獎，還有夥伴們發自內心的感謝與祝福。', icon_name: 'PartyPopper', is_published: true, sort_order: 2 },
    { title: '引薦技巧工作坊', category: '教育訓練', event_date: '不定期', description: '邀請 BNI 資深顧問進行專題訓練，全面提升夥伴的引薦能力與信心。', icon_name: 'GraduationCap', is_published: true, sort_order: 3 },
];

const Events: React.FC = () => {
    const [displayEvents, setDisplayEvents] = useState<EventEntry[]>(STATIC_EVENTS);

    useEffect(() => {
        if (!isBackendConfigured) return;
        (async () => {
            try {
                const { data, error } = await insforge.database
                    .from('events')
                    .select('*')
                    .eq('is_published', true)
                    .order('sort_order', { ascending: true });
                if (!error && data && data.length > 0) {
                    setDisplayEvents(data as EventEntry[]);
                }
            } catch {
                // keep static fallback
            }
        })();
    }, []);

    return (
        <div className="overflow-hidden">
            <SEO description={siteConfig.branchFullName} />
            <PageHero title={<>活動紀錄</>} subtitle="Power Day、BOD、尾牙春酒⋯⋯ 展現長翔有溫度的一面" />

            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {displayEvents.map((ev, i) => {
                        const Icon = ICON_MAP[ev.icon_name || 'Calendar'] ?? Calendar;
                        return (
                            <motion.div key={ev.id ?? ev.title} {...f} transition={{ ...f.transition, delay: i * 0.1 }}
                                className="bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#CF2030]/20 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1">
                                <div className="h-48 bg-gradient-to-br from-[#102A43] to-[#0A1628] flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-[0.05]" style={{ background: 'radial-gradient(circle at 30% 50%, #D4AF37, transparent 70%)' }} />
                                    <Icon size={48} className="text-[#CF2030]/30 group-hover:text-[#CF2030]/50 transition-colors" />
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#CF2030]/10 text-[#CF2030] border border-[#CF2030]/20">{ev.category}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-[#CF2030]/70 mb-2">
                                        <Calendar size={14} /><span>{ev.event_date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#CF2030] transition-colors">{ev.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{ev.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
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
};

export default Events;
