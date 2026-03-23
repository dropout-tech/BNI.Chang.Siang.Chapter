"use client";

import { motion } from "framer-motion";
import GoldArrows from "./GoldArrows";
import WingIcon from "./WingIcon";
import WaveSVG from "./WaveSVG";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
    >
      {/* Animated wave layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
        <WaveSVG className="absolute bottom-0 left-0 w-full h-64 opacity-60" />
        <WaveSVG className="absolute bottom-10 left-0 w-full h-48 opacity-30 scale-x-[-1]" />
        {/* Decorative gold horizontal lines */}
        <div className="absolute top-1/4 left-0 right-0 gold-line opacity-20" />
        <div className="absolute top-1/3 left-0 right-0 gold-line opacity-10" />
        <div className="absolute bottom-1/3 left-0 right-0 gold-line opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Slogan */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <GoldArrows direction="left" className="text-2xl" />
              <div className="w-px h-8 bg-gold-400/40" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              <span className="gold-gradient-text">長翔展翼</span>
              <br />
              <span className="gold-gradient-text">商機無限</span>
            </h1>

            <div className="flex items-center gap-2 mt-6">
              <div className="w-px h-8 bg-gold-400/40" />
              <GoldArrows direction="right" className="text-2xl" />
            </div>

            <p className="mt-8 text-lg text-text-muted max-w-md">
              匯聚各產業精英，打造最具溫度與實力的商務交流平台
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.facebook.com/BNI.Chang.Siang.Chapter/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-navy-900 font-bold brushed-gold rounded-full hover:opacity-90 transition-opacity text-lg"
              >
                預約參訪
              </a>
              <a
                href="#about-preview"
                className="inline-flex items-center justify-center px-8 py-3 text-gold-400 font-semibold border border-gold-400/40 rounded-full hover:bg-gold-400/10 transition-colors text-lg"
              >
                了解更多
              </a>
            </div>
          </motion.div>

          {/* Right: BNI logo + Wing */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex flex-col items-center"
          >
            <WingIcon className="w-48 h-40 lg:w-64 lg:h-52 animate-float" />
            <div className="mt-6 text-center">
              <div className="text-5xl lg:text-7xl font-black text-white tracking-wider">
                BN<span className="text-gold-400">i</span>
              </div>
              <div className="mt-2 text-xl lg:text-2xl tracking-[0.3em] text-white/80">
                長翔名人堂白金分會
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gold-400/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-gold-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
