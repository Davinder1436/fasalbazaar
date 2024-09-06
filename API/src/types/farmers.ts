

export interface FarmerRegistrationRequest {
    name: string;
    address: string;
    phone: string;
    email?: string;
    avatarURL?:string;
    password:string;
}

export interface AddCropsRequest{
    crops: {
        cropId:number,
        crop:string,
        quantityRange:number,
        landsize:number,
    };
    farmerId: number;
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

export interface AddCropRequest{
    cropNames : string[];
    farmerId: number;
}

  
  
