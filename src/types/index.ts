export interface Member {
    id: number;
    name: string;
    photo: string;
    industry: string;
    category?: string;
    company: string;
    position?: string;
    title: string;
    shortIntro: string;
    fullIntro: string;
    links: { [key: string]: string } | MemberLink[];
    services: string[];
    hashtags: string[];
    editCount?: number;
    photoPosition?: string;
    user_id?: string;
    email?: string;
    phone?: string;
    slug?: string;
    is_gold_badge?: boolean;
    frozen_at?: string | null;
    frozen_by?: string | null;
    frozen_reason?: string | null;
    traffic_score?: number | null;
    traffic_level?: 'green' | 'yellow' | 'red' | null;
    latest_traffic_month?: string | null;
}

export interface MemberLink {
    type: string;
    url: string;
    icon?: string;
}

export interface Referral {
    id: string;
    title: string;
    description: string;
    metrics: {
        amount: string;
        type: string;
    };
    referrer: ReferralPerson;
    referee: ReferralPerson;
}

export interface ReferralPerson {
    name: string;
    industry: string;
    photo: string;
    isExternal?: boolean;
    story?: string;
    testimonial?: string;
    value?: string;
}

export interface FAQEntry {
    id?: string;
    question: string;
    answer: string;
    sort_order: number;
    is_active: boolean;
}

export interface MemberTrafficScore {
    id?: string;
    member_id: number;
    month: string;
    score: number;
    level: 'green' | 'yellow' | 'red';
    notes?: string;
}

export interface AuditLog {
    id: string;
    table_name: string;
    record_id?: string;
    action: 'INSERT' | 'UPDATE' | 'DELETE';
    old_row?: Record<string, unknown> | null;
    new_row?: Record<string, unknown> | null;
    actor_user_id?: string | null;
    actor_email?: string | null;
    created_at: string;
}
