import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Member } from '../../types';
import { motion } from 'framer-motion';
import { ArrowRight, Building, Briefcase } from 'lucide-react';
import { siteConfig } from '../../config/site.config';

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
    // Handle both local paths and InsForge URLs
    const getPhotoUrl = (photo: string) => {
        if (!photo) return siteConfig.defaultPhoto;

        const cleanPhoto = photo.trim();

        // If it's already an absolute URL (http:// or https://), return as-is
        if (cleanPhoto.startsWith('http://') || cleanPhoto.startsWith('https://')) {
            return cleanPhoto;
        }
        // Otherwise, ensure it starts with /
        return cleanPhoto.startsWith('/') ? cleanPhoto : `/${cleanPhoto}`;
    };

    const [imgSrc, setImgSrc] = useState(getPhotoUrl(member.photo));

    // Update image when member prop changes
    React.useEffect(() => {
        setImgSrc(getPhotoUrl(member.photo));
    }, [member.photo]);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col h-full"
        >
            <article className="relative group flex h-full flex-col overflow-hidden rounded-[28px] border border-red-100 bg-white shadow-[0_24px_70px_rgba(207,32,48,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#CF2030]/30 hover:shadow-[0_32px_90px_rgba(207,32,48,0.16)]">
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#A51926] via-[#CF2030] to-[#E8394A]" />
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#CF2030]/8 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                <div className="absolute left-5 top-5 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-[#CF2030]">
                    {member.category || 'BNI'}
                </div>

                <div className="flex flex-grow flex-col items-center px-6 pb-6 pt-12 text-center">
                    <div className="relative mb-5">
                        <div className="absolute inset-0 rounded-full bg-[#CF2030]/15 blur-xl" />
                        <div className="relative h-32 w-32 rounded-full border-2 border-[#CF2030]/80 bg-white p-1.5 shadow-[0_18px_42px_rgba(207,32,48,0.18)]">
                        <img
                            src={imgSrc}
                            alt={member.name}
                            loading="lazy"
                                className="h-full w-full rounded-full bg-white object-cover"
                            style={{ objectPosition: member.photoPosition || 'center 20%' }}
                            onError={() => setImgSrc(siteConfig.defaultPhoto)}
                        />
                    </div>
                    </div>

                    <h3 className="mb-2 text-2xl font-black tracking-tight text-gray-950">{member.name}</h3>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#CF2030]/15 bg-red-50 px-3 py-1 text-xs font-bold text-[#CF2030]">
                        {member.industry}
                    </div>

                    <p className="mb-5 min-h-[3.4rem] text-sm leading-relaxed text-gray-600 line-clamp-2">
                        {member.shortIntro || member.fullIntro}
                    </p>

                    <div className="mb-6 w-full space-y-2 rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/80 to-white p-4 text-left">
                                        {member.company && (
                            <div className="flex items-center gap-2 text-xs text-gray-600">
                                <Building size={14} className="shrink-0 text-[#CF2030]" />
                                <span className="truncate">{member.company}</span>
                            </div>
                                        )}
                                        {member.title && (
                            <div className="flex items-center gap-2 text-xs text-gray-600">
                                <Briefcase size={14} className="shrink-0 text-[#CF2030]" />
                                <span className="truncate">{member.title}</span>
                            </div>
                                        )}
                                    </div>

                    <Link
                        to={`/member/${member.id}`}
                        className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#CF2030] to-[#E8394A] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(207,32,48,0.24)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_42px_rgba(207,32,48,0.32)]"
                    >
                        查看完整介紹
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </article>
        </motion.div>
    );
};

export default MemberCard;
