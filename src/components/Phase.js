import React, { useState } from 'react';
import '../components/Phase.css'
function Phase({ title, details }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="phase" onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
      <h2>{title}</h2>
      {showDetails && <div className="phase-details">{details}</div>}
    </div>
  );
}

export default Phase;