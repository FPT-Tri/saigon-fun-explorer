
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import { ActivityLocation } from "../types/database";

export const useActivityLocationsSupabase = (activityId: number) => {
  return useQuery({
    queryKey: ["supabase-activity-locations", activityId],
    queryFn: async (): Promise<ActivityLocation[]> => {
      const { data, error } = await supabase
        .from("locations")
        .select("*")
        .eq("activity_id", activityId);

      if (error) throw error;

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
    },
    refetchOnWindowFocus: false,
  });
};
