/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hooooola

          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;--
*/

import React from 'react';
import DosiVetForm from './DosiVetForm'; // Importa mi nuevo código

function App() {
  return (
    <div className="App">
      <DosiVetForm />
    </div>
  );
}

export default App;


