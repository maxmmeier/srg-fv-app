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
        <>
          <BootstrapNavbar.Text>
            <LoginButton disabled={true}></LoginButton>
          </BootstrapNavbar.Text>
        </>
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
              <LoginButton disabled={false}></LoginButton>
            </BootstrapNavbar.Text>
          )}
        </>
      )}
    </BootstrapNavbar.Collapse>
  );
}
