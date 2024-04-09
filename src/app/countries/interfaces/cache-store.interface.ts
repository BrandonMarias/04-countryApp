import { Countries } from "./country.interface";
import { Regions } from "./regions.type";
export interface CacheStore {
  byCapital: {
      term: string;
      data: Countries[];
  };
  byCountry: {
      term: string;
      data: Countries[];
  };
  byRegion: {
      term: Regions;
      data: Countries[];
  };
}
