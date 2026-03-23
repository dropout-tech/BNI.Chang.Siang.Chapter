"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Zap,
  Users,
  GraduationCap,
  PartyPopper,
  ArrowRight,
  Filter,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import WaveSVG from "@/components/WaveSVG";
import { events, eventCategories } from "@/data/events";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const categoryIcons: Record<string, React.ElementType> = {
  "power-day": Zap,
  bod: Users,
  celebration: PartyPopper,
  training: GraduationCap,
  other: Calendar,
};

type CategoryKey = keyof typeof eventCategories | "all";

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryKey>("all");

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((e) => e.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <WaveSVG className="absolute bottom-0 left-0 w-full h-40 opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="活動紀錄"
            subtitle="Power Day、BOD、尾牙春酒⋯⋯ 展現長翔有溫度的一面"
          />

          {/* Filters */}
          <motion.div
            {...fadeUp}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === "all"
                  ? "brushed-gold text-navy-900"
                  : "bg-navy-800/60 border border-gold-400/15 text-text-muted hover:border-gold-400/30"
              }`}
            >
              全部
            </button>
            {Object.entries(eventCategories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key as CategoryKey)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === key
                    ? "brushed-gold text-navy-900"
                    : "bg-navy-800/60 border border-gold-400/15 text-text-muted hover:border-gold-400/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Events Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredEvents.map((event, i) => {
                const Icon = categoryIcons[event.category] || Calendar;
                const cat = eventCategories[event.category];
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group bg-navy-800/60 border border-gold-400/10 rounded-2xl overflow-hidden hover:border-gold-400/30 transition-all"
                  >
                    {/* Event photo placeholder */}
                    <div className="h-48 bg-gradient-to-br from-navy-700 to-navy-800 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-400 rounded-full blur-3xl" />
                      </div>
                      <Icon
                        size={48}
                        className="text-gold-400/40 group-hover:text-gold-400/60 transition-colors"
                      />
                      <div className="absolute top-4 right-4">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: `${cat.color}20`,
                            color: cat.color,
                          }}
                        >
                          {cat.label}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gold-400/80 mb-2">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted">此分類尚無活動紀錄</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-black gold-gradient-text mb-6">
              一起創造更多精彩回憶
            </h2>
            <p className="text-lg text-text-muted mb-8">
              長翔的每一場活動，都是夥伴們凝聚共識、深化情誼的寶貴時刻
            </p>
            <a
              href="https://www.facebook.com/BNI.Chang.Siang.Chapter/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 text-navy-900 font-bold text-lg brushed-gold rounded-full hover:opacity-90 transition-opacity"
            >
              加入長翔 <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
