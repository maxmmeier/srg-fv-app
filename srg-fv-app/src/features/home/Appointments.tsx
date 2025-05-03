import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export function Appointments() {
  const { t } = useTranslation();
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
        <tbody></tbody>
      </Table>
    </>
  );
}
