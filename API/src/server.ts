import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import farmerRouter from './routes/farmerRoutes';

const app = express();
const prisma = new PrismaClient();
const PORT = 8000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/farmers', farmerRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
