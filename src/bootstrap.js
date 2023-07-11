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

    <div class="headshot-box c-all c-leadership c-advisors c-client c-investment show">
      <a href="jordann-andrusiak.html" target="_self">
        <img src="https://images.ctfassets.net/nac4rsvtoh64/AoDDDMoNN8UoCHINPRjaZ/c641ac3dafd51baa3922cabc8afb3288/Jordann_Andrusiak.png" alt="Jordann M. Andrusiak, CFP®"/>
     </a>
      <div class="headshot-text">
          <div>
              <a href="jordann-andrusiak.html" target="_self">
                <h4>Jordann M. Andrusiak, CFP®</h4>
              </a>
              </div>
              <div>
             <p>Advisor</p><p>Chief Client Experience Officer</p><p>Investment Committee Member</p>
            </div>
       
          </div>
      </div>
    </div>
  );
}


export default Bootstrap;