import React from 'react';
import { ExternalLink, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { assetUrl } from '../../lib/assets';

const Footer: React.FC = () => (
    <footer className="relative mt-auto overflow-hidden bg-white pt-16 pb-24 text-gray-700 md:pb-8">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#A51926] via-[#CF2030] to-[#E8394A]" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#CF2030]/8 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#E8394A]/8 blur-3xl" />
        <div className="container mx-auto px-4">
            <div className="relative grid grid-cols-1 gap-8 rounded-[32px] border border-red-100 bg-gradient-to-br from-white via-red-50/50 to-white p-6 text-center shadow-[0_24px_80px_rgba(207,32,48,0.08)] md:grid-cols-4 md:p-10 md:text-left">
                <div className="md:col-span-2 space-y-4 flex flex-col items-center md:items-start">
                    <Link to="/" className="inline-block">
                        <img src={assetUrl('/images/assets/logo/bni-logo-new.png')} alt="BNI" className="h-12 w-auto" />
                    </Link>
                    <p className="max-w-sm text-sm leading-relaxed text-gray-600">
                        BNI 長翔名人堂白金分會 — 以熱情積極、付出者著稱的金質商務交流平台。每週三早晨於晶宴會館實體例會。
                    </p>
                    <p className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin size={12} /> 台北市中山區民生東路三段8號B2（晶宴會館）
                    </p>
                </div>

                <div>
                    <h4 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#CF2030]">快速連結</h4>
                    <ul className="space-y-3">
                        <li><Link to="/about-bni" className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#CF2030]">什麼是 BNI</Link></li>
                        <li><Link to="/about-us" className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#CF2030]">關於長翔</Link></li>
                        <li><Link to="/members" className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#CF2030]">長翔夥伴</Link></li>
                        <li><Link to="/referrals" className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#CF2030]">引薦實績</Link></li>
                        <li><Link to="/events" className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#CF2030]">活動紀錄</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#CF2030]">聯繫我們</h4>
                    <div className="space-y-3">
                        <Link to="/#contact"
                            className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#CF2030] md:justify-start">
                            <ExternalLink size={14} /> 預約參訪
                        </Link>
                        <a href="mailto:info@dropout.tw"
                            className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#CF2030] md:justify-start">
                            <Mail size={14} /> 網站與系統洽詢
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col items-center justify-between gap-3 border-t border-red-100 pt-6 text-xs text-gray-500 md:flex-row">
                <p>&copy; 2026 BNI 長翔名人堂白金分會. All rights reserved.</p>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-right">
                    <Link to="/privacy" className="transition-colors hover:text-[#CF2030]">隱私權政策與服務條款</Link>
                    <p>
                        本網站由 琢奧科技有限公司 DropOut Tech Consulting Co., Ltd. 開發與維護，網站與系統開發歡迎洽詢{' '}
                        <a href="mailto:info@dropout.tw" className="font-bold text-[#CF2030] transition-colors hover:text-[#A51926]">info@dropout.tw</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
