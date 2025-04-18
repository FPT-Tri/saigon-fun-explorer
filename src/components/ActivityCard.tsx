
import { Link } from "react-router-dom";
import { Activity } from "../types/database";

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard = ({ activity }: ActivityCardProps) => {
  return (
    <Link 
      to={`/activity/${activity.id}`} 
      className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-zoom-in"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-bold text-lg text-gray-800">{activity.name}</h3>
        <p className="text-gray-600 text-sm mt-2">{activity.description}</p>
      </div>
    </Link>
  );
};

export default ActivityCard;
