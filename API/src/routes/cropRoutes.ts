import { Router } from 'express';
import { CropRequest, cropSeason } from '../types/crop';
import prisma from './../lib/db';

const router = Router();

router.get('/',async(req,res)=>{

  try{
    const crops = await prisma.crop.findMany()
    res.status(200).json(crops)
  }catch (error:any) {
    console.log(error)
    res.status(500).json({ "error": error.message });
  }

})

router.post("/add", async (req, res) => {
  try {
    const { name, season }: CropRequest = req.body;

    const seasons={
        'RABI':'0',
        'KHARIF':'1',
        'YEARLY':'2'
    }
   //@ts-ignore
    const seasonValue = cropSeason[seasons[season]];
    
    if (!seasonValue) {
      return res.status(400).json({ error: "Invalid season value" });
    }

    const crop = await prisma.crop.create({
      data: {
        name: name,
        season: seasonValue as keyof typeof cropSeason, // Ensure it matches the enum type
      },
    });

    res.status(200).json(crop);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

export default router;
