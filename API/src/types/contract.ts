// types/contract.ts

export interface CreateContractRequest {
    farmerId: number;
    contractorId: number;
    cropId: number;
    landSize: number; // Size of the land in acres/hectares
    amount: number; // Total contract amount
    advancePayment: number; // Advance payment amount
    expectedYield: number; // Expected yield of the crop
    prefixedPrice: number; // Prefixed price per unit
    startDate: string; // Contract start date in ISO string format
    endDate: string; // Contract end date in ISO string format
    insuranceFactors: string[]; // Array of insurance factors or policies applied to the contract
  }
  
  export interface DetailContractRequest {
    id: number; // Contract ID to fetch details
  }
  
  export interface UpdateContractRequest {
    contractId: number; // ID of the contract to update
    landSize?: number;
    amount?: number;
    advancePayment?: number;
    expectedYield?: number;
    prefixedPrice?: number;
    startDate?: string;
    endDate?: string;
    insuranceFactors?: string;
    contractStatus?: string; // New status like 'Active', 'Completed', 'Cancelled'
  }
  
  export interface DeleteContractRequest {
    id: number; // ID of the contract to delete
  }
  