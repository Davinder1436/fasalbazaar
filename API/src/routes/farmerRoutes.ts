
import { Router } from 'express';

import {  FarmerRegistrationRequest} from '../types/farmers';
import prisma from './../lib/db'
import bcrypt from 'bcrypt'

import generateToken from '../utils/jwtUtil';
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
  const { name, address, phone , email, avatarURL,password} = req.body as FarmerRegistrationRequest;
  const hashedPassword = await bcrypt.hash(password,10)
  try {
    const newFarmer = await prisma.farmer.create({
      data: {
        name:name,
        address:address,
        contactNo:phone,
        email:email,
        avatar:avatarURL,
        password:hashedPassword
      },
    });
    const token = generateToken(newFarmer.id);

    res.status(201).json({newFarmer,token:token});

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
      where: { id: parseInt(id, 10) },  
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

router.post('/login', async (req, res) => {
  const { phone, password } = req.body;

  try {
    
    const farmer = await prisma.farmer.findUnique({
      //@ts-ignore
      where: { contactNo:phone },
    });

    if (!farmer) {
      return res.status(404).json({ error: "Farmer not found" });
    }

    
    const isMatch = await bcrypt.compare(password, farmer.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    
    const token = generateToken(farmer.id);

    res.status(200).json({ farmer, token });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ "error": error.message });
  }
});

export default router;
