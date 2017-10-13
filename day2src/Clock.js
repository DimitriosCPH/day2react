import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),      
      this.props.sleepTime
    );
      console.log("I'm componentDidMount");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("I'm componentWillUnmount");
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {  	
    return (
      <div>
        <h1>{this.props.text}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;