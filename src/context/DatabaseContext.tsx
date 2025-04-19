import React, { createContext, useContext, ReactNode } from "react";
import { activities, activityLocations, districts, foods, foodLocations } from "../data";
import { Activity, ActivityLocation, District, Food, FoodLocation } from "../types/database";

interface DatabaseContextProps {
  activities: Activity[];
  activityLocations: ActivityLocation[];
  districts: District[];
  foods: Food[];
  foodLocations: FoodLocation[];
  getActivityById: (id: number) => Activity | undefined;
  getActivityLocations: (activityId: number) => ActivityLocation[];
  getDistrictById: (id: number) => District | undefined;
  getFoodById: (id: number) => Food | undefined;
  getFoodsByDistrict: (districtId: number) => FoodLocation[];
  getFoodLocations: (foodId: number, districtId: number) => FoodLocation[];
}

const DatabaseContext = createContext<DatabaseContextProps | undefined>(undefined);

export const DatabaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getActivityById = (id: number) => {
    return activities.find(activity => activity.id === id);
  };

  const getActivityLocations = (activityId: number) => {
    return activityLocations.filter(location => location.activityId === activityId);
  };

  const getDistrictById = (id: number) => {
    return districts.find(district => district.id === id);
  };

  const getFoodById = (id: number) => {
    return foods.find(food => food.id === id);
  };

  const getFoodsByDistrict = (districtId: number) => {
    return foodLocations.filter(location => location.districtId === districtId);
  };

  const getFoodLocations = (foodId: number, districtId: number) => {
    return foodLocations.filter(
      location => location.foodId === foodId && location.districtId === districtId
    );
  };

  return (
    <DatabaseContext.Provider
      value={{
        activities,
        activityLocations,
        districts,
        foods,
        foodLocations,
        getActivityById,
        getActivityLocations,
        getDistrictById,
        getFoodById,
        getFoodsByDistrict,
        getFoodLocations,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }
  return context;
};
