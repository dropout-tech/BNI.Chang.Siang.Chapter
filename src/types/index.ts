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
    referral_targets?: ReferralTargets | null;
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

export interface ReferralTargets {
    good?: string;
    ideal?: string;
    dream?: string;
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

export interface HomepageStat {
    month: string;
    referral_count: number;
    referral_value: number;
    updated_at?: string;
}

export interface EventEntry {
    id?: string;
    title: string;
    category: string;
    event_date: string;
    description: string;
    icon_name?: string;
    cover_image?: string;
    is_published: boolean;
    sort_order: number;
    created_at?: string;
    updated_at?: string;
}
