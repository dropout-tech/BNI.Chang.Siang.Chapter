import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
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
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-[#CF2030] border-[#CF2030] text-white shadow-[0_10px_25px_rgba(207,32,48,0.22)]' : 'border-gray-300 text-gray-500 group-hover:border-[#CF2030] group-hover:text-[#CF2030]'}`}>
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
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#CF2030]/[0.055] blur-3xl" />
                <div className="absolute right-[8%] top-24 h-36 w-36 rounded-full border border-[#CF2030]/10" />
                <div className="absolute left-[10%] bottom-20 h-44 w-44 rounded-full border border-[#D4AF37]/15" />
            </div>
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-[#CF2030]/40" />
                        <h2 className="text-3xl md:text-5xl font-black text-[#222] drop-shadow-sm">
                            BNI 台灣商會<span className="text-[#CF2030]">常見問題</span>
                        </h2>
                        <span className="hidden sm:block h-px w-12 bg-gradient-to-r from-[#CF2030]/40 via-[#D4AF37]/70 to-transparent" />
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
