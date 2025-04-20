
import { createClient } from '@supabase/supabase-js';

// Sử dụng biến môi trường với tiền tố VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase credentials');
}

// Tạo client với thông tin xác thực
export const supabase = createClient(
  supabaseUrl, 
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
    }
  }
);

// Hàm kiểm tra xem có thông tin xác thực hay không
export const hasSupabaseCredentials = () => {
  return Boolean(supabaseUrl && supabaseAnonKey);
};

