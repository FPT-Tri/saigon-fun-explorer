
import { useDatabase } from "../context/DatabaseContext";
import Layout from "../components/Layout";
import DistrictCard from "../components/DistrictCard";

const DistrictList = () => {
  const { districts } = useDatabase();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-screen-xl mx-auto">
          <section className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 animate-fade-in">
              Ẩm thực Sài Gòn
            </h1>
            <p className="text-gray-600 text-lg mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Khám phá các món ăn ngon theo từng quận thành phố Hồ Chí Minh
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {districts.map((district) => (
                <DistrictCard key={district.id} district={district} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default DistrictList;
