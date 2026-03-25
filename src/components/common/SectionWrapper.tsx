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
    <section id={id} className={`relative py-24 overflow-hidden grain ${dark ? 'bg-[#070E1A]/50' : ''} ${className}`}>
        {title && (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16 px-4"
            >
                <h2 className="text-3xl md:text-5xl font-black mb-4 gold-text">{title}</h2>
                {subtitle && <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6">{subtitle}</p>}
                <div className="gold-line w-24 mx-auto" />
            </motion.div>
        )}
        <div className="container mx-auto px-4 relative z-10">
            {children}
        </div>
    </section>
);

export default SectionWrapper;
