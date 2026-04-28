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
    refreshUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue>({
    user: null,
    loading: true,
    signOut: async () => {},
    refreshUser: async () => {},
});

export function useAuth(): AuthContextValue {
    return useContext(AuthContext);
}
