import React, { useState } from 'react';
import { useMembers } from '../../hooks/useMembers';
import { motion } from 'framer-motion';
import { assetUrl } from '../../lib/assets';

const MemberThumbnail: React.FC<{ photo: string, name: string, industry: string, photoPosition?: string }> = ({ photo, name, industry, photoPosition }) => {
    const [imgSrc, setImgSrc] = useState(assetUrl(photo));
    React.useEffect(() => { setImgSrc(assetUrl(photo)); }, [photo]);

    return (
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 mx-4 relative group cursor-pointer border-2 border-gray-200 hover:border-[#CF2030] transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10" />
            <img src={imgSrc} alt={name} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ objectPosition: photoPosition || 'center 20%' }}
                onError={() => setImgSrc(assetUrl('/images/assets/logo/白色正方形logo.png'))} />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 p-2">
                <span className="text-white text-sm font-bold drop-shadow-md text-center mb-1">{name}</span>
                <span className="text-white/80 text-[10px] bg-[#CF2030]/80 px-2 py-0.5 rounded-full">{industry}</span>
            </div>
        </div>
    );
};

const MarqueeRow: React.FC<{ children: React.ReactNode, direction?: 'left' | 'right', speed?: number }> = ({ children, direction = 'left', speed = 20 }) => (
    <div className="flex overflow-hidden py-3 select-none">
        <motion.div className="flex items-center"
            initial={{ x: direction === 'left' ? '0%' : '-50%' }}
            animate={{ x: direction === 'left' ? '-50%' : '0%' }}
            transition={{ repeat: Infinity, ease: "linear", duration: speed }}>
            {children}{children}{children}{children}
        </motion.div>
    </div>
);

const MemberWall: React.FC = () => {
    const { members, loading } = useMembers();
    if (loading) return <div className="py-20 text-center text-gray-400">載入中...</div>;
    if (!members.length) return null;

    const valid = members.filter(m => m.name !== '系統管理員');
    const sz = Math.ceil(valid.length / 3);

    return (
        <section className="py-20 bg-[#F8F9FA] overflow-hidden">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-[#333] mb-3">精英成員</h2>
                <div className="red-line mx-auto mb-3" />
                <p className="text-gray-500">匯聚各行各業的頂尖代表</p>
            </div>
            <div className="w-full max-w-[1920px] mx-auto mask-linear-gradient">
                <MarqueeRow speed={50}><div className="flex">{valid.slice(0, sz).map(m => <MemberThumbnail key={m.id} photo={m.photo} name={m.name} industry={m.industry} photoPosition={m.photoPosition} />)}</div></MarqueeRow>
                <MarqueeRow direction="right" speed={55}><div className="flex">{valid.slice(sz, sz * 2).map(m => <MemberThumbnail key={m.id} photo={m.photo} name={m.name} industry={m.industry} photoPosition={m.photoPosition} />)}</div></MarqueeRow>
                <MarqueeRow speed={60}><div className="flex">{valid.slice(sz * 2).map(m => <MemberThumbnail key={m.id} photo={m.photo} name={m.name} industry={m.industry} photoPosition={m.photoPosition} />)}</div></MarqueeRow>
            </div>
        </section>
    );
};

export default MemberWall;
