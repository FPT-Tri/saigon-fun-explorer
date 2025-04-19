import { useParams, useNavigate } from "react-router-dom";
import { useDatabase } from "../context/DatabaseContext";
import Layout from "../components/Layout";
import FoodCard from "../components/FoodCard";
import { ArrowLeft } from "lucide-react";
import { AddLocationDialog } from "../components/AddLocationDialog";

const DistrictDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getDistrictById, getFoodsByDistrict, foods } = useDatabase();

  const district = getDistrictById(parseInt(id || "0"));
  const districtFoods = getFoodsByDistrict(parseInt(id || "0"));

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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {districtFoods.map((food) => (
                    <FoodCard key={food.id} food={food} districtId={district.id} />
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DistrictDetail;
