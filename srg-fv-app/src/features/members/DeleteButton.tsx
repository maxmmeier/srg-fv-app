import { Dispatch, SetStateAction } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export function DeleteButton({
  id,
  setDeleteMemberId,
  setShow,
}: {
  id: number;
  setDeleteMemberId: Dispatch<SetStateAction<number | null>>;
  setShow: Dispatch<SetStateAction<boolean>>;
}) {
  const { t } = useTranslation();

  return (
    <Button
      variant='danger'
      className='btn-sm ms-3'
      onClick={() => {
        setDeleteMemberId(id);
        setShow(true);
      }}>
      {t('delete')}
    </Button>
  );
}
