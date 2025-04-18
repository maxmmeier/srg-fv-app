import express from 'express';
import applyRoutes from './routes/membershipRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api/membership', applyRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
