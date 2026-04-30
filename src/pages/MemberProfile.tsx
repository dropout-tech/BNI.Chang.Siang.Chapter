import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Building, Crown, Mail, Phone, Sparkles, Target } from 'lucide-react';
import SEO from '../components/common/SEO';
import { useMembers } from '../hooks/useMembers';
import { assetUrl } from '../lib/assets';
import { siteConfig } from '../config/site.config';
import { decodeMemberParam, getMemberPath } from '../lib/memberSlug';

function getIntroSection(text: string, heading: string): string {
    const marker = `【${heading}】`;
    const start = text.indexOf(marker);
    if (start === -1) return '';
    const rest = text.slice(start + marker.length);
    const next = rest.indexOf('【');
    return (next === -1 ? rest : rest.slice(0, next)).trim();
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
    const idealTargets = member ? getIntroSection(member.fullIntro || '', '理想引薦對象') : '';
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
        <div className="min-h-screen bg-[linear-gradient(135deg,#fff_0%,#fff5f5_46%,#fff_100%)] pt-24">
            <SEO
                title={`${member.name}｜${member.industry}｜BNI 長翔名人堂白金分會`}
                description={`${member.name}是 BNI 長翔名人堂白金分會的${member.industry}專業代表。${member.shortIntro || ''}`}
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

                    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                        <motion.aside
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-[36px] border border-red-100 bg-white p-8 text-center shadow-[0_30px_90px_rgba(207,32,48,0.12)]"
                        >
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
                            <p className="mb-6 text-lg font-bold text-[#CF2030]">{member.industry}</p>
                            <p className="rounded-2xl bg-gradient-to-br from-red-50 to-white p-5 text-base font-semibold leading-relaxed text-gray-700">
                                {member.shortIntro}
                            </p>
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

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="rounded-[28px] border border-red-100 bg-white p-6 shadow-[0_20px_60px_rgba(24,24,27,0.05)]">
                                    <div className="mb-4 flex items-center gap-3">
                                        <Target className="text-[#CF2030]" size={22} />
                                        <h2 className="text-xl font-black text-gray-950">理想引薦對象</h2>
                                    </div>
                                    <p className="leading-7 text-gray-700">{idealTargets || '歡迎與會員一對一了解更精準的合作對象。'}</p>
                                </div>

                                <div className="rounded-[28px] border border-red-100 bg-white p-6 shadow-[0_20px_60px_rgba(24,24,27,0.05)]">
                                    <div className="mb-4 flex items-center gap-3">
                                        <Briefcase className="text-[#CF2030]" size={22} />
                                        <h2 className="text-xl font-black text-gray-950">服務項目</h2>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {(member.services?.length ? member.services : [member.industry]).map((service) => (
                                            <span key={service} className="rounded-full bg-red-50 px-3 py-1 text-sm font-bold text-[#CF2030]">
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-[28px] border border-red-100 bg-white p-6 shadow-[0_20px_60px_rgba(24,24,27,0.05)]">
                                <h2 className="mb-4 text-xl font-black text-gray-950">會員資訊</h2>
                                <div className="grid gap-3 text-sm text-gray-700 md:grid-cols-2">
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
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MemberProfile;

