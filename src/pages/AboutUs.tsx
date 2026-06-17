import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Shield, Zap, Users, TrendingUp, Award } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionWrapper from '../components/common/SectionWrapper';
import SEO from '../components/common/SEO';
import MemberCard from '../components/members/MemberCard';
import { siteConfig } from '../config/site.config';
import { insforge, isBackendConfigured } from '../lib/insforge';
import { makeMemberSlug } from '../lib/memberSlug';
import type { Member } from '../hooks/useMembers';

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.6 } };

interface RoleEntry {
    id: number;
    role_name: string;
    role_group: string;
    group_cols: number;
    sort_order: number;
    member: Member | null;
}

interface LeaderGroup {
    label: string;
    cols: number;
    roles: RoleEntry[];
}

/** Static fallback data */
const STATIC_ROLES: RoleEntry[] = [
    { id: 1, role_name: '董事顧問', role_group: '顧問 & 大使', group_cols: 4, sort_order: 1, member: { id: 43, name: '詹鴻鵠', industry: '自媒體商業教育', photo: `${import.meta.env.BASE_URL}images/members/詹鴻鵠.png`, category: '董事顧問', title: '', company: '', shortIntro: '', fullIntro: '', links: [], services: [], hashtags: [], slug: '詹鴻鵠-e678a9' } },
    { id: 2, role_name: '大使',     role_group: '顧問 & 大使', group_cols: 4, sort_order: 2, member: { id: 44, name: '葉炘然', industry: '中式餐廳',       photo: `${import.meta.env.BASE_URL}images/members/葉炘然.png`, category: '大使', title: '', company: '', shortIntro: '', fullIntro: '', links: [], services: [], hashtags: [], slug: '葉炘然-3c227b' } },
    { id: 3, role_name: '助理大使', role_group: '顧問 & 大使', group_cols: 4, sort_order: 3, member: { id: 45, name: '楊政龍', industry: '健身教練',       photo: `${import.meta.env.BASE_URL}images/members/楊政龍.png`, category: '助理大使', title: '', company: '', shortIntro: '', fullIntro: '', links: [], services: [], hashtags: [], slug: '楊政龍-445174' } },
    { id: 4, role_name: '助理大使', role_group: '顧問 & 大使', group_cols: 4, sort_order: 4, member: { id: 46, name: '郭亭君', industry: '社群行銷代操',   photo: `${import.meta.env.BASE_URL}images/members/郭亭君.png`, category: '助理大使', title: '', company: '', shortIntro: '', fullIntro: '', links: [], services: [], hashtags: [], slug: '郭亭君-aaccd1' } },
    { id: 5, role_name: '主席',     role_group: '執行主席團',  group_cols: 3, sort_order: 1, member: { id: 30, name: '吳庭彰', industry: '活動體驗企劃',   photo: 'https://5pg4mz5n.us-east.insforge.app/api/storage/buckets/member-photos/objects/a229f332-ec91-45d6-bcf7-230ffb2ab6a1-1778669228366.jpg', category: '主席', title: '', company: '', shortIntro: '', fullIntro: '', links: [], services: [], hashtags: [], slug: '吳庭彰' } },
    { id: 6, role_name: '副主席',   role_group: '執行主席團',  group_cols: 3, sort_order: 2, member: { id: 29, name: '汪哲宇', industry: '氣球佈置',       photo: 'https://5pg4mz5n.us-east.insforge.app/api/storage/buckets/member-photos/objects/c07ab7c9-bcdf-40e4-8228-f5ad2e84a742-1778756043385.png', category: '副主席', title: '', company: '', shortIntro: '', fullIntro: '', links: [], services: [], hashtags: [], slug: '汪哲宇' } },
    { id: 7, role_name: '秘書財務', role_group: '執行主席團',  group_cols: 3, sort_order: 3, member: { id: 38, name: '劉書華', industry: '移民顧問',       photo: 'https://5pg4mz5n.us-east.insforge.app/api/storage/buckets/member-photos/objects/7385cd14-cda5-46c9-af7e-378f7c8512f9-1779116962613.png', category: '秘書財務', title: '', company: '', shortIntro: '', fullIntro: '', links: [], services: [], hashtags: [], slug: '劉書華' } },
    { id: 8,  role_name: '教育協調員', role_group: '協調員', group_cols: 3, sort_order: 1, member: null },
    { id: 9,  role_name: '活動協調員', role_group: '協調員', group_cols: 3, sort_order: 2, member: null },
    { id: 10, role_name: '導師協調員', role_group: '協調員', group_cols: 3, sort_order: 3, member: null },
    { id: 11, role_name: '成長協調員', role_group: '協調員', group_cols: 3, sort_order: 4, member: null },
    { id: 12, role_name: '來賓接待組', role_group: '協調員', group_cols: 3, sort_order: 5, member: null },
    { id: 13, role_name: '數位資訊組', role_group: '協調員', group_cols: 3, sort_order: 6, member: null },
];

function groupRoles(roles: RoleEntry[]): LeaderGroup[] {
    const map: Record<string, LeaderGroup> = {};
    const order: string[] = [];
    for (const r of roles) {
        if (!map[r.role_group]) {
            map[r.role_group] = { label: r.role_group, cols: r.group_cols ?? 3, roles: [] };
            order.push(r.role_group);
        }
        map[r.role_group].roles.push(r);
    }
    return order.map(g => map[g]);
}

