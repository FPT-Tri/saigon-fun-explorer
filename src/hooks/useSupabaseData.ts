
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { 
  getActivitiesFromSupabase,
  getActivityLocationsFromSupabase,
  getFoodsFromSupabase,
  getFoodLocationsFromSupabase,
  getDistrictsFromSupabase
} from "../lib/supabase";
import { Activity, ActivityLocation, District, Food, FoodLocation } from "../types/database";

export const useSupabaseData = () => {
  // Lấy danh sách activities
  const activitiesQuery = useQuery({
    queryKey: ["supabase-activities"],
    queryFn: async (): Promise<Activity[]> => {
      try {
        return await getActivitiesFromSupabase();
      } catch (error) {
        console.error("Lỗi khi lấy activities:", error);
        toast.error("Không thể tải danh sách hoạt động");
        return [];
      }
    },
  });

  // Lấy danh sách activity locations
  const activityLocationsQuery = useQuery({
    queryKey: ["supabase-all-activity-locations"],
    queryFn: async (): Promise<ActivityLocation[]> => {
      try {
        return await getActivityLocationsFromSupabase();
      } catch (error) {
        console.error("Lỗi khi lấy activity locations:", error);
        return [];
      }
    },
  });

  // Lấy danh sách foods
  const foodsQuery = useQuery({
    queryKey: ["supabase-foods"],
    queryFn: async (): Promise<Food[]> => {
      try {
        return await getFoodsFromSupabase();
      } catch (error) {
        console.error("Lỗi khi lấy foods:", error);
        toast.error("Không thể tải danh sách món ăn");
        return [];
      }
    },
  });

  // Lấy danh sách food locations
  const foodLocationsQuery = useQuery({
    queryKey: ["supabase-all-food-locations"],
    queryFn: async (): Promise<FoodLocation[]> => {
      try {
        return await getFoodLocationsFromSupabase();
      } catch (error) {
        console.error("Lỗi khi lấy food locations:", error);
        return [];
      }
    },
  });

  // Lấy danh sách districts
  const districtsQuery = useQuery({
    queryKey: ["supabase-districts"],
    queryFn: async (): Promise<District[]> => {
      try {
        return await getDistrictsFromSupabase();
      } catch (error) {
        console.error("Lỗi khi lấy districts:", error);
        toast.error("Không thể tải danh sách quận");
        return [];
      }
    },
  });

  return {
    // Activities data
    activities: activitiesQuery.data || [],
    isLoadingActivities: activitiesQuery.isLoading,
    errorActivities: activitiesQuery.error,
    
    // Activity locations data
    activityLocations: activityLocationsQuery.data || [],
    isLoadingActivityLocations: activityLocationsQuery.isLoading,
    errorActivityLocations: activityLocationsQuery.error,
    
    // Foods data
    foods: foodsQuery.data || [],
    isLoadingFoods: foodsQuery.isLoading,
    errorFoods: foodsQuery.error,
    
    // Food locations data
    foodLocations: foodLocationsQuery.data || [],
    isLoadingFoodLocations: foodLocationsQuery.isLoading,
    errorFoodLocations: foodLocationsQuery.error,
    
    // Districts data
    districts: districtsQuery.data || [],
    isLoadingDistricts: districtsQuery.isLoading,
    errorDistricts: districtsQuery.error,
    
    // Loading state for all data
    isLoading: 
      activitiesQuery.isLoading || 
      activityLocationsQuery.isLoading || 
      foodsQuery.isLoading ||
      foodLocationsQuery.isLoading ||
      districtsQuery.isLoading,
  };
};
