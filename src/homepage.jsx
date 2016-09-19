"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class HomePage extends React.Component {
  selected(e) {
    console.log(e);
    fetch('http://localhost:8080/add_event',
	  {method:'post', 
	   headers: {
	     'Accept': 'application/json',
	     'Content-Type': 'application/json'
	   },
	   body:JSON.stringify({hello:'Edgar'})})
      .then(res => {
	return res.text();
      })
      .then(data => console.log('Got back:' + data));
  }
  render() {
    let s = {height:'500px'};
    return (
      <div style={s}>
	<BigCalendar
	  selectable
	  onSelectEvent={this.selected.bind(this)}
	  events={[ {
	    'title': 'Long Event',
	    'allDay':true,
	    'start': new Date(2016, 8, 17),
	    'end': new Date(2016, 8, 20),
	    'desc': 'Big conference for important people'
	    
	  }]}
	  />
      </div>
    );
  }
};

ReactDOM.render(<HomePage/>,
		document.getElementById('react-container'));
