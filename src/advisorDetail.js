import React from 'react';
import { useParams } from "react-router-dom";

function BioDetails({ advisors }) {
  const { id } = useParams();
  const selectedAdvisor = advisors.find(advisor => advisor.bioID === id);

  const name = selectedAdvisor.advisorName;
  const position = selectedAdvisor.position;
  const photo = selectedAdvisor.photo;
  const email = selectedAdvisor.email;
  const phone = selectedAdvisor.phone;
  const address = selectedAdvisor.address;
  const desc = selectedAdvisor.description;
  const certs = selectedAdvisor.certs;     


  return (
    <div className="bio-container">
      <div className="left-section">
        <div className="bio-pic">
          <img src={photo} 
            alt={name} 
            style={{ objectFit: 'cover', width: '100%', height: '100%', maxHeight: '600px', maxWidth: '600px' }}
          />

        </div>
        <div className="bio-details">
          <h2 className="bio-detail-name">
            {name}
            {Array.isArray(certs) && certs.length > 0 && certs[0] !== "" && `, ${certs.join(", ")}`}
          </h2>
          <p>{position}</p>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{email}</p>

        </div>
      </div>
      <div className="right-section">
      <div className="bio-description">
        <p className="nameBold">
            {name}
            {Array.isArray(certs) && certs.length > 0 && certs[0] !== "" && `, ${certs.join(", ")}`}
        </p>
        <p>{desc}</p>
      </div>

      </div>
    </div>
  );
}

export default BioDetails;
