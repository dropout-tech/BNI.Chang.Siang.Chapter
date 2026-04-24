import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Users, TrendingUp, Calendar } from 'lucide-react';

const tabs = [
    { icon: Home, label: '首頁', path: '/' },
    { icon: BookOpen, label: 'BNI', path: '/about-bni' },
    { icon: Users, label: '夥伴', path: '/members' },
    { icon: TrendingUp, label: '實績', path: '/referrals' },
    { icon: Calendar, label: '活動', path: '/events' },
];

const BottomNav: React.FC = () => (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 pb-safe">
        <div className="flex justify-around items-center h-16">
            {tabs.map(tab => (
                <NavLink key={tab.path} to={tab.path}
                    className={({ isActive }) => `flex flex-col items-center justify-center gap-0.5 w-full h-full transition-colors relative ${isActive ? 'text-[#CF2030]' : 'text-gray-400'}`}>
                    {({ isActive }) => (
                        <>
                            {isActive && <span className="absolute top-0 w-8 h-[3px] bg-[#CF2030] rounded-b-full" />}
                            <tab.icon size={20} />
                            <span className="text-[10px] font-medium">{tab.label}</span>
                        </>
                    )}
                </NavLink>
            ))}
        </div>
    </div>
);

export default BottomNav;
