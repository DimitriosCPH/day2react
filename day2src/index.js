import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './day2Class';
import Clock from './Clock';
import Toggle from './Toggle';
import Slider from './slider'
import Calculator from './calculator'
import ListDemo from './listDemo'
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import StateLift from './StateLift';

ReactDOM.render(
	//<Toggle  />, 
	//<Clock text="hello time is: " sleepTime="1000" />,
	//<ListDemo numbers={[1, 2, 3, 4, 5, 6]} />,
	//<NameForm />,
	//<EssayForm />,
	//<FlavorForm />,
	//<Reservation />,
	//<Calculator />,
	<StateLift />,
	document.getElementById('root'));

