import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export function ConfirmationModal({
  title,
  message,
  buttonText,
  show,
  handleClose,
  handleConfirm,
}: {
  title: string;
  message: string;
  buttonText: string;
  show: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}) {
  const { t } = useTranslation();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          {t('close')}
        </Button>
        <Button variant='primary' onClick={handleConfirm}>
          {buttonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
