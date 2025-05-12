import { useState } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AddAppointmentOptions } from '../../../../srg-fv-contract/addAppointmentOptions';

interface AddAppointmentModalProps {
  show: boolean;
  handleClose: () => void;
  handleConfirm: (body: AddAppointmentOptions) => void;
}

export function AddAppointmentModal({
  show,
  handleClose,
  handleConfirm,
}: AddAppointmentModalProps) {
  const { t } = useTranslation();

  const [validated, setValidated] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [appointmentName, setAppointmentName] = useState('');
  const [location, setLocation] = useState('');

  function handleConfirmInternal() {
    setValidated(true);

    if (!checkValidity()) {
      return;
    }

    console.log(date, time, appointmentName, location);
    handleConfirm({
      timestamp: new Date(`${date} ${time}`)
        .toISOString()
        .slice(0, 19)
        .replace('T', ' '),
      name: appointmentName,
      location: location,
    } as AddAppointmentOptions);

    reset();
  }

  function checkValidity() {
    if (!date) return false;
    if (!time) return false;
    if (!appointmentName) return false;
    if (!location) return false;

    return true;
  }

  function reset() {
    setValidated(false);
    setDate('');
    setTime('');
    setAppointmentName('');
    setLocation('');
  }

  function handleCloseInternal() {
    handleClose();
    reset();
  }

  return (
    <Modal show={show} onHide={handleCloseInternal}>
      <Modal.Header closeButton>
        <Modal.Title>{t('addAppointment')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>{t('date')}</Form.Label>
            <InputGroup>
              <Form.Control
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                isInvalid={validated && !date}
                required></Form.Control>
              <Form.Control
                type='time'
                value={time}
                onChange={(e) => setTime(e.target.value)}
                isInvalid={validated && !time}
                required></Form.Control>
              <Form.Control.Feedback type='invalid'>
                {t('dateFeedback')}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>{t('appointmentName')}</Form.Label>
            <Form.Control
              type='text'
              value={appointmentName}
              onChange={(e) => setAppointmentName(e.target.value)}
              isInvalid={validated && !appointmentName}
              placeholder={t('appointmentNamePlaceholder')}
              required></Form.Control>
            <Form.Control.Feedback type='invalid'>
              {t('appointmentNameFeedback')}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>{t('location')}</Form.Label>
            <Form.Control
              type='text'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              isInvalid={validated && !location}
              placeholder={t('locationPlaceholder')}
              required></Form.Control>
            <Form.Control.Feedback type='invalid'>
              {t('locationFeedback')}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleCloseInternal}>
          {t('close')}
        </Button>
        <Button variant='primary' onClick={handleConfirmInternal}>
          {t('add')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
