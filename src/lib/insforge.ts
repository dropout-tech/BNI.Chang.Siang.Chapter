import { createClient } from '@insforge/sdk';
import { getRuntimeConfig } from './runtimeConfig';

const runtimeConfig = getRuntimeConfig();
const baseUrl = import.meta.env.VITE_INSFORGE_URL || runtimeConfig.INSFORGE_URL;
const anonKey = import.meta.env.VITE_INSFORGE_ANON_KEY || runtimeConfig.INSFORGE_ANON_KEY;

export const isBackendConfigured = !!(baseUrl && anonKey);

let _insforge: ReturnType<typeof createClient> | null = null;

if (isBackendConfigured) {
    _insforge = createClient({ baseUrl, anonKey });
} else {
    console.warn('⚠️ InsForge 環境變數未設定，網站以 Demo 模式運行');
}

export const insforge = _insforge!;
