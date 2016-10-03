"use strict";

import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export default
class TechCalendar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {cal_data: []};
    this.selected_date = this.selected_date.bind(this);
  }

  async componentDidMount() {
    let event_request = await fetch(this.props.data_url);
    let events = await event_request.json();
    this.setState({cal_data:events});
  }

  async selected_date(slot_info) {
    try {
      let req_opts = {
	method:'post',
	headers :{
	  'Accept':'application/json',
	  'Content-Type':'application/json'
	},
	body:JSON.stringify({
	  start:slot_info.start.toLocaleString(),
	  end:slot_info.end.toLocaleString()
	})
      };
      let request =
	  await fetch('http://localhost:8080/add_event',
		      req_opts);
      let reply = await request.json();
    } catch (ex) {
      console.error(ex);
    }

  }

  render () {
let cal = {
  width:'100%'
};



    return (
      <BigCalendar
        id={'downSize'}
        style={cal}
	selectable
	onSelectSlot={this.selected_date}
	events={this.state.cal_data}
	/>
    );
  }
};
