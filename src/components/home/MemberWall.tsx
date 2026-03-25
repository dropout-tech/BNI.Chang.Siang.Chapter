import React, { useState } from 'react';
import { useMembers } from '../../hooks/useMembers';
import { motion } from 'framer-motion';
import { assetUrl } from '../../lib/assets';

const MemberThumbnail: React.FC<{ photo: string, name: string, industry: string, photoPosition?: string }> = ({ photo, name, industry, photoPosition }) => {
    const getPhotoUrl = (p: string) => assetUrl(p);
    const [imgSrc, setImgSrc] = useState(getPhotoUrl(photo));

    React.useEffect(() => { setImgSrc(getPhotoUrl(photo)); }, [photo]);

    return (
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 mx-4 relative group cursor-pointer border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-[0_0_0_rgba(212,175,55,0)] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300 z-10" />
            <img
                src={imgSrc}
                alt={name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ objectPosition: photoPosition || 'center 20%' }}
                onError={() => setImgSrc(assetUrl('/images/assets/logo/白色正方形logo.png'))}
            />
            <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 p-2">
                <span className="text-white text-sm md:text-base font-bold tracking-widest leading-tight drop-shadow-md text-center mb-1">{name}</span>
                <span className="text-[#D4AF37] text-[10px] md:text-xs font-medium tracking-wide bg-[#0A1628]/80 px-2 py-0.5 rounded-full border border-[#D4AF37]/30">{industry}</span>
            </div>
        </div>
    );
};

const MarqueeRow: React.FC<{ children: React.ReactNode, direction?: 'left' | 'right', speed?: number }> = ({ children, direction = 'left', speed = 20 }) => (
    <div className="flex overflow-hidden py-4 select-none">
        <motion.div
            className="flex items-center"
            initial={{ x: direction === 'left' ? '0%' : '-50%' }}
            animate={{ x: direction === 'left' ? '-50%' : '0%' }}
            transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        >
            {children}{children}{children}{children}
        </motion.div>
    </div>
);

const MemberWall: React.FC = () => {
    const { members, loading } = useMembers();

    if (loading) return <div className="py-20 text-center text-gray-500">Loading Members...</div>;
    if (!members.length) return null;

    const validMembers = members.filter(m => m.name !== '系統管理員');
    const chunkSize = Math.ceil(validMembers.length / 3);
    const row1 = validMembers.slice(0, chunkSize);
    const row2 = validMembers.slice(chunkSize, chunkSize * 2);
    const row3 = validMembers.slice(chunkSize * 2);

    return (
        <section className="min-h-screen flex flex-col justify-center py-16 relative overflow-hidden grain">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] opacity-[0.03] rounded-full -z-10"
                style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent 70%)' }} />

            <div className="text-center mb-12 relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-3 gold-text">精英成員</h2>
                <p className="text-[#D4AF37]/60 text-sm font-medium tracking-[0.3em] uppercase mb-3">白金分會</p>
                <div className="gold-line w-16 mx-auto mb-3" />
                <p className="text-gray-400 text-lg tracking-wide">匯聚各行各業的頂尖代表</p>
            </div>

            <div className="relative w-full max-w-[1920px] mx-auto mask-linear-gradient">
                <MarqueeRow speed={50}><div className="flex">{row1.map(m => <MemberThumbnail key={m.id} photo={m.photo} name={m.name} industry={m.industry} photoPosition={m.photoPosition} />)}</div></MarqueeRow>
                <MarqueeRow direction="right" speed={55}><div className="flex">{row2.map(m => <MemberThumbnail key={m.id} photo={m.photo} name={m.name} industry={m.industry} photoPosition={m.photoPosition} />)}</div></MarqueeRow>
                <MarqueeRow speed={60}><div className="flex">{row3.map(m => <MemberThumbnail key={m.id} photo={m.photo} name={m.name} industry={m.industry} photoPosition={m.photoPosition} />)}</div></MarqueeRow>
            </div>

            <div className="flex justify-end px-8 mt-4">
                <span className="gold-text text-xl tracking-[0.3em] font-bold opacity-50">›››</span>
            </div>
        </section>
    );
};

export default MemberWall;
