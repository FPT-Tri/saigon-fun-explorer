import { Food, FoodLocation } from '../../types/database';
import { foods } from './food-list';
import { district1Locations } from './locations/district-1';
import { binhThanhLocations } from './locations/district-binh-thanh';
import { district3Locations } from './locations/district-3';
import { district5Locations } from './locations/district-5';
import { district7Locations } from './locations/district-7';
import { district8Locations } from './locations/district-8';
import { district9Locations } from './locations/district-9';
import { district14Locations } from './locations/district-14';
import { district2Locations } from './locations/district-2';
import { district13Locations } from './locations/district-13';
import { district15Locations } from './locations/district-15';

export { foods };

export const foodLocations: FoodLocation[] = [
  ...district1Locations,
  ...binhThanhLocations,
  ...district3Locations,
  ...district5Locations,
  ...district7Locations,
  ...district8Locations,
  ...district9Locations,
  ...district14Locations,
  ...district2Locations,
  ...district13Locations,
  ...district15Locations
];
