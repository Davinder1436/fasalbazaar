

export interface FarmerRegistrationRequest {
    name: string;
    address: string;
    landSize: number;
    crops: string[];  // Array of Crop IDs that the farmer is interested in
    phone?: string;
    email?: string;
}

 export  interface FarmerProfileUpdateRequest {
    name?: string;
    address?: string;
    landSize?: number;
    avatar?: string; // URL of the new avatar image
    crops?: string[]; // Array of Crop IDs that the farmer wants to update
    phone?: string;
    email?: string;
}

  
  
