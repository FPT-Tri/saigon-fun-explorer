
import { Link } from "react-router-dom";
import { District } from "../types/database";

interface DistrictCardProps {
  district: District;
}

const DistrictCard = ({ district }: DistrictCardProps) => {
  return (
    <Link 
      to={`/district/${district.id}`} 
      className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-zoom-in"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={district.image} 
          alt={district.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <h3 className="text-white font-bold text-xl p-4">{district.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default DistrictCard;
