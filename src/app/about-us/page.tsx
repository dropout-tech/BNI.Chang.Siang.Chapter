"use client";

import { motion } from "framer-motion";
import {
  Star,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Award,
  Heart,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import WingIcon from "@/components/WingIcon";
import WaveSVG from "@/components/WaveSVG";
import GoldArrows from "@/components/GoldArrows";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const advantages = [
  {
    icon: Star,
    title: "白金等級實力",
    desc: "長翔已達成 BNI 白金分會認證，代表我們在引薦品質、出席率、會員滿意度等各項指標上均名列前茅。",
  },
  {
    icon: Shield,
    title: "名人堂榮耀",
    desc: "名人堂的殊榮代表長翔在 BNI 體系中的卓越表現，每一位夥伴的努力都是我們最引以為傲的勳章。",
  },
  {
    icon: Zap,
    title: "多元產業鏈",
    desc: "長翔匯聚了金融、科技、設計、法律、醫療、餐飲等多元產業的精英代表，打造最完整的商業生態圈。",
  },
  {
    icon: Users,
    title: "溫暖的社群文化",
    desc: "在長翔，我們不只談生意。定期的尾牙、春酒、戶外活動讓夥伴們建立起超越商業的深厚情誼。",
  },
  {
    icon: TrendingUp,
    title: "驚人的引薦成果",
    desc: "長翔分會的累計引薦金額持續突破新高，每一筆引薦都是夥伴間信任與專業的最佳證明。",
  },
  {
    icon: Award,
    title: "專業成長平台",
    desc: "透過每週的主題簡報、教育訓練、一對一深度交流，每位夥伴都能在長翔持續提升專業能力。",
  },
];

const industries = [
  "保險理財",
  "室內設計",
  "法律顧問",
  "數位行銷",
  "建築工程",
  "健康管理",
  "餐飲服務",
  "資訊科技",
  "房地產",
  "教育培訓",
  "美容美髮",
  "汽車服務",
  "印刷設計",
  "會計稅務",
  "攝影錄影",
];

export default function AboutUsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <WaveSVG className="absolute bottom-0 left-0 w-full h-40 opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <WingIcon className="w-32 h-28 mb-6 animate-float" />
            <SectionHeading
              title="關於長翔"
              subtitle="長翔展翼，商機無限 — 最具溫度與實力的精英商務社群"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp} className="space-y-6">
              <div className="bg-navy-800/60 border border-gold-400/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold gold-gradient-text mb-4">
                  長翔的故事
                </h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  BNI
                  長翔名人堂白金分會，座落於台北市中山區，是
                  BNI
                  體系中最具代表性的分會之一。「長翔」，取自「長空翱翔」之意，象徵著每一位夥伴都能在這個平台上展翅高飛，讓事業翱翔於無限的商機之中。
                </p>
                <p className="text-text-muted leading-relaxed mb-4">
                  從創會至今，長翔始終秉持「付出者收穫」的精神，打造一個以信任為基石、以共好為目標的企業家社群。我們不只是一個每週見面的商務團體，更是一群志同道合的事業夥伴，彼此支持、共同成長。
                </p>
                <p className="text-text-muted leading-relaxed">
                  長翔的每位成員都經過嚴格的審核與推薦，確保每一位加入的夥伴都具備專業能力與真誠態度。這份對品質的堅持，讓長翔成功取得「名人堂」與「白金分會」的雙重殊榮。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="長翔的優勢"
            subtitle="為什麼選擇長翔？因為我們不只做得到，更做得好"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-navy-800/60 border border-gold-400/10 rounded-2xl p-6 hover:border-gold-400/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl brushed-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <adv.icon size={24} className="text-navy-900" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {adv.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Chain */}
      <section className="relative py-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="產業鏈介紹"
            subtitle="涵蓋多元領域的專業團隊，為您提供全方位的商業資源"
          />

          <motion.div
            {...fadeUp}
            className="flex flex-wrap justify-center gap-3"
          >
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-5 py-2.5 bg-navy-800/60 border border-gold-400/15 rounded-full text-sm text-white/80 hover:border-gold-400/40 hover:text-gold-400 transition-all cursor-default"
              >
                {ind}
              </span>
            ))}
          </motion.div>

          <motion.p
            {...fadeUp}
            className="text-center text-text-muted text-sm mt-8"
          >
            * 產業代表持續擴充中，歡迎各領域的菁英加入
          </motion.p>
        </div>
      </section>

      {/* Core Spirit */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <WaveSVG className="absolute bottom-0 left-0 w-full h-32 opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <Heart size={48} className="text-gold-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              長翔的核心精神
            </h2>
            <blockquote className="text-xl text-gold-400 italic mb-8 max-w-2xl mx-auto">
              「在長翔，我們相信最好的生意，來自最深的信任。每一次引薦，都是一份承諾；每一次合作，都是一段故事的開始。」
            </blockquote>
            <div className="flex items-center justify-center gap-4 text-text-muted">
              <GoldArrows direction="left" />
              <span>Givers Gain — 付出者收穫</span>
              <GoldArrows direction="right" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-navy-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-black gold-gradient-text mb-6">
              成為長翔的一員
            </h2>
            <p className="text-lg text-text-muted mb-8">
              如果您也渴望找到一群真心互助的事業夥伴，歡迎親自來體驗長翔的溫度與實力
            </p>
            <a
              href="https://www.facebook.com/BNI.Chang.Siang.Chapter/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 text-navy-900 font-bold text-lg brushed-gold rounded-full hover:opacity-90 transition-opacity"
            >
              預約參訪 <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
