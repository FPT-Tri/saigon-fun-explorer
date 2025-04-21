
import { createClient } from '@supabase/supabase-js';

// Sử dụng thông tin xác thực trực tiếp
const supabaseUrl = 'https://douhedaahxmbeyqxiezv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvdWhlZGFhaHhtYmV5cXhpZXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMjQ2ODMsImV4cCI6MjA2MDcwMDY4M30.Cdutq9_oHyHqCuJsTLqHq_3eyWyeIG2bFk5e5x4KWHY';

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
  return true; // Luôn trả về true vì chúng ta đã cung cấp thông tin xác thực trực tiếp
};
