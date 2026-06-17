import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Shield, Zap, Users, TrendingUp, Award } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionWrapper from '../components/common/SectionWrapper';
import SEO from '../components/common/SEO';
import { siteConfig } from '../config/site.config';
import { insforge, isBackendConfigured } from '../lib/insforge';

const BASE = import.meta.env.BASE_URL;

const f     = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.6 } };
const fCard = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

interface LeaderEntry { role: string; name: string | null; industry?: string; photo?: string; slug?: string; }
interface LeaderGroup { label: string; cols: number; members: LeaderEntry[]; }

/** Static fallback — used when DB is unavailable or empty */
const STATIC_GROUPS: LeaderGroup[] = [
    {
        label: '顧問 & 大使', cols: 4,
        members: [
            { role: '董事顧問', name: '詹鴻鵠', industry: '自媒體商業教育', photo: `${BASE}images/members/詹鴻鵠.png`, slug: '詹鴻鵠-e678a9' },
            { role: '大使',     name: '葉炘然', industry: '中式餐廳',       photo: `${BASE}images/members/葉炘然.png`, slug: '葉炘然-3c227b' },
            { role: '助理大使', name: '楊政龍', industry: '健身教練',       photo: `${BASE}images/members/楊政龍.png`, slug: '楊政龍-445174' },
            { role: '助理大使', name: '郭亭君', industry: '社群行銷代操',   photo: `${BASE}images/members/郭亭君.png`, slug: '郭亭君-aaccd1' },
        ],
    },
    {
        label: '執行主席團', cols: 3,
        members: [
            { role: '主席',   name: '吳庭彰', industry: '活動體驗企劃', photo: 'https://5pg4mz5n.us-east.insforge.app/api/storage/buckets/member-photos/objects/a229f332-ec91-45d6-bcf7-230ffb2ab6a1-1778669228366.jpg', slug: '吳庭彰' },
            { role: '副主席', name: '汪哲宇', industry: '氣球佈置',     photo: 'https://5pg4mz5n.us-east.insforge.app/api/storage/buckets/member-photos/objects/c07ab7c9-bcdf-40e4-8228-f5ad2e84a742-1778756043385.png', slug: '汪哲宇' },
            { role: '秘書財務', name: '劉書華', industry: '移民顧問',   photo: 'https://5pg4mz5n.us-east.insforge.app/api/storage/buckets/member-photos/objects/7385cd14-cda5-46c9-af7e-378f7c8512f9-1779116962613.png', slug: '劉書華' },
        ],
    },
    {
        label: '協調員', cols: 3,
        members: [
            { role: '教育協調員', name: null }, { role: '活動協調員', name: null }, { role: '導師協調員', name: null },
            { role: '成長協調員', name: null }, { role: '來賓接待組', name: null }, { role: '數位資訊組', name: null },
        ],
    },
];

const advantages = [
    { icon: Star,       title: '白金等級實力', desc: '引薦品質、出席率、會員滿意度等各項指標均名列前茅。' },
    { icon: Shield,     title: '名人堂榮耀',   desc: '名人堂殊榮代表長翔在 BNI 體系中的卓越表現。' },
    { icon: Zap,        title: '多元產業鏈',   desc: '金融、科技、設計、法律、醫療、餐飲等多元產業精英。' },
    { icon: Users,      title: '溫暖的社群文化', desc: '定期的尾牙、春酒、戶外活動讓夥伴建立超越商業的情誼。' },
    { icon: TrendingUp, title: '驚人的引薦成果', desc: '累計引薦金額持續突破新高，是信任與專業的最佳證明。' },
    { icon: Award,      title: '90%綠燈紀錄', desc: '2026年4月90%綠燈紀錄，正邁向全綠燈分會。' },
];

