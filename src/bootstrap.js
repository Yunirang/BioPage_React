import Card from 'react-bootstrap/Card';
import Img from './Jordann_Andrusiak.png';
import BioDetails from './advisorDetail.js';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";



function Bootstrap({ advisors }) {
  

    const navigate = useNavigate();

    const handleClick = (id) => {
      navigate(`/detail/${id}`);
    }
  
  return (
    <div>  
      <h1 className="ourTeam">
        Our Team
      </h1> 
      <div className="bios">
        <div className="card-container">
          {advisors &&
            advisors.map((advisor, i) => (
              <Card key={i} onClick={() => handleClick(advisor.bioID)} style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={Img}
                  // src={advisor.photo}
                  style={{ objectFit: 'cover', width: '100%', height: '100%', maxHeight: '600px', maxWidth: '600px' }}
                />
                <Card.Body>
                  <Card.Title className="positionText" >{advisor.advisorName}</Card.Title>
                  <Card.Text className="advisorText">
                    {advisor.position}
                    <br />
                    {advisor.certs}
                    </Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>
    </div>
    </div>
   
  );
}


export default Bootstrap;