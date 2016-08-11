"use strict";

// const React = require('react'),
//       ReactDOM = require('react-dom');

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props. initial_count};
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({count:this.state.count + 1});
  }

  render() {
    return (
      <div onClick={this.tick}>
	Clicks: {this.state.count}
      </div>
    );
  }

};

Counter.propTypes = { initial_count : React.PropTypes.number};
Counter.defaultProps = { initial_count : 0};

ReactDOM.render(<Counter/>,
		document.getElementById('react-container'));
