import React, { Component } from 'react';
import '../styling/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h4>
          LANDONWSHIELDS@GMAIL.COM
        </h4>
        <a href='https://www.linkedin.com/in/landonwshields/' className='aTag'>
          linkedin.com/in/landonwshields/
        </a>
        <a href='https://github.com/landonwshields' className='aTag'>
          github.com/landonwshields
        </a>
      </div>
    );
  }
}
