import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { insforge, isBackendConfigured } from '../lib/insforge';
import { AuthContext, type AuthUser } from './auth-context';

/** InsForge SDK user（必要欄位） */
function mapSdkUser(u: {
    id: string;
    email: string;
    profile?: { name?: string; avatar_url?: string } | null;
}): AuthUser {
    return {
        id: u.id,
        email: u.email,
        profile: u.profile ?? undefined,
    };
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);

    const refreshUser = useCallback(async () => {
        if (!isBackendConfigured) {
            setUser(null);
            return;
        }
        try {
            const { data, error } = await insforge.auth.getCurrentUser();
            if (!error && data?.user) {
                setUser(mapSdkUser(data.user));
            } else {
                setUser(null);
            }
        } catch {
            setUser(null);
        }
    }, []);

    useEffect(() => {
        if (!isBackendConfigured) {
            setLoading(false);
            return;
        }

        let cancelled = false;
        const init = async () => {
            try {
                await refreshUser();
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        init();
        return () => {
            cancelled = true;
        };
    }, [refreshUser]);

    const signOut = useCallback(async () => {
        if (isBackendConfigured) {
            await insforge.auth.signOut();
            setUser(null);
        }
    }, []);

    const value = useMemo(
        () => ({ user, loading, signOut, refreshUser }),
        [user, loading, signOut, refreshUser],
    );

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
