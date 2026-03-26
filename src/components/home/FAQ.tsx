import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { LuxuryBackground, GlowingChevron } from '../common/PremiumDecorations';

const FAQItem: React.FC<{ question: string, answer: React.ReactNode, isOpen: boolean, toggle: () => void, index: number }> = ({ question, answer, isOpen, toggle, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-white/10 last:border-0"
        >
            <button
                onClick={toggle}
                className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
            >
                <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 pr-8 ${isOpen ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                    {question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-primary border-primary text-bg-dark' : 'border-white/20 text-gray-400 group-hover:border-primary group-hover:text-primary'}`}>
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
                        <p className="text-gray-400 leading-relaxed pb-8 text-lg md:text-xl">
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

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden grain-heavy brushed-metal-dark" id="faq">
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
                        <h2 className="text-3xl md:text-5xl font-black text-white gold-text drop-shadow-md">BNI 台灣商會常見問題</h2>
                        <GlowingChevron direction="right" className="hidden sm:block opacity-70" />
                    </div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        關於加入 BNI 長翔名人堂白金分會，我們整理了台灣企業主最關心的問題
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    <FAQItem
                        index={0}
                        isOpen={openIndex === 0}
                        toggle={() => toggle(0)}
                        question="加入 BNI 需要什麼資格？"
                        answer={
                            <>
                                <p className="mb-3 text-primary font-bold">我們尋找遵守 321A 原則的優質夥伴：</p>
                                <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300">
                                    <li><strong className="text-white">3</strong>：三年以上行業經驗</li>
                                    <li><strong className="text-white">2</strong>：公司成立兩年以上</li>
                                    <li><strong className="text-white">1</strong>：專注於一項主要專業 (單一產業別)</li>
                                    <li><strong className="text-white">A</strong>：Attitude 態度良好，願意付出與學習</li>
                                </ul>
                                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-sm">
                                    <strong className="text-primary">核心精神：</strong>確保每位會員都是該領域的專家，且在分會中尚無重複代表。
                                </div>
                            </>
                        }
                    />
                    <FAQItem
                        index={1}
                        isOpen={openIndex === 1}
                        toggle={() => toggle(1)}
                        question="我不擅長社交，會不會很尷尬？"
                        answer={
                            <>
                                <p className="mb-3 text-primary font-bold">BNI有結構化的流程，不需要擔心社交技巧</p>
                                <p className="mb-4">每次例會都有固定流程：25秒專業介紹、5分鐘深度主講、分組交流。</p>
                                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-sm">
                                    <strong className="text-primary">實際經驗：</strong>許多內向型會員反而在BNI找到舒適的交流方式，因為有明確的架構和目標。
                                </div>
                            </>
                        }
                    />
                    <FAQItem
                        index={2}
                        isOpen={openIndex === 2}
                        toggle={() => toggle(2)}
                        question="長翔分會的例會是怎麼進行的？"
                        answer={
                            <>
                                <p className="mb-3 text-primary font-bold">每週三早晨實體聚會，結構化的高效商務交流</p>
                                <ul className="list-disc list-inside mb-4 space-y-1 ml-2">
                                    <li>每週三 06:30-08:30 實體例會</li>
                                    <li>專業的會議流程：25秒介紹、主題簡報、引薦報告</li>
                                    <li>面對面深度交流，建立真實的人脈連結</li>
                                </ul>
                                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-sm">
                                    <strong className="text-primary">關鍵優勢：</strong>面對面的交流更能建立深度信任，長翔的夥伴們每週見面，信任感與默契與日俱增。
                                </div>
                            </>
                        }
                    />
                    <FAQItem
                        index={3}
                        isOpen={openIndex === 3}
                        toggle={() => toggle(3)}
                        question="我需要準備什麼資料才能當來賓？"
                        answer={
                            <>
                                <p className="mb-3 text-primary font-bold">當來賓免費，流程簡單明確，無需複雜資料</p>
                                <p className="mb-2">您只需要準備：</p>
                                <ul className="list-disc list-inside mb-4 space-y-1 ml-2">
                                    <li>個人或公司基本資料（名稱、聯絡方式、服務項目）</li>
                                    <li>簡短的自我介紹（30秒即可）</li>
                                    <li>對引薦行銷的熱情與承諾</li>
                                </ul>
                                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-sm">
                                    <strong className="text-primary">貼心提醒：</strong>如果您確定要入會，我們將會進行資格審查，不保證一定能加入長翔
                                </div>
                            </>
                        }
                    />
                    <FAQItem
                        index={4}
                        isOpen={openIndex === 4}
                        toggle={() => toggle(4)}
                        question="如果我暫時無法參加例會怎麼辦？"
                        answer={
                            <>
                                <p className="mb-3 text-primary font-bold">BNI提供彈性的代理人制度</p>
                                <p className="mb-2">如果您因故無法參加例會，可以：</p>
                                <ul className="list-disc list-inside mb-4 space-y-1 ml-2">
                                    <li>安排代理人代表您出席（同事、合作夥伴或家人）</li>
                                    <li>提前提供您的自我介紹與引薦報告給代理人分享</li>
                                    <li>無論再忙，盡可能每週早起商務不中斷</li>
                                </ul>
                                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-sm">
                                    <strong className="text-primary">重要提醒：</strong>為了維護會員權益，每位會員半年內缺席超過三次將可能被踢出，這是我們對夥伴彼此間的基本承諾。
                                </div>
                            </>
                        }
                    />
                    <FAQItem
                        index={5}
                        isOpen={openIndex === 5}
                        toggle={() => toggle(5)}
                        question="新創公司或個人工作者適合加入嗎？"
                        answer={
                            <>
                                <p className="mb-3 text-primary font-bold">BNI特別適合新創與個人工作者快速建立人脈</p>
                                <p className="mb-2">許多成功的新創企業都從BNI起步，因為：</p>
                                <ul className="list-disc list-inside mb-4 space-y-1 ml-2">
                                    <li>快速建立早期客戶群</li>
                                    <li>獲得各領域專業人士的建議與支援</li>
                                    <li>以合理成本接觸大量潛在客戶</li>
                                </ul>
                                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-sm">
                                    <strong className="text-primary">成功案例：</strong>李孟一在創業初期加入BNI，透過一對一快速鏈結教育產業鏈，並做為公司擴張基礎。
                                </div>
                            </>
                        }
                    />
                    <FAQItem
                        index={6}
                        isOpen={openIndex === 6}
                        toggle={() => toggle(6)}
                        question="長翔名人堂白金分會與其他BNI分會有什麼不同？"
                        answer={
                            <>
                                <p className="mb-3 text-primary font-bold">長翔是名人堂等級的白金分會，代表卓越的引薦實績</p>
                                <p className="mb-2">長翔名人堂白金分會的獨特優勢：</p>
                                <ul className="list-disc list-inside mb-4 space-y-1 ml-2">
                                    <li><strong>名人堂榮耀：</strong>代表長翔在 BNI 體系中的卓越表現與持續成長</li>
                                    <li><strong>白金等級：</strong>引薦品質、出席率、會員滿意度均名列前茅</li>
                                    <li><strong>產業多元：</strong>涵蓋金融、科技、設計、法律、醫療、餐飲等多元產業</li>
                                </ul>
                                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-sm">
                                    <strong className="text-primary">特別適合：</strong>渴望找到真心互助事業夥伴，並透過專業引薦拓展業務的企業主。
                                </div>
                            </>
                        }
                    />
                    <FAQItem
                        index={7}
                        isOpen={openIndex === 7}
                        toggle={() => toggle(7)}
                        question="加入長翔後，多久能看到成效？"
                        answer={
                            <>
                                <p className="mb-3 text-primary font-bold">BNI 是長期關係的投資，但許多夥伴在前幾個月就有感</p>
                                <p className="mb-2">長翔夥伴的實際經驗：</p>
                                <ul className="list-disc list-inside mb-4 space-y-1 ml-2">
                                    <li><strong>第 1-3 個月：</strong>建立基礎人脈，讓夥伴認識你的專業</li>
                                    <li><strong>第 3-6 個月：</strong>開始收到精準的商業引薦</li>
                                    <li><strong>第 6-12 個月：</strong>穩定的引薦來源，業績明顯成長</li>
                                    <li><strong>持續投入：</strong>累積的信任越深，引薦的品質與數量越高</li>
                                </ul>
                                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 text-sm">
                                    <strong className="text-primary">核心關鍵：</strong>付出越多，收穫越大。積極參與一對一、認真準備引薦，是加速成效的不二法門。
                                </div>
                            </>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
