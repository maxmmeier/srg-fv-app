import axios from 'axios';
import { useEffect, useState } from 'react';
import { ShortMembership } from '../../../../srg-fv-contract/shortMembership';
import { GetMembershipPdfOptions } from '../../../../srg-fv-contract/getMembershipPdfOptions';
import { MembershipPdf } from '../../../../srg-fv-contract/membershipPdf';
import { Button, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useKeycloak from '../auth/useKeycloak';
import { ConfirmationModal } from '../../shared/ConfirmationModal';

export function Members() {
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();
  const [members, setMembers] = useState<ShortMembership[]>([]);
  const [show, setShow] = useState(false);
  const [deleteMemberId, setDeleteMemberId] = useState<number | null>(null);

  const config = {
    headers: {
      authorization: `Bearer ${keycloak?.token}`,
    },
  };

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + 'membership', config)
      .then((res) => {
        setMembers(res.data as ShortMembership[]);
      });
  }, []);

  async function downloadPdf(id: number) {
    const body = {
      id: id,
    } as GetMembershipPdfOptions;

    axios({
      method: 'post',
      url: import.meta.env.VITE_BACKEND_URL + 'membership/pdf',
      headers: config.headers,
      data: body,
    }).then((res) => {
      const result = res.data as MembershipPdf;
      const source = `data:application/pdf;base64,${result.base64}`;
      const downloadLink = document.createElement('a');
      downloadLink.href = source;
      downloadLink.download = result.fileName;
      downloadLink.click();
    });
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>{t('firstname')}</th>
            <th>{t('lastname')}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
              <td>
                <Button
                  variant='secondary'
                  className='btn-sm'
                  onClick={() => downloadPdf(member.id)}>
                  {t('downloadPdf')}
                </Button>

                <Button
                  variant='danger'
                  className='btn-sm ms-3'
                  onClick={() => {
                    setDeleteMemberId(member.id);
                    setShow(true);
                  }}>
                  {t('delete')}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ConfirmationModal
        show={show}
        title={t('deleteMemberTitle', {
          name: `${members.find((m) => m.id == deleteMemberId)?.lastName}, ${members.find((m) => m.id == deleteMemberId)?.firstName}`,
        })}
        message={t('deleteMemberMessage', {
          name: `${members.find((m) => m.id == deleteMemberId)?.lastName}, ${members.find((m) => m.id == deleteMemberId)?.firstName}`,
        })}
        buttonText={t('delete')}
        handleClose={() => {
          setShow(false);
        }}
        handleConfirm={() => {
          setShow(false);
          axios
            .delete(
              import.meta.env.VITE_BACKEND_URL + 'membership/' + deleteMemberId,
              config,
            )
            .then(() => {
              setMembers(members.filter((m) => m.id !== deleteMemberId));
            });
        }}></ConfirmationModal>
    </>
  );
}
