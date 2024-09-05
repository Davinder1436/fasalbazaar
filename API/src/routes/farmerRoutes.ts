import { Router } from "express";
import { AddCropRequest, FarmerRegistrationRequest } from "../types/farmers";
import prisma from "./../lib/db";
import bcrypt from "bcrypt";
import generateToken from "../utils/jwtUtil";
import {
  FarmerRegistrationSchema,
  FarmerUpdateSchema,
  LoginSchema,
} from "./schema";
import { validateRequest } from "../utils/zodutils";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const farmers = await prisma.farmer.findMany();
    res.status(200).json(farmers);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.post(
  "/register",
  validateRequest(FarmerRegistrationSchema),
  async (req, res) => {
    const { name, address, phone, email, avatarURL, password } =
      req.body as FarmerRegistrationRequest;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const newFarmer = await prisma.farmer.create({
        data: {
          name: name,
          address: address,
          contactNo: phone,
          email: email,
          avatar: avatarURL,
          password: hashedPassword,
        },
      });
      const token = generateToken(newFarmer.id);

      res.status(201).json({ newFarmer, token: token });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
);

router.put(
  "/update/:id",
  validateRequest(FarmerUpdateSchema),
  async (req, res) => {
    const { id } = req.params;
    const { name, address, phone, email, avatarURL } =
      req.body as FarmerRegistrationRequest;

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
      res.status(500).json({ error: error.message });
    }
  }
);

router.post("/login", validateRequest(LoginSchema), async (req, res) => {
  const { phone, password } = req.body;

  try {
    const farmer = await prisma.farmer.findUnique({
      //@ts-ignore
      where: { contactNo: phone },
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
    res.status(500).json({ error: error.message });
  }
});

router.put('/addCrop', async (req, res) => {
  const { farmerId, cropNames } = req.body as AddCropRequest; 

  try {
    
    const crops = await prisma.crop.findMany({
      where: {
        name: { in: cropNames }
      },
      select: {
        id: true
      }
    });

    if (crops.length === 0) {
      return res.status(404).json({ error: "No crops found with the provided names" });
    }

   
    const updatedFarmer = await prisma.farmer.update({
      where: { id: farmerId },
      data: {
        crops: {
          connect: crops.map(crop => ({ id: crop.id }))
        }
      },
      include: { crops: true }  
    });

    res.status(200).json(updatedFarmer);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});



export default router;
