import { Card } from 'react-bootstrap';

export function BoardCard({
  imageName,
  name,
  role,
  club,
}: {
  imageName: string;
  name: string;
  role: string;
  club: string;
}) {
  return (
    <Card>
      <Card.Img variant='top' src={'src/assets/' + imageName} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>{role}</Card.Subtitle>
        <Card.Text>{club}</Card.Text>
      </Card.Body>
    </Card>
  );
}
