import { HeartFill } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';

export function ThankYou() {
  const { t } = useTranslation();

  return (
    <div>
      <span className='me-1'>{t('thankYou')}</span>

      <HeartFill color='red'></HeartFill>
    </div>
  );
}
