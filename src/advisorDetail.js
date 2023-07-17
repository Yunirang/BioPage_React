// Components for the details of the advisors, once the advisors are selected from the list

import React from 'react';
import { useParams } from "react-router-dom";

function BioDetails({ advisors }) {

  // get advisor by the advisor Name 
  const { advName } = useParams();

  // replace the - with a space for json file
  const advNameEdit = advName.replace("-", " ");
  const selectedAdvisor = advisors.find(advisor => advisor.advisorName === advNameEdit);

  const name = selectedAdvisor.advisorName;
  const position = selectedAdvisor.position;
  const photo = selectedAdvisor.photo;
  const email = selectedAdvisor.email;
  const phone = selectedAdvisor.phone;
  const address = selectedAdvisor.address;
  const desc = selectedAdvisor.description;
  const certs = selectedAdvisor.certs;     
  const geo = selectedAdvisor.geography;
  const service = selectedAdvisor.serviceLocation;
  const client = selectedAdvisor.clientSize;
  const clientType = selectedAdvisor.clientType;
  const technical = selectedAdvisor.technica;

  return (
    <div className="bio-container">
      <div className="left-section">
        <div className="bio-pic">
          <img 
            src={photo} 
            alt={name} 
            style={{ objectFit: 'cover', width: '100%', height: '100%', maxHeight: '600px', maxWidth: '600px' }}
          />
        </div>
        <div className="bio-details">
          {/* Bio snippets */}
          <h2 className="bio-detail-name">
            {name}
            {/* If just one value, no comma, else then comma and space */}
            {Array.isArray(certs) && certs.length > 0 && certs[0] !== "" && `, ${certs.join(", ")}`}
          </h2>
          <p>{position}</p>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{email}</p>
          <br />
          <p> <b>Location:</b> {Array.isArray(geo) && certs.length > 0 && geo[0] !== "" && ` ${geo.join(", ")}`} </p>
          <p> <b>Services:</b> {Array.isArray(service) && certs.length > 0 && service[0] !== "" && ` ${service.join(", ")}`} </p>
          <p> <b>Wealth Continua:</b> {Array.isArray(client) && certs.length > 0 && client[0] !== "" && ` ${client.join(", ")}`} </p>
          <p> <b>Client Niche:</b> {Array.isArray(clientType) && certs.length > 0 && clientType[0] !== "" && ` ${clientType.join(", ")}`} </p>
          <p> <b>Field of Expertise:</b> {Array.isArray(technical) && certs.length > 0 && technical[0] !== "" && ` ${technical.join(", ")}`} </p>
        </div>
      </div>
      <div className="right-section">
      <div className="bio-description">
        <p className="nameBold">
            {name}
            {Array.isArray(certs) && certs.length > 0 && certs[0] !== "" && `, ${certs.join(", ")}`}
        </p>
        {/* Description of Advisor */}
        <p>{desc}</p>
      </div>
      </div>
    </div>
  );
}

export default BioDetails;
