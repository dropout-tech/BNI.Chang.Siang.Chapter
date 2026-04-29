import React from 'react';
import { ExternalLink, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { assetUrl } from '../../lib/assets';

const Footer: React.FC = () => (
    <footer className="bg-[#333333] text-white pt-16 pb-24 md:pb-8 mt-auto">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
                <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
                    <Link to="/" className="inline-block">
                        <img src={assetUrl('/images/assets/logo/bni-logo-new.png')} alt="BNI" className="h-12 w-auto" />
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        BNI 長翔名人堂白金分會 — 以熱情積極、付出者著稱的金質商務交流平台。每週三早晨於晶宴會館實體例會。
                    </p>
                    <p className="text-gray-500 text-xs flex items-center gap-1">
                        <MapPin size={12} /> 台北市中山區民生東路三段8號B2（晶宴會館）
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">快速連結</h4>
                    <ul className="space-y-3">
                        <li><Link to="/about-bni" className="text-gray-400 hover:text-[#CF2030] text-sm transition-colors">什麼是 BNI</Link></li>
                        <li><Link to="/about-us" className="text-gray-400 hover:text-[#CF2030] text-sm transition-colors">關於長翔</Link></li>
                        <li><Link to="/members" className="text-gray-400 hover:text-[#CF2030] text-sm transition-colors">長翔夥伴</Link></li>
                        <li><Link to="/referrals" className="text-gray-400 hover:text-[#CF2030] text-sm transition-colors">引薦實績</Link></li>
                        <li><Link to="/events" className="text-gray-400 hover:text-[#CF2030] text-sm transition-colors">活動紀錄</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">聯繫我們</h4>
                    <div className="space-y-3">
                        <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-[#CF2030] text-sm transition-colors">
                            <ExternalLink size={14} /> Facebook 粉絲專頁
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-3">
                <p>&copy; 2026 BNI 長翔名人堂白金分會. All rights reserved.</p>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-right">
                    <Link to="/privacy" className="hover:text-white transition-colors">隱私權政策與服務條款</Link>
                    <p>
                        本網站由 琢奧科技有限公司 DropOut Tech Consulting Co., Ltd. 開發與維護，網站與系統開發歡迎洽詢{' '}
                        <a href="mailto:info@dropout.tw" className="hover:text-white transition-colors">info@dropout.tw</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
