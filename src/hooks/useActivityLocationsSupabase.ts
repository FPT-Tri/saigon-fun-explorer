
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { ActivityLocation } from "../types/database";
import { getActivityLocationsFromSupabase } from "../lib/supabase";

export const useActivityLocationsSupabase = (activityId: number) => {
  return useQuery({
    queryKey: ["supabase-activity-locations", activityId],
    queryFn: async (): Promise<ActivityLocation[]> => {
      try {
        return await getActivityLocationsFromSupabase(activityId);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ Supabase:", error);
        toast.error("Không thể tải địa điểm cho hoạt động này", {
          description: "Vui lòng kiểm tra kết nối mạng và thử lại sau",
        });
        return [];
      }
    },
    refetchOnWindowFocus: false,
    retry: false, // Không thử lại nếu có lỗi
  });
};
