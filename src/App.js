import React from 'react';
import Search from './components/Search'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="info">
        <h1>Stock Lookup</h1>
        <Search/>
      </div>
      <div className="chart">

      </div>
      <div>
        <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
      </div>

    </div>
  );
}

export default App;
