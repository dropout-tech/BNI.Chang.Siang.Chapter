import { useState, useEffect } from 'react';
import { insforge, isBackendConfigured } from '../lib/insforge';
import { assetUrl } from '../lib/assets';

export interface MemberInfo {
    name: string;
    industry: string;
    photo: string;
    isExternal?: boolean;
    story?: string;
    testimonial?: string;
    value?: string;
}

export interface Referral {
    id: string;
    title: string;
    description: string;
    metrics: { amount: string; type: string };
    referrer: MemberInfo;
    referee: MemberInfo;
}

export const useReferrals = () => {
    const [referrals, setReferrals] = useState<Referral[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStaticReferrals = async (): Promise<Referral[]> => {
            const response = await fetch(assetUrl('/data/referrals.json'));
            if (!response.ok) throw new Error('Static referrals file not found');
            const payload = await response.json();
            return Array.isArray(payload) ? payload : payload.referrals ?? [];
        };

        if (!isBackendConfigured) {
            loadStaticReferrals()
                .then(setReferrals)
                .catch((err) => {
                    console.error('Error loading static referrals:', err);
                    setReferrals([]);
                })
                .finally(() => setLoading(false));
            return;
        }

        const fetchData = async () => {
            try {
                setLoading(true);
                let { data: refsData, error: refsError } = await insforge.database
                    .from('referrals')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (refsError) {
                    const alt = await insforge.database.from('referrals').select('*');
                    if (!alt.error) { refsData = alt.data; refsError = null; }
                }

                if (refsError) throw refsError;
                if (!refsData || refsData.length === 0) {
                    setReferrals(await loadStaticReferrals());
                    return;
                }

                const { data: membersData } = await insforge.database
                    .from('members')
                    .select('name, industry, photo')
                    .is('frozen_at', null);

                const membersMap = new Map(membersData?.map((m: any) => [m.name, m]));

                const formatted: Referral[] = refsData.map((ref: any) => {
                    const referrer = membersMap.get(ref.referrer_name);
                    const referee = membersMap.get(ref.referee_name);
                    return {
                        id: ref.id,
                        title: ref.title,
                        description: ref.description,
                        metrics: ref.metrics || { amount: '0', type: 'TWD' },
                        referrer: {
                            name: ref.referrer_is_external ? '外分會' : ref.referrer_name,
                            industry: ref.referrer_is_external ? 'BNI' : referrer?.industry || '',
                            photo: ref.referrer_is_external ? '/images/assets/logo/bni-logo-new.png' : referrer?.photo || '',
                            isExternal: ref.referrer_is_external === true,
                            story: ref.referrer_story,
                        },
                        referee: {
                            name: ref.referee_is_external ? '外分會' : ref.referee_name,
                            industry: ref.referee_is_external ? 'BNI' : referee?.industry || '',
                            photo: ref.referee_is_external ? '/images/assets/logo/bni-logo-new.png' : referee?.photo || '',
                            isExternal: ref.referee_is_external === true,
                            story: ref.referee_story,
                            value: ref.referee_value || '',
                        }
                    };
                });

                setReferrals(formatted);
            } catch (err: any) {
                console.error("Error loading referrals:", err);
                try {
                    setReferrals(await loadStaticReferrals());
                } catch (fallbackErr) {
                    console.error('Error loading static referrals:', fallbackErr);
                    setReferrals([]);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { referrals, loading };
};
