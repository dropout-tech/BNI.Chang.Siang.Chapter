import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

let _supabase: SupabaseClient | null = null;

if (isSupabaseConfigured) {
    _supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
    console.warn('⚠️ Supabase 環境變數未設定，網站以 Demo 模式運行（無後端資料）');
}

export const supabase = _supabase as SupabaseClient;
