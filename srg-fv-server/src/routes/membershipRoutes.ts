import { Router } from 'express';
import {
  applyMembership,
  getMemberships,
  getPdf,
  deleteMembership,
} from '../controllers/membershipControllers';
import { getKeycloak } from './routeBase';

const router = Router();
const keycloak = getKeycloak();

router.post('/apply', applyMembership);
router.get('/:page', keycloak.protect(), getMemberships);
router.post('/pdf', keycloak.protect(), getPdf);
router.delete('/:id', keycloak.protect(), deleteMembership);

export default router;
