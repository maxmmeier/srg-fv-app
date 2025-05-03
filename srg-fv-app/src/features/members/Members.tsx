import axios from 'axios';
import { useEffect, useState } from 'react';
import { ShortMembership } from '../../../../srg-fv-contract/shortMembership';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useKeycloak from '../../shared/useKeycloak';
import { ConfirmationModal } from '../../shared/ConfirmationModal';
import { DownloadPdfButton } from './DownloadPdfButton';
import { DeleteButton } from './DeleteButton';
import { Pagination } from '../../shared/Pagination';

export function Members() {
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();
  const [members, setMembers] = useState<ShortMembership[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [show, setShow] = useState(false);
  const [deleteMemberId, setDeleteMemberId] = useState<number | null>(null);

  const config = {
    headers: {
      authorization: `Bearer ${keycloak?.token}`,
    },
  };

  useEffect(() => {
    axios
      .get(
        import.meta.env.VITE_BACKEND_URL + 'membership/' + currentPage,
        config,
      )
      .then((res) => {
        setMembers(res.data.memberships as ShortMembership[]);
        setMaxPage(res.data.maxPage);
        setCurrentPage(res.data.currentPage);
      });
  }, [currentPage]);

  return (
    <>
      <Table striped hover>
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
              <td className='text-end'>
                <DownloadPdfButton
                  id={member.id}
                  config={config}></DownloadPdfButton>

                <DeleteButton
                  id={member.id}
                  setDeleteMemberId={setDeleteMemberId}
                  setShow={setShow}></DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPage={maxPage}></Pagination>

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
