import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Appointment } from '../../../../srg-fv-contract/appointments';
import axios from 'axios';

export function Appointments() {
  const { t } = useTranslation();

  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL + 'appointment').then((res) => {
      setAppointments(res.data as Appointment[]);
    });
  }, []);

  return (
    <>
      <Table striped hover>
        <thead>
          <tr>
            <th>{t('date')}</th>
            <th>{t('appointmentName')}</th>
            <th>{t('location')}</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>
                {new Date(appointment.timestamp).toLocaleString('de-DE', {
                  weekday: 'short',
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </td>
              <td>{appointment.name}</td>
              <td>{appointment.location}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
