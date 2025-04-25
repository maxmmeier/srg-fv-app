import { Button } from 'react-bootstrap';
import useKeycloak from '../features/auth/useKeycloak';
import { useTranslation } from 'react-i18next';

export function LoginButton({ disabled = false }: { disabled: boolean }) {
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();

  return (
    <Button
      disabled={disabled}
      onClick={() => {
        keycloak?.login();
      }}>
      {t('login')}
    </Button>
  );
}
