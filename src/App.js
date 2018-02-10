import React, { Component } from 'react';
import logo from './PersonalLogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Landon W Shields</h1>
        </header>
        <main className="main-content">
          <p className="App-intro">
            Look how cool I am...
          </p>
        </main>
      </div>
    );
  }
}

export default App;
