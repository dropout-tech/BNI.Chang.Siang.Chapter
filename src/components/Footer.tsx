"use client";

import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-gold-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full brushed-gold flex items-center justify-center text-navy-900 font-black text-sm">
                BNI
              </div>
              <div>
                <div className="text-white font-bold">BNI 長翔名人堂</div>
                <div className="text-gold-400 text-sm">白金分會</div>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              長翔展翼，商機無限。匯聚各產業精英的金質商務交流平台，透過專業引薦與深度合作，為您打開無限商機。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-400 font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              {[
                { href: "/about-bni", label: "什麼是 BNI" },
                { href: "/about-us", label: "關於長翔" },
                { href: "/partners", label: "長翔夥伴" },
                { href: "/achievements", label: "引薦實績" },
                { href: "/events", label: "活動紀錄" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold-400 font-semibold mb-4">聯絡我們</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-text-muted text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>台北市中山區</span>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/BNI.Chang.Siang.Chapter/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-muted hover:text-gold-400 text-sm transition-colors"
                >
                  <ExternalLink size={16} className="shrink-0" />
                  <span>Facebook 粉絲專頁</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-muted text-sm">
                <Mail size={16} className="shrink-0 text-gold-400" />
                <span>歡迎透過粉專私訊聯繫</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mt-8 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} BNI 長翔名人堂白金分會. All rights
            reserved.
          </p>
          <p className="text-text-muted text-xs">
            Changing the Way the World Does Business
          </p>
        </div>
      </div>
    </footer>
  );
}
