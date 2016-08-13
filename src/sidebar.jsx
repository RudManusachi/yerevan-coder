const React = require('react');

module.exports = class _ extends React.Component {

  constructor(props) {
    super(props);
    this.story_click = this.story_click.bind(this);
    this.tech_background_click =
      this.tech_background_click.bind(this);
  }

  tech_background_click () {
    console.log("Clicked tech", this);
  }

  photos_click () {
    console.log("Clicked photo", this);
  }

  story_click() {
    console.log("Clicked story", this);
  }

  render() {
    let nav_style =
	{
	  opacity:'0.70',
	  backgroundColor:'#d8d8d8',
	  padding:'1em 1em 1em 1em'
	};
    let ul_style = {listStyleType:'none',
		    textAlign:'right'};

    let li_style = {marginBottom:'1em',
		    cursor:'pointer'};

    // onMouseOver={() => console.log(this)}

    return (
      <nav style={nav_style}>
	<ul style={ul_style}>
	  <li style={li_style}>
	    <p>Edgar</p>
	    <p>Aroutiounian</p>
	  </li>
	  <li style={li_style}>
	    <p onClick={this.story_click}
	       title={"Learn about me, my motivations"}>
	      My Story
	    </p>
	  </li>
	  <li style={li_style}>
	    <p title={"My computer programming background"}>
	      Tech Background
	    </p>
	  </li>
	  <li style={li_style}>
	    <p title={"Random photos I've taken in Armenia"}>
	      Photos
	    </p>
	  </li>
	  <li style={li_style}>
	    <p title={"What I'm trying to accomplish in Yerevan"}>
	      Mission in Yerevan
	    </p>
	  </li>
	  <li style={li_style}>
	    <p title={"Help me improve tech in Armenia"}>
	      Donate to the cause
	    </p>
	  </li>
	</ul>
      </nav>
    );
  }
};
