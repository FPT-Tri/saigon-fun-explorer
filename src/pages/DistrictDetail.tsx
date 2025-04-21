
import { useParams, useNavigate } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";
import Layout from "../components/Layout";
import FoodCard from "../components/FoodCard";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { AddLocationDialog } from "../components/AddLocationDialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { getFoodLocationsFromSupabase } from "../lib/supabase";

const DistrictDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getDistrictById, getFoodById } = useDatabase();

  const districtId = parseInt(id || "0");
  const district = getDistrictById(districtId);

  // Lấy food locations cho quận từ Supabase
  const { data: districtFoods, isLoading, error } = useQuery({
    queryKey: ["district-foods", districtId],
    queryFn: async () => {
      if (!districtId) return [];
      return await getFoodLocationsFromSupabase({ districtId });
    },
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-screen-xl mx-auto">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-gray-600 hover:text-primary mb-6"
          >
            <ArrowLeft size={18} className="mr-1" />
            <span>Quay lại</span>
          </button>

          {district && (
            <>
              <section className="mb-12">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                      Ẩm thực {district.name}
                    </h1>
                    <p className="text-gray-600 text-lg">
                      Khám phá ẩm thực đặc sắc tại {district.name}
                    </p>
                  </div>
                  <AddLocationDialog type="food" />
                </div>

                {isLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="rounded-lg overflow-hidden shadow-md">
                        <Skeleton className="h-48 w-full" />
                        <div className="p-4">
                          <Skeleton className="h-6 w-3/4 mb-2" />
                          <Skeleton className="h-4 w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : error ? (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Lỗi khi tải danh sách món ăn. Vui lòng thử lại sau.
                    </AlertDescription>
                  </Alert>
                ) : districtFoods && districtFoods.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {districtFoods.map((foodLocation) => {
                      const food = getFoodById(foodLocation.foodId);
                      if (!food) return null;
                      return (
                        <FoodCard key={foodLocation.id} food={food} districtId={district.id} />
                      );
                    })}
                  </div>
                ) : (
                  <Alert className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Không có món ăn nào được tìm thấy cho quận này.
                    </AlertDescription>
                  </Alert>
                )}
              </section>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DistrictDetail;
