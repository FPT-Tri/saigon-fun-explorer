
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { FoodLocation } from "../types/database";
import { getFoodLocationsFromSupabase } from "../lib/supabase";

export const useFoodLocationsSupabase = (foodId: number, districtId: number) => {
  return useQuery({
    queryKey: ["supabase-food-locations", foodId, districtId],
    queryFn: async (): Promise<FoodLocation[]> => {
      try {
        return await getFoodLocationsFromSupabase({ foodId, districtId });
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ Supabase:", error);
        toast.error("Không thể tải địa điểm cho món ăn này", {
          description: "Vui lòng kiểm tra kết nối mạng và thử lại sau",
        });
        return [];
      }
    },
    refetchOnWindowFocus: false,
    retry: false, // Không thử lại nếu có lỗi
  });
};
