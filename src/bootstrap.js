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
                src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
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

      <div className="headshot-box c-all c-advisors show">
        <a href="sarah-zvekan.html" target="_self">
          <img
            src="https://images.ctfassets.net/nac4rsvtoh64/7tkPdWyeB60RJYnomrsHyz/88ef2b2f55790705945f580352d28295/2020_PIC_resized.png"
            alt="Sarah J. Zvekan"
          />
        </a>
        <div className="headshot-text">
          <div>
            <a href="sarah-zvekan.html" target="_self">
              <h4>Sarah J. Zvekan</h4>
            </a>
          </div>
          <div>
            <p>Advisor</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Bootstrap;