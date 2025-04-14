import { useRef, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import SignatureCanvas from "react-signature-canvas";
import { useContainerDimensions } from "./WrapperDimensions";

import "./Apply.css";
import { formatIban } from "./Iban";

export function Apply() {
  const [isMemberNotAccountHolder, setIsMemberNotAccountHolder] =
    useState(false);
  const [iban, setIban] = useState("");

  const canvasWrapperMember = useRef(null);
  const canvasWrapperSepa = useRef(null);

  const memberSignature = useContainerDimensions(canvasWrapperMember);
  const sepaSignature = useContainerDimensions(canvasWrapperSepa);

  const { t } = useTranslation();
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
                type="text"
                placeholder={t("emailPlaceholder")}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>{t("dateOfBirth")}</Form.Label>
              <Form.Control type="date" required></Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row xs={1} sm={1} md={2}>
          <Col>
            {" "}
            <Form.Group className="mb-3">
              <Form.Label>{t("street")}</Form.Label>
              <Form.Control
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
                  type="number"
                  placeholder={t("zipPlaceholder")}
                  required
                ></Form.Control>
                <Form.Control
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
                      type="number"
                      placeholder={t("zipPlaceholder")}
                      required
                    ></Form.Control>
                    <Form.Control
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
                  canvasProps={{
                    width: sepaSignature.width,
                    height: sepaSignature.height,
                  }}
                ></SignatureCanvas>
              </div>
            </div>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" className="float-end">
          {t("submit")}
        </Button>
      </Form>
    </>
  );
}
