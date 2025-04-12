import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";

export function Navbar() {
  return (
    <>
      <BootstrapNavbar expand="lg" className="bg-body-tertiary">
        <Container>
          <BootstrapNavbar.Brand href="/">
            Förderverein SRG Stuttgart
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="antrag">Mitgliedsantrag</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
}
