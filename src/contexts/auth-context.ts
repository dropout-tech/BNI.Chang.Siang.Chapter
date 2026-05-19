import { createContext, useContext } from 'react';

export interface AuthUser {
    id: string;
    email: string;
    profile?: { name?: string; avatar_url?: string };
}

export interface AuthContextValue {
    user: AuthUser | null;
    loading: boolean;
    signOut: () => Promise<void>;
    /** 從伺服器同步使用者；成功取得已登入使用者時為 true */
    refreshUser: () => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextValue>({
    user: null,
    loading: true,
    signOut: async () => {},
    refreshUser: async () => false,
});

export function useAuth(): AuthContextValue {
    return useContext(AuthContext);
}
