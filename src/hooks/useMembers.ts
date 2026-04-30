import { useState, useEffect } from 'react';
import { insforge, isBackendConfigured } from '../lib/insforge';
import { assetUrl } from '../lib/assets';
import { makeMemberSlug } from '../lib/memberSlug';

export interface Member {
    id: number;
    name: string;
    industry: string;
    photo: string;
    photoPosition?: string;
    category: string;
    title: string;
    company: string;
    shortIntro: string;
    fullIntro: string;
    services: string[];
    hashtags: string[];
    links: { [key: string]: string } | { type: string; url: string; icon?: string }[];
    editCount?: number;
    updatedAt?: string;
    phone?: string;
    email?: string;
    slug?: string;
    is_gold_badge?: boolean;
    frozen_at?: string | null;
    frozen_by?: string | null;
    frozen_reason?: string | null;
    traffic_score?: number | null;
    traffic_level?: 'green' | 'yellow' | 'red' | null;
    latest_traffic_month?: string | null;
}

type TrafficScoreRow = {
    member_id: number;
    month: string;
    score: number;
    level: 'green' | 'yellow' | 'red';
};

function normalizeMembers(rows: Member[]): Member[] {
    return rows
        .filter((member) => !member.frozen_at)
        .map((member, index) => ({
            ...member,
            id: Number(member.id) || index + 1,
            slug: member.slug || makeMemberSlug(member.name, member.id || index + 1),
        }));
}

function attachTrafficScores(rows: Member[], scores: TrafficScoreRow[]): Member[] {
    const latestByMember = new Map<number, TrafficScoreRow>();
    [...scores]
        .sort((a, b) => b.month.localeCompare(a.month))
        .forEach((score) => {
            if (!latestByMember.has(score.member_id)) {
                latestByMember.set(score.member_id, score);
            }
        });

    return rows.map((member) => {
        const latest = latestByMember.get(Number(member.id));
        return latest
            ? {
                ...member,
                traffic_score: latest.score,
                traffic_level: latest.level,
                latest_traffic_month: latest.month,
            }
            : member;
    });
}

export const useMembers = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadStaticMembers = async () => {
            const response = await fetch(assetUrl('/data/members.json'));
            if (!response.ok) throw new Error('Static members file not found');
            const payload = await response.json();
            const rows = Array.isArray(payload) ? payload : payload.members;
            return normalizeMembers(rows ?? []);
        };

        if (!isBackendConfigured) {
            loadStaticMembers()
                .then(setMembers)
                .catch((err) => {
                    console.error('Error loading static members:', err);
                    setError('無法載入會員資料');
                })
                .finally(() => setLoading(false));
            return;
        }

        const fetchMembers = async () => {
            try {
                setLoading(true);
                const { data, error } = await insforge.database
                    .from('members')
                    .select('*')
                    .order('id', { ascending: true });

                if (error) throw error;
                if (data && data.length > 0) {
                    const { data: scoreData } = await insforge.database
                        .from('member_traffic_scores')
                        .select('member_id, month, score, level');
                    setMembers(attachTrafficScores(normalizeMembers(data), scoreData || []));
                    return;
                }
                setMembers(await loadStaticMembers());
            } catch (err) {
                console.error('Error fetching members:', err);
                try {
                    setMembers(await loadStaticMembers());
                } catch (fallbackErr) {
                    console.error('Error loading static members:', fallbackErr);
                    setError('無法載入會員資料');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    return { members, loading, error };
};
