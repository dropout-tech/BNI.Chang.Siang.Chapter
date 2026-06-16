import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Shield, Zap, Users, TrendingUp, Award } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionWrapper from '../components/common/SectionWrapper';
import SEO from '../components/common/SEO';
import { siteConfig } from '../config/site.config';

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const advantages = [
    { icon: Star, title: '白金等級實力', desc: '引薦品質、出席率、會員滿意度等各項指標均名列前茅。' },
    { icon: Shield, title: '名人堂榮耀', desc: '名人堂殊榮代表長翔在 BNI 體系中的卓越表現。' },
    { icon: Zap, title: '多元產業鏈', desc: '金融、科技、設計、法律、醫療、餐飲等多元產業精英。' },
    { icon: Users, title: '溫暖的社群文化', desc: '定期的尾牙、春酒、戶外活動讓夥伴建立超越商業的情誼。' },
    { icon: TrendingUp, title: '驚人的引薦成果', desc: '累計引薦金額持續突破新高，是信任與專業的最佳證明。' },
    { icon: Award, title: '90%綠燈紀錄', desc: '2026年4月90%綠燈紀錄，正邁向全綠燈分會。' },
];

const AboutUs: React.FC = () => (
    <div className="overflow-hidden">
        <SEO description={siteConfig.branchFullName} />
        <PageHero title={<>關於長翔</>} subtitle="長翔展翼，商機無限 — 以熱情積極、付出者著稱的精英商務社群" />

        <SectionWrapper>
            <motion.div {...f} className="max-w-4xl mx-auto">
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 md:p-12">
                    <h3 className="text-xl font-bold text-[#333] mb-4">長翔的故事</h3>
                    <p className="leading-relaxed mb-4 text-gray-700">
                        BNI 長翔名人堂白金分會，例會於{siteConfig.meeting.displayLine}（{siteConfig.location.address}），是 BNI 體系中最具代表性的分會之一。「長翔」，取自「長空翱翔」之意，象徵著每一位夥伴都能在這個平台上展翅高飛。
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-4">
                        從創會至今，長翔始終秉持「付出者收穫」的精神。我們不只是一個每週見面的商務團體，更是一群志同道合的事業夥伴，彼此支持、共同成長。
                    </p>
                    <p className="text-gray-500 leading-relaxed">
                        2026年4月90%綠燈紀錄，正邁向全綠燈分會。每一位成員都經過嚴格審核，確保專業能力與真誠態度。
                    </p>
                </div>
            </motion.div>
        </SectionWrapper>

        <SectionWrapper title="長翔的優勢" dark>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {advantages.map((a, i) => (
                    <motion.div key={a.title} {...f} transition={{ ...f.transition, delay: i * 0.1 }}
                        className="bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#CF2030]/20 rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-full border border-[#CF2030]/20 flex items-center justify-center mb-4 group-hover:border-[#CF2030]/50 transition-all">
                            <a.icon size={24} className="text-[#CF2030]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#333] mb-2">{a.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>

        <SectionWrapper title="產業鏈介紹" subtitle="涵蓋多元領域的專業團隊" className="py-14 md:py-20">
            <motion.div {...f} className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {siteConfig.industries.map((ind) => (
                    <span
                        key={ind}
                        className="cursor-default rounded-full border border-gray-200 bg-gradient-to-b from-white to-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:border-[#CF2030]/50 hover:bg-red-50/80 hover:text-[#CF2030] hover:shadow-md"
                        role="presentation"
                    >
                        {ind}
                    </span>
                ))}
            </motion.div>
        </SectionWrapper>

        <SectionWrapper className="text-center py-14 md:py-20">
            <motion.div {...f}>
                <h2 className="text-3xl font-black text-[#333] mb-6">成為長翔的一員</h2>
                <p className="text-gray-500 text-lg mb-8">如果您渴望找到一群真心互助的事業夥伴，歡迎親自來體驗</p>
                <Link to="/#contact"
                    className="inline-flex items-center gap-2 px-10 py-4 bg-[#CF2030] text-white font-bold rounded-full hover:bg-[#A51926] transition-opacity">
                    預約參訪 <span className="tracking-wider">›››</span>
                </Link>
            </motion.div>
        </SectionWrapper>
    </div>
);

export default AboutUs;
