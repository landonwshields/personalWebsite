import React, { Component } from 'react';
import '../styling/Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <a href='Home'
          onClick={this.props.goToHome} className='aTag'>
          Home
        </a>
        <a href='Education'
          onClick={this.props.goToEducation} className='aTag'>
          Education
        </a>
        <a href='Experience'
          onClick={this.props.goToExperience} className='aTag'>
          Experience
        </a>
        <a href='Projects'
          onClick={this.props.goToProjects} className='aTag'>
          Projects
        </a>
        <a href='Skills'
          onClick={this.props.goToSkills} className='aTag'>
          Skills
        </a>
      </div>
    )
  }
}
