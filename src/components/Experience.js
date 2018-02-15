import React, { Component } from 'react';
import '../styling/Experience.css';

export default class Experience extends Component {
  render() {
    return (
      <div className='experience'>
        <h2>
          Experience:
        </h2>
        <h4>
          Concentra Physical Therapy
        </h4>
        <h5>
          August 2015 - August 2017
          <br />
          Aurora, CO
          <br />
          Physical Therapy Technician
        </h5>
        <p>
          Assisted Physical Therapists with patient exercises, insurance and scheduling.
        </p>
        <h4>
          El Paso Children’s Hospital
        </h4>
        <h5>
          September 2011 - April 2015
          <br />
          El Paso, TX
          <br />
          Pediatric Pharmacy Technician / Chemotherapy Technician
        </h5>
        <p>
          Assisted Pharmacists by mixing IV’s, chemotherapy, and oral solutions.  Delivered medications to patient floors.
        </p>
        <h4>
          St. Anthony North Hospital
        </h4>
        <h5>
          June 2010 - May 2011
          <br />
          Westminster, CO
          <br />
          Pharmacy Technician
        </h5>
        <p>
          Assisted Pharmacists by mixing IV’s, and delivering patient medications
        </p>
      </div>
    );
  }
}
