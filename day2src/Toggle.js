import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
   //this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }
  handleClick = () => { // with arrow notation i don't need to use them bind in line 9
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  

  render() {
  	const text = <p>Dimmitri is gay</p>;
    return (
    	<div>
	      <button onClick={this.handleClick}>
	        {this.state.isToggleOn ? 'ON' : 'OFF'}        
	      </button>
	      {this.state.isToggleOn ? '' : text}
	      <p></p>
      	</div>
    );
  }
}


export default Toggle;