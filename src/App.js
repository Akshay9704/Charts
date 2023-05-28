import React from 'react';
import Barchart from './Components/Barchart';
import Piechart from './Components/Piechart';

function App() {
  return (
    <div className="App">
      <div className="chartContainer">
        <Piechart />
      </div>
      <div className="chartContainer">
        <Barchart />
      </div>
    </div>
  );
}

export default App;
