import React from 'react';
import { useParams } from "react-router-dom";

function BioDetails({ advisors }) {
  const { id } = useParams();
  const selectedAdvisor = advisors.find(advisor => advisor.bioID === id);

  console.log(selectedAdvisor);

  return (
    <h1>{id}</h1>
  )

}


export default BioDetails;