/** Placeholder card for an unassigned role */
const VacantCard: React.FC<{ roleName: string }> = ({ roleName }) => (
    <div className="flex flex-col h-full">
        <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-dashed border-red-100 bg-white/60 shadow-sm">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
            <div className="absolute left-5 top-5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-gray-400">
                {roleName}
            </div>
            <div className="flex flex-grow flex-col items-center px-6 pb-6 pt-12 text-center">
                <div className="relative mb-5">
                    <div className="h-32 w-32 rounded-full border-2 border-dashed border-gray-200 bg-gray-50 flex items-center justify-center">
                        <img src={siteConfig.defaultPhoto} alt="" className="w-14 h-14 object-contain opacity-20" />
                    </div>
                </div>
                <h3 className="mb-2 text-xl font-black tracking-tight text-gray-300">待公告</h3>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-xs font-bold text-gray-300">
                    {roleName}
                </div>
            </div>
        </article>
    </div>
);

const advantages = [
    { icon: Star,       title: '白金等級實力', desc: '引薦品質、出席率、會員滿意度等各項指標均名列前茅。' },
    { icon: Shield,     title: '名人堂榮耀',   desc: '名人堂殊榮代表長翔在 BNI 體系中的卓越表現。' },
    { icon: Zap,        title: '多元產業鏈',   desc: '金融、科技、設計、法律、醫療、餐飲等多元產業精英。' },
    { icon: Users,      title: '溫暖的社群文化', desc: '定期的尾牙、春酒、戶外活動讓夥伴建立超越商業的情誼。' },
    { icon: TrendingUp, title: '驚人的引薦成果', desc: '累計引薦金額持續突破新高，是信任與專業的最佳證明。' },
    { icon: Award,      title: '90%綠燈紀錄', desc: '2026年4月90%綠燈紀錄，正邁向全綠燈分會。' },
];

// ─────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────
const AboutUs: React.FC = () => {
    const [groups, setGroups] = useState<LeaderGroup[]>(groupRoles(STATIC_ROLES));

    useEffect(() => {
        if (!isBackendConfigured) return;
        const load = async () => {
            try {
                const { data: roles, error } = await insforge.database
                    .from('chapter_roles')
                    .select('id, role_name, role_group, group_cols, sort_order, member_idx')
                    .order('sort_order', { ascending: true });
                if (error || !roles?.length) return;

                const memberIdxs = roles.map((r: any) => r.member_idx).filter(Boolean);
                let memberMap: Record<number, any> = {};
                if (memberIdxs.length) {
                    const { data: mems } = await insforge.database
                        .from('members')
                        .select('id, idx, name, industry, photo, photoPosition, category, title, company, shortIntro, fullIntro, links, services, hashtags, slug, is_gold_badge')
                        .in('idx', memberIdxs);
                    (mems || []).forEach((m: any) => { memberMap[m.idx ?? m.id] = m; });
                }

                const entries: RoleEntry[] = roles.map((r: any) => {
                    const raw = r.member_idx ? memberMap[r.member_idx] : null;
                    const member: Member | null = raw ? {
                        id: Number(raw.idx ?? raw.id),
                        name: raw.name ?? '',
                        industry: raw.industry ?? '',
                        photo: raw.photo ?? '',
                        photoPosition: raw.photoPosition,
                        category: r.role_name,          // ← 職稱顯示在卡片左上角
                        title: raw.title ?? '',
                        company: raw.company ?? '',
                        shortIntro: raw.shortIntro ?? raw.short_intro ?? '',
                        fullIntro: raw.fullIntro ?? raw.full_intro ?? '',
                        links: raw.links ?? [],
                        services: raw.services ?? [],
                        hashtags: raw.hashtags ?? [],
                        slug: raw.slug || makeMemberSlug(raw.name, raw.idx ?? raw.id),
                        is_gold_badge: raw.is_gold_badge,
                    } : null;
                    return { id: r.id, role_name: r.role_name, role_group: r.role_group, group_cols: r.group_cols ?? 3, sort_order: r.sort_order, member };
                });

                const result = groupRoles(entries);
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

            {/* === 領導團隊 — 使用 MemberCard === */}
            <SectionWrapper title="領導團隊" subtitle="攜手帶領長翔持續精進、共創佳績" dark className="py-14 md:py-20">
                <div className="max-w-6xl mx-auto space-y-14">
                    {groups.map((group) => (
                        <div key={group.label}>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex-1 h-px bg-red-100" />
                                <span className="text-xs font-bold text-[#CF2030] uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
                                    {group.label}
                                </span>
                                <div className="flex-1 h-px bg-red-100" />
                            </div>
                            <div className={`grid gap-6 ${
                                group.cols === 4
                                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                                    : group.roles.length <= 3
                                        ? 'grid-cols-1 sm:grid-cols-3'
                                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                            }`}>
                                {group.roles.map((r) =>
                                    r.member
                                        ? <MemberCard key={r.id} member={r.member} />
                                        : <VacantCard key={r.id} roleName={r.role_name} />
                                )}
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
