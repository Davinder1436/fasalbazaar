export interface ContractorRegistrationRequest {
  name: string;
  address: string;
  phone: string;
  email?: string;
  avatarURL?:string;
}

export interface ContractorProfileUpdateRequest {
    name?: string;
    address?: string;
    avatar?: string; // URL of the new avatar image
    phone?: string;
    email?: string;
}

