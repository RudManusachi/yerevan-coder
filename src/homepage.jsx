"use strict";

const React = require('react');

const NavBar = React.createClass({
  render() {
    let style = {listStyleType:"none"};
    let li_style = {display:'inline'};
    return (
      <nav>
	<ul style={style}>
	  <li style={li_style}> About </li>
	  <li style={li_style}> Writing </li>
	</ul>
      </nav>
    );
  }
});

const HomePage = React.createClass({
  render() {
    let style = {margin:0,
		 padding: 0,
		 backgroundColor: 'aliceblue'};
    return (
      <html>
	<head>
	  <title> yerevancoder.com </title>
	</head>
	<body style={style}>
	  <NavBar/>
	  <div>
	    <p> This is a sample Home Page </p>
	  </div>
	</body>
      </html>
    );
  }
});

module.exports = HomePage;
