
import { createClient } from '@supabase/supabase-js';
import { Activity, ActivityLocation, Food, FoodLocation, District } from '../types/database';

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

// Các hàm truy vấn dữ liệu từ Supabase
export const getActivitiesFromSupabase = async (): Promise<Activity[]> => {
  const { data, error } = await supabase
    .from('activities')
    .select('*');
  
  if (error) {
    console.error('Lỗi khi lấy activities:', error);
    return [];
  }
  
  return data || [];
};

export const getActivityLocationsFromSupabase = async (activityId?: number): Promise<ActivityLocation[]> => {
  let query = supabase
    .from('locations')
    .select('*');
  
  if (activityId) {
    query = query.eq('activity_id', activityId);
  } else {
    query = query.not('activity_id', 'is', null);
  }
  
  const { data, error } = await query;
  
  if (error) {
    console.error('Lỗi khi lấy activity locations:', error);
    return [];
  }
  
  // Map các trường cho phù hợp với kiểu ActivityLocation
  return (data || []).map((item) => ({
    id: item.id,
    activityId: item.activity_id,
    name: item.name,
    address: item.address,
    image: item.image,
    phone: item.phone,
    description: item.description,
  }));
};

export const getFoodsFromSupabase = async (): Promise<Food[]> => {
  const { data, error } = await supabase
    .from('foods')
    .select('*');
  
  if (error) {
    console.error('Lỗi khi lấy foods:', error);
    return [];
  }
  
  return data || [];
};

export const getFoodLocationsFromSupabase = async (params?: { foodId?: number, districtId?: number }): Promise<FoodLocation[]> => {
  let query = supabase
    .from('food_locations')
    .select('*');
  
  if (params?.foodId) {
    query = query.eq('food_id', params.foodId);
  }
  
  if (params?.districtId) {
    query = query.eq('district_id', params.districtId);
  }
  
  const { data, error } = await query;
  
  if (error) {
    console.error('Lỗi khi lấy food locations:', error);
    return [];
  }
  
  // Map các trường cho phù hợp với kiểu FoodLocation
  return (data || []).map((item) => ({
    id: item.id,
    foodId: item.food_id,
    districtId: item.district_id,
    name: item.name,
    address: item.address,
    image: item.image,
    phone: item.phone,
    description: item.description,
  }));
};

export const getDistrictsFromSupabase = async (): Promise<District[]> => {
  const { data, error } = await supabase
    .from('districts')
    .select('*');
  
  if (error) {
    console.error('Lỗi khi lấy districts:', error);
    return [];
  }
  
  return data || [];
};
