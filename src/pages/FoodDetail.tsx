
import { useParams, useNavigate } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";
import Layout from "../components/Layout";
import LocationCard from "../components/LocationCard";
import AIAssistant from "../components/AIAssistant";
import { ArrowLeft } from "lucide-react";

const FoodDetail = () => {
  const { districtId, foodId } = useParams<{ districtId: string; foodId: string }>();
  const navigate = useNavigate();
  const { getFoodById, getDistrictById, getFoodLocations } = useDatabase();
  
  const dId = parseInt(districtId || "0");
  const fId = parseInt(foodId || "0");
  
  const food = getFoodById(fId);
  const district = getDistrictById(dId);
  const locations = getFoodLocations(fId, dId);

  if (!food || !district) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Không tìm thấy thông tin</h2>
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
          <div className="mb-8 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img 
                src={food.image} 
                alt={food.name} 
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{food.name}</h1>
              <p className="text-gray-600 text-lg mb-2">{food.description}</p>
              <p className="text-primary font-semibold text-xl">Tại {district.name}</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Địa điểm ăn {food.name} tại {district.name}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {locations.map((location) => (
                <LocationCard 
                  key={location.id}
                  name={location.name}
                  address={location.address}
                  image={location.image}
                  phone={location.phone}
                />
              ))}
            </div>

            <AIAssistant 
              type="food" 
              itemName={food.name} 
              districtName={district.name} 
            />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default FoodDetail;
