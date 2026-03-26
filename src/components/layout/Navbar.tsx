import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LogIn, LogOut, User, Shield, Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { siteConfig } from '../../config/site.config';
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
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const checkAdmin = async () => {
            if (!user || !isSupabaseConfigured) { setIsAdmin(false); return; }
            const { data } = await supabase.from('members').select('is_admin').eq('user_id', user.id).single();
            setIsAdmin(data?.is_admin === true);
        };
        checkAdmin();
    }, [user]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A1628]/95 backdrop-blur-md py-3 shadow-lg border-b border-[#D4AF37]/10' : 'bg-gradient-to-b from-black/60 to-transparent py-5'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* BNI Logo */}
                <NavLink to="/" className="flex items-center gap-3 group shrink-0">
                    <img
                        src={assetUrl('/images/assets/logo/bni-logo-new.png')}
                        alt="BNI"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                    <div className="hidden sm:block">
                        <div className="text-white font-bold text-sm leading-tight">長翔名人堂</div>
                        <div className="text-[#D4AF37] text-xs">白金分會</div>
                    </div>
                </NavLink>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md ${isActive ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-[#D4AF37]'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {/* CTA */}
                    <a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer"
                        className="ml-3 px-5 py-2 text-sm font-semibold text-[#0A1628] brushed-gold rounded-full hover:opacity-90 transition-opacity">
                        預約參訪
                    </a>

                    {/* Auth */}
                    {user ? (
                        <div className="flex items-center gap-2 ml-2">
                            {isAdmin && <NavLink to="/admin" className="text-[#D4AF37] hover:text-white transition-colors" title="管理後台"><Shield size={18} /></NavLink>}
                            <NavLink to="/member-edit" className="text-gray-400 hover:text-[#D4AF37] transition-colors" title="編輯資料"><User size={18} /></NavLink>
                            <button onClick={async () => { await signOut(); navigate('/'); }} className="text-gray-400 hover:text-red-400 transition-colors" title="登出"><LogOut size={18} /></button>
                        </div>
                    ) : (
                        <NavLink to="/login" className="ml-2 text-gray-400 hover:text-[#D4AF37] transition-colors"><LogIn size={18} /></NavLink>
                    )}
                </div>

                {/* Mobile hamburger */}
                <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-[#0A1628]/98 backdrop-blur-md border-t border-[#D4AF37]/10 px-4 py-4 space-y-1">
                    {navLinks.map(link => (
                        <NavLink key={link.path} to={link.path} onClick={() => setMobileOpen(false)}
                            className={({ isActive }) => `block px-4 py-3 rounded-lg text-sm ${isActive ? 'text-[#D4AF37] bg-[#D4AF37]/5' : 'text-gray-300 hover:text-[#D4AF37]'}`}>
                            {link.name}
                        </NavLink>
                    ))}
                    <a href="https://www.facebook.com/BNI.Chang.Siang.Chapter/" target="_blank" rel="noopener noreferrer"
                        className="block px-4 py-3 mt-2 text-center font-semibold text-[#0A1628] brushed-gold rounded-full" onClick={() => setMobileOpen(false)}>
                        預約參訪
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
