"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import WaveSVG from "@/components/WaveSVG";
import { partners } from "@/data/partners";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function PartnersPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden grain-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <WaveSVG className="absolute bottom-0 left-0 w-full h-40 opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="長翔夥伴"
            subtitle="各產業的頂尖代表，攜手共創無限商機"
          />

          <motion.p
            {...fadeUp}
            className="text-center text-text-muted max-w-2xl mx-auto mb-16"
          >
            每位長翔夥伴都經過嚴格審核與推薦加入。在長翔，每個行業僅有一位代表，確保彼此不存在競爭，只有最純粹的合作與互信。
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.id}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link href={`/partners/${partner.id}`}>
                  <div className="group bg-navy-800/60 border border-gold-400/10 rounded-2xl p-6 text-center hover:border-gold-400/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    {/* Avatar placeholder */}
                    <div className="w-24 h-24 mx-auto rounded-full bg-navy-700 border-2 border-gold-400/20 flex items-center justify-center mb-4 group-hover:border-gold-400/50 transition-colors overflow-hidden">
                      {partner.photo ? (
                        <Image
                          src={partner.photo}
                          alt={partner.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Users
                          size={36}
                          className="text-gold-400/60 group-hover:text-gold-400 transition-colors"
                        />
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">
                      {partner.name}
                    </h3>
                    <div className="text-gold-400 text-sm font-medium mb-2">
                      {partner.industry}
                    </div>
                    <p className="text-text-muted text-xs mb-3">
                      {partner.company}
                    </p>

                    <div className="flex flex-wrap justify-center gap-1.5">
                      {partner.specialties.slice(0, 2).map((spec) => (
                        <span
                          key={spec}
                          className="px-2 py-0.5 bg-navy-700/60 border border-gold-400/10 rounded-full text-xs text-text-muted"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-1 text-gold-400/60 group-hover:text-gold-400 text-xs transition-colors">
                      <span>查看詳細</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-black gold-gradient-text mb-6">
              想成為長翔的一員？
            </h2>
            <p className="text-lg text-text-muted mb-8">
              如果您的產業在長翔尚無代表，歡迎預約參訪，體驗長翔的專業與溫度
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
