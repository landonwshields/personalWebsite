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
        <a href='Experience'>
          Experience
        </a>
        <a href='Projects'>
          Projects
        </a>
        <a href='Skills'>
          Skills
        </a>
      </div>
    )
  }
}
