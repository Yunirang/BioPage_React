import React, { useState, useEffect } from 'react';

function AdvisorFilter({ advisors, onFilter }) {
  const [selectedCerts, setSelectedCerts] = useState([]);
  const [certifications, setCertifications] = useState([]);

  const handleCertChange = (cert) => {
    if (selectedCerts.includes(cert)) {
      setSelectedCerts(selectedCerts.filter((c) => c !== cert));
    } else {
      setSelectedCerts([...selectedCerts, cert]);
    }
  };

  useEffect(() => {
    const uniqueCerts = [...new Set(advisors.flatMap((advisor) => advisor.certs.filter(cert => cert !== "")))];
    setCertifications(uniqueCerts);
    onFilter(selectedCerts); // Notify parent component of selected certifications
  }, [advisors, selectedCerts, onFilter]);

  return (
    <div className="filterTitle">
     
      
      <div className="certPills">
      {/* <label htmlFor="certSelect">
        <p className=" certFilterTitle"> Filter by Certification </p>
     </label> */}
        {certifications.map((cert) => (
          <div
            key={cert}
            className={`certPill ${selectedCerts.includes(cert) ? 'selected' : ''}`}
            onClick={() => handleCertChange(cert)}
          >
            {cert}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvisorFilter;
