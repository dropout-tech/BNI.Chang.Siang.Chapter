import React, { createContext, useContext, useEffect, useState } from 'react';
import { insforge, isBackendConfigured } from '../lib/insforge';

interface User {
    id: string;
    email: string;
    profile?: { name?: string; avatar_url?: string };
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isBackendConfigured) {
            setLoading(false);
            return;
        }

        const init = async () => {
            try {
                const { data, error } = await insforge.auth.getCurrentUser();
                if (!error && data?.user) {
                    setUser({
                        id: data.user.id,
                        email: data.user.email,
                        profile: data.user.profile,
                    });
                }
            } catch {
                // Not logged in
            } finally {
                setLoading(false);
            }
        };

        init();
    }, []);

    const signOut = async () => {
        if (isBackendConfigured) {
            await insforge.auth.signOut();
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, signOut }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
