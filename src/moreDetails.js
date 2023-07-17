import React, { useState } from 'react';

function MoreDetails({ advisors }) {
    const [showDetails, setShowDetails] = useState(false);
  
    return (
      <div
        className="more-details-container"
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        {showDetails && (
          <div className="details-content">
            {/* Display the details content here */}
            <h2>{advisors.advisorName}</h2>
            {/* Add other details properties as needed */}
          </div>
        )}
        More Details...
      </div>
    );
  }
  


export default MoreDetails;