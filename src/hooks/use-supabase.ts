
import { useToast } from "./use-toast";
import { LocationInsert } from "../types/supabase";
import { supabase, hasSupabaseCredentials } from "../lib/supabase";

export const useSupabase = () => {
  const { toast } = useToast();

  const addLocation = async (location: LocationInsert) => {
    try {
      // Check if Supabase credentials are available
      if (!hasSupabaseCredentials()) {
        toast({
          variant: "destructive",
          title: "Cấu hình không đúng",
          description: "Vui lòng thiết lập thông tin Supabase URL và Anon Key trong cài đặt dự án.",
        });
        return null;
      }

      const { data, error } = await supabase
        .from('locations')
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
    hasCredentials: hasSupabaseCredentials,
  };
};
