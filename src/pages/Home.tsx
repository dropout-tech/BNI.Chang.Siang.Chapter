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

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

const bniFeatures = [
    { icon: Handshake, title: '合作取代競爭', desc: '每個行業僅一位代表，杜絕內部競爭。' },
    { icon: Target, title: '精準商業引薦', desc: '透過結構化系統帶來高品質商機。' },
    { icon: GraduationCap, title: '終身學習成長', desc: '定期培訓提升商業敏感度。' },
    { icon: Heart, title: '付出者收穫', desc: 'Givers Gain — 先給予，後獲得。' },
];

const Home: React.FC = () => (
    <div className="overflow-hidden">
        <SEO description="BNI 長翔名人堂白金分會 — 匯聚各產業精英的金質商務交流平台。長翔展翼，商機無限。" keywords="BNI, 長翔分會, 商務引薦, 名人堂, 白金分會, 台北商會" />

        <PageHero
            title={<><span className="text-[#CF2030]">長翔展翼</span><br />商機無限</>}
            subtitle={<>BNI 長翔名人堂白金分會<br />匯聚各產業精英的金質商務交流平台</>}
            showScrollIndicator
        >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 px-4">
                <motion.a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="px-10 py-4 bg-[#CF2030] text-white font-bold text-lg rounded-full hover:bg-[#A51926] transition-all shadow-lg shadow-red-500/10 w-full sm:w-auto text-center">
                    預約參訪
                </motion.a>
                <Link to="/about-bni"
                    className="px-10 py-4 border-2 border-[#CF2030] text-[#CF2030] font-semibold text-lg rounded-full hover:bg-red-50 transition-all w-full sm:w-auto text-center">
                    了解 BNI
                </Link>
            </div>
        </PageHero>

        <SectionWrapper title="什麼是 BNI" subtitle="Business Network International — 全球最大商務引薦組織" dark>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                {bniFeatures.map((feat, i) => (
                    <motion.div key={feat.title} {...f} transition={{ ...f.transition, delay: i * 0.1 }}
                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#CF2030]/20 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-[#CF2030] transition-colors">
                            <feat.icon size={24} className="text-[#CF2030] group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-[#333] mb-2">{feat.title}</h3>
                        <p className="text-gray-500 text-sm">{feat.desc}</p>
                    </motion.div>
                ))}
            </div>
            <motion.div {...f} className="text-center">
                <Link to="/about-bni" className="inline-flex items-center gap-2 text-[#CF2030] hover:text-[#A51926] font-semibold transition-colors">
                    深入了解 BNI <ArrowRight size={18} />
                </Link>
            </motion.div>
        </SectionWrapper>

        <SectionWrapper title="關於長翔" subtitle="以熱情積極、付出者著稱的金質商務交流平台">
            <motion.div {...f} className="max-w-3xl mx-auto text-center mb-8">
                <p className="text-gray-600 leading-relaxed text-lg">
                    BNI 長翔名人堂白金分會，匯聚台北各產業精英。每週三於晶宴會館面對面深度交流。
                    2022年9月成功創造97%綠燈紀錄，正邁向全綠燈分會。
                </p>
            </motion.div>
            <motion.div {...f} className="text-center">
                <Link to="/about-us" className="inline-flex items-center gap-2 text-[#CF2030] hover:text-[#A51926] font-semibold transition-colors">
                    了解長翔的故事 <ArrowRight size={18} />
                </Link>
            </motion.div>
        </SectionWrapper>

        <MemberWall />
        <Results />
        <FAQ />
        <Contact />

        <section className="py-24 bg-[#CF2030] text-white text-center">
            <div className="container mx-auto px-4">
                <motion.div {...f}>
                    <h2 className="text-4xl md:text-5xl font-black mb-6">歡迎加入長翔</h2>
                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                        企業老闆都在使用最精準、有效率的業務引薦平台「BNI」。誠摯邀請您一同加入長翔！
                    </p>
                    <a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#CF2030] font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                        立即預約參訪 <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    </div>
);

export default Home;
