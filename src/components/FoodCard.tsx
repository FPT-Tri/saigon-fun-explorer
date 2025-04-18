
import { Link } from "react-router-dom";
import { Food } from "../types/database";

interface FoodCardProps {
  food: Food;
  districtId: number;
}

const FoodCard = ({ food, districtId }: FoodCardProps) => {
  return (
    <Link 
      to={`/district/${districtId}/food/${food.id}`} 
      className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-zoom-in"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={food.image} 
          alt={food.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-bold text-lg text-gray-800">{food.name}</h3>
        <p className="text-gray-600 text-sm mt-2">{food.description}</p>
      </div>
    </Link>
  );
};

export default FoodCard;
