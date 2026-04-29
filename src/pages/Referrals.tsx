import { assetUrl } from '../lib/assets';
import React from 'react';
import { useReferrals } from '../hooks/useReferrals';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import SEO from '../components/common/SEO';

const Referrals: React.FC = () => {
    const { referrals, loading, error } = useReferrals();
    const [selectedReferralId, setSelectedReferralId] = React.useState<string | null>(null);

    if (loading) return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <div className="w-16 h-16 border-4 border-[#CF2030] border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    if (error) return <div className="text-center py-20 text-red-400">無法載入引薦資料: {error}</div>;

    const toggleReferral = (id: string) => {
        if (selectedReferralId === id) {
            setSelectedReferralId(null);
        } else {
            setSelectedReferralId(id);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            <SEO
                title="商會引薦成功案例 | BNI 台灣商務合作實績"
                description="見證台灣 BNI 長翔名人堂白金分會的商務引薦實力。透過真實的引薦成功案例，展示台灣頂尖商會如何透過專業對接與互利合作，為企業主創造巨大的商業價值與商務合作機會。"
                keywords="商會引薦案例, BNI成功案例, 台灣商務合作, 商會合作實績, 引薦成功故事, 商務媒合案例, 台灣商會, BNI台灣"
                breadcrumbs={[{ name: '引薦案例', path: '/referrals' }]}
                structuredData={{
                    '@type': 'CollectionPage',
                    name: 'BNI 長翔名人堂白金分會商務引薦成功案例',
                    description: '台灣 BNI 長翔名人堂白金分會商務引薦成功案例與合作實績。',
                    url: 'https://changsiang.tw/referrals',
                    isPartOf: { '@id': 'https://changsiang.tw/#website' },
                    inLanguage: 'zh-TW'
                }}
            />
            <PageHero
                title="台灣商會引薦案例"
                subtitle={
                    <>
                        BNI 長翔名人堂白金分會真實的商務引薦案例<br />展現台灣商會的商業價值，每一次的引薦都是信任的傳遞
                    </>
                }
            />

            <div className="container mx-auto px-4 py-12 relative z-10">

                {/* Weekly Feature Note */}
                <div className="card-elevated p-5 mb-8 text-center max-w-2xl mx-auto">
                    <p className="text-[#CF2030] font-bold text-lg mb-1">每週精選案例</p>
                    <p className="text-gray-600 text-sm">
                        實際上門引薦單遠大於此，目前已累積 <span className="text-[#CF2030] font-mono font-bold">16,800+</span> 筆引薦商機，這裡僅展示每週精選的成功故事。
                    </p>
                </div>

                {referrals.length === 0 && (
                    <div className="card-elevated max-w-3xl mx-auto p-8 md:p-10 text-center mb-10">
                        <p className="text-[#CF2030] font-bold text-xl mb-3">長翔正式引薦案例整理中</p>
                        <p className="text-gray-600 leading-relaxed">
                            舊站引薦故事已先清除，避免展示非長翔分會資料。長翔分會目前累積 25,072 筆引薦單，
                            總累積交易金額 $428,843,116，待正式案例內容確認後會再補上完整故事。
                        </p>
                    </div>
                )}

                {/* Referrals Grid - Waterfall/Vertical Stack on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-8 md:pb-0 max-w-6xl mx-auto">
                    {referrals.map((referral, index) => {
                        const isSelected = selectedReferralId === referral.id;
                        return (
                            <div key={referral.id} className="h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    onClick={() => toggleReferral(referral.id)}
                                    className={`card-elevated overflow-hidden group flex flex-col cursor-pointer h-full ${isSelected ? 'border-[#CF2030] ring-2 ring-[#CF2030]/10 z-20 scale-[1.02]' : ''
                                        }`}
                                >
                                    <div className="h-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark transition-opacity" />

                                    <div className="p-6 md:p-8 flex-grow flex flex-col">
                                        <h3 className={`text-xl md:text-2xl font-bold mb-4 transition-colors leading-snug ${isSelected ? 'text-[#CF2030]' : 'text-gray-900 group-hover:text-[#CF2030]'}`}>
                                            {referral.title}
                                        </h3>

                                        <div className="flex items-start gap-4 mb-6">
                                            <Quote className="text-[#CF2030]/40 shrink-0 transform rotate-180" size={32} />
                                            <div className="flex-1">
                                                <p className={`text-gray-600 text-base leading-relaxed ${isSelected ? '' : 'line-clamp-3'}`}>
                                                    {referral.description}
                                                </p>
                                                {isSelected && (
                                                    <div className="mt-8 space-y-6">
                                                        {referral.referrer?.story && (
                                                            <div className="bg-white rounded-2xl p-5 border-l-4 border-[#CF2030]/50 relative shadow-sm">
                                                                <div className="absolute -top-3 left-6 px-2 bg-white text-[#CF2030] text-[10px] font-bold uppercase tracking-widest">
                                                                    引薦人真心話
                                                                </div>
                                                                <p className="text-gray-600 text-sm leading-relaxed italic">
                                                                    "{referral.referrer.story}"
                                                                </p>
                                                                <div className="mt-2 text-right">
                                                                    <span className="text-xs text-[#CF2030]/70">— {referral.referrer.name}</span>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {referral.referee?.story && (
                                                            <div className="bg-[#CF2030]/5 rounded-2xl p-5 border-r-4 border-[#E8394A]/50 relative">
                                                                <div className="absolute -top-3 right-6 px-2 bg-white text-[#E8394A] text-[10px] font-bold uppercase tracking-widest">
                                                                    被引薦人回饋
                                                                </div>
                                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                                    {referral.referee.story}
                                                                </p>
                                                                <div className="mt-2 flex items-center gap-2">
                                                                    <div className="h-px flex-grow bg-gray-100"></div>
                                                                    <span className="text-xs text-[#E8394A]/70">{referral.referee.name} 回應</span>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Metrics Badge */}
                                        <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 mb-8 border border-[#CF2030]/15 mt-auto shadow-inner">
                                            <div className="text-xs text-[#E8394A] uppercase tracking-wider mb-2 font-bold">成效數據</div>
                                            <div className="flex justify-between items-end">
                                                <div className="font-bold text-[#CF2030] text-2xl">{referral.metrics.amount}</div>
                                                <div className="text-sm text-gray-600 font-medium px-2 py-1 bg-white rounded border border-red-100">{referral.metrics.type}</div>
                                            </div>
                                        </div>

                                        {/* Members Connection */}
                                        <div className="mt-auto border-t border-gray-100 pt-6">
                                            <div className="flex items-center justify-between relative">
                                                {/* Referrer */}
                                                <div className="flex items-center gap-4 w-[45%]">
                                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 shrink-0">
                                                        <img
                                                            src={assetUrl(referral.referrer.photo || '/images/assets/logo/白色正方形logo.png')}
                                                            alt={referral.referrer.name}
                                                            className="w-full h-full object-cover object-[center_top]"
                                                            onError={(e) => e.currentTarget.src = assetUrl('/images/assets/logo/白色正方形logo.png')}
                                                        />
                                                    </div>
                                                    <div className="overflow-hidden">
                                                        <div className="text-xs text-gray-500 mb-0.5">引薦人</div>
                                                        <div className="font-bold text-base truncate text-gray-900">{referral.referrer.name}</div>
                                                        <div className="text-xs text-gray-500 truncate">{referral.referrer.industry}</div>
                                                    </div>
                                                </div>

                                                {/* Arrow */}
                                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CF2030]/50 flex flex-col items-center">
                                                    <span className="text-[10px] text-[#CF2030]/70 mb-1">引薦給</span>
                                                    <ArrowRight size={20} />
                                                </div>

                                                {/* Referee */}
                                                <div className="flex items-center gap-4 w-[45%] justify-end text-right">
                                                    <div className="overflow-hidden">
                                                        <div className="text-xs text-gray-500 mb-0.5">被引薦人</div>
                                                        <div className="font-bold text-base truncate text-gray-900">{referral.referee.name}</div>
                                                        <div className="text-xs text-gray-500 truncate">{referral.referee.industry}</div>
                                                    </div>
                                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 shrink-0">
                                                        <img
                                                            src={assetUrl(referral.referee.photo || '/images/assets/logo/白色正方形logo.png')}
                                                            alt={referral.referee.name}
                                                            className="w-full h-full object-cover object-[center_top]"
                                                            onError={(e) => e.currentTarget.src = assetUrl('/images/assets/logo/白色正方形logo.png')}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Referrals;
