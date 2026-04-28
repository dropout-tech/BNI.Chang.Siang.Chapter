import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/auth-context';

const LoadingScreen: React.FC = () => {
    const { loading: authLoading } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const loadStartTime = useRef(performance.now());

    useEffect(() => {
        if (!authLoading) {
            const remaining = Math.max(0, 600 - (performance.now() - loadStartTime.current));
            const timer = setTimeout(() => setIsLoading(false), remaining);
            return () => clearTimeout(timer);
        }
    }, [authLoading]);

    if (!isLoading) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-[#CF2030] animate-spin" />
                        <p className="text-gray-400 text-sm tracking-widest">BNI 長翔</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
