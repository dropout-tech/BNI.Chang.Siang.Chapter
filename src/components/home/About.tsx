import React from 'react';
import { Target, Compass, Flag, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const f = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.6 } };

const AboutCard: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode, delay: number }> = ({ icon, title, children, delay }) => (
    <motion.div {...f} transition={{ ...f.transition, delay }}
        className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#CF2030]/20 transition-all group text-center">
        <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#CF2030] transition-colors">
            <div className="text-[#CF2030] group-hover:text-white transition-colors">{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-[#333] mb-3">{title}</h3>
        <div className="text-gray-500 leading-relaxed">{children}</div>
    </motion.div>
);

const About: React.FC = () => (
    <section className="py-24 bg-[#F8F9FA]" id="about">
        <div className="container mx-auto px-4">
            <motion.div {...f} className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-black text-[#333] mb-3">關於 BNI 長翔</h2>
                <div className="red-line mx-auto mb-4" />
                <p className="text-gray-500 text-lg max-w-3xl mx-auto">以熱情積極、付出者著稱。2022年9月創下97%綠燈紀錄</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
                <AboutCard icon={<Target size={28} />} title="Core Purpose" delay={0}><p>精進會員的個人成長<br />壯大夥伴彼此的事業</p></AboutCard>
                <AboutCard icon={<Compass size={28} />} title="Mission" delay={0.1}><p>強化產業合作<br />發展強而有力的夥伴關係</p></AboutCard>
                <AboutCard icon={<Flag size={28} />} title="Vision" delay={0.2}><p>成為企業家首選的<br />商務合作平台</p></AboutCard>
            </div>

            <motion.div {...f} transition={{ ...f.transition, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm max-w-5xl mx-auto text-center">
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-5">
                    <Heart size={28} className="text-[#CF2030]" />
                </div>
                <h3 className="text-xl font-bold text-[#333] mb-4">核心價值</h3>
                <div className="flex flex-wrap justify-center gap-4 text-xl font-bold mb-3">
                    <span className="text-[#CF2030]">熱情</span><span className="text-gray-300">|</span>
                    <span className="text-[#CF2030]">積極</span><span className="text-gray-300">|</span>
                    <span className="text-[#CF2030]">付出</span><span className="text-gray-300">|</span>
                    <span className="text-[#CF2030]">共好</span>
                </div>
                <p className="text-gray-500">長翔以「熱情積極、付出者」著稱，持續邁向全綠燈分會的目標</p>
            </motion.div>
        </div>
    </section>
);

export default About;
