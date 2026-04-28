import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LogIn, LogOut, User, Shield, Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/auth-context';
import { insforge, isBackendConfigured } from '../../lib/insforge';
import { assetUrl } from '../../lib/assets';

const navLinks = [
    { name: '什麼是 BNI', path: '/about-bni' },
    { name: '關於長翔', path: '/about-us' },
    { name: '長翔夥伴', path: '/members' },
    { name: '引薦實績', path: '/referrals' },
    { name: '活動紀錄', path: '/events' },
];

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();
    const { user, signOut } = useAuth();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!user || !isBackendConfigured) { setIsAdmin(false); return; }
        insforge.database.from('members').select('is_admin').eq('user_id', user.id).single().then(({ data }) => setIsAdmin(data?.is_admin === true));
    }, [user]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
            {/* BNI Red top line */}
            <div className="h-1 bg-[#CF2030]" />

            <div className="container mx-auto px-4 flex justify-between items-center h-16 md:h-20">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-3 shrink-0">
                    <img src={assetUrl('/images/assets/logo/bni-logo-new.png')} alt="BNI" className="h-10 md:h-12 w-auto" />
                    <div className="hidden sm:block border-l border-gray-200 pl-3">
                        <div className="text-[#333] font-bold text-sm leading-tight">長翔名人堂</div>
                        <div className="text-[#CF2030] text-xs font-medium">白金分會</div>
                    </div>
                </NavLink>

                {/* Desktop */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map(link => (
                        <NavLink key={link.path} to={link.path}
                            className={({ isActive }) => `px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'text-[#CF2030] bg-red-50' : 'text-gray-600 hover:text-[#CF2030] hover:bg-red-50/50'}`}>
                            {link.name}
                        </NavLink>
                    ))}
                    <a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer"
                        className="ml-3 px-5 py-2 text-sm font-bold text-white bg-[#CF2030] rounded-full hover:bg-[#A51926] transition-colors">
                        預約參訪
                    </a>
                    {user ? (
                        <div className="flex items-center gap-2 ml-2">
                            {isAdmin && <NavLink to="/admin" className="text-[#CF2030]" title="管理後台"><Shield size={18} /></NavLink>}
                            <NavLink to="/member-edit" className="text-gray-400 hover:text-[#CF2030]"><User size={18} /></NavLink>
                            <button onClick={async () => { await signOut(); navigate('/'); }} className="text-gray-400 hover:text-red-500"><LogOut size={18} /></button>
                        </div>
                    ) : (
                        <NavLink to="/login" className="ml-2 text-gray-400 hover:text-[#CF2030]"><LogIn size={18} /></NavLink>
                    )}
                </div>

                <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-gray-600 p-2">
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg">
                    {navLinks.map(link => (
                        <NavLink key={link.path} to={link.path} onClick={() => setMobileOpen(false)}
                            className={({ isActive }) => `block px-4 py-3 rounded-lg text-sm font-medium ${isActive ? 'text-[#CF2030] bg-red-50' : 'text-gray-600 hover:bg-gray-50'}`}>
                            {link.name}
                        </NavLink>
                    ))}
                    <a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer"
                        className="block px-4 py-3 mt-2 text-center font-bold text-white bg-[#CF2030] rounded-full" onClick={() => setMobileOpen(false)}>
                        預約參訪
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
