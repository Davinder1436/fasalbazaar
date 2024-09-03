import express from 'express';
import bodyParser from 'body-parser';
import farmerRouter from './routes/farmerRoutes';
import cropRouter from './routes/cropRoutes'

const app = express();

const PORT = 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/farmers', farmerRouter);
app.use('/api/crops',cropRouter)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

