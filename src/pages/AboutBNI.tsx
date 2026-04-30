import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Users, Handshake, Target, GraduationCap, Heart, Shield, TrendingUp } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionWrapper from '../components/common/SectionWrapper';
import SEO from '../components/common/SEO';

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const stats = [
    { label: '全球會員數', value: '330,000+' },
    { label: '全球分會', value: '11,400+' },
    { label: '遍及國家', value: '77' },
    { label: '創立年份', value: '1985' },
];

const twStats = [
    { label: '台灣分會', value: '221' },
    { label: '台灣會員', value: '9,225' },
    { label: '引薦次數', value: '70萬+' },
    { label: '成交金額', value: 'NT$283億+' },
];

const values = [
    { icon: Handshake, title: '合作優先，共創價值', desc: '創造沒有利益衝突的環境，讓成員彼此信任、專注合作，真正實現一加一大於二。' },
    { icon: Heart, title: '善的循環，價值傳遞', desc: 'BNI 精神「先給予、後獲得」。願意真心為他人創造機會，善意終將回到你身上。' },
    { icon: Users, title: '高信任，低壓力', desc: '每位成員經過審核與推薦，建立高度信任的商業圈。讓合作不再有壓力。' },
    { icon: Target, title: '精準推薦，長期合作', desc: '每個行業僅一位代表，杜絕內部競爭。推薦更聚焦、機會更純粹。' },
    { icon: GraduationCap, title: '成長共享，資源整合', desc: '共享學習資源與實戰經驗，每位成員的成長都是整體的進步。' },
    { icon: Globe, title: '全球網絡，在地深耕', desc: '橫跨 77 國，11,400+ 分會。加入 BNI 就是接入全球最大商務引薦網絡。' },
];

const basics = [
    { n: '引薦', en: 'Referrals', desc: '主動為夥伴介紹商業機會。' },
    { n: '邀請賓客', en: 'Visitors', desc: '邀請商業人脈來體驗例會。' },
    { n: '一對一', en: '1-to-1', desc: '與夥伴深度對話，了解彼此需求。' },
    { n: '教育訓練', en: 'Education', desc: '持續學習商務技巧與人脈經營。' },
    { n: '出席', en: 'Attendance', desc: '穩定出席每週例會，展現承諾。' },
];

const AboutBNI: React.FC = () => (
    <div className="overflow-hidden">
        <SEO
            description="BNI 是全球最大的商務引薦組織，遍及 77 國，擁有 33 萬會員。了解 BNI 的核心價值與運作方式，如何幫助您拓展業務。"
            keywords="什麼是BNI, BNI商會, 商務引薦, 全球商會, 付出者收穫, Givers Gain, BNI台灣, 商務交流, 企業家商會"
        />
        <PageHero
            title={<>什麼是 BNI</>}
            subtitle="Business Network International — 全球最大的商務引薦組織，改變世界做生意的方式"
        />

        <SectionWrapper title="BNI 全球數據">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
                {stats.map((s, i) => (
                    <motion.div key={s.label} {...f} transition={{ ...f.transition, delay: i * 0.1 }} className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 text-center">
                        <div className="text-3xl font-black text-[#333] mb-2">{s.value}</div>
                        <div className="text-gray-500 text-sm">{s.label}</div>
                    </motion.div>
                ))}
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">BNI 台灣成績</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {twStats.map((s, i) => (
                    <motion.div key={s.label} {...f} transition={{ ...f.transition, delay: i * 0.1 }} className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 text-center">
                        <div className="text-3xl font-black text-[#333] mb-2">{s.value}</div>
                        <div className="text-gray-500 text-sm">{s.label}</div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>

        <SectionWrapper title="BNI 核心價值" subtitle="為什麼全球超過 33 萬位企業主選擇 BNI" dark>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {values.map((v, i) => (
                    <motion.div key={v.title} {...f} transition={{ ...f.transition, delay: i * 0.1 }}
                        className="bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#CF2030]/20 rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-full border border-[#CF2030]/20 flex items-center justify-center mb-4 group-hover:border-[#CF2030]/50 group-hover:bg-[#CF2030]/10 transition-all">
                            <v.icon size={24} className="text-[#CF2030]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#333] mb-2">{v.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>

        <SectionWrapper title="BNI 五大基本功" subtitle="每位會員的行動指南">
            <div className="max-w-3xl mx-auto space-y-4">
                {basics.map((b, i) => (
                    <motion.div key={b.n} {...f} transition={{ ...f.transition, delay: i * 0.08 }}
                        className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 flex items-center gap-4 hover:border-[#CF2030]/30 transition-all">
                        <div className="w-10 h-10 rounded-full bg-[#CF2030] flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                        <div>
                            <h4 className="font-bold text-white">{b.n} <span className="text-[#CF2030]/60 text-sm font-normal">({b.en})</span></h4>
                            <p className="text-gray-500 text-sm">{b.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>

        <SectionWrapper className="text-center py-24">
            <motion.div {...f}>
                <h2 className="text-3xl md:text-4xl font-black text-[#333] mb-6">Changing the Way the World Does Business</h2>
                <p className="text-gray-500 text-lg mb-8">改變全世界做生意的方式 — 從加入長翔開始</p>
                <Link to="/#contact"
                    className="inline-flex items-center gap-2 px-10 py-4 bg-[#CF2030] text-white font-bold text-lg rounded-full hover:bg-[#A51926] transition-opacity">
                    預約參訪長翔分會 <span className="tracking-wider">›››</span>
                </Link>
            </motion.div>
        </SectionWrapper>
    </div>
);

export default AboutBNI;
