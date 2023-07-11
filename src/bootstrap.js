import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img from './Jordann_Andrusiak.png';


function Bootstrap({ advisors }) {
  const handleClick = (id) => {

    console.log(id);
  }
  return (
    <div className="bios">
      <div className="card-container">
        {advisors &&
          advisors.map((advisor, i) => (

            <Card key={i} onClick={ () => handleClick(advisor.bioID)}style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={Img}
                // src={advisor.photo}
                style={{ objectFit: 'cover', width: '100%', height: '100%', maxHeight: '600px', maxWidth: '600px' }}
              />
              <Card.Body>
                <a href={advisor.email} target="_blank" rel="noreferrer">
                <Card.Title className="positionText" >{advisor.advisorName}</Card.Title>
                </a>
                <Card.Text className="advisorText">
                  {advisor.position}
                  {advisor.certs}
                  </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}


export default Bootstrap;