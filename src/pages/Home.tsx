import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Target, GraduationCap, Heart, ChevronRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionWrapper from '../components/common/SectionWrapper';
import MemberWall from '../components/home/MemberWall';
import Results from '../components/home/Results';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';
import SEO from '../components/common/SEO';

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const bniFeatures = [
    { icon: Handshake, title: '合作取代競爭', desc: '每個行業僅一位代表，杜絕內部競爭，讓合作成為唯一途徑。' },
    { icon: Target, title: '精準商業引薦', desc: '透過結構化的引薦系統，為您帶來高品質的商業機會。' },
    { icon: GraduationCap, title: '終身學習成長', desc: '定期培訓課程與專家分享，持續提升商業敏感度。' },
    { icon: Heart, title: '付出者收穫', desc: 'Givers Gain — 先給予，後獲得，善的循環永不停歇。' },
];

const Home: React.FC = () => (
    <div className="overflow-hidden">
        <SEO description="BNI 長翔名人堂白金分會 — 匯聚各產業精英的金質商務交流平台。長翔展翼，商機無限。" keywords="BNI, 長翔分會, 商務引薦, 名人堂, 白金分會, 台北商會" />

        <PageHero
            title={<><span className="text-[#CF2030]">長翔展翼</span><br /><span className="text-[#222]">商機無限</span></>}
            subtitle={<>BNI 長翔名人堂白金分會<br />匯聚各產業精英的金質商務交流平台</>}
            showScrollIndicator
        >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 px-4">
                <motion.a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="bni-btn px-10 py-4 text-lg rounded-full w-full sm:w-auto text-center">
                    預約參訪
                </motion.a>
                <Link to="/about-bni"
                    className="px-10 py-4 border-2 border-[#CF2030] text-[#CF2030] font-semibold text-lg rounded-full hover:bg-[#CF2030] hover:text-white transition-all w-full sm:w-auto text-center">
                    了解 BNI
                </Link>
            </div>
        </PageHero>

        {/* === What is BNI === */}
        <SectionWrapper title="什麼是 BNI" subtitle="Business Network International — 全球最大商務引薦組織" dark>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                {bniFeatures.map((feat, i) => (
                    <motion.div key={feat.title} {...f} transition={{ ...f.transition, delay: i * 0.1 }}
                        className="card-elevated p-7 group">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-50 to-red-100/50 flex items-center justify-center mb-5 group-hover:from-[#CF2030] group-hover:to-[#E8394A] transition-all duration-300">
                            <feat.icon size={26} className="text-[#CF2030] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-[#222] mb-2">{feat.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                    </motion.div>
                ))}
            </div>
            <motion.div {...f} className="text-center">
                <Link to="/about-bni" className="inline-flex items-center gap-1 text-[#CF2030] hover:text-[#A51926] font-semibold transition-colors group">
                    深入了解 BNI <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>
        </SectionWrapper>

        {/* === About 長翔 === */}
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#CF2030]/[0.02] -translate-y-1/2 translate-x-1/3" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <motion.div {...f} className="flex-1">
                        <div className="inline-block px-3 py-1 bg-red-50 text-[#CF2030] text-sm font-semibold rounded-full mb-4">關於長翔</div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#222] mb-4 leading-tight">以熱情積極、<br />付出者著稱</h2>
                        <div className="red-line mb-6" />
                        <p className="text-gray-600 leading-relaxed text-lg mb-6">
                            BNI 長翔名人堂白金分會，匯聚台北各產業精英。每週三於晶宴會館面對面深度交流。
                            2022年9月成功創造97%綠燈紀錄，正邁向全綠燈分會。
                        </p>
                        <Link to="/about-us" className="inline-flex items-center gap-1 text-[#CF2030] hover:text-[#A51926] font-semibold transition-colors group">
                            了解長翔的故事 <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                    <motion.div {...f} transition={{ ...f.transition, delay: 0.2 }} className="flex-1">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { num: '97%', label: '綠燈紀錄', sub: '2022年9月' },
                                { num: '50+', label: '產業代表', sub: '多元領域' },
                                { num: '白金', label: '分會等級', sub: '名人堂' },
                                { num: '中山', label: '晶宴會館', sub: '每週三' },
                            ].map((s, i) => (
                                <div key={s.label} className="card-elevated p-5 text-center">
                                    <div className="text-2xl font-black text-[#CF2030] mb-1">{s.num}</div>
                                    <div className="text-sm font-semibold text-[#222]">{s.label}</div>
                                    <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        <MemberWall />
        <Results />
        <FAQ />
        <Contact />

        {/* === CTA === */}
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#CF2030] to-[#A51926]" />
            <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '24px 24px'
            }} />
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div {...f}>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">歡迎加入長翔</h2>
                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                        企業老闆都在使用最精準、有效率的業務引薦平台「BNI」。誠摯邀請您一同加入長翔！
                    </p>
                    <a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#CF2030] font-bold text-lg rounded-full hover:bg-gray-50 transition-all shadow-xl shadow-black/10">
                        立即預約參訪 <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    </div>
);

export default Home;
