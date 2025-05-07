import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <span>{t('copyRightSupportAssociation')}</span>

      <span className='float-end'>
        <a
          className='link-opacity-50-hover link-underline-opacity-0 link-dark me-4'
          href='https://github.com/maxmmeier/srg-fv'>
          {t('source')}
        </a>
        <a
          className='link-opacity-50-hover link-underline-opacity-0 link-dark me-4'
          href='datenschutz'>
          {t('privacy')}
        </a>
        <a
          className='link-opacity-50-hover link-underline-opacity-0 link-dark me-4'
          href='impressum'>
          {t('imprint')}
        </a>
      </span>
    </>
  );
}
