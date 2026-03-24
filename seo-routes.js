const SITE_URL = 'https://changsiang.tw';

const seoRoutes = {
    '/': {
        title: 'BNI 長翔名人堂白金分會 | 長翔展翼 商機無限 | 台北金質商務交流平台',
        description: 'BNI 長翔名人堂白金分會 — 匯聚各產業精英的金質商務交流平台。透過全球最大商務引薦系統，協助台灣企業主精準對接資源，拓展人脈與業務。長翔展翼，商機無限。',
        keywords: '商會, 台灣商會, 台北商會, BNI, BNI台灣, 長翔分會, 名人堂, 白金分會, 商務引薦, 企業家商會, 商業社團, 台北商務社團, 商會推薦, 企業家人脈, 商務合作平台, BNI長翔, 中山區, Givers Gain, 付出者收穫',
        canonical: `${SITE_URL}/`
    },
    '/bni': {
        title: '認識 BNI | 全球最大商會・商務引薦系統 | BNI 長翔名人堂白金分會',
        description: 'BNI 是全球最大的商會暨商務引薦組織，遍及 76+ 國家、擁有 34 萬+ 會員。BNI 長翔名人堂白金分會匯聚台北各產業精英。透過「付出者收穫 Givers Gain」核心價值，協助企業主建立信任的商務合作關係。',
        keywords: '什麼是BNI, BNI商會, 台灣商會, 全球商會, 商務引薦系統, 付出者收穫, Givers Gain, 台灣BNI, BNI台灣, 商會組織, 企業家商會, BNI核心價值',
        canonical: `${SITE_URL}/bni`
    },
    '/members': {
        title: '長翔夥伴 | BNI 長翔名人堂白金分會企業家名錄',
        description: '探索 BNI 長翔名人堂白金分會的優秀企業家與專業人士。涵蓋金融、科技、設計、法律、醫療、餐飲等多元產業，為台灣企業主媒合最專業的合作夥伴。',
        keywords: '台灣商會會員, BNI會員, 長翔夥伴, 企業家名錄, 台北商會, 商務媒合, 行業專家, 企業合作, 台灣企業家',
        canonical: `${SITE_URL}/members`
    },
    '/referrals': {
        title: '引薦實績 | BNI 長翔名人堂白金分會商務合作成功案例',
        description: '見證 BNI 長翔名人堂白金分會的商務引薦實力。透過真實的引薦成功案例，展示長翔如何透過專業對接與互利合作，為企業主創造巨大的商業價值。',
        keywords: '商會引薦案例, BNI成功案例, 台灣商務合作, 商會合作實績, 引薦成功故事, 商務媒合案例, 台灣商會, BNI台灣',
        canonical: `${SITE_URL}/referrals`
    },
    '/privacy': {
        title: '隱私權政策與服務條款 | BNI 長翔名人堂白金分會',
        description: 'BNI 長翔名人堂白金分會隱私權政策與服務條款。了解我們如何保護您的個人資訊和使用條件。',
        keywords: '隱私權政策, 服務條款, BNI長翔, 個資保護',
        canonical: `${SITE_URL}/privacy`
    }
};

export default seoRoutes;
