
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import { ActivityLocation } from "../types/database";
import { toast } from "sonner";

export const useActivityLocationsSupabase = (activityId: number) => {
  return useQuery({
    queryKey: ["supabase-activity-locations", activityId],
    queryFn: async (): Promise<ActivityLocation[]> => {
      try {
        const { data, error } = await supabase
          .from("locations")
          .select("*")
          .eq("activity_id", activityId);

        if (error) {
          // Kiểm tra nếu lỗi là do bảng không tồn tại
          if (error.code === "42P01") {
            console.log("Bảng locations chưa được tạo trong Supabase");
            toast.error("Bảng locations chưa được tạo trong Supabase", {
              description: "Vui lòng tạo bảng locations trong Supabase database của bạn",
            });
            return [];
          }
          throw error;
        }

        // Map các trường cho phù hợp với kiểu ActivityLocation
        if (data) {
          return data.map((item) => ({
            id: item.id,
            activityId: item.activity_id,
            name: item.name,
            address: item.address,
            image: item.image,
            phone: item.phone,
            description: item.description,
          }));
        }
        return [];
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ Supabase:", error);
        return [];
      }
    },
    refetchOnWindowFocus: false,
    retry: false, // Không thử lại nếu có lỗi
  });
};
