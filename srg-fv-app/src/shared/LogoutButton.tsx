import { Button } from 'react-bootstrap';
import useKeycloak from '../features/auth/useKeycloak';
import { useTranslation } from 'react-i18next';

export function LogoutButton() {
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();

  return (
    <Button
      onClick={() => {
        keycloak?.logout();
      }}>
      {t('logout')}
    </Button>
  );
}
