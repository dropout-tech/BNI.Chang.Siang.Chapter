import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';

const LoadingScreen: React.FC = () => {
    const { loading: authLoading } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const loadStartTime = useRef(performance.now());

    useEffect(() => {
        if (!authLoading) {
            const elapsed = performance.now() - loadStartTime.current;
            const remaining = Math.max(0, 800 - elapsed);
            const timer = setTimeout(() => setIsLoading(false), remaining);
            return () => clearTimeout(timer);
        }
    }, [authLoading]);

    if (!isLoading) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    style={{ background: 'linear-gradient(170deg, #0D1B2E 0%, #102A43 50%, #0A1628 100%)' }}>
                    <div className="flex flex-col items-center gap-6">
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative">
                            <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/20 border-t-[#D4AF37] animate-spin" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[#D4AF37] font-black text-xs">BNi</span>
                            </div>
                        </motion.div>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                            className="text-[#D4AF37]/50 text-sm tracking-[0.3em]">
                            長翔名人堂白金分會
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
