import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useMembers } from '../../hooks/useMembers';
import { assetUrl } from '../../lib/assets';
import { LuxuryBackground, GlowingChevron } from '../common/PremiumDecorations';

const Contact: React.FC = () => {
    const { members } = useMembers();

    const roles = [
        { title: '主席', name: '吳庭彰' },
        { title: '副主席', name: '汪哲宇' },
        { title: '秘書財務', name: '劉書華' }
    ];

    const leadership = roles.map(role => {
        const member = members.find(m => m.name === role.name);
        return {
            ...role,
            member: member || null
        };
    });

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-red-50/70 to-white py-24 md:py-32" id="contact">
            <LuxuryBackground />

            <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#CF2030]/10 blur-3xl" />
            <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[#E8394A]/10 blur-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CF2030]/30 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-14 md:mb-18">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <div className="mb-4 flex items-center justify-center gap-4">
                            <GlowingChevron direction="left" className="hidden sm:block opacity-70" />
                            <span className="bni-kicker">VISIT CHANG SIANG</span>
                            <GlowingChevron direction="right" className="hidden sm:block opacity-70" />
                        </div>
                        <h2 className="m-0 text-4xl font-black tracking-tight text-[#222] md:text-5xl">
                            預約參訪，<span className="bni-gradient-text">聯繫長翔三長</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto max-w-3xl text-lg leading-8 text-gray-600"
                    >
                        歡迎與 BNI 長翔名人堂白金分會聯繫。無論是業務合作、商會參訪申請，或想了解更多資訊，我們隨時為您服務。<br /><br />
                        <span className="font-bold text-[#CF2030]">歡迎和長翔三長其中一位聯繫，讓參訪 CTA 更明確。</span><br /><br />
                        📍 例會地點：晶宴會館（民生館）<br />台北市中山區民生東路三段8號B2
                    </motion.p>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
                    {leadership.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-red-100 bg-white p-7 text-center shadow-[0_24px_70px_rgba(207,32,48,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#CF2030]/30 hover:shadow-[0_32px_90px_rgba(207,32,48,0.14)]"
                        >
                            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#A51926] via-[#CF2030] to-[#E8394A]" />
                            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#CF2030]/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                            <div className="relative mx-auto mb-5 h-32 w-32 overflow-hidden rounded-full border-2 border-[#CF2030]/60 bg-white p-1.5 shadow-[0_18px_42px_rgba(207,32,48,0.16)]">
                                <img
                                    src={item.member?.photo ? assetUrl(item.member.photo) : assetUrl(`/images/members/${item.name}.jpg`)}
                                    alt={item.name}
                                    className={`h-full w-full rounded-full ${item.member?.photo ? 'object-cover' : 'object-contain p-5'}`}
                                    style={{ objectPosition: 'top' }}
                                    onError={(e) => e.currentTarget.src = assetUrl('/images/assets/logo/bni-logo-new.png')}
                                />
                            </div>
                            <div className="mb-3 inline-flex self-center rounded-full border border-red-100 bg-red-50 px-4 py-1 text-xs font-black tracking-[0.18em] text-[#CF2030]">
                                {item.title}
                            </div>
                            <div className="mb-1 text-2xl font-black text-gray-950">{item.name}</div>
                            <div className="mb-5 text-base font-bold text-[#CF2030]">{item.member?.industry || 'BNI 長翔分會幹部'}</div>

                            <div className="mt-auto w-full space-y-3 rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/80 to-white p-4 text-base">
                                <div className="flex flex-col items-center justify-center gap-1 text-gray-600">
                                    <span className="font-medium text-[#333] text-center">{item.member?.company || '待更新'}</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-gray-600">
                                    <Phone size={16} className="text-[#CF2030] shrink-0" />
                                    <span>{item.member?.phone || '待更新'}</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-gray-600">
                                    <Mail size={16} className="text-[#CF2030] shrink-0" />
                                    <span className="text-sm break-all">{item.member?.email || '待更新'}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
