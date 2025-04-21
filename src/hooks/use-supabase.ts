
import { useToast } from "./use-toast";
import { LocationInsert } from "../types/supabase";
import { supabase } from "../lib/supabase";

export const useSupabase = () => {
  const { toast } = useToast();

  const addLocation = async (location: LocationInsert) => {
    try {
      // Quyết định bảng dựa trên loại địa điểm
      const tableName = location.food_id ? 'food_locations' : 'locations';
      
      const { data, error } = await supabase
        .from(tableName)
        .insert(location)
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Thành công",
        description: "Đã thêm địa điểm mới",
      });

      return data;
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Không thể thêm địa điểm. Vui lòng thử lại.",
      });
      console.error('Error:', error);
      return null;
    }
  };

  return {
    addLocation,
    hasCredentials: () => true, // Luôn trả về true vì chúng ta đã cung cấp thông tin xác thực trực tiếp
  };
};
