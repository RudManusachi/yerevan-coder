"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
 

class YCoder extends React.Component {
  constructor () {
    super();
    this.init_data_url =
      'http://localhost:8080/init_cal_data';
  }
  render() {


    return (
      <div>
	       <Header/>

      </div>
    );
  }
};

ReactDOM
  .render(<YCoder/>,
	  document.getElementById('react-container'));


/*
import TechCalendar from './calendar';
<TechCalendar data_url={this.init_data_url}/>
*/
