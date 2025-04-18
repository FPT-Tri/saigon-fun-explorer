
import { useParams, useNavigate } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";
import Layout from "../components/Layout";
import FoodCard from "../components/FoodCard";
import { ArrowLeft } from "lucide-react";

const DistrictDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getDistrictById, getFoodsByDistrict, foods } = useDatabase();
  
  const districtId = parseInt(id || "0");
  const district = getDistrictById(districtId);
  const foodLocations = getFoodsByDistrict(districtId);
  
  // Get unique foods in this district
  const uniqueFoodIds = [...new Set(foodLocations.map(loc => loc.foodId))];
  const districtFoods = foods.filter(food => uniqueFoodIds.includes(food.id));

  if (!district) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Không tìm thấy quận</h2>
          <button 
            onClick={() => navigate("/districts")}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
          >
            Quay về danh sách quận
          </button>
        </div>
      </Layout>
    );
  }

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
          <div className="mb-8">
            <div className="relative h-60 md:h-80 w-full mb-6">
              <img 
                src={district.image} 
                alt={district.name} 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h1 className="text-3xl md:text-4xl font-bold text-white p-6">{district.name}</h1>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Món ăn tại {district.name}</h2>
            
            {districtFoods.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {districtFoods.map((food) => (
                  <FoodCard key={food.id} food={food} districtId={district.id} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600">Không có thông tin món ăn cho quận này.</p>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default DistrictDetail;
