import { Router } from "express";
import bcrypt from "bcrypt";
import prisma from "./../lib/db";
import generateToken from "../utils/jwtUtil";
import { ContractorRegistrationRequest } from "../types/contractor";
import { validateRequest } from "../utils/zodutils";
import { ContractorRegistrationSchema } from "./schema";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const contractors = await prisma.contractor.findMany();
    res.status(200).json(contractors);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.post(
  "/register",
  validateRequest(ContractorRegistrationSchema),
  async (req, res) => {
    const { name, address, phone, email, avatarURL, password } =
      req.body as ContractorRegistrationRequest;

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newContractor = await prisma.contractor.create({
        data: {
          name: name,
          address: address,
          contactNo: phone,
          email: email,
          avatar: avatarURL,
          password: hashedPassword,
        },
      });

      const token = generateToken(newContractor.id);

      res.status(201).json({ contractor: newContractor, token });
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
);

export default router;
