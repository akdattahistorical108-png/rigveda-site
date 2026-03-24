import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://your-project-ref.supabase.co';
const supabaseKey = 'your-anon-key';
export const supabase = createClient(supabaseUrl, supabaseKey);

// Mantra interface
export interface Mantra {
    id: number;
    text: string;
    author: string;
    created_at: string; // ISO string
}