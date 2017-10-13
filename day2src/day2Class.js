import React from  'react';

class App extends React.Component {	
	constructor(props){
		super(props);
		this.state = {showText: true};

		setInterval(() => {
			this.setState({showText: !this.state.showText});
		}, 1000);
	}	
	render(){
		let display = this.state.showText ? this.props.text : ' '
		return (
			  <h2>{display}</h2>
			);
		
	}
}



export default App;

 