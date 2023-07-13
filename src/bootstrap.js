import Card from 'react-bootstrap/Card';
import Img from './Jordann_Andrusiak.png';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import AdvisorFilter from './advisorFilters';



function Bootstrap({ advisors }) {
  

  const navigate = useNavigate();
  const [filteredAdvisors, setFilteredAdvisors] = useState(advisors);

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  }
  
  const handleFilter = (selectedCert) => {
    if (selectedCert === '') {
      setFilteredAdvisors(advisors); // Show all advisors when no certification is selected
    } else {
      const filtered = advisors.filter((advisor) =>
        advisor.certs.includes(selectedCert)
      );
      setFilteredAdvisors(filtered); // Update the filtered list based on the selected certification
    }
  };
  return (
    <div>  
      <h1 className="ourTeam">
        Our Team
      </h1> 
      <AdvisorFilter advisors={advisors} onFilter={handleFilter} />
      <div className="bios">
        <div className="card-container">
          {advisors &&
            filteredAdvisors.map((advisor, i) => (
              <Card key={i} 
              onClick={() => handleClick(advisor.bioID)} 
              style={{ width: '18rem' }}
              className="hover-card">
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
                    {advisor.certs && advisor.certs.length > 0 ? `\u00A0${advisor.certs.join("")}` : ' '}
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