import React from 'react';

const myImage = <img  src="images/1OTMjff.png"/>;

class Slider extends React.Component {	
	constructor(props){
		super(props);
		this.state = {}
	}

	render(){
		const imgStyle = {
			width: "500px"
		}
		const imgs = ["images/1OTMjff.png", "images/1ZfBkUl.jpg", "images/2JAnMz8.jpg"];
		const list = imgs.map((i) =>			
				<p><img style={imgStyle} src={i}/></p>		
		);
		
		return(
			<div className="slider">
				<h1>Hello World</h1>				
				{list}
			</div>
			) 
	}
}


export default Slider;