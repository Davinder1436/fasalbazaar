

export interface FarmerRegistrationRequest {
    name: string;
    address: string;
    phone: string;
    email?: string;
    avatarURL?:string;
}

 export  interface FarmerProfileUpdateRequest {
    name?: string;
    address?: string;
    landSize?: number;
    avatar?: string; 
    crops?: string[]; 
    phone?: string;
    email?: string;
}

  
  
