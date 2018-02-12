import React, { Component } from 'react';
import logo from '../PersonalLogo.png';
import '../styling/App.css';

import Education from './Education.js'
import Experience from './Experience.js'
import Projects from './Projects.js'
import Skills from './Skills.js'

export default class App extends Component {
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
          <Education />
          <Experience />
          <Projects />
          <Skills />
        </main>
      </div>
    );
  }
}
