"use strict";

import React from 'react';

class SideBar extends React.Component  {
	render() {
		let style = {
			alignSelf: 'flexEnd',
			flexDirection: 'column',
			justifyContent: 'center',
			height: '500px',
			width: '150px',
			backgroundColor: 'rgba(225,135,40,0.2)',
			color: '#484848'

		};
		let listyle = {
			textAlign: 'center',
			justifyContent: 'spaceAround'
		}; 

		return (
			<div style={style}>
			<ul>
				<li style={listyle}>Home</li>
				<li style={listyle}>Add Event</li>
				<li style={listyle}>About</li>
			</ul>
			</div>

			)
	}
};


class Head extends React.Component {
	render() {
		let style = {
			flexDirection: 'row',
			justifyContent: 'center',
			height: '100px',
			width: '100%',
			backgroundColor: 'rgba(225,135,40,0.2)',
			color: '#484848'
		};

		return (
			<div style={style}>
			Hello, header.
			</div>
		);
	}
};


export {SideBar, Head};
