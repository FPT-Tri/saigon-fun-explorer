
import { useToast } from "./use-toast";
import { LocationInsert } from "../types/supabase";
import { supabase } from "../lib/supabase";

export const useSupabase = () => {
  const { toast } = useToast();

  const addLocation = async (location: LocationInsert) => {
    try {
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
  };
};
