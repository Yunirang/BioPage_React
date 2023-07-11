import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Bootstrap({advisors}) {
  return (
    <>
    {advisors && advisors.map((advisor,i) => ( 
        
    <Card key={i} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" />
      <Card.Body>
        <Card.Title>{advisor.advisorName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        )
    )}
   
    </>
    
  );
}

export default Bootstrap;