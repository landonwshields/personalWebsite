import React, { Component } from 'react';
import logo from '../PersonalLogo.png';
import '../styling/App.css';

import Navbar from './Navbar.js'
import Education from './Education.js'
import Experience from './Experience.js'
import Projects from './Projects.js'
import Skills from './Skills.js'
import Home from './Home.js'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      homePage: true,
      educationData: false,
      experienceData: false,
      projectsData: false,
      skillsData: false
    }
  }

  goToHome = (e) => {
    console.log('success')
    this.setState({
      homePage: true,
      educationData: false,
      experienceData: false,
      projectsData: false,
      skillsData: false
    })
    e.preventDefault();
  }
  goToEducation = (e) => {
    console.log('success')
    this.setState({
      homePage: false,
      educationData: true,
      experienceData: false,
      projectsData: false,
      skillsData: false
    })
    e.preventDefault();
  }
  // goToHome = (e) => {
  //   console.log('success')
  //   this.setState({
  //     homePage: true,
  //     educationData: false,
  //     experienceData: false,
  //     projectsData: false,
  //     skillsData: false
  //   })
  //   e.preventDefault();
  // }
  // goToHome = (e) => {
  //   console.log('success')
  //   this.setState({
  //     homePage: true,
  //     educationData: false,
  //     experienceData: false,
  //     projectsData: false,
  //     skillsData: false
  //   })
  //   e.preventDefault();
  // }
  // goToHome = (e) => {
  //   console.log('success')
  //   this.setState({
  //     homePage: true,
  //     educationData: false,
  //     experienceData: false,
  //     projectsData: false,
  //     skillsData: false
  //   })
  //   e.preventDefault();
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Landon W Shields</h1>
        </header>
        <Navbar
          goToHome={this.goToHome.bind(this)}
          goToEducation={this.goToEducation.bind(this)}
        />
        <main className="main-content">
          {
            this.state.homePage ? <Home /> : null
          }
          {
            this.state.educationData ? <Education /> : null
          }
        </main>
      </div>
    );
  }
}
