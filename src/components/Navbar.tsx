"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#hero", label: "首頁" },
  { href: "/about-bni", label: "什麼是 BNI" },
  { href: "/about-us", label: "關於長翔" },
  { href: "/partners", label: "長翔夥伴" },
  { href: "/achievements", label: "引薦實績" },
  { href: "/events", label: "活動紀錄" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full brushed-gold flex items-center justify-center text-navy-900 font-black text-sm">
              BNI
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-sm leading-tight">
                BNI 長翔名人堂
              </div>
              <div className="text-gold-400 text-xs">白金分會</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/80 hover:text-gold-400 transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://www.facebook.com/BNI.Chang.Siang.Chapter/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2 text-sm font-semibold text-navy-900 brushed-gold rounded-full hover:opacity-90 transition-opacity"
            >
              預約參訪
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-gold-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-900/98 backdrop-blur-md border-t border-gold-400/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-white/80 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://www.facebook.com/BNI.Chang.Siang.Chapter/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 mt-4 text-center font-semibold text-navy-900 brushed-gold rounded-full"
                onClick={() => setIsOpen(false)}
              >
                預約參訪
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
