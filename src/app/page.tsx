"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  TrendingUp,
  Award,
  Calendar,
  Handshake,
  Target,
  GraduationCap,
  Heart,
  ArrowRight,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import GoldArrows from "@/components/GoldArrows";
import WaveSVG from "@/components/WaveSVG";
import { stats } from "@/data/achievements";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const bniFeatures = [
  {
    icon: Handshake,
    title: "合作取代競爭",
    desc: "每個行業僅一位代表，杜絕內部競爭，讓合作成為唯一途徑。",
  },
  {
    icon: Target,
    title: "精準商業引薦",
    desc: "透過結構化的引薦系統，為您帶來高品質的商業機會。",
  },
  {
    icon: GraduationCap,
    title: "終身學習成長",
    desc: "定期培訓課程與專家分享，持續提升商業敏感度與專業能力。",
  },
  {
    icon: Heart,
    title: "付出者收穫",
    desc: "BNI 核心精神 Givers Gain — 先給予，後獲得，善的循環永不停歇。",
  },
];

const statCards = [
  { label: "累計引薦金額", value: stats.totalReferralAmount, icon: TrendingUp },
  { label: "成功引薦次數", value: stats.totalReferrals, icon: Award },
  { label: "精英成員", value: stats.totalMembers, icon: Users },
  { label: "深耕年資", value: stats.yearsActive, icon: Calendar },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* BNI Overview Preview */}
      <section
        id="about-preview"
        className="relative py-24 overflow-hidden grain-overlay"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="什麼是 BNI"
            subtitle="Business Network International — 全球最大的商務引薦組織，改變世界做生意的方式"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bniFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-navy-800/60 backdrop-blur border border-gold-400/10 rounded-2xl p-6 hover:border-gold-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl brushed-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feat.icon size={24} className="text-navy-900" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link
              href="/about-bni"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
            >
              深入了解 BNI <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Chang Siang Preview */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <WaveSVG className="absolute top-0 left-0 w-full h-32 rotate-180 opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="關於長翔"
            subtitle="在這裡，每一位夥伴都是彼此事業的推手"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-400/20 to-gold-500/20 rounded-2xl blur-lg" />
                <div className="relative bg-navy-800/80 border border-gold-400/20 rounded-2xl p-8">
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    BNI
                    長翔名人堂白金分會，匯聚了台北各產業的精英與領袖。我們不只是一個商務交流平台，更是一個以「信任」為基石、以「共好」為目標的企業家社群。
                  </p>
                  <p className="text-text-muted leading-relaxed mb-6">
                    在長翔，每位夥伴都秉持著「付出者收穫」的精神，透過每週的深度交流、精準的商業引薦，以及真誠的互相支持，共同打造出一個充滿溫度與實力的商業生態圈。
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    長翔的產業鏈涵蓋金融、科技、設計、法律、餐飲、健康等多元領域。我們相信，當不同專業碰撞在一起，就能激發出最耀眼的商業火花。
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {statCards.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-navy-800/60 border border-gold-400/10 rounded-xl p-6 text-center hover:border-gold-400/30 transition-all"
                  >
                    <stat.icon
                      size={28}
                      className="text-gold-400 mx-auto mb-3"
                    />
                    <div className="text-2xl font-bold gold-gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-text-muted text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
            >
              了解長翔的故事 <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partners Preview */}
      <section className="relative py-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="精英成員"
            subtitle="白金分會 — 各產業的頂尖代表，攜手共創無限可能"
          />

          <motion.div
            {...fadeUp}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="group bg-navy-800/60 border border-gold-400/10 rounded-xl p-4 text-center hover:border-gold-400/30 transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-navy-700 border-2 border-gold-400/20 flex items-center justify-center mb-3 group-hover:border-gold-400/50 transition-colors">
                  <Users size={24} className="text-gold-400/60" />
                </div>
                <div className="text-sm font-semibold text-white">待更新</div>
                <div className="text-xs text-gold-400 mt-1">產業代表</div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 px-8 py-3 text-navy-900 font-bold brushed-gold rounded-full hover:opacity-90 transition-opacity"
            >
              查看所有夥伴 <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Achievements Preview */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <WaveSVG className="absolute bottom-0 left-0 w-full h-32 opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="引薦實績"
            subtitle="用數據說話，用故事傳遞信任的價值"
          />

          <motion.div
            {...fadeUp}
            className="bg-navy-800/60 border border-gold-400/10 rounded-2xl p-8 md:p-12 text-center mb-12"
          >
            <div className="text-sm text-gold-400 uppercase tracking-widest mb-2">
              累計引薦金額
            </div>
            <div className="text-4xl md:text-6xl font-black gold-gradient-text mb-4">
              {stats.totalReferralAmount}
            </div>
            <div className="flex items-center justify-center gap-3">
              <GoldArrows direction="left" className="text-lg" />
              <span className="text-text-muted">
                持續成長中
              </span>
              <GoldArrows direction="right" className="text-lg" />
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="text-center">
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
            >
              查看更多引薦故事 <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="relative py-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="活動紀錄"
            subtitle="Power Day、BOD、尾牙春酒⋯⋯ 展現長翔有溫度的一面"
          />

          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Power Day",
                desc: "產業鏈深度串聯日，創造最精準的合作機會",
                icon: "⚡",
              },
              {
                title: "BOD 策略會議",
                desc: "核心幹部定期檢討與規劃，確保分會持續進化",
                icon: "🎯",
              },
              {
                title: "尾牙春酒",
                desc: "歲末年初的歡聚時刻，凝聚共識、感恩彼此",
                icon: "🎉",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-navy-800/60 border border-gold-400/10 rounded-2xl p-6 hover:border-gold-400/30 transition-all"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
            >
              瀏覽所有活動紀錄 <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <GoldArrows direction="left" className="text-3xl" />
            <h2 className="text-4xl md:text-5xl font-black gold-gradient-text my-6">
              歡迎加入長翔
            </h2>
            <GoldArrows direction="right" className="text-3xl" />

            <p className="text-lg text-text-muted mt-6 mb-10 max-w-2xl mx-auto">
              企業老闆都在使用最精準、有效率的業務引薦平台「BNI」。
              誠摯邀請您一同加入長翔，讓事業展翅高飛！
            </p>

            <a
              href="https://www.facebook.com/BNI.Chang.Siang.Chapter/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-navy-900 font-bold text-lg brushed-gold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-gold-400/20"
            >
              立即預約參訪
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
