import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    id?: string;
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    dark?: boolean;
}

const SectionWrapper: React.FC<Props> = ({ id, title, subtitle, children, className = '', dark = false }) => (
    <section id={id} className={`relative py-20 md:py-28 overflow-hidden ${dark ? 'bg-[#F8F9FA]' : 'bg-white'} ${className}`}>
        {title && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14 px-4"
            >
                <h2 className="text-3xl md:text-4xl font-black text-[#333] mb-3">{title}</h2>
                <div className="red-line mx-auto mb-4" />
                {subtitle && <p className="text-gray-500 text-lg max-w-3xl mx-auto">{subtitle}</p>}
            </motion.div>
        )}
        <div className="container mx-auto px-4 relative z-10">
            {children}
        </div>
    </section>
);

export default SectionWrapper;
