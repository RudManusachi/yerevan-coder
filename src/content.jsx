const React = require('react');

module.exports = class _ extends React.Component {
  render() {

    let site_content_style =
	{
	  marginTop:'3em',
	  backgroundColor:'#d8d8d8',
	  opacity:'0.95',
	  height:'20em',
	  padding:'2em'
	};

    return (
      <div style={site_content_style}>
	Main Place to do the action
      </div>
    );
  }
};
