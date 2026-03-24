import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';

const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 bg-bg-dark border-t border-white/10 pt-16 pb-24 md:pb-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
                    <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
                        <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                            <img src={siteConfig.logos.horizontal} alt={`${siteConfig.branchFullName} — 台灣商會`} className="h-20 w-auto" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0 text-center md:text-left">
                            BNI 長翔名人堂白金分會 — 以熱情積極、付出者著稱的金質商務交流平台。每週三早晨於晶宴會館（民生館）舉行實體例會，面對面深度交流，為每位夥伴打開無限商機。
                        </p>
                        <p className="text-gray-500 text-xs mt-2">
                            📍 台北市中山區民生東路三段8號B2（晶宴會館）
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg tracking-wide">快速連結</h4>
                        <ul className="space-y-3">
                            <li className="list-none"><Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">首頁</Link></li>
                            <li className="list-none"><Link to="/members" className="text-gray-400 hover:text-primary transition-colors text-sm">會員介紹</Link></li>
                            <li className="list-none"><Link to="/referrals" className="text-gray-400 hover:text-primary transition-colors text-sm">引薦報告</Link></li>
                            <li className="list-none"><Link to="/bni" className="text-gray-400 hover:text-primary transition-colors text-sm">什麼是 BNI</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg tracking-wide">聯繫我們</h4>
                        <div className="space-y-3 flex flex-col items-center md:items-start">
                            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm group" aria-label={`${siteConfig.branchFullName} Facebook 粉絲專頁`}>
                                <span className="p-2 bg-white/5 rounded-full group-hover:bg-primary group-hover:text-bg-dark transition-all"><Facebook size={16} /></span> Facebook
                            </a>
                            {siteConfig.social.instagram && (
                            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm group" aria-label={`${siteConfig.branchFullName} Instagram`}>
                                <span className="p-2 bg-white/5 rounded-full group-hover:bg-primary group-hover:text-bg-dark transition-all"><Instagram size={16} /></span> Instagram
                            </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>&copy; {new Date().getFullYear()} BNI ChangSiang Chapter. All rights reserved.</p>
                        <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                            隱私權政策與服務條款
                        </Link>
                    </div>
                    <p className="text-center font-bold text-white/80">
                        本網站由 琢奧科技有限公司 DropOut Tech Consulting Co., Ltd. 開發與維護，網站與系統開發歡迎洽詢{' '}
                        <a href="mailto:info@dropout.tw" className="text-primary hover:underline hover:text-white transition-colors">
                            info@dropout.tw
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
