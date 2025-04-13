import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export function Apply() {
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

        <Button variant="primary" type="submit" className="float-end">
          {t("submit")}
        </Button>
      </Form>
    </>
  );
}
