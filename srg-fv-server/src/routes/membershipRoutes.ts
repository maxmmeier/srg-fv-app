import { Router } from 'express';
import {
  applyMembership,
  getMemberships,
} from '../controllers/membershipControllers';

const router = Router();

router.post('/apply', applyMembership);
router.get('/', getMemberships);

export default router;
