import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Bootstrap({ advisors }) {
  return (
    <div className="bios">
      <div className="card-container">
        {advisors &&
          advisors.map((advisor, i) => (
            <Card key={i} style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={advisor.photo}
                style={{ objectFit: 'cover', width: '100%', height: '100%', maxHeight: '600px', maxWidth: '600px' }}
              />
              <Card.Body>
                <Card.Title>{advisor.advisorName}</Card.Title>
                <Card.Text>
                  {advisor.position}

                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}


export default Bootstrap;