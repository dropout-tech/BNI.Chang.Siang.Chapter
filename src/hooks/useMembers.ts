import { useState, useEffect } from 'react';
import { insforge, isBackendConfigured } from '../lib/insforge';
import { assetUrl } from '../lib/assets';
import { makeMemberSlug } from '../lib/memberSlug';
import type { Member, ReferralTargets } from '../types';

// Re-export so existing callers don't break
export type { Member, ReferralTargets };

type TrafficScoreRow = {
    member_id: number;
    month: string;
    score: number;
    level: 'green' | 'yellow' | 'red';
};

// Only public-safe fields — phone/email/user_id excluded from unauthenticated reads
const PUBLIC_FIELDS = [
    'idx', 'id', 'name', 'company', 'position', 'title', 'industry', 'category',
    '"shortIntro"', '"fullIntro"', 'photo', '"photoPosition"',
    'services', 'hashtags', 'links', '"editCount"', '"updatedAt"',
    'slug', 'is_gold_badge', 'is_admin', 'frozen_at', 'referral_targets',
].join(',');

function normalizeMembers(rows: Member[]): Member[] {
    return rows
        .filter((member) => !member.frozen_at)
        .map((member, index) => {
            const realIdx = Number((member as any).idx) || index + 1;
            return {
                ...member,
                idx: realIdx,
                id: Number(member.id) || realIdx,
                slug: member.slug || makeMemberSlug(member.name, Number(member.id) || realIdx),
            };
        });
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
        const latest = latestByMember.get(Number(member.idx ?? member.id));
        return latest
            ? { ...member, traffic_score: latest.score, traffic_level: latest.level, latest_traffic_month: latest.month }
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
                    .select(PUBLIC_FIELDS)
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
