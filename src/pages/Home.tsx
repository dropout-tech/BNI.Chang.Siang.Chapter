import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Target, GraduationCap, Heart, ChevronRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionWrapper from '../components/common/SectionWrapper';
import MemberWall from '../components/home/MemberWall';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';
import SEO from '../components/common/SEO';
import { siteConfig } from '../config/site.config';

const BASE = import.meta.env.BASE_URL;

interface LeaderEntry {
    role: string;
    name: string | null;
    industry?: string;
    photo?: string;
    slug?: string;
}

const leadershipGroups: { label: string; cols: number; members: LeaderEntry[] }[] = [
    {
        label: '顧問 & 大使',
        cols: 4,
        members: [
            { role: '董事顧問', name: '詹鴻鵠', industry: '自媒體商業教育', photo: `${BASE}images/members/詹鴻鵠.png`, slug: '詹鴻鵠-e678a9' },
            { role: '大使', name: '葉炘然', industry: '中式餐廳', photo: `${BASE}images/members/葉炘然.png`, slug: '葉炘然-3c227b' },
            { role: '助理大使', name: '楊政龍', industry: '健身教練', photo: `${BASE}images/members/楊政龍.png`, slug: '楊政龍-445174' },
            { role: '助理大使', name: '郭亭君', industry: '社群行銷代操', photo: `${BASE}images/members/郭亭君.png`, slug: '郭亭君-aaccd1' },
        ],
    },
    {
        label: '執行主席團',
        cols: 3,
        members: [
            { role: '主席', name: '吳庭彰', industry: '活動體驗企劃', photo: 'https://5pg4mz5n.us-east.insforge.app/api/storage/buckets/member-photos/objects/a229f332-ec91-45d6-bcf7-230ffb2ab6a1-1778669228366.jpg', slug: '吳庭彰' },
            { role: '副主席', name: '汪哲宇', industry: '氣球佈置', photo: 'https://5pg4mz5n.us-east.insforge.app/api/storage/buckets/member-photos/objects/c07ab7c9-bcdf-40e4-8228-f5ad2e84a742-1778756043385.png', slug: '汪哲宇' },
            { role: '秘書財務', name: '劉書華', industry: '移民顧問', photo: 'https://5pg4mz5n.us-east.insforge.app/api/storage/buckets/member-photos/objects/7385cd14-cda5-46c9-af7e-378f7c8512f9-1779116962613.png', slug: '劉書華' },
        ],
    },
    {
        label: '協調員',
        cols: 3,
        members: [
            { role: '教育協調員', name: null },
            { role: '活動協調員', name: null },
            { role: '導師協調員', name: null },
            { role: '成長協調員', name: null },
            { role: '來賓接待組', name: null },
            { role: '數位資訊組', name: null },
        ],
    },
];

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const bniFeatures = [
    { icon: Handshake, title: '合作取代競爭', desc: '每個行業僅一位代表，杜絕內部競爭，讓合作成為唯一途徑。' },
    { icon: Target, title: '精準商業引薦', desc: '透過結構化的引薦系統，為您帶來高品質的商業機會。' },
    { icon: GraduationCap, title: '終身學習成長', desc: '定期培訓課程與專家分享，持續提升商業敏感度。' },
    { icon: Heart, title: '付出者收穫', desc: 'Givers Gain — 先給予，後獲得，善的循環永不停歇。' },
];

