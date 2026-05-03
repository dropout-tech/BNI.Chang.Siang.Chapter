import React from 'react';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    diff: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, diff }) => (
    <div className="rounded-xl border border-red-100 bg-white p-4 shadow-sm shadow-red-100/50 md:rounded-2xl md:p-6">
        <div className="flex justify-between items-start mb-2 md:mb-4">
            <div className="text-xs font-semibold leading-tight text-gray-500 md:text-sm">{title}</div>
            <div className="ml-2 shrink-0 rounded-lg bg-red-50 p-1.5 md:p-2">{icon}</div>
        </div>
        <div className="mb-1 truncate text-lg font-bold text-gray-950 md:text-3xl">{value}</div>
        <div className="truncate text-[10px] font-semibold text-[#CF2030] md:text-xs">{diff}</div>
    </div>
);

export default StatsCard;
