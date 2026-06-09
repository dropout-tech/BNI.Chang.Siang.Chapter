import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Building, Crown, ExternalLink, Globe, Instagram, Mail, Phone, Sparkles, Target } from 'lucide-react';
import SEO from '../components/common/SEO';
import { useMembers } from '../hooks/useMembers';
import type { Member } from '../hooks/useMembers';
import { assetUrl } from '../lib/assets';
import { siteConfig } from '../config/site.config';
import { decodeMemberParam, getMemberPath } from '../lib/memberSlug';

type LinksMap = { [key: string]: string };
type LinkItem = { type: string; url: string; icon?: string };

const LINK_META: Record<string, { label: string; Icon: React.FC<{ size?: number; className?: string }> }> = {
    line:      { label: 'LINE',      Icon: ({ size = 16, className }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 2C6.477 2 2 6.07 2 11.07c0 4.55 3.875 8.36 9.065 9.087.352.066.832.202.954.465.11.237.071.61.035.85l-.157.94c-.048.283-.22 1.108.97.604 1.19-.504 6.443-3.794 8.785-6.497C23.28 14.56 24 12.899 24 11.07 24 6.07 19.523 2 12 2z"/></svg> },
    facebook:  { label: 'Facebook',  Icon: ({ size = 16, className }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg> },
    instagram: { label: 'Instagram', Icon: ({ size = 16, className }) => <Instagram size={size} className={className} /> },
    website:   { label: '官方網站',   Icon: ({ size = 16, className }) => <Globe size={size} className={className} /> },
    linkedin:  { label: 'LinkedIn',  Icon: ({ size = 16, className }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
};

function normalizeLinks(raw: Member['links']): { key: string; url: string }[] {
    if (!raw) return [];
    if (Array.isArray(raw)) {
        return (raw as LinkItem[]).filter(l => l?.url).map(l => ({ key: l.type || 'website', url: l.url }));
    }
    return Object.entries(raw as LinksMap).filter(([, url]) => !!url).map(([key, url]) => ({ key, url }));
}

function getIntroSection(text: string, heading: string): string {
    const marker = `【${heading}】`;
    const start = text.indexOf(marker);
    if (start === -1) return '';
    const rest = text.slice(start + marker.length);
    const next = rest.indexOf('【');
    return (next === -1 ? rest : rest.slice(0, next)).trim();
}

function getReferralTargetLevels(member: Member | undefined) {
    const fallbackIdeal = member ? getIntroSection(member.fullIntro || '', '理想引薦對象') : '';
    const targets = member?.referral_targets ?? {};
    return [
        {
            key: 'good',
            label: '好的引薦',
            description: targets.good?.trim() || '',
            fallback: '正在整理適合初步交流的合作對象。',
        },
        {
            key: 'ideal',
            label: '理想引薦',
            description: targets.ideal?.trim() || fallbackIdeal,
            fallback: '歡迎與會員一對一了解更精準的合作對象。',
        },
        {
            key: 'dream',
            label: '夢幻引薦',
            description: targets.dream?.trim() || '',
            fallback: '正在整理最期待被介紹認識的夢幻客戶。',
        },
    ];
}

const MemberProfile: React.FC = () => {
    const { id } = useParams();
    const { members, loading, error } = useMembers();
    const decodedId = decodeMemberParam(id);
    const member = React.useMemo(
        () => members.find((item) =>
            String(item.id) === String(id) ||
            item.slug === decodedId ||
            item.name === decodedId
        ),
        [members, id, decodedId],
    );

    const photo = member?.photo ? assetUrl(member.photo) : siteConfig.defaultPhoto;
    const isDefaultPhoto = photo === siteConfig.defaultPhoto || !member?.photo;
    const referralTargetLevels = getReferralTargetLevels(member);
    const intro = member?.fullIntro?.split('【理想引薦對象】')[0]?.trim() || member?.shortIntro || '';

    if (loading) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#CF2030] border-t-transparent" />
            </div>
        );
    }

    if (error || !member) {
        return (
            <div className="container mx-auto min-h-[60vh] px-4 py-32 text-center">
                <p className="mb-6 text-xl font-bold text-gray-800">找不到這位會員資料</p>
                <Link to="/member" className="inline-flex items-center gap-2 rounded-full bg-[#CF2030] px-5 py-3 font-bold text-white">
                    <ArrowLeft size={18} />
                    回到會員列表
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[linear-gradient(135deg,#fff_0%,#fff5f5_46%,#fff_100%)] pt-4">
            <SEO
                title={`${member.name}｜${member.industry}｜BNI 長翔名人堂白金分會`}
                description={`${member.name}是 ${siteConfig.branchFullName}`}
                breadcrumbs={[
                    { name: '會員介紹', path: '/member' },
                    { name: member.name, path: getMemberPath(member) },
                ]}
            />

            <section className="relative overflow-hidden px-4 py-10 md:py-16">
                <div className="absolute right-[-8rem] top-[-8rem] h-96 w-96 rounded-full bg-[#CF2030]/10 blur-3xl" />
                <div className="absolute bottom-[-10rem] left-[-8rem] h-96 w-96 rounded-full bg-[#E8394A]/10 blur-3xl" />

                <div className="container relative z-10 mx-auto max-w-6xl">
                    <Link to="/member" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#CF2030] hover:text-[#A51926]">
                        <ArrowLeft size={18} />
                        回到長翔夥伴
                    </Link>

                    <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
                        <motion.aside
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6 rounded-[36px] border border-red-100 bg-white p-8 shadow-[0_30px_90px_rgba(207,32,48,0.12)]"
                        >
                            <div className="text-center">
                                <div className="mx-auto mb-6 h-44 w-44 rounded-full border-2 border-[#CF2030] bg-white p-2 shadow-[0_20px_54px_rgba(207,32,48,0.2)]">
                                    <img
                                        src={photo}
                                        alt={member.name}
                                        className={`h-full w-full rounded-full ${isDefaultPhoto ? 'object-contain p-7' : 'object-cover'}`}
                                        style={{ objectPosition: member.photoPosition || 'center 20%' }}
                                        onError={(event) => { event.currentTarget.src = siteConfig.defaultPhoto; }}
                                    />
                                </div>
                                <div className="mb-4 inline-flex rounded-full border border-red-100 bg-red-50 px-4 py-1 text-xs font-black tracking-[0.18em] text-[#CF2030]">
                                    {member.category}
                                </div>
                                <h1 className="mb-3 text-4xl font-black tracking-tight text-gray-950">{member.name}</h1>
                                {member.is_gold_badge && (
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm font-black text-yellow-700" title="金質獎章">
                                        <Crown size={18} />
                                        金質獎章
                                    </div>
                                )}
                                <p className="text-lg font-bold text-[#CF2030]">{member.industry}</p>
                            </div>

                            <p className="rounded-2xl bg-gradient-to-br from-red-50 to-white p-5 text-base font-semibold leading-relaxed text-gray-700">{member.shortIntro}</p>

                            <div className="rounded-[24px] border border-red-100 bg-white p-5 shadow-[0_16px_44px_rgba(24,24,27,0.04)]">
                                <div className="mb-4 flex items-center gap-3">
                                    <Briefcase className="text-[#CF2030]" size={20} />
                                    <h2 className="text-lg font-black text-gray-950">服務項目</h2>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {(member.services?.length ? member.services : [member.industry]).map((service) => (
                                        <span key={service} className="rounded-full bg-red-50 px-3 py-1 text-sm font-bold text-[#CF2030]">
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-[24px] border border-red-100 bg-white p-5 shadow-[0_16px_44px_rgba(24,24,27,0.04)]">
                                <h2 className="mb-4 text-lg font-black text-gray-950">會員資訊</h2>
                                <div className="space-y-3 text-sm text-gray-700">
                                    {member.company && (
                                        <div className="flex items-center gap-2">
                                            <Building size={16} className="text-[#CF2030]" />
                                            {member.company}
                                        </div>
                                    )}
                                    {member.title && (
                                        <div className="flex items-center gap-2">
                                            <Briefcase size={16} className="text-[#CF2030]" />
                                            {member.title}
                                        </div>
                                    )}
                                    {member.email && (
                                        <a href={`mailto:${member.email}`} className="flex items-center gap-2 hover:text-[#CF2030]">
                                            <Mail size={16} className="text-[#CF2030]" />
                                            {member.email}
                                        </a>
                                    )}
                                    {member.phone && (
                                        <a href={`tel:${member.phone}`} className="flex items-center gap-2 hover:text-[#CF2030]">
                                            <Phone size={16} className="text-[#CF2030]" />
                                            {member.phone}
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Social Links */}
                            {(() => {
                                const linkList = normalizeLinks(member.links);
                                if (linkList.length === 0) return null;
                                return (
                                    <div className="rounded-[24px] border border-red-100 bg-white p-5 shadow-[0_16px_44px_rgba(24,24,27,0.04)]">
                                        <h2 className="mb-4 text-lg font-black text-gray-950">社群連結</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {linkList.map(({ key, url }) => {
                                                const meta = LINK_META[key.toLowerCase()];
                                                const Icon = meta?.Icon ?? ExternalLink;
                                                const label = meta?.label ?? key;
                                                return (
                                                    <a
                                                        key={key}
                                                        href={url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-bold text-[#CF2030] transition-all hover:bg-[#CF2030] hover:text-white hover:border-[#CF2030]"
                                                    >
                                                        <Icon size={15} />
                                                        {label}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })()}
                        </motion.aside>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6"
                        >
                            <div className="rounded-[32px] border border-red-100 bg-white p-7 shadow-[0_24px_70px_rgba(24,24,27,0.06)] md:p-9">
                                <div className="mb-5 flex items-center gap-3">
                                    <Sparkles className="text-[#CF2030]" size={24} />
                                    <h2 className="text-2xl font-black text-gray-950">專業介紹</h2>
                                </div>
                                <p className="whitespace-pre-line text-base leading-8 text-gray-700">{intro}</p>
                            </div>

                            <div className="rounded-[28px] border border-red-100 bg-white p-6 shadow-[0_20px_60px_rgba(24,24,27,0.05)]">
                                <div className="mb-4 flex items-center gap-3">
                                    <Target className="text-[#CF2030]" size={22} />
                                    <h2 className="text-xl font-black text-gray-950">引薦對象</h2>
                                </div>
                                <div className="grid gap-3 md:grid-cols-3">
                                    {referralTargetLevels.map((target) => (
                                        <div key={target.key} className="rounded-2xl border border-red-50 bg-gradient-to-br from-red-50/70 to-white p-4">
                                            <div className="mb-2 text-sm font-black tracking-[0.12em] text-[#CF2030]">{target.label}</div>
                                            <p className="whitespace-pre-line leading-7 text-gray-700">{target.description || target.fallback}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MemberProfile;

