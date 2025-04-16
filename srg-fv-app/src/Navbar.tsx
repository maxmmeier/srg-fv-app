import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const { t } = useTranslation();
  return (
    <>
      <BootstrapNavbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <BootstrapNavbar.Brand href='/'>
            {t('supportAssociationSrgStuttgart')}
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' />
          <BootstrapNavbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='antrag'>{t('applyForMembership')}</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
}
