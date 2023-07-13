import React, { useState, useEffect } from 'react';

function AdvisorFilter({ advisors, onFilter }) {
  const [selectedCerts, setSelectedCerts] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [isFilterCleared, setIsFilterCleared] = useState(false);

  const handleCertChange = (cert) => {
    if (selectedCerts.includes(cert)) {
      setSelectedCerts(selectedCerts.filter((c) => c !== cert));
    } else {
      setSelectedCerts([...selectedCerts, cert]);
    }
  };

  const handleClearFilters = () => {
    setSelectedCerts([]);
    setIsFilterCleared(true);
  };

  useEffect(() => {
    const uniqueCerts = [...new Set(advisors.flatMap((advisor) => advisor.certs.filter(cert => cert !== "")))];
    setCertifications(uniqueCerts);
    onFilter(selectedCerts);
  }, [advisors, selectedCerts, onFilter, isFilterCleared]);

  return (
    <div className="filterTitle">
      <div className="certPills">
        {certifications.map((cert) => (
          <div
            key={cert}
            className={`certPill ${selectedCerts.includes(cert) ? 'selected' : ''}`}
            onClick={() => handleCertChange(cert)}
          >
            {cert} 
            
          </div>
        ))}
        <button onClick={handleClearFilters}>Clear Filters</button>
      </div>
    </div>
  );
}

export default AdvisorFilter;
