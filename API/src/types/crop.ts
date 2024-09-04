export enum cropSeason{
  RABI,
  KHARIF,
  YEARLY
}

export interface CropRequest {
    name: string;
    season: cropSeason;
}
