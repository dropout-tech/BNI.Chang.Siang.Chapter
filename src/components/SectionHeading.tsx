"use client";

import { motion } from "framer-motion";
import GoldArrows from "./GoldArrows";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`text-center mb-16 ${className}`}
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <GoldArrows direction="left" className="text-lg" />
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
            light ? "text-navy-900" : "gold-gradient-text"
          }`}
        >
          {title}
        </h2>
        <GoldArrows direction="right" className="text-lg" />
      </div>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-2xl mx-auto ${
            light ? "text-navy-700" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className="gold-line w-24 mx-auto mt-6" />
    </motion.div>
  );
}
