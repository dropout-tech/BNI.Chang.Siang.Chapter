"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Users,
  ArrowLeft,
  Building2,
  Briefcase,
  Award,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { partners } from "@/data/partners";
import WaveSVG from "@/components/WaveSVG";
import GoldArrows from "@/components/GoldArrows";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function PartnerDetailPage() {
  const params = useParams();
  const partner = partners.find((p) => p.id === params.id);

  if (!partner) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">找不到此夥伴</h1>
          <Link
            href="/partners"
            className="text-gold-400 hover:text-gold-300 inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} /> 返回夥伴列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden grain-overlay min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <WaveSVG className="absolute bottom-0 left-0 w-full h-40 opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.div {...fadeUp}>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-text-muted hover:text-gold-400 mb-8 transition-colors"
            >
              <ArrowLeft size={16} /> 返回夥伴列表
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-navy-800/60 border border-gold-400/20 rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-full bg-navy-700 border-3 border-gold-400/30 flex items-center justify-center overflow-hidden">
                  {partner.photo ? (
                    <Image
                      src={partner.photo}
                      alt={partner.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Users size={48} className="text-gold-400/60" />
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <GoldArrows direction="left" className="text-sm" />
                  <h1 className="text-3xl font-black text-white">
                    {partner.name}
                  </h1>
                  <GoldArrows direction="right" className="text-sm" />
                </div>
                <div className="text-gold-400 font-semibold text-lg mb-4">
                  {partner.industry}
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-sm text-text-muted">
                  <div className="flex items-center gap-2">
                    <Building2 size={14} className="text-gold-400" />
                    <span>{partner.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-gold-400" />
                    <span>{partner.title}</span>
                  </div>
                </div>

                <div className="gold-line mb-6" />

                <p className="text-white/80 leading-relaxed mb-6">
                  {partner.bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-gold-400 mb-3">
                    <Award size={14} /> 專業領域
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {partner.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="px-4 py-1.5 bg-navy-700/60 border border-gold-400/15 rounded-full text-sm text-white/80"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation between partners */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-between items-center mt-8"
          >
            {(() => {
              const currentIndex = partners.findIndex(
                (p) => p.id === partner.id
              );
              const prev = partners[currentIndex - 1];
              const next = partners[currentIndex + 1];
              return (
                <>
                  {prev ? (
                    <Link
                      href={`/partners/${prev.id}`}
                      className="flex items-center gap-2 text-text-muted hover:text-gold-400 transition-colors"
                    >
                      <ArrowLeft size={16} />
                      <span className="text-sm">{prev.name}</span>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {next ? (
                    <Link
                      href={`/partners/${next.id}`}
                      className="flex items-center gap-2 text-text-muted hover:text-gold-400 transition-colors"
                    >
                      <span className="text-sm">{next.name}</span>
                      <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <div />
                  )}
                </>
              );
            })()}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
