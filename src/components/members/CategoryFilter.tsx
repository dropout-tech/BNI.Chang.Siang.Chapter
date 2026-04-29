import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onSelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, onSelect }) => {
    return (
        <div className="flex w-full items-center gap-3 overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0 px-4 md:px-0 -mx-4 md:mx-auto md:flex-wrap md:justify-center max-w-4xl mb-8 md:mb-12 mask-linear-gradient md:mask-none">
            {/* Mobile Hint */}
            <div className="md:hidden absolute right-4 text-gray-500 text-xs animate-pulse pointer-events-none">
                →
            </div>
            {categories.map(cat => (
                <motion.button
                    key={cat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSelect(cat)}
                    className={clsx(
                        "px-5 py-2 rounded-full border transition-all duration-300 backdrop-blur-sm whitespace-nowrap shrink-0",
                        activeCategory === cat
                            ? "bg-[#CF2030] text-white border-[#CF2030] font-bold shadow-[0_12px_26px_rgba(207,32,48,0.22)]"
                            : "bg-white/85 text-gray-600 border-red-100 hover:border-[#CF2030]/45 hover:text-[#CF2030] hover:bg-red-50"
                    )}
                >
                    {cat}
                </motion.button>
            ))}
        </div>
    );
};

export default CategoryFilter;
