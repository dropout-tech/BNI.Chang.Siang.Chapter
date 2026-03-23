"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Users,
  Handshake,
  Target,
  GraduationCap,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import WaveSVG from "@/components/WaveSVG";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const bniStats = [
  { label: "全球會員數", value: "330,000+" },
  { label: "全球分會", value: "11,400+" },
  { label: "遍及國家", value: "77" },
  { label: "創立年份", value: "1985" },
];

const twStats = [
  { label: "台灣分會", value: "221" },
  { label: "台灣會員", value: "9,225" },
  { label: "引薦次數", value: "70萬+" },
  { label: "成交金額", value: "NT$283億+" },
];

const coreValues = [
  {
    icon: Handshake,
    title: "合作優先，共創價值",
    desc: "我們創造一個沒有利益衝突的環境，讓成員彼此信任、專注合作。每一位夥伴都能安心分享資源與人脈，共同創造更大的成長機會，真正實現「一加一大於二」的商業價值。",
  },
  {
    icon: Heart,
    title: "善的循環，價值傳遞",
    desc: "BNI 的精神在於「先給予、後獲得」。我們相信，當你願意真心為他人創造機會，這份善意終將以意想不到的方式回到你身上。這種良性的商業互動，讓每位成員都能在彼此的成功中茁壯自己的事業。",
  },
  {
    icon: Users,
    title: "高信任，低壓力",
    desc: "每位成員都經過審核與推薦，建立起高度信任的商業圈。這裡不是冷冰冰的競爭戰場，而是一個可以放心交流、真誠合作的空間。讓合作不再有壓力，讓生意變得更輕鬆。",
  },
  {
    icon: Target,
    title: "精準推薦，長期合作",
    desc: "以專業分工為基礎，每個行業僅有一位代表，杜絕內部競爭。這樣的制度讓推薦更聚焦、機會更純粹，夥伴之間可以放心長期合作，建立深度信任與共贏關係。",
  },
  {
    icon: GraduationCap,
    title: "成長共享，資源整合",
    desc: "我們共享學習資源、行銷管道與實戰經驗，每一位成員的成長，都是整體的進步。透過知識交流與經驗傳承，不只壯大個人，更讓整個分會持續進化、永續發展。",
  },
  {
    icon: Globe,
    title: "全球網絡，在地深耕",
    desc: "BNI 橫跨 77 個國家，11,400 個以上的分會。加入 BNI 不只是加入一個分會，更是接入全球最大的商務引薦網絡，讓您的事業觸角延伸到世界各地。",
  },
];

const fiveBasics = [
  {
    title: "引薦 (Referrals)",
    desc: "主動為夥伴介紹商業機會，是 BNI 最核心的行動。",
  },
  {
    title: "邀請賓客 (Visitors)",
    desc: "邀請商業人脈來體驗 BNI 例會，拓展分會影響力。",
  },
  {
    title: "一對一 (1-to-1)",
    desc: "與夥伴進行深度對話，深入了解彼此的商業需求與優勢。",
  },
  {
    title: "教育訓練 (Education)",
    desc: "持續學習商務技巧與人脈經營，提升個人與團隊的專業能力。",
  },
  {
    title: "出席 (Attendance)",
    desc: "穩定出席每週例會，展現承諾與專業態度。",
  },
];

export default function AboutBNIPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <WaveSVG className="absolute bottom-0 left-0 w-full h-40 opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="什麼是 BNI"
            subtitle="Business Network International — 全球最大的商務引薦組織"
          />

          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              BNI 全名 Business Network International（商業網絡國際），創立於
              1985 年，由 Dr. Ivan Misner
              博士創辦。BNI的使命是幫助企業主透過結構化的互相引薦系統來拓展業務，改變全世界做生意的方式。
            </p>
            <p className="text-text-muted leading-relaxed">
              BNI
              的核心理念為「付出者收穫」（Givers Gain）——
              一群專業人士，若彼此本著優先為對方引薦生意的話，最終都會一起獲利，壯大彼此的事業。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            {...fadeUp}
            className="text-2xl font-bold text-white text-center mb-10"
          >
            BNI 全球數據
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {bniStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-navy-800/60 border border-gold-400/10 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-black gold-gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.h3
            {...fadeUp}
            className="text-2xl font-bold text-white text-center mb-10"
          >
            BNI 台灣成績
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {twStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-navy-800/60 border border-gold-400/20 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-black gold-gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="BNI 核心價值" subtitle="為什麼全球超過 33 萬位企業主選擇 BNI" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, i) => (
              <motion.div
                key={val.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-navy-800/60 backdrop-blur border border-gold-400/10 rounded-2xl p-6 hover:border-gold-400/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl brushed-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <val.icon size={24} className="text-navy-900" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {val.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Basics */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="BNI 五大基本功"
            subtitle="每位會員的行動指南，持續精進的基礎"
          />

          <div className="space-y-4">
            {fiveBasics.map((basic, i) => (
              <motion.div
                key={basic.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex items-start gap-4 bg-navy-800/40 border border-gold-400/10 rounded-xl p-5 hover:border-gold-400/20 transition-all"
              >
                <div className="shrink-0 w-8 h-8 rounded-full brushed-gold flex items-center justify-center text-navy-900 font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{basic.title}</h4>
                  <p className="text-text-muted text-sm">{basic.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-navy-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-black gold-gradient-text mb-6">
              Changing the Way the World Does Business
            </h2>
            <p className="text-lg text-text-muted mb-8">
              改變全世界做生意的方式 — 從加入長翔開始
            </p>
            <a
              href="https://www.facebook.com/BNI.Chang.Siang.Chapter/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 text-navy-900 font-bold text-lg brushed-gold rounded-full hover:opacity-90 transition-opacity"
            >
              預約參訪長翔分會 <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
