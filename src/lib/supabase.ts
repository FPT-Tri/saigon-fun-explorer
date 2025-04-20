
import { createClient } from '@supabase/supabase-js';

// Get environment variables or use empty strings as fallback
// (this will be replaced with actual values from Supabase integration)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a client with or without credentials
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
