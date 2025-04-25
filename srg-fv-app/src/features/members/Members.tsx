import axios from 'axios';
import { useEffect, useState } from 'react';
import { shortMembership } from '../../../../srg-fv-contract/shortMembership';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export function Members() {
  const { t } = useTranslation();
  const [members, setMembers] = useState<shortMembership[]>([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL + 'membership').then((res) => {
      setMembers(res.data as shortMembership[]);
    });
  }, []);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>{t('id')}</th>
            <th>{t('firstname')}</th>
            <th>{t('lastname')}</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
