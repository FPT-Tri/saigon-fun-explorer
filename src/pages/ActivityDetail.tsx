
import { useParams, useNavigate } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";
import Layout from "../components/Layout";
import LocationCard from "../components/LocationCard";
import AIAssistant from "../components/AIAssistant";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { useActivityLocationsSupabase } from "../hooks/useActivityLocationsSupabase";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ActivityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getActivityById, getActivityLocations } = useDatabase();

  const activityId = parseInt(id || "0");
  const activity = getActivityById(activityId);

  // Lấy activity locations từ local (sample data)
  const sampleLocations = getActivityLocations(activityId);

  // Lấy activity locations từ Supabase
  const { data: supabaseLocations, isLoading, error } = useActivityLocationsSupabase(activityId);

  if (!activity) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Không tìm thấy hoạt động</h2>
          <button 
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
          >
            Quay về trang chủ
          </button>
        </div>
      </Layout>
    );
  }

  // Gộp 2 nguồn dữ liệu lại (database nằm phía trên)
  const allLocations = [
    ...(supabaseLocations || []),
    ...sampleLocations,
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-600 hover:text-primary mb-6"
        >
          <ArrowLeft size={18} className="mr-1" />
          <span>Quay lại</span>
        </button>

        <div className="max-w-screen-xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img 
                src={activity.image} 
                alt={activity.name} 
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{activity.name}</h1>
              <p className="text-gray-600 text-lg mb-6">{activity.description}</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Địa điểm {activity.name}</h2>
            
            {isLoading ? (
              <div className="text-gray-500">Đang tải địa điểm từ database...</div>
            ) : error ? (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Lỗi khi tải địa điểm từ database. Chỉ hiển thị dữ liệu mẫu.
                </AlertDescription>
              </Alert>
            ) : null}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {allLocations.length > 0 ? (
                allLocations.map((location) => (
                  <LocationCard 
                    key={location.id + "-" + (location.phone || "")}
                    name={location.name}
                    address={location.address}
                    image={location.image}
                    phone={location.phone}
                  />
                ))
              ) : (
                <div className="col-span-3 text-center py-8 text-gray-500">
                  Không có địa điểm nào được tìm thấy cho hoạt động này.
                </div>
              )}
            </div>

            <AIAssistant type="activity" itemName={activity.name} />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ActivityDetail;
