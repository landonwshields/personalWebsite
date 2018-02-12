import React, { Component } from 'react';
import '../styling/Skills.css';

export default class Skills extends Component {
  render() {
    return (
      <div className='skills'>
        <h2>
          Skills:
        </h2>
        <div className='languages'>
          <h4>
            Languages:
          </h4>
          <p>
            Javascript
            <br/>
            HTML
            <br/>
            CSS
          </p>
        </div>
        <div className='tools'>
          <h4>
            Tools:
          </h4>
          <p>
            Node.js
            <br/>
            Git/Github
            <br/>
            Express
            <br/>
            Bootstrap
            <br/>
            Handlebars.js
            <br/>
            Firebase
            <br/>
            PostgresQL
            <br/>
            Heroku
            <br/>
            Knex.js
            <br/>
            React
            <br/>
            React Native
            <br/>
            Pivotal Tracker
          </p>
        </div>
        <div className='techniques'>
          <h4>
            Techniques:
          </h4>
          <p>
            Agile
            <br/>
            TDD
            <br/>
            Pair Programming
            <br/>
            Responsive Design
            <br/>
          </p>
        </div>
      </div>
    );
  }
}
