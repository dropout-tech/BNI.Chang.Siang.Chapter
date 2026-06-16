import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { insforge, isBackendConfigured } from '../lib/insforge';

import { AuthContext, type AuthUser } from './auth-context';



const AUTH_TIMEOUT_MS = 7000;



/** OAuth／信箱驗證／重設密碼回跳後，給 SDK 多幾次機會完成 session（見 docs.insforge.dev insforge_code） */

async function syncSessionWithRetries(refresh: () => Promise<boolean>): Promise<void> {

    if (typeof window === 'undefined') return;



    const search = window.location.search;

    const wantsPickup =

        search.includes('insforge_code') ||

        search.includes('insforge_status') ||

        search.includes('token=');



    const maxAttempts = wantsPickup ? 6 : 2;

    for (let i = 0; i < maxAttempts; i++) {

        const ok = await refresh();

        if (ok) return;

        await new Promise((r) => setTimeout(r, 80 + i * 70));

    }

}



/** InsForge SDK user（必要欄位）；無 email 時無法與本站會員／後台邏輯對齊 */

function mapSdkUser(u: {

    id: string;

    email?: string | null;

    profile?: { name?: string; avatar_url?: string } | null;

}): AuthUser | null {

    const email = (u.email ?? '').trim();

    if (!email) return null;

    return {

        id: u.id,

        email,

        profile: u.profile ?? undefined,

    };

}



export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [user, setUser] = useState<AuthUser | null>(null);

    const [loading, setLoading] = useState(true);



    const refreshUser = useCallback(async (): Promise<boolean> => {

        if (!isBackendConfigured) {

            setUser(null);

            return false;

        }

        try {

            const { data, error } = await Promise.race([

                insforge.auth.getCurrentUser(),

                new Promise<{ data: null; error: Error }>((resolve) => {

                    window.setTimeout(

                        () => resolve({ data: null, error: new Error('Auth request timed out') }),

                        AUTH_TIMEOUT_MS,

                    );

                }),

            ]);

            if (!error && data?.user) {

                const mapped = mapSdkUser(data.user);

                if (mapped) {

                    setUser(mapped);

                    return true;

                }

            }

            setUser(null);

            return false;

        } catch {

            setUser(null);

            return false;

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

                await syncSessionWithRetries(refreshUser);

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



    /* 須盡早掛載 Router，OAuth 回跳時 SDK 才能在首次請求時交換 insforge_code */

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};


