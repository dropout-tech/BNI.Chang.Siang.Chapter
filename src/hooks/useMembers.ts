import { useState, useEffect } from 'react';
import { insforge, isBackendConfigured } from '../lib/insforge';

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
        if (!isBackendConfigured) {
            setMembers([]);
            setLoading(false);
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
                setMembers(data || []);
            } catch (err) {
                console.error('Error fetching members:', err);
                setError('無法載入會員資料');
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    return { members, loading, error };
};
