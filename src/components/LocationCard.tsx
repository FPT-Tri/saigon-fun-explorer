
import { Phone } from "lucide-react";

interface LocationCardProps {
  name: string;
  address: string;
  image: string;
  phone?: string;
}

const LocationCard = ({ name, address, image, phone }: LocationCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm mt-2">{address}</p>
        
        {phone && (
          <div className="mt-4 flex items-center">
            <a 
              href={`tel:${phone}`} 
              className="inline-flex items-center text-primary"
            >
              <Phone size={16} className="mr-1" />
              <span>{phone}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationCard;
