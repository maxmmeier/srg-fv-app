import express from 'express';
import cors from 'cors';
import applyRoutes from './routes/membershipRoutes';
import { errorHandler } from './middlewares/errorHandler';
import dotenv from 'dotenv';

dotenv.config();

const allowedOrigins = [process.env.CORS_URL ?? ''];

console.log(allowedOrigins);

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();

app.use(cors(options));

app.use(express.json());

// Routes
app.use('/api/membership', applyRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
