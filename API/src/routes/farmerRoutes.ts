// routes/farmerRoutes.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import {  FarmerRegistrationRequest} from '../types/farmers';

const prisma = new PrismaClient();
const router = Router();

// Register a new farmer
router.post('/register', async (req, res) => {
  const { name, address, landSize, crops , phone , email, avatarURL} = req.body as FarmerRegistrationRequest;

  try {

    const newFarmer = await prisma.farmer.create({
      data: {
        name:name,
        address:address,
        contactNo:phone,
        email:email,
        landSize:landSize,
        avatar:avatarURL
      },
    });

    res.status(201).json(newFarmer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register farmer' });
  }
});


export default router;
