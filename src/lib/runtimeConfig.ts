type RuntimeConfig = {
    INSFORGE_URL?: string;
    INSFORGE_ANON_KEY?: string;
};

declare global {
    interface Window {
        __APP_CONFIG__?: RuntimeConfig;
    }
}

export function getRuntimeConfig(): RuntimeConfig {
    if (typeof window === 'undefined') return {};
    return window.__APP_CONFIG__ ?? {};
}

