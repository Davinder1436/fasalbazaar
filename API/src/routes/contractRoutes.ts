import { Router } from 'express';
import  prisma from '../lib/db';  
import { CreateContractRequest } from './../types/contract';  


const router = Router();
router.post('/create', async (req, res) => {
  const {
    farmerId,
    contractorId,
    cropId,
    landSize,
    amount,
    advancePayment,
    expectedYield,
    prefixedPrice,
    startDate,
    endDate,
    insuranceFactors,
  }: CreateContractRequest = req.body;

  try {
    const contract = await prisma.contract.create({
      data: {
        farmerId,
        contractorId,
        cropId,
        landSize,
        amount,
        advancePayment,
        expectedYield,
        prefixedPrice,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        insuranceFactors,
        status: 'SIGNED', // Assuming default status is SIGNED
        contractStatus: 'Active',
      },
    });

    return res.status(201).json(contract);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating contract' });
  }
});

router.get('/details/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const contract = await prisma.contract.findUnique({
        where: { id: Number(id) },
        include: {
          farmer: true,
          contractor: true,
          crop: true,
        },
      });
  
      if (!contract) {
        return res.status(404).json({ error: 'Contract not found' });
      }
  
      return res.status(200).json(contract);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching contract details' });
    }
  });
  

export default router;
