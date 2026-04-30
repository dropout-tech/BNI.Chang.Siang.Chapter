import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { LuxuryBackground, GlowingChevron } from '../common/PremiumDecorations';
import { useFaqs } from '../../hooks/useFaqs';

const FAQItem: React.FC<{ question: string, answer: string, isOpen: boolean, toggle: () => void, index: number }> = ({ question, answer, isOpen, toggle, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-gray-200 last:border-0"
        >
            <button
                onClick={toggle}
                className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
            >
                <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 pr-8 ${isOpen ? 'text-[#CF2030]' : 'text-[#333] group-hover:text-[#CF2030]'}`}>
                    {question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-[#CF2030] border-[#CF2030] text-[#333]' : 'border-gray-300 text-gray-500 group-hover:border-[#CF2030] group-hover:text-[#CF2030]'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="whitespace-pre-line text-gray-500 leading-relaxed pb-8 text-lg md:text-xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { faqs } = useFaqs();

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden bg-transparent" id="faq">
            <LuxuryBackground />
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <GlowingChevron direction="left" className="hidden sm:block opacity-70" />
                        <h2 className="text-3xl md:text-5xl font-black text-[#333] gold-text drop-shadow-md">BNI 台灣商會常見問題</h2>
                        <GlowingChevron direction="right" className="hidden sm:block opacity-70" />
                    </div>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        關於加入 BNI 長翔名人堂白金分會，我們整理了台灣企業主最關心的問題
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={faq.id || `${faq.question}-${index}`}
                            index={index}
                            isOpen={openIndex === index}
                            toggle={() => toggle(index)}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
