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
      educationDisplay: false,
      experienceDisplay: false,
      projectsDisplay: false,
      skillsDisplay: false
    }
  }

  goToHome = (e) => {
    console.log('success')
    this.setState({
      homePage: true,
      educationDisplay: false,
      experienceDisplay: false,
      projectsDisplay: false,
      skillsDisplay: false
    })
    e.preventDefault();
  }
  goToEducation = (e) => {
    console.log('success')
    this.setState({
      homePage: false,
      educationDisplay: true,
      experienceDisplay: false,
      projectsDisplay: false,
      skillsDisplay: false
    })
    e.preventDefault();
  }
  goToExperience = (e) => {
    console.log('success')
    this.setState({
      homePage: false,
      educationDisplay: false,
      experienceDisplay: true,
      projectsDisplay: false,
      skillsDisplay: false
    })
    e.preventDefault();
  }
  goToProjects = (e) => {
    console.log('success')
    this.setState({
      homePage: false,
      educationDisplay: false,
      experienceDisplay: false,
      projectsDisplay: true,
      skillsDisplay: false
    })
    e.preventDefault();
  }
  goToSkills = (e) => {
    console.log('success')
    this.setState({
      homePage: false,
      educationData: false,
      experienceData: false,
      projectsData: false,
      skillsDisplay: true
    })
    e.preventDefault();
  }

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
          goToExperience={this.goToExperience.bind(this)}
          goToProjects={this.goToProjects.bind(this)}
          goToSkills={this.goToSkills.bind(this)}
        />
        <main className="main-content">
          {
            this.state.homePage ? <Home /> : null
          }
          {
            this.state.educationDisplay ? <Education /> : null
          }
          {
            this.state.experienceDisplay ? <Experience /> : null
          }
          {
            this.state.projectsDisplay ? <Projects /> : null
          }
          {
            this.state.skillsDisplay ? <Skills /> : null
          }
        </main>
      </div>
    );
  }
}
