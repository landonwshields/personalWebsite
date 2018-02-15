import React, { Component } from 'react';
import '../styling/Education.css';

export default class Education extends Component {
  render() {
    return (
      <div className='education'>
        <h2>
          Education:
        </h2>
        <h4>
          Galvanize
        </h4>
          <h5>
            August 2017 - February 2018
          </h5>
          <h5>
            Denver, CO
          </h5>
          <p>
            Web Development Immersive - web development program with a focus on JavaScript
          </p>
        <h4>
          University of Colorado
        </h4>
          <h5>
            August 2007 - May 2011
          </h5>
          <h5>
            Boulder, CO
          </h5>
          <p>
            Bachelor of Arts - Integrative Physiology
          </p>
        <h4>
          Front Range Community College
        </h4>
          <h5>
            August 2008 - August 2009
          </h5>
          <h5>
            Westminster, CO
          </h5>
          <p>
            Certificate - Pharmacy Technician (Honors)
          </p>
      </div>
    );
  }
}
