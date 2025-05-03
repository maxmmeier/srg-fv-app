import { Col, Row } from 'react-bootstrap';
import { BoardCard } from './BoardCard';
import { useTranslation } from 'react-i18next';

export function Board() {
  const { t } = useTranslation();

  return (
    <Row xs={1} sm={1} md={2} lg={2} xl={4} className='mb-3'>
      <Col className='pb-3'>
        <BoardCard
          imageName='img-1.jpg'
          name={t('stipe')}
          role={t('firstChairman')}
          club={t('vfbStuttgart')}></BoardCard>
      </Col>
      <Col className='pb-3'>
        <BoardCard
          imageName='img-2.jpg'
          name={t('markus')}
          role={t('secondChairman')}
          club={t('sgUntertürkheim')}></BoardCard>
      </Col>
      <Col className='pb-3'>
        <BoardCard
          imageName='img-3.jpg'
          name={t('ciara')}
          role={t('treasurer')}
          club={t('tsvAltingen')}></BoardCard>
      </Col>
      <Col className='pb-3'>
        <BoardCard
          imageName='img-4.jpg'
          name={t('johanna')}
          role={t('secretary')}
          club={t('svStuttgarterKickers')}></BoardCard>
      </Col>
      <Col className='pb-3'>
        <BoardCard
          imageName='img-5.jpg'
          name={t('max')}
          role={t('assessor')}
          club={t('sgUntertürkheim')}></BoardCard>
      </Col>
      <Col className='pb-3'>
        <BoardCard
          imageName='img-6.jpg'
          name={t('hans')}
          role={t('auditor')}
          club={t('fvGermaniaDegerloch')}></BoardCard>
      </Col>
      <Col className='pb-3'>
        <BoardCard
          imageName='img-7.jpg'
          name={t('richard')}
          role={t('auditor')}
          club={t('tvEchterdingen')}></BoardCard>
      </Col>
    </Row>
  );
}
