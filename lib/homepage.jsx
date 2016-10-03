"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import SubHead from './subhead';
import TechCalendar from './calendar';

class YCoder extends React.Component {
  constructor () {
    super();
    this.init_data_url =
      'http://localhost:8080/init_cal_data';
  }
  render() {
    let s = {
      display: 'flex',
	    flexWrap: 'wrap',
      width: '100%',
      height: '500px'
     };

    return (
      <div>
	<Header/>
  <SubHead/>
	<div style={s}>

	  <TechCalendar data_url={this.init_data_url}/>
	</div>
      </div>
    );
  }
};

ReactDOM
  .render(<YCoder/>,
	  document.getElementById('react-container'));
