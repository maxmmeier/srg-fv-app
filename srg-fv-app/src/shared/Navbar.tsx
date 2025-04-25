import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { KeycloakNav } from './KeycloakNav';
import useKeycloak from '../features/auth/useKeycloak';

export function Navbar() {
  const { t } = useTranslation();

  const { authenticated } = useKeycloak();

  return (
    <>
      <BootstrapNavbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <BootstrapNavbar.Brand href='/'>
            {t('supportAssociationSrgStuttgart')}
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle aria-controls='basic-navbar-nav' />
          <BootstrapNavbar.Collapse id='basic-navbar-nav'>
            <Nav>
              {authenticated ? (
                <>
                  <Nav.Link href='mitglieder'>{t('members')}</Nav.Link>
                </>
              ) : (
                <></>
              )}
              <Nav.Link href='antrag'>{t('applyForMembership')}</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>

          <KeycloakNav></KeycloakNav>
        </Container>
      </BootstrapNavbar>
    </>
  );
}
