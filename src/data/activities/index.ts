
import { Activity, ActivityLocation } from '../../types/database';
import { basicActivities } from './basic-activities';
import { artActivities } from './art-activities';
import { entertainmentActivities } from './entertainment-activities';
import { sportActivities } from './sport-activities';
import { workshopActivities } from './workshops';
import { activityLocations } from './locations';

export const activities: Activity[] = [
  ...basicActivities,
  ...artActivities,
  ...entertainmentActivities,
  ...sportActivities,
  ...workshopActivities
];

export { activityLocations };
