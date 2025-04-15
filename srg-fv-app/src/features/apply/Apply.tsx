import { MouseEvent, useRef, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SignatureCanvas from "react-signature-canvas";
import { useContainerDimensions } from "./WrapperDimensions";

import "./Apply.css";
import { formatIban } from "./Iban";

export function Apply() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [isMemberNotAccountHolder, setIsMemberNotAccountHolder] =
    useState(false);
  const [lastNameSepa, setLastNameSepa] = useState("");
  const [firstNameSepa, setFirstNameSepa] = useState("");
  const [streetSepa, setStreetSepa] = useState("");
  const [zipSepa, setZipSepa] = useState("");
  const [citySepa, setCitySepa] = useState("");
  const [bank, setBank] = useState("");
  const [bic, setBic] = useState("");
  const [iban, setIban] = useState("");
  const [mandate, setMandate] = useState("");

  const canvasWrapperMember = useRef(null);
  const canvasWrapperSepa = useRef(null);
  const memberSignature = useContainerDimensions(canvasWrapperMember);
  const sepaSignature = useContainerDimensions(canvasWrapperSepa);
  const memberSignatureCanvas = useRef<SignatureCanvas>(null);
  const sepaSignatureCanvas = useRef<SignatureCanvas>(null);

  const { t } = useTranslation();

  function onSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

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
        .toDataURL("image/png"),
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
        .toDataURL("image/png"),
    };

    console.log(result);
  }

  return (
    <>
      <Form>
        <Row>
          <div className="mb-3">{t("applyForMembershipIntro")}</div>
        </Row>

        <Row xs={1} sm={1} md={2}>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>{t("lastname")}</Form.Label>
              <Form.Control
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder={t("lastnamePlaceholder")}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>{t("firstname")}</Form.Label>
              <Form.Control
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder={t("firstnamePlaceholder")}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row xs={1} sm={1} md={2}>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>{t("email")}</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder={t("emailPlaceholder")}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>{t("dateOfBirth")}</Form.Label>
              <Form.Control
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="date"
                required
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row xs={1} sm={1} md={2}>
          <Col>
            {" "}
            <Form.Group className="mb-3">
              <Form.Label>{t("street")}</Form.Label>
              <Form.Control
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                type="text"
                placeholder={t("streetPlaceholder")}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>{t("zipAndCity")}</Form.Label>
              <InputGroup>
                <Form.Control
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  type="number"
                  placeholder={t("zipPlaceholder")}
                  required
                ></Form.Control>
                <Form.Control
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  placeholder={t("cityPlaceholder")}
                  required
                ></Form.Control>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Form.Group className="mb-3">
            <Form.Label>{t("signatureMemberOrParent")}</Form.Label>
            <div className="input-group">
              <div className="form-control signature" ref={canvasWrapperMember}>
                <SignatureCanvas
                  ref={memberSignatureCanvas}
                  canvasProps={{
                    width: memberSignature.width,
                    height: memberSignature.height,
                  }}
                ></SignatureCanvas>
              </div>
            </div>
          </Form.Group>
        </Row>

        <Row>
          <h3>{t("Sepa")}</h3>
        </Row>

        <Row>
          <p>{t("SepaIntro")}</p>
          <p>
            <small>{t("SepaNotice")}</small>
          </p>
          <p>
            <strong>{t("SepaInfos")}</strong>
          </p>
        </Row>

        <Row>
          <Form.Group className="mb-3">
            <Form.Check
              defaultChecked={isMemberNotAccountHolder}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setIsMemberNotAccountHolder(e.target.checked)
              }
              type="checkbox"
              label={t("MemberNotAccountHolder")}
            ></Form.Check>
          </Form.Group>
        </Row>

        {isMemberNotAccountHolder ? (
          <>
            <Row xs={1} sm={1} md={2}>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>{t("lastname")}</Form.Label>
                  <Form.Control
                    value={lastNameSepa}
                    onChange={(e) => setLastNameSepa(e.target.value)}
                    type="text"
                    placeholder={t("lastnamePlaceholder")}
                    required
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>{t("firstname")}</Form.Label>
                  <Form.Control
                    value={firstNameSepa}
                    onChange={(e) => setFirstNameSepa(e.target.value)}
                    type="text"
                    placeholder={t("firstnamePlaceholder")}
                    required
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row xs={1} sm={1} md={2}>
              <Col>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label>{t("street")}</Form.Label>
                  <Form.Control
                    value={streetSepa}
                    onChange={(e) => setStreetSepa(e.target.value)}
                    type="text"
                    placeholder={t("streetPlaceholder")}
                    required
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>{t("zipAndCity")}</Form.Label>
                  <InputGroup>
                    <Form.Control
                      value={zipSepa}
                      onChange={(e) => setZipSepa(e.target.value)}
                      type="number"
                      placeholder={t("zipPlaceholder")}
                      required
                    ></Form.Control>
                    <Form.Control
                      value={citySepa}
                      onChange={(e) => setCitySepa(e.target.value)}
                      type="text"
                      placeholder={t("cityPlaceholder")}
                      required
                    ></Form.Control>
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
            <Form.Group className="mb-3">
              <Form.Label>{t("bank")}</Form.Label>
              <Form.Control
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                type="text"
                placeholder={t("bankPlaceholder")}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>{t("bic")}</Form.Label>
              <Form.Control
                value={bic}
                onChange={(e) => setBic(e.target.value)}
                type="text"
                placeholder={t("bicPlaceholder")}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row xs={1} sm={1} md={2}>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>{t("iban")}</Form.Label>
              <Form.Control
                value={iban}
                onChange={(e) => {
                  setIban(formatIban(e.target.value));
                }}
                type="text"
                placeholder={t("ibanPlaceholder")}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>{t("mandate")}</Form.Label>
              <Form.Control
                value={mandate}
                onChange={(e) => setMandate(e.target.value)}
                type="text"
                placeholder={t("mandatePlaceholder")}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Form.Group className="mb-3">
            <Form.Label>{t("signatureSepa")}</Form.Label>
            <div className="input-group">
              <div className="form-control signature" ref={canvasWrapperSepa}>
                <SignatureCanvas
                  ref={sepaSignatureCanvas}
                  canvasProps={{
                    width: sepaSignature.width,
                    height: sepaSignature.height,
                  }}
                ></SignatureCanvas>
              </div>
            </div>
          </Form.Group>
        </Row>

        <Button
          variant="primary"
          type="submit"
          className="float-end"
          onClick={(e) => onSubmit(e)}
        >
          {t("submit")}
        </Button>
      </Form>
    </>
  );
}
