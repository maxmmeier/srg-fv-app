import { Router } from 'express';
import { applyMembership } from '../controllers/membershipControllers';

const router = Router();

router.post('/apply', applyMembership);

export default router;
