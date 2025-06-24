import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import catalogRoutes from './routes/catalog';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/catalog', catalogRoutes);

export default app;
