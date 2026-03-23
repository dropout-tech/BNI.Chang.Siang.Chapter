"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Award,
  Users,
  Calendar,
  BookOpen,
  ArrowRight,
  Quote,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GoldArrows from "@/components/GoldArrows";
import WaveSVG from "@/components/WaveSVG";
import { stats, achievements } from "@/data/achievements";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const statCards = [
  {
    label: "累計引薦金額",
    value: stats.totalReferralAmount,
    icon: TrendingUp,
  },
  { label: "成功引薦次數", value: stats.totalReferrals, icon: Award },
  { label: "精英成員", value: stats.totalMembers, icon: Users },
  { label: "深耕年資", value: stats.yearsActive, icon: Calendar },
];

export default function AchievementsPage() {
  return (
    <div className="pt-20">
      {/* Hero Stats */}
      <section className="relative py-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <WaveSVG className="absolute bottom-0 left-0 w-full h-40 opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="引薦實績"
            subtitle="用數據說話，用故事傳遞信任的價值"
          />

          {/* Main stat */}
          <motion.div
            {...fadeUp}
            className="bg-navy-800/60 border border-gold-400/20 rounded-2xl p-8 md:p-12 text-center mb-12 max-w-3xl mx-auto"
          >
            <div className="text-sm text-gold-400 uppercase tracking-widest mb-2">
              累計引薦金額
            </div>
            <div className="text-5xl md:text-7xl font-black gold-gradient-text mb-4">
              {stats.totalReferralAmount}
            </div>
            <div className="flex items-center justify-center gap-3">
              <GoldArrows direction="left" className="text-lg" />
              <span className="text-text-muted">持續突破新高</span>
              <GoldArrows direction="right" className="text-lg" />
            </div>
          </motion.div>

          {/* Stat grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statCards.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="引薦故事"
            subtitle="每一筆引薦的背後，都是一段信任與合作的精彩故事"
          />

          <div className="space-y-8">
            {achievements.map((story, i) => (
              <motion.div
                key={story.id}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-navy-800/60 border border-gold-400/10 rounded-2xl p-6 md:p-8 hover:border-gold-400/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl brushed-gold flex items-center justify-center">
                    <BookOpen size={20} className="text-navy-900" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">
                        {story.title}
                      </h3>
                      {story.date && (
                        <span className="text-xs text-gold-400 bg-gold-400/10 px-2 py-0.5 rounded-full">
                          {story.date}
                        </span>
                      )}
                    </div>

                    <p className="text-text-muted leading-relaxed mb-4">
                      {story.description}
                    </p>

                    {story.members && story.members.length > 0 && (
                      <div className="flex items-center gap-2 text-sm text-gold-400/80">
                        <Users size={14} />
                        <span>參與夥伴：{story.members.join("、")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <Quote size={48} className="text-gold-400/40 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-white/90 italic leading-relaxed mb-6">
              「加入長翔之後，我不只是多了一個商務平台，而是多了一群真心為我著想的事業夥伴。每一次的引薦都讓我感受到，這裡的信任是真實的。」
            </blockquote>
            <div className="text-gold-400 font-semibold">— 長翔夥伴</div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-black gold-gradient-text mb-6">
              下一個成功故事，由你書寫
            </h2>
            <p className="text-lg text-text-muted mb-8">
              加入長翔，讓我們一起創造更多值得驕傲的引薦實績
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
