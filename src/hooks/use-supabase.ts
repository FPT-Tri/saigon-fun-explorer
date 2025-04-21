
import { useToast } from "./use-toast";
import { LocationInsert } from "../types/supabase";
import { supabase } from "../lib/supabase";

export const useSupabase = () => {
  const { toast } = useToast();

  // Thêm vào bảng locations (activity)
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

  // Thêm vào bảng food_addresses
  const addFoodAddress = async (foodAddress: any) => {
    try {
      const { data, error } = await supabase
        .from('food_addresses')
        .insert(foodAddress)
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Thành công",
        description: "Đã thêm địa chỉ quán ăn mới",
      });

      return data;
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Không thể thêm địa chỉ quán ăn. Vui lòng thử lại.",
      });
      console.error('Error:', error);
      return null;
    }
  };

  return {
    addLocation,
    addFoodAddress,
    hasCredentials: () => true,
  };
};

