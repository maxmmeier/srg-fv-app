import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';
import useKeycloak from '../features/auth/useKeycloak';
import { UserInformation } from './UserInformation';

export function KeycloakNav() {
  const { authenticated, isLoading } = useKeycloak();

  return (
    <BootstrapNavbar.Collapse className='justify-content-end'>
      {isLoading ? (
        <></>
      ) : (
        <>
          {authenticated ? (
            <>
              <BootstrapNavbar.Text className='me-3'>
                <UserInformation></UserInformation>
              </BootstrapNavbar.Text>
              <BootstrapNavbar.Text>
                <LogoutButton></LogoutButton>
              </BootstrapNavbar.Text>
            </>
          ) : (
            <BootstrapNavbar.Text>
              <LoginButton></LoginButton>
            </BootstrapNavbar.Text>
          )}
        </>
      )}
    </BootstrapNavbar.Collapse>
  );
}
