import React, { Component } from 'react';
import '../styling/Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <a href='Home' onClick={this.props.goToHome}>
          Home
        </a>
        <a href='Education' onClick={this.props.goToEducation}>
          Education
        </a>
        <a href='Experience' onClick={this.props.goToExperience}>
          Experience
        </a>
        <a href='Projects' onClick={this.props.goToProjects}>
          Projects
        </a>
        <a href='Skills' onClick={this.props.goToSkills}>
          Skills
        </a>
      </div>
    )
  }
}