// ─────────────────────────────────────────────────────────────────
// Leadership Card — shared rendering logic
// ─────────────────────────────────────────────────────────────────
const LeaderCard: React.FC<{ m: LeaderEntry; groupLabel: string; i: number }> = ({ m, groupLabel, i }) => (
    <motion.div key={`${groupLabel}-${i}`} {...fCard} transition={{ ...fCard.transition, delay: i * 0.08 }}>
        {m.name && m.slug ? (
            <Link to={`/member/${m.slug}`} className="group block text-center">
                <div className="relative mx-auto mb-3 overflow-hidden rounded-2xl shadow-sm bg-white group-hover:shadow-md transition-shadow" style={{ aspectRatio: '3/4' }}>
                    <img src={m.photo || siteConfig.defaultPhoto} alt={m.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={e => { (e.target as HTMLImageElement).src = siteConfig.defaultPhoto; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="inline-block px-2.5 py-0.5 bg-[#CF2030] text-white text-xs font-bold rounded-full mb-1.5">{m.role}</div>
                <p className="font-bold text-gray-900 text-sm group-hover:text-[#CF2030] transition-colors">{m.name}</p>
                {m.industry && <p className="text-gray-400 text-xs mt-0.5">{m.industry}</p>}
            </Link>
        ) : m.name ? (
            <div className="text-center">
                <div className="relative mx-auto mb-3 overflow-hidden rounded-2xl shadow-sm bg-white" style={{ aspectRatio: '3/4' }}>
                    <img src={m.photo || siteConfig.defaultPhoto} alt={m.name}
                        className="w-full h-full object-cover object-top"
                        onError={e => { (e.target as HTMLImageElement).src = siteConfig.defaultPhoto; }} />
                </div>
                <div className="inline-block px-2.5 py-0.5 bg-[#CF2030] text-white text-xs font-bold rounded-full mb-1.5">{m.role}</div>
                <p className="font-bold text-gray-900 text-sm">{m.name}</p>
                {m.industry && <p className="text-gray-400 text-xs mt-0.5">{m.industry}</p>}
            </div>
        ) : (
            <div className="text-center opacity-50">
                <div className="mx-auto mb-3 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center" style={{ aspectRatio: '3/4' }}>
                    <img src={siteConfig.defaultPhoto} alt="" className="w-10 h-10 object-contain opacity-30" />
                </div>
                <div className="inline-block px-2.5 py-0.5 bg-gray-300 text-white text-xs font-bold rounded-full mb-1.5">{m.role}</div>
                <p className="text-gray-400 text-xs">待公告</p>
            </div>
        )}
    </motion.div>
);

// ─────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────
const AboutUs: React.FC = () => {
    const [groups, setGroups] = useState<LeaderGroup[]>(STATIC_GROUPS);

    useEffect(() => {
        if (!isBackendConfigured) return;
        const load = async () => {
            try {
                // 1. Fetch roles ordered by sort_order
                const { data: roles, error: rolesErr } = await insforge.database
                    .from('chapter_roles')
                    .select('id, role_name, role_group, group_cols, sort_order, member_idx')
                    .order('sort_order', { ascending: true });
                if (rolesErr || !roles?.length) return;

                // 2. Fetch member info for all assigned members
                const memberIdxs = roles.map((r: any) => r.member_idx).filter(Boolean);
                let memberMap: Record<number, any> = {};
                if (memberIdxs.length) {
                    const { data: mems } = await insforge.database
                        .from('members')
                        .select('idx, name, industry, photo, slug')
                        .in('idx', memberIdxs);
                    (mems || []).forEach((m: any) => { memberMap[m.idx] = m; });
                }

                // 3. Group by role_group, preserving group_cols
                const grouped: Record<string, LeaderGroup> = {};
                const groupOrder: string[] = [];
                for (const r of roles) {
                    if (!grouped[r.role_group]) {
                        grouped[r.role_group] = { label: r.role_group, cols: r.group_cols ?? 3, members: [] };
                        groupOrder.push(r.role_group);
                    }
                    const mem = r.member_idx ? memberMap[r.member_idx] : null;
                    grouped[r.role_group].members.push({
                        role: r.role_name,
                        name: mem?.name ?? null,
                        industry: mem?.industry,
                        photo: mem?.photo,
                        slug: mem?.slug,
                    });
                }
                const result = groupOrder.map(g => grouped[g]);
                if (result.length) setGroups(result);
            } catch (e) {
                console.warn('[AboutUs] Failed to load chapter_roles, using static fallback', e);
            }
        };
        void load();
    }, []);

    return (
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
                        <span key={ind}
                            className="cursor-default rounded-full border border-gray-200 bg-gradient-to-b from-white to-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:border-[#CF2030]/50 hover:bg-red-50/80 hover:text-[#CF2030] hover:shadow-md"
                            role="presentation">
                            {ind}
                        </span>
                    ))}
                </motion.div>
            </SectionWrapper>

            {/* === 領導團隊（動態載入） === */}
            <SectionWrapper title="領導團隊" subtitle="攜手帶領長翔持續精進、共創佳績" dark className="py-14 md:py-20">
                <div className="max-w-5xl mx-auto space-y-12">
                    {groups.map((group) => (
                        <div key={group.label}>
                            <p className="text-center text-xs font-bold text-[#CF2030] uppercase tracking-widest mb-6 opacity-70">
                                {group.label}
                            </p>
                            <div className={`grid gap-5 ${group.cols === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 sm:grid-cols-3'}`}>
                                {group.members.map((m, i) => (
                                    <LeaderCard key={`${group.label}-${i}`} m={m} groupLabel={group.label} i={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
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
};

export default AboutUs;
