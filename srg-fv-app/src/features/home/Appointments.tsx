import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Appointment } from '../../../../srg-fv-contract/appointments';
import axios from 'axios';
import useKeycloak from '../../shared/useKeycloak';
import { AddButton } from '../../shared/AddButton';
import { DeleteButton } from '../../shared/DeleteButton';
import { ConfirmationModal } from '../../shared/ConfirmationModal';

export function Appointments() {
  const { t } = useTranslation();
  const { authenticated, keycloak } = useKeycloak();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteAppointmentId, setDeleteAppointmentId] = useState<number | null>(
    null,
  );

  const config = {
    headers: {
      authorization: `Bearer ${keycloak?.token}`,
    },
  };

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
            {authenticated && (
              <th className='text-end'>
                <AddButton setShow={setShowAdd}></AddButton>
              </th>
            )}
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

              {authenticated && (
                <td className='text-end'>
                  <DeleteButton
                    id={appointment.id}
                    setDeleteId={setDeleteAppointmentId}
                    setShow={setShowDelete}></DeleteButton>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>

      <ConfirmationModal
        show={showDelete}
        title={t('deleteMemberTitle', {
          name: `${appointments.find((a) => a.id == deleteAppointmentId)?.name}`,
        })}
        message={t('deleteMemberMessage', {
          name: `${appointments.find((a) => a.id == deleteAppointmentId)?.name}`,
        })}
        buttonText={t('delete')}
        handleClose={() => {
          setShowDelete(false);
        }}
        handleConfirm={() => {
          setShowDelete(false);
          axios
            .delete(
              import.meta.env.VITE_BACKEND_URL +
                'appointment/' +
                deleteAppointmentId,
              config,
            )
            .then(() => {
              setAppointments(
                appointments.filter((a) => a.id !== deleteAppointmentId),
              );
            });
        }}></ConfirmationModal>
    </>
  );
}
