import React, { useState, useEffect } from 'react';

function AdvisorFilter({ advisors, onFilter }) {
  const [selectedCert, setSelectedCert] = useState('');
  const [certifications, setCertifications] = useState([]);


  const handleCertChange = (event) => {
    setSelectedCert(event.target.value);
    onFilter(event.target.value);
  };

  useEffect(() => {
    const uniqueCerts = [...new Set(advisors.flatMap((advisor) => advisor.certs.filter(cert => cert !== "")))];
    setCertifications(uniqueCerts);
  }, [advisors]);

  return (
    <div className="filterTitle">
      <label htmlFor="certSelect">Filter by Certification   {'\u00A0'}</label>
      <select id="certSelect" value={selectedCert} onChange={handleCertChange}>
        <option value="">All</option>
        {certifications.map((cert) => (
          <option key={cert} value={cert}>
            {cert}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AdvisorFilter;
