
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { insforge, isBackendConfigured } from '../lib/insforge';
import { useAuth } from '../contexts/auth-context';
import {
    Users, Activity, DollarSign, Calendar,
    Trash2, Plus, Save, Search, Shield, RefreshCw, HelpCircle, FileText
} from 'lucide-react';
import StatsCard from '../components/common/StatsCard';
import MemberList from '../components/admin/MemberList';
import SEO from '../components/common/SEO';
import { siteConfig } from '../config/site.config';
import { sanitizeText } from '../lib/sanitize';
import { DEFAULT_FAQS } from '../hooks/useFaqs';
import { getLinkedMemberAccount, hasAdminAccess } from '../lib/memberAccount';
import type { AuditLog, FAQEntry } from '../types';

function isRealMemberPhoto(photo: string | null | undefined): boolean {
    const value = photo?.trim().toLowerCase() || '';
    if (!value) return false;
    if (value.includes('/images/assets/logo/') || value.includes('bni-logo-new.png')) return false;
    return true;
}

const Admin: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalMembers: 0,
        totalReferrals: 0,
        totalValue: 0,
        monthlyVisits: 0,
        topIndustry: '',
        industrySummary: '',
        completionRate: ''
    });

    // Tab State
    const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'referrals' | 'faq' | 'audit' | 'settings'>('overview');

    // Members Data
    const [members, setMembers] = useState<any[]>([]);
    const [memberSearch, setMemberSearch] = useState('');
    const [showFrozenMembers, setShowFrozenMembers] = useState(false);
    const [sortMembersByTraffic, setSortMembersByTraffic] = useState(false);
    const [trafficMonth, setTrafficMonth] = useState(new Date().toISOString().slice(0, 7));

    // Homepage Stats Form
    const [homeStats, setHomeStats] = useState({
        referral_count: 0,
        referral_value: 0,
        month: new Date().toISOString().slice(0, 7) // YYYY-MM
    });

    // Recent Activity State
    const [recentUpdates, setRecentUpdates] = useState<any[]>([]);

    // Referrals Data
    const [referrals, setReferrals] = useState<any[]>([]);
    const [faqs, setFaqs] = useState<FAQEntry[]>([]);
    const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);

    // Marketing Stats
    const [marketingStats, setMarketingStats] = useState({
        socialClicks: 0
    });

    useEffect(() => {
        checkAdmin();
        fetchDashboardData();
    }, [user]);

    const checkAdmin = async () => {
        if (!user || !isBackendConfigured) {
            navigate('/login');
            return;
        }

        try {
            const linkedMember = await getLinkedMemberAccount(user);
            if (!hasAdminAccess(user, linkedMember)) {
                if (!linkedMember) {
                    navigate('/login');
                    return;
                }
                navigate('/');
            }
        } catch {
            navigate('/');
        }
    };

    const fetchDashboardData = async () => {
        if (!isBackendConfigured) { setLoading(false); return; }
        setLoading(true);

        try {
            const now = new Date();
            const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

            // Parallel Fetching for O(1) perceived latency (limited by slowest request)
            const [
                membersRes,
                homeStatsRes,
                pageViewsRes,
                referralsRes,
                socialClicksRes,
                trafficScoresRes,
                faqsRes,
                auditLogsRes
            ] = await Promise.all([
                // 1. Members - Resilient Fetching
                (async () => {
                    // Try createdAt first
                    let res = await insforge.database.from('members').select('*').order('createdAt', { ascending: false });
                    if (res.error) {
                        console.warn('Attempted createdAt order failed, trying created_at...', res.error.message);
                        res = await insforge.database.from('members').select('*').order('created_at', { ascending: false });
                    }
                    if (res.error) {
                        console.warn('Attempted created_at order failed, trying default order...', res.error.message);
                        res = await insforge.database.from('members').select('*');
                    }
                    return res;
                })(),
                // 2. Homepage Stats
                // 2. Homepage Stats - Fail-safe
                (async () => {
                    try { return await insforge.database.from('homepage_stats').select('*').order('month', { ascending: false }).limit(1).maybeSingle(); }
                    catch { return { data: null, error: null }; }
                })(),
                // 3. Page Views - Fail-safe
                (async () => {
                    try {
                        return await insforge.database
                            .from('page_views')
                            .select('*', { count: 'exact', head: true })
                            .gte('created_at', monthStart);
                    }
                    catch { return { count: 0, data: null, error: null }; }
                })(),
                // 4. Referrals - Resilient Fetching
                (async () => {
                    try {
                        let res = await insforge.database.from('referrals').select('*').order('created_at', { ascending: false });
                        if (res.error) res = await insforge.database.from('referrals').select('*').order('createdAt', { ascending: false });
                        if (res.error) res = await insforge.database.from('referrals').select('*');
                        return res;
                    } catch { return { data: [], error: null }; }
                })(),
                // 5. Social Clicks - Fail-safe
                (async () => {
                    try {
                        return await insforge.database
                            .from('analytics_events')
                            .select('*', { count: 'exact', head: true })
                            .eq('event_name', 'click_social')
                            .gte('created_at', monthStart);
                    }
                    catch { return { count: 0, data: null, error: null }; }
                })(),
                (async () => {
                    try { return await insforge.database.from('member_traffic_scores').select('*').order('month', { ascending: false }); }
                    catch { return { data: [], error: null }; }
                })(),
                (async () => {
                    try { return await insforge.database.from('faqs').select('*').order('sort_order', { ascending: true }); }
                    catch { return { data: [], error: null }; }
                })(),
                (async () => {
                    try { return await insforge.database.from('audit_logs').select('*').order('created_at', { ascending: false }).limit(100); }
                    catch { return { data: [], error: null }; }
                })()
            ]);

            // Process Members
            if (membersRes.error) console.error('Members fetch error:', membersRes.error);
            const trafficScores = trafficScoresRes.data || [];
            const latestScoreByMember = new Map<number, any>();
            [...trafficScores]
                .sort((a: any, b: any) => String(b.month).localeCompare(String(a.month)))
                .forEach((score: any) => {
                    if (!latestScoreByMember.has(Number(score.member_id))) {
                        latestScoreByMember.set(Number(score.member_id), score);
                    }
                });
            const membersData = (membersRes.data || []).map((member: any) => {
                const score = latestScoreByMember.get(Number(member.id));
                return score
                    ? {
                        ...member,
                        traffic_score: score.score,
                        traffic_level: score.level,
                        latest_traffic_month: score.month,
                    }
                    : member;
            });
            setMembers(membersData);
            setFaqs(faqsRes.data?.length ? faqsRes.data : DEFAULT_FAQS);
            setAuditLogs(auditLogsRes.data || []);

            // Process Referrals
            if (referralsRes.error) console.error('Referrals fetch error:', referralsRes.error);
            const refData = referralsRes.data || [];
            setReferrals(refData);

            // Derive Recent Updates (Avoid extra API call)
            const systemNames = ['呂學承', '彭顯智', '潘芷盈'];
            const sortedByUpdate = [...membersData]
                .filter(m => !systemNames.includes(m.name))
                .sort((a, b) => {
                    const dateA = new Date(a.updatedAt || a.updated_at || 0).getTime();
                    const dateB = new Date(b.updatedAt || b.updated_at || 0).getTime();
                    return dateB - dateA;
                });
            setRecentUpdates(sortedByUpdate.slice(0, 5));

            // Process Home Stats
            const homeStatsData = homeStatsRes.data;
            if (homeStatsData) {
                setHomeStats({
                    month: homeStatsData.month,
                    referral_count: homeStatsData.referral_count,
                    referral_value: homeStatsData.referral_value
                });
            }


            // Stats Calculation (O(N))
            const visitsCount = pageViewsRes.count || 0;
            const socialClicksCount = socialClicksRes.count || 0;

            const activeMembers = membersData.filter((m: any) => !m.frozen_at);
            const industryCounts: { [key: string]: number } = {};
            let hasPhotoCount = 0;
            activeMembers.forEach((m: any) => {
                const ind = m.industry || '未分類';
                industryCounts[ind] = (industryCounts[ind] || 0) + 1;
                if (isRealMemberPhoto(m.photo)) hasPhotoCount++;
            });

            const sortedIndustries = Object.entries(industryCounts).sort((a, b) => b[1] - a[1]);
            const topIndustry = sortedIndustries[0];
            const tiedTopCount = topIndustry ? sortedIndustries.filter(([, count]) => count === topIndustry[1]).length : 0;
            const industryDisplay = !topIndustry
                ? '無資料'
                : topIndustry[1] <= 1
                    ? '產業分散'
                    : tiedTopCount > 1
                        ? `${tiedTopCount} 個產業並列`
                        : `${topIndustry[0]} (${topIndustry[1]})`;
            const industrySummary = !topIndustry
                ? '尚無會員產業資料'
                : topIndustry[1] <= 1
                    ? `共 ${sortedIndustries.length} 類，每類 1 位`
                    : tiedTopCount > 1
                        ? `最高皆為 ${topIndustry[1]} 位`
                        : '最高會員數產業';
            const completionRate = activeMembers.length ? Math.round((hasPhotoCount / activeMembers.length) * 100) : 0;

            setStats({
                totalMembers: activeMembers.length,
                totalReferrals: homeStatsData?.referral_count || 0,
                totalValue: homeStatsData?.referral_value || 0,
                monthlyVisits: visitsCount,
                topIndustry: industryDisplay,
                industrySummary,
                completionRate: `${completionRate}%`
            });

            setMarketingStats({ socialClicks: socialClicksCount });

        } catch (error) {
            console.error('Dashboard fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddMember = async () => {
        const rawName = prompt('請輸入新會員姓名:');
        if (!rawName) return;
        const name = sanitizeText(rawName, 50);
        if (!name) { alert('名稱無效'); return; }

        try {
            const { error } = await insforge.database.from('members').insert([{
                name,
                industry: '新產業',
                company: '新公司',
                photo: siteConfig.defaultPhoto,
                createdAt: new Date().toISOString()
            }]).select().single();

            if (error) throw error;
            alert(`已新增會員 ${name}，請點擊編輯按鈕完善資料。`);
            fetchDashboardData();
        } catch (e: any) {
            alert('新增失敗: ' + e.message);
        }
    };

    const handleDeleteReferral = async (id: string) => {
        if (!confirm('確定要刪除這筆引薦單嗎？此動作無法復原。')) return;
        try {
            const { error } = await insforge.database.from('referrals').delete().eq('id', id);
            if (error) throw error;
            setReferrals(referrals.filter(r => r.id !== id));
            alert('已刪除');
        } catch (e: any) {
            alert('刪除失敗: ' + e.message);
        }
    };

    const updateHomeStats = async () => {
        try {
            const { error } = await insforge.database
                .from('homepage_stats')
                .upsert(homeStats, { onConflict: 'month' });

            if (error) throw error;
            alert('首頁數據已更新！');
            fetchDashboardData();
        } catch (err: any) {
            console.error(err);
            alert('更新失敗: ' + err.message);
        }
    };

    const handleToggleFrozen = async (member: any) => {
        const isFrozen = !!member.frozen_at;
        const reason = isFrozen ? null : sanitizeText(prompt('請輸入冷凍原因（例如：離開分會、開信用狀）') || '', 120);
        if (!isFrozen && !reason) return;

        try {
            const { error } = await insforge.database
                .from('members')
                .update({
                    frozen_at: isFrozen ? null : new Date().toISOString(),
                    frozen_by: isFrozen ? null : user?.email || user?.id,
                    frozen_reason: isFrozen ? null : reason,
                    updatedAt: new Date().toISOString(),
                })
                .eq('id', member.id);
            if (error) throw error;
            alert(isFrozen ? '已解凍會員' : '已冷凍會員');
            fetchDashboardData();
        } catch (err: any) {
            alert('操作失敗: ' + err.message);
        }
    };

    const handleToggleGold = async (member: any, checked: boolean) => {
        try {
            const { error } = await insforge.database
                .from('members')
                .update({ is_gold_badge: checked, updatedAt: new Date().toISOString() })
                .eq('id', member.id);
            if (error) throw error;
            setMembers(prev => prev.map(item => item.id === member.id ? { ...item, is_gold_badge: checked } : item));
        } catch (err: any) {
            alert('金質獎章更新失敗: ' + err.message);
        }
    };

    const getTrafficLevel = (score: number) => {
        if (score >= 70) return 'green';
        if (score >= 40) return 'yellow';
        return 'red';
    };

    const handleSaveTrafficScore = async (member: any, score: number) => {
        try {
            const { error } = await insforge.database
                .from('member_traffic_scores')
                .upsert({
                    member_id: Number(member.id),
                    month: trafficMonth,
                    score: Math.max(0, Number(score) || 0),
                    level: getTrafficLevel(Number(score) || 0),
                    updated_at: new Date().toISOString(),
                }, { onConflict: 'member_id,month' });
            if (error) throw error;
            alert('紅綠燈分數已儲存');
            fetchDashboardData();
        } catch (err: any) {
            alert('儲存紅綠燈失敗: ' + err.message);
        }
    };

    const handleSaveFaq = async (faq: FAQEntry, index: number) => {
        const payload = {
            question: sanitizeText(faq.question, 200),
            answer: sanitizeText(faq.answer, 2000),
            sort_order: Number(faq.sort_order ?? index + 1),
            is_active: faq.is_active !== false,
            updated_at: new Date().toISOString(),
        };
        if (!payload.question || !payload.answer) {
            alert('Q&A 問題與答案都必填');
            return;
        }

        try {
            const query = faq.id
                ? insforge.database.from('faqs').update(payload).eq('id', faq.id)
                : insforge.database.from('faqs').insert([payload]);
            const { error } = await query;
            if (error) throw error;
            alert('Q&A 已儲存');
            fetchDashboardData();
        } catch (err: any) {
            alert('Q&A 儲存失敗: ' + err.message);
        }
    };

    const handleDeleteFaq = async (faq: FAQEntry, index: number) => {
        if (!faq.id) {
            setFaqs(prev => prev.filter((_, i) => i !== index));
            return;
        }
        if (!confirm('確定刪除這個 Q&A？')) return;
        try {
            const { error } = await insforge.database.from('faqs').delete().eq('id', faq.id);
            if (error) throw error;
            fetchDashboardData();
        } catch (err: any) {
            alert('Q&A 刪除失敗: ' + err.message);
        }
    };

    const filteredMembers = members
        .filter(m => showFrozenMembers ? !!m.frozen_at : !m.frozen_at)
        .filter(m =>
            m.name?.toLowerCase().includes(memberSearch.toLowerCase()) ||
            m.company?.toLowerCase().includes(memberSearch.toLowerCase()) ||
            m.industry?.toLowerCase().includes(memberSearch.toLowerCase())
        )
        .sort((a, b) => sortMembersByTraffic
            ? (Number(b.traffic_score) || 0) - (Number(a.traffic_score) || 0)
            : String(a.name || '').localeCompare(String(b.name || ''), 'zh-Hant')
        );

    if (loading) return <div className="min-h-screen pt-32 text-center font-bold text-gray-700">載入後台數據中...</div>;

    return (
        <div className="min-h-dvh pt-24 md:pt-32 pb-24 md:pb-12 px-4 container mx-auto">
            <SEO title="管理後台" noindex />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-950 flex items-center gap-3">
                    <Activity className="text-[#CF2030]" size={24} /> 管理後台
                    <button
                        onClick={fetchDashboardData}
                        className={`p-2 rounded-full hover:bg-red-50 transition-all ${loading ? 'animate-spin text-[#CF2030]' : 'text-gray-500'}`}
                        title="重新整理數據"
                    >
                        <RefreshCw size={18} />
                    </button>
                </h1>
                <div className="w-full md:w-auto overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                    <div className="flex bg-white p-1 rounded-xl backdrop-blur-sm border border-red-100 shadow-sm min-w-max">
                        {[
                            { id: 'overview', label: '總覽' },
                            { id: 'members', label: '會員' },
                            { id: 'referrals', label: '引薦' },
                            { id: 'faq', label: 'Q&A' },
                            { id: 'audit', label: '紀錄' },
                            { id: 'settings', label: '設定' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`px-4 py-2 rounded-md text-sm font-bold transition-colors whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-red-50 text-[#CF2030] shadow-sm ring-1 ring-red-100'
                                    : 'text-gray-600 hover:bg-red-50 hover:text-[#CF2030]'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="space-y-6">

                {/* OVERVIEW TAB */}
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                        <StatsCard
                            title="總會員數"
                            value={stats.totalMembers}
                            icon={<Users className="text-[#CF2030]" />}
                            diff="活躍中"
                        />
                        <StatsCard
                            title="資料完整度"
                            value={(stats as any).completionRate}
                            icon={<Activity className="text-pink-400" />}
                            diff="會員有照片比例"
                        />
                        <StatsCard
                            title="產業分布"
                            value={(stats as any).topIndustry}
                            icon={<Users className="text-purple-400" />}
                            diff={(stats as any).industrySummary}
                        />
                        <StatsCard
                            title="總引薦單數"
                            value={stats.totalReferrals.toLocaleString()}
                            icon={<Calendar className="text-green-400" />}
                            diff="歷史累計"
                        />
                        <StatsCard
                            title="總交易價值"
                            value={`$${(stats.totalValue / 100000000).toFixed(1)}億`}
                            icon={<DollarSign className="text-yellow-400" />}
                            diff="歷史累計"
                        />
                        <StatsCard
                            title="本月網站瀏覽"
                            value={stats.monthlyVisits.toLocaleString()}
                            icon={<Activity className="text-purple-400" />}
                            diff="+15% 上月"
                        />
                        <StatsCard
                            title="社群連結點擊"
                            value={marketingStats.socialClicks.toLocaleString()}
                            icon={<Users className="text-pink-500" />}
                            diff="本月累計"
                        />


                        {/* Recent Activity Section */}
                        <div className="col-span-2 lg:col-span-3 rounded-2xl border border-red-100 bg-white p-4 shadow-sm md:p-6 min-h-[280px]">
                            <h3 className="text-xl font-bold text-gray-950 mb-4 flex items-center gap-2">
                                <Activity size={20} className="text-[#CF2030]" /> 最近更新紀錄
                            </h3>
                            <div className="grid gap-4">
                                {recentUpdates.length === 0 ? (
                                    <div className="text-gray-500 text-center py-8">尚無更新紀錄</div>
                                ) : (
                                    recentUpdates.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between p-4 bg-red-50/40 rounded-xl border border-red-100 hover:border-[#CF2030]/50 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                                                    <img src={item.photo || siteConfig.defaultPhoto} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-gray-950">{item.name}</div>
                                                    <div className="text-xs text-gray-500">{item.company || '未填寫公司'}</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-[#CF2030] font-mono text-sm">
                                                    {new Date(item.updatedAt || item.updated_at || item.createdAt || item.created_at || Date.now()).toLocaleDateString()}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {new Date(item.updatedAt || item.updated_at || item.createdAt || item.created_at || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} 更新
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* System Support Team */}
                        <div className="col-span-2 lg:col-span-1 bg-white border border-red-100 rounded-2xl p-4 shadow-sm md:p-6 min-h-[280px] flex flex-col">
                            <h3 className="text-xl font-bold text-gray-950 mb-6 flex items-center gap-2">
                                <Shield size={20} className="text-[#CF2030]" /> 系統維運團隊
                            </h3>
                            <div className="space-y-4 flex-grow">
                                {['呂學承', '彭顯智', '潘芷盈'].map(name => (
                                    <div key={name} className="flex items-center gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100 hover:border-[#CF2030]/30 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-[#CF2030]/20 flex items-center justify-center text-[#CF2030] text-sm font-bold border border-[#CF2030]/30">
                                            {name[0]}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-950">{name}</div>
                                            <div className="text-[10px] text-[#CF2030]/70 uppercase tracking-widest font-medium">系統管理員</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="text-[10px] text-gray-500 text-center uppercase tracking-widest">
                                    ChangSiang Tech Support
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* MEMBERS TAB */}
                {activeTab === 'members' && (
                    <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm md:p-6 overflow-hidden">
                        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 mb-6">
                            <div className="relative flex-1 sm:max-w-xs">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="搜尋會員..."
                                    value={memberSearch}
                                    onChange={e => setMemberSearch(e.target.value)}
                                    className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#CF2030] focus:ring-2 focus:ring-red-100"
                                />
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                <button
                                    onClick={() => setShowFrozenMembers(false)}
                                    className={`rounded-full px-4 py-2 text-sm font-bold ring-1 ring-inset ${!showFrozenMembers ? 'bg-red-50 text-[#CF2030] ring-red-100' : 'bg-white text-gray-600 ring-gray-200'}`}
                                >
                                    目前會員
                                </button>
                                <button
                                    onClick={() => setShowFrozenMembers(true)}
                                    className={`rounded-full px-4 py-2 text-sm font-bold ring-1 ring-inset ${showFrozenMembers ? 'bg-red-50 text-[#CF2030] ring-red-100' : 'bg-white text-gray-600 ring-gray-200'}`}
                                >
                                    冷凍列表
                                </button>
                                <label className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-600">
                                    <input
                                        type="checkbox"
                                        checked={sortMembersByTraffic}
                                        onChange={(event) => setSortMembersByTraffic(event.target.checked)}
                                    />
                                    依紅綠燈排序
                                </label>
                                <input
                                    type="month"
                                    value={trafficMonth}
                                    onChange={(event) => setTrafficMonth(event.target.value)}
                                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700"
                                    title="紅綠燈分數月份"
                                />
                            </div>
                            <button
                                onClick={handleAddMember}
                                className="flex items-center justify-center gap-2 bg-[#CF2030] text-white px-4 py-2.5 rounded-lg font-bold hover:bg-[#CF2030]/90 transition-colors shrink-0"
                            >
                                <Plus size={18} /> 新增會員
                            </button>
                        </div>

                        <MemberList
                            members={filteredMembers}
                            loading={loading}
                            onRefresh={fetchDashboardData}
                            onToggleFrozen={handleToggleFrozen}
                            onToggleGold={handleToggleGold}
                            onSaveTrafficScore={handleSaveTrafficScore}
                        />
                    </div>
                )}

                {/* REFERRALS TAB */}
                {activeTab === 'referrals' && (
                    <div className="space-y-6">
                        {/* Add New Case Form */}
                        <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm md:p-6">
                            <h3 className="text-xl font-bold text-gray-950 mb-6 flex items-center gap-2">
                                <Plus size={20} className="text-[#CF2030]" /> 新增引薦案例
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-600 text-sm font-semibold mb-1">引薦案例標題</label>
                                    <input
                                        type="text"
                                        id="ref_title"
                                        placeholder="例如：【💼 合作共創新價值】"
                                        className="w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-[#CF2030] focus:outline-none focus:ring-2 focus:ring-red-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 text-sm font-semibold mb-1">簡短描述</label>
                                    <input
                                        type="text"
                                        id="ref_desc"
                                        placeholder="例如：生醫公司新產品線包裝設計引薦"
                                        className="w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:border-[#CF2030] focus:outline-none focus:ring-2 focus:ring-red-100"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-600 text-sm font-semibold mb-1">引薦人姓名</label>
                                    <input
                                        type="text"
                                        id="ref_referrer"
                                        className="w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-900 focus:border-[#CF2030] focus:outline-none focus:ring-2 focus:ring-red-100"
                                    />
                                    <label className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                                        <input type="checkbox" id="ref_referrer_external" />
                                        外分會引薦人（前台只顯示外分會與 BNI Logo）
                                    </label>
                                </div>
                                <div>
                                    <label className="block text-gray-600 text-sm font-semibold mb-1">被引薦人姓名</label>
                                    <input
                                        type="text"
                                        id="ref_referee"
                                        className="w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-900 focus:border-[#CF2030] focus:outline-none focus:ring-2 focus:ring-red-100"
                                    />
                                    <label className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                                        <input type="checkbox" id="ref_referee_external" />
                                        外分會被引薦人（前台只顯示外分會與 BNI Logo）
                                    </label>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-gray-600 text-sm font-semibold mb-1">引薦人自述 (Referrer Story)</label>
                                    <textarea
                                        id="ref_referrer_story"
                                        rows={3}
                                        className="w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-900 focus:border-[#CF2030] focus:outline-none focus:ring-2 focus:ring-red-100"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-gray-600 text-sm font-semibold mb-1">被引薦人自述 (Referee Story)</label>
                                    <textarea
                                        id="ref_referee_story"
                                        rows={3}
                                        className="w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-900 focus:border-[#CF2030] focus:outline-none focus:ring-2 focus:ring-red-100"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={async () => {
                                        const title = (document.getElementById('ref_title') as HTMLInputElement).value;
                                        const description = (document.getElementById('ref_desc') as HTMLInputElement).value;
                                        const referrer_name = (document.getElementById('ref_referrer') as HTMLInputElement).value;
                                        const referee_name = (document.getElementById('ref_referee') as HTMLInputElement).value;
                                        const referrer_is_external = (document.getElementById('ref_referrer_external') as HTMLInputElement).checked;
                                        const referee_is_external = (document.getElementById('ref_referee_external') as HTMLInputElement).checked;
                                        const referrer_story = (document.getElementById('ref_referrer_story') as HTMLTextAreaElement).value;
                                        const referee_story = (document.getElementById('ref_referee_story') as HTMLTextAreaElement).value;

                                        if (!title || !referrer_name || !referee_name) {
                                            alert('請填寫必填欄位');
                                            return;
                                        }

                                        const { error } = await insforge.database.from('referrals').insert([{
                                            title,
                                            description,
                                            referrer_name,
                                            referee_name,
                                            referrer_is_external,
                                            referee_is_external,
                                            referrer_story,
                                            referee_story,
                                            metrics: { amount: '洽談中', type: '專案合作' }
                                        }]);

                                        if (error) {
                                            alert('新增失敗: ' + error.message);
                                        } else {
                                            alert('新增成功！');
                                            fetchDashboardData();
                                            // Reset fields
                                            (document.getElementById('ref_title') as HTMLInputElement).value = '';
                                            (document.getElementById('ref_desc') as HTMLInputElement).value = '';
                                            (document.getElementById('ref_referrer') as HTMLInputElement).value = '';
                                            (document.getElementById('ref_referee') as HTMLInputElement).value = '';
                                            (document.getElementById('ref_referrer_external') as HTMLInputElement).checked = false;
                                            (document.getElementById('ref_referee_external') as HTMLInputElement).checked = false;
                                            (document.getElementById('ref_referrer_story') as HTMLTextAreaElement).value = '';
                                            (document.getElementById('ref_referee_story') as HTMLTextAreaElement).value = '';
                                        }
                                    }}
                                    className="px-6 py-3 bg-[#CF2030] text-white font-bold rounded-lg hover:bg-[#CF2030]/90 transition-colors flex items-center gap-2"
                                >
                                    <Plus size={18} /> 提交引薦案例
                                </button>
                            </div>
                        </div>

                        {/* Existing Referrals List */}
                        <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm md:p-6 overflow-hidden">
                            <h3 className="text-lg md:text-xl font-bold text-gray-950 mb-4 md:mb-6">引薦案例列表</h3>

                            {/* Mobile: Card Layout */}
                            <div className="md:hidden space-y-3">
                                {referrals.length === 0 ? (
                                    <div className="text-center text-gray-500 py-8">尚無引薦單資料</div>
                                ) : referrals.map(ref => (
                                    <div key={ref.id} className="bg-red-50/40 border border-red-100 rounded-xl p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="text-sm font-bold text-gray-950 line-clamp-1 flex-1 mr-2">{ref.title}</div>
                                            <button
                                                onClick={() => handleDeleteReferral(ref.id)}
                                                className="p-1.5 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors shrink-0"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                        <div className="text-xs text-gray-500 mb-2 line-clamp-1">{ref.description}</div>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-[#CF2030]">{ref.referrer_name} → {ref.referee_name}</span>
                                            <span className="text-gray-500">{new Date(ref.createdAt || ref.created_at).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop: Table Layout */}
                            <div className="hidden md:block overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="text-gray-500 text-sm border-b border-red-100">
                                            <th className="p-4">日期</th>
                                            <th className="p-4">引薦人</th>
                                            <th className="p-4">被引薦人</th>
                                            <th className="p-4">標題/內容</th>
                                            <th className="p-4 text-right">操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {referrals.length === 0 ? (
                                            <tr><td colSpan={5} className="p-8 text-center text-gray-500">尚無引薦單資料</td></tr>
                                        ) : referrals.map(ref => (
                                            <tr key={ref.id} className="border-b border-red-50 hover:bg-red-50/50 transition-colors">
                                                <td className="p-4 text-gray-600 text-sm">
                                                    {new Date(ref.createdAt || ref.created_at).toLocaleDateString()}
                                                </td>
                                                <td className="p-4 text-gray-950 font-medium">{ref.referrer_name}</td>
                                                <td className="p-4 text-gray-950 text-sm">{ref.referee_name}</td>
                                                <td className="p-4">
                                                    <div className="text-gray-950 text-sm">{ref.title}</div>
                                                    <div className="text-xs text-gray-500 line-clamp-1">{ref.description}</div>
                                                </td>
                                                <td className="p-4 text-right">
                                                    <button
                                                        onClick={() => handleDeleteReferral(ref.id)}
                                                        className="p-2 hover:bg-red-500/20 text-red-400 rounded-full transition-colors"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* FAQ TAB */}
                {activeTab === 'faq' && (
                    <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm md:p-6">
                        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-950">
                                <HelpCircle size={20} className="text-[#CF2030]" /> 首頁 Q&A 管理
                            </h3>
                            <button
                                onClick={() => setFaqs(prev => [...prev, { question: '', answer: '', sort_order: prev.length + 1, is_active: true }])}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#CF2030] px-4 py-2 text-sm font-bold text-white"
                            >
                                <Plus size={16} /> 新增 Q&A
                            </button>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={faq.id || index} className="rounded-2xl border border-gray-200 bg-white p-4">
                                    <div className="mb-3 grid gap-3 md:grid-cols-[90px_1fr_120px]">
                                        <input
                                            type="number"
                                            value={faq.sort_order}
                                            onChange={(event) => setFaqs(prev => prev.map((item, i) => i === index ? { ...item, sort_order: Number(event.target.value) } : item))}
                                            className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800"
                                            aria-label="排序"
                                        />
                                        <input
                                            type="text"
                                            value={faq.question}
                                            onChange={(event) => setFaqs(prev => prev.map((item, i) => i === index ? { ...item, question: event.target.value } : item))}
                                            placeholder="問題"
                                            className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800"
                                        />
                                        <label className="flex items-center gap-2 text-sm font-bold text-gray-600">
                                            <input
                                                type="checkbox"
                                                checked={faq.is_active}
                                                onChange={(event) => setFaqs(prev => prev.map((item, i) => i === index ? { ...item, is_active: event.target.checked } : item))}
                                            />
                                            啟用
                                        </label>
                                    </div>
                                    <textarea
                                        value={faq.answer}
                                        onChange={(event) => setFaqs(prev => prev.map((item, i) => i === index ? { ...item, answer: event.target.value } : item))}
                                        placeholder="答案"
                                        rows={4}
                                        className="mb-3 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800"
                                    />
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => handleDeleteFaq(faq, index)}
                                            className="rounded-lg bg-red-50 px-4 py-2 text-sm font-bold text-red-500"
                                        >
                                            刪除
                                        </button>
                                        <button
                                            onClick={() => handleSaveFaq(faq, index)}
                                            className="rounded-lg bg-[#CF2030] px-4 py-2 text-sm font-bold text-white"
                                        >
                                            儲存
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* AUDIT TAB */}
                {activeTab === 'audit' && (
                    <div className="rounded-2xl border border-red-100 bg-white p-4 shadow-sm md:p-6">
                        <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-950">
                            <FileText size={20} className="text-[#CF2030]" /> 詳細改動紀錄
                        </h3>
                        <div className="space-y-3">
                            {auditLogs.length === 0 ? (
                                <div className="rounded-xl bg-white p-8 text-center text-gray-500">尚無改動紀錄</div>
                            ) : auditLogs.map((log) => (
                                <details key={log.id} className="rounded-xl border border-gray-200 bg-white p-4">
                                    <summary className="cursor-pointer text-sm font-bold text-gray-800">
                                        <span className="mr-2 rounded-full bg-red-50 px-2 py-1 text-[#CF2030]">{log.action}</span>
                                        {log.table_name} #{log.record_id || '-'}
                                        <span className="ml-3 text-xs font-normal text-gray-500">
                                            {log.actor_email || 'system'} · {new Date(log.created_at).toLocaleString()}
                                        </span>
                                    </summary>
                                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                                        <div>
                                            <div className="mb-1 text-xs font-bold text-gray-500">修改前</div>
                                            <pre className="max-h-72 overflow-auto rounded-lg bg-gray-950 p-3 text-xs text-gray-100">{JSON.stringify(log.old_row, null, 2)}</pre>
                                        </div>
                                        <div>
                                            <div className="mb-1 text-xs font-bold text-gray-500">修改後</div>
                                            <pre className="max-h-72 overflow-auto rounded-lg bg-gray-950 p-3 text-xs text-gray-100">{JSON.stringify(log.new_row, null, 2)}</pre>
                                        </div>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                )}

                {/* SETTINGS TAB */}
                {
                    activeTab === 'settings' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Homepage Stats Editor */}
                            <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-950 mb-6 flex items-center gap-2">
                                    <Activity size={20} className="text-[#CF2030]" /> 首頁數據更新
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-gray-600 text-sm font-semibold mb-1">統計月份</label>
                                        <input
                                            type="month"
                                            value={homeStats.month}
                                            onChange={e => setHomeStats({ ...homeStats, month: e.target.value })}
                                            className="w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-900 focus:border-[#CF2030] focus:outline-none focus:ring-2 focus:ring-red-100"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 text-sm font-semibold mb-1">總引薦單數</label>
                                        <input
                                            type="number"
                                            value={homeStats.referral_count}
                                            onChange={e => setHomeStats({ ...homeStats, referral_count: Number(e.target.value) })}
                                            className="w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-900 focus:border-[#CF2030] focus:outline-none focus:ring-2 focus:ring-red-100"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 text-sm font-semibold mb-1">總交易價值 (元)</label>
                                        <input
                                            type="number"
                                            value={homeStats.referral_value}
                                            onChange={e => setHomeStats({ ...homeStats, referral_value: Number(e.target.value) })}
                                            className="w-full rounded-lg border border-gray-200 bg-white p-3 text-gray-900 focus:border-[#CF2030] focus:outline-none focus:ring-2 focus:ring-red-100"
                                        />
                                        <div className="text-right text-xs text-gray-500 mt-1">
                                            預覽: ${(homeStats.referral_value / 100000000).toFixed(2)} 億
                                        </div>
                                    </div>
                                    <button
                                        onClick={updateHomeStats}
                                        className="w-full py-3 bg-[#CF2030] text-white font-bold rounded-lg hover:bg-[#CF2030]/90 transition-colors flex justify-center items-center gap-2"
                                    >
                                        <Save size={18} /> 儲存數據
                                    </button>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-950 mb-6">系統公告</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    若需發布系統公告或暫停網站服務，請在此設定。目前功能開發中。
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Admin;
