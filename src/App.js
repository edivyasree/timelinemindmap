import React from 'react';
import ManufacturingProcessTimeline from './components/ManufacturingProcessTimeline';
import ManufacturingProcessDiagram from './components/ManufacturingProcessDiagram';


function App() {
  return (
    <div className="App">
      <h1>Car Manufacturing Process</h1>
   <ManufacturingProcessTimeline/>
   {/* <ManufacturingProcessDiagram/> */}
    </div>
  );
}

export default App;