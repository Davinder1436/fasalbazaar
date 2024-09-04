
import { Router } from 'express';
import {  ContractorRegistrationRequest} from '../types/contractor';
import prisma from './../lib/db'

const router = Router();
router.get('/',async(req,res)=>{

    try{
      const contractors = await prisma.contractor.findMany()
      res.status(200).json(contractors)
    }catch (error:any) {
      console.log(error)
      res.status(500).json({ "error": error.message });
    }
  
  });

router.post('/register', async (req, res) => {
  const { name, address, phone , email, avatarURL} = req.body as ContractorRegistrationRequest;
  
  try {
    const newContractor = await prisma.contractor.create({
      data: {
        name:name,
        address:address,
        contactNo:phone,
        email:email,
        avatar:avatarURL
      },
    });

    res.status(201).json(newContractor);
  } catch (error:any) {
    console.log(error)
    res.status(500).json({ "error": error.message });
  }
});


export default router;
