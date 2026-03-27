import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Users, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            <SEO title="找不到頁面" noindex />
            <div className="absolute inset-0 grain-heavy brushed-metal-dark pointer-events-none -z-20"></div>
            
            {/* Ambient Animated Lens Flares */}
            <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#D4AF37]/10 glow-orb animate-float-slow mix-blend-screen pointer-events-none -z-10" />
            <div className="absolute bottom-[20%] right-[15%] w-[600px] h-[600px] bg-[#E8C547]/5 glow-orb animate-float-medium mix-blend-screen pointer-events-none -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className="relative z-10 text-center max-w-2xl w-full"
            >
                {/* 404 Number with animation */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0, rotateX: 45 }}
                    animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                    transition={{ duration: 1.5, type: "spring", stiffness: 50, damping: 20 }}
                    className="mb-8"
                >
                    <h1 className="text-[120px] md:text-[180px] font-black leading-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                        <span className="gold-text inline-block animate-float-slow">
                            404
                        </span>
                    </h1>
                </motion.div>

                {/* Main message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="space-y-6 mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                        找不到頁面
                    </h2>
                    <p className="text-xl md:text-2xl gold-text font-black tracking-widest">
                        但是你想要的商務鏈結，我們有！
                    </p>
                    <div className="gold-line w-32 mx-auto" />
                    <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
                        加入 BNI 長翔名人堂白金分會，建立真正有價值的商務連結，讓您的事業更上一層樓。
                    </p>
                </motion.div>

                {/* Stars/Stats Wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, staggerChildren: 0.2 }}
                    className="grid grid-cols-3 gap-6 mb-12 max-w-lg mx-auto"
                >
                    {[
                        { val: '40+', label: '優質會員' },
                        { val: '8', label: '產業類別' },
                        { val: '∞', label: '商機無限' }
                    ].map((stat, i) => (
                        <motion.div key={i} whileHover={{ y: -5, scale: 1.05 }} className="card-glass gold-border rounded-2xl p-6 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-colors duration-500" />
                            <div className="text-3xl font-black text-[#D4AF37] mb-2 drop-shadow-md group-hover:scale-110 transition-transform">{stat.val}</div>
                            <div className="text-sm text-gray-300 tracking-wider font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link
                        to="/"
                        className="group relative px-8 py-4 brushed-gold text-[#0A1628] font-bold rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] hover:-translate-y-1 flex items-center gap-2"
                    >
                        <Home size={22} className="opacity-90" />
                        <span className="text-lg tracking-widest">返回首頁</span>
                        <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform opacity-90" />
                    </Link>

                    <Link
                        to="/members"
                        className="px-8 py-4 card-glass gold-border gold-border-hover text-white font-bold rounded-full hover:text-[#D4AF37] transition-all duration-300 flex items-center gap-2 text-lg tracking-widest hover:-translate-y-1"
                    >
                        <Users size={22} />
                        <span>認識會員</span>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;
