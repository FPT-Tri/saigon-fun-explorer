
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type LocationInsert = {
  name: string;
  address: string;
  phone?: string;
  image: string;
  description?: string;
  activity_id?: number;
  district_id?: number;
  food_id?: number;
}

export type LocationRow = LocationInsert & {
  id: number;
  created_at: string;
}
