// ManufacturingProcessDiagram.js
import React, { useState } from 'react';

function ManufacturingProcessDiagram() {
  const [phaseData, setPhaseData] = useState({
    Research: false,
    Design: false,
    Manufacturing: false,
    SalesMarketing: false
  });

  const handlePhaseHover = (phase) => {
    setPhaseData({ ...phaseData, [phase]: true });
  };

  const handlePhaseLeave = (phase) => {
    setPhaseData({ ...phaseData, [phase]: false });
  };

  return (
    <svg
      width="100%"
      height="400"
      viewBox="0 0 1000 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define circles for each phase with hover/click events */}
      <circle cx="100" cy="200" r="30" fill="#f0f0f0" stroke="#000" strokeWidth="2"
        onMouseEnter={() => handlePhaseHover('Research')}
        onMouseLeave={() => handlePhaseLeave('Research')}
      />
      {/* Add tooltips or data display based on phaseData.Research state */}
      {phaseData.Research && (
        <text x="100" y="250" textAnchor="middle">Research Phase Data</text>
      )}

      <circle cx="300" cy="100" r="30" fill="#f0f0f0" stroke="#000" strokeWidth="2"
        onMouseEnter={() => handlePhaseHover('Design')}
        onMouseLeave={() => handlePhaseLeave('Design')}
      />
      {/* Add tooltips or data display based on phaseData.Design state */}
      {phaseData.Design && (
        <text x="300" y="150" textAnchor="middle">Design Phase Data</text>
      )}

      <circle cx="500" cy="200" r="30" fill="#f0f0f0" stroke="#000" strokeWidth="2"
        onMouseEnter={() => handlePhaseHover('Manufacturing')}
        onMouseLeave={() => handlePhaseLeave('Manufacturing')}
      />
      {/* Add tooltips or data display based on phaseData.Manufacturing state */}
      {phaseData.Manufacturing && (
        <text x="500" y="250" textAnchor="middle">Manufacturing Phase Data</text>
      )}

      <circle cx="700" cy="300" r="30" fill="#f0f0f0" stroke="#000" strokeWidth="2"
        onMouseEnter={() => handlePhaseHover('SalesMarketing')}
        onMouseLeave={() => handlePhaseLeave('SalesMarketing')}
      />
      {/* Add tooltips or data display based on phaseData.SalesMarketing state */}
      {phaseData.SalesMarketing && (
        <text x="700" y="350" textAnchor="middle">Sales/Marketing Phase Data</text>
      )}

      {/* Define lines connecting the circles */}
      <line x1="130" y1="200" x2="270" y2="100" stroke="#000" strokeWidth="2" />
      <line x1="330" y1="100" x2="470" y2="200" stroke="#000" strokeWidth="2" />
      <line x1="530" y1="200" x2="670" y2="300" stroke="#000" strokeWidth="2" />
    </svg>
  );
}

export default ManufacturingProcessDiagram;
