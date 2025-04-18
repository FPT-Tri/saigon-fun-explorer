
export interface Activity {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface ActivityLocation {
  id: number;
  activityId: number;
  name: string;
  address: string;
  image: string;
  phone?: string;
  description?: string;
}

export interface District {
  id: number;
  name: string;
  image: string;
}

export interface Food {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface FoodLocation {
  id: number;
  foodId: number;
  districtId: number;
  name: string;
  address: string;
  image: string;
  phone?: string;
  description?: string;
}
