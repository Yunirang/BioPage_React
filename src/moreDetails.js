import React, { useState } from 'react';

function MoreDetails({ advisors }) {
    const [showDetails, setShowDetails] = useState(false);
  
    return (
      <div
        className="more-details-container"
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <div className="more-details-loc">More Details</div>
  
        {showDetails && (
          <div className="details-content">
            <div className="details-row">
              <div className="details-item">
                <h3>Location:</h3>
                <p>{Array.isArray(advisors.geography) && advisors.geography.length > 0 && advisors.geography[0] !== "" && ` ${advisors.geography.join(", ")}`}</p>
              </div>
              <div className="details-item">
                <h3>Services:</h3>
                <p>{Array.isArray(advisors.serviceLocation) && advisors.serviceLocation.length > 0 && advisors.serviceLocation[0] !== "" && ` ${advisors.serviceLocation.join(", ")}`}</p>
              </div>
            </div>
            <div className="details-row">
              <div className="details-item">
                <h3>Wealth Continua:</h3>
                <p>{Array.isArray(advisors.clientSize) && advisors.clientSize.length > 0 && advisors.clientSize[0] !== "" && ` ${advisors.clientSize.join(", ")}`}</p>
              </div>
              <div className="details-item">
                <h3>Client Niche:</h3>
                <p>{Array.isArray(advisors.clientType) && advisors.clientType.length > 0 && advisors.clientType[0] !== "" && ` ${advisors.clientType.join(", ")}`}</p>
              </div>
            </div>
            <div className="details-row">
              <div className="details-item">
                <h3>Field of Expertise:</h3>
                <p>{Array.isArray(advisors.technica) && advisors.technica.length > 0 && advisors.technica[0] !== "" && ` ${advisors.technica.join(", ")}`}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  


export default MoreDetails;