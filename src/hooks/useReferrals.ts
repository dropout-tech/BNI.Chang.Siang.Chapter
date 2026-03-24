import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export interface MemberInfo {
    name: string;
    industry: string;
    photo: string;
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
        if (!isSupabaseConfigured) {
            setReferrals([]);
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                setLoading(true);
                let { data: refsData, error: refsError } = await supabase
                    .from('referrals')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (refsError) {
                    const altRes = await supabase
                        .from('referrals')
                        .select('*')
                        .order('createdAt', { ascending: false });
                    if (!altRes.error) { refsData = altRes.data; refsError = null; }
                }

                if (refsError) {
                    const fallbackRes = await supabase.from('referrals').select('*');
                    if (!fallbackRes.error) { refsData = fallbackRes.data; refsError = null; }
                }

                if (refsError) throw refsError;
                if (!refsData || refsData.length === 0) { setReferrals([]); return; }

                const { data: membersData } = await supabase
                    .from('members')
                    .select('name, industry, photo');

                const membersMap = new Map(membersData?.map(m => [m.name, m]));

                const formattedReferrals: Referral[] = refsData.map((ref: any) => {
                    const referrerDetails = membersMap.get(ref.referrer_name);
                    const refereeDetails = membersMap.get(ref.referee_name);
                    return {
                        id: ref.id,
                        title: ref.title,
                        description: ref.description,
                        metrics: ref.metrics || { amount: '0', type: 'TWD' },
                        referrer: {
                            name: ref.referrer_name,
                            industry: referrerDetails?.industry || 'Unknown',
                            photo: referrerDetails?.photo || '',
                            story: ref.referrer_story,
                            testimonial: ref.referrer_testimonial
                        },
                        referee: {
                            name: ref.referee_name,
                            industry: refereeDetails?.industry || 'Unknown',
                            photo: refereeDetails?.photo || '',
                            story: ref.referee_story,
                            value: ref.referee_value || ''
                        }
                    };
                });

                setReferrals(formattedReferrals);
            } catch (err: any) {
                console.error("Error loading referrals:", err);
                setReferrals([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { referrals, loading };
};
