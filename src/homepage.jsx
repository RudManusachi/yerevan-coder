"use strict";

const React = require('react'),
      ReactDOM = require('react-dom'),
      SideBar = require('./sidebar.jsx'),
      Content = require('./content.jsx');

class HomePage extends React.Component {
  render() {
    let site_style =
	{
	  // opacity:'0.10',
	  display:'flex',
	  paddingLeft:'2em',
	  paddingTop:'2em',
	  paddingRight:'2em'
	};

    let ul_style =
	{
	  marginLeft:'3em',
	  listStyleType:'none'
	};

    let banner_style =
	{
	  opacity:'0.70',
	  backgroundColor:'#d8d8d8',
	  padding:'1em 1em 1em 1em'
	};

    return (
      <div style={site_style}>
	<SideBar/>
	<ul style={ul_style}>
	  <li>
	    <h3 style={banner_style}>
	      From San Francisco, USA to Yerevan, Armenia
	    </h3>
	  </li>

	  <li>
	    <Content/>
	  </li>
	</ul>
      </div>
    );
  }
};

ReactDOM.render(<HomePage/>,
		document.getElementById('react-container'));
