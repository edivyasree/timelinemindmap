import React from 'react';
import Phase from '../components/Phase';
// import '../components/ManufacturingProcessTimeline.css';

function ManufacturingProcessTimeline() {
  return (
    <div className="timeline-mindmap">
      <Phase
        title="Research"
        details="External: B2C, Internal: B2B, Planning: PRD (Product Requirements Document), Specs"
      />
      <Phase
        title="Design"
        details="Hardware, Software"
      />
      <Phase
        title="Manufacturing"
        details="Material Production"
      />
      <Phase
        title="Sales/Marketing"
        details="Online, Dealership"
      />
    </div>
  );
}

export default ManufacturingProcessTimeline;