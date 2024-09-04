
import { Router } from 'express';

import {  FarmerRegistrationRequest} from '../types/farmers';
import prisma from './../lib/db'

const router = Router();

router.get('/',async(req,res)=>{

  try{
    const farmers = await prisma.farmer.findMany()
    res.status(200).json(farmers)
  }catch (error:any) {
    console.log(error)
    res.status(500).json({ "error": error.message });
  }

})

router.post('/register', async (req, res) => {
  const { name, address, phone , email, avatarURL} = req.body as FarmerRegistrationRequest;
  
  try {
    const newFarmer = await prisma.farmer.create({
      data: {
        name:name,
        address:address,
        contactNo:phone,
        email:email,
        avatar:avatarURL
      },
    });

    res.status(201).json(newFarmer);
  } catch (error:any) {
    console.log(error)
    res.status(500).json({ "error": error.message });
  }
});

router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name, address, phone, email, avatarURL } = req.body as FarmerRegistrationRequest;

  try {
    const updatedFarmer = await prisma.farmer.update({
      where: { id: parseInt(id, 10) },  // Ensure the ID is an integer
      data: {
        name: name,
        address: address,
        contactNo: phone,
        email: email,
        avatar: avatarURL,
      },
    });

    res.status(200).json(updatedFarmer);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ "error": error.message });
  }
});

export default router;
