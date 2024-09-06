import jwt from 'jsonwebtoken';


import dotenv from 'dotenv';

dotenv.config();


const generateToken = (farmerId: number) => {
  const secret = process.env.JWT_SECRET as string;
  return jwt.sign({ id: farmerId }, secret, { expiresIn: '1h' });
};

export default generateToken