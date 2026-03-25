import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { assetUrl } from '../../lib/assets';

const LoadingScreen: React.FC = () => {
    const { loading: authLoading } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const loadStartTime = useRef(performance.now());
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('changsiang_visited');
        const isFirstVisit = !hasVisited;
        
        if (!authLoading) {
            const loadTime = performance.now() - loadStartTime.current;
            const isSlowLoad = loadTime > 500;
            
            if (isFirstVisit || isSlowLoad) {
                setShouldShow(true);
                const minDisplayDuration = 1000;
                const remaining = Math.max(0, minDisplayDuration - loadTime);
                
                const timer = setTimeout(() => {
                    setIsLoading(false);
                    if (isFirstVisit) {
                        sessionStorage.setItem('changsiang_visited', 'true');
                    }
                }, remaining);
                
                return () => clearTimeout(timer);
            } else {
                setIsLoading(false);
            }
        }
    }, [authLoading]);

    if (!shouldShow || !isLoading) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    style={{ background: 'radial-gradient(ellipse at center, #2A1520 0%, #1A0A12 100%)' }}
                >
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    backgroundColor: Math.random() > 0.5 ? '#D4AF37' : '#fff',
                                }}
                                animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.5, 1] }}
                                transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                            />
                        ))}
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative"
                        >
                            <img
                                src={assetUrl('/images/assets/logo/白色正方形logo.png')}
                                alt="長翔名人堂白金分會"
                                className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                            />
                            <motion.div
                                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                                style={{ backgroundColor: '#D4AF37' }}
                                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center"
                        >
                            <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-wide gold-gradient-text">
                                夢想起飛
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
                                群鷹飛翔
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-2"
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: '#D4AF37' }}
                                    animate={{ y: [-8, 0, -8], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                />
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-8 text-sm tracking-widest gold-gradient-text"
                    >
                        長翔名人堂白金分會
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
