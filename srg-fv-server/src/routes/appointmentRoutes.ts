import { Router } from 'express';
import {
  getAppointments,
  deleteAppointment,
  addAppointment,
} from '../controllers/appointmentControllers';
import { getKeycloak } from './routeBase';

const router = Router();
const keycloak = getKeycloak();

router.get('/', getAppointments);
router.post('/', keycloak.protect(), addAppointment);
router.delete('/:id', keycloak.protect(), deleteAppointment);

export default router;
