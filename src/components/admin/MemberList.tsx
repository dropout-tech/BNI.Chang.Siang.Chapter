import React, { useEffect, useState } from 'react';
import { Crown, Edit, RotateCcw, Save, Snowflake, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { insforge, isBackendConfigured } from '../../lib/insforge';

interface Member {
    id: string;
    name: string;
    industry?: string;
    company?: string;
    position?: string;
    title?: string;
    photo?: string;
    is_gold_badge?: boolean;
    frozen_at?: string | null;
    frozen_reason?: string | null;
    traffic_score?: number | null;
    traffic_level?: 'green' | 'yellow' | 'red' | null;
    latest_traffic_month?: string | null;
}

interface Props {
    members: Member[];
    loading: boolean;
    onRefresh: () => void;
    onToggleFrozen?: (member: Member) => void;
    onToggleGold?: (member: Member, checked: boolean) => void;
    onSaveTrafficScore?: (member: Member, score: number) => void;
}

const ITEMS_PER_PAGE = 10;

const getTrafficLevel = (score: number): 'green' | 'yellow' | 'red' => {
    if (score >= 70) return 'green';
    if (score >= 40) return 'yellow';
    return 'red';
};

const levelClassName: Record<'green' | 'yellow' | 'red', string> = {
    green: 'bg-green-100 text-green-700 border-green-200',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    red: 'bg-red-100 text-red-700 border-red-200',
};

const MemberList: React.FC<Props> = ({ members, loading, onRefresh, onToggleFrozen, onToggleGold, onSaveTrafficScore }) => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [scoreDrafts, setScoreDrafts] = useState<Record<string, number>>({});

    useEffect(() => {
        const nextDrafts: Record<string, number> = {};
        members.forEach((member) => {
            nextDrafts[member.id] = member.traffic_score ?? 0;
        });
        setScoreDrafts(nextDrafts);
    }, [members]);

    const totalPages = Math.max(1, Math.ceil(members.length / ITEMS_PER_PAGE));
    const startIdx = (page - 1) * ITEMS_PER_PAGE;
    const displayed = members.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    const handleDelete = async (id: string) => {
        if (!confirm('確定要刪除這位會員嗎？此動作無法復原。')) return;
        if (!isBackendConfigured) return;
        const { error } = await insforge.database.from('members').delete().eq('id', id);
        if (error) {
            alert('刪除失敗: ' + error.message);
        } else {
            alert('已刪除');
            onRefresh();
        }
    };

    if (displayed.length === 0) {
        return <div className="text-center text-gray-500 py-8">尚無會員資料</div>;
    }

    return (
        <div>
            {/* Mobile: Card Layout */}
            <div className="md:hidden space-y-3">
                {displayed.map(member => (
                    <div key={member.id} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 shrink-0">
                                {member.photo && <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />}
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="font-bold text-white truncate">{member.name}</div>
                                <div className="text-sm text-[#CF2030] truncate">{member.industry}</div>
                                <div className="text-xs text-gray-400 truncate">{member.company} {member.position || member.title ? `· ${member.position || member.title}` : ''}</div>
                            </div>
                            {member.is_gold_badge && <Crown size={18} className="text-yellow-500" />}
                        </div>
                        <div className="mb-3 grid grid-cols-2 gap-2 text-xs">
                            <label className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-gray-600">
                                <input
                                    type="checkbox"
                                    checked={member.is_gold_badge === true}
                                    onChange={(event) => onToggleGold?.(member, event.target.checked)}
                                />
                                金質獎章
                            </label>
                            <div className={`rounded-lg border px-3 py-2 text-center font-bold ${levelClassName[member.traffic_level || getTrafficLevel(scoreDrafts[member.id] ?? 0)]}`}>
                                紅綠燈 {scoreDrafts[member.id] ?? 0}
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => navigate(`/member-edit?id=${member.id}`)}
                                className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-red-50 hover:bg-[#CF2030]/20 text-[#CF2030] rounded-lg transition-colors text-sm font-medium"
                            >
                                <Edit size={14} /> 編輯
                            </button>
                            <button
                                onClick={() => handleDelete(member.id)}
                                className="flex items-center justify-center gap-1.5 py-2 px-4 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors text-sm font-medium"
                            >
                                <Trash2 size={14} />
                            </button>
                            <button
                                onClick={() => onToggleFrozen?.(member)}
                                className="flex items-center justify-center gap-1.5 py-2 px-4 bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 rounded-lg transition-colors text-sm font-medium"
                            >
                                {member.frozen_at ? <RotateCcw size={14} /> : <Snowflake size={14} />}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop: Table Layout */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-400 text-sm border-b border-gray-200">
                            <th className="p-4">會員</th>
                            <th className="p-4">產業/公司</th>
                            <th className="p-4">職稱</th>
                            <th className="p-4">金質</th>
                            <th className="p-4">紅綠燈</th>
                            <th className="p-4 text-right">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayed.map(member => (
                            <tr key={member.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 shrink-0">
                                        {member.photo && <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />}
                                    </div>
                                    <span className="font-medium text-white">{member.name}</span>
                                </td>
                                <td className="p-4 text-gray-300">
                                    <div className="text-white text-sm">{member.industry}</div>
                                    <div className="text-xs opacity-70">{member.company}</div>
                                </td>
                                <td className="p-4 text-gray-300 text-sm">
                                    {member.position || member.title}
                                </td>
                                <td className="p-4">
                                    <label className="inline-flex items-center gap-2 text-sm text-gray-300">
                                        <input
                                            type="checkbox"
                                            checked={member.is_gold_badge === true}
                                            onChange={(event) => onToggleGold?.(member, event.target.checked)}
                                            className="h-4 w-4 accent-[#CF2030]"
                                        />
                                        {member.is_gold_badge && <Crown size={16} className="text-yellow-500" />}
                                    </label>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="number"
                                            min={0}
                                            value={scoreDrafts[member.id] ?? 0}
                                            onChange={(event) => setScoreDrafts(prev => ({ ...prev, [member.id]: Number(event.target.value) }))}
                                            className="w-20 rounded-lg border border-gray-200 bg-white px-2 py-1 text-sm text-gray-800"
                                        />
                                        <span className={`rounded-full border px-2 py-1 text-xs font-bold ${levelClassName[member.traffic_level || getTrafficLevel(scoreDrafts[member.id] ?? 0)]}`}>
                                            {member.traffic_level || getTrafficLevel(scoreDrafts[member.id] ?? 0)}
                                        </span>
                                        <button
                                            onClick={() => onSaveTrafficScore?.(member, scoreDrafts[member.id] ?? 0)}
                                            className="rounded-full bg-[#CF2030] p-1.5 text-white"
                                            title="儲存紅綠燈分數"
                                        >
                                            <Save size={14} />
                                        </button>
                                    </div>
                                    {member.latest_traffic_month && (
                                        <div className="mt-1 text-xs text-gray-500">{member.latest_traffic_month}</div>
                                    )}
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex gap-2 justify-end">
                                        <button
                                            onClick={() => navigate(`/member-edit?id=${member.id}`)}
                                            className="px-3 py-1 bg-red-50 hover:bg-[#CF2030]/20 text-[#CF2030] rounded-full transition-colors text-sm flex items-center gap-1"
                                        >
                                            <Edit size={14} /> 編輯
                                        </button>
                                        <button
                                            onClick={() => handleDelete(member.id)}
                                            className="px-3 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-full transition-colors text-sm flex items-center gap-1"
                                        >
                                            <Trash2 size={14} /> 刪除
                                        </button>
                                        <button
                                            onClick={() => onToggleFrozen?.(member)}
                                            className="px-3 py-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 rounded-full transition-colors text-sm flex items-center gap-1"
                                        >
                                            {member.frozen_at ? <RotateCcw size={14} /> : <Snowflake size={14} />}
                                            {member.frozen_at ? '解凍' : '冷凍'}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100 text-sm text-gray-400">
                <span>第 {page} / {totalPages} 頁 · 共 {members.length} 筆</span>
                <div className="flex gap-2">
                    <button
                        onClick={() => setPage(p => Math.max(p - 1, 1))}
                        disabled={page === 1}
                        className="flex items-center gap-1 px-3 py-1.5 bg-black/30 rounded-lg disabled:opacity-30 hover:bg-gray-100 transition-colors"
                    >
                        <ChevronLeft size={14} /> 上一頁
                    </button>
                    <button
                        onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                        disabled={page === totalPages}
                        className="flex items-center gap-1 px-3 py-1.5 bg-black/30 rounded-lg disabled:opacity-30 hover:bg-gray-100 transition-colors"
                    >
                        下一頁 <ChevronRight size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MemberList;
