import React, { Component } from 'react';
import '../styling/Projects.css';

export default class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h2>
          Projects:
        </h2>
        <h4>
          Superior Learning Academy - Capstone
        </h4>
          <a href='https://github.com/landonwshields/sla'>
            Github Repo
          </a>
          <p>
            The easiest to update website available, even my mom can use it!
            <br />
            JavaScript, React, CSS, PostgresQL, Express, Node.js, knex.js, Heroku
          </p>
        <h4>
          Roofstops
        </h4>
          <a href='https://github.com/landonwshields/Roofstops'>
            Github Repo
          </a>
          <p>
            Roofstops is a new app to find rooftop bars and patios nearest you!
            <br />
            JavaScript, React Native, HTML, CSS
          </p>
        <h4>
          CLIQUE
        </h4>
          <a href='https://github.com/landonwshields/CLIQUE'>
            Github Repo
          </a>
          <p>
            A group sourced networking platform.
            <br />
            HTML, CSS, JavaScript, Postgresql, Express, Node.js, Handlebars.js, Knex.js, Heroku
          </p>
        <h4>
          Drug Dominate
        </h4>
          <a href='https://github.com/shieldsl/Q1-project-DrugDominate'>
            Github Repo
          </a>
          <p>
            An app that allows input of any two medications and it will inform the user of any interactions they may have.
            <br />
            HTML, CSS, JavaScript, Bootstrap, Firebase
          </p>
      </div>
    );
  }
}