const Home: React.FC = () => (
    <div className="overflow-hidden">
        <SEO description={siteConfig.branchFullName} keywords="BNI, 長翔分會, 商務引薦, 名人堂, 白金分會, 台北商會" />

        <PageHero
            kicker={<>白金分會 · {siteConfig.meeting.displayLine}</>}
            title={<><span className="text-[#CF2030]">長翔展翼</span><br /><span className="text-[#222]">商機無限</span></>}
            subtitle={<>BNI 長翔名人堂白金分會<br className="hidden sm:block" />匯聚各產業精英的金質商務交流平台</>}
            showScrollIndicator
            variant="home"
        >
            <div className="flex flex-col gap-4 px-4 sm:flex-row sm:justify-center sm:gap-5 md:justify-start md:px-0">
                <motion.a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="bni-btn w-full rounded-full px-10 py-4 text-center text-lg shadow-[0_18px_46px_rgba(207,32,48,0.45)] sm:w-auto">
                    預約參訪
                </motion.a>
                <Link to="/about-bni"
                    className="w-full rounded-full border border-[#CF2030]/25 bg-white/75 px-10 py-4 text-center text-lg font-semibold text-[#CF2030] shadow-[0_16px_44px_rgba(207,32,48,0.08)] backdrop-blur-md transition-all hover:border-[#CF2030] hover:bg-[#CF2030] hover:text-white sm:w-auto">
                    了解 BNI
                </Link>
            </div>
        </PageHero>

        {/* === What is BNI === */}
        <SectionWrapper title="什麼是 BNI" subtitle="Business Network International — 全球最大商務引薦組織" dark>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                {bniFeatures.map((feat, i) => (
                    <motion.div key={feat.title} {...f} transition={{ ...f.transition, delay: i * 0.1 }}
                        className="card-elevated p-7 group">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-50 to-red-100/50 flex items-center justify-center mb-5 group-hover:from-[#CF2030] group-hover:to-[#E8394A] transition-all duration-300">
                            <feat.icon size={26} className="text-[#CF2030] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-[#222] mb-2">{feat.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                    </motion.div>
                ))}
            </div>
            <motion.div {...f} className="text-center">
                <Link to="/about-bni" className="inline-flex items-center gap-1 text-[#CF2030] hover:text-[#A51926] font-semibold transition-colors group">
                    深入了解 BNI <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
        </SectionWrapper>

        {/* === About 長翔 === */}
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#CF2030]/[0.02] -translate-y-1/2 translate-x-1/3" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <motion.div {...f} className="flex-1">
                        <div className="inline-block px-3 py-1 bg-red-50 text-[#CF2030] text-sm font-semibold rounded-full mb-4">關於長翔</div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#222] mb-4 leading-tight">以熱情積極、<br />付出者著稱</h2>
                        <div className="red-line mb-6" />
                        <p className="text-gray-600 leading-relaxed text-lg mb-6">
                            BNI 長翔名人堂白金分會，匯聚台北各產業精英。{siteConfig.meeting.displayLine}，面對面深度交流。
                            2026年4月90%綠燈紀錄，正邁向全綠燈分會。
                        </p>
                        <Link to="/about-us" className="inline-flex items-center gap-1 text-[#CF2030] hover:text-[#A51926] font-semibold transition-colors group">
                            了解長翔的故事 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                    <motion.div {...f} transition={{ ...f.transition, delay: 0.2 }} className="flex-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="card-elevated p-5 text-center">
                                <div className="text-xl sm:text-2xl font-black text-[#CF2030] leading-snug">
                                    90% 2026年4月綠燈紀錄
                                </div>
                            </div>
                            {[
                                { num: '40+', label: '產業代表', sub: '多元領域' },
                                { num: '白金', label: '分會等級', sub: '名人堂' },
                                { num: '中山', label: siteConfig.location.venue, sub: siteConfig.meeting.dayZh },
                            ].map((s) => (
                                <div key={s.label} className="card-elevated p-5 text-center">
                                    <div className="text-2xl font-black text-[#CF2030] mb-1">{s.num}</div>
                                    <div className="text-sm font-semibold text-[#222]">{s.label}</div>
                                    <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* === 領導團隊 === */}
        <SectionWrapper title="領導團隊" subtitle="攜手帶領長翔持續精進、共創佳績" dark>
            <div className="max-w-5xl mx-auto space-y-12">
                {leadershipGroups.map((group) => (
                    <div key={group.label}>
                        <p className="text-center text-sm font-bold text-[#CF2030] uppercase tracking-widest mb-6 opacity-70">
                            {group.label}
                        </p>
                        <div className={`grid gap-5 ${group.cols === 4
                            ? 'grid-cols-2 md:grid-cols-4'
                            : 'grid-cols-1 sm:grid-cols-3'}`}>
                            {group.members.map((m, i) => (
                                <motion.div
                                    key={`${group.label}-${i}`}
                                    {...{ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: i * 0.08 } }}
                                >
                                    {m.name && m.slug ? (
                                        <Link to={`/member/${m.slug}`} className="group block text-center">
                                            <div className="relative mx-auto mb-3 overflow-hidden rounded-2xl shadow-sm group-hover:shadow-md transition-shadow"
                                                style={{ width: group.cols === 4 ? '100%' : '160px', aspectRatio: '1/1' }}>
                                                <img
                                                    src={m.photo || siteConfig.defaultPhoto}
                                                    alt={m.name}
                                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                    onError={e => { (e.target as HTMLImageElement).src = siteConfig.defaultPhoto; }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <div className="inline-block px-2.5 py-0.5 bg-[#CF2030] text-white text-xs font-bold rounded-full mb-1.5">
                                                {m.role}
                                            </div>
                                            <p className="font-bold text-gray-900 text-sm group-hover:text-[#CF2030] transition-colors">{m.name}</p>
                                            {m.industry && <p className="text-gray-400 text-xs mt-0.5">{m.industry}</p>}
                                        </Link>
                                    ) : m.name ? (
                                        <div className="text-center">
                                            <div className="relative mx-auto mb-3 overflow-hidden rounded-2xl shadow-sm"
                                                style={{ width: group.cols === 4 ? '100%' : '160px', aspectRatio: '1/1' }}>
                                                <img
                                                    src={m.photo || siteConfig.defaultPhoto}
                                                    alt={m.name}
                                                    className="w-full h-full object-cover object-top"
                                                    onError={e => { (e.target as HTMLImageElement).src = siteConfig.defaultPhoto; }}
                                                />
                                            </div>
                                            <div className="inline-block px-2.5 py-0.5 bg-[#CF2030] text-white text-xs font-bold rounded-full mb-1.5">
                                                {m.role}
                                            </div>
                                            <p className="font-bold text-gray-900 text-sm">{m.name}</p>
                                            {m.industry && <p className="text-gray-400 text-xs mt-0.5">{m.industry}</p>}
                                        </div>
                                    ) : (
                                        <div className="text-center opacity-60">
                                            <div className="mx-auto mb-3 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center"
                                                style={{ width: '100%', aspectRatio: '1/1' }}>
                                                <img src={siteConfig.defaultPhoto} alt="" className="w-12 h-12 object-contain opacity-40" />
                                            </div>
                                            <div className="inline-block px-2.5 py-0.5 bg-gray-300 text-white text-xs font-bold rounded-full mb-1.5">
                                                {m.role}
                                            </div>
                                            <p className="text-gray-400 text-xs">待公告</p>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>

        <MemberWall />
        <FAQ />
        <Contact />

        {/* === CTA === */}
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#CF2030] to-[#A51926]" />
            <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
            }} />
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div {...f}>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">歡迎加入長翔</h2>
                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                        企業老闆都在使用最精準、有效率的業務引薦平台「BNI」。誠摯邀請您一同加入長翔！
                    </p>
                    <a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#CF2030] font-bold text-lg rounded-full hover:bg-gray-50 transition-all shadow-xl shadow-black/10">
                        立即預約參訪 <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    </div>
);

export default Home;
