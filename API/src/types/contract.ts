
export interface CreateContractRequest {
    farmerId: number;
    contractorId: number;
    cropId: number;
    landSize: number;
    amount: number;
    advancePayment: number;
    expectedYield: number;
    prefixedPrice: number;
    startDate: string;  
    endDate: string;    
    insuranceFactors: string;
  }
  
  export interface DetailContractRequest {
    id: number;
  }
  