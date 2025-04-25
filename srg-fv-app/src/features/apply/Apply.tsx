import { FormEvent, useRef, useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import SignatureCanvas from 'react-signature-canvas';
import { useContainerDimensions } from './WrapperDimensions';
import './Apply.css';
import { formatIban, validateIban } from './Iban';
import axios from 'axios';
import { applyMembershipOptions } from '../../../../srg-fv-contract/applyMembershipOptions';

export function Apply() {
  const [validated, setValidated] = useState(false);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [isMemberNotAccountHolder, setIsMemberNotAccountHolder] =
    useState(false);
  const [lastNameSepa, setLastNameSepa] = useState('');
  const [firstNameSepa, setFirstNameSepa] = useState('');
  const [streetSepa, setStreetSepa] = useState('');
  const [zipSepa, setZipSepa] = useState('');
  const [citySepa, setCitySepa] = useState('');
  const [bank, setBank] = useState('');
  const [bic, setBic] = useState('');
  const [iban, setIban] = useState('');
  const [mandate, setMandate] = useState('');

  const canvasWrapperMember = useRef(null);
  const canvasWrapperSepa = useRef(null);
  const memberSignature = useContainerDimensions(canvasWrapperMember);
  const sepaSignature = useContainerDimensions(canvasWrapperSepa);
  const memberSignatureCanvas = useRef<SignatureCanvas>(null);
  const sepaSignatureCanvas = useRef<SignatureCanvas>(null);
  const [isMemberSignatureSet, setIsMemberSignatureSet] = useState(false);
  const [isSepaSignatureSet, setIsSepaSignatureSet] = useState(false);

  const { t } = useTranslation();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    setValidated(true);

    if (form.checkValidity() === false) {
      return;
    }

    var result = {
      lastName,
      firstName,
      email,
      dateOfBirth,
      street,
      zip,
      city,
      memberSignature: memberSignatureCanvas.current
        ?.getCanvas()
        .toDataURL('image/png'),
      isMemberNotAccountHolder,
      lastNameSepa,
      firstNameSepa,
      streetSepa,
      zipSepa,
      citySepa,
      bank,
      bic,
      iban,
      mandate,
      sepaSignature: sepaSignatureCanvas.current
        ?.getCanvas()
        .toDataURL('image/png'),
    } as applyMembershipOptions;

    axios.post(import.meta.env.VITE_BACKEND_URL + 'membership/apply', result);
  }
  return (
    <>
      <Form noValidate onSubmit={(e) => onSubmit(e)}>
        <Row>
          <div className='mb-3'>{t('applyForMembershipIntro')}</div>
        </Row>

        <Row xs={1} sm={1} md={2}>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label>{t('lastname')}</Form.Label>
              <Form.Control
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                isInvalid={validated && !lastName}
                type='text'
                placeholder={t('lastnamePlaceholder')}
                required></Form.Control>
              <Form.Control.Feedback type='invalid'>
                {t('lastnameFeedback')}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label>{t('firstname')}</Form.Label>
              <Form.Control
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                isInvalid={validated && !firstName}
                type='text'
                placeholder={t('firstnamePlaceholder')}
                required></Form.Control>
              <Form.Control.Feedback type='invalid'>
                {t('firstnameFeedback')}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row xs={1} sm={1} md={2}>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label>{t('email')}</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={validated && !email}
                type='text'
                placeholder={t('emailPlaceholder')}
                required></Form.Control>
              <Form.Control.Feedback type='invalid'>
                {t('emailFeedback')}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label>{t('dateOfBirth')}</Form.Label>
              <Form.Control
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                isInvalid={
                  validated &&
                  (!dateOfBirth ||
                    new Date(dateOfBirth) >
                      new Date(
                        new Date().getFullYear() - 10,
                        new Date().getMonth(),
                        new Date().getDay(),
                      ))
                }
                type='date'
                required></Form.Control>
              <Form.Control.Feedback type='invalid'>
                {t('dateOfBirthFeedback')}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row xs={1} sm={1} md={2}>
          <Col>
            {' '}
            <Form.Group className='mb-3'>
              <Form.Label>{t('street')}</Form.Label>
              <Form.Control
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                isInvalid={validated && !street}
                type='text'
                placeholder={t('streetPlaceholder')}
                required></Form.Control>
              <Form.Control.Feedback type='invalid'>
                {t('streetFeedback')}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label>{t('zipAndCity')}</Form.Label>
              <InputGroup>
                <Form.Control
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  isInvalid={validated && !zip}
                  type='number'
                  placeholder={t('zipPlaceholder')}
                  required></Form.Control>
                <Form.Control
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  isInvalid={validated && !city}
                  type='text'
                  placeholder={t('cityPlaceholder')}
                  required></Form.Control>
                <Form.Control.Feedback type='invalid'>
                  {t('zipAndCityFeedback')}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Form.Group className='mb-3'>
            <Form.Label>{t('signatureMemberOrParent')}</Form.Label>
            <div className='input-group'>
              <div
                className={
                  'form-control signature position-relative ' +
                  (validated && !isMemberSignatureSet ? 'is-invalid' : '')
                }
                ref={canvasWrapperMember}>
                <SignatureCanvas
                  ref={memberSignatureCanvas}
                  canvasProps={{
                    width: memberSignature.width,
                    height: memberSignature.height,
                  }}
                  onEnd={() => {
                    setIsMemberSignatureSet(
                      (memberSignatureCanvas.current?.isEmpty() ?? true) ===
                        false,
                    );
                  }}></SignatureCanvas>
                <Button
                  className='clear-signature'
                  variant='secondary'
                  onClick={() => {
                    memberSignatureCanvas.current?.clear();
                    setIsMemberSignatureSet(
                      (memberSignatureCanvas.current?.isEmpty() ?? true) ===
                        false,
                    );
                  }}>
                  <i className='bi bi-eraser'></i>
                </Button>
              </div>
              <Form.Control.Feedback type='invalid'>
                {t('signatureFeedback')}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
        </Row>

        <Row>
          <h3>{t('Sepa')}</h3>
        </Row>

        <Row>
          <p>{t('SepaIntro')}</p>
          <p>
            <small>{t('SepaNotice')}</small>
          </p>
          <p>
            <strong>{t('SepaInfos')}</strong>
          </p>
        </Row>

        <Row>
          <Form.Group className='mb-3'>
            <Form.Check
              defaultChecked={isMemberNotAccountHolder}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIsMemberNotAccountHolder(e.target.checked)
              }
              type='checkbox'
              label={t('MemberNotAccountHolder')}></Form.Check>
          </Form.Group>
        </Row>

        {isMemberNotAccountHolder ? (
          <>
            <Row xs={1} sm={1} md={2}>
              <Col>
                <Form.Group className='mb-3'>
                  <Form.Label>{t('lastname')}</Form.Label>
                  <Form.Control
                    value={lastNameSepa}
                    onChange={(e) => setLastNameSepa(e.target.value)}
                    isInvalid={
                      validated && isMemberNotAccountHolder && !lastNameSepa
                    }
                    type='text'
                    placeholder={t('lastnamePlaceholder')}
                    required></Form.Control>
                  <Form.Control.Feedback type='invalid'>
                    {t('lastnameFeedback')}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className='mb-3'>
                  <Form.Label>{t('firstname')}</Form.Label>
                  <Form.Control
                    value={firstNameSepa}
                    onChange={(e) => setFirstNameSepa(e.target.value)}
                    isInvalid={
                      validated && isMemberNotAccountHolder && !firstNameSepa
                    }
                    type='text'
                    placeholder={t('firstnamePlaceholder')}
                    required></Form.Control>
                  <Form.Control.Feedback type='invalid'>
                    {t('firstnameFeedback')}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row xs={1} sm={1} md={2}>
              <Col>
                {' '}
                <Form.Group className='mb-3'>
                  <Form.Label>{t('street')}</Form.Label>
                  <Form.Control
                    value={streetSepa}
                    onChange={(e) => setStreetSepa(e.target.value)}
                    isInvalid={
                      validated && isMemberNotAccountHolder && !streetSepa
                    }
                    type='text'
                    placeholder={t('streetPlaceholder')}
                    required></Form.Control>
                  <Form.Control.Feedback type='invalid'>
                    {t('streetFeedback')}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className='mb-3'>
                  <Form.Label>{t('zipAndCity')}</Form.Label>
                  <InputGroup>
                    <Form.Control
                      value={zipSepa}
                      onChange={(e) => setZipSepa(e.target.value)}
                      isInvalid={
                        validated && isMemberNotAccountHolder && !zipSepa
                      }
                      type='number'
                      placeholder={t('zipPlaceholder')}
                      required></Form.Control>
                    <Form.Control
                      value={citySepa}
                      onChange={(e) => setCitySepa(e.target.value)}
                      isInvalid={
                        validated && isMemberNotAccountHolder && !citySepa
                      }
                      type='text'
                      placeholder={t('cityPlaceholder')}
                      required></Form.Control>
                    <Form.Control.Feedback type='invalid'>
                      {t('zipAndCityFeedback')}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
          </>
        ) : (
          <></>
        )}

        <Row xs={1} sm={1} md={2}>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label>{t('bank')}</Form.Label>
              <Form.Control
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                isInvalid={validated && !bank}
                type='text'
                placeholder={t('bankPlaceholder')}
                required></Form.Control>
              <Form.Control.Feedback type='invalid'>
                {t('bankFeedback')}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label>{t('bic')}</Form.Label>
              <Form.Control
                value={bic}
                onChange={(e) => setBic(e.target.value)}
                isInvalid={validated && !bic}
                type='text'
                placeholder={t('bicPlaceholder')}
                required></Form.Control>
              <Form.Control.Feedback type='invalid'>
                {t('bicFeedback')}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row xs={1} sm={1} md={2}>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label>{t('iban')}</Form.Label>
              <Form.Control
                value={iban}
                onChange={(e) => {
                  setIban(formatIban(e.target.value));
                }}
                isInvalid={validated && !validateIban(iban)}
                type='text'
                placeholder={t('ibanPlaceholder')}
                required></Form.Control>
              <Form.Control.Feedback type='invalid'>
                {t('ibanFeedback')}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label>{t('mandate')}</Form.Label>
              <Form.Control
                value={mandate}
                onChange={(e) => setMandate(e.target.value)}
                isInvalid={validated && !mandate}
                type='text'
                placeholder={t('mandatePlaceholder')}
                required></Form.Control>
              <Form.Control.Feedback type='invalid'>
                {t('mandateFeedback')}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Form.Group className='mb-3'>
            <Form.Label>{t('signatureSepa')}</Form.Label>
            <div className='input-group'>
              <div
                className={
                  'form-control signature position-relative ' +
                  (validated && !isSepaSignatureSet ? 'is-invalid' : '')
                }
                ref={canvasWrapperSepa}>
                <SignatureCanvas
                  ref={sepaSignatureCanvas}
                  canvasProps={{
                    width: sepaSignature.width,
                    height: sepaSignature.height,
                  }}
                  onEnd={() => {
                    setIsSepaSignatureSet(
                      (sepaSignatureCanvas.current?.isEmpty() ?? true) ===
                        false,
                    );
                  }}></SignatureCanvas>
                <Button
                  className='clear-signature'
                  variant='secondary'
                  onClick={() => {
                    sepaSignatureCanvas.current?.clear();
                    setIsSepaSignatureSet(
                      (sepaSignatureCanvas.current?.isEmpty() ?? true) ===
                        false,
                    );
                  }}>
                  <i className='bi bi-eraser'></i>
                </Button>
              </div>
              <Form.Control.Feedback type='invalid'>
                {t('signatureFeedback')}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
        </Row>

        <Button variant='primary' type='submit' className='float-end'>
          {t('submit')}
        </Button>
      </Form>
    </>
  );
}
