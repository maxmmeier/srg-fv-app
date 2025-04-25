import axios from 'axios';
import { useEffect, useState } from 'react';
import { shortMembership } from '../../../../srg-fv-contract/shortMembership';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useKeycloak from '../auth/useKeycloak';

export function Members() {
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();
  const [members, setMembers] = useState<shortMembership[]>([]);

  useEffect(() => {
    const config = {
      headers: {
        authorization: `Bearer ${keycloak?.token}`,
      },
    };

    axios
      .get(import.meta.env.VITE_BACKEND_URL + 'membership', config)
      .then((res) => {
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
