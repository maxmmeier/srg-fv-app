import { useContext } from 'react';
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  Button,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import useKeycloak from '../features/auth/useKeycloak';

export function Navbar() {
  const { t } = useTranslation();
  const { keycloak, authenticated, isLoading } = useKeycloak();

  console.log(keycloak);

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

          {isLoading ? (
            <></>
          ) : (
            <>
              {authenticated ? (
                <Button
                  onClick={() => {
                    keycloak?.logout();
                  }}>
                  {t('logout')}
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    keycloak?.login();
                  }}>
                  {t('login')}
                </Button>
              )}
            </>
          )}
        </Container>
      </BootstrapNavbar>
    </>
  );
}
