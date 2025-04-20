
import { createClient } from '@supabase/supabase-js';

// Using VITE_ prefix for Vite environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://douhedaahxmbeyqxiezv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvdWhlZGFhaHhtYmV5cXhpZXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMjQ2ODMsImV4cCI6MjA2MDcwMDY4M30.Cdutq9_oHyHqCuJsTLqHq_3eyWyeIG2bFk5e5x4KWHY';

// Create a client with credentials
export const supabase = createClient(
  supabaseUrl, 
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
    }
  }
);

// Export function to check if credentials are available
export const hasSupabaseCredentials = () => {
  return Boolean(supabaseUrl && supabaseAnonKey);
};
