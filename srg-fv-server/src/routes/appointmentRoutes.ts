import { Router } from 'express';
import {
  getAppointments,
  addAppointment,
} from '../controllers/appointmentControllers';
import { getKeycloak } from './routeBase';

const router = Router();
const keycloak = getKeycloak();

router.get('/', getAppointments);
router.post('/', keycloak.protect(), addAppointment);

export default router;
