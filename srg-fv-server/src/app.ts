import express from 'express';
import cors from 'cors';
import membershipRoutes from './routes/membershipRoutes';
import { errorHandler } from './middlewares/errorHandler';
import dotenv from 'dotenv';
import Keycloak, { KeycloakConfig } from 'keycloak-connect';

dotenv.config();

const allowedOrigins = [process.env.CORS_URL ?? ''];

console.log(allowedOrigins);

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();

const keycloakConfig = {
  'confidential-port': 0,
  realm: process.env.KEYCLOAK_REALM,
  'auth-server-url': `${process.env.KEYCLOAK_URL}`,
  'ssl-required': 'external',
  resource: process.env.KEYCLOAK_CLIENT,
  'bearer-only': true,
} as KeycloakConfig;

const keycloak = new Keycloak({}, keycloakConfig);
app.use(keycloak.middleware());

app.use(cors(options));

app.use(express.json());

// Routes
app.use('/api/membership', membershipRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
