import { Dispatch, SetStateAction } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export function AddButton({
  setShow,
}: {
  setShow: Dispatch<SetStateAction<boolean>>;
}) {
  const { t } = useTranslation();

  return (
    <Button
      variant='primary'
      className='btn-sm ms-3'
      onClick={() => {
        setShow(true);
      }}>
      {t('add')}
    </Button>
  );
}
