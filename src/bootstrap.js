import Card from 'react-bootstrap/Card';
import Img from './Jordann_Andrusiak.png';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import AdvisorFilter from './advisorFilters';

function Bootstrap({ advisors }) {
  const navigate = useNavigate();
  const [filteredAdvisors, setFilteredAdvisors] = useState(advisors);
  const [selectedCerts, setSelectedCerts] = useState([]);

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleFilter = (selectedCerts) => {
    setSelectedCerts(selectedCerts);
  };

  useEffect(() => {
    if (selectedCerts.length === 0) {
      setFilteredAdvisors(advisors); // Show all advisors when no certification is selected
    } else {
      const filtered = advisors.filter((advisor) =>
        selectedCerts.some((cert) => advisor.certs.includes(cert))
      );
      setFilteredAdvisors(filtered); // Update the filtered list based on the selected certifications
    }
  }, [advisors, selectedCerts]);

  return (
    <div>
      <h1 className="ourTeam">Our Team</h1>
      <AdvisorFilter advisors={advisors} onFilter={handleFilter} />
      <div className="bios">
        <div className="card-container">
          {filteredAdvisors.map((advisor, i) => (
            <Card
              key={i}
              onClick={() => handleClick(advisor.bioID)}
              style={{ width: '18rem' }}
              className="hover-card"
            >
              <Card.Img
                variant="top"
                src={Img}
                // src={advisor.photo}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  maxHeight: '600px',
                  maxWidth: '600px',
                }}
              />
              <Card.Body>
                <Card.Title className="positionText">{advisor.advisorName}</Card.Title>
                <Card.Text className="advisorText">
                  {advisor.position}
                  <br />
                  {advisor.certs && advisor.certs.some(cert => cert !== '') ? (<span>{advisor.certs.filter(cert => cert !== '').join(' ')}</span>) : (<span>&nbsp;</span>)}
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
