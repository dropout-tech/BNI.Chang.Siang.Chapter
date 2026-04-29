import { useState, useEffect } from 'react';
import { insforge, isBackendConfigured } from '../lib/insforge';
import { assetUrl } from '../lib/assets';

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
            return (rows ?? []).map((member: Member, index: number) => ({
                ...member,
                id: Number(member.id) || index + 1,
            }));
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
                    setMembers(data);
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
