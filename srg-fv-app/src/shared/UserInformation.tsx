import { useEffect, useRef, useState } from 'react';
import useKeycloak from './useKeycloak';

export function UserInformation() {
  const isRun = useRef<boolean>(false);
  const { keycloak } = useKeycloak();
  const [name, setName] = useState('');

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    (async () => {
      const userName = await keycloak?.loadUserProfile();
      setName(userName?.username ?? '');
    })();
  }, []);

  return <>{name}</>;
}
