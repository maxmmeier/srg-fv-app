import { Router } from 'express';
import {
  applyMembership,
  getMemberships,
  getPdf,
} from '../controllers/membershipControllers';
import Keycloak, { KeycloakConfig } from 'keycloak-connect';

const router = Router();

const keycloakConfig = {
  'confidential-port': 0,
  realm: process.env.KEYCLOAK_REALM,
  'auth-server-url': `${process.env.KEYCLOAK_URL}`,
  'ssl-required': 'external',
  resource: process.env.KEYCLOAK_CLIENT,
  'bearer-only': true,
} as KeycloakConfig;

const keycloak = new Keycloak({}, keycloakConfig);

router.post('/apply', applyMembership);
router.get('/', keycloak.protect(), getMemberships);
router.post('/pdf', keycloak.protect(), getPdf);

export default router;
