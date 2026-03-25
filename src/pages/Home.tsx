import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Target, GraduationCap, Heart } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SectionWrapper from '../components/common/SectionWrapper';
import MemberWall from '../components/home/MemberWall';
import Results from '../components/home/Results';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';
import SEO from '../components/common/SEO';
import { assetUrl } from '../lib/assets';

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const bniFeatures = [
    { icon: Handshake, title: '合作取代競爭', desc: '每個行業僅一位代表，杜絕內部競爭。' },
    { icon: Target, title: '精準商業引薦', desc: '透過結構化系統帶來高品質商機。' },
    { icon: GraduationCap, title: '終身學習成長', desc: '定期培訓提升商業敏感度。' },
    { icon: Heart, title: '付出者收穫', desc: 'Givers Gain — 先給予，後獲得。' },
];

const Home: React.FC = () => (
    <div className="overflow-hidden">
        <SEO
            description="BNI 長翔名人堂白金分會 — 匯聚各產業精英的金質商務交流平台。長翔展翼，商機無限。"
            keywords="BNI, 長翔分會, 商務引薦, 名人堂, 白金分會, 台北商會, 企業家"
        />

        {/* === HERO === */}
        <PageHero
            title={<>長翔展翼<br />商機無限</>}
            subtitle={<>BNI 長翔名人堂白金分會<br />匯聚各產業精英的金質商務交流平台</>}
            showScrollIndicator
        >
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8 px-4">
                <motion.a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 brushed-gold text-[#0A1628] font-bold text-lg rounded-full shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all w-full md:w-auto text-center">
                    預約參訪
                </motion.a>
                <Link to="/about-bni"
                    className="px-10 py-4 border border-[#D4AF37]/30 text-[#D4AF37] font-semibold text-lg rounded-full hover:bg-[#D4AF37]/5 transition-all w-full md:w-auto text-center">
                    了解 BNI
                </Link>
            </div>
        </PageHero>

        {/* === BNI Preview === */}
        <SectionWrapper title="什麼是 BNI" subtitle="Business Network International — 全球最大商務引薦組織">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                {bniFeatures.map((feat, i) => (
                    <motion.div key={feat.title} {...f} transition={{ ...f.transition, delay: i * 0.1 }}
                        className="card-glass gold-border gold-border-hover rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center mb-4 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-all">
                            <feat.icon size={24} className="text-[#D4AF37]" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                        <p className="text-gray-400 text-sm">{feat.desc}</p>
                    </motion.div>
                ))}
            </div>
            <motion.div {...f} className="text-center">
                <Link to="/about-bni" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#E8C547] font-semibold transition-colors">
                    深入了解 BNI <ArrowRight size={18} />
                </Link>
            </motion.div>
        </SectionWrapper>

        {/* === About Chang Siang Preview === */}
        <SectionWrapper title="關於長翔" subtitle="以熱情積極、付出者著稱的金質商務交流平台" dark>
            <motion.div {...f} className="max-w-3xl mx-auto text-center mb-8">
                <p className="text-gray-300/80 leading-relaxed text-lg">
                    BNI 長翔名人堂白金分會，匯聚台北各產業精英。每週三於晶宴會館面對面深度交流。
                    2022年9月成功創造97%綠燈紀錄，正邁向全綠燈分會。
                </p>
            </motion.div>
            <motion.div {...f} className="text-center">
                <Link to="/about-us" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#E8C547] font-semibold transition-colors">
                    了解長翔的故事 <ArrowRight size={18} />
                </Link>
            </motion.div>
        </SectionWrapper>

        {/* === Members === */}
        <MemberWall />

        {/* === Results === */}
        <Results />

        {/* === FAQ === */}
        <FAQ />

        {/* === Contact === */}
        <Contact />

        {/* === CTA === */}
        <SectionWrapper className="text-center py-24">
            <motion.div {...f}>
                <h2 className="text-4xl md:text-5xl font-black gold-text mb-6">歡迎加入長翔</h2>
                <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                    企業老闆都在使用最精準、有效率的業務引薦平台「BNI」。誠摯邀請您一同加入長翔，讓事業展翅高飛！
                </p>
                <a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-10 py-4 brushed-gold text-[#0A1628] font-bold text-lg rounded-full shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all">
                    立即預約參訪 <span className="tracking-wider">›››</span>
                </a>
            </motion.div>
        </SectionWrapper>
    </div>
);

export default Home;
