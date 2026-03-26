import React from 'react';
import { Target, Compass, Flag, Heart } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { LuxuryBackground, GlowingChevron } from '../common/PremiumDecorations';

const AboutCard: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode, delay: number, fullWidth?: boolean }> = ({ icon, title, children, delay, fullWidth }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={clsx(
            "card-glass gold-border gold-border-hover rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 group shadow-lg hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)] hover:-translate-y-1",
            fullWidth ? "md:col-span-3" : ""
        )}
    >
        <div className="mb-6 p-4 rounded-full border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-all duration-300">
            <div className="text-[#D4AF37]">{icon}</div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{title}</h3>
        <div className="text-gray-300/80 leading-relaxed text-lg font-light">{children}</div>
    </motion.div>
);

const About: React.FC = () => (
    <section className="min-h-screen flex flex-col justify-center py-24 relative overflow-hidden grain-heavy brushed-metal-dark" id="about">
        <LuxuryBackground />
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <GlowingChevron direction="left" className="hidden sm:block opacity-70" />
                        <h2 className="text-4xl md:text-5xl font-black gold-text drop-shadow-md">關於 BNI 長翔名人堂白金分會</h2>
                        <GlowingChevron direction="right" className="hidden sm:block opacity-70" />
                    </div>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6 leading-relaxed">以熱情積極、付出者著稱的金質商務交流平台。2022年9月創下97%綠燈紀錄，正邁向全綠燈分會</p>
                    <div className="gold-line w-24 mx-auto shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
                <div className="h-full"><AboutCard icon={<Target size={32} />} title="Core Purpose" delay={0}><p>精進會員的個人成長<br />壯大夥伴彼此的事業</p></AboutCard></div>
                <div className="h-full"><AboutCard icon={<Compass size={32} />} title="Mission" delay={0.1}><p>強化產業合作<br />發展強而有力的夥伴關係<br />創造持續不斷的引薦</p></AboutCard></div>
                <div className="h-full"><AboutCard icon={<Flag size={32} />} title="Vision" delay={0.2}><p>成為企業家首選的<br />商務合作平台</p></AboutCard></div>
                <div className="md:col-span-3 h-full">
                    <AboutCard icon={<Heart size={32} />} title="核心價值" delay={0.3} fullWidth>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-xl font-bold mb-4">
                            <span className="gold-text">熱情</span><span className="text-gray-600/50">|</span>
                            <span className="gold-text">積極</span><span className="text-gray-600/50">|</span>
                            <span className="gold-text">付出</span><span className="text-gray-600/50">|</span>
                            <span className="gold-text">共好</span>
                        </div>
                        <p>長翔以「熱情積極、付出者」著稱，成會至今成績傲人，持續邁向全綠燈分會的目標</p>
                    </AboutCard>
                </div>
            </div>
        </div>
    </section>
);

export default About;
