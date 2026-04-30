import { useEffect, useState } from 'react';
import { insforge, isBackendConfigured } from '../lib/insforge';
import type { FAQEntry } from '../types';

export const DEFAULT_FAQS: FAQEntry[] = [
    {
        question: '加入 BNI 需要什麼資格？',
        answer: '我們尋找遵守 321A 原則的優質夥伴：三年以上行業經驗、公司成立兩年以上、專注於一項主要專業，並且態度良好、願意付出與學習。',
        sort_order: 1,
        is_active: true,
    },
    {
        question: '我不擅長社交，會不會很尷尬？',
        answer: 'BNI 有結構化流程，每次例會都有固定節奏，包含專業介紹、深度主講與分組交流，不需要靠臨場社交技巧硬撐。',
        sort_order: 2,
        is_active: true,
    },
    {
        question: '長翔分會的例會是怎麼進行的？',
        answer: '長翔每週三早晨實體聚會，透過專業的會議流程、會員介紹、主題簡報與引薦報告，建立真實的人脈連結。',
        sort_order: 3,
        is_active: true,
    },
    {
        question: '我需要準備什麼資料才能當來賓？',
        answer: '當來賓流程簡單，建議準備個人或公司基本資料、簡短自我介紹，以及想拓展的人脈或合作方向。',
        sort_order: 4,
        is_active: true,
    },
    {
        question: '如果我暫時無法參加例會怎麼辦？',
        answer: 'BNI 提供代理人制度。若因故無法出席，可提前安排代理人並提供自我介紹與引薦報告，讓商務交流不中斷。',
        sort_order: 5,
        is_active: true,
    },
    {
        question: '加入長翔後，多久能看到成效？',
        answer: 'BNI 是長期關係的投資。通常第 1 到 3 個月建立基礎信任，第 3 到 6 個月開始收到精準引薦，持續投入會讓引薦品質更穩定。',
        sort_order: 6,
        is_active: true,
    },
];

export function useFaqs(includeInactive = false) {
    const [faqs, setFaqs] = useState<FAQEntry[]>(DEFAULT_FAQS);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isBackendConfigured) {
            setFaqs(DEFAULT_FAQS);
            setLoading(false);
            return;
        }

        const loadFaqs = async () => {
            try {
                setLoading(true);
                let query = insforge.database
                    .from('faqs')
                    .select('*')
                    .order('sort_order', { ascending: true });

                if (!includeInactive) {
                    query = query.eq('is_active', true);
                }

                const { data, error: fetchError } = await query;
                if (fetchError) throw fetchError;
                setFaqs(data && data.length > 0 ? data : DEFAULT_FAQS);
            } catch (err) {
                console.error('Error loading FAQs:', err);
                setError('無法載入 Q&A');
                setFaqs(DEFAULT_FAQS);
            } finally {
                setLoading(false);
            }
        };

        loadFaqs();
    }, [includeInactive]);

    return { faqs, loading, error, setFaqs };
}

